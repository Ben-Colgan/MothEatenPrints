<template>
  <div class="artwork-card" :class="{ archived: isArchived }">
    <div class="artwork-image">
      <img :src="getImagePath(artwork.images[0])" :alt="artwork.title">
      <div class="overlay">
        <span>View Details</span>
      </div>
      <div class="status-badge" v-if="isArchived">Archived</div>
    </div>
    <div class="artwork-info">
      <h3>{{ artwork.title }}</h3>
      <p class="release-date">Released: {{ artwork.releaseDate }}</p>
      <div class="price-section" v-if="!isArchived">
        <p class="price">£{{ artwork.price }}</p>
      </div>
      <div class="archive-section" v-else>
        <p class="original-price">£{{ artwork.price }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArtworkCard',
  props: {
    artwork: {
      type: Object,
      required: true
    },
    isArchived: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    getImagePath(imagePath) {
      // Remove leading slash if present to avoid double slashes
      const cleanPath = imagePath.startsWith('./') ? imagePath.substring(2) : 
                        imagePath.startsWith('/') ? imagePath.substring(1) : imagePath;
      return `${import.meta.env.BASE_URL}${cleanPath}`;
    }
  }
}
</script>

<style lang="scss" scoped>
.artwork-card {
  background-color: #1e1e1e;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;
  border: 1px solid #2a2a2a;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
    
    .overlay {
      opacity: 1;
    }
    
    img {
      transform: scale(1.05);
    }
  }
  
  &.archived {
    position: relative;
    
    .artwork-image,
    .archive-section {
      opacity: 0.7;
    }
  }
  
  .artwork-image {
    position: relative;
    height: 240px;
    overflow: hidden;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
    }
    
    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.6);
      display: flex;
      justify-content: center;
      align-items: center;
      opacity: 0;
      transition: opacity 0.3s;
      z-index: 2;
      
      span {
        color: white;
        font-weight: 300;
        letter-spacing: 1px;
        text-transform: uppercase;
        border: 1px solid #c792ea;
        padding: 8px 15px;
        border-radius: 4px;
        font-size: 0.85rem;
        transition: all 0.3s;
        
        &:hover {
          background-color: #c792ea;
          color: #121212;
        }
      }
    }
    
    .status-badge {
      position: absolute;
      top: 15px;
      right: 15px;
      background-color: rgba(0, 0, 0, 0.7);
      color: #a8a8a8;
      padding: 5px 12px;
      border-radius: 4px;
      font-size: 0.75rem;
      letter-spacing: 0.5px;
      text-transform: uppercase;
      border: 1px solid #2a2a2a;
      z-index: 2;
    }
  }
  
  .artwork-info {
    padding: 20px;
    
    h3 {
      margin-bottom: 8px;
      font-size: 1.1rem;
      font-weight: 400;
      color: #f1f1f1;
      letter-spacing: 0.5px;
    }
    
    .release-date {
      color: #a8a8a8;
      margin-bottom: 12px;
      font-size: 0.9rem;
    }
    
    .price-section {
      .price {
        font-weight: 500;
      }
    }
    
    .archive-section {
      .original-price {
        color: #a8a8a8;
        text-decoration: line-through;
      }
    }
  }
}
</style>