<template>
  <div class="containerProduct"> 
    <div class="containerImg" :class="bgColorImg">
        <img :src="imgBackground" class="imgClass" />
    </div>
    <div class="containerCard">
      <div class="containCard">
        <div v-if="loading === true"> 
        <div class="loader"></div>
        </div>
        <div v-else> 
      <template v-if="dataUnavailable === false"> 
           <div class="cardProduct"> 
        <div class="containerProductImg">
        <img :src=data.image class="imgProductClass"/>
        </div>
         <div class="contentProduct">
        <h2 class="titleProduct" :class="color"> {{data.title}} </h2>
        <div class="categoryClass">
            <p class="productSection"> {{data.category}} </p>
            <div class="ratingClass"> 
                <p class="valRating"> {{data.rating?.rate}}/5 </p>
                <div v-for="n in Math.floor(this.data.rating?.rate)" :key="n" class="star-rating-full" :class="bgColor"> </div>
                <div v-for="n in (5-Math.floor(this.data.rating?.rate))" :key="n" class="star-rating" :class="borderColor"> </div>
            </div>
        </div>
        <div class="lineGrey" />
        <p class="descProduct">
           {{data.description}}
        </p>
    <div class="lineGrey" />
    <p class="priceClass" :class="color">  {{ data.price }} </p>
    <div class="btnClass">
        <button class="btnBuy" :class="bgColor"> Buy now </button>
        <button class="btnNext" :class="[color, borderColor]" @click="nextProduct"> Next product </button>
    </div>
    </div>
    </div>

      </template>
      
      <template v-else>
     <div class="cardNoProduct"> 
        <div class="containerImgNotShow">
        <img :src="require('@/assets/imgUnavailable.svg')" class="imgProductClass"/>
        </div>
        <p class="textNoProduct"> This product is unavailable to show </p>
        <button class="btnNoProduct" @click="nextProduct">  Next product </button>
          </div>
   
    
           </template>
           </div>
            </div>
    </div>
  </div>
</template>

<script>


import '@/style/page.css'



export default {
    name : 'ProductDisplay',
    props: {
            data: Object,
            indexParent: Number,
            category: String,
            dataUnavailable: Boolean,
            loading: Boolean
    },
    data() {
        return {
            imgBackground : require("@/assets/starBg.png"),
          btnNextColor : `${this.color} ${this.borderColor}`,
            childIndex: 1,
        borderColor : "borderColorFemale",
          color : "colorFemale",
            bgColor : "bgColorFemale",
            bgColorImg : "bgImgFemale" ,
        }
    },
        methods: {
      nextProduct() {
        let dataP = this.indexParent;
        this.$emit('sendData', dataP+1);
      },

    },
       watch: {
        category: function(value) {
          if(value === "women's clothing") {
            this.borderColor = "borderColorFemale",
          this.color ="colorFemale",
            this.bgColor ="bgColorFemale",
            this.bgColorImg ="bgImgFemale" 
          } else {
              this.borderColor = "borderColorMale",
          this.color ="colorMale",
            this.bgColor = "bgColorMale",
            this.bgColorImg = "bgImgMale" 
          }

        },
        dataUnavailable : function(value) {
          if(value === true) {
            this.bgColorImg = "bgColorImgNoProduct"
          } 
        }
    }
 
}
</script>

<style>

</style>