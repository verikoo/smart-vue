import Vue from 'vue'
import router from 'vue-router'

Vue.use(router);

const VueRouter = new router({
    routes: [
        {
            path:"/",
            name:"main",
            component:()=> import("./views/UserPages/MainPage.vue") 
        },
        {
            path:"/csr",
            name:"csr",
            component:()=> import("./views/UserPages/CsrPage.vue") 
        },
        
        {
            path: "/career",
            name:"career",
            component:()=> import("./views/UserPages/CareerPage.vue")

        },
       {
           path:"/about",
           name:"about",
           component:()=> import("./views/UserPages/AboutPage.vue")
       },
      
        {
            path:"/partners",
            name:"partners",
            component: ()=> import("./views/UserPages/PartnersPage.vue")
        },
        {
            path:"/news",
            name:"name",
            component: ()=> import("./views/UserPages/NewsPage.vue")
        },

        {
            path:"/blog",
            name:"blog",
            component:()=> import("./views/UserPages/BlogPage.vue")
        },
       
        {
            path:"/contact",
            name:"contact",
            component:()=> import("./views/UserPages/ContactPage.vue")
        },
        {
            path:"/company",
            name: "company",
            component: ()=>import("./views/UserPages/CompanyPage.vue")
        },
        {
            path:"/values",
            name:"values",
            component: ()=>import("./views/UserPages/ValuesPage.vue")
        },
        {
            path:"/history",
            name:"history",
            component: ()=>import("./views/UserPages/HistoryPage.vue")
        },
        {
            path:"/team",
            name:"team",
            component:()=>import("./views/UserPages/TeamPage.vue")
        },
        {
            path: "/fo",
            name:"fo",
            component: ()=>import("./components/Header/Navbar/Footer.vue")
        },
        {
            path: "/exclusive",
            name: "exclusive",
            component: ()=>import("./views/UserPages/ExclusiveBrand.vue")
        },
        {
            path:"/local",
            name:"local",
            component:()=>import("./views/UserPages/LocalPartners.vue")
        },
        {
            path:"/foreign",
            name:"foreign",
            component:()=>import("./views/UserPages/ForeignPartners.vue")
        },
        {
            path:"/mobilenav",
            name:"mobilenav",
            component: ()=>import("./components/Header/Navbar/MobNavbar.vue")
        }
        
        
       
       
    ],
   
})

export default VueRouter
