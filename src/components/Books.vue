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
      <h2 class="h4">Todos los libros</h2>
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
  <div v-if="book == null" class="text-center">
    <div
      class="spinner-grow text-success m-5"
      style="width: 8rem; height: 8rem"
      role="status"
    >
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
  <div
    v-else
    class="card card-body border-0 shadow table-wrapper table-responsive"
  >
    <table class="table table-hover">
      <thead>
        <tr>
          <th class="border-gray-200">ID</th>
          <th class="border-gray-200">NOMBRE</th>
          <th class="border-gray-200">DESCRIPCION</th>
          <th class="border-gray-200">FECHA CREACION</th>
          <th class="border-gray-200">ACIONES</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in book.data" :key="item">
          <td class="fw-bold">{{ item.id }}</td>
          <td class="fw-bold">{{ item.name }}</td>
          <td class="fw-bold">{{ item.description }}</td>
          <td class="fw-bold">{{ formatDate(item.created_at) }}</td>
          <td class="fw-bold">
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
                <span class="icon icon">
                  <i class="fas fa-cog" style="font-size: 20px"></i>
                </span>
                <span class="visually-hidden">Toggle Dropdown</span>
              </button>
              <div class="dropdown-menu py-0">
                <a class="dropdown-item rounded-top" href="#"
                  ><span class="fas fa-eye me-2"></span>View Details</a
                >
                <a
                  @click="edit(item.id, item.name, item.description)"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  class="dropdown-item text-info rounded-bottom"
                  ><span class="fas fa-edit me-2"></span>Editar</a
                >
                <a
                  @click="swal(item.id)"
                  class="dropdown-item text-danger rounded-bottom"
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
    data-bs-backdrop="static"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
            {{ titleModal }} Libro
          </h5>
          <button
            @click="cancel"
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
          <button
            @click="cancel"
            type="button"
            class="btn btn-danger"
            data-bs-dismiss="modal"
          >
            Cancelar
          </button>
          <div v-if="editing">
            <button
              v-if="inputName && inputDescription"
              @click="updated"
              type="button"
              class="btn btn-info"
              data-bs-dismiss="modal"
            >
              Actualizar
            </button>
            <button v-else @click="updated" type="button" class="btn btn-info">
              Actualizar
            </button>
          </div>
          <div v-else>
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
  </div>
</template>
<script>
import axios from "axios";
import moment from "moment";
export default {
  name: "Books",
  data() {
    return {
      book: null,
      idBook: null,
      inputName: null,
      inputDescription: null,
      links: [],
      message: null,
      typeMessage: null,
      limitPage: 10,
      editing: false,
      Url: null,
      titleModal: "Registrar",
      token : localStorage.getItem('token')
    };
  },
  mounted() {
    this.list();
  },
  methods: {
    formatDate(value) {
      moment.locale("es");
      if (value) {
        return moment(String(value)).format("LL");
      }
    },
    store() {
      var newBook = new Object();
      newBook.name = this.inputName;
      newBook.description = this.inputDescription;
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
          .post(
            "https://miapi.live/public/api/books-store",
            newBook, { headers: { Authorization: `Bearer ${this.token}` } }
          )
          .then((result) => {
            this.message = result.data.message;
            this.typeMessage = "info";
            this.inputName = null;
            this.inputDescription = null;
            this.list(this.limitPage);
            this.noty(this.message, this.typeMessage);
            this.openModal = false;
          });
      }
    },
    cancel() {
      this.titleModal = "Registrar";
      this.inputName = null;
      this.inputDescription = null;
      this.idBook = null;
    },
    edit(id, name, description) {
      this.titleModal = "Editar";
      this.editing = true;
      this.idBook = id;
      this.inputName = name;
      this.inputDescription = description;
    },
    updated() {
      var editBook = new Object();
      editBook.name = this.inputName;
      editBook.description = this.inputDescription;
      if (!editBook.name || !editBook.description) {
        if (!editBook.name) {
          this.message = "El nombre es requerido";
          this.typeMessage = "error";
          this.noty(this.message, this.typeMessage);
        }
        if (!editBook.description && editBook.name) {
          this.message = "La descripcion  es requerida";
          this.typeMessage = "error";
          this.noty(this.message, this.typeMessage);
        }
      } else {
        axios
          .put(
            "https://miapi.live/public/api/books-update/" +
              this.idBook,
            editBook, { headers: { Authorization: `Bearer ${this.token}` } }
          )
          .then((result) => {
            this.message = result.data.message;
            this.typeMessage = "info";
            this.inputName = null;
            this.inputDescription = null;
            this.idBook = null;
            if (this.Url) {
              this.nexPage(this.Url);
            } else {
              this.list();
            }
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
        .get(
          "https://miapi.live/public/api/books-list/" +
            this.limitPage, { headers: { Authorization: `Bearer ${this.token}` } }
        )
        .then((response) => (this.book = response.data.data))
        .then((response) => (this.links = response.links));
    },
    nexPage(url) {
      this.Url = url;
      axios
        .get(this.Url)
        .then((response) => (this.book = response.data.data))
        .then((response) => (this.links = response.links));
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
    swal(id) {
      window.Swal.fire({
        title: "¿Estas seguro?",
        text: "Despues de elminado ni podras recuperarlo!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, Borrar!",
        cancelButtonText: "Cancelar",
      }).then((result) => {
        if (result.isConfirmed) {
          axios
            .delete(
              "https://miapi.live/public/api/books-delete/" +
                id, { headers: { Authorization: `Bearer ${this.token}` } }
            )
            .then((result) => {
              this.message = result.data.message;
              this.typeMessage = "info";
              if (this.Url) {
                this.nexPage(this.Url);
              } else {
                this.list();
              }
              this.noty(this.message, this.typeMessage);
            });
          /*  window.Swal.fire("Deleted!", "Your file has been deleted.", "success"); */
        }
      });
    },
  },
};
</script>
