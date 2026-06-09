<script setup>
import { useRouter } from 'vue-router';
import { produtos } from '@/data/products';

const router = useRouter();
const livrosEmDestaque = produtos.slice(0, 3);

const irParaCatalogo = () => {
  router.push('/produtos');
};

const verDetalhes = (id) => {
  router.push({ path: '/produtos', query: { destaque: id } });
};
</script>

<template>
  <section class="banner-home">
    <div class="banner-content">
      <h1>Seu próximo destino está em nossas páginas.</h1>
      <button class="btn-banner" @click="irParaCatalogo">Explorar Produtos</button>
    </div>
  </section>

  <div class="home">
    <div class="header">
      <h2>Bem-vindo à Nossa Livraria</h2>
      <p>Explore os nossos principais destaques</p>
    </div>

    <div class="vitrine">
      <div v-for="livro in livrosEmDestaque" :key="livro.id" class="card-livro">
        <div class="capa-wrapper">
          <img :src="livro.capa" :alt="'Capa do livro ' + livro.titulo" class="capa-livro" />
        </div>

        <div class="info-livro">
          <h3>{{ livro.titulo }}</h3>
          <p class="autor">Por: {{ livro.autor }}</p>
          <p class="preco">R$ {{ livro.preco.toFixed(2).replace('.', ',') }}</p>

          <button class="btn-detalhes" @click="verDetalhes(livro.id)">Ver Detalhes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.banner-home, .home {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.banner-home {
  text-align: center;
  padding: 80px 20px;
  background: linear-gradient(135deg, #111827 0%, #1f2937 100%);
  color: white;
  margin-bottom: 40px;
  border-radius: 12px;
  margin-top: 80px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.banner-home h1 {
  font-size: 32px;
  font-weight: 700;
  max-width: 600px;
  margin: 0 auto 24px auto;
  line-height: 1.3;
}

button {
  cursor: pointer;
  border: none;
  border-radius: 8px; 
  font-weight: 600;
  transition: transform 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease;
}

.btn-banner {
  padding: 14px 28px;
  font-size: 16px;
  background-color: #2563eb; 
  color: white;
  box-shadow: 0 4px 14px rgba(37, 99, 235, 0.4);
}

.btn-banner:hover {
  background-color: #1d4ed8;
  transform: translateY(-2px);
}

.home {
  min-height: 100vh;
  background-color: #f8fafc;
  padding: 20px;
}

.header {
  text-align: center;
  margin-bottom: 40px;
}

.header h2 {
  font-size: 28px;
  color: #1e293b;
  margin-bottom: 8px;
  font-weight: 700;
}

.header p {
  color: #64748b;
  font-size: 16px;
}

.vitrine {
  display: flex;
  gap: 24px;
  justify-content: center;
  flex-wrap: wrap;
  padding-bottom: 40px;
}

.card-livro {
  background-color: white;
  border-radius: 12px;
  padding: 20px;
  width: 260px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid #f1f5f9;
}

.card-livro:hover {
  transform: translateY(-6px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.capa-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
}

.capa-livro {
  width: 140px;
  height: 200px;
  object-fit: cover;
  border-radius: 6px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.15);
}

.info-livro {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-between;
  text-align: left;
}

.info-livro h3 {
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 6px 0;
  color: #0f172a;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.autor {
  font-size: 13px;
  color: #64748b;
  margin: 0 0 12px 0;
}

.preco {
  font-size: 20px;
  font-weight: 700;
  color: #10b981;
  margin-top: auto;
}

.btn-detalhes {
  padding: 10px 20px;
  width: 100%;
  background-color: #f1f5f9;
  color: #334155;
  margin-top: 16px;
}

.btn-detalhes:hover {
  background-color: #e2e8f0;
  color: #0f172a;
}
</style>