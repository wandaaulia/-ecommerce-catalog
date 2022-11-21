<template>
   <h2> test </h2>
   <div v-for="item in data" :key="item.id">
    <div class="w-img">
        <h2> {{ item.id }}</h2>
<cld-image :public-id="item.public_id" />
    </div>
 
    </div>
</template>

<script>


export default {
    name: 'FetchDataa',
    data() {
        return {
          data : []
        }
    },
    methods: {
       async getApi () {
            const res = await fetch(`https://my-json-server.typicode.com/wandaaulia/-ecommerce-catalog/food`);
            const hasil =  await res.json();
            this.data = hasil;
            
        },
    },
    created() {
        this.getApi()
    },
}
</script>

<style scoped>
.w-img {
    width: 100px;
    display: flex;
}
</style>