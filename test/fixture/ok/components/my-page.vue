<template>
  <h1>Hello {{ name }}</h1>
</template>

<script>
export default {
  asyncData({ isClient }) {
    return {
      name: (isClient ? 'client' : 'server')
    }
  }
}
</script>
