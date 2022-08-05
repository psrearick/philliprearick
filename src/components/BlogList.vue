<template>
    <div class="md:grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div
            v-for="(post, index) in posts"
            :key="index"
            class="my-2 flex flex-col bg-white rounded-md shadow-md"
        >
            <g-link :to="post.path">
                <g-image
                    :alt="post.image.alt"
                    :src="post.image.path"
                    class="mb-2 h-48 object-cover rounded-t-md"
                />
            </g-link>
            <div class="p-4">
                <div class="flex-1">
                    <g-link :to="post.path" class="text-xl flex-1">{{
                        post.title
                    }}</g-link>
                </div>
                <div>
                    <div class="text-gray-500 text-xs">
                        {{ post.date }}
                    </div>
                    <p class="text-sm">{{ post.summary }}</p>
                    <div class="flex gap-x-4 gap-y-1 flex-wrap">
                        <g-link
                            v-for="(category, catIndex) in post.categories"
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
</template>

<script>
export default {
    props: {
        posts: Array,
    },
};
</script>
