<template>
  <div>
    about<br>
    {{ now }}
    <img src="~/assets/images/couch-1835923_1920.jpg" width="300" alt="">
  </div>
</template>

<script>
export default {
  data() {
    return {
      now: null
    }
  },
  mounted() {
    this.now = this.$dayjs().format('YYYY-MM-DD HH:mm:ss')
  }
}
</script>
