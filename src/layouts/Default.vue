<template>
  <div class="flex flex-col min-h-full">
    <div class="layout w-full flex-1">
      <header class="header">
        <strong>
          <g-link to="/" class="text-gray-500 hover:no-underline">
            <g-image alt="Logo" src="~/favicon.png" width="45" class="mx-auto" />
            {{ $static.metadata.siteName }}
          </g-link>
        </strong>
        <nav class="nav">
          <g-link class="nav__link" to="/">Home</g-link>
          <!-- <g-link class="nav__link" to="/about/">About</g-link> -->
          <g-link class="nav__link" to="/blog">Blog</g-link>
        </nav>
      </header>
      <slot />
    </div>
    <div class="py-8 bg-gray-200 mt-4">
      <div class="text-sm text-gray-400 w-3/4 mx-auto">
        <ul>
          <li>
            While I enjoy researching investing and finance-related data, I am
            not a financial professional. I have no formal financial education
            and am not a financial advisor, portfolio manager, or accountant.
            The information on this website is for informational and
            recreational purposes only. Therefore, the provided data does not
            constitute financial, investment, or tax advice. Investment products
            discussed (ETFs, index funds, etc.) are for illustrative purposes
            only. It is not a recommendation to buy, sell, or otherwise transact
            in any of the products mentioned.
          </li>
          <li>Past performance does not guarantee future returns.</li>
          <li>Some content may contain affiliate or referral links.</li>
          <li>I only feature services and apps that I use.</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}
</style>
