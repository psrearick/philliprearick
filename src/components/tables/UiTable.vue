<template>
    <div
        :class="
            (wide ? 'lg:-mx-24' : '') + ' ui-table overflow-auto max-h-screen'
        "
    >
        <table class="text-xs text-center overflow-x-scroll table-auto w-full">
            <thead class="sticky top-0 z-10">
                <tr v-for="(row, index) in data.headers" :key="index">
                    <th
                        v-for="(cell, cellIndex) in row"
                        :key="cellIndex"
                        :class="'font-bold bg-gray-200 ' + stickyCol(cellIndex)"
                    >
                        {{ cell }}
                    </th>
                </tr>
            </thead>
            <tbody v-if="data.data">
                <tr v-for="(row, index) in data.data" :key="index">
                    <td
                        v-for="(cell, cellIndex) in row"
                        :key="cellIndex"
                        :class="
                            boldCell(cellIndex) +
                            ' bg-gray-100 ' +
                            stickyCol(cellIndex)
                        "
                    >
                        {{ cell }}
                    </td>
                </tr>
            </tbody>

            <tbody
                v-for="(section, sectionIndex) in data.dataSections"
                :key="sectionIndex"
                class="border border-gray-600"
            >
                <tr v-for="(row, index) in section" :key="index">
                    <td
                        v-for="(cell, cellIndex) in row"
                        :key="cellIndex"
                        :class="
                            boldCell(cellIndex) +
                            ' bg-gray-100 ' +
                            stickyCol(cellIndex)
                        "
                    >
                        {{ cell }}
                    </td>
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
        },
    },
    methods: {
        boldCell: function (index) {
            if (!this.data.boldColumns) {
                return ''
            }

            if (this.data.boldColumns.indexOf(index) > -1) {
                return 'font-bold'
            }

            return ''
        },
        stickyCol: function (index) {
            const stickyL = this.data.stickyLeftColumns
            const stickyR = this.data.stickyRightColumns

            if (!stickyL && !stickyR) {
                return ''
            }

            if (stickyL && stickyL.indexOf(index) > -1) {
                return 'sticky left-0'
            }

            if (stickyR && stickyR.indexOf(index) > -1) {
                return 'sticky right-0'
            }

            return ''
        },
    },
}
</script>

<style scoped>
.ui-table th,
.ui-table td {
    white-space: nowrap;
    padding: 1rem 0.5rem;
}

.ui-table td {
    padding: 1rem;
}

/* .ui-table thead {
    position: sticky;
}
.ui-table thead {
    inset-block-start: 0;
} */
</style>
