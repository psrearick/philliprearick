<template>
    <Layout>
        <h2>How Much Do You Need To Retire?</h2>
        <div class="md:flex gap-4">
            <div class="md:w-1/3">
                <ui-input
                    v-model="monthlyExpenses"
                    name="monthlyExpenses"
                    type="number"
                    before="$"
                    label="Monthly Expenses Less Monthly Income"
                    class="mb-4"
                />
                <ui-input
                    v-model="annualWithdrawalRate"
                    name="annualWithdrawalRate"
                    type="number"
                    after="%"
                    label="Estimated Return"
                    class="mb-4"
                />
                <ui-button
                    text="Calculate"
                    @click="calculateA()"
                    class="mb-4"
                />
            </div>
            <div>
                <p
                    v-if="resultA !== null"
                    class="
                        p-4
                        bg-slate-300
                        rounded
                        border border-gray-500
                        shadow-md
                        text-sm
                    "
                >
                    You will need {{ resultA }} to retire.
                </p>
            </div>
        </div>

        <h2>How Long Until You Can Retire?</h2>
        <div class="md:flex gap-4">
            <div class="md:w-1/3">
                <ui-input
                    v-model="principle"
                    name="principle"
                    type="number"
                    before="$"
                    label="Starting Amount"
                    class="mb-4"
                />
                <ui-input
                    v-model="payment"
                    name="payment"
                    type="number"
                    before="$"
                    label="Monthly Savings"
                    class="mb-4"
                />
                <ui-input
                    v-model="estimatedReturn"
                    name="estimatedReturn"
                    type="number"
                    after="%"
                    label="Estimated Return"
                    class="mb-4"
                />
                <ui-input
                    v-model="amountNeededToRetire"
                    name="amountNeededToRetire"
                    type="number"
                    before="$"
                    label="Amount Needed to Retire"
                    class="mb-4"
                />
                <ui-button
                    text="Calculate"
                    @click="calculateB()"
                    class="mb-4"
                />
            </div>
            <div>
                <p
                    v-if="resultB !== null"
                    class="
                        p-4
                        bg-slate-300
                        rounded
                        border border-gray-500
                        shadow-md
                        text-sm
                    "
                >
                    You will be able to retire in {{ resultB }} years.
                </p>
            </div>
        </div>
    </Layout>
</template>

<script>
import UiButton from '../components/UiButton';
import UiInput from '../components/form/UiInput.vue';
import { formatCurrency } from '../shared/ConvertValue';

export default {
    components: { UiInput, UiButton },

    data() {
        return {
            principle: 0,
            payment: 0,
            estimatedReturn: 6,
            amountNeededToRetire: 1000000,
            resultA: null,
            resultB: null,
            monthlyExpenses: 4000,
            annualWithdrawalRate: 4,
        };
    },

    methods: {
        calculateA() {
            this.resultA = formatCurrency(
                (this.monthlyExpenses * 12) / (this.annualWithdrawalRate / 100)
            );
        },
        calculateB() {
            let a1 = 1 / (this.estimatedReturn / 100 / 12);
            let a2 = this.payment * a1;

            let a = Math.log(
                (parseFloat(this.amountNeededToRetire) + a2) /
                    (this.principle + a2)
            );

            let b = Math.log(1 + this.estimatedReturn / 100 / 12);

            this.resultB = (a / b / 12).toFixed(1);
        },
    },
};
</script>
