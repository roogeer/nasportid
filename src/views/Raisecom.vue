<template>
  <div class="home">
    <OltList msg="Raisecom OLT Bras上联端口表"/>
  </div>
</template>

<script>
// @ is an alias to /src
import OltList from '../components/OltList.vue'

export default {
  name: 'Raisecom',
  components: {
    OltList
  },
  created:function(){
	console.log('Raisecom created')
	// 在这里请求url数据
  }
}
</script>
