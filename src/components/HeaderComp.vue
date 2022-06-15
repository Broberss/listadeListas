<script setup></script>

<template>
  <header>
    <span><RouterLink to="/" class="botão"> Home </RouterLink></span>
    <span> | </span>
    <RouterView />
    <span>
      <RouterLink to="/listao" class="botão"> Lista de Listas </RouterLink>
    </span>
    <RouterView />
  </header>
</template>

<style scoped></style>
