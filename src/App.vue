<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Homesdsdsddddddddddddd</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="less">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
}
html,
body {
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  padding-top: 20px;
  height: 100%;
  background-color: #fff;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
      background-color: #fff;
      background-color: #fff;
    }
  }
}
</style>
