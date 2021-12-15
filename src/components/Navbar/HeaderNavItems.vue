<template>
  <div :class="className">
    <ul>
      <li><input v-if="isInput" type="text" placeholder="Search ..." /></li>
      <li
        v-on:click="closeNavbar()"
        v-for="navItem in headerLinks"
        :key="navItem.to"
      >
        <router-link :to="navItem.to" :exact="navItem.exact">
          {{ $t(`${navItem.label}`) }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { headerLinks } from "./navigationLinks";
export default {
  name: "HeaderNavItems",
  props: ["isInput", "className"],
  data() {
    return {
      headerLinks: headerLinks,
    };
  },
  methods: {
    closeNavbar() {
      console.log(1);
      const navbarLinks = document.getElementsByClassName("navLinks")[0];
      navbarLinks.classList.remove("activeNav");
    },
  },
};
</script>

<style>
.first_line_right ul a {
  color: #666666;
}
.first_line_right ul {
  display: flex;
  gap: 10px;
  margin: 0;
}
.first_line_right li {
  display: flex;
  align-items: center;
}
.first_line_right input[type="text"]::placeholder {
  color: #462359;
}
.first_line_right input[type="text"] {
  float: right;
  padding: 5px 5px 5px 15px;
  border: 1px solid #462359;
  color: #462359;
  background: transparent;
  font-size: 15px;
  border-radius: 5px;
}
.hide_links {
  text-align: center;
  display: none;
}
.hide_links li {
  padding-top: 17px;
}
.navLinks {
  transition: transform 1s ease-out;
  align-items: center;
  display: flex;
  gap: 25px;
}

ul {
  list-style-type: none;
}

li a {
  padding: 10px 10px 6px 10px;
  text-decoration: none;
  background-color: transparent;
}

a,
a:visited,
a:hover,
a:active {
  color: inherit;
  cursor: pointer;
}
.dropItems {
  border-top: 1px solid #e8b1ff;
  box-shadow: rgba(255, 255, 255, 0.1) 0px 10px 15px -3px,
    rgba(255, 255, 255, 0.05) 0px 4px 6px -2px;
  margin-left: -20px !important;
  /* background: #462359; */
  border-radius: 10px;
}

/*drop down   */

.aboutUs svg {
  margin-left: 2px;
}
.aboutUs p {
  padding: 5px 5px 1px 5px;
}
.navLinks {
  padding: 0px !important;
}
.navLinks.activeNav {
  display: flex;
  transition: all 0.6s ease-out;
}

/*drop down   */

.first_line {
  display: flex;
  box-shadow: #f2bfbf56 0px 2px 8px 0px;
}

.first_line_inside a {
  font-size: 13px !important;
}
::v-deep.language span {
  font-size: 15px;
}

.first_line_inside {
  padding: 15px 0 15px 0;
  width: 100%;
  max-width: 1400px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.first_line .router-link-active {
  color: #7f5496;
  font-weight: bold;
  transition: 0.4s;
}

.photo_side a::after {
  background: none;
}

a {
  /* display:flex; */
  text-align: center;
  /* display: flex; */
  position: relative;
}
.className a::after,
.first_line a::after {
  content: "";
  width: 0;
  height: 0.5px;
  position: absolute;
  transition: all 0.3s ease-in-out;
  background-color: #a705ff;
  left: 0;
  bottom: 0;
}

.menu .dropItems a:hover,
a:hover {
  color: #e8b1ff;
}
a:hover::after {
  width: 100%;
}

.Second_line {
  padding: 10px 0 10px 0;
  width: 100%;
  max-width: 1400px;
  margin: auto;
}
.second-line-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.first_line li a {
  font-size: 17px;
}
.photo_side {
  display: flex !important;
  align-items: center !important;
}
.photo_side img {
  width: 200px;
}

input[type="text"]:focus {
  outline: none;
}

.responsive-navbar {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.responsive-navbar .navLinks {
  height: 600px;
}

.responsive-navbar img {
  text-align: center;
  width: 100%;
  height: auto;
}

.responsive-navbar svg {
  z-index: 999;
}

/* drop vue */
.menu {
  margin: 0;
  padding: 0;
  list-style: none;
  text-align: center;
  cursor: pointer;
  /* border: 2px solid red; */
}

.menu a {
  padding-top: 10px;
  padding-bottom: 10px;
  /* border: 2px solid yellow; */
  display: block;
  color: #e6e6e6;
  text-decoration: none;
}

.menu li {
  display: block;
  position: relative;
  color: #e6e6e6;
  padding-bottom: 2px;
  /* border: 2px solid rgb(0, 255, 64); */
}

.menu li ul {
  position: absolute;
  left: 0;
  top: 25px;
  margin: 0;
  padding: 0;
  margin-right: 20vw;
  /* background: #7F5496; */
  /* border-bottom-right-radius:10px; */
  /* border-top-left-radius:10px; */
  margin-right: -20px;
}

.menu li ul li {
  transition: background 0.2s;
  transition: 0.3s;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
/* drop vue */

@media all and (max-width: 1500px) {
  .first_line_inside,
  .Second_line {
    padding: 10px 40px 10px 40px;
  }
}

@media screen and (max-width: 1063px) {
  .responsive-navbar {
    transition: 0.3s;
    display: flex;
    margin-left: auto !important;
    margin-right: 0 !important;
  }

  .dropItems {
    min-width: 100vw;
  }

  .dropItems {
    box-shadow: rgba(255, 255, 255, 0.1) 0px 10px 15px -3px,
      rgba(255, 255, 255, 0.05) 0px 4px 6px -2px;
    margin-left: -20px !important;
    background: #3b174e;
    box-shadow: 0px 1px 3px #e3bff256, 0px -1px 3px #e3bff256;
  }

  .menu li ul {
    position: relative;
    margin-top: -30px !important;
    margin-bottom: 20px !important;
    top: 35px;
  }

  .menu li ul li {
    padding: 10px;
  }

  .second-line-content {
    flex-direction: column;
    align-items: flex-start;
  }
  .navLinks {
    display: none;
    flex-direction: column;
    width: 100%;
    margin-bottom: 20px;
    /* border:2px solid brown; */
  }
  .navLinks a {
    padding: 0px !important;
  }

  .photo_side {
    width: 100%;
    margin: 5px 0px;
  }

  a:hover {
    border-radius: inherit;
    box-shadow: none;
    color: #e8b1ff;
  }
  .hide_links {
    display: block;
  }
  .first_line_right a {
    display: none;
  }
  .first_line_right ul {
    gap: inherit;
  }

  .first_line_right li {
    display: block;
  }
}

@media all and (max-width: 526px) {
  .first_line_inside,
  .Second_line {
    padding: 10px 30px;
  }

  /* .photo_side .logo {
    width: 150px;
  } */
}

@media all and (max-width: 358px) {
  .photo_side .logo {
    width: 130px;
  }
}
</style>