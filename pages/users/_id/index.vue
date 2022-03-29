<script>
export default {
  validate(data) {
    return /^\d+$/.test(data.params.id);
  },
};
</script>

<template>
  <h1>A single user, with ID: {{ $route.params.id }}</h1>
</template>
