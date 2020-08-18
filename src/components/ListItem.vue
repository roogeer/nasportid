<template>
	<fragment>
		<tr>
			<td :rowspan="TotalRow(olt)">{{index}}</td>
			<td :rowspan="TotalRow(olt)">{{ip}}</td>
			<td :rowspan="TotalRow(olt)">{{olt['name']}}</td>
			<td :rowspan="olt['bras'][BrasKeys(olt)[0]]['interface'].length">{{olt['bras'][BrasKeys(olt)[0]]['name']}}</td>
			<td align="left">{{olt['bras'][BrasKeys(olt)[0]]['interface'][0]}}</td>
			<td :rowspan="TotalRow(olt)">{{olt['nasportid'].join(';')}}</td>
		</tr>
		
		<!-- 将第一个bras下的子接口全部输出 -->
		<fragment v-if="olt['bras'][BrasKeys(olt)[0]]['interface'].length>1">
			<tr v-for="count in olt['bras'][BrasKeys(olt)[0]]['interface'].length - 1" :key=count>
				<td align="left">{{olt['bras'][BrasKeys(olt)[0]]['interface'][count]}}</td>
			</tr>
		</fragment>
		
		<!-- 第{2..n}个bras的第1个端口 -->
		<fragment>
			<template v-for="count in BrasKeys(olt).length - 1">
			<tr :key=count>
				<td :rowspan="olt['bras'][BrasKeys(olt)[count]]['interface'].length">
					{{olt['bras'][BrasKeys(olt)[count]]['name']}}
				</td>
				
				<!-- 第1个端口直接显示 -->
				<td align="left">
					{{olt['bras'][BrasKeys(olt)[count]]['interface'][0]}}
				</td>
			</tr>

			<!-- 第2个端口开始迭代输出 -->
			<tr v-for="subinterface in olt['bras'][BrasKeys(olt)[count]]['interface'].length - 1" :key=subinterface>
				<td align="left">
					{{olt['bras'][BrasKeys(olt)[count]]['interface'][count]}}
				</td>
			</tr>
			
			</template>
			
		</fragment>
	</fragment>
</template>

<script>
	import  { Fragment } from 'vue-fragment'
	
	export default {
	name: 'ListItem',
	components: { Fragment },
	props:['index', 'olt', 'ip'],
	methods:{
		TotalRow:function(olt){
			let keys = Object.keys(olt['bras'])
			let _totalRow = 0
			for(let key of keys){
				_totalRow = _totalRow + olt['bras'][key]['interface'].length
			}
			return _totalRow
		},
		BrasKeys:function(olt){
			// 这里获取olt的上联bras ip
			// console.log(Object.keys(olt['bras']));
			return Object.keys(olt['bras'])
		}
	}
	}
</script>

<style>
</style>
