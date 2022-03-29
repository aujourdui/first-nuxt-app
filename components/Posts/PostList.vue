<script>
import PostPreview from "@/components/Posts/PostPreview";

export default {
  components: {
    postPreview,
  },
};
</script>

<template>
  <section class="post-list">
    <PostPreview
      id="1"
      thumbnail="https://youmatter.world/app/uploads/sites/2/2019/11/tech-planet.jpg"
      title="Hello world"
      previewText="This is my first post!"
    />
    <PostPreview
      id="2"
      thumbnail="https://youmatter.world/app/uploads/sites/2/2019/11/tech-planet.jpg"
      title="Hello world second"
      previewText="This is my second post!"
    />
    <PostPreview
      id="3"
      thumbnail="https://youmatter.world/app/uploads/sites/2/2019/11/tech-planet.jpg"
      title="Hello world third"
      previewText="This is my third post!"
    />
  </section>
</template>

<style scoped>
.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
