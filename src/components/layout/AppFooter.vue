<script setup>
</script>

<template>
  <footer>
    <div>
        <h1>
            <RouterLink><img src="/public/logoDefinitiva.png" alt="LOGO"></RouterLink>
        </h1>
    </div>

    <a href="#">VOLTAR AO TOPO</a>
  </footer>
</template>

<style scoped>
footer{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    border-top: 2px solid #0ba720;
    background: #ffffff;
    color: #0ba720;
    margin-top: auto;
    display: flex;
    align-items: center;
}
footer a{
    text-decoration: none;
    padding-left: 11%;
}
footer img{
    max-width: 15%;
}
</style>