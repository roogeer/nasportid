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
			<template v-for="(value, key, index) in olts">
				<ListItem :index=index+1 :olt=value :ip=key :key=key></ListItem>
			</template>
		</tbody>
	</table>
  </div>
</template>

<script>
	import ListItem  from './ListItem.vue'
	
export default {
  name: 'OltList',
  components:{ListItem},
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
"10.207.57.14": {
"name": "121-1",
"nasportid": [
"WH-QS116-ME60-1:4_2/1",
"WH-QS116-ME60-1:5_2/1",
"WH-QS116-ME60-2:4_2/1",
"WH-QS116-ME60-2:5_2/1"
],
"bras": {
"10.207.7.134": {
"name": "QS116-ME60-1",
"interface": [
"Eth-Trunk1.109"
]
},
"10.207.7.135": {
"name": "QS116-ME60-2",
"interface": [
"Eth-Trunk1.8"
]
}
},
"type": "tailong",
"pppoebras": [
"10.207.7.134",
"10.207.7.135"
]
},
"10.207.57.18": {
"name": "121-2",
"nasportid": [
"WH-QS116-ME60-1:4_2/1",
"WH-QS116-ME60-1:5_2/1",
"WH-QS116-ME60-2:4_2/1",
"WH-QS116-ME60-2:5_2/1"
],
"bras": {
"10.207.7.134": {
"name": "QS116-ME60-1",
"interface": [
"Eth-Trunk1.108"
]
},
"10.207.7.135": {
"name": "QS116-ME60-2",
"interface": [
"Eth-Trunk1.7"
]
}
},
"type": "tailong",
"pppoebras": [
"10.207.7.134",
"10.207.7.135"
]
},
"10.207.57.22": {
"name": "121-3",
"nasportid": [
"WH-QS116-ME60-1:4_2/1",
"WH-QS116-ME60-1:5_2/1",
"WH-QS116-ME60-2:4_2/1",
"WH-QS116-ME60-2:5_2/1"
],
"bras": {
"10.207.7.134": {
"name": "QS116-ME60-1",
"interface": [
"Eth-Trunk1.110"
]
},
"10.207.7.135": {
"name": "QS116-ME60-2",
"interface": [
"Eth-Trunk1.9"
]
}
},
"type": "tailong",
"pppoebras": [
"10.207.7.134",
"10.207.7.135"
]
},
"10.207.57.26": {
"name": "121-4",
"nasportid": [
"WH-QS116-ME60-1:4_2/1",
"WH-QS116-ME60-1:5_2/1",
"WH-QS116-ME60-2:4_2/1",
"WH-QS116-ME60-2:5_2/1"
],
"bras": {
"10.207.7.134": {
"name": "QS116-ME60-1",
"interface": [
"Eth-Trunk1.107"
]
},
"10.207.7.135": {
"name": "QS116-ME60-2",
"interface": [
"Eth-Trunk1.6"
]
}
},
"type": "tailong",
"pppoebras": [
"10.207.7.134",
"10.207.7.135"
]
},
"10.207.61.38": {
"name": "3602-6900",
"nasportid": [
"WH-CQ-ME60-3:4_2/2",
"WH-CQ-ME60-3:4_2/3",
"WH-HY-ME60-1:4_0/2"
],
"bras": {
"10.207.7.122": {
"name": "CQ-ME60-3",
"interface": [
"Eth-Trunk2.2",
"Eth-Trunk3.104"
]
},
"10.207.7.117": {
"name": "HY-ME60-1",
"interface": [
"Gi4/0/2.2"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.122",
"10.207.7.117"
]
},
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
"10.207.61.158": {
"name": "A奥林花园8000",
"nasportid": [
"WH-CQ-ME60-3:4_2/1",
"WH-CQ-ME60-3:5_2/1",
"WH-CQ-ME60-3:4_2/4"
],
"bras": {
"10.207.7.122": {
"name": "CQ-ME60-3",
"interface": [
"Eth-Trunk1.1",
"Eth-Trunk4.21"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.122"
]
},
"10.207.33.122": {
"name": "A安静8000",
"nasportid": [
"WH-CQ-ME60-1:4_2/2",
"WH-CQ-ME60-1:5_2/2",
"WH-CQ-ME60-5:4_2/1",
"WH-CQ-ME60-5:5_2/1"
],
"bras": {
"10.207.7.115": {
"name": "CQ-ME60-1",
"interface": [
"Eth-Trunk2.4"
]
},
"10.207.7.119": {
"name": "CQ-ME60-5",
"interface": [
"Eth-Trunk1.41"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.115",
"10.207.7.119"
]
},
"10.207.53.58": {
"name": "A安顺花园",
"nasportid": [
"WH-LJS-ME60-2:4_2/3",
"WH-XD-ME60:4_2/1",
"WH-XD-ME60:5_2/1"
],
"bras": {
"10.207.7.114": {
"name": "LJS-ME60-2",
"interface": [
"Eth-Trunk3.105"
]
},
"10.207.7.125": {
"name": "XD-ME60-1",
"interface": [
"Eth-Trunk1.5"
]
}
},
"type": "raisecom",
"pppoebras": [
"10.207.7.114",
"10.207.7.125"
]
},
"10.207.125.18": {
"name": "B北洋桥8000",
"nasportid": [
"WH-QS116-ME60-1:4_2/1",
"WH-QS116-ME60-1:5_2/1",
"WH-QS116-ME60-2:4_2/1",
"WH-QS116-ME60-2:5_2/1"
],
"bras": {
"10.207.7.134": {
"name": "QS116-ME60-1",
"interface": [
"Eth-Trunk1.4"
]
},
"10.207.7.135": {
"name": "QS116-ME60-2",
"interface": [
"Eth-Trunk1.107"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.134",
"10.207.7.135"
]
},
"10.207.97.38": {
"name": "B北湖一8000",
"nasportid": [
"WH-CQ-BR7750-1:0_0/101",
"WH-CQ-ME60-5:4_2/2",
"WH-CQ-ME60-5:5_2/2",
"WH-CQ-ME60-6:4_2/1",
"WH-CQ-ME60-6:5_2/1"
],
"bras": {
"10.207.7.131": {
"name": "CQ-7750-1",
"interface": [
"lag-101"
]
},
"10.207.7.119": {
"name": "CQ-ME60-5",
"interface": [
"Eth-Trunk2.12"
]
},
"10.207.7.123": {
"name": "CQ-ME60-6",
"interface": [
"Eth-Trunk1.103"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.131",
"10.207.7.119",
"10.207.7.123"
]
},
"10.207.65.58": {
"name": "B北湖二8000",
"nasportid": [
"WH-CQ-ME60-5:4_2/2",
"WH-CQ-ME60-5:5_2/2",
"WH-CQ-ME60-9:4_2/1",
"WH-CQ-ME60-9:5_2/1"
],
"bras": {
"10.207.7.119": {
"name": "CQ-ME60-5",
"interface": [
"Eth-Trunk2.1"
]
},
"10.207.7.130": {
"name": "CQ-ME60-9",
"interface": [
"Eth-Trunk1.101"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.119",
"10.207.7.130"
]
},
"10.207.69.66": {
"name": "B宝丰8000",
"nasportid": [
"WH-CQ-ME60-5:4_2/1",
"WH-CQ-ME60-5:5_2/1",
"WH-CQ-ME60-7:4_2/1",
"WH-CQ-ME60-7:5_2/1"
],
"bras": {
"10.207.7.119": {
"name": "CQ-ME60-5",
"interface": [
"Eth-Trunk1.36"
]
},
"10.207.7.124": {
"name": "CQ-ME60-7",
"interface": [
"Eth-Trunk1.7"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.119",
"10.207.7.124"
]
},
"10.207.41.102": {
"name": "B滨江壹号8000",
"nasportid": [
"WH-CQ-ME60-3:4_2/2",
"WH-CQ-ME60-3:4_2/3",
"WH-HY-ME60-1:5_2/1"
],
"bras": {
"10.207.7.122": {
"name": "CQ-ME60-3",
"interface": [
"Eth-Trunk2.9",
"Eth-Trunk3.105"
]
},
"10.207.7.117": {
"name": "HY-ME60-1",
"interface": [
"Eth-Trunk1.104"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.122",
"10.207.7.117"
]
},
"10.207.125.50": {
"name": "B白玉山8000",
"nasportid": [
"WH-LJS-ME60-2:5_2/1",
"WH-QS116-ME60-2:4_2/1",
"WH-QS116-ME60-2:5_2/1"
],
"bras": {
"10.207.7.114": {
"name": "LJS-ME60-2",
"interface": [
"Eth-Trunk1.1000"
]
},
"10.207.7.135": {
"name": "QS116-ME60-2",
"interface": [
"Eth-Trunk1.104"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.114",
"10.207.7.135"
]
},
"10.207.61.178": {
"name": "B白金公馆8000",
"nasportid": [
"WH-CQ-ME60-3:4_2/1",
"WH-CQ-ME60-3:5_2/1",
"WH-CQ-ME60-3:4_2/4"
],
"bras": {
"10.207.7.122": {
"name": "CQ-ME60-3",
"interface": [
"Eth-Trunk1.105",
"Eth-Trunk4.31"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.122"
]
},
"10.207.37.82": {
"name": "B百步亭8000-1",
"nasportid": [
"WH-CQ-ME60-2:4_2/1",
"WH-CQ-ME60-2:5_2/1",
"WH-CQ-ME60-5:4_2/2",
"WH-CQ-ME60-5:5_2/2"
],
"bras": {
"10.207.7.116": {
"name": "CQ-ME60-2",
"interface": [
"Eth-Trunk1.1"
]
},
"10.207.7.119": {
"name": "CQ-ME60-5",
"interface": [
"Eth-Trunk2.30"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.116",
"10.207.7.119"
]
},
"10.207.37.90": {
"name": "B百步亭8000-2",
"nasportid": [
"WH-CQ-ME60-2:4_2/1",
"WH-CQ-ME60-2:5_2/1",
"WH-CQ-ME60-5:4_2/2",
"WH-CQ-ME60-5:5_2/2"
],
"bras": {
"10.207.7.116": {
"name": "CQ-ME60-2",
"interface": [
"Eth-Trunk1.8"
]
},
"10.207.7.119": {
"name": "CQ-ME60-5",
"interface": [
"Eth-Trunk2.31"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.116",
"10.207.7.119"
]
},
"10.207.45.42": {
"name": "B碧海8000",
"nasportid": [
"WH-CQ-ME60-4:4_2/1",
"WH-CQ-ME60-4:5_2/1",
"WH-CQ-ME60-5:4_2/1",
"WH-CQ-ME60-5:5_2/1"
],
"bras": {
"10.207.7.118": {
"name": "CQ-ME60-4",
"interface": [
"Eth-Trunk1.3"
]
},
"10.207.7.119": {
"name": "CQ-ME60-5",
"interface": [
"Eth-Trunk1.28"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.118",
"10.207.7.119"
]
},
"10.207.25.94": {
"name": "B豹澥",
"nasportid": [
"WH-LJS-BR7750-1:0_0/101",
"WH-LJS-ME60-2:5_2/1"
],
"bras": {
"10.207.7.132": {
"name": "LJS-7750-1",
"interface": [
"lag-101"
]
},
"10.207.7.114": {
"name": "LJS-ME60-2",
"interface": [
"Eth-Trunk1.100"
]
}
},
"type": "raisecom",
"pppoebras": [
"10.207.7.132",
"10.207.7.114"
]
},
"10.207.105.6": {
"name": "C城南",
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
"10.207.53.62": {
"name": "C城建学院",
"nasportid": [
"WH-LJS-ME60-2:5_2/1",
"WH-LJS-ME60-4:4_2/1",
"WH-LJS-ME60-4:5_2/1"
],
"bras": {
"10.207.7.114": {
"name": "LJS-ME60-2",
"interface": [
"Eth-Trunk1.114"
]
},
"10.207.7.121": {
"name": "LJS-ME60-4",
"interface": [
"Eth-Trunk1.18"
]
}
},
"type": "raisecom",
"pppoebras": [
"10.207.7.114",
"10.207.7.121"
]
},
"10.207.61.126": {
"name": "C常三8000",
"nasportid": [
"WH-CQ-ME60-5:4_2/2",
"WH-CQ-ME60-5:5_2/2",
"WH-CQ-ME60-6:4_2/1",
"WH-CQ-ME60-6:5_2/1"
],
"bras": {
"10.207.7.119": {
"name": "CQ-ME60-5",
"interface": [
"Eth-Trunk2.7"
]
},
"10.207.7.123": {
"name": "CQ-ME60-6",
"interface": [
"Eth-Trunk1.7"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.119",
"10.207.7.123"
]
},
"10.207.137.38": {
"name": "C常青服务中心8000",
"nasportid": [
"WH-CQ-ME60-10:4_2/1",
"WH-CQ-ME60-10:5_2/1",
"WH-CQ-ME60-5:4_2/4",
"WH-CQ-ME60-5:5_2/4"
],
"bras": {
"10.207.7.149": {
"name": "CQ-ME60-10",
"interface": [
"Eth-Trunk1.9"
]
},
"10.207.7.119": {
"name": "CQ-ME60-5",
"interface": [
"Eth-Trunk4.41"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.149",
"10.207.7.119"
]
},
"10.207.65.94": {
"name": "C常青花园8000",
"nasportid": [
"WH-CQ-ME60-5:4_2/2",
"WH-CQ-ME60-5:5_2/2",
"WH-CQ-ME60-6:4_2/1",
"WH-CQ-ME60-6:5_2/1"
],
"bras": {
"10.207.7.119": {
"name": "CQ-ME60-5",
"interface": [
"Eth-Trunk2.9"
]
},
"10.207.7.123": {
"name": "CQ-ME60-6",
"interface": [
"Eth-Trunk1.1"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.119",
"10.207.7.123"
]
},
"10.207.73.6": {
"name": "C柴林头",
"nasportid": [
"WH-LJS-ME60-2:4_2/3",
"WH-XD-ME60-2:4_2/1",
"WH-XD-ME60-2:5_2/1"
],
"bras": {
"10.207.7.114": {
"name": "LJS-ME60-2",
"interface": [
"Eth-Trunk3.201"
]
},
"10.207.7.128": {
"name": "XD-ME60-2",
"interface": [
"Eth-Trunk1.5"
]
}
},
"type": "raisecom",
"pppoebras": [
"10.207.7.114",
"10.207.7.128"
]
},
"10.207.73.10": {
"name": "C楚才",
"nasportid": [
"WH-LJS-ME60-2:4_2/3",
"WH-XD-ME60:4_2/1",
"WH-XD-ME60:5_2/1"
],
"bras": {
"10.207.7.114": {
"name": "LJS-ME60-2",
"interface": [
"Eth-Trunk3.101"
]
},
"10.207.7.125": {
"name": "XD-ME60-1",
"interface": [
"Eth-Trunk1.3"
]
}
},
"type": "raisecom",
"pppoebras": [
"10.207.7.114",
"10.207.7.125"
]
},
"10.207.53.10": {
"name": "C楚雄",
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
"10.207.93.102": {
"name": "C蔡A8000",
"nasportid": [
"WH-CQ-ME60-5:4_2/2",
"WH-CQ-ME60-5:5_2/2",
"WH-CQ-ME60-9:4_2/2",
"WH-CQ-ME60-9:5_2/2"
],
"bras": {
"10.207.7.119": {
"name": "CQ-ME60-5",
"interface": [
"Eth-Trunk2.72"
]
},
"10.207.7.130": {
"name": "CQ-ME60-9",
"interface": [
"Eth-Trunk2.3"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.119",
"10.207.7.130"
]
},
"10.207.93.118": {
"name": "C蔡B8000",
"nasportid": [
"WH-CQ-ME60-5:4_2/2",
"WH-CQ-ME60-5:5_2/2",
"WH-CQ-ME60-9:4_2/2",
"WH-CQ-ME60-9:5_2/2"
],
"bras": {
"10.207.7.119": {
"name": "CQ-ME60-5",
"interface": [
"Eth-Trunk2.71"
]
},
"10.207.7.130": {
"name": "CQ-ME60-9",
"interface": [
"Eth-Trunk2.2"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.119",
"10.207.7.130"
]
},
"10.207.61.170": {
"name": "C蔡甸8000",
"nasportid": [
"WH-CQ-ME60-3:4_2/2",
"WH-CQ-ME60-3:4_2/3",
"WH-HY-ME60-1:4_0/2"
],
"bras": {
"10.207.7.122": {
"name": "CQ-ME60-3",
"interface": [
"Eth-Trunk2.1",
"Eth-Trunk3.8"
]
},
"10.207.7.117": {
"name": "HY-ME60-1",
"interface": [
"Gi4/0/2.1"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.122",
"10.207.7.117"
]
},
"10.207.93.158": {
"name": "C长江明珠6900s-1",
"nasportid": [
"WH-CQ-ME60-10:4_2/1",
"WH-CQ-ME60-10:5_2/1",
"WH-CQ-ME60-5:4_2/4",
"WH-CQ-ME60-5:5_2/4"
],
"bras": {
"10.207.7.149": {
"name": "CQ-ME60-10",
"interface": [
"Eth-Trunk1.51"
]
},
"10.207.7.119": {
"name": "CQ-ME60-5",
"interface": [
"Eth-Trunk4.6"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.149",
"10.207.7.119"
]
},
"10.207.93.154": {
"name": "C长江明珠6900s-2",
"nasportid": [
"WH-CQ-ME60-10:4_2/1",
"WH-CQ-ME60-10:5_2/1",
"WH-CQ-ME60-5:4_2/4",
"WH-CQ-ME60-5:5_2/4"
],
"bras": {
"10.207.7.149": {
"name": "CQ-ME60-10",
"interface": [
"Eth-Trunk1.52"
]
},
"10.207.7.119": {
"name": "CQ-ME60-5",
"interface": [
"Eth-Trunk4.7"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.149",
"10.207.7.119"
]
},
"10.207.77.10": {
"name": "C长航",
"nasportid": [
"WH-LJS-ME60-2:4_2/3",
"WH-XD-ME60:4_2/1",
"WH-XD-ME60:5_2/1"
],
"bras": {
"10.207.7.114": {
"name": "LJS-ME60-2",
"interface": [
"Eth-Trunk3.103"
]
},
"10.207.7.125": {
"name": "XD-ME60-1",
"interface": [
"Eth-Trunk1.9"
]
}
},
"type": "raisecom",
"pppoebras": [
"10.207.7.114",
"10.207.7.125"
]
},
"10.207.37.102": {
"name": "C长顺园8100-1",
"nasportid": [
"WH-CQ-ME60-2:4_2/1",
"WH-CQ-ME60-2:5_2/1",
"WH-CQ-ME60-5:4_2/2",
"WH-CQ-ME60-5:5_2/2"
],
"bras": {
"10.207.7.116": {
"name": "CQ-ME60-2",
"interface": [
"Eth-Trunk1.4"
]
},
"10.207.7.119": {
"name": "CQ-ME60-5",
"interface": [
"Eth-Trunk2.32"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.116",
"10.207.7.119"
]
},
"10.207.37.106": {
"name": "C长顺园8100-2",
"nasportid": [
"WH-CQ-ME60-2:4_2/1",
"WH-CQ-ME60-2:5_2/1",
"WH-CQ-ME60-5:4_2/2",
"WH-CQ-ME60-5:5_2/2"
],
"bras": {
"10.207.7.116": {
"name": "CQ-ME60-2",
"interface": [
"Eth-Trunk1.5"
]
},
"10.207.7.119": {
"name": "CQ-ME60-5",
"interface": [
"Eth-Trunk2.34"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.116",
"10.207.7.119"
]
},
"10.207.53.70": {
"name": "D东亭",
"nasportid": [
"WH-LJS-ME60-2:4_2/3",
"WH-XD-ME60:4_2/1",
"WH-XD-ME60:5_2/1"
],
"bras": {
"10.207.7.114": {
"name": "LJS-ME60-2",
"interface": [
"Eth-Trunk3.106"
]
},
"10.207.7.125": {
"name": "XD-ME60-1",
"interface": [
"Eth-Trunk1.100"
]
}
},
"type": "raisecom",
"pppoebras": [
"10.207.7.114",
"10.207.7.125"
]
},
"10.207.125.34": {
"name": "D东兴天地8000",
"nasportid": [
"WH-QS116-ME60-1:4_2/1",
"WH-QS116-ME60-1:5_2/1",
"WH-QS116-ME60-2:4_2/1",
"WH-QS116-ME60-2:5_2/1"
],
"bras": {
"10.207.7.134": {
"name": "QS116-ME60-1",
"interface": [
"Eth-Trunk1.2"
]
},
"10.207.7.135": {
"name": "QS116-ME60-2",
"interface": [
"Eth-Trunk1.2"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.134",
"10.207.7.135"
]
},
"10.207.105.34": {
"name": "D东岳",
"nasportid": [
"WH-Red-JZ-A:1/1",
"WH-Red-JZ-A:11/1"
],
"bras": {
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
"10.207.7.238"
]
},
"10.207.45.82": {
"name": "D东方花城8000",
"nasportid": [
"WH-CQ-ME60-4:4_2/1",
"WH-CQ-ME60-4:5_2/1",
"WH-CQ-ME60-5:4_2/1",
"WH-CQ-ME60-5:5_2/1"
],
"bras": {
"10.207.7.118": {
"name": "CQ-ME60-4",
"interface": [
"Eth-Trunk1.7"
]
},
"10.207.7.119": {
"name": "CQ-ME60-5",
"interface": [
"Eth-Trunk1.25"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.118",
"10.207.7.119"
]
},
"10.207.125.74": {
"name": "D东方雅苑8100-1",
"nasportid": [
"WH-QS116-ME60-2:4_2/1",
"WH-QS116-ME60-2:5_2/1"
],
"bras": {
"10.207.7.135": {
"name": "QS116-ME60-2",
"interface": [
"Eth-Trunk1.31"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.135"
]
},
"10.207.125.78": {
"name": "D东方雅苑8100-2",
"nasportid": [
"WH-QS116-ME60-2:4_2/1",
"WH-QS116-ME60-2:5_2/1"
],
"bras": {
"10.207.7.135": {
"name": "QS116-ME60-2",
"interface": [
"Eth-Trunk1.32"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.135"
]
},
"10.207.77.14": {
"name": "D东湖景园",
"nasportid": [
"WH-QS116-ME60-2:4_2/1",
"WH-QS116-ME60-2:5_2/1",
"WH-XD-ME60-2:4_2/1",
"WH-XD-ME60-2:5_2/1"
],
"bras": {
"10.207.7.135": {
"name": "QS116-ME60-2",
"interface": [
"Eth-Trunk1.109"
]
},
"10.207.7.128": {
"name": "XD-ME60-2",
"interface": [
"Eth-Trunk1.1"
]
}
},
"type": "raisecom",
"pppoebras": [
"10.207.7.135",
"10.207.7.128"
]
},
"10.207.37.74": {
"name": "D东立国际8000",
"nasportid": [
"WH-CQ-ME60-2:4_2/1",
"WH-CQ-ME60-2:5_2/1",
"WH-CQ-ME60-5:4_2/2",
"WH-CQ-ME60-5:5_2/2"
],
"bras": {
"10.207.7.116": {
"name": "CQ-ME60-2",
"interface": [
"Eth-Trunk1.7"
]
},
"10.207.7.119": {
"name": "CQ-ME60-5",
"interface": [
"Eth-Trunk2.26"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.116",
"10.207.7.119"
]
},
"10.207.33.130": {
"name": "D东西湖8000",
"nasportid": [
"WH-CQ-ME60-1:4_2/1",
"WH-CQ-ME60-1:5_2/1",
"WH-CQ-ME60-5:4_2/1",
"WH-CQ-ME60-5:5_2/1"
],
"bras": {
"10.207.7.115": {
"name": "CQ-ME60-1",
"interface": [
"Eth-Trunk1.1"
]
},
"10.207.7.119": {
"name": "CQ-ME60-5",
"interface": [
"Eth-Trunk1.11"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.115",
"10.207.7.119"
]
},
"10.207.37.70": {
"name": "D堤角8000",
"nasportid": [
"WH-CQ-ME60-10:4_2/1",
"WH-CQ-ME60-10:5_2/1",
"WH-CQ-ME60-5:4_2/4",
"WH-CQ-ME60-5:5_2/4"
],
"bras": {
"10.207.7.149": {
"name": "CQ-ME60-10",
"interface": [
"Eth-Trunk1.42"
]
},
"10.207.7.119": {
"name": "CQ-ME60-5",
"interface": [
"Eth-Trunk4.3"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.149",
"10.207.7.119"
]
},
"10.207.61.142": {
"name": "D大集南湖8000",
"nasportid": [
"WH-CQ-ME60-3:4_2/1",
"WH-CQ-ME60-3:5_2/1",
"WH-CQ-ME60-3:4_2/4"
],
"bras": {
"10.207.7.122": {
"name": "CQ-ME60-3",
"interface": [
"Eth-Trunk1.104",
"Eth-Trunk4.30"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.122"
]
},
"10.207.77.62": {
"name": "D读书苑",
"nasportid": [
"WH-LJS-ME60-2:4_2/2",
"WH-LJS-ME60-2:5_2/2",
"WH-XD-ME60:4_2/1",
"WH-XD-ME60:5_2/1"
],
"bras": {
"10.207.7.114": {
"name": "LJS-ME60-2",
"interface": [
"Eth-Trunk2.500"
]
},
"10.207.7.125": {
"name": "XD-ME60-1",
"interface": [
"Eth-Trunk1.8"
]
}
},
"type": "raisecom",
"pppoebras": [
"10.207.7.114",
"10.207.7.125"
]
},
"10.207.89.99": {
"name": "E鄂州新康6900",
"nasportid": [
"WH-Red-EZ-A:11/1"
],
"bras": {
"10.207.7.112": {
"name": "EZ-Redback",
"interface": [
"11/1"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.237"
]
},
"10.207.117.2": {
"name": "E鄂州葛店8000",
"nasportid": [
"WH-LJS-ME60-2:5_2/1"
],
"bras": {
"10.207.7.114": {
"name": "LJS-ME60-2",
"interface": [
"Eth-Trunk1.1"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.114"
]
},
"10.207.89.100": {
"name": "E鄂州西山6900-1",
"nasportid": [
"WH-Red-EZ-A:11/1"
],
"bras": {
"10.207.7.112": {
"name": "EZ-Redback",
"interface": [
"11/1"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.237"
]
},
"10.207.89.103": {
"name": "E鄂州西山6900-2",
"nasportid": [
"WH-Red-EZ-A:11/1"
],
"bras": {
"10.207.7.112": {
"name": "EZ-Redback",
"interface": [
"11/1"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.237"
]
},
"10.207.57.106": {
"name": "F佛奥68",
"nasportid": [
"WH-LJS-ME60-2:5_2/1",
"WH-LJS-ME60-4:4_2/1",
"WH-LJS-ME60-4:5_2/1"
],
"bras": {
"10.207.7.114": {
"name": "LJS-ME60-2",
"interface": [
"Eth-Trunk1.120"
]
},
"10.207.7.121": {
"name": "LJS-ME60-4",
"interface": [
"Eth-Trunk1.21"
]
}
},
"type": "raisecom",
"pppoebras": [
"10.207.7.114",
"10.207.7.121"
]
},
"10.207.25.30": {
"name": "F佛祖岭",
"nasportid": [
"WH-LJS-BR7750-1:0_0/101",
"WH-LJS-ME60-2:5_2/1"
],
"bras": {
"10.207.7.132": {
"name": "LJS-7750-1",
"interface": [
"lag-101"
]
},
"10.207.7.114": {
"name": "LJS-ME60-2",
"interface": [
"Eth-Trunk1.109"
]
}
},
"type": "raisecom",
"pppoebras": [
"10.207.7.132",
"10.207.7.114"
]
},
"10.207.73.30": {
"name": "F凤凰山",
"nasportid": [
"WH-LJS-ME60-2:4_2/3",
"WH-XD-ME60:4_2/1",
"WH-XD-ME60:5_2/1"
],
"bras": {
"10.207.7.114": {
"name": "LJS-ME60-2",
"interface": [
"Eth-Trunk3.102"
]
},
"10.207.7.125": {
"name": "XD-ME60-1",
"interface": [
"Eth-Trunk1.6"
]
}
},
"type": "raisecom",
"pppoebras": [
"10.207.7.114",
"10.207.7.125"
]
},
"10.207.65.66": {
"name": "F富康里8000",
"nasportid": [
"WH-CQ-ME60-5:4_2/2",
"WH-CQ-ME60-5:5_2/2",
"WH-CQ-ME60-6:4_2/1",
"WH-CQ-ME60-6:5_2/1",
"WH-CQ-ME60-9:4_2/1",
"WH-CQ-ME60-9:5_2/1"
],
"bras": {
"10.207.7.119": {
"name": "CQ-ME60-5",
"interface": [
"Eth-Trunk2.6"
]
},
"10.207.7.123": {
"name": "CQ-ME60-6",
"interface": [
"Eth-Trunk1.4"
]
},
"10.207.7.130": {
"name": "CQ-ME60-9",
"interface": [
"Eth-Trunk1.6"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.119",
"10.207.7.123",
"10.207.7.130"
]
},
"10.207.81.130": {
"name": "F福星城南区8000",
"nasportid": [
"WH-CQ-ME60-5:4_2/2",
"WH-CQ-ME60-5:5_2/2",
"WH-CQ-ME60-9:4_2/1",
"WH-CQ-ME60-9:5_2/1"
],
"bras": {
"10.207.7.119": {
"name": "CQ-ME60-5",
"interface": [
"Eth-Trunk2.3"
]
},
"10.207.7.130": {
"name": "CQ-ME60-9",
"interface": [
"Eth-Trunk1.9"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.119",
"10.207.7.130"
]
},
"10.207.41.90": {
"name": "F芳草苑8000",
"nasportid": [
"WH-CQ-ME60-3:4_2/4",
"WH-CQ-ME60-5:4_2/3",
"WH-HY-ME60-1:5_0/3",
"WH-HY-ME60-2:4_2/1",
"WH-HY-ME60-2:5_2/1"
],
"bras": {
"10.207.7.122": {
"name": "CQ-ME60-3",
"interface": [
"Eth-Trunk4.6"
]
},
"10.207.7.119": {
"name": "CQ-ME60-5",
"interface": [
"Eth-Trunk3.8"
]
},
"10.207.7.117": {
"name": "HY-ME60-1",
"interface": [
"Gi5/0/3.1"
]
},
"10.207.7.133": {
"name": "HY-ME60-2",
"interface": [
"Eth-Trunk1.4"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.122",
"10.207.7.119",
"10.207.7.117",
"10.207.7.133"
]
},
"10.207.89.14": {
"name": "G关西",
"nasportid": [
"WH-LJS-ME60-2:5_2/1",
"WH-LJS-ME60-3:5_0/5"
],
"bras": {
"10.207.7.114": {
"name": "LJS-ME60-2",
"interface": [
"Eth-Trunk1.210"
]
},
"10.207.7.120": {
"name": "LJS-ME60-3",
"interface": [
"Gi5/0/5.1"
]
}
},
"type": "raisecom",
"pppoebras": [
"10.207.7.114",
"10.207.7.120"
]
},
"10.207.25.162": {
"name": "G国企508-1",
"nasportid": [
"WH-LJS-ME60-2:5_2/1",
"WH-LJS-ME60-4:4_2/1",
"WH-LJS-ME60-4:5_2/1"
],
"bras": {
"10.207.7.114": {
"name": "LJS-ME60-2",
"interface": [
"Eth-Trunk1.203"
]
},
"10.207.7.121": {
"name": "LJS-ME60-4",
"interface": [
"Eth-Trunk1.11"
]
}
},
"type": "raisecom",
"pppoebras": [
"10.207.7.114",
"10.207.7.121"
]
},
"10.207.25.166": {
"name": "G国企508-2",
"nasportid": [
"WH-LJS-ME60-2:5_2/1",
"WH-LJS-ME60-4:4_2/1",
"WH-LJS-ME60-4:5_2/1"
],
"bras": {
"10.207.7.114": {
"name": "LJS-ME60-2",
"interface": [
"Eth-Trunk1.204"
]
},
"10.207.7.121": {
"name": "LJS-ME60-4",
"interface": [
"Eth-Trunk1.12"
]
}
},
"type": "raisecom",
"pppoebras": [
"10.207.7.114",
"10.207.7.121"
]
},
"10.207.25.170": {
"name": "G国企508-3",
"nasportid": [
"WH-LJS-ME60-2:5_2/1",
"WH-LJS-ME60-4:4_2/1",
"WH-LJS-ME60-4:5_2/1"
],
"bras": {
"10.207.7.114": {
"name": "LJS-ME60-2",
"interface": [
"Eth-Trunk1.205"
]
},
"10.207.7.121": {
"name": "LJS-ME60-4",
"interface": [
"Eth-Trunk1.13"
]
}
},
"type": "raisecom",
"pppoebras": [
"10.207.7.114",
"10.207.7.121"
]
},
"10.207.53.74": {
"name": "G国企总部",
"nasportid": [
"WH-LJS-ME60-2:5_2/1",
"WH-LJS-ME60-4:4_2/1",
"WH-LJS-ME60-4:5_2/1"
],
"bras": {
"10.207.7.114": {
"name": "LJS-ME60-2",
"interface": [
"Eth-Trunk1.206"
]
},
"10.207.7.121": {
"name": "LJS-ME60-4",
"interface": [
"Eth-Trunk1.17"
]
}
},
"type": "raisecom",
"pppoebras": [
"10.207.7.114",
"10.207.7.121"
]
},
"10.207.53.2": {
"name": "G桂子",
"nasportid": [
"WH-LJS-ME60-2:5_2/1",
"WH-LJS-ME60-3:5_0/2"
],
"bras": {
"10.207.7.114": {
"name": "LJS-ME60-2",
"interface": [
"Eth-Trunk1.119"
]
},
"10.207.7.120": {
"name": "LJS-ME60-3",
"interface": [
"Gi5/0/2.1"
]
}
},
"type": "raisecom",
"pppoebras": [
"10.207.7.114",
"10.207.7.120"
]
},
"10.207.121.14": {
"name": "G观澜国际8000",
"nasportid": [
"WH-CQ-ME60-3:4_2/1",
"WH-CQ-ME60-3:5_2/1",
"WH-CQ-ME60-3:4_2/4",
"WH-HY-ME60-2:4_2/1",
"WH-HY-ME60-2:5_2/1"
],
"bras": {
"10.207.7.122": {
"name": "CQ-ME60-3",
"interface": [
"Eth-Trunk1.108",
"Eth-Trunk4.2"
]
},
"10.207.7.133": {
"name": "HY-ME60-2",
"interface": [
"Eth-Trunk1.8"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.122",
"10.207.7.133"
]
},
"10.207.77.58": {
"name": "H华侨城8000",
"nasportid": [
"WH-QS116-ME60-2:4_2/1",
"WH-QS116-ME60-2:5_2/1"
],
"bras": {
"10.207.7.135": {
"name": "QS116-ME60-2",
"interface": [
"Eth-Trunk1.110"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.135"
]
},
"10.207.125.66": {
"name": "H华创园8000",
"nasportid": [
"WH-QS116-ME60-1:4_2/1",
"WH-QS116-ME60-1:5_2/1"
],
"bras": {
"10.207.7.134": {
"name": "QS116-ME60-1",
"interface": [
"Eth-Trunk1.9"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.134"
]
},
"10.207.81.6": {
"name": "H华安里8000",
"nasportid": [
"WH-CQ-ME60-5:4_2/2",
"WH-CQ-ME60-5:5_2/2",
"WH-CQ-ME60-9:4_2/1",
"WH-CQ-ME60-9:5_2/1"
],
"bras": {
"10.207.7.119": {
"name": "CQ-ME60-5",
"interface": [
"Eth-Trunk2.11"
]
},
"10.207.7.130": {
"name": "CQ-ME60-9",
"interface": [
"Eth-Trunk1.3"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.119",
"10.207.7.130"
]
},
"10.207.33.138": {
"name": "H华清园8100",
"nasportid": [
"WH-CQ-ME60-1:4_2/2",
"WH-CQ-ME60-1:5_2/2",
"WH-CQ-ME60-5:4_2/1",
"WH-CQ-ME60-5:5_2/1"
],
"bras": {
"10.207.7.115": {
"name": "CQ-ME60-1",
"interface": [
"Eth-Trunk2.7"
]
},
"10.207.7.119": {
"name": "CQ-ME60-5",
"interface": [
"Eth-Trunk1.46"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.115",
"10.207.7.119"
]
},
"10.207.101.30": {
"name": "H华苑6900",
"nasportid": [
"WH-CQ-ME60-5:4_2/2",
"WH-CQ-ME60-5:5_2/2",
"WH-CQ-ME60-9:4_2/1",
"WH-CQ-ME60-9:5_2/1"
],
"bras": {
"10.207.7.119": {
"name": "CQ-ME60-5",
"interface": [
"Eth-Trunk2.2"
]
},
"10.207.7.130": {
"name": "CQ-ME60-9",
"interface": [
"Eth-Trunk1.1"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.119",
"10.207.7.130"
]
},
"10.207.25.90": {
"name": "H华锦",
"nasportid": [
"WH-LJS-ME60-1:4_2/1",
"WH-LJS-ME60-1:5_2/1",
"WH-LJS-ME60-2:4_2/2",
"WH-LJS-ME60-2:5_2/2"
],
"bras": {
"10.207.7.113": {
"name": "LJS-ME60-1",
"interface": [
"Eth-Trunk1.4"
]
},
"10.207.7.114": {
"name": "LJS-ME60-2",
"interface": [
"Eth-Trunk2.104"
]
}
},
"type": "raisecom",
"pppoebras": [
"10.207.7.113",
"10.207.7.114"
]
},
"10.207.69.46": {
"name": "H和平里8000",
"nasportid": [
"WH-CQ-ME60-1:4_2/2",
"WH-CQ-ME60-1:5_2/2",
"WH-CQ-ME60-5:4_2/1",
"WH-CQ-ME60-5:5_2/1",
"WH-CQ-ME60-5:4_2/6",
"WH-CQ-ME60-7:4_2/2",
"WH-CQ-ME60-7:5_2/2"
],
"bras": {
"10.207.7.115": {
"name": "CQ-ME60-1",
"interface": [
"Eth-Trunk2.22"
]
},
"10.207.7.119": {
"name": "CQ-ME60-5",
"interface": [
"Eth-Trunk1.34",
"Eth-Trunk6.4"
]
},
"10.207.7.124": {
"name": "CQ-ME60-7",
"interface": [
"Eth-Trunk2.2"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.115",
"10.207.7.119",
"10.207.7.124"
]
},
"10.207.41.106": {
"name": "H惠民苑8100-1",
"nasportid": [
"WH-CQ-ME60-3:4_2/3",
"WH-HY-ME60-1:5_2/1"
],
"bras": {
"10.207.7.122": {
"name": "CQ-ME60-3",
"interface": [
"Eth-Trunk3.107"
]
},
"10.207.7.117": {
"name": "HY-ME60-1",
"interface": [
"Eth-Trunk1.20"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.122",
"10.207.7.117"
]
},
"10.207.41.110": {
"name": "H惠民苑8100-2",
"nasportid": [
"WH-CQ-ME60-3:4_2/3",
"WH-HY-ME60-1:5_2/1"
],
"bras": {
"10.207.7.122": {
"name": "CQ-ME60-3",
"interface": [
"Eth-Trunk3.108"
]
},
"10.207.7.117": {
"name": "HY-ME60-1",
"interface": [
"Eth-Trunk1.21"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.122",
"10.207.7.117"
]
},
"10.207.93.82": {
"name": "H横店8000",
"nasportid": [
"WH-CQ-ME60-10:4_2/1",
"WH-CQ-ME60-10:5_2/1",
"WH-CQ-ME60-5:4_2/4",
"WH-CQ-ME60-5:5_2/4"
],
"bras": {
"10.207.7.149": {
"name": "CQ-ME60-10",
"interface": [
"Eth-Trunk1.18"
]
},
"10.207.7.119": {
"name": "CQ-ME60-5",
"interface": [
"Eth-Trunk4.39"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.149",
"10.207.7.119"
]
},
"10.207.93.130": {
"name": "H汉口北8000",
"nasportid": [
"WH-CQ-ME60-10:4_2/1",
"WH-CQ-ME60-10:5_2/1",
"WH-CQ-ME60-5:4_2/4",
"WH-CQ-ME60-5:5_2/4"
],
"bras": {
"10.207.7.149": {
"name": "CQ-ME60-10",
"interface": [
"Eth-Trunk1.15"
]
},
"10.207.7.119": {
"name": "CQ-ME60-5",
"interface": [
"Eth-Trunk4.35"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.149",
"10.207.7.119"
]
},
"10.207.65.98": {
"name": "H汉口花园8000",
"nasportid": [
"WH-CQ-ME60-5:4_2/2",
"WH-CQ-ME60-5:5_2/2",
"WH-CQ-ME60-6:4_2/1",
"WH-CQ-ME60-6:5_2/1",
"WH-CQ-ME60-9:4_2/1",
"WH-CQ-ME60-9:5_2/1"
],
"bras": {
"10.207.7.119": {
"name": "CQ-ME60-5",
"interface": [
"Eth-Trunk2.4"
]
},
"10.207.7.123": {
"name": "CQ-ME60-6",
"interface": [
"Eth-Trunk1.102"
]
},
"10.207.7.130": {
"name": "CQ-ME60-9",
"interface": [
"Eth-Trunk1.5"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.119",
"10.207.7.123",
"10.207.7.130"
]
},
"10.207.25.50": {
"name": "H汉川6900",
"nasportid": [
"WH-CQ-BR7750-1:0_0/102",
"WH-CQ-ME60-5:4_2/1",
"WH-CQ-ME60-5:5_2/1"
],
"bras": {
"10.207.7.131": {
"name": "CQ-7750-1",
"interface": [
"lag-102"
]
},
"10.207.7.119": {
"name": "CQ-ME60-5",
"interface": [
"Eth-Trunk1.3"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.131",
"10.207.7.119"
]
},
"10.207.34.82": {
"name": "H汉川仙女山8000",
"nasportid": [
"WH-CQ-BR7750-1:0_0/102",
"WH-CQ-ME60-5:4_2/1",
"WH-CQ-ME60-5:5_2/1"
],
"bras": {
"10.207.7.131": {
"name": "CQ-7750-1",
"interface": [
"lag-102"
]
},
"10.207.7.119": {
"name": "CQ-ME60-5",
"interface": [
"Eth-Trunk1.2"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.131",
"10.207.7.119"
]
},
"10.207.33.82": {
"name": "H汉川马口8000",
"nasportid": [
"WH-CQ-BR7750-1:0_0/102",
"WH-CQ-ME60-5:4_2/1",
"WH-CQ-ME60-5:5_2/1"
],
"bras": {
"10.207.7.131": {
"name": "CQ-7750-1",
"interface": [
"lag-102"
]
},
"10.207.7.119": {
"name": "CQ-ME60-5",
"interface": [
"Eth-Trunk1.1"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.131",
"10.207.7.119"
]
},
"10.207.61.130": {
"name": "H汉棉8000",
"nasportid": [
"WH-CQ-ME60-3:4_2/2",
"WH-CQ-ME60-3:4_2/3",
"WH-HY-ME60-1:4_0/2"
],
"bras": {
"10.207.7.122": {
"name": "CQ-ME60-3",
"interface": [
"Eth-Trunk2.3",
"Eth-Trunk3.102"
]
},
"10.207.7.117": {
"name": "HY-ME60-1",
"interface": [
"Gi4/0/2.3"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.122",
"10.207.7.117"
]
},
"10.207.69.34": {
"name": "H汉正街6900",
"nasportid": [
"WH-CQ-ME60-1:4_2/2",
"WH-CQ-ME60-1:5_2/2",
"WH-CQ-ME60-5:4_2/1",
"WH-CQ-ME60-5:5_2/1",
"WH-CQ-ME60-5:4_2/6",
"WH-CQ-ME60-7:4_2/2",
"WH-CQ-ME60-7:5_2/2"
],
"bras": {
"10.207.7.115": {
"name": "CQ-ME60-1",
"interface": [
"Eth-Trunk2.21"
]
},
"10.207.7.119": {
"name": "CQ-ME60-5",
"interface": [
"Eth-Trunk1.33",
"Eth-Trunk6.5"
]
},
"10.207.7.124": {
"name": "CQ-ME60-7",
"interface": [
"Eth-Trunk2.1"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.115",
"10.207.7.119",
"10.207.7.124"
]
},
"10.207.45.74": {
"name": "H汉水桥8100",
"nasportid": [
"WH-CQ-ME60-4:4_2/1",
"WH-CQ-ME60-4:5_2/1",
"WH-CQ-ME60-5:4_2/1",
"WH-CQ-ME60-5:5_2/1"
],
"bras": {
"10.207.7.118": {
"name": "CQ-ME60-4",
"interface": [
"Eth-Trunk1.8"
]
},
"10.207.7.119": {
"name": "CQ-ME60-5",
"interface": [
"Eth-Trunk1.21"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.118",
"10.207.7.119"
]
},
"10.207.45.102": {
"name": "H汉水桥8100-2",
"nasportid": [
"WH-CQ-ME60-5:4_2/1",
"WH-CQ-ME60-5:5_2/1",
"WH-CQ-ME60-7:4_2/1",
"WH-CQ-ME60-7:5_2/1"
],
"bras": {
"10.207.7.119": {
"name": "CQ-ME60-5",
"interface": [
"Eth-Trunk1.29"
]
},
"10.207.7.124": {
"name": "CQ-ME60-7",
"interface": [
"Eth-Trunk1.3"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.119",
"10.207.7.124"
]
},
"10.207.121.26": {
"name": "H汉阳五医院8000",
"nasportid": [
"WH-CQ-ME60-3:4_2/4",
"WH-HY-ME60-2:4_2/1",
"WH-HY-ME60-2:5_2/1"
],
"bras": {
"10.207.7.122": {
"name": "CQ-ME60-3",
"interface": [
"Eth-Trunk4.3"
]
},
"10.207.7.133": {
"name": "HY-ME60-2",
"interface": [
"Eth-Trunk1.6"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.122",
"10.207.7.133"
]
},
"10.207.65.30": {
"name": "H火凤凰常青社区6900",
"nasportid": [
"WH-CQ-ME60-6:4_2/1",
"WH-CQ-ME60-6:5_2/1"
],
"bras": {
"10.207.7.123": {
"name": "CQ-ME60-6",
"interface": [
"Eth-Trunk1.5"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.123"
]
},
"10.207.93.110": {
"name": "H花一8000",
"nasportid": [
"WH-CQ-BR7750-1:0_0/101",
"WH-CQ-ME60-5:4_2/2",
"WH-CQ-ME60-5:5_2/2"
],
"bras": {
"10.207.7.131": {
"name": "CQ-7750-1",
"interface": [
"lag-101"
]
},
"10.207.7.119": {
"name": "CQ-ME60-5",
"interface": [
"Eth-Trunk2.73"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.131",
"10.207.7.119"
]
},
"10.207.53.78": {
"name": "H花山",
"nasportid": [
"WH-LJS-BR7750-1:0_0/101",
"WH-LJS-ME60-2:5_2/1"
],
"bras": {
"10.207.7.132": {
"name": "LJS-7750-1",
"interface": [
"lag-101"
]
},
"10.207.7.114": {
"name": "LJS-ME60-2",
"interface": [
"Eth-Trunk1.102"
]
}
},
"type": "raisecom",
"pppoebras": [
"10.207.7.132",
"10.207.7.114"
]
},
"10.207.89.18": {
"name": "H荷景苑",
"nasportid": [
"WH-LJS-ME60-2:4_2/2",
"WH-LJS-ME60-2:5_2/2",
"WH-LJS-ME60-3:4_0/3"
],
"bras": {
"10.207.7.114": {
"name": "LJS-ME60-2",
"interface": [
"Eth-Trunk2.200"
]
},
"10.207.7.120": {
"name": "LJS-ME60-3",
"interface": [
"Gi4/0/3.1"
]
}
},
"type": "raisecom",
"pppoebras": [
"10.207.7.114",
"10.207.7.120"
]
},
"10.207.53.54": {
"name": "H鸿发世纪城",
"nasportid": [
"WH-LJS-ME60-2:4_2/2",
"WH-LJS-ME60-2:5_2/2",
"WH-LJS-ME60-3:4_0/2"
],
"bras": {
"10.207.7.114": {
"name": "LJS-ME60-2",
"interface": [
"Eth-Trunk2.302"
]
},
"10.207.7.120": {
"name": "LJS-ME60-3",
"interface": [
"Gi4/0/2.2"
]
}
},
"type": "raisecom",
"pppoebras": [
"10.207.7.114",
"10.207.7.120"
]
},
"10.207.89.130": {
"name": "H鸿岭花园",
"nasportid": [
"WH-LJS-ME60-2:4_2/2",
"WH-LJS-ME60-2:5_2/2",
"WH-LJS-ME60-5:4_2/1",
"WH-LJS-ME60-5:5_2/1"
],
"bras": {
"10.207.7.114": {
"name": "LJS-ME60-2",
"interface": [
"Eth-Trunk2.400"
]
},
"10.207.7.147": {
"name": "LJS-ME60-5",
"interface": [
"Eth-Trunk1.4"
]
}
},
"type": "raisecom",
"pppoebras": [
"10.207.7.114",
"10.207.7.147"
]
},
"10.207.115.58": {
"name": "H黄石七里界6900",
"nasportid": [
"WH-HS-ME60-1:4_2/1",
"WH-HS-ME60-1:6_2/1",
"WH-HS-ME60-2:4_2/1",
"WH-HS-ME60-2:6_2/1"
],
"bras": {
"10.207.7.142": {
"name": "HS-ME60-1",
"interface": [
"Eth-Trunk1.3"
]
},
"10.207.7.150": {
"name": "HS-ME60-2",
"interface": [
"Eth-Trunk1.23"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.142",
"10.207.7.150"
]
},
"10.207.115.22": {
"name": "H黄石下陆6900",
"nasportid": [
"WH-HS-ME60-1:4_2/1",
"WH-HS-ME60-1:6_2/1",
"WH-HS-ME60-2:4_2/1",
"WH-HS-ME60-2:6_2/1"
],
"bras": {
"10.207.7.142": {
"name": "HS-ME60-1",
"interface": [
"Eth-Trunk1.1"
]
},
"10.207.7.150": {
"name": "HS-ME60-2",
"interface": [
"Eth-Trunk1.21"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.142",
"10.207.7.150"
]
},
"10.207.115.62": {
"name": "H黄石周家湾8000",
"nasportid": [
"WH-HS-ME60-1:4_2/1",
"WH-HS-ME60-1:6_2/1",
"WH-HS-ME60-2:4_2/1",
"WH-HS-ME60-2:6_2/1"
],
"bras": {
"10.207.7.142": {
"name": "HS-ME60-1",
"interface": [
"Eth-Trunk1.4"
]
},
"10.207.7.150": {
"name": "HS-ME60-2",
"interface": [
"Eth-Trunk1.29"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.142",
"10.207.7.150"
]
},
"10.207.115.74": {
"name": "H黄石周家湾8000-2",
"nasportid": [
"WH-HS-ME60-1:4_2/1",
"WH-HS-ME60-1:6_2/1",
"WH-HS-ME60-2:4_2/1",
"WH-HS-ME60-2:6_2/1"
],
"bras": {
"10.207.7.142": {
"name": "HS-ME60-1",
"interface": [
"Eth-Trunk1.9"
]
},
"10.207.7.150": {
"name": "HS-ME60-2",
"interface": [
"Eth-Trunk1.24"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.142",
"10.207.7.150"
]
},
"10.207.115.34": {
"name": "H黄石四棵6900",
"nasportid": [
"WH-HS-ME60-1:4_2/1",
"WH-HS-ME60-1:6_2/1",
"WH-HS-ME60-2:4_2/1",
"WH-HS-ME60-2:6_2/1"
],
"bras": {
"10.207.7.142": {
"name": "HS-ME60-1",
"interface": [
"Eth-Trunk1.5"
]
},
"10.207.7.150": {
"name": "HS-ME60-2",
"interface": [
"Eth-Trunk1.25"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.142",
"10.207.7.150"
]
},
"10.207.115.18": {
"name": "H黄石团城山6900",
"nasportid": [
"WH-HS-ME60-1:4_2/1",
"WH-HS-ME60-1:6_2/1",
"WH-HS-ME60-2:4_2/1",
"WH-HS-ME60-2:6_2/1"
],
"bras": {
"10.207.7.142": {
"name": "HS-ME60-1",
"interface": [
"Eth-Trunk1.24"
]
},
"10.207.7.150": {
"name": "HS-ME60-2",
"interface": [
"Eth-Trunk1.1"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.142",
"10.207.7.150"
]
},
"10.207.115.2": {
"name": "H黄石天虹6900",
"nasportid": [
"WH-HS-ME60-1:4_2/1",
"WH-HS-ME60-1:6_2/1",
"WH-HS-ME60-2:4_2/1",
"WH-HS-ME60-2:6_2/1"
],
"bras": {
"10.207.7.142": {
"name": "HS-ME60-1",
"interface": [
"Eth-Trunk1.20"
]
},
"10.207.7.150": {
"name": "HS-ME60-2",
"interface": [
"Eth-Trunk1.2"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.142",
"10.207.7.150"
]
},
"10.207.115.6": {
"name": "H黄石师院6900",
"nasportid": [
"WH-HS-ME60-1:4_2/1",
"WH-HS-ME60-1:6_2/1",
"WH-HS-ME60-2:4_2/1",
"WH-HS-ME60-2:6_2/1"
],
"bras": {
"10.207.7.142": {
"name": "HS-ME60-1",
"interface": [
"Eth-Trunk1.23"
]
},
"10.207.7.150": {
"name": "HS-ME60-2",
"interface": [
"Eth-Trunk1.5"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.142",
"10.207.7.150"
]
},
"10.207.115.46": {
"name": "H黄石炕头8000",
"nasportid": [
"WH-HS-ME60-1:4_2/1",
"WH-HS-ME60-1:6_2/1",
"WH-HS-ME60-2:4_2/1",
"WH-HS-ME60-2:6_2/1"
],
"bras": {
"10.207.7.142": {
"name": "HS-ME60-1",
"interface": [
"Eth-Trunk1.7"
]
},
"10.207.7.150": {
"name": "HS-ME60-2",
"interface": [
"Eth-Trunk1.27"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.142",
"10.207.7.150"
]
},
"10.207.115.42": {
"name": "H黄石牧羊湖8000",
"nasportid": [
"WH-HS-ME60-1:4_2/1",
"WH-HS-ME60-1:6_2/1",
"WH-HS-ME60-2:4_2/1",
"WH-HS-ME60-2:6_2/1"
],
"bras": {
"10.207.7.142": {
"name": "HS-ME60-1",
"interface": [
"Eth-Trunk1.25"
]
},
"10.207.7.150": {
"name": "HS-ME60-2",
"interface": [
"Eth-Trunk1.6"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.142",
"10.207.7.150"
]
},
"10.207.115.38": {
"name": "H黄石花湖8000",
"nasportid": [
"WH-HS-ME60-1:4_2/1",
"WH-HS-ME60-1:6_2/1",
"WH-HS-ME60-2:4_2/1",
"WH-HS-ME60-2:6_2/1"
],
"bras": {
"10.207.7.142": {
"name": "HS-ME60-1",
"interface": [
"Eth-Trunk1.6"
]
},
"10.207.7.150": {
"name": "HS-ME60-2",
"interface": [
"Eth-Trunk1.26"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.142",
"10.207.7.150"
]
},
"10.207.115.70": {
"name": "H黄石还地桥6900",
"nasportid": [
"WH-HS-ME60-1:4_2/1",
"WH-HS-ME60-1:6_2/1",
"WH-HS-ME60-2:4_2/1",
"WH-HS-ME60-2:6_2/1"
],
"bras": {
"10.207.7.142": {
"name": "HS-ME60-1",
"interface": [
"Eth-Trunk1.8"
]
},
"10.207.7.150": {
"name": "HS-ME60-2",
"interface": [
"Eth-Trunk1.28"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.142",
"10.207.7.150"
]
},
"10.207.115.30": {
"name": "H黄石铁山6900",
"nasportid": [
"WH-HS-ME60-1:4_2/1",
"WH-HS-ME60-1:6_2/1",
"WH-HS-ME60-2:4_2/1",
"WH-HS-ME60-2:6_2/1"
],
"bras": {
"10.207.7.142": {
"name": "HS-ME60-1",
"interface": [
"Eth-Trunk1.2"
]
},
"10.207.7.150": {
"name": "HS-ME60-2",
"interface": [
"Eth-Trunk1.22"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.142",
"10.207.7.150"
]
},
"10.207.115.10": {
"name": "H黄石颐阳路6900-1",
"nasportid": [
"WH-HS-ME60-1:4_2/1",
"WH-HS-ME60-1:6_2/1",
"WH-HS-ME60-2:4_2/1",
"WH-HS-ME60-2:6_2/1"
],
"bras": {
"10.207.7.142": {
"name": "HS-ME60-1",
"interface": [
"Eth-Trunk1.21"
]
},
"10.207.7.150": {
"name": "HS-ME60-2",
"interface": [
"Eth-Trunk1.3"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.142",
"10.207.7.150"
]
},
"10.207.115.14": {
"name": "H黄石颐阳路6900-2",
"nasportid": [
"WH-HS-ME60-1:4_2/1",
"WH-HS-ME60-1:6_2/1",
"WH-HS-ME60-2:4_2/1",
"WH-HS-ME60-2:6_2/1"
],
"bras": {
"10.207.7.142": {
"name": "HS-ME60-1",
"interface": [
"Eth-Trunk1.22"
]
},
"10.207.7.150": {
"name": "HS-ME60-2",
"interface": [
"Eth-Trunk1.4"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.142",
"10.207.7.150"
]
},
"10.207.93.90": {
"name": "H黄陂8000",
"nasportid": [
"WH-CQ-ME60-10:4_2/1",
"WH-CQ-ME60-10:5_2/1",
"WH-CQ-ME60-5:4_2/4",
"WH-CQ-ME60-5:5_2/4"
],
"bras": {
"10.207.7.149": {
"name": "CQ-ME60-10",
"interface": [
"Eth-Trunk1.17"
]
},
"10.207.7.119": {
"name": "CQ-ME60-5",
"interface": [
"Eth-Trunk4.36"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.149",
"10.207.7.119"
]
},
"10.207.93.30": {
"name": "J佳阳8000",
"nasportid": [
"WH-CQ-ME60-10:4_2/1",
"WH-CQ-ME60-10:5_2/1",
"WH-CQ-ME60-5:4_2/4",
"WH-CQ-ME60-5:5_2/4"
],
"bras": {
"10.207.7.149": {
"name": "CQ-ME60-10",
"interface": [
"Eth-Trunk1.40"
]
},
"10.207.7.119": {
"name": "CQ-ME60-5",
"interface": [
"Eth-Trunk4.2"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.149",
"10.207.7.119"
]
},
"10.207.89.22": {
"name": "J江南家园",
"nasportid": [
"WH-LJS-ME60-2:5_2/1",
"WH-LJS-ME60-4:4_2/1",
"WH-LJS-ME60-4:5_2/1"
],
"bras": {
"10.207.7.114": {
"name": "LJS-ME60-2",
"interface": [
"Eth-Trunk1.207"
]
},
"10.207.7.121": {
"name": "LJS-ME60-4",
"interface": [
"Eth-Trunk1.20"
]
}
},
"type": "raisecom",
"pppoebras": [
"10.207.7.114",
"10.207.7.121"
]
},
"10.207.53.82": {
"name": "J江夏-1",
"nasportid": [
"WH-LJS-ME60-2:4_2/2",
"WH-LJS-ME60-2:5_2/2",
"WH-LJS-ME60-3:4_0/2",
"WH-LJS-ME60-3:5_0/3",
"WH-LJS-ME60-3:5_0/3"
],
"bras": {
"10.207.7.114": {
"name": "LJS-ME60-2",
"interface": [
"Eth-Trunk2.300"
]
},
"10.207.7.120": {
"name": "LJS-ME60-3",
"interface": [
"Gi4/0/2.1",
"Gi5/0/3.2",
"Gi5/0/3.6"
]
}
},
"type": "raisecom",
"pppoebras": [
"10.207.7.114",
"10.207.7.120"
]
},
"10.207.53.130": {
"name": "J江夏-2",
"nasportid": [
"WH-LJS-ME60-2:4_2/2",
"WH-LJS-ME60-2:5_2/2",
"WH-LJS-ME60-3:5_0/3"
],
"bras": {
"10.207.7.114": {
"name": "LJS-ME60-2",
"interface": [
"Eth-Trunk2.301"
]
},
"10.207.7.120": {
"name": "LJS-ME60-3",
"interface": [
"Gi5/0/3.3"
]
}
},
"type": "raisecom",
"pppoebras": [
"10.207.7.114",
"10.207.7.120"
]
},
"10.207.105.18": {
"name": "J江汉",
"nasportid": [
"WH-JZ-BR7750-1:0_0/102",
"WH-Red-JZ-A:1/1",
"WH-Red-JZ-A:11/1"
],
"bras": {
"10.207.7.146": {
"name": "JZ-7750-1",
"interface": [
"lag-102"
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
"10.207.41.46": {
"name": "J江腾苑8000",
"nasportid": [
"WH-CQ-ME60-3:4_2/4",
"WH-CQ-ME60-5:4_2/3",
"WH-HY-ME60-1:5_0/3",
"WH-HY-ME60-2:4_2/1",
"WH-HY-ME60-2:5_2/1"
],
"bras": {
"10.207.7.122": {
"name": "CQ-ME60-3",
"interface": [
"Eth-Trunk4.8"
]
},
"10.207.7.119": {
"name": "CQ-ME60-5",
"interface": [
"Eth-Trunk3.10"
]
},
"10.207.7.117": {
"name": "HY-ME60-1",
"interface": [
"Gi5/0/3.2"
]
},
"10.207.7.133": {
"name": "HY-ME60-2",
"interface": [
"Eth-Trunk1.5"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.122",
"10.207.7.119",
"10.207.7.117",
"10.207.7.133"
]
},
"10.207.45.54": {
"name": "J简易8000",
"nasportid": [
"WH-CQ-ME60-4:4_2/1",
"WH-CQ-ME60-4:5_2/1",
"WH-CQ-ME60-5:4_2/1",
"WH-CQ-ME60-5:5_2/1"
],
"bras": {
"10.207.7.118": {
"name": "CQ-ME60-4",
"interface": [
"Eth-Trunk1.101"
]
},
"10.207.7.119": {
"name": "CQ-ME60-5",
"interface": [
"Eth-Trunk1.20"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.118",
"10.207.7.119"
]
},
"10.207.81.10": {
"name": "J简易8000-2",
"nasportid": [
"WH-CQ-ME60-4:4_2/1",
"WH-CQ-ME60-4:5_2/1",
"WH-CQ-ME60-5:4_2/1",
"WH-CQ-ME60-5:5_2/1"
],
"bras": {
"10.207.7.118": {
"name": "CQ-ME60-4",
"interface": [
"Eth-Trunk1.4"
]
},
"10.207.7.119": {
"name": "CQ-ME60-5",
"interface": [
"Eth-Trunk1.51"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.118",
"10.207.7.119"
]
},
"10.207.61.54": {
"name": "J经开万达8100",
"nasportid": [
"WH-CQ-ME60-3:4_2/1",
"WH-CQ-ME60-3:5_2/1",
"WH-CQ-ME60-3:4_2/4"
],
"bras": {
"10.207.7.122": {
"name": "CQ-ME60-3",
"interface": [
"Eth-Trunk1.3",
"Eth-Trunk4.23"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.122"
]
},
"10.207.89.138": {
"name": "J街道口",
"nasportid": [
"WH-LJS-ME60-2:4_2/2",
"WH-LJS-ME60-2:5_2/2",
"WH-LJS-ME60-5:4_2/1",
"WH-LJS-ME60-5:5_2/1"
],
"bras": {
"10.207.7.114": {
"name": "LJS-ME60-2",
"interface": [
"Eth-Trunk2.402"
]
},
"10.207.7.147": {
"name": "LJS-ME60-5",
"interface": [
"Eth-Trunk1.3"
]
}
},
"type": "raisecom",
"pppoebras": [
"10.207.7.114",
"10.207.7.147"
]
},
"10.207.53.138": {
"name": "J金昌",
"nasportid": [
"WH-LJS-ME60-2:5_2/1",
"WH-LJS-ME60-3:5_0/5"
],
"bras": {
"10.207.7.114": {
"name": "LJS-ME60-2",
"interface": [
"Eth-Trunk1.117"
]
},
"10.207.7.120": {
"name": "LJS-ME60-3",
"interface": [
"Gi5/0/5.2"
]
}
},
"type": "raisecom",
"pppoebras": [
"10.207.7.114",
"10.207.7.120"
]
},
"10.207.65.54": {
"name": "J金桥汇8000",
"nasportid": [
"WH-CQ-ME60-5:4_2/2",
"WH-CQ-ME60-5:5_2/2",
"WH-CQ-ME60-6:4_2/0",
"WH-CQ-ME60-6:5_2/0"
],
"bras": {
"10.207.7.119": {
"name": "CQ-ME60-5",
"interface": [
"Eth-Trunk2.62"
]
},
"10.207.7.123": {
"name": "CQ-ME60-6",
"interface": [
"Eth-Trunk0.49"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.119",
"10.207.7.123"
]
},
"10.207.101.50": {
"name": "J金融花园8000",
"nasportid": [
"WH-CQ-BR7750-1:0_0/101",
"WH-CQ-ME60-5:4_2/2",
"WH-CQ-ME60-5:5_2/2"
],
"bras": {
"10.207.7.131": {
"name": "CQ-7750-1",
"interface": [
"lag-101"
]
},
"10.207.7.119": {
"name": "CQ-ME60-5",
"interface": [
"Eth-Trunk2.51"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.131",
"10.207.7.119"
]
},
"10.207.69.54": {
"name": "J集贤8000",
"nasportid": [
"WH-CQ-ME60-5:4_2/1",
"WH-CQ-ME60-5:5_2/1",
"WH-CQ-ME60-7:4_2/1",
"WH-CQ-ME60-7:5_2/1"
],
"bras": {
"10.207.7.119": {
"name": "CQ-ME60-5",
"interface": [
"Eth-Trunk1.30"
]
},
"10.207.7.124": {
"name": "CQ-ME60-7",
"interface": [
"Eth-Trunk1.2"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.119",
"10.207.7.124"
]
},
"10.207.89.50": {
"name": "K凯乐花园",
"nasportid": [
"WH-LJS-ME60-2:4_2/2",
"WH-LJS-ME60-2:5_2/2",
"WH-LJS-ME60-5:4_2/1",
"WH-LJS-ME60-5:5_2/1"
],
"bras": {
"10.207.7.114": {
"name": "LJS-ME60-2",
"interface": [
"Eth-Trunk2.408"
]
},
"10.207.7.147": {
"name": "LJS-ME60-5",
"interface": [
"Eth-Trunk1.7"
]
}
},
"type": "tailong",
"pppoebras": [
"10.207.7.114",
"10.207.7.147"
]
},
"10.207.41.26": {
"name": "K快活林6900-2",
"nasportid": [
"WH-CQ-ME60-3:4_2/2",
"WH-CQ-ME60-3:4_2/3",
"WH-CQ-ME60-5:4_2/3",
"WH-HY-ME60-1:5_2/1"
],
"bras": {
"10.207.7.122": {
"name": "CQ-ME60-3",
"interface": [
"Eth-Trunk2.5",
"Eth-Trunk3.6"
]
},
"10.207.7.119": {
"name": "CQ-ME60-5",
"interface": [
"Eth-Trunk3.5"
]
},
"10.207.7.117": {
"name": "HY-ME60-1",
"interface": [
"Eth-Trunk1.4"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.122",
"10.207.7.119",
"10.207.7.117"
]
},
"10.207.33.94": {
"name": "L六支沟8000",
"nasportid": [
"WH-CQ-ME60-1:4_2/1",
"WH-CQ-ME60-1:5_2/1",
"WH-CQ-ME60-3:4_2/2",
"WH-CQ-ME60-5:4_2/1",
"WH-CQ-ME60-5:5_2/1",
"WH-CQ-ME60-5:4_2/3"
],
"bras": {
"10.207.7.115": {
"name": "CQ-ME60-1",
"interface": [
"Eth-Trunk1.47"
]
},
"10.207.7.122": {
"name": "CQ-ME60-3",
"interface": [
"Eth-Trunk2.8"
]
},
"10.207.7.119": {
"name": "CQ-ME60-5",
"interface": [
"Eth-Trunk1.8",
"Eth-Trunk3.11"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.115",
"10.207.7.122",
"10.207.7.119"
]
},
"10.207.61.186": {
"name": "L兰亭时代6900s",
"nasportid": [
"WH-CQ-ME60-3:4_2/1",
"WH-CQ-ME60-3:5_2/1",
"WH-CQ-ME60-3:4_2/4",
"WH-HY-ME60-1:5_2/1"
],
"bras": {
"10.207.7.122": {
"name": "CQ-ME60-3",
"interface": [
"Eth-Trunk1.106",
"Eth-Trunk4.34"
]
},
"10.207.7.117": {
"name": "HY-ME60-1",
"interface": [
"Eth-Trunk1.106"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.122",
"10.207.7.117"
]
},
"10.207.61.190": {
"name": "L兰亭时代6900s-2",
"nasportid": [
"WH-CQ-ME60-3:4_2/1",
"WH-CQ-ME60-3:5_2/1",
"WH-CQ-ME60-3:4_2/4",
"WH-HY-ME60-1:5_2/1"
],
"bras": {
"10.207.7.122": {
"name": "CQ-ME60-3",
"interface": [
"Eth-Trunk1.107",
"Eth-Trunk4.35"
]
},
"10.207.7.117": {
"name": "HY-ME60-1",
"interface": [
"Eth-Trunk1.107"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.122",
"10.207.7.117"
]
},
"10.207.69.30": {
"name": "L利北6900",
"nasportid": [
"WH-CQ-ME60-5:4_2/1",
"WH-CQ-ME60-5:5_2/1",
"WH-CQ-ME60-7:4_2/1",
"WH-CQ-ME60-7:5_2/1"
],
"bras": {
"10.207.7.119": {
"name": "CQ-ME60-5",
"interface": [
"Eth-Trunk1.35"
]
},
"10.207.7.124": {
"name": "CQ-ME60-7",
"interface": [
"Eth-Trunk1.6"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.119",
"10.207.7.124"
]
},
"10.207.101.34": {
"name": "L劳一6900",
"nasportid": [
"WH-CQ-ME60-5:4_2/2",
"WH-CQ-ME60-5:5_2/2",
"WH-CQ-ME60-9:4_2/2",
"WH-CQ-ME60-9:5_2/2"
],
"bras": {
"10.207.7.119": {
"name": "CQ-ME60-5",
"interface": [
"Eth-Trunk2.70"
]
},
"10.207.7.130": {
"name": "CQ-ME60-9",
"interface": [
"Eth-Trunk2.1"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.119",
"10.207.7.130"
]
},
"10.207.65.62": {
"name": "L劳二8000",
"nasportid": [
"WH-CQ-ME60-2:4_2/1",
"WH-CQ-ME60-2:5_2/1",
"WH-CQ-ME60-5:4_2/2",
"WH-CQ-ME60-5:5_2/2"
],
"bras": {
"10.207.7.116": {
"name": "CQ-ME60-2",
"interface": [
"Eth-Trunk1.101"
]
},
"10.207.7.119": {
"name": "CQ-ME60-5",
"interface": [
"Eth-Trunk2.27"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.116",
"10.207.7.119"
]
},
"10.207.25.130": {
"name": "L南车花园",
"nasportid": [
"WH-LJS-ME60-1:4_2/1",
"WH-LJS-ME60-1:5_2/1",
"WH-LJS-ME60-2:4_2/2",
"WH-LJS-ME60-2:5_2/2"
],
"bras": {
"10.207.7.113": {
"name": "LJS-ME60-1",
"interface": [
"Eth-Trunk1.5"
]
},
"10.207.7.114": {
"name": "LJS-ME60-2",
"interface": [
"Eth-Trunk2.105"
]
}
},
"type": "raisecom",
"pppoebras": [
"10.207.7.113",
"10.207.7.114"
]
},
"10.207.33.114": {
"name": "L梨花苑8000",
"nasportid": [
"WH-CQ-ME60-1:4_2/1",
"WH-CQ-ME60-1:5_2/1",
"WH-CQ-ME60-5:4_2/1",
"WH-CQ-ME60-5:5_2/1"
],
"bras": {
"10.207.7.115": {
"name": "CQ-ME60-1",
"interface": [
"Eth-Trunk1.7"
]
},
"10.207.7.119": {
"name": "CQ-ME60-5",
"interface": [
"Eth-Trunk1.9"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.115",
"10.207.7.119"
]
},
"10.207.61.166": {
"name": "L绿地8000",
"nasportid": [
"WH-CQ-ME60-3:4_2/1",
"WH-CQ-ME60-3:5_2/1",
"WH-CQ-ME60-3:4_2/3",
"WH-HY-ME60-1:5_2/1"
],
"bras": {
"10.207.7.122": {
"name": "CQ-ME60-3",
"interface": [
"Eth-Trunk1.2",
"Eth-Trunk3.103"
]
},
"10.207.7.117": {
"name": "HY-ME60-1",
"interface": [
"Eth-Trunk1.8"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.122",
"10.207.7.117"
]
},
"10.207.61.174": {
"name": "L绿岛8000",
"nasportid": [
"WH-CQ-ME60-3:4_2/1",
"WH-CQ-ME60-3:5_2/1",
"WH-CQ-ME60-3:4_2/4"
],
"bras": {
"10.207.7.122": {
"name": "CQ-ME60-3",
"interface": [
"Eth-Trunk1.6",
"Eth-Trunk4.26"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.122"
]
},
"10.207.125.26": {
"name": "L绿景花园8000",
"nasportid": [
"WH-LJS-ME60-2:4_2/3",
"WH-QS116-ME60-1:4_2/1",
"WH-QS116-ME60-1:5_2/1"
],
"bras": {
"10.207.7.114": {
"name": "LJS-ME60-2",
"interface": [
"Eth-Trunk3.203"
]
},
"10.207.7.134": {
"name": "QS116-ME60-1",
"interface": [
"Eth-Trunk1.3"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.114",
"10.207.7.134"
]
},
"10.207.37.86": {
"name": "L连城8000",
"nasportid": [
"WH-CQ-ME60-2:4_2/1",
"WH-CQ-ME60-2:5_2/1",
"WH-CQ-ME60-5:4_2/2",
"WH-CQ-ME60-5:5_2/2"
],
"bras": {
"10.207.7.116": {
"name": "CQ-ME60-2",
"interface": [
"Eth-Trunk1.3"
]
},
"10.207.7.119": {
"name": "CQ-ME60-5",
"interface": [
"Eth-Trunk2.33"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.116",
"10.207.7.119"
]
},
"10.207.137.10": {
"name": "L龙辰丽湾8000",
"nasportid": [
"WH-CQ-ME60-10:4_2/1",
"WH-CQ-ME60-10:5_2/1",
"WH-CQ-ME60-5:4_2/4",
"WH-CQ-ME60-5:5_2/4"
],
"bras": {
"10.207.7.149": {
"name": "CQ-ME60-10",
"interface": [
"Eth-Trunk1.14"
]
},
"10.207.7.119": {
"name": "CQ-ME60-5",
"interface": [
"Eth-Trunk4.37"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.149",
"10.207.7.119"
]
},
"10.207.89.54": {
"name": "M名都花园",
"nasportid": [
"WH-LJS-ME60-2:5_2/1",
"WH-LJS-ME60-3:5_0/2"
],
"bras": {
"10.207.7.114": {
"name": "LJS-ME60-2",
"interface": [
"Eth-Trunk1.118"
]
},
"10.207.7.120": {
"name": "LJS-ME60-3",
"interface": [
"Gi5/0/2.2"
]
}
},
"type": "tailong",
"pppoebras": [
"10.207.7.114",
"10.207.7.120"
]
},
"10.207.25.182": {
"name": "M明泽风华苑",
"nasportid": [
"WH-LJS-ME60-1:4_2/1",
"WH-LJS-ME60-1:5_2/1",
"WH-LJS-ME60-2:4_2/2",
"WH-LJS-ME60-2:5_2/2"
],
"bras": {
"10.207.7.113": {
"name": "LJS-ME60-1",
"interface": [
"Eth-Trunk1.1"
]
},
"10.207.7.114": {
"name": "LJS-ME60-2",
"interface": [
"Eth-Trunk2.101"
]
}
},
"type": "raisecom",
"pppoebras": [
"10.207.7.113",
"10.207.7.114"
]
},
"10.207.29.26": {
"name": "M梅苑",
"nasportid": [
"WH-LJS-ME60-2:4_2/2",
"WH-LJS-ME60-2:5_2/2",
"WH-LJS-ME60-5:4_2/1",
"WH-LJS-ME60-5:5_2/1"
],
"bras": {
"10.207.7.114": {
"name": "LJS-ME60-2",
"interface": [
"Eth-Trunk2.406"
]
},
"10.207.7.147": {
"name": "LJS-ME60-5",
"interface": [
"Eth-Trunk1.5"
]
}
},
"type": "raisecom",
"pppoebras": [
"10.207.7.114",
"10.207.7.147"
]
},
"10.207.41.98": {
"name": "M米粮8000",
"nasportid": [
"WH-CQ-ME60-3:4_2/2",
"WH-CQ-ME60-3:4_2/3",
"WH-CQ-ME60-5:4_2/3",
"WH-HY-ME60-1:5_2/1"
],
"bras": {
"10.207.7.122": {
"name": "CQ-ME60-3",
"interface": [
"Eth-Trunk2.7",
"Eth-Trunk3.5"
]
},
"10.207.7.119": {
"name": "CQ-ME60-5",
"interface": [
"Eth-Trunk3.7"
]
},
"10.207.7.117": {
"name": "HY-ME60-1",
"interface": [
"Eth-Trunk1.5"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.122",
"10.207.7.119",
"10.207.7.117"
]
},
"10.207.37.78": {
"name": "M美联公园8100-1",
"nasportid": [
"WH-CQ-ME60-10:4_2/1",
"WH-CQ-ME60-10:5_2/1",
"WH-CQ-ME60-5:4_2/4",
"WH-CQ-ME60-5:5_2/4"
],
"bras": {
"10.207.7.149": {
"name": "CQ-ME60-10",
"interface": [
"Eth-Trunk1.43"
]
},
"10.207.7.119": {
"name": "CQ-ME60-5",
"interface": [
"Eth-Trunk4.4"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.149",
"10.207.7.119"
]
},
"10.207.37.114": {
"name": "M美联公园8100-2",
"nasportid": [
"WH-CQ-ME60-10:4_2/1",
"WH-CQ-ME60-10:5_2/1",
"WH-CQ-ME60-5:4_2/4",
"WH-CQ-ME60-5:5_2/4"
],
"bras": {
"10.207.7.149": {
"name": "CQ-ME60-10",
"interface": [
"Eth-Trunk1.44"
]
},
"10.207.7.119": {
"name": "CQ-ME60-5",
"interface": [
"Eth-Trunk4.5"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.149",
"10.207.7.119"
]
},
"10.207.137.18": {
"name": "P盘龙城6900",
"nasportid": [
"WH-CQ-ME60-10:4_2/1",
"WH-CQ-ME60-10:5_2/1",
"WH-CQ-ME60-5:4_2/4",
"WH-CQ-ME60-5:5_2/4"
],
"bras": {
"10.207.7.149": {
"name": "CQ-ME60-10",
"interface": [
"Eth-Trunk1.6"
]
},
"10.207.7.119": {
"name": "CQ-ME60-5",
"interface": [
"Eth-Trunk4.43"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.149",
"10.207.7.119"
]
},
"10.207.93.86": {
"name": "P盘龙城8000",
"nasportid": [
"WH-CQ-ME60-10:4_2/1",
"WH-CQ-ME60-10:5_2/1",
"WH-CQ-ME60-5:4_2/4",
"WH-CQ-ME60-5:5_2/4"
],
"bras": {
"10.207.7.149": {
"name": "CQ-ME60-10",
"interface": [
"Eth-Trunk1.3"
]
},
"10.207.7.119": {
"name": "CQ-ME60-5",
"interface": [
"Eth-Trunk4.42"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.149",
"10.207.7.119"
]
},
"10.207.121.18": {
"name": "Q七里8000",
"nasportid": [
"WH-CQ-ME60-3:4_2/3",
"WH-HY-ME60-1:5_2/1",
"WH-HY-ME60-2:4_0/3"
],
"bras": {
"10.207.7.122": {
"name": "CQ-ME60-3",
"interface": [
"Eth-Trunk3.9"
]
},
"10.207.7.117": {
"name": "HY-ME60-1",
"interface": [
"Eth-Trunk1.16"
]
},
"10.207.7.133": {
"name": "HY-ME60-2",
"interface": [
"Gi4/0/3.1"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.122",
"10.207.7.117",
"10.207.7.133"
]
},
"10.207.33.90": {
"name": "Q清水湾8000",
"nasportid": [
"WH-CQ-ME60-1:4_2/1",
"WH-CQ-ME60-1:5_2/1",
"WH-CQ-ME60-5:4_2/1",
"WH-CQ-ME60-5:5_2/1"
],
"bras": {
"10.207.7.115": {
"name": "CQ-ME60-1",
"interface": [
"Eth-Trunk1.46"
]
},
"10.207.7.119": {
"name": "CQ-ME60-5",
"interface": [
"Eth-Trunk1.5"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.115",
"10.207.7.119"
]
},
"10.207.33.110": {
"name": "Q球场8000",
"nasportid": [
"WH-CQ-ME60-1:4_2/2",
"WH-CQ-ME60-1:5_2/2",
"WH-CQ-ME60-5:4_2/1",
"WH-CQ-ME60-5:5_2/1"
],
"bras": {
"10.207.7.115": {
"name": "CQ-ME60-1",
"interface": [
"Eth-Trunk2.1"
]
},
"10.207.7.119": {
"name": "CQ-ME60-5",
"interface": [
"Eth-Trunk1.43"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.115",
"10.207.7.119"
]
},
"10.207.37.22": {
"name": "Q琴台社区6900",
"nasportid": [
"WH-CQ-ME60-3:4_2/4",
"WH-HY-ME60-1:5_0/3",
"WH-HY-ME60-2:4_0/5"
],
"bras": {
"10.207.7.122": {
"name": "CQ-ME60-3",
"interface": [
"Eth-Trunk4.7"
]
},
"10.207.7.117": {
"name": "HY-ME60-1",
"interface": [
"Gi5/0/3.4"
]
},
"10.207.7.133": {
"name": "HY-ME60-2",
"interface": [
"Gi4/0/5.1"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.122",
"10.207.7.117",
"10.207.7.133"
]
},
"10.207.25.66": {
"name": "Q青年城",
"nasportid": [
"WH-LJS-BR7750-1:0_0/101",
"WH-LJS-ME60-2:5_2/1"
],
"bras": {
"10.207.7.132": {
"name": "LJS-7750-1",
"interface": [
"lag-101"
]
},
"10.207.7.114": {
"name": "LJS-ME60-2",
"interface": [
"Eth-Trunk1.105"
]
}
},
"type": "raisecom",
"pppoebras": [
"10.207.7.132",
"10.207.7.114"
]
},
"10.207.125.14": {
"name": "Q青康居8000-1",
"nasportid": [
"WH-CQ-ME60-5:4_2/4",
"WH-CQ-ME60-5:5_2/4",
"WH-QS116-ME60-2:4_2/1",
"WH-QS116-ME60-2:5_2/1"
],
"bras": {
"10.207.7.119": {
"name": "CQ-ME60-5",
"interface": [
"Eth-Trunk4.30"
]
},
"10.207.7.135": {
"name": "QS116-ME60-2",
"interface": [
"Eth-Trunk1.102"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.119",
"10.207.7.135"
]
},
"10.207.73.18": {
"name": "Q青翠苑8000",
"nasportid": [
"WH-QS116-ME60-1:4_2/1",
"WH-QS116-ME60-1:5_2/1",
"WH-QS116-ME60-2:4_2/1",
"WH-QS116-ME60-2:5_2/1"
],
"bras": {
"10.207.7.134": {
"name": "QS116-ME60-1",
"interface": [
"Eth-Trunk1.5"
]
},
"10.207.7.135": {
"name": "QS116-ME60-2",
"interface": [
"Eth-Trunk1.108"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.134",
"10.207.7.135"
]
},
"10.207.33.102": {
"name": "R仁厚8000",
"nasportid": [
"WH-CQ-ME60-1:4_2/2",
"WH-CQ-ME60-1:5_2/2",
"WH-CQ-ME60-5:4_2/1",
"WH-CQ-ME60-5:5_2/1"
],
"bras": {
"10.207.7.115": {
"name": "CQ-ME60-1",
"interface": [
"Eth-Trunk2.6"
]
},
"10.207.7.119": {
"name": "CQ-ME60-5",
"interface": [
"Eth-Trunk1.40"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.115",
"10.207.7.119"
]
},
"10.207.53.38": {
"name": "R荣泰68",
"nasportid": [
"WH-LJS-ME60-2:4_2/2",
"WH-LJS-ME60-2:5_2/2",
"WH-LJS-ME60-5:4_2/1",
"WH-LJS-ME60-5:5_2/1"
],
"bras": {
"10.207.7.114": {
"name": "LJS-ME60-2",
"interface": [
"Eth-Trunk2.403"
]
},
"10.207.7.147": {
"name": "LJS-ME60-5",
"interface": [
"Eth-Trunk1.9"
]
}
},
"type": "raisecom",
"pppoebras": [
"10.207.7.114",
"10.207.7.147"
]
},
"10.207.33.126": {
"name": "S上海街8000",
"nasportid": [
"WH-CQ-ME60-1:4_2/2",
"WH-CQ-ME60-1:5_2/2",
"WH-CQ-ME60-5:4_2/1",
"WH-CQ-ME60-5:5_2/1"
],
"bras": {
"10.207.7.115": {
"name": "CQ-ME60-1",
"interface": [
"Eth-Trunk2.2"
]
},
"10.207.7.119": {
"name": "CQ-ME60-5",
"interface": [
"Eth-Trunk1.42"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.115",
"10.207.7.119"
]
},
"10.207.25.18": {
"name": "S松涛苑",
"nasportid": [
"WH-LJS-ME60-1:4_2/1",
"WH-LJS-ME60-1:5_2/1",
"WH-LJS-ME60-2:4_2/2",
"WH-LJS-ME60-2:5_2/2"
],
"bras": {
"10.207.7.113": {
"name": "LJS-ME60-1",
"interface": [
"Eth-Trunk1.2"
]
},
"10.207.7.114": {
"name": "LJS-ME60-2",
"interface": [
"Eth-Trunk2.102"
]
}
},
"type": "raisecom",
"pppoebras": [
"10.207.7.113",
"10.207.7.114"
]
},
"10.207.41.78": {
"name": "S水仙里8000",
"nasportid": [
"WH-CQ-ME60-3:4_2/2",
"WH-CQ-ME60-3:4_2/3",
"WH-CQ-ME60-5:4_2/3",
"WH-HY-ME60-1:5_2/1"
],
"bras": {
"10.207.7.122": {
"name": "CQ-ME60-3",
"interface": [
"Eth-Trunk2.6",
"Eth-Trunk3.3"
]
},
"10.207.7.119": {
"name": "CQ-ME60-5",
"interface": [
"Eth-Trunk3.6"
]
},
"10.207.7.117": {
"name": "HY-ME60-1",
"interface": [
"Eth-Trunk1.3"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.122",
"10.207.7.119",
"10.207.7.117"
]
},
"10.207.89.34": {
"name": "S水陆街",
"nasportid": [
"WH-LJS-ME60-2:4_2/2",
"WH-LJS-ME60-2:5_2/2",
"WH-LJS-ME60-5:4_2/1",
"WH-LJS-ME60-5:5_2/1"
],
"bras": {
"10.207.7.114": {
"name": "LJS-ME60-2",
"interface": [
"Eth-Trunk2.405"
]
},
"10.207.7.147": {
"name": "LJS-ME60-5",
"interface": [
"Eth-Trunk1.2"
]
}
},
"type": "raisecom",
"pppoebras": [
"10.207.7.114",
"10.207.7.147"
]
},
"10.207.89.38": {
"name": "S狮龙花苑",
"nasportid": [
"WH-LJS-ME60-1:4_2/1",
"WH-LJS-ME60-1:5_2/1",
"WH-LJS-ME60-2:4_2/2",
"WH-LJS-ME60-2:5_2/2"
],
"bras": {
"10.207.7.113": {
"name": "LJS-ME60-1",
"interface": [
"Eth-Trunk1.6"
]
},
"10.207.7.114": {
"name": "LJS-ME60-2",
"interface": [
"Eth-Trunk2.106"
]
}
},
"type": "raisecom",
"pppoebras": [
"10.207.7.113",
"10.207.7.114"
]
},
"10.207.25.74": {
"name": "S生物城",
"nasportid": [
"WH-LJS-BR7750-1:0_0/101",
"WH-LJS-ME60-2:5_2/1"
],
"bras": {
"10.207.7.132": {
"name": "LJS-7750-1",
"interface": [
"lag-101"
]
},
"10.207.7.114": {
"name": "LJS-ME60-2",
"interface": [
"Eth-Trunk1.101"
]
}
},
"type": "raisecom",
"pppoebras": [
"10.207.7.132",
"10.207.7.114"
]
},
"10.207.45.38": {
"name": "S省柴8000",
"nasportid": [
"WH-CQ-ME60-4:4_2/1",
"WH-CQ-ME60-4:5_2/1",
"WH-CQ-ME60-5:4_2/1",
"WH-CQ-ME60-5:5_2/1"
],
"bras": {
"10.207.7.118": {
"name": "CQ-ME60-4",
"interface": [
"Eth-Trunk1.1"
]
},
"10.207.7.119": {
"name": "CQ-ME60-5",
"interface": [
"Eth-Trunk1.26"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.118",
"10.207.7.119"
]
},
"10.207.77.34": {
"name": "S省直公务员",
"nasportid": [
"WH-LJS-ME60-2:4_2/3",
"WH-XD-ME60-2:5_0/5"
],
"bras": {
"10.207.7.114": {
"name": "LJS-ME60-2",
"interface": [
"Eth-Trunk3.107"
]
},
"10.207.7.128": {
"name": "XD-ME60-2",
"interface": [
"Gi5/0/5.1"
]
}
},
"type": "tailong",
"pppoebras": [
"10.207.7.114",
"10.207.7.128"
]
},
"10.207.65.86": {
"name": "S穗丰花园8000",
"nasportid": [
"WH-CQ-ME60-5:4_2/2",
"WH-CQ-ME60-5:5_2/2",
"WH-CQ-ME60-6:4_2/1",
"WH-CQ-ME60-6:5_2/1"
],
"bras": {
"10.207.7.119": {
"name": "CQ-ME60-5",
"interface": [
"Eth-Trunk2.40"
]
},
"10.207.7.123": {
"name": "CQ-ME60-6",
"interface": [
"Eth-Trunk1.9"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.119",
"10.207.7.123"
]
},
"10.207.33.106": {
"name": "S赛洛城8000",
"nasportid": [
"WH-CQ-ME60-1:4_2/1",
"WH-CQ-ME60-1:5_2/1",
"WH-CQ-ME60-5:4_2/1",
"WH-CQ-ME60-5:5_2/1"
],
"bras": {
"10.207.7.115": {
"name": "CQ-ME60-1",
"interface": [
"Eth-Trunk1.4"
]
},
"10.207.7.119": {
"name": "CQ-ME60-5",
"interface": [
"Eth-Trunk1.7"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.115",
"10.207.7.119"
]
},
"10.207.25.146": {
"name": "S首义",
"nasportid": [
"WH-LJS-ME60-2:4_2/2",
"WH-LJS-ME60-2:5_2/2",
"WH-LJS-ME60-5:4_2/1",
"WH-LJS-ME60-5:5_2/1"
],
"bras": {
"10.207.7.114": {
"name": "LJS-ME60-2",
"interface": [
"Eth-Trunk2.407"
]
},
"10.207.7.147": {
"name": "LJS-ME60-5",
"interface": [
"Eth-Trunk1.6"
]
}
},
"type": "raisecom",
"pppoebras": [
"10.207.7.114",
"10.207.7.147"
]
},
"10.207.65.110": {
"name": "T万景橘苑",
"nasportid": [
"WH-CQ-ME60-5:4_2/2",
"WH-CQ-ME60-5:5_2/2",
"WH-CQ-ME60-9:4_2/1",
"WH-CQ-ME60-9:5_2/1"
],
"bras": {
"10.207.7.119": {
"name": "CQ-ME60-5",
"interface": [
"Eth-Trunk2.14"
]
},
"10.207.7.130": {
"name": "CQ-ME60-9",
"interface": [
"Eth-Trunk1.8"
]
}
},
"type": "tailong",
"pppoebras": [
"10.207.7.119",
"10.207.7.130"
]
},
"10.207.121.22": {
"name": "T世贸锦绣长江四期",
"nasportid": [
"WH-CQ-ME60-3:4_2/4",
"WH-HY-ME60-1:5_0/3",
"WH-HY-ME60-2:4_2/1",
"WH-HY-ME60-2:5_2/1"
],
"bras": {
"10.207.7.122": {
"name": "CQ-ME60-3",
"interface": [
"Eth-Trunk4.1"
]
},
"10.207.7.117": {
"name": "HY-ME60-1",
"interface": [
"Gi5/0/3.3"
]
},
"10.207.7.133": {
"name": "HY-ME60-2",
"interface": [
"Eth-Trunk1.2"
]
}
},
"type": "tailong",
"pppoebras": [
"10.207.7.122",
"10.207.7.117",
"10.207.7.133"
]
},
"10.207.53.14": {
"name": "T塔桥",
"nasportid": [
"WH-JZ-BR7750-1:0_0/102",
"WH-Red-JZ-A:1/1",
"WH-Red-JZ-A:11/1"
],
"bras": {
"10.207.7.146": {
"name": "JZ-7750-1",
"interface": [
"lag-102"
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
"10.207.45.78": {
"name": "T天勤花园8100",
"nasportid": [
"WH-CQ-ME60-4:4_2/1",
"WH-CQ-ME60-4:5_2/1",
"WH-CQ-ME60-5:4_2/1",
"WH-CQ-ME60-5:5_2/1"
],
"bras": {
"10.207.7.118": {
"name": "CQ-ME60-4",
"interface": [
"Eth-Trunk1.100"
]
},
"10.207.7.119": {
"name": "CQ-ME60-5",
"interface": [
"Eth-Trunk1.24"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.118",
"10.207.7.119"
]
},
"10.207.93.18": {
"name": "T天居园6900",
"nasportid": [
"WH-CQ-ME60-10:4_2/1",
"WH-CQ-ME60-10:5_2/1",
"WH-CQ-ME60-5:4_2/4",
"WH-CQ-ME60-5:5_2/4"
],
"bras": {
"10.207.7.149": {
"name": "CQ-ME60-10",
"interface": [
"Eth-Trunk1.4"
]
},
"10.207.7.119": {
"name": "CQ-ME60-5",
"interface": [
"Eth-Trunk4.45"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.149",
"10.207.7.119"
]
},
"10.207.93.78": {
"name": "T天居园8000",
"nasportid": [
"WH-CQ-ME60-10:4_2/1",
"WH-CQ-ME60-10:5_2/1",
"WH-CQ-ME60-5:4_2/4",
"WH-CQ-ME60-5:5_2/4"
],
"bras": {
"10.207.7.149": {
"name": "CQ-ME60-10",
"interface": [
"Eth-Trunk1.5"
]
},
"10.207.7.119": {
"name": "CQ-ME60-5",
"interface": [
"Eth-Trunk4.44"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.149",
"10.207.7.119"
]
},
"10.207.65.114": {
"name": "T天纵半岛蓝湾",
"nasportid": [
"WH-CQ-ME60-5:4_2/2",
"WH-CQ-ME60-5:5_2/2",
"WH-CQ-ME60-9:4_2/1",
"WH-CQ-ME60-9:5_2/1"
],
"bras": {
"10.207.7.119": {
"name": "CQ-ME60-5",
"interface": [
"Eth-Trunk2.15"
]
},
"10.207.7.130": {
"name": "CQ-ME60-9",
"interface": [
"Eth-Trunk1.7"
]
}
},
"type": "tailong",
"pppoebras": [
"10.207.7.119",
"10.207.7.130"
]
},
"10.207.45.46": {
"name": "T天顺园8000",
"nasportid": [
"WH-CQ-ME60-4:4_2/1",
"WH-CQ-ME60-4:5_2/1",
"WH-CQ-ME60-5:4_2/1",
"WH-CQ-ME60-5:5_2/1"
],
"bras": {
"10.207.7.118": {
"name": "CQ-ME60-4",
"interface": [
"Eth-Trunk1.6"
]
},
"10.207.7.119": {
"name": "CQ-ME60-5",
"interface": [
"Eth-Trunk1.23"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.118",
"10.207.7.119"
]
},
"10.207.61.194": {
"name": "T太子尚品8000",
"nasportid": [
"WH-CQ-ME60-3:4_2/1",
"WH-CQ-ME60-3:5_2/1",
"WH-CQ-ME60-3:4_2/3",
"WH-HY-ME60-1:5_2/1"
],
"bras": {
"10.207.7.122": {
"name": "CQ-ME60-3",
"interface": [
"Eth-Trunk1.103",
"Eth-Trunk3.101"
]
},
"10.207.7.117": {
"name": "HY-ME60-1",
"interface": [
"Eth-Trunk1.105"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.122",
"10.207.7.117"
]
},
"10.207.25.82": {
"name": "T太阳岛",
"nasportid": [
"WH-LJS-ME60-2:4_2/3",
"WH-XD-ME60:4_2/1",
"WH-XD-ME60:5_2/1"
],
"bras": {
"10.207.7.114": {
"name": "LJS-ME60-2",
"interface": [
"Eth-Trunk3.104"
]
},
"10.207.7.125": {
"name": "XD-ME60-1",
"interface": [
"Eth-Trunk1.4"
]
}
},
"type": "raisecom",
"pppoebras": [
"10.207.7.114",
"10.207.7.125"
]
},
"10.207.33.146": {
"name": "T怡华逸天地",
"nasportid": [
"WH-CQ-ME60-1:4_2/1",
"WH-CQ-ME60-1:5_2/1",
"WH-CQ-ME60-5:4_2/1",
"WH-CQ-ME60-5:5_2/1"
],
"bras": {
"10.207.7.115": {
"name": "CQ-ME60-1",
"interface": [
"Eth-Trunk1.5"
]
},
"10.207.7.119": {
"name": "CQ-ME60-5",
"interface": [
"Eth-Trunk1.12"
]
}
},
"type": "tailong",
"pppoebras": [
"10.207.7.115",
"10.207.7.119"
]
},
"10.207.41.82": {
"name": "T摩根空间",
"nasportid": [
"WH-CQ-ME60-3:4_2/4",
"WH-CQ-ME60-5:4_2/3",
"WH-HY-ME60-1:4_0/3"
],
"bras": {
"10.207.7.122": {
"name": "CQ-ME60-3",
"interface": [
"Eth-Trunk4.33"
]
},
"10.207.7.119": {
"name": "CQ-ME60-5",
"interface": [
"Eth-Trunk3.13"
]
},
"10.207.7.117": {
"name": "HY-ME60-1",
"interface": [
"Gi4/0/3.6"
]
}
},
"type": "tailong",
"pppoebras": [
"10.207.7.122",
"10.207.7.119",
"10.207.7.117"
]
},
"10.207.25.142": {
"name": "T汤逊湖",
"nasportid": [
"WH-LJS-BR7750-1:0_0/101",
"WH-LJS-ME60-2:5_2/1"
],
"bras": {
"10.207.7.132": {
"name": "LJS-7750-1",
"interface": [
"lag-101"
]
},
"10.207.7.114": {
"name": "LJS-ME60-2",
"interface": [
"Eth-Trunk1.116"
]
}
},
"type": "raisecom",
"pppoebras": [
"10.207.7.132",
"10.207.7.114"
]
},
"10.207.73.34": {
"name": "T泰龙紫砂金苑",
"nasportid": [
"WH-LJS-ME60-2:4_2/3",
"WH-XD-ME60:4_2/1",
"WH-XD-ME60:5_2/1"
],
"bras": {
"10.207.7.114": {
"name": "LJS-ME60-2",
"interface": [
"Eth-Trunk3.100"
]
},
"10.207.7.125": {
"name": "XD-ME60-1",
"interface": [
"Eth-Trunk1.7"
]
}
},
"type": "tailong",
"pppoebras": [
"10.207.7.114",
"10.207.7.125"
]
},
"10.207.61.146": {
"name": "T港湾江城",
"nasportid": [
"WH-CQ-ME60-3:4_2/4",
"WH-CQ-ME60-5:4_2/3",
"WH-HY-ME60-1:4_0/3"
],
"bras": {
"10.207.7.122": {
"name": "CQ-ME60-3",
"interface": [
"Eth-Trunk4.28"
]
},
"10.207.7.119": {
"name": "CQ-ME60-5",
"interface": [
"Eth-Trunk3.14"
]
},
"10.207.7.117": {
"name": "HY-ME60-1",
"interface": [
"Gi4/0/3.7"
]
}
},
"type": "tailong",
"pppoebras": [
"10.207.7.122",
"10.207.7.119",
"10.207.7.117"
]
},
"10.207.33.98": {
"name": "T花样年花样城",
"nasportid": [
"WH-CQ-ME60-1:4_2/1",
"WH-CQ-ME60-1:5_2/1",
"WH-CQ-ME60-5:4_2/1",
"WH-CQ-ME60-5:5_2/1"
],
"bras": {
"10.207.7.115": {
"name": "CQ-ME60-1",
"interface": [
"Eth-Trunk1.48"
]
},
"10.207.7.119": {
"name": "CQ-ME60-5",
"interface": [
"Eth-Trunk1.6"
]
}
},
"type": "tailong",
"pppoebras": [
"10.207.7.115",
"10.207.7.119"
]
},
"10.207.125.10": {
"name": "T花样年花郡",
"nasportid": [
"WH-LJS-ME60-2:4_2/3",
"WH-QS116-ME60-1:4_2/1",
"WH-QS116-ME60-1:5_2/1"
],
"bras": {
"10.207.7.114": {
"name": "LJS-ME60-2",
"interface": [
"Eth-Trunk3.204"
]
},
"10.207.7.134": {
"name": "QS116-ME60-1",
"interface": [
"Eth-Trunk1.8"
]
}
},
"type": "tailong",
"pppoebras": [
"10.207.7.114",
"10.207.7.134"
]
},
"10.207.57.60": {
"name": "T铁建梧桐苑",
"nasportid": [
"WH-LJS-ME60-2:5_2/1",
"WH-LJS-ME60-4:4_2/1",
"WH-LJS-ME60-4:5_2/1"
],
"bras": {
"10.207.7.114": {
"name": "LJS-ME60-2",
"interface": [
"Eth-Trunk1.202"
]
},
"10.207.7.121": {
"name": "LJS-ME60-4",
"interface": [
"Eth-Trunk1.16"
]
}
},
"type": "tailong",
"pppoebras": [
"10.207.7.114",
"10.207.7.121"
]
},
"10.207.93.42": {
"name": "T黄浦公馆",
"nasportid": [
"WH-CQ-ME60-2:4_2/1",
"WH-CQ-ME60-2:5_2/1",
"WH-CQ-ME60-5:4_2/2",
"WH-CQ-ME60-5:5_2/2"
],
"bras": {
"10.207.7.116": {
"name": "CQ-ME60-2",
"interface": [
"Eth-Trunk1.100"
]
},
"10.207.7.119": {
"name": "CQ-ME60-5",
"interface": [
"Eth-Trunk2.29"
]
}
},
"type": "tailong",
"pppoebras": [
"10.207.7.116",
"10.207.7.119"
]
},
"10.207.65.70": {
"name": "W万松园8000",
"nasportid": [
"WH-CQ-BR7750-1:0_0/101",
"WH-CQ-ME60-5:4_2/2",
"WH-CQ-ME60-5:5_2/2",
"WH-CQ-ME60-5:4_2/6"
],
"bras": {
"10.207.7.131": {
"name": "CQ-7750-1",
"interface": [
"lag-101"
]
},
"10.207.7.119": {
"name": "CQ-ME60-5",
"interface": [
"Eth-Trunk2.50",
"Eth-Trunk6.1"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.131",
"10.207.7.119"
]
},
"10.207.53.110": {
"name": "W万科嘉园",
"nasportid": [
"WH-LJS-BR7750-1:0_0/101",
"WH-LJS-ME60-2:5_2/1"
],
"bras": {
"10.207.7.132": {
"name": "LJS-7750-1",
"interface": [
"lag-101"
]
},
"10.207.7.114": {
"name": "LJS-ME60-2",
"interface": [
"Eth-Trunk1.107"
]
}
},
"type": "raisecom",
"pppoebras": [
"10.207.7.132",
"10.207.7.114"
]
},
"10.207.45.92": {
"name": "W万科四季花城8100EPON-1",
"nasportid": [
"WH-CQ-ME60-4:4_2/1",
"WH-CQ-ME60-4:5_2/1",
"WH-CQ-ME60-5:4_2/1",
"WH-CQ-ME60-5:5_2/1"
],
"bras": {
"10.207.7.118": {
"name": "CQ-ME60-4",
"interface": [
"Eth-Trunk1.102"
]
},
"10.207.7.119": {
"name": "CQ-ME60-5",
"interface": [
"Eth-Trunk1.50"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.118",
"10.207.7.119"
]
},
"10.207.45.90": {
"name": "W万科四季花城8100GPON-1",
"nasportid": [
"WH-CQ-ME60-4:4_2/1",
"WH-CQ-ME60-4:5_2/1",
"WH-CQ-ME60-5:4_2/1",
"WH-CQ-ME60-5:5_2/1"
],
"bras": {
"10.207.7.118": {
"name": "CQ-ME60-4",
"interface": [
"Eth-Trunk1.9"
]
},
"10.207.7.119": {
"name": "CQ-ME60-5",
"interface": [
"Eth-Trunk1.27"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.118",
"10.207.7.119"
]
},
"10.207.57.62": {
"name": "W万科城花锦苑",
"nasportid": [
"WH-LJS-BR7750-1:0_0/101",
"WH-LJS-ME60-2:5_2/1"
],
"bras": {
"10.207.7.132": {
"name": "LJS-7750-1",
"interface": [
"lag-101"
]
},
"10.207.7.114": {
"name": "LJS-ME60-2",
"interface": [
"Eth-Trunk1.104"
]
}
},
"type": "raisecom",
"pppoebras": [
"10.207.7.132",
"10.207.7.114"
]
},
"10.207.41.58": {
"name": "W万科汉阳国际8000",
"nasportid": [
"WH-CQ-ME60-3:4_2/1",
"WH-CQ-ME60-3:5_2/1",
"WH-CQ-ME60-3:4_2/3",
"WH-CQ-ME60-5:4_2/3",
"WH-HY-ME60-1:5_2/1"
],
"bras": {
"10.207.7.122": {
"name": "CQ-ME60-3",
"interface": [
"Eth-Trunk1.7",
"Eth-Trunk3.7"
]
},
"10.207.7.119": {
"name": "CQ-ME60-5",
"interface": [
"Eth-Trunk3.2"
]
},
"10.207.7.117": {
"name": "HY-ME60-1",
"interface": [
"Eth-Trunk1.6"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.122",
"10.207.7.119",
"10.207.7.117"
]
},
"10.207.29.30": {
"name": "W万科红郡",
"nasportid": [
"WH-LJS-BR7750-1:0_0/101",
"WH-LJS-ME60-2:5_2/1"
],
"bras": {
"10.207.7.132": {
"name": "LJS-7750-1",
"interface": [
"lag-101"
]
},
"10.207.7.114": {
"name": "LJS-ME60-2",
"interface": [
"Eth-Trunk1.115"
]
}
},
"type": "raisecom",
"pppoebras": [
"10.207.7.132",
"10.207.7.114"
]
},
"10.207.89.134": {
"name": "W万科金色城市",
"nasportid": [
"WH-LJS-ME60-2:4_2/2",
"WH-LJS-ME60-2:5_2/2",
"WH-LJS-ME60-2:5_0/4"
],
"bras": {
"10.207.7.114": {
"name": "LJS-ME60-2",
"interface": [
"Eth-Trunk2.201",
"Gi5/0/4.1"
]
}
},
"type": "raisecom",
"pppoebras": [
"10.207.7.114"
]
},
"10.207.121.10": {
"name": "W五里8000",
"nasportid": [
"WH-CQ-ME60-3:4_2/4",
"WH-CQ-ME60-5:4_2/3",
"WH-HY-ME60-2:4_2/1",
"WH-HY-ME60-2:5_2/1"
],
"bras": {
"10.207.7.122": {
"name": "CQ-ME60-3",
"interface": [
"Eth-Trunk4.5"
]
},
"10.207.7.119": {
"name": "CQ-ME60-5",
"interface": [
"Eth-Trunk3.3"
]
},
"10.207.7.133": {
"name": "HY-ME60-2",
"interface": [
"Eth-Trunk1.1"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.122",
"10.207.7.119",
"10.207.7.133"
]
},
"10.207.125.38": {
"name": "W武东8000",
"nasportid": [
"WH-QS116-ME60-2:4_2/1",
"WH-QS116-ME60-2:5_2/1"
],
"bras": {
"10.207.7.135": {
"name": "QS116-ME60-2",
"interface": [
"Eth-Trunk1.4"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.135"
]
},
"10.207.65.130": {
"name": "W武华苑8000-1",
"nasportid": [
"WH-CQ-ME60-5:4_2/2",
"WH-CQ-ME60-5:5_2/2",
"WH-CQ-ME60-6:4_2/0",
"WH-CQ-ME60-6:5_2/0"
],
"bras": {
"10.207.7.119": {
"name": "CQ-ME60-5",
"interface": [
"Eth-Trunk2.60"
]
},
"10.207.7.123": {
"name": "CQ-ME60-6",
"interface": [
"Eth-Trunk0.1"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.119",
"10.207.7.123"
]
},
"10.207.65.126": {
"name": "W武华苑8000-2",
"nasportid": [
"WH-CQ-ME60-5:4_2/2",
"WH-CQ-ME60-5:5_2/2",
"WH-CQ-ME60-6:4_2/0",
"WH-CQ-ME60-6:5_2/0"
],
"bras": {
"10.207.7.119": {
"name": "CQ-ME60-5",
"interface": [
"Eth-Trunk2.61"
]
},
"10.207.7.123": {
"name": "CQ-ME60-6",
"interface": [
"Eth-Trunk0.2"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.119",
"10.207.7.123"
]
},
"10.207.89.42": {
"name": "W武泰闸",
"nasportid": [
"WH-LJS-ME60-2:4_2/2",
"WH-LJS-ME60-2:5_2/2",
"WH-LJS-ME60-5:4_2/1",
"WH-LJS-ME60-5:5_2/1"
],
"bras": {
"10.207.7.114": {
"name": "LJS-ME60-2",
"interface": [
"Eth-Trunk2.202"
]
},
"10.207.7.147": {
"name": "LJS-ME60-5",
"interface": [
"Eth-Trunk1.100"
]
}
},
"type": "raisecom",
"pppoebras": [
"10.207.7.114",
"10.207.7.147"
]
},
"10.207.61.82": {
"name": "W武湖6900",
"nasportid": [
"WH-CQ-ME60-10:4_2/1",
"WH-CQ-ME60-10:5_2/1",
"WH-CQ-ME60-5:4_2/4",
"WH-CQ-ME60-5:5_2/4"
],
"bras": {
"10.207.7.149": {
"name": "CQ-ME60-10",
"interface": [
"Eth-Trunk1.16"
]
},
"10.207.7.119": {
"name": "CQ-ME60-5",
"interface": [
"Eth-Trunk4.38"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.149",
"10.207.7.119"
]
},
"10.207.109.6": {
"name": "X仙桃沙嘴8000",
"nasportid": [
"WH-CQ-BR7750-1:0_0/102",
"WH-CQ-ME60-5:4_2/1",
"WH-CQ-ME60-5:5_2/1"
],
"bras": {
"10.207.7.131": {
"name": "CQ-7750-1",
"interface": [
"lag-102"
]
},
"10.207.7.119": {
"name": "CQ-ME60-5",
"interface": [
"Eth-Trunk1.4"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.131",
"10.207.7.119"
]
},
"10.207.25.86": {
"name": "X小南湖",
"nasportid": [
"WH-LJS-BR7750-1:0_0/101",
"WH-LJS-ME60-2:5_2/1"
],
"bras": {
"10.207.7.132": {
"name": "LJS-7750-1",
"interface": [
"lag-101"
]
},
"10.207.7.114": {
"name": "LJS-ME60-2",
"interface": [
"Eth-Trunk1.103"
]
}
},
"type": "raisecom",
"pppoebras": [
"10.207.7.132",
"10.207.7.114"
]
},
"10.207.77.22": {
"name": "X徐三",
"nasportid": [
"WH-LJS-ME60-2:4_2/3",
"WH-XD-ME60-2:4_2/1",
"WH-XD-ME60-2:5_2/1"
],
"bras": {
"10.207.7.114": {
"name": "LJS-ME60-2",
"interface": [
"Eth-Trunk3.108"
]
},
"10.207.7.128": {
"name": "XD-ME60-2",
"interface": [
"Eth-Trunk1.2"
]
}
},
"type": "raisecom",
"pppoebras": [
"10.207.7.114",
"10.207.7.128"
]
},
"10.207.77.26": {
"name": "X徐四",
"nasportid": [
"WH-QS116-ME60-1:4_2/1",
"WH-QS116-ME60-1:5_2/1",
"WH-XD-ME60-2:4_2/1",
"WH-XD-ME60-2:5_2/1"
],
"bras": {
"10.207.7.134": {
"name": "QS116-ME60-1",
"interface": [
"Eth-Trunk1.111"
]
},
"10.207.7.128": {
"name": "XD-ME60-2",
"interface": [
"Eth-Trunk1.3"
]
}
},
"type": "raisecom",
"pppoebras": [
"10.207.7.134",
"10.207.7.128"
]
},
"10.207.77.30": {
"name": "X徐小",
"nasportid": [
"WH-LJS-ME60-2:4_2/3",
"WH-XD-ME60-2:4_2/1",
"WH-XD-ME60-2:5_2/1"
],
"bras": {
"10.207.7.114": {
"name": "LJS-ME60-2",
"interface": [
"Eth-Trunk3.200"
]
},
"10.207.7.128": {
"name": "XD-ME60-2",
"interface": [
"Eth-Trunk1.4"
]
}
},
"type": "raisecom",
"pppoebras": [
"10.207.7.114",
"10.207.7.128"
]
},
"10.207.65.82": {
"name": "X新华西美林8000",
"nasportid": [
"WH-CQ-ME60-5:4_2/2",
"WH-CQ-ME60-5:5_2/2",
"WH-CQ-ME60-6:4_2/1",
"WH-CQ-ME60-6:5_2/1"
],
"bras": {
"10.207.7.119": {
"name": "CQ-ME60-5",
"interface": [
"Eth-Trunk2.55"
]
},
"10.207.7.123": {
"name": "CQ-ME60-6",
"interface": [
"Eth-Trunk1.3"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.119",
"10.207.7.123"
]
},
"10.207.45.98": {
"name": "X新城璟汇6900s",
"nasportid": [
"WH-CQ-ME60-5:4_2/1",
"WH-CQ-ME60-5:5_2/1"
],
"bras": {
"10.207.7.119": {
"name": "CQ-ME60-5",
"interface": [
"Eth-Trunk1.55"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.119"
]
},
"10.207.125.30": {
"name": "X新沟桥8000-1",
"nasportid": [
"WH-QS116-ME60-1:4_2/1",
"WH-QS116-ME60-1:5_2/1",
"WH-QS116-ME60-2:4_2/1",
"WH-QS116-ME60-2:5_2/1"
],
"bras": {
"10.207.7.134": {
"name": "QS116-ME60-1",
"interface": [
"Eth-Trunk1.1"
]
},
"10.207.7.135": {
"name": "QS116-ME60-2",
"interface": [
"Eth-Trunk1.105"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.134",
"10.207.7.135"
]
},
"10.207.125.42": {
"name": "X新沟桥8000-2",
"nasportid": [
"WH-QS116-ME60-1:4_2/1",
"WH-QS116-ME60-1:5_2/1",
"WH-QS116-ME60-2:4_2/1",
"WH-QS116-ME60-2:5_2/1"
],
"bras": {
"10.207.7.134": {
"name": "QS116-ME60-1",
"interface": [
"Eth-Trunk1.7"
]
},
"10.207.7.135": {
"name": "QS116-ME60-2",
"interface": [
"Eth-Trunk1.106"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.134",
"10.207.7.135"
]
},
"10.207.93.94": {
"name": "X新洲8000",
"nasportid": [
"WH-CQ-ME60-10:4_2/1",
"WH-CQ-ME60-10:5_2/1",
"WH-CQ-ME60-5:4_2/4",
"WH-CQ-ME60-5:5_2/4"
],
"bras": {
"10.207.7.149": {
"name": "CQ-ME60-10",
"interface": [
"Eth-Trunk1.13"
]
},
"10.207.7.119": {
"name": "CQ-ME60-5",
"interface": [
"Eth-Trunk4.40"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.149",
"10.207.7.119"
]
},
"10.207.25.106": {
"name": "X祥和苑",
"nasportid": [
"WH-LJS-ME60-1:4_2/1",
"WH-LJS-ME60-1:5_2/1",
"WH-LJS-ME60-2:4_2/2",
"WH-LJS-ME60-2:5_2/2"
],
"bras": {
"10.207.7.113": {
"name": "LJS-ME60-1",
"interface": [
"Eth-Trunk1.3"
]
},
"10.207.7.114": {
"name": "LJS-ME60-2",
"interface": [
"Eth-Trunk2.103"
]
}
},
"type": "raisecom",
"pppoebras": [
"10.207.7.113",
"10.207.7.114"
]
},
"10.207.65.90": {
"name": "X西马一8000",
"nasportid": [
"WH-CQ-BR7750-1:0_0/101",
"WH-CQ-ME60-5:4_2/2",
"WH-CQ-ME60-5:5_2/2",
"WH-CQ-ME60-5:4_2/6"
],
"bras": {
"10.207.7.131": {
"name": "CQ-7750-1",
"interface": [
"lag-101"
]
},
"10.207.7.119": {
"name": "CQ-ME60-5",
"interface": [
"Eth-Trunk2.41",
"Eth-Trunk6.2"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.131",
"10.207.7.119"
]
},
"10.207.85.46": {
"name": "X西马三8000",
"nasportid": [
"WH-CQ-BR7750-1:0_0/101",
"WH-CQ-ME60-5:4_2/2",
"WH-CQ-ME60-5:5_2/2"
],
"bras": {
"10.207.7.131": {
"name": "CQ-7750-1",
"interface": [
"lag-101"
]
},
"10.207.7.119": {
"name": "CQ-ME60-5",
"interface": [
"Eth-Trunk2.52"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.131",
"10.207.7.119"
]
},
"10.207.53.134": {
"name": "Y伊顿阳光",
"nasportid": [
"WH-LJS-ME60-2:5_2/1",
"WH-LJS-ME60-3:5_0/3"
],
"bras": {
"10.207.7.114": {
"name": "LJS-ME60-2",
"interface": [
"Eth-Trunk1.108"
]
},
"10.207.7.120": {
"name": "LJS-ME60-3",
"interface": [
"Gi5/0/3.4"
]
}
},
"type": "raisecom",
"pppoebras": [
"10.207.7.114",
"10.207.7.120"
]
},
"10.207.37.94": {
"name": "Y悦秀苑8000",
"nasportid": [
"WH-CQ-ME60-2:4_2/1",
"WH-CQ-ME60-2:5_2/1",
"WH-CQ-ME60-5:4_2/2",
"WH-CQ-ME60-5:5_2/2"
],
"bras": {
"10.207.7.116": {
"name": "CQ-ME60-2",
"interface": [
"Eth-Trunk1.113"
]
},
"10.207.7.119": {
"name": "CQ-ME60-5",
"interface": [
"Eth-Trunk2.25"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.116",
"10.207.7.119"
]
},
"10.207.101.46": {
"name": "Y扬子8000",
"nasportid": [
"WH-CQ-BR7750-1:0_0/101",
"WH-CQ-ME60-5:4_2/2",
"WH-CQ-ME60-5:5_2/2"
],
"bras": {
"10.207.7.131": {
"name": "CQ-7750-1",
"interface": [
"lag-101"
]
},
"10.207.7.119": {
"name": "CQ-ME60-5",
"interface": [
"Eth-Trunk2.13"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.131",
"10.207.7.119"
]
},
"10.207.61.198": {
"name": "Y永久8000",
"nasportid": [
"WH-CQ-ME60-3:4_2/1",
"WH-CQ-ME60-3:5_2/1",
"WH-CQ-ME60-3:4_2/4"
],
"bras": {
"10.207.7.122": {
"name": "CQ-ME60-3",
"interface": [
"Eth-Trunk1.4",
"Eth-Trunk4.27"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.122"
]
},
"10.207.33.118": {
"name": "Y永清8000",
"nasportid": [
"WH-CQ-ME60-1:4_2/2",
"WH-CQ-ME60-1:5_2/2",
"WH-CQ-ME60-5:4_2/1",
"WH-CQ-ME60-5:5_2/1"
],
"bras": {
"10.207.7.115": {
"name": "CQ-ME60-1",
"interface": [
"Eth-Trunk2.5"
]
},
"10.207.7.119": {
"name": "CQ-ME60-5",
"interface": [
"Eth-Trunk1.44"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.115",
"10.207.7.119"
]
},
"10.207.33.42": {
"name": "Y永清城",
"nasportid": [
"WH-CQ-ME60-1:4_2/2",
"WH-CQ-ME60-1:5_2/2",
"WH-CQ-ME60-5:4_2/1",
"WH-CQ-ME60-5:5_2/1"
],
"bras": {
"10.207.7.115": {
"name": "CQ-ME60-1",
"interface": [
"Eth-Trunk2.3"
]
},
"10.207.7.119": {
"name": "CQ-ME60-5",
"interface": [
"Eth-Trunk1.45"
]
}
},
"type": "tailong",
"pppoebras": [
"10.207.7.115",
"10.207.7.119"
]
},
"10.207.45.62": {
"name": "Y燕马8000",
"nasportid": [
"WH-CQ-ME60-1:4_2/2",
"WH-CQ-ME60-1:5_2/2",
"WH-CQ-ME60-5:4_2/1",
"WH-CQ-ME60-5:5_2/1",
"WH-CQ-ME60-5:4_2/6",
"WH-CQ-ME60-7:4_2/2",
"WH-CQ-ME60-7:5_2/2"
],
"bras": {
"10.207.7.115": {
"name": "CQ-ME60-1",
"interface": [
"Eth-Trunk2.8"
]
},
"10.207.7.119": {
"name": "CQ-ME60-5",
"interface": [
"Eth-Trunk1.31",
"Eth-Trunk6.3"
]
},
"10.207.7.124": {
"name": "CQ-ME60-7",
"interface": [
"Eth-Trunk2.3"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.115",
"10.207.7.119",
"10.207.7.124"
]
},
"10.207.45.66": {
"name": "Y燕马万科8100-1",
"nasportid": [
"WH-CQ-ME60-1:4_2/2",
"WH-CQ-ME60-1:5_2/2",
"WH-CQ-ME60-5:4_2/1",
"WH-CQ-ME60-5:5_2/1",
"WH-CQ-ME60-5:4_2/6",
"WH-CQ-ME60-7:4_2/2",
"WH-CQ-ME60-7:5_2/2"
],
"bras": {
"10.207.7.115": {
"name": "CQ-ME60-1",
"interface": [
"Eth-Trunk2.9"
]
},
"10.207.7.119": {
"name": "CQ-ME60-5",
"interface": [
"Eth-Trunk1.32",
"Eth-Trunk6.7"
]
},
"10.207.7.124": {
"name": "CQ-ME60-7",
"interface": [
"Eth-Trunk2.4"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.115",
"10.207.7.119",
"10.207.7.124"
]
},
"10.207.69.22": {
"name": "Y玉带6900",
"nasportid": [
"WH-CQ-ME60-5:4_2/1",
"WH-CQ-ME60-5:5_2/1",
"WH-CQ-ME60-7:4_2/1",
"WH-CQ-ME60-7:5_2/1"
],
"bras": {
"10.207.7.119": {
"name": "CQ-ME60-5",
"interface": [
"Eth-Trunk1.38"
]
},
"10.207.7.124": {
"name": "CQ-ME60-7",
"interface": [
"Eth-Trunk1.4"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.119",
"10.207.7.124"
]
},
"10.207.25.70": {
"name": "Y育龙湾",
"nasportid": [
"WH-LJS-BR7750-1:0_0/101",
"WH-LJS-ME60-2:5_2/1"
],
"bras": {
"10.207.7.132": {
"name": "LJS-7750-1",
"interface": [
"lag-101"
]
},
"10.207.7.114": {
"name": "LJS-ME60-2",
"interface": [
"Eth-Trunk1.110"
]
}
},
"type": "raisecom",
"pppoebras": [
"10.207.7.132",
"10.207.7.114"
]
},
"10.207.69.62": {
"name": "Y营北8000",
"nasportid": [
"WH-CQ-ME60-5:4_2/1",
"WH-CQ-ME60-5:5_2/1"
],
"bras": {
"10.207.7.119": {
"name": "CQ-ME60-5",
"interface": [
"Eth-Trunk1.37"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.119"
]
},
"10.207.101.42": {
"name": "Y跃进家园8000",
"nasportid": [
"WH-CQ-ME60-5:4_2/2",
"WH-CQ-ME60-5:5_2/2",
"WH-CQ-ME60-6:4_2/1",
"WH-CQ-ME60-6:5_2/1"
],
"bras": {
"10.207.7.119": {
"name": "CQ-ME60-5",
"interface": [
"Eth-Trunk2.5"
]
},
"10.207.7.123": {
"name": "CQ-ME60-6",
"interface": [
"Eth-Trunk1.101"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.119",
"10.207.7.123"
]
},
"10.207.89.46": {
"name": "Y银海",
"nasportid": [
"WH-LJS-ME60-2:4_2/2",
"WH-LJS-ME60-2:5_2/2",
"WH-LJS-ME60-5:4_2/1",
"WH-LJS-ME60-5:5_2/1"
],
"bras": {
"10.207.7.114": {
"name": "LJS-ME60-2",
"interface": [
"Eth-Trunk2.401"
]
},
"10.207.7.147": {
"name": "LJS-ME60-5",
"interface": [
"Eth-Trunk1.8"
]
}
},
"type": "raisecom",
"pppoebras": [
"10.207.7.114",
"10.207.7.147"
]
},
"10.207.49.22": {
"name": "Y银湖苑8100",
"nasportid": [
"WH-CQ-ME60-5:4_2/1",
"WH-CQ-ME60-5:5_2/1"
],
"bras": {
"10.207.7.119": {
"name": "CQ-ME60-5",
"interface": [
"Eth-Trunk1.57"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.119"
]
},
"10.207.25.174": {
"name": "Y阳光100",
"nasportid": [
"WH-LJS-BR7750-1:0_0/101",
"WH-LJS-ME60-2:5_2/1",
"WH-LJS-ME60-2:4_0/4"
],
"bras": {
"10.207.7.132": {
"name": "LJS-7750-1",
"interface": [
"lag-101"
]
},
"10.207.7.114": {
"name": "LJS-ME60-2",
"interface": [
"Eth-Trunk1.111",
"Gi4/0/4.100"
]
}
},
"type": "raisecom",
"pppoebras": [
"10.207.7.132",
"10.207.7.114"
]
},
"10.207.53.90": {
"name": "Y阳光在线",
"nasportid": [
"WH-LJS-ME60-2:5_2/1",
"WH-LJS-ME60-4:4_2/1",
"WH-LJS-ME60-4:5_2/1"
],
"bras": {
"10.207.7.114": {
"name": "LJS-ME60-2",
"interface": [
"Eth-Trunk1.201"
]
},
"10.207.7.121": {
"name": "LJS-ME60-4",
"interface": [
"Eth-Trunk1.15"
]
}
},
"type": "tailong",
"pppoebras": [
"10.207.7.114",
"10.207.7.121"
]
},
"10.207.137.14": {
"name": "Y阳逻8000",
"nasportid": [
"WH-CQ-ME60-10:4_2/1",
"WH-CQ-ME60-10:5_2/1",
"WH-CQ-ME60-5:4_2/4",
"WH-CQ-ME60-5:5_2/4"
],
"bras": {
"10.207.7.149": {
"name": "CQ-ME60-10",
"interface": [
"Eth-Trunk1.41"
]
},
"10.207.7.119": {
"name": "CQ-ME60-5",
"interface": [
"Eth-Trunk4.1"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.149",
"10.207.7.119"
]
},
"10.207.57.74": {
"name": "Z中医院55-1",
"nasportid": [
"WH-LJS-BR7750-1:0_0/101",
"WH-LJS-ME60-2:5_2/1"
],
"bras": {
"10.207.7.132": {
"name": "LJS-7750-1",
"interface": [
"lag-101"
]
},
"10.207.7.114": {
"name": "LJS-ME60-2",
"interface": [
"Eth-Trunk1.112"
]
}
},
"type": "raisecom",
"pppoebras": [
"10.207.7.132",
"10.207.7.114"
]
},
"10.207.57.78": {
"name": "Z中医院55-2",
"nasportid": [
"WH-LJS-BR7750-1:0_0/101",
"WH-LJS-ME60-2:5_2/1"
],
"bras": {
"10.207.7.132": {
"name": "LJS-7750-1",
"interface": [
"lag-101"
]
},
"10.207.7.114": {
"name": "LJS-ME60-2",
"interface": [
"Eth-Trunk1.113"
]
}
},
"type": "raisecom",
"pppoebras": [
"10.207.7.132",
"10.207.7.114"
]
},
"10.207.89.82": {
"name": "Z左岭5508-1",
"nasportid": [
"WH-LJS-BR7750-1:0_0/101",
"WH-LJS-ME60-2:5_2/1"
],
"bras": {
"10.207.7.132": {
"name": "LJS-7750-1",
"interface": [
"lag-101"
]
},
"10.207.7.114": {
"name": "LJS-ME60-2",
"interface": [
"Eth-Trunk1.106"
]
}
},
"type": "raisecom",
"pppoebras": [
"10.207.7.132",
"10.207.7.114"
]
},
"10.207.89.83": {
"name": "Z左岭5508-2",
"nasportid": [
"WH-LJS-BR7750-1:0_0/101",
"WH-LJS-ME60-2:5_2/1"
],
"bras": {
"10.207.7.132": {
"name": "LJS-7750-1",
"interface": [
"lag-101"
]
},
"10.207.7.114": {
"name": "LJS-ME60-2",
"interface": [
"Eth-Trunk1.1062"
]
}
},
"type": "raisecom",
"pppoebras": [
"10.207.7.132",
"10.207.7.114"
]
},
"10.207.89.84": {
"name": "Z左岭5508-3",
"nasportid": [
"WH-LJS-BR7750-1:0_0/101",
"WH-LJS-ME60-2:5_2/1"
],
"bras": {
"10.207.7.132": {
"name": "LJS-7750-1",
"interface": [
"lag-101"
]
},
"10.207.7.114": {
"name": "LJS-ME60-2",
"interface": [
"Eth-Trunk1.1063"
]
}
},
"type": "raisecom",
"pppoebras": [
"10.207.7.132",
"10.207.7.114"
]
},
"10.207.41.74": {
"name": "Z沌口8000",
"nasportid": [
"WH-CQ-ME60-3:4_2/4",
"WH-CQ-ME60-5:4_2/3",
"WH-HY-ME60-1:4_0/3"
],
"bras": {
"10.207.7.122": {
"name": "CQ-ME60-3",
"interface": [
"Eth-Trunk4.32"
]
},
"10.207.7.119": {
"name": "CQ-ME60-5",
"interface": [
"Eth-Trunk3.1"
]
},
"10.207.7.117": {
"name": "HY-ME60-1",
"interface": [
"Gi4/0/3.5"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.122",
"10.207.7.119",
"10.207.7.117"
]
},
"10.207.121.6": {
"name": "Z知音东8000",
"nasportid": [
"WH-CQ-ME60-3:4_2/3",
"WH-CQ-ME60-3:4_2/4",
"WH-CQ-ME60-5:4_2/3",
"WH-HY-ME60-1:5_2/1",
"WH-HY-ME60-2:4_2/1",
"WH-HY-ME60-2:5_2/1"
],
"bras": {
"10.207.7.122": {
"name": "CQ-ME60-3",
"interface": [
"Eth-Trunk3.4",
"Eth-Trunk4.9"
]
},
"10.207.7.119": {
"name": "CQ-ME60-5",
"interface": [
"Eth-Trunk3.4"
]
},
"10.207.7.117": {
"name": "HY-ME60-1",
"interface": [
"Eth-Trunk1.17"
]
},
"10.207.7.133": {
"name": "HY-ME60-2",
"interface": [
"Eth-Trunk1.7"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.122",
"10.207.7.119",
"10.207.7.117",
"10.207.7.133"
]
},
"10.207.33.66": {
"name": "Z知音西6900",
"nasportid": [
"WH-CQ-ME60-3:4_2/3",
"WH-HY-ME60-1:5_2/1"
],
"bras": {
"10.207.7.122": {
"name": "CQ-ME60-3",
"interface": [
"Eth-Trunk3.1"
]
},
"10.207.7.117": {
"name": "HY-ME60-1",
"interface": [
"Eth-Trunk1.1"
]
}
},
"type": "greenway",
"pppoebras": [
"10.207.7.122",
"10.207.7.117"
]
},
"10.207.57.98": {
"name": "Z紫松68-1",
"nasportid": [
"WH-LJS-ME60-2:5_2/1",
"WH-LJS-ME60-4:4_2/1",
"WH-LJS-ME60-4:5_2/1"
],
"bras": {
"10.207.7.114": {
"name": "LJS-ME60-2",
"interface": [
"Eth-Trunk1.208"
]
},
"10.207.7.121": {
"name": "LJS-ME60-4",
"interface": [
"Eth-Trunk1.19"
]
}
},
"type": "raisecom",
"pppoebras": [
"10.207.7.114",
"10.207.7.121"
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
