export default cachedEventHandler(async () => {
	const cases = await $fetch('/api/posts')
	const blogs = await $fetch('/api/blogs')

	return [ ...cases, ...blogs ].map((p, index) => {
		if(cases.length <= index) {
			return { loc: `/blog/${p.id}`, lastmod: p.placed_at };
		} else {
			return { loc: `/estateDetail/${p.id}`, lastmod: p.placed_at };
		}
	});
},
{
	name: "sitemap-dynamic-urls",
	maxAge: 60 * 10, // cache URLs for 10 minutes
}
);
