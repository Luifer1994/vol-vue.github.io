<template>
  <div class="col-12 mb-4 mt-5">
    <div class="card shadow border-0 text-center p-0">
      <div
        class="profile-cover rounded-top"
        data-background="../assets/img/profile-cover.jpg"
        style="background: url('../assets/img/profile-cover.jpg')"
      ></div>
      <div class="card-body pb-5">
        <div class="" v-for="item in data.results" :key="item">
          <img
            :src="item.picture.large"
            class="avatar-xl rounded-circle mx-auto mt-n7 mb-4"
            alt="Neil Portrait"
          />
          <h4 class="h3">
            {{ item.name.title }}
          </h4>
          <h6 class="h6">{{ item.name.first }} - {{ item.name.last }}</h6>
          <h5 class="fw-normal">
            {{ item.location.street.name }}
          </h5>

          <p class="text-gray mb-4">
            {{ item.location.city }} - {{ item.location.state }} -
            {{ item.location.country }}
          </p>

          <a
            class="btn btn-sm btn-gray-800 d-inline-flex align-items-center me-2"
            href="#"
          >
            <i class="fas fa-mobile-alt"></i> <span class="m-1"></span> {{ item.cell }}
          </a>
          <a class="btn btn-sm btn-secondary" href="#">
            <i class="fas fa-envelope-open-text"></i> <span class="m-1"></span>
            {{ item.email }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Perfil",
  data() {
    return {
      data: [],
    };
  },
  mounted() {
    axios.get("https://randomuser.me/api/").then((response) => {
      this.data = response.data;
    });
    
  }
};
</script>

<style></style>
