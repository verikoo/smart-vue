<template>
  <div id="app">
    <Navbar v-if="!navbar.includes(this.$route.name)" />
    <router-view style="margin-top: 133px"></router-view>
    <Footer v-if="!footer.includes(this.$route.name)" />
  </div>
</template>

<script>
import Navbar from "./components/Navbar/Navbar.vue";
import Footer from "./components/Footer/Footer.vue";
export default {
  name: "App",
  components: { Navbar, Footer },
  data() {
    return {
      navbar: [
        "NewsDetails",
        "News",
        "BlogMain",
        "BlogsDetails",
        "NotFound",
        "adminpage",
        "adminlogin",
        "adminpage",
        "addteam",
        "addLocalPartners",
        "addForeignPartners",
        "addExclusiveBrands",
        "addNews",
        "addBlogs",
        "addCsr",
        "addCareer",
      ],
      footer: [
        "NewsDetails",
        "News",
        "BlogMain",
        "BlogsDetails",
        "NotFound",
        "adminpage",
        "adminlogin",
        "adminpage",
        "addteam",
        "addLocalPartners",
        "addForeignPartners",
        "addExclusiveBrands",
        "addNews",
        "addBlogs",
        "addCsr",
        "addCareer",
        "contact",
      ],
    };
  },
  mounted() {},
};
</script>

<style>
@font-face {
  font-family: dejavu;
  src: url("./assets/fonts/DejaVuSansCondensed.ttf");
}
@font-face {
  font-family: QARTULI;
  src: url("./assets/fonts/bpg_nino_mtavruli_normal.ttf");
}

@font-face {
  font-family: TBC Contractica CAPS Bold;
  src: url("./assets/fonts/TBCContracticaCAPS-Bold.ttf");
}

@font-face {
  font-family: TBC Contractica CAPS Book;
  src: url("./assets/fonts/TBCContracticaCAPS-Book.ttf");
}

@font-face {
  font-family: TBC Contractica CAPS regular;
  src: url("./assets/fonts/TBCContracticaCAPS-Regular.ttf");
}
@font-face {
  font-family: inside_text;
  src: url("./assets/fonts/bpg-arial-webfont.ttf");
}

* {
  font-family: dejavu;
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}

a {
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
}
.last_added_item,
li {
  -webkit-tap-highlight-color: transparent;
}
</style>
