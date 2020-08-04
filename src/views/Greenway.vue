<template>
  <div class="home">
    <OltList msg="Greenway OLT Bras上联端口表"/>
  </div>
</template>

<script>
// @ is an alias to /src
import OltList from '../components/OltList.vue'

export default {
  name: 'Greenway',
  components: {
    OltList
  },
  created:function(){
	console.log('Greenway created')
	// 在这里请求url数据
  }
}
</script>