<script setup>
const scrollToTop = (event) => {
  event.preventDefault()
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
</script>

<template>
  <footer>
    <div class="footer-container">
      <div class="logo-area">
        <RouterLink to="/">
          <img src="/logoDefinitiva.png" alt="Livraria Oásis">
        </RouterLink>
      </div>

      <a href="#" @click="scrollToTop" class="back-to-top">
        VOLTAR AO TOPO ↑
      </a>

      <div class="right-space"></div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  width: 100%;
  border-top: 2px solid #0ba720;
  background: #ffffff;
  color: #0ba720;
  padding: 10px 0;
  margin-top: auto;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo-area, .right-space {
  flex: 1; 
  display: flex;
}

.logo-area img {
  max-width: 100px;
  display: block;
}

.back-to-top {
  text-decoration: none;
  color: #0ba720;
  font-weight: bold;
  white-space: nowrap; 
  transition: opacity 0.2s;
  text-align: center;
}

.back-to-top:hover {
  opacity: 0.7;
}
</style>