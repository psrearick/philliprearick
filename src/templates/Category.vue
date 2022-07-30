<template>
    <Layout>
        <h1 v-html="$page.category.title" />
        <div v-for="(post, index) in $page.category.posts" :key="index" class="my-2">
            <g-link :to="post.path" class="text-xl">{{ post.title }}</g-link>
            <p class="text-sm">{{ post.summary }}</p>
            <div class="flex gap-4">
                <g-link
                    v-for="(category, catIndex) in post.categories"
                    :key="catIndex"
                    class="text-xs"
                    :to="category.path"
                >{{ category.title }}</g-link>
            </div>
        </div>
    </Layout>
</template>

<page-query>
query ($id: ID!) {
    category(id: $id) {
        title
        posts {
            title
            summary
            date (format: "MMMM D, Y")
            path
        }
    }
}
</page-query>