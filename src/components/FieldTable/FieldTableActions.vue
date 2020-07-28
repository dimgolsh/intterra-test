<template>
  <div class="table_actions">
    <FieldTableFIlters :filters="filters" />
  </div>
</template>

<script>
import FieldTableFIlters from "@/components/FieldTable/FieldTableFIlters";
export default {
  props: {
    filters: {
      type: Object,
      required: true
    }
  },
  components: {
    FieldTableFIlters
  }
};
</script>

<style lang="scss" scoped>
.table_actions {
  display: flex;
  justify-content: space-between;
}
</style>