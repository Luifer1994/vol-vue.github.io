<template>
<nav id="sidebarMenu" class="sidebar d-lg-block bg-gray-800 text-white
            collapse" data-simplebar>
    <div class="sidebar-inner px-4 pt-3">
        <div class="user-card d-flex d-md-none align-items-center
                    justify-content-between justify-content-md-center pb-4">
            <div class="d-flex align-items-center">
                <div class="avatar-lg me-4">
                    <img src="../public/assets/img/team/profile-picture-3.jpg" class="card-img-top rounded-circle border-white" alt="Bonnie Green">
                </div>
                <div class="d-block">
                    <h2 class="h5 mb-3">Hi, Jane</h2>
                    <a href="../pages/examples/sign-in.html" class="btn
                                btn-secondary btn-sm d-inline-flex
                                align-items-center">
                        <svg class="icon icon-xxs me-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0
                                        01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3
                                        3 0 013 3v1"></path>
                        </svg> Sign Out
                    </a>
                </div>
            </div>
            <div class="collapse-close d-md-none">
                <a href="#sidebarMenu" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="true" aria-label="Toggle navigation">
                    <svg class="icon icon-xs" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M4.293 4.293a1 1 0
                                    011.414 0L10 8.586l4.293-4.293a1 1 0 111.414
                                    1.414L11.414 10l4.293 4.293a1 1 0 01-1.414
                                    1.414L10 11.414l-4.293 4.293a1 1 0
                                    01-1.414-1.414L8.586 10 4.293 5.707a1 1 0
                                    010-1.414z" clip-rule="evenodd"></path>
                    </svg>
                </a>
            </div>
        </div>
        <ul id="nav" class="nav flex-column pt-3 pt-md-0">
            <li class="nav-item">
                <router-link to="/" class="nav-link">
                        <span class="sidebar-icon">
                            <svg class="icon icon-xs me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16
                                        0z"></path>
                                <path d="M12 2.252A8.014
                                        8.014 0 0117.748 8H12V2.252z"></path>
                            </svg>
                        </span>
                        <span class="sidebar-text">Home</span>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link to="/transactions" class="nav-link">
                        <span class="sidebar-icon">
                            <svg class="icon icon-xs me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0
                                        00-2-2H4z"></path>
                                <path fill-rule="evenodd" d="M18 9H2v5a2 2 0
                                        002 2h12a2 2 0 002-2V9zM4 13a1 1 0
                                        011-1h1a1 1 0 110 2H5a1 1 0
                                        01-1-1zm5-1a1 1 0 100 2h1a1 1 0
                                        100-2H9z" clip-rule="evenodd"></path>
                            </svg>
                        </span>
                        <span class="sidebar-text">Transacciones</span>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link to="/orders" class="nav-link">
                        <span class="sidebar-icon">
                            <i class="fas fa-shopping-bag"></i>
                        </span>
                        <span class="sidebar-text">Ordenes</span>
                </router-link>
            </li>
            <li class="nav-item">
                <a href="#" class="btn
                            btn-secondary d-flex align-items-center
                            justify-content-center btn-upgrade-pro">
                    <span class="sidebar-icon d-inline-flex
                                align-items-center justify-content-center">
                    </span>
                    <span><img style="width:25px" src="./assets/logo.png" /> Vue JS</span>
                </a>
            </li>
        </ul>
    </div>
</nav>
<nav class="navbar navbar-dark navbar-theme-primary px-4 col-12
            d-lg-none">
    <a class="navbar-brand me-lg-5" href="/">
        <img class="navbar-brand-dark" src="/public/assets/img/brand/light.svg" alt="Volt logo" /> <img class="navbar-brand-light" src="/public/assets/img/brand/dark.svg" alt="Volt logo" />
    </a>
    <div class="d-flex align-items-center">
        <button class="navbar-toggler d-lg-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
    </div>
</nav>
<main class="content">
    <nav class="navbar navbar-top navbar-expand navbar-dashboard
                navbar-dark ps-0 pe-2 pb-0">
        <div class="container-fluid px-0">
            <div class="d-flex justify-content-between w-100" id="navbarSupportedContent">
                <div class="d-flex align-items-center">
                    <!-- Search form -->
                    <form class="navbar-search form-inline" id="navbar-search-main">
                        <div class="input-group input-group-merge
                                    search-bar">
                            <span class="input-group-text" id="topbar-addon">
                                <svg class="icon icon-xs" x-description="Heroicon name:
                                            solid/search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M8 4a4
                                                4 0 100 8 4 4 0 000-8zM2 8a6 6 0
                                                1110.89 3.476l4.817 4.817a1 1 0
                                                01-1.414 1.414l-4.816-4.816A6 6
                                                0 012 8z" clip-rule="evenodd"></path>
                                </svg>
                            </span>
                            <input type="text" class="form-control" id="topbarInputIconLeft" placeholder="Search" aria-label="Search" aria-describedby="topbar-addon">
                        </div>
                    </form>
                    <!-- / Search form -->
                </div>
                <!-- Navbar links -->
                <ul class="navbar-nav align-items-center">
                    <li class="nav-item dropdown ms-lg-3">
                        <a class="nav-link dropdown-toggle pt-1 px-0" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <div class="media d-flex
                                        align-items-center">
                                <img class="avatar rounded-circle" alt="Image placeholder" src="../public/assets/img/team/profile-picture-1.jpg">
                                <div class="media-body ms-2 text-dark
                                            align-items-center d-none
                                            d-lg-block">
                                    <span class="mb-0 font-small fw-bold
                                                text-gray-900">Bonnie Green</span>
                                </div>
                            </div>
                        </a>
                        <div class="dropdown-menu dashboard-dropdown
                                    dropdown-menu-end mt-2 py-1">
                            <a class="dropdown-item d-flex
                                        align-items-center" href="#">
                                <svg class="dropdown-icon text-gray-400
                                            me-2" fill="currentColor" viewBox="0
                                            0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M18 10a8
                                                8 0 11-16 0 8 8 0 0116 0zm-6-3a2
                                                2 0 11-4 0 2 2 0 014 0zm-2 4a5 5
                                                0 00-4.546 2.916A5.986 5.986 0
                                                0010 16a5.986 5.986 0
                                                004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path>
                                </svg> My Profile
                            </a>
                            <div role="separator" class="dropdown-divider my-1"></div>
                            <a class="dropdown-item d-flex
                                        align-items-center" href="#">
                                <svg class="dropdown-icon text-danger
                                            me-2" fill="none" stroke="currentColor" viewBox="0 0
                                            24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0
                                                0l-4-4m4 4H7m6 4v1a3 3 0 01-3
                                                3H6a3 3 0 01-3-3V7a3 3 0
                                                013-3h4a3 3 0 013 3v1"></path>
                                </svg> Logout
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <!--  RENDERIZACION DE COMPONENTES -->
    <router-view />
    <!--  FIN -->
    <footer class="bg-white rounded shadow p-5 mb-4 mt-4">
        <div class="row">
            <div class="col-12 col-md-4 col-xl-6 mb-4 mb-md-0">
                <p class="mb-0 text-center text-lg-start">© 2019-<span class="current-year"></span> <a class="text-primary fw-normal" href="https://themesberg.com" target="_blank">Themesberg</a></p>
            </div>
        </div>
    </footer>
</main>
</template>

<style>
a.router-link-exact-active {
    color: #ffffff;
    font-weight: bold;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.308);
    padding: 5px;
} 
</style>
