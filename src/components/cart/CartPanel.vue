<script setup>
// Este arquivo é um componente Vue que permite ao 
// usuário visualizar e gerenciar os itens em seu carrinho 
// de compras. Ele exibe uma lista de itens, permite que o 
// usuário ajuste as quantidades ou remova itens, e mostra 
// um resumo do total do carrinho. O componente é projetado 
// para ser usado em uma página de carrinho de compras, onde 
// os usuários podem revisar seus itens antes de finalizar a compra.

import { ref, computed } from 'vue'
import CartItem from '@/components/cart/CartItem.vue'
import { carrinho } from '@/ultils/cartUtils'

const cartItems = ref([...carrinho])

const total = computed(() =>
  cartItems.value.reduce(
    (sum, item) => sum + (item.precoTotal ?? item.preco * item.quantidade),
    0
  )
)

function incluir(id) {
  const item = cartItems.value.find((p) => p.id === id)
  if (!item) return
  item.quantidade = (item.quantidade ?? 0) + 1
  item.precoTotal = item.quantidade * item.preco
}

function retirar(id) {
  const item = cartItems.value.find((p) => p.id === id)
  if (!item) return
  item.quantidade = (item.quantidade ?? 1) - 1
  if (item.quantidade <= 0) {
    remove(id)
    return
  }
  item.precoTotal = item.quantidade * item.preco
}

function remove(id) {
  cartItems.value = cartItems.value.filter((p) => p.id !== id)
}

</script>

<template>
  <div class="cart-panel">
    <h1>Carrinho</h1>

    <div v-if="cartItems.length">
      <CartItem
        v-for="item in cartItems"
        :key="item.id"
        :item="item"
        @incluir="incluir"
        @retirar="retirar"
        @remove="remove"
      />

      <div class="cart-total">
        <strong>Total:</strong> R$ {{ total.toFixed(2) }}
      </div>
    </div>

    <p v-else>O carrinho está vazio.</p>
  </div>
</template>

<style scoped>
.cart-panel {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.cart-total {
  margin-top: 20px;
  font-size: 1.2rem;
  text-align: right;
}
</style>