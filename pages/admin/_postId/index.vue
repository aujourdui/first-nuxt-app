<script>
import AdminPostForm from "@/components/Admin/AdminPostForm";
import axios from "axios";

export default {
  layout: "admin",
  components: {
    AdminPostForm,
  },
  asyncData(context) {
    return axios
      .get(
        "https://nuxt-blog-121f5-default-rtdb.firebaseio.com/posts/" +
          context.params.postId +
          ".json"
      )
      .then((res) => {
        return {
          loadedPost: res.data,
        };
      })
      .catch((e) => context.error(e));
  },
  methods: {
    onSubmitted(editedPost) {
      axios
        .put(
          "https://nuxt-blog-121f5-default-rtdb.firebaseio.com/posts/" +
            this.$route.params.postId +
            ".json",
          editedPost
        )
        .then((res) => {
          this.$router.push("/admin");
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost" @submit="onSubmitted" />
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
