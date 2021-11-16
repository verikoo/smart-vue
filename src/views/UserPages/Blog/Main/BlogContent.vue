<template>
  <div class="blog_content_container">
    <h1 class="blogs_header">ბლოგი</h1>

    <MainBlogsCard
      :id="mainBlogs.id"
      :title="mainBlogs.title"
      img="medicine.png"
    />

    <div class="blogs_div" v-if="blogs.length !== 0">
      <BlogsCard
        v-for="value in blogs"
        :key="value.id"
        :id="value.id"
        :img="value.img"
        :header="value.title"
        :date="value.publishedAt"
      />
    </div>
    <!-- <div v-else class="news_div_error">
      <p class="news_div_error_title">სიახლეები არ მოიძებნა</p>
    </div> -->
  </div>
</template>

<script>
import MainBlogsCard from "./MainBlogsCard.vue";
import BlogsCard from "./BlogsCard.vue";

export default {
  name: "BlogContent",
  components: { MainBlogsCard, BlogsCard },
  props: ["mainBlogs", "blogs"],
};
</script>

<style scoped>
.blog_content_container {
  width: 100%;
  min-height: 100vh;
  height: 100%;
  font-size: 36px;
  padding: 55px 30px 30px 30px;
  /* background-color: tomato; */
}

.blogs_header {
  color: #7F5496 ;
  font-size: 35px;
  text-align: left;
  font-weight:bold;
  letter-spacing: 3px;
}

.blogs_div {
  width: 100%;
  margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 50px;
  grid-row-gap: 60px;
}

.news_div_error {
  width: 100%;
  margin-top: 50px;
}

.news_div_error_title {
  color: grey;
  font-size: 28px;
  /* text-align: left; */
}

@media only screen and (max-width: 750px) {
  .blog_content_container{
    padding: 0;
  }

  .blogs_header{
    text-align: center;
  }

  .blogs_div{
    width: 90%;
    margin: auto;
    margin-top: 50px;
  }
}

@media only screen and (max-width: 1800px) {
  .blogs_div {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media only screen and (max-width: 1300px) {
  .blogs_div {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media only screen and (max-width: 1100px) {
  .blogs_div {
    grid-template-columns: repeat(1, 1fr);
  }
}

</style>


