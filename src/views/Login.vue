<template>
  <div class="container mt-4">
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">Email</label>
        <input
          v-model="loginInfo.email"
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
        <small
          v-if="loginInfo.email.length == 0"
          id="emailHelp"
          class="form-text text-danger"
        >
          Email is required
        </small>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input
          v-model="loginInfo.password"
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
        />
        <small
          v-if="loginInfo.password.length == 0"
          id="passwordHelp"
          class="form-text text-danger"
        >
          Password is required
        </small>
      </div>
      <button
        type="submit"
        class="btn btn-primary"
        @click.prevent="loginUser"
        :disabled="
          loginInfo.password.length == 0 || loginInfo.email.length == 0
        "
      >
        Login
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginInfo: {
        email: "",
        password: "",
      },
    };
  },
  computed: {},
  methods: {
    loginUser() {
      this.$store.dispatch("loginUser", this.loginInfo);
      this.$router.push({ name: "Home" });
    },
  },
};
</script>

<style>
</style>