<template>
  <div
    class="
      d-flex
      justify-content-between
      flex-wrap flex-md-nowrap
      align-items-center
      py-4
    "
  >
    <div class="d-block mb-4 mb-md-0">
      <h2 class="h4">Todos los usuarios</h2>
    </div>
    <div class="btn-toolbar mb-2 mb-md-0">
      <a
        href="#"
        class="btn btn-sm btn-gray-800 d-inline-flex align-items-center"
      >
        <svg
          class="icon icon-xs me-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          ></path>
        </svg>
        Nuev Usuario
      </a>
      <div class="btn-group ms-2 ms-lg-3">
        <button type="button" class="btn btn-sm btn-outline-gray-600">
          Exportar
        </button>
      </div>
    </div>
  </div>
  <div class="table-settings mb-4">
    <div class="row align-items-center justify-content-between">
      <div class="col col-md-6 col-lg-3 col-xl-4">
        <div class="input-group me-2 me-lg-3 fmxw-400">
          <span class="input-group-text">
            <svg
              class="icon icon-xs"
              x-description="Heroicon name: solid/search"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100
                                        8 4 4 0 000-8zM2 8a6 6 0 1110.89
                                        3.476l4.817 4.817a1 1 0 01-1.414
                                        1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </span>
          <input type="text" class="form-control" placeholder="Search orders" />
        </div>
      </div>
      <div class="col-4 col-md-2 col-xl-1 ps-md-0 text-end">
        <div class="dropdown">
          <button
            class="
              btn btn-link
              text-dark
              dropdown-toggle dropdown-toggle-split
              m-0
              p-1
            "
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <svg
              class="icon icon-sm"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M11.49
                                        3.17c-.38-1.56-2.6-1.56-2.98 0a1.532
                                        1.532 0
                                        01-2.286.948c-1.372-.836-2.942.734-2.106
                                        2.106.54.886.061 2.042-.947
                                        2.287-1.561.379-1.561 2.6 0 2.978a1.532
                                        1.532 0 01.947 2.287c-.836 1.372.734
                                        2.942 2.106 2.106a1.532 1.532 0
                                        012.287.947c.379 1.561 2.6 1.561 2.978
                                        0a1.533 1.533 0 012.287-.947c1.372.836
                                        2.942-.734 2.106-2.106a1.533 1.533 0
                                        01.947-2.287c1.561-.379 1.561-2.6
                                        0-2.978a1.532 1.532 0
                                        01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532
                                        1.532 0 01-2.287-.947zM10 13a3 3 0 100-6
                                        3 3 0 000 6z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="visually-hidden">Toggle Dropdown</span>
          </button>
          <div class="dropdown-menu dropdown-menu-xs dropdown-menu-end pb-0">
            <span class="small ps-3 fw-bold text-dark">Show</span>
            <a class="dropdown-item d-flex align-items-center fw-bold" href="#"
              >10
              <svg
                class="icon icon-xxs ms-auto"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707
                                            5.293a1 1 0 010 1.414l-8 8a1 1 0
                                            01-1.414 0l-4-4a1 1 0
                                            011.414-1.414L8 12.586l7.293-7.293a1
                                            1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path></svg
            ></a>
            <a class="dropdown-item fw-bold" href="#">20</a>
            <a class="dropdown-item fw-bold rounded-bottom" href="#">30</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="card card-body border-0 shadow table-wrapper table-responsive">
    <div
      v-if="data == null"
      class="position-absolute top-50 start-50 translate-middle"
    >
      <div class="text-center">
        <div class="spinner-grow text-success" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
    <table v-else class="table table-hover">
      <thead>
        <tr>
          <th class="border-gray-200">ID</th>
          <th class="border-gray-200">NOMBRE</th>
          <th class="border-gray-200">NOMBRE USUARIO</th>
          <th class="border-gray-200">EMAIL</th>
          <th class="border-gray-200">DIRECCION</th>
          <th class="border-gray-200">TEL</th>
          <th class="border-gray-200">Action</th>
        </tr>
      </thead>
      <tbody>
        <!-- Item -->
        <tr v-for="item in data" :key="item">
          <td>
            <a href="#" class="fw-bold"> {{ item.id }} </a>
          </td>
          <td>
            <a href="#" class="fw-bold"> {{ item.name }} </a>
          </td>
          <td>
            <a href="#" class="fw-bold"> {{ item.username }} </a>
          </td>
          <td>
            <a href="#" class="fw-bold"> {{ item.email }} </a>
          </td>
          <td>
            <a href="#" class="fw-bold"> {{ item.address.street }} </a>
          </td>
          <td>
            <a href="#" class="fw-bold"> {{ item.phone }} </a>
          </td>
          <td>
            <div class="btn-group">
              <button
                class="
                  btn btn-link
                  text-dark
                  dropdown-toggle dropdown-toggle-split
                  m-0
                  p-0
                "
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span class="icon icon-sm">
                  <svg
                    class="icon icon-sm"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M11.49
                                        3.17c-.38-1.56-2.6-1.56-2.98 0a1.532
                                        1.532 0
                                        01-2.286.948c-1.372-.836-2.942.734-2.106
                                        2.106.54.886.061 2.042-.947
                                        2.287-1.561.379-1.561 2.6 0 2.978a1.532
                                        1.532 0 01.947 2.287c-.836 1.372.734
                                        2.942 2.106 2.106a1.532 1.532 0
                                        012.287.947c.379 1.561 2.6 1.561 2.978
                                        0a1.533 1.533 0 012.287-.947c1.372.836
                                        2.942-.734 2.106-2.106a1.533 1.533 0
                                        01.947-2.287c1.561-.379 1.561-2.6
                                        0-2.978a1.532 1.532 0
                                        01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532
                                        1.532 0 01-2.287-.947zM10 13a3 3 0 100-6
                                        3 3 0 000 6z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
                <span class="visually-hidden">Toggle Dropdown</span>
              </button>
              <div class="dropdown-menu py-0">
                <a class="dropdown-item rounded-top" href="#"
                  ><span class="fas fa-eye me-2"></span>Ver Detalle</a
                >
                <a class="dropdown-item" href="#"
                  ><span class="fas fa-edit me-2"></span>Editar</a
                >
                <a class="dropdown-item text-danger rounded-bottom" href="#"
                  ><span class="fas fa-trash-alt me-2"></span>Eliminar</a
                >
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <div
      class="
        card-footer
        px-3
        border-0
        d-flex
        flex-column flex-lg-row
        align-items-center
        justify-content-between
      "
    >
      <nav aria-label="Page navigation example">
        <ul class="pagination mb-0">
          <li class="page-item">
            <a class="page-link" href="#">Previous</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">1</a>
          </li>
          <li class="page-item active">
            <a class="page-link" href="#">2</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">3</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">4</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">5</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">Next</a>
          </li>
        </ul>
      </nav>
      <div class="fw-normal small mt-4 mt-lg-0">
        Viendo <b>10</b> de <b>10</b> Ordenes
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Orders",
  data() {
    return {
      data: [],
    };
  },
  mounted() {
    this.FechPage();
  },
  methods: {
    FechPage() {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
          this.data = response.data;
        });
    },
  },
};
</script>