import Vue from "vue";
import router from "vue-router";
import PartnersDetail from "./components/Partners/PartnersDetail";
import TeamDetail from "./components/Team/TeamDetail.vue";
import NewsDetails from "./views/UserPages/News/Details/NewsDetails.vue";
import BlogsDetails from "./views/UserPages/Blog/Details/BlogsDetails.vue";
import CsrDetails from "./components/Csr/CsrDetails.vue";
import PartnersForeignDetail from "./components/Partners/PartnersForeignDetail.vue";

Vue.use(router);

const VueRouter = new router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "main",
      component: () => import("./views/UserPages/Main/MainPage.vue"),
    },
    {
      path: "*",
      name: "NotFound",
      component: () => import("./views/UserPages/NotFound/NotFound.vue"),
    },
    {
      path: "/csr",
      name: "csr",
      component: () => import("./views/UserPages/Csr/CsrPage.vue"),
    },
    {
      path: "/csr/:id",
      name: "csrDetails",
      component: CsrDetails,
    },
    {
      path: "/news",
      name: "News",
      component: () => import("./views/UserPages/News/NewsMain.vue"),
    },
    {
      path: "/news/:id",
      name: "NewsDetails",
      component: NewsDetails,
    },

    {
      path: "/blog",
      name: "BlogMain",
      component: () => import("./views/UserPages/Blog/Main/BlogMain.vue"),
    },

    {
      path: "/blog/:id",
      name: "BlogsDetails",
      component: BlogsDetails,
    },

    {
      path: "/contact",
      name: "contact",
      component: () => import("./views/UserPages/Contact/ContactPage.vue"),
    },
    {
      path: "/company",
      name: "company",
      component: () => import("./views/UserPages/Company/CompanyPage.vue"),
    },
    {
      path: "/values",
      name: "values",
      component: () => import("./views/UserPages/Values/ValuesPage.vue"),
    },
    {
      path: "/history",
      name: "HistoryMain",
      component: () => import("./views/UserPages/History/HistoryMain.vue"),
    },
    {
      path: "/team",
      name: "team",
      component: () => import("./views/UserPages/Team/TeamPage.vue"),
    },
    {
      path: "/exclusive",
      name: "exclusive",
      component: () => import("./views/UserPages/Brands/ExclusiveBrand.vue"),
    },
    {
      path: "/exclusiveMedicaments",
      name: "exclusiveMedicaments",
      component: () =>
        import("./views/UserPages/Brands/ExclusiveMedicaments.vue"),
    },
    {
      path: "/exclusive/:id",
      name: "exclusiveDetail",
      component: () =>
        import("./views/UserPages/Brands/ExclusiveDetailBrand.vue"),
    },
    {
      path: "/local",
      name: "local",
      component: () => import("./views/UserPages/Partners/LocalPartners.vue"),
    },
    {
      path: "/foreign",
      name: "foreign",
      component: () => import("./views/UserPages/Partners/ForeignPartners.vue"),
    },
    {
      path: "/career",
      name: "VacancyMain",
      component: () => import("./views/UserPages/Vacancy/VacancyMain.vue"),
    },
    {
      path: "/partners/local/:id",
      name: "partnersDetail",
      component: PartnersDetail,
    },
    {
      path: "/partners/foreign/:id",
      name: "partnersForeignDetail",
      component: PartnersForeignDetail,
    },
    {
      path: "/team/:id",
      name: "teamDetail",
      component: TeamDetail,
    },
    {
      path: "/admin",
      name: "adminlogin",
      component: () => import("./views/AdminPage/AdminLogin.vue"),
    },
    {
      path: "/adminpage",
      name: "adminpage",
      component: () => import("./views/AdminPage/AdminPage.vue"),
      children: [
        {
          path: "",
          name: "addteam",
          component: () => import("./components/Admin/GetComponents/Team.vue"),
        },
        {
          path: "addLocalPartners",
          name: "addLocalPartners",
          component: () =>
            import("./components/Admin/GetComponents/LocalPartners.vue"),
        },
        {
          path: "addForeignPartners",
          name: "addForeignPartners",
          component: () =>
            import("./components/Admin/GetComponents/ForeignPartners.vue"),
        },
        {
          path: "addExclusiveBrands",
          name: "addExclusiveBrands",
          component: () =>
            import("./components/Admin/GetComponents/ExclusiveBrands.vue"),
        },
        {
          path: "addNews",
          name: "addNews",
          component: () => import("./components/Admin/GetComponents/News.vue"),
        },
        {
          path: "addBlogs",
          name: "addBlogs",
          component: () => import("./components/Admin/GetComponents/Blogs.vue"),
        },
        {
          path: "addCsr",
          name: "addCsr",
          component: () => import("./components/Admin/GetComponents/Csr.vue"),
        },
        {
          path: "addCareer",
          name: "addCareer",
          component: () =>
            import("./components/Admin/GetComponents/Career.vue"),
        },
      ],
    },
  ],
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

export default VueRouter;
