export default cachedEventHandler(async () => {
	let datas = await $fetch('/api/posts')

	return datas.map((p: { id: any; placed_at: any; }) => {
		return { loc: `/estateDetail/${p.id}`, lastmod: p.placed_at, priority: 1.0, discoverImages: false };
	});

	// const [
	//   posts,
	//   pages,
	//   products
	// ] = await Promise.all([
	//   $fetch('/api/posts'),
	//   $fetch('/api/pages'),
	//   $fetch('/api/products')
	// ])
	// return [...posts, ...pages, ...products].map((p) => {
	//   return { loc: p.url, lastmod: p.updatedAt }
	// })
	// const posts = await $fetch('/api/posts')

	// return [...posts].map(p => {
	//       return { loc: p.id, lastmod: p.placed_at }
	// })
},
{
	name: "sitemap-dynamic-urls",
	maxAge: 60 * 10, // cache URLs for 10 minutes
}
);
