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
        @click="showModal"
        href="#"
        class="btn btn-sm btn-gray-800 d-inline-flex align-items-center"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <i class="fas fa-plus-circle"></i> <span class="p-1"></span>
        Nuevo Libro
      </a>
    </div>
  </div>
  <div class="table-settings mb-4">
    <div class="row align-items-center justify-content-between">
      <div class="col col-md-6 col-lg-3 col-xl-4">
        <div class="input-group me-2 me-lg-3 fmxw-400">
          <span class="input-group-text">
          <i class="fas fa-search"></i>
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
            <i class="fas fa-cog"></i>
            <span class="visually-hidden">Toggle Dropdown</span>
          </button>
          <div class="dropdown-menu dropdown-menu-xs dropdown-menu-end pb-0">
            <span class="small ps-3 fw-bold text-dark">Ver</span>
            <a
              @click="list(10)"
              class="dropdown-item d-flex align-items-center fw-bold"
              href="#"
              >10
            </a>
            <a @click="list(20)" class="dropdown-item fw-bold" href="#">20</a>
            <a
              @click="list(30)"
              class="dropdown-item fw-bold rounded-bottom"
              href="#"
              >30</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="card card-body border-0 shadow table-wrapper table-responsive">
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">NOMBRE</th>
          <th scope="col">DESCRIPCION</th>
          <th scope="col">FECHA CREACION</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in book.data" :key="item">
          <th scope="row">{{ item.id }}</th>
          <th>{{ item.name }}</th>
          <th>{{ item.description }}</th>
          <th>{{ item.created_at }}</th>
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
        <ul class="pagination mb-0 pagination-sm">
          <li class="page-item">
            <a class="page-link" @click="nexPage(book.prev_page_url)">
              <i class="fas fa-chevron-left"></i>
            </a>
          </li>
          <div v-for="(link, index) in links" :key="link.label">
            <li
              class="page-item active"
              v-if="link.active && index == link.label"
            >
              <a class="page-link" @click="nexPage(link.url)">{{ index }}</a>
            </li>
            <li v-else-if="index == link.label" class="page-item">
              <a class="page-link" @click="nexPage(link.url)">{{ index }}</a>
            </li>
          </div>
          <li class="page-item">
            <a class="page-link" @click="nexPage(book.next_page_url)">
              <i class="fas fa-chevron-right"></i>
            </a>
          </li>
        </ul>
      </nav>
      <div class="fw-normal small mt-4 mt-lg-0">
        Viendo <b>{{ book.from }}</b> de <b>{{ book.total }}</b> Libros
      </div>
    </div>
  </div>
  <!-- Modal -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    v-if="openModal"
    data-bs-backdrop="static"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Registrar Libro</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form action="">
            <input
              class="form-control"
              v-model="inputName"
              type="text"
              placeholder="Nombre"
              name="name"
            />
            <br />
            <input
              class="form-control"
              v-model="inputDescription"
              type="text"
              placeholder="Descripción"
              name="desciption"
            />
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" data-bs-dismiss="modal">
            Cancelar
          </button>
          <button
            v-if="inputName && inputDescription"
            @click="store"
            type="button"
            class="btn btn-info"
            data-bs-dismiss="modal"
          >
            Guardar
          </button>
          <button v-else @click="store" type="button" class="btn btn-info">
            Guardar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Books",
  data() {
    return {
      book: {},
      inputName: null,
      inputDescription: null,
      links: [],
      message: null,
      typeMessage: null,
      openModal: false,
      limitPage: 10,
    };
  },
  mounted() {
    this.list();
  },
  methods: {
    store() {
      var newBook = new Object();
      newBook.name = this.inputName;
      newBook.description = this.inputDescription;
      console.log(newBook);
      if (!newBook.name || !newBook.description) {
        if (!newBook.name) {
          this.message = "El nombre es requerido";
          this.typeMessage = "error";
          this.noty(this.message, this.typeMessage);
        }
        if (!newBook.description && newBook.name) {
          this.message = "La descripcion  es requerida";
          this.typeMessage = "error";
          this.noty(this.message, this.typeMessage);
        }
      } else {
        axios
          .post("http://127.0.0.1:8000/api/books-store", newBook)
          .then((result) => {
            console.log(result.data);
            this.message = result.data.message;
            this.typeMessage = "info";
            this.inputName = null;
            this.inputDescription = null;
            this.list();
            this.noty(this.message, this.typeMessage);
            this.openModal = false;
          });
      }
    },
    list(limit = null) {
      if (limit) {
         this.limitPage = limit;
      }
      axios
        .get("http://127.0.0.1:8000/api/books-list/" + this.limitPage)
        .then((response) => (this.book = response.data.data))
        .then((response) => (this.links = response.links));
    },
    nexPage(url) {
      axios
        .get(url)
        .then((response) => (this.book = response.data.data))
        .then((response) => (this.links = response.links));
    },
    showModal() {
      this.openModal = true;
    },
    noty(message, typeMessage) {
      const notyf = new window.noty({
        position: {
          x: "rigth",
          y: "top",
        },
        types: [
          {
            type: "info",
            background: "#06AB17",
            icon: {
              className: "fas fa-check-double",
              tagName: "span",
              color: "#fff",
            },
            dismissible: false,
          },
        ],
      });
      notyf.open({
        type: typeMessage,
        message: message,
      });
    },
  },
};
</script>
