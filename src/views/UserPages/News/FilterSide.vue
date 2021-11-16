<template>
  <div class="filterside_div">
    <a href="/" class="filterside_logo"
      ><img src="../../../assets/img/logo.png" alt="Smartharm logo"
    /></a>

    <div class="last_added_div">
      <p class="last_added_title">ახალი დამატებული</p>

      <div v-for="item in last" :key="'last' + item.id" class="last_added_item">
        <router-link :to="{ name: 'NewsDetails', params: { id: item.id } }">
          <p class="last_added_item_title">{{ item.title }}</p>
          <div class="last_added_date">
            <i class="fas fa-calendar calendar_icon"></i>
            <p class="last_added_date_title">
              {{ item.publishedAt }}
            </p>
          </div>
        </router-link>
      </div>
    </div>

    <div class="filtering_div">
      <p class="fintering_title">ფილტრაცია</p>
      <label class="filtering_select_label">წელი</label>
      <select class="fintering_select" @change="handleYear($event)">
        <option value="all" selected>ყველა</option>
        <option v-for="year in years" :key="'year' + year" :value="year">
          {{ year }}
        </option>
      </select>

      <label class="filtering_select_label_category">კატეგორია</label>
      <select
        class="fintering_select_category"
        @change="handleCategory($event)"
      >
        <option value="all" selected>ყველა</option>
        <option
          v-for="category in categories"
          :key="'category' + category"
          :value="category"
        >
          {{ category }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
import data from "../../../../data/newsData.json";

export default {
  name: "FilterSide",
  components: {},
  data() {
    return {
      last: [],
      years: [],
      categories: [],
    };
  },
  mounted() {
    let last_added = data.news.filter(
      (i) => i.newsIndex === 0 || i.newsIndex === 1 || i.newsIndex === 2
    );
    last_added.reverse();
    this.last = last_added;

    // Years
    let time = new Date();
    let currentYear = time.getFullYear();
    let years = [];
    for (let i = 1972; i <= currentYear; i++) {
      years.push(i);
    }
    this.years = years.reverse();

    // Category
    this.categories = [
      "Category 1",
      "Category 2",
      "Category 3",
      "Category 4",
      "Category 5",
    ];
  },
  methods: {
    handleYear(event) {
      // console.log(event.target.value);
      this.$emit("filter", event.target.value, 1);
    },
    handleCategory(event) {
      // console.log(event.target.value);
      this.$emit("filter", event.target.value, 2);
    },
  },
};
</script>

<style scoped>
.filterside_div {
  overflow-y: scroll;
  /* overflow-x: hidden; */
  width: 100%;
  max-width: 250px;
  height: 100vh;
  position: sticky;
  top: 0px;
  left: 0px;
  padding: 0 30px;
   background-color: #DFDFE2;

}

.filterside_div::-webkit-scrollbar {
  width: 5px;
}

.filterside_div::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

.filterside_div::-webkit-scrollbar-thumb {
background-color: #7F5496;
  /* outline: 1px solid #ee6c58; */
  border-radius: 5px;
}

.filterside_logo img {
  width: 100%;
  display: block;
  margin: auto;
  margin-top: 50px !important;
}

.last_added_div {
  width: 100%;
  /* border: solid 1px red; */
  margin-top: 50px;
}

.last_added_title {
 color: #7F5496;
  font-weight: 900;
  font-size: 20px;
  text-align: center;
  letter-spacing: 1px;
}

.last_added_item {
  display: block;
  width: 90%;
  margin: auto;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 5px;
  border-radius: 10px;
  border-left: solid 2px #a580b5;
  /* border: solid 1px green; */
  cursor: pointer;
  /* box-shadow: 5px 5px 20px grey; */
}

.last_added_item:hover {
border-left: solid 4px #462359 ;
  border-bottom: solid 1px #462359 ;
}


.last_added_item_title {
   color: #462359;
  font-size: 16px;
  text-align: left;
}


.last_added_date {
  width: 100%;
  display: flex;
  gap: 15px;
  align-items: center;
  margin-top: 5px;
}

.last_added_date_title {
  color: #462359;
  font-size: 14px;
  text-align: left;
  opacity: 0.7;
  display: flex;
  gap: 10px;
  /* border: solid 1px red; */
  padding-top: 3px;
}

.calendar_icon {
 font-size: 14px;
  color: #462359;
}

/* Foltering */
.filtering_div {
  /* border: 2px solid red; */
  width: 100%;
  height: 300px;
  margin-top: 90px;
  /* border: solid 1px red; */
}

.fintering_title {
  color: #7F5496;
  font-weight: 900;
  font-size: 20px;
  text-align: center;
  letter-spacing: 1px;
}

.fintering_select {
 width: 100%;
  height: 40px;
  background-color: white;
  border: white;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
  border-radius: 10px;
  margin-top: 5px;
  outline: none;
  border: solid 1px lightgray;
  padding-top: 7px;
  margin-bottom: 20px;
}

.filtering_select_label, .filtering_select_label_category {
  color: #462359;
  text-align: left !important;
  font-size: 14px;
  letter-spacing: 1px;
}

.fintering_select_category {
  width: 100%;
  height: 40px;
  border-radius:10px;
  background-color: white;
  border: white;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;

  margin-top: 5px;
  outline: none;
  border: solid 1px lightgray;
  padding-top: 7px;
  max-height: 300px;
}



@media only screen and (max-width: 750px) {
  .filterside_div {
    max-width: 100%;
    padding: 0;
    position: relative;
    /* border: solid 1px blue; */
    /* display: none; */
  }

  .filterside_logo img {
    width: 50%;
    margin-top: 15px;
  }

  .last_added_div {
    width: 90%;
    margin: auto;
    margin-top: 50px;
  }

  .filtering_div {
    width: 90%;
    margin: auto;
    margin-top: 50px;
  }

  .filterside_div {
    height: 100%;
    margin-bottom: 20px;
  }
}
</style>
