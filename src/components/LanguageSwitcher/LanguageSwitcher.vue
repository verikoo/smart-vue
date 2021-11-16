<template>
  <div class="language">
    <a href="#">
      <div v-on:click="changeLocale('ka')">
        <span>GE</span>
      </div>
    </a>
    <a href="#">
      <div v-on:click="changeLocale('en')">
        <span>EN</span>
      </div>
    </a>
  </div>
</template>

<script>
import i18n from "../../i18n.js";
import { localize } from "vee-validate";
export default {
  name: "languageSwitcher",
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    toggleShow: function () {
      this.showMenu = !this.showMenu;
    },
    itemClicked: function (item) {
      this.toggleShow();
      this.onClick(item);
    },
    changeLocale(n) {
      i18n.locale = n;
      localize(n);
      const getHTMLTag = document.documentElement;
      getHTMLTag.setAttribute("lang", i18n.locale);
      localStorage.setItem("lang", n);
      location.reload();
    },
  },
};
</script>

<style scoped>
.language {
  display: flex;
}


span {
  padding-right: 20px;
  color: #666666; 
  font-size:17px;
  /* font-weight: 700; */
}


</style>