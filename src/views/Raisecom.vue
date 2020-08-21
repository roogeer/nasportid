<template>
  <div class="home">
	<OltList :olts="raisecomOlt" msg="Raisecom OLT Bras端口表"></OltList>
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
	// 首页如果没有拿到数据，在这里请求url数据，并存入sessionStorage中
	if(Object.keys(this.raisecomOlt).length===0){
	let url = 'http://localhost:8080/oltnasportid.json'
	fetch(url)
	.then(response => response.json())
	.then(data => {
		// console.log(data)
		let olts = []
		for(let i in data){
			let o = {}
			o[i] = data[i]
			olts.push(o)
		}
		let raisecomolts = []
		raisecomolts = olts.filter((olt)=>{
			let ip = Object.keys(olt)[0]
			return 'raisecom'===olt[ip]['type']
		})
		let obj = {}
		let _olts = raisecomolts
		for(let i = 0; i<_olts.length; i++){
			let ip = Object.keys(_olts[i])[0]
			obj[ip] = _olts[i][ip]
		}
		this.raisecomOlt = obj
		sessionStorage.setItem('raisecom', JSON.stringify(raisecomolts))
	})
	.catch(e => console.log("Oops, error", e))
	}
	else{
		let olts = JSON.parse(sessionStorage.getItem('raisecom'))
		for(let i = 0; i<olts.length; i++){
			let ip = Object.keys(olts[i])[0]
			this.raisecomOlt[ip] = olts[i][ip]
		}
	}
  }
}
</script>
