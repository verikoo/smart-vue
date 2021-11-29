<template>
  <div class="medicamentsDetailContainer">
    <div class="mainContent">
      <div class="medicamentSide">
        <div class="tableWithPhoto">
          <div class="medicamentsPhoto">
            <img
              src="https://worldmedicine.com.tr/wp-content/uploads/aerolet-vit-c-EN.png"
              alt=""
            />
          </div>
          <div class="medicamentsTable">
            <div class="medicamentName"><h2>aerolet with vitamin c</h2></div>
            <div class="additional"><h4>additional information</h4></div>
            <div class="tableContainer">
              <div style="padding: 20px">
                <table>
                  <tr>
                    <th>Category</th>
                    <td>Respiratory system</td>
                  </tr>
                  <tr>
                    <th>Active Substance</th>
                    <td>Vitamin C</td>
                  </tr>
                  <tr>
                    <th>Form</th>
                    <td>Syrup</td>
                  </tr>
                  <tr>
                    <th>Dose</th>
                    <td>700 mg+266.6 mg</td>
                  </tr>
                  <tr>
                    <th>Presentation</th>
                    <td>100ml/ bottle</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div class="description">
          <div class="price">
            <strong>საერთაშორისო დასახელება (აქტიური ნივტიერება):</strong>
            butenafine
          </div>
          <div class="price">
            <strong>კლინიკური ფარმაკოლოგიური ჯგუფი:</strong>
            დერმატოლოგია
          </div>
          <div class="price">
            <strong>მწარმოებელი:</strong>
            ლედო
          </div>
          <div class="price">
            <strong>ჯენერიკი-შეადარეთ ანალოგები:</strong>
            წამალის ლინკი
          </div>
          <div class="price">
            <strong>გაცემის ფორმა:</strong>
            III ჯგუფი ურეცეპტოდ
          </div>
          <div class="price">
            <strong>კოდი:</strong>
            78788
          </div>
        </div>
      </div>
      <div class="medicamentsBlog slider">
        <hooper
          :vertical="HooperValue"
          style="height: 400px"
          :itemsToShow="1.5"
          :centerMode="true"
        >
          <slide v-for="item in [1, 2, 3, 4, 5]" :key="item">
            <img
              src="https://500px.com/assets/home/thumbnail-7cb446c5c5a1e1672b9a2090641c5559.png"
              alt=""
            />
          </slide>
          <hooper-navigation slot="hooper-addons"></hooper-navigation>
        </hooper>
        <!-- <button @click="resize">click</button> -->
      </div>
    </div>
  </div>
</template>
<script>
import { Hooper, Slide, Navigation as HooperNavigation } from "hooper";
import "hooper/dist/hooper.css";
export default {
  name: "App",
  components: {
    Hooper,
    Slide,
    HooperNavigation,
  },
  data() {
    return {
      HooperValue: true,
      // width: 0,
      // height: 0,
    };
  },
  // mounted() {
  //   window.addEventListener("resize", this.handleResize);
  //   this.handleResize();
  // },
  // unmounted() {
  //   window.removeEventListener("resize", this.handleResize);
  // },
  // methods: {
  //   handleResize() {
  //     this.width = window.innerWidth;
  //     if (this.width < 600) {
  //       this.HooperValue = false;
  //       console.log("smalll");
  //     } else {
  //       this.HooperValue = true;
  //       console.log("big");
  //     }
  //   },
  // },
};
</script>


<style scoped>
.medicamentsDetailContainer {
  width: 100%;
  max-width: 1400px;
  margin: auto;
  min-height: calc(100vh - 258px);
  /* border: 2px solid red; */
}

.mainContent {
  max-width: 1400px;
  display: grid;
  grid-template-columns: 4fr 1.5fr;
  /* border: 2px solid green; */
  padding-top: 40px;
  padding-bottom: 40px;
}

.medicamentSide {
  display: grid;
  grid-template-columns: auto;
  /* border: 2px solid brown; */
}
.tableWithPhoto {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.medicamentsPhoto {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background: #ffffff
    url(https://worldmedicine.com.tr/wp-content/uploads/urun-fonu-4-1.png);
  position: relative;
  -webkit-margin-start: 0px;
  -webkit-margin-end: 30px;
  -webkit-margin-before: 0em;
  width: 90%;
  transition: all cubic-bezier(0.795, -0.035, 0, 1) 0.5s;
}
.medicamentsPhoto img {
  width: 500px;
  width: 100%;
  display: block;
  margin: auto;
  /* -webkit-margin-start: 0px;
    -webkit-margin-end: 30px;
    -webkit-margin-before: 0em; */
}
.medicamentName {
  margin-top: 20px;
  margin-bottom: 50px;
  color: #7f5496;
}
.additional {
  width: 50%;
  border-radius: 5px;
  margin-left: 10px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
}
.additional h4 {
  padding: 10px;
}

/* tableeeeeeeeeeeeee */
.tableContainer {
  /* border:2px solid #7F5496; */
  border-radius: 5px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  /* background-color:  #7F5496; */
}
table {
  border-collapse: collapse;
  width: 100%;
  font-size: 14px;
}
/* th {
    font-weight: unset;
} */

td,
th {
  /* border: 1px solid #A480B7; */
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #a480b769;
}
tr:nth-child(odd) {
  background-color: white;
}
/* tableee endddddddddddddddddddd */
.description {
  /* margin: auto; */
  align-items: center;
  font-size: 18px;
  margin-top: 30px;
}
.description .price {
  color: #333038;

  font-weight: 500;
  padding: 5px 0 10px;
}
strong {
  font-weight: 700;
}

/*sliderrrrrrrrrrrrrrrrrrrrr */
.hooper * {
  border-radius: 20px;
}
.slider {
  /* border: 2px solid blue; */
  /* position: relative; */
  width: 95%;
  padding-left: 20px;
  /* height: 100%; */
  /* height: 300px; */
  border-radius: 20px;
  /* height: 400px; */
  margin: auto;
  margin-top: 0px;
  background-size: cover;
}
.hooper-slide {
  position: relative;
  /* height: 300px; */
  border-radius: 20px;
}
::v-deep .hooper-list {
  border-radius: 20px;
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

::v-deep .hooper .ul .li {
  transform: translate(0px, 666.6667px) !important;
}

::v-deep .hooper.button.hooper-next {
  align-content: center !important;
  justify-content: center;
}
/* ::v-deep .hooper .hooper-slide li {
    height: 0px !important;
} */

/*sliderrrrrrrrrrrrrrrrrrrrr */

@media all and (max-width: 1501px) {
  .mainContent {
    padding-left: 40px;
    padding-right: 40px;
  }
}
@media all and (max-width: 1390px) {
  ::v-deep li.hooper-slide.is-active.is-current {
    height: 250px !important;
  }

  ::v-deep li.hooper-slide.is-prev {
    height: 250px !important;
  }
  ::v-deep li.hooper-slide.is-next {
    height: 250px !important    ;
  }
}

@media all and (max-width: 1200px) {
  .slider {
    margin-top: 30px;
    width: 70%;
    padding-left: 0px !important;
  }
  .mainContent {
    display: grid;
    grid-template-columns: auto;
  }
  ::v-deep li.hooper-slide.is-active.is-current {
    height: 550px !important;
  }

  ::v-deep li.hooper-slide.is-prev {
    height: 550px !important;
  }
  ::v-deep li.hooper-slide.is-next {
    height: 550px !important    ;
  }
}

@media all and (max-width: 1080px) {
  ::v-deep li.hooper-slide.is-active.is-current {
    height: 450px !important;
  }

  ::v-deep li.hooper-slide.is-prev {
    height: 450px !important;
  }
  ::v-deep li.hooper-slide.is-next {
    height: 450px !important    ;
  }
}

@media all and (max-width: 980px) {
  ::v-deep li.hooper-slide.is-active.is-current {
    height: 400px !important;
  }

  ::v-deep li.hooper-slide.is-prev {
    height: 400px !important;
  }
  ::v-deep li.hooper-slide.is-next {
    height: 400px !important    ;
  }
}

@media all and (max-width: 730px) {
  .tableWithPhoto {
    align-content: center;
    margin: auto;
    display: grid;
    grid-template-columns: auto;
  }
  .tableWithPhoto img {
    margin: auto;
  }

  .mainContent img {
    margin: auto;
  }
  ::v-deep li.hooper-slide.is-active.is-current {
    height: 400px !important;
  }

  ::v-deep li.hooper-slide.is-prev {
    height: 400px !important;
  }
  ::v-deep li.hooper-slide.is-next {
    height: 400px !important    ;
  }
}
@media all and (max-width: 621px) {
  ::v-deep li.hooper-slide.is-active.is-current {
    height: 250px !important;
  }

  ::v-deep li.hooper-slide.is-prev {
    height: 250px !important;
  }
  ::v-deep li.hooper-slide.is-next {
    height: 250px !important    ;
  }
}
@media all and (max-width: 447px) {
  ::v-deep li.hooper-slide.is-active.is-current {
    height: 200px !important;
  }

  ::v-deep li.hooper-slide.is-prev {
    height: 200px !important;
  }
  ::v-deep li.hooper-slide.is-next {
    height: 200px !important ;
  }
}

@media all and (max-width: 368px) {
  ::v-deep li.hooper-slide.is-active.is-current {
    height: 150px !important;
  }

  ::v-deep li.hooper-slide.is-prev {
    height: 150px !important;
  }
  ::v-deep li.hooper-slide.is-next {
    height: 150px !important ;
  }
}
</style>