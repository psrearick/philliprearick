<template>
    <div class="px-4 md:px-8 my-8">
        <div class="flex bg-white rounded-md shadow-md">
            <g-link :to="post.path" class="w-1/4 hidden md:block">
                <g-image
                    :alt="post.image.alt"
                    :src="post.image.path"
                    class="object-cover rounded-l-md"
                />
            </g-link>
            <div class="flex-1 flex flex-col justify-center text-center">
                <div class="p-2">
                    <g-link :to="post.path">
                        <p
                            class="
                                text-blue-500
                                hover:text-blue-800
                                cursor-pointer
                            "
                        >
                            {{ post.title }}
                        </p>
                        <p class="text-sm text-gray-500">{{ post.summary }}</p>
                    </g-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid'

export default {
    props: {
        title: String,
    },

    data() {
        return {
            post: {},
        }
    },

    created() {
        const uuid = uuidv4()

        this.$mitt.on(uuid, (response) => {
            this.post = response
        })

        this.$mitt.emit('requestPost', { title: this.title, uuid: uuid })
    },
}
</script>
