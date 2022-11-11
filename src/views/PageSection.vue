<template>
 <ProductDisplay :loading="loading" :dataUnavailable="dataUnavailable" @sendData="sendIndex" :category='category' :indexParent="indexApi" :data="dataFetch" > </ProductDisplay>
</template>

<script>
import ProductDisplay from '@/components/ProductDisplay.vue';

export default {
  name: 'PageSection',
  data() {
    return {
    dataFetch : {},
    indexApi : 1,
    dataUnavailable : false,
    category : '',
    loading : false
    }
  },
  components: {
    ProductDisplay,
  },
  methods: {
    getApi(data) {
      fetch(`https://fakestoreapi.com/products/${data}`)
            .then(res=> {
              this.loading = true;
              return res.json() }
              )
            .then(json=> {
              if(json.category === "women's clothing") {
                
                this.dataFetch = json;
                this.category =json.category; 
                 this.loading = false;
                    this.dataUnavailable= false;
               
              } else if(json.category === "men's clothing"){
                      this.loading = false;
                 this.dataFetch = json;
                this.category =json.category; 
                  this.dataUnavailable= false;
                     
                } else {
                        this.loading = false;
                   this.dataUnavailable= true;
                     this.dataFetch = {};
      
              }
              }

              )
    },
    sendIndex(data) {
      if(data <= 20) {
        this.indexApi = data
      } else {
   this.indexApi = 1
      }

    }
  },
  created() {
    this.getApi(this.indexApi)
  this.loading = true
  },
   watch: {
        indexApi: function(value) {
            this.getApi(value)
        },
    }
}
</script>
