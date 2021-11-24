import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

const messages = {
  en: {
    // navbar
    home: "Home",
    csr: "CSR",
    career: "Career",
    about_us: "About Us",
    team: "Team",
    history: "History",
    values: "Values",
    company: "Company-Mission",
    partners: "Partners",
    local_partners: "Local Partners",
    foreign_partners: "Foreign Partners",
    exclusive_brands: "Partners",
    news: "News",
    blog: "Blog",
    contact: "Contact",
    copyright: "All right reserved",
    created_by: "Created by LLC" + ' "' + "Cyber Solutions" + '"',
    address: "King Parnavaz N66",
    login: "login",
    logout: "Logout",
    exclusiveMedicaments: "Products",
    exclusive: "Exclusive Brands",
  },
  ka: {
    // navbar
    home: "მთავარი",
    csr: "CSR",
    career: "კარიერა",
    about_us: "ჩვენ შესახებ",
    team: "გუნდი",
    history: "ისტორია",
    values: "ღირებულებები",
    company: "კომპანია - მისია",
    partners: "პარტნიორები",
    local_partners: "ადგილობრივი პარტნიორები",
    foreign_partners: "უცხოელი პარტნიორები",
    exclusive_brands: "პარტნიორები",
    news: "სიახლეები",
    blog: "ბლოგი",
    contact: "კონტაქტი",
    copyright: "ყველა უფლება დაცულია",
    created_by: "შექმნილია შპს" + ' "' + "კიბერ სოლუშენს" + '" ' + "-ის მიერ",
    address: "ფარნავაზ მეფის N66",
    login: "შესვლა",
    logout: "სისტემიდან გასვლა",
    exclusiveMedicaments: " პროდუქტები",
    exclusive: "ექსკლუზიური ბრენდები",
  },
};

var lang = "ka";
if (localStorage.getItem("lang")) {
  lang = localStorage.getItem("lang");
}

export const i18n = new VueI18n({
  locale: lang,
  messages,
});

export default i18n;
