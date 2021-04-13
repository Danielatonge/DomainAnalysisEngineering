<template>
  <div class="container mt-4">
    <form>
      <div class="form-group">
        <label for="exampleInputName">Name</label>
        <input
          v-model="registerInfo.name"
          type="text"
          class="form-control"
          id="exampleInputName"
          aria-describedby="nameHelp"
          placeholder="Enter name"
        />
        <small
          v-if="registerInfo.name == 0"
          id="nameHelp"
          class="form-text text-danger"
          >Name can't be empty.</small
        >
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Email</label>
        <input
          v-model="registerInfo.email"
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
        <small
          v-if="registerInfo.email == 0"
          id="emailHelp"
          class="form-text text-danger"
          >Email is required
        </small>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input
          v-model="registerInfo.password"
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
        />
        <small
          v-if="registerInfo.password == 0"
          id="passwordHelp"
          class="form-text text-danger"
          >Password is required
        </small>
      </div>
      <button
        type="submit"
        class="btn btn-primary"
        :disabled="
          registerInfo.name == 0 ||
          registerInfo.email == 0 ||
          registerInfo.password == 0
        "
        @click.prevent="registerUser"
      >
        Register
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      registerInfo: {
        name: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    registerUser() {
      this.$store.dispatch('registerUser', this.registerInfo);
      this.$router.push({ name: "Login" });
    }
  },
};
</script>

<style>
</style>