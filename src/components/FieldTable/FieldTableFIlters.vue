<template>
  <div class="table_filter_links">
    <router-link
      v-for="filter in filters.items"
      :key="filter.value"
      :to="{ query: {  [filters.column] : filter.value}}"
      exact
      active-class="link-active"
      class="table_filter_link"
    >{{filter.name}}</router-link>
  </div>
</template>

<script>
export default {
  props: {
    filters: {
      type: Object,
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