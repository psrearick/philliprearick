<template>
    <ui-table :data="data" :wide="true" />
</template>
<script>
import UiTable from './UiTable.vue';
export default {
    components: { UiTable },
    data() {
        return {
            data: {
                headers: [['Asset Class', 'CAGR', 'Standard Deviation']],
                data: [
                    ['US Stock Market', '0.806', '0.418'],
                    ['US Large Cap', '0.860', '0.499'],
                    ['US Mid Cap', '1.000', '0.354'],
                    ['US Small Cap', '0.847', '0.062'],
                    ['Global ex-US Stock Market', '0.280', '0.189'],
                    ['Intl Developed ex-US Market', '0.336', '0.292'],
                    ['International ex-US Small Cap', '0.722', '0.167'],
                    ['Emerging Markets', '0.600', '0.028'],
                    ['Short Term Treasury', '0.050', '1.00'],
                    ['Intermediate Term Treasury', '0.289', '0.806'],
                    ['Long Term Treasury', '0.562', '0.580'],
                    ['Total US Bond Market', '0.221', '0.849'],
                    ['TIPS', '0.222', '0.862'],
                    ['Short-Term Investment Grade', '0.168', '0.934'],
                    ['Global Bonds', '0.424', '0.724'],
                    ['Corporate Bonds', '0.277', '0.834'],
                    ['High Yield Corporate Bonds', '0.509', '0.697'],
                    ['REIT', '0.755', '0.034'],
                    ['Gold', '0.269', '0.278'],
                ],
            },
        };
    },
};
</script>
