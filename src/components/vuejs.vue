<template>

<div class="hello">

<h3>Setup Github Page</h3>

{{ msg }}

Install vue cli
<pre>yarn global add @vue/cli</pre>

<p>Create new project</p>
<pre>
vue create my-project
cd my-project
</pre>

<p>Test in your browser</p>
<pre>yarn serve</pre>

<p>install vue-gh-pages dependency</p>
<pre>yarn add webpack</pre>

<p>
Pre-requisite:<br>
- Github account<br>
- Github repository set as Github Page<br>
- Github repository of the new project<br>
- Change source of new project to master branch /docs folder<br>
</p>

<pre>yarn add vue-gh-pages</pre>

Add to "scripts" section of package.json:
<pre>"deploy": "node ./node_modules/vue-gh-pages/index.js"</pre>

Add "homepage" to package.json:
<pre>"homepage": "https://github.com/myusername/my-app",</pre>

Setup git

<pre>
echo "# vuex-test" >> README.md
git init
git add .
git remote add origin https://github.com/devondahon/vuex-test.git
</pre>

Deployment
<pre>
git commit -m "first commit"
git push -u origin master -f
npm run deploy
</pre>

ref. <a href="https://www.npmjs.com/package/vue-gh-pages">https://www.npmjs.com/package/vue-gh-pages</a>




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
