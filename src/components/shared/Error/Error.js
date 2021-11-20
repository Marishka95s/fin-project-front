import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export default function Error({ errorMessage }) {
  toast.error(`${errorMessage}`);

  return (
    <div>
      <ToastContainer
        draggable={false}
        position={'top-right'}
        closeButton
        closeOnClick
        autoClose={8000}
        hideProgressBar={false}
        newestOnTop={false}
        pauseOnVisibilityChange
        pauseOnHover
      />
    </div>
  );
}
