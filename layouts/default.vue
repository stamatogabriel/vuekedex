<template>
  <v-app>
    <v-app-bar app :elevation="4">
      <div class="container header">
        <v-img class="title-image" src="/pokedex.png" alt="Vuekedex" />
        <v-toolbar-title>
          Vuekedex
        </v-toolbar-title>
      </div>
    </v-app-bar>
    <v-main>
      <div class="container">
        <slot />
      </div>
    </v-main>
  </v-app>
</template>

<style>
.container {
  width: 100%;
  max-width: 1300px;
  margin: 0 auto 1rem;
  padding: 0 20px;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.v-app-bar {
  color: #333 !important;
  background-color: #f5f5f5 !important;
  font-weight: bold;
}

.v-toolbar-title__placeholder {
  font-size: 1.5rem;
  font-weight: bold !important;
  margin: 0 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.title-image {
  width: 40px;
  height: 40px;
}

.v-img__img {
  width: auto;
}
</style>