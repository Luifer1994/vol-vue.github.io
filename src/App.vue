<template>
  <Sidebar></Sidebar>
  <main class="content">
    <Navbar></Navbar>

    <!--  RENDERIZACION DE COMPONENTES -->
    <router-view />
    <!--  FIN -->
    <footer class="bg-white rounded shadow p-5 mb-4 mt-4">
      <div class="row">
        <div class="col-12 col-md-4 col-xl-6 mb-4 mb-md-0">
          <p class="mb-0 text-center text-lg-start">
            © 2021 - <span class="current-year"></span>
            <a
              class="text-primary fw-normal"
              href="https://luifer1994.github.io/"
              target="_blank"
              >Luifer Almendrales</a
            >
          </p>
        </div>
      </div>
    </footer>
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
