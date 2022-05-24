<template>
  <div class="layout-no-header-full">
    <header class="header-nav flex justify-between px-6 py-5 bg-white">
      <nuxt-link to="/">Logo</nuxt-link>

      <ul class="flex">
        <!-- Logout -->
        <li v-if="$auth.loggedIn" class="mr-4">
          <span
            class="text-dodger-blue cursor-pointer hover:opacity-75 transition duration-200 ease-in-out"
            @click="logout"
            >Logout</span
          >
        </li>
        <!-- Register -->
        <li v-if="!$auth.loggedIn" class="mr-4">
          <nuxt-link
            to="/register"
            class="text-dodger-blue hover:opacity-75 transition duration-200 ease-in-out"
            >Register</nuxt-link
          >
        </li>
        <!-- Login -->
        <li v-if="!$auth.loggedIn">
          <nuxt-link
            to="/login"
            class="text-dodger-blue hover:opacity-75 transition duration-200 ease-in-out"
            >Login</nuxt-link
          >
        </li>
      </ul>
    </header>

    <main class="content overflow-auto">
      <nuxt />
    </main>
  </div>
</template>

<script>
import { logoutUtil } from "~/utils/logout";

export default {
  methods: {
    async logout() {
      await logoutUtil("/login");
    },
  },
};
</script>

<style>
html {
  background: #eee;
}

.nuxt-link-exact-active {
  font-weight: bold;
}

.toasted-container.top-center {
  top: 5% !important;
}

.toasted.toasted-primary.info {
  background: #367cff !important;
}
</style>
