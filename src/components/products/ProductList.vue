<script setup>
import ProductCard from './ProductCard.vue'
import { produtos } from '@/data/products.js'
import { addCarrinho } from '@/ultils/cartUtils'

function gerenciarAdicao(livro) {
  addCarrinho(livro.id, 1)  
  alert(`"${livro.titulo}" foi adicionado ao carrinho!`)
}
</script>

<template>
<div class="produtos-grid">
  <div v-for="livro in produtos" :key="livro.id">
    <ProductCard :livro="livro" @adicionarCarrinho="gerenciarAdicao" />
  </div>
</div>
</template>

<style scoped>
.produtos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
  margin-top: 90px;
}
</style>