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
import CartSummary from '@/components/cart/CartSummary.vue'
import { carrinho } from '@/ultils/cartUtils'
import ProdutoCard from '@/components/ProdutoCard.vue'
import { produtos } from '@/data/products'

const cartItems = ref([...carrinho])

const livros = ref(produtos)

const total = computed(() =>
  cartItems.value.reduce(
    (sum, item) => sum + (item.precoTotal ?? item.preco * item.quantidade),
    0
  )
)

function adicionarCarrinho(livro) {
  const item = cartItems.value.find(i => i.id === livro.id)

  if (item) {
    item.quantidade = (item.quantidade ?? 1) + 1
    item.precoTotal = item.quantidade * item.preco
  } else {
    cartItems.value.push({
      ...livro,
      quantidade: 1,
      precoTotal: livro.preco
    })
  }
}

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
    <h1>Carrinho sla</h1>
    <div class="produtos">
      <ProdutoCard
        v-for="livro in livros"
        :key="livro.id"
        :livro="livro"
        @adicionarCarrinho="adicionarCarrinho"
      />
    </div>

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
  font-size: 1rem;
}
</style>
