import { ref as D, reactive as J, getCurrentInstance as Q, defineComponent as b, computed as $, createVNode as i, provide as X, watchEffect as ee, inject as ne, mergeProps as j, openBlock as te, createBlock as ue, unref as oe, toHandlers as re, withCtx as ae, renderSlot as ie } from "vue";
const p = (e) => e != null, ce = (e) => typeof e == "function", k = (e) => e !== null && typeof e == "object", R = (e) => typeof e == "number" || /^\d+(\.\d+)?$/.test(e), se = () => le ? /ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase()) : !1, L = Object.assign, le = typeof window < "u";
function _(e, n) {
  const t = n.split(".");
  let u = e;
  return t.forEach((r) => {
    var c;
    u = k(u) && (c = u[r]) != null ? c : "";
  }), u;
}
const m = [Number, String], de = {
  type: Boolean,
  default: !0
}, d = (e) => ({
  type: String,
  default: e
});
var fe = typeof window < "u", h, S;
function ge() {
  if (!h && (h = D(0), S = D(0), fe)) {
    const e = () => {
      h.value = window.innerWidth, S.value = window.innerHeight;
    };
    e(), window.addEventListener("resize", e, { passive: !0 }), window.addEventListener("orientationchange", e, { passive: !0 });
  }
  return { width: h, height: S };
}
se();
const Ee = (e) => e.stopPropagation();
function me(e, n) {
  (typeof e.cancelable != "boolean" || e.cancelable) && e.preventDefault(), n && Ee(e);
}
ge();
function g(e) {
  if (p(e))
    return R(e) ? `${e}px` : String(e);
}
function ve(e) {
  if (p(e)) {
    if (Array.isArray(e))
      return {
        width: g(e[0]),
        height: g(e[1])
      };
    const n = g(e);
    return {
      width: n,
      height: n
    };
  }
}
const Be = /-(\w)/g, N = (e) => e.replace(Be, (n, t) => t.toUpperCase()), pe = (e) => e.replace(/([A-Z])/g, "-$1").toLowerCase().replace(/^-/, ""), { hasOwnProperty: be } = Object.prototype;
function ye(e, n, t) {
  const u = n[t];
  !p(u) || (!be.call(e, t) || !k(u) ? e[t] = u : e[t] = V(Object(e[t]), u));
}
function V(e, n) {
  return Object.keys(n).forEach((t) => {
    ye(e, n, t);
  }), e;
}
var he = {
  name: "\u59D3\u540D",
  tel: "\u7535\u8BDD",
  save: "\u4FDD\u5B58",
  confirm: "\u786E\u8BA4",
  cancel: "\u53D6\u6D88",
  delete: "\u5220\u9664",
  loading: "\u52A0\u8F7D\u4E2D...",
  noCoupon: "\u6682\u65E0\u4F18\u60E0\u5238",
  nameEmpty: "\u8BF7\u586B\u5199\u59D3\u540D",
  addContact: "\u6DFB\u52A0\u8054\u7CFB\u4EBA",
  telInvalid: "\u8BF7\u586B\u5199\u6B63\u786E\u7684\u7535\u8BDD",
  vanCalendar: {
    end: "\u7ED3\u675F",
    start: "\u5F00\u59CB",
    title: "\u65E5\u671F\u9009\u62E9",
    weekdays: ["\u65E5", "\u4E00", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D"],
    monthTitle: (e, n) => `${e}\u5E74${n}\u6708`,
    rangePrompt: (e) => `\u6700\u591A\u9009\u62E9 ${e} \u5929`
  },
  vanCascader: {
    select: "\u8BF7\u9009\u62E9"
  },
  vanPagination: {
    prev: "\u4E0A\u4E00\u9875",
    next: "\u4E0B\u4E00\u9875"
  },
  vanPullRefresh: {
    pulling: "\u4E0B\u62C9\u5373\u53EF\u5237\u65B0...",
    loosing: "\u91CA\u653E\u5373\u53EF\u5237\u65B0..."
  },
  vanSubmitBar: {
    label: "\u5408\u8BA1:"
  },
  vanCoupon: {
    unlimited: "\u65E0\u95E8\u69DB",
    discount: (e) => `${e}\u6298`,
    condition: (e) => `\u6EE1${e}\u5143\u53EF\u7528`
  },
  vanCouponCell: {
    title: "\u4F18\u60E0\u5238",
    count: (e) => `${e}\u5F20\u53EF\u7528`
  },
  vanCouponList: {
    exchange: "\u5151\u6362",
    close: "\u4E0D\u4F7F\u7528",
    enable: "\u53EF\u7528",
    disabled: "\u4E0D\u53EF\u7528",
    placeholder: "\u8F93\u5165\u4F18\u60E0\u7801"
  },
  vanAddressEdit: {
    area: "\u5730\u533A",
    postal: "\u90AE\u653F\u7F16\u7801",
    areaEmpty: "\u8BF7\u9009\u62E9\u5730\u533A",
    addressEmpty: "\u8BF7\u586B\u5199\u8BE6\u7EC6\u5730\u5740",
    postalEmpty: "\u90AE\u653F\u7F16\u7801\u4E0D\u6B63\u786E",
    addressDetail: "\u8BE6\u7EC6\u5730\u5740",
    defaultAddress: "\u8BBE\u4E3A\u9ED8\u8BA4\u6536\u8D27\u5730\u5740"
  },
  vanAddressList: {
    add: "\u65B0\u589E\u5730\u5740"
  }
};
const z = D("zh-CN"), I = J({
  "zh-CN": he
}), $e = {
  messages() {
    return I[z.value];
  },
  use(e, n) {
    z.value = e, this.add({ [e]: n });
  },
  add(e = {}) {
    V(I, e);
  }
};
var xe = $e;
function Se(e) {
  const n = N(e) + ".";
  return (t, ...u) => {
    const r = xe.messages(), c = _(r, n + t) || _(r, t);
    return ce(c) ? c(...u) : c;
  };
}
function F(e, n) {
  return n ? typeof n == "string" ? ` ${e}--${n}` : Array.isArray(n) ? n.reduce(
    (t, u) => t + F(e, u),
    ""
  ) : Object.keys(n).reduce(
    (t, u) => t + (n[u] ? F(e, u) : ""),
    ""
  ) : "";
}
function Ce(e) {
  return (n, t) => (n && typeof n != "string" && (t = n, n = ""), n = n ? `${e}__${n}` : e, `${n}${F(n, t)}`);
}
function y(e) {
  const n = `van-${e}`;
  return [
    n,
    Ce(n),
    Se(n)
  ];
}
const De = "van-hairline", Fe = `${De}--surround`;
function x(e) {
  return e.install = (n) => {
    const { name: t } = e;
    t && (n.component(t, e), n.component(N(`-${t}`), e));
  }, e;
}
const we = {
  to: [String, Object],
  url: String,
  replace: Boolean
};
function Pe({
  to: e,
  url: n,
  replace: t,
  $router: u
}) {
  e && u ? u[t ? "replace" : "push"](e) : n && (t ? location.replace(n) : location.href = n);
}
function Ae() {
  const e = Q().proxy;
  return () => Pe(e);
}
const [_e, O] = y("badge"), ze = {
  dot: Boolean,
  max: m,
  tag: d("div"),
  color: String,
  offset: Array,
  content: m,
  showZero: de,
  position: d("top-right")
};
var Ie = b({
  name: _e,
  props: ze,
  setup(e, {
    slots: n
  }) {
    const t = () => {
      if (n.content)
        return !0;
      const {
        content: o,
        showZero: s
      } = e;
      return p(o) && o !== "" && (s || o !== 0 && o !== "0");
    }, u = () => {
      const {
        dot: o,
        max: s,
        content: l
      } = e;
      if (!o && t())
        return n.content ? n.content() : p(s) && R(l) && +l > s ? `${s}+` : l;
    }, r = $(() => {
      const o = {
        background: e.color
      };
      if (e.offset) {
        const [s, l] = e.offset;
        n.default ? (o.top = g(l), typeof s == "number" ? o.right = g(-s) : o.right = s.startsWith("-") ? s.replace("-", "") : `-${s}`) : (o.marginTop = g(l), o.marginLeft = g(s));
      }
      return o;
    }), c = () => {
      if (t() || e.dot)
        return i("div", {
          class: O([e.position, {
            dot: e.dot,
            fixed: !!n.default
          }]),
          style: r.value
        }, [u()]);
    };
    return () => {
      if (n.default) {
        const {
          tag: o
        } = e;
        return i(o, {
          class: O("wrapper")
        }, {
          default: () => [n.default(), c()]
        });
      }
      return c();
    };
  }
});
const Oe = x(Ie), Te = (e) => {
}, [U, je] = y("config-provider"), Z = Symbol(U), ke = {
  tag: d("div"),
  zIndex: Number,
  themeVars: Object,
  iconPrefix: String
};
function Re(e) {
  const n = {};
  return Object.keys(e).forEach((t) => {
    n[`--van-${pe(t)}`] = e[t];
  }), n;
}
b({
  name: U,
  props: ke,
  setup(e, {
    slots: n
  }) {
    const t = $(() => {
      if (e.themeVars)
        return Re(e.themeVars);
    });
    return X(Z, e), ee(() => {
      e.zIndex !== void 0 && Te(e.zIndex);
    }), () => i(e.tag, {
      class: je(),
      style: t.value
    }, {
      default: () => {
        var u;
        return [(u = n.default) == null ? void 0 : u.call(n)];
      }
    });
  }
});
const [Le, T] = y("icon"), Ne = (e) => e == null ? void 0 : e.includes("/"), Ve = {
  dot: Boolean,
  tag: d("i"),
  name: String,
  size: m,
  badge: m,
  color: String,
  badgeProps: Object,
  classPrefix: String
};
var Ue = b({
  name: Le,
  props: Ve,
  setup(e, {
    slots: n
  }) {
    const t = ne(Z, null), u = $(() => e.classPrefix || (t == null ? void 0 : t.iconPrefix) || T());
    return () => {
      const {
        tag: r,
        dot: c,
        name: o,
        size: s,
        badge: l,
        color: a
      } = e, E = Ne(o);
      return i(Oe, j({
        dot: c,
        tag: r,
        class: [u.value, E ? "" : `${u.value}-${o}`],
        style: {
          color: a,
          fontSize: g(s)
        },
        content: l
      }, e.badgeProps), {
        default: () => {
          var f;
          return [(f = n.default) == null ? void 0 : f.call(n), E && i("img", {
            class: T("image"),
            src: o
          }, null)];
        }
      });
    };
  }
});
const Ze = x(Ue), [Me, B] = y("loading"), We = Array(12).fill(null).map((e, n) => i("i", {
  class: B("line", String(n + 1))
}, null)), qe = i("svg", {
  class: B("circular"),
  viewBox: "25 25 50 50"
}, [i("circle", {
  cx: "50",
  cy: "50",
  r: "20",
  fill: "none"
}, null)]), Ge = {
  size: m,
  type: d("circular"),
  color: String,
  vertical: Boolean,
  textSize: m,
  textColor: String
};
var He = b({
  name: Me,
  props: Ge,
  setup(e, {
    slots: n
  }) {
    const t = $(() => L({
      color: e.color
    }, ve(e.size))), u = () => {
      var r;
      if (n.default)
        return i("span", {
          class: B("text"),
          style: {
            fontSize: g(e.textSize),
            color: (r = e.textColor) != null ? r : e.color
          }
        }, [n.default()]);
    };
    return () => {
      const {
        type: r,
        vertical: c
      } = e;
      return i("div", {
        class: B([r, {
          vertical: c
        }]),
        "aria-live": "polite",
        "aria-busy": !0
      }, [i("span", {
        class: B("spinner", r),
        style: t.value
      }, [r === "spinner" ? We : qe]), u()]);
    };
  }
});
const Ke = x(He), [Ye, v] = y("button"), Je = L({}, we, {
  tag: d("button"),
  text: String,
  icon: String,
  type: d("default"),
  size: d("normal"),
  color: String,
  block: Boolean,
  plain: Boolean,
  round: Boolean,
  square: Boolean,
  loading: Boolean,
  hairline: Boolean,
  disabled: Boolean,
  iconPrefix: String,
  nativeType: d("button"),
  loadingSize: m,
  loadingText: String,
  loadingType: String,
  iconPosition: d("left")
});
var Qe = b({
  name: Ye,
  props: Je,
  emits: ["click"],
  setup(e, {
    emit: n,
    slots: t
  }) {
    const u = Ae(), r = () => t.loading ? t.loading() : i(Ke, {
      size: e.loadingSize,
      type: e.loadingType,
      class: v("loading")
    }, null), c = () => {
      if (e.loading)
        return r();
      if (t.icon)
        return i("div", {
          class: v("icon")
        }, [t.icon()]);
      if (e.icon)
        return i(Ze, {
          name: e.icon,
          class: v("icon"),
          classPrefix: e.iconPrefix
        }, null);
    }, o = () => {
      let a;
      if (e.loading ? a = e.loadingText : a = t.default ? t.default() : e.text, a)
        return i("span", {
          class: v("text")
        }, [a]);
    }, s = () => {
      const {
        color: a,
        plain: E
      } = e;
      if (a) {
        const f = {
          color: E ? a : "white"
        };
        return E || (f.background = a), a.includes("gradient") ? f.border = 0 : f.borderColor = a, f;
      }
    }, l = (a) => {
      e.loading ? me(a) : e.disabled || (n("click", a), u());
    };
    return () => {
      const {
        tag: a,
        type: E,
        size: f,
        block: M,
        round: W,
        plain: q,
        square: G,
        loading: H,
        disabled: w,
        hairline: P,
        nativeType: K,
        iconPosition: A
      } = e, Y = [v([E, f, {
        plain: q,
        block: M,
        round: W,
        square: G,
        loading: H,
        disabled: w,
        hairline: P
      }]), {
        [Fe]: P
      }];
      return i(a, {
        type: K,
        class: Y,
        style: s(),
        disabled: w,
        onClick: l
      }, {
        default: () => [i("div", {
          class: v("content")
        }, [A === "left" && c(), o(), A === "right" && c()])]
      });
    };
  }
});
const Xe = x(Qe), en = {
  __name: "MyButton",
  setup(e) {
    return (n, t) => (te(), ue(oe(Xe), j(n.$attrs, re(n.$listeners)), {
      default: ae(() => [
        ie(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}, C = {
  install(e) {
    e.component("my-button", en);
  }
};
const tn = {
  install(e) {
    var n;
    (n = C.install) == null || n.call(C, e);
  }
};
export {
  en as Button,
  C as ButtonPlugin,
  tn as default
};
