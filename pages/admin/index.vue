<script>
import PostList from "@/components/Posts/PostList";
import AppButton from "@/components/UI/AppButton";

export default {
  layout: "admin",
  components: {
    PostList,
    AppButton,
  },
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts;
    },
  },
};
</script>

<template>
  <div class="admin-page">
    <section class="new-post">
      <AppButton @click="$router.push('/admin/new-post')">
        Create a new post
      </AppButton>
    </section>
    <section class="existing-posts">
      <h1>Existing posts</h1>
      <PostList isAdmin :posts="loadedPosts" />
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
