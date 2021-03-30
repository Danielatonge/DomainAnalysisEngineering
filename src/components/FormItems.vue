<template>
  <section class="w-full flex justify-center items-center my-10">
    <form class="">
      <div
        class="form-group"
        v-for="(input, index) in formItems"
        :key="`item-${index}`"
      >
        <input
          v-model="input.item"
          type="text"
          class="h-10 rounded-lg outline-none p-2"
          :placeholder="`Enter ${holder}`"
        />
        <!--          Add Svg Icon-->
        <svg
          @click="addField(index)"
          v-show="index == formItems.length-1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          class="ml-2 cursor-pointer"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            fill="green"
            d="M11 11V7h2v4h4v2h-4v4h-2v-4H7v-2h4zm1 11C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"
          />
        </svg>

        <!--          Remove Svg Icon-->
        <svg
          v-show="formItems.length > 1"
          @click="removeField(index)"
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
      </div>
    </form>
  </section>
</template>

<script>

export default {
  name: "FormItems",
  props: {
      holder: String,
  },
  data() {
    return {
      formItems: [{ item: "" }],
    };
  },
  methods: {
    addField(index) {
      this.formItems.push({ item: '' });
    },
    removeField(index) {
      this.formItems.splice(index, 1);
    },
  },
};
</script>

<style>
</style>