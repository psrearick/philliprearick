<template>
    <div class="asset-stats-table overflow-auto lg:-mx-24 max-h-screen">
        <table
            class="text-xs text-center my-4 overflow-x-scroll table-auto w-full"
        >
            <thead class="sticky top-0 z-10 bg-gray-100">
                <tr class="h-8">
                    <th></th>
                    <th class="bg-gray-200 my-8" colspan="2">2003</th>
                    <th colspan="2">1995</th>
                    <th class="bg-gray-200" colspan="2">1983</th>
                    <th colspan="2">1979</th>
                </tr>

                <tr>
                    <th class="font-bold px-2">Asset Class</th>
                    <th class="font-bold bg-gray-200">Std Dev</th>
                    <th class="font-bold bg-gray-200">CAGR</th>
                    <th class="font-bold">Std Dev</th>
                    <th class="font-bold">CAGR</th>
                    <th class="font-bold bg-gray-200">Std Dev</th>
                    <th class="font-bold bg-gray-200">CAGR</th>
                    <th class="font-bold">Std Dev</th>
                    <th class="font-bold">CAGR</th>
                </tr>
            </thead>

            <tbody class="bg-gray-100">
                <tr>
                    <td class="font-bold p-2">US Stock Market</td>
                    <td class="bg-gray-200">0.888</td>
                    <td class="bg-gray-200">0.555</td>
                    <td>0.866</td>
                    <td>0.533</td>
                    <td class="bg-gray-200">0.846</td>
                    <td class="bg-gray-200">0.615</td>
                    <td>0.625</td>
                    <td>0.625</td>
                </tr>

                <tr>
                    <td class="font-bold p-2">US Large Cap</td>
                    <td class="bg-gray-200">0.833</td>
                    <td class="bg-gray-200">0.500</td>
                    <td>0.933</td>
                    <td>0.466</td>
                    <td class="bg-gray-200">0.923</td>
                    <td class="bg-gray-200">0.538</td>
                    <td>0.750</td>
                    <td>0.500</td>
                </tr>

                <tr>
                    <td class="font-bold p-2">US Mid Cap</td>
                    <td class="bg-gray-200">1.000</td>
                    <td class="bg-gray-200">0.666</td>
                    <td>1.000</td>
                    <td>0.800</td>
                    <td class="bg-gray-200">1.000</td>
                    <td class="bg-gray-200">0.769</td>
                    <td>1.000</td>
                    <td>0.7500</td>
                </tr>

                <tr>
                    <td class="font-bold p-2">US Small Cap</td>
                    <td class="bg-gray-200">0.944</td>
                    <td class="bg-gray-200">0.888</td>
                    <td>0.800</td>
                    <td>0.866</td>
                    <td class="bg-gray-200">0.769</td>
                    <td class="bg-gray-200">1.000</td>
                    <td>0.875</td>
                    <td>1.000</td>
                </tr>

                <tr>
                    <td class="font-bold p-2">Global ex-US Stock Market</td>
                    <td class="bg-gray-200">0.555</td>
                    <td class="bg-gray-200">0.777</td>
                    <td>0.133</td>
                    <td>0.733</td>
                    <td class="bg-gray-200">0.153</td>
                    <td class="bg-gray-200">0.923</td>
                    <td></td>
                    <td></td>
                </tr>

                <tr>
                    <td class="font-bold p-2">Intl Developed ex-US Market</td>
                    <td class="bg-gray-200">0.500</td>
                    <td class="bg-gray-200">0.611</td>
                    <td>0.200</td>
                    <td>0.666</td>
                    <td class="bg-gray-200">0.307</td>
                    <td class="bg-gray-200">0.846</td>
                    <td></td>
                    <td></td>
                </tr>

                <tr>
                    <td class="font-bold p-2">Intl ex-US Small Cap</td>
                    <td class="bg-gray-200">0.722</td>
                    <td class="bg-gray-200">0.833</td>
                    <td></td>
                    <td></td>
                    <td class="bg-gray-200"></td>
                    <td class="bg-gray-200"></td>
                    <td></td>
                    <td></td>
                </tr>

                <tr>
                    <td class="font-bold p-2">Emerging Markets</td>
                    <td class="bg-gray-200">0.666</td>
                    <td class="bg-gray-200">0.944</td>
                    <td>0.533</td>
                    <td>1.00</td>
                    <td class="bg-gray-200"></td>
                    <td class="bg-gray-200"></td>
                    <td></td>
                    <td></td>
                </tr>

                <tr>
                    <td class="font-bold p-2">Short Term Treasury</td>
                    <td class="bg-gray-200">0.000</td>
                    <td class="bg-gray-200">0.000</td>
                    <td>0.000</td>
                    <td>0.000</td>
                    <td class="bg-gray-200">0.076</td>
                    <td class="bg-gray-200">0.000</td>
                    <td>0.125</td>
                    <td>0.000</td>
                </tr>

                <tr>
                    <td class="font-bold p-2">Intermediate Term Treasury</td>
                    <td class="bg-gray-200">0.111</td>
                    <td class="bg-gray-200">0.222</td>
                    <td>0.333</td>
                    <td>0.200</td>
                    <td class="bg-gray-200">0.461</td>
                    <td class="bg-gray-200">0.230</td>
                    <td>0.250</td>
                    <td>0.125</td>
                </tr>

                <tr>
                    <td class="font-bold p-2">Long Term Treasury</td>
                    <td class="bg-gray-200">0.388</td>
                    <td class="bg-gray-200">0.444</td>
                    <td>0.666</td>
                    <td>0.400</td>
                    <td class="bg-gray-200">0.692</td>
                    <td class="bg-gray-200">0.461</td>
                    <td>0.500</td>
                    <td>0.375</td>
                </tr>

                <tr>
                    <td class="font-bold p-2">Total US Bond Market</td>
                    <td class="bg-gray-200">0.166</td>
                    <td class="bg-gray-200">0.166</td>
                    <td>0.266</td>
                    <td>0.133</td>
                    <td class="bg-gray-200">0.230</td>
                    <td class="bg-gray-200">0.153</td>
                    <td></td>
                    <td></td>
                </tr>

                <tr>
                    <td class="font-bold p-2">TIPS</td>
                    <td class="bg-gray-200">0.222</td>
                    <td class="bg-gray-200">0.277</td>
                    <td></td>
                    <td></td>
                    <td class="bg-gray-200"></td>
                    <td class="bg-gray-200"></td>
                    <td></td>
                    <td></td>
                </tr>

                <tr>
                    <td class="font-bold p-2">Short-Term Investment Grade</td>
                    <td class="bg-gray-200">0.055</td>
                    <td class="bg-gray-200">0.055</td>
                    <td>0.066</td>
                    <td>0.066</td>
                    <td class="bg-gray-200">0.384</td>
                    <td class="bg-gray-200">0.076</td>
                    <td></td>
                    <td></td>
                </tr>

                <tr>
                    <td class="font-bold p-2">Global Bonds</td>
                    <td class="bg-gray-200">0.333</td>
                    <td class="bg-gray-200">0.111</td>
                    <td>0.400</td>
                    <td>0.333</td>
                    <td class="bg-gray-200">0.538</td>
                    <td class="bg-gray-200">0.384</td>
                    <td></td>
                    <td></td>
                </tr>

                <tr>
                    <td class="font-bold p-2">Corporate Bonds</td>
                    <td class="bg-gray-200">0.277</td>
                    <td class="bg-gray-200">0.333</td>
                    <td></td>
                    <td></td>
                    <td class="bg-gray-200"></td>
                    <td class="bg-gray-200"></td>
                    <td></td>
                    <td></td>
                </tr>

                <tr>
                    <td class="font-bold p-2">High Yield Corporate Bonds</td>
                    <td class="bg-gray-200">0.444</td>
                    <td class="bg-gray-200">0.388</td>
                    <td>0.600</td>
                    <td>0.266</td>
                    <td class="bg-gray-200">0.615</td>
                    <td class="bg-gray-200">0.307</td>
                    <td>0.375</td>
                    <td>0.250</td>
                </tr>

                <tr>
                    <td class="font-bold p-2">REIT</td>
                    <td class="bg-gray-200">0.777</td>
                    <td class="bg-gray-200">1.000</td>
                    <td>0.733</td>
                    <td>0.933</td>
                    <td class="bg-gray-200"></td>
                    <td class="bg-gray-200"></td>
                    <td></td>
                    <td></td>
                </tr>

                <tr>
                    <td class="font-bold p-2">Gold</td>
                    <td class="bg-gray-200">0.611</td>
                    <td class="bg-gray-200">0.722</td>
                    <td>0.466</td>
                    <td>0.600</td>
                    <td class="bg-gray-200">0.000</td>
                    <td class="bg-gray-200">0.692</td>
                    <td>0.000</td>
                    <td>0.875</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped>
.asset-stats-table th,
.asset-stats-table td {
    white-space: nowrap;
    padding: 0 0.5rem;
}

.asset-stats-table td {
    padding: 1rem;
}

.asset-stats-table tr {
    background-color: inherit;
}

.asset-stats-table th:first-of-type,
.asset-stats-table td:first-of-type {
    left: 0;
    position: sticky;
    background-color: inherit;
}
</style>
