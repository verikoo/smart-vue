<template>
  <div class="contactContainer">
    <div class="contactUsTitle">
      <div class="contactIlustrat">
        <img
          src="../../../public/assets/ilustrations/undraw_Profile_data_re_v81r.svg"
          alt=""
        />
      </div>
      <div >
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
      <div class="formTitle">
        <h2>გამოაგზავნეთ შეკითხვა ფორმის მეშვეობით</h2>
      </div>
      <div class="login-box">
        <form>
          <div class="user-box">
            <input type="text" name="" required="" />
            <label>სახელი</label>
          </div>
          <div class="user-box">
            <input type="text" name="" required="" />
            <label>გვარი</label>
          </div>
          <div class="user-box">
            <input type="email" name="" required="" />
            <label>ფოსტა</label>
          </div>
          <div class="user-box">
            <input type="number" name="" required="" />
            <label>საკონტაქტო ნომერი</label>
          </div>
          <div class="user-box">
            <select name="category" id="category">
              <option value="kategory1 ">თემა: პარტრნიორობა</option>
              <option value="kategory1 ">თემა: პარტრნიორობა</option>
              <option value="kategory1 ">თემა: პარტრნიორობა</option>
              <option value="kategory1 ">თემა: პარტრნიორობა</option>
            </select>
          </div>

          <a href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </a>
        </form>
      </div>
    </div>

    <div class="socialIcones2">
      <div><img src="../../../public/assets/icons/linkedin.png" alt="" /></div>
      <div><img src="../../../public/assets/icons/youtube.png" alt="" /></div>
      <div>
        <img src="../../../public/assets/icons/facebookCont.png" alt="" />
      </div>
      <div>
        <img src="../../../public/assets/icons/twitterCont.png" alt="" />
      </div>
    </div>

    <div class="locationMap">
      <div class="mapIlustration">
        <img
          src="../../../public/assets/ilustrations/undraw_right_direction_tge8.svg"
          alt=""
        />
      </div>
      <div class="locationSIde">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2981.368546245063!2d41.63369701543379!3d41.6477785792411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406787a6b8a7e515%3A0xf66f06747969ee30!2sLLC%20Cyber%20Solutions!5e0!3m2!1ska!2sge!4v1631194349265!5m2!1ska!2sge"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  </div>
</template>




<style scoped>
.contactContainer {
  min-height: calc(100vh - 258px);
}
/* contact us titleeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee */
.contactUsTitle {
  padding: 20px;
  background-color: #8d4dc9;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}
.contactUsTitle h2 {
  margin-top: 4vw;
  margin-left: 10px;
}

.contactUsTitle img {
  display: flex;
  width: 200px;
}
/* contact us titleeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee */

/* social iconesssssssssssssssssssssssssssssssssssssssssssssssssssssssssss */
.socialIcones {
  display: flex;
  justify-content: space-evenly;
  padding: 30px;
}

.socialIcones img {
  width: 50px;
}
.socialIconeInside {
  display: flex;
  align-items: center;
  flex-direction: column;
  color: #591a92;
  padding: 50px 100px 50px 100px;
}

/* social iconesssssssssssssssssssssssssssssssssssssssssssssssssssssssssss */

/* contact-formmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm */
.form {
  padding: 60px;
}
.login-box {
  justify-content: center !important;
  position: relative;
  margin: auto !important;
  width: 50%;
  padding: 40px;
  margin-top: 40px !important;
  background: #591a92;
  box-sizing: border-box;
  box-shadow: 0 15px 25px #591a92;
  border-radius: 10px;
}

.login-box h2 {
  margin: 0 0 30px;
  padding: 0;
  color: #fff;
  text-align: center;
}

.login-box .user-box {
  position: relative;
}

.login-box .user-box input,
select {
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;
}

.login-box .user-box label {
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  pointer-events: none;
  transition: 0.5s;
}

.login-box .user-box input:focus ~ label,
.login-box .user-box input:valid ~ label {
  top: -20px;
  left: 0;
  color: #ab4df7;
  font-size: 12px;
}

.login-box form a {
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  color: #ab4df7;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: 0.5s;
  margin-top: 40px;
  letter-spacing: 4px;
}

.login-box a:hover,
select {
  background: #ab4df7;
  color: rgb(255, 255, 255);
  border-radius: 1px;
  box-shadow: 0 0 5px #ab4df7, 0 0 5px #ab4df7, 0 0 10px #ab4df7,
    0 0 50px #ab4df7;
}

.login-box a span {
  position: absolute;
  display: block;
}

.login-box a span:nth-child(1) {
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #ab4df7);
  animation: btn-anim1 1s linear infinite;
}

@keyframes btn-anim1 {
  0% {
    left: -100%;
  }
  50%,
  100% {
    left: 100%;
  }
}

.login-box a span:nth-child(2) {
  top: -100%;
  right: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, transparent, #ab4df7);
  animation: btn-anim2 1s linear infinite;
  animation-delay: 0.25s;
}

@keyframes btn-anim2 {
  0% {
    top: -100%;
  }
  50%,
  100% {
    top: 100%;
  }
}

.login-box a span:nth-child(3) {
  bottom: 0;
  right: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(270deg, transparent, #ab4df7);
  animation: btn-anim3 1s linear infinite;
  animation-delay: 0.5s;
}

@keyframes btn-anim3 {
  0% {
    right: -100%;
  }
  50%,
  100% {
    right: 100%;
  }
}

.login-box a span:nth-child(4) {
  bottom: -100%;
  left: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(360deg, transparent, #ab4df7);
  animation: btn-anim4 1s linear infinite;
  animation-delay: 0.75s;
}

@keyframes btn-anim4 {
  0% {
    bottom: -100%;
  }
  50%,
  100% {
    bottom: 100%;
  }
}

.formTitle {
  padding: 20px;
  color: #591a92;
  display: flex;
  justify-content: center;
}

/* contact-formmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm */

/* socialicones 22222222222222222222222222222222 */
.locationMap {
  display: flex;
  justify-content: space-around;
  background-color: #ab4df7;
}
.socialIcones2 {
  display: flex;
  justify-content: space-evenly;
  padding: 40px;
}
.socialIcones2 img {
  width: 50px;
}

.mapIlustration {
  display: flex;
  align-items: center;
  background: #ab4df7;
}
.mapIlustration img {
  width: 200px;
}

.locationSIde {
  width: 1000px;
  height: 200px;
  margin-left: 20px;
}

.locationSIde iframe {
  width: 100%;
  height: 100%;
}

@media only screen and (max-width: 532px) {
  .mapIlustration img {
    width: 150px;
  }

  .socialIcones2{
   padding: 10px;
  }

  .locationSIde {
    height: 150px;
  }
}

/* socialicones 22222222222222222222222222222222 */

@media only screen and (max-width: 992px) {
  .socialIcones {
    padding: 0px;
    margin-top: 30px;

    padding: 0px;
  }
  .socialIconeInside {
    padding: 10px;
  }
}

@media only screen and (max-width: 768px) {
  .socialIcones {
    display: flow-root;
    padding: 0px;
    margin-top: 30px;
    padding: 0px;
  }
  .contactUsTitle {
    display: flow-root;
    justify-content: center;
    align-items: center;
  }

  .contactUsTitle h2 {
    text-align: center;
  }

  .contactIlustrat img {
    margin: auto !important;
  }

  .form {
    padding: 10px;
  }

  .login-box {
    width: 100%;
    width: 100%;
  }
}
</style>