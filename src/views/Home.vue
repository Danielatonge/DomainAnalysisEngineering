<template>
  <div class="container mt-5">
    <nav>
      <div class="nav nav-tabs" id="nav-tab" role="tablist">
        <a
          class="nav-link active"
          id="nav-home-tab"
          data-toggle="tab"
          href="#nav-home"
          role="tab"
          aria-controls="nav-home"
          aria-selected="true"
          >Create New Project
        </a>
        <a
          class="nav-link"
          id="nav-profile-tab"
          data-toggle="tab"
          href="#nav-profile"
          role="tab"
          aria-controls="nav-profile"
          aria-selected="false"
          >Modify Existing Project
        </a>
      </div>
    </nav>
    <div class="tab-content" id="nav-tabContent">
      <div
        class="tab-pane fade show active"
        id="nav-home"
        role="tabpanel"
        aria-labelledby="nav-home-tab"
      >
        <div class="mt-3 main-text">
          Placeholder content for the tab panel. This one relates to the contact
          tab. Her love is like a drug. All my girls vintage Chanel baby. Got a
          motel and built a fort out of sheets. 'Cause she's the muse and the
          artist. (This is how we do) So you wanna play with magic. So just be
          sure before you give it all to me. I'm walking, I'm walking on air
          (tonight). Skip the talk, heard it all, time to walk the walk. Catch
          her if you can. Stinging like a bee I earned my stripes.
        </div>
        <div class="col-5 mt-3 pl-0">
          <form>
            <div class="form-group">
              <label for="exampleInputEmail5">Project Name</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail5"
                aria-describedby="emailHelp"
              />
              <small id="emailHelp" class="form-text text-muted">
                Project name should be valid.
              </small>
            </div>
            <div class="btn btn-secondary mt-1">Create</div>
          </form>
        </div>
      </div>
      <div
        class="tab-pane fade"
        id="nav-profile"
        role="tabpanel"
        aria-labelledby="nav-profile-tab"
      >
        <div class="mt-3 main-text">
          Placeholder content for the tab panel. This one relates to the contact
          tab. Her love is like a drug. All my girls vintage Chanel baby. Got a
          motel and built a fort out of sheets. 'Cause she's the muse and the
          artist. (This is how we do) So you wanna play with magic. So just be
          sure before you give it all to me. I'm walking, I'm walking on air
          (tonight). Skip the talk, heard it all, time to walk the walk. Catch
          her if you can. Stinging like a bee I earned my stripes.
        </div>

        <table class="table table-striped mt-5">
          <thead>
            <tr>
              <th scope="col">Project Name</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row, index) in projects" :key="index">
              <th scope="row">{{ row.name }}</th>
              <td>
                <a href=""> Edit </a>
                <a href="">Delete</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["projects"]),
  },
  mounted() {
    this.$store.dispatch("loadProjects");
  },
};
</script>

<style>
#nav-tab a {
  color: #3f3f3f;
}
.main-text {
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
}
</style>