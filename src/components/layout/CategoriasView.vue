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
  router.push({ path: '/produtos', query: { categoria } })
}

// NOVA FUNÇÃO: Voltar para a Home
const voltarParaHome = () => {
  router.push('/')
}
</script>

<template>
  <div class="categorias-page">
    
    <div class="header-acoes">
      <button class="btn-voltar" @click="voltarParaHome">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
        </svg>
        Voltar para Home
      </button>
    </div>

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
  font-family: system-ui, sans-serif;
  padding: 100px 20px 40px; /* Reduzi um pouco o padding-top para o botão caber melhor */
  min-height: 100vh;
  background: #1e293b;
}

/* ESTILOS DO NOVO BOTÃO */
.header-acoes {
  max-width: 1200px;
  margin: 0 auto 20px;
}

.btn-voltar {
  display: flex;
  align-items: center;
  gap: 8px;
  background: transparent;
  color: #94a3b8;
  border: 1px solid #475569;
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-voltar:hover {
  background: #334155;
  color: #f8fafc;
  border-color: #64748b;
}

.intro {
  text-align: center;
  margin-bottom: 40px;
}

.intro h1 {
  margin-bottom: 12px;
  color: #f8fafc;
  font-size: 2.2rem;
}

.intro p {
  color: #94a3b8;
  max-width: 600px;
  margin: 0 auto;
  font-size: 1.05rem;
  line-height: 1.5;
}

.categorias-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.categoria-card {
  background: #334155;
  border: 1px solid #475569;
  border-radius: 16px;
  padding: 24px;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 200px;
}

.categoria-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 20px rgba(0, 0, 0, 0.2);
  border-color: #64748b;
}

.categoria-card h2 {
  margin: 0 0 12px;
  font-size: 1.3rem;
  color: #ffffff;
}

.categoria-card p {
  margin: 0;
  color: #cbd5e1;
  line-height: 1.6;
  font-size: 0.95rem;
}

.categoria-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 24px;
}

.categoria-footer span {
  color: #94a3b8;
  font-weight: 500;
  font-size: 0.9rem;
}

.categoria-footer button {
  border: none;
  background: #2563eb; 
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.15s ease;
}

.categoria-footer button:hover {
  background: #1d4ed8;
}
</style>