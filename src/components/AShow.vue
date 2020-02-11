<template>
  <div>
    A Show: {{ content }}
  </div>
</template>
<script>
export default {
  name: 'AShow',
  props: {
    content: {
      type: [String, Number],
      default: ''
    }
  }
}
</script>