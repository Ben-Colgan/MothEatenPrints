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

<style lang="scss" scoped>
.product-detail-page {
  max-width: 1000px;
}

.product-detail {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: $spacing-xl;
  
  @media (max-width: $tablet) {
    grid-template-columns: 1fr;
    gap: $spacing-lg;
  }
}

.product-image-large {
  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
}

.product-info-detailed {
  h1 {
    font-size: 2.2rem;
    margin-bottom: $spacing-md;
    color: $primary-color;
  }
  
  .product-description {
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: $spacing-lg;
    color: darken($text-color, 10%);
  }
  
  .product-price-large {
    font-size: 1.8rem;
    font-weight: bold;
    color: $secondary-color;
    margin-bottom: $spacing-xl;
  }
}

.product-details {
  margin-bottom: $spacing-xl;
  
  h3 {
    font-size: 1.4rem;
    margin-bottom: $spacing-md;
    color: $secondary-color;
  }
  
  .details-list {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: $spacing-xs $spacing-md;
    
    dt {
      font-weight: bold;
      color: $text-color;
    }
    
    dd {
      margin: 0;
      color: darken($text-color, 10%);
    }
  }
}

.actions {
  display: flex;
  gap: $spacing-md;
  flex-wrap: wrap;
  
  .btn-primary {
    background-color: $secondary-color;
    
    &:hover {
      background-color: $accent-color;
    }
  }
  
  .btn-secondary {
    background-color: transparent;
    color: $secondary-color;
    border: 2px solid $secondary-color;
    
    &:hover {
      background-color: $secondary-color;
      color: white;
    }
  }
}

.not-found {
  text-align: center;
  padding: $spacing-xl;
  
  h1 {
    font-size: 2rem;
    margin-bottom: $spacing-md;
    color: $primary-color;
  }
  
  p {
    font-size: 1.1rem;
    margin-bottom: $spacing-lg;
    color: darken($text-color, 10%);
  }
}
</style>