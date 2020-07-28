<template>
  <img :src="`/img/icons/Svg/${iconClass}.svg`" :class="className" class="icon">
</template>

<script>
export default {
 name: 'SvgIcon',
  props: {
    iconClass: {
      type: String,
      required: true
    },
    className: {
      type: String,
      default: ''
    }
  },
}
</script>

<style>
.icon {
    margin-right: 10px;
}

</style>