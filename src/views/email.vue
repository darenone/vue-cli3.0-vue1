<template>
  <div>
    <h2>email</h2>
    <button @click="handleClick">向TEL组件传值</button>
  </div>
</template>
<script>
export default {
  methods: {
    handleClick() {
      this.$bus.$emit('on-click', 'hello world')
    }
  },
  mounted() {
    // console.log(this.$bus)
  }
}
</script>