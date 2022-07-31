<template>
    <div class="asset-stats-table overflow-auto lg:-mx-24">
        <table class="text-xs text-center my-4 overflow-x-scroll table-auto w-full">
            <thead>
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

            <tbody>
                <tr>
                    <td class="font-bold p-2">US Stock Market</td>
                    <td class="bg-gray-200">10.01%</td>
                    <td class="bg-gray-200">14.91%</td>
                    <td>9.86%</td>
                    <td>15.53%</td>
                    <td class="bg-gray-200">10.82%</td>
                    <td class="bg-gray-200">15.26%</td>
                    <td>11.42%</td>
                    <td>15.43%</td>
                </tr>

                <tr>
                    <td class="font-bold p-2">US Large Cap</td>
                    <td class="bg-gray-200">9.90%</td>
                    <td class="bg-gray-200">14.40%</td>
                    <td>9.93%</td>
                    <td>15.12%</td>
                    <td class="bg-gray-200">11.14%</td>
                    <td class="bg-gray-200">15.02%</td>
                    <td>11.54%</td>
                    <td>15.09%</td>
                </tr>

                <tr>
                    <td class="font-bold p-2">US Mid Cap</td>
                    <td class="bg-gray-200">10.46%</td>
                    <td class="bg-gray-200">16.83%</td>
                    <td>11.00%</td>
                    <td>16.99%</td>
                    <td class="bg-gray-200">11.93%</td>
                    <td class="bg-gray-200">16.74%</td>
                    <td>12.85%</td>
                    <td>16.96%</td>
                </tr>

                <tr>
                    <td class="font-bold p-2">US Small Cap</td>
                    <td class="bg-gray-200">10.40%</td>
                    <td class="bg-gray-200">18.79%</td>
                    <td>9.64%</td>
                    <td>19.37%</td>
                    <td class="bg-gray-200">10.59%</td>
                    <td class="bg-gray-200">18.91%</td>
                    <td>11.99%</td>
                    <td>19.09%</td>
                </tr>

                <tr>
                    <td class="font-bold p-2">Global ex-US Stock Market</td>
                    <td class="bg-gray-200">6.70%</td>
                    <td class="bg-gray-200">17.04%</td>
                    <td>4.42%</td>
                    <td>16.78%</td>
                    <td class="bg-gray-200">5.22%</td>
                    <td class="bg-gray-200">17.56%</td>
                    <td></td>
                    <td></td>
                </tr>

                <tr>
                    <td class="font-bold p-2">Intl Developed ex-US Market</td>
                    <td class="bg-gray-200">6.59%</td>
                    <td class="bg-gray-200">16.81%</td>
                    <td>4.53%</td>
                    <td>16.42%</td>
                    <td class="bg-gray-200">5.30%</td>
                    <td class="bg-gray-200">17.30%</td>
                    <td></td>
                    <td></td>
                </tr>

                <tr>
                    <td class="font-bold p-2">Intl ex-US Small Cap</td>
                    <td class="bg-gray-200">9.23%</td>
                    <td class="bg-gray-200">18.32%</td>
                    <td></td>
                    <td></td>
                    <td class="bg-gray-200"></td>
                    <td class="bg-gray-200"></td>
                    <td></td>
                    <td></td>
                </tr>

                <tr>
                    <td class="font-bold p-2">Emerging Markets</td>
                    <td class="bg-gray-200">8.97%</td>
                    <td class="bg-gray-200">20.75%</td>
                    <td>5.59%</td>
                    <td>22.21%</td>
                    <td class="bg-gray-200"></td>
                    <td class="bg-gray-200"></td>
                    <td></td>
                    <td></td>
                </tr>

                <tr>
                    <td class="font-bold p-2">Short Term Treasury</td>
                    <td class="bg-gray-200">1.91%</td>
                    <td class="bg-gray-200">1.59%</td>
                    <td>3.39%</td>
                    <td>1.87%</td>
                    <td class="bg-gray-200">4.89%</td>
                    <td class="bg-gray-200">2.26%</td>
                    <td>5.63%</td>
                    <td>3.12%</td>
                </tr>

                <tr>
                    <td class="font-bold p-2">Intermediate Term Treasury</td>
                    <td class="bg-gray-200">3.17%</td>
                    <td class="bg-gray-200">4.40%</td>
                    <td>4.84%</td>
                    <td>4.61%</td>
                    <td class="bg-gray-200">6.30%</td>
                    <td class="bg-gray-200">5.00%</td>
                    <td>6.78%</td>
                    <td>5.94%</td>
                </tr>

                <tr>
                    <td class="font-bold p-2">Long Term Treasury</td>
                    <td class="bg-gray-200">4.60%</td>
                    <td class="bg-gray-200">11.49%</td>
                    <td>6.24%</td>
                    <td>10.60%</td>
                    <td class="bg-gray-200">7.84%</td>
                    <td class="bg-gray-200">10.64%</td>
                    <td>7.88%</td>
                    <td>11.33%</td>
                </tr>

                <tr>
                    <td class="font-bold p-2">Total US Bond Market</td>
                    <td class="bg-gray-200">3.21%</td>
                    <td class="bg-gray-200">3.67%</td>
                    <td>4.65%</td>
                    <td>3.69%</td>
                    <td class="bg-gray-200">5.27%</td>
                    <td class="bg-gray-200">3.92%</td>
                    <td></td>
                    <td></td>
                </tr>

                <tr>
                    <td class="font-bold p-2">TIPS</td>
                    <td class="bg-gray-200">3.90%</td>
                    <td class="bg-gray-200">5.70%</td>
                    <td></td>
                    <td></td>
                    <td class="bg-gray-200"></td>
                    <td class="bg-gray-200"></td>
                    <td></td>
                    <td></td>
                </tr>

                <tr>
                    <td class="font-bold p-2">Short-Term Investment Grade</td>
                    <td class="bg-gray-200">2.72%</td>
                    <td class="bg-gray-200">2.41%</td>
                    <td>3.93%</td>
                    <td>2.34%</td>
                    <td class="bg-gray-200">5.45%</td>
                    <td class="bg-gray-200">2.57%</td>
                    <td></td>
                    <td></td>
                </tr>

                <tr>
                    <td class="font-bold p-2">Global Bonds</td>
                    <td class="bg-gray-200">4.47%</td>
                    <td class="bg-gray-200">3.59%</td>
                    <td>5.43%</td>
                    <td>7.32%</td>
                    <td class="bg-gray-200">6.52%</td>
                    <td class="bg-gray-200">7.13%</td>
                    <td></td>
                    <td></td>
                </tr>

                <tr>
                    <td class="font-bold p-2">Corporate Bonds</td>
                    <td class="bg-gray-200">4.33%</td>
                    <td class="bg-gray-200">7.49%</td>
                    <td></td>
                    <td></td>
                    <td class="bg-gray-200"></td>
                    <td class="bg-gray-200"></td>
                    <td></td>
                    <td></td>
                </tr>

                <tr>
                    <td class="font-bold p-2">High Yield Corporate Bonds</td>
                    <td class="bg-gray-200">5.79%</td>
                    <td class="bg-gray-200">7.85%</td>
                    <td>5.96%</td>
                    <td>7.30%</td>
                    <td class="bg-gray-200">7.40%</td>
                    <td class="bg-gray-200">7.04%</td>
                    <td>7.71%</td>
                    <td>7.48%</td>
                </tr>

                <tr>
                    <td class="font-bold p-2">REIT</td>
                    <td class="bg-gray-200">9.55%</td>
                    <td class="bg-gray-200">21.65%</td>
                    <td>9.61%</td>
                    <td>19.39%</td>
                    <td class="bg-gray-200"></td>
                    <td class="bg-gray-200"></td>
                    <td></td>
                    <td></td>
                </tr>

                <tr>
                    <td class="font-bold p-2">Gold</td>
                    <td class="bg-gray-200">8.41%</td>
                    <td class="bg-gray-200">16.86%</td>
                    <td>5.51%</td>
                    <td>15.74%</td>
                    <td class="bg-gray-200">3.34%</td>
                    <td class="bg-gray-200">15.40%</td>
                    <td>4.71%</td>
                    <td>18.15%</td>
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
</style>