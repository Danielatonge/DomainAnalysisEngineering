<template>
  <div class="container">
    <div class="h4 mt-3">Domains</div>
    <hr />
    <form>
      <div class="form-group">
        <label class="text-muted" for="current">Current</label>
        <textarea class="form-control" id="current" rows="4"></textarea>
      </div>
      <div class="form-group">
        <label class="text-muted" for="strategic">Strategic</label>
        <textarea class="form-control" id="strategic" rows="4"></textarea>
      </div>
      <div class="form-group">
        <label class="text-muted" for="feasible">Feasible</label>
        <textarea class="form-control" id="feasible" rows="4"></textarea>
      </div>
    </form>
    <div class="row mt-5 mb-5">
      <div class="col-12 text-center">
        <div class="btn btn-primary w-25">
          <router-link to="/vocabulary">Next</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Domain",
  components: {},
};
</script>

<style>
div > a {
    color: #fff;
}
</style>