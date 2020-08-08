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
<!-- 			<tr v-for="(value, key, index) in olts" :key=key>
					<td>{{index+1}}</td>
					<td align="left">{{key}}</td>
					<td align="left">{{value['name']}}</td>
					<td align="left">{{value['nasportid'].join(';')}}</td>
			</tr> -->
			<template v-for="(value, key, index) in olts">
				<ListItem :index=index+1 :olt=value :ip=key :key=key></ListItem>
			</template>
		</tbody>
	</table>
  </div>
</template>

<script>
import ListItem from "./ListItem.vue"
	
export default {
  name: 'OltList',
  components: {
	ListItem
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
		},
		"10.207.125.50": {
		"name": "B白玉山8000",
		"nasportid": [
		"WH-LJS-ME60-2:5_2/1"
		],
		"bras": {
		"10.207.7.114": {
		"name": "LJS-ME60-2",
		"interface": [
		"Eth-Trunk1.1000"
		]
		}
		},
		"type": "greenway",
		"pppoebras": [
		"10.207.7.114"
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
		"WH-LJS-ME60-2:5_2/1"
		],
		"bras": {
		"10.207.7.114": {
		"name": "LJS-ME60-2",
		"interface": [
		"Eth-Trunk1.114"
		]
		}
		},
		"type": "raisecom",
		"pppoebras": [
		"10.207.7.114"
		]
		},
		"10.207.73.6": {
		"name": "C柴林头",
		"nasportid": [
		"WH-LJS-ME60-2:4_2/3"
		],
		"bras": {
		"10.207.7.114": {
		"name": "LJS-ME60-2",
		"interface": [
		"Eth-Trunk3.201"
		]
		}
		},
		"type": "raisecom",
		"pppoebras": [
		"10.207.7.114"
		]
		},
		"10.207.73.10": {
		"name": "C楚才",
		"nasportid": [
		"WH-LJS-ME60-2:4_2/3"
		],
		"bras": {
		"10.207.7.114": {
		"name": "LJS-ME60-2",
		"interface": [
		"Eth-Trunk3.101"
		]
		}
		},
		"type": "raisecom",
		"pppoebras": [
		"10.207.7.114"
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
		"10.207.77.10": {
		"name": "C长航",
		"nasportid": [
		"WH-LJS-ME60-2:4_2/3"
		],
		"bras": {
		"10.207.7.114": {
		"name": "LJS-ME60-2",
		"interface": [
		"Eth-Trunk3.103"
		]
		}
		},
		"type": "raisecom",
		"pppoebras": [
		"10.207.7.114"
		]
		},
		"10.207.53.70": {
		"name": "D东亭",
		"nasportid": [
		"WH-LJS-ME60-2:4_2/3"
		],
		"bras": {
		"10.207.7.114": {
		"name": "LJS-ME60-2",
		"interface": [
		"Eth-Trunk3.106"
		]
		}
		},
		"type": "raisecom",
		"pppoebras": [
		"10.207.7.114"
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
		"10.207.77.62": {
		"name": "D读书苑",
		"nasportid": [
		"WH-LJS-ME60-2:4_2/2",
		"WH-LJS-ME60-2:5_2/2"
		],
		"bras": {
		"10.207.7.114": {
		"name": "LJS-ME60-2",
		"interface": [
		"Eth-Trunk2.500"
		]
		}
		},
		"type": "raisecom",
		"pppoebras": [
		"10.207.7.114"
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
		"WH-LJS-ME60-2:5_2/1"
		],
		"bras": {
		"10.207.7.114": {
		"name": "LJS-ME60-2",
		"interface": [
		"Eth-Trunk1.120"
		]
		}
		},
		"type": "raisecom",
		"pppoebras": [
		"10.207.7.114"
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
		"WH-LJS-ME60-2:4_2/3"
		],
		"bras": {
		"10.207.7.114": {
		"name": "LJS-ME60-2",
		"interface": [
		"Eth-Trunk3.102"
		]
		}
		},
		"type": "raisecom",
		"pppoebras": [
		"10.207.7.114"
		]
		},
		"10.207.89.14": {
		"name": "G关西",
		"nasportid": [
		"WH-LJS-ME60-2:5_2/1"
		],
		"bras": {
		"10.207.7.114": {
		"name": "LJS-ME60-2",
		"interface": [
		"Eth-Trunk1.210"
		]
		}
		},
		"type": "raisecom",
		"pppoebras": [
		"10.207.7.114"
		]
		},
		"10.207.25.162": {
		"name": "G国企508-1",
		"nasportid": [
		"WH-LJS-ME60-2:5_2/1"
		],
		"bras": {
		"10.207.7.114": {
		"name": "LJS-ME60-2",
		"interface": [
		"Eth-Trunk1.203"
		]
		}
		},
		"type": "raisecom",
		"pppoebras": [
		"10.207.7.114"
		]
		},
		"10.207.25.166": {
		"name": "G国企508-2",
		"nasportid": [
		"WH-LJS-ME60-2:5_2/1"
		],
		"bras": {
		"10.207.7.114": {
		"name": "LJS-ME60-2",
		"interface": [
		"Eth-Trunk1.204"
		]
		}
		},
		"type": "raisecom",
		"pppoebras": [
		"10.207.7.114"
		]
		},
		"10.207.25.170": {
		"name": "G国企508-3",
		"nasportid": [
		"WH-LJS-ME60-2:5_2/1"
		],
		"bras": {
		"10.207.7.114": {
		"name": "LJS-ME60-2",
		"interface": [
		"Eth-Trunk1.205"
		]
		}
		},
		"type": "raisecom",
		"pppoebras": [
		"10.207.7.114"
		]
		},
		"10.207.53.74": {
		"name": "G国企总部",
		"nasportid": [
		"WH-LJS-ME60-2:5_2/1"
		],
		"bras": {
		"10.207.7.114": {
		"name": "LJS-ME60-2",
		"interface": [
		"Eth-Trunk1.206"
		]
		}
		},
		"type": "raisecom",
		"pppoebras": [
		"10.207.7.114"
		]
		},
		"10.207.53.2": {
		"name": "G桂子",
		"nasportid": [
		"WH-LJS-ME60-2:5_2/1"
		],
		"bras": {
		"10.207.7.114": {
		"name": "LJS-ME60-2",
		"interface": [
		"Eth-Trunk1.119"
		]
		}
		},
		"type": "raisecom",
		"pppoebras": [
		"10.207.7.114"
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
		"WH-LJS-ME60-2:5_2/2"
		],
		"bras": {
		"10.207.7.114": {
		"name": "LJS-ME60-2",
		"interface": [
		"Eth-Trunk2.200"
		]
		}
		},
		"type": "raisecom",
		"pppoebras": [
		"10.207.7.114"
		]
		},
		"10.207.53.54": {
		"name": "H鸿发世纪城",
		"nasportid": [
		"WH-LJS-ME60-2:4_2/2",
		"WH-LJS-ME60-2:5_2/2"
		],
		"bras": {
		"10.207.7.114": {
		"name": "LJS-ME60-2",
		"interface": [
		"Eth-Trunk2.302"
		]
		}
		},
		"type": "raisecom",
		"pppoebras": [
		"10.207.7.114"
		]
		},
		"10.207.89.130": {
		"name": "H鸿岭花园",
		"nasportid": [
		"WH-LJS-ME60-2:4_2/2",
		"WH-LJS-ME60-2:5_2/2"
		],
		"bras": {
		"10.207.7.114": {
		"name": "LJS-ME60-2",
		"interface": [
		"Eth-Trunk2.400"
		]
		}
		},
		"type": "raisecom",
		"pppoebras": [
		"10.207.7.114"
		]
		},
		"10.207.89.22": {
		"name": "J江南家园",
		"nasportid": [
		"WH-LJS-ME60-2:5_2/1"
		],
		"bras": {
		"10.207.7.114": {
		"name": "LJS-ME60-2",
		"interface": [
		"Eth-Trunk1.207"
		]
		}
		},
		"type": "raisecom",
		"pppoebras": [
		"10.207.7.114"
		]
		},
		"10.207.53.82": {
		"name": "J江夏-1",
		"nasportid": [
		"WH-LJS-ME60-2:4_2/2",
		"WH-LJS-ME60-2:5_2/2"
		],
		"bras": {
		"10.207.7.114": {
		"name": "LJS-ME60-2",
		"interface": [
		"Eth-Trunk2.300"
		]
		}
		},
		"type": "raisecom",
		"pppoebras": [
		"10.207.7.114"
		]
		},
		"10.207.53.130": {
		"name": "J江夏-2",
		"nasportid": [
		"WH-LJS-ME60-2:4_2/2",
		"WH-LJS-ME60-2:5_2/2"
		],
		"bras": {
		"10.207.7.114": {
		"name": "LJS-ME60-2",
		"interface": [
		"Eth-Trunk2.301"
		]
		}
		},
		"type": "raisecom",
		"pppoebras": [
		"10.207.7.114"
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
		"10.207.89.138": {
		"name": "J街道口",
		"nasportid": [
		"WH-LJS-ME60-2:4_2/2",
		"WH-LJS-ME60-2:5_2/2"
		],
		"bras": {
		"10.207.7.114": {
		"name": "LJS-ME60-2",
		"interface": [
		"Eth-Trunk2.402"
		]
		}
		},
		"type": "raisecom",
		"pppoebras": [
		"10.207.7.114"
		]
		},
		"10.207.53.138": {
		"name": "J金昌",
		"nasportid": [
		"WH-LJS-ME60-2:5_2/1"
		],
		"bras": {
		"10.207.7.114": {
		"name": "LJS-ME60-2",
		"interface": [
		"Eth-Trunk1.117"
		]
		}
		},
		"type": "raisecom",
		"pppoebras": [
		"10.207.7.114"
		]
		},
		"10.207.89.50": {
		"name": "K凯乐花园",
		"nasportid": [
		"WH-LJS-ME60-2:4_2/2",
		"WH-LJS-ME60-2:5_2/2"
		],
		"bras": {
		"10.207.7.114": {
		"name": "LJS-ME60-2",
		"interface": [
		"Eth-Trunk2.408"
		]
		}
		},
		"type": "tailong",
		"pppoebras": [
		"10.207.7.114"
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
		"10.207.125.26": {
		"name": "L绿景花园8000",
		"nasportid": [
		"WH-LJS-ME60-2:4_2/3"
		],
		"bras": {
		"10.207.7.114": {
		"name": "LJS-ME60-2",
		"interface": [
		"Eth-Trunk3.203"
		]
		}
		},
		"type": "greenway",
		"pppoebras": [
		"10.207.7.114"
		]
		},
		"10.207.89.54": {
		"name": "M名都花园",
		"nasportid": [
		"WH-LJS-ME60-2:5_2/1"
		],
		"bras": {
		"10.207.7.114": {
		"name": "LJS-ME60-2",
		"interface": [
		"Eth-Trunk1.118"
		]
		}
		},
		"type": "tailong",
		"pppoebras": [
		"10.207.7.114"
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
		"WH-LJS-ME60-2:5_2/2"
		],
		"bras": {
		"10.207.7.114": {
		"name": "LJS-ME60-2",
		"interface": [
		"Eth-Trunk2.406"
		]
		}
		},
		"type": "raisecom",
		"pppoebras": [
		"10.207.7.114"
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
		"10.207.53.38": {
		"name": "R荣泰68",
		"nasportid": [
		"WH-LJS-ME60-2:4_2/2",
		"WH-LJS-ME60-2:5_2/2"
		],
		"bras": {
		"10.207.7.114": {
		"name": "LJS-ME60-2",
		"interface": [
		"Eth-Trunk2.403"
		]
		}
		},
		"type": "raisecom",
		"pppoebras": [
		"10.207.7.114"
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
		"10.207.89.34": {
		"name": "S水陆街",
		"nasportid": [
		"WH-LJS-ME60-2:4_2/2",
		"WH-LJS-ME60-2:5_2/2"
		],
		"bras": {
		"10.207.7.114": {
		"name": "LJS-ME60-2",
		"interface": [
		"Eth-Trunk2.405"
		]
		}
		},
		"type": "raisecom",
		"pppoebras": [
		"10.207.7.114"
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
		"10.207.77.34": {
		"name": "S省直公务员",
		"nasportid": [
		"WH-LJS-ME60-2:4_2/3"
		],
		"bras": {
		"10.207.7.114": {
		"name": "LJS-ME60-2",
		"interface": [
		"Eth-Trunk3.107"
		]
		}
		},
		"type": "tailong",
		"pppoebras": [
		"10.207.7.114"
		]
		},
		"10.207.25.146": {
		"name": "S首义",
		"nasportid": [
		"WH-LJS-ME60-2:4_2/2",
		"WH-LJS-ME60-2:5_2/2"
		],
		"bras": {
		"10.207.7.114": {
		"name": "LJS-ME60-2",
		"interface": [
		"Eth-Trunk2.407"
		]
		}
		},
		"type": "raisecom",
		"pppoebras": [
		"10.207.7.114"
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
		"10.207.25.82": {
		"name": "T太阳岛",
		"nasportid": [
		"WH-LJS-ME60-2:4_2/3"
		],
		"bras": {
		"10.207.7.114": {
		"name": "LJS-ME60-2",
		"interface": [
		"Eth-Trunk3.104"
		]
		}
		},
		"type": "raisecom",
		"pppoebras": [
		"10.207.7.114"
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
		"WH-LJS-ME60-2:4_2/3"
		],
		"bras": {
		"10.207.7.114": {
		"name": "LJS-ME60-2",
		"interface": [
		"Eth-Trunk3.100"
		]
		}
		},
		"type": "tailong",
		"pppoebras": [
		"10.207.7.114"
		]
		},
		"10.207.125.10": {
		"name": "T花样年花郡",
		"nasportid": [
		"WH-LJS-ME60-2:4_2/3"
		],
		"bras": {
		"10.207.7.114": {
		"name": "LJS-ME60-2",
		"interface": [
		"Eth-Trunk3.204"
		]
		}
		},
		"type": "tailong",
		"pppoebras": [
		"10.207.7.114"
		]
		},
		"10.207.57.60": {
		"name": "T铁建梧桐苑",
		"nasportid": [
		"WH-LJS-ME60-2:5_2/1"
		],
		"bras": {
		"10.207.7.114": {
		"name": "LJS-ME60-2",
		"interface": [
		"Eth-Trunk1.202"
		]
		}
		},
		"type": "tailong",
		"pppoebras": [
		"10.207.7.114"
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
		"10.207.89.42": {
		"name": "W武泰闸",
		"nasportid": [
		"WH-LJS-ME60-2:4_2/2",
		"WH-LJS-ME60-2:5_2/2"
		],
		"bras": {
		"10.207.7.114": {
		"name": "LJS-ME60-2",
		"interface": [
		"Eth-Trunk2.202"
		]
		}
		},
		"type": "raisecom",
		"pppoebras": [
		"10.207.7.114"
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
		"WH-LJS-ME60-2:4_2/3"
		],
		"bras": {
		"10.207.7.114": {
		"name": "LJS-ME60-2",
		"interface": [
		"Eth-Trunk3.108"
		]
		}
		},
		"type": "raisecom",
		"pppoebras": [
		"10.207.7.114"
		]
		},
		"10.207.77.30": {
		"name": "X徐小",
		"nasportid": [
		"WH-LJS-ME60-2:4_2/3"
		],
		"bras": {
		"10.207.7.114": {
		"name": "LJS-ME60-2",
		"interface": [
		"Eth-Trunk3.200"
		]
		}
		},
		"type": "raisecom",
		"pppoebras": [
		"10.207.7.114"
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
		"10.207.53.134": {
		"name": "Y伊顿阳光",
		"nasportid": [
		"WH-LJS-ME60-2:5_2/1"
		],
		"bras": {
		"10.207.7.114": {
		"name": "LJS-ME60-2",
		"interface": [
		"Eth-Trunk1.108"
		]
		}
		},
		"type": "raisecom",
		"pppoebras": [
		"10.207.7.114"
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
		"10.207.89.46": {
		"name": "Y银海",
		"nasportid": [
		"WH-LJS-ME60-2:4_2/2",
		"WH-LJS-ME60-2:5_2/2"
		],
		"bras": {
		"10.207.7.114": {
		"name": "LJS-ME60-2",
		"interface": [
		"Eth-Trunk2.401"
		]
		}
		},
		"type": "raisecom",
		"pppoebras": [
		"10.207.7.114"
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
		"WH-LJS-ME60-2:5_2/1"
		],
		"bras": {
		"10.207.7.114": {
		"name": "LJS-ME60-2",
		"interface": [
		"Eth-Trunk1.201"
		]
		}
		},
		"type": "tailong",
		"pppoebras": [
		"10.207.7.114"
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
		"10.207.57.98": {
		"name": "Z紫松68-1",
		"nasportid": [
		"WH-LJS-ME60-2:5_2/1"
		],
		"bras": {
		"10.207.7.114": {
		"name": "LJS-ME60-2",
		"interface": [
		"Eth-Trunk1.208"
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
