<template>
  <div>
    <header class="flex justify-between px-6 py-5">
      <nuxt-link to="">Logo</nuxt-link>

      <ul class="flex">
        <li class="mr-4">
          <nuxt-link to="/register">Register</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/login">Login</nuxt-link>
        </li>
      </ul>
    </header>

    <Tutorial />
  </div>
</template>

<script>
export default {
  name: "IndexPage",
};
</script>
