<template>
  <v-tab v-if="item.type === 'tab'">{{ item.title }}</v-tab>
  <v-menu v-else open-on-hover bottom offset-y transition="slide-y-transition">
    <template v-slot:activator="{ on, attrs }">
      <v-btn text class="align-self-center mr-4" v-bind="attrs" v-on="on">
        {{ item.title }}
        <v-icon right> mdi-menu-down </v-icon>
      </v-btn>
    </template>
    <v-list class="grey lighten-3">
      <v-list-item v-for="menuItem in item.menu" :key="menuItem.title">
        <!-- <v-list-item-avatar> -->
        <v-icon class="mx-1"> {{ menuItem.icon }} </v-icon>
        <!-- </v-list-item-avatar> -->

        <v-list-item-content>
          <v-list-item-title v-text="menuItem.title"></v-list-item-title>

          <!-- <v-list-item-subtitle v-text="folder.subtitle"></v-list-item-subtitle> -->
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
}
</script>
