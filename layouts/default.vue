<template>
  <div class="layout-no-header-full">
    <header class="flex justify-between px-6 py-5 bg-white">
      <nuxt-link to="/">Logo</nuxt-link>

      <ul class="flex">
        <li class="mr-4">
          <nuxt-link to="/register">Register</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/login">Login</nuxt-link>
        </li>
      </ul>
    </header>

    <main class="content overflow-auto">
      <nuxt />
    </main>
  </div>
</template>

<script>
export default {};
</script>

<style>
html {
  /* height: 100%; */
  background: #eee;
}

/* body {
  height: 100%;
} */

.toasted-container.top-center {
  top: 5% !important;
}

.toasted.toasted-primary.info {
  background: #367cff !important;
}
</style>
