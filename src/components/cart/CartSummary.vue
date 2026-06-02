<script setup>
// Este arquivo é um componente Vue que representa o último 
// resumo do carrinho de compras, exibindo o total geral e um 
// botão para finalizar a compra.

const props = defineProps({
  total: {
    type: Number,
    required: true
  }
})

const finalCompra = () => {
  alert('Compra finalizada!')
}
</script>

<template>
  <div class="cart-summary">
    <div class="summary-info">
      <span>Total do carrinho:</span>
      <strong>R$ {{ total.toFixed(2) }}</strong>
    </div>

    <button type="button" @click="finalCompra">
      Finalizar compra
    </button>
  </div>
</template>

<style scoped>
.cart-summary {
  border-top: 2px solid #eee;
  padding-top: 16px;
  margin-top: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
}

.summary-info {
  display: flex;
  flex-direction: column;
}

.summary-info span {
  color: #555;
  font-size: 0.95rem;
}

.summary-info strong {
  font-size: 1.4rem;
  color: #111;
}

button {
  background: #2d8cff;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
}

button:hover {
  background: #1b6ed4;
}
</style>