<template>
  <div class="home">
	<OltList :olts="greenwayOlt" msg="Greenway OLT Bras端口表"></OltList>
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
  data:function(){
	return {
		greenwayOlt: {}
	}
  },
  created:function(){
	// 在这里请求url数据
	let olts = JSON.parse(sessionStorage.getItem('greenway'))
	for(let i = 0; i<olts.length; i++){
		let ip = Object.keys(olts[i])[0]
		this.greenwayOlt[ip] = olts[i][ip]
	}
  }
}
</script>