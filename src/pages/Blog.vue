<template>
    <Layout>
        <h1 class="mb-4">Recent Posts</h1>
        <div v-for="(edge, index) in $page.posts.edges" :key="index" class="my-2">
            <g-link :to="edge.node.path" class="text-xl">{{ edge.node.title }}</g-link>
            <p class="text-sm">{{ edge.node.summary }}</p>
            <div class="flex gap-4">
                <g-link
                    v-for="(category, catIndex) in edge.node.categories"
                    :key="catIndex"
                    class="text-xs"
                    :to="category.path"
                >{{ category.title }}</g-link>
            </div>
        </div>
    </Layout>
</template>

<script>
export default {
    metaInfo: {
        title: "Blog",
    },
};
</script>

<page-query>
query {
    posts: allPost(sortBy: "date", order: DESC) {
        edges {
            node {
                title
                timeToRead
                categories { title, id, path }
                summary
                date (format: "MMMM D, Y")
                path
            }
        }
    }
}
</page-query>