<template>
    <Layout>
        <h1 v-html="$page.category.title" />
        <div v-for="(post, index) in $page.category.belongsTo.edges" :key="index" class="my-2">
            <g-link :to="post.node.path" class="text-xl">{{ post.node.title }}</g-link>
            <p class="text-sm">{{ post.node.summary }}</p>
        </div>
    </Layout>
</template>

<page-query>
query Category ($id: ID!) {
    category(id: $id) {
        title
        belongsTo {
            totalCount
                edges {
                    node {
                        ...on Post {
                            title
                            date (format: "MMMM D, Y")
                            path
                            summary
                        }
                    }
                }
        }
    }
}
</page-query>