<template>
  <div class="product-detail-page" v-if="product">
    <div class="product-detail">
      <div class="product-image-large">
        <img :src="product.image" :alt="product.title" @error="handleImageError" />
      </div>
      
      <div class="product-info-detailed">
        <h1>{{ product.title }}</h1>
        <p class="product-description">{{ product.description }}</p>
        
        <div class="product-price-large">{{ product.price }}</div>
        
        <div class="product-details" v-if="product.details">
          <h3>Product Details</h3>
          <dl class="details-list">
            <dt>Size:</dt>
            <dd>{{ product.details.size }}</dd>
            <dt>Material:</dt>
            <dd>{{ product.details.material }}</dd>
            <dt>Technique:</dt>
            <dd>{{ product.details.technique }}</dd>
            <dt>Artist:</dt>
            <dd>{{ product.details.artist }}</dd>
          </dl>
        </div>
        
        <div class="actions">
          <button class="btn btn-primary">Add to Cart</button>
          <NuxtLink :to="product.category === 'current' ? '/' : '/old'" class="btn btn-secondary">
            Back to {{ product.category === 'current' ? 'Current' : 'Archive' }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
  
  <div v-else class="not-found">
    <h1>Product Not Found</h1>
    <p>The product you're looking for doesn't exist.</p>
    <NuxtLink to="/" class="btn">Back to Home</NuxtLink>
  </div>
</template>

<script setup>
import productsData from '~/data/products.json'

const route = useRoute()
const productId = parseInt(route.params.id)

// Find the product by ID
const product = computed(() => 
  productsData.products.find(p => p.id === productId)
)

// Handle image loading error
const handleImageError = (event) => {
  event.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPk1vdGggUHJpbnQgSW1hZ2U8L3RleHQ+PC9zdmc+'
}

// Set page meta
useSeoMeta({
  title: () => product.value ? `${product.value.title} - MothEaten Prints` : 'Product Not Found',
  description: () => product.value ? product.value.description : 'Product not found'
})

// Handle 404 for non-existent products
if (!product.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Product Not Found'
  })
}
</script>