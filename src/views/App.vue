<template>
  <div id="app">
    <router-view @logout="logout"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    logout() {
      this.$router.push('/');
    }
  }
};
</script>
