<script setup>
// Este arquivo é um componente Vue que permitirá listar os livros disponíveis para compra. Ele exibirá uma grade de produtos, onde cada produto será representado por um componente ProductCard.vue. O componente ProductList.vue será responsável por buscar os dados dos livros (que estão armazenados em um arquivo JS local - /src/data/products.js). Ele usará um loop para renderizar um ProductCard para cada livro na lista, passando as informações do livro como props para o componente ProductCard. O ProductList.vue é projetado para ser usado na página de listagem de produtos, onde os usuários podem navegar pelos livros disponíveis e clicar em um produto para ver mais detalhes ou adicioná-lo ao carrinho de compras.

import ProductCard from './ProductCard.vue'
import { produtos } from '@/data/products.js'


</script>

<template>
<div class="produtos-grid">
  <div v-for="livro in produtos" :key="livro.id">
    <ProductCard :livro="livro" />
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
