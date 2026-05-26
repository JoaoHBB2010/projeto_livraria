<script setup>
  import { RouterLink } from 'vue-router';
</script>

<template>
  <header>
    <nav>
      <h1><RouterLink to="/"><img src="/public/logoDefinitiva.png" alt="LOGO"></RouterLink></h1>
      <ul>
        <li><RouterLink to="/">Home</RouterLink></li>
        <li><RouterLink to="/produtos">Produtos</RouterLink></li>
        <li><RouterLink to="/carrinho">Carrinho</RouterLink></li>
        <li><RouterLink to="/categorias">Categorias</RouterLink></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header{
    position: fixed;
    top: 0; left: 0;
    width: 100%;  
    background: #ffff;
    z-index: 100;
    padding: 16px;
    border-bottom: 2px solid #0ba720;
    box-sizing: border-box;
}

nav{
    display: flex;
    gap: 16px;
    align-items: center;
}
ul{
  display: flex;
  gap: 16px;
}
h1{
  margin: 0 auto 0 0;
  color: black;
}
h1 img{
  max-width: 15%;
}
a{
    text-decoration: none;
    color: #0ba720;
}
.router-link-active{
    font-weight: bold;
}
</style>