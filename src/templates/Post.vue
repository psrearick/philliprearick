<template>
    <Layout title="test">
        <template #header>
            <div class="pb-5">
                <h1 v-html="$page.post.title" />
                <span class="text-sm text-gray-500">
                    {{ $page.post.summary }}
                </span>
            </div>
        </template>
        <div class="flex flex-wrap gap-4 my-4">
            <g-link
                v-for="(category, catIndex) in $page.post.categories"
                :key="catIndex"
                class="
                    text-xs
                    border border-blue-400
                    rounded-full
                    py-1
                    px-4
                    hover:no-underline
                    hover:bg-gray-200
                    hover:text-blue-600
                    hover:border-blue-600
                "
                :to="category.path"
                >{{ category.title }}</g-link
            >
        </div>
        <div class="flex gap-12 mb-6">
            <div>
                <p class="text-xs text-gray-500">Published On</p>
                <p class="text-sm font-bold -my-3">{{ $page.post.date }}</p>
            </div>
            <div>
                <p class="text-xs text-gray-500">Read Time</p>
                <p class="text-sm font-bold -my-3">
                    {{ $page.post.timeToRead }} minutes
                </p>
            </div>
        </div>
        <figure v-if="$page.post.image" class="flex flex-col">
            <g-image
                :alt="$page.post.image.alt"
                :src="$page.post.image.path"
                class="mb-2"
            />
            <figcaption
                class="self-center image-caption mb-15"
                v-html="$page.post.image.caption"
            />
        </figure>
        <!-- <div v-html="$page.post.content" /> -->
        <VueRemarkContent />
    </Layout>
</template>

<page-query>
query Post($id: ID!) {
    post: post(id: $id) {
        title
        content
        categories {
            title
            path
        }
        timeToRead
        date(format: "MMMM D, Y")
        path
        summary
        image {
            path
            caption
            alt
        }
    }
}
</page-query>

<script>
import SEO from '../mixins/SEO.vue'

export default {
    mixins: [SEO],
}
</script>
