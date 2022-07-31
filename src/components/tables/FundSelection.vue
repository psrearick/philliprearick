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
                headers: [['Asset Class', 'Category', 'Name', 'Ticker', 'Expense Ratio', 'Yield', 'Notes']],
                boldColumns: [0],
                stickyLeftColumns: [3],
                data: [
                    ['Stocks', 'US Stock Market', 'Vanguard Total Stock Market ETF', 'VTI', '0.03%', '1.56%', 'Best Total Stock Market ETF'],
                    ['Stocks', 'US Stock Market', 'Vanguard High Dividend Yield ETF', 'VYM', '0.06%', '3.04%', 'Best Total Stock Market ETF for high-yield; twice the expense ratio of VTI'],
                    ['Stocks', 'US Large Cap', 'Vanguard Growth ETF', 'VUG', '0.04%', '0.63%', 'Best US Large Cap ETF'],
                    ['Stocks', 'US Large Cap', 'Invesco QQQ Trust ETF', 'QQQ', '0.20%', '0.74%', 'Great growth large cap ETF'],
                    ['Stocks', 'US Mid Cap', 'iShares Morningstar Mid-Cap Growth ETF', 'IMCG', '0.06%', '0.83%', 'Best US Mid Cap ETF'],
                    ['Stocks', 'US Mid Cap', 'Vanguard Mid-Cap Growth ETF', 'VOT', '0.07%', '0.66%', 'Another good US Mid Cap ETF'],
                    ['Stocks', 'US Small Cap', 'iShares Morningstar Small-Cap Growth ETF', 'ISGC', '0.06%', '0.92%', 'Best US Small Cap ETF'],
                    ['Stocks', 'US Small Cap', 'Vanguard Small-Cap Growth ETF', 'VBK', '0.07%', '0.58%', 'Another good US Small Cap ETF'],
                    ['International Stocks', 'Global ex-US Stock Market', 'iShares International Select Div ETF', 'IDV', '0.49%', '6.79%', 'Best High-Yield International Stock ETF, high expense ratio, high volatility'],
                    ['International Stocks', 'Intl Developed ex-US Market', 'Vanguard FTSE Developed Markets ETF', 'VEA', '0.05%', '3.89%', 'Best international market ETF'],
                    ['International Stocks', 'Emerging Markets', 'Vanguard FTSE Emerging Markets ETF', 'VWO', '0.08%', '3.35%', 'Best emerging markets ETF'],
                    ['REIT', 'REIT', 'iShares Core US REIT ETF', 'USRT', '0.08%', '2.73%', 'Best REIT option'],
                    ['Bonds', 'Preferred Stock', 'iShares Preferred and Income Securities ETF', 'PFF', '0.46%', '5.61%', 'Focused on prefered stocks, high expense ratio, high yield, only use to increase yield'],
                    ['Bonds', 'Preferred Stock', 'Invesco Preferred ETF', 'PGX', '0.51%', '5.74%', 'Focused on prefered stocks, high expense ratio, high yield, only use to increase yield'],
                    ['Bonds', 'Short Term Treasury', 'Vanguard Short-Term Treasury ETF', 'VGSH', '0.04%', '2.96%', 'Best short-term treasury ETF'],
                    ['Bonds', 'Intermediate Term Treasury', 'Vanguard Intmdt-Term Trs ETF', 'VGIT', '0.04%', '3.16%', 'Best intermetiate-term treasury ETF'],
                    ['Bonds', 'Long Term Treasury', 'Vanguard Long-Term Treasury ETF', 'VGLT', '0.04%', '3.37%', 'Best long-term treasury ETF'],
                    ['Bonds', 'Total US Bond Market', 'Vanguard Total Bond Market ETF', 'BND', '0.03%', '3.39%', 'Total bond market, a great option for the bond portion of your portfolio'],
                    ['Bonds', 'TIPS', 'Vanguard Short-Term Infl-Prot Secs ETF', 'VTIP', '0.04%', '2.26%', 'Best TIPS ETF'],
                    ['Bonds', 'Global Bonds', 'Vanguard Total International Bond ETF', 'BNDX', '0.07%', '2.16%', 'Best International bond ETF'],
                    ['Bonds', 'Short-Term Investment Grade', 'iShares 1-5 Year invmt Grd Corp Bd ETF', 'IGSB', '0.06%', '4.14%', 'Good short-term bond ETF'],
                    ['Bonds', 'Corporate Bonds', 'Vanguard Total Corporate Bond ETF', 'VTC', '0.04%', '2.77%', 'Best corporate bond ETF'],
                    ['Bonds', 'High Yield Corporate Bonds', 'Vanguard Interm-Term Corp Bd ETF', 'VCIT', '0.04%', '4.73%', 'Best high-yield corporate bond ETF'],
                ],
            },
        };
    }
}
</script>

