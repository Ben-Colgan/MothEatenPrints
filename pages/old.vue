<template>
  <div class="page">
    <h1>Archive</h1>
    <p class="page-description">
      Explore our archived collection featuring vintage and earlier works. These pieces showcase the evolution of our artistic style over time.
    </p>
    <ProductGrid :products="oldProducts" />
  </div>
</template>

<script setup>
import productsData from '~/data/products.json'

// Filter old products
const oldProducts = computed(() => 
  productsData.products.filter(product => product.category === 'old')
)

// Set page meta
useSeoMeta({
  title: 'Archive - MothEaten Prints',
  description: 'Browse our archived collection of moth-inspired artwork and vintage prints.'
})
</script>