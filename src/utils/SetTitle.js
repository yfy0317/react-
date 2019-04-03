export const setTitle = getTitle => {
  const title = getTitle;
  if (title) {
    document.title = title;
  }
  const mobile = navigator.userAgent.toLowerCase();
  if (/iphone|ipad|ipod/.test(mobile)) {
    const iframe = document.createElement("iframe");
    iframe.style.display = "none";
    var iframeCallback = function() {
      setTimeout(() => {
        iframe.removeEventListener("load", iframeCallback);
        document.body.removeChild(iframe);
      }, 0);
    };
    iframe.addEventListener("load", iframeCallback);
    document.body.appendChild(iframe);
  }
};
