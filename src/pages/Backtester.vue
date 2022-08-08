<template>
    <Layout>
        <template #header>
            <div class="pb-5">
                <h2>Backtest Your Retirement Strategy</h2>
                <p class="text-sm">
                    Backtest you strategy using historical stock and bond market
                    data available from {{ firstYear }} through {{ lastYear }}
                </p>
            </div>
        </template>
        <div class="mt-8">
            <div>
                <ui-input
                    v-model="startingBalance"
                    name="Starting Balance"
                    label="Starting Balance"
                    type="number"
                    :step="1"
                    :returnFormatter="formatFloat"
                />
                <ui-toggle
                    :enabled="useAllData"
                    @update:enabled="defineDateSpan($event)"
                    label="Use entire data set"
                    class="mt-4"
                />
                <div
                    v-if="!useAllData"
                    class="p-4 bg-slate-200 mt-4 shadow-md rounded"
                >
                    <p class="bold">Timeframe</p>
                    <p class="text-xs">
                        Specify to start and end year of the timeframe you want
                        to backtest
                    </p>
                    <ui-input
                        v-model="startYear"
                        name="Start Year"
                        label="Start Year"
                        type="number"
                        :min="firstYear"
                        :max="lastYear"
                        :step="1"
                        class="mt-4"
                        :returnFormatter="Math.round"
                    />
                    <ui-input
                        v-model="endYear"
                        name="End Year"
                        label="End Year"
                        type="number"
                        :min="firstYear"
                        :max="lastYear"
                        :step="1"
                        class="mt-4"
                        :returnFormatter="Math.round"
                    />
                </div>
                <ui-input
                    v-model="yearsInRetirement"
                    name="Number of Years in Retirement"
                    label="Number of Years in Retirement"
                    type="number"
                    :min="1"
                    :max="100"
                    :step="1"
                    class="mt-4"
                    :returnFormatter="Math.round"
                />
                <ui-toggle
                    :enabled="specifyAllocation"
                    @update:enabled="defineAllocation($event)"
                    label="Use Custom Portfolio Allocation (default: 50/50 stocks/bonds)"
                    class="mt-4"
                />
                <div
                    v-if="specifyAllocation"
                    class="p-4 bg-slate-200 mt-4 shadow-md rounded"
                >
                    <p class="bold">Portfolio Allocation</p>
                    <p class="text-xs">
                        Specify the allocation to each asset class that you want
                        want to test. Each asset class should be a number
                        between 0 and 100 representing the percentage you are
                        allocating. They need to add up to 100 percent.
                    </p>
                    <p v-if="invalidAllocation" class="text-xs text-red-500">
                        The values do not add up to 100
                    </p>
                    <ui-input
                        v-model="sp"
                        name="Total Stock Market"
                        label="Total Stock Market (S&P 500)"
                        type="number"
                        :min="0"
                        :max="100"
                        :step="1"
                        :returnFormatter="formatFloat"
                        @input="checkAllocation"
                    />
                    <ui-input
                        v-model="corpBond"
                        name="Total Bond Market"
                        label="Total Bond Market"
                        type="number"
                        :min="0"
                        :max="100"
                        :step="1"
                        class="mt-4"
                        :returnFormatter="formatFloat"
                        @input="checkAllocation"
                    />
                    <ui-input
                        v-model="stTreasury"
                        name="Short-Term Treasury Bills"
                        label="Short-Term Treasury Bills"
                        type="number"
                        :min="0"
                        :max="100"
                        :step="1"
                        class="mt-4"
                        :returnFormatter="formatFloat"
                        @input="checkAllocation"
                    />
                    <ui-input
                        v-model="ltTreasury"
                        name="Long-Term Treasury Bonds"
                        label="Long-Term Treasury Bonds"
                        type="number"
                        :min="0"
                        :max="100"
                        :step="1"
                        class="mt-4"
                        :returnFormatter="formatFloat"
                        @input="checkAllocation"
                    />
                </div>
                <ui-input
                    v-model="withdrawalRate"
                    name="Withdrawal Rate (%)"
                    label="Withdrawal Rate (%)"
                    type="number"
                    :min="1"
                    :max="100"
                    :step="1"
                    class="mt-4"
                    :returnFormatter="formatFloat"
                />
                <p class="text-xs">
                    Specify the percentage of your total portfolio you will
                    withdraw each year. The amount specified will used for the
                    duration of the retirement periood and will be adjusted for
                    inflation. The percentage should be represented as a number
                    between 0 and 100, for example, to withdraw 4% of your
                    portfolio annually, enter '4'.
                </p>
                <ui-toggle
                    :enabled="useSafetyNet"
                    @update:enabled="defineSafetyNet($event)"
                    label="Utilize Safety Net"
                    class="mt-4"
                />
                <div
                    v-if="useSafetyNet"
                    class="p-4 bg-slate-200 mt-4 shadow-md rounded"
                >
                    <p class="bold">Safety Net</p>
                    <p class="text-xs">
                        Specify the percentage of your portfolio you want to use
                        as a safety net. This should be a number between 0 and
                        100. If it is greater than zero, the the specified
                        percentage of your portfolio will be allocated as a
                        reserve fund. This fund will be drawn from when the
                        stock market is down, preserving your capital. When the
                        stock market is back up, your withdrawals will again
                        come from your portfolio and your safety net will be
                        rebalanced to the specified allocation.
                    </p>
                    <ui-input
                        v-model="safetyNet"
                        name="Safety Net (%)"
                        label="Safety Net (%)"
                        type="number"
                        :min="1"
                        :max="100"
                        :step="1"
                        class="mt-4"
                        :returnFormatter="formatFloat"
                        @input="checkSafetyNet"
                    />
                </div>
                <ui-button text="Calculate" class="my-4" @click="calculate" />
            </div>
            <div
                v-if="backtestLineChartOptions.series.length > 0"
                class="border-t border-gray-400"
            >
                <h2>Results</h2>
                <div class="text-sm pb-8">
                    <p>
                        The {{ analysis.summary.tests }} possible
                        {{ yearsInRetirement }} year periods within the
                        available data revealed the following results.
                    </p>
                    <p>
                        {{ analysis.summary.successful }} ({{
                            (100 * analysis.summary.successRate).toFixed(2)
                        }}%) outcomes succeeded (ended more than zero dollars).
                    </p>
                    <p>
                        {{ analysis.summary.failed }} ({{
                            (100 * analysis.summary.failureRate).toFixed(2)
                        }}%) outcomes failed (ran out of money during the
                        retirement period).
                    </p>
                    <p>
                        {{ analysis.summary.gainers }} ({{
                            (100 * analysis.summary.gainerRate).toFixed(2)
                        }}%) outcomes ended with more than the started balance.
                    </p>
                    <p>
                        {{ analysis.summary.losers }} ({{
                            (100 * analysis.summary.loserRate).toFixed(2)
                        }}%) outcomes ended between zero and the starting
                        balance.
                    </p>
                    <p>
                        The lowest result was {{ format(analysis.summary.min) }}
                    </p>
                    <p>
                        The highest result was
                        {{ format(analysis.summary.max) }}
                    </p>
                    <p>
                        The average result was
                        {{ format(analysis.summary.avg) }}
                    </p>
                    <p>
                        The median result was
                        {{ format(analysis.summary.median) }}
                    </p>
                </div>

                <div>
                    <chart :options="backtestLineChartOptions" />
                </div>
                <div class="md:flex mt-4 gap-4">
                    <chart
                        :options="successFailureChartOptions"
                        class="md:w-1/2"
                    />
                    <chart
                        :options="advancersDeclinersChartOptions"
                        class="mt-4 md:mt-0 md:w-1/2"
                    />
                </div>
            </div>
        </div>
    </Layout>
</template>

<script>
import UiButton from '../components/UiButton';
import UiInput from '../components/form/UiInput';
import UiToggle from '../components/form/UiToggle';
import { formatCurrency } from '../shared/ConvertValue';

export default {
    components: { UiInput, UiButton, UiToggle },

    data() {
        return {
            analysis: null,
            data: [],
            firstYear: 0,
            lastYear: 0,
            useAllData: true,
            startYear: null,
            endYear: null,
            yearsInRetirement: 35,
            specifyAllocation: false,
            sp: 50,
            corpBond: 50,
            stTreasury: 0,
            ltTreasury: 0,
            invalidAllocation: false,
            withdrawalRate: 4,
            useSafetyNet: false,
            safetyNet: 0,
            startingBalance: 1000000,
            advancersDeclinersChartOptions: {
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false,
                    type: 'pie',
                },
                title: {
                    text: 'Advancers vs. Decliners',
                },
                subtitle: {
                    text: 'a comparison between tests that resulted in value greather than the starting value and those that decreased in value, but stayed above zero.',
                },
                tooltip: {
                    pointFormat:
                        '{series.name}: <b>{point.percentage:.1f}%</b>',
                },
                plotOptions: {
                    pie: {
                        allowPointSelect: true,
                        cursor: 'pointer',
                        dataLabels: {
                            enabled: true,
                            format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                            distance: '-30%',
                        },
                    },
                },
                accessibility: {
                    enabled: false,
                },
                series: [
                    {
                        name: 'results',
                        data: [],
                    },
                ],
            },
            successFailureChartOptions: {
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false,
                    type: 'pie',
                },
                title: {
                    text: 'Success vs. Failure',
                },
                subtitle: {
                    text: 'a comparison between tests that resulted in value greather than zero and those that did not',
                },
                tooltip: {
                    pointFormat:
                        '{series.name}: <b>{point.percentage:.1f}%</b>',
                },
                plotOptions: {
                    pie: {
                        allowPointSelect: true,
                        cursor: 'pointer',
                        dataLabels: {
                            enabled: true,
                            format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                            distance: '-30%',
                        },
                    },
                },
                accessibility: {
                    enabled: false,
                },
                series: [
                    {
                        name: 'results',
                        data: [],
                    },
                ],
            },
            backtestLineChartOptions: {
                accessibility: {
                    enabled: false,
                },
                series: [],
                xAxis: {
                    title: {
                        text: 'Years in Retirement',
                    },
                },
                yAxis: {
                    title: {
                        text: 'Portfolio Value',
                    },
                    labels: {
                        formatter: function () {
                            let val = formatCurrency(this.value);
                            return val.substring(0, val.length - 3);
                        },
                    },
                },
                title: {
                    text: 'Backtest Results',
                },
                legend: { enabled: false },
                plotOptions: {
                    series: {
                        marker: {
                            enabled: false,
                        },
                    },
                },
            },
        };
    },

    created() {
        if (typeof window !== 'undefined') {
            this.$options.components['Chart'] = require('highcharts-vue').Chart;
        }
    },

    mounted() {
        this.data = this.$page.stockData.edges.map((item) => item.node);
        this.lastYear = this.data[0].year;
        this.firstYear = this.data[this.data.length - 1].year;
        this.startYear = this.firstYear;
        this.endYear = this.lastYear;
    },

    computed: {
        cpiRatio() {
            return this.calculateCPIRatio(this.lastYear, this.startYear);
        },
    },

    methods: {
        format: function (value) {
            return formatCurrency(value);
        },
        analyzeRequestedYears: function (calculations) {
            const dataset = [];

            console.log(calculations);

            calculations.forEach((calculation) => {
                const startingBalance = calculation[0].startingBalance;
                const endingBalance =
                    calculation[calculation.length - 1].balance;
                const successful = endingBalance > 0;
                const change = startingBalance - endingBalance;
                const cpiRatio = this.calculateCPIRatio(
                    this.lastYear,
                    calculation[calculation.length - 1].year
                );
                const startingBalanceAdjusted = startingBalance * cpiRatio;
                const endingBalanceAdjusted = endingBalance * cpiRatio;
                const changeAdjusted = change * cpiRatio;
                const history = [
                    this.startingBalance,
                    ...calculation.map((item) =>
                        parseFloat(
                            (
                                item.balance *
                                this.calculateCPIRatio(this.lastYear, item.year)
                            ).toFixed(2)
                        )
                    ),
                ];

                dataset.push({
                    startingBalance,
                    endingBalance,
                    successful,
                    change,
                    startingBalanceAdjusted,
                    endingBalanceAdjusted,
                    changeAdjusted,
                    endYear: calculation[calculation.length - 1].year,
                    startYear: calculation[0].year,
                    cpiRatio,
                    history,
                });
            });

            const summary = {};

            const endingBalances = [];
            dataset.forEach((item) => {
                endingBalances.push(item.endingBalanceAdjusted);
            });
            const sorted = this.sorted(endingBalances);

            summary.endingBalances = endingBalances;
            summary.sorted = sorted;
            summary.tests = dataset.length;
            summary.successful = dataset.filter(
                (item) => item.successful
            ).length;
            summary.failed = dataset.length - summary.successful;
            summary.successRate = summary.successful / dataset.length;
            summary.failureRate = 1 - summary.successRate;
            summary.gainers = dataset.filter(
                (item) => item.endingBalance > item.startingBalance
            ).length;
            summary.gainerRate = summary.gainers / dataset.length;
            summary.losers = dataset.filter(
                (item) =>
                    item.endingBalance < item.startingBalance &&
                    item.endingBalance > 0
            ).length;
            summary.loserRate = summary.losers / dataset.length;
            summary.min = Math.max(0, sorted[0]);
            summary.max = sorted[sorted.length - 1];
            summary.median = this.median(endingBalances);
            summary.avg = this.average(endingBalances);

            return {
                dataset,
                summary,
            };
        },
        calculate: function () {
            const calculations = this.calculateRequestedYears(
                this.startYear,
                this.endYear,
                []
            );

            let analysis = this.analyzeRequestedYears(calculations);

            this.processCharts(analysis);

            this.analysis = analysis;
        },
        calculateCPIRatio: function (last, first) {
            const lastYearData = this.data.filter(
                (item) => item.year === last
            )[0];

            const firstYearData = this.data.filter(
                (item) => item.year === first
            )[0];

            return (
                lastYearData.consumerPriceIndex /
                firstYearData.consumerPriceIndex
            );
        },
        calculateRequestedYears: function (currentYear, endYear, data) {
            let end = currentYear + this.yearsInRetirement - 1;

            if (end > this.lastYear) {
                return data;
            }

            if (currentYear === endYear) {
                return data;
            }

            let cpiRatio = this.calculateCPIRatio(this.lastYear, currentYear);

            const requiredAmount =
                (this.startingBalance * (this.withdrawalRate / 100)) / cpiRatio;
            const balance = this.startingBalance / cpiRatio;

            let safetyNet = 0;
            if (this.useSafetyNet && this.safetyNet > 0) {
                safetyNet = (this.safetyNet / 100) * balance;
            }

            const results = {
                requiredAmount,
                balance,
                safetyNet,
                year: currentYear,
                endYear: end,
            };

            data.push(this.calculateYears(results, []));

            currentYear = currentYear + 1;

            return this.calculateRequestedYears(currentYear, endYear, data);
        },
        calculateYear: function (results) {
            if (results.balance <= 0) {
                return {
                    requiredAmount: 0,
                    withdrawal: 0,
                    startingBalance: 0,
                    balance: 0,
                    returns: 0,
                    safetyNet: 0,
                    year: results.year,
                    endYear: results.endYear,
                };
            }

            let startingBalance = results.balance;

            const year = this.data.filter(
                (item) => item.year === results.year
            )[0];

            let requiredAmount =
                (1 + year.inflationRate) * results.requiredAmount;

            let balance = results.balance;
            let withdrawal = requiredAmount;
            let safetyNet = results.safetyNet;

            if (this.useSafetyNet && this.safetyNet > 0) {
                if (year.spReturnWithoutDividends < 0.04) {
                    withdrawal = 0;

                    let safetyNetWithdrawal = requiredAmount;
                    if (safetyNet < requiredAmount) {
                        safetyNetWithdrawal = safetyNet;
                        withdrawal = requiredAmount - safetyNetWithdrawal;
                    }

                    safetyNet = safetyNet - safetyNetWithdrawal;
                } else {
                    const cpiRatio = this.calculateCPIRatio(
                        this.lastYear,
                        year.year
                    );

                    const net =
                        this.startingBalance *
                        cpiRatio *
                        (this.safetyNet / 100);

                    if (safetyNet < net) {
                        balance = balance - (net - safetyNet);
                        safetyNet = net;
                    }
                }
            }

            balance = results.balance - withdrawal;

            let returns = 0;
            returns += year.spReturnWithDividends * balance * (this.sp / 100);
            returns +=
                year.longTermCorporateBondReturn *
                balance *
                (this.corpBond / 100);
            returns +=
                year.shortTermTreasuryBillReturn *
                balance *
                (this.stTreasury / 100);
            returns +=
                year.longTermTreasuryBondReturn *
                balance *
                (this.ltTreasury / 100);

            balance = balance + returns;

            return {
                requiredAmount,
                withdrawal,
                startingBalance,
                safetyNet,
                balance,
                returns,
                year: year.year,
                endYear: results.endYear,
            };
        },
        calculateYears: function (results, collection) {
            if (results.year <= results.endYear) {
                let res = this.calculateYear(results);
                collection.push(JSON.parse(JSON.stringify(res)));

                res.year = res.year + 1;
                return this.calculateYears(res, collection);
            }

            return collection;
        },
        checkAllocation: function () {
            const totalAllocation =
                this.sp + this.corpBond + this.stTreasury + this.ltTreasury;

            this.invalidAllocation = totalAllocation !== 100;
        },
        checkSafetyNet: function () {
            if (this.safetyNet < 0) {
                this.safetyNet = 0;
            }

            if (this.safetyNet > 100) {
                this.safetyNet = 100;
            }
        },
        defineAllocation: function (useCustomAllocation) {
            this.specifyAllocation = useCustomAllocation;
            if (!this.specifyAllocation) {
                this.sp = 50;
                this.corpBond = 50;
                this.stTreasury = 0;
                this.ltTreasury = 0;
            }
        },
        defineDateSpan: function (useAll) {
            this.useAllData = useAll;
            if (this.useAllData) {
                this.startYear = this.firstYear;
                this.endYear = this.lastYear;
            }
        },
        defineSafetyNet: function (useNet) {
            this.useSafetyNet = useNet;
            if (!this.useSafetyNet) {
                this.safetyNet = 0;
            }
        },
        formatFloat: function (num) {
            if (isNaN(num) || !num) {
                return 0;
            }

            return parseFloat(num);
        },
        formatInt: function (num) {
            if (isNaN(num)) {
                return 0;
            }

            return parseFloat(num);
        },
        processCharts: function (analysis) {
            this.backtestLineChartOptions.series = [];
            this.successFailureChartOptions.series[0].data = [];
            this.advancersDeclinersChartOptions.series[0].data = [];

            analysis.dataset.forEach((data) => {
                this.backtestLineChartOptions.series.push({
                    data: data.history,
                    name: data.startYear,
                });
            });

            this.successFailureChartOptions.series[0].data.push({
                name: 'Success',
                y: parseFloat(analysis.summary.successRate.toFixed(2)),
            });

            this.successFailureChartOptions.series[0].data.push({
                name: 'Failure',
                y: parseFloat(analysis.summary.failureRate.toFixed(2)),
            });

            this.advancersDeclinersChartOptions.series[0].data.push({
                name: 'Advancers',
                y: parseFloat(analysis.summary.gainerRate.toFixed(2)),
            });

            this.advancersDeclinersChartOptions.series[0].data.push({
                name: 'Decliners',
                y: parseFloat(analysis.summary.loserRate.toFixed(2)),
            });
        },
        average: function (values) {
            return values.reduce((a, b) => a + b) / values.length;
        },
        sorted: function (values) {
            values.sort(function (a, b) {
                return a - b;
            });

            return values;
        },
        median: function (values) {
            var half = Math.floor(values.length / 2);

            if (values.length % 2) return values[half];

            return (values[half - 1] + values[half]) / 2.0;
        },
    },
};
</script>

<page-query>
query {
    stockData: allStockData {
        edges {
            node {
                year
                spIndex
                spDividends
                spDividendYield
                spReturnWithDividends
                spReturnWithoutDividends
                longTermCorporateBondRate
                longTermCorporateBondReturn
                shortTermTreasuryBillReturn
                longTermTreasuryBondRate
                longTermTreasuryBondReturn
                consumerPriceIndex
                inflationRate
            }
        }
    }
}
</page-query>
