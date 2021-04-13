<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <router-link class="navbar-brand" to="/">DAE</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/domain">
              Domain <span class="sr-only">(current)</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/vocabulary">
              Vocabulary
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/products">
              Products
            </router-link>
          </li>
        </ul>
        <div class="navbar-nav mr-right">
          <div v-if="!currentUser.name" class="d-flex">
            <li class="nav-item">
              <router-link class="nav-link" to="/login"> Login </router-link>
            </li> 
            <li class="nav-item ">
              <router-link class="nav-link" to="/register">
                Register
              </router-link>
            </li>
          </div>
          <div v-else>
            <li class="nav-item">
              <a class="nav-link" @click="logoutUser">
                Logout ({{ currentUser.name }})
              </a>
            </li>
          </div>
        </div>
      </div>
    </div>
  </nav>

  <router-view />
  <div class="text-center">
    <div v-for="user in users" :key="user.id">
      {{ user.name }} <div class="btn btn-secondary" @click="loginUser(user)">Login</div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["currentUser"]),
    ...mapState(["users"]),
  },
  mounted() {
    this.$store.dispatch("loadUsers");
  },
  methods: {
    logoutUser() {
      this.$store.dispatch("logoutUser");
    },
    loginUser(user) {
      this.$store.dispatch("loginUser", user);
    }
  }
};
</script>

<style>
.nav-item a {
  font-weight: bold;
  color: #2c3e50;
}

.nav-item > a.router-link-exact-active {
  color: #42b983;
}
</style>
