import {
  ToastContainer,
  toast,
  ToastOptions,
  ToastPosition
} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const notify = (text: string, action: "success" | "error") => {
  const otherProps: ToastOptions<ToastPosition> = {
    position: "top-center",
    autoClose: 3000
  };

  if (action === "success") {
    toast.success(text, {
      className: `text-white px-4 py-2 bg-green-400`,
      ...otherProps
    });
  }

  if (action === "error") {
    toast.error(text, {
      className: "text-white bg-[#EB5757] px-4 py-2",
      ...otherProps
    });
  }
};

const NotifyContainer = () => {
  return <ToastContainer />;
};

export default NotifyContainer;
