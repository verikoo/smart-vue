<template>
  <div class="productsContainer">
    <div class="slider">
      <hooper
        :progress="true"
        :autoPlay="true"
        :playSpeed="2000"
        style="border-radius:20px"
      >
        <slide>
          <div class="conatiner">
            <img
              src="https://i.insider.com/5d8e6ec26f24eb50bc6d292a?width=700"
              alt=""
            />
            <div class="sliderText"><p>1exclusive</p></div>
          </div>
        </slide>

        <slide>
          <div class="conatiner">
            <img
              src="https://i.insider.com/5d8e6ec26f24eb50bc6d292a?width=700"
              alt=""
            />
            <div class="sliderText"><p>2exclusive</p></div>
          </div>
        </slide>
        <slide>
          <div class="conatiner">
            <img src="../../../assets/img/careerTablet.jpg" alt="" />
            <div class="sliderText"><p>3 exclusive</p></div>
          </div>
        </slide>

        <hooper-navigation slot="hooper-addons"></hooper-navigation>
      </hooper>
    </div>
    <div>
      <input type="text" v-model="search" />
      <div v-on:click="getAll">ყველა</div>
      <div v-for="(item, index) in categories" :key="index">
        <p
          v-bind:style="renderStylesheet(item)"
          v-on:click="categoriesFilter(item)"
        >
          {{ item }}
        </p>
      </div>
    </div>
    <div v-for="(item, index) in filteredPosts" :key="index">
      <p>{{ item.title }}</p>
    </div>
  </div>
</template>

<script>
import { Hooper, Slide, Navigation as HooperNavigation } from "hooper";
import "hooper/dist/hooper.css";
import env from "../../../env.json";

export default {
  name: "App",
  data() {
    return {
      medicaments: [],
      categories: [],
      choosedCategories: [],
      lang: "ka",
      search: "",
    };
  },
  mounted() {
    fetch(`${env.host}/api/get/exclusive/products/all`)
      .then((response) => response.json())
      .then((result) => {
        result.item.map((item) => {
          this.categories.push(item.category);
          item.products.map((secondItem) => {
            this.medicaments.push(secondItem);
          });
        });
      });
  },
  methods: {
    categoriesFilter: function(item) {
      this.choosedCategories.push(item);

      let stringToArray = "";
      for (let i = 0; i < this.choosedCategories.length; i++) {
        if (this.choosedCategories[i - 1] != undefined) {
          stringToArray += "&" + this.choosedCategories[i];
        } else {
          stringToArray = this.choosedCategories[i];
        }
      }

      fetch(`${env.host}/api/get/exclusive/products/${stringToArray}`)
        .then((response) => response.json())
        .then((result) => {
          this.medicaments = [];
          result.item.map((secondItem) => {
            secondItem.products.map((thirdItem) => {
              this.medicaments.push(thirdItem);
            });
          });
        });
      console.log(stringToArray);
    },

    renderStylesheet: function(item) {
      console.log("item: " + item);
      this.choosedCategories.map((secondItem) => {
        if (item == secondItem) {
          return { color: "red" };
        }
      });
      console.log("choosed categories: " + this.choosedCategories);
    },

    getAll: function() {
      this.medicaments = [];
      this.choosedCategories = [];

      fetch(`${env.host}/api/get/exclusive/products/all`)
        .then((response) => response.json())
        .then((result) => {
          result.item.map((item) => {
            item.products.map((secondItem) => {
              this.medicaments.push(secondItem);
            });
          });
        });
    },
  },
  computed: {
    filteredPosts() {
      return this.medicaments.filter((post) =>
        post.title.toLowerCase().includes(this.search.toLowerCase())
      );
    },
  },
  components: {
    Hooper,
    Slide,
    HooperNavigation,
  },
};
</script>

<style scoped>
.hooper * {
  border-radius: 20px;
}
.productsContainer {
  width: 100%;
  max-width: 1400px;
  margin: auto;
  min-height: calc(100vh - 258px);
  border: 2px solid red;
}

.container {
  /* border: 2px solid black; */
  position: relative;
  text-align: center;
  color: red;
  width: 100%;
}

.sliderText {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(128, 128, 128, 0.295);
}

.sliderText p {
  padding: 30px;
}

.slider {
  /* border: 2px solid blue; */
  position: relative;
  width: 80%;
  /* height: 300px; */
  border-radius: 20px;
  /* height: 400px; */
  margin: auto;
  background-size: cover;
  margin-top: 20px;
  margin-bottom: 20px;
}
.slider img {
  /* background-position: center center center center; */
  background-size: cover;
  object-fit: cover;
  background-repeat: no-repeat;
  display: flex;
  margin: auto;
  justify-content: center;
  /* border:2px solid yellow; */
  width: 100%;
  border-radius: 20px;
}

.hooper-slide {
  position: relative;
  height: 300px;
  border-radius: 20px;
}
.hooper {
  height: 300px;
  border-radius: 20px;
}

::v-deep .hooper-list {
  border-radius: 20px;
}
</style>
