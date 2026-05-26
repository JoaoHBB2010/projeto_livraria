<script setup>
// Este arquivo é para o componente CartItem.vue, 
// que representa um item individual no carrinho 
// de compras. Ele exibe as informações do produto, 
// como nome, preço e quantidade, e permite que o 
// usuário ajuste a quantidade ou remova o item do carrinho.

const props = defineProps(['item'])
import { products } from '@/data/products'
const emit = defineEmits([
  'incluir',
  'retirar',
  'remove'
])


</script>

<template>

    <h2>{{ item.titulo }}</h2>

    <p>autor: {{ item.autor }}</p>

    <p>Preço: R$ {{ item.preco }}</p>

    <p>resenha: {{ item.resenha }}</p>

    <p>capa: {{ item.capa }}</p>

    <button @click="emit('incluir', item.id)">
      +
    </button>

    <button @click="emit('retirar', item.id)">
      -
    </button>

    <button @click="emit('remove', item.id)">
      remover
    </button>
</template>

<style scoped>

</style>