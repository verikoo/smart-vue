<template>
  <div class="contactContainer">
    <div class="contactUsTitle">
      <div>
        <img
          src="../../../public/assets/ilustrations/undraw_Profile_data_re_v81r.svg"
          alt=""
        />
      </div>
      <div>
        <h2>დაგვიკავშირდით</h2>
      </div>
    </div>

    <div class="socialIcones">
      <div class="socialIconeInside" style="border-right: 2px solid #591a92">
        <img src="../../../public/assets/icons/gmail-logo.png" alt="" />
        <h3>smartPharm@gmail.com</h3>
      </div>
      <div class="socialIconeInside">
        <img src="../../../public/assets/icons/phone.png" alt="" />
        <h3>+995 55 55 55</h3>
      </div>

      <div class="socialIconeInside" style="border-left: 2px solid #591a92">
        <img src="../../../public/assets/icons/locationCont.png" alt="" />
        <h3>ფარნავაზ მეფის ქ N</h3>
      </div>
    </div>


   
   <div class="form">

   </div>

  </div>
</template>




<style scoped>
.contactContainer {
  border: 2px solid red;
  min-height: calc(100vh - 258px);
}
/* contact us title */
.contactUsTitle {
  padding: 20px;
  background-color: #8d4dc9;
  color: white;
  /* border: 2px solid red; */
  display: flex;
  justify-content: center;
  align-items: center;
}
.contactUsTitle h2 {
  margin-top: 50px;
  /* border: 2px solid red; */
  margin-left: 10px;
}
.contactUsTitle img {
  /* border: 2px solid red; */
  display: flex;
  width: 200px;
}
/* contact us title */
/* social icones */
.socialIcones {
  display: flex;
  justify-content: space-evenly;
  /* padding: 20px 0px 20px 0px; */
  padding: 30px;
  border: 2px solid red;
}

.socialIcones img {
  width: 50px;
}
.socialIconeInside {
  /* border: 2px solid rgb(129, 131, 30); */
  display: flex;
  align-items: center;
  flex-direction: column;
  color: #591a92;
  padding: 50px 100px 50px 100px;
}

/* social icones */

/* contact-form */


/* contact-form */
</style>