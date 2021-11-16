<template>
  <div class="vacancies_container">
    <h1 class="vacancies_main_title">ვაკანსიები</h1>
    <div class="vacansies_sub_div">
      <div
        class="vacancies_title_div"
        v-for="vacancy in vacancies"
        :key="vacancy.id"
        @click="handleActive(vacancy.id)"
      >
        <i v-if="vacancy.isActive" class="triangle_icon fas fa-play-circle"></i>
        <i v-else class="triangle_icon_none fas fa-play-circle"></i>
        <div class="vacancy_title_inside_div">
          <p
            :title="vacancy.title"
            class="vacancy_title"
            :class="vacancy.isActive ? 'title_active' : ''"
          >
            {{ vacancy.title }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Vacancies",
  props: ["vacancies"],
  methods: {
    handleActive(id) {
      this.$emit("change", id);
    },
  },
};
</script>

<style scoped>
.vacancies_container {
  width: 100%;
  max-width: 300px;
  padding-top: 100px;
  padding-bottom: 30px;
}

.vacancies_main_title {
  font-size: 25px;
  color: #A580B5;
  text-align: center;
}

.vacansies_sub_div {
  width: 80%;
  height: 80%;
  margin: auto;
  margin-top: 30px;
  /* border: solid 1px green; */
  max-height: 400px;
  overflow-y: scroll;
  /* overflow-x: hidden; */
}

.vacansies_sub_div::-webkit-scrollbar {
  width: 5px;
}

.vacansies_sub_div::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

.vacansies_sub_div::-webkit-scrollbar-thumb {
  background-color: #A580B5;
  /* outline: 1px solid #ee6c58; */
  border-radius: 5px;
}

.vacancies_title_div {
  width: 90%;
  margin: auto;
  cursor: pointer;
  /* border-left: solid 3px #462359; */
  border-left: solid 3px transparent;
  /* padding-right: 50px; */
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* .vacancy_title_inside_div {
  height: 100%;
  border: solid 1px red;
  white-space: nowrap;
  width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
} */

.vacancy_title {
  font-size: 20px;
  color: #462359;
  text-align: center;
  /* border: solid 1px green; */
  padding-top: 20px;
  padding-bottom: 15px;
  padding-left: 10px;
  white-space: nowrap;
  width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
}

.vacancy_title:hover {
  color: #462359;
}

.title_active {
  font-weight: 700;
  color: #462359;
}

.triangle_icon {
  font-size: 30px;
  /* background-color: #FEFBF3; */
  color: #E3BFF2;
  padding:5px 0 5px 0;
  margin-left: -15px;
}

.triangle_icon_none {
  color: transparent;
  margin-left: 0px;
}

@media only screen and (max-width: 800px) {
  .vacancies_container {
    margin: auto;
  }

  .vacancies_container {
    padding-top: 40px;
  }

  .vacansies_sub_div {
    max-height: 300px;
  }
}
</style>
