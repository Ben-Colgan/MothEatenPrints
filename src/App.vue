<template>
  <div class="app">
    <header>
      <div class="container">
        <div class="header-top">
          <img src="/images/moth-logo.jpg" alt="MothEaten Prints Logo" class="logo">
          <h1>MothEaten Prints</h1>
        </div>
        <nav class="tabs">
          <ul>
            <li :class="{ active: activeTab === 'artwork' }">
              <a href="#" @click.prevent="activeTab = 'artwork'">Artwork</a>
            </li>
            <li :class="{ active: activeTab === 'archive' }">
              <a href="#" @click.prevent="activeTab = 'archive'">Archive</a>
            </li>
            <li :class="{ active: activeTab === 'about' }">
              <a href="#" @click.prevent="activeTab = 'about'">About</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    
    <main class="container">
      <!-- Artwork Tab Content -->
      <div v-if="activeTab === 'artwork'">
        <ArtworkGallery :artworkType="'current'" />
      </div>
      
      <!-- Archive Tab Content -->
      <div v-if="activeTab === 'archive'">
        <ArtworkGallery :artworkType="'archived'" />
      </div>
      
      <!-- About Tab Content -->
      <div v-if="activeTab === 'about'" class="about-section">
        <h2>About MothEaten Prints</h2>
        <p>Welcome to MothEaten Prints, your premier destination for unique and captivating artwork prints.</p>
        <p>We specialize in curating a diverse collection of prints from renowned artists across various periods and styles. Our mission is to make art accessible to everyone by offering high-quality reproductions at affordable prices.</p>
        <p>Each print in our collection is carefully selected for its artistic merit and cultural significance. We take pride in the quality of our prints, using premium materials and advanced printing techniques to ensure vibrant colors and accurate representations of the original works.</p>
        <h3>Our Story</h3>
        <p>Founded in 2023, MothEaten Prints began as a small passion project and has since grown into a beloved source for art enthusiasts. Our founder's love for art history and desire to share beautiful works with a wider audience continues to drive our vision.</p>
        <p>We're constantly updating our collection with new and exciting pieces, so be sure to check back regularly!</p>
        <h3>Contact Us</h3>
        <p>Have questions or special requests? Feel free to reach out to us at <a href="mailto:info@motheatenprints.com">info@motheatenprints.com</a></p>
      </div>
    </main>
  </div>
</template>

<script>
import ArtworkGallery from './components/ArtworkGallery.vue'
import { ref } from 'vue'

export default {
  name: 'App',
  components: {
    ArtworkGallery
  },
  setup() {
    const activeTab = ref('artwork')
    
    return {
      activeTab
    }
  }
}
</script>

<style lang="scss">
.logo {
  height: 50px;
  border-radius: 50%;
  margin-right: 15px;
  border: 2px solid #c792ea;
}

.header-top {
  display: flex;
  align-items: center;
  justify-content: center;
}
.tabs {
  margin-top: 20px;
  
  ul {
    display: flex;
    list-style: none;
    border-bottom: 1px solid #2a2a2a;
    justify-content: center;
    gap: 15px;
    
    li {
      padding: 10px 0;
      position: relative;
      transition: all 0.3s;
      
      &.active {
        a {
          color: #c792ea;
        }
        
        &::after {
          content: '';
          position: absolute;
          bottom: -1px;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: #c792ea;
        }
      }
      
      a {
        text-decoration: none;
        color: #f1f1f1;
        font-weight: 300;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-size: 0.85rem;
        padding: 10px 20px;
        transition: color 0.3s;
        
        &:hover {
          color: #c792ea;
        }
      }
    }
  }
}

.about-section {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 0;
  
  h2 {
    margin-bottom: 30px;
    color: #c792ea;
    font-weight: 300;
    letter-spacing: 1px;
  }
  
  h3 {
    margin-top: 40px;
    margin-bottom: 20px;
    color: #f1f1f1;
    font-weight: 400;
  }
  
  p {
    margin-bottom: 20px;
    line-height: 1.8;
    color: #a8a8a8;
    font-size: 1rem;
  }
  
  a {
    color: #c792ea;
    text-decoration: none;
    border-bottom: 1px dotted #c792ea;
    transition: all 0.3s;
    
    &:hover {
      color: lighten(#c792ea, 10%);
      border-bottom-color: lighten(#c792ea, 10%);
    }
  }
}
</style>