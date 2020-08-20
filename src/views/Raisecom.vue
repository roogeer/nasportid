<template>
  <div class="home">
	<OltList :olts="raisecomOlt" msg="Raisecom OLT Bras上联端口表"></OltList>
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
  data:function(){
	return {
		raisecomOlt: {}
	}
  },
  created:function(){
	console.log('Raisecom created')
	// 在这里请求url数据
	let olts = JSON.parse(sessionStorage.getItem('raisecom'))
	for(let i = 0; i<olts.length; i++){
		let ip = Object.keys(olts[i])[0]
		this.raisecomOlt[ip] = olts[i][ip]
	}
  }
}
</script>
