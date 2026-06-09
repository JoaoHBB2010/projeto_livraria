<script setup>
import { ref } from 'vue'

defineProps({
  livro: Object
})

const mostrarDetalhes = ref(false)
</script>

<template>
  <div class="card-container">
    <div class="card">
      <img :src="livro.capa" :alt="livro.titulo" class="capa" />

      <h3>{{ livro.titulo }}</h3>
      <p class="preco">R$ {{ livro.preco }}</p>

      <button
        @click="mostrarDetalhes = !mostrarDetalhes"
        class="btn-detalhes"
      >
        {{ mostrarDetalhes ? 'Ocultar Detalhes' : 'Ver Detalhes' }}
      </button>

      <div v-if="mostrarDetalhes" class="detalhes">
        <p><strong>Autor:</strong> {{ livro.autor }}</p>
        <p><strong>Descrição:</strong> {{ livro.resenha }}</p>
      </div>
    </div>

    <button class="btn-carrinho">
      Adicionar ao Carrinho
    </button>
  </div>
</template>

<style scoped>
.card-container {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  background-color: #f9f9f9;
  transition: box-shadow 0.3s;
}

.card-container:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.capa {
  width: 100%;
  height: 220px;
  object-fit: cover;
  border-radius: 5px;
  margin-bottom: 10px;
}

h3 {
  font-size: 16px;
  margin: 10px 0;
  color: #333;
}

.preco {
  color: #27ae60;
  font-weight: bold;
  font-size: 20px;
  margin: 10px 0;
}

.btn-detalhes {
  background-color: #95a5a6;
  color: white;
  padding: 8px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 10px;
  font-size: 14px;
}

.btn-detalhes:hover {
  background-color: #7f8c8d;
}

.detalhes {
  background-color: #ecf0f1;
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 10px;
  text-align: left;
  font-size: 14px;
  color: black;
}

.btn-carrinho {
  width: 100%;
  background-color: #3498db;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  font-size: 14px;
}

.btn-carrinho:hover {
  background-color: #2980b9;
}
</style>
