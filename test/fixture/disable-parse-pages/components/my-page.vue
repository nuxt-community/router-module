<template>
  <h1>Hello {{ name }}</h1>
</template>

<script>
export default {
  asyncData () {
    return {
      name: process.client ? 'client' : 'server'
    }
  }
}
</script>
