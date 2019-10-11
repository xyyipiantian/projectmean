<!--  -->
<template>
  <div>
      <Banner></Banner>
      <DetailHeader></DetailHeader>
      <DetailList :list='list'></DetailList>
      <div class="content"></div>
  </div>
</template>

<script>
import Banner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
export default {
    name:'Detail',
    components:{
        Banner,
        DetailHeader,
        DetailList
    },
    data(){
        return{
            list:[
                {
                    title:'成人票',
                    children:[
                        {title:'成人三管联票'},
                        {title:'成人五馆联票',
                        children:[
                            {title:'123456'}
                        ]}
                    ]
                },
                {
                    title:'儿童票'
                },
                {
                    title:'通票'
                }
            ]
        }
    },
}

</script>
<style lang='stylus' scoped>
.content
    height:50rem
</style>