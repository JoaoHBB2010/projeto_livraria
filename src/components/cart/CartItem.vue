<script setup>
const props = defineProps({
  item: Object
})
const emit = defineEmits([
  'incluir',
  'retirar',
  'remove'
])
</script>

<template>
  <div class="cart-item">
    <img v-if="item.capa" :src="item.capa" alt="Capa do livro" />

    <div class="cart-item-info">
      <h2>{{ item.titulo }}</h2>
      <p>Autor: {{ item.autor }}</p>
      <p>Preço: R$ {{ item.preco.toFixed(2) }}</p>
      <p v-if="item.quantidade !== undefined">Quantidade: {{ item.quantidade }}</p>
      <p v-if="item.precoTotal !== undefined">Total: R$ {{ item.precoTotal.toFixed(2) }}</p>

      <div class="cart-item-botoes">
        <button @click="emit('incluir', item.id)">+</button>
        <button @click="emit('retirar', item.id)">-</button>
        <button class="btn-remover" @click="emit('remove', item.id)">Remover</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cart-item {
  display: flex;
  gap: 16px;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  padding: 14px;
  margin-bottom: 12px;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0,0,0,0.06);
}

.cart-item img {
  width: 80px;
  height: 110px;
  object-fit: cover;
  border-radius: 6px;
  flex-shrink: 0;
}

.cart-item-info {
  flex: 1;
}
.cart-item-info h2{
  color: #1a1a1a;
}

.cart-item-info h2 {
  font-size: 1rem;
  margin: 0 0 4px;
}

.cart-item-info p {
  margin: 2px 0;
  font-size: 0.88rem;
  color: #555;
}

.cart-item-botoes {
  margin-top: 10px;
  display: flex;
  gap: 8px;
}

.cart-item-botoes button {
  padding: 6px 14px;
  border: 1px solid #ccc;
  border-radius: 6px;
  background: #f5f5f5;
  cursor: pointer;
  font-size: 0.9rem;
}

.cart-item-botoes button:hover {
  background: #e8e8e8;
}

.btn-remover {
  background: #fff0f0 !important;
  border-color: #f5c6c6 !important;
  color: #e53935;
}

.btn-remover:hover {
  background: #fde0e0 !important;
}
</style>
