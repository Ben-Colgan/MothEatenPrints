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

<style lang="scss" scoped>
.header {
  background-color: $primary-color;
  color: white;
  padding: $spacing-md 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: $mobile) {
    flex-direction: column;
    gap: $spacing-md;
  }
}

.logo {
  text-decoration: none;
  color: inherit;
  
  h1 {
    font-size: 2rem;
    margin: 0;
    color: white;
  }
}

.nav .tabs {
  border-bottom: none;
  margin-bottom: 0;
  
  .tab {
    color: white;
    border-bottom-color: transparent;
    
    &.active {
      border-bottom-color: $accent-color;
    }
    
    &:hover {
      border-bottom-color: $accent-color;
    }
  }
}
</style>