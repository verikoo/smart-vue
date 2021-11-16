<template>
  <div class="Blog_main_container">
    <BlogFilter @filter="handleFilter" />
    <BlogContent :mainBlogs="mainBlogs" :blogs="blogs" />
  </div>
</template>

<script>
import BlogFilter from "./BlogFilter.vue";
import BlogContent from "./BlogContent.vue";

import data from "../../../../../data/newsData.json";

export default {
  name: "BlogMain",
  components: { BlogFilter, BlogContent },
  data() {
    return {
      mainBlogs: {},
      blogs: [],
    };
  },
  mounted() {
    this.blogs = data.blogs;
    let blogsdata = data.blogs.filter((i) => i.newsIndex === 0);
    this.mainBlogs = blogsdata[0];
    console.log(this.blogs);
  },
  methods: {
    handleFilter(event, index) {
      let filteredBlogs = [];
      if (index === 1) {
        if(event === "all") filteredBlogs = data.blogs;
        else {
          filteredBlogs = data.blogs.filter(
            (i) => i.publishedAt.slice(0, 4) == event
          );
        }
        
      } else {
        if(event === "all") filteredBlogs = data.blogs;
        else filteredBlogs = data.blogs.filter((i) => i.category == event);
      }

      this.blogs = filteredBlogs;
    },
  },
};
</script>

<style scoped>
.Blog_main_container {
  margin-top:0px !important;
  width: 100%;
  max-width: 1920px;
  height: 100%;
  margin:auto;
  min-height: 100vh;
  display: flex;
}

@media only screen and (max-width: 750px) {
  .Blog_main_container {
    display: block;
    /* padding: 30px; */
  }
}
</style>
