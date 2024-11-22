import Toastify from "toastify-js";

export const Notification = (text) => {
  return Toastify({
    text,
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "green",
    },
  }).showToast();
};
