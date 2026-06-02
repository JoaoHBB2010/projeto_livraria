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
  border-top: 1px solid #ccc;
  padding-top: 16px;
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
  font-size: 1.2rem;
}

button {
  background: #2d8cff;
  color: white;
  border: none;
  padding: 10px 18px;
  border-radius: 6px;
  cursor: pointer;
}

button:hover {
  background: #1b6ed4;
}
</style>