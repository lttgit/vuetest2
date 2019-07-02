import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter)
//import 会静态编译  require动态编译
import Home from '../pages/Home.vue'
import Mine from '../pages/Mine.vue'
import HealthEvaluate from '../pages/HealthEvaluate.vue'
import TreatmentKnow from '../pages/TreatmentKnow.vue'
import Login from '../pages/Login.vue'
import Reg from "../pages/Reg.vue"
import Onlineservice from "../pages/Onlineservice.vue"
import Msgnotification from "../pages/Msgnotification.vue"
import Allactivies from "../pages/Allactivies.vue"
import Treatmentknowdetail from "../pages/Treatmentknowdetail.vue"
import MsgNotificationDetail from "../pages/MsgNotificationDetail"
import HealthCardiovascular from "../pages/HealthCardiovascular"
import HealthCardiovascularDetail from "../pages/HealthCardiovascularDetail"
import PersonalCertification from "../pages/PersonalCertification"
import HealthInfo from "../pages/HealthInfo"
import Point from "../pages/Point"
import Setting from "../pages/Setting"

let routes=[
    {path:'/home',component:Home},
    {path:'/mine',component:Mine},
    {path:'/HealthEvaluate',component:HealthEvaluate},
    {path:'/TreatmentKnow',component:TreatmentKnow},
    {path:'/login',component:Login},
    {path:'/reg',component:Reg},
    {path:"/onlineservice",component:Onlineservice},
    {path:"/Msgnotification", component:Msgnotification },
    {path:"/Allactivies",component:Allactivies},
    {path:"/Treatmentknowdetail",component:Treatmentknowdetail},
    {path:"/MsgNotificationDetail",component:MsgNotificationDetail},
    {path:"/HealthCardiovascular",component:HealthCardiovascular},
    {path:"/HealthCardiovascularDetail",component:HealthCardiovascularDetail},
    {path:"/PersonalCertification",component:PersonalCertification},
    {path:"/HealthInfo",component:HealthInfo},
    {path:"/Point",component:Point},
    {path:"/Setting",component:Setting},
    {path:'/',redirect:'/home'},
    
]


let router=new VueRouter({
    routes
});
export default router;