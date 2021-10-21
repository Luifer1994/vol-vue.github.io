<template>
  <div
    class="modal fade"
    id="myModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="modal-form"
    aria-hidden="true"
    data-bs-backdrop="static" data-bs-keyboard="false"
  >
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-body p-0">
          <div class="card p-3 p-lg-4">
            <div class="text-center text-md-center mb-4 mt-md-0">
              <h1 class="mb-0 h4">Iniciar sesión</h1>
            </div>
            <form class="mt-4">
              <!-- Form -->
              <div class="form-group mb-4">
                <label for="email">Email</label>
                <div class="input-group">
                  <span class="input-group-text" id="basic-addon1">
                    <svg
                      class="icon icon-xs text-gray-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                      ></path>
                      <path
                        d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                      ></path>
                    </svg>
                  </span>
                  <input
                    v-model="userEmail"
                    type="email"
                    class="form-control"
                    placeholder="example@company.com"
                    id="email"
                    autofocus
                    required
                  />
                </div>
              </div>
              <!-- End of Form -->
              <div class="form-group">
                <!-- Form -->
                <div class="form-group mb-4">
                  <label for="password">Password</label>
                  <div class="input-group">
                    <span class="input-group-text" id="basic-addon2">
                      <svg
                        class="icon icon-xs text-gray-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </span>
                    <input
                      v-model="userPassword"
                      type="password"
                      placeholder="Password"
                      class="form-control"
                      id="password"
                      required
                    />
                  </div>
                </div>
              </div>
              <div class="d-grid">
                <button @click="login" class="btn btn-gray-800">Login</button>
              </div>
            </form>
            <div class="d-flex justify-content-center my-4">
              <a
                href="#"
                class="btn btn-icon-only btn-pill btn-outline-gray-500 me-2"
                type="button"
                aria-label="facebook button"
                title="facebook button"
              >
               <i class="fab fa-facebook-f"></i>
              </a>
              <a
                href="#"
                class="btn btn-icon-only btn-pill btn-outline-gray-500 me-2"
                type="button"
                aria-label="twitter button"
                title="twitter button"
              >
               <i class="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                class="btn btn-icon-only btn-pill btn-outline-gray-500"
                type="button"
                aria-label="github button"
                title="github button"
              >
               <i class="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "login",
  data() {
    return {
      userEmail: null,
      userPassword: null,
    };
  },
  mounted() {
    window.$("#myModal").modal("toggle");
  },
  methods: {
    login() {
      let dataUser = new Object();
      dataUser.email = this.userEmail;
      dataUser.password = this.userPassword;
      console.log(dataUser);
      axios.post("http://127.0.0.1:8000/api/login", dataUser).then((result) => {
        console.log(result);
        if (!result.data.res) {
          this.message = result.data.message;
          this.noty(this.message, "error");
        } else {
          this.message = result.data.message;
          this.noty(this.message, "info");
          localStorage.token = result.data.token;
          this.$router.push("/");
        }
      });
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