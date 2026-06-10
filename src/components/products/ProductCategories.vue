<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { produtos } from '@/data/products.js'

const router = useRouter()

const categorias = computed(() => {
  const mapa = new Map()

  produtos.forEach((produto) => {
    const nome = produto.categoria?.trim() || 'Sem categoria'
    const item = mapa.get(nome) || { nome, quantidade: 0 }
    item.quantidade += 1
    mapa.set(nome, item)
  })

  return Array.from(mapa.values()).sort((a, b) =>
    a.nome.localeCompare(b.nome, 'pt-BR', { sensitivity: 'base' })
  )
})

const descricoes = {
  'Economia & Finanças': 'Livros sobre economia, finanças, negócios e investimentos.',
  Biologia: 'Livros de biologia, ciências naturais e saúde.',
  Direito: 'Livros jurídicos para estudantes, profissionais e concursos.',
  Física: 'Livros de física e ciências exatas.',
  Engenharia: 'Livros de engenharia e tecnologia aplicada.',
  Matemática: 'Livros de matemática e estatística.',
  Matematica: 'Livros de matemática e estatística.',
  Historia: 'Livros de história e ciências sociais.',
  Geografia: 'Livros de geografia, geopolítica e mundo.',
  Arquitetura: 'Livros de arquitetura e design de espaços.',
  Medicina: 'Livros de medicina e saúde.',
  'Sem categoria': 'Livros que ainda não têm uma categoria definida.',
}

const getDescricao = (categoria) => descricoes[categoria] || 'Livros desta categoria.'

const irParaCategoria = (categoria) => {
  router.push({ name: 'products', query: { categoria } })
}
</script>

<template>
  <div class="categorias-page">
    <section class="intro">
      <h1>Categorias de livros</h1>
      <p>Veja todas as categorias disponíveis, junto com a quantidade de livros de cada tema. Clique para abrir a lista filtrada.</p>
    </section>

    <div class="categorias-grid">
      <article
        class="categoria-card"
        v-for="categoria in categorias"
        :key="categoria.nome"
        @click="irParaCategoria(categoria.nome)"
      >
        <div class="categoria-card-body">
          <h2>{{ categoria.nome }}</h2>
          <p>{{ getDescricao(categoria.nome) }}</p>
        </div>
        <div class="categoria-card-footer">
          <span>{{ categoria.quantidade }} livro<span v-if="categoria.quantidade !== 1">s</span></span>
          <button type="button">Ver livros</button>
        </div>
      </article>
    </div>
  </div>
</template>

<style scoped>
.categorias-page {
  padding: 20px;
}

.intro {
  text-align: center;
  margin-bottom: 24px;
}

.categorias-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 18px;
}

.categoria-card {
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 18px;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 180px;
}

.categoria-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
}

.categoria-card-body h2 {
  margin: 0 0 10px;
  font-size: 1.2rem;
}

.categoria-card-body p {
  margin: 0;
  color: #555;
  line-height: 1.5;
}

.categoria-card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 18px;
}

.categoria-card-footer button {
  border: none;
  background: #3b82f6;
  color: #fff;
  border-radius: 999px;
  padding: 10px 14px;
  cursor: pointer;
}
</style>
