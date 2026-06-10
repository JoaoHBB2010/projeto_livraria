<script setup>
// Este arquivo é um componente Vue que permitirá listar os livros disponíveis para compra. Ele exibirá uma grade de produtos, onde cada produto será representado por um componente ProductCard.vue. O componente ProductList.vue será responsável por buscar os dados dos livros (que estão armazenados em um arquivo JS local - /src/data/products.js). Ele usará um loop para renderizar um ProductCard para cada livro na lista, passando as informações do livro como props para o componente ProductCard. O ProductList.vue é projetado para ser usado na página de listagem de produtos, onde os usuários podem navegar pelos livros disponíveis e clicar em um produto para ver mais detalhes ou adicioná-lo ao carrinho de compras.

import { computed } from 'vue'
import { useRoute } from 'vue-router'
import ProductCard from './ProductCard.vue'
import { produtos } from '@/data/products.js'

const route = useRoute()

const categoriaSelecionada = computed(() => {
  const categoria = route.query.categoria
  return categoria ? String(categoria).trim() : ''
})

const produtosFiltrados = computed(() => {
  if (!categoriaSelecionada.value) {
    return produtos
  }

  return produtos.filter((livro) => {
    return String(livro.categoria || '').trim().toLowerCase() === categoriaSelecionada.value.toLowerCase()
  })
})
</script>

<template>
  <div class="produtos-lista">
    <div class="filtro-info" v-if="categoriaSelecionada">
      <h2>Categoria: {{ categoriaSelecionada }}</h2>
      <p>Mostrando {{ produtosFiltrados.length }} livro<span v-if="produtosFiltrados.length !== 1">s</span> desta categoria.</p>
    </div>

    <div class="produtos-grid">
      <div v-for="livro in produtosFiltrados" :key="livro.id">
        <ProductCard :livro="livro" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.produtos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
}
</style>
