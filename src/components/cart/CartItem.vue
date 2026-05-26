<script setup>
// Este arquivo é para o componente CartItem.vue, 
// que representa um item individual no carrinho 
// de compras. Ele exibe as informações do produto, 
// como nome, preço e quantidade, e permite que o 
// usuário ajuste a quantidade ou remova o item do carrinho.

const { item } = defineProps(['item'])
import { products } from '@/data/products'
const emit = defineEmits([
  'incluir',
  'retirar',
  'remove'
])


</script>

<template>

  <div class="cart-item">

    <h2>{{ item.titulo }}</h2>

    <p>Autor: {{ item.autor }}</p>

    <p>Preço: R$ {{ item.preco }}</p>

    <p>Resenha: {{ item.resenha }}</p>

    <p>Capa: {{ item.capa }}</p>

    <p>Categoria: {{ item.categoria }}</p>

    <button @click="emit('incluir', item.id)">
      +
    </button>

    <button @click="emit('retirar', item.id)">
      -
    </button>

    <button @click="emit('remove', item.id)">
      remover
    </button>

  </div>

</template>

<style scoped>

.cart-item {
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
}

button {
  margin-right: 5px;
}

</style>