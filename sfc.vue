<template>
  <div>
    <h1>Single-file JavaScript Component</h1>
    <p>{{ message }}</p>
  </div>
</template>

<script>
  module.exports = {
    data() {
      return {
        message: 'Oh hai from the component'
      }
    }
  }
</script>