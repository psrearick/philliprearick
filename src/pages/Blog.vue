<template>
    <Layout>
        <template #header>
            <div>
                <h1>All Posts</h1>
            </div>
        </template>
        <BlogList :posts="posts" />
    </Layout>
</template>

<script>
import BlogList from '../components/BlogList.vue';
export default {
    metaInfo: {
        title: "Blog",
    },
    components: { BlogList },
    computed: {
        posts() {
            return this.$page.posts.edges.map((edge) => edge.node);
        },
    }
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
                image {
                    path
                    caption
                    alt
                }
            }
        }
    }
}
</page-query>