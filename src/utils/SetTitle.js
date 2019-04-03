export const setTitle = getTitle => {
  const title = getTitle;
  if (title) {
    document.title = title;
  }
  let mobile = navigator.userAgent.toLowerCase();
  if (/iphone|ipad|ipod/.test(mobile)) {
    let iframe = document.createElement("iframe");
    iframe.style.display = "none";
    var iframeCallback = function() {
      setTimeout(function() {
        iframe.removeEventListener("load", iframeCallback);
        document.body.removeChild(iframe);
      }, 0);
    };
    iframe.addEventListener("load", iframeCallback);
    document.body.appendChild(iframe);
  }
};
