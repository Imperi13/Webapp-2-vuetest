<template>
  <div>
    <div>{{ countMessage }}</div>
    <button @click="count++">クリック!</button>
    <button @click="count = 0">リセット!</button>
  </div>
</template>

<script>
export default {
  name: "Counter",
  data() {
    return {
      count: 0
    };
  },
  computed: {
    countMessage() {
      return "回数: " + this.count;
    }
  }
};
</script>

<style></style>
