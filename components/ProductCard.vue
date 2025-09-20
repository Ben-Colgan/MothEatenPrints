<template>
  <NuxtLink :to="`/product/${product.id}`" class="product-card-link">
    <div class="card product-card">
      <div class="product-image">
        <img :src="product.image" :alt="product.title" @error="handleImageError" />
      </div>
      <div class="product-info">
        <h3 class="product-title">{{ product.title }}</h3>
        <p class="product-description">{{ product.description }}</p>
        <div class="product-price">{{ product.price }}</div>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup>
defineProps({
  product: {
    type: Object,
    required: true
  }
})

const handleImageError = (event) => {
  // Use a placeholder image if the actual image fails to load
  event.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPk1vdGggUHJpbnQ8L3RleHQ+PC9zdmc+'
}
</script>

<style lang="scss" scoped>
.product-card-link {
  text-decoration: none;
  color: inherit;
  display: block;
}

.product-card {
  height: 100%;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  
  &:hover {
    .product-title {
      color: $secondary-color;
    }
  }
}

.product-image {
  width: 100%;
  height: 200px;
  overflow: hidden;
  border-radius: 4px;
  margin-bottom: $spacing-sm;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 4px;
  }
}

.product-info {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.product-title {
  font-size: 1.2rem;
  margin-bottom: $spacing-xs;
  transition: color 0.3s ease;
}

.product-description {
  flex: 1;
  margin-bottom: $spacing-sm;
  font-size: 0.9rem;
  line-height: 1.4;
  color: darken($text-color, 10%);
}

.product-price {
  font-size: 1.1rem;
  font-weight: bold;
  color: $secondary-color;
  margin-top: auto;
}
</style>