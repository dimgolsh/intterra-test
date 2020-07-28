<template>
  <div class="table_filter_links">
    <router-link
      v-for="{ key, value, name } in filters"
      :key="value"
      :to="{ query: { [key]: value } }"
      exact
      active-class="link-active"
      class="table_filter_link"
      >{{ name }}</router-link
    >
  </div>
</template>

<script>
export default {
  props: {
    filters: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.table_filter_links {
  display: flex;
}

.table_filter_link {
  display: block;
  font-weight: 600;
  text-transform: uppercase;
  padding: 24px 0;
  margin-right: 20px;
}
</style>
