import { toast as reactToast } from 'react-toastify';

const toast = (message?: string, type: 'error' | 'success' | 'warn' | 'info' = 'error') => {
    if (!message) return null;

    return reactToast[type](message, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored'
    });
};

export default toast;
