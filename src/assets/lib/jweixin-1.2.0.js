!(function(e, n) {
  "function" === typeof define && (define.amd || define.cmd)
    ? define(function() {
        return n(e);
      })
    : n(e, !0);
})(this, function(e, n) {
  function i(n, i, t) {
    e.WeixinJSBridge
      ? WeixinJSBridge.invoke(n, o(i), function(e) {
          c(n, e, t);
        })
      : l(n, t);
  }
  function t(n, i, t) {
    e.WeixinJSBridge
      ? WeixinJSBridge.on(n, function(e) {
          t && t.trigger && t.trigger(e), c(n, e, i);
        })
      : t
      ? l(n, t)
      : l(n, i);
  }
  function o(e) {
    return (
      (e = e || {}),
      (e.appId = A.appId),
      (e.verifyAppId = A.appId),
      (e.verifySignType = "sha1"),
      (e.verifyTimestamp = `${A.timestamp}`),
      (e.verifyNonceStr = A.nonceStr),
      (e.verifySignature = A.signature),
      e
    );
  }
  function r(e) {
    return {
      timeStamp: `${e.timestamp}`,
      nonceStr: e.nonceStr,
      package: e.package,
      paySign: e.paySign,
      signType: e.signType || "SHA1"
    };
  }
  function a(e) {
    return (
      (e.postalCode = e.addressPostalCode),
      delete e.addressPostalCode,
      (e.provinceName = e.proviceFirstStageName),
      delete e.proviceFirstStageName,
      (e.cityName = e.addressCitySecondStageName),
      delete e.addressCitySecondStageName,
      (e.countryName = e.addressCountiesThirdStageName),
      delete e.addressCountiesThirdStageName,
      (e.detailInfo = e.addressDetailInfo),
      delete e.addressDetailInfo,
      e
    );
  }
  function c(e, n, i) {
    "openEnterpriseChat" == e && (n.errCode = n.err_code),
      delete n.err_code,
      delete n.err_desc,
      delete n.err_detail;
    let t = n.errMsg;
    t || ((t = n.err_msg), delete n.err_msg, (t = s(e, t)), (n.errMsg = t)),
      (i = i || {})._complete && (i._complete(n), delete i._complete),
      (t = n.errMsg || ""),
      A.debug && !i.isInnerInvoke && alert(JSON.stringify(n));
    let o = t.indexOf(":");
    switch (t.substring(o + 1)) {
      case "ok":
        i.success && i.success(n);
        break;
      case "cancel":
        i.cancel && i.cancel(n);
        break;
      default:
        i.fail && i.fail(n);
    }
    i.complete && i.complete(n);
  }
  function s(e, n) {
    let i = e,
      t = h[i];
    t && (i = t);
    let o = "ok";
    if (n) {
      let r = n.indexOf(":");
      (o = n.substring(r + 1)) == "confirm" && (o = "ok"),
        "failed" == o && (o = "fail"),
        o.indexOf("failed_") != -1 && (o = o.substring(7)),
        o.indexOf("fail_") != -1 && (o = o.substring(5)),
        ("access denied" != (o = (o = o.replace(/_/g, " ")).toLowerCase()) &&
          "no permission to execute" != o) ||
          (o = "permission denied"),
        i == "config" && o == "function not exist" && (o = "ok"),
        "" == o && (o = "fail");
    }
    return (n = `${i}:${o}`);
  }
  function d(e) {
    if (e) {
      for (let n = 0, i = e.length; n < i; ++n) {
        let t = e[n],
          o = g[t];
        o && (e[n] = o);
      }
      return e;
    }
  }
  function l(e, n) {
    if (!(!A.debug || (n && n.isInnerInvoke))) {
      let i = h[e];
      i && (e = i),
        n && n._complete && delete n._complete,
        console.log(`"${e}",`, n || "");
    }
  }
  function u(e) {
    if (!(_ || w || A.debug || M < "6.0.2" || V.systemType < 0)) {
      let n = new Image();
      (V.appId = A.appId),
        (V.initTime = C.initEndTime - C.initStartTime),
        (V.preVerifyTime = C.preVerifyEndTime - C.preVerifyStartTime),
        N.getNetworkType({
          isInnerInvoke: !0,
          success(e) {
            V.networkType = e.networkType;
            let i =
              "https://open.weixin.qq.com/sdk/report?v=" +
              V.version +
              "&o=" +
              V.isPreVerifyOk +
              "&s=" +
              V.systemType +
              "&c=" +
              V.clientVersion +
              "&a=" +
              V.appId +
              "&n=" +
              V.networkType +
              "&i=" +
              V.initTime +
              "&p=" +
              V.preVerifyTime +
              "&u=" +
              V.url;
            n.src = i;
          }
        });
    }
  }
  function p() {
    return new Date().getTime();
  }
  function f(n) {
    T &&
      (e.WeixinJSBridge
        ? n()
        : S.addEventListener &&
          S.addEventListener("WeixinJSBridgeReady", n, !1));
  }
  function m() {
    N.invoke ||
      ((N.invoke = function(n, i, t) {
        e.WeixinJSBridge && WeixinJSBridge.invoke(n, o(i), t);
      }),
      (N.on = function(n, i) {
        e.WeixinJSBridge && WeixinJSBridge.on(n, i);
      }));
  }
  if (!e.jWeixin) {
    var g = {
        config: "preVerifyJSAPI",
        onMenuShareTimeline: "menu:share:timeline",
        onMenuShareAppMessage: "menu:share:appmessage",
        onMenuShareQQ: "menu:share:qq",
        onMenuShareWeibo: "menu:share:weiboApp",
        onMenuShareQZone: "menu:share:QZone",
        previewImage: "imagePreview",
        getLocation: "geoLocation",
        openProductSpecificView: "openProductViewWithPid",
        addCard: "batchAddCard",
        openCard: "batchViewCard",
        chooseWXPay: "getBrandWCPayRequest",
        openEnterpriseRedPacket: "getRecevieBizHongBaoRequest",
        startSearchBeacons: "startMonitoringBeacons",
        stopSearchBeacons: "stopMonitoringBeacons",
        onSearchBeacons: "onBeaconsInRange",
        consumeAndShareCard: "consumedShareCard",
        openAddress: "editAddress"
      },
      h = (function() {
        let e = {};
        for (let n in g) e[g[n]] = n;
        return e;
      })(),
      S = e.document,
      v = S.title,
      y = navigator.userAgent.toLowerCase(),
      I = navigator.platform.toLowerCase(),
      _ = !(!I.match("mac") && !I.match("win")),
      w = y.indexOf("wxdebugger") != -1,
      T = y.indexOf("micromessenger") != -1,
      k = y.indexOf("android") != -1,
      x = y.indexOf("iphone") != -1 || y.indexOf("ipad") != -1,
      M = (function() {
        let e =
          y.match(/micromessenger\/(\d+\.\d+\.\d+)/) ||
          y.match(/micromessenger\/(\d+\.\d+)/);
        return e ? e[1] : "";
      })(),
      C = {
        initStartTime: p(),
        initEndTime: 0,
        preVerifyStartTime: 0,
        preVerifyEndTime: 0
      },
      V = {
        version: 1,
        appId: "",
        initTime: 0,
        preVerifyTime: 0,
        networkType: "",
        isPreVerifyOk: 1,
        systemType: x ? 1 : k ? 2 : -1,
        clientVersion: M,
        url: encodeURIComponent(location.href)
      },
      A = {},
      P = { _completes: [] },
      L = { state: 0, data: {} };
    f(function() {
      C.initEndTime = p();
    });
    var B = !1,
      O = [],
      N = {
        config(e) {
          (A = e), l("config", e);
          let n = !1 !== A.check;
          f(function() {
            if (n) {
              i(
                g.config,
                { verifyJsApiList: d(A.jsApiList) },
                (function() {
                  (P._complete = function(e) {
                    (C.preVerifyEndTime = p()), (L.state = 1), (L.data = e);
                  }),
                    (P.success = function(e) {
                      V.isPreVerifyOk = 0;
                    }),
                    (P.fail = function(e) {
                      P._fail ? P._fail(e) : (L.state = -1);
                    });
                  let e = P._completes;
                  return (
                    e.push(function() {
                      u();
                    }),
                    (P.complete = function(n) {
                      for (let i = 0, t = e.length; i < t; ++i) {
                        e[i]();
                      }
                      P._completes = [];
                    }),
                    P
                  );
                })()
              ),
                (C.preVerifyStartTime = p());
            } else {
              L.state = 1;
              for (let e = P._completes, t = 0, o = e.length; t < o; ++t) {
                e[t]();
              }
              P._completes = [];
            }
          }),
            A.beta && m();
        },
        ready(e) {
          L.state != 0 ? e() : (P._completes.push(e), !T && A.debug && e());
        },
        error(e) {
          M < "6.0.2" || (L.state == -1 ? e(L.data) : (P._fail = e));
        },
        checkJsApi(e) {
          let n = function(e) {
            let n = e.checkResult;
            for (let i in n) {
              let t = h[i];
              t && ((n[t] = n[i]), delete n[i]);
            }
            return e;
          };
          i(
            "checkJsApi",
            { jsApiList: d(e.jsApiList) },
            ((e._complete = function(e) {
              if (k) {
                let i = e.checkResult;
                i && (e.checkResult = JSON.parse(i));
              }
              e = n(e);
            }),
            e)
          );
        },
        onMenuShareTimeline(e) {
          t(
            g.onMenuShareTimeline,
            {
              complete() {
                i(
                  "shareTimeline",
                  {
                    title: e.title || v,
                    desc: e.title || v,
                    img_url: e.imgUrl || "",
                    link: e.link || location.href,
                    type: e.type || "link",
                    data_url: e.dataUrl || ""
                  },
                  e
                );
              }
            },
            e
          );
        },
        onMenuShareAppMessage(e) {
          t(
            g.onMenuShareAppMessage,
            {
              complete(n) {
                "favorite" === n.scene
                  ? i("sendAppMessage", {
                      title: e.title || v,
                      desc: e.desc || "",
                      link: e.link || location.href,
                      img_url: e.imgUrl || "",
                      type: e.type || "link",
                      data_url: e.dataUrl || ""
                    })
                  : i(
                      "sendAppMessage",
                      {
                        title: e.title || v,
                        desc: e.desc || "",
                        link: e.link || location.href,
                        img_url: e.imgUrl || "",
                        type: e.type || "link",
                        data_url: e.dataUrl || ""
                      },
                      e
                    );
              }
            },
            e
          );
        },
        onMenuShareQQ(e) {
          t(
            g.onMenuShareQQ,
            {
              complete() {
                i(
                  "shareQQ",
                  {
                    title: e.title || v,
                    desc: e.desc || "",
                    img_url: e.imgUrl || "",
                    link: e.link || location.href
                  },
                  e
                );
              }
            },
            e
          );
        },
        onMenuShareWeibo(e) {
          t(
            g.onMenuShareWeibo,
            {
              complete() {
                i(
                  "shareWeiboApp",
                  {
                    title: e.title || v,
                    desc: e.desc || "",
                    img_url: e.imgUrl || "",
                    link: e.link || location.href
                  },
                  e
                );
              }
            },
            e
          );
        },
        onMenuShareQZone(e) {
          t(
            g.onMenuShareQZone,
            {
              complete() {
                i(
                  "shareQZone",
                  {
                    title: e.title || v,
                    desc: e.desc || "",
                    img_url: e.imgUrl || "",
                    link: e.link || location.href
                  },
                  e
                );
              }
            },
            e
          );
        },
        startRecord(e) {
          i("startRecord", {}, e);
        },
        stopRecord(e) {
          i("stopRecord", {}, e);
        },
        onVoiceRecordEnd(e) {
          t("onVoiceRecordEnd", e);
        },
        playVoice(e) {
          i("playVoice", { localId: e.localId }, e);
        },
        pauseVoice(e) {
          i("pauseVoice", { localId: e.localId }, e);
        },
        stopVoice(e) {
          i("stopVoice", { localId: e.localId }, e);
        },
        onVoicePlayEnd(e) {
          t("onVoicePlayEnd", e);
        },
        uploadVoice(e) {
          i(
            "uploadVoice",
            {
              localId: e.localId,
              isShowProgressTips: e.isShowProgressTips == 0 ? 0 : 1
            },
            e
          );
        },
        downloadVoice(e) {
          i(
            "downloadVoice",
            {
              serverId: e.serverId,
              isShowProgressTips: e.isShowProgressTips == 0 ? 0 : 1
            },
            e
          );
        },
        translateVoice(e) {
          i(
            "translateVoice",
            {
              localId: e.localId,
              isShowProgressTips: e.isShowProgressTips == 0 ? 0 : 1
            },
            e
          );
        },
        chooseImage(e) {
          i(
            "chooseImage",
            {
              scene: "1|2",
              count: e.count || 9,
              sizeType: e.sizeType || ["original", "compressed"],
              sourceType: e.sourceType || ["album", "camera"]
            },
            ((e._complete = function(e) {
              if (k) {
                let n = e.localIds;
                n && (e.localIds = JSON.parse(n));
              }
            }),
            e)
          );
        },
        getLocation(e) {},
        previewImage(e) {
          i(g.previewImage, { current: e.current, urls: e.urls }, e);
        },
        uploadImage(e) {
          i(
            "uploadImage",
            {
              localId: e.localId,
              isShowProgressTips: e.isShowProgressTips == 0 ? 0 : 1
            },
            e
          );
        },
        downloadImage(e) {
          i(
            "downloadImage",
            {
              serverId: e.serverId,
              isShowProgressTips: e.isShowProgressTips == 0 ? 0 : 1
            },
            e
          );
        },
        getLocalImgData(e) {
          !1 === B
            ? ((B = !0),
              i(
                "getLocalImgData",
                { localId: e.localId },
                ((e._complete = function(e) {
                  if (((B = !1), O.length > 0)) {
                    let n = O.shift();
                    wx.getLocalImgData(n);
                  }
                }),
                e)
              ))
            : O.push(e);
        },
        getNetworkType(e) {
          let n = function(e) {
            let n = e.errMsg;
            e.errMsg = "getNetworkType:ok";
            let i = e.subtype;
            if ((delete e.subtype, i)) e.networkType = i;
            else {
              let t = n.indexOf(":"),
                o = n.substring(t + 1);
              switch (o) {
                case "wifi":
                case "edge":
                case "wwan":
                  e.networkType = o;
                  break;
                default:
                  e.errMsg = "getNetworkType:fail";
              }
            }
            return e;
          };
          i(
            "getNetworkType",
            {},
            ((e._complete = function(e) {
              e = n(e);
            }),
            e)
          );
        },
        openLocation(e) {
          i(
            "openLocation",
            {
              latitude: e.latitude,
              longitude: e.longitude,
              name: e.name || "",
              address: e.address || "",
              scale: e.scale || 28,
              infoUrl: e.infoUrl || ""
            },
            e
          );
        },
        getLocation(e) {
          (e = e || {}),
            i(
              g.getLocation,
              { type: e.type || "wgs84" },
              ((e._complete = function(e) {
                delete e.type;
              }),
              e)
            );
        },
        hideOptionMenu(e) {
          i("hideOptionMenu", {}, e);
        },
        showOptionMenu(e) {
          i("showOptionMenu", {}, e);
        },
        closeWindow(e) {
          i("closeWindow", {}, (e = e || {}));
        },
        hideMenuItems(e) {
          i("hideMenuItems", { menuList: e.menuList }, e);
        },
        showMenuItems(e) {
          i("showMenuItems", { menuList: e.menuList }, e);
        },
        hideAllNonBaseMenuItem(e) {
          i("hideAllNonBaseMenuItem", {}, e);
        },
        showAllNonBaseMenuItem(e) {
          i("showAllNonBaseMenuItem", {}, e);
        },
        scanQRCode(e) {
          i(
            "scanQRCode",
            {
              needResult: (e = e || {}).needResult || 0,
              scanType: e.scanType || ["qrCode", "barCode"]
            },
            ((e._complete = function(e) {
              if (x) {
                let n = e.resultStr;
                if (n) {
                  let i = JSON.parse(n);
                  e.resultStr = i && i.scan_code && i.scan_code.scan_result;
                }
              }
            }),
            e)
          );
        },
        openAddress(e) {
          i(
            g.openAddress,
            {},
            ((e._complete = function(e) {
              e = a(e);
            }),
            e)
          );
        },
        openProductSpecificView(e) {
          i(
            g.openProductSpecificView,
            {
              pid: e.productId,
              view_type: e.viewType || 0,
              ext_info: e.extInfo
            },
            e
          );
        },
        addCard(e) {
          for (var n = e.cardList, t = [], o = 0, r = n.length; o < r; ++o) {
            let a = n[o],
              c = { card_id: a.cardId, card_ext: a.cardExt };
            t.push(c);
          }
          i(
            g.addCard,
            { card_list: t },
            ((e._complete = function(e) {
              let n = e.card_list;
              if (n) {
                for (let i = 0, t = (n = JSON.parse(n)).length; i < t; ++i) {
                  let o = n[i];
                  (o.cardId = o.card_id),
                    (o.cardExt = o.card_ext),
                    (o.isSuccess = !!o.is_succ),
                    delete o.card_id,
                    delete o.card_ext,
                    delete o.is_succ;
                }
                (e.cardList = n), delete e.card_list;
              }
            }),
            e)
          );
        },
        chooseCard(e) {
          i(
            "chooseCard",
            {
              app_id: A.appId,
              location_id: e.shopId || "",
              sign_type: e.signType || "SHA1",
              card_id: e.cardId || "",
              card_type: e.cardType || "",
              card_sign: e.cardSign,
              time_stamp: `${e.timestamp}`,
              nonce_str: e.nonceStr
            },
            ((e._complete = function(e) {
              (e.cardList = e.choose_card_info), delete e.choose_card_info;
            }),
            e)
          );
        },
        openCard(e) {
          for (var n = e.cardList, t = [], o = 0, r = n.length; o < r; ++o) {
            let a = n[o],
              c = { card_id: a.cardId, code: a.code };
            t.push(c);
          }
          i(g.openCard, { card_list: t }, e);
        },
        consumeAndShareCard(e) {
          i(
            g.consumeAndShareCard,
            { consumedCardId: e.cardId, consumedCode: e.code },
            e
          );
        },
        chooseWXPay(e) {
          i(g.chooseWXPay, r(e), e);
        },
        openEnterpriseRedPacket(e) {
          i(g.openEnterpriseRedPacket, r(e), e);
        },
        startSearchBeacons(e) {
          i(g.startSearchBeacons, { ticket: e.ticket }, e);
        },
        stopSearchBeacons(e) {
          i(g.stopSearchBeacons, {}, e);
        },
        onSearchBeacons(e) {
          t(g.onSearchBeacons, e);
        },
        openEnterpriseChat(e) {
          i(
            "openEnterpriseChat",
            { useridlist: e.userIds, chatname: e.groupName },
            e
          );
        }
      },
      E = 1,
      b = {};
    return (
      S.addEventListener(
        "error",
        function(e) {
          if (!k) {
            let n = e.target,
              i = n.tagName,
              t = n.src;
            if (
              (i == "IMG" || i == "VIDEO" || i == "AUDIO" || "SOURCE" == i) &&
              t.indexOf("wxlocalresource://") != -1
            ) {
              e.preventDefault(), e.stopPropagation();
              let o = n["wx-id"];
              if ((o || ((o = E++), (n["wx-id"] = o)), b[o])) {
                return;
              }
              (b[o] = !0),
                wx.ready(function() {
                  wx.getLocalImgData({
                    localId: t,
                    success(e) {
                      n.src = e.localData;
                    }
                  });
                });
            }
          }
        },
        !0
      ),
      S.addEventListener(
        "load",
        function(e) {
          if (!k) {
            let n = e.target,
              i = n.tagName;
            n.src;
            if (i == "IMG" || i == "VIDEO" || i == "AUDIO" || i == "SOURCE") {
              let t = n["wx-id"];
              t && (b[t] = !1);
            }
          }
        },
        !0
      ),
      n && (e.wx = e.jWeixin = N),
      N
    );
  }
});
