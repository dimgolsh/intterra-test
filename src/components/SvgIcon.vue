<template>
  <img
    :src="`${publicPath}/img/icons/Svg/${iconClass}.svg`"
    :class="className"
    class="icon"
  />
</template>

<script>
export default {
  data () {
  return {
    publicPath: process.env.BASE_URL
  }
},
  name: "SvgIcon",
  props: {
    iconClass: {
      type: String,
      required: true
    },
    className: {
      type: String,
      default: ""
    }
  }
};
</script>

<style>
.icon {
  margin-right: 10px;
}
</style>
