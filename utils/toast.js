// docs: https://github.com/shakee93/vue-toasted

const toastUtil = (type, icon, message, duration = 3000) => {
  const toast = window.$nuxt.$toast;
  toast.show(message, {
    type,
    position: "top-center",
    className: "custom-class",
    iconPack: "fontawesome",
    icon: {
      name: icon,
    },
    duration,
    // dontClose: true,
    theme: "toasted-primary",
  });
};

const toastSuccessUtil = (message, duration = 3000) => {
  toastUtil("success", "check", message, duration);
};

const toastErrorUtil = (message, duration = 3000) => {
  toastUtil("error", "exclamation-triangle", message, duration);
};

const toastInfoUtil = (message, duration = 3000) => {
  toastUtil("info", "info-circle", message, duration);
};

export { toastSuccessUtil, toastErrorUtil, toastInfoUtil };
