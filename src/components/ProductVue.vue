<template>
  <v-container>

    <v-img
        :src="prods.imageSrc">
    </v-img>
    <v-input>{{ prods.title }}</v-input>
    <v-input>{{ prods.description }}</v-input>



  </v-container>
</template>

<script>
export default {
  props: ['id'],
  computed: {
    prods () {
      const id = this.id
      return this.$store.getters.prodById(id)
    }
  }
}
</script>

<style>

</style>