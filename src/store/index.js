import Vue from "vue";
import FieldService from "@/service/FieldService";
import { checkObj } from "@/helpers";
import Locale from "@/locales";
import { _transformOperation } from "@/service/TransformOperations";
import Vuex from "vuex";

Vue.use(Vuex);
const fieldService = new FieldService();

export default new Vuex.Store({
  state: {
    locale: "ru-RU",
    loading: false,
    error: null,
    operations: {},
  },
  mutations: {
    setLoading(state, payload) {
      state.loading = payload;
    },
    setError(state, payload) {
      state.error = payload;
    },
    clearError(state) {
      state.error = null;
    },
    setOperations(state, payload) {
      state.operations = payload;
    },
  },
  actions: {
    setLoading({ commit }, payload) {
      commit("setLoading", payload);
    },
    setError({ commit }, payload) {
      commit("setError", payload);
    },
    clearError({ commit }) {
      commit("clearError");
    },
    async getOperations({ commit, state }, params) {
      commit('setLoading', true)
      commit('clearError')
      const { fieldId, query } = params;
      const operations = checkObj(query)
        ? await fieldService.getOperations(fieldId)
        : await fieldService.getOperationsFilter(query);
      const transformData = await operations.map(_transformOperation);
      const locale = new Locale(state.locale);
      const localesData = await transformData.map((item) =>
        locale.localeData(item)
      );
      commit("setOperations", localesData);
      commit('setLoading', false)
    },
  },
  getters: {
    loading(state) {
      return state.loading;
    },
    error(state) {
      return state.error;
    },
  },
  modules: {},
});
