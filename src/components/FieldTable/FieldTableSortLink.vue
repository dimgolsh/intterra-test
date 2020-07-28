<template>
  <a href="#" @click.prevent="$parent.sortBy(name)">
    <slot>{{ name }}</slot>
    <slot name="icon">
      <span
        class="sortActive"
        v-if="$parent.getCurrentSort() == name"
        v-html="$parent.getSortIcon()"
      ></span>
      <span class="sortInactive" v-else>▼</span>
    </slot>
  </a>
</template>

<script>
export default {
  name: "SortLink",
  props: {
    name: {
      type: String,
      required: true,
      default: ""
    }
  }
};
</script>
