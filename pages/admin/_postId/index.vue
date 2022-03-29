<script>
import AdminPostForm from "@/components/Admin/AdminPostForm";

export default {
  components: {
    AdminPostForm,
  },
  data() {
    return {
      loadedPost: {
        author: "Kyosuke",
        title: "My post",
        content: "This is my post",
        thumbnailLink:
          "https://youmatter.world/app/uploads/sites/2/2019/11/tech-planet.jpg",
      },
    };
  },
};
</script>

<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost" />
    </section>
  </div>
</template>

<style scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}
@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>
