<script setup>
import ProductList from '@/components/products/ProductList.vue'
</script>

<template>

  <p>Hello word</p>

  <div class="home">
    <div class="header">
      <h1>Bem-vindo à Nossa Livraria</h1>
      <p>Explore nosso catálogo</p>
    </div>

    <ProductList />
  </div>
</template>

<style scoped>
.home {
  min-height: 100vh;
  background-color: #f5f5f5;
  padding: 20px;
}

.header {
  text-align: center;
  margin-bottom: 40px;
}

h1 {
  color: #333;
  font-size: 36px;
  margin-bottom: 10px;
}

p {
  color: #666;
  font-size: 16px;
}
</style>
