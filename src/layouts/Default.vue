<template>
    <div class="flex flex-col min-h-full">
        <header class="bg-slate-300">
            <div
                class="
                    w-full
                    flex
                    justify-between
                    items-center
                    my-2
                    h-20
                    max-w-4xl
                    mx-auto
                    px-5
                    md:px-10
                    lg:px-5
                "
            >
                <strong>
                    <g-link
                        to="/"
                        class="
                            text-gray-800
                            hover:no-underline
                            hover:text-gray-800
                        "
                    >
                        <g-image
                            alt="Logo"
                            src="~/favicon.png"
                            width="45"
                            class="mx-auto"
                        />
                        {{ $static.metadata.siteName }}
                    </g-link>
                </strong>
                <nav class="nav">
                    <g-link class="ml-4" to="/">Home</g-link>
                    <!-- <g-link class="ml-4" to="/about/">About</g-link> -->
                    <g-link class="ml-4" to="/blog">Blog</g-link>
                    <g-link class="ml-4" to="/retirement-calculator">
                        Calculators
                    </g-link>
                </nav>
            </div>
        </header>
        <div class="bg-slate-300">
            <div class="max-w-4xl mx-auto px-5 md:px-10 lg:px-5">
                <slot name="header" />
            </div>
        </div>
        <div
            class="
                main
                w-full
                flex-1
                max-w-4xl
                mx-auto
                px-5
                md:px-10
                lg:px-5
                py-8
            "
        >
            <slot />
        </div>
        <div class="py-8 bg-slate-300 mt-4">
            <div class="text-sm text-gray-500 w-3/4 mx-auto">
                While I enjoy researching investing and finance-related data, I
                am not a financial professional. I have no formal financial
                education and am not a financial advisor, portfolio manager, or
                accountant. The information on this website is for informational
                and recreational purposes only. Therefore, the provided data
                does not constitute financial, investment, or tax advice.
                Investment products discussed (ETFs, index funds, etc.) are for
                illustrative purposes only. It is not a recommendation to buy,
                sell, or otherwise transact in any of the products mentioned.
                Past performance does not guarantee future returns. Some content
                may contain affiliate or referral links. I only feature services
                and apps that I use.
            </div>
        </div>
    </div>
</template>

<static-query>
query {
    metadata {
        siteName
    }
    posts: allPost(sortBy: "date", order: DESC) {
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
</static-query>

<script>
// ...

export default {
    metaInfo() {
        return {
            meta: [
                {
                    key: 'author',
                    name: 'author',
                    content: this.$static.metadata.author,
                },
                // { key: 'twitter:site', name: 'twitter:site', content: this.$static.metadata.twitter.site },
                // { key: 'twitter:creator', name: 'twitter:creator', content: this.$static.metadata.twitter.creator }
            ],
        };
    },
    props: {
        title: String,
    },
    created() {
        this.$emit('allPosts', this.$static.posts);
    },
};
</script>
