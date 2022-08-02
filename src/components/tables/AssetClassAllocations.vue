<template>
    <ui-table :data="data" :wide="true" />
</template>
<script>
import UiTable from './UiTable.vue'
export default {
    components: { UiTable },
    data() {
        return {
            data: {
                headers: [
                    ['Asset Class', 0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
                ],
                boldColumns: [0],
                stickyLeftColumns: [0],
                data: [
                    [
                        'US Stocks',
                        0.4,
                        0.37,
                        0.33,
                        0.29,
                        0.26,
                        0.22,
                        0.19,
                        0.15,
                        0.11,
                        0.06,
                        0.0,
                    ],
                    [
                        'International Stocks',
                        0.29,
                        0.26,
                        0.24,
                        0.21,
                        0.18,
                        0.15,
                        0.11,
                        0.08,
                        0.06,
                        0.03,
                        0.0,
                    ],
                    [
                        'Bonds',
                        0,
                        0.1,
                        0.2,
                        0.3,
                        0.4,
                        0.5,
                        0.6,
                        0.7,
                        0.8,
                        0.9,
                        1,
                    ],
                    [
                        'REITs',
                        0.3,
                        0.27,
                        0.24,
                        0.2,
                        0.17,
                        0.13,
                        0.1,
                        0.07,
                        0.04,
                        0.02,
                        0.0,
                    ],
                ],
            },
        }
    },
}
</script>
