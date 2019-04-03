import fetch from "sx-fetch";
import { Toast } from "antd-mobile";

const fetchinit = init => {
  fetch.axiosInstance.interceptors.request.use(
    cfg => {
      init.setState({ showLoading: "true" });
      return cfg;
    },
    error => Promise.reject(error)
  );
  fetch.axiosInstance.interceptors.response.use(
    response => {
      init.setState({ showLoading: "false" });
      return response;
    },
    error => {
      init.setState({ showLoading: "false" });
      return Promise.reject(error);
    }
  );
  fetch.init({
    baseURL: "/ptm",
    onShowErrorTip: (err, errorTip) => {
      if (errorTip) Toast.info("请求超时，请稍后重试");
    },
    onShowSuccessTip: (response, successTip) => {
      switch (response.data.msgCode) {
        case "0000":

        default:
      }
    },
    isMock: url => url.startsWith("/mock")
  });
};

export default fetchinit;
