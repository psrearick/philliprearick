<template>
    <Layout>
        <div class="md:flex gap-8">
            <div class="flex-1">
                <h2>Recent Posts</h2>
                <div class="flex flex-col gap-8 mb-8">
                    <div v-for="(post, index) in posts" :key="index">
                        <g-link :to="post.path">
                            <g-image
                                :alt="post.image.alt"
                                :src="post.image.path"
                                class="mb-2 h-64 object-cover rounded-md"
                            />
                        </g-link>
                        <div class="pb-4">
                            <div class="flex-1">
                                <g-link
                                    :to="post.path"
                                    class="text-xl flex-1"
                                    >{{ post.title }}</g-link
                                >
                            </div>
                            <div>
                                <div class="text-gray-500 text-xs">
                                    {{ post.date }}
                                </div>
                                <p class="text-sm">{{ post.summary }}</p>
                                <div class="flex gap-x-4 gap-y-1 flex-wrap">
                                    <g-link
                                        v-for="(
                                            category, catIndex
                                        ) in post.categories"
                                        :key="catIndex"
                                        class="text-xs"
                                        :to="category.path"
                                        >{{ category.title }}</g-link
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <p class="text-sm text-gray-500">
                    See more posts on my <g-link to="/blog">Blog</g-link>
                </p>
            </div>
            <div class="md:w-1/3 mt-8 md:mt-0">
                <div class="bg-gray-50 p-4 shadow-lg rounded-lg">
                    <g-image
                        alt="Phillip Rearick"
                        src="../resources/images/IMG_0852.JPG"
                        class="rounded-full w-2/3 mx-auto"
                    />
                    <h2 class="text-center">Hi, I'm Phil!</h2>
                    <p>
                        I am a software developer, blogger, and stock trader in
                        Columbus, Ohio. While I do not have a formal education
                        in finance, personal finance is a topic that I have
                        extensively researched. I love digging into the numbers
                        and learning new strategies for optimizing my finances.
                        Becoming more financially responsible does not need to
                        be boring or scary. It's not only for those with degrees
                        and fancy titles. Anyone can do it. It's something I
                        have learned on my own and you can too!
                    </p>
                </div>
            </div>
        </div>
    </Layout>
</template>

<script>
export default {
    metaInfo: {
        title: 'Home',
    },
    computed: {
        posts() {
            return this.$page.posts.edges.map((edge) => edge.node)
        },
    },
}
</script>

<page-query>
query {
    posts: allPost(sortBy: "date", order: DESC, limit: 3) {
        edges {
            node {
                title
                timeToRead
                categories {
                    title
                    id
                    path
                }
                summary
                date(format: "MMMM D, Y")
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
