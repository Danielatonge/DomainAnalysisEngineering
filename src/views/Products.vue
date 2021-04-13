<template>
  <div class="container">
    <div class="text-right">
      <div @click="toggleAddProductForm" class="btn btn-secondary">
        {{ !showAddForm ? "Add Product" : "Close" }}
      </div>
    </div>
    <div v-show="showAddForm">
      <ProducersCompetitors />
      <Value />
      <PriceDistribution />
      <Standards />
      <DataFormat />
      <ComplementaryProducts />

      <div class="text-right">
        <div @click="addProduct" class="btn btn-secondary w-25">
          Add
        </div>
      </div>
    </div>
    <div>
      <p>Products in the store</p>
    </div>
  </div>
  <div class="row mt-5 mb-5">
    <div class="col-12 text-center">
      <div class="btn btn-primary w-25">Finish</div>
    </div>
  </div>
</template>

<script>
import ProducersCompetitors from "../components/ProducersCompetitors";
import Value from "../components/Value";
import PriceDistribution from "../components/PriceDistribution";
import Standards from "../components/Standards";
import DataFormat from "../components/DataFormat";
import ComplementaryProducts from "../components/ComplementaryProducts";

export default {
  name: "Products",
  components: {
    ProducersCompetitors,
    Value,
    PriceDistribution,
    Standards,
    DataFormat,
    ComplementaryProducts,
  },
  data() {
    return {
      showAddForm: true
    }
  },
  methods: {
    toggleAddProductForm() {
      this.showAddForm = !this.showAddForm;
    }
  }
};
</script>

<style>
</style>