<template>
  <div class="about">
    <h1>Notebook</h1>
    {{ msg }}
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
pre {
    background-color: #eff0f1;
    margin-bottom: 1em;
    padding: 5px;
}
</style>
