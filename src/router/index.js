import { createRouter, createWebHistory } from 'vue-router'
import SplashView from '../views/SplashView.vue'
import OnboardingView from '../views/OnboardingView.vue'
import SignupView from '../views/SignupView.vue'
import VerifyOTPView from '../views/VerifyOTPView.vue'
import AccountCreatedView from '../views/AccountCreatedView.vue'
import SigninView from '../views/SigninView.vue'
import AccountRenterView from '../views/AccountRenterView.vue'
import AccountOwnerView from '../views/AccountOwnerView.vue'
import ProfileView from '../views/ProfileView.vue'
import UpdateBankView from '../views/UpdateBankView.vue'
import HomeView from '../views/HomeView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: SplashView
  },
  {
    path: '/onboarding',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: OnboardingView
  },
  {
    path: '/signup',
    name: 'signup',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: SignupView
  },
  {
    path: '/verifyotp',
    name: 'verifyotp',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: VerifyOTPView
  },
  {
    path: '/created',
    name: 'account_created',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: AccountCreatedView
  },
  {
    path: '/signin',
    name: 'signin',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: SigninView
  },
  {
    path: '/account/renter',
    name: 'accountrenter',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: AccountRenterView
  },
  
  {
    path: '/account/owner',
    name: 'accountowner',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: AccountOwnerView
  },
  
  {
    path: '/account/profile',
    name: 'profile',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: ProfileView
  },
  
  {
    path: '/account/bank',
    name: 'Bank',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: UpdateBankView
  },
  {
    path: '/home',
    name: 'Home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: HomeView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
