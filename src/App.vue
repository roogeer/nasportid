<template>
	<div id="app">
		<div id="nav">
			<router-link to="/raisecom">Raisecom</router-link> |
			<router-link to="/greenway">Greenway</router-link> |
			<router-link to="/tailong">Tailong</router-link>
		</div>
		<keep-alive>
			<router-view/>
		</keep-alive>
	</div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
