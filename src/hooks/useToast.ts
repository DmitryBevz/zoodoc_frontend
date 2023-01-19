import { toast, ToastOptions } from "react-toastify";

export const useToast = () => {
  const options: ToastOptions = {
    position: "bottom-right",
    closeOnClick: true,
    autoClose: 2000,
    hideProgressBar: true,
    rtl: false,
    theme: "dark",
    style: {
      borderRadius: 15,
    },
  };
  return (text: string, type?: string, params?: ToastOptions) => {
    if (type === "error")
      return toast.error(text, {
        ...options,
        ...params,
      });
    return toast(text, {
      ...options,
      ...params,
    });
  };
};
