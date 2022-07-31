<template>
    <div :class="(wide ? 'lg:-mx-24' : '') + ' ui-table overflow-auto'">
        <table class="text-xs text-center my-4 overflow-x-scroll table-auto w-full">
            <thead>
                <tr v-for="(row, index) in data.headers" :key="index">
                    <th v-for="(cell, cellIndex) in row" :key="cellIndex" class="font-bold">{{ cell }}</th>
                </tr>
            </thead>

            <tbody v-if="data.data">
                <tr v-for="(row, index) in data.data" :key="index">
                    <td v-for="(cell, cellIndex) in row" :key="cellIndex">{{ cell }}</td>
                </tr>
            </tbody>

            <tbody v-for="(section, sectionIndex) in data.dataSections" :key="sectionIndex" class="border border-gray-600">
                <tr v-for="(row, index) in section" :key="index">
                    <td v-for="(cell, cellIndex) in row" :key="cellIndex" :class="boldCell(cellIndex)">{{ cell }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    props: {
        data: {
            type: Object,
            default: () => ({}),
        },
        wide: {
            type: Boolean,
            default: false,
        }
    },
    methods: {
        boldCell: function (index) {
            if (!this.data.boldColumns) {
                return '';
            }

            if (this.data.boldColumns.indexOf(index) > -1) {
                return 'font-bold';
            }

            return '';
        }
    },
}
</script>

<style scoped>
.ui-table th,
.ui-table td {
    white-space: nowrap;
    padding: 0 0.5rem;
}

.ui-table td {
    padding: 1rem;
}
</style>