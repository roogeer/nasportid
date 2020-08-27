<template>
  <div class="home">
	<OltList :olts="tailongOlt" msg="Tailong OLT Bras Ports"></OltList>
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
  data:function(){
	return {
		tailongOlt: {}
	}
  },
  created:function(){
	// 在这里请求url数据
	let olts = JSON.parse(sessionStorage.getItem('tailong'))
	for(let i = 0; i<olts.length; i++){
		let ip = Object.keys(olts[i])[0]
		this.tailongOlt[ip] = olts[i][ip]
		this.tailongOlt[ip]['trbgcolor'] = (i % 2===0)?'#ffffff':'#e8f9e8'
	}
  }
}
</script>
