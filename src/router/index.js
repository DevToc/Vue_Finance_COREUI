import { createRouter, createWebHistory } from "vue-router";
import SplashView from "../views/SplashView.vue";
import OnboardingView from "../views/OnboardingView.vue";
import SignupView from "../views/SignupView.vue";
import VerifyOTPView from "../views/VerifyOTPView.vue";
import AccountCreatedView from "../views/AccountCreatedView.vue";
import SigninView from "../views/SigninView.vue";
import AccountRenterView from "../views/AccountRenterView.vue";
import AccountOwnerView from "../views/AccountOwnerView.vue";
import ProfileView from "../views/ProfileView.vue";
import UpdateBankView from "../views/UpdateBankView.vue";
import HomeView from "../views/HomeView.vue";
import ContractListView from "../views/ContractListView.vue";
import SendSuccessView from "../views/SendSuccessView.vue";
import HomeRenterView from "../views/HomeRenterView.vue";
import ApplyLoanView from "../views/ApplyLoanView.vue";
import LoanSuccessView from "../views/LoanSuccessView.vue";
import NotificationView from "../views/NotificationView.vue";

const routes = [
  {
    path: "/",
    name: "Splash",
    component: SplashView,
  },
  {
    path: "/onboarding",
    name: "onboarding",
    component: OnboardingView,
  },
  {
    path: "/signup",
    name: "signup",
    component: SignupView,
  },
  {
    path: "/verifyotp",
    name: "verifyotp",
    component: VerifyOTPView,
  },
  {
    path: "/account/created",
    name: "account created",
    component: AccountCreatedView,
  },
  {
    path: "/signin",
    name: "signin",
    component: SigninView,
  },
  {
    path: "/account/renter",
    name: "account renter",
    component: AccountRenterView,
  },

  {
    path: "/account/owner",
    name: "account owner",
    component: AccountOwnerView,
  },

  {
    path: "/account/profile",
    name: "profile",
    component: ProfileView,
  },

  {
    path: "/account/bank",
    name: "Bank",
    component: UpdateBankView,
  },
  {
    path: "/home",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/contracts/list",
    name: "ContractsList",
    component: ContractListView,
  },
  {
    path: "/send/success",
    name: "send Success",
    component: SendSuccessView,
  },
  {
    path: "/home/renter",
    name: "",
    component: HomeRenterView,
  },
  {
    path: "/loan",
    name: "Apply Loan",
    component: ApplyLoanView,
  },
  {
    path: "/loan/success",
    name: "success Loan",
    component: LoanSuccessView,
  },
  {
    path: "/notification",
    name: "Notification",
    component: NotificationView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
