<template>
    <ui-table :data="data" :wide="true" />
</template>
<script>
import UiTable from './UiTable.vue';
export default {
    components: {UiTable},
    data() {
        return {
            data: {
                headers: [['Asset Class', 'Name', 'Ticker', 'IVV', 'IJH', 'IJR', 'EFA', 'SCZ', 'EEM', 'SHY', 'IEF', 'TLT', 'TIP', 'LQD', 'VNQ', 'GLD', 'DBC']],
                data: [
                    ['U.S. Large-Company (“Large-Cap”) Stocks', 'iShares Core S&P 500 ETF', 'IVV', '1.00', '0.94', '0.89', '0.89', '0.88', '0.78', '-0.3', '-0.25', '-0.24', '0.27', '0.38', '0.74', '0.96', '0.52'],
                    ['U.S. Medium-Company (“Mid-Cap”) Stocks', 'iShares Core S&P Mid-Cap ETF', 'IJH', '0.94', '1.00', '0.96', '0.85', '0.86', '0.79', '-0.33', '-0.29', '-0.29', '0.27', '0.36', '0.76', '0.07', '0.56'],
                    ['U.S. Small-Company (“Small-Cap”) Stocks', 'iShares Core S&P Small-Cap ETF', 'IJR', '0.89', '0.96', '1.00', '0.80', '0.81', '0.73', '-0.32', '-0.33', '-0.32', '0.18', '0.30', '0.74', '-0.01', '0.52'],
                    ['International Developed Large-Company (“Large-Cap”) Stocks', 'iShares MSCI EAFE ETF', 'EFA', '0.89', '0.85', '0.80', '1.00', '0.97', '0.88', '-0.23', '-0.19', '-0.21', '0.32', '0.45', '0.71', '0.12', '0.59'],
                    ['International Developed Small-Company (“Small-Cap”) Stocks', 'iShares MSCI EAFE Small-Cap ETF', 'SCZ', '0.88', '0.86', '0.81', '0.97', '1.00', '0.86', '-0.26', '-0.21', '-0.23', '0.35', '0.44', '0.70', '0.15', '0.60'],
                    ['International Emerging-Market Stocks', 'iShares MSCI Emerging Markets ETF', 'EEM', '0.78', '0.79', '0.73', '0.88', '0.86', '1.00', '-0.21', '-0.17', '-0.21', '0.38', '0.43', '0.63', '0.24', '0.60'],
                    ['U.S. Treasury Securities Short-Term', 'iShares 1-3 Year Treasury Bond ETF', 'SHY', '0.30', '-0.33', '-0.32', '-0.23', '-0.26', '-0.21', '1.00', '0.74', '0.56', '0.36', '0.29', '-0.14', '0.28', '-0.31'],
                    ['U.S. Treasury Securities Intermediate', 'iShares 7-10 Year Treasury Bond ETF', 'IEF', '-0.25', '-0.29', '-0.33', '-0.19', '-0.21', '-0.17', '0.74', '1.00', '0.91', '0.62', '0.52', '-0.01', '0.35', '-0.34'],
                    ['U.S. Treasury Securities Long-Term', 'iShares 20+ Year Treasury Bond ETF', 'TLT', '-0.24', '-0.29', '-0.32', '-0.21', '-0.23', '-0.21', '0.56', '0.91', '1.00', '0.53', '0.51', '0.01', '0.25', '-0.39'],
                    ['U.S. Inflation Protected Bonds', 'iShares TIPS Bond ETF', 'TIP', '0.27', '0.27', '0.18', '0.32', '0.35', '0.38', '0.36', '0.62', '0.53', '1.00', '0.67', '0.40', '0.52', '0.24'],
                    ['U.S. Investment-Grade Corporate Bonds', 'iShares iBoxx $ Invmt Grade Corp Bd ETF', 'LQD', '0.38', '0.36', '0.30', '0.45', '0.44', '0.43', '0.29', '0.52', '0.51', '0.67', '1.00', '0.47', '0.28', '0.10'],
                    ['U.S. Real Estate Investment Trusts (REITs)', 'Vanguard Real Estate ETF', 'VNQ', '0.74', '0.76', '0.74', '0.71', '0.70', '0.63', '-0.14', '-0.01', '0.01', '0.40', '0.47', '1.00', '0.11', '0.36'],
                    ['Gold and Other Precious Metals', 'SPDR Gold Shares', 'GLD', '0.06', '0.07', '-0.01', '0.12', '0.15', '0.24', '0.28', '0.35', '0.25', '0.52', '0.28', '0.11', '1.00', '0.30'],
                    ['Commodities', 'Invesco DB Commodity Tracking', 'DBC', '0.52', '0.56', '0.52', '0.59', '0.60', '0.60', '-0.31', '-0.34', '-0.39', '0.24', '0.10', '0.36', '0.30', '1.00'],
                ],
            },
        };
    }
}
</script>