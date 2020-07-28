<template>
  <div>
    <div class="page_header">
      <h1>Операции на поле {{ $route.params.id }}</h1>
    </div>
    <FieldTableActions :filters="filters" />
    <field-table :values="operations" sort="date">
      <thead class="bg-gray">
        <tr>
          <th
            scope="col"
            v-for="column in columns"
            :key="column.key"
            :style="`width: ${column.width};`"
          >
            <sort-link :name="column.key">{{ column.title }}</sort-link>
          </th>
        </tr>
      </thead>
      <template #body="sort">
        <transition-group tag="tbody" name="list">
     
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
  
          </transition-group>
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
      params: {},
      columns: [
        { title: "Дата", key: "date", width: "5rem" },
        { title: "Операция", key: "type", width: "20rem" },
        { title: "Культура", key: "culture", width: "15rem" },
        { title: "Качество", key: "assessment", width: "10rem" }
      ],
      filters: [
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
    }
  },
  computed: {
    ...mapState({
      operations: state => state.operations
    })
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
.list-enter-active,
.list-leave-active,
.list-move {
  transition: 500ms cubic-bezier(0.59, 0.12, 0.34, 0.95);
  transition-property: opacity;
}

.list-enter {
  opacity: 0;
}

.list-enter-to {
  opacity: 1;
}

.list-leave-to {
  opacity: 0;
}
</style>
