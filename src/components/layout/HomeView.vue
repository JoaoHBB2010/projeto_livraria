<script setup>
import { useRouter } from 'vue-router';
// Ajuste o caminho abaixo dependendo de onde o seu arquivo products.js está salvo
import { produtos } from '@/data/products';

const router = useRouter();

// Pegamos apenas os 3 primeiros livros para exibir como destaque na Home
const livrosEmDestaque = produtos.slice(0, 3);

// Função para o botão do banner ir para o catálogo geral
const irParaCatalogo = () => {
  router.push('/produtos'); // Certifique-se de ter uma rota com esse caminho configurada
};

// INTEGRADO: Função que leva para a página de produtos passando o ID do livro como parâmetro na URL
const verDetalhes = (id) => {
  // Isso vai gerar uma rota como: /produtos?destaque=1
  router.push({ path: '/produtos', query: { destaque: id } }); 
};
</script>

<template>
  <section class="banner-home">
    <h1>Seu próximo destino está em nossas páginas.</h1>
    <button class="btn-banner" @click="irParaCatalogo">Explorar Produtos</button>
  </section>

  <div class="home">
    <div class="header">
      <h1>Bem-vindo à Nossa Livraria</h1>
      <p>Explore nossos destaques</p>
    </div>

    <div class="vitrine">
      <div v-for="livro in livrosEmDestaque" :key="livro.id" class="card-livro">
        <img :src="livro.capa" :alt="'Capa do livro ' + livro.titulo" class="capa-livro" />
        
        <div class="info-livro">
          <h3>{{ livro.titulo }}</h3>
          <p class="autor">{{ livro.autor }}</p>
          <p class="preco">R$ {{ livro.preco.toFixed(2).replace('.', ',') }}</p>
          
          <button class="btn-detalhes" @click="verDetalhes(livro.id)">Ver Detalhes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.banner-home {
  text-align: center;
  padding: 60px 20px;
  background-color: #1a1a1a; /* Cor um pouco mais escura para destacar o texto */
  color: white;
  margin-bottom: 20px;
  border-radius: 8px; /* Cantos arredondados */
  margin-top: 80px;
}

.banner-home h2 {
  font-weight: 400;
  margin-bottom: 20px;
}

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
  font-size: 36px;
  margin-bottom: 10px;
}

.header p {
  color: #666;
  font-size: 18px;
}

/* Estilos dos Botões */
button {
  cursor: pointer;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.btn-banner {
  padding: 12px 24px;
  font-size: 18px;
  background-color: #42b983; /* Verde padrão do Vue */
  color: white;
}

.btn-banner:hover {
  background-color: #33a06f;
}

.btn-detalhes {
  padding: 10px 20px;
  width: 100%;
  background-color: #42b983; 
  color: white;
  margin-top: 15px;
}

.btn-detalhes:hover {
  background-color: #7f8c8d;
}

/* Estilos da Vitrine de Livros */
.vitrine {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap; /* Permite que os cards quebrem a linha em telas menores */
}

.card-livro {
  background-color: white;
  border-radius: 8px;
  padding: 15px;
  width: 250px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.capa-livro {
  width: 150px;
  height: 220px;
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: 15px;
}

.info-livro h3 {
  font-size: 18px;
  margin-bottom: 5px;
  color: #333;
}

.autor {
  font-size: 14px;
  color: #7f8c8d;
  margin-bottom: 10px;
}

.preco {
  font-size: 20px;
  font-weight: bold;
  color: #2c3e50;
}
</style>