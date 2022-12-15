<template>
  <div class="hello">
    <button @click="clickError">点击发送错误</button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  methods: {
    clickError() {
      throw new Error("错误信息");
    },
  },
};
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
