<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
	<table border="1px" align="center">
		<thead>
			<tr>
				<th rowspan="2">序号</th>
				<th rowspan="2">ip</th>
				<th rowspan="2">名称</th>
				<th colspan="2">Bras</th>
				<th rowspan="2">nasportid</th>
			</tr>
			<tr>
				<td>名称</td>
				<td>接口</td>
			</tr>
		</thead>
		<tbody>
			<tr v-for="(value, key, index) in olts" :key=key>
				<td :rowspan="value | TotalRow">{{index+1}}</td>
				<td>{{value | TotalRow}}</td>
				<td>{{value['name']}}</td>
				<!-- <td>{{BrasKeys(value)[0]}}{{value['bras'][BrasKeys(value)[0]]['name']}}</td> -->
				<!-- <td :rowspan="value['bras'][BrasKeys(value)[0]]['interface'].length">{{value['bras'][BrasKeys(value)[0]]['name']}}</td> -->
				<td :rowspan="value['bras'][BrasKeys(value)[0]]">{{value['bras'][BrasKeys(value)[0]]['name']}}</td>
				<td>{{value['bras'][BrasKeys(value)[0]]['interface'][0]}}</td>
				<td :rowspan="value | TotalRow">{{value['nasportid'].join(';')}}</td>
				
				<!-- 第1台bras接口如果不址1个，继续继续输出 -->
				<div v-if="1">子接口数量</div>
			</tr>


<!-- 			<template v-for="(value, key, index) in olts">
				<ListItem :index=index+1 :olt=value :ip=key :key=key></ListItem>
			</template> -->
		</tbody>
	</table>
  </div>
</template>

<script>
	
export default {
  name: 'OltList',
  methods:{
	BrasKeys:function(olt){
		// 这里获取olt的上联bras ip
		// console.log(Object.keys(olt['bras']));
		return Object.keys(olt['bras'])
	}
  },
  filters:{
	TotalRow:function(olt){
		let keys = Object.keys(olt['bras'])
		let _totalRow = 0
		for(let key of keys){
			_totalRow = _totalRow + olt['bras'][key]['interface'].length
		}
		return _totalRow
	},
	subRow:function(brasinterface){
		return brasinterface.length
	}
  },
  props: {
    msg: String
  },
  data: function(){
	return {
		olts:
		{
		"10.207.53.50": {
		"name": "A奥体",
		"nasportid": [
		"WH-JZ-BR7750-1:0_0/101",
		"WH-Red-JZ-A:1/1",
		"WH-Red-JZ-A:11/1"
		],
		"bras": {
		"10.207.7.146": {
		"name": "JZ-7750-1",
		"interface": [
		"lag-101"
		]
		},
		"10.207.7.111": {
		"name": "JZ-Redback",
		"interface": [
		"1/1",
		"11/1"
		]
		}
		},
		"type": "raisecom",
		"pppoebras": [
		"10.207.7.146",
		"10.207.7.238"
		]
		},
		"10.207.53.58": {
		"name": "A安顺花园",
		"nasportid": [
		"WH-LJS-ME60-2:4_2/3"
		],
		"bras": {
		"10.207.7.114": {
		"name": "LJS-ME60-2",
		"interface": [
		"Eth-Trunk3.105"
		]
		}
		},
		"type": "raisecom",
		"pppoebras": [
		"10.207.7.114"
		]
		}
		}
	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
