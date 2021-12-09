<template>
  <div class="vacancy">
    <div class="vacancy_main_div_container">
      <div class="vacancy_main_div">
        <!-- <img
          class="vacancy_main_svg"
          src="../../../assets/ilustrations/vacancy-img.svg"
          alt="Vacancy illustration"
        /> -->
      </div>
    </div>

    <div class="vacancy_main_container">
      <div class="vacancy_content_div">
        <Vacancies :vacancies="vacancies" @change="handleActive" />
        <VacancyDetail :vacancy="vacancy" />
      </div>
    </div>
  </div>
</template>

<script>
import Vacancies from "./Vacancies.vue";
import VacancyDetail from "./VacancyDetail.vue";

import data from "../../../../data/newsData.json";

export default {
  name: "VacancyMain",
  components: { Vacancies, VacancyDetail },
  data() {
    return {
      vacancies: [],
      vacancy: {},
    };
  },
  mounted() {
    let vacancies = data.vacancies;
    this.vacancies = vacancies;

    let vacancy = data.vacancies.filter((i) => i.isActive === true);
    this.vacancy = vacancy[0];
  },
  methods: {
    handleActive(id) {
      console.log(id);
      this.vacancies.map((i) => (i.isActive = false));
      this.vacancies.map((i) => {
        if (i.id === id) i.isActive = true;
      });

      let activeVacancy = this.vacancies.filter((i) => i.isActive === true);
      this.vacancy = activeVacancy[0];
    },
  },
};
</script>

<style scoped>
.vacancy_main_div_container {
  font-family: QARTULI;
  width: 100%;
  /* height:40rem; */
  /* height: auto; */
  /* padding:42%; */
  height: 40rem;
  background-image: url("../../../assets/img/career1.png");
  background-repeat: no-repeat;
  background-position: center center;

  background-size: cover;
  /*   
  object-fit: contain;
 
  
  display: flex;
  align-items: center;
  justify-content: center;
  object-fit: contain; */
  /* padding-top:42%; */
  /* margin-top: 50px; */
}

.vacancy_main_div {
  width: 100%;
  max-width: 1400px;
  height: 100%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.vacancy_main_container {
  /* border: 2px solid black; */
  /* padding: 40px 0px; */
  width: 100%;
  max-width: 1400px;
  height: 100%;
  min-height: 100vh;
  display: flex;
  margin: auto;
}

.vacancy_content_div {
  width: 100%;
  display: flex;
  margin: auto;
  /* justify-content: center; */
  /* border: 2px solid red; */
}

@media all and (max-width: 1500px) {
  .vacancy_main_container {
    padding: 10px 50px 10px 50px;
  }
}

@media only screen and (max-width: 800px) {
  .vacancy_main_div {
    justify-content: space-around;
  }
  /* .vacancy_main_svg {
    margin: auto;
  } */
  .vacancy_main_container {
    padding: 10px 35px 10px 35px;
  }
  .vacancy_content_div {
    display: block;
  }
}
@media only screen and (max-width: 800px) {
  .vacancy_main_container {
    padding: 10px 30px 10px 30px;
  }

  .vacancy_main_div {
    justify-content: space-around;
  }
}
</style>
