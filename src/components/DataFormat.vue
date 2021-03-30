<template>
  <div class="h4 mt-5">Data Format</div>
  <hr />
  <div class="row">
      <div class="col-6">
          <div class="text-muted">Input Format</div>
          <form-items holder="Input Format" />
      </div>
      <div class="col-6">
          <div class="text-muted mt-3">Output Format</div>
          <form-items holder="Output Format" />
      </div>
  </div>
  
</template>

<script>
import FormItems from './FormItems.vue';
export default {
  components: { FormItems },
  name: "DataFormat",
};
</script>

<style>
</style>