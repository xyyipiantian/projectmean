<!--  -->
<template>
  <div>
      <CityHeader></CityHeader>
      <CitySearch :cities='cities'></CitySearch>
      <CityList :cities='cities' :hotCities = 'hotCities' :letter='letter'></CityList>
      <CityAlphabet 
      :cities='cities'
      @change='handleLetterChange'
      ></CityAlphabet>
  </div>
</template>

<script>
import axios from 'axios'
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
export default {
    data(){
        return{
            cities:{},
            hotCities:[],
            letter:''
        }
    },
    components:{
        CityHeader,
        CitySearch,
        CityList,
        CityAlphabet,
    },
    methods:{
        getCityInof(){
            axios.get('/api/city.json')
            .then(this.handleGetCityInfoSucc)
        },
        handleGetCityInfoSucc(res){
            res = res.data;
            if(res.ret){
                const data = res.data
                this.cities = data.cities;
                this.hotCities = data.hotCities;
            }
        },
        handleLetterChange(letter){
            this.letter = letter;
        }
    },
    mounted(){
        this.getCityInof()
    }
}

</script>
<style lang='stylus' scoped>
</style>