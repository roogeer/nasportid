<template>
  <div class="hello">
    <h3>{{ msg }}</h3>
	<table class="table_head" border="1px" align="center">
		<thead>
			<tr>
				<th width="30px" rowspan="2">sn</th>
				<th width="108px" rowspan="2">ip</th>
				<th width="218px" rowspan="2">olt</th>
				<th colspan="2">Bras</th>
				<th rowspan="2">nasportid</th>
			</tr>
			<tr>
				<th width="120px">name</th>
				<th width="128px">interface</th>
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
.table_head {
	border-collapse: collapse;
	margin: 10px auto;
	height: 100%;
	width:  1500px;
	padding: 0;
	/*vertical-align: bottom;*/
	}

th {
	text-align:center;
	background-color:#337ab7;
	color:#FFFFFF;
}
	
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
