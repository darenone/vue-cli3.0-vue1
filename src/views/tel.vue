<template>
  <div>
    <h2>tel</h2>
    <p>{{ message }}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: ''
    }
  },
  mounted() {
    this.$bus.$on('on-click', mes => {
      this.message = mes
    })
  }
}
</script>