<template>
  <div class="main">
    <div class="loading-room">
      <strong>{{text}}</strong>
      <b-spinner label="Loading Current issue..." variant="primary" style="width: 3rem; height: 3rem; margin-top:20px"></b-spinner>
    </div>
  </div>
</template>

<script>

export default {
    props: ['text'],
};
</script>