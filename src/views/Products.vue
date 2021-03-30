<template>
  <div class="container">
    <ProducersCompetitors />
    <Value />
    <PriceDistribution />
    <Standards />
    <DataFormat />
    <ComplementaryProducts />

    <div class="row mt-5 mb-5">
      <div class="col-12 text-center">
        <div class="btn btn-primary w-25">
          Finish
        </div>
      </div>
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
      ComplementaryProducts
  }
};
</script>

<style>
</style>