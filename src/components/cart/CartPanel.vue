<script setup>
import { ref, computed } from 'vue'
import CartItem from '@/components/cart/CartItem.vue'
import CartSummary from '@/components/cart/CartSummary.vue'
import { carrinho } from '@/ultils/cartUtils' 

const cartItems = carrinho

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
  const index = cartItems.value.findIndex((p) => p.id === id)
  if (index !== -1) {
    cartItems.value.splice(index, 1)
  }
}
</script>

<template>
  <div class="cart-panel">
    <h1>Carrinho de Compras</h1>
    
    <div v-if="cartItems.length">
      <CartItem
        v-for="item in cartItems"
        :key="item.id"
        :item="item"
        @incluir="incluir"
        @retirar="retirar"
        @remove="remove"
      />

      <CartSummary :total="total" />
    </div>

    <p v-else class="carrinho-vazio">
      O carrinho está vazio.
    </p>

  </div>
</template>

<style scoped>
.cart-panel {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.cart-panel h1 {
  font-size: 1.5rem;
  margin-bottom: 20px;
  border-bottom: 2px solid #eee;
  padding-bottom: 10px;
}

.carrinho-vazio {
  text-align: center;
  color: #aaa;
  margin-top: 40px;
  font-size: 2rem;
  align-items: center;
  color: #0ba720;
  font-weight: bold;
  margin-top: 15vw;
  background: #eee;
  border: #0ba720 solid 5px;
  border-radius: 10px;
}
</style>