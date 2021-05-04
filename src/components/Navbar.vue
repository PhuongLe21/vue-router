<template>
  <nav>
    <h1>My vue router</h1>
    <ul>
      <li>Home</li>
      <li>Products</li>
      <li>About</li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
nav {
  background: #eee;
}

ul {
  display: flex;
}

li {
  list-style: none;
  padding: 10px;
  background: olive;
  margin: 10px;
  cursor: pointer;
}

</style>