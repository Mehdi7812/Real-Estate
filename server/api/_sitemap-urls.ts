export default cachedEventHandler(async () => {
	const cases = await $fetch('/api/posts')
	const blogs = await $fetch('/api/blogs')

	return [ ...cases, ...blogs ].map((p: { id: any; placed_at: any; }, index) => {
		if(index >= 6) {
			return { loc: `/blog/${p.id}`, lastmod: p.placed_at };
		}
		return { loc: `/estateDetail/${p.id}`, lastmod: p.placed_at };
	});
},
{
	name: "sitemap-dynamic-urls",
	maxAge: 60 * 10, // cache URLs for 10 minutes
}
);
