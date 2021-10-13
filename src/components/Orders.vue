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
      <h2 class="h4">Todas las ordenes</h2>
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
        Nueva Orden
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
            <a
              class="dropdown-item d-flex align-items-center fw-bold"
              href="#"
              @click="limitShow(10)"
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
            <a class="dropdown-item fw-bold" href="#" @click="limitShow(20)"
              >20</a
            >
            <a
              class="dropdown-item fw-bold rounded-bottom"
              href="#"
              @click="limitShow(30)"
              >30</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="card card-body border-0 shadow table-wrapper table-responsive">
    <div
      v-if="data.items == null"
      class="position-absolute top-50 start-50 translate-middle"
    >
      <div class="spinner-border text-success" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
    <table v-else class="table table-hover">
      <thead>
        <tr>
          <th class="border-gray-200">COD PEDIDO</th>
          <th class="border-gray-200">CLIENTE</th>
          <th class="border-gray-200">DIRECCION</th>
          <th class="border-gray-200">SUCURSAL</th>
          <th class="border-gray-200">Total</th>
          <th class="border-gray-200">ESTADO</th>
          <th class="border-gray-200">Action</th>
        </tr>
      </thead>
      <tbody>
        <!-- Item -->
        <tr v-for="item in data.items" :key="item">
          <td>
            <a href="#" class="fw-bold"> {{ item.cod_pedido }} </a>
          </td>
          <td>
            <span class="fw-normal">{{ item.tercero }}</span>
          </td>
          <td>
            <span class="fw-normal">{{ item.direccion }}</span>
          </td>
          <td>
            <span class="fw-normal">{{ item.sucursal }}</span>
          </td>
          <td>
            <span class="fw-bold">$ {{ formatPrice(item.valor_bruto) }}</span>
          </td>
          <td v-if="item.estado == 'Prueba'">
            <span class="badge rounded-pill bg-success">{{ item.estado }}</span>
          </td>
          <td v-else-if="item.estado == 'Pendiente'">
            <span class="badge rounded-pill bg-danger">{{ item.estado }}</span>
          </td>
          <td v-else>
            <span class="badge rounded-pill bg-warning">{{ item.estado }}</span>
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
          <li
            v-if="data.current > 1"
            class="page-item"
            @click="nexPage(data.first)"
          >
            <a class="page-link" href="#">{{ data.first }}</a>
          </li>
          <li class="page-item" @click="nexPage(data.previous)">
            <a class="page-link" href="#"><i class="fas fa-backward"></i></a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">{{ data.current }}</a>
          </li>
          <li class="page-item" @click="nexPage(data.next)">
            <a class="page-link" href="#"><i class="fas fa-forward"></i></a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#" @click="nexPage(data.last)">
              {{ data.last }}
            </a>
          </li>
        </ul>
      </nav>
      <div class="fw-normal small mt-4 mt-lg-0">
        Viendo <b>{{ data.limit }}</b> de <b>{{ data.total_items }}</b> Ordenes
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
      totalPage: 0,
      limit: 10,
      page: 1,
    };
  },
  mounted() {
    this.FechPage();
  },
  methods: {
    FechPage(page = this.page, val = this.limit) {
      axios
        .get(
          "http://localhost:7000/orders/list?page=" + page + "&&limit=" + val,
          {
            headers: {
              Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MzQxMjg4ODEsImp0aSI6IlB1bWlFczB4SXVTMUhqMEFXd3FvNEgwcmthbWVFKzNxNUV2MVVJVVJCV0k9IiwiaXNzIjoiIiwiZXhwIjoxNjM0MTMyNDgxLCJkYXRhIjp7ImNvZF9wYWlzIjoiMSIsImNvZF91c2VyIjoiMyIsImNvZF9wcm9maWxlIjoiNCIsImNvZF90ZXJjZXJvIjoiMyIsImNvZF9jb21wYW55IjoiMSJ9fQ.LY8aasX8ErJ3wCWt4EXPutT6vOFm70J4SE2tGRnEAaw`,
            },
          }
        )
        .then((response) => {
          this.data = response.data.data;
          this.totalPage = response.data.last;
          this.page = response.data.current;
        });
    },
    formatPrice(value) {
      let val = (value / 1).toFixed(2).replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    nexPage(page = null) {
      const limi = this.limit;
      this.FechPage(page, limi);
    },
    limitShow(val = null) {
      const pag = this.page;
      this.FechPage(pag, val);
    },
  },
};
</script>