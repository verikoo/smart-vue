<template>
  <div class="company">
    <div class="title">
      <div class="titleInside">
      <h1>კომპანია და მისია</h1>
      </div>
    </div>
    <div class="main_content">
      <tabs>
        <tab title="კომპანია" class="tabs_values">
          <p>
            
            <b >  გაუმჯობესება უკეთესი გაგრძელებისთვის! <br/> <br/>
სმარტ ფარმაში სჯერათ, რომ გაუმჯობესების შესაძლებლობა ყველაზე დიდი გამოწვევაა
სამყაროში და მას ეფექტური ათვისება სჭირდება </b> <br/> <br/>
           
           კომპანია “სმარტ ფარმა“ წარმოადგენს საერთაშორისო ფარმაცევტული კომპანიების
სანდო პარტნიორს საქართველოში. ის უკვე 10 წელია საქართველოს ფარმაცევტულ
ბაზარს ამარაგებს და ყოველთვის სთავაზობს მას გამოცდილ, სტაბილურ, ბიუჯეტურ
და მაღალი ხარისხის ევროპულ პროდუქციას. <br> <br>
კომპანია მუდმივად აუმჯობესებს თავის შედეგებს უკეთესი გაგრძელებისა და
მომავლისთვის. ქართულ ბაზარზე ის სწრაფად მზარდი ფარმაცევტული ბრენდია,
ერთმანეთთან მჭიდროდ დაკავშირებული გუნდის წევრებით, გაზიარებული
ღირებულებებითა და საინტერესო ყოველდღიურობით. <br> <br>
დღეს კომპანია უკვე 800 - მდე აფთიაქთან, მსხვილ ფარმაცევტულ ბაზასთან და
სამედიცინო დაწესებულებასთან წარმატებით თანამშრომლობს. კომპანია
დაფუძნებულია 100% -ით ქართული კაპიტალით, ბიზნესის მხარდაჭერას კი
უზრუნველყოფენ ფარმაცევტულ სფეროში მრავალწლიანი გამოცდილების მქონე
უცხოელი პარტნიორები. <br> <br>
მომხმარებლის საჭიროებაზე ორიენტირებული გუნდი მუდმივად ეძებს გაუმჯობესების
ახალ-ახალ ინოვაციურ მიდგომებსა და საშუალებებს, რომლებიც უკეთ მოემსახურება
თანამედროვე მოთხოვნებსა და ადამიანების კეთილდღეობას.
          </p></tab
        >
        <tab title="მისია" class="tabs_values">
          <p>
            კომპანიის მისიაა, გააუმჯობესოს და უკეთესი გახადოს ყოველდღიური ცხოვრება,
სამყარო და გარემო იმისთვის, რომ ადამიანებმა (იქნება ეს პარტნიორი, მომხმარებელი,
თანამშრომელი თუ საზოგადოების წარმომადგენელი) გააგრძელონ ცხოვრება
ღირსეულად, ბედნიერად და მრავალფეროვნად.
          </p></tab
        >
      </tabs>
    </div>
  </div>
</template>

<script>
import Tab from "../../../components/tabs/Tab.vue";
import Tabs from "../../../components/tabs/Tabs.vue";
export default {
  components: {
    Tab,
    Tabs,
  },
};
</script>

<style scoped>
.main_content {
  width: 100%;
  max-width: 1400px;
  margin: auto;
  min-height: calc(100vh - 258px);
}
.company {
  text-align: justify;
}
.company p {
  font-size: 20px;
}
.company span {
  font-size: 25px;
}
.title {
  background-image: url("../../../assets/img/Corporate-Social-Responsibility 1.png");
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
  /* border: 2px solid green; */
}
.titleInside h1 {
  /* border: 4px solid black; */
  /* padding:10px 40px 10px 40px; */
  margin-top: 20px;
  margin-bottom: 20px;
  display: inline-block;
  align-self: flex-end;
  margin-left: auto;
  margin-right: 10;
  border-radius: 20px;
  color: white;
 
}

.tabs_values {
  display: inline-block;
  align-self: center;
  
  /* color: #666666; */
  /* padding-top: 70px; */
}

@media all and (max-width: 1500px){
   .titleInside h1{
      padding:10px 40px 10px 40px;
   }

}

@media all and (max-width: 1400px) {
  .main_content {
    padding: 0 40px 0 40px;
  }
  
}
@media all and (max-width: 1280px) {
  .company p {
    font-size: 2vw;
    padding-bottom: 50px;
  }
  .company span {
    font-size: 2vw;
  }
}
@media all and (max-width: 992px) {
  .company p {
    font-size: 2.5vw;
  }
  .company span {
    font-size: 3vw;
  }
  .titleInside h1{
    margin: auto;
    margin-top: 480px;
  }
}
@media all and (max-width: 749px) {
  .company p {
    font-size: 3vw;
  }
}
@media all and (max-width: 532px) {
  .company p {
    font-size: 4vw;
  }
  .company span {
    font-size: 4vw;
  }
}
@media all and (max-width: 332px) {
  .company p {
    font-size: 5vw;
  }
  .company span {
    font-size: 5vw;
  }
}
</style>