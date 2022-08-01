<template>
    <Layout>
        <template #header>
            <div class="flex justify-between">
                <h1 v-html="$page.category.title" />
                <div class="flex flex-col justify-center">
                    <p class="text-sm">
                        <g-link to="/blog" class="hover:no-underline border border-blue-400 rounded px-4 py-2 hover:border-blue-600 hover:text-blue-600">All Posts</g-link>
                    </p>
                </div>
            </div>
        </template>

        <blog-list :posts="posts" />
    </Layout>
</template>

<script>
import BlogList from '../components/BlogList.vue';
export default {
  components: { BlogList },
    metaInfo() {
        return { title: this.$page.category.title };
    },
    computed: {
        posts() {
            return this.$page.category.belongsTo.edges.map((edge) => edge.node);
        },
    }
};
</script>


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
                            timeToRead
                            categories { title, id, path }
                            image {
                                path
                                caption
                                alt
                            }
                        }
                    }
                }
        }
    }
}
</page-query>