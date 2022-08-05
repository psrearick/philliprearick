<script>
export default {
    data() {
        return {
            posts: [],
            latestPostCount: 3,
        }
    },

    computed: {
        latestPosts() {
            return this.posts.slice(0, this.latestPostCount)
        },
    },

    created() {
        this.$mitt.on('requestPost', (request) => {
            if (request.title) {
                const post = this.posts.filter(
                    (post) => post.title === request.title
                )[0]

                this.$mitt.emit(request.uuid, post)
            }
        })
    },

    methods: {
        setPosts(posts) {
            this.posts = posts.edges.map((post) => post.node)
        },
    },
}
</script>
