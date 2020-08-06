<template>
	<div>
		{{index}}###{{TotalRow}}
	</div>
</template>

<script>
  export default {
	name: 'ListItem',
	props:['olt', 'index'],
	computed:{
		TotalRow:function(){
			let keys = Object.keys(this.olt['bras'])
			let _totalRow = 0
			for(let key of keys){
				_totalRow = _totalRow + this.olt['bras'][key]['interface'].length
			}
			return _totalRow
		}
	}
  }
</script>

<style>
</style>
