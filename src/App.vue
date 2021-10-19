<template>
  <Sidebar></Sidebar>
  <main class="content">
    <Navbar></Navbar>

    <!--  RENDERIZACION DE COMPONENTES -->
    <router-view />
    <!--  FIN -->
  </main>
</template>

<script>
import Sidebar from "./components/Sidebar.vue";
import Navbar from "./components/Navbar.vue";
export default {
  components: {
    Sidebar,
    Navbar,
  },
};
</script>

<style>
a.router-link-exact-active {
  color: #ffffff;
  font-weight: bold;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.308);
  padding: 5px;
}
</style>
