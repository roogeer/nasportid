<template>
  <div class="home">
    <OltList msg="TaiLong OLT Bras上联端口表"/>
  </div>
</template>

<script>
// @ is an alias to /src
import OltList from '../components/OltList.vue'

export default {
  name: 'Tailong',
  components: {
    OltList
  },
  created:function(){
	console.log('Tailong created')
	// 在这里请求url数据
  }
}
</script>
