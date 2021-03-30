<template>
  <div class="h4 mt-5">Price distribution</div>
  <hr />
  <div class="row">
    <div class="col-6">
      <div class="text-muted text-center">Retail</div>
      <div class="row">
        <div class="col-6">
          <div class="text-muted text-center">Standard</div>
          <div class="form-group pb-3">
            <label for="questionOne">Cost*</label>
            <input
              type="number"
              class="form-control"
              id="questionOne"
              placeholder="Price per copy"
              required
              name="price"
              min="0"
              value="0"
              step=".01"
            />
          </div>
          <div class="form-group pb-3">
            <label for="questionTwo">Upgrade</label>
            <input
              type="number"
              class="form-control"
              id="questionTwo"
              aria-describedby="questionHelp"
              placeholder=""
              min="0"
              value="0"
              step=".01"
            />
          </div>
        </div>
        <div class="col-6">
          <div class="text-muted text-center">Volume</div>
          <div class="form-group pb-3">
            <label for="questionOne">Cost*</label>
            <input
              type="number"
              class="form-control"
              id="questionOne"
              placeholder="Price per copy"
              required
              name="price"
              min="0"
              value="0"
              step=".01"
            />
          </div>
          <div class="form-group pb-3">
            <label for="questionTwo">Upgrade</label>
            <input
              type="number"
              class="form-control"
              id="questionTwo"
              aria-describedby="questionHelp"
              placeholder=""
              min="0"
              value="0"
              step=".01"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="col-6">
      <div class="text-muted text-center">Academic</div>
        <div class="row">
        <div class="col-6">
          <div class="text-muted text-center">Standard</div>
          <div class="form-group pb-3">
            <label for="questionOne">Cost*</label>
            <input
              type="number"
              class="form-control"
              id="questionOne"
              placeholder="Price per copy"
              required
              name="price"
              min="0"
              value="0"
              step=".01"
            />
          </div>
          <div class="form-group pb-3">
            <label for="questionTwo">Upgrade</label>
            <input
              type="number"
              class="form-control"
              id="questionTwo"
              aria-describedby="questionHelp"
              placeholder=""
              min="0"
              value="0"
              step=".01"
            />
          </div>
        </div>
        <div class="col-6">
          <div class="text-muted text-center">Volume</div>
          <div class="form-group pb-3">
            <label for="questionOne">Cost*</label>
            <input
              type="number"
              class="form-control"
              id="questionOne"
              placeholder="Price per copy"
              required
              name="price"
              min="0"
              value="0"
              step=".01"
            />
          </div>
          <div class="form-group pb-3">
            <label for="questionTwo">Upgrade</label>
            <input
              type="number"
              class="form-control"
              id="questionTwo"
              aria-describedby="questionHelp"
              placeholder=""
              min="0"
              value="0"
              step=".01"
            />
          </div>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  name: "PriceDistribution",
};
</script>

<style>
</style>