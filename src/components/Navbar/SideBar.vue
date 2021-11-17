<template>
  <div class="sidebar">
    <div class="menu-items" v-for="item in path" :key="item.id">
      <router-link
        :to="item.path"
        active-class="active"
        tag="button"
        exact
        class="side-btn"
      >
        <div class="link-container">{{ item.title }}</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "sidebar",
  data() {
    return {
      path: [
        {
          title: "addTeam",
          path: { name: "addteam", params: { id: "addTeam" } },
        },
        {
          title: "addLocalPartners",
          path: {
            name: "addLocalPartners",
            params: { id: "addLocalPartners" },
          },
        },
        {
          title: "addForeignPartners",
          path: {
            name: "addForeignPartners",
            params: { id: "addForeignPartners" },
          },
        },
        {
          title: "addExclusiveBrands",
          path: {
            name: "addExclusiveBrands",
            params: { id: "addExclusiveBrands" },
          },
        },
        {
          title: "addNews",
          path: { name: "addNews", params: { id: "addNews" } },
        },
        {
          title: "addBlogs",
          path: { name: "addBlogs", params: { id: "addBlogs" } },
        },
        {
          title: "addCsr",
          path: { name: "addCsr", params: { id: "addCsr" } },
        },
        {
          title: "addCareer",
          path: { name: "addCareer", params: { id: "addCareer" } },
        },
      ],
    };
  },
};
</script>

<style scoped>
.sidebar {
  direction: rtl;
  overflow: auto;
}
.sidebar::-webkit-scrollbar {
  width: 5px;
}
.sidebar::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}
.sidebar::-webkit-scrollbar-thumb {
  background-color: #be99ce;
  border-radius: 5px;
}
.menu-items {
  display: flex;
  flex-direction: column;
  margin: 10px 0 10px 0;
}
.menu-items > * {
  margin-top: 50px;
}
.side-btn {
  border: none;
  padding: 15px 0px;
  cursor: pointer;
  color: white;
  background-color: transparent;
}
.side-btn.active {
  position: relative;
  background-color: white;
  color: #7f5496;
  font-weight: 600;
  border-radius: 30px 0 0 30px;
}
.side-btn.active::before {
  top: -30px;
}
.side-btn.active::after {
  bottom: -30px;
}
.side-btn.active::before,
.side-btn.active::after {
  position: absolute;
  content: "";
  right: 0;
  height: 30px;
  width: 30px;
  background-color: white;
}
.side-btn.active .link-container::before {
  top: -60px;
}
.side-btn.active .link-container::after {
  bottom: -60px;
  z-index: 99;
}
.side-btn.active .link-container::before,
.side-btn.active .link-container::after {
  position: absolute;
  content: "";
  right: 0px;
  height: 60px;
  width: 60px;
  border-radius: 50%;
  background-color: #7f5496;
}
</style>