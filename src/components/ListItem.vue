<template>
	<tr>
		<td :rowspan="TotalRow">{{index}}</td>
		<td :rowspan="TotalRow">{{ip}}</td>
		<td :rowspan="TotalRow">{{olt['name']}}</td>
		<td :rowspan="this.olt['bras'][BrasKeys[0]]['interface'].length">{{this.olt['bras'][BrasKeys[0]]['name']}}</td>
		<td>{{this.olt['bras'][BrasKeys[0]]['interface'][0]}}</td>
		<td :rowspan="TotalRow">{{this.olt['nasportid'].join(';')}}</td>
	</tr>
	<tr>
		<td rowspan="2">row2</td>
		<td>row2.1</td>
	</tr>
</template>

<script>
  export default {
	name: 'ListItem',
	props:['index', 'olt', 'ip'],
	computed:{
		TotalRow:function(){
			let keys = Object.keys(this.olt['bras'])
			let _totalRow = 0
			for(let key of keys){
				_totalRow = _totalRow + this.olt['bras'][key]['interface'].length
			}
			return _totalRow
		},
		BrasKeys:function(){
			// 这里获取olt的上联bras ip
			return Object.keys(this.olt['bras'])
		}
	}
  }
</script>

<style>
</style>
