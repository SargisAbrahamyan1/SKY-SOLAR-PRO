/*!
 * ScrollTrigger 3.11.5
 * https://greensock.com
 * 
 * @license Copyright 2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = e || self).window = e.window || {})
}(this, function(e) {
    "use strict";

    function _defineProperties(e, t) {
        for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
    }

    function r() {
        return Me || "undefined" != typeof window && (Me = window.gsap) && Me.registerPlugin && Me
    }

    function z(e, t) {
        return ~qe.indexOf(e) && qe[qe.indexOf(e) + 1][t]
    }

    function A(e) {
        return !!~t.indexOf(e)
    }

    function B(e, t, r, n, o) {
        return e.addEventListener(t, r, {
            passive: !n,
            capture: !!o
        })
    }

    function C(e, t, r, n) {
        return e.removeEventListener(t, r, !!n)
    }

    function F() {
        return Re && Re.isPressed || Ie.cache++
    }

    function G(r, n) {
        function Vc(e) {
            if (e || 0 === e) {
                o && (ke.history.scrollRestoration = "manual");
                var t = Re && Re.isPressed;
                e = Vc.v = Math.round(e) || (Re && Re.iOS ? 1 : 0), r(e), Vc.cacheID = Ie.cache, t && i("ss", e)
            } else(n || Ie.cache !== Vc.cacheID || i("ref")) && (Vc.cacheID = Ie.cache, Vc.v = r());
            return Vc.v + Vc.offset
        }
        return Vc.offset = 0, r && Vc
    }

    function J(e) {
        return Me.utils.toArray(e)[0] || ("string" == typeof e && !1 !== Me.config().nullTargetWarn ? console.warn("Element not found:", e) : null)
    }

    function K(t, e) {
        var r = e.s,
            n = e.sc;
        A(t) && (t = Ee.scrollingElement || Pe);
        var o = Ie.indexOf(t),
            i = n === je.sc ? 1 : 2;
        ~o || (o = Ie.push(t) - 1), Ie[o + i] || t.addEventListener("scroll", F);
        var a = Ie[o + i],
            s = a || (Ie[o + i] = G(z(t, r), !0) || (A(t) ? n : G(function(e) {
                return arguments.length ? t[r] = e : t[r]
            })));
        return s.target = t, a || (s.smooth = "smooth" === Me.getProperty(t, "scrollBehavior")), s
    }

    function L(e, t, o) {
        function rd(e, t) {
            var r = Ne();
            t || n < r - s ? (a = i, i = e, l = s, s = r) : o ? i += e : i = a + (e - a) / (r - l) * (s - l)
        }
        var i = e,
            a = e,
            s = Ne(),
            l = s,
            n = t || 50,
            c = Math.max(500, 3 * n);
        return {
            update: rd,
            reset: function reset() {
                a = i = o ? 0 : i, l = s = 0
            },
            getVelocity: function getVelocity(e) {
                var t = l,
                    r = a,
                    n = Ne();
                return !e && 0 !== e || e === i || rd(e), s === l || c < n - l ? 0 : (i + (o ? r : -r)) / ((o ? n : s) - t) * 1e3
            }
        }
    }

    function M(e, t) {
        return t && !e._gsapAllow && e.preventDefault(), e.changedTouches ? e.changedTouches[0] : e
    }

    function N(e) {
        var t = Math.max.apply(Math, e),
            r = Math.min.apply(Math, e);
        return Math.abs(t) >= Math.abs(r) ? t : r
    }

    function O() {
        (De = Me.core.globals().ScrollTrigger) && De.core && function _integrate() {
            var e = De.core,
                r = e.bridge || {},
                t = e._scrollers,
                n = e._proxies;
            t.push.apply(t, Ie), n.push.apply(n, qe), Ie = t, qe = n, i = function _bridge(e, t) {
                return r[e](t)
            }
        }()
    }

    function P(e) {
        return (Me = e || r()) && "undefined" != typeof document && document.body && (ke = window, Pe = (Ee = document).documentElement, Oe = Ee.body, t = [ke, Ee, Pe, Oe], Me.utils.clamp, ze = Me.core.context || function() {}, Be = "onpointerenter" in Oe ? "pointer" : "mouse", Ae = k.isTouch = ke.matchMedia && ke.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in ke || 0 < navigator.maxTouchPoints || 0 < navigator.msMaxTouchPoints ? 2 : 0, Le = k.eventTypes = ("ontouchstart" in Pe ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in Pe ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout(function() {
            return o = 0
        }, 500), O(), Ce = 1), Ce
    }
    var Me, Ce, ke, Ee, Pe, Oe, Ae, Be, De, t, Re, Le, ze, o = 1,
        Fe = [],
        Ie = [],
        qe = [],
        Ne = Date.now,
        i = function _bridge(e, t) {
            return t
        },
        n = "scrollLeft",
        a = "scrollTop",
        He = {
            s: n,
            p: "left",
            p2: "Left",
            os: "right",
            os2: "Right",
            d: "width",
            d2: "Width",
            a: "x",
            sc: G(function(e) {
                return arguments.length ? ke.scrollTo(e, je.sc()) : ke.pageXOffset || Ee[n] || Pe[n] || Oe[n] || 0
            })
        },
        je = {
            s: a,
            p: "top",
            p2: "Top",
            os: "bottom",
            os2: "Bottom",
            d: "height",
            d2: "Height",
            a: "y",
            op: He,
            sc: G(function(e) {
                return arguments.length ? ke.scrollTo(He.sc(), e) : ke.pageYOffset || Ee[a] || Pe[a] || Oe[a] || 0
            })
        };
    He.op = je, Ie.cache = 0;
    var k = (Observer.prototype.init = function init(e) {
        Ce || P(Me) || console.warn("Please gsap.registerPlugin(Observer)"), De || O();
        var o = e.tolerance,
            a = e.dragMinimum,
            t = e.type,
            i = e.target,
            r = e.lineHeight,
            n = e.debounce,
            s = e.preventDefault,
            l = e.onStop,
            c = e.onStopDelay,
            u = e.ignore,
            f = e.wheelSpeed,
            p = e.event,
            d = e.onDragStart,
            g = e.onDragEnd,
            h = e.onDrag,
            v = e.onPress,
            b = e.onRelease,
            m = e.onRight,
            y = e.onLeft,
            x = e.onUp,
            w = e.onDown,
            _ = e.onChangeX,
            S = e.onChangeY,
            T = e.onChange,
            k = e.onToggleX,
            E = e.onToggleY,
            D = e.onHover,
            R = e.onHoverEnd,
            z = e.onMove,
            X = e.ignoreCheck,
            Y = e.isNormalizer,
            I = e.onGestureStart,
            q = e.onGestureEnd,
            V = e.onWheel,
            H = e.onEnable,
            W = e.onDisable,
            j = e.onClick,
            G = e.scrollSpeed,
            U = e.capture,
            Q = e.allowClicks,
            Z = e.lockAxis,
            $ = e.onLockAxis;

        function Se() {
            return ye = Ne()
        }

        function Te(e, t) {
            return (se.event = e) && u && ~u.indexOf(e.target) || t && ge && "touch" !== e.pointerType || X && X(e, t)
        }

        function Ve() {
            var e = se.deltaX = N(be),
                t = se.deltaY = N(me),
                r = Math.abs(e) >= o,
                n = Math.abs(t) >= o;
            T && (r || n) && T(se, e, t, be, me), r && (m && 0 < se.deltaX && m(se), y && se.deltaX < 0 && y(se), _ && _(se), k && se.deltaX < 0 != le < 0 && k(se), le = se.deltaX, be[0] = be[1] = be[2] = 0), n && (w && 0 < se.deltaY && w(se), x && se.deltaY < 0 && x(se), S && S(se), E && se.deltaY < 0 != ce < 0 && E(se), ce = se.deltaY, me[0] = me[1] = me[2] = 0), (ne || re) && (z && z(se), re && (h(se), re = !1), ne = !1), ie && !(ie = !1) && $ && $(se), oe && (V(se), oe = !1), ee = 0
        }

        function We(e, t, r) {
            be[r] += e, me[r] += t, se._vx.update(e), se._vy.update(t), n ? ee = ee || requestAnimationFrame(Ve) : Ve()
        }

        function Xe(e, t) {
            Z && !ae && (se.axis = ae = Math.abs(e) > Math.abs(t) ? "x" : "y", ie = !0), "y" !== ae && (be[2] += e, se._vx.update(e, !0)), "x" !== ae && (me[2] += t, se._vy.update(t, !0)), n ? ee = ee || requestAnimationFrame(Ve) : Ve()
        }

        function Ye(e) {
            if (!Te(e, 1)) {
                var t = (e = M(e, s)).clientX,
                    r = e.clientY,
                    n = t - se.x,
                    o = r - se.y,
                    i = se.isDragging;
                se.x = t, se.y = r, (i || Math.abs(se.startX - t) >= a || Math.abs(se.startY - r) >= a) && (h && (re = !0), i || (se.isDragging = !0), Xe(n, o), i || d && d(se))
            }
        }

        function _e(e) {
            return e.touches && 1 < e.touches.length && (se.isGesturing = !0) && I(e, se.isDragging)
        }

        function af() {
            return (se.isGesturing = !1) || q(se)
        }

        function bf(e) {
            if (!Te(e)) {
                var t = ue(),
                    r = fe();
                We((t - pe) * G, (r - de) * G, 1), pe = t, de = r, l && te.restart(!0)
            }
        }

        function cf(e) {
            if (!Te(e)) {
                e = M(e, s), V && (oe = !0);
                var t = (1 === e.deltaMode ? r : 2 === e.deltaMode ? ke.innerHeight : 1) * f;
                We(e.deltaX * t, e.deltaY * t, 0), l && !Y && te.restart(!0)
            }
        }

        function df(e) {
            if (!Te(e)) {
                var t = e.clientX,
                    r = e.clientY,
                    n = t - se.x,
                    o = r - se.y;
                se.x = t, se.y = r, ne = !0, (n || o) && Xe(n, o)
            }
        }

        function ef(e) {
            se.event = e, D(se)
        }

        function ff(e) {
            se.event = e, R(se)
        }

        function gf(e) {
            return Te(e) || M(e, s) && j(se)
        }
        this.target = i = J(i) || Pe, this.vars = e, u = u && Me.utils.toArray(u), o = o || 1e-9, a = a || 0, f = f || 1, G = G || 1, t = t || "wheel,touch,pointer", n = !1 !== n, r = r || parseFloat(ke.getComputedStyle(Oe).lineHeight) || 22;
        var ee, te, re, ne, oe, ie, ae, se = this,
            le = 0,
            ce = 0,
            ue = K(i, He),
            fe = K(i, je),
            pe = ue(),
            de = fe(),
            ge = ~t.indexOf("touch") && !~t.indexOf("pointer") && "pointerdown" === Le[0],
            he = A(i),
            ve = i.ownerDocument || Ee,
            be = [0, 0, 0],
            me = [0, 0, 0],
            ye = 0,
            xe = se.onPress = function(e) {
                Te(e, 1) || e && e.button || (se.axis = ae = null, te.pause(), se.isPressed = !0, e = M(e), le = ce = 0, se.startX = se.x = e.clientX, se.startY = se.y = e.clientY, se._vx.reset(), se._vy.reset(), B(Y ? i : ve, Le[1], Ye, s, !0), se.deltaX = se.deltaY = 0, v && v(se))
            },
            we = se.onRelease = function(t) {
                if (!Te(t, 1)) {
                    C(Y ? i : ve, Le[1], Ye, !0);
                    var e = !isNaN(se.y - se.startY),
                        r = se.isDragging && (3 < Math.abs(se.x - se.startX) || 3 < Math.abs(se.y - se.startY)),
                        n = M(t);
                    !r && e && (se._vx.reset(), se._vy.reset(), s && Q && Me.delayedCall(.08, function() {
                        if (300 < Ne() - ye && !t.defaultPrevented)
                            if (t.target.click) t.target.click();
                            else if (ve.createEvent) {
                            var e = ve.createEvent("MouseEvents");
                            e.initMouseEvent("click", !0, !0, ke, 1, n.screenX, n.screenY, n.clientX, n.clientY, !1, !1, !1, !1, 0, null), t.target.dispatchEvent(e)
                        }
                    })), se.isDragging = se.isGesturing = se.isPressed = !1, l && !Y && te.restart(!0), g && r && g(se), b && b(se, r)
                }
            };
        te = se._dc = Me.delayedCall(c || .25, function onStopFunc() {
            se._vx.reset(), se._vy.reset(), te.pause(), l && l(se)
        }).pause(), se.deltaX = se.deltaY = 0, se._vx = L(0, 50, !0), se._vy = L(0, 50, !0), se.scrollX = ue, se.scrollY = fe, se.isDragging = se.isGesturing = se.isPressed = !1, ze(this), se.enable = function(e) {
            return se.isEnabled || (B(he ? ve : i, "scroll", F), 0 <= t.indexOf("scroll") && B(he ? ve : i, "scroll", bf, s, U), 0 <= t.indexOf("wheel") && B(i, "wheel", cf, s, U), (0 <= t.indexOf("touch") && Ae || 0 <= t.indexOf("pointer")) && (B(i, Le[0], xe, s, U), B(ve, Le[2], we), B(ve, Le[3], we), Q && B(i, "click", Se, !1, !0), j && B(i, "click", gf), I && B(ve, "gesturestart", _e), q && B(ve, "gestureend", af), D && B(i, Be + "enter", ef), R && B(i, Be + "leave", ff), z && B(i, Be + "move", df)), se.isEnabled = !0, e && e.type && xe(e), H && H(se)), se
        }, se.disable = function() {
            se.isEnabled && (Fe.filter(function(e) {
                return e !== se && A(e.target)
            }).length || C(he ? ve : i, "scroll", F), se.isPressed && (se._vx.reset(), se._vy.reset(), C(Y ? i : ve, Le[1], Ye, !0)), C(he ? ve : i, "scroll", bf, U), C(i, "wheel", cf, U), C(i, Le[0], xe, U), C(ve, Le[2], we), C(ve, Le[3], we), C(i, "click", Se, !0), C(i, "click", gf), C(ve, "gesturestart", _e), C(ve, "gestureend", af), C(i, Be + "enter", ef), C(i, Be + "leave", ff), C(i, Be + "move", df), se.isEnabled = se.isPressed = se.isDragging = !1, W && W(se))
        }, se.kill = se.revert = function() {
            se.disable();
            var e = Fe.indexOf(se);
            0 <= e && Fe.splice(e, 1), Re === se && (Re = 0)
        }, Fe.push(se), Y && A(i) && (Re = se), se.enable(p)
    }, function _createClass(e, t, r) {
        return t && _defineProperties(e.prototype, t), r && _defineProperties(e, r), e
    }(Observer, [{
        key: "velocityX",
        get: function get() {
            return this._vx.getVelocity()
        }
    }, {
        key: "velocityY",
        get: function get() {
            return this._vy.getVelocity()
        }
    }]), Observer);

    function Observer(e) {
        this.init(e)
    }
    k.version = "3.11.5", k.create = function(e) {
        return new k(e)
    }, k.register = P, k.getAll = function() {
        return Fe.slice()
    }, k.getById = function(t) {
        return Fe.filter(function(e) {
            return e.vars.id === t
        })[0]
    }, r() && Me.registerPlugin(k);

    function za() {
        return rt = 1
    }

    function Aa() {
        return rt = 0
    }

    function Ba(e) {
        return e
    }

    function Ca(e) {
        return Math.round(1e5 * e) / 1e5 || 0
    }

    function Da() {
        return "undefined" != typeof window
    }

    function Ea() {
        return Je || Da() && (Je = window.gsap) && Je.registerPlugin && Je
    }

    function Fa(e) {
        return !!~l.indexOf(e)
    }

    function Ga(e) {
        return z(e, "getBoundingClientRect") || (Fa(e) ? function() {
            return Lt.width = Ke.innerWidth, Lt.height = Ke.innerHeight, Lt
        } : function() {
            return Ct(e)
        })
    }

    function Ja(e, t) {
        var r = t.s,
            n = t.d2,
            o = t.d,
            i = t.a;
        return Math.max(0, (r = "scroll" + n) && (i = z(e, r)) ? i() - Ga(e)()[o] : Fa(e) ? (Ue[r] || Qe[r]) - (Ke["inner" + n] || Ue["client" + n] || Qe["client" + n]) : e[r] - e["offset" + n])
    }

    function Ka(e, t) {
        for (var r = 0; r < g.length; r += 3) t && !~t.indexOf(g[r + 1]) || e(g[r], g[r + 1], g[r + 2])
    }

    function La(e) {
        return "string" == typeof e
    }

    function Ma(e) {
        return "function" == typeof e
    }

    function Na(e) {
        return "number" == typeof e
    }

    function Oa(e) {
        return "object" == typeof e
    }

    function Pa(e, t, r) {
        return e && e.progress(t ? 0 : 1) && r && e.pause()
    }

    function Qa(e, t) {
        if (e.enabled) {
            var r = t(e);
            r && r.totalTime && (e.callbackAnimation = r)
        }
    }

    function fb(e) {
        return Ke.getComputedStyle(e)
    }

    function hb(e, t) {
        for (var r in t) r in e || (e[r] = t[r]);
        return e
    }

    function jb(e, t) {
        var r = t.d2;
        return e["offset" + r] || e["client" + r] || 0
    }

    function kb(e) {
        var t, r = [],
            n = e.labels,
            o = e.duration();
        for (t in n) r.push(n[t] / o);
        return r
    }

    function mb(o) {
        var i = Je.utils.snap(o),
            a = Array.isArray(o) && o.slice(0).sort(function(e, t) {
                return e - t
            });
        return a ? function(e, t, r) {
            var n;
            if (void 0 === r && (r = .001), !t) return i(e);
            if (0 < t) {
                for (e -= r, n = 0; n < a.length; n++)
                    if (a[n] >= e) return a[n];
                return a[n - 1]
            }
            for (n = a.length, e += r; n--;)
                if (a[n] <= e) return a[n];
            return a[0]
        } : function(e, t, r) {
            void 0 === r && (r = .001);
            var n = i(e);
            return !t || Math.abs(n - e) < r || n - e < 0 == t < 0 ? n : i(t < 0 ? e - o : e + o)
        }
    }

    function ob(t, r, e, n) {
        return e.split(",").forEach(function(e) {
            return t(r, e, n)
        })
    }

    function pb(e, t, r, n, o) {
        return e.addEventListener(t, r, {
            passive: !n,
            capture: !!o
        })
    }

    function qb(e, t, r, n) {
        return e.removeEventListener(t, r, !!n)
    }

    function rb(e, t, r) {
        (r = r && r.wheelHandler) && (e(t, "wheel", r), e(t, "touchmove", r))
    }

    function vb(e, t) {
        if (La(e)) {
            var r = e.indexOf("="),
                n = ~r ? (e.charAt(r - 1) + 1) * parseFloat(e.substr(r + 1)) : 0;
            ~r && (e.indexOf("%") > r && (n *= t / 100), e = e.substr(0, r - 1)), e = n + (e in R ? R[e] * t : ~e.indexOf("%") ? parseFloat(e) * t / 100 : parseFloat(e) || 0)
        }
        return e
    }

    function wb(e, t, r, n, o, i, a, s) {
        var l = o.startColor,
            c = o.endColor,
            u = o.fontSize,
            f = o.indent,
            p = o.fontWeight,
            d = Ge.createElement("div"),
            g = Fa(r) || "fixed" === z(r, "pinType"),
            h = -1 !== e.indexOf("scroller"),
            v = g ? Qe : r,
            b = -1 !== e.indexOf("start"),
            m = b ? l : c,
            y = "border-color:" + m + ";font-size:" + u + ";color:" + m + ";font-weight:" + p + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
        return y += "position:" + ((h || s) && g ? "fixed;" : "absolute;"), !h && !s && g || (y += (n === je ? S : T) + ":" + (i + parseFloat(f)) + "px;"), a && (y += "box-sizing:border-box;text-align:left;width:" + a.offsetWidth + "px;"), d._isStart = b, d.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")), d.style.cssText = y, d.innerText = t || 0 === t ? e + "-" + t : e, v.children[0] ? v.insertBefore(d, v.children[0]) : v.appendChild(d), d._offset = d["offset" + n.op.d2], X(d, 0, n, b), d
    }

    function Bb() {
        return 34 < pt() - dt && (w = w || requestAnimationFrame(W))
    }

    function Cb() {
        v && v.isPressed && !(v.startX > Qe.clientWidth) || (Ie.cache++, v ? w = w || requestAnimationFrame(W) : W(), dt || q("scrollStart"), dt = pt())
    }

    function Db() {
        y = Ke.innerWidth, m = Ke.innerHeight
    }

    function Eb() {
        Ie.cache++, tt || h || Ge.fullscreenElement || Ge.webkitFullscreenElement || b && y === Ke.innerWidth && !(Math.abs(Ke.innerHeight - m) > .25 * Ke.innerHeight) || c.restart(!0)
    }

    function Hb() {
        return qb($, "scrollEnd", Hb) || Bt(!0)
    }

    function Kb(e) {
        for (var t = 0; t < V.length; t += 5)(!e || V[t + 4] && V[t + 4].query === e) && (V[t].style.cssText = V[t + 1], V[t].getBBox && V[t].setAttribute("transform", V[t + 2] || ""), V[t + 3].uncache = 1)
    }

    function Lb(e, t) {
        var r;
        for (nt = 0; nt < Pt.length; nt++) !(r = Pt[nt]) || t && r._ctx !== t || (e ? r.kill(1) : r.revert(!0, !0));
        t && Kb(t), t || q("revert")
    }

    function Mb(e, t) {
        Ie.cache++, !t && lt || Ie.forEach(function(e) {
            return Ma(e) && e.cacheID++ && (e.rec = 0)
        }), La(e) && (Ke.history.scrollRestoration = x = e)
    }

    function Zb(e, t, r, n) {
        if (!e._gsap.swappedIn) {
            for (var o, i = j.length, a = t.style, s = e.style; i--;) a[o = j[i]] = r[o];
            a.position = "absolute" === r.position ? "absolute" : "relative", "inline" === r.display && (a.display = "inline-block"), s[T] = s[S] = "auto", a.flexBasis = r.flexBasis || "auto", a.overflow = "visible", a.boxSizing = "border-box", a[vt] = jb(e, He) + Mt, a[bt] = jb(e, je) + Mt, a[_t] = s[St] = s.top = s.left = "0", Rt(n), s[vt] = s.maxWidth = r[vt], s[bt] = s.maxHeight = r[bt], s[_t] = r[_t], e.parentNode !== t && (e.parentNode.insertBefore(t, e), t.appendChild(e)), e._gsap.swappedIn = !0
        }
    }

    function ac(e) {
        for (var t = U.length, r = e.style, n = [], o = 0; o < t; o++) n.push(U[o], r[U[o]]);
        return n.t = e, n
    }

    function dc(e, t, r, n, o, i, a, s, l, c, u, f, p) {
        Ma(e) && (e = e(s)), La(e) && "max" === e.substr(0, 3) && (e = f + ("=" === e.charAt(4) ? vb("0" + e.substr(3), r) : 0));
        var d, g, h, v = p ? p.time() : 0;
        if (p && p.seek(0), Na(e)) p && (e = Je.utils.mapRange(p.scrollTrigger.start, p.scrollTrigger.end, 0, f, e)), a && X(a, r, n, !0);
        else {
            Ma(t) && (t = t(s));
            var b, m, y, x, w = (e || "0").split(" ");
            h = J(t) || Qe, (b = Ct(h) || {}) && (b.left || b.top) || "none" !== fb(h).display || (x = h.style.display, h.style.display = "block", b = Ct(h), x ? h.style.display = x : h.style.removeProperty("display")), m = vb(w[0], b[n.d]), y = vb(w[1] || "0", r), e = b[n.p] - l[n.p] - c + m + o - y, a && X(a, y, n, r - y < 20 || a._isStart && 20 < y), r -= r - y
        }
        if (i) {
            var _ = e + r,
                S = i._isStart;
            d = "scroll" + n.d2, X(i, _, n, S && 20 < _ || !S && (u ? Math.max(Qe[d], Ue[d]) : i.parentNode[d]) <= _ + 1), u && (l = Ct(a), u && (i.style[n.op.p] = l[n.op.p] - n.op.m - i._offset + Mt))
        }
        return p && h && (d = Ct(h), p.seek(f), g = Ct(h), p._caScrollDist = d[n.p] - g[n.p], e = e / p._caScrollDist * f), p && p.seek(v), p ? e : Math.round(e)
    }

    function fc(e, t, r, n) {
        if (e.parentNode !== t) {
            var o, i, a = e.style;
            if (t === Qe) {
                for (o in e._stOrig = a.cssText, i = fb(e)) + o || Z.test(o) || !i[o] || "string" != typeof a[o] || "0" === o || (a[o] = i[o]);
                a.top = r, a.left = n
            } else a.cssText = e._stOrig;
            Je.core.getCache(e).uncache = 1, t.appendChild(e)
        }
    }

    function gc(r, e, n) {
        var o = e,
            i = o;
        return function(e) {
            var t = Math.round(r());
            return t !== o && t !== i && 3 < Math.abs(t - o) && 3 < Math.abs(t - i) && (e = t, n && n()), i = o, o = e
        }
    }

    function hc(c, e) {
        function _j(e, t, r, n, o) {
            var i = _j.tween,
                a = t.onComplete,
                s = {};
            r = r || u();
            var l = gc(u, r, function() {
                i.kill(), _j.tween = 0
            });
            return o = n && o || 0, n = n || e - r, i && i.kill(), t[f] = e, (t.modifiers = s)[f] = function() {
                return l(r + n * i.ratio + o * i.ratio * i.ratio)
            }, t.onUpdate = function() {
                Ie.cache++, W()
            }, t.onComplete = function() {
                _j.tween = 0, a && a.call(i)
            }, i = _j.tween = Je.to(c, t)
        }
        var u = K(c, e),
            f = "_scroll" + e.p2;
        return (c[f] = u).wheelHandler = function() {
            return _j.tween && _j.tween.kill() && (_j.tween = 0)
        }, pb(c, "wheel", u.wheelHandler), $.isTouch && pb(c, "touchmove", u.wheelHandler), _j
    }
    var Je, s, Ke, Ge, Ue, Qe, l, c, Ze, $e, et, u, tt, rt, f, nt, p, d, g, ot, it, h, v, b, m, y, E, at, x, st, w, lt, ct, ut, ft = 1,
        pt = Date.now,
        _ = pt(),
        dt = 0,
        gt = 0,
        ht = Math.abs,
        S = "right",
        T = "bottom",
        vt = "width",
        bt = "height",
        mt = "Right",
        yt = "Left",
        xt = "Top",
        wt = "Bottom",
        _t = "padding",
        St = "margin",
        Tt = "Width",
        D = "Height",
        Mt = "px",
        Ct = function _getBounds(e, t) {
            var r = t && "matrix(1, 0, 0, 1, 0, 0)" !== fb(e)[f] && Je.to(e, {
                    x: 0,
                    y: 0,
                    xPercent: 0,
                    yPercent: 0,
                    rotation: 0,
                    rotationX: 0,
                    rotationY: 0,
                    scale: 1,
                    skewX: 0,
                    skewY: 0
                }).progress(1),
                n = e.getBoundingClientRect();
            return r && r.progress(0).kill(), n
        },
        kt = {
            startColor: "green",
            endColor: "red",
            indent: 0,
            fontSize: "16px",
            fontWeight: "normal"
        },
        Et = {
            toggleActions: "play",
            anticipatePin: 0
        },
        R = {
            top: 0,
            left: 0,
            center: .5,
            bottom: 1,
            right: 1
        },
        X = function _positionMarker(e, t, r, n) {
            var o = {
                    display: "block"
                },
                i = r[n ? "os2" : "p2"],
                a = r[n ? "p2" : "os2"];
            e._isFlipped = n, o[r.a + "Percent"] = n ? -100 : 0, o[r.a] = n ? "1px" : 0, o["border" + i + Tt] = 1, o["border" + a + Tt] = 0, o[r.p] = t + "px", Je.set(e, o)
        },
        Pt = [],
        Ot = {},
        Y = {},
        I = [],
        q = function _dispatch(e) {
            return Y[e] && Y[e].map(function(e) {
                return e()
            }) || I
        },
        V = [],
        At = 0,
        Bt = function _refreshAll(e, t) {
            if (!dt || e) {
                lt = $.isRefreshing = !0, Ie.forEach(function(e) {
                    return Ma(e) && e.cacheID++ && (e.rec = e())
                });
                var r = q("refreshInit");
                ot && $.sort(), t || Lb(), Ie.forEach(function(e) {
                    Ma(e) && (e.smooth && (e.target.style.scrollBehavior = "auto"), e(0))
                }), Pt.slice(0).forEach(function(e) {
                    return e.refresh()
                }), Pt.forEach(function(e, t) {
                    if (e._subPinOffset && e.pin) {
                        var r = e.vars.horizontal ? "offsetWidth" : "offsetHeight",
                            n = e.pin[r];
                        e.revert(!0, 1), e.adjustPinSpacing(e.pin[r] - n), e.refresh()
                    }
                }), Pt.forEach(function(e) {
                    return "max" === e.vars.end && e.setPositions(e.start, Math.max(e.start + 1, Ja(e.scroller, e._dir)))
                }), r.forEach(function(e) {
                    return e && e.render && e.render(-1)
                }), Ie.forEach(function(e) {
                    Ma(e) && (e.smooth && requestAnimationFrame(function() {
                        return e.target.style.scrollBehavior = "smooth"
                    }), e.rec && e(e.rec))
                }), Mb(x, 1), c.pause(), At++, W(lt = 2), Pt.forEach(function(e) {
                    return Ma(e.vars.onRefresh) && e.vars.onRefresh(e)
                }), lt = $.isRefreshing = !1, q("refresh")
            } else pb($, "scrollEnd", Hb)
        },
        H = 0,
        Dt = 1,
        W = function _updateAll(e) {
            if (!lt || 2 === e) {
                $.isUpdating = !0, ut && ut.update(0);
                var t = Pt.length,
                    r = pt(),
                    n = 50 <= r - _,
                    o = t && Pt[0].scroll();
                if (Dt = o < H ? -1 : 1, lt || (H = o), n && (dt && !rt && 200 < r - dt && (dt = 0, q("scrollEnd")), et = _, _ = r), Dt < 0) {
                    for (nt = t; 0 < nt--;) Pt[nt] && Pt[nt].update(0, n);
                    Dt = 1
                } else
                    for (nt = 0; nt < t; nt++) Pt[nt] && Pt[nt].update(0, n);
                $.isUpdating = !1
            }
            w = 0
        },
        j = ["left", "top", T, S, St + wt, St + mt, St + xt, St + yt, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"],
        U = j.concat([vt, bt, "boxSizing", "max" + Tt, "max" + D, "position", St, _t, _t + xt, _t + mt, _t + wt, _t + yt]),
        Q = /([A-Z])/g,
        Rt = function _setState(e) {
            if (e) {
                var t, r, n = e.t.style,
                    o = e.length,
                    i = 0;
                for ((e.t._gsap || Je.core.getCache(e.t)).uncache = 1; i < o; i += 2) r = e[i + 1], t = e[i], r ? n[t] = r : n[t] && n.removeProperty(t.replace(Q, "-$1").toLowerCase())
            }
        },
        Lt = {
            left: 0,
            top: 0
        },
        Z = /(webkit|moz|length|cssText|inset)/i,
        $ = (ScrollTrigger.prototype.init = function init(M, C) {
            if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), gt) {
                var k, n, d, E, P, O, A, B, D, R, L, e, F, X, Y, I, q, t, N, b, V, H, m, W, y, j, x, r, w, _, G, o, g, U, Q, Z, $, S, i, T = (M = hb(La(M) || Na(M) || M.nodeType ? {
                        trigger: M
                    } : M, Et)).onUpdate,
                    ee = M.toggleClass,
                    a = M.id,
                    te = M.onToggle,
                    re = M.onRefresh,
                    ne = M.scrub,
                    oe = M.trigger,
                    ie = M.pin,
                    ae = M.pinSpacing,
                    se = M.invalidateOnRefresh,
                    le = M.anticipatePin,
                    s = M.onScrubComplete,
                    h = M.onSnapComplete,
                    ce = M.once,
                    ue = M.snap,
                    fe = M.pinReparent,
                    l = M.pinSpacer,
                    pe = M.containerAnimation,
                    de = M.fastScrollEnd,
                    ge = M.preventOverlaps,
                    he = M.horizontal || M.containerAnimation && !1 !== M.horizontal ? He : je,
                    ve = !ne && 0 !== ne,
                    be = J(M.scroller || Ke),
                    c = Je.core.getCache(be),
                    me = Fa(be),
                    ye = "fixed" === ("pinType" in M ? M.pinType : z(be, "pinType") || me && "fixed"),
                    xe = [M.onEnter, M.onLeave, M.onEnterBack, M.onLeaveBack],
                    we = ve && M.toggleActions.split(" "),
                    u = "markers" in M ? M.markers : Et.markers,
                    _e = me ? 0 : parseFloat(fb(be)["border" + he.p2 + Tt]) || 0,
                    Se = this,
                    Te = M.onRefreshInit && function() {
                        return M.onRefreshInit(Se)
                    },
                    Me = function _getSizeFunc(e, t, r) {
                        var n = r.d,
                            o = r.d2,
                            i = r.a;
                        return (i = z(e, "getBoundingClientRect")) ? function() {
                            return i()[n]
                        } : function() {
                            return (t ? Ke["inner" + o] : e["client" + o]) || 0
                        }
                    }(be, me, he),
                    Ce = function _getOffsetsFunc(e, t) {
                        return !t || ~qe.indexOf(e) ? Ga(e) : function() {
                            return Lt
                        }
                    }(be, me),
                    ke = 0,
                    Ee = 0,
                    Pe = K(be, he);
                if (at(Se), Se._dir = he, le *= 45, Se.scroller = be, Se.scroll = pe ? pe.time.bind(pe) : Pe, E = Pe(), Se.vars = M, C = C || M.animation, "refreshPriority" in M && (ot = 1, -9999 === M.refreshPriority && (ut = Se)), c.tweenScroll = c.tweenScroll || {
                        top: hc(be, je),
                        left: hc(be, He)
                    }, Se.tweenTo = k = c.tweenScroll[he.p], Se.scrubDuration = function(e) {
                        (o = Na(e) && e) ? G ? G.duration(e) : G = Je.to(C, {
                            ease: "expo",
                            totalProgress: "+=0.001",
                            duration: o,
                            paused: !0,
                            onComplete: function onComplete() {
                                return s && s(Se)
                            }
                        }): (G && G.progress(1).kill(), G = 0)
                    }, C && (C.vars.lazy = !1, C._initted || !1 !== C.vars.immediateRender && !1 !== M.immediateRender && C.duration() && C.render(0, !0, !0), Se.animation = C.pause(), (C.scrollTrigger = Se).scrubDuration(ne), G && G.resetTo && G.resetTo("totalProgress", 0), w = 0, a = a || C.vars.id), Pt.push(Se), ue && (Oa(ue) && !ue.push || (ue = {
                        snapTo: ue
                    }), "scrollBehavior" in Qe.style && Je.set(me ? [Qe, Ue] : be, {
                        scrollBehavior: "auto"
                    }), Ie.forEach(function(e) {
                        return Ma(e) && e.target === (me ? Ge.scrollingElement || Ue : be) && (e.smooth = !1)
                    }), d = Ma(ue.snapTo) ? ue.snapTo : "labels" === ue.snapTo ? function _getClosestLabel(t) {
                        return function(e) {
                            return Je.utils.snap(kb(t), e)
                        }
                    }(C) : "labelsDirectional" === ue.snapTo ? function _getLabelAtDirection(r) {
                        return function(e, t) {
                            return mb(kb(r))(e, t.direction)
                        }
                    }(C) : !1 !== ue.directional ? function(e, t) {
                        return mb(ue.snapTo)(e, pt() - Ee < 500 ? 0 : t.direction)
                    } : Je.utils.snap(ue.snapTo), g = ue.duration || {
                        min: .1,
                        max: 2
                    }, g = Oa(g) ? $e(g.min, g.max) : $e(g, g), U = Je.delayedCall(ue.delay || o / 2 || .1, function() {
                        var e = Pe(),
                            t = pt() - Ee < 500,
                            r = k.tween;
                        if (!(t || Math.abs(Se.getVelocity()) < 10) || r || rt || ke === e) Se.isActive && ke !== e && U.restart(!0);
                        else {
                            var n = (e - O) / F,
                                o = C && !ve ? C.totalProgress() : n,
                                i = t ? 0 : (o - _) / (pt() - et) * 1e3 || 0,
                                a = Je.utils.clamp(-n, 1 - n, ht(i / 2) * i / .185),
                                s = n + (!1 === ue.inertia ? 0 : a),
                                l = $e(0, 1, d(s, Se)),
                                c = Math.round(O + l * F),
                                u = ue.onStart,
                                f = ue.onInterrupt,
                                p = ue.onComplete;
                            if (e <= A && O <= e && c !== e) {
                                if (r && !r._initted && r.data <= ht(c - e)) return;
                                !1 === ue.inertia && (a = l - n), k(c, {
                                    duration: g(ht(.185 * Math.max(ht(s - o), ht(l - o)) / i / .05 || 0)),
                                    ease: ue.ease || "power3",
                                    data: ht(c - e),
                                    onInterrupt: function onInterrupt() {
                                        return U.restart(!0) && f && f(Se)
                                    },
                                    onComplete: function onComplete() {
                                        Se.update(), ke = Pe(), w = _ = C && !ve ? C.totalProgress() : Se.progress, h && h(Se), p && p(Se)
                                    }
                                }, e, a * F, c - e - a * F), u && u(Se, k.tween)
                            }
                        }
                    }).pause()), a && (Ot[a] = Se), i = (i = (oe = Se.trigger = J(oe || ie)) && oe._gsap && oe._gsap.stRevert) && i(Se), ie = !0 === ie ? oe : J(ie), La(ee) && (ee = {
                        targets: oe,
                        className: ee
                    }), ie && (!1 === ae || ae === St || (ae = !(!ae && ie.parentNode && ie.parentNode.style && "flex" === fb(ie.parentNode).display) && _t), Se.pin = ie, (n = Je.core.getCache(ie)).spacer ? X = n.pinState : (l && ((l = J(l)) && !l.nodeType && (l = l.current || l.nativeElement), n.spacerIsNative = !!l, l && (n.spacerState = ac(l))), n.spacer = q = l || Ge.createElement("div"), q.classList.add("pin-spacer"), a && q.classList.add("pin-spacer-" + a), n.pinState = X = ac(ie)), !1 !== M.force3D && Je.set(ie, {
                        force3D: !0
                    }), Se.spacer = q = n.spacer, r = fb(ie), m = r[ae + he.os2], N = Je.getProperty(ie), b = Je.quickSetter(ie, he.a, Mt), Zb(ie, q, r), I = ac(ie)), u) {
                    e = Oa(u) ? hb(u, kt) : kt, R = wb("scroller-start", a, be, he, e, 0), L = wb("scroller-end", a, be, he, e, 0, R), t = R["offset" + he.op.d2];
                    var f = J(z(be, "content") || be);
                    B = this.markerStart = wb("start", a, f, he, e, t, 0, pe), D = this.markerEnd = wb("end", a, f, he, e, t, 0, pe), pe && (S = Je.quickSetter([B, D], he.a, Mt)), ye || qe.length && !0 === z(be, "fixedMarkers") || (function _makePositionable(e) {
                        var t = fb(e).position;
                        e.style.position = "absolute" === t || "fixed" === t ? t : "relative"
                    }(me ? Qe : be), Je.set([R, L], {
                        force3D: !0
                    }), y = Je.quickSetter(R, he.a, Mt), x = Je.quickSetter(L, he.a, Mt))
                }
                if (pe) {
                    var p = pe.vars.onUpdate,
                        v = pe.vars.onUpdateParams;
                    pe.eventCallback("onUpdate", function() {
                        Se.update(0, 0, 1), p && p.apply(pe, v || [])
                    })
                }
                Se.previous = function() {
                    return Pt[Pt.indexOf(Se) - 1]
                }, Se.next = function() {
                    return Pt[Pt.indexOf(Se) + 1]
                }, Se.revert = function(e, t) {
                    if (!t) return Se.kill(!0);
                    var r = !1 !== e || !Se.enabled,
                        n = tt;
                    r !== Se.isReverted && (r && (Z = Math.max(Pe(), Se.scroll.rec || 0), Q = Se.progress, $ = C && C.progress()), B && [B, D, R, L].forEach(function(e) {
                        return e.style.display = r ? "none" : "block"
                    }), r && (tt = Se).update(r), !ie || fe && Se.isActive || (r ? function _swapPinOut(e, t, r) {
                        Rt(r);
                        var n = e._gsap;
                        if (n.spacerIsNative) Rt(n.spacerState);
                        else if (e._gsap.swappedIn) {
                            var o = t.parentNode;
                            o && (o.insertBefore(e, t), o.removeChild(t))
                        }
                        e._gsap.swappedIn = !1
                    }(ie, q, X) : Zb(ie, q, fb(ie), W)), r || Se.update(r), tt = n, Se.isReverted = r)
                }, Se.refresh = function(e, t) {
                    if (!tt && Se.enabled || t)
                        if (ie && e && dt) pb(ScrollTrigger, "scrollEnd", Hb);
                        else {
                            !lt && Te && Te(Se), tt = Se, Ee = pt(), k.tween && (k.tween.kill(), k.tween = 0), G && G.pause(), se && C && C.revert({
                                kill: !1
                            }).invalidate(), Se.isReverted || Se.revert(!0, !0), Se._subPinOffset = !1;
                            for (var r, n, o, i, a, s, l, c, u, f, p, d = Me(), g = Ce(), h = pe ? pe.duration() : Ja(be, he), v = F <= .01, b = 0, m = 0, y = M.end, x = M.endTrigger || oe, w = M.start || (0 !== M.start && oe ? ie ? "0 0" : "0 100%" : 0), _ = Se.pinnedContainer = M.pinnedContainer && J(M.pinnedContainer), S = oe && Math.max(0, Pt.indexOf(Se)) || 0, T = S; T--;)(s = Pt[T]).end || s.refresh(0, 1) || (tt = Se), !(l = s.pin) || l !== oe && l !== ie && l !== _ || s.isReverted || ((f = f || []).unshift(s), s.revert(!0, !0)), s !== Pt[T] && (S--, T--);
                            for (Ma(w) && (w = w(Se)), O = dc(w, oe, d, he, Pe(), B, R, Se, g, _e, ye, h, pe) || (ie ? -.001 : 0), Ma(y) && (y = y(Se)), La(y) && !y.indexOf("+=") && (~y.indexOf(" ") ? y = (La(w) ? w.split(" ")[0] : "") + y : (b = vb(y.substr(2), d), y = La(w) ? w : (pe ? Je.utils.mapRange(0, pe.duration(), pe.scrollTrigger.start, pe.scrollTrigger.end, O) : O) + b, x = oe)), A = Math.max(O, dc(y || (x ? "100% 0" : h), x, d, he, Pe() + b, D, L, Se, g, _e, ye, h, pe)) || -.001, F = A - O || (O -= .01) && .001, b = 0, T = S; T--;)(l = (s = Pt[T]).pin) && s.start - s._pinPush <= O && !pe && 0 < s.end && (r = s.end - s.start, (l === oe && s.start - s._pinPush < O || l === _) && !Na(w) && (b += r * (1 - s.progress)), l === ie && (m += r));
                            if (O += b, A += b, v && (Q = Je.utils.clamp(0, 1, Je.utils.normalize(O, A, Z))), Se._pinPush = m, B && b && ((r = {})[he.a] = "+=" + b, _ && (r[he.p] = "-=" + Pe()), Je.set([B, D], r)), ie) r = fb(ie), i = he === je, o = Pe(), V = parseFloat(N(he.a)) + m, !h && 1 < A && ((p = {
                                style: p = (me ? Ge.scrollingElement || Ue : be).style,
                                value: p["overflow" + he.a.toUpperCase()]
                            }).style["overflow" + he.a.toUpperCase()] = "scroll"), Zb(ie, q, r), I = ac(ie), n = Ct(ie, !0), c = ye && K(be, i ? He : je)(), ae && ((W = [ae + he.os2, F + m + Mt]).t = q, (T = ae === _t ? jb(ie, he) + F + m : 0) && W.push(he.d, T + Mt), Rt(W), _ && Pt.forEach(function(e) {
                                e.pin === _ && !1 !== e.vars.pinSpacing && (e._subPinOffset = !0)
                            }), ye && Pe(Z)), ye && ((a = {
                                top: n.top + (i ? o - O : c) + Mt,
                                left: n.left + (i ? c : o - O) + Mt,
                                boxSizing: "border-box",
                                position: "fixed"
                            })[vt] = a.maxWidth = Math.ceil(n.width) + Mt, a[bt] = a.maxHeight = Math.ceil(n.height) + Mt, a[St] = a[St + xt] = a[St + mt] = a[St + wt] = a[St + yt] = "0", a[_t] = r[_t], a[_t + xt] = r[_t + xt], a[_t + mt] = r[_t + mt], a[_t + wt] = r[_t + wt], a[_t + yt] = r[_t + yt], Y = function _copyState(e, t, r) {
                                for (var n, o = [], i = e.length, a = r ? 8 : 0; a < i; a += 2) n = e[a], o.push(n, n in t ? t[n] : e[a + 1]);
                                return o.t = e.t, o
                            }(X, a, fe), lt && Pe(0)), C ? (u = C._initted, it(1), C.render(C.duration(), !0, !0), H = N(he.a) - V + F + m, j = 1 < Math.abs(F - H), ye && j && Y.splice(Y.length - 2, 2), C.render(0, !0, !0), u || C.invalidate(!0), C.parent || C.totalTime(C.totalTime()), it(0)) : H = F, p && (p.value ? p.style["overflow" + he.a.toUpperCase()] = p.value : p.style.removeProperty("overflow-" + he.a));
                            else if (oe && Pe() && !pe)
                                for (n = oe.parentNode; n && n !== Qe;) n._pinOffset && (O -= n._pinOffset, A -= n._pinOffset), n = n.parentNode;
                            f && f.forEach(function(e) {
                                return e.revert(!1, !0)
                            }), Se.start = O, Se.end = A, E = P = lt ? Z : Pe(), pe || lt || (E < Z && Pe(Z), Se.scroll.rec = 0), Se.revert(!1, !0), U && (ke = -1, Se.isActive && Pe(O + F * Q), U.restart(!0)), tt = 0, C && ve && (C._initted || $) && C.progress() !== $ && C.progress($, !0).render(C.time(), !0, !0), (v || Q !== Se.progress || pe) && (C && !ve && C.totalProgress(pe && O < -.001 && !Q ? Je.utils.normalize(O, A, 0) : Q, !0), Se.progress = (E - O) / F === Q ? 0 : Q), ie && ae && (q._pinOffset = Math.round(Se.progress * H)), G && G.invalidate(), re && !lt && re(Se)
                        }
                }, Se.getVelocity = function() {
                    return (Pe() - P) / (pt() - et) * 1e3 || 0
                }, Se.endAnimation = function() {
                    Pa(Se.callbackAnimation), C && (G ? G.progress(1) : C.paused() ? ve || Pa(C, Se.direction < 0, 1) : Pa(C, C.reversed()))
                }, Se.labelToScroll = function(e) {
                    return C && C.labels && (O || Se.refresh() || O) + C.labels[e] / C.duration() * F || 0
                }, Se.getTrailing = function(t) {
                    var e = Pt.indexOf(Se),
                        r = 0 < Se.direction ? Pt.slice(0, e).reverse() : Pt.slice(e + 1);
                    return (La(t) ? r.filter(function(e) {
                        return e.vars.preventOverlaps === t
                    }) : r).filter(function(e) {
                        return 0 < Se.direction ? e.end <= O : e.start >= A
                    })
                }, Se.update = function(e, t, r) {
                    if (!pe || r || e) {
                        var n, o, i, a, s, l, c, u = !0 === lt ? Z : Se.scroll(),
                            f = e ? 0 : (u - O) / F,
                            p = f < 0 ? 0 : 1 < f ? 1 : f || 0,
                            d = Se.progress;
                        if (t && (P = E, E = pe ? Pe() : u, ue && (_ = w, w = C && !ve ? C.totalProgress() : p)), le && !p && ie && !tt && !ft && dt && O < u + (u - P) / (pt() - et) * le && (p = 1e-4), p !== d && Se.enabled) {
                            if (a = (s = (n = Se.isActive = !!p && p < 1) != (!!d && d < 1)) || !!p != !!d, Se.direction = d < p ? 1 : -1, Se.progress = p, a && !tt && (o = p && !d ? 0 : 1 === p ? 1 : 1 === d ? 2 : 3, ve && (i = !s && "none" !== we[o + 1] && we[o + 1] || we[o], c = C && ("complete" === i || "reset" === i || i in C))), ge && (s || c) && (c || ne || !C) && (Ma(ge) ? ge(Se) : Se.getTrailing(ge).forEach(function(e) {
                                    return e.endAnimation()
                                })), ve || (!G || tt || ft ? C && C.totalProgress(p, !!tt) : (G._dp._time - G._start !== G._time && G.render(G._dp._time - G._start), G.resetTo ? G.resetTo("totalProgress", p, C._tTime / C._tDur) : (G.vars.totalProgress = p, G.invalidate().restart()))), ie)
                                if (e && ae && (q.style[ae + he.os2] = m), ye) {
                                    if (a) {
                                        if (l = !e && d < p && u < A + 1 && u + 1 >= Ja(be, he), fe)
                                            if (e || !n && !l) fc(ie, q);
                                            else {
                                                var g = Ct(ie, !0),
                                                    h = u - O;
                                                fc(ie, Qe, g.top + (he === je ? h : 0) + Mt, g.left + (he === je ? 0 : h) + Mt)
                                            } Rt(n || l ? Y : I), j && p < 1 && n || b(V + (1 !== p || l ? 0 : H))
                                    }
                                } else b(Ca(V + H * p));
                            !ue || k.tween || tt || ft || U.restart(!0), ee && (s || ce && p && (p < 1 || !st)) && Ze(ee.targets).forEach(function(e) {
                                return e.classList[n || ce ? "add" : "remove"](ee.className)
                            }), !T || ve || e || T(Se), a && !tt ? (ve && (c && ("complete" === i ? C.pause().totalProgress(1) : "reset" === i ? C.restart(!0).pause() : "restart" === i ? C.restart(!0) : C[i]()), T && T(Se)), !s && st || (te && s && Qa(Se, te), xe[o] && Qa(Se, xe[o]), ce && (1 === p ? Se.kill(!1, 1) : xe[o] = 0), s || xe[o = 1 === p ? 1 : 3] && Qa(Se, xe[o])), de && !n && Math.abs(Se.getVelocity()) > (Na(de) ? de : 2500) && (Pa(Se.callbackAnimation), G ? G.progress(1) : Pa(C, "reverse" === i ? 1 : !p, 1))) : ve && T && !tt && T(Se)
                        }
                        if (x) {
                            var v = pe ? u / pe.duration() * (pe._caScrollDist || 0) : u;
                            y(v + (R._isFlipped ? 1 : 0)), x(v)
                        }
                        S && S(-u / pe.duration() * (pe._caScrollDist || 0))
                    }
                }, Se.enable = function(e, t) {
                    Se.enabled || (Se.enabled = !0, pb(be, "resize", Eb), pb(me ? Ge : be, "scroll", Cb), Te && pb(ScrollTrigger, "refreshInit", Te), !1 !== e && (Se.progress = Q = 0, E = P = ke = Pe()), !1 !== t && Se.refresh())
                }, Se.getTween = function(e) {
                    return e && k ? k.tween : G
                }, Se.setPositions = function(e, t) {
                    ie && (V += e - O, H += t - e - F, ae === _t && Se.adjustPinSpacing(t - e - F)), Se.start = O = e, Se.end = A = t, F = t - e, Se.update()
                }, Se.adjustPinSpacing = function(e) {
                    if (W && e) {
                        var t = W.indexOf(he.d) + 1;
                        W[t] = parseFloat(W[t]) + e + Mt, W[1] = parseFloat(W[1]) + e + Mt, Rt(W)
                    }
                }, Se.disable = function(e, t) {
                    if (Se.enabled && (!1 !== e && Se.revert(!0, !0), Se.enabled = Se.isActive = !1, t || G && G.pause(), Z = 0, n && (n.uncache = 1), Te && qb(ScrollTrigger, "refreshInit", Te), U && (U.pause(), k.tween && k.tween.kill() && (k.tween = 0)), !me)) {
                        for (var r = Pt.length; r--;)
                            if (Pt[r].scroller === be && Pt[r] !== Se) return;
                        qb(be, "resize", Eb), qb(be, "scroll", Cb)
                    }
                }, Se.kill = function(e, t) {
                    Se.disable(e, t), G && !t && G.kill(), a && delete Ot[a];
                    var r = Pt.indexOf(Se);
                    0 <= r && Pt.splice(r, 1), r === nt && 0 < Dt && nt--, r = 0, Pt.forEach(function(e) {
                        return e.scroller === Se.scroller && (r = 1)
                    }), r || lt || (Se.scroll.rec = 0), C && (C.scrollTrigger = null, e && C.revert({
                        kill: !1
                    }), t || C.kill()), B && [B, D, R, L].forEach(function(e) {
                        return e.parentNode && e.parentNode.removeChild(e)
                    }), ut === Se && (ut = 0), ie && (n && (n.uncache = 1), r = 0, Pt.forEach(function(e) {
                        return e.pin === ie && r++
                    }), r || (n.spacer = 0)), M.onKill && M.onKill(Se)
                }, Se.enable(!1, !1), i && i(Se), C && C.add && !F ? Je.delayedCall(.01, function() {
                    return O || A || Se.refresh()
                }) && (F = .01) && (O = A = 0) : Se.refresh(), ie && function _queueRefreshAll() {
                    if (ct !== At) {
                        var e = ct = At;
                        requestAnimationFrame(function() {
                            return e === At && Bt(!0)
                        })
                    }
                }()
            } else this.update = this.refresh = this.kill = Ba
        }, ScrollTrigger.register = function register(e) {
            return s || (Je = e || Ea(), Da() && window.document && ScrollTrigger.enable(), s = gt), s
        }, ScrollTrigger.defaults = function defaults(e) {
            if (e)
                for (var t in e) Et[t] = e[t];
            return Et
        }, ScrollTrigger.disable = function disable(t, r) {
            gt = 0, Pt.forEach(function(e) {
                return e[r ? "kill" : "disable"](t)
            }), qb(Ke, "wheel", Cb), qb(Ge, "scroll", Cb), clearInterval(u), qb(Ge, "touchcancel", Ba), qb(Qe, "touchstart", Ba), ob(qb, Ge, "pointerdown,touchstart,mousedown", za), ob(qb, Ge, "pointerup,touchend,mouseup", Aa), c.kill(), Ka(qb);
            for (var e = 0; e < Ie.length; e += 3) rb(qb, Ie[e], Ie[e + 1]), rb(qb, Ie[e], Ie[e + 2])
        }, ScrollTrigger.enable = function enable() {
            if (Ke = window, Ge = document, Ue = Ge.documentElement, Qe = Ge.body, Je && (Ze = Je.utils.toArray, $e = Je.utils.clamp, at = Je.core.context || Ba, it = Je.core.suppressOverwrites || Ba, x = Ke.history.scrollRestoration || "auto", H = Ke.pageYOffset, Je.core.globals("ScrollTrigger", ScrollTrigger), Qe)) {
                gt = 1,
                    function _rafBugFix() {
                        return gt && requestAnimationFrame(_rafBugFix)
                    }(), k.register(Je), ScrollTrigger.isTouch = k.isTouch, E = k.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), pb(Ke, "wheel", Cb), l = [Ke, Ge, Ue, Qe], Je.matchMedia ? (ScrollTrigger.matchMedia = function(e) {
                        var t, r = Je.matchMedia();
                        for (t in e) r.add(t, e[t]);
                        return r
                    }, Je.addEventListener("matchMediaInit", function() {
                        return Lb()
                    }), Je.addEventListener("matchMediaRevert", function() {
                        return Kb()
                    }), Je.addEventListener("matchMedia", function() {
                        Bt(0, 1), q("matchMedia")
                    }), Je.matchMedia("(orientation: portrait)", function() {
                        return Db(), Db
                    })) : console.warn("Requires GSAP 3.11.0 or later"), Db(), pb(Ge, "scroll", Cb);
                var e, t, r = Qe.style,
                    n = r.borderTopStyle,
                    o = Je.core.Animation.prototype;
                for (o.revert || Object.defineProperty(o, "revert", {
                        value: function value() {
                            return this.time(-.01, !0)
                        }
                    }), r.borderTopStyle = "solid", e = Ct(Qe), je.m = Math.round(e.top + je.sc()) || 0, He.m = Math.round(e.left + He.sc()) || 0, n ? r.borderTopStyle = n : r.removeProperty("border-top-style"), u = setInterval(Bb, 250), Je.delayedCall(.5, function() {
                        return ft = 0
                    }), pb(Ge, "touchcancel", Ba), pb(Qe, "touchstart", Ba), ob(pb, Ge, "pointerdown,touchstart,mousedown", za), ob(pb, Ge, "pointerup,touchend,mouseup", Aa), f = Je.utils.checkPrefix("transform"), U.push(f), s = pt(), c = Je.delayedCall(.2, Bt).pause(), g = [Ge, "visibilitychange", function() {
                        var e = Ke.innerWidth,
                            t = Ke.innerHeight;
                        Ge.hidden ? (p = e, d = t) : p === e && d === t || Eb()
                    }, Ge, "DOMContentLoaded", Bt, Ke, "load", Bt, Ke, "resize", Eb], Ka(pb), Pt.forEach(function(e) {
                        return e.enable(0, 1)
                    }), t = 0; t < Ie.length; t += 3) rb(qb, Ie[t], Ie[t + 1]), rb(qb, Ie[t], Ie[t + 2])
            }
        }, ScrollTrigger.config = function config(e) {
            "limitCallbacks" in e && (st = !!e.limitCallbacks);
            var t = e.syncInterval;
            t && clearInterval(u) || (u = t) && setInterval(Bb, t), "ignoreMobileResize" in e && (b = 1 === ScrollTrigger.isTouch && e.ignoreMobileResize), "autoRefreshEvents" in e && (Ka(qb) || Ka(pb, e.autoRefreshEvents || "none"), h = -1 === (e.autoRefreshEvents + "").indexOf("resize"))
        }, ScrollTrigger.scrollerProxy = function scrollerProxy(e, t) {
            var r = J(e),
                n = Ie.indexOf(r),
                o = Fa(r);
            ~n && Ie.splice(n, o ? 6 : 2), t && (o ? qe.unshift(Ke, t, Qe, t, Ue, t) : qe.unshift(r, t))
        }, ScrollTrigger.clearMatchMedia = function clearMatchMedia(t) {
            Pt.forEach(function(e) {
                return e._ctx && e._ctx.query === t && e._ctx.kill(!0, !0)
            })
        }, ScrollTrigger.isInViewport = function isInViewport(e, t, r) {
            var n = (La(e) ? J(e) : e).getBoundingClientRect(),
                o = n[r ? vt : bt] * t || 0;
            return r ? 0 < n.right - o && n.left + o < Ke.innerWidth : 0 < n.bottom - o && n.top + o < Ke.innerHeight
        }, ScrollTrigger.positionInViewport = function positionInViewport(e, t, r) {
            La(e) && (e = J(e));
            var n = e.getBoundingClientRect(),
                o = n[r ? vt : bt],
                i = null == t ? o / 2 : t in R ? R[t] * o : ~t.indexOf("%") ? parseFloat(t) * o / 100 : parseFloat(t) || 0;
            return r ? (n.left + i) / Ke.innerWidth : (n.top + i) / Ke.innerHeight
        }, ScrollTrigger.killAll = function killAll(e) {
            if (Pt.slice(0).forEach(function(e) {
                    return "ScrollSmoother" !== e.vars.id && e.kill()
                }), !0 !== e) {
                var t = Y.killAll || [];
                Y = {}, t.forEach(function(e) {
                    return e()
                })
            }
        }, ScrollTrigger);

    function ScrollTrigger(e, t) {
        s || ScrollTrigger.register(Je) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), this.init(e, t)
    }
    $.version = "3.11.5", $.saveStyles = function(e) {
        return e ? Ze(e).forEach(function(e) {
            if (e && e.style) {
                var t = V.indexOf(e);
                0 <= t && V.splice(t, 5), V.push(e, e.style.cssText, e.getBBox && e.getAttribute("transform"), Je.core.getCache(e), at())
            }
        }) : V
    }, $.revert = function(e, t) {
        return Lb(!e, t)
    }, $.create = function(e, t) {
        return new $(e, t)
    }, $.refresh = function(e) {
        return e ? Eb() : (s || $.register()) && Bt(!0)
    }, $.update = function(e) {
        return ++Ie.cache && W(!0 === e ? 2 : 0)
    }, $.clearScrollMemory = Mb, $.maxScroll = function(e, t) {
        return Ja(e, t ? He : je)
    }, $.getScrollFunc = function(e, t) {
        return K(J(e), t ? He : je)
    }, $.getById = function(e) {
        return Ot[e]
    }, $.getAll = function() {
        return Pt.filter(function(e) {
            return "ScrollSmoother" !== e.vars.id
        })
    }, $.isScrolling = function() {
        return !!dt
    }, $.snapDirectional = mb, $.addEventListener = function(e, t) {
        var r = Y[e] || (Y[e] = []);
        ~r.indexOf(t) || r.push(t)
    }, $.removeEventListener = function(e, t) {
        var r = Y[e],
            n = r && r.indexOf(t);
        0 <= n && r.splice(n, 1)
    }, $.batch = function(e, t) {
        function Qo(e, t) {
            var r = [],
                n = [],
                o = Je.delayedCall(i, function() {
                    t(r, n), r = [], n = []
                }).pause();
            return function(e) {
                r.length || o.restart(!0), r.push(e.trigger), n.push(e), a <= r.length && o.progress(1)
            }
        }
        var r, n = [],
            o = {},
            i = t.interval || .016,
            a = t.batchMax || 1e9;
        for (r in t) o[r] = "on" === r.substr(0, 2) && Ma(t[r]) && "onRefreshInit" !== r ? Qo(0, t[r]) : t[r];
        return Ma(a) && (a = a(), pb($, "refresh", function() {
            return a = t.batchMax()
        })), Ze(e).forEach(function(e) {
            var t = {};
            for (r in o) t[r] = o[r];
            t.trigger = e, n.push($.create(t))
        }), n
    };

    function jc(e, t, r, n) {
        return n < t ? e(n) : t < 0 && e(0), n < r ? (n - t) / (r - t) : r < 0 ? t / (t - r) : 1
    }

    function kc(e, t) {
        !0 === t ? e.style.removeProperty("touch-action") : e.style.touchAction = !0 === t ? "auto" : t ? "pan-" + t + (k.isTouch ? " pinch-zoom" : "") : "none", e === Ue && kc(Qe, t)
    }

    function mc(e) {
        var t, r = e.event,
            n = e.target,
            o = e.axis,
            i = (r.changedTouches ? r.changedTouches[0] : r).target,
            a = i._gsap || Je.core.getCache(i),
            s = pt();
        if (!a._isScrollT || 2e3 < s - a._isScrollT) {
            for (; i && i !== Qe && (i.scrollHeight <= i.clientHeight && i.scrollWidth <= i.clientWidth || !te[(t = fb(i)).overflowY] && !te[t.overflowX]);) i = i.parentNode;
            a._isScroll = i && i !== n && !Fa(i) && (te[(t = fb(i)).overflowY] || te[t.overflowX]), a._isScrollT = s
        }!a._isScroll && "x" !== o || (r.stopPropagation(), r._gsapAllow = !0)
    }

    function nc(e, t, r, n) {
        return k.create({
            target: e,
            capture: !0,
            debounce: !1,
            lockAxis: !0,
            type: t,
            onWheel: n = n && mc,
            onPress: n,
            onDrag: n,
            onScroll: n,
            onEnable: function onEnable() {
                return r && pb(Ge, k.eventTypes[0], ne, !1, !0)
            },
            onDisable: function onDisable() {
                return qb(Ge, k.eventTypes[0], ne, !0)
            }
        })
    }

    function rc(e) {
        function Np() {
            return o = !1
        }

        function Qp() {
            i = Ja(d, je), M = $e(E ? 1 : 0, i), f && (T = $e(0, Ja(d, He))), l = At
        }

        function Rp() {
            v._gsap.y = Ca(parseFloat(v._gsap.y) + b.offset) + "px", v.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(v._gsap.y) + ", 0, 1)", b.offset = b.cacheID = 0
        }

        function Xp() {
            Qp(), a.isActive() && a.vars.scrollY > i && (b() > i ? a.progress(1) && b(i) : a.resetTo("scrollY", i))
        }
        Oa(e) || (e = {}), e.preventDefault = e.isNormalizer = e.allowClicks = !0, e.type || (e.type = "wheel,touch"), e.debounce = !!e.debounce, e.id = e.id || "normalizer";
        var n, i, l, o, a, c, u, s, f = e.normalizeScrollX,
            t = e.momentum,
            r = e.allowNestedScroll,
            p = e.onRelease,
            d = J(e.target) || Ue,
            g = Je.core.globals().ScrollSmoother,
            h = g && g.get(),
            v = E && (e.content && J(e.content) || h && !1 !== e.content && !h.smooth() && h.content()),
            b = K(d, je),
            m = K(d, He),
            y = 1,
            x = (k.isTouch && Ke.visualViewport ? Ke.visualViewport.scale * Ke.visualViewport.width : Ke.outerWidth) / Ke.innerWidth,
            w = 0,
            _ = Ma(t) ? function() {
                return t(n)
            } : function() {
                return t || 2.8
            },
            S = nc(d, e.type, !0, r),
            T = Ba,
            M = Ba;
        return v && Je.set(v, {
            y: "+=0"
        }), e.ignoreCheck = function(e) {
            return E && "touchmove" === e.type && function ignoreDrag() {
                if (o) {
                    requestAnimationFrame(Np);
                    var e = Ca(n.deltaY / 2),
                        t = M(b.v - e);
                    if (v && t !== b.v + b.offset) {
                        b.offset = t - b.v;
                        var r = Ca((parseFloat(v && v._gsap.y) || 0) - b.offset);
                        v.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + r + ", 0, 1)", v._gsap.y = r + "px", b.cacheID = Ie.cache, W()
                    }
                    return !0
                }
                b.offset && Rp(), o = !0
            }() || 1.05 < y && "touchstart" !== e.type || n.isGesturing || e.touches && 1 < e.touches.length
        }, e.onPress = function() {
            o = !1;
            var e = y;
            y = Ca((Ke.visualViewport && Ke.visualViewport.scale || 1) / x), a.pause(), e !== y && kc(d, 1.01 < y || !f && "x"), c = m(), u = b(), Qp(), l = At
        }, e.onRelease = e.onGestureStart = function(e, t) {
            if (b.offset && Rp(), t) {
                Ie.cache++;
                var r, n, o = _();
                f && (n = (r = m()) + .05 * o * -e.velocityX / .227, o *= jc(m, r, n, Ja(d, He)), a.vars.scrollX = T(n)), n = (r = b()) + .05 * o * -e.velocityY / .227, o *= jc(b, r, n, Ja(d, je)), a.vars.scrollY = M(n), a.invalidate().duration(o).play(.01), (E && a.vars.scrollY >= i || i - 1 <= r) && Je.to({}, {
                    onUpdate: Xp,
                    duration: o
                })
            } else s.restart(!0);
            p && p(e)
        }, e.onWheel = function() {
            a._ts && a.pause(), 1e3 < pt() - w && (l = 0, w = pt())
        }, e.onChange = function(e, t, r, n, o) {
            if (At !== l && Qp(), t && f && m(T(n[2] === t ? c + (e.startX - e.x) : m() + t - n[1])), r) {
                b.offset && Rp();
                var i = o[2] === r,
                    a = i ? u + e.startY - e.y : b() + r - o[1],
                    s = M(a);
                i && a !== s && (u += s - a), b(s)
            }(r || t) && W()
        }, e.onEnable = function() {
            kc(d, !f && "x"), $.addEventListener("refresh", Xp), pb(Ke, "resize", Xp), b.smooth && (b.target.style.scrollBehavior = "auto", b.smooth = m.smooth = !1), S.enable()
        }, e.onDisable = function() {
            kc(d, !0), qb(Ke, "resize", Xp), $.removeEventListener("refresh", Xp), S.kill()
        }, e.lockAxis = !1 !== e.lockAxis, ((n = new k(e)).iOS = E) && !b() && b(1), E && Je.ticker.add(Ba), s = n._dc, a = Je.to(n, {
            ease: "power4",
            paused: !0,
            scrollX: f ? "+=0.1" : "+=0",
            scrollY: "+=0.1",
            modifiers: {
                scrollY: gc(b, b(), function() {
                    return a.pause()
                })
            },
            onUpdate: W,
            onComplete: s.vars.onComplete
        }), n
    }
    var ee, te = {
            auto: 1,
            scroll: 1
        },
        re = /(input|label|select|textarea)/i,
        ne = function _captureInputs(e) {
            var t = re.test(e.target.tagName);
            (t || ee) && (e._gsapAllow = !0, ee = t)
        };
    $.sort = function(e) {
        return Pt.sort(e || function(e, t) {
            return -1e6 * (e.vars.refreshPriority || 0) + e.start - (t.start + -1e6 * (t.vars.refreshPriority || 0))
        })
    }, $.observe = function(e) {
        return new k(e)
    }, $.normalizeScroll = function(e) {
        if (void 0 === e) return v;
        if (!0 === e && v) return v.enable();
        if (!1 === e) return v && v.kill();
        var t = e instanceof k ? e : rc(e);
        return v && v.target === t.target && v.kill(), Fa(t.target) && (v = t), t
    }, $.core = {
        _getVelocityProp: L,
        _inputObserver: nc,
        _scrollers: Ie,
        _proxies: qe,
        bridge: {
            ss: function ss() {
                dt || q("scrollStart"), dt = pt()
            },
            ref: function ref() {
                return tt
            }
        }
    }, Ea() && Je.registerPlugin($), e.ScrollTrigger = $, e.default = $;
    if (typeof(window) === "undefined" || window !== e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    } else {
        delete e.default
    }
});