<template>
  <div id="register" style="height: 80vh">
    <div class="min-h-full flex flex-col justify-center pt-12 px-6 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-md">
        <!-- <nuxt-link to="/">
          <img class="mx-auto h-12 w-auto" src="/images/logo.svg"
        /></nuxt-link> -->
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Create an account
        </h2>
        <!-- <p class="mt-2 text-center text-sm text-gray-600">
          Or
          <a href="#" class="font-medium text-dodger-blue hover:opacity-75">
            start your 14-day free trial
          </a>
        </p> -->
      </div>

      <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div class="bg-white py-8 px-4 shadow-xl rounded-lg sm:px-10">
          <!-- Error -->
          <div v-if="server_error" class="rounded-md bg-red-50 p-4 mb-5">
            <div class="flex">
              <div class="flex-shrink-0">
                <svg
                  class="h-5 w-5 text-red-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div class="ml-3">
                <h3 class="text-sm font-medium text-red-800">Error</h3>
                <div class="mt-2 text-sm text-red-700">
                  <p>
                    {{ server_error }}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <form class="space-y-6" @submit.prevent="register">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700">
                Name
              </label>
              <div class="mt-1">
                <input
                  id="name"
                  name="name"
                  v-model="form.name"
                  type="text"
                  autocomplete="name"
                  required
                  class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-dodger-blue focus:border-dodger-blue sm:text-sm"
                  :class="this.validations.name.message && 'border-red-600'"
                />
              </div>
              <div
                v-if="this.validations.name.message"
                class="text-red-600 text-sm mt-1"
              >
                {{ this.validations.name.message }}
              </div>
            </div>

            <div>
              <label
                for="email"
                class="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <div class="mt-1">
                <input
                  id="email"
                  name="email"
                  v-model="form.email"
                  type="email"
                  autocomplete="email"
                  required
                  class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-dodger-blue focus:border-dodger-blue sm:text-sm"
                  :class="this.validations.email.message && 'border-red-600'"
                />
              </div>
              <div
                v-if="this.validations.email.message"
                class="text-red-600 text-sm mt-1"
              >
                {{ this.validations.email.message }}
              </div>
            </div>

            <div>
              <label
                for="password"
                class="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div class="mt-1">
                <input
                  id="password"
                  name="password"
                  v-model="form.password"
                  type="password"
                  autocomplete="current-password"
                  required
                  class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-dodger-blue focus:border-dodger-blue sm:text-sm"
                  :class="this.validations.password.message && 'border-red-600'"
                />
              </div>
              <div
                v-if="this.validations.password.message"
                class="text-red-600 text-sm mt-1"
              >
                {{ this.validations.password.message }}
              </div>
            </div>

            <div>
              <label
                for="password_confirm"
                class="block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <div class="mt-1">
                <input
                  id="password_confirm"
                  name="password_confirm"
                  v-model="form.password_confirm"
                  type="password"
                  autocomplete="confirm-password"
                  required
                  class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-dodger-blue focus:border-dodger-blue sm:text-sm"
                  :class="
                    this.validations.password_confirm.message &&
                    'border-red-600'
                  "
                />
              </div>
              <div
                v-if="this.validations.password_confirm.message"
                class="text-red-600 text-sm mt-1"
              >
                {{ this.validations.password_confirm.message }}
              </div>
            </div>

            <div>
              <button
                type="submit"
                class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-dodger-blue hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-dodger-blue"
              >
                Register
              </button>
            </div>

            <div class="flex items-center justify-between">
              <div class="text-sm">
                <nuxt-link
                  to="/login"
                  class="font-medium text-dodger-blue hover:opacity-75"
                >
                  Already have an account?
                </nuxt-link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { toastSuccessUtil } from "~/utils/toast";

export default {
  middleware: "guest",

  data() {
    return {
      server_error: "",
      form: {
        name: "Danny Avery",
        email: "danny.w.avery@gmail.com",
        password: "password",
        password_confirm: "password",
      },
      validations: {
        name: {
          valid: true,
          message: "",
        },
        email: {
          valid: true,
          message: "",
        },
        password: {
          valid: true,
          message: "",
        },
        password_confirm: {
          valid: true,
          message: "",
        },
      },
    };
  },

  methods: {
    validateRegistration() {
      // name
      if (this.form.name == "") {
        this.validations.name.valid = false;
        this.validations.name.message = "A name is required";
      } else {
        this.validations.name.valid = true;
        this.validations.name.message = "";
      }
      // email
      const emailCheck =
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (this.form.email == "" || !this.form.email.match(emailCheck)) {
        this.validations.email.valid = false;
        this.validations.email.message = "Please enter a valid email address";
      } else {
        this.validations.email.valid = true;
        this.validations.email.message = "";
      }
      // password - from DropBox (this.passwordStrength.score < 4)
      //  || this.password.length < 8
      if (this.form.password == "") {
        this.validations.password.valid = false;
        this.validations.password.message =
          "A secure password must be entered.";
      } else {
        this.validations.password.valid = true;
        this.validations.password.message = "";
      }
      // password_confirm
      if (
        this.form.password_confirm == "" ||
        this.form.password_confirm != this.form.password
      ) {
        this.validations.password_confirm.valid = false;
        this.validations.password_confirm.message = "Passwords must match";
      } else {
        this.validations.password_confirm.valid = true;
        this.validations.password_confirm.message = "";
      }
      // return
      return this.validations.name.valid &&
        this.validations.email.valid &&
        this.validations.password.valid &&
        this.validations.password_confirm.valid
        ? true
        : false;
    },

    register() {
      if (this.validateRegistration()) {
        // Get http cookie
        this.$axios
          .get("/sanctum/csrf-cookie")
          .then(
            function () {
              // Register
              this.$axios
                .post("/api/register", this.form)
                .then(
                  function (response) {
                    console.log("success");
                    this.$router.push("/login");
                    toastSuccessUtil("Registered successfully");
                    // this.$auth
                    //   .loginWith("laravelSanctum", { data: this.form })
                    //   .then(
                    //     function () {
                    //       // ... Handle success
                    //     }.bind(this)
                    //   );
                  }.bind(this)
                )
                .catch(
                  function (error) {
                    if (error.response) {
                      const errors = error.response.data.errors;
                      for (const error in errors) {
                        this.validations[error].message = errors[error][0];
                      }
                    } else {
                      this.server_error = `${error.message} - please try again.`;
                    }
                  }.bind(this)
                );
            }.bind(this)
          )
          .catch(
            function (error) {
              console.log(error.message);
              this.server_error = `${error.message} - please try again.`;
            }.bind(this)
          );
      }
    },
  },
};
</script>
