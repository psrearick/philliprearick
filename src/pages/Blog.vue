<template>
    <Layout>
        <h1 class="mb-4">Recent Posts</h1>
        <div class="md:grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div v-for="(edge, index) in $page.posts.edges" :key="index" class="my-2 flex flex-col bg-white p-4 rounded-md shadow-md">
            <div class="flex-1">
                <g-link :to="edge.node.path" class="text-xl flex-1">{{ edge.node.title }}</g-link>
            </div>
                <div>
                    <div class="text-gray-500 text-xs">
                    {{ edge.node.date }}
                    </div>
                    <p class="text-sm">{{ edge.node.summary }}</p>
                    <div class="flex gap-x-4 gap-y-1 flex-wrap">
                        <g-link
                            v-for="(category, catIndex) in edge.node.categories"
                            :key="catIndex"
                            class="text-xs"
                            :to="category.path"
                        >{{ category.title }}</g-link>
                    </div>
                </div>
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