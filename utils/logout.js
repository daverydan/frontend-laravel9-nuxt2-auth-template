import { toastSuccessUtil, toastErrorUtil } from "~/utils/toast";

export const logoutUtil = async (redirectTo) => {
  const loggedIn = window.$nuxt.$store.$auth.$state.loggedIn;
  const auth = window.$nuxt.$store.$auth;
  const router = window.$nuxt.$router;
  const toast = window.$nuxt.$toast;

  if (loggedIn) {
    await auth
      .logout()
      .then(() => {
        router.push(redirectTo);
        toastSuccessUtil("Logged out successfully");
      })
      .catch((error) => {
        toastErrorUtil(error.message);
      });
  }
};
