<template>
    <Layout>
        <h1 v-html="$page.post.title" />
        <div class="flex gap-4 my-4">
            <g-link
                v-for="(category, catIndex) in $page.post.categories"
                :key="catIndex"
                class="text-xs border border-blue-400 rounded-full py-1 px-4 hover:no-underline hover:bg-gray-200 hover:text-blue-600 hover:border-blue-600"
                :to="category.path"
            >{{ category.title }}</g-link>
        </div>
        <div class="flex gap-12">
            <div>
                <p class="text-xs text-gray-500">Published On</p>
                <p class="text-sm font-bold">{{ $page.post.date }}</p>
            </div>
            <div>
                <p class="text-xs text-gray-500">Read Time</p>
                <p class="text-sm font-bold">{{ $page.post.timeToRead }} minutes</p>
            </div>
        </div>
        <div v-html="$page.post.content" />
    </Layout>
</template>

<page-query>
query ($id: ID!) {
  post(id: $id) {
    title
    content
    categories { title, path }
    timeToRead
    date (format: "MMMM D, Y")
  }
}
</page-query>