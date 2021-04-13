import { createStore } from "vuex";

export default createStore({
  state: {
    users: [],
    currentUser: { name: "" },
    projects: [],
    currentProject: {},
  },
  mutations: {
    SET_CURRENT_PROJECT(state, project) {
      state.currentProject = project;
      window.localStorage.currentProject = JSON.stringify(project);
    },
    SET_PROJECTS(state, projects) {
      state.projects = projects;
    },
    SET_USERS(state, users) {
      state.users = users;
    },
    LOGOUT_USER(state) {
      state.currentUser = {};
      state.currentProject = {};
      window.localStorage.currentUser = JSON.stringify({});
      window.localStorage.currentProject = JSON.stringify({});
    },
    SET_CURRENT_USER(state, user) {
      state.currentUser = user;
      window.localStorage.currentUser = JSON.stringify(user);
    },
    ADD_USER(state, user) {
      state.users = [...state.users, user];
    }
  },
  actions: {
    async loadUsers({ commit }) {
      const response = await fetch(`api/users`);
      const data = await response.json();
      commit("SET_USERS", data);
      const user = JSON.parse(window.localStorage.currentUser);
      commit("SET_CURRENT_USER", user);
    },
    logoutUser({ commit }) {
      commit("LOGOUT_USER");
    },
    async loginUser({ commit }, loginInfo) {
      let response = await fetch(
        `api/users?email=${loginInfo.email}&password=${loginInfo.password}`
      );
      let user = await response.json();
      commit("SET_CURRENT_USER", user[0]);
    },
    async loadProjects({ commit }) {
      const response = await fetch(`api/project`);
      const data = await response.json();
      commit("SET_PROJECTS", data);

      const project = JSON.parse(window.localStorage.currentProject);
      commit("SET_CURRENT_PROJECT", project);
    },
    async registerUser({commit}, registerInfo) {
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(registerInfo),
      };
      const res = await fetch("api/users", requestOptions);
      const data = await res.json();
      commit("ADD_USER", data);
    }
  },
});
