<template>
    <div class="mt-1">
        <div>
            <ui-input-label :name="name" :label="label" :required="required" />
            <div class="mt-1 relative rounded-md shadow-sm">
                <div
                    v-if="before"
                    class="
                        absolute
                        inset-y-0
                        left-0
                        pl-3
                        flex
                        items-center
                        pointer-events-none
                        mr-4
                    "
                >
                    <span class="text-gray-500 sm:text-sm">
                        {{ before }}
                    </span>
                </div>
                <input
                    :id="name"
                    :type="getType()"
                    :name="name"
                    :class="
                        `
                        border
                        py-2
                        focus:ring-primary-500
                        focus:border-primary-500
                        block
                        w-full
                        px-4
                        sm:text-sm
                        border-gray-300
                        rounded-md
                        disabled:bg-gray-100
                    ` + (before ? ' pl-8' : '')
                    "
                    :placeholder="placeholder"
                    :autocomplete="autocomplete"
                    :required="required"
                    :autofocus="autofocus"
                    :pattern="pattern"
                    :disabled="disabled"
                    :value="currentValue"
                    :min="min"
                    :max="max"
                    :step="step"
                    @input="$emit('input', formatReturn($event.target.value))"
                    @blur="$emit('blur', formatReturn($event.target.value))"
                />
                <div
                    v-if="after"
                    class="
                        absolute
                        inset-y-0
                        right-0
                        pr-3
                        flex
                        items-center
                        pointer-events-none
                    "
                >
                    <span id="price-currency" class="text-gray-500 sm:text-sm">
                        {{ after }}
                    </span>
                </div>
            </div>
            <div v-if="errorMessage">
                <span class="text-red-500 text-xs">
                    {{ errorMessage }}
                </span>
            </div>
        </div>
    </div>
</template>

<script>
import UiInputLabel from './UiInputLabel';
export default {
    name: 'UiInput',
    components: { UiInputLabel },
    props: {
        value: {
            type: [String, Number, Object],
            default: () => {},
        },
        name: {
            type: String,
            default: '',
        },
        type: {
            type: String,
            default: 'text',
        },
        label: {
            type: String,
            default: '',
        },
        pattern: {
            type: String,
            default: '.*',
        },
        placeholder: {
            type: String,
            default: '',
        },
        required: {
            type: Boolean,
            default: false,
        },
        autofocus: {
            type: Boolean,
            default: false,
        },
        autocomplete: {
            type: String,
            default: '',
        },
        formatter: {
            type: Function,
            default: (value) => {
                return value;
            },
        },
        returnFormatter: {
            type: Function,
            default: (value) => {
                return value;
            },
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        min: {
            type: Number,
            default: null,
        },
        max: {
            type: Number,
            default: null,
        },
        step: {
            type: Number,
            default: 1,
        },
        before: {
            type: String,
            default: null,
        },
        after: {
            type: String,
            default: null,
        },
        errorMessage: {
            type: String,
            default: '',
        },
    },
    emits: ['input', 'blur'],
    computed: {
        currentValue() {
            if (!this.formatter) {
                return this.value;
            }
            return this.formatter(this.value);
        },
    },
    methods: {
        formatReturn(value) {
            return this.returnFormatter(value);
        },
        focus() {
            this.$refs.input.focus();
        },
        getClass() {
            let thisClass =
                'w-full appearance-none block px-3 py-2 border border-gray-300 shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm';
            if (this.type === 'currency') {
                return 'col-span-7 rounded-r-md ' + thisClass;
            }
            if (this.type === 'percent') {
                return 'col-span-7 rounded-l-md ' + thisClass;
            }
            return 'col-span-8 rounded-md ' + thisClass;
        },
        getType() {
            if (this.type === 'currency' || this.type === 'percent') {
                return 'text';
            }
            return this.type;
        },
    },
};
</script>
