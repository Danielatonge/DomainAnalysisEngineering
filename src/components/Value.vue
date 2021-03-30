<template>
  <div class="h4 mt-5">Value</div>
  <hr />
  <form>
    <div class="form-group">
      <label class="text-muted" for="internal">Internal</label>
      <textarea
        class="form-control"
        id="internal"
        rows="1"
      ></textarea>
    </div>
    <div class="form-group">
      <label class="text-muted" for="external">External</label>
      <textarea
        class="form-control"
        id="external"
        rows="1"
      ></textarea>
    </div>
  </form>
</template>

<script>
export default {
  name: "Value",
};
</script>

<style>
</style>