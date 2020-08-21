import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  // beforeCreate: function() {
  created: function() {
	// 从服务器上获取数据
	// let url = 'http://192.168.108.102:8983/oltnasportid.json'
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
		let greenwayolts = []
		greenwayolts = olts.filter((olt)=>{
			let ip = Object.keys(olt)[0]
			return 'greenway'===olt[ip]['type']
		})
		let tailongolts = []
		tailongolts = olts.filter((olt)=>{
			let ip = Object.keys(olt)[0]
			return 'tailong'===olt[ip]['type']
		})

		// console.log(raisecomolts)
		sessionStorage.setItem('raisecom', JSON.stringify(raisecomolts))
		// console.log(greenwayolts)
		sessionStorage.setItem('greenway', JSON.stringify(greenwayolts))
		// console.log(tailongolts)
		sessionStorage.setItem('tailong', JSON.stringify(tailongolts))
	})
	.catch(e => console.log("Oops, error", e))},
  render: h => h(App)
}).$mount('#app')
