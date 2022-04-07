import { toast } from 'react-toastify';

class AlertToastSingleton {
  private static instance: AlertToastSingleton;
  private closeTime:number = 2000;
  public static getInstance() {
    if (!AlertToastSingleton.instance) {
      AlertToastSingleton.instance = new AlertToastSingleton();
    }
    return AlertToastSingleton.instance;
  }

  public success(message: string) {
    toast.success(message, {
      position: 'top-right',
      autoClose: this.closeTime,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  }

  public info(message: string) {
    toast.success(message, {
      position: 'top-right',
      autoClose: this.closeTime,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  }

  public warn(message: string) {
    toast.warn(message, {
      position: 'top-right',
      autoClose: this.closeTime,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  }

  public error(message: string) {
    toast.error(message, {
      position: 'top-right',
      autoClose: this.closeTime,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  }
}

export const toastify = {
 success: (message: string) => {
  const toastify = AlertToastSingleton.getInstance();
  toastify.success(message)
 },
 info: (message: string) => {
  const toastify = AlertToastSingleton.getInstance();
  toastify.info(message)
 },
 warn: (message: string) => {
  const toastify = AlertToastSingleton.getInstance();
  toastify.warn(message)
 },
 error: (message: string) => {
  const toastify = AlertToastSingleton.getInstance();
  toastify.error(message)
 },
};