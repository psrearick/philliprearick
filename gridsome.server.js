// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {
  api.loadSource(actions => {

    //Create a new "categories" collection
    const categories = actions.addCollection({
      typeName: 'category'
    })

    //Get all the posts (which already exist from the vue-remark plugin)
    const allPosts = actions.getCollection('Post')._collection.data

    //Loop over the posts and add their categories to an array
    let allPostsCategories = []
    allPosts.forEach(post => allPostsCategories.push(...post.categories))

    //Filter out duplicates
    const uniqueCategories = new Set(allPostsCategories)

    //Finally, add each category as a data node, with an array of the matching posts
    uniqueCategories.forEach(category => {
      categories.addNode({
        title: category,
        posts: allPosts.filter(post => post.categories.includes(category))
      })
    })
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })
}
