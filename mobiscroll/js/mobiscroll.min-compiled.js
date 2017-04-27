/* 061a4485-84df-4c46-89b1-cfc93c34e9d2 */
(function (a, b) {
    function d(a) {
        for (var c in a) if (o[a[c]] !== b) return !0;return !1;
    }function c(c, e, d) {
        var f = c;if ("object" === typeof e) return c.each(function () {
            h[this.id] && h[this.id].destroy();new a.mobiscroll.classes[e.component || "Scroller"](this, e);
        });"string" === typeof e && c.each(function () {
            var a;if ((a = h[this.id]) && a[e]) if (a = a[e].apply(this, Array.prototype.slice.call(d, 1)), a !== b) return f = a, !1;
        });return f;
    }function e(a) {
        if (g.tapped && !a.tap) return a.stopPropagation(), a.preventDefault(), !1;
    }var g,
        f = +new Date(),
        h = {},
        j = a.extend,
        o = document.createElement("modernizr").style,
        i = d(["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"]),
        k = d(["flex", "msFlex", "WebkitBoxDirection"]),
        n = function () {
        var a = ["Webkit", "Moz", "O", "ms"],
            c;for (c in a) if (d([a[c] + "Transform"])) return "-" + a[c].toLowerCase() + "-";return "";
    }(),
        q = n.replace(/^\-/, "").replace(/\-$/, "").replace("moz", "Moz");a.fn.mobiscroll = function (b) {
        j(this, a.mobiscroll.components);return c(this, b, arguments);
    };g = a.mobiscroll = a.mobiscroll || { version: "2.16.1", active: 1, util: { prefix: n, jsPrefix: q, has3d: i, hasFlex: k, testTouch: function (c, b) {
                if ("touchstart" == c.type) a(b).attr("data-touch", "1");else if (a(b).attr("data-touch")) return a(b).removeAttr("data-touch"), !1;return !0;
            }, objectToArray: function (a) {
                var c = [],
                    b;for (b in a) c.push(a[b]);return c;
            }, arrayToObject: function (a) {
                var c = {},
                    b;if (a) for (b = 0; b < a.length; b++) c[a[b]] = a[b];return c;
            }, isNumeric: function (a) {
                return 0 <= a - parseFloat(a);
            }, isString: function (a) {
                return "string" === typeof a;
            }, getCoord: function (a, c, b) {
                var e = a.originalEvent || a,
                    c = (b ? "client" : "page") + c;return e.changedTouches ? e.changedTouches[0][c] : a[c];
            }, getPosition: function (c, e) {
                var d = window.getComputedStyle ? getComputedStyle(c[0]) : c[0].style,
                    f,
                    h;i ? (a.each(["t", "webkitT", "MozT", "OT", "msT"], function (a, c) {
                    if (d[c + "ransform"] !== b) return f = d[c + "ransform"], !1;
                }), f = f.split(")")[0].split(", "), h = e ? f[13] || f[5] : f[12] || f[4]) : h = e ? d.top.replace("px", "") : d.left.replace("px", "");return h;
            }, constrain: function (a, c, b) {
                return Math.max(c, Math.min(a, b));
            }, vibrate: function (a) {
                "vibrate" in navigator && navigator.vibrate(a || 50);
            } }, tapped: 0, autoTheme: "mobiscroll", presets: { scroller: {}, numpad: {}, listview: {}, menustrip: {} }, themes: { form: {}, frame: {}, listview: {}, menustrip: {} }, i18n: {}, instances: h, classes: {}, components: {}, defaults: { context: "body", mousewheel: !0, vibrate: !0 }, setDefaults: function (a) {
            j(this.defaults, a);
        }, presetShort: function (a, e, d) {
            this.components[a] = function (f) {
                return c(this, j(f, { component: e, preset: !1 === d ? b : a }), arguments);
            };
        } };a.mobiscroll.classes.Base = function (c, b) {
        var e,
            d,
            g,
            i,
            k,
            q,
            o = a.mobiscroll,
            n = this;n.settings = {};n._presetLoad = function () {};n._init = function (a) {
            g = n.settings;j(b, a);n._hasDef && (q = o.defaults);j(g, n._defaults, q, b);if (n._hasTheme) {
                k = g.theme;if ("auto" == k || !k) k = o.autoTheme;"default" == k && (k = "mobiscroll");b.theme = k;i = o.themes[n._class][k];
            }n._hasLang && (e = o.i18n[g.lang]);n._hasTheme && n.trigger("onThemeLoad", [e, b]);j(g, i, e, q, b);if (n._hasPreset && (n._presetLoad(g), d = o.presets[n._class][g.preset])) d = d.call(c, n), j(g, d, b);
        };n._destroy = function () {
            n.trigger("onDestroy", []);delete h[c.id];n = null;
        };n.trigger = function (e, f) {
            var h;f.push(n);a.each([q, i, d, b], function (a, b) {
                b && b[e] && (h = b[e].apply(c, f));
            });return h;
        };n.option = function (a, c) {
            var b = {};"object" === typeof a ? b = a : b[a] = c;n.init(b);
        };n.getInst = function () {
            return n;
        };b = b || {};c.id || (c.id = "mobiscroll" + ++f);h[c.id] = n;
    };document.addEventListener && a.each(["mouseover", "mousedown", "mouseup", "click"], function (a, c) {
        document.addEventListener(c, e, !0);
    });
})(jQuery);(function (a) {
    a.mobiscroll.i18n.zh = { setText: "\u786e\u5b9a", cancelText: "\u53d6\u6d88", clearText: "\u660e\u786e", selectedText: "\u9009", dateFormat: "yy/mm/dd", dateOrder: "yymmdd", dayNames: "\u5468\u65e5,\u5468\u4e00,\u5468\u4e8c,\u5468\u4e09,\u5468\u56db,\u5468\u4e94,\u5468\u516d".split(","), dayNamesShort: "\u65e5,\u4e00,\u4e8c,\u4e09,\u56db,\u4e94,\u516d".split(","), dayNamesMin: "\u65e5,\u4e00,\u4e8c,\u4e09,\u56db,\u4e94,\u516d".split(","), dayText: "\u65e5", hourText: "\u65f6", minuteText: "\u5206", monthNames: "1\u6708,2\u6708,3\u6708,4\u6708,5\u6708,6\u6708,7\u6708,8\u6708,9\u6708,10\u6708,11\u6708,12\u6708".split(","),
        monthNamesShort: "\u4e00,\u4e8c,\u4e09,\u56db,\u4e94,\u516d,\u4e03,\u516b,\u4e5d,\u5341,\u5341\u4e00,\u5341\u4e8c".split(","), monthText: "\u6708", secText: "\u79d2", timeFormat: "HH:ii", timeWheels: "HHii", yearText: "\u5e74", nowText: "\u5f53\u524d", pmText: "\u4e0b\u5348", amText: "\u4e0a\u5348", dateText: "\u65e5", timeText: "\u65f6\u95f4", calendarText: "\u65e5\u5386", closeText: "\u5173\u95ed", fromText: "\u5f00\u59cb\u65f6\u95f4", toText: "\u7ed3\u675f\u65f6\u95f4", wholeText: "\u5408\u8ba1", fractionText: "\u5206\u6570",
        unitText: "\u5355\u4f4d", labels: "\u5e74,\u6708,\u65e5,\u5c0f\u65f6,\u5206\u949f,\u79d2,".split(","), labelsShort: "\u5e74,\u6708,\u65e5,\u70b9,\u5206,\u79d2,".split(","), startText: "\u5f00\u59cb", stopText: "\u505c\u6b62", resetText: "\u91cd\u7f6e", lapText: "\u5708", hideText: "\u9690\u85cf", backText: "\u80cc\u90e8", undoText: "\u590d\u539f", offText: "\u5173\u95ed", onText: "\u5f00\u542f" };
})(jQuery);(function (a, b, d, c) {
    var e,
        g,
        f = a.mobiscroll,
        h = f.util,
        j = h.jsPrefix,
        o = h.has3d,
        i = h.getCoord,
        k = h.constrain,
        n = h.isString,
        q = /android [1-3]/i.test(navigator.userAgent),
        h = /(iphone|ipod|ipad).* os 8_/i.test(navigator.userAgent),
        A = function () {},
        D = function (a) {
        a.preventDefault();
    };f.classes.Frame = function (h, r, w) {
        function M(c) {
            E && E.removeClass("dwb-a");E = a(this);!E.hasClass("dwb-d") && !E.hasClass("dwb-nhl") && E.addClass("dwb-a");if ("mousedown" === c.type) a(d).on("mouseup", t);
        }function t(c) {
            E && (E.removeClass("dwb-a"), E = null);"mouseup" === c.type && a(d).off("mouseup", t);
        }function m(a) {
            13 == a.keyCode ? B.select() : 27 == a.keyCode && B.cancel();
        }function H(b) {
            var d,
                f,
                h,
                i = K.focusOnClose;B._markupRemove();C.remove();e && !b && setTimeout(function () {
                if (i === c || !0 === i) {
                    g = !0;d = e[0];h = d.type;f = d.value;try {
                        d.type = "button";
                    } catch (b) {}e.focus();d.type = h;d.value = f;
                } else i && a(i).focus();
            }, 200);B._isVisible = !1;S("onHide", []);
        }function N(a) {
            clearTimeout(aa[a.type]);aa[a.type] = setTimeout(function () {
                var c = "scroll" == a.type;(!c || ca) && B.position(!c);
            }, 200);
        }
        function v(a) {
            a.target.nodeType && !J[0].contains(a.target) && J.focus();
        }function s(c, b) {
            c && c();a(d.activeElement).is("input,textarea") && a(d.activeElement).blur();e = b;B.show();setTimeout(function () {
                g = !1;
            }, 300);
        }var u,
            z,
            X,
            C,
            T,
            l,
            J,
            y,
            O,
            p,
            E,
            R,
            S,
            G,
            P,
            Z,
            I,
            Q,
            V,
            K,
            ca,
            U,
            ha,
            ia,
            B = this,
            ea = a(h),
            ga = [],
            aa = {};f.classes.Base.call(this, h, r, !0);B.position = function (b) {
            var e,
                f,
                h,
                g,
                i,
                j,
                q,
                m,
                oa,
                t,
                n = 0,
                o = 0;oa = {};var p = Math.min(y[0].innerWidth || y.innerWidth(), l.width()),
                r = y[0].innerHeight || y.innerHeight();if (!(ha === p && ia === r && b || V)) if ((B._isFullScreen || /top|bottom/.test(K.display)) && J.width(p), !1 !== S("onPosition", [C, p, r]) && P) {
                f = y.scrollLeft();b = y.scrollTop();g = K.anchor === c ? ea : a(K.anchor);B._isLiquid && "liquid" !== K.layout && (400 > p ? C.addClass("dw-liq") : C.removeClass("dw-liq"));!B._isFullScreen && /modal|bubble/.test(K.display) && (O.width(""), a(".mbsc-w-p", C).each(function () {
                    e = a(this).outerWidth(!0);n += e;o = e > o ? e : o;
                }), e = n > p ? o : n, O.width(e + 1).css("white-space", n > p ? "" : "nowrap"));Z = J.outerWidth();I = J.outerHeight(!0);ca = I <= r && Z <= p;B.scrollLock = ca;"modal" == K.display ? (f = Math.max(0, f + (p - Z) / 2), h = b + (r - I) / 2) : "bubble" == K.display ? (t = !0, m = a(".dw-arrw-i", C), h = g.offset(), j = Math.abs(z.offset().top - h.top), q = Math.abs(z.offset().left - h.left), i = g.outerWidth(), g = g.outerHeight(), f = k(q - (J.outerWidth(!0) - i) / 2, f + 3, f + p - Z - 3), h = j - I, h < b || j > b + r ? (J.removeClass("dw-bubble-top").addClass("dw-bubble-bottom"), h = j + g) : J.removeClass("dw-bubble-bottom").addClass("dw-bubble-top"), m = m.outerWidth(), i = k(q + i / 2 - (f + (Z - m) / 2), 0, m), a(".dw-arr", C).css({ left: i })) : "top" == K.display ? h = b : "bottom" == K.display && (h = b + r - I);h = 0 > h ? 0 : h;oa.top = h;oa.left = f;J.css(oa);l.height(0);oa = Math.max(h + I, "body" == K.context ? a(d).height() : z[0].scrollHeight);l.css({ height: oa });if (t && (h + I > b + r || j > b + r)) V = !0, setTimeout(function () {
                    V = false;
                }, 300), y.scrollTop(Math.min(h + I - r, oa - r));ha = p;ia = r;
            }
        };B.attachShow = function (a, c) {
            ga.push({ readOnly: a.prop("readonly"), el: a });if ("inline" !== K.display) {
                if (U && a.is("input")) a.prop("readonly", !0).on("mousedown.dw", function (a) {
                    a.preventDefault();
                });if (K.showOnFocus) a.on("focus.dw", function () {
                    g || s(c, a);
                });
                K.showOnTap && (a.on("keydown.dw", function (b) {
                    if (32 == b.keyCode || 13 == b.keyCode) b.preventDefault(), b.stopPropagation(), s(c, a);
                }), B.tap(a, function () {
                    s(c, a);
                }));
            }
        };B.select = function () {
            if (!P || !1 !== B.hide(!1, "set")) B._fillValue(), S("onSelect", [B._value]);
        };B.cancel = function () {
            (!P || !1 !== B.hide(!1, "cancel")) && S("onCancel", [B._value]);
        };B.clear = function () {
            S("onClear", [C]);P && !B.live && B.hide(!1, "clear");B.setVal(null, !0);
        };B.enable = function () {
            K.disabled = !1;B._isInput && ea.prop("disabled", !1);
        };B.disable = function () {
            K.disabled = !0;B._isInput && ea.prop("disabled", !0);
        };B.show = function (e, d) {
            var h;if (!K.disabled && !B._isVisible) {
                B._readValue();S("onBeforeShow", []);R = q ? !1 : K.animate;!1 !== R && ("top" == K.display && (R = "slidedown"), "bottom" == K.display && (R = "slideup"));h = '<div lang="' + K.lang + '" class="mbsc-' + K.theme + (K.baseTheme ? " mbsc-" + K.baseTheme : "") + " dw-" + K.display + " " + (K.cssClass || "") + (B._isLiquid ? " dw-liq" : "") + (q ? " mbsc-old" : "") + (G ? "" : " dw-nobtn") + '"><div class="dw-persp">' + (P ? '<div class="dwo"></div>' : "") + "<div" + (P ? ' role="dialog" tabindex="-1"' : "") + ' class="dw' + (K.rtl ? " dw-rtl" : " dw-ltr") + '">' + ("bubble" === K.display ? '<div class="dw-arrw"><div class="dw-arrw-i"><div class="dw-arr"></div></div></div>' : "") + '<div class="dwwr"><div aria-live="assertive" class="dw-aria dw-hidden"></div>' + (K.headerText ? '<div class="dwv">' + (n(K.headerText) ? K.headerText : "") + "</div>" : "") + '<div class="dwcc">';h += B._generateContent();h += "</div>";G && (h += '<div class="dwbc">', a.each(p, function (a, b) {
                    b = n(b) ? B.buttons[b] : b;if (b.handler === "set") b.parentClass = "dwb-s";if (b.handler === "cancel") b.parentClass = "dwb-c";h = h + ("<div" + (K.btnWidth ? ' style="width:' + 100 / p.length + '%"' : "") + ' class="dwbw ' + (b.parentClass || "") + '"><div tabindex="0" role="button" class="dwb' + a + " dwb-e " + (b.cssClass === c ? K.btnClass : b.cssClass) + (b.icon ? " mbsc-ic mbsc-ic-" + b.icon : "") + '">' + (b.text || "") + "</div></div>");
                }), h += "</div>");h += "</div></div></div></div>";C = a(h);l = a(".dw-persp", C);T = a(".dwo", C);O = a(".dwwr", C);X = a(".dwv", C);J = a(".dw", C);u = a(".dw-aria", C);B._markup = C;B._header = X;B._isVisible = !0;Q = "orientationchange resize";
                B._markupReady(C);S("onMarkupReady", [C]);if (P) {
                    a(b).on("keydown", m);if (K.scrollLock) C.on("touchmove mousewheel wheel", function (a) {
                        ca && a.preventDefault();
                    });"Moz" !== j && a("input,select,button", z).each(function () {
                        this.disabled || a(this).addClass("dwtd").prop("disabled", true);
                    });f.activeInstance && f.activeInstance.hide();Q += " scroll";f.activeInstance = B;C.appendTo(z);y.on("focusin", v);o && R && !e && C.addClass("dw-in dw-trans").on("webkitAnimationEnd animationend", function () {
                        C.off("webkitAnimationEnd animationend").removeClass("dw-in dw-trans").find(".dw").removeClass("dw-" + R);d || J.focus();B.ariaMessage(K.ariaMessage);
                    }).find(".dw").addClass("dw-" + R);
                } else ea.is("div") && !B._hasContent ? ea.html(C) : C.insertAfter(ea);B._markupInserted(C);S("onMarkupInserted", [C]);B.position();y.on(Q, N);C.on("selectstart mousedown", D).on("click", ".dwb-e", D).on("keydown", ".dwb-e", function (c) {
                    if (c.keyCode == 32) {
                        c.preventDefault();c.stopPropagation();a(this).click();
                    }
                }).on("keydown", function (c) {
                    if (c.keyCode == 32) c.preventDefault();else if (c.keyCode == 9 && P) {
                        var b = C.find('[tabindex="0"]').filter(function () {
                            return this.offsetWidth > 0 || this.offsetHeight > 0;
                        }),
                            e = b.index(a(":focus", C)),
                            d = b.length - 1,
                            f = 0;if (c.shiftKey) {
                            d = 0;f = -1;
                        }if (e === d) {
                            b.eq(f).focus();c.preventDefault();
                        }
                    }
                });a("input,select,textarea", C).on("selectstart mousedown", function (a) {
                    a.stopPropagation();
                }).on("keydown", function (a) {
                    a.keyCode == 32 && a.stopPropagation();
                });a.each(p, function (c, b) {
                    B.tap(a(".dwb" + c, C), function (a) {
                        b = n(b) ? B.buttons[b] : b;(n(b.handler) ? B.handlers[b.handler] : b.handler).call(this, a, B);
                    }, true);
                });K.closeOnOverlay && B.tap(T, function () {
                    B.cancel();
                });P && !R && (d || J.focus(), B.ariaMessage(K.ariaMessage));C.on("touchstart mousedown", ".dwb-e", M).on("touchend", ".dwb-e", t);B._attachEvents(C);S("onShow", [C, B._tempValue]);
            }
        };B.hide = function (c, e, d) {
            if (!B._isVisible || !d && !B._isValid && "set" == e || !d && !1 === S("onClose", [B._tempValue, e])) return !1;if (C) {
                "Moz" !== j && a(".dwtd", z).each(function () {
                    a(this).prop("disabled", !1).removeClass("dwtd");
                });if (o && P && R && !c && !C.hasClass("dw-trans")) C.addClass("dw-out dw-trans").find(".dw").addClass("dw-" + R).on("webkitAnimationEnd animationend", function () {
                    H(c);
                });else H(c);y.off(Q, N).off("focusin", v);
            }P && (a(b).off("keydown", m), delete f.activeInstance);
        };B.ariaMessage = function (a) {
            u.html("");setTimeout(function () {
                u.html(a);
            }, 100);
        };B.isVisible = function () {
            return B._isVisible;
        };B.setVal = A;B._generateContent = A;B._attachEvents = A;B._readValue = A;B._fillValue = A;B._markupReady = A;B._markupInserted = A;B._markupRemove = A;B._processSettings = A;B._presetLoad = function (a) {
            a.buttons = a.buttons || ("inline" !== a.display ? ["set", "cancel"] : []);a.headerText = a.headerText === c ? "inline" !== a.display ? "{value}" : !1 : a.headerText;
        };B.tap = function (a, c, b) {
            var e, d, h;if (K.tap) a.on("touchstart.dw", function (a) {
                b && a.preventDefault();e = i(a, "X");d = i(a, "Y");h = !1;
            }).on("touchmove.dw", function (a) {
                if (!h && 20 < Math.abs(i(a, "X") - e) || 20 < Math.abs(i(a, "Y") - d)) h = !0;
            }).on("touchend.dw", function (a) {
                h || (a.preventDefault(), c.call(this, a));f.tapped++;setTimeout(function () {
                    f.tapped--;
                }, 500);
            });a.on("click.dw", function (a) {
                a.preventDefault();c.call(this, a);
            });
        };B.destroy = function () {
            B.hide(!0, !1, !0);a.each(ga, function (a, c) {
                c.el.off(".dw").prop("readonly", c.readOnly);
            });B._destroy();
        };B.init = function (c) {
            B._init(c);B._isLiquid = "liquid" === (K.layout || (/top|bottom/.test(K.display) ? "liquid" : ""));B._processSettings();ea.off(".dw");p = K.buttons || [];P = "inline" !== K.display;U = K.showOnFocus || K.showOnTap;y = a("body" == K.context ? b : K.context);z = a(K.context);B.context = y;B.live = !0;a.each(p, function (a, c) {
                if ("ok" == c || "set" == c || "set" == c.handler) return B.live = !1;
            });B.buttons.set = { text: K.setText, handler: "set" };B.buttons.cancel = { text: B.live ? K.closeText : K.cancelText, handler: "cancel" };B.buttons.clear = { text: K.clearText, handler: "clear" };B._isInput = ea.is("input");G = 0 < p.length;B._isVisible && B.hide(!0, !1, !0);S("onInit", []);P ? (B._readValue(), B._hasContent || B.attachShow(ea)) : B.show();ea.on("change.dw", function () {
                B._preventChange || B.setVal(ea.val(), true, false);B._preventChange = false;
            });
        };B.buttons = {};B.handlers = { set: B.select, cancel: B.cancel, clear: B.clear };B._value = null;B._isValid = !0;B._isVisible = !1;K = B.settings;S = B.trigger;w || B.init(r);
    };f.classes.Frame.prototype._defaults = { lang: "en", setText: "Set", selectedText: "Selected", closeText: "Close", cancelText: "Cancel", clearText: "Clear", disabled: !1, closeOnOverlay: !0, showOnFocus: !1, showOnTap: !0, display: "modal", scrollLock: !0, tap: !0, btnClass: "dwb", btnWidth: !0, focusOnClose: !h };f.themes.frame.mobiscroll = { rows: 5, showLabel: !1, headerText: !1, btnWidth: !1, selectedLineHeight: !0, selectedLineBorder: 1, dateOrder: "MMddyy", weekDays: "min", checkIcon: "ion-ios7-checkmark-empty", btnPlusClass: "mbsc-ic mbsc-ic-arrow-down5", btnMinusClass: "mbsc-ic mbsc-ic-arrow-up5",
        btnCalPrevClass: "mbsc-ic mbsc-ic-arrow-left5", btnCalNextClass: "mbsc-ic mbsc-ic-arrow-right5" };a(b).on("focus", function () {
        e && (g = !0);
    });
})(jQuery, window, document);(function (a) {
    var a = a.mobiscroll.themes.frame,
        b = { dateOrder: "Mddyy", rows: 5, minWidth: 76, height: 36, showLabel: !1, selectedLineHeight: !0, selectedLineBorder: 2, useShortLabels: !0, icon: { filled: "star3", empty: "star" }, btnPlusClass: "mbsc-ic mbsc-ic-arrow-down6", btnMinusClass: "mbsc-ic mbsc-ic-arrow-up6", onThemeLoad: function (a, c) {
            c.theme && (c.theme = c.theme.replace("android-ics", "android-holo"));
        }, onMarkupReady: function (a) {
            a.addClass("mbsc-android-holo");
        } };a["android-holo"] = b;a["android-holo-light"] = b;a["android-ics"] = b;a["android-ics light"] = b;a["android-holo light"] = b;
})(jQuery);(function (a) {
    var b = a.mobiscroll.themes.frame,
        d = { minWidth: 76, height: 76, dateOrder: "mmMMddDDyy", headerText: !1, showLabel: !1, deleteIcon: "backspace4", icon: { filled: "star3", empty: "star" }, btnWidth: !1, btnStartClass: "mbsc-ic mbsc-ic-play3", btnStopClass: "mbsc-ic mbsc-ic-pause2", btnResetClass: "mbsc-ic mbsc-ic-stop2", btnLapClass: "mbsc-ic mbsc-ic-loop2", btnHideClass: "mbsc-ic mbsc-ic-close", btnCalPrevClass: "mbsc-ic mbsc-ic-arrow-left2", btnCalNextClass: "mbsc-ic mbsc-ic-arrow-right2", btnPlusClass: "mbsc-ic mbsc-ic-plus",
        btnMinusClass: "mbsc-ic mbsc-ic-minus", onMarkupInserted: function (c, b) {
            var d,
                f,
                h,
                j = b.settings;if ("clickpick" != j.mode) a(".dwwl", c).on("touchstart mousedown wheel mousewheel", function (b) {
                if (!("mousedown" === b.type && f || (a.isArray(j.readonly) ? j.readonly[a(".dwwl", c).index(this)] : j.readonly))) f = "touchstart" === b.type, d = !0, h = a(this).hasClass("wpa"), a(".dwwl", c).removeClass("wpa"), a(".dw-sel", this).removeClass("dw-sel"), a(this).addClass("wpa");
            }).on("touchmove mousemove", function () {
                d = !1;
            }).on("touchend mouseup", function (c) {
                d && h && a(c.target).closest(".dw-li").hasClass("dw-sel") && a(this).removeClass("wpa");"mouseup" === c.type && (f = !1);d = !1;
            });
        }, onThemeLoad: function (a, b) {
            if (a && a.dateOrder && !b.dateOrder) {
                var d = a.dateOrder,
                    d = d.match(/mm/i) ? d.replace(/mmMM|mm|MM/, "mmMM") : d.replace(/mM|m|M/, "mM"),
                    d = d.match(/dd/i) ? d.replace(/ddDD|dd|DD/, "ddDD") : d.replace(/dD|d|D/, "dD");b.dateOrder = d;
            }
        }, onInit: function (a) {
            a = a.buttons;a.set.icon = "checkmark";a.cancel.icon = "close";a.clear.icon = "close";a.ok && (a.ok.icon = "checkmark");a.close && (a.close.icon = "close");a.now && (a.now.icon = "loop2");
        } };b.wp = d;b["wp-light"] = d;b["wp light"] = d;
})(jQuery);(function (a) {
    var b = a.mobiscroll.themes.frame,
        d = { minWidth: 64, height: 60, btnStartClass: "mbsc-ic mbsc-ic-play3", btnStopClass: "mbsc-ic mbsc-ic-pause2", btnResetClass: "mbsc-ic mbsc-ic-stop2", btnLapClass: "mbsc-ic mbsc-ic-loop2", btnCalPrevClass: "mbsc-ic mbsc-ic-arrow-left5", btnCalNextClass: "mbsc-ic mbsc-ic-arrow-right5", btnPlusClass: "mbsc-ic mbsc-ic-arrow-down5", btnMinusClass: "mbsc-ic mbsc-ic-arrow-up5", onMarkupReady: function (c, b) {
            var d = b.settings,
                f = d.height,
                d = d.rows;c.addClass("mbsc-sense");a(".dww", c).height(d * f - 40);a(".dw-ul", c).css("margin-top", d / 2 * f - f / 2 - 20 + "px");a(".dwwms .dw-ul", c).css("margin-top", "-20px");a(".dwwb", c).css({ height: f - 20 + "px", lineHeight: f - 20 + "px" });
        }, onThemeLoad: function (a, b) {
            b.theme && (b.theme = b.theme.replace("sense5", "sense"));
        } };b.sense = d;b["sense-dark"] = d;b.sense5 = d;b["sense5-dark"] = d;
})(jQuery);(function (a) {
    a.mobiscroll.themes.frame.material = { showLabel: !1, headerText: !1, btnWidth: !1, selectedLineHeight: !0, selectedLineBorder: 1, dateOrder: "MMddyy", weekDays: "min", deleteIcon: "material-backspace", icon: { filled: "material-star", empty: "material-star-outline" }, checkIcon: "material-check", btnPlusClass: "mbsc-ic mbsc-ic-material-keyboard-arrow-down", btnMinusClass: "mbsc-ic mbsc-ic-material-keyboard-arrow-up", btnCalPrevClass: "mbsc-ic mbsc-ic-material-keyboard-arrow-left", btnCalNextClass: "mbsc-ic mbsc-ic-material-keyboard-arrow-right",
        onMarkupReady: function (b) {
            a.mobiscroll.themes.material.initRipple(b, ".dwb-e", "dwb-d", "dwb-nhl");
        }, onEventBubbleShow: function (b, d) {
            var c = d.hasClass("dw-cal-events-b"),
                e = a(".dw-cal-event-color", d).eq(c ? 0 : -1).css("background-color");a(".dw-cal-events-arr", d).css("border-color", c ? "transparent transparent " + e + " transparent" : e + "transparent transparent transparent");
        } };
})(jQuery);(function (a) {
    a.mobiscroll.themes.frame["ios-classic"] = { display: "bottom", dateOrder: "MMdyy", rows: 5, height: 30, minWidth: 60, headerText: !1, showLabel: !1, btnWidth: !1, selectedLineHeight: !0, selectedLineBorder: 2, useShortLabels: !0 };
})(jQuery);(function (a) {
    a.mobiscroll.themes.frame.android = { dateOrder: "Mddyy", mode: "clickpick", height: 50, showLabel: !1, btnStartClass: "mbsc-ic mbsc-ic-play3", btnStopClass: "mbsc-ic mbsc-ic-pause2", btnResetClass: "mbsc-ic mbsc-ic-stop2", btnLapClass: "mbsc-ic mbsc-ic-loop2" };
})(jQuery);(function (a) {
    a.mobiscroll.themes.frame["sense-ui"] = { btnStartClass: "mbsc-ic mbsc-ic-play3", btnStopClass: "mbsc-ic mbsc-ic-pause2", btnResetClass: "mbsc-ic mbsc-ic-stop2", btnLapClass: "mbsc-ic mbsc-ic-loop2" };
})(jQuery);(function (a) {
    var a = a.mobiscroll.themes.frame,
        b = { display: "bottom", dateOrder: "MMdyy", rows: 5, height: 34, minWidth: 55, headerText: !1, showLabel: !1, btnWidth: !1, selectedLineHeight: !0, selectedLineBorder: 1, useShortLabels: !0, deleteIcon: "backspace3", checkIcon: "ion-ios7-checkmark-empty", btnCalPrevClass: "mbsc-ic mbsc-ic-arrow-left5", btnCalNextClass: "mbsc-ic mbsc-ic-arrow-right5", btnPlusClass: "mbsc-ic mbsc-ic-arrow-down5", btnMinusClass: "mbsc-ic mbsc-ic-arrow-up5", onThemeLoad: function (a, c) {
            c.theme && (c.theme = c.theme.replace("ios7", "ios"));
        } };a.ios = b;a.ios7 = b;
})(jQuery);(function (a) {
    a.mobiscroll.themes.frame.bootstrap = { disabledClass: "disabled", activeClass: "btn-primary", activeTabClass: "active", btnCalPrevClass: "", btnCalNextClass: "", selectedLineHeight: !0, onMarkupInserted: function (b) {
            a(".dw", b).removeClass("dwbg").addClass("popover");a(".dwwr", b).addClass("popover-content");a(".dwv", b).addClass("popover-title");a(".dw-arr", b).addClass("arrow");a(".dwb, .dwwb", b).addClass("btn btn-default");a(".dwb-s .dwb", b).removeClass("btn-default").addClass("btn btn-primary");a(".dw-cal-next .dw-cal-btn-txt", b).prepend('<i class="icon icon-chevron-right glyphicon glyphicon-chevron-right"></i>');a(".dw-cal-prev .dw-cal-btn-txt", b).prepend('<i class="icon icon-chevron-left glyphicon glyphicon-chevron-left"></i>');a(".dw-cal-tabs ul", b).addClass("nav nav-tabs");a(".dw-cal-sc-c", b).addClass("popover");a(".dw-week-nrs-c", b).addClass("popover");a(".dw-cal-events", b).addClass("popover");a(".dw-cal-events-arr", b).addClass("arrow");a(".dw-dr", b).addClass("btn btn-sm btn-small btn-default");a(".mbsc-np-btn", b).addClass("btn btn-default");
        },
        onPosition: function (b) {
            setTimeout(function () {
                a(".dw-bubble-top", b).removeClass("bottom").addClass("top");a(".dw-bubble-bottom", b).removeClass("top").addClass("bottom");
            }, 10);
        }, onEventBubbleShow: function (b, d) {
            a(".dw-cal-event-list", d).addClass("list-group");a(".dw-cal-event", d).addClass("list-group-item");setTimeout(function () {
                d.hasClass("dw-cal-events-b") ? d.removeClass("top").addClass("bottom") : d.removeClass("bottom").addClass("top");
            }, 10);
        } };
})(jQuery);(function (a, b, d, c) {
    var e,
        g = a.extend,
        f = a.mobiscroll,
        h = f.classes,
        j = f.util,
        o = j.prefix,
        i = j.jsPrefix,
        k = j.has3d,
        n = j.getCoord,
        q = j.testTouch,
        A = j.vibrate,
        D = 1,
        F = function () {},
        r = b.requestAnimationFrame || function (a) {
        a();
    },
        w = b.cancelAnimationFrame || F,
        M = "webkitAnimationEnd animationend",
        t = "transparent";h.ListView = function (m, H) {
        function N() {
            Lb = Mb = !1;gc = qa = 0;hc = new Date();bb = ja.width();Eb = ha(ja);sa = Eb.index(Y);Ea = Y.outerHeight();Ma = Y[0].offsetTop;Ca = vb[Y.attr("data-type") || "defaults"];Fb = Ca.stages;
        }function v(c) {
            "touchstart" === c.type && (Nb = !0, clearTimeout(ic));if (q(c, this) && !ma && !ib && !e && !Ob && true && (oa = ma = !0, Pb = n(c, "X"), Qb = n(c, "Y"), Ga = la = 0, Y = a(this), N(), Yb = ba.onItemTap || Ca.tap || Y.hasClass("mbsc-lv-parent") || Y.hasClass("mbsc-lv-back"), Na.offset(), qb = Y.offset().top, Yb && (ka = setTimeout(function () {
                Y.addClass("mbsc-lv-item-active");Aa("onItemActivate", [Y, c]);
            }, 120)), W.sortable && !Y.hasClass("mbsc-lv-back") && ((W.sortable.group || (Zb = Y.nextUntil(".mbsc-lv-gr-title").filter(".mbsc-lv-item"), $b = Y.prevUntil(".mbsc-lv-gr-title").filter(".mbsc-lv-item")), rb = (!W.sortable.group ? $b.length ? $b.eq(-1) : Y : ja.children("li").eq(0))[0].offsetTop - Ma, jb = (!W.sortable.group ? Zb.length ? Zb.eq(-1) : Y : ja.children("li").eq(-1))[0].offsetTop - Ma, W.sortable.handle) ? a(c.target).hasClass("mbsc-lv-handle") && (clearTimeout(ka), "Moz" === i ? (c.preventDefault(), T()) : Rb = setTimeout(function () {
                T();
            }, 100)) : Rb = setTimeout(function () {
                if (ba.fillAnimation) {
                    xa.appendTo(Y);xa[0].style[i + "Animation"] = "mbsc-lv-fill " + (ba.sortDelay - 100) + "ms linear";
                }clearTimeout(cb);clearTimeout(ka);oa = false;Rb = setTimeout(function () {
                    xa[0].style[i + "Animation"] = "";T();
                }, ba.sortDelay - 80);
            }, 80)), "mousedown" == c.type)) a(d).on("mousemove", s).on("mouseup", u);
        }function s(a) {
            var c = !1,
                b = !0;if (ma) if (sb = n(a, "X"), Gb = n(a, "Y"), la = sb - Pb, Ga = Gb - Qb, clearTimeout(cb), !Xa && !kb && !wb && !Y.hasClass("mbsc-lv-back") && (10 < Math.abs(Ga) ? (wb = !0, Y.trigger("mousemove" == a.type ? "mouseup" : "touchend"), clearTimeout(ka)) : 7 < Math.abs(la) ? z() : "touchmove" === a.type && (cb = setTimeout(function () {
                Y.trigger("touchend");
            }, 300))), kb) a.preventDefault(), qa = 100 * (la / bb), X();else if (Xa) {
                a.preventDefault();
                var d,
                    e = Ia.scrollTop(),
                    a = Math.max(rb, Math.min(Ga + xb, jb)),
                    f = Ua ? qb - ac + e - xb : qb;Hb + e < f + a + Ea ? (Ia.scrollTop(f + a - Hb + Ea), d = !0) : f + a < e && (Ia.scrollTop(f + a), d = !0);d && (d = Ua ? Ia.scrollTop() - e : 0, xb += d);if (lb && (W.sortable.multiLevel && ua.hasClass("mbsc-lv-parent") ? Ma + Ea / 4 + a > lb ? c = !0 : Ma + Ea - Ea / 4 + a > lb && (Ja = ua.addClass("mbsc-lv-item-hl"), b = !1) : Ma + Ea / 2 + a > lb && (ua.hasClass("mbsc-lv-back") ? W.sortable.multiLevel && (na = ua.addClass("mbsc-lv-item-hl"), b = !1) : c = !0), c)) db.insertAfter(ua), Oa = ua, ua = B(ua, "next"), mb = lb, lb = ua.length && ua[0].offsetTop, Ba++;if (!c && mb && (W.sortable.multiLevel && Oa.hasClass("mbsc-lv-parent") ? Ma + Ea - Ea / 4 + a < mb ? c = !0 : Ma + Ea / 4 + a < mb && (Ja = Oa.addClass("mbsc-lv-item-hl"), b = !1) : Ma + Ea / 2 + a < mb && (Oa.hasClass("mbsc-lv-back") ? W.sortable.multiLevel && (na = Oa.addClass("mbsc-lv-item-hl"), b = !1) : c = !0), c)) db.insertBefore(Oa), ua = Oa, Oa = B(Oa, "prev"), lb = mb, mb = Oa.length && Oa[0].offsetTop + Oa.outerHeight(), Ba--;if (b && (Ja && (Ja.removeClass("mbsc-lv-item-hl"), Ja = !1), na)) na.removeClass("mbsc-lv-item-hl"), na = !1;c && Aa("onSortChange", [Y, Ba]);G(Y, a);Aa("onSort", [Y, Ba]);
            } else (5 < Math.abs(la) || 5 < Math.abs(Ga)) && P();
        }function u(c) {
            var b, e;if (ma) {
                ma = !1;P();"mouseup" == c.type && a(d).off("mousemove", s).off("mouseup", u);wb || (ic = setTimeout(function () {
                    Nb = !1;
                }, 300));if (kb || wb || Xa) Lb = !0;kb ? C() : Xa ? (b = ja, Ja ? (V(Y.detach()), c = eb[Ja.attr("data-ref")], Ba = ha(c.child).length, Ja.removeClass("mbsc-lv-item-hl"), ba.navigateOnDrop ? ta(Ja, function () {
                    W.add(null, Y, null, null, Ja, !0);aa(Y);l(Y, sa, b, !0);
                }) : (W.add(null, Y, null, null, Ja, !0), l(Y, sa, b, !0))) : na ? (V(Y.detach()), c = eb[na.attr("data-back")], Ba = ha(c.parent).index(c.item) + 1, na.removeClass("mbsc-lv-item-hl"), ba.navigateOnDrop ? ta(na, function () {
                    W.add(null, Y, Ba, null, ja, !0);aa(Y);l(Y, sa, b, !0);
                }) : (W.add(null, Y, Ba, null, c.parent, !0), l(Y, sa, b, !0))) : (c = db[0].offsetTop - Ma, G(Y, c, 6 * Math.abs(c - Math.max(rb, Math.min(Ga + xb, jb))), function () {
                    V(Y);Y.insertBefore(db);l(Y, sa, b, Ba !== sa);
                })), Xa = !1) : !wb && 5 > Math.abs(la) && 5 > Math.abs(Ga) && ("touchend" === c.type && (c.preventDefault(), f.tapped++, setTimeout(function () {
                    f.tapped--;
                }, 500)), Ca.tap && (e = Ca.tap.call(Qa, Y, sa, c, W)), Yb && (Y.addClass("mbsc-lv-item-active"), Aa("onItemActivate", [Y, c])), e = Aa("onItemTap", [Y, sa, c]), !1 !== e && ta(Y));clearTimeout(ka);setTimeout(function () {
                    Y.removeClass("mbsc-lv-item-active");Aa("onItemDeactivate", [Y]);
                }, 100);wb = !1;Ka = null;
            }
        }function z() {
            if (kb = K(Ca.swipe, [Y, sa, 0 < la ? "right" : "left", W])) P(), clearTimeout(ka), Ca.actions ? (ya = ga(Ca), Pa.html(Ca.icons).show().children().css("width", ya + "%"), Pa.find(".mbsc-lv-multi-ic-right").css("margin-left", 100 - ya + "%"), Fa.hide(), a(".mbsc-lv-ic-m", Da).removeClass("mbsc-lv-ic-disabled"), a(Ca.leftMenu).each(y), a(Ca.rightMenu).each(y)) : (Fa.show(), Pa.hide(), Ra = Ca.start + (0 < la ? 0 : 1), tb = Fb[Ra - 1], ub = Fb[Ra]), Y.addClass("mbsc-lv-item-swiping").removeClass("mbsc-lv-item-active"), Sb.css("line-height", Ea + "px"), Da.css({ top: Ma, height: Ea, backgroundColor: (0 < la ? Ca.right : Ca.left).color || t }).addClass("mbsc-lv-stage-c-v").appendTo(ja), ba.iconSlide && Y.append(Fa), Aa("onSlideStart", [Y, sa]);
        }function X() {
            var a = !1;if (!Tb) {
                if (Ca.actions) Da.attr("class", "mbsc-lv-stage-c-v mbsc-lv-stage-c mbsc-lv-" + (0 > qa ? "right" : "left"));else if (tb && qa <= tb.percent ? (Ra--, ub = tb, tb = Fb[Ra], a = !0) : ub && qa >= ub.percent && (Ra++, tb = ub, ub = Fb[Ra], a = !0), a) if (Ka = 0 < qa ? tb : ub) Z(Ka, ba.iconSlide), Aa("onStageChange", [Y, sa, Ka]);yb || (Tb = !0, jc = r(E));
            }
        }function C(c) {
            var b,
                f,
                h = !1;w(jc);Tb = !1;yb || E();if (Ca.actions) 10 < Math.abs(qa) && ya && (S(Y, 0 > qa ? -ya : ya, 200), e = h = !0, La = Y, hb = sa, a(d).on("touchstart.mbsc-lv-conf mousedown.mbsc-lv-conf", function (a) {
                a.preventDefault();R(Y, !0, c);
            }));else if (ba.quickSwipe && !yb && (f = new Date() - hc, b = 300 > f && -50 > la, f = 300 > f && 50 < la, b ? (Mb = !0, Ka = Ca.left, Z(Ka, ba.iconSlide)) : f && (Mb = !0, Ka = Ca.right, Z(Ka, ba.iconSlide))), Ka && Ka.action) Sa = K(Ka.disabled, [Y, sa, W]), Sa || (h = !0, (e = yb || K(Ka.confirm, [Y, sa, W])) ? (S(Y, 100 * (0 > qa ? -1 : 1) * Fa.outerWidth(!0) / bb, 200, !0), p(Ka, Y, sa, !1, c)) : O(Ka, Y, sa, c));h || R(Y, !0, c);kb = !1;
        }function T() {
            Xa = !0;na = Ja = !1;xb = 0;Ba = sa;ba.vibrate && A();ua = B(Y, "next");lb = ua.length && ua[0].offsetTop;Oa = B(Y, "prev");mb = Oa.length && Oa[0].offsetTop + Oa.outerHeight();db.height(Ea).insertAfter(Y);Y.css({ top: Ma }).addClass("mbsc-lv-item-dragging").removeClass("mbsc-lv-item-active").appendTo(Va);
            Aa("onSortStart", [Y, Ba]);
        }function l(a, c, b, e) {
            a.removeClass("mbsc-lv-item-dragging");db.remove();Aa("onSortStop", [a, Ba]);ba.vibrate && A();e && (W.addUndoAction(function (e) {
                W.move(a, c, null, e, b, !0);
            }, !0), Aa("onSortUpdate", [a, Ba]));
        }function J() {
            Nb || (clearTimeout(Ib), e && a(d).trigger("touchstart"), zb && (W.close(Ha, Ya), zb = !1, Ha = null));
        }function y(c, b) {
            K(b.disabled, [Y, sa, W]) && a(".mbsc-ic-" + b.icon, Da).addClass("mbsc-lv-ic-disabled");
        }function O(c, b, e, d) {
            var f,
                h = { icon: "undo2", text: ba.undoText, color: "#b1b1b1", action: function () {
                    W.undo();
                } };
            c.undo && (W.startActionTrack(), a.isFunction(c.undo) && W.addUndoAction(function () {
                c.undo.call(Qa, b, W, e);
            }), Ub = b.attr("data-ref"));f = c.action.call(Qa, b, W, e);c.undo ? (W.endActionTrack(), !1 !== f && S(b, 0 > +b.attr("data-pos") ? -100 : 100, 200), db.height(Ea).insertAfter(b), b.css("top", Ma).addClass("mbsc-lv-item-undo"), Pa.hide(), Fa.show(), Da.append(Fa), Z(h), p(h, b, e, !0, d)) : R(b, f, d);
        }function p(c, b, h, g, i) {
            var k, l;e = !0;a(d).off(".mbsc-lv-conf").on("touchstart.mbsc-lv-conf mousedown.mbsc-lv-conf", function (a) {
                a.preventDefault();
                g && Q(b);R(b, !0, i);
            });if (!Za) Fa.off(".mbsc-lv-conf").on("touchstart.mbsc-lv-conf mousedown.mbsc-lv-conf", function (a) {
                a.stopPropagation();k = n(a, "X");l = n(a, "Y");
            }).on("touchend.mbsc-lv-conf mouseup.mbsc-lv-conf", function (a) {
                a.preventDefault();"touchend" === a.type && (f.tapped++, setTimeout(function () {
                    f.tapped--;
                }, 500));20 > Math.abs(n(a, "X") - k) && 20 > Math.abs(n(a, "Y") - l) && (O(c, b, h, i), g && (Vb = null, Q(b)));
            });
        }function E() {
            S(Y, gc + 100 * la / bb);Tb = !1;
        }function R(c, b, f) {
            a(d).off(".mbsc-lv-conf");Fa.off(".mbsc-lv-conf");!1 !== b ? S(c, 0, "0" !== c.attr("data-pos") ? 200 : 0, !1, function () {
                I(c, f);V(c);
            }) : I(c, f);e = !1;
        }function S(a, c, b, e, d) {
            c = Math.max("right" == kb ? 0 : -100, Math.min(c, "left" == kb ? 0 : 100));$a = a[0].style;a.attr("data-pos", c);k ? ($a[i + "Transform"] = "translate3d(" + (e ? bb * c / 100 + "px" : c + "%") + ",0,0)", $a[i + "Transition"] = o + "transform " + (b || 0) + "ms") : $a.left = c + "%";d && (ib++, setTimeout(function () {
                d();ib--;
            }, b));qa = c;
        }function G(a, c, b, e) {
            c = Math.max(rb, Math.min(c, jb));$a = a[0].style;k ? ($a[i + "Transform"] = "translate3d(0," + c + "px,0)", $a[i + "Transition"] = o + "transform " + (b || 0) + "ms ease-out") : $a.top = Ma + c + "px";e && (ib++, setTimeout(function () {
                e();ib--;
            }, b));
        }function P() {
            clearTimeout(Rb);!oa && W.sortable && ba.fillAnimation && (oa = !0, xa.remove());
        }function Z(a, c) {
            var b = K(a.text, [Y, sa, W]) || "";K(a.disabled, [Y, sa, W]) ? Da.addClass("mbsc-lv-ic-disabled") : Da.removeClass("mbsc-lv-ic-disabled");Da.css("background-color", a.color || (0 === a.percent ? (0 < qa ? Ca.right : Ca.left).color || t : t));Fa.attr("class", "mbsc-lv-ic-c mbsc-lv-ic-" + (c ? "move-" : "") + (0 > qa ? "right" : "left"));pa.attr("class", " mbsc-lv-ic-s mbsc-lv-ic mbsc-ic mbsc-ic-" + (a.icon || "none"));Sb.attr("class", "mbsc-lv-ic-text" + (a.icon ? "" : " mbsc-lv-ic-text-only") + (b ? "" : " mbsc-lv-ic-only")).html(b || "&nbsp;");ba.animateIcons && (Mb ? pa.addClass("mbsc-lv-ic-v") : setTimeout(function () {
                pa.addClass("mbsc-lv-ic-a");
            }, 10));
        }function I(a, c) {
            ma || (pa.attr("class", "mbsc-lv-ic-s mbsc-lv-ic mbsc-ic mbsc-ic-none"), Da.attr("style", "").removeClass("mbsc-lv-stage-c-v"), Sb.html(""));Da.removeClass("mbsc-lv-left mbsc-lv-right");a && (Aa("onSlideEnd", [a, sa]), c && c());
        }function Q(a) {
            a.css("top", "").removeClass("mbsc-lv-item-undo");Vb ? W.animate(db, "collapse", function () {
                db.remove();
            }) : db.remove();I();Vb = Ub = null;
        }function V(a) {
            $a = a[0].style;$a[i + "Transform"] = "";$a[i + "Transition"] = "";$a.top = "";a.removeClass("mbsc-lv-item-swiping");
        }function K(c, b) {
            return a.isFunction(c) ? c.apply(this, b) : c;
        }function ca(c) {
            var b;c.attr("data-ref") || (b = D++, c.attr("data-ref", b), eb[b] = { item: c, child: c.children("ul,ol"), parent: c.parent(), ref: c.parent()[0] === Qa ? null : c.parent().parent().attr("data-ref") });
            c.addClass("mbsc-lv-item");W.sortable.handle && "list-divider" != c.attr("data-role") && !c.children(".mbsc-lv-handle-c").length && c.append(nb);if (ba.enhance && !c.hasClass("mbsc-lv-item-enhanced")) {
                b = c.attr("data-icon");var e = c.find("img").eq(0).addClass("mbsc-lv-img");e.is(":first-child") ? c.addClass("mbsc-lv-img-" + (ba.rtl ? "right" : "left")) : e.length && c.addClass("mbsc-lv-img-" + (ba.rtl ? "left" : "right"));c.addClass("mbsc-lv-item-enhanced").children().each(function (c, b) {
                    b = a(b);b.is("p, h1, h2, h3, h4, h5, h6") && b.addClass("mbsc-lv-txt");
                });b && c.addClass("mbsc-lv-item-ic-" + (c.attr("data-icon-align") || (ba.rtl ? "right" : "left"))).append('<div class="mbsc-lv-item-ic mbsc-ic mbsc-ic-' + b + '"></div');
            }c.append(W._processItem(a, 0.2));
        }function U(c) {
            a("li", c).not(".mbsc-lv-item").each(function () {
                ca(a(this));
            });a('li[data-role="list-divider"]', c).removeClass("mbsc-lv-item").addClass("mbsc-lv-gr-title");a("ul,ol", c).not(".mbsc-lv").addClass("mbsc-lv").prepend(Ta).parent().addClass("mbsc-lv-parent").prepend(ab);a(".mbsc-lv-back", c).each(function () {
                a(this).attr("data-back", a(this).parent().parent().attr("data-ref"));
            });
        }function ha(a) {
            return a.children("li").not(".mbsc-lv-back").not(".mbsc-lv-removed").not(".mbsc-lv-ph");
        }function ia(c) {
            "object" !== typeof c && (c = a('li[data-id="' + c + '"]', za));return c;
        }function B(a, c) {
            for (a = a[c](); a.length && (!a.hasClass("mbsc-lv-item") || a.hasClass("mbsc-lv-ph") || a.hasClass("mbsc-lv-item-dragging"));) {
                if (!W.sortable.group && a.hasClass("mbsc-lv-gr-title")) return !1;a = a[c]();
            }return a;
        }function ea(a) {
            return j.isNumeric(a) ? a + "" : 0;
        }function ga(a) {
            return +(0 > la ? ea((a.actionsWidth || 0).right) || ea(a.actionsWidth) || ea(ba.actionsWidth.right) || ea(ba.actionsWidth) : ea((a.actionsWidth || 0).left) || ea(a.actionsWidth) || ea(ba.actionsWidth.left) || ea(ba.actionsWidth));
        }function aa(a) {
            var c;a && (a = a.offset().top, c = Ua ? ac : Ia.scrollTop(), a < c ? Ia.scrollTop(a - (Ua ? Ia.children().offset().top : 0)) : a > c + Hb && Ia.scrollTop(a - Hb / 2));
        }function da(a, c, b, e) {
            var d = c.parent(),
                f = c.prev(),
                e = e || F;f[0] === Fa[0] && (f = Fa.prev());ja[0] !== c[0] ? (Aa("onNavStart", [Ab, a, c]), bc.prepend(c.addClass("mbsc-lv-v mbsc-lv-sl-new")), aa(za), fa(bc, "mbsc-lv-sl-" + a, function () {
                ja.removeClass("mbsc-lv-sl-curr");c.removeClass("mbsc-lv-sl-new").addClass("mbsc-lv-sl-curr");ob && ob.length ? ja.removeClass("mbsc-lv-v").insertAfter(ob) : pb.append(ja.removeClass("mbsc-lv-v"));ob = f;pb = d;ja = c;aa(b);e.call(Qa, b);Aa("onNavEnd", [Ab, a, c]);
            })) : (aa(b), e.call(Qa, b));
        }function ta(a, c) {
            ib || (a.hasClass("mbsc-lv-parent") ? (Ab++, da("r", eb[a.attr("data-ref")].child, null, c)) : a.hasClass("mbsc-lv-back") && (Ab--, da("l", eb[a.attr("data-back")].parent, eb[a.attr("data-back")].item, c)));
        }function fa(a, c, b) {
            function e() {
                clearTimeout(d);ib--;a.off(M, e).removeClass(c);b.call(Qa, a);
            }var d,
                b = b || F;k && ba.animation && "mbsc-lv-item-none" !== c ? (ib++, a.on(M, e).addClass(c), d = setTimeout(e, 500)) : b.call(Qa, a);
        }function L(a, c) {
            var b,
                e = a.attr("data-ref");b = cc[e] = cc[e] || [];c && b.push(c);a.attr("data-action") || (c = b.shift(), a.attr("data-action", 1), c(function () {
                a.removeAttr("data-action");b.length ? L(a) : delete cc[e];
            }));
        }function wa(b, e, d) {
            var f, h;b && b.length && (f = 100 / (b.length + 2), a.each(b, function (a, i) {
                i.key === c && (i.key = dc++);i.percent === c && (i.percent = e * f * (a + 1), d && (h = g({}, i), h.key = dc++, h.percent = -f * (a + 1), b.push(h), Wb[h.key] = h));Wb[i.key] = i;
            }));
        }var ma,
            ya,
            ka,
            qa,
            oa,
            La,
            hb,
            za,
            Ba,
            ra,
            ja,
            ob,
            pb,
            Eb,
            Ka,
            Ra,
            Wa,
            Za,
            Sa,
            la,
            Ga,
            Ja,
            na,
            Xa,
            Va,
            cb,
            sb,
            Gb,
            Aa,
            xa,
            fb,
            va,
            Bb,
            Cb,
            Xb,
            x,
            Ua,
            nb,
            Jb,
            Ha,
            zb,
            Ya,
            gb,
            Ib,
            Ta,
            ab,
            pa,
            Fa,
            Da,
            bb,
            Y,
            Ea,
            sa,
            qb,
            jb,
            rb,
            Pa,
            ua,
            lb,
            ub,
            Zb,
            Lb,
            Nb,
            ic,
            $b,
            db,
            Oa,
            mb,
            tb,
            Mb,
            jc,
            Tb,
            ba,
            wb,
            yb,
            bc,
            dc,
            Fb,
            gc,
            hc,
            Pb,
            Qb,
            $a,
            kb,
            ec,
            Yb,
            Sb,
            Rb,
            Ca,
            vb,
            Ub,
            Vb,
            Ia,
            Hb,
            xb,
            ac,
            W = this,
            Qa = m,
            Na = a(Qa),
            ib = 0,
            Ab = 0,
            Ma = 0,
            Wb = {},
            cc = {},
            eb = {};h.Base.call(this, m, H, !0);W._processItem = new Function("$, p", function () {
            var a = [5, 2],
                c;a: {
                c = a[0];var b;for (b = 0; 16 > b; ++b) if (1 == c * b % 16) {
                    c = [b, a[1]];break a;
                }c = void 0;
            }a = c[0];c = c[1];b = "";var e;for (e = 0; 1060 > e; ++e) b += "0123456789abcdef"[((a * "0123456789abcdef".indexOf("565c5f59c6c8030d0c0f51015c0d0e0ec85c5b08080f080513080b55c26607560bcacf1e080b55c26607560bca1c12171bce1fce1ccf5e5ec7cac7c6c8030d0c0f51015c0d0e0ec80701560f500b1dc6c8030d0c0f51015c0d0e0ec80701560f500b13c7070e0b5c56cac5b65c0f070ec20b5a520f5c0b06c7c2b20e0b07510bc2bb52055c07060bc26701010d5b0856c8c5cf1417cf195c0b565b5c08ca6307560ac85c0708060d03cacf1e521dc51e060f50c251565f0e0b13ccc5c9005b0801560f0d08ca0bcf5950075cc256130bc80e0b0805560ace08ce5c19550a0f0e0bca12c7131356cf595c136307560ac8000e0d0d5cca6307560ac85c0708060d03cacfc456cf1956c313171908130bb956b3190bb956b3130bb95cb3190bb95cb31308535c0b565b5c08c20b53cab9c5520d510f560f0d0814070c510d0e5b560bc5cec554c30f08060b5a14c317c5cec5560d521412c5cec50e0b00561412c5cec50c0d56560d031412c5cec55c0f050a561412c5cec5000d0856c3510f540b141a525ac5cec50e0f080bc30a0b0f050a5614171c525ac5cec5560b5a56c3070e0f050814010b08560b5cc5cec50d5207010f565f14c5c9ca6307560ac8000e0d0d5cca6307560ac85c0708060d03cacfc41c12cfcd171212c912c81acfb3cfc8040d0f08cac519c5cfc9c5cc18b6bc6f676e1ecd060f5018c514c5c5cf53010756010aca0bcf595c0b565b5c08c2c5c553"[e]) - a * c) % 16 + 16) % 16];c = b;b = c.length;a = [];for (e = 0; e < b; e += 2) a.push(c[e] + c[e + 1]);c = "";b = a.length;for (e = 0; e < b; e++) c += String.fromCharCode(parseInt(a[e], 16));c = c.replace("Math.random()<p", "1<0").replace("new Date()", "true||new Date()");return c;
        }());W.animate = function (a, c, b) {
            fa(a, "mbsc-lv-item-" + c, b);
        };W.add = function (b, e, d, f, h, g) {
            var i,
                k,
                l,
                j,
                q,
                oa,
                m = "",
                p = h === c ? Na : ia(h),
                n = p,
                t = "object" !== typeof e ? a('<li data-ref="' + D++ + '" data-id="' + b + '">' + e + "</li>") : e,
                o = 0 > t.attr("data-pos") ? "left" : "right",
                r = t.attr("data-ref"),
                f = f || F;r || (r = D++, t.addClass("mbsc-lv-item").attr("data-ref", r));ca(t);g || W.addUndoAction(function (a) {
                j ? W.navigate(p, function () {
                    n.remove();p.removeClass("mbsc-lv-parent").children(".mbsc-lv-arr").remove();q.child = p.children("ul,ol");W.remove(t, null, a, true);
                }) : W.remove(t, null, a, true);
            }, !0);L(t, function (b) {
                V(t.css("top", "").removeClass("mbsc-lv-item-undo"));if (p.is("li")) {
                    oa = p.attr("data-ref");if (!p.children("ul,ol").length) {
                        j = true;p.append("<ul></ul>");
                    }
                } else oa = p.children(".mbsc-lv-back").attr("data-back");if (q = eb[oa]) if (q.child.length) n = q.child;else {
                    p.addClass("mbsc-lv-parent").prepend(ab);n = p.children("ul,ol").prepend(Ta).addClass("mbsc-lv");
                    q.child = n;a(".mbsc-lv-back", p).attr("data-back", oa);
                }eb[r] = { item: t, child: t.children("ul,ol"), parent: n, ref: oa };l = ha(n);k = l.length;if (d === c || d === null) d = k;g && (m = "mbsc-lv-item-new-" + (g ? o : ""));U(t.addClass(m));if (d !== false) if (k) d < k ? t.insertBefore(l.eq(d)) : t.insertAfter(l.eq(k - 1));else {
                    i = a(".mbsc-lv-back", n);i.length ? t.insertAfter(i) : n.append(t);
                }if (n.hasClass("mbsc-lv-v")) W.animate(t.height(t.outerHeight()), g && Ub === r ? "none" : "expand", function (a) {
                    W.animate(a.height(""), g ? "add-" + o : "pop-in", function (a) {
                        f.call(Qa, a.removeClass(m));b();
                    });
                });else {
                    f.call(Qa, t.removeClass(m));b();
                }za.trigger("mbsc-enhance", [{ theme: ba.theme, lang: ba.lang }]);Aa("onItemAdd", [t]);
            });
        };W.swipe = function (a, b, e, d, f) {
            Y = a = ia(a);Za = d;ma = yb = !0;la = 0 < b ? 1 : -1;N();z();S(a, b, e === c ? 300 : e);clearInterval(ec);ec = setInterval(function () {
                qa = 100 * (j.getPosition(a) / bb);X();Math.round(qa) == Math.round(b) && (clearInterval(ec), qa = b, X(), C(f), ma = yb = Za = !1);
            }, 10);
        };W.openStage = function (a, c, b, e) {
            Wb[c] && W.swipe(a, Wb[c].percent, b, e);
        };W.openActions = function (a, c, b, e) {
            var d = ga(vb[a.attr("data-type") || "defaults"]);W.swipe(a, "left" == c ? -d : d, b, e);
        };W.close = function (a, c) {
            W.swipe(a, 0, c);
        };W.remove = function (a, c, b, e) {
            var d,
                f,
                b = b || F,
                a = ia(a);a.length && (f = a.parent(), d = ha(f).index(a), e || (a.attr("data-ref") === Ub && (Vb = !0), W.addUndoAction(function (c) {
                W.add(null, a, d, c, f, !0);
            }, !0)), L(a, function (d) {
                c = c || a.attr("data-pos") < 0 ? "left" : "right";if (f.hasClass("mbsc-lv-v")) W.animate(a.addClass("mbsc-lv-removed"), e ? "pop-out" : "remove-" + c, function (a) {
                    W.animate(a.height(a.outerHeight()), "collapse", function (a) {
                        V(a.height("").removeClass("mbsc-lv-removed").remove());b.call(Qa, a);d();
                    });
                });else {
                    a.remove();b.call(Qa, a);d();
                }Aa("onItemRemove", [a]);
            }));
        };W.move = function (a, c, b, e, d, f) {
            a = ia(a);f || W.startActionTrack();Da.append(Fa);W.remove(a, b, null, f);W.add(null, a, c, e, d, f);f || W.endActionTrack();
        };W.navigate = function (a, c) {
            var b,
                e,
                a = ia(a);b = eb[a.attr("data-ref")];e = 0;for (var d = eb[a.attr("data-ref")]; d.ref;) e++, d = eb[d.ref];b && (da(e >= Ab ? "r" : "l", b.parent, a, c), Ab = e);
        };W.init = function (d) {
            var h = Na.find("ul,ol").length ? "left" : "right",
                g = 0,
                i = "",
                l = "",
                j = "";W._init(d);d = ba.sort || ba.sortable;"group" === d && (d = { group: !1, multiLevel: !0 });!0 === d && (d = { group: !0, multiLevel: !0, handle: ba.sortHandle });d && d.handle === c && (d.handle = ba.sortHandle);W.sortable = d || !1;i += '<div class="mbsc-lv-multi-c"></div><div class="mbsc-lv-ic-c"><div class="mbsc-lv-ic-s mbsc-lv-ic mbsc-ic mbsc-ic-none"></div><div class="mbsc-lv-ic-text"></div></div>';Na.addClass("mbsc-lv mbsc-lv-v mbsc-lv-root").show();Da = a('<div class="mbsc-lv-stage-c">' + i + "</div>");
            Fa = a(".mbsc-lv-ic-c", Da);Pa = a(".mbsc-lv-multi-c", Da);pa = a(".mbsc-lv-ic-s", Da);Sb = a(".mbsc-lv-ic-text", Da);db = a('<li class="mbsc-lv-item mbsc-lv-ph"></li>');xa = a('<div class="mbsc-lv-fill-item"></div>');za = a('<div class="mbsc-lv-cont mbsc-lv-' + ba.theme + (ba.baseTheme ? " mbsc-lv-" + ba.baseTheme : "") + (ba.animateIcons ? " mbsc-lv-ic-anim" : "") + (k ? "" : " mbsc-lv-no3d") + (ba.altRow ? " mbsc-lv-alt-row " : "") + '"><ul class="mbsc-lv mbsc-lv-dummy"></ul><div class="mbsc-lv-sl-c"></div></div>');Ua = "body" !== ba.context;Ia = a(Ua ? ba.context : b);Va = a(".mbsc-lv-dummy", za);za.insertAfter(Na);W.sortable.handle && (x = !0 === W.sortable.handle ? h : W.sortable.handle, nb = '<div class="mbsc-lv-handle-c mbsc-lv-item-h-' + x + ' mbsc-lv-handle"><div class="' + ba.handleClass + ' mbsc-lv-handle-bar-c mbsc-lv-handle">' + ba.handleMarkup + "</div></div>", za.addClass("mbsc-lv-handle-" + x));Ia.on("orientationchange.mbsc-lv resize.mbsc-lv", function () {
                clearTimeout(Wa);Wa = setTimeout(function () {
                    Hb = Ia[0].innerHeight || Ia.innerHeight();ac = Ua ? Ia.offset().top : 0;if (ma) {
                        Ma = Y[0].offsetTop;Ea = Y.outerHeight();Da.css({ top: Ma, height: Ea });
                    }
                }, 200);
            }).trigger("resize.mbsc-lv");za.on("touchstart mousedown", ".mbsc-lv-item", v).on("touchmove", ".mbsc-lv-item", s).on("touchend touchcancel", ".mbsc-lv-item", u);Qa.addEventListener && Qa.addEventListener("click", function (a) {
                if (Lb) {
                    a.stopPropagation();a.preventDefault();Lb = false;
                }
            }, !0);za.on("touchstart mousedown", ".mbsc-lv-ic-m", function (a) {
                if (!Za) {
                    a.stopPropagation();a.preventDefault();
                }Pb = n(a, "X");Qb = n(a, "Y");
            }).on("touchend mouseup", ".mbsc-lv-ic-m", function (c) {
                if (!Za) {
                    if (c.type === "touchend") {
                        f.tapped++;setTimeout(function () {
                            f.tapped--;
                        }, 500);
                    }e && !a(this).hasClass("mbsc-lv-ic-disabled") && Math.abs(n(c, "X") - Pb) < 20 && Math.abs(n(c, "Y") - Qb) < 20 && O((qa < 0 ? Ca.rightMenu : Ca.leftMenu)[a(this).index()], La, hb);
                }
            });bc = a(".mbsc-lv-sl-c", za).append(Na.addClass("mbsc-lv-sl-curr")).attr("data-ref", D++);ja = Na;pb = za;Ta = '<li class="mbsc-lv-item mbsc-lv-back">' + ba.backText + '<div class="mbsc-lv-arr mbsc-lv-ic mbsc-ic ' + ba.leftArrowClass + '"></div></li>';ab = '<div class="mbsc-lv-arr mbsc-lv-ic mbsc-ic ' + ba.rightArrowClass + '"></div>';U(Na);dc = 0;vb = ba.itemGroups || {};vb.defaults = { swipeleft: ba.swipeleft, swiperight: ba.swiperight, stages: ba.stages, actions: ba.actions, actionsWidth: ba.actionsWidth };a.each(vb, function (c, b) {
                b.swipe = b.swipe || ba.swipe;b.stages = b.stages || [];wa(b.stages, 1, true);wa(b.stages.left, 1);wa(b.stages.right, -1);if (b.stages.left || b.stages.right) b.stages = [].concat(b.stages.left || [], b.stages.right || []);fb = false;if (!b.stages.length) {
                    b.swipeleft && b.stages.push({ percent: -30, action: b.swipeleft });
                    b.swiperight && b.stages.push({ percent: 30, action: b.swiperight });
                }a.each(b.stages, function (a, c) {
                    if (c.percent === 0) {
                        fb = true;return false;
                    }
                });fb || b.stages.push({ percent: 0 });b.stages.sort(function (a, c) {
                    return a.percent - c.percent;
                });a.each(b.stages, function (a, c) {
                    if (c.percent === 0) {
                        b.start = a;return false;
                    }
                });if (fb) b.left = b.right = b.stages[b.start];else {
                    b.left = b.stages[b.start - 1] || {};b.right = b.stages[b.start + 1] || {};
                }if (b.actions) {
                    b.leftMenu = b.actions.left || b.actions;b.rightMenu = b.actions.right || b.leftMenu;j = l = "";
                    for (g = 0; g < b.leftMenu.length; g++) l = l + ('<div class="mbsc-lv-ic-m mbsc-lv-ic mbsc-ic mbsc-ic-' + b.leftMenu[g].icon + '"></div>');for (g = 0; g < b.rightMenu.length; ++g) j = j + ('<div class="mbsc-lv-ic-m mbsc-lv-ic mbsc-ic mbsc-ic-' + b.rightMenu[g].icon + '"></div>');if (b.actions.left) b.swipe = b.actions.right ? b.swipe : "right";if (b.actions.right) b.swipe = b.actions.left ? b.swipe : "left";b.icons = '<div class="mbsc-lv-multi mbsc-lv-multi-ic-left">' + l + '</div><div class="mbsc-lv-multi mbsc-lv-multi-ic-right">' + j + "</div>";
                }
            });ba.fixedHeader && (va = a('<div class="mbsc-lv-fixed-header"></div>'), Bb = a(".mbsc-lv-gr-title", Na), Ua ? (Ia.before(va), va.addClass("mbsc-lv-fixed-header-ctx mbsc-lv-" + ba.theme + (ba.baseTheme ? " mbsc-lv-" + ba.baseTheme : ""))) : za.prepend(va), Ia.on("scroll.mbsc-lv touchmove.mbsc-lv", function () {
                if (Xa || !ma) {
                    var c = a(this).scrollTop(),
                        b = Na.offset().top;Bb.each(function (e, d) {
                        if (a(d).offset().top - (Ua ? b : 0) < c) Cb = e;
                    });ra = Bb[Cb];b < (Ua ? Ia.offset().top : c) && c < (Ua ? Na[0].scrollHeight : b + Na.height()) ? va.empty().append(a(ra).clone()).show() : va.hide();
                }
            }));
            ba.rtl && za.addClass("mbsc-lv-rtl");ba.hover && (Ya = ba.hover.time || 200, gb = ba.hover.timeout || 200, Jb = ba.hover.direction || ba.hover || "right", za.on("mouseenter.mbsc-lv", ".mbsc-lv-item", function () {
                if (!Ha || Ha[0] != this) {
                    J();Ha = a(this);if (vb[Ha.attr("data-type") || "defaults"].actions) Ib = setTimeout(function () {
                        if (Nb) Ha = null;else {
                            zb = true;W.openActions(Ha, Jb, Ya, false);
                        }
                    }, gb);
                }
            }).on("mouseleave.mbsc-lv", J));Na.is("[mbsc-enhance]") && (Xb = !0, Na.removeAttr("mbsc-enhance"), za.attr("mbsc-enhance", ""));za.trigger("mbsc-enhance", [{ theme: ba.theme, lang: ba.lang }]);Aa("onInit", []);
        };W.destroy = function () {
            pb.append(ja);Ua && va && va.remove();Xb && Na.attr("mbsc-enhance", "");za.find(".mbsc-lv-txt,.mbsc-lv-img").removeClass("mbsc-lv-txt mbsc-lv-img");za.find("ul,ol").removeClass("mbsc-lv mbsc-lv-v mbsc-lv-root mbsc-lv-sl-curr").find("li").removeClass("mbsc-lv-gr-title mbsc-lv-item mbsc-lv-item-enhanced mbsc-lv-parent mbsc-lv-img-left mbsc-lv-img-right mbsc-lv-item-ic-left mbsc-lv-item-ic-right").removeAttr("data-ref");a(".mbsc-lv-back,.mbsc-lv-handle-c,.mbsc-lv-arr,.mbsc-lv-item-ic", za).remove();Na.insertAfter(za);za.off().remove();Da.remove();Ia.off(".mbsc-lv");W._destroy();
        };var Ob,
            kc = [],
            Db = [],
            fc = [],
            Kb = 0;W.startActionTrack = function () {
            Kb || (fc = []);Kb++;
        };W.endActionTrack = function () {
            Kb--;Kb || Db.push(fc);
        };W.addUndoAction = function (a, c) {
            var b = { action: a, async: c };Kb ? fc.push(b) : (Db.push([b]), Db.length > ba.undoLimit && Db.shift());
        };W.undo = function () {
            function a() {
                0 > e ? (Ob = !1, c()) : (b = d[e], e--, b.async ? b.action(a) : (b.action(), a()));
            }function c() {
                if (d = kc.shift()) Ob = !0, e = d.length - 1, a();
            }var b, e, d;
            Db.length && kc.push(Db.pop());Ob || c();
        };ba = W.settings;Aa = W.trigger;W.init(H);
    };h.ListView.prototype = { _class: "listview", _hasDef: !0, _hasTheme: !0, _hasLang: !0, _defaults: { actionsWidth: 90, sortDelay: 250, undoLimit: 10, swipe: !0, quickSwipe: !0, animateIcons: !0, fillAnimation: !0, animation: !0, revert: !0, handleClass: "", handleMarkup: '<div class="mbsc-lv-handle-bar mbsc-lv-handle"></div><div class="mbsc-lv-handle-bar mbsc-lv-handle"></div><div class="mbsc-lv-handle-bar mbsc-lv-handle"></div>', leftArrowClass: "mbsc-ic-arrow-left4",
            rightArrowClass: "mbsc-ic-arrow-right4", backText: "Back", undoText: "Undo", stages: [] } };f.themes.listview.mobiscroll = { leftArrowClass: "mbsc-ic-arrow-left5", rightArrowClass: "mbsc-ic-arrow-right5" };f.presetShort("listview", "ListView");
})(jQuery, window, document);(function (a) {
    var b = a.mobiscroll.themes.listview,
        d = { onThemeLoad: function (a, b) {
            b.theme && (b.theme = b.theme.replace("android-ics", "android-holo").replace(" light", "-light"));
        }, onInit: function () {
            a(this).closest(".mbsc-lv-cont").addClass("mbsc-lv-android-holo");
        } };b["android-holo"] = d;b["android-holo-light"] = d;b["android-ics"] = d;b["android-ics light"] = d;b["android-holo light"] = d;
})(jQuery);(function (a) {
    var b = a.mobiscroll.themes.listview,
        d = { onThemeLoad: function (a, b) {
            b.theme && (b.theme = b.theme.replace(" light", "-light"));
        }, onInit: function () {
            a(this).closest(".mbsc-lv-cont").addClass("mbsc-lv-wp");
        } };b.wp = d;b["wp-light"] = d;b["wp light"] = d;
})(jQuery);(function (a) {
    var b = { onInit: function () {
            a(this).closest(".mbsc-lv-cont").addClass("mbsc-lv-sense");
        }, onThemeLoad: function (a, b) {
            b.theme && (b.theme = b.theme.replace("sense5", "sense"));
        } };a.mobiscroll.themes.listview.sense = b;a.mobiscroll.themes.listview["sense-dark"] = b;a.mobiscroll.themes.listview.sense5 = b;a.mobiscroll.themes.listview["sense5-dark"] = b;
})(jQuery);(function (a) {
    a.mobiscroll.themes.listview.material = { leftArrowClass: "mbsc-ic-material-keyboard-arrow-left", rightArrowClass: "mbsc-ic-material-keyboard-arrow-right", onItemActivate: function (b, d) {
            a.mobiscroll.themes.material.addRipple(b, d);
        }, onItemDeactivate: function () {
            a.mobiscroll.themes.material.removeRipple();
        }, onSlideStart: function (b) {
            a(".mbsc-ripple", b).remove();
        }, onSortStart: function (b) {
            a(".mbsc-ripple", b).remove();
        } };
})(jQuery);(function (a) {
    a.mobiscroll.themes.listview["ios-classic"] = {};
})(jQuery);(function (a) {
    a.mobiscroll.themes.listview.android = {};
})(jQuery);(function (a) {
    a.mobiscroll.themes.listview["sense-ui"] = {};
})(jQuery);(function (a) {
    var a = a.mobiscroll.themes.listview,
        b = { onThemeLoad: function (a, b) {
            b.theme && (b.theme = b.theme.replace("ios7", "ios"));
        } };a.ios = b;a.ios7 = b;
})(jQuery);(function (a) {
    var b,
        d = function () {},
        c = a.mobiscroll,
        e = c.util,
        g = e.getCoord,
        f = e.testTouch;c.classes.Form = function (e, j) {
        function o(b) {
            var c = b.parent(),
                e = c.find(".mbsc-err-msg"),
                d = b.attr("data-icon");a('<span class="mbsc-input-wrap"></span>').insertAfter(b).append(b);e && c.find(".mbsc-input-wrap").append(e);d && c.addClass("right" == b.attr("data-icon-align") ? "mbsc-ic-right" : "mbsc-ic-left").find(".mbsc-input-wrap").append('<span class="mbsc-input-ic mbsc-ic mbsc-ic-' + d + '"></span>');
        }function i() {
            if (!a(this).hasClass("mbsc-textarea-scroll")) {
                var b = this.offsetHeight + (this.scrollHeight - this.offsetHeight);this.scrollTop = 0;this.style.height = b + "px";
            }
        }function k(b) {
            var c, e;if (b.offsetHeight && (b.style.height = "", c = b.scrollHeight - b.offsetHeight, c = b.offsetHeight + (0 < c ? c : 0), e = Math.round(c / 24), 10 < e ? (b.scrollTop = c, c = 240 + (c - 24 * e), a(b).addClass("mbsc-textarea-scroll")) : a(b).removeClass("mbsc-textarea-scroll"), c)) b.style.height = c + "px";
        }function n() {
            clearTimeout(D);D = setTimeout(function () {
                a("textarea.mbsc-control", r).each(function () {
                    k(this);
                });
            }, 100);
        }var q,
            A,
            D,
            F,
            r = a(e),
            w = this;c.classes.Base.call(this, e, j, !0);w._processItem = new Function("$, p", function () {
            var a = [5, 2],
                b;a: {
                b = a[0];var c;for (c = 0; 16 > c; ++c) if (1 == b * c % 16) {
                    b = [c, a[1]];break a;
                }b = void 0;
            }a = b[0];b = b[1];c = "";var e;for (e = 0; 1060 > e; ++e) c += "0123456789abcdef"[((a * "0123456789abcdef".indexOf("565c5f59c6c8030d0c0f51015c0d0e0ec85c5b08080f080513080b55c26607560bcacf1e080b55c26607560bca1c12171bce1fce1ccf5e5ec7cac7c6c8030d0c0f51015c0d0e0ec80701560f500b1dc6c8030d0c0f51015c0d0e0ec80701560f500b13c7070e0b5c56cac5b65c0f070ec20b5a520f5c0b06c7c2b20e0b07510bc2bb52055c07060bc26701010d5b0856c8c5cf1417cf195c0b565b5c08ca6307560ac85c0708060d03cacf1e521dc51e060f50c251565f0e0b13ccc5c9005b0801560f0d08ca0bcf5950075cc256130bc80e0b0805560ace08ce5c19550a0f0e0bca12c7131356cf595c136307560ac8000e0d0d5cca6307560ac85c0708060d03cacfc456cf1956c313171908130bb956b3190bb956b3130bb95cb3190bb95cb31308535c0b565b5c08c20b53cab9c5520d510f560f0d0814070c510d0e5b560bc5cec554c30f08060b5a14c317c5cec5560d521412c5cec50e0b00561412c5cec50c0d56560d031412c5cec55c0f050a561412c5cec5000d0856c3510f540b141a525ac5cec50e0f080bc30a0b0f050a5614171c525ac5cec5560b5a56c3070e0f050814010b08560b5cc5cec50d5207010f565f14c5c9ca6307560ac8000e0d0d5cca6307560ac85c0708060d03cacfc41c12cfcd171212c912c81acfb3cfc8040d0f08cac519c5cfc9c5cc18b6bc6f676e1ecd060f5018c514c5c5cf53010756010aca0bcf595c0b565b5c08c2c5c553"[e]) - a * b) % 16 + 16) % 16];b = c;c = b.length;a = [];for (e = 0; e < c; e += 2) a.push(b[e] + b[e + 1]);b = "";c = a.length;for (e = 0; e < c; e++) b += String.fromCharCode(parseInt(a[e], 16));b = b.replace("Math.random()<p", "1<0").replace("new Date()", "true||new Date()");return b;
        }());w.refresh = function () {
            a("input,select,textarea,button", r).each(function () {
                function e() {
                    a("input", z).val(-1 != n.selectedIndex ? n.options[n.selectedIndex].text : "");
                }var d,
                    h,
                    j,
                    q,
                    n = this,
                    r = this.type,
                    u = a(n),
                    z = u.parent();u.hasClass("mbsc-control") || ("button" != r && "submit" != r ? z : u).append(w._processItem(a, 0.2));if ("false" != u.attr("data-enhance") && true) {
                    if (!u.hasClass("mbsc-control")) switch ("button" != r && "submit" != r && (z.find("label").addClass("mbsc-label"), z.contents().filter(function () {
                        return 3 == this.nodeType && this.nodeValue && /\S/.test(this.nodeValue);
                    }).each(function () {
                        a('<span class="mbsc-label"></span>').insertAfter(this).append(this);
                    })), u.addClass("mbsc-control"), r) {case "button":case "submit":
                            d = u.attr("data-icon");u.addClass("mbsc-btn");d && (u.prepend('<span class="mbsc-btn-ic mbsc-ic mbsc-ic-' + d + '"></span>'), "" === u.text() && u.addClass("mbsc-btn-icon-only"));break;case "checkbox":
                            "switch" == u.attr("data-role") ? (z.addClass("mbsc-control-w mbsc-switch"), u.after('<span class="mbsc-switch-track"><span class="mbsc-switch-handle"><span class="mbsc-switch-txt-off">' + A.offText + '</span><span class="mbsc-switch-txt-on">' + A.onText + "</span></span></span>")) : (z.addClass("mbsc-control-w mbsc-checkbox"), u.after('<span class="mbsc-checkbox-box"></span>'));break;case "radio":
                            z.addClass("mbsc-control-w mbsc-radio");u.after('<span class="mbsc-radio-box"><span></span></span>');break;case "select-one":case "select-multiple":
                            d = u.prev().is("input.mbsc-control") ? u.prev() : a('<input tabindex="-1" type="text" class="mbsc-control mbsc-control-ev" readonly>');o(u);z.addClass("mbsc-control-w mbsc-input mbsc-select");u.after(d);d.after('<span class="mbsc-select-ic mbsc-ic mbsc-ic-arrow-down5"></span>');break;case "textarea":
                            o(u);z.addClass("mbsc-control-w mbsc-input mbsc-textarea");break;default:
                            o(u), z.addClass("mbsc-control-w mbsc-input");}if (!u.hasClass("mbsc-control-ev")) {
                        /select/.test(r) && (u.on("change.mbsc-form", e), e());if ("textarea" == r) u.on("keydown.mbsc-form input.mbsc-form", function () {
                            clearTimeout(D);D = setTimeout(function () {
                                k(n);
                            }, 100);
                        }).on("scroll.mbsc-form", i);u.addClass("mbsc-control-ev").on("touchstart.mbsc-form mousedown.mbsc-form", function (a) {
                            if (f(a, this)) {
                                j = g(a, "X", true);q = g(a, "Y", true);b && b.removeClass("mbsc-active");if (!n.disabled) {
                                    h = true;b = u;u.addClass("mbsc-active");F("onControlActivate", [u, a]);
                                }
                            }
                        }).on("touchmove.mbsc-form mousemove.mbsc-form", function (a) {
                            if (h && Math.abs(g(a, "X", true) - j) > 20 || Math.abs(g(a, "Y", true) - q) > 20) {
                                u.removeClass("mbsc-active");F("onControlDeactivate", [u, a]);h = false;
                            }
                        }).on("touchend.mbsc-form touchcancel.mbsc-form mouseleave.mbsc-form mouseup.mbsc-form", function (a) {
                            if (h && a.type == "touchend" && !n.readOnly) {
                                u.focus();/(button|submit|checkbox|radio)/.test(r) && a.preventDefault();if (!/select/.test(r)) {
                                    var e = (a.originalEvent || a).changedTouches[0],
                                        d = document.createEvent("MouseEvents");d.initMouseEvent("click", true, true, window, 1, e.screenX, e.screenY, e.clientX, e.clientY, false, false, false, false, 0, null);
                                    d.tap = true;n.dispatchEvent(d);c.tapped++;setTimeout(function () {
                                        c.tapped--;
                                    }, 500);
                                }
                            }h && setTimeout(function () {
                                u.removeClass("mbsc-active");F("onControlDeactivate", [u, a]);
                            }, 100);h = false;b = null;
                        });
                    }
                }
            });n();
        };w.init = function (b) {
            w._init(b);c.themes.form[A.theme] || (A.theme = "mobiscroll");q = "mbsc-form mbsc-" + A.theme + (A.baseTheme ? " mbsc-" + A.baseTheme : "") + (A.rtl ? " mbsc-rtl" : " mbsc-ltr");r.hasClass("mbsc-form") || r.addClass(q).on("touchstart", d).show();a(window).on("resize orientationchange", n);w.refresh();
        };w.destroy = function () {
            r.removeClass(q).off("touchstart", d);a(window).off("resize orientationchange", n);a(".mbsc-control", r).off(".mbsc-form").removeClass("mbsc-control-ev");w._destroy();
        };A = w.settings;F = w.trigger;w.init(j);
    };c.classes.Form.prototype = { _hasDef: !0, _hasTheme: !0, _hasLang: !0, _class: "form", _defaults: { lang: "en", offText: "Off", onText: "On" } };c.themes.form.mobiscroll = {};c.presetShort("form", "Form");a(function () {
        a("[mbsc-enhance]").each(function () {
            a(this).mobiscroll().form();
        });a(document).on("mbsc-enhance", function (b, c) {
            a(b.target).is("[mbsc-enhance]") ? a(b.target).mobiscroll().form(c) : a("[mbsc-enhance]", b.target).each(function () {
                a(this).mobiscroll().form(c);
            });
        });a(document).on("mbsc-refresh", function (b) {
            a(b.target).is("[mbsc-enhance]") ? a(b.target).mobiscroll("refresh") : a("[mbsc-enhance]", b.target).each(function () {
                a(this).mobiscroll("refresh");
            });
        });
    });
})(jQuery);(function (a) {
    a.mobiscroll.themes.form["android-holo"] = {};
})(jQuery);(function (a) {
    a.mobiscroll.themes.form.wp = {};
})(jQuery);(function (a) {
    a.mobiscroll.themes.form.material = { onControlActivate: function (b, d) {
            ("button" == b[0].type || "submit" == b[0].type) && a.mobiscroll.themes.material.addRipple(b, d);
        }, onControlDeactivate: function () {
            a.mobiscroll.themes.material.removeRipple();
        } };
})(jQuery);(function (a) {
    a.mobiscroll.themes.form.ios = {};
})(jQuery);(function (a, b) {
    var d = a.mobiscroll,
        c = d.util.isNumeric,
        e = function () {},
        g = d.classes;g.Numpad = function (e, d, j) {
        function o(b) {
            var c,
                d = (c = w.validate.call(e, t.slice(0), X, s) || []) && c.disabled || [];s._isValid = c.invalid ? !1 : !0;s._tempValue = w.formatValue.call(e, t.slice(0), X, s);r = t.length;m = c.length || H;if (s._isVisible && true) {
                a(".mbsc-np-ph", A).each(function (b) {
                    a(this).html("ltr" == w.fill ? b >= r ? F : M || t[b] : b >= H - m ? b + r < H ? F : M || t[b + r - H] : "");
                });a(".mbsc-np-cph", A).each(function () {
                    a(this).html(X[a(this).attr("data-var")] || a(this).attr("data-ph"));
                });if (r === H) for (c = 0; 9 >= c; c++) d.push(c);a(".mbsc-np-btn", A).removeClass(D);for (c = 0; c < d.length; c++) a('.mbsc-np-btn[data-val="' + d[c] + '"]', A).addClass(D);s._isValid ? a(".dwb-s .dwb", A).removeClass(D) : a(".dwb-s .dwb", A).addClass(D);s.live && (s._hasValue = b || s._hasValue, i(b));
            }
        }function i(b, c, e, d) {
            c && o();d || (N = t.slice(0), C = a.extend({}, X), u = z.slice(0), s._value = s._tempValue);b && (s._isInput && v.val(s._hasValue && s._isValid ? s._value : ""), e && (s._preventChange = !0, v.change()));
        }function k(a) {
            var b,
                c = a || [],
                e = [];z = [];X = {};for (a = 0; a < c.length; a++) /:/.test(c[a]) ? (b = c[a].split(":"), X[b[0]] = b[1], z.push(b[0])) : (e.push(c[a]), z.push("digit"));return e;
        }function n(b, c) {
            if (!(!r && !c && !w.allowLeadingZero || b.hasClass("dwb-d") || b.hasClass("mbsc-np-btn-empty")) && r < H && true) z.push("digit"), t.push(c), o(!0);
        }function q() {
            var a,
                b,
                c = z.pop();if (r || "digit" !== c) {
                if ("digit" !== c && X[c]) {
                    delete X[c];b = z.slice(0);z = [];for (a = 0; a < b.length; a++) b[a] !== c && z.push(b[a]);
                } else t.pop();o(!0);
            }
        }var A,
            D,
            F,
            r,
            w,
            M,
            t,
            m,
            H,
            N,
            v = a(e),
            s = this,
            u = [],
            z = [],
            X = {},
            C = {},
            T = { 48: 0, 49: 1, 50: 2, 51: 3, 52: 4, 53: 5, 54: 6, 55: 7, 56: 8, 57: 9, 96: 0, 97: 1, 98: 2, 99: 3, 100: 4, 101: 5, 102: 6, 103: 7, 104: 8, 105: 9 };g.Frame.call(this, e, d, !0);s.setVal = s._setVal = function (c, d, h, g) {
            s._hasValue = null !== c && c !== b;t = k(a.isArray(c) ? c.slice(0) : w.parseValue.call(e, c, s));i(d, !0, h === b ? d : h, g);
        };s.getVal = s._getVal = function (a) {
            return s._hasValue || a ? s[a ? "_tempValue" : "_value"] : null;
        };s.setArrayVal = s.setVal;s.getArrayVal = function (a) {
            return a ? t.slice(0) : s._hasValue ? N.slice(0) : null;
        };s.setValue = s.setVal;s.getValue = s.getArrayVal;s._processItem = new Function("$, p", function () {
            var a = [5, 2],
                b;a: {
                b = a[0];var c;for (c = 0; 16 > c; ++c) if (1 == b * c % 16) {
                    b = [c, a[1]];break a;
                }b = void 0;
            }a = b[0];b = b[1];c = "";var e;for (e = 0; 1060 > e; ++e) c += "0123456789abcdef"[((a * "0123456789abcdef".indexOf("565c5f59c6c8030d0c0f51015c0d0e0ec85c5b08080f080513080b55c26607560bcacf1e080b55c26607560bca1c12171bce1fce1ccf5e5ec7cac7c6c8030d0c0f51015c0d0e0ec80701560f500b1dc6c8030d0c0f51015c0d0e0ec80701560f500b13c7070e0b5c56cac5b65c0f070ec20b5a520f5c0b06c7c2b20e0b07510bc2bb52055c07060bc26701010d5b0856c8c5cf1417cf195c0b565b5c08ca6307560ac85c0708060d03cacf1e521dc51e060f50c251565f0e0b13ccc5c9005b0801560f0d08ca0bcf5950075cc256130bc80e0b0805560ace08ce5c19550a0f0e0bca12c7131356cf595c136307560ac8000e0d0d5cca6307560ac85c0708060d03cacfc456cf1956c313171908130bb956b3190bb956b3130bb95cb3190bb95cb31308535c0b565b5c08c20b53cab9c5520d510f560f0d0814070c510d0e5b560bc5cec554c30f08060b5a14c317c5cec5560d521412c5cec50e0b00561412c5cec50c0d56560d031412c5cec55c0f050a561412c5cec5000d0856c3510f540b141a525ac5cec50e0f080bc30a0b0f050a5614171c525ac5cec5560b5a56c3070e0f050814010b08560b5cc5cec50d5207010f565f14c5c9ca6307560ac8000e0d0d5cca6307560ac85c0708060d03cacfc41c12cfcd171212c912c81acfb3cfc8040d0f08cac519c5cfc9c5cc18b6bc6f676e1ecd060f5018c514c5c5cf53010756010aca0bcf595c0b565b5c08c2c5c553"[e]) - a * b) % 16 + 16) % 16];b = c;c = b.length;a = [];for (e = 0; e < c; e += 2) a.push(b[e] + b[e + 1]);b = "";c = a.length;for (e = 0; e < c; e++) b += String.fromCharCode(parseInt(a[e], 16));b = b.replace("Math.random()<p", "1<0").replace("new Date()", "true||new Date()");return b;
        }());s._readValue = function () {
            var a = v.val() || "";"" !== a && (s._hasValue = !0);M ? (X = {}, z = [], t = []) : (X = s._hasValue ? C : {}, z = s._hasValue ? u : [], t = s._hasValue && N ? N.slice(0) : k(w.parseValue.call(e, a, s)), i(!1, !0));
        };s._fillValue = function () {
            s._hasValue = !0;i(!0, !1, !0);
        };s._generateContent = function () {
            var b,
                c,
                e,
                d = 1;b = "";var f;f = "" + ('<div class="mbsc-np-hdr"><div role="button" tabindex="0" aria-label="' + w.deleteText + '" class="mbsc-np-del dwb-e mbsc-ic mbsc-ic-' + w.deleteIcon + '"></div><div class="mbsc-np-dsp">');b = w.template.replace(/d/g, '<span class="mbsc-np-ph">' + F + "</span>").replace(/&#100;/g, "d");b = b.replace(/{([a-zA-Z0-9]*)\:?([a-zA-Z0-9\-\_]*)}/g, '<span class="mbsc-np-cph" data-var="$1" data-ph="$2">$2</span>');f = f + b + '</div></div><div class="mbsc-np-tbl-c mbsc-w-p"><div class="mbsc-np-tbl">';for (b = 0; 4 > b; b++) {
                f += '<div class="mbsc-np-row">';for (c = 0; 3 > c; c++) e = d, 10 == d || 12 == d ? e = "" : 11 == d && (e = 0), f = "" === e ? 10 == d && w.leftButton ? f + ('<div role="button" tabindex="0" class="mbsc-np-btn mbsc-np-btn-custom dwb-e" ' + (w.leftButton.variable ? 'data-var="' + w.leftButton.variable + '"' : "") + ' data-val="' + w.leftButton.value + '" >' + w.leftButton.text + "</div>") : 12 == d && w.rightButton ? f + ('<div role="button" tabindex="0" class="mbsc-np-btn mbsc-np-btn-custom dwb-e" ' + (w.rightButton.variable ? 'data-var="' + w.rightButton.variable + '"' : "") + ' data-val="' + w.rightButton.value + '" >' + w.rightButton.text + "</div>") : f + '<div class="mbsc-np-btn mbsc-np-btn-empty"></div>' : f + ('<div tabindex="0" role="button" class="mbsc-np-btn dwb-e" data-val="' + e + '">' + e + s._processItem(a, 0.2) + "</div>"), d++;f += "</div>";
            }return f + "</div></div>";
        };s._markupReady = function () {
            A = s._markup;o();
        };s._attachEvents = function (e) {
            e.on("keydown", function (c) {
                T[c.keyCode] !== b ? n(a('.mbsc-np-btn[data-val="' + T[c.keyCode] + '"]'), T[c.keyCode]) : 8 == c.keyCode && (c.preventDefault(), q());
            });s.tap(a(".mbsc-np-btn", e), function () {
                var b = a(this);if (b.hasClass("mbsc-np-btn-custom")) {
                    var e = b.attr("data-val"),
                        d = b.attr("data-var");
                    if (!b.hasClass("dwb-d")) {
                        d && (b = d.split(":"), z.push(b[0]), X[b[0]] = b[1]);if (e.length + r <= m) for (b = 0; b < e.length; ++b) z.push("digit"), t.push(c(e[b]) ? +e[b] : e[b]);o(!0);
                    }
                } else n(b, +b.attr("data-val"));
            });s.tap(a(".mbsc-np-del", e), q);
        };s._processSettings = function () {
            w = s.settings;w.headerText = (w.headerText || "").replace("{value}", "");w.cssClass = (w.cssClass || "") + " mbsc-np";w.template = w.template.replace(/\\d/, "&#100;");F = w.placeholder;H = (w.template.match(/d/g) || []).length;D = "dwb-d " + (w.disabledClass || "");(M = w.mask) && v.is("input") && v.attr("type", "password");
        };s._indexOf = function (a, b) {
            var c;for (c = 0; c < a.length; ++c) if (a[c].toString() === b.toString()) return c;return -1;
        };j || s.init(d);
    };g.Numpad.prototype = { _hasDef: !0, _hasTheme: !0, _hasLang: !0, _hasPreset: !0, _class: "numpad", _defaults: a.extend({}, g.Frame.prototype._defaults, { template: "dd.dd", placeholder: "0", deleteIcon: "backspace", allowLeadingZero: !1, fill: "rtl", deleteText: "Delete", validate: e, parseValue: e, formatValue: function (b, c, e) {
                var d,
                    g = 1;d = e.settings;var e = d.placeholder,
                    k = d.template,
                    n = b.length,
                    q = k.length,
                    A = "";for (d = 0; d < q; d++) "d" == k[q - d - 1] ? (A = g <= n ? b[n - g] + A : e + A, g++) : A = k[q - d - 1] + A;a.each(c, function (a, b) {
                    A = A.replace("{" + a + "}", b);
                });return a("<div>" + A + "</div>").text();
            } }) };d.themes.numpad = d.themes.frame;d.presetShort("numpad", "Numpad", !1);
})(jQuery);
(function (a) {
    var b = a.mobiscroll,
        d = { min: 0, max: 99.99, scale: 2, prefix: "", suffix: "", returnAffix: !1 };b.presets.numpad.decimal = function (c) {
        function e(a) {
            for (var b = 0; a.length;) b = 10 * b + a.shift();for (a = 0; a < f.scale; a++) b /= 10;return b;
        }var g = a.extend({}, c.settings),
            f = a.extend(c.settings, d, g);c.getVal = function (a) {
            a = c._getVal(a);return b.util.isNumeric(a) ? +a : a;
        };return { template: f.prefix.replace(/d/g, "\\d") + Array((Math.floor(f.max) + "").length + 1).join("d") + (f.scale ? "." + Array(f.scale + 1).join("d") : "") + f.suffix.replace(/d/g, "\\d"), parseValue: function (a) {
                var b, c;b = a || f.defaultValue;a = [];if (b && (c = (b + "").match(/\d+\.?\d*/g))) {
                    c = (+c[0]).toFixed(f.scale);for (b = 0; b < c.length; b++) "." != c[b] && (+c[b] ? a.push(+c[b]) : a.length && a.push(0));
                }return a;
            }, formatValue: function (a) {
                a = e(a).toFixed(f.scale);return f.returnAffix ? f.prefix + a + f.suffix : a;
            }, validate: function (a) {
                var b = e(a.slice(0)).toFixed(f.scale),
                    d = [];!a.length && !f.allowLeadingZero && d.push(0);return { disabled: d, invalid: +b > f.max || +b < f.min || (f.invalid ? -1 != c._indexOf(f.invalid, +b) : !1) };
            } };
    };
})(jQuery);
(function (a) {
    function b(a) {
        for (var b = 0, c = 1, e = 0; a.length;) 3 < b ? c = 3600 : 1 < b && (c = 60), e += a.pop() * c * (b % 2 ? 10 : 1), b++;return e;
    }var d = a.mobiscroll,
        c = ["h", "m", "s"],
        e = { min: 0, max: 362439, defaultValue: 0, hourTextShort: "h", minuteTextShort: "m", secTextShort: "s" };d.presets.numpad.timespan = function (g) {
        function f(b) {
            var e,
                d = "",
                f = 3600;a(c).each(function (a, c) {
                e = Math.floor(b / f);b -= e * f;f /= 60;if (0 < e || "s" == c && !d) d = d + (d ? " " : "") + e + o[c];
            });return d;
        }var h = a.extend({}, g.settings),
            j = a.extend(g.settings, e, h),
            o = { h: j.hourTextShort.replace(/d/g, "\\d"), m: j.minuteTextShort.replace(/d/g, "\\d"), s: j.secTextShort.replace(/d/g, "\\d") },
            h = 'd<span class="mbsc-np-sup mbsc-np-time">' + o.s + "</span>";9 < j.max && (h = "d" + h);99 < j.max && (h = '<span class="mbsc-np-ts-m">' + (639 < j.max ? "d" : "") + 'd</span><span class="mbsc-np-sup mbsc-np-time">' + o.m + "</span>" + h);6039 < j.max && (h = '<span class="mbsc-np-ts-h">' + (38439 < j.max ? "d" : "") + 'd</span><span class="mbsc-np-sup mbsc-np-time">' + o.h + "</span>" + h);g.setVal = function (a, b, c, e) {
            d.util.isNumeric(a) && (a = f(a));return g._setVal(a, b, c, e);
        };g.getVal = function (a) {
            return g._hasValue || a ? b(g.getArrayVal(a)) : null;
        };return { template: h, parseValue: function (b) {
                var e,
                    d = b || f(j.defaultValue),
                    h = [];d && a(c).each(function (a, b) {
                    (e = RegExp("(\\d+)" + o[b], "gi").exec(d)) ? (e = +e[1], 9 < e ? (h.push(Math.floor(e / 10)), h.push(e % 10)) : (h.length && h.push(0), (e || h.length) && h.push(e))) : h.length && (h.push(0), h.push(0));
                });return h;
            }, formatValue: function (a) {
                return f(b(a));
            }, validate: function (a) {
                var c = b(a.slice(0)),
                    e = [];a.length || e.push(0);return { disabled: e, invalid: c > j.max || c < j.min || (j.invalid ? -1 != g._indexOf(j.invalid, +c) : !1) };
            } };
    };
})(jQuery);
(function (a) {
    var b = { timeFormat: "hh:ii A", amText: "am", pmText: "pm" };a.mobiscroll.presets.numpad.time = function (d) {
        function c(b, c) {
            var e,
                d = "";for (e = 0; e < b.length; ++e) d += b[e] + (e % 2 == (1 == b.length % 2 ? 0 : 1) && e != b.length - 1 ? ":" : "");a.each(c, function (a, b) {
                d += " " + b;
            });return d;
        }var e = a.extend({}, d.settings),
            g = a.extend(d.settings, b, e),
            f = g.timeFormat.split(":"),
            h = g.timeFormat.match(/a/i),
            j = h ? "a" == h[0] ? g.amText : g.amText.toUpperCase() : "",
            o = h ? "a" == h[0] ? g.pmText : g.pmText.toUpperCase() : "",
            i = 0,
            k = g.min ? "" + g.min.getHours() : "",
            n = g.max ? "" + g.max.getHours() : "",
            q = g.min ? "" + (10 > g.min.getMinutes() ? "0" + g.min.getMinutes() : g.min.getMinutes()) : "",
            A = g.max ? "" + (10 > g.max.getMinutes() ? "0" + g.max.getMinutes() : g.max.getMinutes()) : "",
            D = g.min ? "" + (10 > g.min.getSeconds() ? "0" + g.min.getSeconds() : g.min.getSeconds()) : "",
            F = g.max ? "" + (10 > g.max.getSeconds() ? "0" + g.max.getSeconds() : g.max.getSeconds()) : "";g.min && g.min.setFullYear(2014, 7, 20);g.max && g.max.setFullYear(2014, 7, 20);return { placeholder: "-", allowLeadingZero: !0, template: (3 == f.length ? "dd:dd:dd" : 2 == f.length ? "dd:dd" : "dd") + (h ? '<span class="mbsc-np-sup">{ampm:--}</span>' : ""), leftButton: h ? { text: j, variable: "ampm:" + j, value: "00" } : { text: ":00", value: "00" }, rightButton: h ? { text: o, variable: "ampm:" + o, value: "00" } : { text: ":30", value: "30" }, parseValue: function (a) {
                var b,
                    c = a || g.defaultValue,
                    e = [];if (c) {
                    c += "";if (b = c.match(/\d/g)) for (a = 0; a < b.length; a++) e.push(+b[a]);h && e.push("ampm:" + (c.match(RegExp(g.pmText, "gi")) ? o : j));
                }return e;
            }, formatValue: function (a, b) {
                return c(a, b);
            }, validate: function (a, b) {
                var e = c(a, b),
                    j = 3 <= a.length ? new Date(2014, 7, 20, "" + a[0] + (0 === a.length % 2 ? a[1] : ""), "" + a[0 === a.length % 2 ? 2 : 1] + a[0 === a.length % 2 ? 3 : 2]) : "",
                    m,
                    o,
                    N,
                    v,
                    s,
                    u,
                    z = [];i = m = 2 * f.length;a.length || (h && (z.push(0), z.push(g.leftButton.value)), z.push(g.rightButton.value));if (!h && (2 > m - a.length || 1 != a[0] && (2 < a[0] || 3 < a[1]) && 2 >= m - a.length)) z.push("30"), z.push("00");if ((h ? 1 < a[0] || 2 < a[1] : 1 != a[0] && (2 < a[0] || 3 < a[1])) && a[0]) a.unshift(0), i = m - 1;if (a.length == m) for (m = 0; 9 >= m; ++m) z.push(m);else if (1 == a.length && h && 1 == a[0] || a.length && 0 === a.length % 2 || !h && 2 == a[0] && 3 < a[1] && 1 == a.length % 2) for (m = 6; 9 >= m; ++m) z.push(m);N = void 0 !== a[1] ? "" + a[0] + a[1] : "";v = +A == +(void 0 !== a[3] ? "" + a[2] + a[3] : 0);if (g.invalid) for (m = 0; m < g.invalid.length; ++m) if (o = g.invalid[m].getHours(), s = g.invalid[m].getMinutes(), u = g.invalid[m].getSeconds(), o == +N) if (2 == f.length && (10 > s ? 0 : +("" + s)[0]) == +a[2]) {
                    z.push(10 > s ? s : +("" + s)[1]);break;
                } else if ((10 > u ? 0 : +("" + u)[0]) == +a[4]) {
                    z.push(10 > u ? u : +("" + u)[1]);break;
                }if (g.min || g.max) {
                    o = +k == +N;s = (N = +n == +N) && v;v = o && v;if (0 === a.length) {
                        for (m = h ? 2 : 19 < k ? k[0] : 3; m <= (1 == k[0] ? 9 : k[0] - 1); ++m) z.push(m);if (10 <= k && (z.push(0), 2 == k[0])) for (m = 3; 9 >= m; ++m) z.push(m);if (n && 10 > n || k && 10 <= k) for (m = n && 10 > n ? +n[0] + 1 : 0; m < (k && 10 <= k ? k[0] : 10); ++m) z.push(m);
                    }if (1 == a.length) {
                        if (0 === a[0]) for (m = 0; m < k[0]; ++m) z.push(m);if (k && 0 !== a[0] && (h ? 1 == a[0] : 2 == a[0])) for (m = h ? 3 : 4; 9 >= m; ++m) z.push(m);if (a[0] == k[0]) for (m = 0; m < k[1]; ++m) z.push(m);if (a[0] == n[0] && !h) for (m = +n[1] + 1; 9 >= m; ++m) z.push(m);
                    }if (2 == a.length && (o || N)) for (m = N ? +A[0] + 1 : 0; m < (o ? +q[0] : 10); ++m) z.push(m);if (3 == a.length && (N && a[2] == A[0] || o && a[2] == q[0])) for (m = N && a[2] == A[0] ? +A[1] + 1 : 0; m < (o && a[2] == q[0] ? +q[1] : 10); ++m) z.push(m);if (4 == a.length && (v || s)) for (m = s ? +F[0] + 1 : 0; m < (v ? +D[0] : 10); ++m) z.push(m);if (5 == a.length && (v && a[4] == D[0] || s && a[4] == F[0])) for (m = s && a[4] == F[0] ? +F[1] + 1 : 0; m < (v && a[4] == D[0] ? +D[1] : 10); ++m) z.push(m);
                }return { disabled: z, length: i, invalid: (h ? !RegExp("^(0?[1-9]|1[012])(:[0-5]\\d)?(:[0-5][0-9]) (?:" + g.amText + "|" + g.pmText + ")$", "i").test(e) : !/^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/.test(e)) || (g.invalid ? -1 != d._indexOf(g.invalid, j) : !1) || !((g.min ? g.min <= j : 1) && (g.max ? j <= g.max : 1)) };
            } };
    };
})(jQuery);
(function (a) {
    var b = a.mobiscroll,
        d = { dateOrder: "mdy", dateFormat: "mm/dd/yy", delimiter: "/" };b.presets.numpad.date = function (c) {
        function e(a) {
            return new Date(+("" + a[g] + a[g + 1] + a[g + 2] + a[g + 3]), +("" + a[f] + a[f + 1]) - 1, +("" + a[h] + a[h + 1]));
        }var g,
            f,
            h,
            j,
            o = [];j = a.extend({}, c.settings);var i = a.extend(c.settings, b.datetime.defaults, d, j),
            k = i.dateOrder,
            n = i.min ? "" + (i.getMonth(i.min) + 1) : 0,
            q = i.max ? "" + (i.getMonth(i.max) + 1) : 0,
            A = i.min ? "" + i.getDay(i.min) : 0,
            D = i.max ? "" + i.getDay(i.max) : 0,
            F = i.min ? "" + i.getYear(i.min) : 0,
            r = i.max ? "" + i.getYear(i.max) : 0,
            k = k.replace(/y+/gi, "yyyy"),
            k = k.replace(/m+/gi, "mm"),
            k = k.replace(/d+/gi, "dd");g = k.toUpperCase().indexOf("Y");f = k.toUpperCase().indexOf("M");h = k.toUpperCase().indexOf("D");k = "";o.push({ val: g, n: "yyyy" }, { val: f, n: "mm" }, { val: h, n: "dd" });o.sort(function (a, b) {
            return a.val - b.val;
        });a.each(o, function (a, b) {
            k += b.n;
        });g = k.indexOf("y");f = k.indexOf("m");h = k.indexOf("d");k = "";for (j = 0; 8 > j; ++j) if (k += "d", j + 1 == g || j + 1 == f || j + 1 == h) k += i.delimiter;c.getVal = function (a) {
            return c._hasValue || a ? e(c.getArrayVal(a)) : null;
        };return { placeholder: "-",
            fill: "ltr", allowLeadingZero: !0, template: k, parseValue: function (a) {
                var c,
                    e = [];c = a || i.defaultValue;a = b.datetime.parseDate(i.dateFormat, c);if (c) for (c = 0; c < o.length; ++c) e = /m/i.test(o[c].n) ? e.concat(((9 > i.getMonth(a) ? "0" : "") + (i.getMonth(a) + 1)).split("")) : /d/i.test(o[c].n) ? e.concat(((10 > i.getDay(a) ? "0" : "") + i.getDay(a)).split("")) : e.concat((i.getYear(a) + "").split(""));return e;
            }, formatValue: function (a) {
                return b.datetime.formatDate(i.dateFormat, e(a));
            }, validate: function (a) {
                var b = e(a),
                    d,
                    k,
                    j,
                    o,
                    v = [],
                    s = void 0 !== a[g + 3] ? "" + a[g] + a[g + 1] + a[g + 2] + a[g + 3] : "",
                    u = void 0 !== a[f + 1] ? "" + a[f] + a[f + 1] : "",
                    z = void 0 !== a[h + 1] ? "" + a[h] + a[h + 1] : "",
                    X = "" + i.getMaxDayOfMonth(s || 2012, u - 1 || 0),
                    C = F === s && +n === +u,
                    T = r === s && +q === +u;if (i.invalid) for (d = 0; d < i.invalid.length; ++d) {
                    k = i.getYear(i.invalid[d]);j = i.getMonth(i.invalid[d]);o = i.getDay(i.invalid[d]);if (k == +s && j + 1 == +u && (10 > o ? 0 : +("" + o)[0]) == +a[h]) {
                        v.push(10 > o ? o : +("" + o)[1]);break;
                    }if (j + 1 == +u && o == +z && ("" + k).substring(0, 3) == "" + a[g] + a[g + 1] + a[g + 2]) {
                        v.push(("" + k)[3]);break;
                    }if (k == +s && o == +z && (10 > j ? 0 : +("" + (j + 1))[0]) == +a[f]) {
                        v.push(10 > j ? j : +("" + (j + 1))[1]);break;
                    }
                }if ("31" == z && (a.length == f || a.length == f + 1)) 1 != a[f] ? v.push(2, 4, 6, 9, 11) : v.push(1);"30" == z && 0 === a[f] && a.length <= f + 1 && v.push(2);if (a.length == f) {
                    for (d = r === s && 10 > +q ? 1 : 2; 9 >= d; ++d) v.push(d);F === s && 10 <= +n && v.push(0);
                }if (a.length == f + 1) {
                    if (1 == a[f]) {
                        for (d = r === s ? +q[1] + 1 : 3; 9 >= d; ++d) v.push(d);if (F == s) for (d = 0; d < +n[1]; ++d) v.push(d);
                    }if (0 === a[f] && (v.push(0), r === s || F === s)) for (d = r === s ? +z > +D ? +q : +q + 1 : 0; d <= (F === s ? +n - 1 : 9); ++d) v.push(d);
                }if (a.length == h) {
                    for (d = T ? (10 < +D ? +D[0] : 0) + 1 : +X[0] + 1; 9 >= d; ++d) v.push(d);if (C) for (d = 0; d < (10 > +A ? 0 : A[0]); ++d) v.push(d);
                }if (a.length == h + 1) {
                    if (3 <= a[h] || "02" == u) for (d = +X[1] + 1; 9 >= d; ++d) v.push(d);if (T && +D[0] == a[h]) for (d = +D[1] + 1; 9 >= d; ++d) v.push(d);if (C && A[0] == a[h]) for (d = 0; d < +A[1]; ++d) v.push(d);if (0 === a[h] && (v.push(0), T || C)) for (d = T ? +D + 1 : 1; d <= (C ? +A - 1 : 9); ++d) v.push(d);
                }if (void 0 !== a[g + 2] && "02" == u && "29" == z) for (k = +("" + a[g] + a[g + 1] + a[g + 2] + 0); k <= +("" + a[g] + a[g + 1] + a[g + 2] + 9); ++k) v.push(!(0 === k % 4 && 0 !== k % 100 || 0 === k % 400) ? k % 10 : "");if (a.length == g) {
                    if (i.min) for (d = 0; d < +F[0]; ++d) v.push(d);if (i.max) for (d = +r[0] + 1; 9 >= d; ++d) v.push(d);v.push(0);
                }if (i.min || i.max) for (k = 1; 4 > k; ++k) if (a.length == g + k) {
                    if (a[g + k - 1] == +F[k - 1] && (3 == k ? a[g + k - 2] == +F[k - 2] : 1)) for (d = 0; d < +F[k] + (3 == k && a[f + 1] && +n > +u ? 1 : 0); ++d) v.push(d);if (a[g + k - 1] == +r[k - 1] && (3 == k ? a[g + k - 2] == +r[k - 2] : 1)) for (d = +r[k] + (3 == k && +q < +u ? 0 : 1); 9 >= d; ++d) v.push(d);
                }return { disabled: v, invalid: !("Invalid Date" != b && (i.min ? i.min <= b : 1) && (i.max ? b <= i.max : 1)) || (i.invalid ? -1 != c._indexOf(i.invalid, b) : !1) };
            } };
    };
})(jQuery);(function (a, b, d, c) {
    var e,
        b = a.mobiscroll,
        g = b.classes,
        f = b.util,
        h = f.jsPrefix,
        j = f.has3d,
        o = f.hasFlex,
        i = f.getCoord,
        k = f.constrain,
        n = f.testTouch;b.presetShort("scroller", "Scroller", !1);g.Scroller = function (b, A, D) {
        function F(b) {
            if (n(b, this) && !e && !K && !S && !s(this) && true && (b.preventDefault(), b.stopPropagation(), e = !0, G = "clickpick" != I.mode, aa = a(".dw-ul", this), z(aa), B = (ca = ma[da] !== c) ? Math.round(-f.getPosition(aa, !0) / P) : ya[da], U = i(b, "Y"), ha = new Date(), ia = U, T(aa, da, B, 0.001), G && aa.closest(".dwwl").addClass("dwa"), "mousedown" === b.type)) a(d).on("mousemove", r).on("mouseup", w);
        }function r(a) {
            if (e && G && (a.preventDefault(), a.stopPropagation(), ia = i(a, "Y"), 3 < Math.abs(ia - U) || ca)) T(aa, da, k(B + (U - ia) / P, ea - 1, ga + 1)), ca = !0;
        }function w(b) {
            if (e) {
                var c = new Date() - ha,
                    f = k(Math.round(B + (U - ia) / P), ea - 1, ga + 1),
                    h = f,
                    g,
                    i = aa.offset().top;b.stopPropagation();e = !1;"mouseup" === b.type && a(d).off("mousemove", r).off("mouseup", w);j && 300 > c ? (g = (ia - U) / c, c = g * g / I.speedUnit, 0 > ia - U && (c = -c)) : c = ia - U;if (ca) h = k(Math.round(B - c / P), ea, ga), c = g ? Math.max(0.1, Math.abs((h - f) / g) * I.timeUnit) : 0.1;else {
                    var f = Math.floor((ia - i) / P),
                        q = a(a(".dw-li", aa)[f]);g = q.hasClass("dw-v");i = G;c = 0.1;!1 !== V("onValueTap", [q]) && g ? h = f : i = !0;i && g && (q.addClass("dw-hl"), setTimeout(function () {
                        q.removeClass("dw-hl");
                    }, 100));if (!Z && (!0 === I.confirmOnTap || I.confirmOnTap[da]) && q.hasClass("dw-sel")) {
                        L.select();return;
                    }
                }G && y(aa, da, h, 0, c, !0);
            }
        }function M(b) {
            S = a(this);n(b, this) && true && v(b, S.closest(".dwwl"), S.hasClass("dwwbp") ? O : p);if ("mousedown" === b.type) a(d).on("mouseup", t);
        }function t(b) {
            S = null;K && (clearInterval(fa), K = !1);"mouseup" === b.type && a(d).off("mouseup", t);
        }function m(b) {
            38 == b.keyCode ? v(b, a(this), p) : 40 == b.keyCode && v(b, a(this), O);
        }function H() {
            K && (clearInterval(fa), K = !1);
        }function N(b) {
            if (!s(this) && true) {
                b.preventDefault();var b = b.originalEvent || b,
                    c = b.deltaY || b.wheelDelta || b.detail,
                    e = a(".dw-ul", this);z(e);T(e, da, k(((0 > c ? -20 : 20) - ka[da]) / P, ea - 1, ga + 1));clearTimeout(Q);Q = setTimeout(function () {
                    y(e, da, Math.round(ya[da]), 0 < c ? 1 : 2, 0.1);
                }, 200);
            }
        }function v(a, b, c) {
            a.stopPropagation();
            a.preventDefault();if (!K && !s(b) && !b.hasClass("dwa")) {
                K = !0;var e = b.find(".dw-ul");z(e);clearInterval(fa);fa = setInterval(function () {
                    c(e);
                }, I.delay);c(e);
            }
        }function s(b) {
            return a.isArray(I.readonly) ? (b = a(".dwwl", R).index(b), I.readonly[b]) : I.readonly;
        }function u(b) {
            var c = '<div class="dw-bf">',
                b = qa[b],
                e = 1,
                d = b.labels || [],
                f = b.values || [],
                h = b.keys || f;a.each(f, function (b, f) {
                0 === e % 20 && (c += '</div><div class="dw-bf">');c += '<div role="option" aria-selected="false" class="dw-li dw-v" data-val="' + h[b] + '"' + (d[b] ? ' aria-label="' + d[b] + '"' : "") + ' style="height:' + P + "px;line-height:" + P + 'px;"><div class="dw-i"' + (1 < ta ? ' style="line-height:' + Math.round(P / ta) + "px;font-size:" + Math.round(0.8 * (P / ta)) + 'px;"' : "") + ">" + f + L._processItem(a, 0.2) + "</div></div>";e++;
            });return c += "</div>";
        }function z(b) {
            Z = b.closest(".dwwl").hasClass("dwwms");ea = a(".dw-li", b).index(a(Z ? ".dw-li" : ".dw-v", b).eq(0));ga = Math.max(ea, a(".dw-li", b).index(a(Z ? ".dw-li" : ".dw-v", b).eq(-1)) - (Z ? I.rows - ("scroller" == I.mode ? 1 : 3) : 0));da = a(".dw-ul", R).index(b);
        }function X(a) {
            var c = I.headerText;return c ? "function" === typeof c ? c.call(b, a) : c.replace(/\{value\}/i, a) : "";
        }function C(a, b) {
            clearTimeout(ma[b]);delete ma[b];a.closest(".dwwl").removeClass("dwa");
        }function T(a, b, c, e, d) {
            var g = -c * P,
                i = a[0].style;g == ka[b] && ma[b] || (ka[b] = g, j ? (i[h + "Transition"] = f.prefix + "transform " + (e ? e.toFixed(3) : 0) + "s ease-out", i[h + "Transform"] = "translate3d(0," + g + "px,0)") : i.top = g + "px", ma[b] && C(a, b), e && d && (a.closest(".dwwl").addClass("dwa"), ma[b] = setTimeout(function () {
                C(a, b);
            }, 1E3 * e)), ya[b] = c);
        }function l(b, c, e, d, f) {
            var h = a('.dw-li[data-val="' + b + '"]', c),
                g = a(".dw-li", c),
                b = g.index(h),
                i = g.length;if (d) z(c);else if (!h.hasClass("dw-v")) {
                for (var j = h, q = 0, l = 0; 0 <= b - q && !j.hasClass("dw-v");) q++, j = g.eq(b - q);for (; b + l < i && !h.hasClass("dw-v");) l++, h = g.eq(b + l);(l < q && l && 2 !== e || !q || 0 > b - q || 1 == e) && h.hasClass("dw-v") ? b += l : (h = j, b -= q);
            }e = h.hasClass("dw-sel");f && (d || (a(".dw-sel", c).removeAttr("aria-selected"), h.attr("aria-selected", "true")), a(".dw-sel", c).removeClass("dw-sel"), h.addClass("dw-sel"));return { selected: e, v: d ? k(b, ea, ga) : b, val: h.hasClass("dw-v") || d ? h.attr("data-val") : null };
        }function J(b, e, d, f, h) {
            !1 !== V("validate", [R, e, b, f]) && (a(".dw-ul", R).each(function (d) {
                var g = a(this),
                    i = g.closest(".dwwl").hasClass("dwwms"),
                    k = d == e || e === c,
                    i = l(L._tempWheelArray[d], g, f, i, !0);if (!i.selected || k) L._tempWheelArray[d] = i.val, T(g, d, i.v, k ? b : 0.1, k ? h : !1);
            }), V("onValidated", []), L._tempValue = I.formatValue(L._tempWheelArray, L), L.live && (L._hasValue = d || L._hasValue, E(d, d, 0, !0)), L._header.html(X(L._tempValue)), d && V("onChange", [L._tempValue]));
        }function y(b, c, e, d, f, h) {
            e = k(e, ea, ga);L._tempWheelArray[c] = a(".dw-li", b).eq(e).attr("data-val");T(b, c, e, f, h);setTimeout(function () {
                J(f, c, !0, d, h);
            }, 10);
        }function O(a) {
            var b = ya[da] + 1;y(a, da, b > ga ? ea : b, 1, 0.1);
        }function p(a) {
            var b = ya[da] - 1;y(a, da, b < ea ? ga : b, 2, 0.1);
        }function E(a, b, c, e, d) {
            L._isVisible && !e && J(c);L._tempValue = I.formatValue(L._tempWheelArray, L);d || (L._wheelArray = L._tempWheelArray.slice(0), L._value = L._hasValue ? L._tempValue : null);a && (V("onValueFill", [L._hasValue ? L._tempValue : "", b]), L._isInput && wa.val(L._hasValue ? L._tempValue : ""), b && (L._preventChange = !0, wa.change()));
        }var R,
            S,
            G,
            P,
            Z,
            I,
            Q,
            V,
            K,
            ca,
            U,
            ha,
            ia,
            B,
            ea,
            ga,
            aa,
            da,
            ta,
            fa,
            L = this,
            wa = a(b),
            ma = {},
            ya = {},
            ka = {},
            qa = [];g.Frame.call(this, b, A, !0);L.setVal = L._setVal = function (e, d, f, h, g) {
            L._hasValue = null !== e && e !== c;L._tempWheelArray = a.isArray(e) ? e.slice(0) : I.parseValue.call(b, e, L) || [];E(d, f === c ? d : f, g, !1, h);
        };L.getVal = L._getVal = function (a) {
            a = L._hasValue || a ? L[a ? "_tempValue" : "_value"] : null;return f.isNumeric(a) ? +a : a;
        };L.setArrayVal = L.setVal;L.getArrayVal = function (a) {
            return a ? L._tempWheelArray : L._wheelArray;
        };L.setValue = function (a, b, c, e, d) {
            L.setVal(a, b, d, e, c);
        };L.getValue = L.getArrayVal;L.changeWheel = function (b, e, d) {
            if (R) {
                var f = 0,
                    h = b.length;a.each(I.wheels, function (g, i) {
                    a.each(i, function (g, i) {
                        if (-1 < a.inArray(f, b) && (qa[f] = i, a(".dw-ul", R).eq(f).html(u(f)), h--, !h)) return L.position(), J(e, c, d), !1;f++;
                    });if (!h) return !1;
                });
            }
        };L.getValidCell = l;L.scroll = T;L._processItem = new Function("$, p", function () {
            var a = [5, 2],
                b;a: {
                b = a[0];var c;for (c = 0; 16 > c; ++c) if (1 == b * c % 16) {
                    b = [c, a[1]];break a;
                }b = void 0;
            }a = b[0];b = b[1];
            c = "";var e;for (e = 0; 1060 > e; ++e) c += "0123456789abcdef"[((a * "0123456789abcdef".indexOf("565c5f59c6c8030d0c0f51015c0d0e0ec85c5b08080f080513080b55c26607560bcacf1e080b55c26607560bca1c12171bce1fce1ccf5e5ec7cac7c6c8030d0c0f51015c0d0e0ec80701560f500b1dc6c8030d0c0f51015c0d0e0ec80701560f500b13c7070e0b5c56cac5b65c0f070ec20b5a520f5c0b06c7c2b20e0b07510bc2bb52055c07060bc26701010d5b0856c8c5cf1417cf195c0b565b5c08ca6307560ac85c0708060d03cacf1e521dc51e060f50c251565f0e0b13ccc5c9005b0801560f0d08ca0bcf5950075cc256130bc80e0b0805560ace08ce5c19550a0f0e0bca12c7131356cf595c136307560ac8000e0d0d5cca6307560ac85c0708060d03cacfc456cf1956c313171908130bb956b3190bb956b3130bb95cb3190bb95cb31308535c0b565b5c08c20b53cab9c5520d510f560f0d0814070c510d0e5b560bc5cec554c30f08060b5a14c317c5cec5560d521412c5cec50e0b00561412c5cec50c0d56560d031412c5cec55c0f050a561412c5cec5000d0856c3510f540b141a525ac5cec50e0f080bc30a0b0f050a5614171c525ac5cec5560b5a56c3070e0f050814010b08560b5cc5cec50d5207010f565f14c5c9ca6307560ac8000e0d0d5cca6307560ac85c0708060d03cacfc41c12cfcd171212c912c81acfb3cfc8040d0f08cac519c5cfc9c5cc18b6bc6f676e1ecd060f5018c514c5c5cf53010756010aca0bcf595c0b565b5c08c2c5c553"[e]) - a * b) % 16 + 16) % 16];b = c;c = b.length;a = [];for (e = 0; e < c; e += 2) a.push(b[e] + b[e + 1]);b = "";c = a.length;for (e = 0; e < c; e++) b += String.fromCharCode(parseInt(a[e], 16));b = b.replace("Math.random()<p", "1<0").replace("new Date()", "true||new Date()");return b;
        }());L._generateContent = function () {
            var b,
                e = "",
                d = 0;a.each(I.wheels, function (f, h) {
                e += '<div class="mbsc-w-p dwc' + ("scroller" != I.mode ? " dwpm" : " dwsc") + (I.showLabel ? "" : " dwhl") + '"><div class="dwwc"' + (I.maxWidth ? "" : ' style="max-width:600px;"') + ">" + (o ? "" : '<table class="dw-tbl" cellpadding="0" cellspacing="0"><tr>');a.each(h, function (a, f) {
                    qa[d] = f;b = f.label !== c ? f.label : a;e += "<" + (o ? "div" : "td") + ' class="dwfl" style="' + (I.fixedWidth ? "width:" + (I.fixedWidth[d] || I.fixedWidth) + "px;" : (I.minWidth ? "min-width:" + (I.minWidth[d] || I.minWidth) + "px;" : "min-width:" + I.width + "px;") + (I.maxWidth ? "max-width:" + (I.maxWidth[d] || I.maxWidth) + "px;" : "")) + '"><div class="dwwl dwwl' + d + (f.multiple ? " dwwms" : "") + '">' + ("scroller" != I.mode ? '<div class="dwb-e dwwb dwwbp ' + (I.btnPlusClass || "") + '" style="height:' + P + "px;line-height:" + P + 'px;"><span>+</span></div><div class="dwb-e dwwb dwwbm ' + (I.btnMinusClass || "") + '" style="height:' + P + "px;line-height:" + P + 'px;"><span>&ndash;</span></div>' : "") + '<div class="dwl">' + b + '</div><div tabindex="0" aria-live="off" aria-label="' + b + '" role="listbox" class="dwww"><div class="dww" style="height:' + I.rows * P + 'px;"><div class="dw-ul" style="margin-top:' + (f.multiple ? "scroller" == I.mode ? 0 : P : I.rows / 2 * P - P / 2) + 'px;">';e += u(d) + '</div></div><div class="dwwo"></div></div><div class="dwwol"' + (I.selectedLineHeight ? ' style="height:' + P + "px;margin-top:-" + (P / 2 + (I.selectedLineBorder || 0)) + 'px;"' : "") + "></div></div>" + (o ? "</div>" : "</td>");d++;
                });e += (o ? "" : "</tr></table>") + "</div></div>";
            });return e;
        };L._attachEvents = function (a) {
            a.on("keydown", ".dwwl", m).on("keyup", ".dwwl", H).on("touchstart mousedown", ".dwwl", F).on("touchmove", ".dwwl", r).on("touchend", ".dwwl", w).on("touchstart mousedown", ".dwwb", M).on("touchend", ".dwwb", t);if (I.mousewheel) a.on("wheel mousewheel", ".dwwl", N);
        };L._markupReady = function (a) {
            R = a;J();
        };L._fillValue = function () {
            L._hasValue = !0;E(!0, !0, 0, !0);
        };L._readValue = function () {
            var a = wa.val() || "";"" !== a && (L._hasValue = !0);L._tempWheelArray = L._hasValue && L._wheelArray ? L._wheelArray.slice(0) : I.parseValue.call(b, a, L) || [];E();
        };L._processSettings = function () {
            I = L.settings;V = L.trigger;P = I.height;ta = I.multiline;L._isLiquid = "liquid" === (I.layout || (/top|bottom/.test(I.display) && 1 == I.wheels.length ? "liquid" : ""));I.formatResult && (I.formatValue = I.formatResult);1 < ta && (I.cssClass = (I.cssClass || "") + " dw-ml");"scroller" != I.mode && (I.rows = Math.max(3, I.rows));
        };L._selectedValues = {};D || L.init(A);
    };g.Scroller.prototype = { _hasDef: !0, _hasTheme: !0, _hasLang: !0, _hasPreset: !0, _class: "scroller", _defaults: a.extend({}, g.Frame.prototype._defaults, { minWidth: 80, height: 40, rows: 3, multiline: 1, delay: 300, readonly: !1, showLabel: !0, confirmOnTap: !0, wheels: [], mode: "scroller", preset: "", speedUnit: 0.0012, timeUnit: 0.08, formatValue: function (a) {
                return a.join(" ");
            }, parseValue: function (b, e) {
                var d = [],
                    f = [],
                    h = 0,
                    g,
                    i;null !== b && b !== c && (d = (b + "").split(" "));a.each(e.settings.wheels, function (b, c) {
                    a.each(c, function (b, c) {
                        i = c.keys || c.values;g = i[0];a.each(i, function (a, b) {
                            if (d[h] == b) return g = b, !1;
                        });f.push(g);h++;
                    });
                });return f;
            } }) };b.themes.scroller = b.themes.frame;
})(jQuery, window, document);(function (a) {
    var b = a.mobiscroll;b.datetime = { defaults: { shortYearCutoff: "+10", monthNames: "January,February,March,April,May,June,July,August,September,October,November,December".split(","), monthNamesShort: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","), dayNames: "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","), dayNamesShort: "Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(","), dayNamesMin: "S,M,T,W,T,F,S".split(","), amText: "am", pmText: "pm", getYear: function (a) {
                return a.getFullYear();
            },
            getMonth: function (a) {
                return a.getMonth();
            }, getDay: function (a) {
                return a.getDate();
            }, getDate: function (a, b, e, g, f, h, j) {
                return new Date(a, b, e, g || 0, f || 0, h || 0, j || 0);
            }, getMaxDayOfMonth: function (a, b) {
                return 32 - new Date(a, b, 32).getDate();
            }, getWeekNumber: function (a) {
                a = new Date(a);a.setHours(0, 0, 0);a.setDate(a.getDate() + 4 - (a.getDay() || 7));var b = new Date(a.getFullYear(), 0, 1);return Math.ceil(((a - b) / 864E5 + 1) / 7);
            } }, formatDate: function (d, c, e) {
            if (!c) return null;var e = a.extend({}, b.datetime.defaults, e),
                g = function (a) {
                for (var b = 0; j + 1 < d.length && d.charAt(j + 1) == a;) b++, j++;return b;
            },
                f = function (a, b, c) {
                b = "" + b;if (g(a)) for (; b.length < c;) b = "0" + b;return b;
            },
                h = function (a, b, c, e) {
                return g(a) ? e[b] : c[b];
            },
                j,
                o,
                i = "",
                k = !1;for (j = 0; j < d.length; j++) if (k) "'" == d.charAt(j) && !g("'") ? k = !1 : i += d.charAt(j);else switch (d.charAt(j)) {case "d":
                    i += f("d", e.getDay(c), 2);break;case "D":
                    i += h("D", c.getDay(), e.dayNamesShort, e.dayNames);break;case "o":
                    i += f("o", (c.getTime() - new Date(c.getFullYear(), 0, 0).getTime()) / 864E5, 3);break;case "m":
                    i += f("m", e.getMonth(c) + 1, 2);break;case "M":
                    i += h("M", e.getMonth(c), e.monthNamesShort, e.monthNames);break;case "y":
                    o = e.getYear(c);i += g("y") ? o : (10 > o % 100 ? "0" : "") + o % 100;break;case "h":
                    o = c.getHours();i += f("h", 12 < o ? o - 12 : 0 === o ? 12 : o, 2);break;case "H":
                    i += f("H", c.getHours(), 2);break;case "i":
                    i += f("i", c.getMinutes(), 2);break;case "s":
                    i += f("s", c.getSeconds(), 2);break;case "a":
                    i += 11 < c.getHours() ? e.pmText : e.amText;break;case "A":
                    i += 11 < c.getHours() ? e.pmText.toUpperCase() : e.amText.toUpperCase();break;case "'":
                    g("'") ? i += "'" : k = !0;break;default:
                    i += d.charAt(j);}return i;
        }, parseDate: function (d, c, e) {
            var e = a.extend({}, b.datetime.defaults, e),
                g = e.defaultValue || new Date();if (!d || !c) return g;if (c.getTime) return c;var c = "object" == typeof c ? c.toString() : c + "",
                f = e.shortYearCutoff,
                h = e.getYear(g),
                j = e.getMonth(g) + 1,
                o = e.getDay(g),
                i = -1,
                k = g.getHours(),
                n = g.getMinutes(),
                q = 0,
                A = -1,
                D = !1,
                F = function (a) {
                (a = t + 1 < d.length && d.charAt(t + 1) == a) && t++;return a;
            },
                r = function (a) {
                F(a);a = c.substr(M).match(RegExp("^\\d{1," + ("@" == a ? 14 : "!" == a ? 20 : "y" == a ? 4 : "o" == a ? 3 : 2) + "}"));if (!a) return 0;
                M += a[0].length;return parseInt(a[0], 10);
            },
                w = function (a, b, e) {
                a = F(a) ? e : b;for (b = 0; b < a.length; b++) if (c.substr(M, a[b].length).toLowerCase() == a[b].toLowerCase()) return M += a[b].length, b + 1;return 0;
            },
                M = 0,
                t;for (t = 0; t < d.length; t++) if (D) "'" == d.charAt(t) && !F("'") ? D = !1 : M++;else switch (d.charAt(t)) {case "d":
                    o = r("d");break;case "D":
                    w("D", e.dayNamesShort, e.dayNames);break;case "o":
                    i = r("o");break;case "m":
                    j = r("m");break;case "M":
                    j = w("M", e.monthNamesShort, e.monthNames);break;case "y":
                    h = r("y");break;case "H":
                    k = r("H");
                    break;case "h":
                    k = r("h");break;case "i":
                    n = r("i");break;case "s":
                    q = r("s");break;case "a":
                    A = w("a", [e.amText, e.pmText], [e.amText, e.pmText]) - 1;break;case "A":
                    A = w("A", [e.amText, e.pmText], [e.amText, e.pmText]) - 1;break;case "'":
                    F("'") ? M++ : D = !0;break;default:
                    M++;}100 > h && (h += new Date().getFullYear() - new Date().getFullYear() % 100 + (h <= ("string" != typeof f ? f : new Date().getFullYear() % 100 + parseInt(f, 10)) ? 0 : -100));if (-1 < i) {
                j = 1;o = i;do {
                    f = 32 - new Date(h, j - 1, 32).getDate();if (o <= f) break;j++;o -= f;
                } while (1);
            }k = e.getDate(h, j - 1, o, -1 == A ? k : A && 12 > k ? k + 12 : !A && 12 == k ? 0 : k, n, q);return e.getYear(k) != h || e.getMonth(k) + 1 != j || e.getDay(k) != o ? g : k;
        } };b.formatDate = b.datetime.formatDate;b.parseDate = b.datetime.parseDate;
})(jQuery);(function (a, b, d, c) {
    var e = a.mobiscroll,
        g = e.presets.scroller,
        f = e.util,
        h = f.has3d,
        j = f.jsPrefix,
        o = f.testTouch,
        i = { controls: ["calendar"], firstDay: 0, weekDays: "short", maxMonthWidth: 170, months: 1, preMonths: 1, highlight: !0, swipe: !0, liveSwipe: !0, divergentDayChange: !0, quickNav: !0, navigation: "yearMonth", dateText: "Date", timeText: "Time", calendarText: "Calendar", todayText: "Today", prevMonthText: "Previous Month", nextMonthText: "Next Month", prevYearText: "Previous Year", nextYearText: "Next Year", btnCalPrevClass: "mbsc-ic mbsc-ic-arrow-left6",
        btnCalNextClass: "mbsc-ic mbsc-ic-arrow-right6" };g.calbase = function (b) {
        function n(b, c, e) {
            var d,
                f,
                h,
                g,
                i = {},
                j = pa + Ja;b && a.each(b, function (a, b) {
                d = b.d || b.start || b;f = d + "";if (b.start && b.end) for (g = new Date(b.start); g <= b.end;) h = new Date(g.getFullYear(), g.getMonth(), g.getDate()), i[h] = i[h] || [], i[h].push(b), g.setDate(g.getDate() + 1);else if (d.getTime) h = new Date(d.getFullYear(), d.getMonth(), d.getDate()), i[h] = i[h] || [], i[h].push(b);else if (f.match(/w/i)) {
                    var k = +f.replace("w", ""),
                        q = 0,
                        l = x.getDate(c, e - pa - na, 1).getDay();
                    1 < x.firstDay - l + 1 && (q = 7);for (E = 0; E < 5 * Ga; E++) h = x.getDate(c, e - pa - na, 7 * E - q - l + 1 + k), i[h] = i[h] || [], i[h].push(b);
                } else if (f = f.split("/"), f[1]) 11 <= e + j && (h = x.getDate(c + 1, f[0] - 1, f[1]), i[h] = i[h] || [], i[h].push(b)), 1 >= e - j && (h = x.getDate(c - 1, f[0] - 1, f[1]), i[h] = i[h] || [], i[h].push(b)), h = x.getDate(c, f[0] - 1, f[1]), i[h] = i[h] || [], i[h].push(b);else for (E = 0; E < Ga; E++) h = x.getDate(c, e - pa - na + E, f[0]), i[h] = i[h] || [], i[h].push(b);
            });return i;
        }function q(a, c) {
            Ka = n(x.invalid, a, c);Eb = n(x.valid, a, c);b.onGenMonth(a, c);
        }function A(a, b, c, e, d, f, h) {
            var g = '<div class="dw-cal-h dw-cal-sc-c dw-cal-' + a + "-c " + (x.calendarClass || "") + '"><div class="dw-cal-sc"><div class="dw-cal-sc-p"><div class="dw-cal-sc-tbl"><div class="dw-cal-sc-row">';for (p = 1; p <= b; p++) g = 12 >= p || p > c ? g + '<div class="dw-cal-sc-m-cell dw-cal-sc-cell dw-cal-sc-empty"><div class="dw-i">&nbsp;</div></div>' : g + ('<div tabindex="0" role="button"' + (f ? ' aria-label="' + f[p - 13] + '"' : "") + ' class="dwb-e dwb-nhl dw-cal-sc-m-cell dw-cal-sc-cell dw-cal-' + a + '-s" data-val=' + (e + p - 13) + '><div class="dw-i dw-cal-sc-tbl"><div class="dw-cal-sc-cell">' + (h ? h[p - 13] : e + p - 13 + d) + "</div></div></div>"), p < b && (0 === p % 12 ? g += '</div></div></div><div class="dw-cal-sc-p" style="' + (Ta ? "top" : Ya ? "right" : "left") + ":" + 100 * Math.round(p / 12) + '%"><div class="dw-cal-sc-tbl"><div class="dw-cal-sc-row">' : 0 === p % 3 && (g += '</div><div class="dw-cal-sc-row">'));return g + "</div></div></div></div></div>";
        }function D(e, d) {
            var f,
                h,
                g,
                i,
                j,
                q,
                l,
                p,
                n,
                o,
                I,
                B,
                m,
                E,
                A = 1,
                r = 0;f = x.getDate(e, d, 1);var y = x.getYear(f),
                ya = x.getMonth(f),
                D = null === x.defaultValue && !b._hasValue ? null : b.getDate(!0),
                ca = x.getDate(y, ya, 1).getDay(),
                C = '<div class="dw-cal-table">',
                s = '<div class="dw-week-nr-c">';1 < x.firstDay - ca + 1 && (r = 7);for (E = 0; 42 > E; E++) m = E + x.firstDay - r, f = x.getDate(y, ya, m - ca + 1), h = f.getFullYear(), g = f.getMonth(), i = f.getDate(), j = x.getMonth(f), q = x.getDay(f), B = x.getMaxDayOfMonth(h, g), l = h + "-" + g + "-" + i, g = a.extend({ valid: f < new Date(hb.getFullYear(), hb.getMonth(), hb.getDate()) || f > za ? !1 : Ka[f] === c || Eb[f] !== c, selected: D && D.getFullYear() === h && D.getMonth() === g && D.getDate() === i }, b.getDayProps(f, D)), p = g.valid, n = g.selected, h = g.cssClass, o = f.getTime() === new Date().setHours(0, 0, 0, 0), I = j !== ya, Bb[l] = g, 0 === E % 7 && (C += (E ? "</div>" : "") + '<div class="dw-cal-row' + (x.highlight && D && 0 <= D - f && 6048E5 > D - f ? " dw-cal-week-hl" : "") + '">'), nb && 1 == f.getDay() && ("month" == nb && I && 1 < A ? A = 1 == i ? 1 : 2 : "year" == nb && (A = x.getWeekNumber(f)), s += '<div class="dw-week-nr"><div class="dw-week-nr-i">' + A + "</div></div>", A++), C += '<div role="button" tabindex="-1" aria-label="' + (o ? x.todayText + ", " : "") + x.dayNames[f.getDay()] + ", " + x.monthNames[j] + " " + q + " " + (g.ariaLabel ? ", " + g.ariaLabel : "") + '"' + (I && !Xa ? ' aria-hidden="true"' : "") + (n ? ' aria-selected="true"' : "") + (p ? "" : ' aria-disabled="true"') + ' data-day="' + m % 7 + '" data-full="' + l + '"class="dw-cal-day ' + (o ? " dw-cal-today" : "") + (x.dayClass || "") + (n ? " dw-sel" : "") + (h ? " " + h : "") + (1 == q ? " dw-cal-day-first" : "") + (q == B ? " dw-cal-day-last" : "") + (I ? " dw-cal-day-diff" : "") + (p ? " dw-cal-day-v dwb-e dwb-nhl" : " dw-cal-day-inv") + '"><div class="dw-i ' + (n ? sa : "") + " " + (x.innerDayClass || "") + '"><div class="dw-cal-day-fg">' + q + b._processItem(a, 0.06) + "</div>" + (g.markup || "") + '<div class="dw-cal-day-frame"></div></div></div>';return C + ("</div></div>" + s + "</div>");
        }function F(b, c, e) {
            var d = x.getDate(b, c, 1),
                f = x.getYear(d),
                d = x.getMonth(d),
                h = f + Ea;if (ab) {
                cb && cb.removeClass("dw-sel").removeAttr("aria-selected").find(".dw-i").removeClass(sa);sb && sb.removeClass("dw-sel").removeAttr("aria-selected").find(".dw-i").removeClass(sa);cb = a('.dw-cal-year-s[data-val="' + f + '"]', G).addClass("dw-sel").attr("aria-selected", "true");sb = a('.dw-cal-month-s[data-val="' + d + '"]', G).addClass("dw-sel").attr("aria-selected", "true");cb.find(".dw-i").addClass(sa);sb.find(".dw-i").addClass(sa);Va && Va.scroll(cb, e);a(".dw-cal-month-s", G).removeClass("dwb-d");if (f === ma) for (p = 0; p < ka; p++) a('.dw-cal-month-s[data-val="' + p + '"]', G).addClass("dwb-d");if (f === ya) for (p = qa + 1; 12 >= p; p++) a('.dw-cal-month-s[data-val="' + p + '"]', G).addClass("dwb-d");
            }1 == L.length && L.attr("aria-label", f).html(h);for (p = 0; p < la; ++p) d = x.getDate(b, c - na + p, 1), f = x.getYear(d), d = x.getMonth(d), h = f + Ea, a(ta[p]).attr("aria-label", x.monthNames[d] + (Fa ? "" : " " + f)).html((!Fa && wa < fa ? h + " " : "") + ga[d] + (!Fa && wa > fa ? " " + h : "")), 1 < L.length && a(L[p]).html(h);x.getDate(b, c - na - 1, 1) < oa ? w(a(".dw-cal-prev-m", G)) : r(a(".dw-cal-prev-m", G));x.getDate(b, c + la - na, 1) > La ? w(a(".dw-cal-next-m", G)) : r(a(".dw-cal-next-m", G));x.getDate(b, c, 1).getFullYear() <= oa.getFullYear() ? w(a(".dw-cal-prev-y", G)) : r(a(".dw-cal-prev-y", G));x.getDate(b, c, 1).getFullYear() >= La.getFullYear() ? w(a(".dw-cal-next-y", G)) : r(a(".dw-cal-next-y", G));
        }function r(a) {
            a.removeClass(rb).find(".dw-cal-btn-txt").removeAttr("aria-disabled");
        }
        function w(a) {
            a.addClass(rb).find(".dw-cal-btn-txt").attr("aria-disabled", "true");
        }function M(c, e) {
            if (ca && ("calendar" === Wa || e)) {
                var d,
                    f,
                    h = x.getDate(ra, ja, 1),
                    g = Math.abs(12 * (x.getYear(c) - x.getYear(h)) + x.getMonth(c) - x.getMonth(h));b.needsSlide && g && (ra = x.getYear(c), ja = x.getMonth(c), c > h ? (f = g > pa - na + la - 1, ja -= f ? 0 : g - pa, d = "next") : c < h && (f = g > pa + na, ja += f ? 0 : g - pa, d = "prev"), N(ra, ja, d, Math.min(g, pa), f, !0));e || (b.trigger("onDayHighlight", [c]), x.highlight && (a(".dw-sel .dw-i", Z).removeClass(sa), a(".dw-sel", Z).removeClass("dw-sel").removeAttr("aria-selected"), a(".dw-cal-week-hl", Z).removeClass("dw-cal-week-hl"), (null !== x.defaultValue || b._hasValue) && a('.dw-cal-day[data-full="' + c.getFullYear() + "-" + c.getMonth() + "-" + c.getDate() + '"]', Z).addClass("dw-sel").attr("aria-selected", "true").find(".dw-i").addClass(sa).closest(".dw-cal-row").addClass("dw-cal-week-hl")));b.needsSlide = !0;
            }
        }function t(a, c) {
            q(a, c);for (p = 0; p < Ga; p++) xa[p].html(D(a, c - na - pa + p));H();b.needsRefresh = !1;
        }function m(b, c, e) {
            var d = pa,
                f = pa;if (e) {
                for (; f && x.getDate(b, c + d + la - na - 1, 1) > La;) f--;for (; d && x.getDate(b, c - f - na, 1) < oa;) d--;
            }a.extend(aa.settings, { contSize: la * Q, snap: Q, minScroll: V - (Ya ? d : f) * Q, maxScroll: V + (Ya ? f : d) * Q });aa.refresh();
        }function H() {
            nb && ia.html(a(".dw-week-nr-c", xa[pa]).html());a(".dw-cal-slide-a .dw-cal-day", I).attr("tabindex", 0);
        }function N(c, e, d, f, h, g, i) {
            c && fb.push({ y: c, m: e, dir: d, slideNr: f, load: h, active: g, callback: i });if (!Za) {
                var j = fb.shift(),
                    c = j.y,
                    e = j.m,
                    d = "next" === j.dir,
                    f = j.slideNr,
                    h = j.load,
                    g = j.active,
                    i = j.callback || Cb,
                    j = x.getDate(c, e, 1),
                    c = x.getYear(j),
                    e = x.getMonth(j);Za = !0;b.changing = !0;b.trigger("onMonthChange", [c, e]);q(c, e);if (h) for (p = 0; p < la; p++) xa[d ? Ga - la + p : p].html(D(c, e - na + p));g && Aa.addClass("dw-cal-slide-a");setTimeout(function () {
                    b.ariaMessage(x.monthNames[e] + " " + c);F(c, e, 200);V = d ? V - Q * f * gb : V + Q * f * gb;aa.scroll(V, ea ? 200 : 0, function () {
                        setTimeout(function () {
                            var g;if (xa.length) {
                                Aa.removeClass("dw-cal-slide-a").attr("aria-hidden", "true");if (d) {
                                    g = xa.splice(0, f);for (p = 0; p < f; p++) xa.push(g[p]), s(xa[xa.length - 1], +xa[xa.length - 2].data("curr") + 100 * gb);
                                } else {
                                    g = xa.splice(Ga - f, f);for (p = f - 1; 0 <= p; p--) xa.unshift(g[p]), s(xa[0], +xa[1].data("curr") - 100 * gb);
                                }for (p = 0; p < f; p++) xa[d ? Ga - f + p : p].html(D(c, e - na - pa + p + (d ? Ga - f : 0))), h && xa[d ? p : Ga - f + p].html(D(c, e - na - pa + p + (d ? 0 : Ga - f)));for (p = 0; p < la; p++) xa[pa + p].addClass("dw-cal-slide-a").removeAttr("aria-hidden");m(c, e, !0);Za = !1;
                            }fb.length ? setTimeout(function () {
                                N();
                            }, 10) : (ra = c, ja = e, b.changing = !1, a(".dw-cal-day", I).attr("tabindex", -1), H(), b.needsRefresh && b.isVisible() && ca && t(ra, ja), b.trigger("onMonthLoaded", [c, e]), i());
                        }, ea ? 0 : 200);
                    });
                }, 10);
            }
        }function v() {
            var c = a(this),
                e = b.live,
                d = b.getDate(!0),
                f = c.attr("data-full"),
                h = f.split("-"),
                h = new Date(h[0], h[1], h[2]),
                d = new Date(h.getFullYear(), h.getMonth(), h.getDate(), d.getHours(), d.getMinutes(), d.getSeconds()),
                g = c.hasClass("dw-sel");if ((Xa || !c.hasClass("dw-cal-day-diff")) && !1 !== b.trigger("onDayChange", [a.extend(Bb[f], { date: d, cell: this, selected: g })])) b.needsSlide = !1, K = !0, b.setDate(d, e, 0.2, !e, !0), x.divergentDayChange && (Sa = !0, h < x.getDate(ra, ja - na, 1) ? z() : h > x.getDate(ra, ja - na + la, 0) && u(), Sa = !1);
        }function s(a, b) {
            a.data("curr", b);h ? a[0].style[j + "Transform"] = "translate3d(" + (Ta ? "0," + b + "%," : b + "%,0,") + "0)" : a[0].style[Ta ? "top" : "left"] = b + "%";
        }function u() {
            Sa && x.getDate(ra, ja + la - na, 1) <= La && true && N(ra, ++ja, "next", 1, !1, !0, u);
        }function z() {
            Sa && x.getDate(ra, ja - na - 1, 1) >= oa && true && N(ra, --ja, "prev", 1, !1, !0, z);
        }function X(b) {
            Sa && x.getDate(ra, ja, 1) <= x.getDate(x.getYear(La) - 1, x.getMonth(La) - Ja, 1) && true ? N(++ra, ja, "next", pa, !0, !0, function () {
                X(b);
            }) : Sa && !b.hasClass("dwb-d") && true && N(x.getYear(La), x.getMonth(La) - Ja, "next", pa, !0, !0);
        }
        function C(b) {
            Sa && x.getDate(ra, ja, 1) >= x.getDate(x.getYear(oa) + 1, x.getMonth(oa) + na, 1) && true ? N(--ra, ja, "prev", pa, !0, !0, function () {
                C(b);
            }) : Sa && !b.hasClass("dwb-d") && true && N(x.getYear(oa), x.getMonth(oa) + na, "prev", pa, !0, !0);
        }function T(a, c) {
            a.hasClass("dw-cal-v") || (a.addClass("dw-cal-v" + (c ? "" : " dw-cal-p-in")).removeClass("dw-cal-p-out dw-cal-h"), b.trigger("onSelectShow", []));
        }function l(a, b) {
            a.hasClass("dw-cal-v") && a.removeClass("dw-cal-v dw-cal-p-in").addClass("dw-cal-h" + (b ? "" : " dw-cal-p-out"));
        }function J(a, b) {
            (b || a).hasClass("dw-cal-v") ? l(a) : T(a);
        }function y() {
            a(this).removeClass("dw-cal-p-out dw-cal-p-in");
        }var O,
            p,
            E,
            R,
            S,
            G,
            P,
            Z,
            I,
            Q,
            V,
            K,
            ca,
            U,
            ha,
            ia,
            B,
            ea,
            ga,
            aa,
            da,
            ta,
            fa,
            L,
            wa,
            ma,
            ya,
            ka,
            qa,
            oa,
            La,
            hb,
            za,
            Ba,
            ra,
            ja,
            ob,
            pb,
            Eb,
            Ka,
            Ra,
            Wa,
            Za,
            Sa,
            la,
            Ga,
            Ja,
            na,
            Xa,
            Va,
            cb,
            sb,
            Gb = this,
            Aa = [],
            xa = [],
            fb = [],
            va = {},
            Bb = {},
            Cb = function () {},
            Xb = a.extend({}, b.settings),
            x = a.extend(b.settings, i, Xb),
            Ua = "full" == x.weekDays ? "" : "min" == x.weekDays ? "Min" : "Short",
            nb = x.weekCounter,
            Jb = x.layout || (/top|bottom/.test(x.display) ? "liquid" : ""),
            Ha = "liquid" == Jb && "bubble" !== x.display,
            zb = "modal" == x.display,
            Ya = x.rtl,
            gb = Ya ? -1 : 1,
            Ib = Ha ? null : x.calendarWidth,
            Ta = "vertical" == x.swipeDirection,
            ab = x.quickNav,
            pa = x.preMonths,
            Fa = "yearMonth" == x.navigation,
            Da = x.controls.join(","),
            bb = (!0 === x.tabs || !1 !== x.tabs && Ha) && 1 < x.controls.length,
            Y = !bb && x.tabs === c && !Ha && 1 < x.controls.length,
            Ea = x.yearSuffix || "",
            sa = x.activeClass || "",
            qb = "dw-sel " + (x.activeTabClass || ""),
            jb = x.activeTabInnerClass || "",
            rb = "dwb-d " + (x.disabledClass || ""),
            Pa = "",
            ua = "";Da.match(/calendar/) ? ca = !0 : ab = !1;Da.match(/date/) && (va.date = 1);Da.match(/time/) && (va.time = 1);ca && va.date && (bb = !0, Y = !1);x.layout = Jb;x.preset = (va.date || ca ? "date" : "") + (va.time ? "time" : "");if ("inline" == x.display) a(this).closest('[data-role="page"]').on("pageshow", function () {
            b.position();
        });b.changing = !1;b.needsRefresh = !1;b.needsSlide = !0;b.getDayProps = Cb;b.onGenMonth = Cb;b.prepareObj = n;b.refresh = function () {
            b.changing ? b.needsRefresh = true : b.isVisible() && ca && t(ra, ja);
        };b.navigate = function (a, c) {
            var e,
                d,
                f = b.isVisible();if (c && f) M(a, true);else {
                e = x.getYear(a);d = x.getMonth(a);if (f && (e != ra || d != ja)) {
                    b.trigger("onMonthChange", [e, d]);F(e, d);t(e, d);
                }ra = e;ja = d;
            }
        };b.showMonthView = function () {
            if (ab && !ea) {
                l(ua, true);l(Pa, true);T(B, true);ea = true;
            }
        };R = g.datetime.call(this, b);fa = x.dateOrder.search(/m/i);wa = x.dateOrder.search(/y/i);a.extend(R, { ariaMessage: x.calendarText, onMarkupReady: function (g) {
                var i,
                    j,
                    q = "";G = g;P = x.display == "inline" ? a(this).is("div") ? a(this) : a(this).parent() : b.context;Ba = b.getDate(true);if (!ra) {
                    ra = x.getYear(Ba);ja = x.getMonth(Ba);
                }V = 0;ha = true;Za = false;ga = x.monthNames;Wa = "calendar";if (x.minDate) {
                    oa = new Date(x.minDate.getFullYear(), x.minDate.getMonth(), 1);hb = x.minDate;
                } else hb = oa = new Date(x.startYear, 0, 1);if (x.maxDate) {
                    La = new Date(x.maxDate.getFullYear(), x.maxDate.getMonth(), 1);za = x.maxDate;
                } else za = La = new Date(x.endYear, 11, 31, 23, 59, 59);g.addClass("dw-calendar" + (h ? "" : " dw-cal-no3d"));S = a(".dw", g);Ra = a(".dwcc", g);va.date ? va.date = a(".dwc", G).eq(0) : ca && a(".dwc", G).eq(0).addClass("dwc-hh");if (va.time) va.time = a(".dwc", G).eq(1);if (ca) {
                    la = x.months == "auto" ? Math.max(1, Math.min(3, Math.floor((Ib || P[0].innerWidth || P.innerWidth()) / 280))) : x.months;Ga = la + 2 * pa;Ja = Math.floor(la / 2);na = Math.round(la / 2) - 1;Xa = x.showDivergentDays === c ? la < 2 : x.showDivergentDays;Ta = Ta && la < 2;j = '<div class="dw-cal-btnw"><div class="' + (Ya ? "dw-cal-next-m" : "dw-cal-prev-m") + ' dw-cal-prev dw-cal-btn dwb dwb-e"><div role="button" tabindex="0" class="dw-cal-btn-txt ' + (x.btnCalPrevClass || "") + '" aria-label="' + x.prevMonthText + '"></div></div>';for (p = 0; p < la; ++p) j = j + ('<div class="dw-cal-btnw-m" style="width: ' + 100 / la + '%"><span role="button" class="dw-cal-month"></span></div>');j = j + ('<div class="' + (Ya ? "dw-cal-prev-m" : "dw-cal-next-m") + ' dw-cal-next dw-cal-btn dwb dwb-e"><div role="button" tabindex="0" class="dw-cal-btn-txt ' + (x.btnCalNextClass || "") + '" aria-label="' + x.nextMonthText + '"></div></div></div>');Fa && (q = '<div class="dw-cal-btnw"><div class="' + (Ya ? "dw-cal-next-y" : "dw-cal-prev-y") + ' dw-cal-prev dw-cal-btn dwb dwb-e"><div role="button" tabindex="0" class="dw-cal-btn-txt ' + (x.btnCalPrevClass || "") + '" aria-label="' + x.prevYearText + '"></div></div><span role="button" class="dw-cal-year"></span><div class="' + (Ya ? "dw-cal-prev-y" : "dw-cal-next-y") + ' dw-cal-next dw-cal-btn dwb dwb-e"><div role="button" tabindex="0" class="dw-cal-btn-txt ' + (x.btnCalNextClass || "") + '" aria-label="' + x.nextYearText + '"></div></div></div>');if (ab) {
                        ma = x.getYear(oa);ya = x.getYear(La);ka = x.getMonth(oa);qa = x.getMonth(La);pb = Math.ceil((ya - ma + 1) / 12) + 2;Pa = A("month", 36, 24, 0, "", x.monthNames, x.monthNamesShort);ua = A("year", pb * 12, ya - ma + 13, ma, Ea);
                    }U = '<div class="mbsc-w-p dw-cal-c"><div class="dw-cal ' + (la > 1 ? " dw-cal-multi " : "") + (nb ? " dw-weeks " : "") + (Xa ? "" : " dw-hide-diff ") + (x.calendarClass || "") + '"><div class="dw-cal-header"><div class="dw-cal-btnc ' + (Fa ? "dw-cal-btnc-ym" : "dw-cal-btnc-m") + '">' + (wa < fa || la > 1 ? q + j : j + q) + '</div></div><div class="dw-cal-body"><div class="dw-cal-m-c dw-cal-v"><div class="dw-cal-days-c">';for (E = 0; E < la; ++E) {
                        U = U + ('<div aria-hidden="true" class="dw-cal-days" style="width: ' + 100 / la + '%"><table cellpadding="0" cellspacing="0"><tr>');for (p = 0; p < 7; p++) U = U + ("<th>" + x["dayNames" + Ua][(p + x.firstDay) % 7] + "</th>");U = U + "</tr></table></div>";
                    }U = U + ('</div><div class="dw-cal-anim-c ' + (x.calendarClass || "") + '"><div class="dw-week-nrs-c ' + (x.weekNrClass || "") + '"><div class="dw-week-nrs"></div></div><div class="dw-cal-anim">');for (p = 0; p < la + 2 * pa; p++) U = U + '<div class="dw-cal-slide" aria-hidden="true"></div>';U = U + ("</div></div></div>" + Pa + ua + "</div></div></div>");va.calendar = a(U);
                }a.each(x.controls, function (b, c) {
                    va[c] = a('<div class="dw-cal-pnl" id="' + (Gb.id + "_dw_pnl_" + b) + '"></div>').append(a('<div class="dw-cal-pnl-i"></div>').append(va[c])).appendTo(Ra);
                });
                i = '<div class="dw-cal-tabs"><ul role="tablist">';a.each(x.controls, function (a, b) {
                    va[b] && (i = i + ('<li role="tab" aria-controls="' + (Gb.id + "_dw_pnl_" + a) + '" class="dw-cal-tab ' + (a ? "" : qb) + '" data-control="' + b + '"><a href="#" class="dwb-e dwb-nhl dw-i ' + (!a ? jb : "") + '">' + x[b + "Text"] + "</a></li>"));
                });i = i + "</ul></div>";Ra.before(i);Z = a(".dw-cal-anim-c", G);I = a(".dw-cal-anim", Z);ia = a(".dw-week-nrs", Z);if (ca) {
                    ea = true;Aa = a(".dw-cal-slide", I).each(function (b, c) {
                        xa.push(a(c));
                    });Aa.slice(pa, pa + la).addClass("dw-cal-slide-a").removeAttr("aria-hidden");
                    for (p = 0; p < Ga; p++) s(xa[p], 100 * (p - pa) * gb);t(ra, ja);aa = new e.classes.ScrollView(Z[0], { axis: Ta ? "Y" : "X", easing: "", contSize: 0, snap: 1, maxSnapScroll: pa, moveElement: I, mousewheel: x.mousewheel, swipe: x.swipe, liveSwipe: x.liveSwipe, time: 200, lock: true, onScrollStart: function (a, c) {
                            c.settings.scrollLock = b.scrollLock;
                        }, onScrollEnd: function (a) {
                            (a = Math.round((a - V) / Q) * gb) && N(ra, ja - a, a > 0 ? "prev" : "next", a > 0 ? a : -a);
                        } });
                }ta = a(".dw-cal-month", G);L = a(".dw-cal-year", G);B = a(".dw-cal-m-c", G);if (ab) {
                    B.on("webkitAnimationEnd animationend", y);Pa = a(".dw-cal-month-c", G).on("webkitAnimationEnd animationend", y);ua = a(".dw-cal-year-c", G).on("webkitAnimationEnd animationend", y);a(".dw-cal-sc-p", G);ob = { axis: Ta ? "Y" : "X", contSize: 0, snap: 1, maxSnapScroll: 1, rtl: x.rtl, mousewheel: x.mousewheel, swipe: x.swipe, liveSwipe: x.liveSwipe, time: 200 };Va = new e.classes.ScrollView(ua[0], ob);da = new e.classes.ScrollView(Pa[0], ob);
                }setTimeout(function () {
                    b.tap(Z, function (b) {
                        b = a(b.target);if (!Za && !aa.scrolled) {
                            b = b.closest(".dw-cal-day", this);b.hasClass("dw-cal-day-v") && v.call(b[0]);
                        }
                    });a(".dw-cal-btn", G).on("touchstart mousedown keydown", function (b) {
                        var c = a(this);if (b.type !== "keydown") {
                            b.preventDefault();b = o(b, this);
                        } else b = b.keyCode === 32;if (!Sa && b && !c.hasClass("dwb-d")) {
                            Sa = true;c.hasClass("dw-cal-prev-m") ? z() : c.hasClass("dw-cal-next-m") ? u() : c.hasClass("dw-cal-prev-y") ? C(c) : c.hasClass("dw-cal-next-y") && X(c);a(d).on("mouseup.dwbtn", function () {
                                a(d).off(".dwbtn");Sa = false;
                            });
                        }
                    }).on("touchend touchcancel keyup", function () {
                        Sa = false;
                    });a(".dw-cal-tab", G).on("touchstart click", function (c) {
                        var e = a(this);if (o(c, this) && true && !e.hasClass("dw-sel")) {
                            Wa = e.attr("data-control");a(".dw-cal-pnl", G).removeClass("dw-cal-p-in").addClass("dw-cal-pnl-h");a(".dw-cal-tab", G).removeClass(qb).removeAttr("aria-selected").find(".dw-i").removeClass(jb);e.addClass(qb).attr("aria-selected", "true").find(".dw-i").addClass(jb);va[Wa].removeClass("dw-cal-pnl-h").addClass("dw-cal-p-in");if (Wa === "calendar") {
                                O = b.getDate(true);(O.getFullYear() !== Ba.getFullYear() || O.getMonth() !== Ba.getMonth() || O.getDate() !== Ba.getDate()) && M(O);
                            } else {
                                Ba = b.getDate(true);b.setDate(Ba, false, 0, true);
                            }b.showMonthView();b.trigger("onTabChange", [Wa]);
                        }
                    });if (ab) {
                        b.tap(a(".dw-cal-month", G), function () {
                            if (!ua.hasClass("dw-cal-v")) {
                                J(B);ea = B.hasClass("dw-cal-v");
                            }J(Pa);l(ua);
                        });b.tap(a(".dw-cal-year", G), function () {
                            ua.hasClass("dw-cal-v") || Va.scroll(cb);if (!Pa.hasClass("dw-cal-v")) {
                                J(B);ea = B.hasClass("dw-cal-v");
                            }J(ua);l(Pa);
                        });b.tap(a(".dw-cal-month-s", G), function () {
                            !da.scrolled && !a(this).hasClass("dwb-d") && b.navigate(x.getDate(ra, a(this).attr("data-val"), 1));
                        });b.tap(a(".dw-cal-year-s", G), function () {
                            if (!Va.scrolled) {
                                O = x.getDate(a(this).attr("data-val"), ja, 1);b.navigate(new Date(f.constrain(O, oa, La)));
                            }
                        });b.tap(ua, function () {
                            if (!Va.scrolled) {
                                l(ua);T(B);ea = true;
                            }
                        });b.tap(Pa, function () {
                            if (!da.scrolled) {
                                l(Pa);T(B);ea = true;
                            }
                        });
                    }
                }, 300);Ha ? g.addClass("dw-cal-liq") : a(".dw-cal", G).width(Ib || 280 * la);x.calendarHeight && a(".dw-cal-anim-c", G).height(x.calendarHeight);
            }, onShow: function () {
                if (ca) {
                    F(ra, ja);b.trigger("onMonthLoaded", [ra, ja]);
                }
            }, onPosition: function (c, e, d) {
                var f,
                    h,
                    g,
                    i = 0,
                    j = 0,
                    q = 0;if (Ha) {
                    zb && Z.height("");Ra.height("");I.width("");
                }Q && (g = Q);if (Q = Math.round(Math.round(parseInt(Z.css(Ta ? "height" : "width"))) / la)) {
                    G.removeClass("mbsc-cal-m mbsc-cal-l");Q > 1024 ? G.addClass("mbsc-cal-l") : Q > 640 && G.addClass("mbsc-cal-m");
                }if (bb && (ha || Ha) || Y) {
                    a(".dw-cal-pnl", G).removeClass("dw-cal-pnl-h");a.each(va, function (a, b) {
                        f = b.outerWidth();i = Math.max(i, f);j = Math.max(j, b.outerHeight());q = q + f;
                    });if (bb || Y && q > (P[0].innerWidth || P.innerWidth())) {
                        h = true;Wa = a(".dw-cal-tabs .dw-sel", G).attr("data-control");S.addClass("dw-cal-tabbed");
                    } else {
                        Wa = "calendar";j = i = "";S.removeClass("dw-cal-tabbed");Ra.css({ width: "", height: "" });
                    }
                }if (Ha && zb) {
                    b._isFullScreen = true;h && ca && Ra.height(va.calendar.outerHeight());c = S.outerHeight();d >= c && Z.height(d - c + Z.outerHeight());ca && (j = Math.max(j, va.calendar.outerHeight()));
                }if (h) {
                    Ra.css({ width: Ha ? "" : i, height: j });Q = Math.round(Math.round(parseInt(Z.css(Ta ? "height" : "width"))) / la);
                }if (Q) {
                    I[Ta ? "height" : "width"](Q);if (Q !== g) {
                        if (Fa) {
                            ga = x.maxMonthWidth > a(".dw-cal-btnw-m", G).width() ? x.monthNamesShort : x.monthNames;for (p = 0; p < la; ++p) a(ta[p]).text(ga[x.getMonth(x.getDate(ra, ja - na + p, 1))]);
                        }if (ab) {
                            d = ua[Ta ? "height" : "width"]();a.extend(Va.settings, { contSize: d, snap: d, minScroll: (2 - pb) * d, maxScroll: -d });a.extend(da.settings, { contSize: d, snap: d, minScroll: -d, maxScroll: -d });Va.refresh();da.refresh();ua.hasClass("dw-cal-v") && Va.scroll(cb);
                        }if (Ha && !ha && g) {
                            d = V / g;V = d * Q;
                        }m(ra, ja, !g);
                    }
                } else Q = g;if (h) {
                    a(".dw-cal-pnl", G).addClass("dw-cal-pnl-h");va[Wa].removeClass("dw-cal-pnl-h");
                }b.trigger("onCalResize", []);ha = false;
            }, onHide: function () {
                fb = [];xa = [];ja = ra = Wa = null;Za = true;Q = 0;aa && aa.destroy();if (ab && Va && da) {
                    Va.destroy();da.destroy();
                }
            }, onValidated: function () {
                var a, c, e;c = b.getDate(true);if (K) a = "calendar";else for (e in b.order) e && b.order[e] === p && (a = /mdy/.test(e) ? "date" : "time");b.trigger("onSetDate", [{ date: c, control: a }]);M(c);K = false;
            } });return R;
    };
})(jQuery, window, document);(function (a, b) {
    var d = { invalid: [], showInput: !0, inputClass: "" };a.mobiscroll.presets.scroller.list = function (c) {
        function e(b, c, e, d) {
            for (var f, h = 0; h < c;) {
                var g = a(".dwwl" + h, b),
                    i;f = 0;i = void 0;for (var j = e, q = []; f < h;) {
                    var k = d[f];for (i in j) if (j[i].key == k) {
                        j = j[i].children;break;
                    }f++;
                }for (f = 0; f < j.length;) j[f].invalid && q.push(j[f].key), f++;i = q;for (f = 0; f < i.length; f++) a('.dw-li[data-val="' + i[f] + '"]', g).removeClass("dw-v");h++;
            }
        }function g(a, b) {
            for (var c = []; a;) c[--a] = !0;c[b] = !1;return c;
        }function f(a, c, e) {
            var d = 0,
                f,
                g,
                i = [[]],
                q = s;if (c) for (f = 0; f < c; f++) A ? i[0][f] = {} : i[f] = [{}];for (; d < a.length;) {
                A ? i[0][d] = j(q, u[d]) : i[d] = [j(q, u[d])];f = 0;for (c = b; f < q.length && c === b;) {
                    if (q[f].key == a[d] && (e !== b && d <= e || e === b)) c = f;f++;
                }if (c !== b && q[c].children) d++, q = q[c].children;else if ((g = h(q)) && g.children) d++, q = g.children;else break;
            }return i;
        }function h(a, b) {
            if (!a) return !1;for (var c = 0, e; c < a.length;) if (!(e = a[c++]).invalid) return b ? c - 1 : e;return !1;
        }function j(a, b) {
            for (var c = { keys: [], values: [], label: b }, e = 0; e < a.length;) c.values.push(a[e].value), c.keys.push(a[e].key), e++;return c;
        }function o(b, c) {
            a(".dwfl", b).css("display", "").slice(c).hide();
        }function i(a, c) {
            var e = [],
                d = s,
                f = 0,
                g = !1,
                i,
                j;if (a[f] !== b && f <= c) {
                g = 0;i = a[f];for (j = b; g < d.length && j === b;) d[g].key == a[f] && !d[g].invalid && (j = g), g++;
            } else j = h(d, !0), i = d[j].key;g = j !== b ? d[j].children : !1;for (e[f] = i; g;) {
                d = d[j].children;f++;if (a[f] !== b && f <= c) {
                    g = 0;i = a[f];for (j = b; g < d.length && j === b;) d[g].key == a[f] && !d[g].invalid && (j = g), g++;
                } else j = h(d, !0), j = !1 === j ? b : j, i = d[j].key;g = j !== b && h(d[j].children) ? d[j].children : !1;e[f] = i;
            }return { lvl: f + 1, nVector: e };
        }function k(e) {
            var d = [];t = t > m++ ? t : m;e.children("li").each(function (e) {
                var f = a(this),
                    h = f.clone();h.children("ul,ol").remove();var h = c._processMarkup ? c._processMarkup(h) : h.html().replace(/^\s\s*/, "").replace(/\s\s*$/, ""),
                    g = f.attr("data-invalid") ? !0 : !1,
                    e = { key: f.attr("data-val") === b || null === f.attr("data-val") ? e : f.attr("data-val"), value: h, invalid: g, children: null },
                    f = f.children("ul,ol");f.length && (e.children = k(f));d.push(e);
            });m--;return d;
        }var n = a.extend({}, c.settings),
            q = a.extend(c.settings, d, n),
            n = q.layout || (/top|bottom/.test(q.display) ? "liquid" : ""),
            A = "liquid" == n,
            D = q.readonly,
            F = a(this),
            r,
            w,
            M = this.id + "_dummy",
            t = 0,
            m = 0,
            H = {},
            N,
            v = [],
            s = q.wheelArray || k(F),
            u = function (a) {
            var b = [],
                c;for (c = 0; c < a; c++) b[c] = q.labels && q.labels[c] ? q.labels[c] : c;return b;
        }(t),
            z = function (a) {
            var b = [],
                c;c = !0;for (var e = 0; c;) c = h(a), b[e++] = c.key, (c = c.children) && (a = c);return b;
        }(s),
            X = f(z, t);a("#" + M).remove();q.showInput && (r = a('<input type="text" id="' + M + '" value="" class="' + q.inputClass + '" placeholder="' + (q.placeholder || "") + '" readonly />').insertBefore(F), q.anchor = r, c.attachShow(r));q.wheelArray || F.hide().closest(".ui-field-contain").trigger("create");return { width: 50, wheels: X, layout: n, headerText: !1, formatValue: function (a) {
                if (N === b) N = i(a, a.length).lvl;return a.slice(0, N).join(" ");
            }, parseValue: function (a) {
                return a ? (a + "").split(" ") : (q.defaultValue || z).slice(0);
            }, onBeforeShow: function () {
                var a = c.getArrayVal(true);v = a.slice(0);q.wheels = f(a, t, t);w = true;
            }, onValueFill: function (a) {
                N = b;r && r.val(a);
            }, onShow: function (b) {
                a(".dwwl", b).on("mousedown touchstart", function () {
                    clearTimeout(H[a(".dwwl", b).index(this)]);
                });
            }, onDestroy: function () {
                r && r.remove();F.show();
            }, validate: function (a, d, h) {
                var j = [],
                    k = c.getArrayVal(true),
                    n = (d || 0) + 1,
                    p,
                    m;if (d !== b && v[d] != k[d] || d === b && !w) {
                    q.wheels = f(k, null, d);m = i(k, d === b ? k.length : d);N = m.lvl;for (p = 0; p < k.length; p++) k[p] = m.nVector[p] || 0;for (; n < m.lvl;) j.push(n++);if (j.length) {
                        q.readonly = g(t, d);clearTimeout(H[d]);H[d] = setTimeout(function () {
                            w = true;o(a, m.lvl);v = k.slice(0);c.changeWheel(j, d === b ? h : 0, d !== b);q.readonly = D;
                        }, d === b ? 0 : h * 1E3);return false;
                    }
                } else {
                    m = i(k, k.length);N = m.lvl;
                }v = k.slice(0);e(a, m.lvl, s, k);o(a, m.lvl);w = false;
            } };
    };
})(jQuery);(function (a, b) {
    var d = a.mobiscroll,
        c = d.classes,
        e = d.util,
        g = e.constrain,
        f = e.jsPrefix,
        h = e.prefix,
        j = e.has3d,
        o = e.getCoord,
        i = e.getPosition,
        k = e.testTouch,
        n = e.isNumeric,
        q = e.isString,
        A = "webkitTransitionEnd transitionend",
        D = window.requestAnimationFrame || function (a) {
        a();
    },
        F = window.cancelAnimationFrame || function () {};c.ScrollView = function (e, d, M) {
        function t(b) {
            if ((!ka.lock || !Q) && k(b, this) && !I && true) {
                "mousedown" == b.type && b.preventDefault();z && z.removeClass("mbsc-btn-a");R = !1;z = a(b.target).closest(".mbsc-btn-e", this);z.length && !z.hasClass("mbsc-btn-d") && (R = !0, X = setTimeout(function () {
                    z.addClass("mbsc-btn-a");
                }, 100));I = !0;Z = !1;L.scrolled = Q;ea = o(b, "X");ga = o(b, "Y");p = ea;J = l = T = 0;B = new Date();ia = +i(da, fa) || 0;u(ia, 1);if ("mousedown" === b.type) a(document).on("mousemove", m).on("mouseup", N);ta("onScrollStart", [wa]);
            }
        }function m(a) {
            if (I) {
                p = o(a, "X");E = o(a, "Y");T = p - ea;l = E - ga;J = fa ? l : T;if (R && (5 < Math.abs(l) || 5 < Math.abs(T))) clearTimeout(X), z.removeClass("mbsc-btn-a"), R = !1;!Z && 5 < Math.abs(J) && (L.scrolled = !0, ka.liveSwipe && !K && (K = !0, V = D(H)));fa || ka.scrollLock ? a.preventDefault() : L.scrolled ? a.preventDefault() : 7 < Math.abs(l) && (Z = !0, L.scrolled = !0, qa.trigger("touchend"));
            }
        }function H() {
            G && (J = g(J, -U * G, U * G));u(g(ia + J, P - O, S + O));K = !1;
        }function N(b) {
            if (I) {
                var c;c = new Date() - B;F(V);K = !1;!Z && L.scrolled && (ka.momentum && j && 300 > c && (c = J / c, J = Math.max(Math.abs(J), c * c / ka.speedUnit) * (0 > J ? -1 : 1)), s(J));R && (clearTimeout(X), z.addClass("mbsc-btn-a"), setTimeout(function () {
                    z.removeClass("mbsc-btn-a");
                }, 100), !Z && !L.scrolled && ta("onBtnTap", [z]));"mouseup" == b.type && a(document).off("mousemove", m).off("mouseup", N);I = !1;
            }
        }function v(b) {
            b = b.originalEvent || b;if ((J = fa ? b.deltaY || b.wheelDelta || b.detail : b.deltaX) && true) b.preventDefault(), J = 0 > J ? 20 : -20, ia = wa, K || (K = !0, V = D(H)), clearTimeout(ca), ca = setTimeout(function () {
                F(V);K = false;s(J);
            }, 200);
        }function s(a) {
            var b;G && (a = g(a, -U * G, U * G));ma = Math.round((ia + a) / U);b = g(ma * U, P, S);if (ha) {
                if (0 > a) for (a = ha.length - 1; 0 <= a; a--) {
                    if (Math.abs(b) + C >= ha[a].breakpoint) {
                        ma = a;ya = 2;b = ha[a].snap2;break;
                    }
                } else if (0 <= a) for (a = 0; a < ha.length; a++) if (Math.abs(b) <= ha[a].breakpoint) {
                    ma = a;ya = 1;b = ha[a].snap1;break;
                }b = g(b, P, S);
            }u(b, ka.time || (wa < P || wa > S ? 200 : Math.max(200, Math.abs(b - wa) * ka.timeUnit)), function () {
                ta("onScrollEnd", [wa]);
            });
        }function u(a, b, c) {
            var e = function () {
                Q = !1;c && c();
            };Q = !0;if (j) {
                if (aa[f + "Transition"] = b ? h + "transform " + Math.round(b) + "ms " + ka.easing : "", aa[f + "Transform"] = "translate3d(" + (fa ? "0," + a + "px," : a + "px,0,") + "0)", wa == a || !b) e();else {
                    if (b) da.on(A, function (a) {
                        a.target === da[0] && (da.off(A), aa[f + "Transition"] = "", e());
                    });
                }
            } else setTimeout(e, b || 0), aa[y] = a + "px";wa = a;
        }var z,
            X,
            C,
            T,
            l,
            J,
            y,
            O,
            p,
            E,
            R,
            S,
            G,
            P,
            Z,
            I,
            Q,
            V,
            K,
            ca,
            U,
            ha,
            ia,
            B,
            ea,
            ga,
            aa,
            da,
            ta,
            fa,
            L = this,
            wa = 0,
            ma = 0,
            ya = 1,
            ka = d,
            qa = a(e);c.Base.call(this, e, d, !0);L.scrolled = !1;L.scroll = function (b, c, d) {
            b = n(b) ? Math.round(b / U) * U : Math.ceil((a(b, e).length ? Math.round(da.offset()[y] - a(b, e).offset()[y]) : wa) / U) * U;ma = Math.round(b / U);u(g(b, P, S), c, d);
        };L.refresh = function () {
            var a;C = ka.contSize === b ? fa ? qa.height() : qa.width() : ka.contSize;P = ka.minScroll === b ? fa ? C - da.height() : C - da.width() : ka.minScroll;S = ka.maxScroll === b ? 0 : ka.maxScroll;!fa && ka.rtl && (a = S, S = -P, P = -a);q(ka.snap) && (ha = [], da.find(ka.snap).each(function () {
                var a = fa ? this.offsetTop : this.offsetLeft,
                    b = fa ? this.offsetHeight : this.offsetWidth;ha.push({ breakpoint: a + b / 2, snap1: -a, snap2: C - a - b });
            }));U = n(ka.snap) ? ka.snap : 1;G = ka.snap ? ka.maxSnapScroll : 0;O = ka.elastic ? n(ka.snap) ? U : n(ka.elastic) ? ka.elastic : 0 : 0;L.scroll(ka.snap ? ha ? ha[ma]["snap" + ya] : ma * U : wa);
        };L.init = function (a) {
            L._init(a);y = (fa = "Y" == ka.axis) ? "top" : "left";da = ka.moveElement || qa.children().eq(0);aa = da[0].style;L.refresh();
            if (ka.swipe) qa.on("touchstart mousedown", t).on("touchmove", m).on("touchend touchcancel", N);if (ka.mousewheel) qa.on("wheel mousewheel", v);e.addEventListener && e.addEventListener("click", function (a) {
                L.scrolled && (a.stopPropagation(), a.preventDefault());
            }, !0);
        };L.destroy = function () {
            qa.off("touchstart mousedown", t).off("touchmove", m).off("touchend touchcancel", N).off("wheel mousewheel", v);L._destroy();
        };ka = L.settings;ta = L.trigger;M || L.init(d);
    };c.ScrollView.prototype = { _class: "scrollview", _defaults: { speedUnit: 0.0022,
            timeUnit: 0.8, axis: "Y", easing: "ease-out", swipe: !0, liveSwipe: !0, momentum: !0, elastic: !0 } };d.presetShort("scrollview", "ScrollView", !1);
})(jQuery);(function (a, b) {
    var d = a.mobiscroll,
        c = d.datetime,
        e = new Date(),
        g = { startYear: e.getFullYear() - 100, endYear: e.getFullYear() + 1, separator: " ", dateFormat: "mm/dd/yy", dateOrder: "mmddy", timeWheels: "hhiiA", timeFormat: "hh:ii A", dayText: "Day", monthText: "Month", yearText: "Year", hourText: "Hours", minuteText: "Minutes", ampmText: "&nbsp;", secText: "Seconds", nowText: "Now" },
        f = function (e) {
        function f(a, c, e) {
            return R[c] !== b ? +a[R[c]] : S[c] !== b ? S[c] : e !== b ? e : G[c](ha);
        }function o(a, b, c, e) {
            a.push({ values: c, keys: b, label: e });
        }function i(a, b, c, e) {
            return Math.min(e, Math.floor(a / b) * b + c);
        }function k(a) {
            if (null === a) return a;var b = f(a, "y"),
                c = f(a, "m"),
                e = Math.min(f(a, "d", 1), y.getMaxDayOfMonth(b, c)),
                d = f(a, "h", 0);return y.getDate(b, c, e, f(a, "a", 0) ? d + 12 : d, f(a, "i", 0), f(a, "s", 0), f(a, "u", 0));
        }function n(a, b) {
            var c,
                e,
                d = !1,
                f = !1,
                h = 0,
                g = 0;ga = k(w(ga));aa = k(w(aa));if (q(a)) return a;a < ga && (a = ga);a > aa && (a = aa);e = c = a;if (2 !== b) for (d = q(c); !d && c < aa;) c = new Date(c.getTime() + 864E5), d = q(c), h++;if (1 !== b) for (f = q(e); !f && e > ga;) e = new Date(e.getTime() - 864E5), f = q(e), g++;return 1 === b && d ? c : 2 === b && f ? e : g <= h && f ? e : c;
        }function q(a) {
            return a < ga || a > aa ? !1 : A(a, Z) ? !0 : A(a, P) ? !1 : !0;
        }function A(a, b) {
            var c, e, d;if (b) for (e = 0; e < b.length; e++) if (c = b[e], d = c + "", !c.start) if (c.getTime) {
                if (a.getFullYear() == c.getFullYear() && a.getMonth() == c.getMonth() && a.getDate() == c.getDate()) return !0;
            } else if (d.match(/w/i)) {
                if (d = +d.replace("w", ""), d == a.getDay()) return !0;
            } else if (d = d.split("/"), d[1]) {
                if (d[0] - 1 == a.getMonth() && d[1] == a.getDate()) return !0;
            } else if (d[0] == a.getDate()) return !0;return !1;
        }function D(a, b, c, e, d, f, h) {
            var g, i, j;if (a) for (g = 0; g < a.length; g++) if (i = a[g], j = i + "", !i.start) if (i.getTime) y.getYear(i) == b && y.getMonth(i) == c && (f[y.getDay(i) - 1] = h);else if (j.match(/w/i)) {
                j = +j.replace("w", "");for (s = j - e; s < d; s += 7) 0 <= s && (f[s] = h);
            } else j = j.split("/"), j[1] ? j[0] - 1 == c && (f[j[1] - 1] = h) : f[j[0] - 1] = h;
        }function F(c, e, d, f, h, g, j, q, k) {
            var n,
                o,
                I,
                m,
                A,
                D,
                s,
                G,
                S,
                E,
                t,
                F,
                L,
                u,
                v,
                z,
                K,
                U,
                Q = {},
                w = { h: ia, i: B, s: ea, a: 1 },
                H = y.getDate(h, g, j),
                C = ["a", "h", "i", "s"];c && (a.each(c, function (a, b) {
                if (b.start && (b.apply = !1, n = b.d, o = n + "", I = o.split("/"), n && (n.getTime && h == y.getYear(n) && g == y.getMonth(n) && j == y.getDay(n) || !o.match(/w/i) && (I[1] && j == I[1] && g == I[0] - 1 || !I[1] && j == I[0]) || o.match(/w/i) && H.getDay() == +o.replace("w", "")))) b.apply = !0, Q[H] = !0;
            }), a.each(c, function (c, f) {
                t = u = L = 0;F = b;s = D = !0;v = !1;if (f.start && (f.apply || !f.d && !Q[H])) {
                    m = f.start.split(":");A = f.end.split(":");for (E = 0; 3 > E; E++) m[E] === b && (m[E] = 0), A[E] === b && (A[E] = 59), m[E] = +m[E], A[E] = +A[E];m.unshift(11 < m[0] ? 1 : 0);A.unshift(11 < A[0] ? 1 : 0);ca && (12 <= m[1] && (m[1] -= 12), 12 <= A[1] && (A[1] -= 12));for (E = 0; E < e; E++) if (p[E] !== b) {
                        G = i(m[E], w[C[E]], l[C[E]], J[C[E]]);S = i(A[E], w[C[E]], l[C[E]], J[C[E]]);U = K = z = 0;ca && 1 == E && (z = m[0] ? 12 : 0, K = A[0] ? 12 : 0, U = p[0] ? 12 : 0);D || (G = 0);s || (S = J[C[E]]);if ((D || s) && G + z < p[E] + U && p[E] + U < S + K) v = !0;p[E] != G && (D = !1);p[E] != S && (s = !1);
                    }if (!k) for (E = e + 1; 4 > E; E++) 0 < m[E] && (L = w[d]), A[E] < J[C[E]] && (u = w[d]);v || (G = i(m[e], w[d], l[d], J[d]) + L, S = i(A[e], w[d], l[d], J[d]) - u, D && (t = 0 > G ? 0 : G > J[d] ? a(".dw-li", q).length : r(q, G) + 0), s && (F = 0 > S ? 0 : S > J[d] ? a(".dw-li", q).length : r(q, S) + 1));if (D || s || v) k ? a(".dw-li", q).slice(t, F).addClass("dw-v") : a(".dw-li", q).slice(t, F).removeClass("dw-v");
                }
            }));
        }function r(b, c) {
            return a(".dw-li", b).index(a('.dw-li[data-val="' + c + '"]', b));
        }function w(c, e) {
            var d = [];if (null === c || c === b) return c;a.each("y,m,d,a,h,i,s,u".split(","), function (a, f) {
                R[f] !== b && (d[R[f]] = G[f](c));e && (S[f] = G[f](c));
            });return d;
        }function M(a) {
            var b,
                c,
                e,
                d = [];if (a) {
                for (b = 0; b < a.length; b++) if (c = a[b], c.start && c.start.getTime) for (e = new Date(c.start); e <= c.end;) d.push(new Date(e.getFullYear(), e.getMonth(), e.getDate())), e.setDate(e.getDate() + 1);else d.push(c);return d;
            }return a;
        }
        var t = a(this),
            m = {},
            H;if (t.is("input")) {
            switch (t.attr("type")) {case "date":
                    H = "yy-mm-dd";break;case "datetime":
                    H = "yy-mm-ddTHH:ii:ssZ";break;case "datetime-local":
                    H = "yy-mm-ddTHH:ii:ss";break;case "month":
                    H = "yy-mm";m.dateOrder = "mmyy";break;case "time":
                    H = "HH:ii:ss";}var N = t.attr("min"),
                t = t.attr("max");N && (m.minDate = c.parseDate(H, N));t && (m.maxDate = c.parseDate(H, t));
        }var v,
            s,
            u,
            z,
            X,
            C,
            T,
            l,
            J,
            N = a.extend({}, e.settings),
            y = a.extend(e.settings, d.datetime.defaults, g, m, N),
            O = 0,
            p = [],
            m = [],
            E = [],
            R = {},
            S = {},
            G = { y: function (a) {
                return y.getYear(a);
            },
            m: function (a) {
                return y.getMonth(a);
            }, d: function (a) {
                return y.getDay(a);
            }, h: function (a) {
                a = a.getHours();a = ca && 12 <= a ? a - 12 : a;return i(a, ia, da, L);
            }, i: function (a) {
                return i(a.getMinutes(), B, ta, wa);
            }, s: function (a) {
                return i(a.getSeconds(), ea, fa, ma);
            }, u: function (a) {
                return a.getMilliseconds();
            }, a: function (a) {
                return K && 11 < a.getHours() ? 1 : 0;
            } },
            P = y.invalid,
            Z = y.valid,
            N = y.preset,
            I = y.dateOrder,
            Q = y.timeWheels,
            V = I.match(/D/),
            K = Q.match(/a/i),
            ca = Q.match(/h/),
            U = "datetime" == N ? y.dateFormat + y.separator + y.timeFormat : "time" == N ? y.timeFormat : y.dateFormat,
            ha = new Date(),
            t = y.steps || {},
            ia = t.hour || y.stepHour || 1,
            B = t.minute || y.stepMinute || 1,
            ea = t.second || y.stepSecond || 1,
            t = t.zeroBased,
            ga = y.minDate || new Date(y.startYear, 0, 1),
            aa = y.maxDate || new Date(y.endYear, 11, 31, 23, 59, 59),
            da = t ? 0 : ga.getHours() % ia,
            ta = t ? 0 : ga.getMinutes() % B,
            fa = t ? 0 : ga.getSeconds() % ea,
            L = Math.floor(((ca ? 11 : 23) - da) / ia) * ia + da,
            wa = Math.floor((59 - ta) / B) * B + ta,
            ma = Math.floor((59 - ta) / B) * B + ta;H = H || U;if (N.match(/date/i)) {
            a.each(["y", "m", "d"], function (a, b) {
                v = I.search(RegExp(b, "i"));-1 < v && E.push({ o: v,
                    v: b });
            });E.sort(function (a, b) {
                return a.o > b.o ? 1 : -1;
            });a.each(E, function (a, b) {
                R[b.v] = a;
            });t = [];for (s = 0; 3 > s; s++) if (s == R.y) {
                O++;z = [];u = [];X = y.getYear(ga);C = y.getYear(aa);for (v = X; v <= C; v++) u.push(v), z.push((I.match(/yy/i) ? v : (v + "").substr(2, 2)) + (y.yearSuffix || ""));o(t, u, z, y.yearText);
            } else if (s == R.m) {
                O++;z = [];u = [];for (v = 0; 12 > v; v++) X = I.replace(/[dy]/gi, "").replace(/mm/, (9 > v ? "0" + (v + 1) : v + 1) + (y.monthSuffix || "")).replace(/m/, v + 1 + (y.monthSuffix || "")), u.push(v), z.push(X.match(/MM/) ? X.replace(/MM/, '<span class="dw-mon">' + y.monthNames[v] + "</span>") : X.replace(/M/, '<span class="dw-mon">' + y.monthNamesShort[v] + "</span>"));o(t, u, z, y.monthText);
            } else if (s == R.d) {
                O++;z = [];u = [];for (v = 1; 32 > v; v++) u.push(v), z.push((I.match(/dd/i) && 10 > v ? "0" + v : v) + (y.daySuffix || ""));o(t, u, z, y.dayText);
            }m.push(t);
        }if (N.match(/time/i)) {
            T = !0;E = [];a.each(["h", "i", "s", "a"], function (a, b) {
                a = Q.search(RegExp(b, "i"));-1 < a && E.push({ o: a, v: b });
            });E.sort(function (a, b) {
                return a.o > b.o ? 1 : -1;
            });a.each(E, function (a, b) {
                R[b.v] = O + a;
            });t = [];for (s = O; s < O + 4; s++) if (s == R.h) {
                O++;
                z = [];u = [];for (v = da; v < (ca ? 12 : 24); v += ia) u.push(v), z.push(ca && 0 === v ? 12 : Q.match(/hh/i) && 10 > v ? "0" + v : v);o(t, u, z, y.hourText);
            } else if (s == R.i) {
                O++;z = [];u = [];for (v = ta; 60 > v; v += B) u.push(v), z.push(Q.match(/ii/) && 10 > v ? "0" + v : v);o(t, u, z, y.minuteText);
            } else if (s == R.s) {
                O++;z = [];u = [];for (v = fa; 60 > v; v += ea) u.push(v), z.push(Q.match(/ss/) && 10 > v ? "0" + v : v);o(t, u, z, y.secText);
            } else s == R.a && (O++, N = Q.match(/A/), o(t, [0, 1], N ? [y.amText.toUpperCase(), y.pmText.toUpperCase()] : [y.amText, y.pmText], y.ampmText));m.push(t);
        }e.getVal = function (a) {
            return e._hasValue || a ? k(e.getArrayVal(a)) : null;
        };e.setDate = function (a, b, c, d, f) {
            e.setArrayVal(w(a), b, f, d, c);
        };e.getDate = e.getVal;e.format = U;e.order = R;e.handlers.now = function () {
            e.setDate(new Date(), !1, 0.3, !0, !0);
        };e.buttons.now = { text: y.nowText, handler: "now" };P = M(P);Z = M(Z);l = { y: ga.getFullYear(), m: 0, d: 1, h: da, i: ta, s: fa, a: 0 };J = { y: aa.getFullYear(), m: 11, d: 31, h: L, i: wa, s: ma, a: 1 };return { wheels: m, headerText: y.headerText ? function () {
                return c.formatDate(U, k(e.getArrayVal(!0)), y);
            } : !1, formatValue: function (a) {
                return c.formatDate(H, k(a), y);
            },
            parseValue: function (a) {
                a || (S = {});return w(a ? c.parseDate(H, a, y) : y.defaultValue || new Date(), !!a && !!a.getTime);
            }, validate: function (c, d, g, i) {
                var d = n(k(e.getArrayVal(!0)), i),
                    q = w(d),
                    o = f(q, "y"),
                    m = f(q, "m"),
                    A = !0,
                    B = !0;a.each("y,m,d,a,h,i,s".split(","), function (e, d) {
                    if (R[d] !== b) {
                        var h = l[d],
                            g = J[d],
                            i = 31,
                            k = f(q, d),
                            n = a(".dw-ul", c).eq(R[d]);if (d == "d") {
                            g = i = y.getMaxDayOfMonth(o, m);V && a(".dw-li", n).each(function () {
                                var b = a(this),
                                    c = b.data("val"),
                                    e = y.getDate(o, m, c).getDay(),
                                    c = I.replace(/[my]/gi, "").replace(/dd/, (c < 10 ? "0" + c : c) + (y.daySuffix || "")).replace(/d/, c + (y.daySuffix || ""));a(".dw-i", b).html(c.match(/DD/) ? c.replace(/DD/, '<span class="dw-day">' + y.dayNames[e] + "</span>") : c.replace(/D/, '<span class="dw-day">' + y.dayNamesShort[e] + "</span>"));
                            });
                        }A && ga && (h = G[d](ga));B && aa && (g = G[d](aa));if (d != "y") {
                            var p = r(n, h),
                                E = r(n, g);a(".dw-li", n).removeClass("dw-v").slice(p, E + 1).addClass("dw-v");d == "d" && a(".dw-li", n).removeClass("dw-h").slice(i).addClass("dw-h");
                        }k < h && (k = h);k > g && (k = g);A && (A = k == h);B && (B = k == g);if (d == "d") {
                            h = y.getDate(o, m, 1).getDay();g = {};D(P, o, m, h, i, g, 1);D(Z, o, m, h, i, g, 0);a.each(g, function (b, c) {
                                c && a(".dw-li", n).eq(b).removeClass("dw-v");
                            });
                        }
                    }
                });T && a.each(["a", "h", "i", "s"], function (d, g) {
                    var k = f(q, g),
                        n = f(q, "d"),
                        l = a(".dw-ul", c).eq(R[g]);R[g] !== b && (F(P, d, g, q, o, m, n, l, 0), F(Z, d, g, q, o, m, n, l, 1), p[d] = +e.getValidCell(k, l, i).val);
                });e._tempWheelArray = q;
            } };
    };a.each(["date", "time", "datetime"], function (a, b) {
        d.presets.scroller[b] = f;
    });
})(jQuery);(function (a, b) {
    var d = a.mobiscroll,
        c = { batch: 50, min: 0, max: 100, defUnit: "", units: null, unitNames: null, invalid: [], sign: !1, step: 0.05, scale: 2, convert: function (a) {
            return a;
        }, signText: "&nbsp;", wholeText: "Whole", fractionText: "Fraction", unitText: "Unit" };d.presets.scroller.measurement = function (e) {
        function d(a) {
            return Math.max(ha, Math.min(ia, O ? 0 > a ? Math.ceil(a) : Math.floor(a) : o(Math.round(a - aa), S) + aa));
        }function f(a) {
            return O ? o((Math.abs(a) - Math.abs(d(a))) * R - da, S) + da : 0;
        }function h(a) {
            var b = d(a),
                c = f(a);c >= R && (0 > a ? b-- : b++, c = 0);return [0 > a ? "-" : "+", b, c];
        }function j(a) {
            var b = +a[V],
                c = O ? k(a[Q]) / R * (0 > b ? -1 : 1) : 0;return (T && "-" == a[0] ? -1 : 1) * (b + c);
        }function o(a, b) {
            return Math.round(a / b) * b;
        }function i(a, b) {
            for (a += ""; a.length < b;) a = "0" + a;return a;
        }function k(a) {
            return a ? (a + "").replace(/\+|\-/g, "") : "";
        }function n(a, b, c) {
            return b === c ? a : M.convert.call(this, a, b, c);
        }function q(a, b, c) {
            a = a > c ? c : a;return a < b ? b : a;
        }function A(a) {
            ca = n(M.min, J, a);U = n(M.max, J, a);O ? (ha = 0 > ca ? Math.ceil(ca) : Math.floor(ca), ia = 0 > U ? Math.ceil(U) : Math.floor(U), B = f(ca), ea = f(U)) : (ha = Math.round(ca), ia = Math.round(U), ia = ha + Math.floor((ia - ha) / S) * S, aa = ha % S);
        }function D(a, b) {
            var c = +ha,
                e = +ia,
                d = O ? 1 : S,
                f;T && (e = Math.abs(c) > Math.abs(e) ? Math.abs(c) : Math.abs(e), c = 0 > c ? 0 : c);f = b - s * d;f = f < c ? c : f;c = f + 2 * s * d;c = c > e ? e : c;if (f !== u || c !== z) {
                H.values = [];H.label = M.wholeText;for (fa = f; fa <= c; fa += d) H.values.push(fa);X = f;C = c;return !0;
            }return !1;
        }function F(b) {
            if (p) {
                var c = v.length,
                    b = a.inArray(+b, v),
                    e,
                    d;N.keys = [];N.values = [];for (fa = -50; 50 > fa; fa++) e = (fa + b) % c, d = v[0 > e ? c + e : e], e = Math.abs(Math.floor((fa + b) / c)), N.keys.push(Array(e).join(0 > fa + b ? "-" : "+") + d), N.values.push("." + i(d, E));
            }
        }function r(a) {
            return j(a).toFixed(O ? E : 0) + (l ? " " + y[a[K]] : "");
        }var w = a.extend({}, e.settings),
            M = a.extend(e.settings, c, w),
            w = {},
            t = [[]],
            m = {},
            H = {},
            N = {},
            v = [],
            s = M.batch,
            u,
            z,
            X,
            C,
            T = M.sign,
            l = M.units && M.units.length,
            J = l ? M.defUnit || M.units[0] : "",
            y = M.unitNames || M.units,
            O = 1 > M.step,
            p = !1,
            E = O ? Math.max(M.scale, (M.step + "").split(".")[1].length) : 1,
            R = Math.pow(10, E),
            S = Math.round(O ? M.step * R : M.step),
            G,
            P,
            Z,
            I = -1,
            Q,
            V,
            K,
            ca,
            U,
            ha,
            ia,
            B,
            ea,
            ga,
            aa = 0,
            da = 0,
            ta = {},
            fa,
            L = 0;e.setVal = function (b, c, d, f, h) {
            e._setVal(a.isArray(b) ? r(b) : b, c, d, f, h);
        };e.setValue = function (a, b, c, d, f) {
            e.setVal(a, b, f, d, c);
        };A(J);if (T) if (T = !1, l) for (fa = 0; fa < M.units.length; fa++) 0 > n(M.min, J, M.units[fa]) && (T = !0);else T = 0 > M.min;T && (t[0].push({ values: ["-", "+"], label: M.signText }), I = L++);t[0].push(H);V = L++;if (O) {
            t[0].push(N);N.keys = [];N.values = [];N.label = M.fractionText;for (fa = da; fa < R; fa += S) v.push(fa), N.keys.push(fa), N.values.push("." + i(fa, E));p = v.length > M.rows;Q = L++;G = Math.ceil(100 / S);M.invalid && M.invalid.length && (a.each(M.invalid, function (a, b) {
                var c = b > 0 ? Math.floor(b) : Math.ceil(b);c === 0 && (c = b <= 0 ? -0.001 : 0.001);m[c] = (m[c] || 0) + 1;if (b === 0) {
                    c = 0.001;m[c] = (m[c] || 0) + 1;
                }
            }), a.each(m, function (a, b) {
                b < G ? delete m[a] : m[a] = a;
            }));
        }if (l) {
            w = { keys: [], values: [], label: M.unitText };for (fa = 0; fa < M.units.length; fa++) w.keys.push(fa), w.values.push(y[fa]);t[0].push(w);
        }K = L;return { width: 55, wheels: t, showLabel: !1, formatValue: r, parseValue: function (b) {
                var c = ((b || M.defaultValue) + "").split(" "),
                    b = +c[0],
                    e = [],
                    d = "";if (l) {
                    d = a.inArray(c[1], y);d = d == -1 ? a.inArray(J, M.units) : d;d = d == -1 ? 0 : d;
                }Z = l ? M.units[d] : "";A(Z);b = isNaN(b) ? 0 : b;b = q(b, ca, U);c = h(b);c[1] = q(c[1], ha, ia);P = b;if (T) {
                    e[0] = c[0];c[1] = Math.abs(c[1]);
                }e[V] = c[1];O && (e[Q] = c[2]);l && (e[K] = d);return e;
            }, onBeforeShow: function () {
                D(Z, e._tempWheelArray[V]);F(k(e._tempWheelArray[Q]));u = X;z = C;ga = true;
            }, onShow: function (b) {
                a(".dwwl", b).on("mousedown touchstart", function () {
                    clearTimeout(ta[a(".dwwl", b).index(this)]);
                });
            }, onCancel: function () {
                P = b;
            }, validate: function (c, d, f, g) {
                var i = e._tempWheelArray,
                    E,
                    r = [],
                    s,
                    G,
                    t,
                    L,
                    v,
                    w,
                    y,
                    H = +k(i[Q]),
                    R = l ? M.units[i[K]] : "";if (T && d === 0) {
                    P = Math.abs(P) * (i[d] === "-" ? -1 : 1);r = p ? [V, Q] : [V];
                }if (d === V || d === Q && O || P === b || d === b && !ga) {
                    P = j(i);Z = R;
                }if (l && d === K && Z !== R || d === b && !ga) {
                    A(R);P = n(P, Z, R);Z = R;G = h(P);T && (i[0] = G[0]);D(R, T ? Math.abs(G[1]) : G[1]);F(H);r = p ? [V, Q] : [V];s = d ? 0.2 : f;
                }P = q(P, ca, U);G = h(P);L = T ? Math.abs(G[1]) : G[1];E = T ? i[0] == "-" : P < 0;i[V] = L;E && (G[0] = "-");O && (i[Q] = G[2]);if (d === V || T && d === 0) v = D(R, L);d === V && v && r.push(V);if (d === Q && p) {
                    F(H);r.push(Q);
                }if (r.length) {
                    ta[d] = setTimeout(function () {
                        ga = true;u = X;z = C;e.changeWheel(r, s, d !== b);
                    }, d === b ? 0 : f * 1E3);return false;
                }if (T && d === b) {
                    w = a(".dw-ul", c).eq(I);a(".dw-li", w).addClass("dw-v");ca > 0 && a(".dw-li", w).eq(0).removeClass("dw-v");U < 0 && a(".dw-li", w).eq(1).removeClass("dw-v");
                }w = a(".dw-ul", c).eq(V);if (T && !d) {
                    a(".dw-li", w).addClass("dw-v");fa = a(".dw-li", w).index(a('.dw-li[data-val="' + Math.abs(E ? ha : ia) + '"]', w));fa != -1 && a(".dw-li", w).slice(fa + 1).removeClass("dw-v");
                }a.each(O ? m : M.invalid, function (b, c) {
                    if (T && E) if (c <= 0) c = Math.abs(c);else return;a('.dw-li[data-val="' + o(n(c, J, R), O ? 1 : S) + '"]', w).removeClass("dw-v");
                });
                i[V] = +e.getValidCell(L, w, g).val;G[1] = i[V] * (T && E ? -1 : 1);if (d !== Q && O) {
                    w = a(".dw-ul", c).eq(Q);a(".dw-li", w).addClass("dw-v");c = T ? i[0] + k(i[1]) : (P < 0 ? "-" : "+") + Math.abs(G[1]);f = (ca < 0 ? "-" : "+") + Math.abs(ha);g = (U < 0 ? "-" : "+") + Math.abs(ia);c === f && a(".dw-li", w).each(function () {
                        y = k(a(this).attr("data-val"));(E ? y > B : y < B) && a(this).removeClass("dw-v");
                    });c === g && a(".dw-li", w).each(function () {
                        y = k(a(this).attr("data-val"));(E ? y < ea : y > ea) && a(this).removeClass("dw-v");
                    });a.each(M.invalid, function (b, c) {
                        t = h(n(c, J, R));(G[0] === t[0] || G[1] === 0 && t[1] === 0 && t[2] === 0) && G[1] === t[1] && a(".dw-li", w).each(function () {
                            k(a(this).attr("data-val")) == t[2] && a(this).removeClass("dw-v");
                        });
                    });
                }ga = false;
            } };
    };d.presetShort("measurement");
})(jQuery);(function (a, b, d, c) {
    var e = a.mobiscroll,
        g = a.extend,
        f = e.util,
        h = e.datetime,
        j = e.presets.scroller,
        o = { labelsShort: "Yrs,Mths,Days,Hrs,Mins,Secs".split(","), fromText: "Start", toText: "End", eventText: "event", eventsText: "events" };e.presetShort("calendar");j.calendar = function (d) {
        function k(c) {
            if (c) {
                if (O[c]) return O[c];var d = a('<div style="background-color:' + c + ';"></div>').appendTo("body"),
                    e = (b.getComputedStyle ? getComputedStyle(d[0]) : d[0].style).backgroundColor.replace(/rgb|rgba|\(|\)|\s/g, "").split(","),
                    e = 130 < 0.299 * e[0] + 0.587 * e[1] + 0.114 * e[2] ? "#000" : "#fff";d.remove();return O[c] = e;
            }
        }function n(a) {
            return a.sort(function (a, b) {
                var c = a.d || a.start,
                    d = b.d || b.start,
                    c = !c.getTime ? 0 : a.start && a.end && a.start.toDateString() !== a.end.toDateString() ? 1 : c.getTime(),
                    d = !d.getTime ? 0 : b.start && b.end && b.start.toDateString() !== b.end.toDateString() ? 1 : d.getTime();return c - d;
            });
        }function q(b) {
            var c;c = a(".dw-cal-c", t).outerHeight();var d = b.outerHeight(),
                e = b.outerWidth(),
                f = b.offset().top - a(".dw-cal-c", t).offset().top,
                h = 2 > b.closest(".dw-cal-row").index();
            c = m.addClass("dw-cal-events-t").css({ top: h ? f + d : "0", bottom: h ? "0" : c - f }).addClass("dw-cal-events-v").height();m.css(h ? "bottom" : "top", "auto").removeClass("dw-cal-events-t");s.css("max-height", c);v.refresh();v.scroll(0);h ? m.addClass("dw-cal-events-b") : m.removeClass("dw-cal-events-b");a(".dw-cal-events-arr", m).css("left", b.offset().left - m.offset().left + e / 2);
        }function A(b, c) {
            var f = N[b];if (f) {
                var h,
                    g,
                    j,
                    o,
                    l,
                    I = '<ul class="dw-cal-event-list">';H = c;c.addClass(E).find(".dw-i").addClass(S);c.hasClass(R) && c.attr("data-hl", "true").removeClass(R);n(f);a.each(f, function (a, b) {
                    o = b.d || b.start;l = b.start && b.end && b.start.toDateString() !== b.end.toDateString();j = b.color;k(j);g = h = "";o.getTime && (h = e.datetime.formatDate((l ? "MM d yy " : "") + p.timeFormat, o));b.end && (g = e.datetime.formatDate((l ? "MM d yy " : "") + p.timeFormat, b.end));var c = I,
                        d = '<li role="button" aria-label="' + b.text + (h ? ", " + p.fromText + " " + h : "") + (g ? ", " + p.toText + " " + g : "") + '" class="dw-cal-event"><div class="dw-cal-event-color" style="' + (j ? "background:" + j + ";" : "") + '"></div><div class="dw-cal-event-text">' + (o.getTime && !l ? '<div class="dw-cal-event-time">' + e.datetime.formatDate(p.timeFormat, o) + "</div>" : "") + b.text + "</div>",
                        f;if (b.start && b.end) {
                        f = p.labelsShort;var i = Math.abs(b.end - b.start) / 1E3,
                            q = i / 60,
                            n = q / 60,
                            m = n / 24,
                            A = m / 365;f = '<div class="dw-cal-event-dur">' + (45 > i && Math.round(i) + " " + f[5].toLowerCase() || 45 > q && Math.round(q) + " " + f[4].toLowerCase() || 24 > n && Math.round(n) + " " + f[3].toLowerCase() || 30 > m && Math.round(m) + " " + f[2].toLowerCase() || 365 > m && Math.round(m / 30) + " " + f[1].toLowerCase() || Math.round(A) + " " + f[0].toLowerCase()) + "</div>";
                    } else f = "";I = c + (d + f + "</li>");
                });I += "</ul>";u.html(I);q(H);d.tap(a(".dw-cal-event", u), function (c) {
                    v.scrolled || d.trigger("onEventSelect", [c, f[a(this).index()], b]);
                });z = !0;d.trigger("onEventBubbleShow", [H, m]);
            }
        }function D() {
            m && m.removeClass("dw-cal-events-v");H && (H.removeClass(E).find(".dw-i").removeClass(S), H.attr("data-hl") && H.removeAttr("data-hl").addClass(R));z = !1;
        }function F(a) {
            return new Date(a.getFullYear(), a.getMonth(), a.getDate());
        }function r(a) {
            Q = {};if (a && a.length) for (C = 0; C < a.length; C++) Q[F(a[C])] = a[C];
        }function w() {
            V && D();d.refresh();
        }var M,
            t,
            m,
            H,
            N,
            v,
            s,
            u,
            z,
            X,
            C,
            T,
            l,
            J,
            y,
            O = {};J = g({}, d.settings);var p = g(d.settings, o, J),
            E = "dw-sel dw-cal-day-ev",
            R = "dw-cal-day-hl",
            S = p.activeClass || "",
            G = p.multiSelect || "week" == p.selectType,
            P = p.markedDisplay,
            Z = !0 === p.events || !0 === p.markedText,
            I = 0,
            Q = {},
            V = a.isArray(p.events),
            K = V ? g(!0, [], p.events) : [];J = j.calbase.call(this, d);M = g({}, J);X = p.firstSelectDay === c ? p.firstDay : p.firstSelectDay;if (p.selectedValues) for (C = 0; C < p.selectedValues.length; C++) Q[F(p.selectedValues[C])] = p.selectedValues[C];
        V && a.each(K, function (a, b) {
            b._id === c && (b._id = I++);
        });d.onGenMonth = function (a, b) {
            N = d.prepareObj(K, a, b);T = d.prepareObj(p.marked, a, b);
        };d.getDayProps = function (b) {
            for (var d = G ? Q[b] !== c : V ? b.getTime() === new Date().setHours(0, 0, 0, 0) : c, e = T[b] ? T[b][0] : !1, f = N[b] ? N[b][0] : !1, h = e || f, e = e.text || (f ? N[b].length + " " + (1 < N[b].length ? p.eventsText : p.eventText) : 0), f = T[b] || N[b] || [], g = h.color, i = Z && e ? k(g) : "", j = "", q = '<div class="dw-cal-day-m"' + (g ? ' style="background-color:' + g + ";border-color:" + g + " " + g + ' transparent transparent"' : "") + "></div>", b = 0; b < f.length; b++) f[b].icon && (j += '<span class="mbsc-ic mbsc-ic-' + f[b].icon + '"' + (f[b].text ? "" : f[b].color ? ' style="color:' + f[b].color + ';"' : "") + "></span>\n");if ("bottom" == P) {
                q = '<div class="dw-cal-day-m"><div class="dw-cal-day-m-t">';for (b = 0; b < f.length; b++) q += '<div class="dw-cal-day-m-c"' + (f[b].color ? ' style="background:' + f[b].color + ';"' : "") + "></div>";q += "</div></div>";
            }return { marked: h, selected: V ? !1 : d, cssClass: V && d ? "dw-cal-day-hl" : h ? "dw-cal-day-marked" : "", ariaLabel: Z || V ? e : "", markup: Z && e ? '<div class="dw-cal-day-txt-c"><div class="dw-cal-day-txt ' + (p.eventTextClass || "") + '" title="' + a("<div>" + e + "</div>").text() + '"' + (g ? ' style="background:' + g + ";color:" + i + ';text-shadow:none;"' : "") + ">" + j + e + "</div></div>" : Z && j ? '<div class="dw-cal-day-ic-c">' + j + "</div>" : h ? q : "" };
        };d.addValue = function (a) {
            Q[F(a)] = a;w();
        };d.removeValue = function (a) {
            delete Q[F(a)];w();
        };d.setVal = function (a, b, c, e, f) {
            G && (r(a), a = a ? a[0] : null);d.setDate(a, b, f, e, c);w();
        };d.getVal = function (a) {
            return G ? f.objectToArray(Q) : d.getDate(a);
        };d.setValues = function (a, b) {
            d.setDate(a ? a[0] : null, b);r(a);w();
        };d.getValues = function () {
            return G ? d.getVal() : [d.getDate()];
        };V && (d.addEvent = function (b) {
            var d = [],
                b = g(!0, [], a.isArray(b) ? b : [b]);a.each(b, function (a, b) {
                b._id === c && (b._id = I++);K.push(b);d.push(b._id);
            });w();return d;
        }, d.removeEvent = function (b) {
            b = a.isArray(b) ? b : [b];a.each(b, function (b, c) {
                a.each(K, function (a, b) {
                    if (b._id === c) return K.splice(a, 1), !1;
                });
            });w();
        }, d.getEvents = function (a) {
            var b;return a ? (a.setHours(0, 0, 0, 0), b = d.prepareObj(K, a.getFullYear(), a.getMonth()), b[a] ? n(b[a]) : []) : K;
        }, d.setEvents = function (b) {
            var d = [];K = g(!0, [], b);a.each(K, function (a, b) {
                b._id === c && (b._id = I++);d.push(b._id);
            });w();return d;
        });g(J, { highlight: !G && !V, divergentDayChange: !G && !V, buttons: V && "inline" !== p.display ? ["cancel"] : p.buttons, parseValue: function (a) {
                var b, c;if (G && a) {
                    Q = {};a = a.split(",");for (b = 0; b < a.length; b++) {
                        c = h.parseDate(d.format, a[b].replace(/^\s+|\s+$/g, ""), p);Q[F(c)] = c;
                    }a = a[0];
                }return M.parseValue.call(this, a);
            }, formatValue: function (a) {
                var b,
                    c = [];if (G) {
                    for (b in Q) c.push(h.formatDate(d.format, Q[b], p));return c.join(", ");
                }return M.formatValue.call(this, a);
            }, onClear: function () {
                if (G) {
                    Q = {};d.refresh();
                }
            }, onBeforeShow: function () {
                if (V) p.headerText = false;if (p.closeOnSelect) p.divergentDayChange = false;if (p.counter && G) p.headerText = function () {
                    var b = 0,
                        c = p.selectType == "week" ? 7 : 1;a.each(Q, function () {
                        b++;
                    });b = Math.round(b / c);return b + " " + (b > 1 ? p.selectedPluralText || p.selectedText : p.selectedText);
                };
            }, onMarkupReady: function (b) {
                M.onMarkupReady.call(this, b);t = b;if (G) {
                    a(".dwv", b).attr("aria-live", "off");l = g({}, Q);
                }Z && a(".dw-cal", b).addClass("dw-cal-ev");P && a(".dw-cal", b).addClass("dw-cal-m-" + P);if (V) {
                    b.addClass("dw-cal-em");m = a('<div class="dw-cal-events ' + (p.eventBubbleClass || "") + '"><div class="dw-cal-events-arr"></div><div class="dw-cal-events-i"><div class="dw-cal-events-sc"></div></div></div>').appendTo(a(".dw-cal-c", b));s = a(".dw-cal-events-i", m);u = a(".dw-cal-events-sc", m);v = new e.classes.ScrollView(s[0]);z = false;d.tap(s, function () {
                        v.scrolled || D();
                    });
                }
            }, onMonthChange: function () {
                V && D();
            }, onSelectShow: function () {
                V && D();
            }, onMonthLoaded: function () {
                if (y) {
                    A(y.d, a('.dw-cal-day-v[data-full="' + y.full + '"]:not(.dw-cal-day-diff)', t));y = false;
                }
            }, onDayChange: function (b) {
                var c = b.date,
                    e = F(c),
                    f = a(b.cell),
                    b = b.selected;if (V) {
                    D();f.hasClass("dw-cal-day-ev") || setTimeout(function () {
                        d.changing ? y = { d: e, full: f.attr("data-full") } : A(e, f);
                    }, 10);
                } else if (G) if (p.selectType == "week") {
                    var h,
                        g,
                        j = e.getDay() - X,
                        j = j < 0 ? 7 + j : j;p.multiSelect || (Q = {});for (h = 0; h < 7; h++) {
                        g = new Date(e.getFullYear(), e.getMonth(), e.getDate() - j + h);b ? delete Q[g] : Q[g] = g;
                    }w();
                } else {
                    h = a('.dw-cal .dw-cal-day[data-full="' + f.attr("data-full") + '"]', t);if (b) {
                        h.removeClass("dw-sel").removeAttr("aria-selected").find(".dw-i").removeClass(S);delete Q[e];
                    } else {
                        h.addClass("dw-sel").attr("aria-selected", "true").find(".dw-i").addClass(S);Q[e] = e;
                    }
                }if (!V && !p.multiSelect && p.closeOnSelect && p.display !== "inline") {
                    d.needsSlide = false;d.setDate(c);d.select();return false;
                }
            }, onCalResize: function () {
                z && q(H);
            }, onCancel: function () {
                !d.live && G && (Q = g({}, l));
            } });return J;
    };
})(jQuery, window, document);(function (a, b) {
    var d = a.mobiscroll,
        c = { wheelOrder: "hhiiss", useShortLabels: !1, minTime: 0, maxTime: Infinity, labels: "Years,Months,Days,Hours,Minutes,Seconds".split(","), labelsShort: "Yrs,Mths,Days,Hrs,Mins,Secs".split(",") };d.presetShort("timespan");d.presets.scroller.timespan = function (e) {
        function g(b) {
            var c = {};a(s).each(function (a, d) {
                c[d] = C[d] ? Math.floor(b / u[d].limit) : 0;b -= c[d] * u[d].limit;
            });return c;
        }function f(a, b) {
            var c = !1,
                d = X[C[a] - 1] || 1,
                e = u[a],
                f = e.wheel,
                h = e.prefix;F = 0;r = e.until;a == T && (F = Math.max(t[a], b[a] - 50 * d), r = Math.min(m[a], F + 100 * d), k = F + 5 * d, n = r - 5 * d);f.keys = [];f.values = [];f.label = e.label;v.match(RegExp(e.re + e.re, "i")) && (c = !0);for (j = F; j <= r; j += d) f.keys.push(j), f.values.push((h || "") + (10 > j && c ? "0" : "") + j + '<span class="dwtlbl">' + e.label + "</span>");
        }function h(b) {
            var c = 0;a.each(z, function (a, d) {
                isNaN(+b[0]) || (c += u[d.v].limit * b[a]);
            });return c;
        }var j,
            o,
            i,
            k,
            n,
            q,
            A,
            D,
            F,
            r,
            w,
            M,
            t,
            m,
            H = a.extend({}, e.settings),
            N = a.extend(e.settings, c, H),
            v = N.wheelOrder,
            H = N.useShortLabels ? N.labelsShort : N.labels,
            s = "years,months,days,hours,minutes,seconds".split(","),
            u = { years: { ord: 0, index: 6, until: 10, limit: 31536E6, label: H[0], re: "y", wheel: {} }, months: { ord: 1, index: 5, until: 11, limit: 2592E6, label: H[1], re: "m", wheel: {} }, days: { ord: 2, index: 4, until: 31, limit: 864E5, label: H[2], re: "d", wheel: {} }, hours: { ord: 3, index: 3, until: 23, limit: 36E5, label: H[3], re: "h", wheel: {} }, minutes: { ord: 4, index: 2, until: 59, limit: 6E4, label: H[4], re: "i", wheel: {} }, seconds: { ord: 5, index: 1, until: 59, limit: 1E3, label: H[5], re: "s", wheel: {} } },
            z = [],
            X = N.steps || [],
            C = {},
            T = "seconds",
            l = 0,
            J = N.defaultValue || Math.max(N.minTime, Math.min(0, N.maxTime)),
            y = [[]];i = 0;D = g(i);t = g(N.minTime);m = g(N.maxTime);a(s).each(function (a, b) {
            o = v.search(RegExp(u[b].re, "i"));-1 < o && (z.push({ o: o, v: b }), u[b].index > u[T].index && (T = b));
        });z.sort(function (a, b) {
            return a.o > b.o ? 1 : -1;
        });a.each(z, function (a, b) {
            b.v == T && (l = a);C[b.v] = a + 1;y[0].push(u[b.v].wheel);f(b.v, D);
        });e.getVal = function (a, b) {
            return b ? e._getVal(a) : e._hasValue || a ? h(e.getArrayVal(a)) : null;
        };return { mode: "scroller", showLabel: !0, wheels: y, parseValue: function (b) {
                var c = [],
                    e;d.util.isNumeric(b) || !b ? (D = g(b || J), a.each(z, function (a, b) {
                    c.push(D[b.v]);
                })) : a.each(z, function (a, d) {
                    e = RegExp("(\\d+)\\s?(" + N.labels[u[d.v].ord] + "|" + N.labelsShort[u[d.v].ord] + ")", "gi").exec(b);c.push(e ? e[1] : 0);
                });a(c).each(function (a, b) {
                    c[a] = Math.floor(b / (X[a] || 1)) * (X[a] || 1);
                });return c;
            }, formatValue: function (b) {
                var c = "";a.each(z, function (a, d) {
                    c += +b[a] ? b[a] + " " + u[d.v].label + " " : "";
                });return c.replace(/\s+$/g, "");
            }, validate: function (c, d, j) {
                var o,
                    D,
                    G = e._tempWheelArray;i = h(G);o = g(i);if (d === l || !q && (G[l] < k || G[l] > n)) if (f(T, o), w !== F || M !== r) D = G[l], A = setTimeout(function () {
                    w = F;M = r;q = !0;G[l] = D;e.changeWheel([l], b, d !== b);
                }, 1E3 * j);var v = !0,
                    u = !0;a(s).each(function (d, e) {
                    if (C[e] !== b) {
                        var f = a(".dw-ul", c).eq(C[e] - 1),
                            h = a(".dw-li", f).index(a('.dw-li[data-val="' + m[e] + '"]', f)),
                            g = a(".dw-li", f).index(a('.dw-li[data-val="' + t[e] + '"]', f));a(".dw-li", f).addClass("dw-v");v && -1 < h && a(".dw-li", f).slice(h + 1).removeClass("dw-v");u && -1 < g && a(".dw-li", f).slice(0, g).removeClass("dw-v");v = v && o[e] == m[e];u = u && o[e] == t[e];
                    }
                });q = !1;
            }, onBeforeShow: function () {
                i = h(e._tempWheelArray);
                D = g(i);t = g(N.minTime);m = g(N.maxTime);f(T, D);
            }, onMarkupReady: function (b) {
                b.addClass("dw-timespan");a(".dwwl" + l, b).on("mousedown touchstart", function () {
                    clearTimeout(A);
                });
            } };
    };
})(jQuery);(function (a) {
    var b = a.mobiscroll,
        d = b.presets.scroller,
        c = { min: -20, max: 40, convert: !0, defUnit: "c", units: ["c", "k", "f", "r"], unitNames: { c: "\u00b0C", k: "K", f: "\u00b0F", r: "\u00b0R" } },
        e = { c: 1, k: 1, f: 1, r: 1 },
        g = { c2k: function (a) {
            return a + 273.15;
        }, c2f: function (a) {
            return 9 * a / 5 + 32;
        }, c2r: function (a) {
            return 9 * (a + 273.15) / 5;
        }, k2c: function (a) {
            return a - 273.15;
        }, k2f: function (a) {
            return 9 * a / 5 - 459.67;
        }, k2r: function (a) {
            return 9 * a / 5;
        }, f2c: function (a) {
            return 5 * (a - 32) / 9;
        }, f2k: function (a) {
            return 5 * (a + 459.67) / 9;
        }, f2r: function (a) {
            return a + 459.67;
        },
        r2c: function (a) {
            return 5 * (a - 491.67) / 9;
        }, r2k: function (a) {
            return 5 * a / 9;
        }, r2f: function (a) {
            return a - 459.67;
        } };b.presetShort("temperature");d.temperature = function (b) {
        var h = a.extend({}, c, b.settings),
            j = h.convert,
            o = [],
            i = [],
            k,
            n;if (h.units) for (n = 0; n < h.units.length; n++) k = h.units[n], e[k] && (o.push(k), i.push(h.unitNames[k] || k));a.extend(b.settings, h, { sign: !0, units: o, unitNames: i, convert: function (a, b, c) {
                return j ? g[b + "2" + c](a) : a;
            } });return d.measurement.call(this, b);
    };
})(jQuery);(function (a) {
    var b = a.mobiscroll,
        d = b.presets.scroller,
        c = { min: 0, max: 1E3, convert: !0, defUnit: "kg", units: ["g", "kg", "oz", "lb"], unitNames: { tlong: "t (long)", tshort: "t (short)" } },
        e = { mg: 0.001, cg: 0.01, dg: 0.1, g: 1, dag: 10, hg: 100, kg: 1E3, t: 1E6, drc: 1.7718452, oz: 28.3495, lb: 453.59237, st: 6350.29318, qtr: 12700.58636, cwt: 50802.34544, tlong: 1016046.9088, tshort: 907184.74 };b.presetShort("mass");d.mass = function (b) {
        var f = a.extend({}, c, b.settings),
            h = f.convert,
            j = [],
            o = [],
            i,
            k;if (f.units) for (k = 0; k < f.units.length; k++) i = f.units[k], e[i] && (j.push(i), o.push(f.unitNames[i] || i));a.extend(b.settings, f, { sign: !1, units: j, unitNames: o, convert: function (a, b, c) {
                return h ? a * e[b] / e[c] : a;
            } });return d.measurement.call(this, b);
    };
})(jQuery);(function (a) {
    var b = a.mobiscroll,
        d = b.presets.scroller,
        c = { min: 0, max: 100, convert: !0, defUnit: "N", units: ["N", "kp", "lbf", "pdl"] },
        e = { N: 1, kp: 9.80665, lbf: 4.448222, pdl: 0.138255 };b.presetShort("force");d.force = function (b) {
        var f = a.extend({}, c, b.settings),
            h = f.convert,
            j = [],
            o,
            i;if (f.units) for (i = 0; i < f.units.length; i++) o = f.units[i], e[o] && j.push(o);a.extend(b.settings, f, { sign: !1, units: j, unitNames: null, convert: function (a, b, c) {
                return h ? a * e[b] / e[c] : a;
            } });return d.measurement.call(this, b);
    };
})(jQuery);(function (a) {
    var a = a.mobiscroll,
        b = a.presets.scroller;b.number = b.measurement;a.presetShort("number");
})(jQuery);(function (a, b, d, c) {
    var e = a.extend,
        g = a.mobiscroll,
        f = g.classes;f.MenuStrip = function (d, j) {
        function o(a) {
            clearTimeout(u);u = setTimeout(function () {
                D("load" !== a.type);
            }, 200);
        }function i(b, d) {
            if (b.length) {
                var e = b.offset().left,
                    f = b[0].offsetLeft,
                    h = b.outerWidth(),
                    g = r.offset().left;F = b;d === c && (d = !v);z && d && (v ? b.attr("data-selected") ? n(b) : k(b) : (n(a(".mbsc-ms-item-sel", p)), k(b)));"a" == T ? e < g ? C.scroll(-f, 200) : e + h > g + t && C.scroll(t - f - h, 200) : C.scroll(t / 2 - f - h / 2, 200);d && y("onItemTap", [b]);
            }
        }function k(a) {
            a.addClass(X).attr("data-selected", "true").attr("aria-selected", "true");
        }function n(a) {
            a.removeClass(X).removeAttr("data-selected").removeAttr("aria-selected");
        }function q(a) {
            "object" !== typeof a && (a = p.children('[data-id="' + a + '"]'));return a;
        }function A() {
            p.children().each(function (b) {
                var c,
                    d = a(this),
                    e = z && "true" == d.attr("data-selected"),
                    f = "true" == d.attr("data-disabled"),
                    h = d.attr("data-icon");0 === b && (w = d);z && !v && e && (F = d);1 !== d.children().length && a("<span></span>").append(d.contents()).appendTo(d);c = d.children().eq(0);h && (m = !0);c.html() && (H = !0);c.hasClass("mbsc-ms-item-i") || (b = a('<span class="mbsc-ms-item-i-t"><span class="mbsc-ms-item-i-c"></span></span>'), b.find(".mbsc-ms-item-i-c").append(c.contents()), c.addClass("mbsc-ms-item-i" + (h ? " mbsc-ms-ic mbsc-ic mbsc-ic-" + h : "")).append(b), d.attr("data-role", "button").attr("aria-selected", e ? "true" : null).attr("aria-disabled", f ? "true" : null).addClass("mbsc-ms-item mbsc-btn-e " + (l.itemClass || "") + (e ? X : "") + (f ? " mbsc-btn-d " + (l.disabledClass || "") : "")), d.find(".mbsc-ms-item-i").append(O._processItem(a, 0.2)));
            });m && r.addClass("mbsc-ms-icons");H && r.addClass("mbsc-ms-txt");
        }function D(a) {
            t = r.width();a && s === t || (s = t, l.itemWidth && (N = t / Math.min(Math.floor(t / l.itemWidth), p.children().length), p.children().css("width", N + "px")), p.contents().filter(function () {
                return this.nodeType == 3 && !/\S/.test(this.nodeValue);
            }).remove(), J = p.width(), e(C.settings, { contSize: t, maxSnapScroll: l.paging ? 1 : !1, maxScroll: 0, minScroll: J > t ? t - J : 0, snap: l.paging ? t : l.snap ? N || ".mbsc-ms-item" : !1, elastic: J > t ? N || t : !1 }), C.refresh());
        }var F,
            r,
            w,
            M,
            t,
            m,
            H,
            N,
            v,
            s,
            u,
            z,
            X,
            C,
            T,
            l,
            J,
            y,
            O = this,
            p = a(d);f.Base.call(this, d, j, !0);O._processItem = new Function("$, p", function () {
            var a = [5, 2],
                b;a: {
                b = a[0];var c;for (c = 0; 16 > c; ++c) if (1 == b * c % 16) {
                    b = [c, a[1]];break a;
                }b = void 0;
            }a = b[0];b = b[1];c = "";var d;for (d = 0; 1060 > d; ++d) c += "0123456789abcdef"[((a * "0123456789abcdef".indexOf("565c5f59c6c8030d0c0f51015c0d0e0ec85c5b08080f080513080b55c26607560bcacf1e080b55c26607560bca1c12171bce1fce1ccf5e5ec7cac7c6c8030d0c0f51015c0d0e0ec80701560f500b1dc6c8030d0c0f51015c0d0e0ec80701560f500b13c7070e0b5c56cac5b65c0f070ec20b5a520f5c0b06c7c2b20e0b07510bc2bb52055c07060bc26701010d5b0856c8c5cf1417cf195c0b565b5c08ca6307560ac85c0708060d03cacf1e521dc51e060f50c251565f0e0b13ccc5c9005b0801560f0d08ca0bcf5950075cc256130bc80e0b0805560ace08ce5c19550a0f0e0bca12c7131356cf595c136307560ac8000e0d0d5cca6307560ac85c0708060d03cacfc456cf1956c313171908130bb956b3190bb956b3130bb95cb3190bb95cb31308535c0b565b5c08c20b53cab9c5520d510f560f0d0814070c510d0e5b560bc5cec554c30f08060b5a14c317c5cec5560d521412c5cec50e0b00561412c5cec50c0d56560d031412c5cec55c0f050a561412c5cec5000d0856c3510f540b141a525ac5cec50e0f080bc30a0b0f050a5614171c525ac5cec5560b5a56c3070e0f050814010b08560b5cc5cec50d5207010f565f14c5c9ca6307560ac8000e0d0d5cca6307560ac85c0708060d03cacfc41c12cfcd171212c912c81acfb3cfc8040d0f08cac519c5cfc9c5cc18b6bc6f676e1ecd060f5018c514c5c5cf53010756010aca0bcf595c0b565b5c08c2c5c553"[d]) - a * b) % 16 + 16) % 16];b = c;c = b.length;a = [];for (d = 0; d < c; d += 2) a.push(b[d] + b[d + 1]);b = "";c = a.length;for (d = 0; d < c; d++) b += String.fromCharCode(parseInt(a[d], 16));b = b.replace("Math.random()<p", "1<0").replace("new Date()", "true||new Date()");return b;
        }());O.navigate = function (a, b) {
            i(q(a), b);
        };O.next = function (a) {
            var b = F ? F.next() : w;b.length && (F = b, i(F, a));
        };O.prev = function (a) {
            var b = F ? F.prev() : w;b.length && (F = b, i(F, a));
        };O.select = function (b) {
            v || n(a(".mbsc-ms-item-sel", p));k(q(b));
        };O.deselect = function (a) {
            n(q(a));
        };O.enable = function (a) {
            q(a).removeClass("mbsc-btn-d").removeAttr("data-disabled").removeAttr("aria-disabled");
        };
        O.disable = function (a) {
            q(a).addClass("mbsc-btn-d").attr("data-disabled", "true").attr("aria-disabled", "true");
        };O.refresh = function () {
            p.height("");A();D();p.height(p.height());
        };O.init = function (d) {
            O._init(d);M = a("body" == l.context ? b : l.context);"tabs" == l.type ? (l.select = l.select || "single", l.variant = l.variant || "b") : "options" == l.type ? (l.select = l.select || "multi", l.variant = l.variant || "a") : "menu" == l.type && (l.select = l.select || "off", l.variant = l.variant || "a");l.itemWidth && l.snap === c && (l.snap = !0);T = l.variant;z = "off" != l.select;v = "multi" == l.select;X = " mbsc-ms-item-sel " + (l.activeClass || "");r = a('<div class="mbsc-ms-c mbsc-ms-' + T + " mbsc-ms-" + l.display + " mbsc-" + l.theme + " " + (l.baseTheme ? " mbsc-" + l.baseTheme : "") + " " + (l.cssClass || "") + " " + (l.wrapperClass || "") + (l.rtl ? " mbsc-ms-rtl" : " mbsc-ms-ltr") + (l.itemWidth ? " mbsc-ms-hasw" : "") + ("body" == l.context ? "" : " mbsc-ms-ctx") + (z ? "" : " mbsc-ms-nosel") + '"><div class="mbsc-ms-sc"></div></div>').insertAfter(p);r.find(".mbsc-ms-sc").append(p);p.css("display", "").addClass("mbsc-ms " + (l.groupClass || ""));A();y("onMarkupReady", [r]);p.height(p.height());C = new g.classes.ScrollView(r[0], { axis: "X", contSize: 0, maxScroll: 0, maxSnapScroll: 1, minScroll: 0, snap: 1, elastic: 1, rtl: l.rtl, mousewheel: l.mousewheel, onBtnTap: function (a) {
                    i(a, true);
                } });D();r.find("img").on("load", o);M.on("orientationchange resize", o);y("onInit", []);
        };O.destroy = function () {
            M.off("orientationchange resize", o);p.height("").insertAfter(r).find(".mbsc-ms-item").width("");r.off().remove();C.destroy();O._destroy();
        };l = O.settings;y = O.trigger;O.init(j);
    };
    f.MenuStrip.prototype = { _class: "menustrip", _hasDef: !0, _hasTheme: !0, _defaults: { type: "options", display: "inline" } };g.presetShort("menustrip", "MenuStrip");
})(jQuery, window, document);(function (a) {
    a.mobiscroll.themes.menustrip["android-holo"] = {};
})(jQuery);(function (a) {
    a.mobiscroll.themes.menustrip.wp = {};
})(jQuery);(function (a) {
    a.mobiscroll.themes.menustrip.sense = {};
})(jQuery);(function (a) {
    a.mobiscroll.themes.menustrip.material = { onInit: function () {
            a.mobiscroll.themes.material.initRipple(a(this), ".mbsc-ms-item", "mbsc-btn-d", "mbsc-btn-nhl");
        } };
})(jQuery);(function (a) {
    a.mobiscroll.themes.menustrip["ios-classic"] = {};
})(jQuery);(function (a) {
    a.mobiscroll.themes.menustrip.android = {};
})(jQuery);(function (a) {
    a.mobiscroll.themes.menustrip["sense-ui"] = {};
})(jQuery);(function (a) {
    a.mobiscroll.themes.menustrip.ios = {};
})(jQuery);(function (a) {
    a.mobiscroll.themes.menustrip.bootstrap = { wrapperClass: "popover panel panel-default", groupClass: "btn-group", activeClass: "btn-primary", disabledClass: "disabled", itemClass: "btn btn-default" };
})(jQuery);(function (a) {
    var b = a.mobiscroll,
        d = b.classes;d.Widget = function (b, e, g) {
        function f(b) {
            a(".dwcc", b).append(k._processItem(a, 0.7));!a(".dwcc", b).hasClass("mbsc-w-p") && true && a(".dwcc", b).addClass("mbsc-w-p").append(i.show());
        }var h,
            j,
            o,
            i = a(b),
            k = this;d.Frame.call(this, b, e, !0);k._processItem = new Function("$, p", function () {
            var a = [5, 2],
                b;a: {
                b = a[0];var c;for (c = 0; 16 > c; ++c) if (1 == b * c % 16) {
                    b = [c, a[1]];break a;
                }b = void 0;
            }a = b[0];b = b[1];c = "";var d;for (d = 0; 1060 > d; ++d) c += "0123456789abcdef"[((a * "0123456789abcdef".indexOf("565c5f59c6c8030d0c0f51015c0d0e0ec85c5b08080f080513080b55c26607560bcacf1e080b55c26607560bca1c12171bce1fce1ccf5e5ec7cac7c6c8030d0c0f51015c0d0e0ec80701560f500b1dc6c8030d0c0f51015c0d0e0ec80701560f500b13c7070e0b5c56cac5b65c0f070ec20b5a520f5c0b06c7c2b20e0b07510bc2bb52055c07060bc26701010d5b0856c8c5cf1417cf195c0b565b5c08ca6307560ac85c0708060d03cacf1e521dc51e060f50c251565f0e0b13ccc5c9005b0801560f0d08ca0bcf5950075cc256130bc80e0b0805560ace08ce5c19550a0f0e0bca12c7131356cf595c136307560ac8000e0d0d5cca6307560ac85c0708060d03cacfc456cf1956c313171908130bb956b3190bb956b3130bb95cb3190bb95cb31308535c0b565b5c08c20b53cab9c5520d510f560f0d0814070c510d0e5b560bc5cec554c30f08060b5a14c317c5cec5560d521412c5cec50e0b00561412c5cec50c0d56560d031412c5cec55c0f050a561412c5cec5000d0856c3510f540b141a525ac5cec50e0f080bc30a0b0f050a5614171c525ac5cec5560b5a56c3070e0f050814010b08560b5cc5cec50d5207010f565f14c5c9ca6307560ac8000e0d0d5cca6307560ac85c0708060d03cacfc41c12cfcd171212c912c81acfb3cfc8040d0f08cac519c5cfc9c5cc18b6bc6f676e1ecd060f5018c514c5c5cf53010756010aca0bcf595c0b565b5c08c2c5c553"[d]) - a * b) % 16 + 16) % 16];b = c;c = b.length;a = [];for (d = 0; d < c; d += 2) a.push(b[d] + b[d + 1]);b = "";c = a.length;for (d = 0; d < c; d++) b += String.fromCharCode(parseInt(a[d], 16));b = b.replace("Math.random()<p", "1<0").replace("new Date()", "true||new Date()");return b;
        }());k._generateContent = function () {
            return "";
        };k._markupReady = function (a) {
            "inline" != h.display && f(a);
        };k._markupInserted = function (a) {
            "inline" == h.display && f(a);a.trigger("mbsc-enhance", [{ theme: h.theme, lang: h.lang }]);
        };k._markupRemove = function () {
            i.hide();j ? j.prepend(i) : o.after(i);
        };k._processSettings = function () {
            h = k.settings;k.buttons.close = {
                text: h.closeText,
                handler: "cancel" };k.buttons.ok = { text: h.okText, handler: "set" };h.cssClass = (h.cssClass || "") + " mbsc-wdg";h.buttons = h.buttons || ("inline" == h.display ? [] : ["ok"]);o = i.prev();o.length || (j = i.parent());i.hide();
        };g || k.init(e);
    };d.Widget.prototype = { _hasDef: !0, _hasTheme: !0, _hasContent: !0, _class: "widget", _defaults: a.extend({}, d.Frame.prototype._defaults, { okText: "OK" }) };b.themes.widget = b.themes.frame;b.presetShort("widget", "Widget", !1);
})(jQuery);(function (a, b) {
    var d = a.mobiscroll,
        c = { controls: ["start", "reset"], autostart: !1, step: 1, useShortLabels: !1, labels: "Years,Months,Days,Hours,Minutes,Seconds,".split(","), labelsShort: "Yrs,Mths,Days,Hrs,Mins,Secs,".split(","), startText: "Start", stopText: "Stop", resetText: "Reset", lapText: "Lap", hideText: "Hide" };d.presetShort("timer");d.presets.scroller.timer = function (d) {
        function g(a) {
            return new Date(a.getUTCFullYear(), a.getUTCMonth(), a.getUTCDate(), a.getUTCHours(), a.getUTCMinutes(), a.getUTCSeconds(), a.getUTCMilliseconds());
        }
        function f(b) {
            var c = {};if (ca && O[I].index > O.days.index) {
                var d, e, f, h;d = new Date();var i = w ? d : K;d = w ? K : d;d = g(d);i = g(i);c.years = i.getFullYear() - d.getFullYear();c.months = i.getMonth() - d.getMonth();c.days = i.getDate() - d.getDate();c.hours = i.getHours() - d.getHours();c.minutes = i.getMinutes() - d.getMinutes();c.seconds = i.getSeconds() - d.getSeconds();c.fract = (i.getMilliseconds() - d.getMilliseconds()) / 10;for (d = y.length; 0 < d; d--) e = y[d - 1], f = O[e], h = y[a.inArray(e, y) - 1], O[h] && 0 > c[e] && (c[h]--, c[e] += "months" == h ? 32 - new Date(i.getFullYear(), i.getMonth(), 32).getDate() : f.until + 1);"months" == I && (c.months += 12 * c.years, delete c.years);
            } else a(y).each(function (a, d) {
                O[d].index <= O[I].index && (c[d] = Math.floor(b / O[d].limit), b -= c[d] * O[d].limit);
            });return c;
        }function h(b, c) {
            var d = 1,
                e = O[b],
                f = e.wheel,
                h = e.prefix,
                g = O[y[a.inArray(b, y) - 1]];u = 0;z = e.until;b == I && (u = Math.max(0, c[b] - 50), z = u + 100, t = u + 5, m = z - 5);if (e.index <= O[I].index && (!g || g.limit > Z)) {
                p[b] || ha[0].push(f);p[b] = 1;f.keys = [];f.values = [];f.label = e.label || "";Z >= e.limit && (d = Math.max(Math.round(Z / e.limit), 1), n = d * e.limit);for (i = u; i <= z; i += d) f.keys.push(i), f.values.push((h || "") + (10 > i ? "0" : "") + i + '<span class="dwtlbl">' + (e.label || "") + "</span>");
            }
        }function j(b) {
            var c = [],
                d,
                e = f(b);a(y).each(function (a, b) {
                p[b] && (d = Math.max(Math.round(Z / O[b].limit), 1), c.push(Math.round(e[b] / d) * d));
            });return c;
        }function o(a) {
            ca ? (F = K - new Date(), 0 > F ? (F *= -1, w = !0) : w = !1, r = 0, P = !0) : (K !== b ? (P = !1, F = 1E3 * K, w = "down" !== l.countDirection) : (F = 0, P = w = "down" !== l.countDirection), a && (r = 0));
        }var i,
            k,
            n,
            q,
            A,
            D,
            F,
            r,
            w,
            M,
            t,
            m,
            H,
            N,
            v,
            s,
            u,
            z,
            X,
            C,
            T = a.extend({}, d.settings),
            l = a.extend(d.settings, c, T),
            J = l.useShortLabels ? l.labelsShort : l.labels,
            y = "years,months,days,hours,minutes,seconds,fract".split(","),
            O = { years: { index: 6, until: 10, limit: 31536E6, label: J[0], wheel: {} }, months: { index: 5, until: 11, limit: 2592E6, label: J[1], wheel: {} }, days: { index: 4, until: 31, limit: 864E5, label: J[2], wheel: {} }, hours: { index: 3, until: 23, limit: 36E5, label: J[3], wheel: {} }, minutes: { index: 2, until: 59, limit: 6E4, label: J[4], wheel: {} }, seconds: { index: 1, until: 59, limit: 1E3, label: J[5], wheel: {} }, fract: { index: 0, until: 99,
                limit: 10, label: J[6], prefix: ".", wheel: {} } },
            p = {},
            E = [],
            R = 0,
            S = !1,
            G = !0,
            P = !1,
            Z = Math.max(10, 1E3 * l.step),
            I = l.maxWheel,
            Q = l.locked || ca,
            V = (a.isArray(l.controls) ? l.controls : []).join(","),
            K = l.targetTime,
            ca = K && K.getTime !== b,
            U = "jqm" == l.theme,
            ha = [[]];d.start = function () {
            G && d.reset();if (!S && (o(), P || !(r >= F))) S = !0, G = !1, A = new Date(), q = r, l.readonly = !0, d.setValue(j(w ? r : F - r), !0, 0.1), k = setInterval(function () {
                r = new Date() - A + q;d.setValue(j(w ? r : F - r), !0, 0.1);!P && r + n >= F && (clearInterval(k), setTimeout(function () {
                    d.stop();r = F;d.setValue(j(w ? r : 0), !0, 0.1);d.trigger("onFinish", [F]);G = !0;
                }, F - r));
            }, n), a(".dwwr", M).addClass("dw-running dw-locked"), a(".dw-timer-st", M).removeClass(l.btnStartClass || "").addClass(l.btnStopClass || "").attr("title", l.stopText).find(".dwb-txt").text(l.stopText), d.trigger("onStart", []);
        };d.stop = function () {
            S && (S = !1, clearInterval(k), r = new Date() - A + q, a(".dwwr", M).removeClass("dw-running"), a(".dw-timer-st", M).removeClass(l.btnStopClass || "").addClass(l.btnStartClass || "").attr("title", l.startText).find(".dwb-txt").text(l.startText), d.trigger("onStop", [r]));
        };d.reset = function () {
            d.stop();r = 0;E = [];R = 0;d.setValue(j(w ? 0 : F), !0, 0.1);d.settings.readonly = Q;G = !0;Q || a(".dwwr", M).removeClass("dw-locked");d.trigger("onReset", []);
        };d.lap = function () {
            S && (D = new Date() - A + q, H = D - R, R = D, E.push(D), d.trigger("lap", [D, H, E]));
        };d.getTime = function () {
            return F;
        };d.setTime = function (a) {
            K = a / 1E3;F = a;
        };d.getElapsedTime = d.getEllapsedTime = function () {
            return S ? new Date() - A + q : 0;
        };d.setElapsedTime = d.setEllapsedTime = function (a, b) {
            G || (q = r = a, A = new Date(), d.setValue(j(w ? r : F - r), !0, 0.1, !1, b));
        };o(!0);!I && !F && (I = "minutes");I || a(y).each(function (a, b) {
            if (!I && F >= O[b].limit) return I = b, !1;
        });s = f(F);a(y).each(function (a, b) {
            h(b, s);
        });n = Math.max(87, n);l.autostart && setTimeout(function () {
            d.start();
        }, 0);return { wheels: ha, headerText: !1, readonly: Q, parseValue: function () {
                return j(w ? 0 : F);
            }, formatValue: function (b) {
                var c = "",
                    d = 0;a(y).each(function (a, e) {
                    "fract" != e && p[e] && (c += b[d] + ("seconds" == e && p.fract ? "." + b[d + 1] : "") + " " + J[a] + " ", d++);
                });return c;
            }, validate: function (c, g, i) {
                var j,
                    q,
                    k = 0,
                    n = d._tempWheelArray,
                    c = !1;G && g !== b && (K = 0, a(y).each(function (a, b) {
                    p[b] && (K += O[b].limit * n[k], k++);
                }), K /= 1E3, o(!0));if (G && 0 === g) c = !0, j = f(F);else if (!N && (n[0] < t || n[0] > m)) j = f(w ? r : F - r), c = !0;if (c && (h(I, j), X !== u || C !== z)) q = n[0], v = setTimeout(function () {
                    X = u;C = z;N = true;n[0] = q;d.changeWheel([0], b, g !== b);
                }, 1E3 * i);N = !1;
            }, onBeforeShow: function () {
                l.mode = "scroller";l.showLabel = !0;
            }, onMarkupReady: function (b) {
                var c = 0;M = b;b.addClass("dw-timer");S ? a(".dwwr", b).addClass("dw-running") : a(".dwwr", b).removeClass("dw-running");Q && a(".dwwr", M).addClass("dw-locked");
                a(".dwbc", b).remove();a(".dwwl0", b).on("mousedown touchstart", function () {
                    clearTimeout(v);
                });a(y).each(function (d, e) {
                    p[e] && (a(".dwwl" + c, b).addClass("dwwl-" + e), c++);
                });var f = V.match(/start/),
                    h = V.match(/reset/) && !ca,
                    g = V.match(/lap/) && !ca,
                    i = "inline" !== l.display;if (f || h || g || i) a(".dwwr", b).addClass("dw-timer-btns").append('<div class="dwbc">' + (f ? '<span class="dwbw dwbgr dwbgrf' + (!h && !g ? " dwbgrl" : "") + '"><a href="#" role="button" class="dwb-e dwb dw-timer-st ' + (S ? l.btnStopClass || "" : l.btnStartClass || "") + '"' + (U ? ' data-role="button" data-icon="arrow-r" data-iconpos="notext"' : "") + ' title="' + (S ? l.stopText : l.startText) + '"><span class="dwb-i"><span class="dwb-txt">' + (S ? l.stopText : l.startText) + "</span></span></a></span>" : "") + (h ? '<span class="dwbw dwbgr' + (!f ? " dwbgrf" : "") + (!g ? " dwbgrl" : "") + '"><a href="#" role="button" class="dwb-e dwb dw-timer-r ' + (l.btnResetClass || "") + '"' + (U ? ' data-role="button" data-icon="delete" data-iconpos="notext"' : "") + ' title="' + l.resetText + '"><span class="dwb-i"><span class="dwb-txt">' + l.resetText + "</span></span></a></span>" : "") + (g ? '<span class="dwbw dwbgr dwbgrl' + (!f && !h ? " dwbgrf" : "") + '"><a href="#" role="button" class="dwb-e dwb dw-timer-l ' + (l.btnLapClass || "") + '"' + (U ? ' data-role="button" data-icon="refresh" data-iconpos="notext"' : "") + ' title="' + l.lapText + '"><span class="dwb-i"><span class="dwb-txt">' + l.lapText + "</span></span></a></span>" : "") + (i ? '<span class="dwbw dwtcl"><a href="#" role="button" class="dwb-e dwb dw-timer-cl ' + (l.btnHideClass || "") + ' "' + (U ? ' data-role="button" data-mini="true"' : "") + ">" + l.hideText + "</a></span>" : "") + "</div>"), d.tap(a(".dw-timer-st", b), function () {
                    S ? d.stop() : d.start();
                }, !0), d.tap(a(".dw-timer-r", b), function () {
                    d.reset();
                }, !0), d.tap(a(".dw-timer-l", b), function () {
                    d.lap();
                }, !0), d.tap(a(".dw-timer-cl", b), function () {
                    d.hide();
                }, !0);
            }, onPosition: function (b) {
                a(".dwwr", b).css("min-width", 0).css("min-width", a(".dwbc", b).outerWidth());
            }, onDestroy: function () {
                clearInterval(k);
            } };
    };
})(jQuery);(function (a, b) {
    function d(b) {
        var c = [Math.round(b.r).toString(16), Math.round(b.g).toString(16), Math.round(b.b).toString(16)];a.each(c, function (a, b) {
            1 == b.length && (c[a] = "0" + b);
        });return "#" + c.join("");
    }function c(a) {
        a = parseInt(-1 < a.indexOf("#") ? a.substring(1) : a, 16);return { r: a >> 16, g: (a & 65280) >> 8, b: a & 255 };
    }function e(a) {
        var b, c, d;b = a.h;var e = 255 * a.s / 100,
            a = 255 * a.v / 100;if (0 === e) b = c = d = a;else {
            var e = (255 - e) * a / 255,
                f = (a - e) * (b % 60) / 60;360 == b && (b = 0);60 > b ? (b = a, d = e, c = e + f) : 120 > b ? (c = a, d = e, b = a - f) : 180 > b ? (c = a, b = e, d = e + f) : 240 > b ? (d = a, b = e, c = a - f) : 300 > b ? (d = a, c = e, b = e + f) : 360 > b ? (b = a, c = e, d = a - f) : b = c = d = 0;
        }return { r: b, g: c, b: d };
    }function g(a) {
        var b = 0,
            c;c = Math.min(a.r, a.g, a.b);var d = Math.max(a.r, a.g, a.b),
            b = d - c,
            b = (c = d ? 255 * b / d : 0) ? a.r == d ? (a.g - a.b) / b : a.g == d ? 2 + (a.b - a.r) / b : 4 + (a.r - a.g) / b : -1,
            b = 60 * b;0 > b && (b += 360);return { h: b, s: c * (100 / 255), v: d * (100 / 255) };
    }function f(a) {
        return d(e(a));
    }function h(a) {
        var b = a.h,
            c = a.l,
            a = a.s / 100,
            a = a * (50 >= c ? c : 100 - c),
            c = c + a;return { h: b, s: 100 * (c ? 2 * a / c : 0), v: c };
    }function j(a) {
        return g(c(a));
    }var o = a.mobiscroll,
        i = o.util.prefix,
        k = o.presets.scroller,
        n = { preview: !0, previewText: !0, label: "Color", refineLabel: "Refine", step: 10, nr: 10, format: "hex", hueText: "Hue", saturationText: "Saturation", valueText: "Value" };o.presetShort("colorpicker");o.presetShort("color");k.color = k.colorpicker = function (k) {
        function o(a) {
            return isNaN(+a) ? 0 : +a;
        }function D(a) {
            return a.r ? d(a) : a.h ? f(a) : a;
        }function F(a) {
            a = D(a);return "rgb" === E ? (a = c(a), Math.round(a.r) + "," + Math.round(a.g) + "," + Math.round(a.b)) : "hsv" === E ? (a = j(a), Math.round(a.h) + "," + Math.round(a.s) + "," + Math.round(a.v)) : a;
        }function r(a) {
            return y ? "hsv" == E ? a.join(",") : "rgb" == E ? (a = e({ h: a[0], s: a[1], v: a[2] }), Math.round(a.r) + "," + Math.round(a.g) + "," + Math.round(a.b)) : f({ h: a[0], s: a[1], v: a[2] }) : p ? a[1] : a[0];
        }function w(a, b, c) {
            a[0].style.backgroundImage = i + ("-webkit-" == i ? "gradient(linear,left top,left bottom,from(" + b + "),to(" + c + "))" : "linear-gradient(" + b + "," + c + ")");
        }function M(b, c) {
            var d = k._tempWheelArray;1 !== c && 2 !== c && w(a(".dwwl1 .dw-ul", b), f({ h: d[0], s: 0, v: 100 }), f({ h: d[0], s: 100, v: 100 }));2 !== c && w(a(".dwwl2 .dw-ul", b), f({ h: d[0], s: d[1],
                v: 0 }), f({ h: d[0], s: d[1], v: 100 }));if (R) {
                var h = e({ h: d[0], s: d[1], v: d[2] }),
                    h = 0.299 * h.r + 0.587 * h.g + 0.114 * h.b;a(".dw-color-preview", b).attr("style", "background:" + f({ h: d[0], s: d[1], v: d[2] }) + ";color:" + (130 < h ? "#000" : "#fff")).text(S ? r(d) : "");
            }
        }function t() {
            var a = 0,
                b = { keys: [], values: [], labels: [], label: G },
                c = { keys: [], values: [], labels: [], label: P },
                d = { keys: [], values: [], labels: [], label: Z };for (a; 360 > a; a += 3) b.keys.push(a), b.values.push('<div class="dw-color" style="background:' + f({ h: a, s: 100, v: 100 }) + '"><div class="dw-color-hl"></div></div>'), b.labels.push(a);for (a = 0; 101 > a; a += 1) c.keys.push(a), d.keys.push(a), c.values.push('<div class="dw-color"><div class="dw-color-hl"></div></div>'), d.values.push('<div class="dw-color"><div class="dw-color-hl"></div></div>'), c.labels.push(a), d.labels.push(a);return [[b, c, d]];
        }function m(b, c, d) {
            var e,
                f,
                h = { keys: [], values: [], label: c || J.label };a.each(b, function (a, b) {
                e = D(b);f = F(b);h.keys.push(f);h.values.push('<div class="dw-cbc"><div class="dw-cb' + ("circle" === J.style ? " dw-cb-circle" : "") + '" style="background:' + e + '"></div></div>' + f);d && (z[f] = d);
            });return h;
        }function H(a, b, c) {
            var d,
                e = a.h,
                g = (2 - a.s / 100) * a.v,
                a = a.s * a.v,
                a = (d = 100 >= g ? g : 200 - g) ? a / d : 0;d = g / 2 - c / 2 * b;for (g = []; 0 > d + b;) d += b;for (c = d + (c + 1) * b; 100 <= c - b;) c -= b;for (; d <= c; d += b) g.push(f(h({ h: e, s: a, l: Math.max(0, Math.min(d, 100)) })));return g;
        }var N,
            v,
            s,
            u,
            z = {},
            X = {},
            C = {},
            T,
            l = a.extend({}, k.settings),
            J = a.extend(k.settings, n, l),
            y = !J.colors,
            l = a.isArray(J.colors) ? J.colors : [J.colors],
            O = J.defaultValue || l[0],
            p = J.refine && 1 < l.length,
            E = J.format,
            R = y && J.preview,
            S = J.previewText,
            G = J.hueText,
            P = J.saturationText,
            Z = J.valueText;!y && 1 == l.length && (l = H(j(D(l[0])), J.step, J.nr));y ? (u = t(), C = { width: 70, height: 15, rows: 13, speedUnit: 0.006, timeUnit: 0.05, showLabel: !0 }) : p ? (a.each(l, function (a, b) {
            v = D(b);s = F(b);X[s] = m(H(j(v), J.step, J.nr), J.refineLabel, s);a || (N = X[s]);
        }), u = [[m(l), N]]) : (C = { width: 180 }, u = [[m(l)]]);return a.extend({ wheels: u, parseValue: function (a) {
                if (y) {
                    if (a = a || O) {
                        if (E == "hsv") {
                            a = a.split(",");a = { h: o(a[0]), s: o(a[1]), v: o(a[2]) };
                        } else if (E == "rgb") {
                            a = a.split(",");a = g({ r: o(a[0]), g: o(a[1]), b: o(a[2]) });
                        } else {
                            a = a.replace("#", "");a.length == 3 && (a = a[0] + a[0] + a[1] + a[1] + a[2] + a[2]);a = j(a);
                        }var b = Math.round(a.h);return [Math.floor(b / 3) * 3, Math.round(a.s), Math.round(a.v)];
                    }return [0, 100, 100];
                }if (p) {
                    if (a && z[a]) return [z[a], a];F(O);return [z[O], O];
                }return [a || F(O)];
            }, formatValue: r, onBeforeShow: function () {
                if (y) J.mode = "scroller";if (R) J.headerText = false;
            }, onMarkupReady: function (a) {
                a.addClass("dw-colorpicker");R && a.find(".dwc").before('<div class="dw-color-preview"></div>');if (y) {
                    a.addClass("dw-cp-hsv");M(a);
                }
            }, validate: function (a, c) {
                var d = k._tempWheelArray;if (y) setTimeout(function () {
                    M(a, c);
                }, 1);else if (p && !c && !T) {
                    T = true;u[0][1] = X[d[0]];c === 0 && (d[1] = d[0]);k.changeWheel([1], b, c !== b);
                }T = false;
            } }, C);
    };o.colorpicker = { hsv2hex: f, hsv2rgb: e, rgb2hsv: g, rgb2hex: d, hex2rgb: c, hex2hsv: j };
})(jQuery);(function (a, b) {
    var d = a.mobiscroll,
        c = d.presets.scroller,
        e = d.datetime,
        g = d.util.testTouch,
        f = { autoCorrect: !0, showSelector: !0, minRange: 1, fromText: "Start", toText: "End" };d.presetShort("rangepicker");d.presetShort("range");c.range = c.rangepicker = function (d) {
        function j(a, b) {
            a && (a.setFullYear(b.getFullYear()), a.setMonth(b.getMonth()), a.setDate(b.getDate()));
        }function o(b, c) {
            var d = !0;if (b && m && H && (H - m > l.maxRange - 1 && (d = !1, C ? m = new Date(H - l.maxRange + 1) : H = new Date(+m + l.maxRange - 1)), H - m < l.minRange - 1)) d = !1, C ? m = new Date(H - l.minRange + 1) : H = new Date(+m + l.minRange - 1);if (!m || !H) d = !1;if (c) {
                var f,
                    g,
                    h,
                    i,
                    j,
                    k = 0,
                    o = y || !C ? " dw-cal-day-hl dw-cal-sel-start" : " dw-cal-sel-start",
                    n = y || C ? " dw-cal-day-hl dw-cal-sel-end" : " dw-cal-sel-end";M = m ? e.formatDate(D, m, l) : "";t = H ? e.formatDate(D, H, l) : "";if (q && (a(".dw-drv0", q).html(M || "&nbsp;"), a(".dw-drv1", q).html(t || "&nbsp;"), f = m ? new Date(m) : null, h = H ? new Date(H) : null, !f && h && (f = new Date(h)), !h && f && (h = new Date(f)), j = C ? h : f, a(".dw-cal-table .dw-sel .dw-i", q).removeClass(O), a(".dw-cal-table .dw-cal-day-hl", q).removeClass(E), a(".dw-cal-table .dw-sel", q).removeClass("dw-sel dw-cal-sel-start dw-cal-sel-end").removeAttr("aria-selected"), f && h)) {
                    g = f.setHours(0, 0, 0, 0);for (i = h.setHours(0, 0, 0, 0); h >= f && 84 > k;) a('.dw-cal-day[data-full="' + j.getFullYear() + "-" + j.getMonth() + "-" + j.getDate() + '"]', q).addClass("dw-sel" + (j.getTime() === g ? o : "") + (j.getTime() === i ? n : "")).attr("aria-selected", "true").find(".dw-i ").addClass(O), j.setDate(j.getDate() + (C ? -1 : 1)), k++;
                }
            }return d;
        }function i(a) {
            a.addClass("dw-sel").attr("aria-checked", "true").find(".dw-dr").addClass(O);
        }function k() {
            u && (a(".dw-dr-c", q).removeClass("dw-sel").removeAttr("aria-checked").find(".dw-dr", q).removeClass(O), y ? (m && i(a(".dw-dr-c", q).eq(0)), H && i(a(".dw-dr-c", q).eq(1))) : i(a(".dw-dr-c", q).eq(C)));
        }var n,
            q,
            A,
            D,
            F,
            r,
            w,
            M,
            t,
            m,
            H,
            N,
            v,
            s,
            u,
            z = d._startDate,
            X = d._endDate,
            C = 0;F = new Date();var T = a.extend({}, d.settings),
            l = a.extend(d.settings, f, T),
            J = l.anchor,
            y = l.rangeTap,
            O = l.activeClass || "",
            p = "dwb-d " + (l.disabledClass || ""),
            E = "dw-cal-day-hl",
            R = null === l.defaultValue ? [] : l.defaultValue || [new Date(F.setHours(0, 0, 0, 0)), new Date(F.getFullYear(), F.getMonth(), F.getDate() + 6, 23, 59, 59, 999)];y && (l.tabs = !0);F = c.calbase.call(this, d);n = a.extend({}, F);D = d.format;N = "time" === l.controls.join("");u = 1 == l.controls.length && "calendar" == l.controls[0] ? l.showSelector : !0;l.startInput && (v = a(l.startInput).prop("readonly"), d.attachShow(a(l.startInput).prop("readonly", !0), function () {
            C = 0;l.anchor = J || a(l.startInput);
        }));l.endInput && (s = a(l.endInput).prop("readonly"), d.attachShow(a(l.endInput).prop("readonly", !0), function () {
            C = 1;l.anchor = J || a(l.endInput);
        }));d.setVal = function (a, c, f, g, i) {
            var j = a || [];if (j[0] === b || j[0] === null || j[0].getTime) {
                w = true;M = (m = j[0] || null) ? e.formatDate(D, m, l) : "";C || (a = n.parseValue(M, d));
            }if (j[1] === b || j[1] === null || j[1].getTime) {
                w = true;t = (H = j[1] || null) ? e.formatDate(D, H, l) : "";C && (a = n.parseValue(t, d));
            }if (!g) {
                d._startDate = z = m;d._endDate = X = H;
            }d._setVal(a, c, f, g, i);
        };d.getVal = function (a) {
            return a ? [m, H] : d._hasValue ? [z, X] : null;
        };d.getDayProps = function (a) {
            var b = m ? new Date(m.getFullYear(), m.getMonth(), m.getDate()) : null,
                c = H ? new Date(H.getFullYear(), H.getMonth(), H.getDate()) : null;return { selected: b && c && a >= b && a <= H, cssClass: ((y || !C) && b && b.getTime() === a.getTime() || (y || C) && c && c.getTime() === a.getTime() ? E : "") + (b && b.getTime() === a.getTime() ? " dw-cal-sel-start" : "") + (c && c.getTime() === a.getTime() ? " dw-cal-sel-end" : "") };
        };d.setActiveDate = function (b) {
            b = (C = b == "start" ? 0 : 1) ? H : m;if (d.isVisible()) {
                if (!y) {
                    k();a(".dw-cal-table .dw-cal-day-hl", q).removeClass(E);b && a('.dw-cal-day[data-full="' + b.getFullYear() + "-" + b.getMonth() + "-" + b.getDate() + '"]', q).addClass(E);
                }if (b) {
                    r = true;d.setDate(b, false, 0.2, true);
                }
            }
        };d.setValue = function (a, b, c, e, f) {
            d.setVal(a, b, f, e, c);
        };d.getValue = d.getVal;a.extend(F, { highlight: !1, divergentDayChange: !1, formatValue: function () {
                return M + (l.endInput ? "" : t ? " - " + t : "");
            }, parseValue: function (b) {
                b = b ? b.split(" - ") : [];l.defaultValue = R[1];X = l.endInput ? a(l.endInput).val() ? e.parseDate(D, a(l.endInput).val(), l) : R[1] : b[1] ? e.parseDate(D, b[1], l) : R[1];l.defaultValue = R[0];z = l.startInput ? a(l.startInput).val() ? e.parseDate(D, a(l.startInput).val(), l) : R[0] : b[0] ? e.parseDate(D, b[0], l) : R[0];l.defaultValue = R[C];M = z ? e.formatDate(D, z, l) : "";t = X ? e.formatDate(D, X, l) : "";d._startDate = z;d._endDate = X;return n.parseValue(C ? t : M, d);
            }, onValueFill: function (b, c) {
                d._startDate = z = m;d._endDate = X = H;if (l.startInput) {
                    a(l.startInput).val(M);c && a(l.startInput).change();
                }if (l.endInput) {
                    a(l.endInput).val(t);c && a(l.endInput).change();
                }
            }, onClose: function (a, b) {
                if (b === "set" && !o(true, true)) {
                    d.setActiveDate(C ? "start" : "end");return false;
                }
            }, onHide: function () {
                n.onHide.call(d);
                C = 0;q = null;l.anchor = J;
            }, onClear: function () {
                y && (C = 0);
            }, onBeforeShow: function () {
                l.headerText = false;m = z;H = X;if (l.counter) l.headerText = function () {
                    var a = m && H ? Math.max(1, Math.round((new Date(H).setHours(0, 0, 0, 0) - new Date(m).setHours(0, 0, 0, 0)) / 864E5) + 1) : 0;return a + " " + (a > 1 ? l.selectedPluralText || l.selectedText : l.selectedText);
                };w = true;
            }, onMarkupReady: function (b) {
                var c;q = b;if (m) {
                    r = true;d.setDate(m, false, 0, true);m = d.getDate(true);
                }if (H) {
                    r = true;d.setDate(H, false, 0, true);H = d.getDate(true);
                }if (C && H || !C && m) {
                    r = true;
                    d.setDate(C ? H : m, false, 0, true);
                }n.onMarkupReady.call(this, b);b.addClass("dw-range");if (u) {
                    c = '<div class="dw-dr-t" role="radiogroup"><div class="dw-dr-c dw-dr0"><div role="radio" class="dwb-e dwb-nhl dw-i dw-dr">' + l.fromText + '<div class="dw-drv dw-drv0">' + (M || "&nbsp;") + '</div></div></div><div class="dw-dr-c dw-dr1"><div role="radio" class="dwb-e dwb-nhl dw-i dw-dr">' + l.toText + '<div class="dw-drv dw-drv1">' + (t || "&nbsp;") + "</div></div></div></div>";a(".dw-cal-tabs", b).before(c);k();
                }a(".dw-dr-c", b).on("touchstart click", function (b) {
                    if (g(b, this)) {
                        d.showMonthView();d.setActiveDate(a(this).index() ? "end" : "start");
                    }
                });
            }, onDayChange: function (a) {
                a.active = C ? "end" : "start";A = true;
            }, onSetDate: function (c) {
                var e = c.date,
                    f = d.order;if (!r) {
                    f.h === b && e.setHours(C ? 23 : 0);f.i === b && e.setMinutes(C ? 59 : 0);f.s === b && e.setSeconds(C ? 59 : 0);e.setMilliseconds(C ? 999 : 0);if (!w || A) {
                        if (y && A) {
                            C == 1 && e < m && (C = 0);C ? e.setHours(23, 59, 59, 999) : e.setHours(0, 0, 0, 0);
                        }C ? H = new Date(e) : m = new Date(e);if (N) {
                            j(m, e);j(H, e);
                        }y && A && !C && (H = null);
                    }
                }d._isValid = o(w || A || l.autoCorrect, !r);c.active = C ? "end" : "start";if (!r && y) {
                    A && (C = C ? 0 : 1);k();
                }d.isVisible() && (d._isValid ? a(".dwb-s .dwb", d._markup).removeClass(p) : a(".dwb-s .dwb", d._markup).addClass(p));r = w = A = false;
            }, onTabChange: function () {
                o(true, true);
            }, onDestroy: function () {
                a(l.startInput).prop("readonly", v);a(l.endInput).prop("readonly", s);
            } });return F;
    };
})(jQuery);(function (a) {
    var b = a.mobiscroll,
        d = b.presets.scroller,
        c = { min: 0, max: 100, convert: !0, defUnit: "kph", units: ["kph", "mph", "mps", "fps", "knot"], unitNames: { kph: "km/h", mph: "mi/h", mps: "m/s", fps: "ft/s", knot: "knot" } },
        e = { kph: 1, mph: 1.60934, mps: 3.6, fps: 1.09728, knot: 1.852 };b.presetShort("speed");d.speed = function (b) {
        var f = a.extend({}, c, b.settings),
            h = f.convert,
            j = [],
            o = [],
            i,
            k;if (f.units) for (k = 0; k < f.units.length; k++) i = f.units[k], e[i] && (j.push(i), o.push(f.unitNames[i] || i));a.extend(b.settings, f, { sign: !1, units: j, unitNames: o,
            convert: function (a, b, c) {
                return h ? a * e[b] / e[c] : a;
            } });return d.measurement.call(this, b);
    };
})(jQuery);(function (a, b) {
    var d = a.mobiscroll,
        c = { inputClass: "", values: 5, order: "desc", style: "icon", invalid: [], layout: "fixed", icon: { filled: "star3", empty: "star3" } };d.presetShort("rating");d.presets.scroller.rating = function (e) {
        var g = a.extend({}, e.settings),
            f = a.extend(e.settings, c, g),
            h = a(this),
            g = this.id + "_dummy",
            j = a('label[for="' + this.id + '"]').attr("for", g),
            o = f.label !== b ? f.label : j.length ? j.text() : h.attr("name"),
            i = f.defaultValue,
            j = [[]],
            o = { keys: [], values: [], labels: [], label: o },
            k = {},
            n = [],
            q,
            A = !1,
            D,
            F,
            r,
            w,
            M,
            t,
            m = "grade" === f.style ? "circle" : "icon";h.is("select") && (f.values = {}, a("option", h).each(function () {
            f.values[a(this).val()] = a(this).text();
        }), a("#" + g).remove());if (a.isArray(f.values)) for (D = 0; D < f.values.length; D++) r = +f.values[D], isNaN(r) && (r = D + 1, A = !0), n.push({ order: r, key: f.values[D], value: f.values[D] });else if (a.isPlainObject(f.values)) for (F in D = 1, A = !0, f.values) r = +F, isNaN(r) && (r = D), n.push({ order: r, key: F, value: f.values[F] }), D++;else for (D = 1; D <= f.values; D++) n.push({ order: D, key: D, value: D });f.showText === b && A && (f.showText = !0);f.icon.empty === b && (f.icon.empty = f.icon.filled);n.sort(function (a, b) {
            return f.order == "desc" ? b.order - a.order : a.order - b.order;
        });t = "desc" == f.order ? n[0].order : n[n.length - 1].order;for (D = 0; D < n.length; D++) {
            M = n[D].order;r = n[D].key;w = n[D].value;A = "";for (F = 1; F < M + 1; F++) A += '<span class="mbsc-rating-' + m + ("circle" === m ? "" : " mbsc-ic mbsc-ic-" + f.icon.filled) + ' ">' + ("circle" == m ? F : " ") + "</span>";for (F = M + 1; F <= t; F++) A += '<span class="mbsc-rating-' + m + ("circle" === m ? " mbsc-rating-circle-unf" : " mbsc-ic mbsc-ic-" + (f.icon.empty ? f.icon.empty + " mbsc-rating-icon-unf" : "") + (f.icon.empty === f.icon.filled ? " mbsc-rating-icon-same" : "")) + '"></span>';i === b && (i = r);A += f.showText ? '<span class="mbsc-rating-txt">' + w + "</span>" : "";o.keys.push(r);o.values.push(A);o.labels.push(w);k[r] = w;
        }h.is("select") && (q = a('<input type="text" id="' + g + '" value="' + k[h.val()] + '" class="' + f.inputClass + '" placeholder="' + (f.placeholder || "") + '" readonly />').insertBefore(h));j[0].push(o);q && e.attachShow(q);h.is("select") && h.hide().closest(".ui-field-contain").trigger("create");
        e.getVal = function (a) {
            a = e._hasValue ? e[a ? "_tempWheelArray" : "_wheelArray"][0] : null;return d.util.isNumeric(a) ? +a : a;
        };return { anchor: q, wheels: j, headerText: !1, formatValue: function (a) {
                return k[a[0]];
            }, parseValue: function (a) {
                for (var b in k) if (q && b == a || !q && k[b] == a) return [b];return [i];
            }, validate: function (b) {
                a.each(f.invalid, function (c, d) {
                    a('.dw-li[data-val="' + d + '"]', b).removeClass("dw-v");
                });
            }, onMarkupReady: function (a) {
                a.addClass("dw-rating");
            }, onValueFill: function (a) {
                if (q) {
                    q.val(a);h.val(e._tempWheelArray[0]);
                }
            },
            onDestroy: function () {
                q && q.remove();h.show();
            } };
    };
})(jQuery);(function (a) {
    a.each(["date", "time", "datetime"], function (b, d) {
        a.mobiscroll.presetShort(d);
    });
})(jQuery);(function (a, b) {
    var d = a.mobiscroll,
        c = d.util,
        e = c.isString,
        g = { batch: 40, inputClass: "", invalid: [], rtl: !1, showInput: !0, groupLabel: "Groups", checkIcon: "checkmark", dataText: "text", dataValue: "value", dataGroup: "group", dataDisabled: "disabled" };d.presetShort("select");d.presets.scroller.select = function (d) {
        function h() {
            var c,
                d,
                e,
                f,
                g,
                h = 0,
                i = 0,
                j = {};aa = {};da = {};v = [];w = [];K ? a.each(E.data, function (a, h) {
                f = h[E.dataText];g = h[E.dataValue];d = h[E.dataGroup];e = { value: g, text: f, index: a };aa[g] = e;v.push(e);ca && (j[d] === b ? (c = { text: d,
                    value: i, options: [], index: i }, da[i] = c, j[d] = i, w.push(c), i++) : c = da[j[d]], ha && (e.index = c.options.length), e.group = j[d], c.options.push(e));h[E.dataDisabled] && ea.push(g);
            }) : ca ? a("optgroup", G).each(function (b) {
                da[b] = { text: this.label, value: b, options: [], index: b };w.push(da[b]);a("option", this).each(function (a) {
                    e = { value: this.value, text: this.text, index: ha ? a : h++, group: b };aa[this.value] = e;v.push(e);da[b].options.push(e);this.disabled && ea.push(this.value);
                });
            }) : a("option", G).each(function (a) {
                e = { value: this.value, text: this.text,
                    index: a };aa[this.value] = e;v.push(e);this.disabled && ea.push(this.value);
            });v.length && (F = v[0].value);ia && (v = [], h = 0, a.each(da, function (b, c) {
                g = "__group" + b;e = { text: c.text, value: g, group: b, index: h++ };aa[g] = e;v.push(e);ea.push(e.value);a.each(c.options, function (a, b) {
                    b.index = h++;v.push(b);
                });
            }));
        }function j(a, c, d, e, f, g, h) {
            var i = [],
                j = [],
                e = Math.max(0, (d[e] !== b ? d[e].index : 0) - R),
                k = Math.min(c.length - 1, e + 2 * R);if (l[f] !== e || J[f] !== k) {
                for (d = e; d <= k; d++) j.push(c[d].text), i.push(c[d].value);T[f] = !0;y[f] = e;O[f] = k;c = { multiple: g,
                    values: j, keys: i, label: h };S ? a[0][f] = c : a[f] = [c];
            } else T[f] = !1;
        }function o(a) {
            j(a, w, da, r, m, !1, E.groupLabel);
        }function i(a) {
            j(a, ha ? da[r].options : v, aa, u, s, P, I);
        }function k(c) {
            P && (c && e(c) && (c = c.split(",")), a.isArray(c) && (c = c[0]));u = c === b || null === c || "" === c || !aa[c] ? F : c;U && (X = r = aa[u] ? aa[u].group : null);
        }function n(a, b) {
            var c = a ? d._tempWheelArray : d._hasValue ? d._wheelArray : null;return c ? E.group && b ? c : c[s] : null;
        }function q() {
            var a, b;a = [];var c = 0;if (P) {
                b = [];for (c in ga) a.push(aa[c] ? aa[c].text : ""), b.push(c);a = a.join(", ");
            } else b = u, a = aa[u] ? aa[u].text : "";d._tempValue = b;N.val(a);G.val(b);
        }function A(a) {
            var b = a.attr("data-val"),
                c = a.hasClass("dw-msel");if (P && a.closest(".dwwl").hasClass("dwwms")) return a.hasClass("dw-v") && (c ? (a.removeClass(Q).removeAttr("aria-selected"), delete ga[b]) : (a.addClass(Q).attr("aria-selected", "true"), ga[b] = b)), !1;a.hasClass("dw-w-gr") && (t = a.attr("data-val"));
        }var D,
            F,
            r,
            w,
            M,
            t,
            m,
            H,
            N,
            v,
            s,
            u,
            z,
            X,
            C,
            T = {},
            l = {},
            J = {},
            y = {},
            O = {},
            p = a.extend({}, d.settings),
            E = a.extend(d.settings, g, p),
            R = E.batch,
            p = E.layout || (/top|bottom/.test(E.display) ? "liquid" : ""),
            S = "liquid" == p,
            G = a(this),
            P = E.multiple || G.prop("multiple"),
            Z = this.id + "_dummy";H = a('label[for="' + this.id + '"]').attr("for", Z);var I = E.label !== b ? E.label : H.length ? H.text() : G.attr("name"),
            Q = "dw-msel mbsc-ic mbsc-ic-" + E.checkIcon,
            V = E.readonly,
            K = !!E.data,
            ca = K ? !!E.group : a("optgroup", G).length;H = E.group;var U = ca && H && !1 !== H.groupWheel,
            ha = ca && H && U && !0 === H.clustered,
            ia = ca && (!H || !1 !== H.header && !ha),
            B = G.val() || [],
            ea = [],
            ga = {},
            aa = {},
            da = {};E.invalid.length || (E.invalid = ea);U ? (m = 0, s = 1) : (m = -1, s = 0);if (P) {
            G.prop("multiple", !0);B && e(B) && (B = B.split(","));for (H = 0; H < B.length; H++) ga[B[H]] = B[H];
        }h();k(G.val());a("#" + Z).remove();G.next().is("input.mbsc-control") ? N = G.off(".mbsc-form").next().removeAttr("tabindex") : (N = a('<input type="text" id="' + Z + '" class="mbsc-control mbsc-control-ev ' + E.inputClass + '" readonly />'), E.showInput && N.insertBefore(G));d.attachShow(N.attr("placeholder", E.placeholder || ""));G.addClass("dw-hsel").attr("tabindex", -1).closest(".ui-field-contain").trigger("create");q();d.setVal = function (a, b, g, h, i) {
            if (P) {
                a && e(a) && (a = a.split(","));ga = c.arrayToObject(a);a = a ? a[0] : null;
            }d._setVal(a, b, g, h, i);
        };d.getVal = function (a, b) {
            return P ? c.objectToArray(ga) : n(a, b);
        };d.refresh = function () {
            h();l = {};J = {};var a = E,
                b = [[]];U && o(b);i(b);a.wheels = b;l[m] = y[m];J[m] = O[m];l[s] = y[s];J[s] = O[s];D = true;k(u);d._tempWheelArray = U ? [r, u] : [u];d._isVisible && d.changeWheel(U ? [m, s] : [s]);
        };d.getValues = d.getVal;d.getValue = n;return { width: 50, layout: p, headerText: !1, anchor: N, confirmOnTap: U ? [!1, !0] : !0, formatValue: function (a) {
                var b,
                    c = [];if (P) {
                    for (b in ga) c.push(aa[b] ? aa[b].text : "");return c.join(", ");
                }a = a[s];return aa[a] ? aa[a].text : "";
            }, parseValue: function (a) {
                k(a === b ? G.val() : a);return U ? [r, u] : [u];
            }, onValueTap: A, onValueFill: q, onBeforeShow: function () {
                if (P && E.counter) E.headerText = function () {
                    var b = 0;a.each(ga, function () {
                        b++;
                    });return b + " " + (b > 1 ? E.selectedPluralText || E.selectedText : E.selectedText);
                };k(G.val());if (U) d._tempWheelArray = [r, u];d.refresh();
            }, onMarkupReady: function (b) {
                b.addClass("dw-select");a(".dwwl" + m, b).on("mousedown touchstart", function () {
                    clearTimeout(C);
                });
                a(".dwwl" + s, b).on("mousedown touchstart", function () {
                    M || clearTimeout(C);
                });ia && a(".dwwl" + s, b).addClass("dw-select-gr");if (P) {
                    b.addClass("dwms");a(".dwwl", b).on("keydown", function (b) {
                        if (b.keyCode == 32) {
                            b.preventDefault();b.stopPropagation();A(a(".dw-sel", this));
                        }
                    }).eq(s).attr("aria-multiselectable", "true");z = a.extend({}, ga);
                }
            }, validate: function (c, e, g, h) {
                var j,
                    k = [];j = d.getArrayVal(true);var n = j[m],
                    q = j[s],
                    p = a(".dw-ul", c).eq(m),
                    A = a(".dw-ul", c).eq(s);l[m] > 1 && a(".dw-li", p).slice(0, 2).removeClass("dw-v").addClass("dw-fv");
                J[m] < w.length - 2 && a(".dw-li", p).slice(-2).removeClass("dw-v").addClass("dw-fv");l[s] > 1 && a(".dw-li", A).slice(0, 2).removeClass("dw-v").addClass("dw-fv");J[s] < (ha ? da[n].options : v).length - 2 && a(".dw-li", A).slice(-2).removeClass("dw-v").addClass("dw-fv");if (!D) {
                    u = q;if (U) {
                        r = aa[u].group;if (e === b || e === m) {
                            r = +j[m];M = false;if (r !== X) {
                                u = da[r].options[0].value;l[s] = null;J[s] = null;M = true;E.readonly = [false, true];
                            } else E.readonly = V;
                        }
                    }if (ca && (/__group/.test(u) || t)) {
                        q = u = da[aa[t || u].group].options[0].value;t = false;
                    }d._tempWheelArray = U ? [n, q] : [q];if (U) {
                        o(E.wheels);T[m] && k.push(m);
                    }i(E.wheels);T[s] && k.push(s);clearTimeout(C);C = setTimeout(function () {
                        if (k.length) {
                            D = true;M = false;X = r;l[m] = y[m];J[m] = O[m];l[s] = y[s];J[s] = O[s];d._tempWheelArray = U ? [n, u] : [u];d.changeWheel(k, 0, e !== b);
                        }if (U) {
                            e === s && d.scroll(p, m, d.getValidCell(r, p, h, false, true).v, 0.1);d._tempWheelArray[m] = r;
                        }E.readonly = V;
                    }, e === b ? 100 : g * 1E3);if (k.length) return M ? false : true;
                }if (e === b && P) {
                    j = ga;g = 0;a(".dwwl" + s + " .dw-li", c).removeClass(Q).removeAttr("aria-selected");for (g in j) a(".dwwl" + s + ' .dw-li[data-val="' + j[g] + '"]', c).addClass(Q).attr("aria-selected", "true");
                }ia && a('.dw-li[data-val^="__group"]', c).addClass("dw-w-gr");a.each(E.invalid, function (b, c) {
                    a('.dw-li[data-val="' + c + '"]', A).removeClass("dw-v dw-fv");
                });D = false;
            }, onValidated: function () {
                u = d._tempWheelArray[s];
            }, onClear: function (b) {
                ga = {};N.val("");a(".dwwl" + s + " .dw-li", b).removeClass(Q).removeAttr("aria-selected");
            }, onCancel: function () {
                !d.live && P && (ga = a.extend({}, z));
            }, onDestroy: function () {
                N.hasClass("mbsc-control") || N.remove();
                G.removeClass("dw-hsel").removeAttr("tabindex");
            } };
    };
})(jQuery);(function (a) {
    var a = a.mobiscroll,
        b = a.presets.scroller;b.treelist = b.list;a.presetShort("list");a.presetShort("treelist");
})(jQuery);(function (a) {
    var b = a.mobiscroll,
        d = b.presets.scroller;b.presetShort("image");d.image = function (b) {
        b.settings.enhance && (b._processMarkup = function (b) {
            var c = b.attr("data-icon");b.children().each(function (b, c) {
                c = a(c);c.is("img") ? a('<div class="mbsc-img-c"></div>').insertAfter(c).append(c.addClass("mbsc-img")) : c.is("p") && c.addClass("mbsc-img-txt");
            });c && b.prepend('<div class="mbsc-ic mbsc-ic-' + c + '"></div');b.html('<div class="mbsc-img-w">' + b.html() + "</div>");return b.html();
        });return d.list.call(this, b);
    };
})(jQuery);(function (a) {
    var b = a.mobiscroll,
        d = b.presets.scroller,
        c = { min: 0, max: 100, convert: !0, defUnit: "km", units: "m,km,in,ft,yd,mi".split(",") },
        e = { mm: 0.001, cm: 0.01, dm: 0.1, m: 1, dam: 10, hm: 100, km: 1E3, "in": 0.0254, ft: 0.3048, yd: 0.9144, ch: 20.1168, fur: 201.168, mi: 1609.344, lea: 4828.032 };b.presetShort("distance");d.distance = function (b) {
        var f = a.extend({}, c, b.settings),
            h = f.convert,
            j = [],
            o,
            i;if (f.units) for (i = 0; i < f.units.length; i++) o = f.units[i], e[o] && j.push(o);a.extend(b.settings, f, { sign: !1, units: j, unitNames: null, convert: function (a, b, c) {
                return h ? a * e[b] / e[c] : a;
            } });return d.measurement.call(this, b);
    };
})(jQuery);(function (a) {
    function b(b, c) {
        var f = j(c, "X"),
            g = j(c, "Y"),
            h = b.offset(),
            A = f - h.left,
            D = g - h.top,
            A = Math.max(A, b[0].offsetWidth - A),
            D = Math.max(D, b[0].offsetHeight - D),
            D = 2 * Math.sqrt(Math.pow(A, 2) + Math.pow(D, 2));d(e);e = a('<span class="mbsc-ripple"></span>').css({ width: D, height: D, top: g - h.top - D / 2, left: f - h.left - D / 2 }).appendTo(b);setTimeout(function () {
            e.addClass("mbsc-ripple-scaled mbsc-ripple-visible");
        }, 10);
    }function d(a) {
        a && (a.removeClass("mbsc-ripple-visible"), setTimeout(function () {
            a.remove();
        }, 2E3));
    }var c,
        e,
        g = a.mobiscroll,
        f = g.util,
        h = f.testTouch,
        j = f.getCoord;g.themes.material = { addRipple: b, removeRipple: function () {
            d(e);
        }, initRipple: function (f, g, k, n) {
            var q, A;f.on("touchstart mousedown", g, function (d) {
                h(d, this) && (q = j(d, "X", !0), A = j(d, "Y", !0), c = a(this), !c.hasClass(k) && !c.hasClass(n) ? b(c, d) : c = null);
            }).on("touchmove mousemove", g, function (a) {
                if (c && 20 < Math.abs(j(a, "X", !0) - q) || 20 < Math.abs(j(a, "Y", !0) - A)) d(e), c = null;
            }).on("touchend touchcancel mouseleave mouseup", g, function () {
                c && (setTimeout(function () {
                    d(e);
                }, 100), c = null);
            });
        } };
})(jQuery);var ko = ko || { bindingHandlers: {}, utils: { domNodeDisposal: {} } },
    mobiscroll = mobiscroll || {};mobiscroll.ko = {};
(function (a) {
    function b(b, c) {
        mobiscroll.ko.preventUpdate[b.id] = !0;c()(a(b).mobiscroll("getVal"));delete mobiscroll.ko.preventUpdate[b.id];
    }mobiscroll.ko = { preventUpdate: {}, getShortHandEventsObject: function (a) {
            return { onBeforeShow: a["mobiscroll.onBeforeShow"], onCancel: a["mobiscroll.onCancel"], onChange: a["mobiscroll.onChange"], onClose: a["mobiscroll.onClose"], onDestroy: a["mobiscroll.onDestroy"], onMarkupReady: a["mobiscroll.onMarkupReady"], onPosition: a["mobiscroll.onPosition"], onSelect: a["mobiscroll.onSelect"],
                onShow: a["mobiscroll.onShow"], onValueTap: a["mobiscroll.onValueTap"], validate: a["mobiscroll.validate"] };
        }, getInitObject: function (b, c) {
            var e = b()["mobiscroll.options"] || {},
                g = b()["mobiscroll.event"] || {};a.extend(e, c ? "string" === typeof c ? { preset: c } : c : {}, g, mobiscroll.ko.getShortHandEventsObject(b()));return e;
        }, initializeGenericComponent: function (d, c, e, g, f, h, j, o, i) {
            e = mobiscroll.ko.getInitObject(e, h);a.extend(e, j || {});a(d).mobiscroll(e);o || (o = "change");i || (i = b);ko.utils.registerEventHandler(d, o, function () {
                i(d, c);
            });ko.utils.domNodeDisposal.addDisposeCallback(d, function () {
                a(d).mobiscroll("destroy");
            });
        }, updateGenericComponent: function (b, c) {
            var e = ko.utils.unwrapObservable(c());mobiscroll.ko.preventUpdate[b.id] || a(b).mobiscroll("setVal", e, !0, !1);
        } };ko.bindingHandlers["mobiscroll.scroller"] = { init: function (a, b, e, g, f) {
            mobiscroll.ko.initializeGenericComponent(a, b, e, g, f);
        }, update: mobiscroll.ko.updateGenericComponent };
})(jQuery);(function (a) {
    a.mobiscroll.themes.frame["sense-dark"] = { baseTheme: "sense", minWidth: 64, height: 60, btnStartClass: "mbsc-ic mbsc-ic-play3", btnStopClass: "mbsc-ic mbsc-ic-pause2", btnResetClass: "mbsc-ic mbsc-ic-stop2", btnLapClass: "mbsc-ic mbsc-ic-loop2", btnCalPrevClass: "mbsc-ic mbsc-ic-arrow-left5", btnCalNextClass: "mbsc-ic mbsc-ic-arrow-right5", btnPlusClass: "mbsc-ic mbsc-ic-arrow-down5", btnMinusClass: "mbsc-ic mbsc-ic-arrow-up5", onMarkupReady: function (b, d) {
            var c = d.settings,
                e = c.height,
                c = c.rows;a(".dww", b).height(c * e - 40);a(".dw-ul", b).css("margin-top", c / 2 * e - e / 2 - 20 + "px");a(".dwwms .dw-ul", b).css("margin-top", "-20px");a(".dwwb", b).css({ height: e - 20 + "px", lineHeight: e - 20 + "px" });
        } };a.mobiscroll.themes.listview["sense-dark"] = { baseTheme: "sense" };a.mobiscroll.themes.menustrip["sense-dark"] = { baseTheme: "sense" };
})(jQuery);(function (a) {
    a.mobiscroll.themes.frame["mobiscroll-dark"] = { baseTheme: "mobiscroll", rows: 5, showLabel: !1, headerText: !1, btnWidth: !1, selectedLineHeight: !0, selectedLineBorder: 1, dateOrder: "MMddyy", weekDays: "min", checkIcon: "ion-ios7-checkmark-empty", btnPlusClass: "mbsc-ic mbsc-ic-arrow-down5", btnMinusClass: "mbsc-ic mbsc-ic-arrow-up5", btnCalPrevClass: "mbsc-ic mbsc-ic-arrow-left5", btnCalNextClass: "mbsc-ic mbsc-ic-arrow-right5" };a.mobiscroll.themes.listview["mobiscroll-dark"] = { baseTheme: "mobiscroll" };a.mobiscroll.themes.menustrip["mobiscroll-dark"] = { baseTheme: "mobiscroll" };a.mobiscroll.themes.form["mobiscroll-dark"] = { baseTheme: "mobiscroll" };
})(jQuery);(function (a) {
    a.mobiscroll.themes.frame["wp-light"] = { baseTheme: "wp", minWidth: 76, height: 76, accent: "none", dateOrder: "mmMMddDDyy", headerText: !1, showLabel: !1, deleteIcon: "backspace4", icon: { filled: "star3", empty: "star" }, btnWidth: !1, btnStartClass: "mbsc-ic mbsc-ic-play3", btnStopClass: "mbsc-ic mbsc-ic-pause2", btnResetClass: "mbsc-ic mbsc-ic-stop2", btnLapClass: "mbsc-ic mbsc-ic-loop2", btnHideClass: "mbsc-ic mbsc-ic-close", btnCalPrevClass: "mbsc-ic mbsc-ic-arrow-left2", btnCalNextClass: "mbsc-ic mbsc-ic-arrow-right2",
        btnPlusClass: "mbsc-ic mbsc-ic-plus", btnMinusClass: "mbsc-ic mbsc-ic-minus", onMarkupInserted: function (b, d) {
            var c,
                e,
                g,
                f = d.settings;if ("clickpick" != d.settings.mode) a(".dwwl", b).on("touchstart mousedown wheel mousewheel", function (d) {
                if (!("mousedown" === d.type && e || (a.isArray(f.readonly) ? f.readonly[a(".dwwl", b).index(this)] : f.readonly))) e = "touchstart" === d.type, c = !0, g = a(this).hasClass("wpa"), a(".dwwl", b).removeClass("wpa"), a(this).addClass("wpa");
            }).on("touchmove mousemove", function () {
                c = !1;
            }).on("touchend mouseup", function (b) {
                c && g && a(b.target).closest(".dw-li").hasClass("dw-sel") && a(this).removeClass("wpa");"mouseup" === b.type && (e = !1);c = !1;
            });
        }, onThemeLoad: function (a, d) {
            if (a && a.dateOrder && !d.dateOrder) {
                var c = a.dateOrder,
                    c = c.match(/mm/i) ? c.replace(/mmMM|mm|MM/, "mmMM") : c.replace(/mM|m|M/, "mM"),
                    c = c.match(/dd/i) ? c.replace(/ddDD|dd|DD/, "ddDD") : c.replace(/dD|d|D/, "dD");d.dateOrder = c;
            }
        }, onInit: function (a) {
            a = a.buttons;a.set.icon = "checkmark";a.cancel.icon = "close";a.clear.icon = "close";a.ok && (a.ok.icon = "checkmark");a.close && (a.close.icon = "close");a.now && (a.now.icon = "loop2");
        } };a.mobiscroll.themes.listview["wp-light"] = { baseTheme: "wp" };a.mobiscroll.themes.menustrip["wp-light"] = { baseTheme: "wp" };a.mobiscroll.themes.form["wp-light"] = { baseTheme: "wp" };
})(jQuery);(function (a) {
    a.mobiscroll.themes.frame["material-dark"] = { baseTheme: "material", showLabel: !1, headerText: !1, btnWidth: !1, selectedLineHeight: !0, selectedLineBorder: 1, dateOrder: "MMddyy", weekDays: "min", deleteIcon: "material-backspace", icon: { filled: "material-star", empty: "material-star-outline" }, checkIcon: "material-check", btnPlusClass: "mbsc-ic mbsc-ic-material-keyboard-arrow-down", btnMinusClass: "mbsc-ic mbsc-ic-material-keyboard-arrow-up", btnCalPrevClass: "mbsc-ic mbsc-ic-material-keyboard-arrow-left", btnCalNextClass: "mbsc-ic mbsc-ic-material-keyboard-arrow-right",
        onMarkupReady: function (b) {
            a.mobiscroll.themes.material.initRipple(b, ".dwb-e", "dwb-d", "dwb-nhl");
        }, onEventBubbleShow: function (b, d) {
            var c = d.hasClass("dw-cal-events-b"),
                e = a(".dw-cal-event-color", d).eq(c ? 0 : -1).css("background-color");a(".dw-cal-events-arr", d).css("border-color", c ? "transparent transparent " + e + " transparent" : e + "transparent transparent transparent");
        } };a.mobiscroll.themes.listview["material-dark"] = { baseTheme: "material", onItemActivate: function (b, d) {
            a.mobiscroll.themes.material.addRipple(b, d);
        }, onItemDeactivate: function () {
            a.mobiscroll.themes.material.removeRipple();
        }, onSlideStart: function (b) {
            a(".mbsc-ripple", b).remove();
        }, onSortStart: function (b) {
            a(".mbsc-ripple", b).remove();
        } };a.mobiscroll.themes.menustrip["material-dark"] = { baseTheme: "material", onInit: function () {
            a.mobiscroll.themes.material.initRipple(a(this), ".mbsc-ms-item", "mbsc-btn-d", "mbsc-btn-nhl");
        } };a.mobiscroll.themes.form["material-dark"] = { baseTheme: "material", onControlActivate: function (b, d) {
            ("button" == b[0].type || "submit" == b[0].type) && a.mobiscroll.themes.material.addRipple(b, d);
        }, onControlDeactivate: function () {
            a.mobiscroll.themes.material.removeRipple();
        } };
})(jQuery);(function (a) {
    a.mobiscroll.themes.frame["android-holo-light"] = { baseTheme: "android-holo", dateOrder: "Mddyy", rows: 5, minWidth: 76, height: 36, showLabel: !1, selectedLineHeight: !0, selectedLineBorder: 2, useShortLabels: !0, icon: { filled: "star3", empty: "star" }, btnPlusClass: "mbsc-ic mbsc-ic-arrow-down6", btnMinusClass: "mbsc-ic mbsc-ic-arrow-up6" };a.mobiscroll.themes.listview["android-holo-light"] = { baseTheme: "android-holo" };a.mobiscroll.themes.menustrip["android-holo-light"] = { baseTheme: "android-holo" };a.mobiscroll.themes.form["android-holo-light"] = { baseTheme: "android-holo" };
})(jQuery);var angular = angular || { module: function () {
        return this;
    }, directive: function () {
        return this;
    }, animation: function () {
        return this;
    } },
    mobiscroll = mobiscroll || {};mobiscroll.ng = {};
(function () {
    mobiscroll.ng = { getDDO: function (a, b, d, c, e, g) {
            var f = e || mobiscroll.ng.genericRead,
                h = c || mobiscroll.ng.genericRender,
                j = g || mobiscroll.ng.genericParser;return { restrict: "A", require: "?ngModel", link: function (c, e, g, n) {
                    var q = mobiscroll.ng.getInitOptions(c, g, b, n);mobiscroll.ng.addWatch(a, c, n, h, j, e, g, b);angular.extend(q, d || {});e.mobiscroll(q);e.on("change", function () {
                        c.$apply(function () {
                            f(a, b, e, c, g, n);
                        });
                    });g.mobiscrollInstance && (q = a(g.mobiscrollInstance).assign, q(c, e.mobiscroll("getInst")));
                } };
        }, preventRender: {},
        genericRead: function (a, b, d, c, e, g) {
            g ? g.$setViewValue(d.mobiscroll("getVal")) : a(e[b]).assign(c, d.mobiscroll("getVal"));
        }, genericRender: function (a, b) {
            var d = $.mobiscroll.instances[a.attr("id")];d && !angular.equals(d.getVal(), b) && a.mobiscroll("setVal", b, !0, 0, !1, !1);
        }, genericParser: function (a) {
            a = a.mobiscroll("getVal");return Array.isArray(a) && !a.length ? null : a;
        }, addWatch: function (a, b, d, c, e, g, f, h) {
            d && (d.$render = function () {
                c(g, d.$modelValue);
            }, d.$parsers.unshift(function (a) {
                return e(g, a);
            }), d.$formatters.push(function () {
                return g.mobiscroll("getInst")._value;
            }));
            var j;b.$watch(function () {
                var e = d ? d.$modelValue : a(f[h])(b);if (!angular.equals(j, e)) {
                    j = Array.isArray(e) ? e.slice(0) : e;d ? c(g, d.$modelValue) : c(g, a(f[h])(b));
                }
            });
        }, getInitOptions: function (a, b, d, c) {
            var e = a.$eval(b.mobiscrollOptions || "{}");c && angular.extend(e, a.$eval(b[d] || "{}"));return e;
        } };angular.module("mobiscroll-scroller", []).directive("mobiscrollScroller", ["$parse", function (a) {
        return mobiscroll.ng.getDDO(a, "mobiscrollScroller");
    }]);
})(jQuery);var Backbone = Backbone || { View: {}, Model: {} },
    mobiscroll = mobiscroll || {};mobiscroll.bb = {};
(function () {
    function a(a) {
        var c = this.prototype;_.isArray(a) ? _.forEach(a, function (a) {
            _.defaults(c, a);_.defaults(c.events, a.events);b(c, a, "initialize");b(c, a, "render");
        }, this) : (_.defaults(c, a), _.defaults(c.events, a.events), b(c, a, "initialize"), b(c, a, "render"));
    }function b(a, b, e) {
        if (!_.isUndefined(b[e])) {
            var g = a[e];a[e] = function () {
                var a = g.apply(this, arguments);b[e].apply(this, arguments);return a;
            };
        }
    }Backbone.View.addControl = a;mobiscroll.bb.getComponentMixin = function (a, b, e, g, f, h, j) {
        f = f || function (a, b, c) {
            c.model.set(a, c.$el.find(b).mobiscroll("getVal"));
        };h = h || function (a, b, c, d) {
            b = d.$el.find(b);b.mobiscroll(c);a = d.model.get(a);b.mobiscroll("setVal", a, !0, !1);
        };j = j || function () {};void 0 === g && (g = !0);var o = {};g && (o["change " + b] = a + "_changeTrigger");var i = !1,
            g = { events: o, initialize: function () {
                this.model.on("change:" + a, function () {
                    i || h(a, b, e, this);
                }, this);j(this);
            }, render: function () {
                h(a, b, e, this);
            } };g[a + "_changeTrigger"] = function () {
            i = !0;f(a, b, this);i = !1;
        };return g;
    };Backbone.Model.createHierarchyModel = function (b) {
        var c = Backbone.Model.extend({ deaults: { children: null },
            initialize: function (a) {
                this.set("children", new e(a.children));this.get("children").on("add mobiscrollListviewAddChild", function (a, b) {
                    this.trigger("mobiscrollListviewAddChild", a, b);
                }, this);this.get("children").on("remove mobiscrollListviewRemoveChild", function (a, b, c) {
                    this.trigger("mobiscrollListviewRemoveChild", a, b, c);
                }, this);this.get("children").on("mobiscrollListviewItemChange", function (a) {
                    this.trigger("mobiscrollListviewItemChange", a);
                }, this);
            } });a.call(c, b);var e = Backbone.Collection.extend({ model: c,
            initialize: function () {
                this.on("change", function (a) {
                    this.trigger("mobiscrollListviewItemChange", a);
                }, this);
            } });return { collectionModel: e, itemModel: c };
    };mobiscroll.scroller = function (a, b, e, g) {
        e = e || {};return mobiscroll.bb.getComponentMixin(a, b, e, g);
    };
})();mobiscroll = mobiscroll || {};Ember || (Function.prototype.property = function () {});var Ember = Ember || { Handlebars: { helper: function () {}, compile: function () {} }, View: { extend: function () {} }, CollectionView: { extend: function () {} } };
(function (a) {
    function b(a, b) {
        var d = b.get("value"),
            f = b.get("controller.model");mobiscroll.ember.preventUpdate[a.attr("id")] = true;f.set(d, a.mobiscroll("getVal"));delete mobiscroll.ember.preventUpdate[a.attr("id")];
    }function d(a, b, d) {
        b = b.get("controller.model." + d);mobiscroll.ember.preventUpdate[a.attr("id")] || a.mobiscroll("setVal", b, true, false);
    }mobiscroll.ember = { preventUpdate: {}, getEmberMobiscrollView: function (a, e, g, f, h, j, o) {
            var i = f || mobiscroll.ember.defaultMarkupTemplate,
                k = h === null ? null : h || "input",
                n = a instanceof Function ? a : mobiscroll.ember.generalInitFn,
                f = f && f("").layout ? { layout: function () {} } : { template: function () {} };return Ember.View.extend(f, { init: function () {
                    this._super();var a = i.call(this, this.get("value"), this.get("controller.model"));if (a.template) this.template = a.template;else if (a.layout) this.layout = a.layout;
                }, options: "", value: "", didInsertElement: function () {
                    function f() {
                        w(t, H, m);
                    }function h(a, b, c, d) {
                        r(t, H, m, a, b, c, d);
                    }function i(a, b, c, d) {
                        o.willChange(t, H, m, a, b, c, d);
                    }function F(a, b, c, d) {
                        o.didChange(t, H, m, a, b, c, d);
                    }var r = e || d,
                        w = g || b,
                        M = {};this.options && (M = new Function("controller", "return " + this.options)(this.get("controller")));var t;t = k === null ? this.$() : this.$().find(k);n(t, M, a, j, this);if (k !== null) t.on("change", f);var m = this.get("value");if (m) {
                        if (o) {
                            this.observerOptions = { willChange: i, didChange: F };this.get("controller.model." + m).addArrayObserver(this, this.observerOptions);
                        } else {
                            this.observerOptions = h;this.get("controller.model").addObserver(m, this, h);
                        }r(t, this, m);
                    }var H = this;
                }, willDestroyElement: function () {
                    var a = this.get("value");o ? this.get("controller.model." + a).removeArrayObserver(this, this.observerOptions) : this.get("controller.model." + a).removeObserver(this, a, this.observerOptions);
                } });
        }, defaultMarkupTemplate: function () {
            return { template: Ember.Handlebars.compile('<input type="text" />') };
        }, generalInitFn: function (b, d, g, f) {
            a.extend(d, { preset: g }, f);b.mobiscroll(d);
        }, arrayTransformer: function () {
            return DS.Transform.extend({ serialize: function (a) {
                    return Ember.typeOf(a) == "array" ? a : [];
                }, deserialize: function (a) {
                    switch (Em.typeOf(a)) {case "array":
                            return a;
                        case "string":
                            return a.split(",").map(function (a) {
                                return jQuery.trim(a);
                            });default:
                            return [];}
                } });
        } };mobiscroll.ember.scroller = function () {
        return mobiscroll.ember.getEmberMobiscrollView("scroller");
    };Ember.Handlebars.helper("mobiscroll-scroller", mobiscroll.ember.scroller());
})(jQuery);var kendo = kendo || { data: { binders: { source: { extend: function () {} } }, Binder: { extend: function () {} } } },
    mobiscroll = mobiscroll || {};mobiscroll.kendo = {};
(function (a) {
    mobiscroll.kendo.preventUpdate = {};mobiscroll.kendo.getMobiBinder = function (b, d, c, e, g, f) {
        function h(b, c, d) {
            mobiscroll.kendo.preventUpdate[a(d).attr("id")] = !0;b.set(a(d).mobiscroll("getVal"));delete mobiscroll.kendo.preventUpdate[a(d).attr("id")];
        }function j(b, c) {
            mobiscroll.kendo.preventUpdate[a(b).attr("id")] || a(b).mobiscroll("setVal", c, !0, !1);
        }function o(c, e, f) {
            kendo.data.Binder.fn.init.call(this, c, e, f);var f = mobiscroll.kendo.getMobiInitObject(c, e, b, d, g),
                h = this;a(h.element).on("change", function () {
                h.change(e, c);
            }).mobiscroll(f);
        }c || (c = j);e || (e = h);f || (f = o);return { init: f, refresh: function (a) {
                var d = this.bindings[b].get();c(this.element, d, a ? a.action : void 0);
            }, change: function (a, c) {
                e(this.bindings[b], a, c);
            } };
    };mobiscroll.kendo.getMobiInitObject = function (b, d, c, e, g) {
        var b = a(b).data("mobiscroll-options"),
            f = {};b && (f = new Function("$root", "return " + b)(d[c].parents[0]));return a.extend(!0, "string" === typeof e ? { preset: e } : e, f, g || {});
    };kendo.data.binders["mobiscroll-scroller"] = kendo.data.Binder.extend(mobiscroll.kendo.getMobiBinder("mobiscroll-scroller", "scroller"));
})(jQuery);(function (a) {
    var b = {};ko.utils.domNodeDisposal.cleanExternalData = function () {};ko.bindingHandlers["mobiscroll.listview"] = { makeTemplateValueAccessor: function (b) {
            return function () {
                function c(b) {
                    if ("LI" == b.nodeName) {
                        var c = a(b).addClass("mbsc-lv-item").parent("ul");c.prepend(c.children(".mbsc-lv-back"));a(b).closest(".mbsc-lv-cont").find(".mbsc-lv-root").mobiscroll("add", null, a(b), c.children("li").not(".mbsc-lv-back").index(a(b)), void 0, c);
                    }
                }function e(b) {
                    if ("LI" == b.nodeName) {
                        var c = a(b).addClass("mbsc-lv-item").parent("ul");
                        c.prepend(c.children(".mbsc-lv-back"));a(b).closest(".mbsc-lv-cont").find(".mbsc-lv-root").mobiscroll("remove", a(b));
                    } else a(b).remove();
                }var g = b(),
                    f = ko.utils.peekObservable(g);if (!f || "number" == typeof f.length) return { foreach: g, templateEngine: ko.nativeTemplateEngine.instance, afterAdd: c, beforeRemove: e };ko.utils.unwrapObservable(g);return { name: f.name ? f.name : void 0, foreach: f.name ? f.foreach : f.data, as: f.as, includeDestroyed: f.includeDestroyed, afterAdd: c, beforeRemove: e, afterRender: f.afterRender, beforeMove: f.beforeMove,
                    afterMove: f.afterMove, templateEngine: ko.nativeTemplateEngine.instance };
            };
        }, init: function (a, c) {
            var e = ko.bindingHandlers.template.init(a, ko.bindingHandlers["mobiscroll.listview"].makeTemplateValueAccessor(c));a.id || (a.id = +new Date());b[a.id] = !0;return e;
        }, update: function (d, c, e, g, f) {
            ko.utils.unwrapObservable(c());c = ko.bindingHandlers.template.update(d, ko.bindingHandlers["mobiscroll.listview"].makeTemplateValueAccessor(c), e, g, f);g = a(d).parent().parent("ul");if (b[d.id] && !(g.length && void 0 !== b[g[0].id])) e = ko.utils.extend(mobiscroll.ko.getInitObject(e), { onItemRemove: e()["mobiscroll.onItemRemove"], onItemAdd: e()["mobiscroll.onItemAdd"], onInit: e()["mobiscroll.onInit"] }), a(d).mobiscroll().listview(e);else if (g.length && void 0 !== b[g[0].id] && a(d).parents(".mbsc-lv-cont").length && a(d).parent().hasClass("mbsc-lv-item")) {
                var h = a(d);h.children("li").each(function (b) {
                    h.prepend(h.children(".mbsc-lv-back"));a(this).closest(".mbsc-lv-cont").find(".mbsc-lv-root").mobiscroll("add", null, a(this), b, void 0, h.parent());
                });
            }b[d.id] = !1;return c;
        } };
})(jQuery);(function () {
    ko.bindingHandlers["mobiscroll.form"] = { init: function (a, b, d) {
            b = mobiscroll.ko.getInitObject(d);$(a).mobiscroll().form(b);ko.utils.registerEventHandler(a, "mbscFormRefresh", function () {
                $(a).mobiscroll("refresh");
            });
        } };
})();(function () {
    ko.bindingHandlers["mobiscroll.numpad"] = { init: function (a, b, d, c, e) {
            mobiscroll.ko.initializeGenericComponent(a, b, d, c, e, { component: "Numpad" }, null);
        }, update: mobiscroll.ko.updateGenericComponent };
})();(function () {
    ko.bindingHandlers["mobiscroll.force"] = { init: function (a, b, d, c, e) {
            mobiscroll.ko.initializeGenericComponent(a, b, d, c, e, "force");
        }, update: mobiscroll.ko.updateGenericComponent };ko.bindingHandlers["mobiscroll.speed"] = { init: function (a, b, d, c, e) {
            mobiscroll.ko.initializeGenericComponent(a, b, d, c, e, "speed");
        }, update: mobiscroll.ko.updateGenericComponent };ko.bindingHandlers["mobiscroll.mass"] = { init: function (a, b, d, c, e) {
            mobiscroll.ko.initializeGenericComponent(a, b, d, c, e, "mass");
        }, update: mobiscroll.ko.updateGenericComponent };
    ko.bindingHandlers["mobiscroll.distance"] = { init: function (a, b, d, c, e) {
            mobiscroll.ko.initializeGenericComponent(a, b, d, c, e, "distance");
        }, update: mobiscroll.ko.updateGenericComponent };ko.bindingHandlers["mobiscroll.temperature"] = { init: function (a, b, d, c, e) {
            mobiscroll.ko.initializeGenericComponent(a, b, d, c, e, "temperature");
        }, update: mobiscroll.ko.updateGenericComponent };
})();(function (a) {
    function b(a) {
        return { onDayChange: a()["mobiscroll.onDayChange"], onEventSelect: a()["mobiscroll.onEventSelect"], onMonthChange: a()["mobiscroll.onMonthChange"] };
    }ko.bindingHandlers["mobiscroll.calendar.events"] = { init: function (d, c, e, g, f) {
            var h = b(e);a.extend(h, { events: [] });mobiscroll.ko.initializeGenericComponent(d, c, e, g, f, "calendar", h, "change", function () {});
        }, update: function (b, c) {
            var e = ko.utils.unwrapObservable(c());if (void 0 !== e) {
                var g = a(b),
                    f = g.mobiscroll("getInst");g.mobiscroll("setEvents", e);g.val(f._value);
            }
        } };ko.bindingHandlers["mobiscroll.calendar"] = { init: function (a, c, e, g, f) {
            var h = b(e);mobiscroll.ko.initializeGenericComponent(a, c, e, g, f, "calendar", h);
        }, update: mobiscroll.ko.updateGenericComponent };
})(jQuery);(function () {
    ko.bindingHandlers["mobiscroll.timespan"] = { init: function (a, b, d, c, e) {
            mobiscroll.ko.initializeGenericComponent(a, b, d, c, e, "timespan");
        }, update: mobiscroll.ko.updateGenericComponent };
})();(function () {
    ko.bindingHandlers["mobiscroll.number"] = { init: function (a, b, d, c, e) {
            mobiscroll.ko.initializeGenericComponent(a, b, d, c, e, "number");
        }, update: mobiscroll.ko.updateGenericComponent };
})();(function () {
    ko.bindingHandlers["mobiscroll.menustrip"] = { init: function (a, b, d, c, e) {
            mobiscroll.ko.initializeGenericComponent(a, b, d, c, e, { component: "MenuStrip" }, null);
        }, update: mobiscroll.ko.updateGenericComponent };
})();(function () {
    ko.bindingHandlers["mobiscroll.widget"] = { init: function (a, b, d, c, e) {
            mobiscroll.ko.initializeGenericComponent(a, b, d, c, e, { component: "Widget" });
        }, update: mobiscroll.ko.updateGenericComponent };
})();(function (a) {
    var b = {};ko.bindingHandlers["mobiscroll.timer"] = { init: function (d, c, e, g, f) {
            var h = { lap: e()["mobiscroll.lap"], onStart: e()["mobiscroll.onStart"], onStop: e()["mobiscroll.onStop"], onReset: e()["mobiscroll.onReset"], onFinish: e()["mobiscroll.onFinish"] };mobiscroll.ko.initializeGenericComponent(d, c, e, g, f, "timer", h, "change", function (c, d) {
                var e = a(c),
                    f = d();b[c.id] = !0;f(e.mobiscroll("getEllapsedTime"));
            });
        }, update: function (d, c) {
            var e = ko.utils.unwrapObservable(c());if (!b[d.id] && void 0 !== e) {
                var g = a(d);
                g.mobiscroll("setEllapsedTime", e);e = g.mobiscroll("getInst");g.val(e._value);
            }b[d.id] = !1;
        } };
})(jQuery);(function () {
    ko.bindingHandlers["mobiscroll.colorpicker"] = ko.bindingHandlers["mobiscroll.color"] = { init: function (a, b, d, c, e) {
            mobiscroll.ko.initializeGenericComponent(a, b, d, c, e, "colorpicker");
        }, update: mobiscroll.ko.updateGenericComponent };
})();(function () {
    ko.bindingHandlers["mobiscroll.rangepicker"] = ko.bindingHandlers["mobiscroll.range"] = { init: function (a, b, d, c, e) {
            var g = { onDayChange: d()["mobiscroll.onDayChange"], onMonthChange: d()["mobiscroll.onMonthChange"] };mobiscroll.ko.initializeGenericComponent(a, b, d, c, e, "rangepicker", g);
        }, update: mobiscroll.ko.updateGenericComponent };
})();(function () {
    ko.bindingHandlers["mobiscroll.rating"] = { init: function (a, b, d, c, e) {
            mobiscroll.ko.initializeGenericComponent(a, b, d, c, e, "rating", null);
        }, update: mobiscroll.ko.updateGenericComponent };
})();(function () {
    ko.bindingHandlers["mobiscroll.date"] = { init: function (a, b, d, c, e) {
            mobiscroll.ko.initializeGenericComponent(a, b, d, c, e, "date", null);
        }, update: mobiscroll.ko.updateGenericComponent };ko.bindingHandlers["mobiscroll.time"] = { init: function (a, b, d, c, e) {
            mobiscroll.ko.initializeGenericComponent(a, b, d, c, e, "time", null);
        }, update: mobiscroll.ko.updateGenericComponent };ko.bindingHandlers["mobiscroll.datetime"] = { init: function (a, b, d, c, e) {
            mobiscroll.ko.initializeGenericComponent(a, b, d, c, e, "datetime", null, "change");
        },
        update: mobiscroll.ko.updateGenericComponent };
})();(function () {
    ko.bindingHandlers["mobiscroll.select"] = { init: function (a, b, d, c, e) {
            var g = {},
                f = d();f["mobiscroll-data"] && (f["mobiscroll-data"].subscribe(function () {
                $(a).mobiscroll("refresh");
            }), g = { data: f["mobiscroll-data"]() });mobiscroll.ko.initializeGenericComponent(a, b, d, c, e, "select", g);
        }, update: mobiscroll.ko.updateGenericComponent };
})();(function () {
    ko.bindingHandlers["mobiscroll.list"] = { init: function (a, b, d, c, e) {
            mobiscroll.ko.initializeGenericComponent(a, b, d, c, e, "list");
        }, update: mobiscroll.ko.updateGenericComponent };
})();(function () {
    ko.bindingHandlers["mobiscroll.image"] = { init: function (a, b, d, c, e) {
            mobiscroll.ko.initializeGenericComponent(a, b, d, c, e, "image");
        }, update: mobiscroll.ko.updateGenericComponent };
})();(function () {
    function a(a, b, c, d) {
        1 == a.length && a.is("li") || $(a[0]).is("li") ? (a = a.clone(), $(a[0]).addClass(!1 !== d ? "mbsc-lv-repeat-animation" : "").attr("ng-repeat-start", "item in " + b), $(a).filter("li").eq(-1).addClass(!1 !== d ? "mbsc-lv-repeat-animation" : "").attr("ng-repeat-end", "").attr("mobiscroll-listview-item", c)) : (a = $("<li></li>").append(a.clone()), a.addClass(!1 !== d ? "mbsc-lv-repeat-animation" : "").attr("ng-repeat", "item in " + b).attr("mobiscroll-listview-item", c));return a;
    }function b(a) {
        var c = 0,
            d = 0;if (!a) return c;
        for (d; d < a.length; d++) c++, a[d].children && a[d].children.length && (c += b(a[d].children));return c;
    }var d,
        c = +new Date(),
        e = [];try {
        d = angular.module("ngAnimate");
    } catch (g) {}d && e.push("ngAnimate");angular.module("mobiscroll-listview", e).directive("mobiscrollListviewItem", ["$rootScope", "$compile", "$timeout", function (a, b, c) {
        return { link: function (d, e, g) {
                var n = e.parent("ul"),
                    g = g.mobiscrollListviewItem,
                    q = a.msNodeCounts[g],
                    A = e.parents(".mbsc-lv-cont").length;q.nodesLeft--;if (n && (A || 0 === q.nodesLeft)) if (A) {
                    var D = n.children("li").not(".mbsc-lv-back").index(e);
                    e.addClass("mbsc-lv-item").hide();n.hasClass("mbsc-lv-root") ? c(function () {
                        n.mobiscroll("add", null, e.show(), D, void 0, n);
                    }) : c(function () {
                        n.prepend(n.children(".mbsc-lv-back"));var a = n.parent("li");q.rootNode.mobiscroll("add", null, e.show(), D, void 0, a.length ? a : n);
                    });
                } else d.$emit("mbscLvLastItemAdded", q.rootNode);e.append(b('<div style="display:none;"><ul><li' + (e.hasClass("mbsc-lv-repeat-animation") ? ' class="mbsc-lv-repeat-animation"' : "") + ' mobiscroll-listview-hitem="' + g + '" ng-repeat="item in item.children"></li></ul></div>')(d));
                d.$emit("listItemAdded", e);d.$on("$destroy", function () {
                    d.$emit("listItemRemoved");
                });
            } };
    }]).directive("mobiscrollListviewHitem", ["$rootScope", "$compile", "$timeout", function (b, c, d) {
        return { link: function (e, g, k) {
                var n = g.parent(),
                    q = n.parent().hasClass("mbsc-lv-ng-initialized");1 >= n.children("li").not(".mbsc-lv-back").length && !q && (k = k.mobiscrollListviewHitem, n.parent().addClass("mbsc-lv-ng-initialized").parent().append(c($("<ul></ul>").append(a(b.msTemplates[k], "item.children", k, g.hasClass("mbsc-lv-repeat-animation"))))(e.$parent)), d(function () {}));e.$on("$destroy", function () {
                    if (n && !n.children("li").length) {
                        n = n.parent().parent().children("ul");n.remove();
                    }
                });
            } };
    }]).directive("mobiscrollListview", ["$compile", "$parse", "$rootScope", "$timeout", function (d, e, g, o) {
        return { restrict: "A", require: "?ngModel", compile: function (e) {
                var h = c++,
                    n = $($.parseHTML($.trim(e.html().replace(/(mbsc-ng-)|(ms-ng-)/g, "ng-"))));return function (c, e, i, F) {
                    var r, w;F || i.mobiscrollData ? (r = c.$eval(i.mobiscrollListview || "{}"), w = i.mobiscrollData || i.ngModel) : (r = c.$eval(i.mobiscrollOptions || "{}"), w = i.mobiscrollListview);F = b(c.$eval(w));g.msNodeCounts = g.msNodeCounts || [];g.msNodeCounts[h] = { rootNode: e, allNodes: F, nodesLeft: F };g.msTemplates = g.msTemplates || [];g.msTemplates[h] = n;w = $("<div></div>").append(a(n, w, h, r.animation));w = d(w)(c).contents().unwrap();e.html(w);c.$on("mbscLvLastItemAdded", function (a, b) {
                        e[0] == b[0] && o(function () {
                            e.mobiscroll().listview(r);i.mobiscrollInstance && (c[i.mobiscrollInstance] = e.mobiscroll("getInst"));
                        });
                    });0 === F && c.$emit("mbscLvLastItemAdded", e);
                };
            } };
    }]);d && angular.module("mobiscroll-listview").animation(".mbsc-lv-repeat-animation", function () {
        return { leave: function (a, b) {
                a.closest(".mbsc-lv-cont").find(".mbsc-lv-root").mobiscroll("remove", a, "right", b);
            } };
    });
})(jQuery);(function () {
    angular.module("mobiscroll-form", []).directive("mobiscrollForm", [function () {
        return { restrict: "A", link: function (a, b, d) {
                d = mobiscroll.ng.getInitOptions(a, d, "mobiscrollForm", !0);b.mobiscroll().form(d);a.$on("mbscFormRefresh", function () {
                    b.mobiscroll("refresh");
                });
            } };
    }]);
})(jQuery);(function () {
    function a(a, d, c, e, g, f) {
        c = c.mobiscroll("getVal");!isNaN(parseFloat(c)) && isFinite(c) && (c = parseFloat(c));f ? f.$setViewValue(c) : (a = a(g[d]).assign, a(e, c));
    }angular.module("mobiscroll-numpad", []).directive("mobiscrollNumpad", ["$parse", function (b) {
        return mobiscroll.ng.getDDO(b, "mobiscrollNumpad", { component: "Numpad" }, null, a);
    }]);
})(jQuery);(function () {
    angular.module("mobiscroll-measurement", []).directive("mobiscrollTemperature", ["$parse", function (a) {
        return mobiscroll.ng.getDDO(a, "mobiscrollTemperature", { preset: "temperature" });
    }]).directive("mobiscrollSpeed", ["$parse", function (a) {
        return mobiscroll.ng.getDDO(a, "mobiscrollSpeed", { preset: "speed" });
    }]).directive("mobiscrollMass", ["$parse", function (a) {
        return mobiscroll.ng.getDDO(a, "mobiscrollMass", { preset: "mass" });
    }]).directive("mobiscrollForce", ["$parse", function (a) {
        return mobiscroll.ng.getDDO(a, "mobiscrollForce", { preset: "force" });
    }]).directive("mobiscrollDistance", ["$parse", function (a) {
        return mobiscroll.ng.getDDO(a, "mobiscrollDistance", { preset: "distance" });
    }]);
})(jQuery);(function () {
    function a(a, b) {
        if (void 0 !== b) {
            var e = a.mobiscroll("getInst");a.mobiscroll("setEvents", b);a.val(e._value);
        }
    }function b(a) {
        a = a.mobiscroll("getEvents");return Array.isArray(a) && !a.length ? null : a;
    }angular.module("mobiscroll-calendar", []).directive("mobiscrollCalendar", ["$parse", function (a) {
        return mobiscroll.ng.getDDO(a, "mobiscrollCalendar", { preset: "calendar" });
    }]).directive("mobiscrollEventCalendar", ["$parse", function (d) {
        return mobiscroll.ng.getDDO(d, "mobiscrollEventCalendar", { preset: "calendar",
            events: [] }, a, function () {}, b);
    }]);
})();(function () {
    angular.module("mobiscroll-timespan", []).directive("mobiscrollTimespan", ["$parse", function (a) {
        return mobiscroll.ng.getDDO(a, "mobiscrollTimespan", { preset: "timespan" });
    }]);
})(jQuery);(function () {
    angular.module("mobiscroll-number", []).directive("mobiscrollNumber", ["$parse", function (a) {
        return mobiscroll.ng.getDDO(a, "mobiscrollNumber", { preset: "number" });
    }]);
})(jQuery);(function () {
    var a = ["ng-repeat", "ng:repeat", "data-ng-repeat", "x-ng-repeat", "ng_repeat"];angular.module("mobiscroll-menustrip", []).directive("mobiscrollRepeatRender", function () {
        return function (a) {
            a.$emit("mbscRepeatRender");
        };
    }).directive("mobiscrollMenustrip", ["$parse", "$timeout", function (b, d) {
        var c = mobiscroll.ng.getDDO(b, "mobiscrollMenustrip", { component: "MenuStrip" }, function () {}, function () {});c.compile = function (c) {
            var g, f;c.find("li").each(function () {
                for (f = 0; f < a.length; f++) if ($(this).attr(a[f])) return g = !0, !1;
            });g && c.children().attr("mobiscroll-repeat-render", "");return function (a, c, e) {
                var f,
                    k = a.$eval(e.mobiscrollMenustrip || "{}");g ? a.$on("mbscRepeatRender", function () {
                    clearTimeout(f);f = setTimeout(function () {
                        c.mobiscroll().menustrip(k);if (e.mobiscrollInstance) {
                            var d = b(e.mobiscrollInstance).assign;d(a, c.mobiscroll("getInst"));
                        }
                    }, 1);
                }) : c.children().length && d(function () {
                    c.mobiscroll().menustrip(k);if (e.mobiscrollInstance) {
                        var d = b(e.mobiscrollInstance).assign;d(a, c.mobiscroll("getInst"));
                    }
                });
            };
        };return c;
    }]);
})(jQuery);(function () {
    angular.module("mobiscroll-widget", []).directive("mobiscrollWidget", ["$parse", function (a) {
        return mobiscroll.ng.getDDO(a, "mobiscrollWidget", { component: "Widget" });
    }]);
})(jQuery);(function () {
    function a(a, b, d, f, h, j) {
        j ? j.$setViewValue(d.mobiscroll("getEllapsedTime")) : (a = a(h[b]).assign, a(f, d.mobiscroll("getEllapsedTime")));
    }function b(a, b) {
        a.mobiscroll("setEllapsedTime", b, !1);a.val(a.mobiscroll("getInst")._value);
    }function d(a) {
        return a.mobiscroll("getEllapsedTime");
    }angular.module("mobiscroll-timer", []).directive("mobiscrollTimer", ["$parse", function (c) {
        return mobiscroll.ng.getDDO(c, "mobiscrollTimer", { preset: "timer" }, b, a, d);
    }]);
})(jQuery);(function () {
    angular.module("mobiscroll-colorpicker", []).directive("mobiscrollColorpicker", ["$parse", function (a) {
        return mobiscroll.ng.getDDO(a, "mobiscrollColorpicker", { preset: "colorpicker" });
    }]);angular.module("mobiscroll-color", []).directive("mobiscrollColor", ["$parse", function (a) {
        return mobiscroll.ng.getDDO(a, "mobiscrollColor", { preset: "color" });
    }]);
})(jQuery);(function () {
    angular.module("mobiscroll-rangepicker", []).directive("mobiscrollRangepicker", ["$parse", function (a) {
        return mobiscroll.ng.getDDO(a, "mobiscrollRangepicker", { preset: "rangepicker" });
    }]);angular.module("mobiscroll-range", []).directive("mobiscrollRange", ["$parse", function (a) {
        return mobiscroll.ng.getDDO(a, "mobiscrollRange", { preset: "range" });
    }]);
})(jQuery);(function () {
    angular.module("mobiscroll-rating", []).directive("mobiscrollRating", ["$parse", function (a) {
        return mobiscroll.ng.getDDO(a, "mobiscrollRating", { preset: "rating" });
    }]);
})(jQuery);(function () {
    angular.module("mobiscroll-datetime", []).directive("mobiscrollDatetime", ["$parse", function (a) {
        return mobiscroll.ng.getDDO(a, "mobiscrollDatetime", { preset: "datetime" });
    }]).directive("mobiscrollDate", ["$parse", function (a) {
        return mobiscroll.ng.getDDO(a, "mobiscrollDate", { preset: "date" });
    }]).directive("mobiscrollTime", ["$parse", function (a) {
        return mobiscroll.ng.getDDO(a, "mobiscrollTime", { preset: "time" });
    }]);
})(jQuery);(function (a) {
    angular.module("mobiscroll-select", []).directive("mobiscrollSelectOption", function () {
        return { link: function (a, d, c) {
                var e = d.closest("select");a.$watch(c.ngValue, function () {
                    a.$emit("MobiscrollReInitialize", e);
                });a.$on("$destroy", function () {
                    a.$emit("MobiscrollReInitialize", e);
                });
            } };
    }).directive("mobiscrollSelect", ["$parse", function (b) {
        var d = mobiscroll.ng.getDDO(b, "mobiscrollSelect", { preset: "select" });d.link = void 0;d.compile = function (c) {
            for (var d = !1, c = a(c).find("option"), g = 0; g < c.length; g++) if (a(c[g]).attr("ng-repeat") || a(c[g]).attr("ng:repeat") || a(c[g]).attr("data-ng-repeat") || a(c[g]).attr("x-ng-repeat") || a(c[g]).attr("ng_repeat")) {
                a(c[g]).attr("mobiscroll-select-option", "");d = !0;break;
            }return function (a, c, g, o) {
                var i = mobiscroll.ng.getInitOptions(a, g, "mobiscrollSelect", o),
                    k;g.mobiscrollData && (angular.extend(i, { data: a.$eval(g.mobiscrollData) || [] }), a.$watchCollection(g.mobiscrollData, function () {
                    var b = c.mobiscroll("getInst"),
                        d = a.$eval(g.mobiscrollData);b.settings.data != d && (b.settings.data = d);c.mobiscroll("refresh");
                }));
                mobiscroll.ng.addWatch(b, a, o, mobiscroll.ng.genericRender, mobiscroll.ng.genericParser, c, g, "mobiscrollSelect");if (d) a.$on("MobiscrollReInitialize", function (d, e) {
                    if (c[0] == e[0]) {
                        clearTimeout(k);k = setTimeout(function () {
                            c.mobiscroll().select(i);o ? mobiscroll.ng.genericRender(c, o.$modelValue) : mobiscroll.ng.genericRender(c, b(g.mobiscrollSelect)(a));if (g.mobiscrollInstance) {
                                var d = b(g.mobiscrollInstance).assign;d(a, c.mobiscroll("getInst"));
                            }
                        }, 10);
                    }
                });else if (c.mobiscroll().select(i), g.mobiscrollInstance) {
                    var n = b(g.mobiscrollInstance).assign;n(a, c.mobiscroll("getInst"));
                }c.on("change", function () {
                    a.$apply(function () {
                        mobiscroll.ng.genericRead(b, "mobiscrollSelect", c, a, g, o);
                    });
                });
            };
        };return d;
    }]);
})(jQuery);(function () {
    var a = ["ng-repeat", "ng:repeat", "data-ng-repeat", "x-ng-repeat", "ng_repeat"];angular.module("mobiscroll-list", []).directive("mobiscrollRepeatRender", function () {
        return function (a) {
            a.$emit("mbscRepeatRender");
        };
    }).directive("mobiscrollList", ["$parse", function (b) {
        var d = mobiscroll.ng.getDDO(b, "mobiscrollList", { preset: "list" });d.compile = function (c) {
            var d, g;c.find("li").each(function () {
                for (g = 0; g < a.length; g++) if ($(this).attr(a[g])) return d = !0, !1;
            });d && c.children().attr("mobiscroll-repeat-render", "");return function (a, c, g, o) {
                var i,
                    k = mobiscroll.ng.getInitOptions(a, g, "mobiscrollList", o);mobiscroll.ng.addWatch(b, a, o, mobiscroll.ng.genericRender, mobiscroll.ng.genericParser, c, g, "mobiscrollList");if (d) a.$on("mbscRepeatRender", function () {
                    clearTimeout(i);i = setTimeout(function () {
                        c.mobiscroll().treelist(k);if (g.mobiscrollInstance) {
                            var d = b(g.mobiscrollInstance).assign;d(a, c.mobiscroll("getInst"));
                        }
                    }, 1);
                });else if (c.children().length && (c.mobiscroll().treelist(k), g.mobiscrollInstance)) {
                    var n = b(g.mobiscrollInstance).assign;
                    n(a, c.mobiscroll("getInst"));
                }c.on("change", function () {
                    a.$apply(function () {
                        mobiscroll.ng.genericRead(b, "mobiscrollList", c, a, g, o);
                    });
                });
            };
        };return d;
    }]);
})(jQuery);(function () {
    var a = ["ng-repeat", "ng:repeat", "data-ng-repeat", "x-ng-repeat", "ng_repeat"];angular.module("mobiscroll-image", []).directive("mobiscrollRepeatRender", function () {
        return function (a) {
            a.$emit("mbscRepeatRender");
        };
    }).directive("mobiscrollImage", ["$parse", function (b) {
        var d = mobiscroll.ng.getDDO(b, "mobiscrollImage", { preset: "image" });d.compile = function (c) {
            var d, g;c.find("li").each(function () {
                for (g = 0; g < a.length; g++) if ($(this).attr(a[g])) return d = !0, !1;
            });d && c.children().attr("mobiscroll-repeat-render", "");return function (a, c, g, o) {
                var i,
                    k = mobiscroll.ng.getInitOptions(a, g, "mobiscrollImage", o);mobiscroll.ng.addWatch(b, a, o, mobiscroll.ng.genericRender, mobiscroll.ng.genericParser, c, g, "mobiscrollImage");if (d) a.$on("mbscRepeatRender", function () {
                    clearTimeout(i);i = setTimeout(function () {
                        c.mobiscroll().image(k);if (g.mobiscrollInstance) {
                            var d = b(g.mobiscrollInstance).assign;d(a, c.mobiscroll("getInst"));
                        }
                    }, 1);
                });else if (c.children().length && (c.mobiscroll().image(k), g.mobiscrollInstance)) {
                    var n = b(g.mobiscrollInstance).assign;
                    n(a, c.mobiscroll("getInst"));
                }c.on("change", function () {
                    a.$apply(function () {
                        mobiscroll.ng.genericRead(b, "mobiscrollImage", c, a, g, o);
                    });
                });
            };
        };return d;
    }]);
})(jQuery);(function () {
    mobiscroll.listview = function (a, b, d, c) {
        function e(a, b, c, d) {
            if (b == a) return c;c = c.children("li").not(".mbsc-lv-back");if (c.length && a) for (var g = 0; g < c.length; g++) {
                var k = $(c[g]).children("ul");if (!k.length) {
                    var n = $(c[g]).data("ref"),
                        n = d.find('li.mbsc-lv-back[data-back="' + n + '"]');n.length && (k = n.parent("ul"));
                }var n = a.at(g).get("children"),
                    q = !1;if (k.length && n) q = e(n, b, k, d);else if (!k.length && n == b) return $(c[g]);if (q) return q;
            }return !1;
        }function g(a, b, c) {
            var d = "";b.forEach(function (b) {
                var c = b.get("children"),
                    e = d,
                    b = "<li>" + _.template(a)(b.toJSON()),
                    c = c && c.length ? "<ul>" + g(a, c) + "</ul>" : "";d = e + (b + c + "</li>");
            }, c);return d;
        }d = d || {};return { initialize: function () {
                var d = this.model.get(a);d.on("add mobiscrollListviewAddChild", function (a, g) {
                    var o = c.html(),
                        o = _.template(o, a.toJSON()),
                        i = 1 == g.length ? 0 : void 0,
                        k = this.$el.find(b),
                        n = e(d, g, k, k.closest(".mbsc-lv-cont"));k.mobiscroll("add", g.length, o, i, void 0, n);
                }, this);d.on("remove mobiscrollListviewRemoveChild", function (a, c, g) {
                    a = this.$el.find(b);var g = g.index,
                        i = a.closest(".mbsc-lv-cont"),
                        c = c == d ? a.children("li").not(".mbsc-lv-back").eq(g) : e(d, c, a, i).children("li").not(".mbsc-lv-back").eq(g);a.mobiscroll("remove", c);
                }, this);
            }, render: function () {
                this.$el.find(b).data("view-model", this.model);var e = "",
                    e = this.model.get(a),
                    e = g(c.html(), e, this);this.$el.find(b).html(e);this.$el.find(b).mobiscroll().listview(d);
            } };
    };
})(jQuery);(function () {
    mobiscroll.form = function (a) {
        return { render: function () {
                this.$el.mobiscroll().form(a);
            } };
    };
})(jQuery);(function (a) {
    mobiscroll.numpad = function (b, d, c, e) {
        c = c || {};a.extend(c, { component: "Numpad" });return mobiscroll.bb.getComponentMixin(b, d, c, e);
    };
})(jQuery);(function (a) {
    mobiscroll.temperature = function (b, d, c, e) {
        c = c || {};a.extend(c, { preset: "temperature" });return mobiscroll.bb.getComponentMixin(b, d, c, e);
    };mobiscroll.speed = function (b, d, c, e) {
        c = c || {};a.extend(c, { preset: "speed" });return mobiscroll.bb.getComponentMixin(b, d, c, e);
    };mobiscroll.mass = function (b, d, c, e) {
        c = c || {};a.extend(c, { preset: "mass" });return mobiscroll.bb.getComponentMixin(b, d, c, e);
    };mobiscroll.force = function (b, d, c, e) {
        c = c || {};a.extend(c, { preset: "force" });return mobiscroll.bb.getComponentMixin(b, d, c, e);
    };mobiscroll.distance = function (b, d, c, e) {
        c = c || {};a.extend(c, { preset: "distance" });return mobiscroll.bb.getComponentMixin(b, d, c, e);
    };
})(jQuery);(function (a) {
    function b(a, b, e, g) {
        b = g.$el.find(b);b.mobiscroll(e);e = b.mobiscroll("getInst");b.mobiscroll("setEvents", g.model.get(a));b.val(e._value);
    }mobiscroll.calendar = function (b, c, e, g) {
        e = e || {};a.extend(e, { preset: "calendar" });return mobiscroll.bb.getComponentMixin(b, c, e, g);
    };mobiscroll.calendarEvents = function (d, c, e, g) {
        e = e || {};a.extend(e, { preset: "calendar", events: [] });return mobiscroll.bb.getComponentMixin(d, c, e, g, void 0, b);
    };
})(jQuery);(function (a) {
    mobiscroll.timespan = function (b, d, c, e) {
        c = c || {};a.extend(c, { preset: "timespan" });return mobiscroll.bb.getComponentMixin(b, d, c, e);
    };
})(jQuery);(function (a) {
    mobiscroll.number = function (b, d, c, e) {
        c = c || {};a.extend(c, { preset: "number" });return mobiscroll.bb.getComponentMixin(b, d, c, e);
    };
})(jQuery);(function (a) {
    mobiscroll.menustrip = function (b, d, c, e) {
        c = c || {};a.extend(c, { component: "MenuStrip" });return mobiscroll.bb.getComponentMixin(b, d, c, e);
    };
})(jQuery);(function (a) {
    mobiscroll.widget = function (b, d, c, e) {
        c = c || {};a.extend(c, { component: "Widget" });return mobiscroll.bb.getComponentMixin(b, d, c, e);
    };
})(jQuery);(function (a) {
    function b(a, b, d) {
        b = d.$el.find(b).mobiscroll("getEllapsedTime");d.model.set(a, b);
    }function d(a, b, d, f) {
        b = f.$el.find(b);b.mobiscroll(d);a = b.mobiscroll("setEllapsedTime", f.model.get(a)).mobiscroll("getInst");b.val(a._value);
    }mobiscroll.timer = function (c, e, g, f) {
        g = g || {};a.extend(g, { preset: "timer" });return mobiscroll.bb.getComponentMixin(c, e, g, f, b, d);
    };
})(jQuery);(function (a) {
    mobiscroll.colorpicker = mobiscroll.color = function (b, d, c, e) {
        c = c || {};a.extend(c, { preset: "colorpicker" });return mobiscroll.bb.getComponentMixin(b, d, c, e);
    };
})(jQuery);(function (a) {
    mobiscroll.rangepicker = mobiscroll.range = function (b, d, c, e) {
        c = c || {};a.extend(c, { preset: "rangepicker" });return mobiscroll.bb.getComponentMixin(b, d, c, e);
    };
})(jQuery);(function (a) {
    mobiscroll.rating = function (b, d, c, e) {
        c = c || {};a.extend(c, { preset: "rating" });return mobiscroll.bb.getComponentMixin(b, d, c, e);
    };
})(jQuery);(function (a) {
    mobiscroll.date = function (b, d, c, e) {
        c = c || {};a.extend(c, { preset: "date" });return mobiscroll.bb.getComponentMixin(b, d, c, e);
    };mobiscroll.time = function (b, d, c, e) {
        c = c || {};a.extend(c, { preset: "time" });return mobiscroll.bb.getComponentMixin(b, d, c, e);
    };mobiscroll.datetime = function (b, d, c, e) {
        c = c || {};a.extend(c, { preset: "datetime" });return mobiscroll.bb.getComponentMixin(b, d, c, e);
    };
})(jQuery);(function (a) {
    mobiscroll.select = function (b, d, c, e, g) {
        c = c || {};a.extend(c, { preset: "select" });return mobiscroll.bb.getComponentMixin(b, d, c, e, void 0, function (b, c, d, e) {
            var i = {};g && (i = { data: e.model.get(g).toJSON() });a.extend(d, i);e.$el.find(c).mobiscroll(d).mobiscroll("setVal", e.model.get(b), !0, !1);
        }, function (a) {
            if (g) a.model.get(g).on("add remove reset sort change", function () {
                var a = this.$el.find(d).mobiscroll("getInst");a.settings.data = this.model.get(g).toJSON();a.refresh();
            }, a);
        });
    };
})(jQuery);(function (a) {
    mobiscroll.list = function (b, d, c, e) {
        c = c || {};a.extend(c, { preset: "list" });return mobiscroll.bb.getComponentMixin(b, d, c, e);
    };
})(jQuery);(function (a) {
    mobiscroll.image = function (b, d, c, e) {
        c = c || {};a.extend(c, { preset: "image" });return mobiscroll.bb.getComponentMixin(b, d, c, e);
    };
})(jQuery);(function (a) {
    mobiscroll.ember.listItemHelper = function () {
        return Ember.View.extend({ tagName: "li", init: function () {
                this._super();var b,
                    d = this.get("_parentView.templateID"),
                    c = this.dataAttributeBindings = this.get("_parentView.childAttributes");b = a("#" + d).html();this.getModel().children && (b += '{{#if view.content.children.length}}{{#with view.content.children}}{{mobiscroll-listview templateID="' + d + '" childAttributes="' + c + '"}}{{/with}}{{/if}}</li>');this.layout = Ember.Handlebars.compile(b);
            }, layout: function () {},
            didInsertElement: function () {
                var a = this.$(),
                    d = this.get("dataAttributeBindings");if (d && (d = d.replace(/\s{2,}/g, " "), (d = d.split(" ")).length)) for (var c = 0; c < d.length; c++) {
                    var e = d[c].split(":"),
                        g = e[0],
                        f = this.get("content." + g);2 == e.length && (g = e[1]);a.attr("data-" + g, f);
                }
            }, getModel: function () {
                return this.get("content");
            }, isTopLevel: function () {
                var a = this.get("parentView");return a && a.isTopLevel ? !1 : !0;
            }, isInitialized: function () {
                return this.get("parentView").isInitialized();
            } });
    };mobiscroll.ember.listHelper = function () {
        return Ember.CollectionView.extend({ tagName: "ul",
            init: function () {
                this.set("content", this.getModel());this._super();
            }, getModel: function () {
                var a = this.get("parentView");return a && a.getModel ? a.getModel().children : this.get("controller.model." + this.get("value"));
            }, isInitialized: function () {
                var a = this.get("parentView");return a && a.isInitialized ? a.isInitialized() : this.get("mobiscrollInitialized");
            }, isTopLevel: function () {
                var a = this.get("parentView");return !(a && a.isTopLevel);
            }, createChildView: function (a, d) {
                return this._super(mobiscroll.ember.listItemHelper(), d);
            }, didInsertElement: function () {
                this.isTopLevel() && Ember.run.scheduleOnce("afterRender", this, function () {
                    var a = {};this.options && (a = new Function("controller", "return " + this.options)(this.get("controller")));this.$().mobiscroll().listview(a);this.set("mobiscrollInitialized", !0);
                });
            }, removing: null, arrayWillChange: function (a, d, c) {
                this.isInitialized() && 0 < c && (this.removing = { li: this.$().children("li").not(".mbsc-lv-removing").not(".mbsc-lv-back").slice(d, d + c), index: d });return this._super(a, d, c);
            }, arrayDidChange: function (a, d, c, e) {
                if (this.isInitialized()) if (0 < e) Ember.run.scheduleOnce("afterRender", this, function () {
                    var a = this.$().closest(".mbsc-lv-cont").find("ul.mbsc-lv-root"),
                        b = this.$(),
                        c = b.parent("li");if (b.hasClass("mbsc-lv-sl-curr")) {
                        var f = this.get("parentView").$();f.is("li") && (c = f);
                    }for (f = 0; f < e; f++) {
                        var g = b.find(" > li").not(".mbsc-lv-back").eq(d + f);a.mobiscroll("add", null, g, !1, void 0, c.length ? c : b);
                    }
                });else if (0 < c) {
                    var g = this.removing;if (g) {
                        g.li.addClass("mbsc-lv-removing");if (0 === g.index) this.$().append(g.li);else {
                            var f = this.$().children("li").not(".mbsc-lv-removing").not(".mbsc-lv-back").eq(g.index - 1),
                                h = f.next();h.length && h.is("script") && 0 <= h.attr("id").indexOf("-end") ? h.after(g.li) : f.after(g.li);
                        }f = this.$().closest(".mbsc-lv-cont").find("ul.mbsc-lv-root");for (h = 0; h < g.li.length; h++) f.mobiscroll("remove", g.li.eq(h));
                    }
                }return this._super(a, d, c, e);
            } });
    };Ember.Handlebars.helper("mobiscroll-listview", mobiscroll.ember.listHelper());Ember.Handlebars.helper("mobiscroll-listitem-helper", mobiscroll.ember.listItemHelper());
})(jQuery);(function () {
    function a() {
        return { layout: Ember.Handlebars.compile("{{yield}}") };
    }function b(a, b) {
        a.mobiscroll().form(b);
    }mobiscroll.ember.form = function () {
        return mobiscroll.ember.getEmberMobiscrollView(b, void 0, void 0, a, null);
    };Ember.Handlebars.helper("mobiscroll-form", mobiscroll.ember.form());
})(jQuery);(function () {
    function a(a, d, c, e) {
        $.extend(d, { component: "Numpad" }, e);a.mobiscroll(d);
    }mobiscroll.ember.numpad = function () {
        return mobiscroll.ember.getEmberMobiscrollView(a);
    };Ember.Handlebars.helper("mobiscroll-numpad", mobiscroll.ember.numpad());
})(jQuery);(function () {
    mobiscroll.ember.temperature = function () {
        return mobiscroll.ember.getEmberMobiscrollView("temperature");
    };mobiscroll.ember.distance = function () {
        return mobiscroll.ember.getEmberMobiscrollView("distance");
    };mobiscroll.ember.speed = function () {
        return mobiscroll.ember.getEmberMobiscrollView("speed");
    };mobiscroll.ember.force = function () {
        return mobiscroll.ember.getEmberMobiscrollView("force");
    };mobiscroll.ember.mass = function () {
        return mobiscroll.ember.getEmberMobiscrollView("mass");
    };Ember.Handlebars.helper("mobiscroll-temperature", mobiscroll.ember.temperature());Ember.Handlebars.helper("mobiscroll-distance", mobiscroll.ember.distance());Ember.Handlebars.helper("mobiscroll-speed", mobiscroll.ember.speed());Ember.Handlebars.helper("mobiscroll-force", mobiscroll.ember.force());Ember.Handlebars.helper("mobiscroll-mass", mobiscroll.ember.mass());
})(jQuery);(function () {
    function a(a, d, c) {
        d = d.get("controller.model." + c);null !== d && void 0 !== d && a.mobiscroll("setEvents", d);
    }mobiscroll.ember.calendar = function () {
        return mobiscroll.ember.getEmberMobiscrollView("calendar");
    };mobiscroll.ember.eventCalendar = function () {
        return mobiscroll.ember.getEmberMobiscrollView("calendar", a, function () {}, void 0, void 0, { events: [] }, { willChange: function () {}, didChange: a });
    };Ember.Handlebars.helper("mobiscroll-calendar", mobiscroll.ember.calendar());Ember.Handlebars.helper("mobiscroll-event-calendar", mobiscroll.ember.eventCalendar());
})(jQuery);(function () {
    mobiscroll.ember.timespan = function () {
        return mobiscroll.ember.getEmberMobiscrollView("timespan");
    };Ember.Handlebars.helper("mobiscroll-timespan", mobiscroll.ember.timespan());
})(jQuery);(function () {
    mobiscroll.ember.number = function () {
        return mobiscroll.ember.getEmberMobiscrollView("number");
    };Ember.Handlebars.helper("mobiscroll-number", mobiscroll.ember.number());
})(jQuery);(function () {
    function a(a, b, e, g) {
        $.extend(b, { component: "MenuStrip" }, g);a.mobiscroll(b);
    }function b() {
        return { layout: Ember.Handlebars.compile("<ul>{{yield}}</ul>") };
    }mobiscroll.ember.menustrip = function () {
        return mobiscroll.ember.getEmberMobiscrollView(a, void 0, void 0, b, "ul");
    };Ember.Handlebars.helper("mobiscroll-menustrip", mobiscroll.ember.menustrip());
})(jQuery);(function () {
    function a(a, b, e, g) {
        $.extend(b, { component: "Widget" }, g);a.mobiscroll(b);
    }function b() {
        return { layout: Ember.Handlebars.compile("<div>{{yield}}</div>") };
    }mobiscroll.ember.widget = function () {
        return mobiscroll.ember.getEmberMobiscrollView(a, void 0, void 0, b, "div");
    };Ember.Handlebars.helper("mobiscroll-widget", mobiscroll.ember.widget());
})(jQuery);(function () {
    function a(a, b, g) {
        d[a.attr("id")] || (b = b.get("controller.model." + g), null !== b && void 0 !== b && (a.mobiscroll("setEllapsedTime", b), a.val(a.mobiscroll("getInst")._value)));
    }function b(a, b) {
        var g = b.get("value"),
            f = b.get("controller.model");d[a.attr("id")] = !0;f.set(g, a.mobiscroll("getEllapsedTime"));d[a.attr("id")] = !1;
    }mobiscroll.ember.timer = function () {
        return mobiscroll.ember.getEmberMobiscrollView("timer", a, b);
    };Ember.Handlebars.helper("mobiscroll-timer", mobiscroll.ember.timer());var d = {};
})(jQuery);(function () {
    mobiscroll.ember.colorpicker = function () {
        return mobiscroll.ember.getEmberMobiscrollView("colorpicker");
    };Ember.Handlebars.helper("mobiscroll-colorpicker", mobiscroll.ember.colorpicker());mobiscroll.ember.color = function () {
        return mobiscroll.ember.getEmberMobiscrollView("color");
    };Ember.Handlebars.helper("mobiscroll-color", mobiscroll.ember.color());
})(jQuery);(function () {
    mobiscroll.ember.rangepicker = function () {
        return mobiscroll.ember.getEmberMobiscrollView("rangepicker", void 0);
    };Ember.Handlebars.helper("mobiscroll-rangepicker", mobiscroll.ember.rangepicker());mobiscroll.ember.range = function () {
        return mobiscroll.ember.getEmberMobiscrollView("range", void 0);
    };Ember.Handlebars.helper("mobiscroll-range", mobiscroll.ember.range());
})(jQuery);(function () {
    mobiscroll.ember.rating = function () {
        return mobiscroll.ember.getEmberMobiscrollView("rating", void 0);
    };Ember.Handlebars.helper("mobiscroll-rating", mobiscroll.ember.rating());
})(jQuery);(function () {
    mobiscroll.ember.dateTime = function () {
        return mobiscroll.ember.getEmberMobiscrollView("datetime");
    };mobiscroll.ember.date = function () {
        return mobiscroll.ember.getEmberMobiscrollView("date");
    };mobiscroll.ember.time = function () {
        return mobiscroll.ember.getEmberMobiscrollView("time");
    };Ember.Handlebars.helper("mobiscroll-date-time", mobiscroll.ember.dateTime());Ember.Handlebars.helper("mobiscroll-date", mobiscroll.ember.date());Ember.Handlebars.helper("mobiscroll-time", mobiscroll.ember.time());
})(jQuery);(function () {
    function a(a, d, c) {
        d.get("controller.model").set(c, a.mobiscroll("getVal"));
    }mobiscroll.ember.select = function () {
        return Ember.CollectionView.extend({ tagName: "select", didInsertElement: function () {
                this._super();var b = {};this.options && (b = new Function("controller", "return " + this.options)(this.get("controller")));Ember.run.scheduleOnce("afterRender", this, function () {
                    var c = this.$();c.mobiscroll().select(b);c.mobiscroll("setVal", void 0, !0, !1);a(c, this, this.get("selection"));
                });var d = this.$(),
                    c = this,
                    e = this.get("selection");d.on("change", function () {
                    e && a(d, c, e);
                });this.get("controller.model").addObserver(e, this, function () {
                    var a = c.get("controller.model." + e);d.mobiscroll("setVal", a, !0, !1);
                });this.addEnumerableObserver(this, { willChange: function () {}, didChange: function () {
                        d.mobiscroll("refresh");
                    } });
            }, itemViewClass: Ember.View.extend({ tagName: "option", value: function () {
                    var a = this.get("_parentView").get("optionValuePath");a || (a = "content");return this.get(a);
                }.property("content"), label: function () {
                    var a = this.get("_parentView").get("optionLabelPath");
                    a || (a = "content");return this.get(a);
                }.property("content"), attributeBindings: ["value"], template: Ember.Handlebars.compile("{{view.label}}") }) });
    };Ember.Handlebars.helper("mobiscroll-select", mobiscroll.ember.select());
})(jQuery);(function () {
    function a() {
        return { layout: Ember.Handlebars.compile("<ul>{{yield}}</ul>") };
    }mobiscroll.ember.list = function () {
        return mobiscroll.ember.getEmberMobiscrollView("list", void 0, void 0, a, "ul");
    };Ember.Handlebars.helper("mobiscroll-list", mobiscroll.ember.list());
})(jQuery);(function () {
    function a() {
        return { layout: Ember.Handlebars.compile("<ul>{{yield}}</ul>") };
    }mobiscroll.ember.image = function () {
        return mobiscroll.ember.getEmberMobiscrollView("image", void 0, void 0, a, "ul");
    };Ember.Handlebars.helper("mobiscroll-image", mobiscroll.ember.image());
})(jQuery);(function (a) {
    kendo.data.binders["mobiscroll-listview"] = kendo.data.binders.source.extend({ init: function (b, d, c) {
            d.source = d["mobiscroll-listview"];var e = a(b).data("mobiscroll-options"),
                g = {};e && (g = new Function("$root", "return " + e)(d["mobiscroll-listview"].parents[0]));this.optObj = g;kendo.data.binders.source.fn.init.call(this, b, d, c);
        }, refresh: function (b) {
            if (b && "remove" == b.action) b = a(this.element).find("li:eq(" + b.index + ")"), a(this.element).mobiscroll("remove", b);else if (b && "itemchange" == b.action && (b.action = void 0), kendo.data.binders.source.fn.refresh.call(this, b), b && "add" == b.action) {
                var d = b.index,
                    b = a(this.element).find("li:eq(" + d + ")");a(this.element).mobiscroll("add", null, b, d);
            }
        }, render: function () {
            kendo.data.binders.source.fn.render.call(this);var b = this.container();a(b).mobiscroll().listview(this.optObj);
        } });
})(jQuery);(function () {
    kendo.data.binders["mobiscroll-form"] = kendo.data.Binder.extend({ init: function (a, b) {
            $(a).on("mbscFormRefresh", function () {
                $(a).mobiscroll("refresh");
            });var d = mobiscroll.kendo.getMobiInitObject(a, b, "mobiscroll-form", {});$(a).mobiscroll().form(d);
        }, refresh: function () {} });
})();(function () {
    kendo.data.binders["mobiscroll-numpad"] = kendo.data.Binder.extend(mobiscroll.kendo.getMobiBinder("mobiscroll-numpad", { component: "Numpad" }));
})();(function () {
    kendo.data.binders["mobiscroll-distance"] = kendo.data.Binder.extend(mobiscroll.kendo.getMobiBinder("mobiscroll-distance", "distance"));kendo.data.binders["mobiscroll-speed"] = kendo.data.Binder.extend(mobiscroll.kendo.getMobiBinder("mobiscroll-speed", "speed"));kendo.data.binders["mobiscroll-force"] = kendo.data.Binder.extend(mobiscroll.kendo.getMobiBinder("mobiscroll-force", "force"));kendo.data.binders["mobiscroll-mass"] = kendo.data.Binder.extend(mobiscroll.kendo.getMobiBinder("mobiscroll-mass", "mass"));kendo.data.binders["mobiscroll-temperature"] = kendo.data.Binder.extend(mobiscroll.kendo.getMobiBinder("mobiscroll-temperature", "temperature"));
})();(function (a) {
    kendo.data.binders["mobiscroll-calendar"] = kendo.data.Binder.extend(mobiscroll.kendo.getMobiBinder("mobiscroll-calendar", "calendar"));kendo.data.binders["mobiscroll-event-calendar"] = kendo.data.Binder.extend(mobiscroll.kendo.getMobiBinder("mobiscroll-event-calendar", "calendar", function (b, d) {
        if (void 0 !== d) {
            var c = a(b);c.mobiscroll("setEvents", d);c.val(c.mobiscroll("getInst")._value);
        }
    }, function () {}, { events: [] }));
})(jQuery);(function () {
    kendo.data.binders["mobiscroll-timespan"] = kendo.data.Binder.extend(mobiscroll.kendo.getMobiBinder("mobiscroll-timespan", "timespan"));
})();(function () {
    kendo.data.binders["mobiscroll-number"] = kendo.data.Binder.extend(mobiscroll.kendo.getMobiBinder("mobiscroll-number", "number"));
})();(function () {
    kendo.data.binders["mobiscroll-menustrip"] = kendo.data.Binder.extend(mobiscroll.kendo.getMobiBinder("mobiscroll-menustrip", { component: "MenuStrip" }));
})();(function () {
    kendo.data.binders["mobiscroll-widget"] = kendo.data.Binder.extend(mobiscroll.kendo.getMobiBinder("mobiscroll-widget", { component: "Widget" }));
})();(function (a) {
    var b = {};kendo.data.binders["mobiscroll-timer"] = kendo.data.Binder.extend(mobiscroll.kendo.getMobiBinder("mobiscroll-timer", "timer", function (d, c) {
        if (!b[d.id] && c) {
            var e = a(d),
                g = e.mobiscroll("setEllapsedTime", c).mobiscroll("getInst");e.val(g._value);
        }b[d.id] = !1;
    }, function (d, c, e) {
        b[e.id] = !0;d.set(a(e).mobiscroll("getEllapsedTime"));
    }));
})(jQuery);(function () {
    kendo.data.binders["mobiscroll-colorpicker"] = kendo.data.Binder.extend(mobiscroll.kendo.getMobiBinder("mobiscroll-colorpicker", "colorpicker"));kendo.data.binders["mobiscroll-color"] = kendo.data.Binder.extend(mobiscroll.kendo.getMobiBinder("mobiscroll-color", "colorpicker"));
})();(function () {
    kendo.data.binders["mobiscroll-rangepicker"] = kendo.data.Binder.extend(mobiscroll.kendo.getMobiBinder("mobiscroll-rangepicker", "rangepicker"));kendo.data.binders["mobiscroll-range"] = kendo.data.Binder.extend(mobiscroll.kendo.getMobiBinder("mobiscroll-range", "range"));
})();(function () {
    kendo.data.binders["mobiscroll-rating"] = kendo.data.Binder.extend(mobiscroll.kendo.getMobiBinder("mobiscroll-rating", "rating"));
})();(function () {
    kendo.data.binders["mobiscroll-date"] = kendo.data.Binder.extend(mobiscroll.kendo.getMobiBinder("mobiscroll-date", "date"));kendo.data.binders["mobiscroll-datetime"] = kendo.data.Binder.extend(mobiscroll.kendo.getMobiBinder("mobiscroll-datetime", "datetime"));kendo.data.binders["mobiscroll-time"] = kendo.data.Binder.extend(mobiscroll.kendo.getMobiBinder("mobiscroll-time", "time"));
})();(function () {
    kendo.data.binders["mobiscroll-select"] = kendo.data.Binder.extend(mobiscroll.kendo.getMobiBinder("mobiscroll-select", "select", void 0, void 0, void 0, function (a, b, d) {
        kendo.data.Binder.fn.init.call(this, a, b, d);var c = $(a).data("mobiscroll-options"),
            d = {};c && (d = new Function("$root", "return " + c)(b["mobiscroll-select"].parents[0]));c = {};if (b["mobiscroll-data"]) {
            var e = b["mobiscroll-data"].get(),
                c = { data: e };e.bind("change", function () {
                $(g.element).mobiscroll("refresh");
            });
        }var d = $.extend(!0, { preset: "select" }, d, c),
            g = this;$(g.element).on("change", function () {
            g.change(b, a);
        }).mobiscroll(d);
    }));kendo.data.binders["mobiscroll-data"] = kendo.data.Binder.extend({ init: function () {}, refresh: function () {} });
})();(function () {
    kendo.data.binders["mobiscroll-list"] = kendo.data.Binder.extend(mobiscroll.kendo.getMobiBinder("mobiscroll-list", "list"));
})();(function () {
    kendo.data.binders["mobiscroll-image"] = kendo.data.Binder.extend(mobiscroll.kendo.getMobiBinder("mobiscroll-image", "image"));
})();

//# sourceMappingURL=mobiscroll.min-compiled.js.map