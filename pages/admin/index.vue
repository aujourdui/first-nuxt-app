<script>
import PostList from "@/components/Posts/PostList";

export default {
  components: {
    PostList,
  },
};
</script>

<template>
  <div class="admin-page">
    <section class="new-post">
      <button>Create a new post</button>
    </section>
    <section class="existing-posts">
      <h1>Existing posts</h1>
      <PostList />
    </section>
  </div>
</template>

<style scoped>
.admin-page {
  padding: 20px;
}

.new-post {
  text-align: center;
  border-bottom: 2px solid #ccc;
  padding-bottom: 10px;
}

.existing-posts h1 {
  text-align: center;
}
</style>
