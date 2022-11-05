<template>
  <v-dialog v-model="dialog" max-width="90%" transition="dialog-bottom-transition" persistent>
    <v-card>
      <v-card-title>Logo-Upload</v-card-title>
      <ImageCropper :src="src" />
      <v-card-actions class="pt-0">
        <v-btn text @click="$emit('cancel')">
          Abbrechen
          <v-icon left> mdi-close </v-icon>
        </v-btn>
        <v-spacer />
        <v-btn>Speichern </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import ImageCropper from './ImageCropper.vue'

export default {
  components: {
    ImageCropper,
  },
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },

  created() {
    this.dialog = this.show
  },

  watch: {
    show(v) {
      this.dialog = v
    },
  },

  data() {
    return {
      dialog: true,
      src = "data:image/svg+xml;charset=UTF-8;charset=utf-8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iRWJlbmVfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjQ5NiAtMjcyIDUwMyAzMDAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgNDk2IC0yNzIgNTAzIDMwMDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4NCgkuc3Qwe2Rpc3BsYXk6bm9uZTt9DQoJLnN0MXtkaXNwbGF5OmlubGluZTtmaWxsOiM3RDdEN0Q7fQ0KCS5zdDJ7ZmlsbDojRkE3RDE5O30NCgkuc3Qze2ZpbGw6I0ZGRkZGRjt9DQo8L3N0eWxlPg0KPGcgaWQ9IkViZW5lXzEzIiBjbGFzcz0ic3QwIj4NCgk8cmVjdCB4PSI0OTYiIHk9Ii0yNzIiIGNsYXNzPSJzdDEiIHdpZHRoPSIxMDI0IiBoZWlnaHQ9IjU3NiIvPg0KPC9nPg0KPGcgaWQ9IlpERnNwb3J0X3g1Rl9kZSI+DQoJPGc+DQoJCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik05NTAuMi0xNjQuOEg5OTlWLTE4OGgtNTguN2MtMzEuNiwwLTQ0LjYsMTcuNy00NC42LDQ1LjRsMCwyLjdjLTUuMy0zMi42LTI0LjctNDguMS02MC4yLTQ4LjFINzc2DQoJCQljLTI0LTQ4LTczLjUtODEtMTMwLjktODFDNTY0LjUtMjY5LDQ5OS0yMDMuNSw0OTktMTIyLjhjMCw4MC43LDY1LjUsMTQ2LjEsMTQ2LjEsMTQ2LjFjNTcsMCwxMDYuMy0zMi41LDEzMC40LTgwaDYwLjcNCgkJCWMxNC41LDAsMjcuNi0wLjksNDAuOS0xMS41YzkuNi03LjYsMTUuNi0xOC40LDE4LjQtMzIuNXY0My44aDI3LjhsMC01MS41aDY1Ljd2LTIyLjloLTY1LjhsMC40LTkuMw0KCQkJQzkyMy43LTE1NS43LDkyOC4zLTE2NC44LDk1MC4yLTE2NC44eiBNODM0LjktNzkuOWgtMzAuN3YtODQuOWgzMC43YzI0LjEsMCwzMi44LDEwLjMsMzIuOCw0Mi41DQoJCQlDODY3LjctOTAuMiw4NTkuMS03OS45LDgzNC45LTc5Ljl6Ii8+DQoJCTxnPg0KCQkJPHBhdGggY2xhc3M9InN0MyIgZD0iTTcwOS44LTEzMy43SDcyOGMxNC40LDAsMjIuOS0yLjksMjIuOS0xNS4xYzAtMTIuNi04LjUtMTYuMS0yMy4zLTE2LjFoLTYxLjV2LTIzLjFoNzEuNg0KCQkJCWMzNi4zLDAsNDEuNSwyNS40LDQxLjUsMzkuNmMwLDE1LjEtNi4yLDM5LTQxLjUsMzloLTE3LjZjLTIyLDAtMjYuNyw3LjktMjYuNywyM3Y3aDgyLjJWLTU3SDY2NS4zdi0zMi41DQoJCQkJQzY2NS4zLTExNy4zLDY3OC4zLTEzMy43LDcwOS44LTEzMy43eiIvPg0KCQk8L2c+DQoJPC9nPg0KPC9nPg0KPC9zdmc+DQo="
    }
  },
}
</script>
