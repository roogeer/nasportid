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
  props: {
    msg: String,
	olts: Object
  },
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
