<template>
  <div class="page">
    <h1>Current Prints</h1>
    <p class="page-description">
      Discover our latest collection of moth-inspired artwork. Each piece is carefully crafted to capture the ethereal beauty of these nocturnal creatures.
    </p>
    <ProductGrid :products="currentProducts" />
  </div>
</template>

<script setup>
import productsData from '~/data/products.json'

// Filter current products
const currentProducts = computed(() => 
  productsData.products.filter(product => product.category === 'current')
)

// Set page meta
useSeoMeta({
  title: 'Current Prints - MothEaten Prints',
  description: 'Browse our latest collection of moth-inspired artwork and prints.'
})
</script>