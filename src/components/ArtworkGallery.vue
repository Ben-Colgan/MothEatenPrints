<template>
  <div>
    <div class="gallery-header" v-if="artworkType === 'archived'">
      <h2>Archived Artwork</h2>
      <p class="archived-notice">These pieces are no longer available for purchase.</p>
    </div>
    <div class="gallery-header" v-else>
      <h2>Available Artwork</h2>
      <p>Click on any artwork for more details.</p>
    </div>
    
    <div class="gallery">
      <ArtworkCard 
        v-for="artwork in displayedArtworks" 
        :key="artwork.id" 
        :artwork="artwork"
        :isArchived="artworkType === 'archived'"
        @click="openArtworkDetails(artwork)"
      />
    </div>
    
    <div v-if="displayedArtworks.length === 0" class="no-items">
      <p>No artwork items available in this category.</p>
    </div>
    
    <!-- Modal for displaying artwork details -->
    <div class="modal-overlay" v-if="selectedArtwork" @click.self="closeModal">
      <div class="modal-content">
        <!-- Image Carousel -->
        <div class="carousel">
          <div class="carousel-main">
            <img :src="getImagePath(selectedArtwork.images[currentImageIndex])" :alt="selectedArtwork.title">
            
            <!-- Navigation Arrows -->
            <button class="carousel-nav carousel-prev" @click.stop="prevImage" v-if="selectedArtwork.images.length > 1">
              <span>&lsaquo;</span>
            </button>
            <button class="carousel-nav carousel-next" @click.stop="nextImage" v-if="selectedArtwork.images.length > 1">
              <span>&rsaquo;</span>
            </button>
          </div>
          
          <!-- Thumbnails -->
          <div class="carousel-thumbnails" v-if="selectedArtwork.images.length > 1">
            <div 
              v-for="(image, index) in selectedArtwork.images" 
              :key="index" 
              class="thumbnail" 
              :class="{ active: currentImageIndex === index }"
              @click.stop="currentImageIndex = index"
            >
              <img :src="getImagePath(image)" :alt="`${selectedArtwork.title} thumbnail ${index + 1}`">
            </div>
          </div>
        </div>
        
        <h2>{{ selectedArtwork.title }}</h2>
        
        <div class="artwork-details">
          <p><span class="label">Released:</span> {{ selectedArtwork.releaseDate }}</p>
          <p><span class="label">Medium:</span> {{ selectedArtwork.medium }}</p>
          <p><span class="label">Dimensions:</span> {{ selectedArtwork.dimensions }}</p>
          <p class="description">{{ selectedArtwork.description }}</p>
          
          <div v-if="artworkType === 'current'" class="price-info">
            <p><span class="label">Price:</span> £{{ selectedArtwork.price }}</p>
            <button class="buy-button">Purchase</button>
          </div>
          
          <div v-else class="archive-info">
            <p><span class="label">Original Price:</span> £{{ selectedArtwork.price }}</p>
          </div>
        </div>
        
        <button class="close-button" @click="closeModal">Close</button>
      </div>
    </div>
  </div>
</template>

<script>
import ArtworkCard from './ArtworkCard.vue'
import { ref, onMounted, computed, watch } from 'vue'

export default {
  name: 'ArtworkGallery',
  components: {
    ArtworkCard
  },
  props: {
    artworkType: {
      type: String,
      default: 'current',
      validator: (value) => ['current', 'archived'].includes(value)
    }
  },
  setup(props) {
    const artworks = ref({
      current: [],
      archived: []
    })
    const selectedArtwork = ref(null)
    const currentImageIndex = ref(0)
    
    const displayedArtworks = computed(() => {
      return artworks.value[props.artworkType] || []
    })
    
    const fetchArtworks = async () => {
      try {
        // Use import.meta.env.BASE_URL to get the base path configured in vite.config.js
        const response = await fetch(import.meta.env.BASE_URL + 'data/artworks.json')
        const data = await response.json()
        artworks.value.current = data.current || []
        artworks.value.archived = data.archived || []
      } catch (error) {
        console.error('Error fetching artwork data:', error)
      }
    }
    
    const openArtworkDetails = (artwork) => {
      selectedArtwork.value = artwork
      currentImageIndex.value = 0 // Reset to first image when opening modal
    }
    
    const closeModal = () => {
      selectedArtwork.value = null
    }
    
    const nextImage = () => {
      if (!selectedArtwork.value) return
      if (currentImageIndex.value < selectedArtwork.value.images.length - 1) {
        currentImageIndex.value++
      } else {
        currentImageIndex.value = 0 // Loop back to the first image
      }
    }
    
    const prevImage = () => {
      if (!selectedArtwork.value) return
      if (currentImageIndex.value > 0) {
        currentImageIndex.value--
      } else {
        currentImageIndex.value = selectedArtwork.value.images.length - 1 // Loop to the last image
      }
    }
    
    const getImagePath = (image) => {
      return import.meta.env.BASE_URL + image
    }
    
    onMounted(() => {
      fetchArtworks()
    })
    
    // Reset selected artwork when changing tabs
    watch(() => props.artworkType, () => {
      selectedArtwork.value = null
    })
    
    return {
      artworks,
      displayedArtworks,
      selectedArtwork,
      currentImageIndex,
      openArtworkDetails,
      closeModal,
      nextImage,
      prevImage,
      getImagePath
    }
  }
}
</script>

<style lang="scss" scoped>
.gallery-header {
  margin-bottom: 40px;
  text-align: center;
  
  h2 {
    margin-bottom: 10px;
    color: #f1f1f1;
    font-weight: 300;
    letter-spacing: 1.5px;
    font-size: 1.8rem;
    position: relative;
    display: inline-block;
    
    &::after {
      content: '';
      position: absolute;
      width: 40px;
      height: 2px;
      background-color: #c792ea;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  
  p {
    color: #a8a8a8;
    margin-top: 20px;
    font-size: 0.95rem;
  }
  
  .archived-notice {
    color: #c792ea;
    font-style: italic;
  }
}

.no-items {
  text-align: center;
  margin-top: 60px;
  padding: 30px;
  background-color: #1e1e1e;
  border-radius: 8px;
  border: 1px solid #2a2a2a;
}

// Carousel styles
.carousel {
  margin-bottom: 25px;
  
  .carousel-main {
    position: relative;
    margin-bottom: 15px;
    border-radius: 6px;
    overflow: hidden;
    
    img {
      width: 100%;
      height: auto;
      display: block;
      max-height: 500px;
      object-fit: contain;
      background-color: #111;
      transition: opacity 0.3s;
    }
    
    .carousel-nav {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background-color: rgba(0, 0, 0, 0.6);
      color: #fff;
      border: none;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      font-size: 24px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0.7;
      transition: opacity 0.3s, background-color 0.3s;
      z-index: 5;
      
      &:hover {
        opacity: 1;
        background-color: rgba(199, 146, 234, 0.8);
      }
      
      &.carousel-prev {
        left: 15px;
      }
      
      &.carousel-next {
        right: 15px;
      }
    }
  }
  
  .carousel-thumbnails {
    display: flex;
    gap: 10px;
    overflow-x: auto;
    padding-bottom: 10px;
    
    &::-webkit-scrollbar {
      height: 6px;
    }
    
    &::-webkit-scrollbar-track {
      background: #1a1a1a;
      border-radius: 10px;
    }
    
    &::-webkit-scrollbar-thumb {
      background: #333;
      border-radius: 10px;
      
      &:hover {
        background: #444;
      }
    }
    
    .thumbnail {
      flex: 0 0 80px;
      height: 60px;
      cursor: pointer;
      border: 2px solid transparent;
      border-radius: 4px;
      overflow: hidden;
      transition: all 0.3s;
      opacity: 0.7;
      
      &.active {
        border-color: #c792ea;
        opacity: 1;
      }
      
      &:hover {
        opacity: 0.9;
      }
      
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
}

.price-info {
  margin-top: 25px;
  padding-top: 15px;
  border-top: 1px solid #2a2a2a;
  
  .buy-button {
    margin-top: 15px;
    background-color: transparent;
    color: #f1f1f1;
    border: 1px solid #50fa7b;
    padding: 10px 25px;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 0.85rem;
    
    &:hover {
      background-color: #50fa7b;
      color: #121212;
    }
  }
}

.archive-info {
  margin-top: 25px;
  padding-top: 15px;
  border-top: 1px solid #2a2a2a;
  font-style: italic;
  color: #a8a8a8;
}
</style>