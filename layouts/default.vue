<template>
  <div class="layout-no-header-full">
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
  height: 100%;
  background: #eee;
}

body {
  height: 100%;
}

.toasted-container.top-center {
  top: 5% !important;
}

.toasted.toasted-primary.info {
  background: #367cff !important;
}
</style>
