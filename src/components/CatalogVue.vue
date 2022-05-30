<template>
  <v-container> 
    <v-row>
      <v-col
        v-for="(prod) in prods" :key="prod.id"
        class="d-flex child-flex"
        cols="4"
      >
      <div class="text-center" style="cursor: pointer">
        <v-img
         @click="getNameProduct(prod)"
          :src="prod.imageSrc"
          aspect-ratio="1"
        >
        </v-img>


        <v-btn :to="'/cart/' + prod.id">
          <v-icon>mdi-cart</v-icon>
        </v-btn>




        <v-btn
            class="mt-1 ml-1 mr-1"
            :to="'/product/' + prod.id"
        >
          {{ prod.title }}
        </v-btn>
        <v-btn
            icon
            color="#FFEE58"
        >
          <v-icon>mdi-star</v-icon>
        </v-btn>
      </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return{
       profiles: {},
    }
  },

  mounted(){
    axios
      .get(`https://api.unsplash.com/photos/?client_id=vSZ88YrTBknu6CphDdw2FVIyBVwNW_ZR3SYuAFMc67c`)
      .then(response => {
        this.profiles = response.data
      });
  },
  methods: {
    getNameProduct(){

    }
  },
  computed: {
    // promoProd () {
    //   return this.$store.getters.promoAds
    // },
    prods () {
      return this.$store.getters.prods
    }
  }
}
</script>

<style>

</style>