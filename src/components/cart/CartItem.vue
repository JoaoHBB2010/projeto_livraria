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
    <h2>{{ item.titulo }}</h2>
    <p>Autor: {{ item.autor }}</p>
    <p>Preço: R$ {{ item.preco }}</p>
    <p>Resenha: {{ item.resenha }}</p>

    <img v-if="item.capa" :src="item.capa" alt="Capa do livro" />

    <p v-if="item.quantidade !== undefined">Quantidade: {{ item.quantidade }}</p>
    <p v-if="item.precoTotal !== undefined">Total: R$ {{ item.precoTotal }}</p>

    <button @click="emit('incluir', item.id)">+</button>
    <button @click="emit('retirar', item.id)">-</button>
    <button @click="emit('remove', item.id)">remover</button>
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

img {
  max-width: 100%;
  height: auto;
  display: block;
  margin: 10px 0;
}
</style>