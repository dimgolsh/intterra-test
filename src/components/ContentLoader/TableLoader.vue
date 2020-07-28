<template>
  <table class="table">
    <thead class="bg-gray">
      <tr>
        <th v-for="index in columnCount" :key="index">
          <LoadingContentLoader />
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="index in 6" :key="index">
        <th v-for="index in columnCount" :key="index">
          <LoadingContentLoader />
        </th>
      </tr>
    </tbody>
  </table>
</template>

<script>
import LoadingContentLoader from "@/components/ContentLoader/LoadingContentLoader";
export default {
  props: {
    columnCount: {
      type: Number,
      default: 4
    }
  },
  components: {
    LoadingContentLoader
  }
};
</script>

<style scoped>
svg {
  max-width: 80px;
}
</style>
