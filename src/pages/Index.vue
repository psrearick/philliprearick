<template>
  <Layout>

    <h1>Hi, I'm Phil!</h1>

    <p>
      Check out my <g-link to="/blog">Blog</g-link>
    </p>

  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
