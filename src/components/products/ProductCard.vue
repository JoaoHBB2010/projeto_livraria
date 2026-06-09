<script setup>
import { ref } from 'vue'

defineProps({
  livro: Object
})

const emit = defineEmits(['adicionarCarrinho'])

const mostrarDetalhes = ref(false)
</script>

<template>
  <div class="card-container">
    <div class="card-content">
      <div class="capa-wrapper">
        <img :src="livro.capa" :alt="livro.titulo" class="capa" />
      </div>

      <h3 class="titulo-livro">{{ livro.titulo }}</h3>
      <p class="autor-livro">Por: {{ livro.autor }}</p>
      <p class="preco">R$ {{ livro.preco.toFixed(2) }}</p>

      <button
        type="button"
        @click="mostrarDetalhes = !mostrarDetalhes"
        class="btn-detalhes"
        :class="{ 'btn-ativo': mostrarDetalhes }"
      >
        {{ mostrarDetalhes ? 'Ocultar Detalhes' : 'Ver Detalhes' }}
      </button>

      <Transition name="fade">
        <div v-if="mostrarDetalhes" class="detalhes">
          <p><strong>Descrição:</strong> {{ livro.resenha }}</p>
        </div>
      </Transition>
    </div>

    <button
      type="button"
      class="btn-carrinho"
      @click="emit('adicionarCarrinho', livro)"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" style="margin-right: 8px;">
        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
      </svg>
      Adicionar ao Carrinho
    </button>
  </div>
</template>

<style scoped>
.card-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 16px;
  background-color: #ffffff;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
}

.card-container:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  border-color: #cbd5e1;
}

.card-content {
  margin-bottom: 16px;
}

.capa-wrapper {
  width: 100%;
  height: 240px;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 12px;
  background-color: #f8fafc;
}

.capa {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.card-container:hover .capa {
  transform: scale(1.04);
}

.titulo-livro {
  font-size: 1.05rem;
  font-weight: 600;
  color: #1e293b;
  margin: 0 0 6px 0;
  line-height: 1.4;
  display: block; 
  line-clamp: 2; 
  -webkit-line-clamp: 2;
  overflow: hidden;
  height: 2.8rem;
}

.autor-livro {
  font-size: 0.85rem;
  color: #64748b;
  margin: 0 0 8px 0;
}

.preco {
  color: #10b981;
  font-weight: 700;
  font-size: 1.3rem;
  margin: 12px 0;
}

.btn-detalhes {
  background-color: #f1f5f9;
  color: #475569;
  padding: 8px 14px;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.85rem;
  font-weight: 500;
  transition: all 0.2s ease;
  width: 100%;
  margin-bottom: 8px;
}

.btn-detalhes:hover {
  background-color: #e2e8f0;
  color: #1e293b;
}

.btn-detalhes.btn-ativo {
  background-color: #475569;
  color: #ffffff;
  border-color: #475569;
}

.detalhes {
  background-color: #f8fafc;
  border-left: 3px solid #64748b;
  padding: 10px 12px;
  border-radius: 0 6px 6px 0;
  margin-top: 10px;
  font-size: 0.85rem;
  color: #334155;
  line-height: 1.5;
}

.btn-carrinho {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #2563eb;
  color: #ffffff;
  padding: 12px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.95rem;
  transition: background-color 0.2s ease, transform 0.1s ease;
}

.btn-carrinho:hover {
  background-color: #1d4ed8;
}

.btn-carrinho:active {
  transform: scale(0.98);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
