<script>
import { ContentLoader } from "vue-content-loader";

export default {
  components: { ContentLoader }
};
</script>

<template>
  <content-loader
    :width="100"
    :height="20"
    :speed="2"
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
  >
    <rect x="0" y="0" rx="5" ry="2" width="100" height="20" />
  </content-loader>
</template>
