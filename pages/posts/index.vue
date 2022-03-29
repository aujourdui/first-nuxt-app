<script>
import PostList from "@/components/Posts/PostList";

export default {
  components: {
    PostList,
  },
  asyncData(context) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          loadedPosts: [
            {
              id: "1",
              title: "First post",
              previewText: "This is first post",
              thumbnail:
                "https://youmatter.world/app/uploads/sites/2/2019/11/tech-planet.jpg",
            },
            {
              id: "2",
              title: "Second post",
              previewText: "This is Second post",
              thumbnail:
                "https://youmatter.world/app/uploads/sites/2/2019/11/tech-planet.jpg",
            },
          ],
        });
      }, 1500);
      // reject(new Error());
    })
      .then((data) => {
        return data;
      })
      .catch((e) => context.error(e));
  },
};
</script>

<template>
  <div class="posts-page">
    <PostList :posts="loadedPosts" />
  </div>
</template>

<style scoped>
.posts-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
