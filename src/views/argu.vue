<template>
  <div>
    {{ name }}
    {{ $route.params.name }}
  </div>
</template>
<script>
export default {
  props: {
    name: {
      type: [String, Number],
      default: 'zongqiang'
    }
  },
  beforeRouteUpdate (to, from, next) {
    // 这里也可以使用this
    console.log(to.name, from.name)
  },
}
</script>