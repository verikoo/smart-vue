<template>
  <div class="productsContainer">
    <div class="main_content">
      <div class="filter">
        <input type="text" placeholder="სახელი" v-model="searchName" />

        <select v-model="searchCategory">
          <option value="">ყველა</option>
          <option
            v-for="category in categories"
            value="ანტიბიოტიკი"
            :key="category.id"
          >
            {{ category.category }}
          </option>
        </select>
      </div>

      <div class="brands">
        <div
          v-for="(item, index) in filterProducts"
          :key="index"
          class="hovereffect"
        >
          <img :src="item.defaultImage" alt="" />
          <div class="overlay">
            <router-link
              :to="{
                name: 'exclusiveMedicamentsDetail',
                params: { id: item.slug },
              }"
              class="info"
              exact-path
            >
              <span class="seeMore">მეტის ნახვა</span>
            </router-link>
            <h2>
              <div v-if="lang == 'ka'">
                {{ item.titleKA }}
              </div>
              <div v-else>
                {{ item.titleEN }}
              </div>
            </h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import env from "../../../../env.json";

export default {
  name: "App",
  data() {
    return {
      PartnersData: [],
      searchName: "",
      // categories: [],
      categories: [{ category: "ანტიბიოტიკი" }, { category: "დერმატოლოგია" }],
      searchCategory: "",
    };
  },
  mounted() {
    this.test();
    this.getCategories();
  },
  computed: {
    filterProducts: function () {
      // return this.filterProductsByName(this.PartnersData);
      // filter if we have another filter parameter
      return this.filterProductsByName(
        this.filterProductsByCategory(this.PartnersData)
      );
    },
  },
  methods: {
    filterProductsByName: function (products) {
      return products.filter(
        (product) => !product.titleKA.indexOf(this.searchName)
      );
    },
    getCategories() {
      axios
        .get(`${env.host}/api/get/exclusive/products/:category`)
        .then((res) => {
          console.log(res);
        });
    },
    test() {
      axios
        .get(`${env.host}/api/get/local/partners`)
        .then((result) => {
          this.PartnersData = JSON.parse(JSON.stringify(result.data.item));
        })
        .catch((err) => {
          console.log(err);
        });

      if (localStorage.getItem("lang") == "ka") {
        this.lang = "ka";
      } else {
        this.lang = "en";
      }
    },
    // filter if we have another filter parameter
    filterProductsByCategory: function (products) {
      return products.filter(
        (product) => !product.titleKA.indexOf(this.searchCategory)
      );
    },
  },
};
</script>

<style scoped>
.productsContainer {
  width: 100%;
  max-width: 1400px;
  margin: auto;
  min-height: calc(100vh - 240px);
}
.filter {
  padding-top: 50px;
  /* border: 2px solid red; */
}
.filter input,
.filter select {
  height: 50px;
  width: 200px;
  outline: none;
  border: 1px solid #7e5493;
  border-radius: 5px;
  padding-left: 10px;
  box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px,
    rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
}
.filter select {
  margin-left: 20px;
  /* border: 2px solid red; */
}

.brands {
  padding: 50px 0 50px 0;
  width: 100%;
  /* height: 60%; */
  display: grid;
  grid-gap: 40px;
  grid-template-columns: repeat(3, 1fr);
}

.test {
  background: #9629ac41;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
}
.title {
  background-image: url("../../../../assets/img/testPhoto.jpg");
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
}

.titleInside {
  max-width: 1400px;
  float: unset;
  display: flex;
  width: 100%;
  margin: auto;
  height: 40rem;
}

.titleInside h1 {
  margin-top: 20px;
  margin-bottom: 20px;
  display: inline-block;
  align-self: flex-end;
  margin-left: auto;
  margin-right: 10;
  border-radius: 10px;
  color: white;
}

.titleContainer h1 {
  display: flex;
  color: #462359;
  justify-content: right;
  display: inline-block;
  align-self: flex-end;
  margin-left: auto;
  margin-right: 10;
  border-radius: 10px;
  color: white;
}

.hovereffect {
  /* border: 2px solid brown; */
  border-radius: 10px;
  /* width: 80%; */
  height: auto;
  float: left;
  overflow: hidden;
  position: relative;
  text-align: center;
  cursor: default;
}

.hovereffect .overlay {
  background-color: #9d14b934;
  width: 100%;
  height: 100%;
  position: absolute;
  overflow: hidden;
  border-radius: 10px;
  top: 0;
  left: 0;
  -webkit-transition: all 0.4s cubic-bezier(0.88, -0.99, 0, 1.81);
  transition: all 0.4s cubic-bezier(0.88, -0.99, 0, 1.81);
}

/* .overlay {
  border: 2px solid red;
} */
.hovereffect:hover .overlay {
  background-color: #4e1782a2;
}

.hovereffect img {
  object-fit: cover;
  width: 100%;
  height: 350px;
  display: block;
  position: relative;
}

.hovereffect h2 {
  background: #7e5493;
  margin: auto;
  color: #fff;
  position: relative;
  width: 80%;
  /* height: 100%; */
  border-radius: 5px;
  font-size: 20px;
  /* margin-bottom: 100px; */
  padding: 10px;
  float: left;
  text-align: start;
  /* -webkit-transform: translateY(60px); */
  /* -ms-transform: translateY(60px); */
  transform: translateY(290px);
  padding-left: 20px;
  -webkit-transition: all 0.4s cubic-bezier(0.88, -0.99, 0, 1.81);
  transition: all 0.4s cubic-bezier(0.88, -0.99, 0, 1.81);
}
.seeMore {
  font-size: 20px;
  margin: auto;
}

.hovereffect:hover h2 {
  background: #462359;
  color: #a4a8aa;
  /* -webkit-transform: translateY(5px);
  -ms-transform: translateY(5px);
  transform: translateY(5px); */
}

.hovereffect a.info {
  position: absolute;
  display: flex !important;
  text-decoration: none;
  justify-content: center !important ;
  margin: auto !important;
  align-items: center;
  text-align: center;
  color: #fff;
  border: 1px solid #fff;
  background-color: transparent;
  opacity: 0;
  filter: alpha(opacity=0);
  -webkit-transform: scale(0);
  -ms-transform: scale(0);
  transform: scale(0);
  -webkit-transition: all 0.2s cubic-bezier(0.88, -0.99, 0, 1.81);
  transition: all 0.2s cubic-bezier(0.88, -0.99, 0, 1.81);
  font-weight: normal;
  border-radius: 10px;
  padding: 10px;
  font-size: 1.3vw;
  bottom: 40%;
  left: 25%;

  /* position: relative; */

  width: 200px;

  /* margin-top: 40px; */

  /* 
 
  
  
  
  
  
 
  
  
  
  
  

  
  align-items: center;
  right: 20px; */
}

.hovereffect:hover a.info {
  opacity: 1;
  filter: alpha(opacity=100);
  -webkit-transform: scale(1);
  -ms-transform: scale(1);
  transform: scale(1);
}

.hovereffect a.info:hover {
  box-shadow: 0 0 5px #fff;
}

@media all and (max-width: 1500px) {
  /* .titleInside h1 {
    padding: 10px 50px 10px 0px;
  } */
}

@media all and (max-width: 1400px) {
  .main_content {
    padding: 0 40px 0 40px;
  }
}

@media all and (max-width: 1200px) {
  .brands {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media all and (max-width: 991px) {
  .brands {
    justify-content: center;
    grid-template-columns: repeat(1, 1fr);
  }
  .hovereffect img {
    height: 500px;
  }
  .hovereffect h2 {
    width: 50%;
    margin-top: 100px;
  }

  .titleInside h1 {
    margin: auto;
    margin-top: 480px;
    padding: 0px;
  }
  .hovereffect a.info {
    /* position: static; */
    /* margin: auto; */
    /* margin-top: 40px; */
    left: 40%;
  }
}
@media all and (max-width: 768px) {
  .hovereffect img {
    height: 400px;
  }
  .hovereffect h2 {
    margin-top: 30px;
  }
  .hovereffect a.info {
    left: 35%;
  }
  .icon {
    grid-template-columns: repeat(2, 1fr) !important;
  }
  .exact_icon {
    text-align: center;
    padding-bottom: 0px;
    padding-top: 30px;
  }

  .title h1 {
    padding-top: 0px;
  }
}

@media all and (max-width: 621px) {
  .hovereffect h2 {
    width: 60%;
    margin-top: 30px;
  }
  .hovereffect a.info {
    left: 30%;
  }
  .filter input,
  .filter select {
    /* border: 2px solid red; */
    width: 100%;
  }
  .filter select {
    margin-top: 20px;
    margin-left: 0px;
    /* border: 2px solid red; */
  }
}

@media all and (max-width: 503px) {
  .hovereffect h2 {
    width: 80%;
    margin-top: 25px;
  }
  .hovereffect a.info {
    left: 25%;
  }
}
@media all and (max-width: 459px) {
  .hovereffect h2 {
    margin-top: -70px;
  }

  .hovereffect img {
    height: 300px;
  }
}

@media all and (max-width: 450px) {
  /* .hovereffect img {
    height: 300px;
  }
  .title h1 {
    width: 70%;
  }

  .hovereffect h2 {
    font-size: 25px;
  } */
  .hovereffect a.info {
    left: 25%;
    padding: 5px;
    width: 45%;
  }
}

@media all and (max-width: 400px) {
  .hovereffect img {
    height: 250px;
  }
  .hovereffect h2 {
    width: 80%;
    margin-top: -120px;
  }
}

@media all and (max-width: 374px) {
  /* .hovereffect img {
    height: 250px;
  } */

  .hovereffect h2 {
    font-size: 18px;
    width: 80%;
    margin-top: -120px;
  }
}
</style>
