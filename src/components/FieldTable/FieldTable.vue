<template>
  <table class="table">
    <slot></slot>
    <slot name="head"></slot>
    <slot name="body" :values="sortedValues"></slot>
    <slot name="foot"></slot>
  </table>
</template>

<script>
export default {
  name: "FieldTable",
  props: {
    values: {
      // type: Object,
      required: true,
      default: null
    },
    dir: {
      type: String,
      default: "asc"
    },
    sort: {
      type: String
    }
  },
  data: function() {
    return {
      sortKey: this.sort ? [this.sort] : ["id"],
      sortOrder: ["asc"]
    };
  },
  computed: {
    sortedValues: function() {
      return this._.orderBy(this.values, this.sortKey, this.sortOrder);
    }
  },
  methods: {
    getCurrentSort: function() {
      return this.sortKey;
    },
    getSortIcon() {
      return this.sortOrder === "asc" ? "▼" : "▲";
    },
    sortBy: function(key) {
      if (key == this.sortKey) {
        this.sortOrder = this.sortOrder == "asc" ? "desc" : "asc";
      } else {
        this.sortKey = key;
        this.sortOrder = "asc";
      }
    }
  }
};
</script>
