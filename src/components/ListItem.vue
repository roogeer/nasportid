<template>
	<fragment>
		<tr>
			<td :rowspan="totalRow" :style="{backgroundColor:tdbgcolor}" @mouseenter="enter()"  @mouseleave="leave()">{{index}}</td>
			<td :rowspan="totalRow" :style="{backgroundColor:tdbgcolor}" @mouseenter="enter()"  @mouseleave="leave()">{{ip}}</td>
			<td align="left" :rowspan="totalRow" :style="{backgroundColor:tdbgcolor}" @mouseenter="enter()"  @mouseleave="leave()">{{olt['name']}}</td>
			<td align="left" :style="{backgroundColor:tdbgcolor}" @mouseenter="enter()"  @mouseleave="leave()" :rowspan="olt['bras'][BrasKeys(olt)[0]]['interface'].length">{{olt['bras'][BrasKeys(olt)[0]]['name']}}</td>
			<td align="left" :style="{backgroundColor:tdbgcolor}" @mouseenter="enter()"  @mouseleave="leave()">{{olt['bras'][BrasKeys(olt)[0]]['interface'][0]}}</td>
			<td :rowspan="totalRow" align="left" :style="{backgroundColor:tdbgcolor}" @mouseenter="enter()"  @mouseleave="leave()" >{{olt['nasportid'].join(';')}}</td>
		</tr>
		
		<!-- 将第一个bras下的子接口全部输出 -->
		<fragment v-if="olt['bras'][BrasKeys(olt)[0]]['interface'].length>1">
			<tr :style="{backgroundColor:olt['trbgcolor']}" v-for="count in olt['bras'][BrasKeys(olt)[0]]['interface'].length - 1" :key=count>
			<!-- <tr :style="{backgroundColor:olt['trbgcolor']}" v-for="count in olt['bras'][BrasKeys(olt)[0]]['interface'].length - 1" :key="olt['bras'][BrasKeys(olt)[0]]['interface'][count]"> -->
				<td align="left" :style="{backgroundColor:tdbgcolor}" @mouseenter="enter()"  @mouseleave="leave()">{{olt['bras'][BrasKeys(olt)[0]]['interface'][count]}}</td>
			</tr>
		</fragment>
		
		<!-- 第{2..n}个bras的第1个端口 -->
		<fragment>
			<template v-for="count in BrasKeys(olt).length - 1">
			<tr :style="{backgroundColor:olt['trbgcolor']}" :key=count>
				<td align="left" :style="{backgroundColor:tdbgcolor}" @mouseenter="enter()"  @mouseleave="leave()" :rowspan="olt['bras'][BrasKeys(olt)[count]]['interface'].length">
					{{olt['bras'][BrasKeys(olt)[count]]['name']}}
				</td>
				
				<!-- 第1个端口直接显示 -->
				<td align="left" :style="{backgroundColor:tdbgcolor}" @mouseenter="enter()"  @mouseleave="leave()">
					{{olt['bras'][BrasKeys(olt)[count]]['interface'][0]}}
				</td>
			</tr>

			<!-- 第2个端口开始迭代输出 -->
			<tr :style="{backgroundColor:olt['trbgcolor']}" v-for="subinterface in olt['bras'][BrasKeys(olt)[count]]['interface'].length - 1" :key="subinterface+count*1000">
			<!-- <tr :style="{backgroundColor:olt['trbgcolor']}" v-for="subinterface in olt['bras'][BrasKeys(olt)[count]]['interface'].length - 1" :key="olt['bras'][BrasKeys(olt)[subinterface]]['interface'][subinterface]"> -->
				<td align="left" :style="{backgroundColor:tdbgcolor}" @mouseenter="enter()"  @mouseleave="leave()">
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
	data:function(){
		return{
			tdbgcolor:'',
			totalRow:0
		}
	},
	created:function(){
		this.tdbgcolor = this.olt['trbgcolor']
		this.totalRow = this._totalRow()
	},
	// watch:{
	// 	olt(curInfo){
	// 		this.oltx = curInfo
	// 		curInfo && this.init_ip2color()
	// 		console.log(`in watch ${curInfo}`)
	// 		}
	// 	},
	methods:{
		_totalRow:function(){
			let keys = Object.keys(this.olt['bras'])
			let _totalRow = 0
			for(let key of keys){
				_totalRow = _totalRow + this.olt['bras'][key]['interface'].length
			}
			return _totalRow
		},
		BrasKeys:function(olt){
			// 这里获取olt的上联bras ip
			// console.log(Object.keys(olt['bras']));
			return Object.keys(olt['bras'])
		},
		enter:function(){
			this.tdbgcolor = '#f2dede'
		},
		leave:function(){
			this.tdbgcolor = this.olt['trbgcolor']
		}
	}
	}
</script>

<style>
</style>
