<template>
  <div class="page info-page">
    <h1>About MothEaten Prints</h1>
    
    <div class="content-section">
      <h2>Our Story</h2>
      <p>
        MothEaten Prints was born from a fascination with the mysterious beauty of moths and their nocturnal world. 
        Our studio specializes in creating artwork that captures the delicate intricacies and ethereal qualities of these often-overlooked creatures.
      </p>
      
      <p>
        Each piece in our collection is thoughtfully designed to bring the wonder of the natural world into your space, 
        celebrating the unique patterns, textures, and forms found in moth wings and bodies.
      </p>
    </div>
    
    <div class="content-section">
      <h2>Our Process</h2>
      <p>
        We combine traditional artistic techniques with modern digital reproduction methods to create high-quality prints 
        that preserve the beauty and detail of our original artwork. Every print is produced on archival-quality paper 
        to ensure longevity and color accuracy.
      </p>
    </div>
    
    <div class="content-section">
      <h2>Materials & Quality</h2>
      <ul>
        <li>Museum-quality archival papers</li>
        <li>Fade-resistant inks</li>
        <li>Acid-free materials</li>
        <li>Careful packaging for shipping</li>
      </ul>
    </div>
    
    <div class="content-section">
      <h2>Contact</h2>
      <p>
        Questions about our artwork or custom commissions? We'd love to hear from you.
      </p>
      <p class="contact-info">
        Email: hello@motheatenprints.com<br>
        Follow us on social media for updates and behind-the-scenes content.
      </p>
    </div>
  </div>
</template>

<script setup>
// Set page meta
useSeoMeta({
  title: 'About - MothEaten Prints',
  description: 'Learn about MothEaten Prints, our artistic process, and our passion for moth-inspired artwork.'
})
</script>

<style lang="scss" scoped>
.info-page {
  max-width: 800px;
  
  h1 {
    font-size: 2.5rem;
    margin-bottom: $spacing-xl;
    color: $primary-color;
  }
  
  h2 {
    font-size: 1.8rem;
    margin-bottom: $spacing-md;
    color: $secondary-color;
  }
  
  .content-section {
    margin-bottom: $spacing-xl;
    
    p {
      font-size: 1.1rem;
      line-height: 1.7;
      margin-bottom: $spacing-md;
      color: darken($text-color, 5%);
    }
    
    ul {
      margin-left: $spacing-md;
      
      li {
        font-size: 1.1rem;
        line-height: 1.7;
        margin-bottom: $spacing-xs;
        color: darken($text-color, 5%);
      }
    }
    
    .contact-info {
      background: lighten($background-color, 2%);
      padding: $spacing-md;
      border-left: 4px solid $secondary-color;
      border-radius: 4px;
    }
  }
}
</style>