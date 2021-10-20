<template>
  <div class="">
    <nav
      id="sidebarMenu"
      class="sidebar d-lg-block bg-gray-800 text-white collapse"
      data-simplebar
    >
      <div class="sidebar-inner px-4 pt-3">
        <div
          class="user-card d-flex d-md-none align-items-center justify-content-between justify-content-md-center pb-4"
        >
          <div class="d-flex align-items-center">
            <div class="avatar-lg me-4">
              <img
                src="https://www.shareicon.net/data/2016/05/26/771188_man_512x512.png"
                class="card-img-top rounded-circle border-white"
                alt="Bonnie Green"
              />
            </div>
            <div class="d-block">
              <h2 class="h5 mb-3">Hi, Jane</h2>
              <a
                href="#"
                class="btn btn-secondary btn-sm d-inline-flex align-items-center"
              >
                <svg
                  class="icon icon-xxs me-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0
                                        01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3
                                        3 0 013 3v1"
                  ></path>
                </svg>
                Sign Out
              </a>
            </div>
          </div>
          <div class="collapse-close d-md-none">
            <a
              href="#sidebarMenu"
              data-bs-toggle="collapse"
              data-bs-target="#sidebarMenu"
              aria-controls="sidebarMenu"
              aria-expanded="true"
              aria-label="Toggle navigation"
            >
              <svg
                class="icon icon-xs"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0
                                    011.414 0L10 8.586l4.293-4.293a1 1 0 111.414
                                    1.414L11.414 10l4.293 4.293a1 1 0 01-1.414
                                    1.414L10 11.414l-4.293 4.293a1 1 0
                                    01-1.414-1.414L8.586 10 4.293 5.707a1 1 0
                                    010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
        <ul id="nav" class="nav flex-column pt-3 pt-md-0">
          <li class="nav-item">
            <router-link
              to="/"
              class="nav-link"
              data-bs-toggle="collapse"
              data-bs-target="#sidebarMenu"
            >
              <div data-bs-toggle="collapse" data-bs-target="#sidebarMenu">
                <span class="sidebar-icon">
                  <i class="fas fa-chart-pie"></i>
                </span>
                <span class="sidebar-text">Home</span>
              </div>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/transactions" class="nav-link">
              <div data-bs-toggle="collapse" data-bs-target="#sidebarMenu">
                <span class="sidebar-icon">
                  <i class="fas fa-credit-card"></i>
                </span>
                <span class="sidebar-text">Transacciones</span>
              </div>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/orders" class="nav-link">
              <div data-bs-toggle="collapse" data-bs-target="#sidebarMenu">
                <span class="sidebar-icon">
                  <i class="fas fa-users"></i>
                </span>
                <span class="sidebar-text">Usuarios</span>
              </div>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/libros" class="nav-link">
              <div data-bs-toggle="collapse" data-bs-target="#sidebarMenu">
                <span class="sidebar-icon">
                  <i class="fas fa-users"></i>
                </span>
                <span class="sidebar-text">Libros</span>
              </div>
            </router-link>
          </li>
          <li class="nav-item">
            <a
              href="#"
              class="btn btn-secondary d-flex align-items-center justify-content-center btn-upgrade-pro"
            >
              <span
                class="sidebar-icon d-inline-flex align-items-center justify-content-center"
              >
              </span>
              <span><img style="width: 25px" src="https://vuejs.org/images/logo.svg" /> Vue JS</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
    <nav class="navbar navbar-dark navbar-theme-primary px-4 col-12 d-lg-none">
    <a class="navbar-brand me-lg-5" href="/">
      <img
        class="navbar-brand-dark"
        src="https://vuejs.org/images/logo.svg"
        alt="Volt logo"
      />
    </a>
    <div class="d-flex align-items-center">
      <button
        class="navbar-toggler d-lg-none collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#sidebarMenu"
        aria-controls="sidebarMenu"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>
  </nav>
  </div>
</template>
<script>
export default {
  name: "Sidebar",
};
</script>
