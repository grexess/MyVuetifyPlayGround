<template>
  <div>
    <v-list-item v-if="item.type === 'tab'" class="text-uppercase text--secondary zBottomBorder">
      <v-list-item-title :to="item.route">{{ item.title }}</v-list-item-title
      ><v-divider inset class="ma-2"></v-divider>
    </v-list-item>
    <v-list-group v-else no-action>
      <v-list-item slot="activator" :to="item.route" class="px-0">
        <!-- <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>  -->
        <v-list-item-title class="text-uppercase text--secondary">{{ item.title }}</v-list-item-title>
      </v-list-item>
      <v-list-item v-for="menuItem in item.menu" :key="menuItem.title" class="px-4">
        <v-list-item-title :to="menuItem.route" class="text-uppercase text--secondary">{{
          menuItem.title
        }}</v-list-item-title>
      </v-list-item>
      <v-divider></v-divider>
    </v-list-group>
    <v-divider></v-divider>
  </div>
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

<style scoped>
.v-list-group__header {
  padding: 0 !important;
}
.zBottomBorder {
  /* border-bottom: solid 1px red !important;
  border-radius: 0px; */
}
</style>
