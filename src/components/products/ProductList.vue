<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import ProductCard from './ProductCard.vue'
import { produtos } from '@/data/products.js'
import { addCarrinho } from '@/ultils/cartUtils'

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

function gerenciarAdicao(livro) {
  addCarrinho(livro.id, 1)
  alert(`"${livro.titulo}" foi adicionado ao carrinho!`)
}
</script>

<template>
  <div class="produtos-lista">
    <div class="filtro-info" v-if="categoriaSelecionada">
      <h2>Categoria: {{ categoriaSelecionada }}</h2>
      <p>Mostrando {{ produtosFiltrados.length }} livro<span v-if="produtosFiltrados.length !== 1">s</span> desta categoria.</p>
    </div>

    <div class="produtos-grid">
      <div v-for="livro in produtosFiltrados" :key="livro.id">
        <ProductCard :livro="livro" @adicionarCarrinho="gerenciarAdicao" />
      </div>
    </div>

    <div class="sem-resultados" v-if="categoriaSelecionada && produtosFiltrados.length === 0">
      <p>Nenhum livro encontrado para a categoria "{{ categoriaSelecionada }}".</p>
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
