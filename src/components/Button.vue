<template>
    <div>
        <g-link v-if="href" :to="href">
            <button :class="'my-2 py-2 px-4 rounded' + getStyles()">
                {{ text }}
            </button>
        </g-link>
        <button v-else :class="'my-2 py-2 px-4 rounded' + getStyles()">
            {{ text }}
        </button>
    </div>
</template>

<script>
export default {
    props: {
        buttonStyle: String,
        text: String,
        href: String,
    },
    methods: {
        getStyles() {
            let styles = `
                border border-primary-400
                text-primary-400
                hover:border-primary-600
                hover:text-primary-600
            `

            if (this.buttonStyle === 'secondary') {
                styles = `
                    border border-secondary-400
                    text-secondary-400
                    hover:border-secondary-600
                    hover:text-secondary-600
                `
            }

            return styles
        },
    },
}
</script>
