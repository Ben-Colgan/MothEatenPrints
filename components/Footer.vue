<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <p>&copy; 2024 MothEaten Prints. All rights reserved.</p>
        <p>Handcrafted artwork featuring the beauty of moths and nature.</p>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  background-color: $primary-color;
  color: white;
  padding: $spacing-lg 0;
  margin-top: auto;
}

.footer-content {
  text-align: center;
  
  p {
    margin-bottom: $spacing-xs;
    
    &:last-child {
      margin-bottom: 0;
      opacity: 0.8;
      font-size: 0.9rem;
    }
  }
}
</style>