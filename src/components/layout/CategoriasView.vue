<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { produtos } from '@/data/products.js'

const router = useRouter()

const categorias = computed(() => {
  const mapa = new Map()

  produtos.forEach((produto) => {
    const nome = String(produto.categoria || 'Sem categoria').trim()
    const item = mapa.get(nome) || { nome, quantidade: 0 }
    item.quantidade += 1
    mapa.set(nome, item)
  })

  return Array.from(mapa.values()).sort((a, b) =>
    a.nome.localeCompare(b.nome, 'pt-BR', { sensitivity: 'base' })
  )
})

const descricoes = {
  'Programação': 'Livros sobre desenvolvimento de software, linguagens, frameworks e boas práticas de programação.',
  'Economia & Finanças': 'Livros sobre economia, finanças, negócios e investimentos.',
  'Biologia': 'Livros de biologia, ciências naturais e saúde.',
  'Direito': 'Livros jurídicos para estudantes, profissionais e concursos.',
  'Física': 'Livros de física e ciências exatas.',
  'Engenharia': 'Livros de engenharia e tecnologia aplicada.',
  'Matemática': 'Livros de matemática e estatística.',
  'História': 'Livros de história e ciências sociais.',
  'Geografia': 'Livros de geografia, geopolítica e mundo.',
  'Arquitetura': 'Livros de arquitetura e design de espaços.',
  'Medicina': 'Livros de medicina e saúde.',
  'Sem categoria': 'Livros que ainda não têm uma categoria definida.',
}

const getDescricao = (categoria) => descricoes[categoria] || 'Livros nesta categoria.'

const irParaCategoria = (categoria) => {
  router.push({ name: 'products', query: { categoria } })
}
</script>

<template>
  <div class="categorias-page">
    <section class="intro">
      <h1>Categorias de livros</h1>
      <p>Confira todas as categorias de livros disponíveis, veja quantos títulos existem em cada uma e filtre a listagem clicando na categoria.</p>
    </section>

    <div class="categorias-grid">
      <article
        class="categoria-card"
        v-for="categoria in categorias"
        :key="categoria.nome"
        @click="irParaCategoria(categoria.nome)"
      >
        <div>
          <h2>{{ categoria.nome }}</h2>
          <p>{{ getDescricao(categoria.nome) }}</p>
        </div>

        <footer class="categoria-footer">
          <span>{{ categoria.quantidade }} livro<span v-if="categoria.quantidade !== 1">s</span></span>
          <button type="button">Ver livros</button>
        </footer>
      </article>
    </div>
  </div>
</template>

<style scoped>
.categorias-page {
  padding: 100px 20px 20px;
  min-height: 100vh;
  background: #f8f9fb;
}

.intro {
  text-align: center;
  margin-bottom: 28px;
}

.intro h1 {
  margin-bottom: 8px;
}

.categorias-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 18px;
}

.categoria-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  padding: 24px;
  cursor: pointer;
  transition: transform 0.18s ease, box-shadow 0.18s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 190px;
}

.categoria-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 30px rgba(15, 23, 42, 0.08);
}

.categoria-card h2 {
  margin: 0 0 12px;
  font-size: 1.25rem;
}

.categoria-card p {
  margin: 0;
  color: #475569;
  line-height: 1.6;
}

.categoria-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 22px;
}

.categoria-footer button {
  border: none;
  background: #0ba720;
  color: white;
  padding: 10px 16px;
  border-radius: 999px;
  cursor: pointer;
}
</style>
