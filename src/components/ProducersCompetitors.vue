<template>
  <div class="h4 mt-5">Producers/Competitors</div>
  <hr />
  <div>
    <input
      v-model="pproducer"
      type="text"
      class="h-10 rounded-lg outline-none p-2 mr-5"
      placeholder="Enter Producers name"
    />

    <div class="form-check form-check-inline">
      <input
        v-model="isleader"
        class="form-check-input"
        type="checkbox"
        value=""
        id="defaultCheck1"
      />
      <label class="form-check-label" for="defaultCheck1">
        Is producer a leader?
      </label>
    </div>
  </div>
  <br />
  <div>
    <input
      v-model="pname"
      type="text"
      class="h-10 rounded-lg outline-none p-2"
      placeholder="Enter Product name"
    />
  </div>
</template>

<script>
import FormItems from "./FormItems";

export default {
  name: "ProducersCompetitors",
  components: {
    FormItems,
  },
  methods: {
    getInfo(){
      return { pname, pproducer, isleader}
    }
  },
  data(){
    return {
      pname: "",
      pproducer: "",
      isleader: null
    }
  },
  created() {
    // this.$parent.$on('get-info', this.getInfo);
  }
};
</script>

<style>
</style>