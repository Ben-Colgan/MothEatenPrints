<template>
  <header class="header">
    <div class="container">
      <div class="header-content">
        <NuxtLink to="/" class="logo">
          <h1>MothEaten Prints</h1>
        </NuxtLink>
        <nav class="nav">
          <div class="tabs">
            <NuxtLink to="/" class="tab" :class="{ active: route.path === '/' }">
              Current
            </NuxtLink>
            <NuxtLink to="/old" class="tab" :class="{ active: route.path === '/old' }">
              Old
            </NuxtLink>
            <NuxtLink to="/info" class="tab" :class="{ active: route.path === '/info' }">
              Info
            </NuxtLink>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
const route = useRoute()
</script>