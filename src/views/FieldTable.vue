<template>
  <div>
    <div class="page_header">
      <h1>Операции на поле {{ $route.params.id }}</h1>
    </div>
    <FieldTableActions :filters="filters" />
    <field-table :values="operations">
      <thead class="bg-gray">
        <tr>
          <th
            scope="col"
            v-for="column in columns"
            :key="column.key"
            style="width: 10rem;"
          >
            <sort-link :name="column.key">{{ column.title }}</sort-link>
          </th>
        </tr>
      </thead>
      <template #body="sort">
        <tbody>
          <tr v-for="value in sort.values" :key="value.id">
            <th scope="row" class="opacity-8">{{ value.date | capitalize }}</th>
            <td class="font-weight-meduim">{{ value.type }}</td>
            <td class="cultureIcon">
              <SvgIcon :iconClass="value.cultureIcon" />
              <p>{{ value.culture }}</p>
            </td>
            <td :class="value.assessmentClassname">
              <div class="field_status">
                <div class="pils"></div>
                <p>{{ value.assessment }}</p>
              </div>
            </td>
          </tr>
        </tbody>
      </template>
    </field-table>
  </div>
</template>

<script>
import FieldTableActions from "@/components/FieldTable/FieldTableActions";
import FieldTable from "@/components/FieldTable/FieldTable";
import SortLink from "@/components/FieldTable/FieldTableSortLink";
import SvgIcon from "@/components/SvgIcon";
import { mapState } from "vuex";
export default {
  data() {
    return {
      sortKey: ["date"],
      sortOrder: ["asc"],
      params: {},
      columns: [
        { title: "Дата", key: "date", width: "10rem" },
        { title: "Операция", key: "type", width: "10rem" },
        { title: "Культура", key: "culture", width: "10rem" },
        { title: "Качество", key: "assessment", width: "10rem" }
      ],
      filters: {
        column: "status",
        items: [
          {
            name: "Запланированные операции",
            key: "status",
            value: "0"
          },

          {
            name: "Выполненные операции",
            key: "status",
            value: "1"
          }
        ]
      }
    };
  },

  watch: {
    "$route.query"() {
      this.setParams();
      this.fetchData();
    }
  },
  components: {
    FieldTableActions,
    FieldTable,
    SortLink,
    SvgIcon
  },
  created() {
    this.setParams();
    this.fetchData();
  },
  filters: {
    capitalize: function(value) {
      return value.replace(/\s*г\./, "").toUpperCase();
    }
  },
  methods: {
    setParams() {
      this.params = {
        fieldId: this.$route.params.id,
        query: this.$route.query
      };
    },
    fetchData() {
      this.$store.dispatch("getOperations", this.params);
    },
    sortBy: function(key) {
      if (key == this.sortKey) {
        this.sortOrder = this.sortOrder == "asc" ? "desc" : "asc";
      } else {
        this.sortKey = key;
        this.sortOrder = "asc";
      }
    }
  },
  computed: {
    ...mapState({
      operations: state => state.operations
    }),
    operationSorted: function() {
      return this._.orderBy(this.operations, this.sortKey, this.sortOrder);
    }
  }
};
</script>

<style lang="scss" scoped>
.cultureIcon {
  display: flex;
  align-items: center;
  margin-bottom: -1px;
}

.field_status {
  display: flex;
  align-items: center;
  margin-bottom: -1px;
}
</style>