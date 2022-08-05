<template>
    <Layout @allPosts="setPosts">
        <template #header>
            <div>
                <h1>All Posts</h1>
            </div>
        </template>
        <BlogList :posts="posts" />
    </Layout>
</template>

<script>
import BlogList from '../components/BlogList.vue'
import AllPosts from '../mixins/AllPosts.vue'

export default {
    metaInfo: {
        title: 'Blog',
    },
    mixins: [AllPosts],
    components: { BlogList },
}
</script>
