<template>
  <div class="container">
    <DomainVocabulary />

    <div class="row mt-5 mb-5">
      <div class="col-12 text-center">
        <div class="btn btn-primary w-25">
          <router-link to="/products">Next</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DomainVocabulary from "../components/DomainVocabulary.vue";
export default {
  components: { DomainVocabulary },
  name: "Vocabulary",
  data() {
    return {
      
    }
  }
};
</script>

<style>
div > a {
  color: #fff;
}
</style>