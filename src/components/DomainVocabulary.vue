<template>
  <div class="h4 mt-5">Domain Vocabulary</div>
  <hr />
  <div class="row">
    <div class="col-6">
      <form>
        <label for="term">Term</label>
        <div class="input-group mb-3">
          <input
            v-model="iterm"
            id="term"
            type="text"
            class="form-control"
            placeholder="Enter Term"
            aria-label="Username"
            required
          />
        </div>
        <div class="form-group">
          <label for="description">Description</label>
          <textarea
            v-model="idescription"
            class="form-control"
            id="description"
            rows="3"
            placeholder="Enter Description"
          ></textarea>
        </div>
        <button
          @click="addItem(iterm, idescription)"
          :disabled="!this.iterm.length > 0 || !this.idescription.length > 0"
          class="btn btn-secondary"
        >
          Add Vocabulary
        </button>
      </form>
    </div>
    <div class="col-6">
      <div class="text-right">
        <div @click="toggleSearch" class="btn btn-secondary">
          {{ !showSearch ? "Search" : "Close" }}
        </div>
      </div>
      <div v-show="showSearch">
        <form>
          <label for="search">Search</label>
          <div class="input-group mb-3">
            <input
              v-model="isearch"
              id="search"
              type="text"
              class="form-control"
              placeholder="Enter Term"
              aria-label="Search"
            />
          </div>
        </form>
        <table class="table table-striped mt-5">
          <thead>
            <tr>
              <th scope="col">Term</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row, index) in searchedItems" :key="index">
              <th scope="row">{{ row.term }}</th>
              <td>
                {{ row.description }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <table class="table table-striped mt-5">
      <thead>
        <tr>
          <th scope="col">Term</th>
          <th scope="col">Description</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in this.tableItems" :key="index">
          <th scope="row">{{ row.term }}</th>
          <td>
            {{ row.description }}
          </td>
          <td>
            <!--          Remove Svg Icon-->
            <svg
              @click="removeItem(index)"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              class="ml-2 cursor-pointer"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                fill="#EC4899"
                d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9.414l2.828-2.829 1.415 1.415L13.414 12l2.829 2.828-1.415 1.415L12 13.414l-2.828 2.829-1.415-1.415L10.586 12 7.757 9.172l1.415-1.415L12 10.586z"
              />
            </svg>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "DomainVocabulary",
  data() {
    return {
      tableItems: [],
      isearch: "",
      iterm: "",
      idescription: "",
      showSearch: false,
    };
  },
  methods: {
    addItem(term, description) {
      this.tableItems.push({ term, description });
      this.iterm = "";
      this.idescription = "";
    },
    removeItem(index) {
      this.tableItems.splice(index, 1);
    },
    toggleSearch() {
      this.showSearch = !this.showSearch;
    },
  },
  computed: {
    searchedItems() {
      return this.tableItems.filter((item) =>
        item.term.toLowerCase().includes(this.isearch.toLowerCase())
      );
    }
  },
};
</script>

<style>
</style>