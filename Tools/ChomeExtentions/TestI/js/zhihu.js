(function (z) {

    
    var gn = function(a) {
        a = a.tabIndex;
        return z.pa(a) && 0 <= a && 32768 > a
    };
    var hn = function(a) {
        a = a.getAttributeNode("tabindex");
        return null != a && a.specified
    };
    var jn = function(a) {
        return /^\s*$/.test(a)
            ? !1
            : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@")
                .replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))
    };
    z.kn = function(a, b) {
        var c = b.getBoundingClientRect();
        return c.bottom < a.nP || c.top > a.size.height ? !1 : !0
    };
    var ln = function(a, b) { return z.ob(a.$E || [], function(a) { return b === a || z.nf(a, b) }) };
    var mn = function(a) { if (a.Bk) throw Error("Can not change this state of the popup while showing."); };
    var nn = function(a) { return a.ck.length ? a.ck.pop() : a.Co() };
    var on = function(a) {
        try {
            return a && a.activeElement
        } catch (b) {
        }
        return null
    };
    var pn = function(a) { return hn(a) && gn(a) };
    var qn = function(a) {
        a = String(a);
        if (jn(a))
            try {
                return eval("(" + a + ")")
            } catch (b) {
            }
        throw Error("Invalid JSON string: " + a);
    };
    z.Z = function(a, b) { return z.aa[a] = b };
    var rn = function(a) {
        z.Yj ? z.S.enable(a.input, "placeholder-hilight", !1) : z.S.enable(a.label, "placeholder-label-hilight", !1)
    };
    z.sn = function(a, b) { return a.Ee.get(b) };
    z.tn = function(a) {
        var b = z.U;
        b.KJ ? (b.KJ.innerHTML = a, z.P(b.h, !0)) : z.T.message(a)
    };
    var un = function (a, b) {
        b && b.length && z.A(b, function (a) {
            var actionName = a[0];
            var actionCount = a[1];
            alert(actionName);
            alert(actionCount);

        this.dispatchEvent(new z.jj(a[0], a[1]))
    }, a)
    };
    z.vn = function(a, b) {
        var c = z.Lm;
        c.ea.g(c,
            "update",
            function f() {
                window.document.body.contains(a) &&
                    a.getBoundingClientRect().bottom < this.size.height &&
                    (b.call(void 0), this.ea.pa(this, "update", f))
            });
        c.update()
    };
    var wn = function(a, b) {
        a.lp = b;
        a.bd && z.P(a.bd, a.lp)
    };
    z.xn = function(a, b) {
        z.H.call(this);
        this.ea = new z.xd(this);
        this.ai(a || null);
        b && (this.hb = b)
    };
    var yn = function(a, b) { return a.fd && b ? z.kb(a.fd, b) : -1 };
    z.zn = function(a, b) { a.Vh(b.parentNode, b) };
    var An = function(a, b) {
        a.Va && a.Va.wf && (z.Kb(a.Va.wf, a.wb), z.Lb(a.Va.wf, b, a));
        a.wb = b
    };
    var Bn = function(a) { return new z.Gg(a.top, a.left + a.width, a.top + a.height, a.left) };
    var Cn = function(a) { return "CSS1Compat" == a.Ra.compatMode };
    z.Dn = function(a) { if (a.da) return qn(a.da.responseText) };
    var En = function(a) {
        z.Sd(a);
        for (var b = {}, c = 0; c < a.lb.length; c++) {
            var d = a.lb[c];
            b[d] = a.Qb[d]
        }
        return b
    };
    var Fn = function(a) { return a };
    var Gn = function() {
        return Math.floor(2147483648 * Math.random()).toString(36) +
            Math.abs(Math.floor(2147483648 * Math.random()) ^ (0, z.I)()).toString(36)
    };
    var Hn = function(a) {
        a = a ? z.Ke(a) : window.document;
        return !z.C || 9 <= z.jh || Cn(z.Ie(a)) ? a.documentElement : a.body
    };
    z.In = function(a) {
        var b = z.Ke(a), c = new z.Ge(0, 0), d = Hn(b);
        if (a == d) return c;
        a = z.Sg(a);
        b = z.xf(z.Ie(b));
        c.x = a.left + b.x;
        c.y = a.top + b.y;
        return c
    };
    var Jn = function(a, b) {
        for (var c = b; c = c.previousSibling;) if (c == a) return -1;
        return 1
    };
    z.Kn = function(a, b) {
        for (var c in a) if (a[c] == b) return !0;
        return !1
    };
    z.Ln = function(a) {
        var b = 0, c;
        for (c in a) b++;
        return b
    };
    z.Mn = function(a, b, c) { return Array.prototype.every.call(a, b, c) };
    var Nn = function(a) {
        return a.replace(/&([^;]+);/g,
            function(a, c) {
                switch (c) {
                case "amp":
                    return "\x26";
                case "lt":
                    return "\x3c";
                case "gt":
                    return "\x3e";
                case "quot":
                    return '"';
                default:
                    if ("#" == c.charAt(0)) {
                        var d = Number("0" + c.substr(1));
                        if (!(0, window.isNaN)(d)) return String.fromCharCode(d)
                    }
                    return a
                }
            })
    };
    var On = function(a) {
        var b = { "\x26amp;": "\x26", "\x26lt;": "\x3c", "\x26gt;": "\x3e", "\x26quot;": '"' }, c;
        c = z.u.document.createElement("div");
        return a.replace(Pn,
            function(a, f) {
                var g = b[a];
                if (g) return g;
                if ("#" == f.charAt(0)) {
                    var h = Number("0" + f.substr(1));
                    (0, window.isNaN)(h) || (g = String.fromCharCode(h))
                }
                g || (c.innerHTML = a + " ", g = c.firstChild.nodeValue.slice(0, -1));
                return b[a] = g
            })
    };
    z.Qn = function(a) { return new z.He(a.offsetWidth, a.offsetHeight) };
    var Rn = function(a) {
        if (z.C && !(8 <= z.jh)) return a.offsetParent;
        var b = z.Ke(a), c = z.Og(a, "position"), d = "fixed" == c || "absolute" == c;
        for (a = a
                .parentNode;
            a && a != b;
            a = a.parentNode)
            if (11 == a.nodeType && a.host && (a = a.host), c = z
                    .Og(a, "position"), d = d && "static" == c && a != b.documentElement && a != b.body,
                !d &&
                (a.scrollWidth > a.clientWidth ||
                    a.scrollHeight > a.clientHeight ||
                    "fixed" == c ||
                    "absolute" == c ||
                    "relative" == c)) return a;
        return null
    };
    z.Sn = function(a) {
        if (48 <= a && 57 >= a || 96 <= a && 106 >= a || 65 <= a && 90 >= a || (z.D || z.Gc) && 0 == a) return !0;
        switch (a) {
        case 32:
        case 43:
        case 63:
        case 64:
        case 107:
        case 109:
        case 110:
        case 111:
        case 186:
        case 59:
        case 189:
        case 187:
        case 61:
        case 188:
        case 190:
        case 191:
        case 192:
        case 222:
        case 219:
        case 220:
        case 221:
            return !0;
        default:
            return !1
        }
    };
    var Tn = function(a, b, c, d) {
        if (null != a)
            for (a = a.firstChild; a;) {
                if (b(a) && (c.push(a), d) || Tn(a, b, c, d)) return !0;
                a = a.nextSibling
            }
        return !1
    };
    var Un = function(a, b) {
        var c = a.parentNode;
        if (c == b) return -1;
        for (var d = b; d.parentNode != c;) d = d.parentNode;
        return Jn(d, a)
    };
    var Vn = function(a, b) { return new z.Ge(a.x - b.x, a.y - b.y) };
    var Wn = function(a) { this.Bv = a };
    var Xn = function(a, b, c) {
        if (null == b) c.push("null");
        else {
            if ("object" == typeof b) {
                if (z.ma(b)) {
                    a.serializeArray(b, c);
                    return
                }
                if (b instanceof String || b instanceof Number || b instanceof Boolean) b = b.valueOf();
                else {
                    c.push("{");
                    var d = "", f;
                    for (f in b)
                        if (Object.prototype.hasOwnProperty.call(b, f)) {
                            var g = b[f];
                            "function" != typeof g &&
                                (c.push(d), Yn(f, c), c.push(":"), Xn(a, a.Bv ? a.Bv.call(b, f, g) : g, c), d = ",")
                        }
                    c.push("}");
                    return
                }
            }
            switch (typeof b) {
            case "string":
                Yn(b, c);
                break;
            case "number":
                c.push((0, window.isFinite)(b) && !(0, window.isNaN)(b) ? String(b) : "null");
                break;
            case "boolean":
                c.push(String(b));
                break;
            case "function":
                c.push("null");
                break;
            default:
                throw Error("Unknown type: " + typeof b);
            }
        }
    };
    var Yn = function(a, b) {
        b.push('"',
            a.replace(z.Tl,
                function(a) {
                    var b = Zn[a];
                    b || (b = "\\u" + (a.charCodeAt(0) | 65536).toString(16).substr(1), Zn[a] = b);
                    return b
                }),
            '"')
    };
    var $n = function(a) {
        var b = typeof a;
        return "object" == b && a || "function" == b ? "o" + z.ta(a) : b.substr(0, 1) + a
    };
    var ao = function(a, b) {
        if ("function" == typeof a.every) return a.every(b, void 0);
        if (z.na(a) || z.oa(a)) return z.Mn(a, b, void 0);
        for (var c = z
                     .Id(a),
            d = z.Hd(a),
            f = d.length,
            g = 0;
            g < f;
            g++) if (!b.call(void 0, d[g], c && c[g], a)) return !1;
        return !0
    };
    var bo = function(a) {
        return a.mb && "function" == typeof a.mb
            ? a.mb()
            : z.na(a) || z.oa(a)
            ? a.length
            : z
            .Ln(a)
    };
    var co = function(a) { return z.Wa(a, "\x26") ? "document" in z.u ? On(a) : Nn(a) : a };
    var eo = function(a, b) {
        switch (a) {
        case 1:
            return b ? "disable" : "enable";
        case 2:
            return b ? "highlight" : "unhighlight";
        case 4:
            return b ? "activate" : "deactivate";
        case 8:
            return b ? "select" : "unselect";
        case 16:
            return b ? "check" : "uncheck";
        case 32:
            return b ? "focus" : "blur";
        case 64:
            return b ? "open" : "close"
        }
        throw Error("Invalid component state");
    };
    z.fo = function(a, b, c) {
        c = c ? null : a.getElementsByTagName("*");
        if (z.um) {
            if (b = b ? "none" : "", a.style && (a.style[z.um] = b), c) {
                a = 0;
                for (var d; d = c[a]; a++) d.style && (d.style[z.um] = b)
            }
        } else if (z.C || z.Lg)
            if (b = b ? "on" : "", a
                .setAttribute("unselectable", b), c) for (a = 0; d = c[a]; a++) d.setAttribute("unselectable", b)
    };
    var go = function(a) {
        var b = z.In(a);
        a = z.Yg(a);
        return new z.Hg(b.x, b.y, a.width, a.height)
    };
    var ho = function(a, b, c) {
        var d = z.In(a);
        b instanceof z.Ge && (c = b.y, b = b.x);
        z.Qg(a, a.offsetLeft + (b - d.x), a.offsetTop + (c - d.y))
    };
    var io = function(a, b) {
        var c = b || z.Se(window.document), d;
        d = c || z.Se(window.document);
        var f = z.In(a), g = z.In(d), h = z.ih(d);
        if (d == z.Se(window.document)) {
            var k = f.x - d.scrollLeft, f = f.y - d.scrollTop;
            !z.C || 10 <= z.jh || (k += h.left, f += h.top)
        } else k = f.x - g.x - h.left, f = f.y - g.y - h.top;
        var h = d.clientHeight - a.offsetHeight,
            g = d.scrollLeft,
            l = d.scrollTop,
            g = g + Math.min(k, Math.max(k - (d.clientWidth - a.offsetWidth), 0)),
            l = l + Math.min(f, Math.max(f - h, 0));
        d = new z.Ge(g, l);
        c.scrollLeft = d.x;
        c.scrollTop = d.y
    };
    var jo = function(a) {
        for (var b = new z.Gg(0, window.Infinity, window.Infinity, 0),
            c = z.Ie(a),
            d = c.wa().body,
            f = c.wa().documentElement,
            g = z.Se(c.Ra);
            a = Rn(a);
        )
            if (!(z.C && 0 == a.clientWidth || z.D && 0 == a.clientHeight && a == d) &&
                a != d &&
                a != f &&
                "visible" != z.Og(a, "overflow")) {
                var h = z.In(a), k = new z.Ge(a.clientLeft, a.clientTop);
                h.x += k.x;
                h.y += k.y;
                b.top = Math.max(b.top, h.y);
                b.right = Math.min(b.right, h.x + a.clientWidth);
                b.bottom = Math.min(b.bottom, h.y + a.clientHeight);
                b.left = Math.max(b.left, h.x)
            }
        d = g.scrollLeft;
        g = g.scrollTop;
        b.left = Math.max(b.left,
            d);
        b.top = Math.max(b.top, g);
        c = z.Qe(c.eb());
        b.right = Math.min(b.right, d + c.width);
        b.bottom = Math.min(b.bottom, g + c.height);
        return 0 <= b.top && 0 <= b.left && b.bottom > b.top && b.right > b.left ? b : null
    };
    var ko = function(a) {
        var b = a.body;
        a = a.documentElement;
        return new z.Ge(b.scrollLeft || a.scrollLeft, b.scrollTop || a.scrollTop)
    };
    var lo = function(a, b) {
        var c = a.style[z.cb(b)];
        return "undefined" !== typeof c ? c : a.style[z.Jg(a, b)] || ""
    };
    var mo = function(a, b) {
        var c = b.x < a.left ? b.x - a.left : b.x > a.right ? b.x - a.right : 0,
            d = b.y < a.top ? b.y - a.top : b.y > a.bottom ? b.y - a.bottom : 0;
        return Math.sqrt(c * c + d * d)
    };
    var no = function(a, b, c, d, f) {
        if (!(z.C || z.Gc || z.D && z.E("525"))) return !0;
        if (z.Uc && f) return z.Sn(a);
        if (f && !d) return !1;
        z.pa(b) && (b = z.Eg(b));
        if (!c && (17 == b || 18 == b || z.Uc && 91 == b)) return !1;
        if ((z.D || z.Gc) && d && c)
            switch (a) {
            case 220:
            case 219:
            case 221:
            case 192:
            case 186:
            case 189:
            case 187:
            case 188:
            case 190:
            case 191:
            case 192:
            case 222:
                return !1
            }
        if (z.C && d && b == a) return !1;
        switch (a) {
        case 13:
            return !0;
        case 27:
            return !(z.D || z.Gc)
        }
        return z.Sn(a)
    };
    var oo = function(a) {
        if (a.altKey && !a.ctrlKey || a.metaKey || 112 <= a.keyCode && 123 >= a.keyCode) return !1;
        switch (a.keyCode) {
        case 18:
        case 20:
        case 93:
        case 17:
        case 40:
        case 35:
        case 27:
        case 36:
        case 45:
        case 37:
        case 224:
        case 91:
        case 144:
        case 12:
        case 34:
        case 33:
        case 19:
        case 255:
        case 44:
        case 39:
        case 145:
        case 16:
        case 38:
        case 252:
        case 224:
        case 92:
            return !1;
        case 0:
            return !z.B;
        default:
            return 166 > a.keyCode || 183 < a.keyCode
        }
    };
    z.po = function(a, b, c) { c ? z.Ag(a, b) : z.Cg(a, b) };
    var qo = function(a, b) { a.className = b };
    var ro = function(a) { return z.xg(a, "label") };
    var so = function(a, b) {
        var c = "";
        b && (c = b.id);
        z.vg(a, "activedescendant", c)
    };
    z.to = function(a, b) { return z.vf(a, null, b, void 0) };
    z.uo = function(a) {
        var b = [];
        z.sf(a, b, !1);
        return b.join("")
    };
    z.vo = function(a, b) {
        var c = [];
        Tn(a, b, c, !1);
        return c
    };
    z.wo = function(a) {
        if ("outerHTML" in a) return a.outerHTML;
        var b = z.Ke(a).createElement("DIV");
        b.appendChild(a.cloneNode(!0));
        return b.innerHTML
    };
    var xo = function(a) {
        var b, c = arguments.length;
        if (!c) return null;
        if (1 == c) return arguments[0];
        var d = [], f = window.Infinity;
        for (b = 0; b < c; b++) {
            for (var g = [], h = arguments[b]; h;) g.unshift(h), h = h.parentNode;
            d.push(g);
            f = Math.min(f, g.length)
        }
        g = null;
        for (b = 0; b < f; b++) {
            for (var h = d[0][b], k = 1; k < c; k++) if (h != d[k][b]) return g;
            g = h
        }
        return g
    };
    var yo = function(a, b) {
        if (a == b) return 0;
        if (a.compareDocumentPosition) return a.compareDocumentPosition(b) & 2 ? 1 : -1;
        if (z.C && !(9 <= z.jh)) {
            if (9 == a.nodeType) return -1;
            if (9 == b.nodeType) return 1
        }
        if ("sourceIndex" in a || a.parentNode && "sourceIndex" in a.parentNode) {
            var c = 1 == a.nodeType, d = 1 == b.nodeType;
            if (c && d) return a.sourceIndex - b.sourceIndex;
            var f = a.parentNode, g = b.parentNode;
            return f == g
                ? Jn(a, b)
                : !c && z.nf(f, b)
                ? -1 * Un(a, b)
                : !d && z.nf(g, a)
                ? Un(b, a)
                : (c ? a.sourceIndex : f.sourceIndex) - (d ? b.sourceIndex : g.sourceIndex)
        }
        d = z.Ke(a);
        c = d.createRange();
        c.selectNode(a);
        c.collapse(!0);
        d = d.createRange();
        d.selectNode(b);
        d.collapse(!0);
        return c.compareBoundaryPoints(z.u.Range.START_TO_END, d)
    };
    z.zo = function(a) {
        return z.ja(a.previousElementSibling) ? a.previousElementSibling : z.kf(a.previousSibling, !1)
    };
    var Ao = function(a) { return z.ja(a.nextElementSibling) ? a.nextElementSibling : z.kf(a.nextSibling, !0) };
    z.Bo = function(a, b) {
        var c = b.parentNode;
        c && c.replaceChild(a, b)
    };
    z.Co = function(a, b) {
        var c = b || window.document;
        return c.querySelectorAll && c.querySelector ? c.querySelectorAll("." + a) : z.Ne(window.document, "*", a, b)
    };
    z.Do = function(a, b) { return a == b ? !0 : a && b ? a.width == b.width && a.height == b.height : !1 };
    z.Eo = function(a, b, c) {
        a = [a, "\x26", b];
        null != c && a.push("\x3d", (0, window.encodeURIComponent)(String(c)));
        a[1] &&
        (c = a[0], b = c.indexOf("#"), 0 <= b && (a.push(c.substr(b)), a[0] = c = c.substr(0, b)), b = c
            .indexOf("?"), 0 > b ? a[1] = "?" : b == c.length - 1 && (a[1] = void 0));
        return a.join("")
    };
    var Fo = function(a, b) { return (new Wn(b)).serialize(a) };
    var Go = function(a) { return eval("(" + a + ")") };
    var Ho = function(a) {
        this.Qb = new z.Qd;
        a && this.addAll(a)
    };
    var Io = function(a, b) {
        var c = bo(b);
        if (a.mb() > c) return !1;
        !(b instanceof Ho) && 5 < c && (b = new Ho(b));
        return ao(a,
            function(a) {
                var c = b;
                return c.contains && "function" == typeof c.contains
                    ? c.contains(a)
                    : c.Ei && "function" == typeof c.Ei ? c.Ei(a) : z.na(c) || z.oa(c) ? z.rb(c, a) : z.Kn(c, a)
            })
    };
    var Jo = function(a) {
        try {
            return z.Md(a).next()
        } catch (b) {
            if (b != z.Nd) throw b;
            return null
        }
    };
    z.Ko = function(a, b) {
        var c = z.Md(a), d = new z.Ld;
        d.next = function() {
            for (;;) {
                var a = c.next();
                if (b.call(void 0, a, void 0, c)) return a
            }
        };
        return d
    };
    var Lo = function(a, b, c) { return Math.min(Math.max(a, b), c) };
    z.Mo = function(a) {
        var b = {}, c;
        for (c in a) b[a[c]] = c;
        return b
    };
    var No = function(a, b) {
        var c = {}, d;
        for (d in a) c[d] = b.call(void 0, a[d], d, a);
        return c
    };
    var Oo = function(a) {
        for (var b = [], c = 0; c < arguments.length; c++) {
            var d = arguments[c];
            if (z.ma(d))
                for (var f = 0; f < d.length; f += 8192)
                    for (var g = z.yb(d, f, f + 8192), g = Oo.apply(null, g), h = 0; h < g.length; h++) b.push(g[h]);
            else b.push(d)
        }
        return b
    };
    z.Po = function(a, b) {
        for (var c = z
                     .oa(a)
                     ? a.split("")
                     : a,
            d = a.length - 1;
            0 <= d;
            d--) if (d in c && b.call(void 0, c[d], d, a)) return d;
        return -1
    };
    var Qo = function(a, b) {
        var c = 0;
        z.A(a, function(a, f, g) { b.call(void 0, a, f, g) && ++c }, void 0);
        return c
    };
    z.Ro = function(a) { return function() { return !a.apply(this, arguments) } };
    z.So = function(a) {
        var b = arguments, c = b.length;
        return function() {
            for (var a = 0; a < c; a++) if (!b[a].apply(this, arguments)) return !1;
            return !0
        }
    };
    z.To = function(a) {
        var b = arguments, c = b.length;
        return function() {
            for (var a, f = 0; f < c; f++) a = b[f].apply(this, arguments);
            return a
        }
    };
    z.Uo = function(a, b) {
        var c = arguments, d = c.length;
        return function() {
            var a;
            d && (a = c[d - 1].apply(this, arguments));
            for (var b = d - 2; 0 <= b; b--) a = c[b].call(this, a);
            return a
        }
    };
    var Vo = function(a) {
        var b;
        b = b || 0;
        return function() { return a.apply(this, Array.prototype.slice.call(arguments, 0, b)) }
    };
    z.Wo = function() { return "goog_" + z.Fl++ };
    z.Xo = function(a) { return a.replace(/[\s\xa0]+$/, "") };
    z.Yo = function(a) { return a.replace(/^[\s\xa0]+/, "") };
    var Zo = function(a) { return a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "") };
    z.$o = function(a) { return a.replace(/(\r\n|\r|\n)+/g, " ") };
    z.ap = function(a) { return !/[^\t\n\r ]/.test(a) };
    z.bp = function(a) { return /^[\s\xa0]*$/.test(a) };
    z.cp = function(a, b) {
        var c = a.length - b.length;
        return 0 <= c && a.indexOf(b, c) == c
    };
    var dp = function() { throw Error("unimplemented abstract method"); };
    z.ep = function(a) {
        z.de.call(this);
        this.LM = !!a;
        this.headers.set("X-Requested-With", "XMLHttpRequest");
        this.on("complete", this.JR, !1, this)
    };
    z.fp = function(a, b, c, d) {
        var f = new z.ep;
        if (b) f.on("complete", b);
        f.ajax(a, d, c)
    };
    var gp = function(a, b) { hp.push({ aN: a, filter: b }) };
    var ip = function(a) {
        var b = a.getResponseHeader("content-type");
        if (b) {
            var c = jp[b.split(";")[0].toLowerCase()];
            if (c && hp.length) {
                var d = z.se(a);
                z.A(hp,
                    function(a) { "*" !== a.aN && a.aN !== c || a.filter("json" === c ? JSON.parse(d) : d, this) },
                    a)
            }
        }
    };
    var kp = function(a) { lp.push(a) };
    var mp = function(a) { lp.forEach(function(b) { return b(a) }) };
    var np = function() {
        if (op) return op;
        var a = z.M("div", { id: "zh-global-spinner", style: "display:none", innerHTML: "加载中…" });
        window.document.body.appendChild(a);
        return op = a
    };
    var pp = function() { z.H.call(this) };
    z.qp = function(a, b, c) {
        function d() {
            var b = new z
                    .ep(!0),
                d = "/question/" + (a ? "set_anonymous" : "set_public"),
                g = "qid\x3d" + (c || z.X.qa);
            b.on("success",
                function() {
                    var c = z.Dn(b);
                    c && !c.r && (z.X && (z.X.xb = a), f.dispatchEvent(new z.rp(a)))
                });
            b.ajax(d, g)
        }

        var f = z.sp,
            g = {
                title: "确认使用匿名身份？",
                content:
                    '\x3cp\x3e使用匿名身份后\x3c/p\x3e\x3cul style\x3d"margin: 5px 0 0 5px;list-style-position: inside;"\x3e\x3cli\x3e提问、回答、赞同、关注会显示为匿名\x3c/li\x3e\x3cli\x3e除提问者本人，不能匿名编辑问题\x3c/li\x3e\x3cli\x3e不能邀请别人回答问题\x3c/li\x3e\x3c/ul\x3e'
            },
            h = {
                title: "确认取消匿名身份？",
                content: "取消匿名身份后， 提问、回答、赞同和关注将以实名显示。"
            };
        z.T.confirm(a ? g : h,
            function(a) {
                a && d();
                b && b(a)
            })
    };
    z.rp = function(a) {
        this.type = "anon_change";
        this.xb = a
    };
    var tp = function(a) {
        z.H.call(this);
        this.J = window.$.extend({ Ok: z.r }, a || {});
        this.Gs = z.tm.guiders2 || {};
        this.CT = (0, z.I)();
        this.fb = z.$h && !z.ai;
        this.tc()
    };
    var up = function(a, b, c) {
        function d(g) { g || (g = a.shift()) && b.call(c, g, f++, d) }

        a = a.slice();
        var f = 0;
        d()
    };
    var vp = function(a) {
        var b = {
                "home-topstory": {
                    path: "/",
                    offset: { right: -10 },
                    lv: "righttop",
                    fo: "arrow-lefttop",
                    ZB: ".zu-main-feed-con",
                    Iu: ".zu-main-sidebar"
                }
            },
            c = a.Gs.section;
        c &&
            up(z.Hb(c),
                function(a, f, g) {
                    (f = b[a]) && f.path === window.location.pathname ? wp(this, "section", a, c[a], f, !1, g) : g()
                },
                a)
    };
    var xp = function(a) {
        var b = {
                "/": {
                    offset: { top: 6 },
                    trigger: "1page-down inview",
                    lv: "lefttop",
                    fo: "arrow-righttop",
                    ZB: ".js-sidebarRoundtable",
                    Iu: ".zu-main-content-inner"
                },
                "/explore": {
                    lv: "lefttop",
                    fo: "arrow-righttop",
                    ZB: ".explore-side-section-roundtable",
                    Iu: ".zu-main-content-inner"
                }
            },
            c = a.Gs["exclusive-popover"];
        c &&
            up(z.Hb(c),
                function(a, f, g) {
                    var h;
                    "roundtable" === a && (h = b[window.location.pathname]);
                    h && wp(this, "exclusive-popover", a, c[a], h, h.trigger, g)
                },
                a)
    };
    var wp = function(a, b, c, d, f, g, h) {
        if (b && c && d && f) {
            var k = (0, window.$)(f.ZB);
            if (k.length && ("righttop" !== f.lv || 300 < z.Qe().width - k[0].getBoundingClientRect().right)) {
                var l = (0, window.$)(z
                    .Ja('\x3cdiv class\x3d"guide2-section-popover"\x3e\x3cdiv class\x3d"title"\x3e%s\x3c/div\x3e\x3cdiv class\x3d"content"\x3e%s\x3c/div\x3e\x3cdiv class\x3d"action"\x3e\x3ca class\x3d"dismiss" href\x3d"%s"\x3e%s\x3c/a\x3e\x3c/div\x3e\x3c/div\x3e', d.title || "", d.content, d.dismissHref || "#", d.dismissText));
                l.addClass(f.lv).addClass(f.fo).appendTo(k);
                var n = f.offset;
                n &&
                    window.$.each(["left", "top", "right", "bottom"],
                        function(a, b) { n[b] && l.css("margin-" + b, n[b]) });
                var q = (0, window.$)([]);
                z.Ba(function(a) { return (0, z.I)() - a }, a.CT);
                var v = function() {
                        f.Iu && (q = (0, window.$)('\x3cspan class\x3d"guidev2-mask"/\x3e').appendTo(f.Iu));
                        (0, window.setTimeout)(function() {
                            l.add(q).addClass("fx-show");
                            K()
                        });
                        window.$.post("/node/Guide2", { method: "dismiss_popover", params: { category: b, key: c } })
                    },
                    F = function(a) {
                        if (window.Modernizr.csstransitions)
                            l.add(q).removeClass("fx-show").onTransitionEnd(function() { (0, window.$)(this).remove() },
                                350);
                        else l.add(q).remove();
                        h && h(a)
                    };
                a = function(a) {
                    function b(a) {
                        var c = !1;
                        return function() {
                            !0 !== c && (c = a.apply(this, arguments));
                            return c
                        }
                    }

                    var c = 0,
                        d = b(function() {
                            var a = window.pageYOffset;
                            if (a >= f.size.height) return c = a, !0
                        }),
                        d = {
                            "1page-down .5page-up": z.So(d,
                                b(function() { return c - window.pageYOffset >= f.size.height / 2 })),
                            "1page-down inview": z.So(d, function() { return z.kn(f, k[0]) })
                        },
                        f = new z.pi,
                        g = d[a] || d["1page-down .5page-up"];
                    f.o().g(f, "update", function() { g() && (f.dispose(), v()) })
                };
                var K = function() {
                    var a =
                        new z.pi;
                    a.o().g(a,
                        "update",
                        function() { l.parent().length ? z.kn(a, l[0]) || (F(), a.dispose()) : a.dispose() })
                };
                (0, window.$)(".dismiss", l).click(function() {
                    F();
                    return !1
                });
                (0, window.$)(".skip-all", l).click(function() {
                    window.$.post("/node/Guide2", { method: "skip_popover", params: { category: b } });
                    F(!0);
                    return !1
                });
                g ? a(g) : v()
            }
        }
    };
    var yp = function() {
        var a = (0, window.$)("#guidersv2-page-banner");
        (0, window.$)(".js-close", a).click(function() { a.remove() })
    };
    var zp = function(a) {
        function b(a) { window.$.post("/node/Guide2", { method: "dismiss_editor", params: { key: a } }) }

        function c(a) {
            z.ui(Object.assign({
                    category: "popup_guide",
                    label: { bio: "popup_guide_personal_introduction", topic: "popup_guide_topic_recommendation" }[h]
                },
                a))
        }

        function d(a) {
            k || (k = new z.R, k.Fe(!0), k.LG = !1, z.S.add(k.xh(), "Guide"));
            k.aa(a);
            k.F(!0)
        }

        var f = window.$.Deferred(), g = a.Gs.editor;
        if (!g || !g.length) return f.reject();
        var g = g.slice(),
            h,
            k,
            l = {},
            n = {
                bio: function(a) {
                    var f = (0, window.$)("#tmpl-Guide-BioEditor").html();
                    if (!f) return window.console && window.console.warn("Cannot find template"), a();
                    var g = z.To(a, function() { b("bio") });
                    d(f);
                    (function(a) {
                        a = (0, window.$)(a).off();
                        var b = (0, window.$)(".js-submit", a), d = (0, window.$)('input[name\x3d"bio"]', a);
                        b.click(function() {
                            var a = l.Cx = window.$.trim(d.val());
                            a
                                ? (window.$
                                        .post("/node/Guide2", { method: "add_headline", params: { headline: a } }),
                                    c({
                                        action: "click_edit_personal_introduction_submit",
                                        attributes: { personal_introduction: a }
                                    }))
                                : c({ action: "click_edit_personal_introduction_skip" });
                            g()
                        })
                    })(k.S());
                    c({ action: "popup_edit_personal_introduction_appear" })
                },
                topic: function(a) {
                    function f() { z.sp.dispatchEvent("guider2:topicselected") }

                    window.$.get("/node/GuideTopicList",
                        function(a) {
                            (0, window.$)(".Guide-topicsLoading").remove();
                            (0, window.$)(a).appendTo(".Guide-content")
                        });
                    var g = (0, window.$)("#tmpl-Guide-Topics").html();
                    if (g) {
                        var h = z.To(a, function() { b("topic") });
                        d(g);
                        (function(a) {
                            var b = (0, window.$)(a).off();
                            a = (0, window.$)(".js-submit", b);
                            b.on("click",
                                ".Guide-TopicsItem",
                                function() {
                                    var a =
                                        (0, window.$)(this);
                                    a.toggleClass("is-checked");
                                    var b = (0, window.$)(".template-relatedTopics", a);
                                    if (b.length) {
                                        var c = b.html();
                                        b.remove();
                                        (0, window.$)(c).insertAfter(a)
                                    }
                                });
                            a.click(function() {
                                var a = l.In = [], d = {};
                                (0, window.$)(".Guide-TopicsItem", b).filter(".is-checked").each(function() {
                                    var b = (0, window
                                            .$)(this),
                                        c = b.data("id"),
                                        f = b.index(),
                                        b = b.find(".name").text();
                                    a.push(c);
                                    d[c] = { topic: b, row: Math.ceil((f + 1) / 3), column: f % 3 + 1 }
                                });
                                a.length
                                    ? (window.$.post("/topics/follow", { follow_ids: a.join(",") }, f), c({
                                        action: "click_popup_guide_topic_recommendation_submit",
                                        attributes: { selected_topic: d }
                                    }))
                                    : (f(), c({ action: "click_popup_guide_topic_recommendation_skip" }));
                                h()
                            })
                        })(k.S());
                        c({ action: "popup_guide_topic_recommendation_appear" })
                    } else window.console && window.console.warn("Cannot find template"), a(), f()
                }
            };
        (0, window.$)(window).on("beforeunload.guide2",
            function() {
                k &&
                    k.W() &&
                    c({
                        Zc: !0,
                        action: {
                            bio: "click_edit_personal_introduction_close",
                            topic: "click_guide_topic_recommendation_close"
                        }[h]
                    })
            });
        up(g,
            function(a, b, c) {
                if (n[a]) {
                    h = a;
                    var d = b === g.length - 1,
                        O = function(a) {
                            if (k)
                                if (window.Modernizr.cssanimations)
                                    var b =
                                        (0, window.$)(k.xh()).addClass("fx-hide").onAnimationEnd(function() {
                                                b.removeClass("fx-hide");
                                                a()
                                            },
                                            400);
                                else a()
                        };
                    n[a](function() {
                        d
                            ? O(function() {
                                k.F(!1);
                                f.resolve(l);
                                (0, window.$)(window).off(".guide2");
                                "/topic" === window.location.pathname && window.location.reload()
                            })
                            : O(c)
                    })
                }
            });
        return f.promise()
    };
    var Ap = function(a, b) {
        z.H.call(this);
        a && this.attach(a, b)
    };
    var Bp = function(a, b, c, d) {
        z.Pc.call(this, d);
        this.type = "key";
        this.keyCode = a;
        this.charCode = b;
        this.repeat = c
    };
    var Cp = function() {};
    var Dp = function(a, b, c) { if (a = c || a.Hf()) c = b.getAttribute("role") || null, a != c && z.ug(b, a) };
    var Ep = function(a, b, c) {
        var d = b.VE;
        null != d && a.EC(c, d);
        b.W() || z.vg(c, "hidden", !b.W());
        b.isEnabled() || a.ah(c, 1, !b.isEnabled());
        Fp(b, 8) && a.ah(c, 8, !!(b.N & 8));
        Fp(b, 16) && a.ah(c, 16, b.Dg());
        Fp(b, 64) && a.ah(c, 64, b.Eb())
    };
    var Gp = function(a, b) {
        var c = [];
        b && (a = a.concat([b]));
        z.A([], function(d) { !z.Mn(d, z.Ba(z.rb, a)) || b && !z.rb(d, b) || c.push(d.join("_")) });
        return c
    };
    var Hp = function(a) {
        var b = a.V();
        b.replace(/\xa0|\s/g, " ");
        a.As = {
            1: b + "-disabled",
            2: b + "-hover",
            4: b + "-active",
            8: b + "-selected",
            16: b + "-checked",
            32: b + "-focused",
            64: b + "-open"
        }
    };
    z.Ip = function() {};
    z.Jp = function(a, b) {
        if (!a) throw Error("Invalid class name " + a);
        if (!z.qa(b)) throw Error("Invalid decorator function " + b);
        Kp[a] = b
    };
    var Lp = function(a, b, c) {
        z.Q.call(this, c);
        if (!b) {
            b = this.constructor;
            for (var d; b;) {
                d = z.ta(b);
                if (d = Mp[d]) break;
                b = b.v ? b.v.constructor : null
            }
            b = d ? z.qa(d.ba) ? d.ba() : new d : null
        }
        this.M = b;
        this.pn(z.ja(a) ? a : null);
        this.VE = null
    };
    var Np = function(a, b) {
        var c = a.o(), d = a.m();
        b
            ? (c.g(d, "mouseover", a.Gd).g(d, "mousedown", a.ze).g(d, "mouseup", a.Nf)
                .g(d, "mouseout", a.ym), a
                .gp !=
                z.r &&
                c.g(d, "contextmenu", a.gp), z.C &&
                (c.g(d, "dblclick", a.wH), a.tp || (a.tp = new Op(a), z.Ac(a, a.tp))))
            : (c.pa(d, "mouseover", a.Gd).pa(d, "mousedown", a.ze).pa(d, "mouseup", a.Nf)
                .pa(d, "mouseout", a.ym), a
                .gp !=
                z.r &&
                c.pa(d, "contextmenu", a.gp), z.C && (c.pa(d, "dblclick", a.wH), z.Cc(a.tp), a.tp = null))
    };
    var Fp = function(a, b) { return !!(a.or & b) };
    var Pp = function(a, b) { return !!(a.Hj & b) && Fp(a, b) };
    var Qp = function(a, b, c) {
        return Fp(a, b) && !!(a.N & b) != c && (!(a.dl & b) || a.dispatchEvent(eo(b, c))) && !a.Xd
    };
    var Op = function(a) {
        z.xc.call(this);
        this.Ks = a;
        this.Bs = !1;
        this.ea = new z.xd(this);
        z.Ac(this, this.ea);
        a = this.Ks.h;
        this.ea.g(a, "mousedown", this.wm).g(a, "mouseup", this.Ot).g(a, "click", this.vm)
    };
    var Rp = function() {};
    z.Sp = function(a, b, c) { Lp.call(this, a, b || Rp.ba(), c) };
    var Tp = function() {};
    var Up = function(a, b, c) {
        if (b) {
            var d = Vp(a, c);
            z.zg(b, d) ||
            (z.Db(Wp,
                function(a) {
                    a = Vp(this, a);
                    z.po(b, a, a == d)
                },
                a), z.vg(b, "checked", c == Xp ? "mixed" : c == Yp ? "true" : "false"))
        }
    };
    var Vp = function(a, b) {
        var c = a.V();
        if (b == Yp) return c + "-checked";
        if (b == Zp) return c + "-unchecked";
        if (b == Xp) return c + "-undetermined";
        throw Error("Invalid checkbox state: " + b);
    };
    var $p = function(a, b, c) {
        c = c || Tp.ba();
        Lp.call(this, null, c, b);
        this.Ci = z.ja(a) ? a : Zp
    };
    z.aq = function() {};
    var bq = function() {};
    z.cq = function(a, b, c, d, f) {
        function g(a) {
            a &&
            (a.tabIndex = 0, z.ug(a, h.Hf()), z
                .Ag(a, "goog-zippy-header"), dq(h, a), a && h.XI.g(a, "keydown", h.DV))
        }

        z.H.call(this);
        this.ca = f || z.Ie();
        this.rg = this.ca.m(a) || null;
        this.Yj = this.ca.m(d || null);
        this.fm = (this.xu = z.qa(b) ? b : null) || !b ? null : this.ca.m(b);
        this.vb = 1 == c;
        z.ja(c) ||
            this.xu ||
            (this.Yj ? this.vb = z.ah(this.Yj) : this.rg && (this.vb = z.zg(this.rg, "goog-zippy-expanded")));
        this.XI = new z.xd(this);
        this.qB = new z.xd(this);
        var h = this;
        g(this.rg);
        g(this.Yj);
        this.Lc(this.vb)
    };
    var eq = function(a) {
        var b = a.Yj;
        return b && z.ah(b) ? b : a.rg
    };
    var dq = function(a, b) { b && a.qB.g(b, "click", a.CV) };
    var fq = function(a, b, c) {
        z.Lc.call(this, a, b);
        this.uh = c
    };
    var gq = function() {
        z.R.call(this);
        this.Fe(!0)
    };
    var hq = function(a) {
        var b = (0, window.$)(".resend-activation-email", a.cE);
        iq(a, b, 10, function() { window.$.post("/reactive") })
    };
    var jq = function(a) {
        window.$.get("/settings/account/request_unlock");
        var b = (0, window.$)("form.send-code", a.VD),
            c = a.RD = (0, window.$)("form.activate", a.VD),
            d = (0, window.$)(".submit", b);
        b.validate(window.$.extend({}, kq, { submitHandler: z.Ci(d, window.$.proxy(a.dW, a)) }));
        b = (0, window.$)(".submit", c);
        c.validate(window.$.extend({}, kq, { submitHandler: z.Ci(b, window.$.proxy(a.fV, a)) }));
        b = (0, window.$)("button.resend-code", c);
        iq(a,
            b,
            60,
            function() {
                var a = (0, window.$)('input[name\x3d"account"]', c).val();
                if ("" === a)
                    return c.data("validator").showErrors({ account: "请填写手机号或邮箱" }),
                        !1;
                var b = this.ef(a), d;
                b
                    ? (a = { email: a }, d = "/settings/account/send_new_email_digits")
                    : (a = { phone_no: a }, d = "/settings/account/send_new_phone_digits");
                var k = this;
                window.$.post(d,
                    a,
                    function(a) {
                        a.success
                            ? lq(k, b)
                            : (a = a.payload.fields, b ? k.Gb(a, "email", "account") : k.Gb(a, "phone_no", "account"), c
                                .data("validator").showErrors(a))
                    })
            })
    };
    var lq = function(a, b) {
        a.Rw || (a.Rw = (0, window.$)(".tip", a.Ha));
        b ? a.Rw.html("验证码已发送至你的邮箱，请查收。") : a.Rw.html("验证码已发送至你的手机，请查收。")
    };
    var iq = function(a, b, c, d) {
        var f = b.text();
        b = z.Bi(b, c, function(a) { return a ? "%s 秒后即可重发" : f }, window.$.proxy(d, a));
        z.Ac(a, b)
    };
    var mq = function(a) { z.Pj.call(this, "SimpleSign " + (void 0 === a ? "" : a)) };
    var nq = function(a) {
        function b() {
            (0, window.clearTimeout)(g);
            g = null;
            try {
                delete window[d]
            } catch (a) {
                window[d] = null
            }
        }

        "string" === window.$.type(a) && (a = { url: a });
        a = a || {};
        var c = window.$.Deferred(),
            d = "zh" + (0, z.I)() + Gn(),
            f = window.$.extend({}, a.data || {}, { callback: d }),
            g = null;
        a.timeout &&
            (g = (0, window.setTimeout)(function() { window[d] && (window[d] = b, c.reject("timeout")) }, a.timeout));
        window[d] = c.resolve;
        a = a.url + (-1 === a.url.indexOf("?") ? "?" : "\x26") + window.$.param(f);
        z.Ak(a).fail(c.reject).always(b);
        return c.promise()
    };
    var oq = function(a, b) {
        b = void 0 === b ? 0 : b;
        z.H.call(this);
        this.HO = Object.assign({}, pq, a);
        this.UW = b;
        this.Ev = 1E3;
        this.xJ = 3E4;
        this.sT = 1.5
    };
    z.qq = function(a, b) {
        a = void 0 === a ? z.r : a;
        b = void 0 === b ? !1 : b;
        z.Q.call(this);
        this.HB = a;
        this.AY = b
    };
    var rq = function(a) {
        window.$.get("/antispam/get_token").then(function(b) {
            a.token = b.token;
            a.timeout = b.ttl;
            a.startTime = Date.now();
            (0, window.$)(".js-token", a.h).text(a.token);
            (0, window.$)(".js-timeout", a.h).text((0, window.parseInt)(a.timeout / 60))
        })
    };
    var sq = function(a) {
        var b = (0, window.$)(".js-sent", a.h);
        b.click(z.Ci(b,
            function() {
                if (Date.now() > a.startTime + 1E3 * a.timeout) return rq(a), tq(a, "短信超时，请重新发送");
                uq(a);
                a.sl.show();
                return window.$.get("/antispam/is_send_sms").then(function(b) {
                        b.is_send_sms ? vq(a, b.is_delay ? "appeal" : "unblock") : tq(a, "没收到正确的短信，请重新发送");
                        a.sl.hide()
                    },
                    function() { a.sl.hide() })
            }))
    };
    var wq = function(a) {
        var b = (0, window.$)(".js-verify", a.h);
        b.click(z.Ci(b,
            function() {
                var b = a.captcha.Aj.val();
                if (!b) return tq(a, "请填写验证码");
                uq(a);
                a.sl.show();
                var d = 2 === a.Yp;
                return (d ? xq : yq)(b).then(function(b) {
                        0 === b.errcode ? vq(a, d ? "unblock" : "appeal") : (a.captcha.hn(), tq(a, b.msg), a.sl.hide())
                    },
                    function() { a.sl.hide() })
            }))
    };
    var zq = function(a) {
        (0, window.$)(".js-appeal", a.h).click(function() {
            a.HB("无法发送短信");
            a.Vw.hide();
            (0, window.$)(".unblock-dialog-appeal", a.h).show();
            a.captcha.hn();
            uq(a)
        });
        (0, window.$)(".js-message", a.h).click(function() {
            a.HB("帐号解封");
            a.Vw.hide();
            (0, window.$)(".unblock-dialog-message", a.h).show();
            uq(a)
        })
    };
    var Aq = function(a) {
        a.Bq = new oq({ url: "/antispam/is_send_sms" }, 1E3);
        z.Ac(a, a.Bq);
        a.Bq.g("message", function(b) { b.data.is_send_sms && vq(a, b.data.is_delay ? "appeal" : "unblock") });
        a.Bq.mv()
    };
    var Bq = function(a) {
        function b() {
            0 >= d ? a.dispatchEvent("complete") : (c.text(d-- + " 秒后自动关闭"), (0, window.setTimeout)(b, 1E3))
        }

        var c = (0, window.$)(".js-count-down", a.h);
        c.show();
        var d = 5;
        b()
    };
    var vq = function(a, b) {
        a.Bq && a.Bq.dispose();
        var c;
        "unblock" === b ? c = "成功自助解封" : "appeal" === b && (c = "成功提交申诉\x3cbr\x3e申诉成功后会以邮件或私信方式通知您");
        (0, window.$)(".unblock-dialog-success-text", a.h).html(c);
        a.Vw.hide();
        (0, window.$)(".unblock-dialog-success", a.h).show();
        a.AY && Bq(a)
    };
    var tq = function(a, b) { a.ql.text(b).addClass("is-visible") };
    var uq = function(a) { a.ql.removeClass("is-visible") };
    var yq = function(a) { return window.$.post("/antispam/create_appeal", { captcha: a }) };
    var xq = function(a) { return window.$.post("/antispam/captcha_appeal", { captcha: a }) };
    var Cq = function(a) { z.R.apply(this, arguments) };
    z.Dq = function(a, b, c) {
        function d(a) { return a && a.preventDefault ? a.preventDefault() : !1 }

        return function(f) {
            var g = { jb: !0, Sd: !1, Tu: !1, WK: !1 };
            z.ma(b)
                ? (!0 === b[0] && (g = No(g, function() { return !0 })), z.Mb(g, b[1]))
                : !0 === b
                ? g = No(g, function() { return !0 })
                : (z.qa(b) && (b = b.apply(this, arguments)), z.Mb(g, b || {}));
            var h = z.qa(c) ? c.apply(this, arguments) : c;
            if (!z.Y.jb() && g.jb) {
                var k = new (z.Sm ? mq : z.yk);
                k.qn(h);
                k.show();
                return d(f)
            }
            return !z.Y.Sd && g.Sd
                ? ((new gq).F(!0), window.$.post("/continuation/record",
                {
                    url: window.location.pathname +
                        window.location.search +
                        (h || "")
                }), d(f))
                : z.im.GG && g.WK
                ? (h = z.im.GG, "warning" === h
                    ? k =
                    '您的知乎用户名不符合 \x3ca href\x3d"/question/19791408"\x3e知乎用户名规范\x3c/a\x3e，请您 \x3ca href\x3d"/settings/profile"\x3e修改\x3c/a\x3e。'
                    : "pending" === h && (k = "您提交的用户名修改正在审核中，帐号暂时锁定。"), k && z.T.message(k, 4E3), d(f))
                : z.im.Ex && g.Tu
                ? (z.im.Ex.by_antispam ? (new Cq).F(!0) : z.T.message(z.im.Ex.message), d(f))
                : a.apply(this, arguments)
        }
    };
    var Eq = function() {
        z.H.call(this);
        this.N = Fq;
        this.endTime = this.startTime = null
    };
    var Gq = function(a, b, c) {
        z.xc.call(this);
        this.Ek = a;
        this.Gh = b || 0;
        this.ea = c;
        this.Pl = (0, z.t)(this.qh, this)
    };
    var Hq = function(a) { a.Jc() && a.fire() };
    var Iq = function(a) {
        a = z.ta(a);
        delete Jq[a];
        z.Jb(Jq) && Kq && Kq.stop()
    };
    var Lq = function() {
        Kq || (Kq = new Gq(function() { Mq() }, 20));
        var a = Kq;
        a.Jc() || a.start()
    };
    var Mq = function() {
        var a = (0, z.I)();
        z.Db(Jq, function(b) { Nq(b, a) });
        z.Jb(Jq) || Lq()
    };
    var Oq = function(a, b, c, d) {
        Eq.call(this);
        if (!z.ma(a) || !z.ma(b)) throw Error("Start and end parameters must be arrays");
        if (a.length != b.length) throw Error("Start and end points must be the same length");
        this.kr = a;
        this.NQ = b;
        this.duration = c;
        this.zE = d;
        this.coords = [];
        this.uj = !1;
        this.progress = 0
    };
    var Nq = function(a, b) {
        a.progress = (b - a.startTime) / (a.endTime - a.startTime);
        1 <= a.progress && (a.progress = 1);
        Pq(a, a.progress);
        1 == a.progress ? (a.N = Fq, Iq(a), a.Bd("finish"), a.Lg()) : 1 == a.N && a.wB()
    };
    var Pq = function(a, b) {
        z.qa(a.zE) && (b = a.zE(b));
        a.coords = Array(a.kr.length);
        for (var c = 0; c < a.kr.length; c++) a.coords[c] = (a.NQ[c] - a.kr[c]) * b + a.kr[c]
    };
    var Qq = function(a, b) {
        z.Lc.call(this, a);
        this.coords = b.coords;
        this.x = b.coords[0];
        this.y = b.coords[1];
        this.z = b.coords[2];
        this.duration = b.duration;
        this.progress = b.progress;
        this.state = b.N;
        this.c0 = b
    };
    var Rq = function(a) {
        var b = {};
        a = String(a);
        var c = "#" == a.charAt(0) ? a : "#" + a;
        if (Sq.test(c)) return b.Wt = Tq(c), b.type = "hex", b;
        c = Uq(a);
        if (c.length) {
            var d = c[0];
            a = c[1];
            c = c[2];
            d = Number(d);
            a = Number(a);
            c = Number(c);
            if ((0, window.isNaN)(d) ||
                0 > d ||
                255 < d ||
                (0, window.isNaN)(a) ||
                0 > a ||
                255 < a ||
                (0, window.isNaN)(c) ||
                0 > c ||
                255 < c) throw Error('"(' + d + "," + a + "," + c + '") is not a valid RGB color');
            d = Vq(d.toString(16));
            a = Vq(a.toString(16));
            c = Vq(c.toString(16));
            b.Wt = "#" + d + a + c;
            b.type = "rgb";
            return b
        }
        if (Wq && (c = Wq[a.toLowerCase()]))
            return b.Wt =
                c, b.type = "named", b;
        throw Error(a + " is not a valid color string");
    };
    var Tq = function(a) {
        if (!Sq.test(a)) throw Error("'" + a + "' is not a valid hex color");
        4 == a.length && (a = a.replace(Xq, "#$1$1$2$2$3$3"));
        return a.toLowerCase()
    };
    var Uq = function(a) {
        var b = a.match(Yq);
        if (b) {
            a = Number(b[1]);
            var c = Number(b[2]), b = Number(b[3]);
            if (0 <= a && 255 >= a && 0 <= c && 255 >= c && 0 <= b && 255 >= b) return [a, c, b]
        }
        return []
    };
    var Vq = function(a) { return 1 == a.length ? "0" + a : a };
    var Zq = function(a, b, c, d, f) {
        Oq.call(this, b, c, d, f);
        this.element = a
    };
    var $q = function(a, b, c, d, f) {
        if (2 != b.length || 2 != c.length) throw Error("Start and end points must be 2D");
        Zq.apply(this, arguments)
    };
    var ar = function(a, b, c, d, f) {
        if (2 != b.length || 2 != c.length) throw Error("Start and end points must be 2D");
        Zq.apply(this, arguments)
    };
    var br = function(a, b, c, d, f) { Zq.call(this, a, [b], [c], d, f) };
    var cr = function(a, b, c, d, f) { Zq.call(this, a, [b], [c], d, f) };
    var dr = function(a, b, c, d, f) {
        z.pa(b) && (b = [b]);
        z.pa(c) && (c = [c]);
        Zq.call(this, a, b, c, d, f);
        if (1 != b.length || 1 != c.length) throw Error("Start and end points must be 1D");
        this.uu = er
    };
    var fr = function(a, b, c) { dr.call(this, a, 1, 0, b, c) };
    var gr = function(a, b, c) { dr.call(this, a, 0, 1, b, c) };
    var hr = function(a, b, c, d, f) {
        if (3 != b.length || 3 != c.length) throw Error("Start and end points must be 3D");
        Zq.apply(this, arguments)
    };
    var ir = function() { return window.$.Deferred(function(a) { (0, window.setTimeout)(a.resolve, 2E3) }).promise() };
    var jr = function(a, b) {
        var c = z.vo(a, function(a) { return 3 === a.nodeType && !z.bp(a.nodeValue) })[0];
        c && (c.nodeValue = b)
    };
    z.kr = function(a, b) {
        var c = new fr(a, 500);
        b && z.G(c, "finish", (0, z.t)(function() { z.N(this) }, a));
        c.play()
    };
    z.lr = function(a, b, c, d) {
        "bottom" === d && (d = "b");
        var f = "";
        !1 !== c && (f = 'data-hovercard\x3d"t$' + (d || "t") + "$" + a[1] + '"');
        return ["\x3ca ", f, ' class\x3d"', b || "zm-item-tag", '" href\x3d"/topic/', a[1], '"\x3e', a[0], "\x3c/a\x3e"]
            .join("")
    };
    z.mr = function(a) { return a ? a.replace(/^\s+/, "").replace(/\s+$/, "") : "" };
    var nr = function(a) { return a ? a.replace(/<[^>]+>/g, "") : "" };
    var or = function() {
        return '\x3ca href\x3d"javascript:;" class\x3d"zu-edit-button" name\x3d"edit"\x3e\x3ci class\x3d"zu-edit-button-icon"\x3e\x3c/i\x3e修改\x3c/a\x3e'
    };
    z.pr = function(a, b) {
        z.P(a, !0);
        z.P(b, !1)
    };
    var qr = function(a, b, c) {
        var d;
        a &&
        (b = (0, window.$)(a)
            .data("animation") ||
            new hr(a, [255, 255, 150], b || [255, 255, 255], c || 2E3), (0, window.$)(a)
            .data("animation", b), 1 == b.N && b.stop(!0), d = a.style.backgroundColor, z
            .ld(b, "end", function() { z.Ig(this.element, "background-color", d) }, !1, b), b.play())
    };
    z.rr = function(a, b, c) {
        a &&
        (sr && window.document[tr]
            ? z.G(window.document,
                ur,
                function f() { window.document[tr] || (qr(a, b, c), z.md(window.document, ur, f)) })
            : qr(a, b, c))
    };
    var vr = function(a) {
        var b = 0, c = 0;
        do c = a.indexOf("?", c), -1 !== c && (b++, c += 1);
        while (-1 !== c);
        return b
    };
    var wr = function(a, b, c) {
        b = z.yb(a.data, 1);
        if ("topic" === a.data[0]) {
            a = (b[2] ? '\x3cimg class\x3d"zm-item-img-avatar zg-left" src\x3d"' + b[2] + '"\x3e' : "") +
                '\x3cspan class\x3d"zu-autocomplete-row-name' +
                (b[3] ? "" : " zu-autocomplete-row-name-info") +
                '" title\x3d"' +
                b[0] +
                '"\x3e' +
                b[0] +
                "\x3c/span\x3e";
            var d = 5 < b.length && b[5];
            4 <= b.length &&
            (a += '\x3cspan class\x3d"zg-gray-normal zu-autocomplete-row-description"\x3e',
                b[4] || d
                    ? (d && (a += "又称 " + b[5]), b[4] && d && (a += "，"), b[4] && (a += b[4] + " 人关注"))
                    : a += "\x26nbsp;", a += "\x3c/span\x3e");
            c.innerHTML = a
        } else if ("people" === a.data[0]) {
            a = Array.isArray(b[5]) ? b[5] : [b[5]];
            var f = d = "";
            (a[0] || a[1]) && a[2]
                ? f = '\x3cspan class\x3d"icon icon-badge icon-badge-id-an"\x3e\x3c/span\x3e'
                : a[0]
                ? f = '\x3cspan class\x3d"OrgIcon sprite-global-icon-org-14"\x3e\x3c/span\x3e'
                : a[1]
                ? (d = b[6] || "", f = '\x3cspan class\x3d"icon icon-badge icon-badge-identity"\x3e\x3c/span\x3e')
                : a[2] &&
                (d = "优秀回答者", f = '\x3cspan class\x3d"icon icon-badge icon-badge-best_answerer"\x3e\x3c/span\x3e');
            c.innerHTML = '\n      \x3cimg class\x3d"zm-item-img-avatar zg-left" src\x3d"' +
                b[2] +
                '"\x3e\n      \x3cdiv class\x3d"zu-autocomplete-row-name" title\x3d"' +
                b[0] +
                '"\x3e\n        ' +
                b[0] +
                f +
                '\n      \x3c/div\x3e\n      \x3cdiv class\x3d"zu-autocomplete-row-description"\x3e\n        \x3cspan class\x3d"badge-summary"\x3e' +
                d +
                '\x3c/span\x3e\n        \x3cspan class\x3d"zg-gray-normal bio"\x3e' +
                (b[4] || "\x26nbsp;") +
                "\x3c/span\x3e\n      \x3c/div\x3e\n    "
        } else
            "question" === a.data[0]
                ? c.innerHTML = b[0] + '\x3cspan class\x3d"zm-ac-gray"\x3e问题\x3c/span\x3e'
                : "plain_text" === a.data[0]
                ? (c.innerHTML =
                    a.data[1], z.S.add(c, b[1]))
                : "sina" === a.data[0] && (c.innerHTML = b[0])
    };
    var xr = function(a, b, c) {
        var d;
        b = z.yb(a.data, 1);
        var f = void 0, g;
        if ("topic" === a.data[0]) {
            a = [
                "\x3ca ", ' style\x3d"display:block" href\x3d"/topic/' +
                b[1] +
                '"\x3e\x3cspan class\x3d"zm-item-tag"\x3e', b[0], "\x3c/span\x3e"
            ].join("");
            d = 6 < b.length && b[6];
            if (b[5] || d) {
                a += '\x3cspan class\x3d"zm-ac-gray"\x3e';
                var h = [];
                d && h.push("又称 " + b[6]);
                (d = (0, window.parseInt)(b[5], 10)) && h.push(d + " 个精华问答");
                a += h.join("，");
                a += "\x3c/span\x3e"
            } else a += '\x3cspan class\x3d"zm-ac-gray" \x3e\x26nbsp;\x3c/span\x3e';
            c.innerHTML = a + "\x3c/a\x3e";
            f = "Topic";
            g = b[1]
        } else if ("people" === a.data[0]) {
            a = Array.isArray(b[5]) ? b[5] : [b[5]];
            var h = a[0], k = d = "";
            (h || a[1]) && a[2]
                ? k = '\x3cspan class\x3d"icon icon-badge icon-badge-id-an"\x3e\x3c/span\x3e'
                : h
                ? k = '\x3cspan class\x3d"OrgIcon sprite-global-icon-org-14"\x3e\x3c/span\x3e'
                : a[1]
                ? (d = b[6] || "", k = '\x3cspan class\x3d"icon icon-badge icon-badge-identity"\x3e\x3c/span\x3e')
                : a[2] &&
                (d = "优秀回答者", k = '\x3cspan class\x3d"icon icon-badge icon-badge-best_answerer"\x3e\x3c/span\x3e');
            c.innerHTML = '\n        \x3ca href\x3d"/' +
                (h ? "org" : "people") +
                "/" +
                b[1] +
                '" title\x3d"' +
                b[0] +
                '"\n          class\x3d"zm-ac-link zm-ac-link-people"\x3e\n          \x3cimg class\x3d"zm-item-img-avatar zg-left" src\x3d"' +
                b[2] +
                '"\x3e\n          \x3cdiv class\x3d"zu-autocomplete-row-name" title\x3d"' +
                b[0] +
                '"\x3e\n            ' +
                b[0] +
                k +
                '\n          \x3c/div\x3e\n          \x3cdiv class\x3d"zu-autocomplete-row-description"\x3e\n            \x3cspan class\x3d"badge-summary"\x3e' +
                d +
                '\x3c/span\x3e\n            \x3cspan class\x3d"zg-gray-normal bio"\x3e' +
                b[4] +
                "\x3c/span\x3e\n          \x3c/div\x3e\n        \x3c/a\x3e\n      ";
            f = "User";
            g = b[1]
        } else
            "question" === a.data[0]
                ? (d = (0, window.parseInt)(b[3], 10), c
                    .innerHTML = (b[4]
                        ? '\x3ca class\x3d"zg-star" data-tooltip\x3d"s$b$优质问答" href\x3d"/question/' +
                        b[2] +
                        '"\x3e\x3c/a\x3e'
                        : "") +
                    ['\x3ca class\x3d"zm-ac-link"', 'href\x3d"/question/' + b[2] + '"\x3e', b[0]].join("") +
                    ('\x3cspan class\x3d"zm-ac-gray"\x3e' + (d ? d + " 个回答" : "还没有回答") + "\x3c/span\x3e\x3c/a\x3e"), f =
                    "Question", g = b[2].toString())
                : "column" === a.data[0]
                ? (a = b[0], h = b[2].toString(),
                    d = b[5], b = (0, window
                        .parseInt)(b[3], 10), k = "", 0 < b &&
                        (k = '\x3cspan class\x3d"zm-ac-gray"\x3e ' + b + " 人关注\x3c/span\x3e"), c
                        .innerHTML = '\n        \x3ca class\x3d"zm-ac-link" href\x3d"https://zhuanlan.zhihu.com/' +
                        h +
                        '"\x3e\n          \x3cimg class\x3d"zm-item-img-avatar column-avatar zg-left" src\x3d"' +
                        d +
                        '"\x3e' +
                        a +
                        k +
                        "\n        \x3c/a\x3e\n      ", f = "Column", g = h)
                : "article" === a.data[0] || "promotion" === a.data[0]
                ? (a = a.data[0], h = b[0], d = b[2].toString(), b = (0, window.parseInt)(b[3], 10), k = "", 0 < b &&
                (k = '\x3cspan class\x3d"zm-ac-gray"\x3e ' +
                    b +
                    " 个赞\x3c/span\x3e"), c.innerHTML = '\n        \x3ca class\x3d"zm-ac-link" href\x3d"https://' +
                    ("promotion" === a ? "promotion" : "zhuanlan") +
                    ".zhihu.com/p/" +
                    d +
                    '"\x3e\n          ' +
                    h +
                    k +
                    "\n        \x3c/a\x3e\n      ", f = "promotion" === a ? "Ad" : "Post", g = d)
                : "search_link" === a.data[0]
                ? (c.innerHTML = '\x3ca href\x3d"/search?q\x3d' +
                    b[0] +
                    '\x26type\x3dquestion" data-za-element-name\x3d"ViewAll"\x3e查看全部搜索结果\x3ci class\x3d"zg-icon arrow"\x3e\x3c/i\x3e\x3c/a\x3e', z.S.add(c, "zu-autocomplete-row-search-link"))
                : "plain_text" ===
                a.data[0]
                ? c.innerHTML = b[0]
                : "sina" === a.data[0] &&
                (c.innerHTML = [
                    '\x3ca href\x3d"javascript:;" title\x3d"' + b[0] + '"\x3e',
                    '\x3cimg class\x3d"zm-item-img-avatar" src\x3d"' + b[2] + '" /\x3e', b[0], "\x3c/a\x3e"
                ].join(""));
        f &&
            g &&
            c &&
            z.V.Ya(c,
                { module: f + "Item", index: "" },
                function() { return { card: { card_type: "Content", content: { type: f, token: g } } } });
        (0, window.$)("a", c).click(function(a) { a.preventDefault() })
    };
    z.yr = function(a, b, c) {
        for (c = c || "A"; null != b && b !== a;) {
            if (b.tagName === c) return b;
            b = b.parentNode
        }
        return null
    };
    z.zr = function(a) {
        this.XT = a;
        this.data = new z.Qd
    };
    var Ar = function(a) { return (a = z.mr(a)) ? a.length : 0 };
    var Br = function(a, b, c, d) {
        window._gaq || (window._gaq = []);
        c && (c = "" + c);
        d && (d = (0, window.parseInt)(d, 10));
        window._gaq.push(["_trackEvent", a, b, c, d]);
        z.Ck && Cr("trackEvent(deprecated)", z.vb(arguments))
    };
    var Dr = function(a) {
        return (a = String(a).toLowerCase()) ? z.ob([".jpg", ".jpeg", ".png"], function(b) { return z.cp(a, b) }) : !1
    };
    var Er = function(a, b) {
        function c(b) { return a.getElementsByTagName(b).length }

        var d = ["img", "embed"];
        return b && z.ob(d, c) ? !1 : !z.Uo(z.Fr, z.ab, z.qf)(a)
    };
    z.Gr = function(a, b) {
        var c = window.$.extend({ all: !1 }, z.Gr.defaults, b || {}),
            d = (0, window.$)(a).get(0).getBoundingClientRect();
        return !c.all && (d.bottom < c.paddingTop || d.bottom > (0, window.$)(window).height()) ||
            c.all && (d.top < c.paddingTop || d.bottom > (0, window.$)(window).height())
            ? !1
            : !0
    };
    z.Hr = function(a, b) {
        if (a) {
            "number" === window.$.type(b) && (b = { offsetTop: b });
            var c = window.$.extend({ OD: z.Gr }, Ir, b || {});
            if (!c.OD(a, c)) {
                var d = (0, window.$)(a).offset().top - c.paddingTop - c.offsetTop || 0;
                c.rx
                    ? (0, window.$)(window.document.documentElement).add(window.document.body).animate({ scrollTop: d })
                    : (0, window.$)(window).scrollTop(d)
            }
        }
    };
    var Jr = function(a) {
        (0, window.$)(a.target.M.h).off("click.disable-a")
            .on("click.disable-a", "a", function(a) { a.preventDefault() })
    };
    z.Kr = function(a, b, c) {
        var d, f = 0, g = null;
        return function() {
            function h() { b.apply(k, l) }

            var k = this, l = arguments;
            c
                ? ((0, window.clearTimeout)(g), g = (0, window.setTimeout)(h, a))
                : (d = Date.now(), d - f >= a && h(), f = d)
        }
    };
    var Lr = function(a, b) {
        var c = a.getBoundingClientRect(), d = z.fh(window.document.body).top;
        if (0 < c.top - d) b && b();
        else {
            var f = a.offsetHeight, g = ko(window.document).y, h = z.Qe().height;
            b && b();
            var k = a.offsetHeight;
            window.scrollTo(0, g + (c.bottom < h ? k - f : c.top - d))
        }
    };
    z.Mr = function(a) {
        return 1E4 > a
            ? a.toString()
            : 1E6 > a
            ? (0, window.parseInt)(a / 1E3) + "K"
            : 1E9 > a ? (0, window.parseInt)(a / 1E6) + "M" : (0, window.parseInt)(a / 1E9) + "G"
    };
    z.Nr = function(a) {
        z.H.call(this);
        this.dJ = null;
        this.Id = a;
        this.o().g(this.Id, ["input", "propertychange"], this.EM);
        Or(this, !0);
        z.S.add(this.Id, "zu-seamless-input-origin-element")
    };
    var Or = function(a, b) {
        Pr(a);
        if (a.Ig) {
            var c = a.Id.value;
            if (b || a.dJ !== c)
                a.dJ = c, a.Ig.value = c, c = z.ih(a.Id), a.Id.style.height = z
                    .Rg(a.Ig.scrollHeight + c.top + c.bottom, !0), a.dispatchEvent("change")
        }
    };
    var Pr = function(a) {
        if (!a.Ig && 0 !== z.Qn(a.Id).width) {
            var b = z.M("div",
                { style: "overflow:hiddenposition:relativeheight:0" },
                a.Ig = z.M("textarea", { rows: 1, className: "zu-seamless-input-mock-element" }));
            window.document.body.appendChild(b);
            z
                .Db("paddingTop paddingBottom fontFamily fontSize fontWeight fontStyle letterSpacing textTransform wordSpacing textIndent lineHeight width white-space".split(" "), function(a) { this.Ig.style[a] = z.Mg(this.Id, a) }, a)
        }
    };
    var Qr = function(a) { this.vx = a };
    var Rr = function(a, b) { a && (a.tabIndex = b ? 0 : -1) };
    var Sr = function(a, b, c) {
        if (c)
            for (var d = c.firstChild, f; d && d.parentNode == c;) {
                f = d.nextSibling;
                if (1 == d.nodeType) {
                    var g = a.Uo(d);
                    g && (g.h = d, b.isEnabled() || g.gb(!1), b.K(g), g.w(d))
                } else d.nodeValue && "" != (0, z.ab)(d.nodeValue) || c.removeChild(d);
                d = f
            }
    };
    z.Tr = function(a, b, c) {
        z.Q.call(this, c);
        this.M = b || Qr.ba();
        this.Xb = a || this.M.hH()
    };
    var Ur = function(a, b) {
        var c = a.o(), d = a.jc();
        b
            ? c.g(d, "focus", a.ye).g(d, "blur", a.od).g(a.At(), "key", a.kc)
            : c.pa(d, "focus", a.ye).pa(d, "blur", a.od).pa(a.At(), "key", a.kc)
    };
    var Vr = function(a, b) {
        var c = b.m(), c = c.id || (c.id = b.xe());
        a.kh || (a.kh = {});
        a.kh[c] = b
    };
    var Wr = function(a) { return z.Bh(a, a.$a) };
    z.Xr = function(a) { Yr(a, function(a, c) { return (a + 1) % c }, z.Ah(a) - 1) };
    var Zr = function(a) {
        Yr(a,
            function(a, c) {
                a--;
                return 0 > a ? c - 1 : a
            },
            0)
    };
    var $r = function(a) { Yr(a, function(a, c) { return (a + 1) % c }, a.$a) };
    var as = function(a) {
        Yr(a,
            function(a, c) {
                a--;
                return 0 > a ? c - 1 : a
            },
            a.$a)
    };
    var Yr = function(a, b, c) {
        c = 0 > c ? yn(a, a.wc) : c;
        var d = z.Ah(a);
        c = b.call(a, c, d);
        for (var f = 0; f <= d;) {
            var g = z.Bh(a, c);
            if (g && a.rF(g)) {
                a.Hb(c);
                break
            }
            f++;
            c = b.call(a, c, d)
        }
    };
    var bs = function() {
        z.Q.call(this);
        this.zw = []
    };
    z.cs = function(a, b) {
        this.Oa = a || [];
        this.LD = !b
    };
    var ds = function(a, b, c) {
        var d = [];
        if ("" != a) {
            a = z.Xa(a);
            a = new RegExp("(^|\\W+)" + a, "i");
            for (var f = 0; f < c.length && d.length < b; f++) {
                var g = c[f];
                String(g).match(a) && d.push(g)
            }
        }
        return d
    };
    var es = function(a, b, c) {
        for (var d = [], f = 0; f < c.length; f++) {
            var g = c[f], h = a.toLowerCase(), k = String(g).toLowerCase(), l = 0;
            if (-1 != k.indexOf(h)) l = (0, window.parseInt)((k.indexOf(h) / 4).toString(), 10);
            else
                for (var n = h
                             .split(""),
                    q = -1,
                    v = 10,
                    F = 0,
                    K;
                    K = n[F];
                    F++)
                    K = k.indexOf(K), K > q
                        ? (q = K - q - 1, q > v - 5 && (q = v - 5), l += q, q = K)
                        : (l += v, v += 5);
            l < 6 * h.length && d.push({ QY: g, tL: l, index: f })
        }
        d.sort(function(a, b) {
            var c = a.tL - b.tL;
            return 0 != c ? c : a.index - b.index
        });
        a = [];
        for (F = 0; F < b && F < d.length; F++) a.push(d[F].QY);
        return a
    };
    z.fs = function(a, b, c) {
        z.H.call(this);
        this.ae = a;
        this.$f = c;
        this.M = b;
        z.G(b, [gs, z.hs, is, z.js], this.handleEvent, !1, this);
        this.gc = null;
        this.Oa = [];
        this.Dh = -1;
        this.kd = 0;
        this.pe = this.Nc = null;
        this.wI = {}
    };
    z.ks = function(a) {
        for (var b = a.kd + a.Oa.length - 1, c = a.Dh, d = 0; d < a.Oa.length; d++) {
            if (c >= a.kd && c < b) c++;
            else if (-1 == c) c = a.kd;
            else if (a.NE && c == b) {
                a.Cg(-1);
                break
            } else if (a.dN && c == b) c = a.kd;
            else break;
            if (a.Cg(c)) break
        }
    };
    var ls = function(a) {
        for (var b = a.kd + a.Oa.length - 1, c = a.Dh, d = 0; d < a.Oa.length; d++) {
            if (c > a.kd) c--;
            else if (a.NE && c == a.kd) {
                a.Cg(-1);
                break
            } else if (!a.dN || -1 != c && c != a.kd) break;
            else c = b;
            if (a.Cg(c)) break
        }
    };
    z.ms = function(a) { a.lI() || window.setTimeout((0, z.t)(a.lI, a), 10) };
    var ns = function(a, b) {
        var c = b - a.kd;
        return 0 > c || c >= a.Oa.length ? -1 : c
    };
    z.os = function(a) {
        var b = 0, c = 0;
        if (ps(a)) b = a.selectionStart, c = -1;
        else if (z.C) {
            var d = qs(a), f = d[0], d = d[1];
            if (f.inRange(d)) {
                f.setEndPoint("EndToStart", d);
                if ("textarea" == a.type) {
                    d.duplicate();
                    b = a = f.text;
                    for (c = !1; !c;)
                        0 == f.compareEndPoints("StartToEnd", f)
                            ? c = !0
                            : (f.moveEnd("character", -1), f.text == a ? b += "\r\n" : c = !0);
                    f = [b.length, -1];
                    return f
                }
                b = f.text.length;
                c = -1
            }
        }
        return [b, c]
    };
    z.rs = function(a, b) {
        if (ps(a)) a.selectionStart = b, a.selectionEnd = b;
        else if (z.C) {
            b = ss(a, b);
            var c = a.createTextRange();
            c.collapse(!0);
            c.move("character", b);
            c.select()
        }
    };
    var qs = function(a) {
        var b = a.ownerDocument || a.document, c = b.selection.createRange();
        "textarea" == a.type ? (b = b.body.createTextRange(), b.moveToElementText(a)) : b = a.createTextRange();
        return [b, c]
    };
    var ss = function(a, b) {
        "textarea" == a.type && (b = z.Ka(a.value.substring(0, b)).length);
        return b
    };
    var ps = function(a) {
        try {
            return "number" == typeof a.selectionStart
        } catch (b) {
            return !1
        }
    };
    z.ts = function(a, b, c, d) {
        z.xc.call(this);
        d = d || 150;
        this.Tm = null != c ? c : !0;
        this.Tq = a || ",;";
        this.jQ = this.Tq.substring(0, 1);
        a = this.Tm ? "[\\s" + this.Tq + "]+" : "[\\s]+";
        this.xM = new RegExp("^" + a + "|" + a + "$", "g");
        this.oY = new RegExp("\\s*[" + this.Tq + "]$");
        this.jJ = b || "";
        this.dX = !1;
        this.cX = this.Tm;
        this.la = 0 < d ? new z.td(d) : null;
        this.pc = new z.xd(this);
        this.$w = new z.xd(this);
        this.Fb = new Ap;
        this.aJ = -1
    };
    var us = function(a, b, c) {
        if (z.ja(c) ? c : a.Tm) {
            c = vs(a, a.X(), z.os(a.pb)[0]);
            var d = ws(a, a.X());
            a.oY.test(b) || (b = z.Xo(b) + a.jQ);
            a.UZ && (0 == c || z.bp(d[c - 1]) || (b = " " + b), c == d.length - 1 && (b += " "));
            if (b != d[c]) {
                d[c] = b;
                b = a.pb;
                (z.B || z.C && z.E("9")) && b.blur();
                b.value = d.join("");
                for (var f = 0, g = 0; g <= c; g++) f += d[g].length;
                b.focus();
                c = f;
                d = a.pb;
                b = c;
                ps(d)
                    ? d.selectionStart = b
                    : z.C &&
                    (f = qs(d), g = f[0], g.inRange(f[1]) &&
                        (b = ss(d, b), g.collapse(!0), g.move("character", b), g.select()));
                d = a.pb;
                ps(d)
                    ? d.selectionEnd = c
                    : z.C &&
                    (f = qs(d), b = f[1], f[0].inRange(b) &&
                    (c = ss(d, c), d = ss(d, z.os(d)[0]), b.collapse(!0), b.moveEnd("character", c - d), b
                        .select()))
            }
        } else a.Da(b);
        a.wC = !0
    };
    var xs = function(a, b) {
        var c = a.Tm && b.charCode && -1 != a.Tq.indexOf(String.fromCharCode(b.charCode));
        a.qY && c && a.update();
        return a.pY && c && a.Y.jj() ? (b.preventDefault(), !0) : !1
    };
    var ys = function(a) {
        a.Fb.attach(a.pb);
        a.pc.g(a.Fb, "key", a.wq);
        a.pc.g(a.pb, "mousedown", a.hK);
        z.C && a.pc.g(a.pb, "keypress", a.eK)
    };
    var zs = function(a, b) {
        a.$w.removeAll();
        a.Y && z.ms(a.Y);
        b != a.pb && (a.pb = b, a.la && (a.la.start(), a.pc.g(a.la, "tick", a.zq)), a.Xp = a.X(), ys(a))
    };
    var As = function(a) { a.vj && (a.vj = !1, a.pc.pa(a.pb, "keypress", a.fK), a.pc.pa(a.pb, "keyup", a.gK)) };
    var vs = function(a, b, c) {
        a = ws(a, b);
        if (c == b.length) return a.length - 1;
        for (var d = b = 0, f = 0; d < a.length && f <= c; d++) f += a[d].length, b = d;
        return b
    };
    var ws = function(a, b) {
        if (!a.Tm) return [b];
        for (var c = String(b)
                     .split(""),
            d = [],
            f = [],
            g = 0,
            h = !1;
            g < c.length;
            g++)
            a.jJ && -1 != a.jJ.indexOf(c[g])
                ? (a.hR && !h && (d.push(f.join("")), f.length = 0), f.push(c[g]), h = !h)
                : h || -1 == a.Tq.indexOf(c[g]) ? f.push(c[g]) : (f.push(c[g]), d.push(f.join("")), f.length = 0);
        d.push(f.join(""));
        return d
    };
    z.Bs = function(a, b, c) {
        z.xc.call(this);
        this.FD = a;
        this.LD = !b;
        this.da = new z.de(c)
    };
    z.Cs = function(a, b, c, d, f, g, h, k, l) {
        var n = Ds(c), q = go(a), v = jo(a);
        v && q.zA(new z.Hg(v.left, v.top, v.right - v.left, v.bottom - v.top));
        var v = z.Ie(a), F = z.Ie(c);
        if (v.wa() != F.wa()) {
            var K = v.wa().body;
            var F = F.eb(), O = new z.Ge(0, 0), ca = z.Te(z.Ke(K));
            if (z.Oc(ca, "parent")) {
                var Va = K;
                do {
                    var Sa = ca == F ? z.In(Va) : z.Vg(Va);
                    O.x += Sa.x;
                    O.y += Sa.y
                } while (ca && ca != F && ca != ca.parent && (Va = ca.frameElement) && (ca = ca.parent))
            }
            K = Vn(O, z.In(K));
            !z.C || 9 <= z.jh || Cn(v) || (K = Vn(K, z.xf(v)));
            q.left += K.x;
            q.top += K.y
        }
        a = Es(a, b);
        q = new z.Ge(a & 2 ? q.left + q.width : q.left, a & 1 ? q.top + q.height : q.top);
        q = Vn(q, n);
        f && (q.x += (a & 2 ? -1 : 1) * f.x, q.y += (a & 1 ? -1 : 1) * f.y);
        var Aa;
        if (h)
            if (l) Aa = l;
            else if (Aa = jo(c)) Aa.top -= n.y, Aa.right -= n.x, Aa.bottom -= n.y, Aa.left -= n.x;
        return Fs(q, c, d, g, Aa, h, k)
    };
    var Ds = function(a) {
        var b;
        if (a = a.offsetParent) {
            var c = "HTML" == a.tagName || "BODY" == a.tagName;
            c && "static" == z.Pg(a) ||
            (b = z.In(a), c ||
            (c = (c = z.ch(a)) && z.B
                ? -a.scrollLeft
                : !c || z.Ll && z.E("8") || "visible" == z.Og(a, "overflowX")
                ? a.scrollLeft
                : a.scrollWidth - a.clientWidth - a.scrollLeft, b = Vn(b, new z.Ge(c, a.scrollTop))))
        }
        return b || new z.Ge
    };
    var Fs = function(a, b, c, d, f, g, h) {
        a = a.clone();
        var k = Es(b, c);
        c = z.Yg(b);
        h = h ? h.clone() : c.clone();
        a = a.clone();
        h = h.clone();
        var l = 0;
        if (d || 0 != k)
            k & 2 ? a.x -= h.width + (d ? d.right : 0) : d && (a.x += d.left),
                k & 1 ? a.y -= h.height + (d ? d.bottom : 0) : d && (a.y += d.top);
        if (g) {
            if (f) {
                d = a;
                k = h;
                l = 0;
                65 == (g & 65) && (d.x < f.left || d.x >= f.right) && (g &= -2);
                132 == (g & 132) && (d.y < f.top || d.y >= f.bottom) && (g &= -5);
                d.x < f.left && g & 1 && (d.x = f.left, l |= 1);
                if (g & 16) {
                    var n = d.x;
                    d.x < f.left && (d.x = f.left, l |= 4);
                    d.x + k.width > f.right &&
                    (k.width = Math.min(f.right - d.x, n + k.width - f.left),
                        k.width = Math.max(k.width, 0), l |= 4)
                }
                d.x + k.width > f.right && g & 1 && (d.x = Math.max(f.right - k.width, f.left), l |= 1);
                g & 2 && (l = l | (d.x < f.left ? 16 : 0) | (d.x + k.width > f.right ? 32 : 0));
                d.y < f.top && g & 4 && (d.y = f.top, l |= 2);
                g & 32 &&
                (n = d.y, d
                    .y <
                    f.top &&
                    (d.y = f.top, l |= 8), d.y + k.height > f.bottom &&
                (k.height = Math.min(f.bottom - d.y, n + k.height - f.top), k.height = Math
                    .max(k.height, 0), l |= 8));
                d.y + k.height > f.bottom && g & 4 && (d.y = Math.max(f.bottom - k.height, f.top), l |= 2);
                g & 8 && (l = l | (d.y < f.top ? 64 : 0) | (d.y + k.height > f.bottom ? 128 : 0));
                f = l
            } else f = 256;
            l = f
        }
        g = new z.Hg(0,
            0,
            0,
            0);
        g.left = a.x;
        g.top = a.y;
        g.width = h.width;
        g.height = h.height;
        f = l;
        if (f & 496) return f;
        z.Qg(b, new z.Ge(g.left, g.top));
        h = g.yh();
        z.Do(c, h) ||
        (c = h, a = Cn(z.Ie(z.Ke(b))), !z.C || z.E("10") || a && z.E("8")
            ? (b = b.style, z.B
                ? b.MozBoxSizing = "border-box"
                : z.D ? b.WebkitBoxSizing = "border-box" : b.boxSizing = "border-box", b
                .width = Math.max(c.width, 0) + "px", b.height = Math.max(c.height, 0) + "px")
            : (h = b.style, a
                ? (a = z.fh(b), b = z.ih(b), h.pixelWidth = c.width - b.left - a.left - a.right - b.right, h
                    .pixelHeight = c.height - b.top - a.top - a.bottom - b.bottom)
                : (h.pixelWidth =
                    c.width, h.pixelHeight = c.height)));
        return f
    };
    var Es = function(a, b) { return (b & 4 && z.ch(a) ? b ^ 2 : b) & -5 };
    z.Gs = function(a, b, c, d) {
        z.H.call(this);
        this.Va = a || window.document.body;
        this.ca = z.Ie(this.Va);
        this.Mq = !a;
        this.h = null;
        this.gc = "";
        this.Oa = [];
        this.lf = [];
        this.VL = this.Gm = -1;
        this.zb = !1;
        this.className = "ac-renderer";
        this.Yh = "ac-row";
        this.fJ = "active";
        this.ax = "ac-active";
        this.kT = "ac-highlighted";
        this.$l = b || null;
        this.MM = null != d ? d : !0;
        this.KU = !0;
        this.qp = !1;
        this.RX = !!c;
        this.kw = !1;
        this.iq = 0;
        this.NL = !1
    };
    var Hs = function(a, b) {
        a.Nc &&
        (z.vg(a.Nc, "haspopup", b), z.vg(a
            .h,
            "expanded",
            b), b ? z.vg(a.Nc, "owns", a.h.id) : (a.Nc.removeAttribute("aria-owns"), so(a.Nc, null)))
    };
    var Is = function(a, b) {
        var c = 0 <= b && b < a.Oa.length ? a.Oa[b] : void 0, d = 0 <= b && b < a.lf.length ? a.lf[b] : void 0;
        a.dispatchEvent({ type: "rowhilite", N0: d, hj: c ? c.data : null }) &&
        (0 <= a.Gm && z.Dg(a.lf[a.Gm], [a.ax, a.fJ]), a
            .Gm = b, d && (z.Bg(d, [a.ax, a.fJ]), a.Nc && so(a.Nc, d), io(d, a.h)))
    };
    var Js = function(a) {
        if (!a.h) {
            var b = a.ca.B("DIV", { style: "display:none" });
            a.NL && (b.style.overflowY = "auto");
            a.h = b;
            z.Bg(b, (0, z.ab)(a.className).split(" "));
            z.ug(b, "listbox");
            b.id = z.vh(z.uh.ba());
            a.ca.appendChild(a.Va, b);
            z.G(b, "click", a.vm, !1, a);
            z.G(b, "mousedown", a.wm, !1, a);
            z.G(b, "mouseover", a.EH, !1, a)
        }
    };
    var Ks = function(a) {
        Js(a);
        a.kw && (a.h.style.visibility = "hidden");
        a.VZ && (a.h.style.minWidth = a.VZ.clientWidth + "px");
        a.lf.length = 0;
        a.ca.Lq(a.h);
        if (a.$l && a.$l.render) a.$l.render(a, a.h, a.Oa, a.gc);
        else {
            var b = null;
            z.A(a.Oa,
                function(a) {
                    a = Ls(this, a, this.gc);
                    this.kw ? this.h.insertBefore(a, b) : this.ca.appendChild(this.h, a);
                    b = a
                },
                a)
        }
        0 == a.Oa.length ? a.Rc() : (a.show(), a.ga(), z.fo(a.h, !0))
    };
    var Ms = function(a, b, c) {
        if (a.qp || !a.ZM)
            if (3 == b.nodeType) {
                var d = null;
                z.ma(c) && 1 < c.length && !a.qp && (d = z.yb(c, 1));
                c = Ns(a, c);
                if (0 != c.length) {
                    var f = b.nodeValue, g = a.KU ? new RegExp("\\b(?:" + c + ")", "gi") : new RegExp(c, "gi");
                    c = [];
                    for (var h = 0,
                        k = g.exec(f),
                        l =
                            0;
                        k;
                    )
                        l++, c.push(f.substring(h, k.index)), c.push(f.substring(k.index, g.lastIndex)), h = g
                            .lastIndex, k = g.exec(f);
                    c.push(f.substring(h));
                    if (1 < c.length) {
                        d = a.qp ? l : 1;
                        for (f = 0; f < d; f++)
                            g = 2 * f, b.nodeValue = c[g], h = a.ca.createElement("B"), h.className = a.kT, a.ca
                                .appendChild(h,
                                    a.ca.createTextNode(c[g +
                                        1])), h = b.parentNode.insertBefore(h, b.nextSibling), b.parentNode
                                .insertBefore(a.ca.createTextNode(""), h.nextSibling), b = h.nextSibling;
                        c = z.yb(c, 2 * d);
                        b.nodeValue = c.join("");
                        a.ZM = !0
                    } else d && Ms(a, b, d)
                }
            } else for (b = b.firstChild; b;) d = b.nextSibling, Ms(a, b, c), b = d
    };
    var Ns = function(a, b) {
        var c = "";
        if (!b) return c;
        z.ma(b) && (b = z.lb(b, function(a) { return !z.bp(null == a ? "" : String(a)) }));
        a.qp
            ? z.ma(b)
            ? c = z.mb(b, z.Xa).join("|")
            : (c = b.replace(/[\s\xa0]+/g, " ").replace(/^\s+|\s+$/g, ""), c = z.Xa(c), c = c.replace(/ /g, "|"))
            : z.ma(b) ? c = 0 < b.length ? z.Xa(b[0]) : "" : /^\W/.test(b) || (c = z.Xa(b));
        return c
    };
    var Ls = function(a, b, c) {
        var d = a.ca.B("DIV", { className: a.Yh, id: z.vh(z.uh.ba()) });
        z.ug(d, "option");
        a.$l && a.$l.rd ? a.$l.rd(b, c, d) : a.dL(b, c, d);
        c && a.MM && (a.ZM = !1, Ms(a, d, c));
        z.Ag(d, a.Yh);
        a.lf.push(d);
        return d
    };
    var Os = function(a, b) {
        for (; b && b != a.h && !z.zg(b, a.Yh);) b = b.parentNode;
        return b ? z.kb(a.lf, b) : -1
    };
    z.Ps = function(a, b, c, d) {
        this.ae = a = new z.Bs(a, !d);
        d = new z.Gs;
        c = new z.ts(null, null, !!c, 300);
        z.fs.call(this, a, d, c);
        c.Y = this;
        c.Fl(b)
    };
    z.Qs = function(a, b) {
        var c = this, d = {};
        z.Mb(d, this.defaults, b || {});
        this.J = d;
        var f = d.rd ? { rd: (0, z.t)(d.rd, c) } : null;
        f && (f.render = d.render ? (0, z.t)(d.render, c) : null);
        this.M = f = new z.Gs(d.ej, f);
        var g = "string" === typeof d.source ? z.Bs : z.cs, h = new g(d.source, !d.NZ);
        this.ae = h;
        var k = d.xA;
        k ||
        (k = new z.ts(d.separator, d.qQ, !!d.multiple, d.delay), k.kj = function(a, b) {
            var f;
            z.qa(d.select) && (f = d.select.call(c, a, c.M.lf[c.M.Gm]));
            us(this, z.ja(f) ? f : a.label || a.toString(), b);
            return !1
        });
        z.fs.call(this, h, f, k);
        k.Y = this;
        k.Fl(a);
        a.setAttribute("autocomplete",
            "off");
        h.gj = function(a, b, f) {
            var h = f;
            z.qa(d.format) &&
            (h = function(a, b) {
                var g = d.format.call(c, b, a);
                z.qa(d.filter) && (g = d.filter.call(c, g, a));
                f(a, g)
            });
            return g.prototype.gj.call(this, a, b, h)
        };
        f.dL = function(a, b, c) {
            a = a.data;
            c.innerHTML = a.iZ ? a.iZ() : a.label || a.toString()
        };
        this.Nc = a;
        d.Ce && (this.Gk = d.Ce);
        d.placeholder && (this.xc = new z.Wj(a, d.placeholder));
        this.addEventListener("suggestionsupdate", function() { this.dispatchEvent(this.Eb() ? "show" : "hide") })
    };
    var Rs = function(a, b, c, d) { z.ts.call(this, a, b, c, d) };
    z.Ss = function() {
        z.H.call(this);
        this.eI = 0;
        this.hd = [];
        this.cm = [];
        this.Ey = {};
        this.U = new z.xd(this);
        this.TT = this.GI = !1;
        this.CD = !0
    };
    z.Ts = function(a, b, c) {
        b.wG = c;
        b.Tj = void 0;
        a.hd.push(b)
    };
    z.Us = function(a, b) { a.zG = (0, z.ab)(b).split(" ") };
    var Vs = function(a, b) {
        for (var c = 0, d = a.hd.length; c < d; c++) {
            var f = a.hd[c];
            f.bm = go(f)
        }
        c = 0;
        for (d = a.cm.length; c < d; c++) f = a.cm[c], f != b && (f.bm = go(f))
    };
    var Ws = function(a) {
        z.Cc(a.Tb);
        a.Sc && z.N(a.Sc);
        a.Qa && "none" == a.Qa.style.display && (a.fv.insertBefore(a.Qa, a.LB), a.Qa.style.display = "");
        a.my && a.Qa ? z.Dg(a.Qa, a.my || []) : a.Qa && (a.Qa.style.visibility = "");
        for (var b = 0, c = a.hd.length; b < c; b++) {
            var d = a.hd[b];
            d.Tj && z.Cg(d, d.Tj)
        }
    };
    var Xs = function(a, b) { return a.x > b.left && a.x < b.left + b.width && a.y > b.top && a.y < b.top + b.height };
    var Ys = function(a, b) {
        var c = a.bm;
        return Math.abs(b.y - (c.top + (c.height - 1) / 2))
    };
    var Zs = function(a) { return a.top + a.height - 1 };
    var $s = function(a) { return a.left + a.width - 1 };
    var at = function(a) { return a.left || 0 };
    var bt = function(a, b) { return a < b };
    var ct = function(a, b) { return a > b };
    var dt = function(a, b, c, d, f, g) {
        z.Lc.call(this, a);
        this.event = c;
        this.WF = d;
        this.ct = g
    };
    z.et = function(a, b) {
        z.Q.call(this, b);
        this.Wb = a || ""
    };
    var ft = function() {
        null != gt || (gt = "placeholder" in window.document.createElement("INPUT"));
        return gt
    };
    var ht = function(a) { !a.cR && a.U && a.m().form && (a.U.g(a.m().form, "submit", a.hS), a.cR = !0) };
    var it = function(a) { return !!a.m() && "" != a.m().value && a.m().value != a.Wb };
    var jt = function(a, b) {
        return window.$.post("/node/MemberFollowBaseV2",
            { method: b ? "follow_member" : "unfollow_member", params: { hash_id: a } })
    };
    var kt = function(a, b) {
        return window.$.post("/node/QuestionFollowBaseV2",
            { method: b ? "follow_question" : "unfollow_question", params: { question_id: a } })
    };
    var lt = function(a, b) {
        return window.$.post(b ? "/collection/follow" : "/collection/unfollow", { favlist_id: a })
    };
    var mt = function(a, b) {
        return window.$.post("/node/TopicFollowBaseV2",
            { method: b ? "follow_topic" : "unfollow_topic", params: { topic_id: a } })
    };
    z.nt = function(a, b) { return window.$.get("/" + a + "/" + b + "/sharetext") };
    var ot = function(a, b, c, d) { z.ts.call(this, a, b, c, d) };
    var pt = function(a, b, c) {
        z.Bs.call(this, b, c);
        this.Y = a;
        this.vC = null;
        this.RG = !0
    };
    var qt = function(a, b, c, d) {
        this.FJ = 0;
        z.ts.call(this, a, b, !!c, d || 300)
    };
    var rt = function(a, b, c, d) { qt.call(this, a, b, !!c, d) };
    z.st = function(a, b, c, d, f, g, h, k, l) {
        var n = {};
        "question_suggest" === g
            ? (n.render = (0, z.t)(this.EX, this), n.rd = xr)
            : "topic_question" === g ? (n.render = (0, z.t)(this.GX, this), n.rd = wr) : n.rd = g ? wr : xr;
        g = new z.Gs(f, n);
        f && (g.Mq = !1);
        g.qp = !0;
        this.M = g;
        this.ae = new pt(this, a, !d);
        a = l ? l : new qt(null, null, c);
        h && h.length && new z.Wj(b, h[0]);
        a.DM = !1;
        z.fs.call(this, this.ae, g, a);
        a.Y = this;
        a.ms(b);
        k && (a.FJ = k)
    };
    z.tt = function(a, b, c) {
        z.H.call(this);
        this.cf = c || "搜索话题";
        this.qa = b;
        this.data = a || [];
        this.status = ut;
        this.AX = "/topic/unbind";
        this.pO = "/topic/bind";
        this.isEnabled = !0;
        this
            .vp =
            '\x3ca class\x3d"zm-tag-editor-tip-link" href\x3d"#" name\x3d"edit"\x3e帮忙给这个问题选个话题吧，好让别人来回答\x3c/a\x3e\x3ca name\x3d"edit" class\x3d"zu-edit-button" href\x3d"#"\x3e\x3ci class\x3d"zu-edit-button-icon"\x3e\x3c/i\x3e添加\x3c/a\x3e';
        this.Ce = 10;
        this.Ru = !1;
        this.bq = window.Infinity;
        this.Mu = 0;
        this.FE = !1
    };
    var vt = function(a) {
        a = z.Co("zm-item-tag", a.Zg);
        return z.mb(a,
            function(a) {
                var c = [(0, z.ab)(a.innerHTML), a.getAttribute("data-token"), null, a.getAttribute("data-topicid")];
                c.xZ = !!a.getAttribute("data-uneditable");
                return c
            })
    };
    z.wt = function(a) {
        if (a.data.length) {
            var b = z.mb(a.data, function(a) { return z.lr(a, "", null, "b") }, a);
            a.isEnabled && b.push(or());
            a.Zg.innerHTML = b.join("")
        } else a.isEnabled && (a.Zg.innerHTML = a.vp)
    };
    var xt = function(a, b) { return z.lb(b, function(a) { return "topic" !== a[0] ? !1 : !this.Wy(a) }, a) };
    var yt = function(a, b, c) {
        function d() { return z.pb(b, function(a) { return "topic" === a[0] && a[4] && a[1] === c }) }

        function f() { return z.pb(b, function(a) { return 3 >= a.length && a[1] === z.Ja("创建 %s 话题", a[2]) }) }

        var g = (0, z.t)(function() { return z.pb(this.data, function(a) { return a[0] === c }) }, a);
        z.Y.Ut
            ? !a.FE || b.length && (f() || d()) || g() || b.push(["topic", z.Ja("创建 %s 话题", c), c])
            : (a = f()) &&
            (1 < b.length
                ? z.tb(b, a)
                : b = [
                    [
                        "plain_text",
                        '\x3cspan class\x3d"zu-autocomplete-row-name zu-autocomplete-row-name-info"\x3e没有找到话题：' +
                        a[2] +
                        '\x3c/span\x3e\x3cspan class\x3d"zg-gray-normal zu-autocomplete-row-description"\x3e请使用已经创建的话题\x3c/span\x3e'
                    ]
                ]);
        return b
    };
    z.zt = function(a) {
        var b = a.data.length >= a.bq;
        a.qe && z.P(a.qe, !b);
        a.Ju && z.P(a.Ju, b)
    };
    z.At = function(a) {
        var b = [];
        a.data = z.lb(a.data,
            function(a) {
                if (z.rb(b, a[1])) return !1;
                b.push(a[1]);
                return !0
            })
    };
    z.Bt = function(a, b, c) {
        z.tt.call(this, a, 0, c ? "添加父话题" : "添加子话题");
        this.IA = c;
        this.eg = b;
        this.vp = "";
        this.cL = "/topic/parent/remove"
    };
    var Ct = function(a) {
        z.tt.call(this);
        this.vp = "";
        this.cf = a || "";
        this.bq = this.Ce = 5;
        this.Pr = (0, window.$)("#zh-question-suggest-title-content")
    };
    var Dt = function(a) {
        var b;
        b = a.mr ? z.lb(a.mr, function(a) { return !this.Wy(a) }, a) : [];
        a.Sr.show();
        b && 0 !== b.length || a.Sr.hide();
        var c = "";
        b = z.mb(b,
            function(a) {
                return "\x3ca href\x3d'javascript:;' name\x3d'add' data-id\x3d'" +
                    a[4] +
                    "' data-text\x3d'" +
                    a[1] +
                    "' class\x3d'zg-r3px zm-item-tag'\x3e\x3cspan\x3e" +
                    a[1] +
                    "\x3c/span\x3e\x3c/a\x3e"
            });
        c += b.join("");
        a.BN.html(c);
        a.Qw.hide()
    };
    z.Et = function(a) {
        z.tt.call(this, a, 0);
        this.vp = "";
        this.lF = "/topic/ignore"
    };
    var Ft = function() { z.xc.call(this) };
    z.Gt = function(a) {
        z.xc.call(this);
        this.TL = z.Wo();
        this.FG = z.Wo();
        this.uC = a.Ih();
        this.ca = z.Ie(a.wa());
        a.pr(this.ca.B("SPAN", { id: this.TL }), this.ca.B("SPAN", { id: this.FG }))
    };
    z.Ht = function(a, b) { return a.ca.m(b ? a.TL : a.FG) };
    z.It = function(a, b, c, d, f) {
        this.Xc = !!b;
        this.node = null;
        this.ec = 0;
        this.cl = !1;
        this.Is = !c;
        a && this.setPosition(a, d);
        this.depth = void 0 != f ? f : this.ec || 0;
        this.Xc && (this.depth *= -1)
    };
    var Jt = function() {};
    var Kt = function(a) {
        if (a.getSelection) return a.getSelection();
        a = a.document;
        var b = a.selection;
        if (b) {
            try {
                var c = b.createRange();
                if (c.parentElement) {
                    if (c.parentElement().document != a) return null
                } else if (!c.length || c.item(0).document != a) return null
            } catch (d) {
                return null
            }
            return b
        }
        return null
    };
    z.Lt = function(a) {
        for (var b = [], c = 0, d = a.ik(); c < d; c++) b.push(a.Ze(c));
        return b
    };
    z.Mt = function(a) { return a.Ih() ? a.ka() : a.Z() };
    z.Nt = function(a) { return a.Ih() ? a.Sa() : a.xa() };
    z.Ot = function(a) { return a.Ih() ? a.Z() : a.ka() };
    z.Pt = function(a) { return a.Ih() ? a.xa() : a.Sa() };
    var Qt = function(a, b) { z.It.call(this, a, b, !0) };
    var Rt = function() {};
    z.St = function(a, b, c, d, f) {
        this.va = this.Aa = null;
        this.Ca = this.Ea = 0;
        var g;
        a &&
        (this.Aa = a, this.Ea = b, this.va = c, this
                .Ca = d, 1 == a.nodeType &&
                "BR" != a.tagName &&
                (a = a
                    .childNodes, (b = a[b]) ? (this.Aa = b, this.Ea = 0) : (a.length && (this.Aa = z.jb(a)), g = !0)),
            1 == c.nodeType && ((this.va = c.childNodes[d]) ? this.Ca = 0 : this.va = c));
        z.It.call(this, f ? this.va : this.Aa, f, !0);
        if (g)
            try {
                this.next()
            } catch (h) {
                if (h != z.Nd) throw h;
            }
    };
    var Tt = function(a, b) { null != a && this.append.apply(this, arguments) };
    var Ut = function() {};
    var Vt = function(a, b) {
        var c = a.R.getClientRects();
        return c.length ? (c = b ? c[0] : z.jb(c), new z.Ge(b ? c.left : c.right, b ? c.top : c.bottom)) : null
    };
    var Wt = function(a) { this.R = a };
    var Xt = function(a) {
        var b = z.Ke(a).createRange();
        if (3 == a.nodeType) b.setStart(a, 0), b.setEnd(a, a.length);
        else if (Yt(a)) {
            for (var c, d = a; (c = d.firstChild) && Yt(c);) d = c;
            b.setStart(d, 0);
            for (d = a; (c = d.lastChild) && Yt(c);) d = c;
            b.setEnd(d, 1 == d.nodeType ? d.childNodes.length : d.length)
        } else c = a.parentNode, a = z.kb(c.childNodes, a), b.setStart(c, a), b.setEnd(c, a + 1);
        return b
    };
    var Zt = function(a, b, c, d) {
        var f = z.Ke(a).createRange();
        f.setStart(a, b);
        f.setEnd(c, d);
        return f
    };
    var $t = function(a) { this.R = a };
    z.au = function(a, b) {
        this.va = this.Aa = this.Pg = null;
        this.Ca = this.Ea = -1;
        this.R = a;
        this.at = b
    };
    var bu = function(a) {
        var b = z.Ke(a).body.createTextRange();
        if (1 == a.nodeType) b.moveToElementText(a), Yt(a) && !a.childNodes.length && b.collapse(!1);
        else {
            for (var c = 0, d = a; d = d.previousSibling;) {
                var f = d.nodeType;
                if (3 == f) c += d.length;
                else if (1 == f) {
                    b.moveToElementText(d);
                    break
                }
            }
            d || b.moveToElementText(a.parentNode);
            b.collapse(!d);
            c && b.move("character", c);
            b.moveEnd("character", a.length)
        }
        return b
    };
    var cu = function(a, b) {
        for (var c = b.childNodes, d = 0, f = c.length; d < f; d++) {
            var g = c[d];
            if (Yt(g)) {
                var h = bu(g), k = h.htmlText != g.outerHTML;
                if (a.isCollapsed() && k ? 0 <= a.Ve(h, 1, 1) && 0 >= a.Ve(h, 1, 0) : a.R.inRange(h)) return cu(a, g)
            }
        }
        return b
    };
    var du = function(a, b, c) {
        c = c || a.Ic();
        if (!c || !c.firstChild) return c;
        for (var d = 1 == b, f = 0, g = c.childNodes.length; f < g; f++) {
            var h = d ? f : g - f - 1, k = c.childNodes[h], l;
            try {
                l = eu(k)
            } catch (q) {
                continue
            }
            var n = l.R;
            if (a.isCollapsed())
                if (!Yt(k)) {
                    if (0 == a.Ve(n, 1, 1)) {
                        a.Ea = a.Ca = h;
                        break
                    }
                } else {
                    if (l.lh(a)) return du(a, b, k)
                }
            else {
                if (a.lh(l)) {
                    if (!Yt(k)) {
                        d ? a.Ea = h : a.Ca = h + 1;
                        break
                    }
                    return du(a, b, k)
                }
                if (0 > a.Ve(n, 1, 0) && 0 < a.Ve(n, 0, 1)) return du(a, b, k)
            }
        }
        return c
    };
    var fu = function(a, b) {
        var c = 1 == b, d = c ? a.Z() : a.ka();
        if (1 == d.nodeType) {
            for (var d = d.childNodes, f = d.length, g = c ? 1 : -1, h = c ? 0 : f - 1; 0 <= h && h < f; h += g) {
                var k = d[h];
                if (!Yt(k) &&
                    0 == a.R.compareEndPoints((1 == b ? "Start" : "End") + "To" + (1 == b ? "Start" : "End"), eu(k).R)
                ) return c ? h : h + 1
            }
            return -1 == h ? 0 : h
        }
        f = a.R.duplicate();
        g = bu(d);
        f.setEndPoint(c ? "EndToEnd" : "StartToStart", g);
        f = f.text.length;
        return c ? d.length - f : f
    };
    var gu = function(a) { return 3 == a.nodeType ? a.nodeValue : a.innerText };
    var hu = function(a, b, c) {
        c = c || z.Ie(a.parentElement());
        var d, f = d = b.id;
        d || (d = b.id = z.Wo());
        a.pasteHTML(b.outerHTML);
        (b = c.m(d)) && (f || b.removeAttribute("id"));
        return b
    };
    var iu = function(a, b, c) {
        var d;
        d = d || z.Ie(a.parentElement());
        var f;
        1 != b.nodeType && (f = !0, b = d.B("DIV", null, b));
        a.collapse(c);
        b = hu(a, b, d);
        f && (a = b.firstChild, d.WQ(b), b = a);
        return b
    };
    var ju = function(a) { this.R = a };
    var ku = function(a) { this.R = a };
    var lu = function(a) {
        return z.Wl
            ? new z.au(a, z.Ke(a.parentElement()))
            : z.D ? new ku(a) : z.B ? new $t(a) : z.Lg ? new ju(a) : new Wt(a)
    };
    var eu = function(a) {
        if (!z.C || 9 <= z.jh) a = z.D ? new ku(Xt(a)) : z.B ? new $t(Xt(a)) : z.Lg ? new ju(Xt(a)) : new Wt(Xt(a));
        else {
            var b = new z.au(bu(a), z.Ke(a));
            if (Yt(a)) {
                for (var c, d = a; (c = d.firstChild) && Yt(c);) d = c;
                b.Aa = d;
                b.Ea = 0;
                for (d = a; (c = d.lastChild) && Yt(c);) d = c;
                b.va = d;
                b.Ca = 1 == d.nodeType ? d.childNodes.length : d.length;
                b.Pg = a
            } else b.Aa = b.va = b.Pg = a.parentNode, b.Ea = z.kb(b.Pg.childNodes, a), b.Ca = b.Ea + 1;
            a = b
        }
        return a
    };
    var Yt = function(a) { return z.$e(a) || 3 == a.nodeType };
    z.mu = function() {
        this.Ca = this.va = this.Ea = this.Aa = this.xi = null;
        this.Qf = !1
    };
    var nu = function(a, b) {
        var c = new z.mu;
        c.xi = a;
        c.Qf = !!b;
        return c
    };
    z.ou = function(a, b, c, d) {
        var f = new z.mu;
        f.Qf = pu(a, b, c, d);
        if (z.lf(a) && !z.$e(a)) {
            var g = a.parentNode;
            b = z.kb(g.childNodes, a);
            a = g
        }
        z.lf(c) && !z.$e(c) && (g = c.parentNode, d = z.kb(g.childNodes, c), c = g);
        f.Qf ? (f.Aa = c, f.Ea = d, f.va = a, f.Ca = b) : (f.Aa = a, f.Ea = b, f.va = c, f.Ca = d);
        return f
    };
    z.qu = function(a) {
        var b;
        if (!(b = a.xi)) {
            b = a.Z();
            var c = a.xa(), d = a.ka(), f = a.Sa();
            if (!z.C || 9 <= z.jh)
                b = z.D
                    ? new ku(Zt(b, c, d, f))
                    : z.B ? new $t(Zt(b, c, d, f)) : z.Lg ? new ju(Zt(b, c, d, f)) : new Wt(Zt(b, c, d, f));
            else {
                var g = b, h = c, k = d, l = f, n = !1;
                1 == g.nodeType && (h = g.childNodes[h], n = !h, g = h || g.lastChild || g, h = 0);
                var q = bu(g);
                h && q.move("character", h);
                g == k && h == l
                    ? q.collapse(!0)
                    : (n && q.collapse(!1), n = !1, 1 == k.nodeType &&
                        (k = (h = k.childNodes[l]) || k.lastChild || k, l = 0, n = !h), g = bu(k), g
                        .collapse(!n), l && g.moveEnd("character", l), q.setEndPoint("EndToEnd",
                        g));
                l = new z.au(q, z.Ke(b));
                l.Aa = b;
                l.Ea = c;
                l.va = d;
                l.Ca = f;
                b = l
            }
            b = a.xi = b
        }
        return b
    };
    var ru = function(a) {
        z.xc.call(this);
        this.QE = z.Mt(a);
        this.OO = z.Nt(a);
        this.WG = z.Ot(a);
        this.ZQ = z.Pt(a)
    };
    z.su = function() { this.ir = this.qb = this.R = null };
    var tu = function(a) {
        var b = new z.su;
        b.R = a;
        return b
    };
    var uu = function(a) {
        for (var b = z.Ke(arguments[0]).body
                     .createControlRange(),
            c = 0,
            d = arguments.length;
            c < d;
            c++) b.addElement(arguments[c]);
        return tu(b)
    };
    var vu = function(a) {
        a.ir || (a.ir = a.Mi().concat(), a.ir.sort(function(a, c) { return a.sourceIndex - c.sourceIndex }));
        return a.ir
    };
    var wu = function(a) { this.qb = a.Mi() };
    var xu = function(a) {
        this.qb = this.va = this.Aa = null;
        a && (this.qb = vu(a), this.Aa = this.qb.shift(), this.va = z.jb(this.qb) || this.Aa);
        z.It.call(this, this.Aa, !1, !0)
    };
    z.yu = function() {
        this.mg = [];
        this.gn = [];
        this.Js = this.An = null
    };
    var zu = function(a) {
        var b = new z.yu;
        b.gn = a;
        b.mg = z.mb(a, function(a) { return a.we() });
        return b
    };
    var Au = function(a) {
        a.An ||
        (a.An = z.Lt(a), a.An.sort(function(a, c) {
            var d = a.Z(), f = a.xa(), g = c.Z(), h = c.xa();
            return d == g && f == h ? 0 : pu(d, f, g, h) ? 1 : -1
        }));
        return a.An
    };
    var Bu = function(a) { this.yC = z.mb(z.Lt(a), function(a) { return a.xC() }) };
    var Cu = function(a) {
        this.Gg = null;
        this.Xl = 0;
        a && (this.Gg = z.mb(Au(a), function(a) { return z.Md(a) }));
        Qt.call(this, a ? this.Z() : null, !1)
    };
    z.Du = function(a) { return (a = Kt(a || window)) && Eu(a) };
    var Eu = function(a) {
        var b, c = !1;
        if (a.createRange)
            try {
                b = a.createRange()
            } catch (f) {
                return null
            }
        else if (a.rangeCount) {
            if (1 < a.rangeCount) {
                b = new z.yu;
                for (var c = 0, d = a.rangeCount; c < d; c++) b.mg.push(a.getRangeAt(c));
                return b
            }
            b = a.getRangeAt(0);
            c = pu(a.anchorNode, a.anchorOffset, a.focusNode, a.focusOffset)
        } else return null;
        return z.Fu(b, c)
    };
    z.Fu = function(a, b) { return a && a.addElement ? tu(a) : nu(lu(a), b) };
    z.Gu = function(a) { return nu(eu(a), void 0) };
    z.Hu = function(a, b) { return z.ou(a, b, a, b) };
    var Iu = function(a) {
        if (a = Kt(a || window))
            if (a.empty)
                try {
                    a.empty()
                } catch (b) {
                }
            else
                try {
                    a.removeAllRanges()
                } catch (b) {
                }
    };
    var pu = function(a, b, c, d) {
        if (a == c) return d < b;
        var f;
        if (1 == a.nodeType && b)
            if (f = a.childNodes[b]) a = f, b = 0;
            else if (z.nf(a, c)) return !0;
        if (1 == c.nodeType && d)
            if (f = c.childNodes[d]) c = f, d = 0;
            else if (z.nf(c, a)) return !1;
        return 0 < (yo(a, c) || b - d)
    };
    z.Ju = function(a, b, c) {
        this.QJ = a;
        this.PX = !!c;
        a && !b && this.next()
    };
    var Ku = function(a, b, c) {
        z.ja(c) || (c = b && a.childNodes.length ? a.childNodes.length - 1 : 0);
        z.Ju.call(this, a.childNodes[c], !0, b)
    };
    z.Lu = function(a) {
        for (var b; b = a && 1 == a.nodeType ? z.Mu(z.Ko(new Ku(a, !1), z.Nu)) : null;) a = b;
        return a
    };
    z.Ou = function(a) { return z.Mu(z.Ko(new z.Ju(a), z.Nu)) };
    z.Mu = function(a) {
        try {
            return a.next()
        } catch (b) {
            return null
        }
    };
    z.Nu = function(a) { return 1 == a.nodeType || 3 == a.nodeType && !z.ap(a.nodeValue) };
    z.Pu = function(a, b) {
        var c = z.uo(a);
        if (a.getElementsByTagName)
            for (var d in Qu) if (a.tagName == d || 0 < a.getElementsByTagName(d).length) return !1;
        return !b && " " == c || z.ap(c)
    };
    z.Ru = function(a) { return a.length || a.childNodes.length };
    z.Su = function(a) { return a.getAttribute && "true" == a.getAttribute("g_editable") };
    z.Tu = function(a, b) {
        z.C && z.bf(a);
        a.innerHTML = b
    };
    var Uu = function(a) { return (a = a.exec(z.Bb)) ? a[1] : "" };
    z.Vu = function(a) {
        var b = a && a.nodeName;
        return !(!a ||
            "block" != (1 != a.nodeType ? null : z.C ? z.Ng(a, "display") : z.Mg(a, "display")) &&
            "TD" != b &&
            "TABLE" != b &&
            "LI" != b)
    };
    z.Wu = function(a) { return z.wf(a, z.Vu, !0) };
    z.Xu = function(a) { z.Hu(z.Lu(a), 0).select() };
    z.Yu = function(a, b) {
        var c = a.parentNode, d = z.kb(c.childNodes, a) + (b ? 0 : 1), c = Zu(c, d, b, !0);
        z.Hu(c.node, c.offset).select()
    };
    var $u = function(a) {
        for (var b = null, c = a.firstChild; c;) {
            var d = c.nextSibling;
            3 == c.nodeType
                ? "" == c.nodeValue ? a.removeChild(c) : b ? (b.nodeValue += c.nodeValue, a.removeChild(c)) : b = c
                : ($u(c), b = null);
            c = d
        }
    };
    var av = function(a, b) {
        if (b) var c = bv(b), d = z.Wu(b.Zb());
        d ? (d = xo(d, a), z.C ? $u(d) : d.normalize()) : a && (z.C ? $u(a) : a.normalize());
        return c ? c() : null
    };
    z.cv = function(a, b) { return b ? Zu(a.Z(), a.xa()) : Zu(a.ka(), a.Sa()) };
    var bv = function(a) {
        var b = a.Ih(), c = dv(z.cv(a, !b)), d = ev(c), f = c.node.previousSibling;
        3 == c.node.nodeType && (c.node = null);
        var g = dv(z.cv(a, b)), h = ev(g), k = g.node.previousSibling;
        3 == g.node.nodeType && (g.node = null);
        return function() {
            !c.node && f && (c.node = f.nextSibling, c.node || (c = new fv(f, z.Ru(f))));
            !g.node && k && (g.node = k.nextSibling, g.node || (g = new fv(k, z.Ru(k))));
            return z.ou(c.node || d.node.firstChild || d.node,
                c.offset,
                g.node || h.node.firstChild || h.node,
                g.offset)
        }
    };
    var dv = function(a) {
        var b;
        if (3 == a.node.nodeType)
            for (b = a.node.previousSibling; b && 3 == b.nodeType; b = b.previousSibling) a.offset += z.Ru(b);
        else b = a.node.previousSibling;
        var c = a.node.parentNode;
        a.node = b ? b.nextSibling : c.firstChild;
        return a
    };
    z.gv = function(a) {
        var b = a.Zb();
        return a.Z() != b.parentElement && z.Su(b) || !!z.wf(b, z.Su)
    };
    var fv = function(a, b) {
        this.node = a;
        this.offset = b
    };
    var ev = function(a) {
        var b = a.node.parentNode;
        return new fv(b, z.kb(b.childNodes, a.node))
    };
    var Zu = function(a, b, c, d) {
        for (; 1 == a.nodeType;) {
            var f = a.childNodes[b];
            if (f || a.lastChild)
                if (f) {
                    var g = f.previousSibling;
                    if (c && g) {
                        if (d && hv(g)) break;
                        a = g;
                        b = z.Ru(a)
                    } else {
                        if (d && hv(f)) break;
                        a = f;
                        b = 0
                    }
                } else {
                    if (d && hv(a.lastChild)) break;
                    a = a.lastChild;
                    b = z.Ru(a)
                }
            else break
        }
        return new fv(a, b)
    };
    var hv = function(a) { return 1 == a.nodeType && !z.$e(a) };
    z.iv = function(a) { z.Gt.call(this, a) };
    z.jv = function(a, b) {
        var c = a ? z.Ie(a) : b;
        z.Q.call(this, c);
        this.PW = a || this.L().wa().body;
        this.MB = {};
        z.kv.push(this);
        this.Iv = !0
    };
    z.lv = function(a, b) { (a.Iv = b) ? a.Kn() : z.mv(a) };
    var nv = function(a) {
        if (!a.lm) {
            var b = a.m(), c = z.In(b).x, d = z.Qn(b).width;
            a.MB = {};
            z.Db(ov, function(a) { this.MB[a] = b.style[a] }, a);
            z.Db(pv, function(a) { this.xc.style[a] = b.style[a] || z.Ng(b, a) || z.Mg(b, a) }, a);
            z.Wg(a.xc, b.offsetWidth, b.offsetHeight);
            z.Ig(b, { left: c + "px", width: d + "px", cssFloat: "none" });
            b.parentNode.replaceChild(a.xc, b);
            a.PW.appendChild(b);
            b.style.position = "fixed";
            a.Mq();
            z.S.add(b, "goog-scrollfloater-floating");
            a.lm = !0
        }
    };
    z.mv = function(a) {
        if (a.lm) {
            var b = a.m();
            z.Db(a.MB, function(a, d) { b.style[d] = a });
            a.xc.parentNode.replaceChild(b, a.xc);
            z.S.remove(b, "goog-scrollfloater-floating");
            a.lm = !1
        }
    };
    z.qv = function(a, b, c) {
        z.jv.call(this, a, c);
        this.sX = b;
        this.tag = "";
        this.yK = 100
    };
    var rv = function(a) { return a && z.pb(z.kv, function(b) { return a === b.tag && b.lm }) };
    var sv = function() {};
    var tv = function(a, b) {
        this.H = (0, window.$)(a);
        this.J = window.$.extend({}, this.defaults, b || {});
        this.ih()
    };
    var uv = function(a, b) {
        window.$.each(vv,
            function(c, d) {
                var f = b && (null !== b && d in b ? b[d] : void 0);
                f ? f(a, d) : a.removeAttribute(d)
            })
    };
    var wv = function(a, b) { (0, window.$)("*", a).each(function() { uv(this, b) }) };
    var xv = function(a) {
        a = a.J;
        var b = a.JX, c = a.rC;
        return {
            id: function(a, c) { a.id && !z.rb(b, a.id) && a.removeAttribute(c) },
            "class": function(a, b) {
                if (a.className)
                    if (c.length) {
                        var g = z.S.get(a), g = z.lb(g, z.Ro(z.Ba(z.rb, c)));
                        g.length && z.S.remove.apply(null, [a].concat(g))
                    } else a.removeAttribute(b)
            }
        }
    };
    var yv = function(a) {
        z.H.call(this);
        this.J = window.$.extend(!0, {}, this.defaults, a || {});
        this.Nx();
        this.Pf()
    };
    var zv = function(a, b) {
        a.close();
        a.dispatchEvent({ type: "cancel", data: { originalEvent: b } })
    };
    var Av = function(a, b) {
        z.H.call(this);
        this.input = a;
        z.Mb(this.J = {}, this.defaults, b || {});
        this.Qg = new yv({ Vn: this.J.Vn, Tk: this.J.Tk });
        z.Ac(this, this.Qg);
        this.ih()
    };
    var Bv = function(a) {
        a = z.L(a.J.Xt, a.input);
        var b;
        if (a) return b = window.document.createTextNode("@"), z.Bo(b, a), b
    };
    var Cv = function(a, b) {
        var c;
        z.B && (c = z.Re(window.document), a.input.focus(), window.scrollTo(c.x, c.y));
        var d;
        Dv
            ? (c = window.getSelection(), d = window.document.createRange(), d.setStartAfter(b), c.removeAllRanges(), c
                .addRange(d))
            : 3 === b.nodeType && z.Hu(b, b.length).select()
    };
    var Ev = function(a) { return a && "A" === a.nodeName };
    var Fv = function(a, b, c) {
        var d = window.getSelection();
        if (b(d.anchorNode.parentNode)) {
            b = d.getRangeAt(0);
            var f = Gv(a);
            b.insertNode(f);
            b.selectNode(f);
            d.removeAllRanges();
            d.addRange(b);
            d = window.getSelection().getRangeAt(0);
            a = Hv(a, d);
            c(a)
        }
    };
    var Iv = function(a, b, c) {
        var d = window.document.selection.createRange(), f = d.parentElement();
        b(f) &&
        (d.pasteHTML(Gv(a).outerHTML), d.moveToElementText(z.L(a.J.Xt, a.input)), d
            .select(), a = Hv(a, d), "7.0" === z.Jc && (a.x -= 2), c(a))
    };
    var Hv = function(a, b) {
        var c;
        c = b.getBoundingClientRect();
        var d;
        z.C && (d = { width: b.boundingWidth, height: b.boundingHeight }, z.Ca(d, c), c = d);
        d = z.Re(window.document);
        var f = z.In(a.Qg.Ic());
        f.x = c.left - f.x + d.x;
        f.y = c.top - f.y + d.y;
        a.J.position.call(a, f, c);
        return f
    };
    var Jv = function(a) { return a && 1 === a.nodeType && "A" === a.tagName && z.rb(Kv, a.className) };
    var Gv = function(a) { return z.M("a", { className: a.J.Xt, innerHTML: "@" }) };
    z.Lv = function(a, b, c) {
        z.Q.call(this);
        this.status = this.fc = null;
        this.II = a;
        this.rL = b;
        this.Ss = c;
        this.isEnabled = !0;
        this.ZG = !1;
        this.params = [];
        this.content = null;
        this.ID = !1;
        this.fG = window.$.Deferred()
    };
    var Mv = function(a) {
        var b = a.Ta;
        if (b.m) b.on("load", function() { new tv(b.m(), { rC: ["video-link"].concat(this.rw ? Kv : []) }) }, !1, a)
    };
    var Nv = function(a) {
        var b = a.Ta;
        b.m &&
        (a = (0, z
            .t)(function() { new Av(b.m(), { Tk: this.Xj }) }, a), b.Kc() ? a() : b.addEventListener("load", a))
    };
    var Ov = function(a) {
        if (a.dispatchEvent("shouldUpdateContent")) {
            var b = a.content, c = a.Ad, d = a.kH();
            a.ID ? (z.of(c, b), c.appendChild(z.Ye(d))) : c.innerHTML = b + d;
            (0, window.$)("img.lazy", c).lazyload({ data_attribute: "actualsrc", threshold: 400 })
        }
    };
    z.Pv = function(a, b, c) {
        z.Lv.call(this, a, b, c);
        this.UU = "mock" + this.xe();
        this.Jy = !1;
        this.Px = !0;
        this.Zd = !z.Hm || z.Yl;
        this.rw = !1;
        this.KM = this.MZ = !0;
        this.eB = ""
    };
    var Qv = function(a, b, c) {
        var d = b.bc.FullScreenPlugin;
        if (d) {
            var f = z.yh(c, "toggleFullScreen");
            d.on("save", a.Pt, !1, a).on("willEnterFullScreen", function() { Rv(this, !1) }, !1, a)
                .on("enterFullScreen", function() { f.Qd("退出写作模式") }).on("exitFullScreen", function() { f.Qd("写作模式") })
                .on("shouldExitFullScreenOnEscape", function() { return !b.Eh })
        }
    };
    var Rv = function(a, b) {
        if (a.$g)
            if (b) {
                z.S.add(a.em, "zm-editable-editor-field-wrap-active");
                var c = a.$g;
                c.gv = z.In(c.m()).y;
                z.lv(a.$g, !0)
            } else z.S.remove(a.em, "zm-editable-editor-field-wrap-active"), z.lv(a.$g, !1)
    };
    var Sv = function(a) {
        a.lE.toggle();
        a.Jr.toggleClass("no-toolbar")
    };
    z.Tv = function() {
        z.R.call(this);
        this.pG = !0;
        this.sB = z.Y.sB;
        this.uY = -1 === window.location.href.indexOf("psq")
    };
    z.Uv = function(a, b) { a.Uc && (a.Uc.value = b, a.pK(), a.SK.EM(), a.Ma && a.Ma.qw()) };
    var Vv = function(a) {
        var b = Wv.get("add_question_form_title");
        b && z.Uv(a, b);
        (b = Wv.get("add_question_form_des")) && Xv(a, b);
        b = a.J.In;
        b || (b = Wv.get("add_question_form_topics")) && (b = JSON.parse(b));
        b && z.A(b, function(b) { a.Ma.nj(b) })
    };
    var Yv = function(a) {
        function b() {
            var a = (0, window
                    .$
                )('\x3cdiv\x3e\x3cdiv style\x3d"text-align:center"\x3e\x3ci class\x3d"spinner-gray"\x3e\x3c/i\x3e\x3c/div\x3e\x3c/div\x3e'),
                b = (0, window.$)(eq(this)),
                c = b.data("answer_count"),
                f = b.data("url_token");
            window.$.get("/question/" + f + "/answers/summary").done(function(b) {
                if (b && !b.r) {
                    b = d({ forEach: z.A, answers: b.msg, question_url_token: f });
                    var g = z
                        .Ja('\x3cdiv class\x3d"zippy-row"\x3e\x3ca class\x3d"zg-link-litblue" href\x3d"/question/%s"\x3e查看该问题%s\x3c/a\x3e\x3c/div\x3e',
                            f,
                            0 < c ? "的全部 " + c + " 个回答" : "");
                    a.html(b + g)
                } else z.T.message(b.msg)
            });
            b.after(a);
            return a.get(0)
        }

        var c = (0, z.Zv)(a.xr.hC), d = (0, z.Zv)(a.xr.UO), f = a.Uc, g = new Rs;
        a.yE = new z.Qs(f,
        {
            source: "/question/autocomplete",
            ej: z.J("zh-question-suggest-ac-wrap"),
            rd: window.$.noop,
            render: function(d, f, g) {
                a.AE && a.AE.dispose();
                f = (0, window.$)(d.m());
                var n = a.AE = new bs;
                f.html(c({ forEach: z.A, questions: g, token: (0, window.encodeURIComponent)(this.gc) }));
                f.prepend('\x3cdiv class\x3d"ac-head zg-gray"\x3e你的问题可能已经有答案\x3c/div\x3e');
                (0, window.$)(".ac-row",
                    f).each(function() { n.Ia(new z.cq((0, window.$)(this).get(0), b, !1)) });
                n.w(d.m())
            },
            xA: g
        })
    };
    var $v = function(a, b) {
        (0, window.$)(a.MY).toggle(!!b);
        (0, window.$)(a.qJ).toggle(!b);
        b ? a.hF.focus() : (a.xp(), a.Uc.focus());
        a.ga()
    };
    var aw = function(a) {
        if (!z.$h || z.ai) {
            var b = bq.ba(), c = new z.Sp("", b);
            c.dc(32, !1);
            a.o().g(c, "action", a.yV);
            c.w(a.jZ);
            c.Qd("切换工具栏");
            c = new z.Sp("", b);
            c.dc(32, !1);
            a.o().g(c, "action", function() { this.Yb.Ta.execCommand("image") });
            c.w(a.qO);
            c.Qd("添加图片");
            b = new z.Sp("", b);
            b.dc(32, !1);
            a.o().g(b, "action", function() { this.Yb.Ta.execCommand("video") });
            b.w(a.uO);
            b.Qd("添加视频")
        }
    };
    var bw = function(a) {
        a.Ma = new Ct;
        a.Ma.w(a.oZ);
        a.o().g(a.Ma, ["add_tag", "remove_tag"], a.nK);
        new z.Wj(a.Uc, "写下你的问题");
        var b = a.sQ;
        a.Yb = new z.Pv;
        a.Yb.eB = '\x3cspan style\x3d"font-style: normal;color: #999;"\x3e问题背景、条件等详细信息\x3c/span\x3e';
        a.Yb.w(b);
        a.Yb.init();
        a.Yb.Xg();
        z.$h && !z.ai || Sv(a.Yb);
        (0, window.setTimeout)(function() { a.ga() });
        aw(a);
        Yv(a)
    };
    var cw = function(a, b, c) {
        "title" === c ? a.eU = b : "detail" === c ? a.UT = b : a.gU = b;
        a.pG = a.eU || a.UT || a.gU
    };
    var dw = function(a, b) { (0, window.$)(a.Ml).attr("disabled", b) };
    var ew = function(a) {
        (0, window.$)(window).on("beforeunload.AddQuestionForm", (0, z.t)(function() { fw(this) }, a))
    };
    var fw = function(a) {
        a.Uc.value && Wv.set("add_question_form_title", a.Uc.value);
        var b = a.Yb.zg();
        b && Wv.set("add_question_form_des", b);
        (a = a.Ma.data) && Wv.set("add_question_form_topics", JSON.stringify(a))
    };
    var gw = function(a, b, c) {
        a.Ou.innerHTML = b.Xe;
        0 === b.level
            ? z.P(a.Kk, !1)
            : (3 !== b.level && (z.P(a.Ml, !0), z.P(a.po, !1)), z.P(a.Kk, c), c && a.Uc.focus())
    };
    var hw = function(a) {
        var b = z.mr(a.Uc.value).replace(/？/g, "?"), c = iw(a);
        1 < c.level ||
        (1 > vr(z.mr(a.Uc.value).replace("？", "?"))
            ? (c.Xe = "您还没有给问题添加问号", c.level = 3, c.name = "noquestionmark")
            : 1 < vr(b) && (c.Xe = "如果有多个问题，最好拆分一下", c.level = 1, c.name = "multiquestionmark"));
        return c
    };
    var iw = function(a) {
        var b = "#", c = a.Wp || new jw, d = !1;
        if (!a.yE || !a.uY) return c;
        var f = a.yE.Oa;
        f && f.length
            ? (z.A(f,
                function(a) {
                    4 < a.raw.length &&
                        1 === +a.raw[4] &&
                        (d = !0, b = "/question/" +
                            a.url_token +
                            "?q\x3d" +
                            (0, window.encodeURIComponent)(this.Uc.value) +
                            "\x26psq\x3d0")
                },
                a), d
                ? (c.Xe = '我们找到了一个也许是你想问的问题，\x3ca href\x3d"' + b + '"\x3e查看问题\x3c/a\x3e', c.level = 3, c
                    .name = "duplicatedquestion", c.A0 = !0, a.po.href = b, z.P(a.Ml, !1), z.P(a.po, !0))
                : (c = new jw, z.P(a.Ml, !0), z.P(a.po, !1)), a.Wp = c)
            : (c = new jw, a.Wp = c, z.P(a.Ml, !0), z.P(a.po, !1));
        a.Wp ||
            (a.Wp = c);
        return a.Wp
    };
    var kw = function(a) {
        a = z.mr(a.Uc.value).replace(/？/g, "?");
        a = Ar(a);
        var b = new jw;
        3 > a
            ? (b.level = 3, b.Xe = "问题字数太少了吧", b.name = "tooshort")
            : 40 < a && 51 >= a
            ? (b.level = 1, b.Xe = '还可以输入 \x3cspan class\x3d"warning"\x3e' + (51 - a) + "\x3c/span\x3e 字", b
                .name = "buffer")
            : 51 < a &&
            (b.level = 3, b.Xe = '已超出 \x3cspan class\x3d"error"\x3e' + (a - 51) + "\x3c/span\x3e 字", b
                .name = "toolong");
        return b
    };
    var lw = function(a) {
        a = a.Yb;
        var b = (0, z.ab)(a.zg());
        return a.isContentEditable() ? b : z.La(b)
    };
    var Xv = function(a, b) {
        var c = a.Yb;
        (0, window.setTimeout)(function() {
            c.aa(b);
            c.Yq()
        })
    };
    var mw = function(a) {
        var b = new z.zr, c = [], d = [];
        b.add("question_title", a.Uc.value);
        b.add("question_detail", lw(a));
        a.wF && b.add("anon", a.wF.checked ? "1" : "0");
        z.A(a.Ma.data, function(a) { a[3] ? c.push(a[3]) : d.push(a[1]) });
        b.add("topic_ids", c.join(","));
        b.add("new_topics", d.join("$"));
        z.Kk && b.add("uid", z.Kk[3]);
        return b
    };
    var nw = function(a) {
        window.$.get("/organization/ask_question_limit").then(function(b) {
            if (!b.r) {
                b = b.msg;
                var c = void 0,
                    c = b
                        ? (0, window.$)('\x3cspan class\x3d"zm-question-form-notice"\x3e本周还能提 ' +
                            b +
                            ' 个问题 \x3ca href\x3d"/organization/nacl#RightsWall" target\x3d"_blank"\x3e\x3ci class\x3d"zg-icon zg-icon-question-mark"\x3e\x3c/i\x3e\x3c/a\x3e \x3c/span\x3e')
                        : (0, window
                            .$
                        )('\x3cspan class\x3d"zm-question-form-notice zm-question-form-notice--warning"\x3e已达到本周提问上限 \x3ca href\x3d"/organization/nacl#RightsWall" target\x3d"_blank"\x3e\x3ci class\x3d"zg-icon zg-icon-question-mark"\x3e\x3c/i\x3e\x3c/a\x3e \x3c/span\x3e');
                (0, window.$)(a.qJ).find(".zm-command").prepend(c)
            }
        })
    };
    var jw = function() {
        this.level = (0, window.isNaN)(void 0) ? 0 : void 0;
        this.Xe = ""
    };
    var ow = function() {};
    z.pw = function(a) {
        z.dk.call(this, "register");
        this.Ro = a
    };
    var qw = function(a) { z.Q.apply(this, arguments) };
    var rw = function() { z.Pj.call(this, "DownloadAppDialog") };
    var sw = function() { z.R.call(this) };
    var tw = function() {};
    var uw = function() {
        var a = (0, window.$)("#rq3-sidenav-link"), b = (0, window.$)(".tour", a);
        b.length &&
            (0, window.$)(".close-button", b).click(function() {
                var a = (0, window.$)(this).data("feature");
                window.$.get("/notifeature", { feature: a });
                b.fadeOut(100, function() { b.remove() })
            })
    };
    var vw = function() {
        var a = (0, window.$)(".zm-side-my-columns");
        if (a.length) {
            var b = a.find(".column-homepage-link .icon-column-logo"), c = +z.si.get("navcolumn:entered");
            a.on("click",
                ".column-unfold",
                function(b) {
                    a.find(".column-list").append((0, window.$)("#SidebarColumnItem-template").html());
                    (0, window.$)(b.currentTarget).parent().remove()
                });
            c ||
            (b.addClass("icon-column-logo-active"), a.on("click",
                ".column-homepage-link",
                function() {
                    b.removeClass("icon-column-logo-active");
                    z.si.set("navcolumn:entered", 1)
                }))
        }
    };
    var ww = function(a) {
        (0, window.$)(".DownloadApp-button").click(function(b) {
            b.preventDefault();
            b = new rw;
            z.V.trackEvent(a, { action: "Download", element: "Button" });
            b.F(!0)
        });
        (0, window.$)(".DownloadApp-link").click(function(b) {
            b.preventDefault();
            b = new sw;
            z.V.trackEvent(a, { action: "Download", element: "Button" });
            b.F(!0)
        })
    };
    var xw = function(a) { z.Q.apply(this, arguments) };
    z.yw = function(a) { (new window.Image).src = a };
    z.zw = function(a) {
        if (z.oa(a))
            try {
                a = JSON.parse(a)
            } catch (b) {
                a = {}
            }
        return { type: "Ad", is_ad: !0, ad_info: a }
    };
    var Aw = function() {
        (0, window.$)(".shameimaru-placeholder").each(function() {
            var a = (0, window.$)(this), b = Object.assign({}, { loc: a.data("loc") }, a.data("params"));
            window.$.get("/node/Banner",
                b,
                function(b) { b ? (b = (0, window.$)(b), a.replaceWith(b), (new xw).w(b[0])) : a.remove() })
        })
    };
    var Bw = function(a) { z.Q.apply(this, arguments) };
    var Cw = function(a) {
        var b = !1, c = "";
        "undefined" !== typeof window && (c = window.navigator.userAgent);
        var d = new window.Image, c = /micromessenger/.test(c.toLowerCase());
        d.onload = function() { b || (b = !0, a()) };
        (0, window.setTimeout)(function() { b || (b = !0, a()) }, 500);
        d
            .src =
            "https://api.zhihu.com/channel/ad/ge16/link?auth_key\x3d6d13269a14bc76e18df43f05283cf545\x26pub_id\x3dhome" + (c ? "\x26sub_pub_id\x3dwechat" : "")
    };
    var Dw = function(a) { z.Q.apply(this, arguments) };
    z.Ew = function(a) { return "/qrcode?" + window.$.param({ url: a + "#showWechatShareTip" }) };
    z.Fw = function() {
        Gw = (0, window.$)(".wechat-share-tip");
        Gw.on("touchstart click",
            function(a) {
                a.preventDefault();
                Hw()
            })
    };
    z.Iw = function() {
        Gw.length && (Gw.show(), (0, window.$)(window.document.documentElement).addClass("show-wechat-share-tip"))
    };
    var Hw = function() {
        Gw.onTransitionEnd(function() { Gw.hide() }, 150);
        (0, window.$)(window.document.documentElement).removeClass("show-wechat-share-tip")
    };
    var Jw = function(a) { z.Q.apply(this, arguments) };
    var Kw = function(a) { z.Q.apply(this, arguments) };
    var Lw = function() {};
    var Mw = function(a) {
        var b = (0, window.$)("#zh-feedback-form"),
            c = (0, window.$)(".zg-report-msg", b),
            d = (0, window.$)("textarea", b),
            b = (0, window.$)("select", b);
        a = a.type || b.val();
        b = window.$.trim(d.val());
        if (!b) return c.html("请填写反馈内容").show(), d.focus(), !1;
        c.hide();
        c = new z.ep(!0);
        d = new z.uj;
        c.on("success",
            function() {
                z.T.message("建议发送成功，我们会尽快处理，感谢您的帮助");
                Nw.remove("content")
            });
        d.add("type", a).add("content", b);
        c.ajax("/feedback/report", d.toString())
    };
    var Ow = function(a, b) {
        return window.$.post("/node/ColumnFollowBaseV2",
            { method: b ? "follow_column" : "unfollow_column", params: { column_id: a } })
    };
    var Pw = function(a, b) { return window.$.post("/roundtable/" + a, { action: b ? "follow" : "unfollow" }) };
    var Qw = function(a) {
        z.H.call(this);
        this.url = a + "/apilive";
        this.pX = 5E3;
        this.OX = 1E3;
        this.oy = 0;
        Rw(this)
    };
    var Rw = function(a) {
        a.client = new window.WebSocket(a.url);
        a.client.onmessage = function(b) {
            try {
                a.dispatchEvent({ type: "message", data: b.data })
            } catch (c) {
            }
        };
        a.client
            .onclose = function() { (0, window.setTimeout)(function() { a.oy < a.OX && (Rw(a), a.oy += 1) }, a.pX) };
        a.client.onerror = function() { a.client.close() }
    };
    var Sw = function(a) {
        z.Mb(this.J = {}, this.defaults, a || {});
        this.tc()
    };
    var Tw = function(a) { return Uw.every(function(b) { return a[b] }) };
    var Vw = function(a, b) { return Uw.every(function(c) { return a[c] === b[c] }) };
    var Ww = function(a) { return window.$.extend({}, { key: a.key }, a.fc) };
    var Xw = function(a, b) {
        a.every(function(a) { return !Vw(a, b) }) && a.push(b);
        return a
    };
    var Yw = function(a, b) {
        var c = a[b.group];
        c ? c.push(b) : a[b.group] = [b];
        return a
    };
    var Zw = function() {
        var a = Oo(z.en.map(function(a) { return z.Gb(En(a.Ll)) })).map(Ww).filter(Tw).reduce(Xw, []).reduce(Yw, {}),
            b = ['\x3cdiv class\x3d"shortcut-tips"\x3e'],
            c = {
                TX: /([^\s+])+|([\s+])/g,
                fR: function(a) {
                    return a.replace(this.TX,
                        function(a, b) { return b ? "\x3ckbd\x3e" + a + "\x3c/kbd\x3e" : " " + a + " " })
                }
            };
        z.Db(a,
            function(a, f) {
                b.push('\x3cdiv class\x3d"group"\x3e\x3ch2\x3e', f, "\x3c/h2\x3e\x3cdl\x3e");
                z.A(a,
                    function(a) {
                        b.push("\x3cdt\x3e", c.fR(a.key), "\x3c/dt\x3e");
                        b.push("\x3cdd\x3e", a.name, "\x3c/dd\x3e")
                    });
                b.push("\x3c/dl\x3e\x3c/div\x3e")
            });
        b.push("\x3c/div\x3e");
        return b.join("")
    };
    z.$w = function(a) { return ax("common").then(function() { return ax(a) }) };
    z.bx = function() {
        var a = z.Y;
        return { signedIn: a.jb(), currentUser: { email: a.email, activated: a.Sd, isOrg: a.uc }, authRequired: z.Dq }
    };
    var cx = function() {
        return new window.Promise(function(a) {
            window.$.ajax({
                url: "//zhstatic.zhihu.com/assets/zfeedback/3.0.12/zfeedback.js",
                dataType: "script",
                cache: !0
            }).then(function() { a(window.zfeedback) })
        })
    };
    var dx = function() {
        cx().then(function(a) {
            z.Y.jb() && (window.zfeedbackConfig = { user: { hash: z.Y.be } });
            a.init()
        })
    };
    var ex = function(a, b) {
        fx.push([a, z.pa(b) ? b : 2]);
        fx.sort(function(a, b) { return a[1] - b[1] })
    };
    var gx = function() {
        Eq.call(this);
        this.queue = []
    };
    var hx = function() {
        gx.call(this);
        this.bz = 0
    };
    var ix = function(a) { return Math.pow(a, 3) };
    var jx = function(a) { return 1 - Math.pow(1 - a, 3) };
    var kx = function(a) { return 3 * a * a - 2 * a * a * a };
    var lx = function() {
        z.H.call(this);
        this.h = null;
        this.TU = 768;
        this.Zy = this.$X = 300;
        this.mp = !0;
        this.sx = !1;
        this.bZ = 150
    };
    var mx = function() {};
    var nx = function() { z.H.call(this) };
    z.ox = function(a) {
        a.Mk = new z.ep(!1);
        a.o().ta(a.Mk, "success", a.PV);
        a.Mk.ajax("/noti7/new?r\x3d" + +new Date, null, "GET")
    };
    var px = function() {
        if (qx)
            (0, window.$)(window.document).on("click.tabless",
                "a:not(#js-openInApp)",
                function(a) {
                    this.host === window.location.host &&
                        "_blank" === a.currentTarget.target &&
                        (a.currentTarget.target = "")
                })
    };
    z.rx = function(a) {
        a = void 0 === a ? {} : a;
        z.H.call(this);
        this.Cr = !0;
        this.Gn = this.qr = -1;
        this.kM = "";
        this.Na = null;
        Object.assign(this.J = {}, this.defaults, a);
        this.J.Gl && (this.Qt = z.Dq(this.Qt, this.J.Gl))
    };
    z.sx = function(a, b) {
        a.li.innerHTML += '\n    \x3ca class\x3d"zm-profile-email-history-link" href\x3d"' +
            b +
            '"\x3e私信记录  »\x3c/a\x3e\n    ' +
            (z.Y.uc ? "\x3cspan class\x3d'OrgIcon sprite-global-icon-org-14' data-tooltip\x3d's$b$已认证的机构' /\x3e" : "") +
            "\n  "
    };
    z.tx = function(a, b, c, d) {
        -1 === b
            ? z.pr(a.sd, a.li)
            : b !== z.Y.be &&
            (a.Gn = b, a.kM = c, a.li &&
                a.sd &&
                (a.li.innerHTML = a.kM + (d ? or() : ""), z.pr(a.li, a.sd), a.sd.value = ""))
    };
    var ux = function(a, b) {
        a.Ou.innerHTML = b;
        z.P(a.Ou, !0)
    };
    var vx = function() {};
    z.xx = function(a, b, c) {
        this.element = a;
        this.yf = b;
        this.KW = c
    };
    var yx = function(a, b) { this.Fi = a instanceof z.Ge ? a : new z.Ge(a, b) };
    var zx = function(a, b) {
        this.aC = 4;
        this.nv = b || void 0;
        z.xn.call(this, a)
    };
    z.Ax = function(a, b) {
        a.hB = null == b || b instanceof z.Gg ? b : new z.Gg(b, void 0, void 0, void 0);
        a.W() && a.ga()
    };
    z.Bx = function(a, b, c) {
        this.ca = c || (a ? z.Ie(z.J(a)) : z.Ie());
        zx.call(this, this.ca.B("DIV", { style: "position:absolute;display:none;" }));
        this.Rj = new z.Ge(1, 1);
        this.qb = new Ho;
        this.il = null;
        a && this.attach(a);
        null != b && z.of(this.m(), b)
    };
    var Cx = function(a, b) {
        z.md(b, "mouseover", a.Gd, !1, a);
        z.md(b, "mouseout", a.zm, !1, a);
        z.md(b, "mousemove", a.xm, !1, a);
        z.md(b, "focus", a.ye, !1, a);
        z.md(b, "blur", a.zm, !1, a)
    };
    var Dx = function(a, b) {
        var c = z.xf(a.ca);
        a.Rj.x = b.clientX + c.x;
        a.Rj.y = b.clientY + c.y
    };
    var Ex = function(a, b) {
        try {
            for (; b && !a.qb.contains(b);) b = b.parentNode;
            return b
        } catch (c) {
            return null
        }
    };
    var Fx = function(a, b) {
        if (0 == b) {
            var c = a.Rj.clone();
            return new Gx(c)
        }
        return new Hx(a.nc)
    };
    var Ix = function(a) {
        if (a.anchor) for (var b, c = 0; b = Jx[c]; c++) z.nf(b.m(), a.anchor) && (b.Sl = a, a.BK = b)
    };
    var Kx = function(a, b, c) { a.yn || (a.yn = z.vd((0, z.t)(a.jB, a, b, c), a.er)) };
    var Lx = function(a) { a.yn && (z.wd(a.yn), a.yn = void 0) };
    var Gx = function(a, b) { yx.call(this, a, b) };
    var Hx = function(a) { z.xx.call(this, a, 3) };
    var Mx = function(a, b, c) { z.Bx.call(this, a, b, c) };
    z.Nx = function(a, b) { a.sp = b || null };
    var Ox = function(a, b) {
        if (a.qx && a.qx.contains(b) || a.ku(b)) return !0;
        var c = a.Sl;
        return !!c && c.ku(b)
    };
    z.Px = function(a, b, c, d) {
        z.Bx.call(this, null, null, c);
        z.qa(a) ? this.BA = a : this.RE = a;
        this.yP = 0 != b;
        this.lD = [];
        this.Ra = d || (c ? c.wa() : window.document);
        z.G(this.Ra, "mouseover", this.QH, !1, this)
    };
    var Qx = function(a, b, c) {
        if (b == a.qg) a.Oj();
        else if (b != a.anchor) {
            1 != a.getState() && 4 != a.getState() || Rx(a);
            var d = new Sx("trigger", a, b, void 0);
            a.Mi().contains(b) || (a.attach(b), a.lD.push(b));
            a.anchor = b;
            a.bv(d) ? Kx(a, b, c || a.nv) : Tx(a)
        }
    };
    var Ux = function(a, b) {
        var c = z.kb(a.lD, b);
        -1 != c && (a.detach(b), a.lD.splice(c, 1))
    };
    var Rx = function(a) {
        Lx(a);
        Tx(a)
    };
    var Tx = function(a) {
        a.dispatchEvent(new Sx("canceltrigger", a, a.anchor || null));
        Ux(a, a.anchor);
        delete a.anchor
    };
    var Sx = function(a, b, c, d) {
        z.Lc.call(this, a, b);
        this.anchor = c;
        this.data = d
    };
    var Vx = function(a, b, c) {
        z.xx.call(this, a, b);
        this.JE = c
    };
    var Wx = function(a, b) {
        a & 48 && (b ^= 2);
        a & 192 && (b ^= 1);
        return b
    };
    var Xx = function() {
        z.H.call(this);
        this.DY = this.jT = 250;
        this.hb = "tooltip";
        this.Rs = "data-" + this.hb
    };
    var Yx = function(a, b) {
        return '\n    \x3cdiv class\x3d"popover-content no-hovercard"\x3e' +
            a +
            "\x3c/div\x3e" +
            ('\n    \x3cdiv class\x3d"arrow"\x3e\x3c/div\x3e\n    \x3cdiv class\x3d"arrow2' +
                (b ? " loading" : "") +
                '"\x3e\x3c/div\x3e\n  ') +
            "\n  "
    };
    var Zx = function(a) {
        var b = void 0;
        switch (a.Yl) {
        case "t":
            b = 5;
            break;
        case "r":
            b = 4;
            break;
        case "b":
            b = 4;
            break;
        case "l":
            b = 6
        }
        a = a.Fa;
        a.aC = b;
        a.W() && a.ga()
    };
    var $x = function(a, b) {
        a.Fa.ge(b);
        a.Fa.setPosition(a.ZF)
    };
    var ay = function() {
        Xx.call(this);
        this.hb = "hovercard";
        this.yi = {}
    };
    var by = function(a, b, c, d) {
        var f = a.yi[b] && a.yi[b][c];
        if (f) $x(a, Yx(f));
        else if (f = cy[b])
            window.$
                    .get("/node/" + f, { params: { url_token: c } }, (0, z.t)(function(a) { dy(this, a, b, c) }, a)),
                $x(a, a.Mx(d))
    };
    var dy = function(a, b, c, d) {
        a.Zl === c && a.Ho === d && dy(a, b);
        a.yi[c] = a.yi[c] || {};
        a.yi[c][d] = b;
        Zx(a);
        $x(a, Yx(b));
        Qx(a.Fa, a.dG, a.Yl)
    };
    var ey = function(a) {
        z.Q.call(this);
        this.options = window.$.extend({
                stopPropagation: !0,
                hP: "#000",
                Ax: .5,
                QP: "#666",
                KF: .2,
                top: 2,
                width: 6,
                right: 2,
                dP: !0
            },
            a);
        this.rB = 0;
        this.dt = !1
    };
    var fy = function(a) {
        a.wn && (a.Je.stop().css({ opacity: a.options.Ax }).show(), a.lo && ((0, window.clearTimeout)(a.lo), a.lo = !1))
    };
    var gy = function(a, b) {
        b = b || 0;
        a.lo = (0, window.setTimeout)((0, z.t)(function() {
                    this.Je.stop().fadeOut();
                    this.lo = !1
                },
                a),
            b)
    };
    var hy = function(a, b) {
        var c = a.yd.height() - 2 * a.options.top - a.Je.height(), d = a.Rb.height() - a.yd.height();
        return b / c * d
    };
    var iy = function(a, b, c) {
        z.Lc.call(this, "scroll", a);
        this.scrollTop = b;
        this.vL = c
    };
    z.jy = function(a) {
        z.Q.call(this);
        this.J = window.$.extend({}, this.defaults, a || {})
    };
    var ky = function() {
        z.H.call(this);
        this.pg = [0, 0, 0];
        this.UJ = [0, 0, 0];
        this.types = ["default", "follow", "vote_thank"];
        this.DG = !z.sm.fb;
        this.JM = z.sm.fb || null != window.navigator.userAgent.match(/iPad/i);
        this.cache = [!1, !1, !1];
        this.Pi = [null, null, null];
        this.nq = [0, 0, 0];
        this.xn = [!1, !1, !1]
    };
    var ly = function(a) {
        a.tab = new z.jy({ LJ: ".zm-noti7-popup-tab-item", AK: ".zm-noti7-content", jh: "current" });
        a.o().g(a.tab,
            "action",
            function(a) {
                this.bG = a = a.data.index;
                my(this, a);
                var c = this.Tg && this.Tg[a];
                c && ((0, window.setTimeout)(function() { c.update() }), this.tab.index() === a && c.scrollTop())
            }).g(a.tab,
            "select",
            function(a) {
                this.bG = a = a.data.index;
                ny(this, a);
                z.U.Bb({ type: "ga_click_top_nav_noti_tab", data: { tab: +a } });
                this.je || z.si.set("noti7-tab", a)
            });
        a.tab.w(a.cj)
    };
    var oy = function(a) {
        var b = void 0,
            c = void 0,
            d = z.Kr(100,
                function(c, d) {
                    var h = d.target;
                    200 > ("number" === typeof d.vL ? d.vL : h.scrollHeight - h.offsetHeight - h.scrollTop) &&
                        a.aB(c).then(function(a) { a || z.nd(b[c]) }, window.$.noop)
                },
                !0),
            c = a.JM ? a.contents : a.Tg,
            b = z.mb(c, function(a, b) { return z.G(a, "scroll", (0, z.t)(d, void 0, b)) })
    };
    var ny = function(a, b) {
        a.Tg &&
            z.A(a.Tg,
                function(a, d) { b === d ? a.enter() : a.Ny && (a.o().removeAll(), a.he && a.he.stop(), a.Ny = !1) })
    };
    var py = function(a) {
        a = z.Po(a.pg, Fn);
        return -1 === a ? 0 : a
    };
    var qy = function(a) {
        if (!z.Om) {
            var b = ry(a.je);
            a = ry(a.mI);
            var c = "";
            b && a
                ? c = "(" + a + " 封私信 / " + b + " 条消息) "
                : b
                ? c = "(" + b + " 条消息) "
                : a &&
                (c = "(" + a + " 封私信) "
                );
            window.document.title = c +
                window.document.title
                .replace(/^(\(|\uff08)(\d)*(\+)?( )?(\u5c01\u79c1\u4fe1)?( \/ )?(\d)*(\+)?( )?(\u6761\u6d88\u606f)?(\)|\uff09)( )?/g, "")
        }
    };
    var sy = function(a, b) {
        a.je -= a.pg[b];
        a.Mw.eq(b).removeClass("withdot");
        0 > a.je && (a.je = 0);
        z.P(a.Ao, !!a.je);
        a.Ao.innerHTML = a.je
    };
    var my = function(a, b) {
        a.DG
            ? a.visible &&
            (a.cache[b]
                ? ("$$used$$" !== a.cache[b] && (a.ey[b].innerHTML = a.cache[b], a.cache[b] = "$$used$$"),
                    a.pg[b] && ty(a.types[b]), sy(a, b), a
                        .Tg &&
                        a.Tg[b].update().scrollTop(), a.je || z.si.set("noti7-tab", b))
                : (a.xn[b] = !0, a.tm(b)))
            : a.cache[b]
            ? ("$$used$$" !== a.cache[b] && (a.ey[b].innerHTML = a.cache[b], a.cache[b] = "$$used$$"),
                a.pg[b] && ty(a.types[b]), sy(a, b))
            : (a.xn[b] = !0, a.tm(b), ty(a.types[b]))
    };
    var uy = function(a, b) {
        b ? a.fE.fadeIn(50) : a.fE.fadeOut(50);
        a.visible = b;
        z.S.enable(a.cj, "open", a.visible);
        z.S.enable(a.Hn, "open", a.visible);
        if (b) {
            a.cj.focus();
            z.A(a.cache, function(a, b) { a || this.tm(b) }, a);
            a.o().g(window.document, "click", a.It);
            var c;
            a.je ? (c = py(a), a.tab.select(c), a.xn[c] = !0) : (c = vy(), a.tab.select(c), a.jy || (a.xn[c] = !0));
            ny(a, c);
            z.U.Bb({ type: "ga_click_top_nav_noti", data: { tab: a.bG, BM: +(a.je || 0) } })
        } else a.o().pa(window.document, "click", a.It), ny(a, -1)
    };
    var ty = function(a) { (new z.ep(!1)).ajax("/noti7/readall", "tab\x3d" + a, "POST") };
    var vy = function() {
        var a = z.si.get("noti7-tab");
        return a ? +a : 0
    };
    var ry = function(a) { return 99 < a ? "99+" : a };
    var wy = function(a) {
        z.Q.call(this);
        window.$.extend(this.J = {}, this.defaults, a || {})
    };
    var xy = function(a) {
        var b = a.eh, c = a.xd, d = c.attr("id");
        d || (d = z.vh(z.uh.ba()), c.attr("id", d), b.attr("aria-labelledby", d));
        c.attr("role") || c.attr("role", "button");
        a.xd.attr("aria-haspopup", "true").attr("aria-activedescendant", "");
        a.eh.children().find("a").attr("tabindex", -1).attr("id",
            (0, z.t)(function(a, b) { return b || z.vh(z.uh.ba()) }, a))
    };
    var yy = function(a, b) {
        var c = a.eh.children().find("a"), d = c.size();
        b >= d ? b = 0 : -1 >= b && (b = d - 1);
        c = c.eq(b);
        a.xd.attr("aria-activedescendant", c.attr("id"));
        c.focus();
        a.index = b
    };
    var zy = function(a) { z.Q.apply(this, arguments) };
    var Ay = function(a, b) { return a ? By[b[0]] !== By[a[0]] : !0 };
    var Cy = function(a, b, c) {
        if (c = By[c])
            c = z.M("div", { className: "zu-autocomplete-row-label ac-row" }, c), z.cf(c, b), a.o()
                .g(a.O, "suggestionsupdate", Jr)
    };
    var Dy = function(a, b) {
        if (!a.metaKey)
            try {
                z.si.set("query", a.O.gc)
            } catch (c) {
                b += "?q\x3d" + (0, window.encodeURIComponent)(a.O.gc)
            }
        return b
    };
    var Ey = function(a) {
        a = a.m();
        var b = Object.values({ ji: "Topic", J0: "User", hC: "Question", i0: "Column", f0: "Post" });
        return { search: { raw_query: a && a.value, restrict_type: b } }
    };
    var Fy = function() { z.H.call(this) };
    var Gy = function() {
        var a = (0, window.$)("#js-top-nav-link-profile"), b = (0, window.$)("#mobile-top-nav-profile-popup");
        if (z.$h && b.length && b.children("ul").length) {
            var c = function(c) {
                    c = c.target;
                    b[0].contains(c) || c.contains(a[0]) || d()
                },
                d = function() {
                    a.parent().removeClass("open");
                    b.hide();
                    (0, window.$)(window.document.body).off("mousedown", c)
                };
            a.click(function(f) {
                f.preventDefault();
                b.is(":visible")
                    ? d()
                    : (a.parent().addClass("open"), b.show(), (0, window.$)(window.document.body).mousedown(c))
            }).attr("href", "javascript:;");
            b.find(".slide-up").click(d)
        }
    };
    var Hy = function() { z.Q.call(this) };
    var Iy = function(a) { return window.$.post("/settings/account/unlock_with_digits", a) };
    var Jy = function(a) { return window.$.post("/settings/account/unlock_with_password", a) };
    z.Ky = function(a, b) {
        b = void 0 === b ? {} : b;
        return new window.Promise(function(c) {
            function d(a, b) { return !!z.pb(a, function(a) { return a.challenge_type === b }) }

            function f(a) {
                var b = { value: a.challenge_type };
                switch (b.value) {
                case "password":
                    b.label = "使用知乎密码验证";
                    break;
                case "phone_digits":
                    b.label = z.Ja("使用手机 %s 验证", a.hint);
                    break;
                case "email_digits":
                    b.label = z.Ja("使用邮箱 %s 验证", a.hint)
                }
                return b
            }

            if (z.Ai.get("unlock_ticket")) return c();
            var g = z.T.async({
                title: "验证身份",
                modal: !0,
                SL: "正在进行安全验证，请稍等",
                className: "settings-account-unlock-dialog",
                onload: function(d, f) {
                    function g(a) {
                        var b = (0, window.$)(".panel", n),
                            c = a ? b.filter(function() { return (0, window.$)(this).data("match") === a }) : b.first();
                        b.not(c.show()).hide()
                    }

                    var n = (0, window.$)("form", d),
                        q = (0, window.$)(".submit", n),
                        v = (0, window.$)(".error-label-container", n),
                        F = (0, window.$)(".hint-label-container", n),
                        K = (0, window.$)("select", n).change(function() {
                            g(this.value);
                            v.text("");
                            F.text("")
                        });
                    (0, window.$)(".js-send-digits", n).each(function() {
                        var a = (0, window.$)(this), b = a.closest(".panel");
                        (0, window.$)("input",
                            b);
                        var c = b.data("match"),
                            a = z.Bi(a,
                                60,
                                function(a) { return a ? "%s 秒后即可重发" : "重发验证码" },
                                function() {
                                    F.text("");
                                    window.$.post("/settings/account/send_unlock_digits", { type: c })
                                        .then(function() { F.text("验证码已发送至你的" + ("email_digits" === c ? "邮箱" : "手机")) })
                                });
                        z.Ac(f, a)
                    });
                    z.sa(a) && (a.cancel = function() { f.F(!1) });
                    "boolean" == typeof b.DF && !b.DF && wn(f, b.DF);
                    var O = n.validate({
                        messages: z.Ly,
                        ignore: "input.text:hidden",
                        errorLabelContainer: v,
                        submitHandler: z.Ci(q,
                            function() {
                                var a = "password" === K.val();
                                return (a ? Jy : Iy)((0, window.$)(":input:visible",
                                    n).serialize()).then(function(b) {
                                    if (b.success) f.F(!1), c();
                                    else if (b = b.payload, b.fields) O.showErrors(b.fields);
                                    else if (b.message) {
                                        var d = {};
                                        d[a ? "password" : "digits"] = b.message;
                                        O.showErrors(d)
                                    }
                                })
                            })
                    });
                    K.change();
                    (0, window.$)("input.text:visible", n).focus()
                },
                dy: window.$.get("/settings/account/request_unlock").then(function(a) {
                    if (a.success)
                        return (0, window.setTimeout)(function() {
                                g.F(!1);
                                c()
                            },
                            3E3), '\x3cp class\x3d"z-text-muted"\x3e验证成功\x3c/p\x3e';
                    var k = a.payload;
                    return window.$.get("/node/SettingsRequestUnlockTemplate").then(function(a) {
                        return (0, z.Zv)(a,
                        {
                            canUsePanel: z.Ba(d, k),
                            each: z.A,
                            intro: b.QT || "为了保证你的帐号安全，请验证身份。验证成功后进行下一步操作。",
                            options: z.mb(k, f)
                        })
                    })
                })
            })
        })
    };
    z.My = function() { return z.Ky(null, { QT: "我们检测到您的此次登录异常，为保证帐号安全，请您验证身份。" }) };
    var Ny = function() {
        z.Ih.call(this, null, !1);
        this.mF = "zh-lightbox-showing";
        this.dZ = "zh-lightbox-thumb";
        this.tc()
    };
    var Oy = function() {
        (0, window.$)(window.document).on("click",
            ".OrgIcon,.icon-badge",
            function(a) {
                a = (0, window.$)(a.target);
                a.hasClass("no-badge-explain") ||
                    a.closest("a").length ||
                    (a.hasClass("OrgIcon")
                        ? window.open("/question/48510028/answer/111228381")
                        : a.hasClass("icon-badge-identity")
                        ? window.open("/question/48510028/answer/111228361")
                        : (a.hasClass("icon-badge-best_answerer") || a.hasClass("icon-badge-id-an")) &&
                        window.open("/question/48509984/answer/111228361"))
            })
    };
    var Py = function() {
        if (window.location.search.match(/\bdebug_features=(.+?)(&|$)/)) Qy(Ry(RegExp.$1));
        else {
            if (z.Y.jb()) {
                var a = (0, window.$)("meta[http-equiv\x3dx-za-experiment]").attr("content");
                if (a) {
                    Qy(Ry(a));
                    return
                }
            }
            window.$.ajaxPrefilter(function(a, c, d) { Sy || d.complete(function() { Ty(d) }) });
            gp("*", function(a, c) { Sy || Ty(c) })
        }
    };
    var Qy = function(a) {
        function b(b) { (0, window.setTimeout)(function() { return b.call(null, a) }) }

        Sy = !0;
        for (var c = void 0; c = Uy.shift();) b(c)
    };
    var Ty = function(a) {
        "HIT" !== a.getResponseHeader("x-cache-status") && (a = a.getResponseHeader("x-za-experiment")) && Qy(Ry(a))
    };
    var Ry = function(a) {
        var b = {};
        String(a).split(/[,;]\s*/).forEach(function(a) {
            var d = a.indexOf(":"), f = a.slice(0, d).trim();
            a = a.slice(d + 1).trim();
            if (f || a) b[f] = a
        });
        return b
    };
    var Cr = function() {
        if (window.console) {
            var a = Array.from(arguments);
            a.unshift("[" + (new Date).toLocaleTimeString() + "]:\t");
            window.console.log.apply
                ? window.console.log.apply(window.console, a)
                : window.console.log(a[0], a.slice(1).join(","))
        }
    };
    z.Vy = function(a) { z.Q.apply(this, arguments) };
    z.Wy = function(a, b) {
        var c = a.$b, d = c.oa, f = c.Om;
        b &&
        (z.sa(b)
            ? Object.entries(b).forEach(function(a, b) {
                var c = z.ha(a),
                    l = c.next().value,
                    c = c.next().value,
                    n = d.find("[name\x3d" + l + "]").first().addClass("is-error"),
                    l = '\x3cp class\x3d"' + f + '-error"\x3e' + c + "\x3c/p\x3e",
                    c = n.parents("\n          ." +
                        f +
                        ", ." +
                        f +
                        "-section,\n          ." +
                        f +
                        "-uploader, ." +
                        f +
                        "-radio-group\n        ").first().addClass("is-error"),
                    n = c.find("." + f + "-error-container");
                n.length ? n.html(l) : c.hasClass("" + f) ? c.find("." + f + "-content").append(l) : c.append(l);
                0 === b && z.Hr(c)
            })
            : d.find('[type\x3d"submit"]').after('\x3cspan class\x3d"' +
                f +
                '-error is-inline"\x3e\n          ' +
                (b || "服务器错误，请稍后重试...") +
                "\n        \x3c/span\x3e").parents("." + f).addClass("is-error"))
    };
    var Xy = function(a, b) {
        b = void 0 === b ? {} : b;
        for (var c = window.$.unique(a.find("input, select, textarea")
                     .filter(function() { return (0, window.$)(this).data("required") })
                     .map(function() { return (0, window.$)(this).attr("name") }).get()),
            d = {},
            c = z.ha(c),
            f = c.next();
            !f.done;
            f = c.next()) {
            var f = f.value, g = b[f];
            if (z.ma(g) && 0 === g.length || !g) {
                g = a.find("[name\x3d" + f + "]");
                g.is("select") ? d[f] = "必选项" : g.is('[type\x3d"file"]') ? d[f] = "必传项" : d[f] = "必填项";
                var h = g.data("empty-tip");
                h && (d[f] = "placeholder" === h ? g.attr("placeholder") : h)
            }
        }
        return window.$.isEmptyObject(d) ? null : d
    };
    var Yy = function(a, b) {
        function c(a) {
            a = a.val();
            d.TI && (a = window.$.trim(a));
            d.fU && window.$.isNumeric(a) && (a = Number(a));
            return a
        }

        var d = Object.assign({ TI: !1, fU: !1, mR: function(a) { return a.attr("name") } }, b), f = {};
        a.find("select, textarea, input")
            .not("\n      input[type\x3dcheckbox]:not(:checkbox),\n      input[type\x3dradio]:not(:checked),\n      input[name^\x3d_]\n    ").each(function() {
                var b = (0, window.$)(this);
                if (!b.is(":disabled") && b.parents("form").first().is(a)) {
                    var h = d.mR(b);
                    if (h)
                        if (b.is('[type\x3d"checkbox"]'))
                            "undefined" === typeof f[h] &&
                                (f[h] = []), f[h].push(c(b));
                        else if (b.is('[type\x3d"file"]')) {
                            if ("undefined" === typeof f[h] && (f[h] = []), b = b.data("file") || b.val()) {
                                try {
                                    b = JSON.parse(b)
                                } catch (k) {
                                }
                                f[h].push(b)
                            }
                        } else f[h] = c(b)
                }
            });
        return f
    };
    z.Zy = function(a) { return (0, z.Zv)((0, window.$)(a).html() || "") };
    var $y = function(a, b) {
        z.H.call(this);
        this.h = a;
        var c = z.lf(this.h) ? this.h : this.h ? this.h.body : null;
        this.cU = !!c && z.ch(c);
        this.iJ = z.G(this.h, z.B ? "DOMMouseScroll" : "mousewheel", this, b)
    };
    var az = function(a, b) { return z.D && (z.Uc || z.Ml) && 0 != a % b ? a : a / b };
    var bz = function(a, b, c, d) {
        z.Pc.call(this, b);
        this.type = "mousewheel";
        this.detail = a;
        this.deltaX = c;
        this.deltaY = d
    };
    var cz = function() { z.H.call(this) };
    var dz = function(a, b) { return null == a.fl ? b : a.jq + Math.round((b - a.jq) / a.fl) * a.fl };
    var ez = function(a, b) {
        z.Q.call(this, a);
        this.IE = null;
        this.Lb = new cz;
        this.mU = b || z.Il;
        z.G(this.Lb, "change", this.JH, !1, this)
    };
    var fz = function(a, b) {
        b
            ? (a.o().g(a.He, "beforedrag", a.Gt).g(a.ug, "beforedrag", a.Gt).g(a.He, ["start", "end"], a.Rt)
                .g(a.ug, ["start", "end"], a.Rt).g(a.Fb, "key", a.Lf).g(a.m(), "click", a.Nt)
                .g(a.m(), "mousedown", a.Nt), a.FI && gz(a, !0))
            : (a.o().pa(a.He, "beforedrag", a.Gt).pa(a.ug, "beforedrag", a.Gt).pa(a.He, ["start", "end"], a.Rt)
                .pa(a.ug, ["start", "end"], a.Rt).pa(a.Fb, "key", a.Lf).pa(a.m(), "click", a.Nt)
                .pa(a.m(), "mousedown", a.Nt), a.FI && gz(a, !1))
    };
    var hz = function(a, b) {
        var c = z.Tg(b, a.m());
        return "vertical" == a.Xb ? c.y : a.ue && a.Jd() ? a.m().clientWidth - c.x : c.x
    };
    var iz = function(a, b) {
        var c = a.Tc(), d = a.md();
        if ("vertical" == a.Xb) {
            var f = a.ob.offsetHeight, g = a.m().clientHeight - f, f = hz(a, b) - f / 2;
            return (d - c) * (g - f) / g + c
        }
        f = a.ob.offsetWidth;
        g = a.m().clientWidth - f;
        f = hz(a, b) - f / 2;
        return (d - c) * f / g + c
    };
    var jz = function(a, b) {
        if (b == a.ob) return a.Lb.X();
        if (b == a.Yd) return a.Lb.X() + a.Lb.Ni();
        throw Error("Illegal thumb element. Neither minThumb nor maxThumb");
    };
    var kz = function(a, b) {
        Math.abs(b) < a.Zo() && (b = (0, z.Sl)(b) * a.Zo());
        var c = jz(a, a.ob) + b,
            d = jz(a, a.Yd) + b,
            c = Lo(c,
                a.Tc(),
                a.md() -
                a
                .Nu),
            d = Lo(d, a.Tc() + a.Nu, a.md());
        lz(a, c, d - c)
    };
    var mz = function(a, b, c) {
        var d = dz(a.Lb, c);
        c = b == a.ob ? d : a.Lb.X();
        b = b == a.Yd ? d : a.Lb.X() + a.Lb.Ni();
        c >= a.Tc() && b >= c + a.Nu && a.md() >= b && lz(a, c, b - c)
    };
    var lz = function(a, b, c) {
        a.Tc() <= b &&
            b <= a.md() - c &&
            a.Nu <= c &&
            c <= a.md() - b &&
            (b != a.X() || c != a.Ni()) &&
            (a.Lb.Pu = !0, a.Lb.Nv(0), a.Lb.Da(b), a.Lb.Nv(c), a.Lb.Pu = !1, a.JH())
    };
    var nz = function(a, b) { return b <= a.Lb.X() + a.Lb.Ni() / 2 ? a.ob : a.Yd };
    var oz = function(a) {
        if (a.ob && !a.Kp) {
            var b = pz(a, jz(a, a.ob)), c = pz(a, jz(a, a.Yd));
            if ("vertical" == a.Xb)
                a.ob.style.top = b.y + "px", a.Yd.style
                    .top = c.y + "px", a.cc &&
                (b = qz(c.y, b.y, a.ob.offsetHeight), a.cc.style.top = b.offset + "px", a.cc.style
                    .height = b.size + "px");
            else {
                var d = a.ue && a.Jd() ? "right" : "left";
                a.ob.style[d] = b.x + "px";
                a.Yd.style[d] = c.x + "px";
                a.cc &&
                (b = qz(b.x, c.x, a.ob.offsetWidth), a.cc.style[d] = b.offset + "px", a.cc.style
                    .width = b.size + "px")
            }
        }
    };
    var qz = function(a, b, c) {
        var d = Math.ceil(c / 2);
        return { offset: a + d, size: Math.max(b - a + c - 2 * d, 0) }
    };
    var pz = function(a, b) {
        var c = new z.Ge;
        if (a.ob) {
            var d = a.Tc(), f = a.md(), f = b == d && d == f ? 0 : (b - d) / (f - d);
            "vertical" == a.Xb
                ? (d = a.m().clientHeight - a.ob.offsetHeight, f = Math.round(f * d), c.x = rz(a, a.ob), c.y = d - f)
                : (c.x = Math.round(f * (a.m().clientWidth - a.ob.offsetWidth)), c.y = a.ob.offsetTop)
        }
        return c
    };
    var sz = function(a, b) {
        b = Lo(b, a.Tc(), a.md());
        a.Kp && (a.Fo.stop(!0), a.Fo.dispose());
        var c = new hx, d, f = nz(a, b), g = a.X(), h = a.Ni(), k = jz(a, f), l = pz(a, k);
        d = a.Zo();
        Math.abs(b - k) < d && (b = Lo(k + (b > k ? d : -d), a.Tc(), a.md()));
        mz(a, f, b);
        k = pz(a, jz(a, f));
        d = "vertical" == a.Xb ? [rz(a, f), k.y] : [k.x, f.offsetTop];
        l = new $q(f, [l.x, l.y], d, 100);
        l.sh(a.ue);
        c.add(l);
        a.cc && tz(a, f, g, h, k, c);
        a.IE && (f = a.IE.k0(g, b, 100), z.A(f, function(a) { c.add(a) }));
        a.Fo = c;
        a.o().g(c, "end", a.MQ);
        a.Kp = !0;
        c.play(!1)
    };
    var tz = function(a, b, c, d, f, g) {
        var h = pz(a, c), k = pz(a, c + d);
        c = h;
        d = k;
        b == a.ob ? c = f : d = f;
        "vertical" == a.Xb
            ? (b = qz(k.y, h.y, a.ob.offsetHeight), h = qz(d
                .y,
                c.y,
                a.ob.offsetHeight), f = new $q(a
                .cc,
                [rz(a, a.cc), b.offset],
                [rz(a, a.cc), h.offset],
                100), b = new cr(a.cc, b.size, h.size, 100))
            : (b = qz(h.x, k.x, a.ob.offsetWidth), h = qz(c
                .x,
                d.x,
                a.ob.offsetWidth), f = new $q(a
                .cc,
                [b.offset, a.cc.offsetTop],
                [h.offset, a.cc.offsetTop],
                100), b = new br(a.cc, b.size, h.size, 100));
        f.sh(a.ue);
        b.sh(a.ue);
        g.add(f);
        g.add(b)
    };
    var uz = function(a) {
        var b = a.m();
        b &&
        (z.vg(b, "valuemin", a.Tc()), z.vg(b, "valuemax", a.md()), z.vg(b, "valuenow", a.X()), z
            .vg(b, "valuetext", a.mU(a.X()) || ""))
    };
    var gz = function(a, b) {
        b ? (a.Jk || (a.Jk = new $y(a.m())), a.o().g(a.Jk, "mousewheel", a.FH)) : a.o().pa(a.Jk, "mousewheel", a.FH)
    };
    var rz = function(a, b) { return a.ue ? z.lh(b) : b.offsetLeft };
    var vz = function(a, b) {
        ez.call(this, a, b);
        this.Lb.Nv(0)
    };
    var wz = function(a) {
        z.Q.call(this);
        this.options = window.$.extend({}, this.defaults, a)
    };
    var xz = function(a, b) {
        a.zoom = b;
        yz(a, a.hf.Fr / 2 + a.hf.x, a.hf.bp / 2 + a.hf.y)
    };
    var yz = function(a, b, c) {
        var d = a.zoom;
        a.hf = { Fr: a.options.ig / d, bp: a.options.hg / d, x: b - a.options.ig / d / 2, y: c - a.options.hg / d / 2 };
        zz(a)
    };
    var zz = function(a) {
        var b = a.zoom,
            c = Lo(a.options.Pn - a.hf.x * b, a.options.ig + a.options.Pn - a.Zt * b, a.options.Pn),
            d = Lo(a.options.Qn - a.hf.y * b, a.options.hg + a.options.Qn - a.Yt * b, a.options.Qn),
            f = { width: b * a.Zt, height: b * a.Yt, left: c, top: d };
        a.Mr.css(f);
        a.Jw.css(f);
        a.hf.x = (a.options.Pn - c) / b;
        a.hf.y = (a.options.Qn - d) / b
    };
    z.Az = function(a, b, c, d) {
        d = void 0 === d ? {} : d;
        z.Q.call(this);
        this.ps = a || Bz;
        this.JG = b;
        this.mL = c || "l";
        this.J = d
    };
    var Cz = function() { return !!window.FileReader };
    var Dz = function(a) {
        a.Hm = a.fA = a.rk = "";
        if (a.dialog) a.dialog.ga();
        else {
            a.dialog = new z.R(null);
            a.dialog.La("修改图片");
            var b = z.zm.sf, c = z.zm.hh, d = new z.Uh;
            d.set(b, "取消", !1, !0).set(c, "确定", !0);
            z.Rh(a.dialog, d);
            a.o().g(a.dialog,
                z.Th,
                function(a) {
                    if (a.key === c) {
                        if (Cz()) {
                            var b = this.ky;
                            a = (0, window.$)("\x3ccanvas\x3e\x3c/canvas\x3e");
                            a.attr("width", b.options.ig);
                            a.attr("height", b.options.hg);
                            var d = a[0];
                            (0, window.$)(window.document.body).append(d);
                            var k = a[0].getContext("2d"), l = b.hf;
                            k.drawImage(b.$t,
                                l.x,
                                l.y,
                                l.Fr,
                                l.bp,
                                0,
                                0,
                                b.options.ig,
                                b.options.hg);
                            b = d.toDataURL("image/png");
                            a.remove();
                            a = b
                        } else a = this.ky.hf;
                        this.rk = a;
                        Ez(this);
                        this.dialog.F(!1);
                        return !1
                    }
                })
        }
        Fz(a.dialog.S());
        a.dialog.F(!0);
        z.S.add(a.dialog.h, "avatar-edit-dialog");
        a.J.mG && z.S.add(a.dialog.h, a.J.mG)
    };
    var Gz = function(a) {
        var b = a.input.cloneNode();
        z.Bo(b, a.input);
        a.input = b;
        a.o().g(a.input, "change", a.Vc)
    };
    var Ez = function(a) {
        if (a.rk && (Cz() || a.fA)) {
            a.dispatchEvent("beforepost");
            var b = { type: a.ps, dest_id: a.ps === Bz ? z.Y[3] : a.JG, return_size: a.mL };
            if (Cz()) {
                var c = new window.FormData;
                c.append("handle_mode", "upload");
                c.append("picture", Hz(a.rk.replace(/data\:image\/\w{3,4};base64,/, "")), a.file.name);
                window.$.each(b, function(a, b) { c.append(a, b) });
                window.$.ajax({
                    url: a.ED,
                    data: c,
                    method: "post",
                    processData: !1,
                    contentType: !1,
                    success: window.$.proxy(a.UF, a),
                    dataType: "json",
                    xhrFields: { withCredentials: !0 },
                    crossDomain: !0
                })
            } else {
                var b =
                        window.$.extend(b,
                        {
                            handle_mode: "resize",
                            x: Math.round(a.rk.x),
                            y: Math.round(a.rk.y),
                            height: Math.round(a.rk.bp),
                            width: Math.round(a.rk.Fr),
                            hashval: a.fA
                        }),
                    d = '\x3cform target\x3d"av_up_frame" style\x3d"display:none;" method\x3d"post" action\x3d"' +
                        a.ED +
                        '"\x3e';
                window.$.each(b,
                    function(a, b) {
                        d +=
                            '\x3cinput type\x3d"hidden" name\x3d"' + a + '" value\x3d"' + b + '" /\x3e'
                    });
                d += "\x3c/form\x3e";
                b = (0, window.$)(d);
                b.appendTo(a.h);
                b[0].submit()
            }
        }
    };
    var Fz = function(a) {
        var b = (0, window
            .$
        )("\x3cdiv class\x3d'new-avatar-editor-loading'\x3e\x3cdiv\x3e\x3cspan\x3e\x3c/span\x3e\x3c/div\x3e\x3cdiv\x3e正在上传...\x3c/div\x3e\x3c/div\x3e");
        a = (0, window.$)(a);
        a.html("");
        a.append(b)
    };
    var Hz = function(a) {
        var b, c;
        c = "image/png";
        b = b || 512;
        a = (0, window.atob)(a);
        for (var d = [], f = 0; f < a.length; f += b) {
            for (var g = a.slice(f, f + b), h = Array(g.length), k = 0; k < g.length; k++) h[k] = g.charCodeAt(k);
            g = new window.Uint8Array(h);
            d.push(g)
        }
        return new window.Blob(d, { type: c })
    };
    z.Iz = function(a) {
        z.Q.call(this);
        this.DW = Object.assign({ UI: !1, Wf: window.$.noop }, a)
    };
    z.Jz = function(a) {
        a = void 0 === a ? {} : a;
        "post" === a.type && (a.type = "article");
        this.options = a;
        this.submit = z.Dq(this.submit.bind(this), !0);
        this.render = z.Dq(this.render.bind(this), !0)
    };
    var Kz = function(a) {
        if (a) {
            var b = z.T({
                title: "举报成功",
                content:
                    '\x3cp\x3e您的举报正在等待人工审核，我们会在 24 小时内审核完成\x3cbr\x3e处理完成后会「私信」通知您\x3cbr\x3e您也可以进入 \x3ca href\x3d"/community/report"\x3e社区服务中心\x3c/a\x3e 查看实时处理进度\x3c/p\x3e\x3cp style\x3d"margin-top: 1em"\x3e\x3clabel\x3e\x3cinput type\x3d"checkbox" name\x3d"neverRemind"\x3e不再提醒\x3c/label\x3e\x3c/p\x3e',
                modal: !0,
                ga: !0,
                buttons: { yes: "知道了" }
            });
            b.g(z.Sj,
                function() {
                    b.xh().querySelector("[name\x3dneverRemind]").checked &&
                        window.$.post("/community/report/noti", { cancel: !0 })
                })
        } else {
            var c =
                z.T({ title: "举报成功", content: "您的举报正在等待人工审核，我们会在 24 小时内审核完成", modal: !0, buttons: {} });
            (0, window.setTimeout)(function() { return c.F(!1) }, 4E3)
        }
    };
    var Lz = function() {};
    var Mz = function(a, b, c) {
        Lp.call(this, a, c || Lz.ba(), b);
        this.dc(1, !1);
        this.dc(2, !1);
        this.dc(4, !1);
        this.dc(32, !1);
        this.N = 1
    };
    var Nz = function() { this.Vx = [] };
    var Oz = function(a, b) {
        var c = a.Vx[b];
        if (!c) {
            switch (b) {
            case 0:
                c = a.V() + "-highlight";
                break;
            case 1:
                c = a.V() + "-checkbox";
                break;
            case 2:
                c = a.V() + "-content"
            }
            a.Vx[b] = c
        }
        return c
    };
    var Pz = function(a, b, c) {
        a = Oz(a, 2);
        return c.B("DIV", a, b)
    };
    var Qz = function(a, b) {
        var c = a.S(b);
        if (c) {
            var c = c.firstChild, d = Oz(a, 1);
            return !!c && z.lf(c) && z.zg(c, d)
        }
        return !1
    };
    var Rz = function(a, b, c, d) {
        Dp(a, c, b.Ri());
        Ep(a, b, c);
        d != Qz(a, c) &&
        (z.po(c, "goog-option", d), c = a.S(c), d
            ? (a = Oz(a, 1), c.insertBefore(b.L().B("DIV", a), c.firstChild || null))
            : c.removeChild(c.firstChild))
    };
    z.Sz = function(a, b, c, d) {
        Lp.call(this, a, d || Nz.ba(), c);
        this.Da(b)
    };
    var Tz = function() {};
    z.Uz = function(a, b) {
        Lp.call(this, null, a || Tz.ba(), b);
        this.dc(1, !1);
        this.dc(2, !1);
        this.dc(4, !1);
        this.dc(32, !1);
        this.N = 1
    };
    var Vz = function(a) { this.vx = a || "menu" };
    z.Wz = function(a) { z.Uz.call(this, Tz.ba(), a) };
    z.Xz = function(a, b) {
        z.Tr.call(this, Yz, b || Vz.ba(), a);
        this.mf(!1)
    };
    z.Zz = function() {
        z.H.call(this);
        this.ua = null;
        this.ib = 0;
        this.ZA = [];
        this.Du = [];
        this.rD = "最多输入 20 字";
        this.zy = "最多输入 256 字"
    };
    var $z = function(a, b, c) {
        a.ua ||
        (a.ua = new z.R(null), z.Rh(a.ua, null), a.ua.La(b || ""), c && (a.ua.S().innerHTML = c), a.o()
            .g(a.ua, "afterhide", a.Hi))
    };
    var aA = function(a, b, c) {
        var d = z.J("zh-fav-list-item-place-holder");
        d && z.P(d, !1);
        a.eC = b[5] ? "" : z.M("span", "zm-fav-list-item-lock", [z.M("i", "icon icon-lock")]);
        d = z.M("span", "zm-favo-list-item-title");
        z.of(d, b[1]);
        d = z.M("a",
            { "class": "zg-r5px zm-favo-list-item-link", href: "javascript:;" },
            [
                a.eC, d, z.M("span",
                {
                    className: "meta zg-gray",
                    innerHTML: '\x3cspan class\x3d"num"\x3e' +
                        b[3] +
                        '\x3c/span\x3e 条内容 \x3cspan class\x3d"zg-bull"\x3e•\x3c/span\x3e ' +
                        b[4] +
                        " 人关注"
                })
            ]);
        a.eC && a.eC.setAttribute("data-tooltip", "s$t$私密收藏夹");
        d.setAttribute("data-lid", b[0]);
        z.rb(a.Du, b[0]) && z.S.add(d, "zm-favo-list-item-link-active");
        b = z.L("zm-favo-list-item-link", a.Lh);
        c && b ? z.cf(d, b) : a.Lh.appendChild(d)
    };
    var bA = function(a, b) {
        if (a.ib !== b && a.Lh) {
            var c = z.Co("zm-favo-list-item-link", a.Lh);
            z.A(c, function(a) { z.S.remove(a, "zm-favo-list-item-link-active") }, a)
        }
        a.ib = b
    };
    var cA = function(a, b) {
        z.P(a.kX, b);
        z.P(a.fX, b);
        z.P(a.lU, b)
    };
    z.dA = function(a, b, c, d) {
        var f = z.J("zh-fav-head-title"), g = z.J("zh-fav-head-description-source");
        b = b || (f ? z.qf(f) : "");
        c = c || (g ? z.qf(g) : "");
        a.py = d || z.Jk;
        eA(a);
        a.hc();
        fA(a, 1);
        z.P(a.cD, !1);
        a.Cs.innerHTML = "取消";
        a.dx.innerHTML = "保存";
        a.ua.La("编辑收藏夹");
        a.Yi.value = co(b);
        a.Dk.value = co(c);
        a.py[1] ? a.py[3] ? cA(a, !1) : (cA(a, !0), a.JA.checked = !0) : (cA(a, !0), a.OI.checked = !0);
        a.BT = gA(a);
        a.ua.F(!0);
        a.Lm = !0
    };
    var hA = function(a) {
        var b = z.Co("zm-favo-list-item-link", a.Lh);
        z.A(b,
            function(a) {
                var b = a.getAttribute("data-lid");
                z.S.remove(a, "zm-favo-list-item-link-active");
                z.rb(this.Du, +b) && z.S.add(a, "zm-favo-list-item-link-active")
            },
            a)
    };
    var eA = function(a) { a.yQ ? hA(a) : a.B() };
    var fA = function(a, b) {
        var c = !!b;
        a.ua.La(0 === b ? "添加到收藏夹" : "创建新收藏夹");
        z.P(a.uU, !c);
        z.P(a.kz, c);
        (0, window.$)(a.Oy).text("").hide();
        new z.Wj(a.Yi, a.rD);
        new z.Wj(a.Dk, a.zy);
        if (1 === b) (0, window.$)(a.kz).on("change.FavoDiag", "input, textarea, select", function() { a.th() });
        else (0, window.$)(a.kz).off("change.FavoDiag"), a.Hi()
    };
    var gA = function(a) {
        var b = new z.zr, c = z.mr(a.Yi.value), d = z.Ma(a.Dk.value === a.zy ? "" : a.Dk.value);
        d || (d = -1);
        b.add("title", c);
        b.add("description", d);
        b.add("is_public", a.JA.checked ? 1 : 0);
        return b
    };
    var iA = function(a) {
        a.ua.F(!1);
        a.dispatchEvent(jA);
        z.U.Bb({
            type: "ga_click_collect_answer",
            data: { count: (0, window.$)(".zm-favo-list-item-link-active", a.Lh).length }
        })
    };
    var kA = function(a, b, c, d) {
        (0, window.$)(c).addClass("btn-pending").text(d ? "保存中" : "创建中");
        a.o().ta(b, "complete", function() { (0, window.$)(c).removeClass("btn-pending").text(d ? "保存" : "确认创建") })
    };
    var lA = function(a, b, c) {
        c = c || (b ? "保存失败，请重试" : "创建失败，请重试");
        (0, window.$)(a).text(c).show()
    };
    var mA = function(a, b) {
        z.ui({
            category: "collect",
            action: a,
            label: -1 < window.location.pathname.indexOf("collection")
                ? "collections_sidebar_create_collection"
                : "collect_answer_box",
            attributes: b
        })
    };
    z.nA = function() {
        this.hz = ["zg-btn-follow", "zg-btn-unfollow"];
        this.iz = "people"
    };
    z.oA = function(a, b, c, d) {
        z.xx.call(this, a, b);
        this.Vp = c ? 5 : 0;
        this.OB = d || void 0
    };
    var pA = function(a, b) {
        a & 48 && (b ^= 2);
        a & 192 && (b ^= 1);
        return b
    };
    var qA = function(a, b, c, d) {
        z.oA.call(this, a, b, c || d);
        (c || d) && this.rn(65 | (d ? 32 : 132))
    };
    var rA = function() {};
    var sA = function(a, b) {
        if (a)
            for (var c = b ? a.firstChild : a.lastChild, d; c && c.parentNode == a;) {
                d = b ? c.nextSibling : c.previousSibling;
                if (3 == c.nodeType) {
                    var f = c.nodeValue;
                    if ("" == (0, z.ab)(f)) a.removeChild(c);
                    else {
                        c.nodeValue = b ? z.Yo(f) : z.Xo(f);
                        break
                    }
                } else break;
                c = d
            }
    };
    var tA = function() {};
    var uA = function(a, b, c) { return c.B("DIV", "goog-inline-block " + (b + "-caption"), a) };
    z.vA = function(a, b, c, d, f) {
        z.Sp.call(this, a, c || tA.ba(), d);
        this.dc(64, !0);
        this.Hk = new qA(null, 5);
        b && this.bi(b);
        this.zJ = null;
        this.la = new z.td(500);
        !z.Zk && !z.ai || z.E("533.17.9") || (this.mu = !0);
        this.OU = f || Vz.ba()
    };
    var wA = function(a) { a.zJ = new z.Gg(7, 0, 7, 0) };
    z.xA = function(a) { a.Hk.rn && a.Hk.rn(33) };
    var yA = function(a) {
        if (a.ha.ya) {
            var b = a.Hk;
            a.Hk.element = a.WW || a.m();
            var c = a.ha.m();
            a.ha.W() || (c.style.visibility = "hidden", z.P(c, !0));
            !a.hv && a.Hk.Xo && a.Hk.Xo() & 32 && (a.hv = z.Yg(c));
            b.ga(c, b.yf ^ 1, a.zJ, a.hv);
            a.ha.W() || (z.P(c, !1), c.style.visibility = "visible")
        }
    };
    var zA = function(a, b, c) {
        var d = a.o();
        c = c ? d.g : d.pa;
        c.call(d, b, "action", a.ip);
        c.call(d, b, "close", a.Fz);
        c.call(d, b, "highlight", a.Mz);
        c.call(d, b, "unhighlight", a.Wz)
    };
    var AA = function(a, b) {
        var c = a.o();
        (b ? c.g : c.pa).call(c, a.m(), "keydown", a.nS)
    };
    var BA = function(a, b) {
        var c = a.m(), d = z.xg(b, "activedescendant"), d = z.Ke(b).getElementById(d) || b;
        if (!d.id) {
            var f = z.uh.ba();
            d.id = z.vh(f)
        }
        so(c, d);
        z.vg(c, "owns", d.id)
    };
    var CA = function(a, b) { this.Fi = a instanceof z.Ge ? a : new z.Ge(a, b) };
    var DA = function(a, b) { CA.call(this, a, b) };
    z.EA = function(a, b) {
        z.Xz.call(this, a, b);
        this.co = !0;
        this.mf(!0);
        this.F(!1, !0);
        this.dg = new z.Qd
    };
    z.FA = function(a, b, c, d, f) {
        var g = a.W();
        a.JI() && a.kZ
            ? a.hide()
            : (a.qg = f || null, a.dispatchEvent("beforeshow") &&
            (c = "undefined" != typeof c ? c : 4, g || (a.m().style.visibility = "hidden"), z.P(a.m(), !0), b
                .ga(a.m(), c, d), g || (a.m().style.visibility = "visible"), a.Hb(-1), a.F(!0)))
    };
    var GA = function(a, b) {
        for (var c = a.dg.Dd(), d = 0; d < c.length; d++) {
            var f = a.dg.get(c[d]);
            if (f.h == b.currentTarget) {
                a.ML(f, b.clientX, b.clientY);
                b.preventDefault();
                b.stopPropagation();
                break
            }
        }
    };
    var HA = function() { this.Vx = [] };
    var IA = function(a, b, c) {
        var d = b.L().B("SPAN");
        d.className = "goog-submenu-arrow";
        JA(b, d);
        a.S(c).appendChild(d)
    };
    var JA = function(a, b) {
        a.Jd()
            ? (z.Ag(b, "goog-submenu-arrow-rtl"), z.of(b, a.es ? "◄" : "►"))
            : (z.Cg(b, "goog-submenu-arrow-rtl"), z.of(b, a.es ? "►" : "◄"))
    };
    var KA = function(a, b, c, d) { z.Sz.call(this, a, b, c, d || HA.ba()) };
    var LA = function(a) {
        a.pe && z.wd(a.pe);
        a.RC && z.wd(a.RC)
    };
    var MA = function(a) {
        z.Ch(a.getParent(), function(a) { a != this && "function" == typeof a.ph && (a.ph(), LA(a)) }, a)
    };
    var NA = function(a, b) {
        !b && a.kb() && a.kb().Hb(-1);
        a.dispatchEvent(eo(64, b));
        var c = a.kb();
        b != a.kB && z.po(a.m(), "goog-submenu-open", b);
        if (b != c.W() && (b && (c.ya || c.render(), c.Hb(-1)), c.F(b), b)) {
            var c = new z.oA(a.m(), a.es ? 6 : 4, a.aU), d = a.kb(), f = d.m();
            d.W() || (f.style.visibility = "hidden", z.P(f, !0));
            c.ga(f, a.es ? 4 : 6);
            d.W() || (z.P(f, !1), f.style.visibility = "visible")
        }
        a.kB = b
    };
    var OA = function(a, b, c) {
        var d = a.o();
        (c ? d.g : d.pa).call(d, b, "enter", a.sV)
    };
    z.PA = function(a, b, c) {
        z.Sz.call(this, a, b, c);
        this.Wq(!0)
    };
    var QA = function(a) {
        z.Q.call(this);
        this.ti = a;
        this.Tl = null;
        this.RF = [];
        this.XB = []
    };
    var RA = function(a, b, c) {
        ["1", "2", "0"].forEach(function(d) {
            var f = new z.PA(SA[d]);
            f.Da(d);
            f.yc(Number(d) === c);
            a.RF.push(f);
            b.Ia(f)
        })
    };
    var TA = function(a, b) {
        z.Db(UA,
            function(a, d) {
                var f = new z.PA(a);
                f.Da(d);
                f.yc(d === this.Tl);
                this.XB.push(f);
                b.Ia(f)
            },
            a)
    };
    var VA = function(a) {
        z.T.confirm("你确定要删除自己的答案吗？",
            "答案内容不会被永久删除，你还可以撤消本次删除操作。",
            function(b) {
                b &&
                    window.$.post("/answer/remove", { aid: a.ti.Cb }).then(function() {
                        return a.ti
                            .nk()
                    })
            })
    };
    var WA = function(a) { a.XB.forEach(function(b) { b.yc(b.X() === a.Tl) }) };
    var XA = function(a, b) {
        window.$.post("/answer/comment_permission", { answer_id: a.ti.Cb, permission: b })
            .then(function(c) { c && !c.r && (a.Tl = b, WA(a), a.dispatchEvent(YA)) })
    };
    var ZA = function(a) {
        var b = null;
        try {
            b = a.cssRules || a.rules
        } catch (c) {
            if (15 == c.code) throw c.styleSheet = a, c;
        }
        return b
    };
    var $A = function(a) {
        var b = [];
        a = a || window.document.styleSheets;
        var c = z.ja(void 0) ? void 0 : !1;
        if (a.imports && a.imports.length) for (var d = 0, f = a.imports.length; d < f; d++) z.wb(b, $A(a.imports[d]));
        else if (a.length) for (d = 0, f = a.length; d < f; d++) z.wb(b, $A(a[d]));
        else {
            var g = ZA(a);
            if (g && g.length)
                for (var d = 0, f = g.length, h; d < f; d++) h = g[d], h.styleSheet && z.wb(b, $A(h.styleSheet))
        }
        !(a.type || a.rules || a.cssRules) || a.disabled && !c || b.push(a);
        return b
    };
    var aB = function() {
        this.Ko = "";
        this.$h = []
    };
    var bB = function(a, b, c) {
        var d = [], f;
        for (f in b) {
            var g = b[f];
            g && d.push(f, ":", g, c ? " !important" : "", ";")
        }
        a.Ko = d.join("")
    };
    var cB = function(a) {
        this.px = {};
        if (a) {
            var b = [];
            a = a.split(/\s+/gm);
            for (var c = 0; c < a.length; c++)
                if (a[c]) {
                    var d = new dB(a[c]);
                    b.push(d)
                }
            this.bj = b
        }
    };
    var dB = function(a) {
        var b = eB[a];
        if (b) return b;
        for (var b = a.match(/[#\.]/) ? a.split(/(?=[#\.])/) : [a], c = {}, d = 0; d < b.length; d++) {
            var f = b[d];
            "." == f.charAt(0)
                ? c.className = f.substring(1, f.length)
                : "#" == f.charAt(0) ? c.id = f.substring(1, f.length) : c.tagName = f.toUpperCase()
        }
        this.vI = a;
        this.JU = c;
        this.eM = {};
        eB[a] = this
    };
    var fB = function(a, b) {
        var c = b.uid, d = a.eM[c];
        if ("undefined" != typeof d) return d;
        var f = a.JU, d = f.tagName, g = f.className, f = f.id, h = !0;
        d && "*" != d && d != b.nodeName ? h = !1 : f && f != b.id ? h = !1 : g && !b.DP[g] && (h = !1);
        return a.eM[c] = h
    };
    var gB = function(a) {
        var b = z.ta(a), c = hB[b];
        if (c) return c;
        c = [];
        do {
            var d = { id: a.id, nodeName: a.nodeName };
            d.uid = z.ta(d);
            var f = {};
            if (a.className) for (var g = z.yg(a), h = 0; h < g.length; h++) f[g[h]] = 1;
            d.DP = f;
            c.unshift(d)
        } while (a = a.parentNode);
        this.RJ = c;
        this.uid = z.ta(this);
        hB[b] = this
    };
    z.iB = function() {
        z.H.call(this);
        this.qc = this.$r()
    };
    z.jB = function(a) { return a.G && a.G.rb };
    var kB = function(a) {
        return a.G && z.Gc ? (a = a.G.rb.eb(), a.scrollTo.bind(a, a.scrollX, a.scrollY)) : function() {}
    };
    var lB = function(a, b, c, d, f) {
        this.QG = a;
        this.YC = b;
        this.us = c;
        this.UG = d;
        this.Yy = f || {}
    };
    var mB = function(a, b) {
        this.XZ = a;
        this.VF = b
    };
    var nB = function(a, b, c, d) {
        var f = [];
        a.us && a.YC && f.push("\x3c!DOCTYPE HTML\x3e");
        f.push('\x3chtml style\x3d"background:none transparent;min-width:0;');
        a.us && f.push("height:", a.UG ? "100%" : "auto");
        f.push('"\x3e');
        f.push("\x3chead\x3e\x3cstyle\x3e");
        c && c.VF && f.push(c.VF);
        z.B && a.YC && f.push(" img {-moz-force-broken-image-icon: 1;}");
        f.push("\x3c/style\x3e\x3c/head\x3e");
        f.push('\x3cbody g_editable\x3d"true" hidefocus\x3d"true" ');
        z.oB && f.push("contentEditable ");
        f.push('class\x3d"editable ');
        f.push('" id\x3d"',
            a.QG,
            '" style\x3d"min-width:0;');
        z.B &&
            a.us &&
            (f
                    .push(";width:100%;border:0;margin:0;background:none transparent;",
                        ";height:",
                        a.YC ? "100%" : "auto"),
                a.UG ? f.push(";overflow:auto") : f.push(";overflow-y:hidden;overflow-x:auto"));
        z.Lg && f.push(";outline:hidden");
        for (var g in a.Yy) f.push(";" + g + ":" + a.Yy[g]);
        f.push('"\x3e', b, "\x3c/body\x3e\x3c/html\x3e");
        a = f.join("");
        d = d.contentDocument || d.contentWindow.document;
        d.open();
        d.write(a);
        d.close()
    };
    var pB = function(a, b) {
        z.H.call(this);
        this.Ch = this.id = a;
        this.rb = null;
        this.bc = {};
        this.vk = {};
        for (var c in z.qB) this.vk[c] = [];
        this.Wl = "";
        this.gl = {};
        this.gl[rB] = 1;
        this.gl[z.sB] = 1;
        this.Ws = new Gq(this.sG, tB, this);
        this.Us = {};
        for (var d in uB) this.Us[uB[d]] = 0;
        z.B && (this.Ue = new Gq(this.kk, vB, this));
        this.rc = new z.xd(this);
        this.YZ = [];
        this.Qm = z.wB;
        this.$m = z.Ie(b || window.document);
        this.Wc = this.$m.m(this.id);
        this.bR = xB;
        this.El = this.$m.eb()
    };
    var yB = function(a) {
        var b = !(a.ctrlKey || a.metaKey) && a.keyCode in zB;
        return (a.ctrlKey || a.metaKey) && a.keyCode in AB || b
    };
    var BB = function(a, b) {
        a.Qm = 2;
        a.Ka = b;
        a.rb = z.Ie(b);
        b.setAttribute("g_editable", "true");
        z.ug(b, "textbox")
    };
    var CB = function(a, b) {
        if (9 == b.keyCode &&
            !a.dispatchEvent({ type: "beforetab", shiftKey: b.shiftKey, altKey: b.altKey, ctrlKey: b.ctrlKey }) ||
            z.B && b.metaKey && !z.E(29) && (37 == b.keyCode || 39 == b.keyCode)) return b.preventDefault(), !1;
        var c;
        (c = b.charCode) || (c = yB(b) ? !0 : !(!z.B || b.ctrlKey || b.metaKey || z.B && !b.charCode));
        a.Bz = c;
        a.Bz && a.Ii();
        return !0
    };
    var DB = function(a, b, c) {
        var d = {};
        a = a.wv(8, b || "", d);
        z.Ig(c, d);
        z.Tu(c, a)
    };
    var EB = function(a, b) {
        !FB(a, "selectionchange") &&
            (GB[b.keyCode] || (b.ctrlKey || b.metaKey) && HB[b.keyCode]) &&
            (a.dispatchEvent("beforeselectionchange"), a.yL.start())
    };
    var IB = function(a, b) {
        if (!b.altKey) {
            var c = z.Uc ? b.metaKey : b.ctrlKey;
            if (c || JB[b.keyCode]) {
                var d = b.charCode || b.keyCode;
                17 != d &&
                (d = String.fromCharCode(d)
                    .toLowerCase(), z
                    .Uc &&
                    z.B &&
                    "`" == d &&
                    " " == b.sc.key &&
                    (d = " "), a.Ip(5, b, d, c) && b.preventDefault())
            }
        }
    };
    var KB = function(a) {
        var b;
        return a.Bc() && (b = a.rb) ? (a = b.eb()) && a.frameElement : null
    };
    z.LB = function(a) { return (a = a.rb && a.rb.eb()) && z.Du(a) };
    z.MB = function(a, b, c) {
        if (!FB(a, "selectionchange")) {
            var d = z.LB(a), d = d && d.Zb();
            a.Rf = !!d && z.nf(a.m(), d);
            a.dispatchEvent("cvc");
            a.dispatchEvent({ type: "selectionchange", G0: b && b.type });
            a.Ip(4, b, c)
        }
    };
    z.NB = function(a, b, c) {
        b && (a.Ue && Hq(a.Ue), a.gl[rB] = 1);
        c && (z.OB(a), a.gl[z.sB] = 1)
    };
    var PB = function(a, b, c) {
        !b && a.Ue && Hq(a.Ue);
        a.gl[rB] = 0;
        a.gl[z.sB] = 0;
        b && a.kk();
        c && a.sG()
    };
    var FB = function(a, b) { return !!a.gl[b] || a.Us[b] && 500 >= (0, z.I)() - a.Us[b] };
    z.OB = function(a) {
        a.Ue && Hq(a.Ue);
        Hq(a.Ws)
    };
    var QB = function(a) { z.vf(a.target, "A") && a.preventDefault() };
    z.RB = function(a) {
        var b = a.m();
        if (b) {
            var c = z.Lu(b);
            b == c ? z.Hu(b, 0).select() : z.Yu(c, !0);
            z.MB(a)
        }
    };
    var SB = function(a) {
        if (!z.ja(a.GA) && (a.GA = !1, z.C && a.Bc())) {
            for (var b = a.$m.eb(); b != b.parent;)
                try {
                    b = b.parent
                } catch (c) {
                    break
                }
            b = b.location;
            a.GA = "https:" == b.protocol && -1 == b.search.indexOf("nocheckhttps")
        }
        return a.GA
    };
    z.TB = function(a, b) { pB.call(this, a, b) };
    var UB = function(a) {
        if (a.fr ? 0 : a.fr = !0) {
            var b = KB(a), c = a.m(), d = !1;
            if (b && c) {
                var f, g = b.parentNode, h = g.offsetWidth;
                (0, window.parseInt)(lo(b, "width"), 10) != h &&
                    (f = z.fh(c), b.style.width = h + "px", c.style.width = h - f.left - f.right + "px", d = !0);
                g = g.offsetHeight;
                a.Op() &&
                    (0, window.parseInt)(lo(b, "height"), 10) != g &&
                    (f || (f = z.fh(c)), b.style.height = g + "px", c.style
                        .height = g - f.top - f.bottom + "px", d = !0)
            }
            a.fr = !1;
            d && a.dispatchEvent("ifrsz")
        }
    };
    var VB = function(a) { a.m() && (UB(a), a.Op() || a.VC()) };
    z.WB = function(a, b) {
        var c = a.split("!");
        this.type = c[0] + "!";
        this.namespace = c[1];
        this.Oc = new XB(b)
    };
    var XB = function(a) {
        this.category = a.category;
        this.action = a.action;
        this.label = a.label;
        this.value = a.value
    };
    var YB = function() { z.H.call(this) };
    z.ZB = function() { z.H.call(this) };
    var $B = function(a, b, c) {
        window.$.post(a, b).done(function(a) {
            if (a.r) z.T.message(a.msg);
            else {
                var b = a.msg;
                (b = b && b.redirect) ? window.location.href = b : (z.T.message("操作成功！"), c && c(a))
            }
        })
    };
    var aC = function(a, b) {
        var c = window.$.extend({ action: "get_member_info", reason: b.value }, a.OQ);
        return window.$.post("/manage", c).then(function(a) {
            return z.Ja("用户已被警告 %s 次，禁言 %s 次", a.warn_num, a.ban_num)
        })
    };
    var bC = function(a) {
        z.Q.call(this);
        z.Mb(this.J = {}, this.defaults, a || {});
        this.Xn = new z.Qd;
        this.Re = null
    };
    var cC = function(a, b) {
        var c = a.J, d = new z.Px(c.trigger, !1, null, b);
        d.er = c.CY;
        d.pp = c.iT;
        d.ai(a.Ij);
        z.G(d, "trigger", function(a) { d.setPosition(new z.xx(a.anchor, 1)) });
        z.G(d,
            "beforeshow",
            function(a) {
                this.Re = a.target.anchor;
                this.render()
            },
            !1,
            a);
        d.className = c.kO;
        a.mT = d
    };
    var dC = function(a, b) {
        var c = a.J.hU, d = z.gf(a.Ij), f = z.pb(d, function(a) { return a.getAttribute("data-action") === b });
        if (!f || z.S.has(f, c)) return !1;
        z.A(d, function(a) { z.S.remove(a, c) });
        z.S.add(f, c);
        return !0
    };
    var eC = function(a, b, c, d) { a.Xn.set(b, { name: b, na: c, zi: d || z.r }) };
    z.fC = function(a) {
        z.Q.call(this);
        z.Mb(this.J = {}, this.defaults, a || {})
    };
    var gC = function(a) {
        var b = a.J, c = a.h;
        hC(c);
        b = iC(c, b.UH);
        b.length &&
        (a.dispatchEvent("willScrape"), window.$.when.apply(window.$, b)
            .always(function() { a.dispatchEvent("didScrape") }))
    };
    var jC = function(a, b, c) {
        for (; a && a !== b;) {
            if (c(a)) return a;
            a = a.parentNode
        }
    };
    var kC = function(a, b) {
        return jC(a, b, function(a) { return lC(a) || "CODE" === a.nodeName || "PRE" === a.nodeName })
    };
    var lC = function(a) { return "A" === a.nodeName };
    var hC = function(a) {
        var b = z.vo(a, function(b) { return 3 === b.nodeType && !kC(b, a) }), c, d = z.Du(), f = d && z.Mt(d);
        z.A(b,
            function(a) {
                var b = a.nodeValue, d = mC(b);
                d !== b && (b = z.Ye(d), f === a && (c = b.lastChild), z.Bo(b, a))
            });
        c && z.Yu(c)
    };
    var iC = function(a, b) {
        var c = z.lb(a.getElementsByTagName("A"),
            function(a) {
                var b = a.getAttribute("href");
                if (b = !(!b || "#" === b) && !a.getAttribute("data-editable") && z.rb(nC, a.protocol)
                )
                    b = z.qf(a), z.Ia(a.href, b)
                        ? a = void 0
                        : (a.setAttribute("data-editable", !0), a.setAttribute("data-title", b), a = !0), b = !a;
                return b
            });
        return z.mb(c, function(c) { return oC(c.href).done(function(f) { pC(a, c, f, b) }) })
    };
    var pC = function(a, b, c, d) {
        if (c && a.contains(b)) {
            d = d || {};
            var f = function(a, b, c) {
                var d = z.Du();
                if (d) {
                    var f = d.Z(), q = d.xa(), v = d.ka(), F = d.Sa();
                    z.nf(b, f) && (f = a, q = 0);
                    z.nf(b, v) && (v = a, F = 0);
                    c(function() { f === a && v === a ? z.Yu(a) : z.ou(f, q, v, F).select() })
                } else c(z.r)
            };
            a = {
                link: function(a, b) {
                    a.setAttribute("data-editable", !0);
                    b.title === a.href
                        ? a.setAttribute("data-title", qC(a.hostname))
                        : (a.setAttribute("data-title", b.title), f(a,
                            a,
                            function(c) {
                                z.of(a, b.title);
                                c()
                            }))
                },
                image: function(a, b) {
                    var c = window.document.createElement("img");
                    c.src = b.src;
                    c.setAttribute("data-rawwidth", b.width);
                    c.setAttribute("data-rawheight", b.height);
                    f(c,
                        a,
                        function(b) {
                            z.Bo(c, a);
                            b()
                        })
                }
            };
            (d = d[c.type] || a[c.type]) && d(b, c)
        }
    };
    var qC = function(a) {
        var b = /(.com|.edu|.gov|.net|.org)$/.test(a) ? -2 : -3;
        return a.split(".").slice(b).join(".").replace(/^www\./, "") + " 的页面"
    };
    var mC = function(a) {
        return a.replace(rC,
            function(a) {
                z.Ia(a, "http") || (a = "http://" + a);
                return a.link(a)
            })
    };
    var sC = function(a) {
        var b = new bC({});
        eC(b, "link", "链接", function(a) { z.of(a, a.href) });
        eC(b, "text", "文本", function(a) { z.of(a, a.getAttribute("data-title")) });
        b.w(a);
        var c = b.tz();
        z.Ax(c, new z.Gg(2, 0, 0, 0));
        z.Nx(c, new z.Gg(2, 0, 0, 0));
        var d = b.o();
        d.g(c,
            "beforeshow",
            function(a) {
                a = a.target.anchor;
                var c = z.qf(a);
                c === a.href
                    ? dC(b, "link")
                    : (c !== a.getAttribute("data-title") && a.setAttribute("data-title", c), dC(b, "text"))
            }).g(c, "beforehide", function(b) { if ((b = b.target) && a.contains(b) && lC(b)) return !1 });
        var f;
        d.g(c,
            "show",
            function(a) {
                f =
                    a.target.anchor;
                z.S.add(f, "hover")
            }).g(c, "hide", function() { f && (z.S.remove(f, "hover"), f = null) });
        return b
    };
    z.tC = function(a, b, c) {
        z.Q.call(this);
        this.id = a;
        this.type = b;
        this.Ka = null;
        this.uh = this.kv = !1;
        this.xc = "写下你的评论…";
        this.placeholder = '\x3cp style\x3d"color:#999"\x3e' + this.xc + "\x3c/p\x3e";
        this.Ck = "";
        this.Pa = -1;
        this.bB = window.$.Deferred().resolve();
        this.bC = this.Gu = null;
        this.BF = "zm-comment-box";
        this.wd = null;
        a = uC[b];
        if (!a) throw Error("API not found");
        this.tf = window.$.extend({}, uC._default_, a);
        this.Pj = "";
        z.Mb(this.J = {}, this.defaults, c || {})
    };
    var vC = function(a) { return z.Dq(a, !0, function() { return this.Pj }) };
    var wC = function(a, b, c) {
        if (!z.lf(a) || "TEXTAREA" === a.nodeName) return function() {};
        var d = new z.fC({ UH: { image: z.r } });
        d.w(a);
        b = (new z.uj).add("type", b + "_comment").add("resource_id", c);
        var f = new Av(a,
            { Vn: { source: "/people/autocomplete?" + b.toString() }, Tk: z.L("zu-main") || window.document.body });
        new tv(a, { rC: Kv });
        return function() {
            d.dispose();
            f.dispose()
        }
    };
    z.xC = function(a, b, c) {
        var d = z.L(a.BF, b);
        c && (a.wd = c);
        d ? a.w(d) : (a.kv = !0, a.render(b))
    };
    var yC = function(a) {
        z.Db({ ME: ".load-more", yo: ".zm-comment-list", JF: ".zm-comment-form", Ka: ".zm-comment-editable" },
            function(a, c) { this[c] = (0, window.$)(a, this.h)[0] },
            a)
    };
    var zC = function(a) {
        a.Ka && a.Ka.setAttribute("aria-label", a.xc);
        if (z.Hm) {
            var b = a.Ka;
            b.setAttribute("contentEditable", !0);
            var c = a.Wj = {
                m: function() { return b },
                om: function() { return Er(b) ? "" : b.innerHTML },
                ge: function(a, c) { b.innerHTML = c },
                wg: function() { z.Xu(b) }
            };
            z.Bc(a, wC(c.m(), a.type, a.id))
        } else AC(a);
        a.o().g(a.Ka,
                ["change", "keyup"],
                function(a) { 27 !== a.keyCode && (z.Pu(this.Ka) ? this.Ck = "" : this.Ck = this.cb()) })
            .g(a.Wj.m(), "focus", function() { this.sa({ action: "click_add_[type]_comment_box" }) });
        BC(a)
    };
    var AC = function(a) {
        var b = z.M("textarea", { placeholder: a.xc, "class": "zm-comment-textarea" });
        z.Bo(b, a.Ka);
        new z.Nr(b);
        a.Ka = b;
        a.Wj = {
            m: function() { return b },
            om: function() { return b.value },
            ge: function() {
                b.value = "";
                b.style.height = z.Rg(22, !0)
            },
            wg: function() { b.focus() }
        }
    };
    var CC = function(a) {
        var b = a.Wj, c = b.m();
        if (b.om() !== a.placeholder) {
            b.ge(!1, a.placeholder);
            var d = ["click", "focus", "keydown"],
                f = function() {
                    b.ge(!1, this.Ck || "");
                    this.Ka.lastChild ? z.Yu(this.Ka.lastChild) : b.wg();
                    z.md(c, d, f, !1, this)
                };
            z.G(c, d, f, !1, a);
            var g;
            window.getSelection
                ? (g = window.getSelection(), g.anchorNode && z.nf(a.Ka, g.anchorNode) && g.removeAllRanges())
                : window.document.selection && a.Ka.blur()
        }
    };
    var DC = function(a) {
        a.focus();
        a = z.Gu(a);
        a.collapse();
        a.select()
    };
    var EC = function(a) {
        var b;
        (b = z.L("zm-comment-reply-hack"))
            ? (b = z.Ye(z.wo(b)), z.S.hx(b, "zm-comment-reply-hack", "zm-comment-reply-hacked"), z.df(b, a))
            : (b = "", z.Y.jb() && (b = '\x3cimg class\x3d"avatar" src\x3d"' + z.Y.If("is") + '"\x3e'), b = z
                    .Ye('\x3cdiv class\x3d"zm-comment-form expanded"\x3e\x3cdiv class\x3d"zm-comment-editable-wrap"\x3e' +
                        b +
                        '\x3cdiv class\x3d"zm-comment-editable" aria-label\x3d"写下你的回复"\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"zm-command zg-clear"\x3e\x3ca href\x3d"javascript:;" class\x3d"zm-comment-submit zg-right zg-btn-blue"\x3e评论\x3c/a\x3e\x3ca href\x3d"javascript:;" class\x3d"zm-comment-close zm-command-cancel"\x3e取消\x3c/a\x3e\x3c/div\x3e\x3c/div\x3e'),
                a.appendChild(b));
        return b
    };
    var FC = function(a, b) { return z.pb(GC(a), function(a) { return a.getAttribute("data-id") === b }) };
    var GC = function(a) { return (0, window.$)(a.yo).children(".zm-item-comment").get() };
    var HC = function(a) {
        a.o().g(a.h, "click", a.Xa).g(a.Ka, "keydown", a.EV).g(z.sp, "anon_change", a.jk)
            .g(a.Wj.m(), ["click", "focus"], z.Ba(a.Rv, !0)).g(a.Wj.m(), "focus", z.Ba(a.qj, "add_comment_start"));
        a.Pa = Number(a.h.getAttribute("data-count"));
        (0, window.$)(a.h).on("focusin focusout",
            "." + a.J.Sf,
            function(a) { (0, window.$)(this).toggleClass("focusin", "focusin" === a.type) });
        !z.$h && a.ME && (a.bC = ir().then(window.$.proxy(a.lJ, a)))
    };
    var IC = function(a) {
        0 < a.mb() ? (a.Ck = a.cb(), a.Rv(!1), CC(a)) : a.wd ? a.collapse() : a.Rv();
        a.Hi()
    };
    var JC = function(a) {
        if (a.wd) {
            var b = (0, window.$)(a.wd);
            a.$(a.WE).show().css("left", b.position().left + b.width() / 2)
        }
    };
    var KC = function(a) {
        if ("pending" !== a.bB.state()) {
            a.Db();
            a.h.innerHTML = a.Bo();
            a.expand();
            var b = a.tf.fk(a.id, a.J.yU).done((0, z.t)(a.BX, a));
            return a.bB = b
        }
    };
    var BC = function(a) {
        z.Y.jb()
            ? z.Y.Sd ||
            LC(a,
                '\x3cdiv class\x3d"activate-mask-tip-comment"\x3e' +
                (z.Y.email ? "为了正常使用知乎的提问、回答、评论和编辑功能，请验证你的邮箱。" : "为了正常使用知乎的提问、回答、评论和编辑功能，请绑定你的手机或邮箱。") +
                "\x3c/div\x3e",
                '\x3cdiv class\x3d"zm-command"\x3e\x3ca class\x3d"zg-r3px zg-btn-blue" href\x3d"javascript:;"\x3e我要激活\x3c/a\x3e\x3c/div\x3e')
            : LC(a, '\x3cdiv class\x3d"signin-mask-tip-comment"\x3e\x3c/div\x3e', null)
    };
    var LC = function(a, b, c) {
        b = (0, window.$)(b);
        var d = (0, window.$)(c);
        c
            ? ((0, window.$)(".zm-command, .zm-comment-info", a.h).hide(), (0, window.$)(a.Ka).hide().after(d).after(b))
            : b.insertAfter(a.Ka);
        a = (0, z.t)(vC(z.r), a);
        b.on("click", a);
        d.on("click", a)
    };
    var MC = function(a) {
        yC(a);
        zC(a);
        CC(a);
        HC(a);
        NC(a);
        JC(a)
    };
    var NC = function(a) {
        var b = a.J, c = !a.mb();
        z.S.enable(a.h, b.Iy, c);
        c && a.Ka && b.autofocus && a.Qo();
        a.dispatchEvent("change")
    };
    var OC = function(a, b, c) {
        if (!a.en || "pending" !== a.en.state()) {
            var d;
            z.sa(b) && (d = b.HX, b = b.content);
            b = z.La(b);
            var f = new z.Qd;
            f.set(a.type + "_id", a.id);
            f.set("content", b);
            d && f.set("reply", d);
            b = a.tf.add(En(f));
            b.done(window.$.proxy(a.xR, a)).done(c);
            a.en = b;
            a.Ck = a.cb();
            a.qj("add_comment_submit")
        }
    };
    var PC = function(a, b) {
        if (z.qm("auth_f_manage") && "favlist" !== a.type && !(0, window.$)(".del, .op.remove", b).length) {
            var c = b.getAttribute("data-id");
            (0, window.$)("\x3ca\x3e",
            {
                href: "#",
                name: "admin_delcomment",
                "class": "del zm-comment-op-link op needsfocus",
                html: '\x3ci class\x3d"zg-icon zg-icon-comment-del"\x3e\x3c/i\x3e删除',
                "data-op": "remove-comment",
                "data-action": "/manage?" + window.$.param({ comment_id: c, action: "remove_comment2" })
            }).appendTo((0, window.$)(".zm-comment-ft, .actions", b))
        }
    };
    var QC = function(a, b) {
        var c = z.to(b, a.J.Sf);
        (new z.ZB).open(b,
            { id: c.getAttribute("data-id"), type: "comment" },
            (0, z.t)(function() {
                    z.N(c);
                    --this.Pa;
                    NC(this)
                },
                a))
    };
    var RC = function(a, b) {
        var c = z.to(b, a.J.Sf),
            d = c.getAttribute("data-id"),
            f = "你确定要删除这条评论吗？",
            g = (0, window.$)(".zm-item-link-avatar", c).prop("href");
        g &&
        (f +=
            '\x3cp class\x3d"js-block" style\x3d"margin-top:.2em;color:#999;visibility:hidden"\x3e\x3clabel\x3e\x3cinput type\x3d"checkbox"\x3e同时将此人屏蔽\x3c/label\x3e\x3c/p\x3e', window.$.get(g + "/block", function(a) { a.r || a.msg || (0, window.$)(".js-block", h.m()).css("visibility", "visible") }));
        var h = z.T.confirm("删除评论",
            f,
            function(a) {
                a &&
                (a = (0, window.$)(":checkbox", h.m()).prop("checked"),
                    SC(this, d, Number(a), z.Ba(z.N, c)))
            },
            a)
    };
    var TC = function(a, b, c) {
        a.tf.remove(b).done((0, z.t)(function() {
                z.qa(c) && c();
                --this.Pa;
                NC(this)
            },
            a))
    };
    var SC = function(a, b, c, d) {
        a.tf.bP(b, c).done((0, z.t)(function() {
                z.qa(d) && d();
                --this.Pa;
                NC(this)
            },
            a))
    };
    var UC = function(a, b) { return a && (b.length ? UC(a[b.shift()], b) : a) };
    z.VC = function(a, b) {
        z.Q.call(this);
        this.Cb = a;
        this.entryType = b;
        this.zk = !1;
        this.yx = !0
    };
    var WC = function(a) { z.Y.jb() && 0 === XC(a) && (0, window.setTimeout)(function() { return a.Qo() }) };
    var YC = function(a) {
        if (!a.km && !z.Om) {
            var b = z.to(a.h, "zm-item-meta");
            if (b) {
                var c = z.L("zm-meta-panel", b);
                c && (a.km = new z.qv(null, b), a.km.tag = "comment", a.km.w(c))
            }
        }
    };
    var ZC = function(a, b) {
        b && (a.wd = b, a.Sw = (0, window.$)(b), a.IW = z.qf(a.wd), a.Sw.on("click", function() { WC(a) }))
    };
    var XC = function(a) {
        var b;
        if (b = a.ks) a = a.ks.store.getState(), b = UC(a, ["commentBox", "meta", "totalCountPure"]);
        return b
    };
    var $C = function(a) {
        if (a.wd &&
        (a.wd &&
            a.zk &&
            (0, window.$)(".icon-spike", a.h).css("left", a.Sw.position().left + a.Sw.width() / 2)
            .removeClass("hidden"), a.wd))
            if (a.zk) jr(a.wd, "收起评论");
            else {
                var b = XC(a), c = void 0, c = z.pa(b) ? 0 < b ? b + " 条评论" : "添加评论" : a.IW;
                jr(a.wd, c)
            }
    };
    var aD = function(a, b, c) {
        var d = a.ks;
        a = d.store;
        var f = d.actions, d = d.ActionTypes;
        /[A-Z]/.test(b[0]) ? a.dispatch({ type: d[b], payload: c }) : a.dispatch(f[b](c))
    };
    var bD = function(a, b) {
        z.Q.call(this);
        window.$.extend(this.options = {}, cD, b || {});
        this.state = { Mm: !1, lu: !1, nu: !0, Jp: !1, WB: !1 };
        var c = new z.oi(this.update, 17, this);
        z.Ac(this, c);
        this.hM = (0, z.t)(c.fire, c)
    };
    var dD = function(a) {
        var b = (0, window.$)(a.h), c = (0, window.$)("\x3cdiv\x3e");
        window.$.each("display position top right bottom left float margin".split(" "),
            function(a, f) { c.css(f, b.css(f)) });
        c.css({ visibility: "hidden", width: b.outerWidth(), height: b.outerHeight() }).insertBefore(b);
        a.xc = c.get(0);
        b.addClass(a.options.jh);
        a.ga();
        a.options.mK.call(a)
    };
    var eD = function(a) {
        if (!window.Modernizr.csstransitions) return dD(a);
        var b = (0, window.$)(a.h);
        a.state.Jp = !0;
        dD(a);
        b.css({ transition: "none", transform: "translateY(" + fD(a) + "px)" });
        (0, window.setTimeout)(function() {
            b.css({ transition: "", transform: "" }).onTransitionEnd(function() { a.onAnimationEnd() }, 200)
        })
    };
    var gD = function(a) {
        if (!window.Modernizr.csstransitions) return a.restore();
        var b = (0, window.$)(a.h);
        a.state.Jp = !0;
        b.css("transform", "translateY(" + fD(a) + "px)").onTransitionEnd(function() {
                b.css({ transition: "none", transform: "" });
                a.restore();
                a.onAnimationEnd()
            },
            200)
    };
    var fD = function(a) {
        var b = (0, window.$)(a.h).outerHeight();
        return null === a.options.bottom ? -(b + a.options.top) : b + a.options.bottom
    };
    var hD = function() {
        function a(a, b) {
            a = z.oa(a) ? new RegExp(a) : a;
            return a.test(b)
        }

        var b;
        z.Fb({
                home: "^/$",
                collection: "^/collection/\\d+$",
                roundtable: "^/roundtable/[\\w\\.-]+$",
                answer: "^/question/\\d+/answer/\\d+$",
                question: "^/question/\\d+$",
                search: "^/search$",
                people: "^/people/[\\w\\.-]+$",
                people_answers: "^/people/[\\w\\.-]+/answers$",
                explore_recommendations: "^/explore/recommendations$",
                explore_daily_hot: { path: "^/explore$", hash: "^(?!monthly-hot$)" },
                explore_monthly_hot: { path: "^/explore$", hash: "^monthly-hot$" }
            },
            function(c, d) {
                c.path && c.hash
                    ? a(c.path, window.location.pathname) && a(c.hash, window.location.hash.slice(1)) && (b = d)
                    : a(c, window.location.pathname) && (b = d);
                return !!b
            });
        return b
    };
    z.iD = function(a) {
        z.Q.call(this);
        this.entryType = a;
        this.QD = jD[a];
        this.vb = this.Ki = !1;
        this.fu = window.setTimeout.bind(window, this.fu.bind(this))
    };
    var kD = function(a, b) { return z.Dq(a, b, function() { return this.oz() }) };
    var lD = function(a) {
        a.QD &&
            z.V.Ya(a,
                { module: a.QD + "Item" },
                function() { return { card: { card_type: "Content", content: a.Az() } } })
    };
    var mD = function(a) {
        var b = a.m();
        a.g("trackRequested",
            function(c) {
                c.label = a.qH();
                c.value = (0, window.$)(b).index() + 1;
                z.ui(c)
            });
        a.Ki && z.vn(b, function() { a.tJ() });
        var c = (0, window.$)(b).parent();
        0 === c.closest(".feed-item").length &&
            z.vn(b,
                function() {
                    var b = "SearchResultList" === c.data("za-module") ? "ListItem" : "Card";
                    z.V.trackCardShow(a, { element: b })
                })
    };
    var nD = function(a) {
        a = (0, window.$)(a);
        var b = {};
        (0, window.$)("[itemprop]", a).each(function() {
            var a = (0, window.$)(this);
            a.is("link, a") ? b[a.attr("itemprop")] = a.prop("href") : b[a.attr("itemprop")] = a.attr("content")
        });
        (0, window.$)("meta[name]", a).each(function() {
            var a = (0, window.$)(this);
            b[a.attr("name")] = a.attr("content")
        });
        return b
    };
    var oD = function(a) {
        var b = nD(a.h);
        a.Cb = b[a.entryType + "-id"];
        a.We = b[a.entryType + "-url-token"];
        a.jd = b
    };
    var pD = function(a) {
        if (a.XC) return a.XC;
        var b = (0, window.$)('meta[itemprop\x3d"ZReactor"]', a.h);
        b.length || (b = (0, window.$)(a.h).closest(".feed-item").find('meta[itemprop\x3d"ZReactor"]'));
        b = b.data("meta");
        a.XC = b && b.source_type || "";
        return a.XC
    };
    var qD = function(a) {
        if (a.TA) return a.TA;
        var b = hD();
        a.TA = ({
                    home: "feed",
                    search: "search_result_question_answer_tab",
                    explore_daily_hot: "daily_trending",
                    explore_monthly_hot: "monthly_trending",
                    people: "people_profile_activities",
                    people_answers: "people_profile_answers",
                    explore_recommendations: "editor_recommendations"
                }[b] ||
                b) +
            ({ collection: "_feed", roundtable: "_feed", answer: "_more" }[b] || "");
        return a.TA
    };
    var rD = function(a) {
        return {
            promotion_answer: "promote",
            member_voteup_answer: "someone_vote_up",
            topic_acknowledged_answer: "from_topic",
            roundtable_add_answer: "from_roundtable",
            member_answer_question: "someone_add",
            member_create_article: "someone_add",
            member_voteup_article: "someone_vote_up"
        }[pD(a)]
    };
    var sD = function(a) { return (0, window.$)(a.lO, a.m())[0] };
    z.tD = function(a) {
        var b = { appkey: "3063806388" };
        a && (b.title = a);
        window.open("http://service.weibo.com/share/share.php?" + window.$.param(b),
                "_blank",
                "width\x3d615,height\x3d505") ||
            (window.location.href = "http://service.weibo.com/share/share.php?" + window.$.param(b))
    };
    z.uD = function(a, b, c, d) {
        b = new vD(b, c, d);
        b.w(a);
        return b
    };
    var vD = function(a, b, c) {
        z.Q.call(this);
        this.hb = a;
        this.IM = b;
        this.HL = c
    };
    var wD = function(a) {
        var b = a.hq = new z.Xz,
            c = [
                { label: z.Ye('\x3cspan class\x3d"ico z-ico-weibo-share"\x3e\x3c/span\x3e新浪微博'), value: 0 },
                {
                    label: z
                        .Ye('\x3cspan class\x3d"ico z-ico-wechat-share"\x3e\x3c/span\x3e微信扫一扫\x3cimg class\x3d"qrcode-image js-qrcode-image"\x3e'),
                    value: 1
                }
            ];
        "answer" !== a.hb && "post" !== a.hb ||
            c.push({ label: z.Ye('\x3cspan class\x3d"ico z-ico-daily-share"\x3e\x3c/span\x3e读读日报'), value: 2 });
        window.$.each(c,
            function(a, c) {
                var g = new z.Sz(c.label, c.value);
                b.Ia(g)
            });
        z.Bh(b, 1).gb(!1);
        c = new z.vA("share",
            b);
        c.dj = !0;
        c.Sb = z.Hl;
        c.w(a.m());
        z.Ac(c, a);
        b.g("action", a.wR.bind(a));
        (0, window.$)(b.m()).addClass("share-menu")
    };
    var xD = function(a, b, c, d) { KA.call(this, a, b, c, d) };
    z.yD = function(a) {
        z.Q.call(this);
        z.Mb(this.options = {}, zD, a || {});
        this.content = "";
        this.xd = this.Rb = this.wl = null
    };
    var AD = function(a) { a.getParent() ? a.dispatchEvent("expandRequest") : a.expand() };
    var BD = function(a, b) { return window.$.post("/node/PromotionVoteBarV2", { method: b, params: { post_id: a } }) };
    var CD = function(a, b) { return window.$.post("/node/PinVoteBarV2", { method: b, params: { pin_id: a } }) };
    var DD = function(a, b, c) {
        z.Q.call(this);
        this.Cb = a;
        this.entryType = b || "answer";
        this.Gi = null;
        this.J = window.$.extend({}, this.defaults, c || {})
    };
    var ED = function(a, b, c) {
        var d = +a.Ir.text(), f = 0;
        (0, window.isNaN)(d) || (c === z.FD.gh ? f = 1 : b === z.FD.gh && (f = -1), a.Ir.text(d + f))
    };
    var GD = function(a) {
        var b = a.N, c = a.J, d = b === z.FD.gh, b = b === z.FD.zl, f = d ? "取消赞" : "赞";
        "answer" === a.entryType && (f += "同");
        var g = b ? "取消反对" : "反对，不会显示你的姓名";
        a.Uw.toggleClass(c.pv, d).find(".label").text(f).end().attr("aria-pressed", d).attr("title", f);
        a.Hw.toggleClass(c.pv, b).find(".label").text(g).end().attr("aria-pressed", b).attr("title", g)
    };
    z.HD = function(a, b) {
        z.Q.call(this);
        this.Cb = a;
        this.entryType = b || "answer";
        this.en = null;
        switch (this.entryType) {
        case "post":
            this.tf = ID;
            break;
        case "publications":
            this.tf = z.JD;
            break;
        default:
            this.tf = KD
        }
    };
    z.LD = function(a) {
        a.en && "pending" === a.en.state() ||
            (a.en = a.tf.sH(a.Cb).done((0, z.t)(a.Vh, a)), (0, window.$)(".js-voteCount", a.ub).text(a.mb()))
    };
    var MD = function(a) {
        z.Q.call(this);
        this.TM = "votebar-mobile";
        this.By = "votebar-mobile-dialog";
        this.tw = a;
        this.VM = "votebar-" + (["post", "promotion"].includes(a.entryType) ? "post" : "answer");
        this.UM = z.M("span", "_votebar-holder")
    };
    var ND = function(a) {
        var b = a.tw;
        z.Bo(a.UM, b.m());
        z.Bg(b.m(), [a.TM, a.VM]);
        a.o().g(b,
            "action",
            function() { this.Na && (0, window.setTimeout)((0, z.t)(function() { this.Na.F(!1) }, this), 150) })
    };
    z.OD = function() {
        z.iD.call(this, "answer");
        this.Im = window.setTimeout.bind(window, this.Im.bind(this));
        this.Fh = window.setTimeout.bind(window, this.Fh.bind(this))
    };
    var PD = function(a) {
        var b = (0, window.$)(".js-administer", sD(a))[0];
        if (b) {
            a.wO = b;
            QD = 0;
            var c = new z.EA;
            a.K(c);
            c.attach(b, 5);
            var d = a.Wi ? new z.Sz("取消折叠") : new xD("折叠");
            d.Da("collapse");
            var f = function(a, b) {
                var c = new z.Sz(b + 1 + " " + a.label);
                c.Da(a.value);
                d.Ia(c)
            };
            a.Wi ||
                RD("answer", "collapse").then(function(a) {
                    z.A(a, f);
                    z.S.add(d.kb().m(), "manage-menu")
                });
            b = new z.Sz("删除");
            b.Da("delete");
            c.Ia(d);
            c.Ia(b);
            c.render(a.h);
            z.S.add(c.m(), "manage-menu");
            return c
        }
    };
    var SD = function(a, b) {
        a.o().g(b,
            "action",
            function(a) {
                var b = a.target;
                a = b.X();
                var b = b.m(), f = new z.uj;
                "collapse" === a
                    ? (f.add("answer_id", this.ib).add("action", "collapse2")
                        .add("collapse", this.Wi ? "cancel" : "done"), b
                        .setAttribute("data-op", this.Wi ? "uncollapse-answer" : "collapse-answer"), b
                        .setAttribute("data-action", "/manage?" + f.toString()), TD(this, b))
                    : "delete" === a
                    ? (f.add("answer_id", this.ib).add("action", "remove_answer2"), b
                            .setAttribute("data-op", "remove-answer"), b
                            .setAttribute("data-action", "/manage?" + f.toString()),
                        TD(this, b))
                    : z.pa(a) &&
                    (b = new z.uj, b.add("answer_id", this.ib).add("action", "collapse2")
                        .add("collapse", this.Wi ? "cancel" : "done")
                        .add("reason", a), $B("/manage", b.toString(), (0, z.t)(this.nk, this)))
            });
        a.o().g(b, "show", function() { z.S.add(sD(this), "zm-item-meta-has-menu") })
            .g(b, "hide", function(a) { a.currentTarget === a.target && z.S.remove(sD(this), "zm-item-meta-has-menu") })
    };
    var TD = function(a, b) { (new z.ZB).open(b, { id: a.ib, type: "answer" }, (0, z.t)(a.nk, a)) };
    var UD = function(a) {
        var b = Number(a.jd.copyrightStatus),
            c = a.jd.own || !1,
            d = (0, window.$)(".entry-content, .zm-item-rich-text", a.h),
            f = (0, window.$)(".copyright, .js-copyright", a.h);
        a = z.VD.IY.bind(z.VD, d, a.jd.disableCopyAvatar);
        switch (b) {
        case 0:
            c || a("保留所有权利，禁止转载", !0);
            break;
        case 2:
            c ||
            (a("如需转载，请点击文末的申请转载按钮", !1), f.click(function(a) {
                z.Y.uc && (a.preventDefault(), z.T.message("机构帐号暂不支持该功能"))
            }))
        }
        b = d.data("entryUrl");
        c = d.data("authorName");
        z.VD.EE(d, b, c)
    };
    z.WD = function() { z.iD.call(this, "post") };
    var XD = function(a) {
        var b = (0, window.$)(".Tipjar-entry", a.h);
        a.o().g(a.iD, "expand", function() { b.show() });
        a.o().g(a.iD, "collapse", function() { b.hide() });
        b.on("click", ".Tipjar-entryButton", function() { z.W("tipjar", "click_tipjar", "topstory") })
    };
    z.YD = function() { z.iD.call(this, "question") };
    z.ZD = function() { z.iD.call(this, "live") };
    z.$D = function() { z.iD.call(this, "favorites") };
    z.aE = function() { z.iD.call(this, "column") };
    z.bE = function() { z.iD.call(this, "ebook") };
    var cE = function() { z.iD.call(this, "promotion") };
    z.dE = function() { z.iD.call(this, "pin") };
    var eE = function(a) {
        var b = new z.yD;
        a.K(b);
        b.w(a.h);
        a.iD = b;
        a.g("expandRequest", (0, z.t)(a.expand, a));
        a.g("expand", function(a) { a.target === a.currentTarget && b.expand() });
        a.g("collapse", function(a) { a.target === a.currentTarget && b.collapse() });
        b.LA && a.o().ta(b, "expand", a.aq)
    };
    z.fE = function() { z.iD.call(this, "eventcard") };
    z.gE = function(a) {
        a = a.getAttribute("data-type");
        return new ({
                a: z.OD,
                Answer: z.OD,
                c: z.aE,
                Column: z.aE,
                p: z.WD,
                Post: z.WD,
                q: z.YD,
                Question: z.YD,
                l: z.ZD,
                f: z.$D,
                e: z.bE,
                Promotion: cE,
                pin: z.dE,
                eventcard: z.fE
            }[a] ||
            z.Q)
    };
    z.hE = function(a) {
        z.H.call(this);
        this.la = null;
        this.h = a;
        a = z.C || z.Gc || z.D && !z.E("531") && "TEXTAREA" == a.tagName;
        this.U = new z.xd(this);
        this.U.g(this.h, a ? ["keydown", "paste", "cut", "drop", "input"] : "input", this)
    };
    var iE = function(a) { null != a.la && (z.wd(a.la), a.la = null) };
    var jE = function(a) {
        a = new z.Pc(a.sc);
        a.type = "input";
        return a
    };
    var kE = function(a, b, c, d) {
        z.H.call(this);
        this.Ji = a;
        this.BG = b;
        this.Ku = c;
        this.wQ = d || lE;
        a.removeAttribute("maxlength");
        this.wA = new z.hE(a);
        z.G(this.wA, "input", this.zB, !1, this);
        this.Rl()
    };
    z.mE = function(a) {
        z.H.call(this);
        this.ua = null;
        this.qa = a;
        this.Fv = 0;
        this.OK = ""
    };
    var nE = function(a, b) {
        var c = z.Co("zm-menu-item-link", a.uK);
        z.A(c,
            function(a, c) {
                var g = !z.rb(b, c);
                z.P(a, g)
            },
            a)
    };
    var oE = function() { z.H.call(this) };
    z.pE = function(a) {
        function b() {
            var b;
            qE || (qE = new oE, qE.init());
            b = qE;
            b.Ej = a;
            b.jO = a.id.split("-")[1];
            b.show()
        }

        function c(b) {
            if (!a.getAttribute("data-disabled")) {
                var c;
                rE || (rE = new z.mE, rE.init());
                c = rE;
                c.Ej = a;
                c.qa = a.id.split("-")[1];
                "redirect" === b
                    ? c.show()
                    : (z.fp("/question/unredirect", null, "POST", "qid\x3d" + c.qa + "\x26rqid\x3d" + c.Fv), c.Ej
                        .innerHTML = "重定向已撤销", c.Ej.setAttribute("data-disabled", 1))
            }
        }

        function d() {
            function b() {
                var f = d.value,
                    g = a.getAttribute("id").split("-")[1],
                    f = (new z.uj).add("revision", g).add("reason",
                        f),
                    q = new z.ep(!0);
                q.on("success",
                    function() {
                        var a = z.Dn(q);
                        c.F(!1);
                        if (!a) return z.T.message("网络异常");
                        if (a.r) return z.T.message(a.msg);
                        a.msg ? window.location.href = a.msg : window.location.reload()
                    });
                q.ajax("/revert", f.toString())
            }

            var c = z.T.confirm("撤销",
                    '\x3cdiv class\x3d"zg-form-text-input"\x3e\x3ctextarea class\x3d"zg-editor-input content" title\x3d"请输入撤销原因" placeholder\x3d"请输入撤销原因"\x3e\x3c/textarea\x3e\x3c/div\x3e',
                    function(a) { if (a) return b(), !1 }),
                d = z.L("content", c.S());
            new z.Wj(d);
            new z.Nr(d);
            new kE(d,
                null,
                200)
        }

        var f = a && a.name;
        if (f)
            switch (f) {
            case "adminflag":
                b();
                break;
            case "redirect":
            case "cancel_redirect":
                c(f);
                break;
            case "revert":
                d()
            }
    };
    z.sE = function(a) { (0, window.$)(a).on("click", 'a[name\x3d"revert"]', function() { z.pE(this) }) };
    z.tE = function(a, b, c) {
        z.Q.call(this);
        this.offset = this.Wv = 0;
        this.wY = c;
        this.JQ = a;
        this.url = b || window.location.href;
        this.Jh = "zm-item";
        this.params = {}
    };
    z.uE = function(a, b) {
        b
            ? a.tl.html('\x3ci class\x3d"spinner-gray"\x3e\x3c/i\x3e正在加载').prop("disabled", !0)
            : a.tl.html("更多").prop("disabled", !1)
    };
    var vE = function(a) {
        var b = a.nb();
        a.offset = a.uB ? a.uB(b) : b.length;
        a.St
            ? (b = a.St(), z.P(a.de, b))
            : a.de && ("-1" !== a.tl.attr("data-next") && b ? a.tl.removeClass("hidden").show() : a.tl.hide())
    };
    z.wE = function(a) { a.dispatchEvent({ data: { Lp: a.Lp, GD: a.GD }, type: "afterload" }) };
    var xE = function(a) {
        var b = a.nb(), c;
        if (a.wY)
            if (a.de && (c = a.de.getAttribute("data-next")), c) a.Wv = c;
            else if (b = z.jb(b)) a.Wv = a.UB(b)
    };
    var yE = function(a, b) {
        z.A(b,
            function(a) {
                var b = this.Yu(a);
                this.dispatchEvent({ data: { item: a, iU: b }, type: "itemcreated" })
            },
            a)
    };
    z.zE = function(a) {
        var b = { vr: !1, K0: !1 };
        return function(c) {
            if (!1 === c) return !1;
            c = {};
            z.Mb(c, b, a || {});
            if (c.vr && !z.Y.Ut)
                return z.T
                    .alert('\x3ca href\x3d"/question/23261456" target\x3d"_blank"\x3e如何参与知乎话题的公共编辑？\x3c/a\x3e'), !1;
            if (c.Gq) {
                if (!z.X.CQ)
                    return z.T
                        .alert('\x3cp\x3e创建较久或已有较多讨论的问题限制公共编辑\x3c/p\x3e\x3cp\x3e\x3ca href\x3d"/question/24501563" target\x3d"_blank"\x3e如何参与知乎问题的公共编辑？\x3c/a\x3e\x3c/p\x3e'), !1;
                if (z.X.Np)
                    return z.T
                            .alert('\x3cp\x3e创建较久或编辑次数较多的问题锁定公共编辑\x3c/p\x3e\x3cp\x3e\x3ca href\x3d"/question/24501563" target\x3d"_blank"\x3e如何参与知乎问题的公共编辑？\x3c/a\x3e\x3c/p\x3e'),
                        !1
            }
        }
    };
    z.AE = function(a, b, c) {
        z.Sz.call(this, a, b, c);
        this.oj(!0)
    };
    z.BE = function() {};
    z.CE = function() { this.vx = "toolbar" };
    var DE = function() {};
    z.EE = function(a, b, c) { z.Sp.call(this, a, b || DE.ba(), c) };
    var FE = function() {};
    var GE = function(a, b) { return b.B("DIV", "goog-color-menu-button-indicator", a) };
    var HE = function(a, b) {
        if (a && a.firstChild) {
            var c;
            if (c = b) c = !!(Sq.test("#" == b.charAt(0) ? b : "#" + b) || Uq(b).length || Wq && Wq[b.toLowerCase()]);
            c = c ? Rq(b).Wt : null;
            a.firstChild.style.borderBottomColor = c || (z.C ? "" : "transparent")
        }
    };
    var IE = function(a, b, c, d) { z.It.call(this, a, b, c, null, d) };
    z.JE = function() {};
    var KE = function(a, b, c, d) {
        for (var f = [], g = 0, h = 0; g < c.height; g++) {
            for (var k = [], l = 0; l < c.width; l++) {
                var n = b && b[h++];
                k.push(LE(a, n, d))
            }
            f.push(ME(a, k, d))
        }
        return a.iy(f, d)
    };
    var ME = function(a, b, c) {
        a = c.B("TR", a.V() + "-row", b);
        z.ug(a, "row");
        return a
    };
    var LE = function(a, b, c) {
        a = c.B("TD", { "class": a.V() + "-cell", id: a.V() + "-cell-" + NE++ }, b);
        z.ug(a, "gridcell");
        z.vg(a, "selected", !1);
        if (!z.qf(a) && !ro(a)) {
            var d;
            b = new IE(a);
            for (c = ""; !c && (d = Jo(b));) 1 == d.nodeType && (c = ro(d) || d.title);
            (d = c) && z.vg(a, "label", d)
        }
        return a
    };
    var OE = function(a, b, c) {
        for (b = b.m(); c && 1 == c.nodeType && c != b;) {
            if ("TD" == c.tagName && z.zg(c, a.V() + "-cell")) return c.firstChild;
            c = c.parentNode
        }
        return null
    };
    var PE = function(a) {
        z.H.call(this);
        this.gf = [];
        QE(this, a)
    };
    var QE = function(a, b) { b && (z.A(b, function(a) { this.mn(a, !1) }, a), z.wb(a.gf, b)) };
    z.RE = function(a, b, c) {
        Lp.call(this, a, b || z.JE.ba(), c);
        this.Hj &= -89;
        this.Go = new SE;
        this.Go.yb(this);
        this.VA = -1
    };
    z.TE = function(a, b) {
        if (a.m()) throw Error("Component already rendered");
        a.Mc = z.pa(b) ? new z.He(b, void 0) : b;
        UE(a)
    };
    var VE = function(a) {
        var b = a.cb();
        return b && b[a.$a]
    };
    var WE = function(a, b, c) {
        if (a.m()) {
            var d = a.cb();
            if (d && 0 <= b && b < d.length) {
                var f;
                f = (f = VE(a)) ? f.parentNode : null;
                a.Go.m() != f && (a.Go.h = f);
                f = a.Go;
                f.Yc(c);
                !!(f.N & 2) == c &&
                    (b = d[b]) &&
                    (b = b ? b.parentNode : null, z
                            .po(b, a.M.V() + "-cell-hover", c),
                        c
                            ? z.vg(a.h, "activedescendant", b.id)
                            : b.id == z.xg(a.h, "activedescendant") && a.h.removeAttribute("aria-activedescendant"))
            }
        }
    };
    var UE = function(a) {
        var b = a.cb();
        if (b)
            if (a.Mc && a.Mc.width) {
                if (b = Math.ceil(b.length / a.Mc.width), !z.pa(a.Mc.height) || a.Mc.height < b) a.Mc.height = b
            } else b = Math.ceil(Math.sqrt(b.length)), a.Mc = new z.He(b, b);
        else a.Mc = new z.He(0, 0)
    };
    var SE = function() {
        Lp.call(this, null);
        this.dl |= 2
    };
    var XE = function(a, b, c) {
        this.Fs = a || [];
        z.RE.call(this, null, b || z.JE.ba(), c);
        this.Fs = this.Fs;
        this.Su = this.ru = null;
        this.aa(YE(this))
    };
    var YE = function(a) {
        return z.mb(a.Fs,
            function(a, c) {
                var d = this.L().B("DIV", { "class": this.M.V() + "-colorswatch", style: "background-color:" + a }), f;
                this.ru && this.ru[c]
                    ? f = this.ru[c]
                    : "#" == a.charAt(0)
                    ? (f = Tq(a), f = "RGB (" +
                        [
                            (0, window.parseInt)(f.substr(1, 2), 16), (0, window.parseInt)(f.substr(3, 2), 16),
                            (0, window
                                .parseInt)(f.substr(5, 2), 16)
                        ].join(", ") +
                        ")")
                    : f = a;
                d.title = f;
                return d
            },
            a)
    };
    var ZE = function(a) {
        if (a)
            try {
                return Rq(a).Wt
            } catch (b) {
            }
        return null
    };
    var $E = function(a, b, c, d) { z.vA.call(this, a, b, c || FE.ba(), d) };
    var aF = function(a) {
        var b = new z.Xz(a);
        z.Db(bF,
            function(c) {
                c = new XE(c, null, a);
                z.TE(c, 8);
                b.K(c, !0)
            });
        return b
    };
    var cF = function() {};
    var dF = function() {};
    var eF = function(a, b, c, d) { $E.call(this, a, b, c || dF.ba(), d) };
    var fF = function(a, b, c, d) { z.vA.call(this, a, b, c || cF.ba(), d) };
    var gF = function(a, b, c, d, f) {
        z.vA.call(this, a, b, c, d, f || new Vz("listbox"));
        this.wy = this.cb();
        this.vA = null;
        this.Pv("listbox")
    };
    var hF = function(a, b) {
        a.wy = b;
        iF(a)
    };
    var jF = function(a, b) {
        a.ma = new PE;
        b &&
            z.Ch(b,
                function(a) {
                    kF(a);
                    this.ma.Ia(a)
                },
                a);
        lF(a)
    };
    var lF = function(a) { a.ma && a.o().g(a.ma, "select", a.pk) };
    var iF = function(a) {
        var b = a.Kf();
        a.aa(b ? b.wh() : a.wy);
        var c = a.M.S(a.m());
        c &&
            a.L().isElement(c) &&
            (null == a.vA && (a.vA = ro(c)), b = (b = b ? b.m() : null) ? ro(b) : a.vA, z.vg(c, "label", b), mF(a))
    };
    var mF = function(a) {
        var b = a.M;
        if (b && (b = b.S(a.m()))) {
            var c = a.h;
            b.id || (b.id = z.vh(z.uh.ba()));
            z.ug(b, "option");
            z.vg(c, "activedescendant", b.id);
            a.ma &&
            (c = a.ma.nb(), z.vg(b, "setsize", nF(c)), a = a.ma.hk(), z
                .vg(b, "posinset", 0 <= a ? nF(z.yb(c, 0, a + 1)) : 0))
        }
    };
    var nF = function(a) { return Qo(a, function(a) { return a instanceof z.Sz }) };
    var kF = function(a) { a.Pv(a instanceof z.Sz ? "option" : "separator") };
    var oF = function(a, b, c, d) { gF.call(this, a, b, c || cF.ba(), d) };
    var pF = function(a) {
        var b = a.indexOf(",");
        a: for (a = (-1 != b ? a.substring(0, b) : a).toLowerCase(), b = 0; 2 > b; b++) {
            var c = "\"'".charAt(b);
            if (a.charAt(0) == c && a.charAt(a.length - 1) == c) {
                a = a.substring(1, a.length - 1);
                break a
            }
        }
        return a
    };
    var qF = function(a, b) {
        z.A(b,
            function(b) {
                var d = b.value, f = pF(d);
                b = new z.AE(b.caption, d, a.L());
                An(b, f);
                a.Ia(b);
                b.S().style.fontFamily = d
            })
    };
    var rF = function(a) {
        z.A(sF,
            function(b) {
                var c = b.value;
                b = new z.AE(b.caption, c, a.L());
                a.Ia(b);
                b = b.S();
                b.style.fontSize = (tF[c] || 10) + "px";
                b.firstChild.style.height = "1.1em"
            })
    };
    var uF = function(a) {
        z.A(vF,
            function(b) {
                var c = b.caption;
                b = b.Ba;
                var d = a.L(), c = new z.AE(d.B("DIV", null, c), b, d);
                An(c, b);
                a.Ia(c)
            })
    };
    z.wF = function(a, b, c, d, f, g) {
        c = new z.EE(xF(c, d, g), f, g);
        An(c, a);
        c.Qd(b);
        return c
    };
    z.yF = function(a, b, c, d, f, g) {
        a = z.wF(a, b, c, d, f, g);
        a.dc(16, !0);
        return a
    };
    var zF = function(a, b, c, d, f, g) {
        f = new oF(null, null, f, g);
        d && z.A(d.split(/\s+/), f.si, f);
        f.si("goog-toolbar-select");
        hF(f, c);
        An(f, a);
        f.Qd(b);
        return f
    };
    var AF = function(a, b, c, d, f, g) {
        c = new eF(xF(c, d, g), null, f, g);
        An(c, a);
        c.Qd(b);
        return c
    };
    var xF = function(a, b, c) {
        a && "" != a || !z.B || z.E("1.9a") || (a = " ");
        return (c || z.Ie()).B("DIV", b ? { "class": b } : null, a)
    };
    var BF = function(a) {
        var b = "en-us".replace(/_/, "-").toLowerCase(), c = [];
        b in CF && (c = CF[b]);
        c.length && qF(a, c);
        qF(a, DF)
    };
    var EF = function(a, b, c, d, f, g) {
        var h = z.wF(a, b, c, d, f, g);
        h.tj = function(a) { h.gb(a) };
        return h
    };
    var FF = function(a, b) {
        var c = b;
        try {
            if (z.C)
                var d = "000000" + c.toString(16),
                    f = d.substr(d.length - 6, 6),
                    c = "#" + f.substring(4, 6) + f.substring(2, 4) + f.substring(0, 2);
            c != a.X() && a.Da(c)
        } catch (g) {
        }
    };
    z.GF = function(a) {
        z.iB.call(this);
        this.ea = new z.xd(this);
        this.cI = z.M("div", { style: "display:none" });
        this.h = this.Fc = null;
        this.J = {};
        z.Mb(this.J, this.defaults, a || {})
    };
    var HF = function(a) {
        a.dispatchEvent("willEnterFullScreen") &&
        (a.IG || (a.lT = window.history.length), a.IG = !0, IF(a, "writing"), a.bN = z
            .xf(z.Ie((z.u || window).document)), z.Bo(a.cI, a.J.jl), a.Fc.appendChild(a.J.jl), z.S
            .add(window.document.body, a.J.So), a.Nb = z.L(a.J.nZ, a.h), a.Nb
            .appendChild(a.ur), JF(a), (0, z.ab)(z.qf(a.G.Ka)) || a.G.wg(), a.dispatchEvent("enterFullScreen"))
    };
    var KF = function(a) {
        !z.ai && a.IG && a.lT !== window.history.length ? window.history.back() : IF(a, "");
        a.Nb.removeChild(a.ur);
        a.EL(!1);
        a.h.onscroll = null;
        a.ea.pa(window.document, "keydown", a.vq);
        z.Bo(a.J.jl, a.cI);
        z.S.remove(window.document.body, a.J.So);
        window.scrollTo(a.bN.x, a.bN.y);
        a.dispatchEvent("exitFullScreen")
    };
    var IF = function(a, b) {
        a.ea.pa(window, "hashchange", a.cK);
        window.location.hash = b || "";
        (0, window.setTimeout)((0, z.t)(function() { this.ea.g(window, "hashchange", this.cK) }, a))
    };
    var JF = function(a) {
        var b = a.h;
        b.scrollTop = 0;
        var c = a.Nb.getBoundingClientRect().top;
        b.onscroll = z.Uo((0, z.t)(a.EL, a), function() { return b.scrollTop > c });
        a.ea.g(window.document, "keydown", a.vq)
    };
    z.LF = function(a, b, c) {
        b = void 0 === b ? "success" : b;
        c = void 0 === c ? 3E3 : c;
        if (a) {
            var d = (0, window.$)("#zh-message-container");
            d.length ||
            (d = (0, window.$)('\x3cdiv id\x3d"zh-message-container" style\x3d"display:none"\x3e\x3c/div\x3e')
                .prependTo(".zu-main-content-inner"));
            d.text(a).attr("class", { success: "zg-info-message", error: "zg-error-message" }[b]).show().delay(c)
                .fadeOut()
        }
    };
    z.MF = function(a, b) { z.ma(a) && z.LF(a[1], a[0] ? "error" : "success", b) };
    z.NF = function(a) {
        z.H.call(this);
        this.Cd = a
    };
    z.OF = function(a) {
        this.dm = a;
        this.wj = new z.Ih("", !0, this.dm.Cd);
        this.to = new z.Uh(this.dm.Cd);
        this.so = {};
        this.si("tr-dialog")
    };
    z.PF = function(a, b) {
        var c = z.w("OK");
        a.to.set("ok", b || c, !0);
        a.so.ok = (0, z.t)(a.dm.BS, a.dm)
    };
    z.QF = function(a, b) {
        var c = z.ym, d = z.w("Cancel");
        a.to.set(c, b || d, !1, !0);
        a.so[c] = (0, z.t)(a.dm.fp, a.dm);
        return a
    };
    z.RF = function(a) {
        a.to.Hh() && (z.PF(a), z.QF(a));
        z.Rh(a.wj, a.to);
        var b = a.so;
        a.so = null;
        a.wj.g(z.Th, function(a) { if (b[a.key]) return b[a.key](a) });
        a.wj.$q(!0);
        var c = a.wj;
        a.wj = null;
        return c
    };
    z.SF = function(a) {
        z.iB.call(this);
        this.OP = a;
        this.jL = function() {}
    };
    z.TF = function(a) {
        var b = a.G, c = a.sL;
        c && c.restore();
        b.focus();
        a.sL = null
    };
    var UF = function(a) { a.Na && !a.CA && (a.CA = !0, a.Na.dispose(), a.Na = null, a.CA = !1) };
    var VF = function(a) {
        z.NF.call(this, a);
        this.U = new z.xd(this);
        this.ll = z.sm.Ln + "/upload";
        this.xP = !z.C
    };
    var WF = function(a) {
        z.Lc.call(this, "ok");
        var b = a[0];
        this.Hm = b;
        this.wK = b.replace("_m.jpg", "_r.jpg");
        this.UK = a[1];
        this.TK = a[2]
    };
    z.XF = function() {
        z.SF.call(this, "image");
        this.U = new z.xd(this)
    };
    z.yk.prototype.qn = z.Z(27, function(a) { this.Pj = a });
    z.hj.prototype.vh = z.Z(26,
        function(a, b) {
            if (!this.h) return null;
            for (var c = b || "A", d = a; null != d && d !== this.h;) {
                if (d.tagName === c) return d;
                d = d.parentNode
            }
            return null
        });
    z.R.prototype.nn = z.Z(25,
        function(a) {
            this.Hl = a;
            this.ya && z.Yh(this)
        });
    z.Ih.prototype.Pv = z.Z(22, function(a) { this.Dq = a });
    z.Ih.prototype.cb = z.Z(21, function() { return null != this.Fc ? z.Fd(this.Fc) : "" });
    z.Q.prototype.ci = z.Z(20,
        function(a) {
            if (this.ya) throw Error("Component already rendered");
            this.Sg = a
        });
    z.Q.prototype.Jd = z.Z(19,
        function() {
            null == this.Sg && (this.Sg = z.ch(this.ya ? this.h : this.ca.wa().body));
            return this.Sg
        });
    z.mh.prototype.gb = z.Z(18, function(a) { this.qc = a });
    z.mh.prototype.JC = z.Z(17, function(a) { this.Zz = Math.pow(a, 2) });
    z.mh.prototype.sh = z.Z(16, function(a) { this.uj = a });
    z.Hg.prototype.yh = z.Z(15, function() { return new z.He(this.width, this.height) });
    z.Hg.prototype.zA = z.Z(14,
        function(a) {
            var b = Math.max(this.left, a.left), c = Math.min(this.left + this.width, a.left + a.width);
            if (b <= c) {
                var d = Math.max(this.top, a.top);
                a = Math.min(this.top + this.height, a.top + a.height);
                if (d <= a) return this.left = b, this.top = d, this.width = c - b, this.height = a - d, !0
            }
            return !1
        });
    z.Tf.prototype.as = z.Z(13,
        function(a, b, c) {
            var d = (0, z.I)(), f = c ? c : d, g = nn(this.gt);
            g.it = 2;
            g.ht = f;
            g.type = b;
            g.IF = a;
            a = (a = this.q0) && a.isTracing() ? a.totalVarAlloc : -1;
            g.oM = a;
            this.$x++;
            if (c) {
                c = this.sg.length;
                for (a = 0; a < c; a++)
                    if (this.sg[a].ht > f) {
                        z.xb(this.sg, a, 0, g);
                        break
                    }
                a == c && this.sg.push(g)
            } else this.sg.push(g);
            if (f = g.type) g = this.el.get(f), g || (g = nn(this.aD), g.type = f, this.el.set(f, g)), g.count++;
            this.lw += (0, z.I)() - d
        });
    z.Je.prototype.Eg = z.Z(12,
        function(a) {
            var b;
            (b = "A" == a.tagName ||
                    "INPUT" == a.tagName ||
                    "TEXTAREA" == a.tagName ||
                    "SELECT" == a.tagName ||
                    "BUTTON" == a.tagName
                    ? !a.disabled && (!hn(a) || gn(a))
                    : pn(a)) &&
                z.C
                ? (a = z.qa(a.getBoundingClientRect)
                    ? a.getBoundingClientRect()
                    : { height: a.offsetHeight, width: a.offsetWidth }, a = null != a && 0 < a.height && 0 < a.width)
                : a = b;
            return a
        });
    z.Q.prototype.Lq = z.Z(11,
        function(a) {
            for (var b = []; this.fd && 0 != this.fd.length;) b.push(this.removeChild(z.Bh(this, 0), a));
            return b
        });
    z.Je.prototype.nm = z.Z(10, function(a) { return on(a || this.Ra) });
    z.Je.prototype.iy = z.Z(9,
        function(a, b, c) {
            var d = this.Ra;
            c = !!c;
            for (var f = d.createElement("TABLE"), g = f.appendChild(d.createElement("TBODY")), h = 0; h < a; h++) {
                for (var k = d.createElement("TR"), l = 0; l < b; l++) {
                    var n = d.createElement("TD");
                    c && z.of(n, " ");
                    k.appendChild(n)
                }
                g.appendChild(k)
            }
            return f
        });
    z.Je.prototype.yg = z.Z(8, function(a, b) { return z.L(a, b || this.Ra) });
    z.Q.prototype.yg = z.Z(7, function(a) { return this.h ? this.ca.yg(a, this.h) : null });
    z.Qd.prototype.Ei = z.Z(6,
        function(a) {
            for (var b = 0; b < this.lb.length; b++) {
                var c = this.lb[b];
                if (z.Td(this.Qb, c) && this.Qb[c] == a) return !0
            }
            return !1
        });
    z.rg.prototype.Ei = z.Z(5,
        function(a) {
            for (var b = z.sg(this).values, c = 0; c < b.length; c++) if (b[c] == a) return !0;
            return !1
        });
    z.uj.prototype.Ei = z.Z(4,
        function(a) {
            var b = this.nd();
            return z.rb(b, a)
        });
    z.Pc.prototype.fH = z.Z(0, function() { return this.sc });
    z.y(z.xn, z.H);
    z.e = z.xn.prototype;
    z.e.h = null;
    z.e.Hl = !0;
    z.e.$E = null;
    z.e.aF = null;
    z.e.Bk = !1;
    z.e.vY = !1;
    z.e.XA = -1;
    z.e.UA = -1;
    z.e.$H = !1;
    z.e.LQ = !0;
    z.e.hb = "toggle_display";
    z.e.Si = function() { return this.hb };
    z.e.m = function() { return this.h };
    z.e.ai = function(a) {
        mn(this);
        this.h = a
    };
    z.e.nn = function(a) {
        mn(this);
        this.Hl = a
    };
    z.e.FL = function(a, b) {
        this.zn = a;
        this.Em = b
    };
    z.e.o = function() { return this.ea };
    z.e.W = function() { return this.Bk };
    z.e.JI = function() { return this.Bk || 150 > (0, z.I)() - this.UA };
    z.e.F = function(a) {
        this.zn && this.zn.stop();
        this.Em && this.Em.stop();
        a ? this.SC() : this.Fm()
    };
    z.e.ga = z.r;
    z.e.SC = function() {
        if (!this.Bk && this.oq()) {
            if (!this.h) throw Error("Caller must call setElement before trying to show the popup");
            this.ga();
            var a = z.Ke(this.h);
            this.$H && this.ea.g(a, "keydown", this.xV, !0);
            if (this.Hl)
                if (this.ea.g(a, "mousedown", this.bK, !0), z.C) {
                    var b;
                    try {
                        b = a.activeElement
                    } catch (d) {
                    }
                    for (; b && "IFRAME" == b.nodeName;) {
                        try {
                            var c = b.contentDocument || b.contentWindow.document
                        } catch (d) {
                            break
                        }
                        a = c;
                        b = a.activeElement
                    }
                    this.ea.g(a, "mousedown", this.bK, !0);
                    this.ea.g(a, "deactivate", this.$J)
                } else
                    this.ea.g(a,
                        "blur",
                        this.$J);
            "toggle_display" == this.hb
                ? (this.h.style.visibility = "visible", z.P(this.h, !0))
                : "move_offscreen" == this.hb && this.ga();
            this.Bk = !0;
            this.XA = (0, z.I)();
            this.UA = -1;
            this.zn ? (z.ld(this.zn, "end", this.Sk, !1, this), this.zn.play()) : this.Sk()
        }
    };
    z.e.Fm = function(a) {
        if (!this.Bk || !this.dispatchEvent({ type: "beforehide", target: a })) return !1;
        this.ea && this.ea.removeAll();
        this.Bk = !1;
        this.UA = (0, z.I)();
        this.Em ? (z.ld(this.Em, "end", z.Ba(this.PF, a), !1, this), this.Em.play()) : this.PF(a);
        return !0
    };
    z.e.PF = function(a) {
        "toggle_display" == this.hb
            ? this.vY ? z.vd(this.aI, 0, this) : this.aI()
            : "move_offscreen" == this.hb && (this.h.style.top = "-10000px");
        this.Rk(a)
    };
    z.e.aI = function() {
        this.h.style.visibility = "hidden";
        z.P(this.h, !1)
    };
    z.e.oq = function() { return this.dispatchEvent("beforeshow") };
    z.e.Sk = function() { this.dispatchEvent("show") };
    z.e.Rk = function(a) { this.dispatchEvent({ type: "hide", target: a }) };
    z.e.bK = function(a) {
        a = a.target;
        z.nf(this.h, a) || ln(this, a) || this.aF && !z.nf(this.aF, a) || 150 > (0, z.I)() - this.XA || this.Fm(a)
    };
    z.e.xV = function(a) { 27 == a.keyCode && this.Fm(a.target) && (a.preventDefault(), a.stopPropagation()) };
    z.e.$J = function(a) {
        if (this.LQ) {
            var b = z.Ke(this.h);
            if ("undefined" != typeof window.document.activeElement) {
                if (a = b.activeElement, !a || z.nf(this.h, a) || "BODY" == a.tagName) return
            } else if (a.target != b) return;
            150 > (0, z.I)() - this.XA || this.Fm()
        }
    };
    z.e.D = function() {
        z.xn.v.D.call(this);
        this.ea.dispose();
        z.Cc(this.zn);
        z.Cc(this.Em);
        delete this.h;
        delete this.ea;
        delete this.$E
    };
    var Pn = /&([^;\s<&]+);?/g,
        Zn = {
            '"': '\\"',
            "\\": "\\\\",
            "/": "\\/",
            "\b": "\\b",
            "\f": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t",
            "\x0B": "\\u000b"
        },
        YF = /[^\d]+$/;
    Wn.prototype.serialize = function(a) {
        var b = [];
        Xn(this, a, b);
        return b.join("")
    };
    Wn.prototype.serializeArray = function(a, b) {
        var c = a.length;
        b.push("[");
        for (var d = "", f = 0; f < c; f++)
            b.push(d), d = a[f], Xn(this, this.Bv ? this.Bv.call(a, String(f), d) : d, b), d = ",";
        b.push("]")
    };
    z.e = Ho.prototype;
    z.e.mb = function() { return this.Qb.mb() };
    z.e.add = function(a) { this.Qb.set($n(a), a) };
    z.e.addAll = function(a) {
        a = z.Hd(a);
        for (var b = a.length, c = 0; c < b; c++) this.add(a[c])
    };
    z.e.removeAll = function(a) {
        a = z.Hd(a);
        for (var b = a.length, c = 0; c < b; c++) this.remove(a[c])
    };
    z.e.remove = function(a) { return this.Qb.remove($n(a)) };
    z.e.clear = function() { this.Qb.clear() };
    z.e.Hh = function() { return this.Qb.Hh() };
    z.e.contains = function(a) { return this.Qb.og($n(a)) };
    z.e.zA = function(a) {
        var b = new Ho;
        a = z.Hd(a);
        for (var c = 0; c < a.length; c++) {
            var d = a[c];
            this.contains(d) && b.add(d)
        }
        return b
    };
    z.e.nd = function() { return this.Qb.nd() };
    z.e.clone = function() { return new Ho(this) };
    z.e.equals = function(a) { return this.mb() == bo(a) && Io(this, a) };
    z.e.zd = function() { return this.Qb.zd(!1) };
    var op;
    z.y(z.ep, z.de);
    var ZF = /#.*$/,
        jp = {
            "*": "*",
            "text/html": "html",
            "text/plain": "text",
            "application/json": "json",
            "application/javascript": "script",
            "application/x-javascript": "script"
        },
        hp = [],
        lp = [];
    z.ep.prototype.JR = function() {
        if (this.LM) {
            var a = np();
            z.P(a, !1)
        }
        ip(this)
    };
    z.ep.prototype.ajax = function(a, b, c) {
        a = (0, window.encodeURI)((0, window.decodeURI)(a));
        a = a.replace(ZF, "");
        if (!this.da) {
            if (this.LM) {
                var d = np();
                z.P(d, !0)
            }
            mp(this);
            c = c || "POST";
            "POST" === c.toUpperCase() && (d = z.Ai.get("_xsrf")) && (b = (b ? b + "\x26_xsrf\x3d" : "_xsrf\x3d") + d);
            return this.send(a, c, b, this.headers)
        }
    };
    z.y(pp, z.H);
    pp.prototype.o = function() { return this.Of || (this.Of = new z.xd(this)) };
    z.y(z.rp, z.Lc);
    z.sp = new pp;
    z.H.prototype.on = function() {
        z.H.prototype.addEventListener.apply(this, arguments);
        return this
    };
    z.H.prototype.off = function() {
        z.H.prototype.removeEventListener.apply(this, arguments);
        return this
    };
    z.H.prototype.Bb = z.H.prototype.dispatchEvent;
    z.y(tp, z.H);
    tp.prototype.tc = function() {
        var a = (0, z.t)(function(a) {
                var c = this.Gs.section;
                (c = c && c["home-topstory"]) && (c.content = a)
            },
            this);
        zp(this).always((0, z.t)(function(b) {
                this.fb || (b && b.In && b.In.length && a("这里是根据你关注的话题和人定制的内容精选"), this.J.Ok(), vp(this), xp(this))
            },
            this));
        this.fb || yp()
    };
    z.y(Ap, z.H);
    z.e = Ap.prototype;
    z.e.h = null;
    z.e.pu = null;
    z.e.NA = null;
    z.e.qu = null;
    z.e.Ae = -1;
    z.e.Xi = -1;
    z.e.ox = !1;
    var $F = {
            3: 13,
            12: 144,
            63232: 38,
            63233: 40,
            63234: 37,
            63235: 39,
            63236: 112,
            63237: 113,
            63238: 114,
            63239: 115,
            63240: 116,
            63241: 117,
            63242: 118,
            63243: 119,
            63244: 120,
            63245: 121,
            63246: 122,
            63247: 123,
            63248: 44,
            63272: 46,
            63273: 36,
            63275: 35,
            63276: 33,
            63277: 34,
            63289: 144,
            63302: 45
        },
        aG = {
            Up: 38,
            Down: 40,
            Left: 37,
            Right: 39,
            Enter: 13,
            F1: 112,
            F2: 113,
            F3: 114,
            F4: 115,
            F5: 116,
            F6: 117,
            F7: 118,
            F8: 119,
            F9: 120,
            F10: 121,
            F11: 122,
            F12: 123,
            "U+007F": 46,
            Home: 36,
            End: 35,
            PageUp: 33,
            PageDown: 34,
            Insert: 45
        },
        bG = z.C || z.Gc || z.D && z.E("525"),
        cG = z.Uc && z.B;
    z.e = Ap.prototype;
    z.e.Lf = function(a) {
        if (z.D || z.Gc)
            if (17 == this.Ae && !a.ctrlKey || 18 == this.Ae && !a.altKey || z.Uc && 91 == this.Ae && !a.metaKey
            ) this.Xi = this.Ae = -1;
        -1 == this.Ae &&
        (a.ctrlKey && 17 != a.keyCode
            ? this.Ae = 17
            : a.altKey && 18 != a.keyCode ? this.Ae = 18 : a.metaKey && 91 != a.keyCode && (this.Ae = 91));
        bG && !no(a.keyCode, this.Ae, a.shiftKey, a.ctrlKey, a.altKey)
            ? this.handleEvent(a)
            : (this.Xi = z.Eg(a.keyCode), cG && (this.ox = a.altKey))
    };
    z.e.rS = function(a) {
        this.Xi = this.Ae = -1;
        this.ox = a.altKey
    };
    z.e.handleEvent = function(a) {
        var b = a.sc, c, d, f = b.altKey;
        z.C && "keypress" == a.type
            ? (c = this.Xi, d = 13 != c && 27 != c ? b.keyCode : 0)
            : (z.D || z.Gc) && "keypress" == a.type
            ? (c = this.Xi, d = 0 <= b.charCode && 63232 > b.charCode && z.Sn(c) ? b.charCode : 0)
            : z.Lg && !z.D
            ? (c = this.Xi, d = z.Sn(c) ? b.keyCode : 0)
            : (c = b.keyCode || this.Xi, d = b
                .charCode ||
                0, cG && (f = this.ox), z.Uc && 63 == d && 224 == c && (c = 191));
        var g = c = z.Eg(c), h = b.keyIdentifier;
        c ? 63232 <= c && c in $F ? g = $F[c] : 25 == c && a.shiftKey && (g = 9) : h && h in aG && (g = aG[h]);
        a = g == this.Ae;
        this.Ae = g;
        b = new Bp(g, d, a, b);
        b.altKey =
            f;
        this.dispatchEvent(b)
    };
    z.e.m = function() { return this.h };
    z.e.attach = function(a, b) {
        this.qu && this.detach();
        this.h = a;
        this.pu = z.G(this.h, "keypress", this, b);
        this.NA = z.G(this.h, "keydown", this.Lf, b, this);
        this.qu = z.G(this.h, "keyup", this.rS, b, this)
    };
    z.e.detach = function() {
        this.pu && (z.nd(this.pu), z.nd(this.NA), z.nd(this.qu), this.qu = this.NA = this.pu = null);
        this.h = null;
        this.Xi = this.Ae = -1
    };
    z.e.D = function() {
        Ap.v.D.call(this);
        this.detach()
    };
    z.y(Bp, z.Pc);
    var dG;
    z.ka(Cp);
    var eG = {
        button: "pressed",
        checkbox: "checked",
        menuitem: "selected",
        menuitemcheckbox: "checked",
        menuitemradio: "checked",
        radio: "checked",
        tab: "selected",
        treeitem: "selected"
    };
    z.e = Cp.prototype;
    z.e.Hf = function() {};
    z.e.B = function(a) { return a.L().B("DIV", this.xg(a).join(" "), a.cb()) };
    z.e.S = function(a) { return a };
    z.e.Zj = function(a, b, c) {
        if (a = a.m ? a.m() : a) {
            var d = [b];
            z.C && !z.E("7") && (d = Gp(z.yg(a), b), d.push(b));
            (c ? z.Bg : z.Dg)(a, d)
        }
    };
    z.e.Sb = function() { return !0 };
    z.e.w = function(a, b) {
        b.id && An(a, b.id);
        var c = this.S(b);
        c && c.firstChild ? a.pn(c.firstChild.nextSibling ? z.vb(c.childNodes) : c.firstChild) : a.pn(null);
        var d = 0, f = this.V(), g = this.V(), h = !1, k = !1, l = !1, n = z.vb(z.yg(b));
        z.A(n,
            function(a) {
                h || a != f ? k || a != g ? d |= this.Dt(a) : k = !0 : (h = !0, g == f && (k = !0));
                1 == this.Dt(a) && pn(c) && z.pf(c, !1)
            },
            this);
        a.N = d;
        h || (n.push(f), g == f && (k = !0));
        k || n.push(g);
        var q = a.Ff;
        q && n.push.apply(n, q);
        if (z.C && !z.E("7")) {
            var v = Gp(n);
            0 < v.length && (n.push.apply(n, v), l = !0)
        }
        h && k && !q && !l || qo(b, n.join(" "));
        return b
    };
    z.e.bf = function(a) {
        a.Jd() && this.ci(a.m(), !0);
        a.isEnabled() && this.mf(a, a.W())
    };
    z.e.EC = function(a, b) { z.vg(a, "label", b) };
    z.e.Uq = function(a, b) { z.fo(a, !b, !z.C && !z.Lg) };
    z.e.ci = function(a, b) { this.Zj(a, this.V() + "-rtl", b) };
    z.e.Eg = function(a) {
        var b;
        return Fp(a, 32) && (b = a.jc()) ? pn(b) : !1
    };
    z.e.mf = function(a, b) {
        var c;
        if (Fp(a, 32) && (c = a.jc())) {
            if (!b && a.N & 32) {
                try {
                    c.blur()
                } catch (d) {
                }
                a.N & 32 && a.od(null)
            }
            pn(c) != b && z.pf(c, b)
        }
    };
    z.e.F = function(a, b) {
        z.P(a, b);
        a && z.vg(a, "hidden", !b)
    };
    z.e.zc = function(a, b, c) {
        var d = a.m();
        if (d) {
            var f = this.To(b);
            f && this.Zj(a, f, c);
            this.ah(d, b, c)
        }
    };
    z.e.ah = function(a, b, c) {
        dG || (dG = { 1: "disabled", 8: "selected", 16: "checked", 64: "expanded" });
        b = dG[b];
        var d = a.getAttribute("role") || null;
        d && (d = eG[d] || b, b = "checked" == b || "selected" == b ? d : b);
        b && z.vg(a, b, c)
    };
    z.e.aa = function(a, b) {
        var c = this.S(a);
        if (c && (z.bf(c), b))
            if (z.oa(b)) z.of(c, b);
            else {
                var d = function(a) {
                    if (a) {
                        var b = z.Ke(c);
                        c.appendChild(z.oa(a) ? b.createTextNode(a) : a)
                    }
                };
                z.ma(b) ? z.A(b, d) : !z.na(b) || "nodeType" in b ? d(b) : z.A(z.vb(b), d)
            }
    };
    z.e.jc = function(a) { return a.m() };
    z.e.V = function() { return "goog-control" };
    z.e.xg = function(a) {
        var b = this.V(), c = [b], d = this.V();
        d != b && c.push(d);
        b = a.getState();
        for (d = []; b;) {
            var f = b & -b;
            d.push(this.To(f));
            b &= ~f
        }
        c.push.apply(c, d);
        (a = a.Ff) && c.push.apply(c, a);
        z.C && !z.E("7") && c.push.apply(c, Gp(c));
        return c
    };
    z.e.To = function(a) {
        this.As || Hp(this);
        return this.As[a]
    };
    z.e.Dt = function(a) {
        this.XL || (this.As || Hp(this), this.XL = z.Mo(this.As));
        a = (0, window.parseInt)(this.XL[a], 10);
        return (0, window.isNaN)(a) ? 0 : a
    };
    z.y(z.Ip, Cp);
    z.ka(z.Ip);
    z.e = z.Ip.prototype;
    z.e.Hf = function() { return "button" };
    z.e.ah = function(a, b, c) {
        switch (b) {
        case 8:
        case 16:
            z.vg(a, "pressed", c);
            break;
        default:
        case 64:
        case 1:
            z.Ip.v.ah.call(this, a, b, c)
        }
    };
    z.e.B = function(a) {
        var b = z.Ip.v.B.call(this, a);
        this.Qd(b, a.um());
        var c = a.X();
        c && this.Da(b, c);
        Fp(a, 16) && this.ah(b, 16, a.Dg());
        return b
    };
    z.e.w = function(a, b) {
        b = z.Ip.v.w.call(this, a, b);
        var c = this.X(b);
        a.Ie = c;
        a.uD = this.um(b);
        Fp(a, 16) && this.ah(b, 16, a.Dg());
        return b
    };
    z.e.X = z.r;
    z.e.Da = z.r;
    z.e.um = function(a) { return a.title };
    z.e.Qd = function(a, b) { a && (b ? a.title = b : a.removeAttribute("title")) };
    z.e.lj = z.m(29);
    z.e.V = function() { return "goog-button" };
    var Mp = {}, Kp = {};
    z.y(Lp, z.Q);
    z.e = Lp.prototype;
    z.e.Fc = null;
    z.e.N = 0;
    z.e.or = 39;
    z.e.Hj = 255;
    z.e.dl = 0;
    z.e.zb = !0;
    z.e.Ff = null;
    z.e.lk = !0;
    z.e.fs = !1;
    z.e.Dq = null;
    z.e.Zq = function(a) {
        this.ya && a != this.lk && Np(this, a);
        this.lk = a
    };
    z.e.jc = function() { return this.M.jc(this) };
    z.e.At = function() { return this.Fb || (this.Fb = new Ap) };
    z.e.si = function(a) {
        a && (this.Ff ? z.rb(this.Ff, a) || this.Ff.push(a) : this.Ff = [a], this.M.Zj(this, a, !0))
    };
    z.e.Zj = function(a, b) {
        b
            ? this.si(a)
            : a && this.Ff && z.tb(this.Ff, a) && (0 == this.Ff.length && (this.Ff = null), this.M.Zj(this, a, !1))
    };
    z.e.B = function() {
        var a = this.M.B(this);
        this.h = a;
        Dp(this.M, a, this.Ri());
        this.fs || this.M.Uq(a, !1);
        this.W() || this.M.F(a, !1)
    };
    z.e.Ri = function() { return this.Dq };
    z.e.Pv = function(a) { this.Dq = a };
    z.e.EC = function(a) {
        this.VE = a;
        var b = this.m();
        b && this.M.EC(b, a)
    };
    z.e.S = function() { return this.M.S(this.m()) };
    z.e.Sb = function(a) { return this.M.Sb(a) };
    z.e.T = function(a) {
        this.h = a = this.M.w(this, a);
        Dp(this.M, a, this.Ri());
        this.fs || this.M.Uq(a, !1);
        this.zb = "none" != a.style.display
    };
    z.e.C = function() {
        Lp.v.C.call(this);
        Ep(this.M, this, this.h);
        this.M.bf(this);
        if (this.or & -2 && (this.lk && Np(this, !0), Fp(this, 32))) {
            var a = this.jc();
            if (a) {
                var b = this.At();
                b.attach(a);
                this.o().g(b, "key", this.kc).g(a, "focus", this.ye).g(a, "blur", this.od)
            }
        }
    };
    z.e.Db = function() {
        Lp.v.Db.call(this);
        this.Fb && this.Fb.detach();
        this.W() && this.isEnabled() && this.M.mf(this, !1)
    };
    z.e.D = function() {
        Lp.v.D.call(this);
        this.Fb && (this.Fb.dispose(), delete this.Fb);
        delete this.M;
        this.tp = this.Ff = this.Fc = null
    };
    z.e.cb = function() { return this.Fc };
    z.e.aa = function(a) {
        this.M.aa(this.m(), a);
        this.pn(a)
    };
    z.e.pn = function(a) { this.Fc = a };
    z.e.wh = function() {
        var a = this.cb();
        if (!a) return "";
        a = z.oa(a) ? a : z.ma(a) ? z.mb(a, z.uo).join("") : z.qf(a);
        return Zo(a)
    };
    z.e.Vq = function(a) { this.aa(a) };
    z.e.ci = function(a) {
        Lp.v.ci.call(this, a);
        var b = this.m();
        b && this.M.ci(b, a)
    };
    z.e.Uq = function(a) {
        this.fs = a;
        var b = this.m();
        b && this.M.Uq(b, a)
    };
    z.e.W = function() { return this.zb };
    z.e.F = function(a, b) {
        if (b || this.zb != a && this.dispatchEvent(a ? "show" : "hide")) {
            var c = this.m();
            c && this.M.F(c, a);
            this.isEnabled() && this.M.mf(this, a);
            this.zb = a;
            return !0
        }
        return !1
    };
    z.e.isEnabled = function() { return !(this.N & 1) };
    z.e.gb = function(a) {
        var b = this.getParent();
        b && "function" == typeof b.isEnabled && !b.isEnabled() ||
            !Qp(this, 1, !a) ||
            (a || (this.setActive(!1), this.Yc(!1)), this.W() && this.M.mf(this, a), this.zc(1, !a, !0))
    };
    z.e.Yc = function(a) { Qp(this, 2, a) && this.zc(2, a) };
    z.e.Jc = function() { return !!(this.N & 4) };
    z.e.setActive = function(a) { Qp(this, 4, a) && this.zc(4, a) };
    z.e.MC = function(a) { Qp(this, 8, a) && this.zc(8, a) };
    z.e.Dg = function() { return !!(this.N & 16) };
    z.e.yc = function(a) { Qp(this, 16, a) && this.zc(16, a) };
    z.e.Eb = function() { return !!(this.N & 64) };
    z.e.Mb = function(a) { Qp(this, 64, a) && this.zc(64, a) };
    z.e.getState = function() { return this.N };
    z.e.zc = function(a, b, c) {
        c || 1 != a
            ? Fp(this, a) && b != !!(this.N & a) && (this.M.zc(this, a, b), this.N = b ? this.N | a : this.N & ~a)
            : this.gb(!b)
    };
    z.e.dc = function(a, b) {
        if (this.ya && this.N & a && !b) throw Error("Component already rendered");
        !b && this.N & a && this.zc(a, !1);
        this.or = b ? this.or | a : this.or & ~a
    };
    z.e.Gd = function(a) {
        (!a.relatedTarget || !z.nf(this.m(), a.relatedTarget)) &&
            this.dispatchEvent("enter") &&
            this.isEnabled() &&
            Pp(this, 2) &&
            this.Yc(!0)
    };
    z.e.ym = function(a) {
        a.relatedTarget && z.nf(this.m(), a.relatedTarget) ||
            !this.dispatchEvent("leave") ||
            (Pp(this, 4) && this.setActive(!1), Pp(this, 2) && this.Yc(!1))
    };
    z.e.gp = z.r;
    z.e.ze = function(a) {
        this.isEnabled() &&
        (Pp(this, 2) && this.Yc(!0), z.Tc(a) &&
            (Pp(this, 4) && this.setActive(!0), this.M && this.M.Eg(this) && this.jc().focus()));
        !this.fs && z.Tc(a) && a.preventDefault()
    };
    z.e.Nf = function(a) {
        this.isEnabled() && (Pp(this, 2) && this.Yc(!0), this.Jc() && this.ee(a) && Pp(this, 4) && this.setActive(!1))
    };
    z.e.wH = function(a) { this.isEnabled() && this.ee(a) };
    z.e.ee = function(a) {
        Pp(this, 16) && this.yc(!this.Dg());
        Pp(this, 8) && this.MC(!0);
        Pp(this, 64) && this.Mb(!this.Eb());
        var b = new z.Lc("action", this);
        a && (b.altKey = a.altKey, b.ctrlKey = a.ctrlKey, b.metaKey = a.metaKey, b.shiftKey = a.shiftKey, b.YB = a.YB);
        return this.dispatchEvent(b)
    };
    z.e.ye = function() { Pp(this, 32) && Qp(this, 32, !0) && this.zc(32, !0) };
    z.e.od = function() {
        Pp(this, 4) && this.setActive(!1);
        Pp(this, 32) && Qp(this, 32, !1) && this.zc(32, !1)
    };
    z.e.kc = function(a) {
        return this.W() && this.isEnabled() && this.Mf(a) ? (a.preventDefault(), a.stopPropagation(), !0) : !1
    };
    z.e.Mf = function(a) { return 13 == a.keyCode && this.ee(a) };
    if (!z.qa(Lp)) throw Error("Invalid component class " + Lp);
    if (!z.qa(Cp)) throw Error("Invalid renderer class " + Cp);
    var fG = z.ta(Lp);
    Mp[fG] = Cp;
    z.Jp("goog-control", function() { return new Lp(null) });
    z.y(Op, z.xc);
    Op.prototype.wm = function() { this.Bs = !1 };
    Op.prototype.Ot = function() { this.Bs = !0 };
    Op.prototype.vm = function(a) {
        if (this.Bs) this.Bs = !1;
        else {
            var b = a.sc, c = b.button, d = b.type;
            b.button = 0;
            b.type = "mousedown";
            this.Ks.ze(new z.Pc(b, a.currentTarget));
            b.type = "mouseup";
            this.Ks.Nf(new z.Pc(b, a.currentTarget));
            b.button = c;
            b.type = d
        }
    };
    Op.prototype.D = function() {
        this.Ks = null;
        Op.v.D.call(this)
    };
    z.y(Rp, z.Ip);
    z.ka(Rp);
    z.e = Rp.prototype;
    z.e.Hf = function() {};
    z.e.B = function(a) {
        a.Zq(!1);
        a.Hj &= -256;
        a.dc(32, !1);
        return a.L().B("BUTTON",
            { "class": this.xg(a).join(" "), disabled: !a.isEnabled(), title: a.um() || "", value: a.X() || "" },
            a.wh() || "")
    };
    z.e.Sb = function(a) {
        return "BUTTON" == a.tagName ||
            "INPUT" == a.tagName && ("button" == a.type || "submit" == a.type || "reset" == a.type)
    };
    z.e.w = function(a, b) {
        a.Zq(!1);
        a.Hj &= -256;
        a.dc(32, !1);
        if (b.disabled) {
            var c = this.To(1);
            z.Ag(b, c)
        }
        return Rp.v.w.call(this, a, b)
    };
    z.e.bf = function(a) { a.o().g(a.m(), "click", a.ee) };
    z.e.Uq = z.r;
    z.e.ci = z.r;
    z.e.Eg = function(a) { return a.isEnabled() };
    z.e.mf = z.r;
    z.e.zc = function(a, b, c) {
        Rp.v.zc.call(this, a, b, c);
        (a = a.m()) && 1 == b && (a.disabled = c)
    };
    z.e.X = function(a) { return a.value };
    z.e.Da = function(a, b) { a && (a.value = b) };
    z.e.ah = z.r;
    z.y(z.Sp, Lp);
    z.e = z.Sp.prototype;
    z.e.X = function() { return this.Ie };
    z.e.Da = function(a) {
        this.Ie = a;
        this.M.Da(this.m(), a)
    };
    z.e.um = function() { return this.uD };
    z.e.Qd = function(a) {
        this.uD = a;
        this.M.Qd(this.m(), a)
    };
    z.e.lj = z.m(28);
    z.e.D = function() {
        z.Sp.v.D.call(this);
        delete this.Ie;
        delete this.uD
    };
    z.e.C = function() {
        z.Sp.v.C.call(this);
        if (Fp(this, 32)) {
            var a = this.jc();
            a && this.o().g(a, "keyup", this.Mf)
        }
    };
    z.e.Mf = function(a) {
        return 13 == a.keyCode && "key" == a.type || 32 == a.keyCode && "keyup" == a.type ? this.ee(a) : 32 == a.keyCode
    };
    z.Jp("goog-button", function() { return new z.Sp(null) });
    z.y(Tp, Cp);
    z.ka(Tp);
    Tp.prototype.B = function(a) {
        var b = a.L().B("SPAN", this.xg(a).join(" "));
        Up(this, b, a.Ci);
        return b
    };
    Tp.prototype.w = function(a, b) {
        b = Tp.v.w.call(this, a, b);
        var c = z.yg(b), d = Zp;
        z.rb(c, Vp(this, Xp)) ? d = Xp : z.rb(c, Vp(this, Yp)) ? d = Yp : z.rb(c, Vp(this, Zp)) && (d = Zp);
        a.Ci = d;
        z.vg(b, "checked", d == Xp ? "mixed" : d == Yp ? "true" : "false");
        return b
    };
    Tp.prototype.Hf = function() { return "checkbox" };
    Tp.prototype.V = function() { return "goog-checkbox" };
    z.y($p, Lp);
    var Yp = !0, Zp = !1, Xp = null, Wp = { j_: Yp, U_: Zp, W_: Xp };
    z.e = $p.prototype;
    z.e.Wb = null;
    z.e.Dg = function() { return this.Ci == Yp };
    z.e.yc = function(a) { a != this.Ci && (this.Ci = a, Up(this.M, this.m(), this.Ci)) };
    z.e.toggle = function() { this.yc(this.Ci ? Zp : Yp) };
    z.e.C = function() {
        $p.v.C.call(this);
        if (this.lk) {
            var a = this.o();
            this.Wb &&
                a.g(this.Wb, "click", this.Ez).g(this.Wb, "mouseover", this.Gd).g(this.Wb, "mouseout", this.ym)
                .g(this.Wb, "mousedown", this.ze).g(this.Wb, "mouseup", this.Nf);
            a.g(this.m(), "click", this.Ez)
        }
        a = this.h;
        if (this.Wb && a != this.Wb && z.bp(ro(a))) {
            if (!this.Wb.id) {
                var b = this.Wb, c;
                c = this.xe() + ".lbl";
                b.id = c
            }
            z.vg(a, "labelledby", this.Wb.id)
        }
    };
    z.e.gb = function(a) {
        $p.v.gb.call(this, a);
        if (a = this.m()) a.tabIndex = this.isEnabled() ? 0 : -1
    };
    z.e.Ez = function(a) {
        a.stopPropagation();
        var b = this.Ci ? "uncheck" : "check";
        this.isEnabled() &&
            !a.target.href &&
            this.dispatchEvent(b) &&
            (a.preventDefault(), this.toggle(), this.dispatchEvent("change"))
    };
    z.e.Mf = function(a) {
        32 == a.keyCode && (this.ee(a), this.Ez(a));
        return !1
    };
    z.Jp("goog-checkbox", function() { return new $p });
    z.y(z.aq, z.Ip);
    z.ka(z.aq);
    z.e = z.aq.prototype;
    z.e.B = function(a) {
        var b = { "class": "goog-inline-block " + this.xg(a).join(" ") }, b = a.L().B("DIV", b, a.cb());
        this.Qd(b, a.um());
        return b
    };
    z.e.Hf = function() { return "button" };
    z.e.Sb = function(a) { return "DIV" == a.tagName };
    z.e.w = function(a, b) {
        z.Ag(b, "goog-inline-block");
        return z.aq.v.w.call(this, a, b)
    };
    z.e.X = function() { return "" };
    z.e.V = function() { return "goog-flat-button" };
    z.Jp("goog-flat-button", function() { return new z.Sp(null, z.aq.ba()) });
    z.y(bq, z.aq);
    z.ka(bq);
    bq.prototype.V = function() { return "goog-link-button" };
    z.Jp("goog-link-button", function() { return new z.Sp(null, bq.ba()) });
    z.y(z.cq, z.H);
    z.e = z.cq.prototype;
    z.e.lk = !0;
    z.e.D = function() {
        z.cq.v.D.call(this);
        z.Cc(this.XI);
        z.Cc(this.qB)
    };
    z.e.Hf = function() { return "tab" };
    z.e.S = function() { return this.fm };
    z.e.expand = function() { this.Lc(!0) };
    z.e.collapse = function() { this.Lc(!1) };
    z.e.toggle = function() { this.Lc(!this.vb) };
    z.e.Lc = function(a) {
        this.fm ? z.P(this.fm, a) : a && this.xu && (this.fm = this.xu());
        this.fm && z.Ag(this.fm, "goog-zippy-content");
        this.Yj
            ? (z.P(this.rg, !a), z.P(this.Yj, a))
            : this.rg &&
            (z.po(this.rg, "goog-zippy-expanded", a), z.po(this.rg, "goog-zippy-collapsed", !a), z
                .vg(this.rg, "expanded", a));
        this.vb = a;
        this.dispatchEvent(new fq("toggle", this, this.vb))
    };
    z.e.pd = function() { return this.vb };
    z.e.Zq = function(a) {
        this.lk != a && ((this.lk = a) ? (dq(this, this.rg), dq(this, this.Yj)) : this.qB.removeAll())
    };
    z.e.DV = function(a) {
        if (13 == a.keyCode || 32 == a.keyCode)
            this.toggle(), this.dispatchEvent(new z.Lc("action", this)), a.preventDefault(), a.stopPropagation()
    };
    z.e.CV = function() {
        this.toggle();
        this.dispatchEvent(new z.Lc("action", this))
    };
    z.y(fq, z.Lc);
    z.y(gq, z.R);
    z.e = gq.prototype;
    z.e.B = function() {
        gq.v.B.call(this);
        var a = (0, window.$)(".activate-dialog-template").html();
        this.aa(a)
    };
    z.e.C = function() {
        gq.v.C.call(this);
        z.Zh(this, 420);
        this.La("激活帐号");
        this.Ha = (0, window.$)(this.xh()).addClass("activate-dialog");
        this.tc()
    };
    z.e.tc = function() {
        this.cE = (0, window.$)(".link-activate-view", this.Ha);
        this.VD = (0, window.$)(".code-activate-view", this.Ha);
        this.cE.length ? hq(this) : jq(this)
    };
    z.e.dW = function(a) {
        var b = this, c = (0, window.$)(a);
        a = c.lc();
        var d = a.account,
            f = this.ef(d),
            g = f ? "/settings/account/send_new_email_digits" : "/settings/account/send_new_phone_digits";
        f ? this.Gb(a, "account", "email") : this.Gb(a, "account", "phone_no");
        return window.$.post(g,
            a,
            function(a) {
                a.success
                    ? (c.hide(), (0, window.$)('input[name\x3d"account"]', b.RD).val(d), b.RD.show(), lq(b, f))
                    : (a = a.payload.fields, f ? b.Gb(a, "email", "account") : b.Gb(a, "phone_no", "account"), c
                        .data("validator").showErrors(a))
            })
    };
    z.e.fV = function(a) {
        var b = this, c = (0, window.$)(a);
        a = c.lc();
        var d = this.ef(a.account), f = d ? "/settings/account/update_email" : "/settings/account/update_phone";
        d ? this.Gb(a, "account", "email") : this.Gb(a, "account", "phone_no");
        return window.$.post(f,
            a,
            function(a) {
                a.success
                    ? (b.aa("激活成功。你可以正常使用提问、回答、评论等功能啦！"), (0, window
                        .setTimeout)(function() { window.location.reload() }, 1E3))
                    : (a = a.payload.fields, d ? b.Gb(a, "email", "account") : b.Gb(a, "phone_no", "account"), c
                        .data("validator").showErrors(a))
            })
    };
    z.e.Gb = function(a, b, c) { a[b] && (a[c] = a[b], delete a[b]) };
    z.e.ef = function(a) { return !/^\+?[0-9]+$/.test(a) };
    var kq = {
        onkeyup: !1,
        onfocusout: !1,
        validClass: "",
        focusInvalid: !1,
        highlight: z.r,
        messages: { account: { required: "请填写手机号或邮箱" }, digits: { required: "请填写验证码" } },
        errorPlacement: function(a, b) {
            var c = b.parent(".input-wrapper");
            a.appendTo(c).click(function() { b.focus() });
            b.focus(function() { a.remove() })
        }
    };
    z.p(mq, z.Pj);
    z.e = mq.prototype;
    z.e.B = function() {
        z.Pj.prototype.B.call(this);
        this
            .aa('\n\x3cdiv class\x3d"zhihuapp-login"\x3e\n  \x3cdiv class\x3d"title"\x3e注册/登录后继续操作\x3c/div\x3e\n  \x3cbutton class\x3d"reg-button"\x3e注册\x3c/button\x3e\n  \x3cbutton class\x3d"login-button"\x3e登录\x3c/button\x3e\n\x3c/div\x3e\n')
    };
    z.e.C = function() {
        z.Pj.prototype.C.call(this);
        this.H = (0, window.$)(".zhihuapp-login");
        this.H.on("click", ".reg-button", this.KS.bind(this));
        this.H.on("click", ".login-button", this.vS.bind(this))
    };
    z.e.KS = function() {
        window.location.href = "zhihu://signup?next\x3d" + (0, window.encodeURIComponent)(window.location.href)
    };
    z.e.vS = function() {
        window.location.href = "zhihu://signin?next\x3d" + (0, window.encodeURIComponent)(window.location.href)
    };
    z.e.qn = function() {};
    z.e.show = function() { this.F(!0) };
    z.p(oq, z.H);
    oq.prototype.D = function() {
        z.H.prototype.D.call(this);
        this.dw && ((0, window.clearTimeout)(this.dw), this.dw = null)
    };
    oq.prototype.mv = function() {
        if (!this.promise || "pending" !== this.promise.state()) {
            var a = this.HO;
            this.promise = (window.$.support.cors ? window.$.ajax(a) : nq(a)).done(this.onMessage.bind(this))
                .fail(this.AB.bind(this))
        }
    };
    oq.prototype.onMessage = function(a) {
        try {
            this.dispatchEvent({ type: "message", data: a })
        } catch (b) {
        }
        this.dw = (0, window.setTimeout)(this.mv.bind(this), this.UW)
    };
    oq.prototype.AB = function() {
        this.dispatchEvent("error");
        this.Ev < this.xJ && (this.Ev = Math.min(this.Ev * this.sT, this.xJ));
        this.dw = (0, window.setTimeout)(this.mv.bind(this), this.Ev)
    };
    var pq = { type: "GET", url: "", data: {}, timeout: 6E4, xhrFields: { withCredentials: !0 } };
    z.p(z.qq, z.Q);
    z.qq.prototype.B = function() {
        this.h = z.M("div", { innerHTML: (0, window.$)(".unblock-dialog-template").html() })
    };
    z.qq.prototype.C = function() {
        z.Q.prototype.C.call(this);
        var a = (0, window.$)(".unblock-dialog-template");
        this.Yp = a.data("level");
        this.Vw = (0, window.$)(".unblock-dialog-view", this.h);
        this.sl = (0, window.$)(".unblock-dialog-loading", this.h);
        this.ql = (0, window.$)(".unblock-dialog-error", this.h);
        5 === this.Yp && ((0, window.$)(".unblock-dialog-success", this.h).show(), Bq(this));
        2 === this.Yp &&
            ((0, window.$)(".unblock-dialog-appeal", this.h).show(), this.eu(), wq(this), this.captcha.hn());
        if (3 === this.Yp || 4 === this.Yp)
            a.data("appeal")
                ? (this.HB("帐号解封"), (0, window.$)(".unblock-dialog-success", this.h).show(), Bq(this))
                : (rq(this), this.eu(), this.mo(), Aq(this))
    };
    z.qq.prototype.eu = function() {
        this.captcha = new z.Gj("antispam");
        this.captcha.w((0, window.$)(".unblock-dialog-captcha", this.h).get(0))
    };
    z.qq.prototype.mo = function() {
        sq(this);
        wq(this);
        zq(this)
    };
    z.p(Cq, z.R);
    Cq.prototype.B = function() {
        z.R.prototype.B.call(this);
        this.La("帐号解封");
        z.Rh(this, null);
        this.Fe(!0)
    };
    Cq.prototype.C = function() {
        var a = this;
        z.R.prototype.C.call(this);
        this.zD = new z.qq(function(b) { return a.La(b) }, !0);
        z.Ac(this, this.zD);
        this.zD.render(this.S());
        this.zD.g("complete", function() { return a.F(!1) })
    };
    z.y(Eq, z.H);
    var Fq = 0;
    Eq.prototype.Kg = function() { this.Bd("begin") };
    Eq.prototype.Lg = function() { this.Bd("end") };
    Eq.prototype.Bd = function(a) { this.dispatchEvent(a) };
    z.y(Gq, z.xc);
    z.e = Gq.prototype;
    z.e.wb = 0;
    z.e.D = function() {
        Gq.v.D.call(this);
        this.stop();
        delete this.Ek;
        delete this.ea
    };
    z.e.start = function(a) {
        this.stop();
        this.wb = z.vd(this.Pl, z.ja(a) ? a : this.Gh)
    };
    z.e.stop = function() {
        this.Jc() && z.wd(this.wb);
        this.wb = 0
    };
    z.e.fire = function() {
        this.stop();
        this.qh()
    };
    z.e.Jc = function() { return 0 != this.wb };
    z.e.qh = function() {
        this.wb = 0;
        this.Ek && this.Ek.call(this.ea)
    };
    var Jq = {}, Kq = null;
    z.y(Oq, Eq);
    z.e = Oq.prototype;
    z.e.sh = function(a) { this.uj = a };
    z.e.play = function(a) {
        if (a || this.N == Fq) this.progress = 0, this.coords = this.kr;
        else if (1 == this.N) return !1;
        Iq(this);
        this.startTime = a = (0, z.I)();
        -1 == this.N && (this.startTime -= this.duration * this.progress);
        this.endTime = this.startTime + this.duration;
        this.progress || this.Kg();
        this.Bd("play");
        -1 == this.N && this.Bd("resume");
        this.N = 1;
        var b = z.ta(this);
        b in Jq || (Jq[b] = this);
        Lq();
        Nq(this, a);
        return !0
    };
    z.e.stop = function(a) {
        Iq(this);
        this.N = Fq;
        a && (this.progress = 1);
        Pq(this, this.progress);
        this.Bd("stop");
        this.Lg()
    };
    z.e.pause = function() { 1 == this.N && (Iq(this), this.N = -1, this.Bd("pause")) };
    z.e.D = function() {
        this.N == Fq || this.stop(!1);
        this.Bd("destroy");
        Oq.v.D.call(this)
    };
    z.e.destroy = function() { this.dispose() };
    z.e.wB = function() { this.Bd("animate") };
    z.e.Bd = function(a) { this.dispatchEvent(new Qq(a, this)) };
    z.y(Qq, z.Lc);
    var Wq = {
        aliceblue: "#f0f8ff",
        antiquewhite: "#faebd7",
        aqua: "#00ffff",
        aquamarine: "#7fffd4",
        azure: "#f0ffff",
        beige: "#f5f5dc",
        bisque: "#ffe4c4",
        black: "#000000",
        blanchedalmond: "#ffebcd",
        blue: "#0000ff",
        blueviolet: "#8a2be2",
        brown: "#a52a2a",
        burlywood: "#deb887",
        cadetblue: "#5f9ea0",
        chartreuse: "#7fff00",
        chocolate: "#d2691e",
        coral: "#ff7f50",
        cornflowerblue: "#6495ed",
        cornsilk: "#fff8dc",
        crimson: "#dc143c",
        cyan: "#00ffff",
        darkblue: "#00008b",
        darkcyan: "#008b8b",
        darkgoldenrod: "#b8860b",
        darkgray: "#a9a9a9",
        darkgreen: "#006400",
        darkgrey: "#a9a9a9",
        darkkhaki: "#bdb76b",
        darkmagenta: "#8b008b",
        darkolivegreen: "#556b2f",
        darkorange: "#ff8c00",
        darkorchid: "#9932cc",
        darkred: "#8b0000",
        darksalmon: "#e9967a",
        darkseagreen: "#8fbc8f",
        darkslateblue: "#483d8b",
        darkslategray: "#2f4f4f",
        darkslategrey: "#2f4f4f",
        darkturquoise: "#00ced1",
        darkviolet: "#9400d3",
        deeppink: "#ff1493",
        deepskyblue: "#00bfff",
        dimgray: "#696969",
        dimgrey: "#696969",
        dodgerblue: "#1e90ff",
        firebrick: "#b22222",
        floralwhite: "#fffaf0",
        forestgreen: "#228b22",
        fuchsia: "#ff00ff",
        gainsboro: "#dcdcdc",
        ghostwhite: "#f8f8ff",
        gold: "#ffd700",
        goldenrod: "#daa520",
        gray: "#808080",
        green: "#008000",
        greenyellow: "#adff2f",
        grey: "#808080",
        honeydew: "#f0fff0",
        hotpink: "#ff69b4",
        indianred: "#cd5c5c",
        indigo: "#4b0082",
        ivory: "#fffff0",
        khaki: "#f0e68c",
        lavender: "#e6e6fa",
        lavenderblush: "#fff0f5",
        lawngreen: "#7cfc00",
        lemonchiffon: "#fffacd",
        lightblue: "#add8e6",
        lightcoral: "#f08080",
        lightcyan: "#e0ffff",
        lightgoldenrodyellow: "#fafad2",
        lightgray: "#d3d3d3",
        lightgreen: "#90ee90",
        lightgrey: "#d3d3d3",
        lightpink: "#ffb6c1",
        lightsalmon: "#ffa07a",
        lightseagreen: "#20b2aa",
        lightskyblue: "#87cefa",
        lightslategray: "#778899",
        lightslategrey: "#778899",
        lightsteelblue: "#b0c4de",
        lightyellow: "#ffffe0",
        lime: "#00ff00",
        limegreen: "#32cd32",
        linen: "#faf0e6",
        magenta: "#ff00ff",
        maroon: "#800000",
        mediumaquamarine: "#66cdaa",
        mediumblue: "#0000cd",
        mediumorchid: "#ba55d3",
        mediumpurple: "#9370db",
        mediumseagreen: "#3cb371",
        mediumslateblue: "#7b68ee",
        mediumspringgreen: "#00fa9a",
        mediumturquoise: "#48d1cc",
        mediumvioletred: "#c71585",
        midnightblue: "#191970",
        mintcream: "#f5fffa",
        mistyrose: "#ffe4e1",
        moccasin: "#ffe4b5",
        navajowhite: "#ffdead",
        navy: "#000080",
        oldlace: "#fdf5e6",
        olive: "#808000",
        olivedrab: "#6b8e23",
        orange: "#ffa500",
        orangered: "#ff4500",
        orchid: "#da70d6",
        palegoldenrod: "#eee8aa",
        palegreen: "#98fb98",
        paleturquoise: "#afeeee",
        palevioletred: "#db7093",
        papayawhip: "#ffefd5",
        peachpuff: "#ffdab9",
        peru: "#cd853f",
        pink: "#ffc0cb",
        plum: "#dda0dd",
        powderblue: "#b0e0e6",
        purple: "#800080",
        red: "#ff0000",
        rosybrown: "#bc8f8f",
        royalblue: "#4169e1",
        saddlebrown: "#8b4513",
        salmon: "#fa8072",
        sandybrown: "#f4a460",
        seagreen: "#2e8b57",
        seashell: "#fff5ee",
        sienna: "#a0522d",
        silver: "#c0c0c0",
        skyblue: "#87ceeb",
        slateblue: "#6a5acd",
        slategray: "#708090",
        slategrey: "#708090",
        snow: "#fffafa",
        springgreen: "#00ff7f",
        steelblue: "#4682b4",
        tan: "#d2b48c",
        teal: "#008080",
        thistle: "#d8bfd8",
        tomato: "#ff6347",
        turquoise: "#40e0d0",
        violet: "#ee82ee",
        wheat: "#f5deb3",
        white: "#ffffff",
        whitesmoke: "#f5f5f5",
        yellow: "#ffff00",
        yellowgreen: "#9acd32"
    };
    var Xq = /#(.)(.)(.)/,
        Sq = /^#(?:[0-9a-f]{3}){1,2}$/i,
        Yq = /^(?:rgb)?\((0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2})\)$/i;
    z.y(Zq, Oq);
    z.e = Zq.prototype;
    z.e.ki = z.r;
    z.e.Jd = function() {
        z.ja(this.Sg) || (this.Sg = z.ch(this.element));
        return this.Sg
    };
    z.e.wB = function() {
        this.ki();
        Zq.v.wB.call(this)
    };
    z.e.Lg = function() {
        this.ki();
        Zq.v.Lg.call(this)
    };
    z.e.Kg = function() {
        this.ki();
        Zq.v.Kg.call(this)
    };
    z.y($q, Zq);
    $q.prototype.ki = function() {
        var a = this.uj && this.Jd() ? "right" : "left";
        this.element.style[a] = Math.round(this.coords[0]) + "px";
        this.element.style.top = Math.round(this.coords[1]) + "px"
    };
    z.y(ar, Zq);
    ar.prototype.ki = function() {
        if (this.uj) {
            var a = this.element, b = Math.round(this.coords[0]), b = Math.max(b, 0);
            z.ch(a)
                ? z.B
                ? a.scrollLeft = -b
                : z.Ll && z.E("8") ? a.scrollLeft = b : a.scrollLeft = a.scrollWidth - b - a.clientWidth
                : a.scrollLeft = b
        } else this.element.scrollLeft = Math.round(this.coords[0]);
        this.element.scrollTop = Math.round(this.coords[1])
    };
    z.y(br, Zq);
    br.prototype.ki = function() { this.element.style.width = Math.round(this.coords[0]) + "px" };
    z.y(cr, Zq);
    cr.prototype.ki = function() { this.element.style.height = Math.round(this.coords[0]) + "px" };
    z.y(dr, Zq);
    var gG = 1 / 1024, er = -1;
    z.e = dr.prototype;
    z.e.ki = function() {
        var a = this.coords[0];
        Math.abs(a - this.uu) >= gG && (z.$g(this.element, a), this.uu = a)
    };
    z.e.Kg = function() {
        this.uu = er;
        dr.v.Kg.call(this)
    };
    z.e.Lg = function() {
        this.uu = er;
        dr.v.Lg.call(this)
    };
    z.e.show = function() { this.element.style.display = "" };
    z.e.hide = function() { this.element.style.display = "none" };
    z.y(fr, dr);
    fr.prototype.Kg = function() {
        this.show();
        fr.v.Kg.call(this)
    };
    fr.prototype.Lg = function() {
        this.hide();
        fr.v.Lg.call(this)
    };
    z.y(gr, dr);
    gr.prototype.Kg = function() {
        this.show();
        gr.v.Kg.call(this)
    };
    z.y(hr, Zq);
    hr.prototype.ki = function() {
        for (var a = [], b = 0; b < this.coords.length; b++) a[b] = Math.round(this.coords[b]);
        a = "rgb(" + a.join(",") + ")";
        this.element.style.backgroundColor = a
    };
    var hG = {
            hidden: "visibilitychange",
            msHidden: "msvisibilitychange",
            mozHidden: "mozvisibilitychange",
            webkitHidden: "webkitvisibilitychange"
        },
        tr;
    a: {
        var iG = function(a, b) { return b in window.document }, jG;
        for (jG in hG)
            if (iG.call(void 0, 0, jG)) {
                tr = jG;
                break a
            }
        tr = void 0
    }
    var ur = hG[tr], sr = z.ja(tr);
    z.Fr = function(a) { return function(b) { return b.replace(a, "") } }(/^⁠+|⁠+$/);
    z.zr.prototype.add = function(a, b) {
        !1 === this.XT
            ? this.data.set(a, b)
            : this.data.set((0, window.encodeURIComponent)(a), (0, window.encodeURIComponent)(b))
    };
    z.zr.prototype.Ed = function() {
        var a = [];
        z.A(this.data.Dd(), function(b) { a.push(b + "\x3d" + this.data.get(b)) }, this);
        return a.join("\x26")
    };
    z.Zv = function() {
        function a(a) { return a.replace(/\\\\/g, "\\").replace(/\\'/g, "'") }

        var b = {
                YY: { evaluate: /<%([\s\S]+?)%>/g, PT: /<%=([\s\S]+?)%>/g, escape: /<%-([\s\S]+?)%>/g },
                escape: function(a) {
                    return ("" + a).replace(/&/g, "\x26amp;").replace(/</g, "\x26lt;").replace(/>/g, "\x26gt;")
                        .replace(/"/g, "\x26quot;").replace(/'/g, "\x26#x27;").replace(/\//g, "\x26#x2F;")
                }
            },
            c = /.^/;
        return function(d, f) {
            var g = b.YY,
                g = "var __p\x3d[],print\x3dfunction(){__p.push.apply(__p,arguments);};with(data||{}){__p.push('" +
                    d.replace(/\\/g,
                        "\\\\").replace(/'/g, "\\'").replace(g.escape || c,
                        function(b, c) { return "',_.escape(" + a(c) + "),'" })
                    .replace(g.PT || c, function(b, c) { return "'," + a(c) + ",'" })
                    .replace(g.evaluate || c,
                        function(b, c) { return "');" + a(c).replace(/[\r\n\t]/g, " ") + ";__p.push('" })
                    .replace(/\r/g, "\\r").replace(/\n/g, "\\n").replace(/\t/g, "\\t") +
                    "');}return __p.join('');",
                h = new Function("data", "_", g);
            return f ? h(f, b) : function(a) { return h.call(this, a, b) }
        }
    }();
    z.Gr.defaults = { paddingTop: 0 };
    var Ir = { offsetTop: 0, paddingTop: 0, rx: !1 };
    (0, window.$)(function() { Ir.paddingTop = z.fh(window.document.body).top });
    z.kG = z.Wh(function() { return (+new Date).toString(32).slice(-5) + Math.random().toString(32).slice(-3) });
    z.y(z.Nr, z.hj);
    z.Nr.prototype.EM = function() { return Or(this) };
    z.ka(Qr);
    z.e = Qr.prototype;
    z.e.Hf = function() { return this.vx };
    z.e.B = function(a) { return a.L().B("DIV", this.xg(a).join(" ")) };
    z.e.S = function(a) { return a };
    z.e.Sb = function(a) { return "DIV" == a.tagName };
    z.e.w = function(a, b) {
        b.id && An(a, b.id);
        var c = this.V(), d = !1, f = z.yg(b);
        f &&
            z.A(f,
                function(b) {
                    b == c
                        ? d = !0
                        : b &&
                        (b == c + "-disabled"
                            ? a.gb(!1)
                            : b == c + "-horizontal"
                            ? a.setOrientation(z.lG)
                            : b == c + "-vertical" && a.setOrientation(Yz))
                },
                this);
        d || z.Ag(b, c);
        Sr(this, a, this.S(b));
        return b
    };
    z.e.Uo = function(a) {
        a: {
            var b;
            a = z.yg(a);
            for (var c = 0, d = a.length; c < d; c++)
                if (b = a[c], b = b in Kp ? Kp[b]() : null) {
                    a = b;
                    break a
                }
            a = null
        }
        return a
    };
    z.e.bf = function(a) {
        a = a.m();
        z.fo(a, !0, z.B);
        z.C && (a.hideFocus = !0);
        var b = this.Hf();
        b && z.ug(a, b)
    };
    z.e.jc = function(a) { return a.m() };
    z.e.V = function() { return "goog-container" };
    z.e.xg = function(a) {
        var b = this.V(), c = [b, a.Xb == z.lG ? b + "-horizontal" : b + "-vertical"];
        a.isEnabled() || c.push(b + "-disabled");
        return c
    };
    z.e.hH = function() { return Yz };
    var Yz;
    z.y(z.Tr, z.Q);
    z.lG = "horizontal";
    Yz = "vertical";
    z.e = z.Tr.prototype;
    z.e.OA = null;
    z.e.Fb = null;
    z.e.M = null;
    z.e.Xb = null;
    z.e.zb = !0;
    z.e.qc = !0;
    z.e.fz = !0;
    z.e.$a = -1;
    z.e.wc = null;
    z.e.Tf = !1;
    z.e.JO = !1;
    z.e.uW = !0;
    z.e.kh = null;
    z.e.jc = function() { return this.OA || this.M.jc(this) };
    z.e.At = function() { return this.Fb || (this.Fb = new Ap(this.jc())) };
    z.e.B = function() { this.h = this.M.B(this) };
    z.e.S = function() { return this.M.S(this.m()) };
    z.e.Sb = function(a) { return this.M.Sb(a) };
    z.e.T = function(a) {
        this.h = this.M.w(this, a);
        "none" == a.style.display && (this.zb = !1)
    };
    z.e.C = function() {
        z.Tr.v.C.call(this);
        z.Ch(this, function(a) { a.ya && Vr(this, a) }, this);
        var a = this.m();
        this.M.bf(this);
        this.F(this.zb, !0);
        this.o().g(this, "enter", this.Jz).g(this, "highlight", this.Mz).g(this, "unhighlight", this.Wz)
            .g(this, "open", this.CS).g(this, "close", this.Fz).g(a, "mousedown", this.ze)
            .g(z.Ke(a), "mouseup", this.OR).g(a,
                ["mousedown", "mouseup", "mouseover", "mouseout", "contextmenu"],
                this.GR);
        this.Eg() && Ur(this, !0)
    };
    z.e.Db = function() {
        this.Hb(-1);
        this.wc && this.wc.Mb(!1);
        this.Tf = !1;
        z.Tr.v.Db.call(this)
    };
    z.e.D = function() {
        z.Tr.v.D.call(this);
        this.Fb && (this.Fb.dispose(), this.Fb = null);
        this.M = this.wc = this.kh = this.OA = null
    };
    z.e.Jz = function() { return !0 };
    z.e.Mz = function(a) {
        var b = yn(this, a.target);
        if (-1 < b && b != this.$a) {
            var c = Wr(this);
            c && c.Yc(!1);
            this.$a = b;
            c = Wr(this);
            this.Tf && c.setActive(!0);
            this.uW && this.wc && c != this.wc && (Fp(c, 64) ? c.Mb(!0) : this.wc.Mb(!1))
        }
        b = this.m();
        null != a.target.m() && z.vg(b, "activedescendant", a.target.m().id)
    };
    z.e.Wz = function(a) {
        a.target == Wr(this) && (this.$a = -1);
        this.m().removeAttribute("aria-activedescendant")
    };
    z.e.CS = function(a) {
        (a = a.target) && a != this.wc && a.getParent() == this && (this.wc && this.wc.Mb(!1), this.wc = a)
    };
    z.e.Fz = function(a) {
        a.target == this.wc && (this.wc = null);
        var b = this.m(), c = a.target.m();
        b && a.target.N & 2 && c && so(b, c)
    };
    z.e.ze = function(a) {
        this.qc && (this.Tf = !0);
        var b = this.jc();
        b && pn(b) ? b.focus() : a.preventDefault()
    };
    z.e.OR = function() { this.Tf = !1 };
    z.e.GR = function(a) {
        var b;
        a: {
            b = a.target;
            if (this.kh)
                for (var c = this.m(); b && b !== c;) {
                    var d = b.id;
                    if (d in this.kh) {
                        b = this.kh[d];
                        break a
                    }
                    b = b.parentNode
                }
            b = null
        }
        if (b)
            switch (a.type) {
            case "mousedown":
                b.ze(a);
                break;
            case "mouseup":
                b.Nf(a);
                break;
            case "mouseover":
                b.Gd(a);
                break;
            case "mouseout":
                b.ym(a);
                break;
            case "contextmenu":
                b.gp(a)
            }
    };
    z.e.ye = function() {};
    z.e.od = function() {
        this.Hb(-1);
        this.Tf = !1;
        this.wc && this.wc.Mb(!1)
    };
    z.e.kc = function(a) {
        return this.isEnabled() && this.W() && (0 != z.Ah(this) || this.OA) && this.Mf(a)
            ? (a.preventDefault(), a.stopPropagation(), !0)
            : !1
    };
    z.e.Mf = function(a) {
        var b = Wr(this);
        if (b && "function" == typeof b.kc && b.kc(a) ||
            this.wc && this.wc != b && "function" == typeof this.wc.kc && this.wc.kc(a)) return !0;
        if (a.shiftKey || a.ctrlKey || a.metaKey || a.altKey) return !1;
        switch (a.keyCode) {
        case 27:
            if (this.Eg()) this.jc().blur();
            else return !1;
            break;
        case 36:
            z.Xr(this);
            break;
        case 35:
            Zr(this);
            break;
        case 38:
            if (this.Xb == Yz) as(this);
            else return !1;
            break;
        case 37:
            if (this.Xb == z.lG) this.Jd() ? $r(this) : as(this);
            else return !1;
            break;
        case 40:
            if (this.Xb == Yz) $r(this);
            else return !1;
            break;
        case 39:
            if (this.Xb == z.lG) this.Jd() ? as(this) : $r(this);
            else return !1;
            break;
        default:
            return !1
        }
        return !0
    };
    z.e.K = function(a, b) { z.Tr.v.K.call(this, a, b) };
    z.e.Bl = function(a, b, c) {
        a.dl |= 2;
        a.dl |= 64;
        !this.Eg() && this.JO || a.dc(32, !1);
        a.Zq(!1);
        var d = a.getParent() == this ? yn(this, a) : -1;
        z.Tr.v.Bl.call(this, a, b, c);
        a.ya && this.ya && Vr(this, a);
        a = d;
        -1 == a && (a = z.Ah(this));
        a == this.$a
            ? this.$a = Math.min(z.Ah(this) - 1, b)
            : a > this.$a && b <= this.$a ? this.$a++ : a < this.$a && b > this.$a && this.$a--
    };
    z.e.removeChild = function(a, b) {
        if (a = z.oa(a) ? z.yh(this, a) : a) {
            var c = yn(this, a);
            -1 != c && (c == this.$a ? (a.Yc(!1), this.$a = -1) : c < this.$a && this.$a--);
            (c = a.m()) && c.id && this.kh && z.Kb(this.kh, c.id)
        }
        a = z.Tr.v.removeChild.call(this, a, b);
        a.Zq(!0);
        return a
    };
    z.e.setOrientation = function(a) {
        if (this.m()) throw Error("Component already rendered");
        this.Xb = a
    };
    z.e.W = function() { return this.zb };
    z.e.F = function(a, b) {
        if (b || this.zb != a && this.dispatchEvent(a ? "show" : "hide")) {
            this.zb = a;
            var c = this.m();
            c &&
            (z.P(c, a), this
                .Eg() &&
                Rr(this.jc(), this.qc && this.zb), b || this.dispatchEvent(this.zb ? "aftershow" : "afterhide"));
            return !0
        }
        return !1
    };
    z.e.isEnabled = function() { return this.qc };
    z.e.gb = function(a) {
        this.qc != a &&
            this.dispatchEvent(a ? "enable" : "disable") &&
            (a
                ? (this.qc = !0, z.Ch(this, function(a) { a.YM ? delete a.YM : a.gb(!0) }))
                : (z.Ch(this, function(a) { a.isEnabled() ? a.gb(!1) : a.YM = !0 }), this.Tf = this
                    .qc = !1), this.Eg() && Rr(this.jc(), a && this.zb))
    };
    z.e.Eg = function() { return this.fz };
    z.e.mf = function(a) {
        a != this.fz && this.ya && Ur(this, a);
        this.fz = a;
        this.qc && this.zb && Rr(this.jc(), a)
    };
    z.e.Hb = function(a) { (a = z.Bh(this, a)) ? a.Yc(!0) : -1 < this.$a && Wr(this).Yc(!1) };
    z.e.Yc = function(a) { this.Hb(yn(this, a)) };
    z.e.rF = function(a) { return a.W() && a.isEnabled() && Fp(a, 2) };
    z.y(bs, z.Q);
    bs.prototype.Ia = function(a) {
        this.zw.push(a);
        a.yb(this)
    };
    bs.prototype.C = function() {
        bs.v.C.call(this);
        this.o().g(this, "toggle", this.TS)
    };
    bs.prototype.TS = function(a) { z.A(this.zw, function(b) { a.target !== b && b.pd() && b.Lc(!1, !0) }, this) };
    bs.prototype.D = function() {
        bs.v.D.call(this);
        z.A(this.zw, function(a) { a.dispose() }, this);
        this.zw = []
    };
    z.cs.prototype.gj = function(a, b, c) {
        if (this.LD) {
            var d = this.Oa, f = ds(a, b, d);
            0 == f.length && (f = es(a, b, d));
            b = f
        } else b = ds(a, b, this.Oa);
        c(a, b)
    };
    var gs, is;
    z.y(z.fs, z.H);
    z.e = z.fs.prototype;
    z.e.Gk = 10;
    z.e.io = !0;
    z.e.NE = !1;
    z.e.dN = !1;
    z.e.wM = !1;
    gs = "hilite";
    z.hs = "select";
    z.js = "dismiss";
    is = "canceldismiss";
    z.e = z.fs.prototype;
    z.e.getToken = function() { return this.gc };
    z.e.handleEvent = function(a) {
        var b = this.ae;
        if (a.target == this.M)
            switch (a.type) {
            case gs:
                this.Cg(a.hj);
                break;
            case z.hs:
                var c = !1;
                if (z.pa(a.hj)) {
                    a = a.hj;
                    var d = this.Oa[ns(this, a)], c = !!d && b.KA && b.KA(d);
                    d && !c && this.Dh != a && this.Cg(a)
                }
                c || this.jj();
                break;
            case is:
                z.ms(this);
                break;
            case z.js:
                this.Sj()
            }
    };
    z.e.dr = function(a, b) {
        this.gc != a && (this.gc = a, this.ae.gj(this.gc, this.Gk, (0, z.t)(this.IU, this), b), z.ms(this))
    };
    z.e.zz = function() { return this.Nc };
    z.e.Eb = function() { return this.M.W() };
    z.e.Cg = function(a) {
        var b = ns(this, a), c = this.Oa[b];
        return c && this.ae.KA && this.ae.KA(c) ? !1 : (this.Dh = a, this.M.Cg(a), -1 != b)
    };
    z.e.jj = function() {
        var a = ns(this, this.Dh);
        if (-1 != a) {
            var b = this.Oa[a], c = this.$f.kj(b);
            this.wM ? (this.gc = null, this.Sj()) : this.Rc();
            c || (this.dispatchEvent({ type: "update", hj: b, index: a }), this.wM && this.$f.update(!0));
            return !0
        }
        this.Rc();
        this.dispatchEvent({ type: "update", hj: null, index: null });
        return !1
    };
    z.e.Rc = function() {
        this.Dh = -1;
        this.gc = null;
        this.kd += this.Oa.length;
        this.Oa = [];
        window.clearTimeout(this.pe);
        this.pe = null;
        this.M.Rc();
        this.dispatchEvent("suggestionsupdate");
        this.dispatchEvent(z.js)
    };
    z.e.Sj = function() { this.pe || (this.pe = window.setTimeout((0, z.t)(this.Rc, this), 100)) };
    z.e.lI = function() { return this.pe ? (window.clearTimeout(this.pe), this.pe = null, !0) : !1 };
    z.e.D = function() {
        z.fs.v.D.call(this);
        delete this.wI;
        this.M.dispose();
        this.$f.dispose();
        this.ae = null
    };
    z.e.IU = function(a, b, c) { this.gc == a && this.kn(b, c) };
    z.e.kn = function(a, b) {
        var c = "object" == z.la(b) && b, d = (c ? c.u0() : b) ? ns(this, this.Dh) : -1;
        this.kd += this.Oa.length;
        this.Oa = a;
        for (var f = [], g = 0; g < a.length; ++g) f.push({ id: this.kd + g, data: a[g] });
        g = null;
        this.Nc && (g = this.wI[z.ta(this.Nc)] || this.Nc);
        this.M.PE = g;
        this.M.kn(f, this.gc, this.Nc);
        g = this.io;
        c && void 0 !== c.jR() && (g = c.jR());
        this.Dh = -1;
        (g || 0 <= d) && 0 != f.length && this.gc && (0 <= d ? this.Cg(this.kd + d) : z.ks(this));
        this.dispatchEvent("suggestionsupdate")
    };
    z.e.Fl = function(a) {
        var b = this.$f;
        b.Fl.apply(b, arguments)
    };
    z.e.update = function(a) { this.$f.update(a) };
    z.y(z.ts, z.xc);
    var mG = (z.Zk || z.ai) && !z.E("533.17.9");
    z.e = z.ts.prototype;
    z.e.UZ = !0;
    z.e.hR = !0;
    z.e.HM = !1;
    z.e.qY = !0;
    z.e.pY = !0;
    z.e.cx = null;
    z.e.pb = null;
    z.e.Xp = "";
    z.e.vj = !1;
    z.e.wC = !1;
    z.e.DM = !0;
    z.e.vt = function() { return this.Y };
    z.e.nm = function() { return this.pb };
    z.e.X = function() { return this.pb.value };
    z.e.Da = function(a) { this.pb.value = a };
    z.e.ms = function(a) {
        z.lf(a) && (z.ug(a, "combobox"), z.vg(a, "autocomplete", "list"));
        this.pc.g(a, "focus", this.ye);
        this.pc.g(a, "blur", this.od);
        this.pb || (this.$w.g(a, "keydown", this.FV), z.lf(a) && on(z.Ke(a)) == a && zs(this, a))
    };
    z.e.Fl = function(a) { for (var b = 0; b < arguments.length; b++) this.ms(arguments[b]) };
    z.e.kj = function(a, b) {
        this.pb && us(this, a.toString(), b);
        return !1
    };
    z.e.D = function() {
        z.ts.v.D.call(this);
        null != this.cx && window.clearTimeout(this.cx);
        this.pc.dispose();
        delete this.pc;
        this.$w.dispose();
        this.Fb.dispose();
        z.Cc(this.la)
    };
    z.e.kc = function(a) {
        switch (a.keyCode) {
        case 40:
            if (this.Y.Eb()) return this.HM ? ls(this.Y) : z.ks(this.Y), a.preventDefault(), !0;
            if (!this.Tm) return this.update(!0), a.preventDefault(), !0;
            break;
        case 38:
            if (this.Y.Eb()) return this.HM ? z.ks(this.Y) : ls(this.Y), a.preventDefault(), !0;
            break;
        case 9:
            if (!this.Y.Eb() || a.shiftKey || this.dX) this.Y.Rc();
            else if (this.update(), this.Y.jj() && this.cX) return a.preventDefault(), !0;
            break;
        case 13:
            if (this.Y.Eb()) {
                if (this.update(), this.Y.jj())
                    return a.preventDefault(), a.stopPropagation(),
                        !0
            } else this.Y.Rc();
            break;
        case 27:
            if (this.Y.Eb()) return this.Y.Rc(), a.preventDefault(), a.stopPropagation(), !0;
            break;
        case 229:
            if (!this.vj)
                return this.vj ||
                    (this.pc.g(this.pb, "keyup", this.gK), this.pc.g(this.pb, "keypress", this.fK), this.vj = !0), !0;
            break;
        default:
            this.la && !this.DM && (this.la.stop(), this.la.start())
        }
        return xs(this, a)
    };
    z.e.Lt = function() { return !1 };
    z.e.ye = function(a) { zs(this, a.target || null) };
    z.e.od = function() { mG ? this.cx = window.setTimeout((0, z.t)(this.MK, this), 0) : this.MK() };
    z.e.MK = function() {
        this.pb &&
        (this.pc.pa(this.Fb, "key", this.wq), this.Fb.detach(), this.pc.pa(this.pb, "keyup", this.Lt), this.pc
            .pa(this.pb, "mousedown", this.hK), z
            .C &&
            this.pc.pa(this.pb, "keypress", this.eK), this.vj && As(this), this
            .pb = null, this.la && (this.la.stop(), this.pc.pa(this.la, "tick", this.zq)), this.Y && this.Y.Sj())
    };
    z.e.zq = function() { this.update() };
    z.e.FV = function(a) { this.ye(a) };
    z.e.wq = function(a) {
        this.aJ = a.keyCode;
        this.Y && this.kc(a)
    };
    z.e.fK = function() { this.vj && 229 != this.aJ && As(this) };
    z.e.gK = function(a) { this.vj && (13 == a.keyCode || 77 == a.keyCode && a.ctrlKey) && As(this) };
    z.e.hK = function(a) { this.Y && this.ze(a) };
    z.e.ze = function() {};
    z.e.eK = function(a) { xs(this, a) };
    z.e.update = function(a) {
        if (this.pb && (a || this.X() != this.Xp)) {
            if (a || !this.wC) {
                a = z.os(this.pb)[0];
                var b = this.X();
                a = ws(this, b)[vs(this, b, a)];
                a = this.xM ? String(a).replace(this.xM, "") : a;
                this.Y && (this.Y.Nc = this.pb, this.Y.dr(a, this.X()))
            }
            this.Xp = this.X()
        }
        this.wC = !1
    };
    z.y(z.Bs, z.xc);
    z.e = z.Bs.prototype;
    z.e.EJ = "GET";
    z.e.Fc = void 0;
    z.e.fT = null;
    z.e.WA = null;
    z.e.LC = function(a) { this.EJ = a };
    z.e.aa = function(a) { this.Fc = a };
    z.e.ZZ = function(a, b, c) {
        c = z.se(c.target);
        var d = [];
        if (c)
            try {
                d = Go(c)
            } catch (f) {
            }
        b(a, d)
    };
    z.e.gj = function(a, b, c) {
        var d, f = this.LD;
        d = new z.oj(this.FD);
        z.qj(d);
        d.Ee.set("token", a);
        b = String(b);
        z.qj(d);
        d.Ee.set("max_matches", b);
        f = String(Number(f));
        z.qj(d);
        d.Ee.set("use_similar", f);
        if (d = d.toString())
            a = (0, z.t)(this.ZZ, this, a, c), this.da.Jc() && this.da.abort(), this.WA && z.nd(this.WA), this.WA = z
                .ld(this.da, "success", a), this.da.send(d, this.EJ, this.Fc, this.fT)
    };
    z.e.D = function() {
        this.da.dispose();
        z.Bs.v.D.call(this)
    };
    z.y(z.Gs, z.H);
    z.e = z.Gs.prototype;
    z.e.m = function() { return this.h };
    z.e.Vg = function(a) { this.MM = a };
    z.e.ut = function() { return this.PE };
    z.e.kn = function(a, b, c) {
        this.gc = b;
        this.Oa = a;
        this.Gm = -1;
        this.VL = (0, z.I)();
        this.Nc = c;
        this.lf = [];
        Ks(this)
    };
    z.e.Rc = function() {
        this.zb &&
        (this.zb = !1, Hs(this, !1), 0 < this.iq
            ? (z.Cc(this.Dl), this.Dl = new fr(this.h, this.iq), this.Dl.play())
            : z.P(this.h, !1))
    };
    z.e.show = function() {
        this.zb ||
        (this.zb = !0, Hs(this, !0), 0 < this.iq
            ? (z.Cc(this.Dl), this.Dl = new gr(this.h, this.iq), this.Dl.play())
            : z.P(this.h, !0))
    };
    z.e.W = function() { return this.zb };
    z.e.Cg = function(a) {
        if (-1 == a) Is(this, -1);
        else
            for (var b = 0; b < this.Oa.length; b++)
                if (this.Oa[b].id == a) {
                    Is(this, b);
                    break
                }
    };
    z.e.ga = function() {
        if (this.Nc && this.Mq) {
            var a = this.PE || this.Nc, b;
            b = this.RX ? 3 : 1;
            this.kw && (b ^= 1);
            var c = 65;
            this.NL && (this.h.style.height = "", c |= 32);
            z.Cs(a, b, this.h, b ^ 1, null, null, c);
            this.kw && (this.h.style.visibility = "visible")
        }
    };
    z.e.zz = function() { return this.Nc || null };
    z.e.D = function() {
        this.h &&
        (z.md(this.h, "click", this.vm, !1, this), z.md(this.h, "mousedown", this.wm, !1, this), z
            .md(this.h, "mouseover", this.EH, !1, this), this.ca.removeNode(this.h), this.h = null, this.zb = !1);
        z.Cc(this.Dl);
        this.Va = null;
        z.Gs.v.D.call(this)
    };
    z.e.dL = function(a, b, c) { z.of(c, a.data.toString()) };
    z.e.vm = function(a) {
        var b = Os(this, a.target);
        0 <= b && this.dispatchEvent({ type: z.hs, hj: this.Oa[b].id });
        a.stopPropagation()
    };
    z.e.wm = function(a) {
        a.stopPropagation();
        a.preventDefault()
    };
    z.e.EH = function(a) {
        a = Os(this, a.target);
        0 <= a && !(300 > (0, z.I)() - this.VL) && this.dispatchEvent({ type: gs, hj: this.Oa[a].id })
    };
    z.y(z.Ps, z.fs);
    z.Ps.prototype.Vg = function(a) { this.M.Vg(a) };
    z.Ps.prototype.LC = function(a) { this.ae.LC(a) };
    z.Ps.prototype.aa = function(a) { this.ae.aa(a) };
    z.y(z.Qs, z.Ps);
    z.Qs.prototype.defaults = {
        source: "",
        Ce: 10,
        NZ: !1,
        filter: null,
        format: null,
        xA: null,
        delay: 300,
        separator: null,
        qQ: null,
        multiple: !1,
        ej: null,
        L0: null,
        placeholder: "",
        rd: null,
        render: null
    };
    z.Qs.prototype.defaults.format = function(a) {
        return function(b, c) { return (0, z.ab)(c) && z.ma(b) ? z.ma(b[0]) ? z.mb(b[0].slice(1), a, this) : b : [] }
    }(function(a) {
        var b;
        return (b = nG[this.J.source]) || (b = nG[oG][a[0]]) ? b(a) : a
    });
    var oG = "/autocomplete", nG = {};
    nG[oG] = {
        topic: function(a) {
            return {
                type: a[0],
                name: a[1],
                url_token: a[2],
                avatar: a[3],
                id: a[4],
                answers: a[6],
                alias: a[7],
                raw: a,
                value: a[4],
                label: a[1]
            }
        },
        question: function(a) {
            return {
                type: a[0],
                title: a[1],
                id: a[2],
                url_token: a[3],
                answers: a[4],
                is_star: !!a[5],
                raw: a,
                label: a[1],
                value: a[2]
            }
        },
        people: function(a) {
            return {
                type: a[0],
                fullname: a[1],
                url_token: a[2],
                avatar: a[3],
                id: a[4],
                headline: a[5],
                badges: a[6],
                raw: a,
                label: a[1],
                value: a[4]
            }
        },
        search_link: function(a) { return { type: a[0], raw: a, label: a[1], value: a[1] } }
    };
    nG["/topic/autocomplete"] = function(a) {
        return {
            type: a[0],
            name: a[1],
            url_token: a[2],
            avatar: a[3],
            id: a[4],
            followers: a[5],
            alias: a[6],
            label: a[1]
        }
    };
    nG["/question/autocomplete"] = function(a) {
        return {
            type: a[0],
            title: a[1],
            id: a[2],
            url_token: a[3],
            is_duplicated: Boolean(+a[4]),
            answer_count: a[5],
            raw: a,
            label: a[1],
            value: a[2]
        }
    };
    z.y(Rs, z.ts);
    Rs.prototype.od = z.r;
    Rs.prototype.kc = z.r;
    Rs.prototype.kj = function() { return !1 };
    z.y(z.Ss, z.H);
    z.e = z.Ss.prototype;
    z.e.JC = function(a) { this.eI = a };
    z.e.HC = z.m(30);
    z.e.init = function() {
        if (!this.GI) {
            for (var a = 0, b = this.hd.length; a < b; a++)
                for (var c = z.gf(this.hd[a]), d = 0, f = c.length; d < f; ++d) {
                    var g = c[d], h = g, k = z.ta(h);
                    this.Ey[k] = g;
                    this.Fy && (this.U.g(g, "mouseover", this.WR), this.U.g(g, "mouseout", this.VR));
                    this.yG && (this.U.g(h, "mouseover", this.UR), this.U.g(h, "mouseout", this.SR));
                    this.cm.push(g);
                    this.U.g(h, ["mousedown", "touchstart"], this.HS)
                }
            this.GI = !0
        }
    };
    z.e.D = function() {
        this.U.dispose();
        for (var a = 0, b = this.hd.length; a < b; a++) {
            var c = this.hd[a];
            c.wG = void 0;
            c.Tj = void 0
        }
        this.hd.length = 0;
        this.cm.length = 0;
        this.Ey = null;
        Ws(this);
        z.Ss.v.D.call(this)
    };
    z.e.HS = function(a) {
        var b = z.ta(a.currentTarget);
        this.Qa = this.Ey[b];
        a: {
            for (var b = this.Qa,
                c = b.cloneNode(!0),
                d = b.getElementsByTagName("TEXTAREA"),
                f = c.getElementsByTagName("TEXTAREA"),
                g = 0;
                g < d.length;
                g++) f[g].value = d[g].value;
            switch (b.tagName) {
            case "TR":
                b = z.M("TABLE", null, z.M("TBODY", null, c));
                break a;
            case "TD":
            case "TH":
                b = z.M("TABLE", null, z.M("TBODY", null, z.M("TR", null, c)));
                break a;
            case "TEXTAREA":
                c.value = b.value;
            default:
                b = c
            }
        }
        this.Sc = b;
        this.zG && z.Bg(this.Sc, this.zG || []);
        this.Sc.style.margin = "0";
        this.Sc.style.position =
            "absolute";
        this.Sc.style.visibility = "hidden";
        z.Ke(this.Qa).body.appendChild(this.Sc);
        b = z.In(this.Qa);
        ho(this.Sc, b);
        this.Tb = new z.mh(this.Sc);
        this.Tb.JC(this.eI);
        z.G(this.Tb, "start", this.Hz, !1, this);
        z.G(this.Tb, "end", this.QR, !1, this);
        z.G(this.Tb, "earlycancel", this.Wx, !1, this);
        this.Tb.Cn(a)
    };
    z.e.Hz = function(a) {
        if (this.dispatchEvent(new dt("beforedragstart", 0, a.oF, this.Qa, 0, null))) {
            this.fv = this.Qa.parentNode;
            this.XF = this.LB = Ao(this.Qa);
            this.ny = this.fv;
            this.my ? z.Bg(this.Qa, this.my || []) : this.Qa.style.visibility = "hidden";
            var b = z.Yg(this.Sc);
            this.Sc.uR = b.width / 2;
            this.Sc.tR = b.height / 2;
            this.Sc.style.visibility = "";
            this.CD && (this.Qa.style.display = "none");
            Vs(this, this.Qa);
            this.Qa.style.display = "";
            z.G(this.Tb, "drag", this.XR, !1, this);
            this.dispatchEvent(new dt("dragstart", 0, a.oF, this.Qa, 0, this.Tb))
        } else
            a.preventDefault(),
                this.Wx()
    };
    z.e.XR = function(a) {
        var b = z.In(this.Sc), b = new z.Ge(b.x + this.Sc.uR, b.y + this.Sc.tR), c;
        a: {
            c = null;
            if ("none" != this.Qa.style.display) {
                c = this.Qa.parentNode;
                var d = go(c);
                if (Xs(b, d)) break a
            }
            for (var d = 0, f = this.hd.length; d < f; d++) {
                var g = this.hd[d];
                if (g != c && Xs(b, g.bm)) {
                    c = g;
                    break a
                }
            }
            c = null
        }
        var h;
        if (c) {
            if (null == c) throw Error("getHoverNextItem_ called with null hoverList.");
            var k, l, d = !1, f = void 0;
            switch (c.wG) {
            case 0:
                h = b.y;
                k = Zs;
                l = bt;
                break;
            case 4:
                d = !0;
            case 2:
                h = b.x;
                k = $s;
                l = bt;
                break;
            case 5:
                d = !0;
            case 3:
                h = b.x, k = at, l = ct
            }
            for (var g =
                         null,
                n,
                q = z.gf(c),
                v = 0,
                F = q.length;
                v < F;
                v++) {
                var K = q[v];
                if (K != this.Qa) {
                    var O = k(K.bm);
                    if (d) {
                        var ca = Ys(K, b);
                        z.ja(f) || (f = ca);
                        l(h, O) && (void 0 == n || ca < f || ca == f && (l(O, n) || O == n)) && (g = K, n = O);
                        ca < f && (f = ca)
                    } else l(h, O) && (void 0 == n || l(O, n)) && (g = K, n = O)
                }
            }
            h = null !== g && Ys(g, b) > f ? null : g
        } else h = null;
        if (!this.dispatchEvent(new dt("beforedragmove", 0, a, this.Qa, 0, this.Tb))) return !1;
        if (c)
            this
                .CD
                ? this.Qa.parentNode == c && Ao(this.Qa) == h || c.insertBefore(this.Qa, h)
                : h && (this.XF = h), this.Qa.style.display = "", c.Tj && z.Ag(c, c.Tj);
        else
            for (this.TT ||
                    (this.Qa.style.display = "none"), h = 0, k = this.hd.length;
                h < k;
                h++) l = this.hd[h], l.Tj && z.Cg(l, l.Tj);
        c != this.ny && (this.ny = c, Vs(this, this.Qa));
        this.dispatchEvent(new dt("dragmove", 0, a, this.Qa, 0, this.Tb));
        return !1
    };
    z.e.Wx = function() {
        Ws(this);
        this.Tb = this.Sc = this.LB = this.fv = this.ny = this.Qa = null;
        for (var a = 0, b = this.hd.length; a < b; a++) this.hd[a].bm = null;
        a = 0;
        for (b = this.cm.length; a < b; a++) this.cm[a].bm = null
    };
    z.e.QR = function(a) {
        if (!this.dispatchEvent(new dt("beforedragend", 0, a, this.Qa, 0, this.Tb))) return !1;
        this.CD || this.fv.insertBefore(this.Qa, this.XF);
        Ws(this);
        this.dispatchEvent(new dt("dragend", 0, a, this.Qa, 0, this.Tb));
        this.Wx();
        return !0
    };
    z.e.WR = function(a) { z.Bg(a.currentTarget, this.Fy || []) };
    z.e.VR = function(a) { z.Dg(a.currentTarget, this.Fy || []) };
    z.e.UR = function(a) { z.Bg(a.currentTarget, this.yG || []) };
    z.e.SR = function(a) { z.Dg(a.currentTarget, this.yG || []) };
    z.y(dt, z.Lc);
    var gt;
    z.y(z.et, z.Q);
    z.e = z.et.prototype;
    z.e.vg = null;
    z.e.oU = 10;
    z.e.Am = !1;
    z.e.B = function() { this.h = this.L().B("INPUT", { type: "text" }) };
    z.e.T = function(a) {
        z.et.v.T.call(this, a);
        this.Wb || (this.Wb = a.getAttribute("label") || "");
        on(z.Ke(a)) == a && (this.Am = !0, z.Cg(this.m(), this.Tp));
        ft() && (this.m().placeholder = this.Wb);
        z.vg(this.m(), "label", this.Wb)
    };
    z.e.C = function() {
        z.et.v.C.call(this);
        var a = new z.xd(this);
        a.g(this.m(), "focus", this.BH);
        a.g(this.m(), "blur", this.Cz);
        ft()
            ? this.U = a
            : (z.B && a.g(this.m(), ["keypress", "keydown", "keyup"], this.dS), a
                .g(z.Te(z.Ke(this.m())), "load", this.$S), this.U = a, ht(this));
        this.Bi();
        this.m().nU = this
    };
    z.e.Db = function() {
        z.et.v.Db.call(this);
        this.U && (this.U.dispose(), this.U = null);
        this.m().nU = null
    };
    z.e.D = function() {
        z.et.v.D.call(this);
        this.U && (this.U.dispose(), this.U = null)
    };
    z.e.Tp = "label-input-label";
    z.e.BH = function() {
        this.Am = !0;
        z.Cg(this.m(), this.Tp);
        if (!ft() && !it(this) && !this.rT) {
            var a = this, b = function() { a.m() && (a.m().value = "") };
            z.C ? z.vd(b, 10) : b()
        }
    };
    z.e.Cz = function() {
        ft() || (this.U.pa(this.m(), "click", this.BH), this.vg = null);
        this.Am = !1;
        this.Bi()
    };
    z.e.dS = function(a) {
        27 == a.keyCode &&
        ("keydown" == a.type
            ? this.vg = this.m().value
            : "keypress" == a.type ? this.m().value = this.vg : "keyup" == a.type && (this.vg = null), a
            .preventDefault())
    };
    z.e.hS = function() { it(this) || (this.m().value = "", z.vd(this.zR, 10, this)) };
    z.e.zR = function() { it(this) || (this.m().value = this.Wb) };
    z.e.$S = function() { this.Bi() };
    z.e.hasFocus = function() { return this.Am };
    z.e.clear = function() {
        this.m().value = "";
        null != this.vg && (this.vg = "")
    };
    z.e.reset = function() { it(this) && (this.clear(), this.Bi()) };
    z.e.Da = function(a) {
        null != this.vg && (this.vg = a);
        this.m().value = a;
        this.Bi()
    };
    z.e.X = function() { return null != this.vg ? this.vg : it(this) ? this.m().value : "" };
    z.e.Bi = function() {
        var a = this.m();
        ft() ? this.m().placeholder != this.Wb && (this.m().placeholder = this.Wb) : ht(this);
        z.vg(a, "label", this.Wb);
        it(this)
            ? (a = this.m(), z.Cg(a, this.Tp))
            : (this.rT || this.Am || (a = this.m(), z.Ag(a, this.Tp)), ft() || z.vd(this.MX, this.oU, this))
    };
    z.e.gb = function(a) {
        this.m().disabled = !a;
        z.po(this.m(), this.Tp + "-disabled", !a)
    };
    z.e.isEnabled = function() { return !this.m().disabled };
    z.e.MX = function() { !this.m() || it(this) || this.Am || (this.m().value = this.Wb) };
    var KD = {
        sH: function(a, b) {
            return window.$.get(b ? "/node/AnswerFullVoteInfoV2" : "/node/AnswerVoteInfoV2",
                { params: { answer_id: a } })
        },
        On: function(a, b) {
            return window.$.post("/node/AnswerVoteBarV2",
                { method: b, params: { answer_id: a } },
                function(a) { a && a.r && 1991832 !== a.errcode && z.T.alert("\x3cp\x3e" + a.msg + "\x3c/p\x3e") })
        },
        GC: function(a, b) {
            return window.$.post("/node/AnswerMetaV2",
                { method: "set_copyright", params: { answer_id: a, copyright_status: Number(b) } })
        }
    };
    z.y(ot, z.ts);
    ot.prototype.kj = function(a) {
        var b = ot.v.kj.call(this, a);
        a.select(this.Y.zz());
        return b
    };
    z.y(pt, z.Bs);
    pt.prototype.gX = ["根话题", "未归类话题"];
    pt.prototype.sn = function(a) { this.vC = a };
    pt.prototype.gj = function(a, b, c) {
        var d = (0, z.t)(function(a, b) {
                for (var d = [], k, l = 0; l < b.length; l++)
                    for (var n = 1; n < b[l].length; n++) {
                        k = b[l][n];
                        var q = !0;
                        this.RG && z.A(this.gX, function(a) { k[2] === a && (q = !1) });
                        q && d.push(k)
                    }
                this.vC && (d = this.vC(d, a));
                c(a, d)
            },
            this);
        pt.v.gj.call(this, a, b, d);
        this.Y.dispatchEvent({ type: pG })
    };
    z.y(qt, z.ts);
    z.e = qt.prototype;
    z.e.kj = function(a) {
        var b = ot.v.kj.call(this, a), c = this.Y.zz(), d = this.vt();
        d.wL = a;
        d.dispatchEvent("select");
        c.value = "";
        return b
    };
    z.e.Da = function() {};
    z.e.update = z.Kr(300,
        function(a) {
            var b = z.mr(this.X());
            !b ||
                "搜索用户" === b ||
                "搜索话题" === b ||
                "在这里输入问题" === b ||
                z.rb(this.Y.Ty || [], b) ||
                (b ? (0, window.unescape)((0, window.encodeURIComponent)(b)).length : 0) < this.FJ ||
                b === this.pJ
                ? (this.Y.Sj(), this.Xp = b)
                : (this.pJ = null, this.Y.dispatchEvent({ type: qG }), qt.v.update.call(this, a))
        },
        !1);
    z.e.ye = function(a) {
        this.Y && z.ms(this.Y);
        a.target !== this.pb &&
        (this.pb = a.target || null, this.la && (this.la.start(), this.pc.g(this.la, "tick", this.zq)), this
            .Xp = this.X(), ys(this));
        this.la && this.la.start();
        this.update(!0)
    };
    z.e.od = function() {
        this.la && this.la.stop();
        this.Y && this.Y.Sj()
    };
    z.e.kc = function(a) {
        if (13 === a.keyCode) {
            if (this.Y.Eb()) {
                if (this.Y.jj()) return a.preventDefault(), a.stopPropagation(), !0;
                a.preventDefault();
                a.stopPropagation();
                this.Y.gc = "";
                this.Y.Rc();
                this.update(!0);
                return !1
            }
            a.stopPropagation();
            a.preventDefault();
            return !1
        }
        qt.v.kc.call(this, a)
    };
    z.e.ms = function(a) {
        qt.v.ms.call(this, a);
        this.pc.g(a,
            "mousedown",
            function(a) {
                a.stopPropagation();
                return !0
            })
    };
    z.y(rt, qt);
    rt.prototype.kj = function(a) {
        var b = this.vt();
        b.wL = a;
        b.dispatchEvent("select");
        return !1
    };
    z.y(z.st, z.Ps);
    var qG = "before_update", pG = "before_request";
    z.e = z.st.prototype;
    z.e.qG = !0;
    z.e.EX = function(a, b, c) {
        z.Od(c,
            function(a) {
                a = Ls(this, a, this.gc);
                this.ca.appendChild(this.h, a)
            },
            a);
        z.ef(a.h,
            a.ca.B("div",
                "zh-question-suggest-info",
                [
                    a = a.ca.B("a",
                        { href: "javascript:;", title: "关闭", name: "close", id: "zh-question-suggest-info-close" },
                        [a.ca.B("span", "x-m"), "不是"]), "您想问的是不是下面的问题？"
                ]),
            0);
        z.G(a,
            "click",
            function() {
                var a = this.$f;
                a.od();
                this.Rc();
                a.pJ = a.X()
            },
            !1,
            this)
    };
    z.e.GX = function(a, b, c) {
        0 === c.length
            ? this.Rc()
            : (z.Od(c,
                function(a) {
                    a = Ls(this, a, this.gc);
                    this.ca.appendChild(this.h, a)
                },
                a), b = a.ca.B("div", "zh-question-topic-autocomplete-plaintext", ["建议添加的话题", a.ca.B("span", "x-m")]), z
                .ef(a.h, b, 0), z.sm.fb &&
                z.G(b,
                    "click",
                    function() {
                        this.$f.od();
                        this.Rc()
                    },
                    !1,
                    this))
    };
    z.e.Ag = function() { return this.wL };
    z.e.sn = function(a) { this.ae.sn(a) };
    z.e.Rc = function() { if (this.qG) return z.st.v.Rc.call(this) };
    z.e.jj = function() { return -1 === ns(this, this.Dh) ? !1 : z.st.v.jj.call(this) };
    z.e.Sj = function() { z.sm.fb ? z.ld(window.document, "click", (0, z.t)(this.Rc, this)) : z.st.v.Sj.call(this) };
    z.y(z.tt, z.hj);
    var ut = "view", rG = "零一二三四五六七八九十".split("");
    z.e = z.tt.prototype;
    z.e.w = function(a) {
        this.h = a;
        this.Zg = z.L("zm-tag-editor-labels", this.h);
        this.Ru && (this.data = vt(this));
        z.wt(this);
        this.oe();
        this.hc()
    };
    z.e.gm = function() {
        this.Hc ||
        (this.Hc = z.M("div",
            "zm-tag-editor-editor",
            [
                this.Lo = z.M("div", "zg-section zg-clear"), this.qe = z
                .M("div",
                    "zg-section zm-tag-editor-command-buttons-wrap",
                    [
                        this.ab = z.M("input", { "class": "zg-form-text-input zg-mr15", type: "text" }), z
                        .M("a",
                            { "class": "zg-mr15 zg-btn-blue", href: "#", name: "add", style: "display:none;" },
                            "添加"), this.TG = z.M("a", { href: "#", name: "close" }, "完成")
                    ]), this.Ju = z.M("div",
                    { className: "zm-tag-editor-maxcount zg-section", style: "display:none;" },
                    [
                        z.M("span",
                            {},
                            "最多只能为一个问题绑定 " +
                            this.bq +
                            " 个话题"), z.M("a", { href: "#", name: "close" }, "完成")
                    ])
            ]), z.df(this.Hc, this.Zg), this.cf &&
            (this.SA = new z.et(this.cf), this.SA.w(this.ab), this.ab.title = this.cf), this.Pf(this.qe))
    };
    z.e.Pf = function(a, b) {
        this.O = new z.st(b || "/topic/autocomplete", this.ab, null, null, a, !0);
        this.O.Vg(!0);
        this.O.Gk = this.Ce;
        this.O.sn(this.Zf());
        this.O.Ty = [this.cf];
        this.o().g(this.O, "select", this.Uf);
        this.o().g(this.O, "suggestionsupdate", this.$n)
    };
    z.e.Wy = function(a) { return z.ob(this.data, function(b) { return b[0] === a[1] }) };
    z.e.Zf = function() { return (0, z.t)(function(a, b) { return yt(this, xt(this, a), b) }, this) };
    z.e.$n = function() { 1 < this.O.Oa.length && !this.O.Oa[0][4] && z.ks(this.O) };
    z.e.hc = function() {
        this.o().g(this.h, "click", this.Xa);
        z.sp && this.o().g(z.sp, "anon_change", this.jk)
    };
    z.e.jk = function(a) {
        a.xb ? z.S.add(this.h, "zm-tag-editor-disabled") : z.S.remove(this.h, "zm-tag-editor-disabled")
    };
    z.e.Xa = function(a) {
        var b = this.vh(a.target);
        if (b && b.name)
            switch (a.preventDefault(), b.name) {
            case "edit":
                this.Be(!0);
                break;
            case "add":
                (a = z.mr(nr(this.ab.value))) && a !== this.ab.title && this.Pe("", a);
                break;
            case "close":
                this.Be(!1);
                break;
            case "remove":
                this.EB(b)
            }
    };
    z.e.Be = z.Dq(function(a) {
            if (a && (this.dispatchEvent("start_editing"), !1 === this.dispatchEvent("beforeedit"))) return;
            this.status = a ? "edit" : ut;
            this.gm();
            this.Nd();
            this.oe();
            z.zt(this)
        },
        !0);
    z.e.EB = function(a) {
        var b = a.id.split("-")[1], c = z.zo(a).innerHTML;
        this.Mu && this.data.length <= this.Mu
            ? z.T.message("请至少绑定" + rG[this.Mu] + "个话题")
            : (this.data = z.lb(this.data, function(a) { return b ? String(a[3]) !== b : a[1] !== c }), this.Ym(b))
    };
    z.e.Ym = function(a) {
        if (!this.zv || !this.zv.Jc()) {
            this.zv = new z.ep(!0);
            var b = new z.uj;
            b.add("qid", this.qa).add("question_id", this.qa).add("topic_id", a);
            this.o().ta(this.zv, "complete", this.LS);
            this.zv.ajax(this.AX, b.toString())
        }
    };
    z.e.LS = function(a) {
        a = z.Dn(a.target);
        a.r ? z.T.message(a.msg) : (this.dispatchEvent("remove_tag"), z.wt(this), this.Nd(), z.zt(this))
    };
    z.e.oe = function() {
        this.status === ut
            ? (z.P(this.Zg, !0), this.Hc && z.P(this.Hc, !1))
            : (z.P(this.Zg, !1), this.Hc && this.isEnabled && z.P(this.Hc, !0), this.Ju && z.P(this.Ju, !1))
    };
    z.e.Pe = function(a, b) {
        this.Pb ||
        (this.dispatchEvent("add_tag"), this.Pb = !0, this.xhr = new z.ep(!0), this.o()
            .ta(this.xhr, "complete", this.ix), this.xhr
            .ajax(this.pO,
                "qid\x3d" +
                this.qa +
                "\x26question_id\x3d" +
                this.qa +
                "\x26topic_id\x3d" +
                a +
                "\x26topic_text\x3d" +
                (0, window.encodeURIComponent)(b)))
    };
    z.e.Uf = function() {
        var a = "", b = "", c = this.O.Ag().slice(1);
        3 < c.length ? (a = c[3], b = c[0]) : b = c[1];
        z.ob(this.data, function(c) { return c[3] && String(c[3]) === a || c[0] === b }) || (a || b) && this.Pe(a, b, c)
    };
    z.e.ix = function() {
        this.Pb = !1;
        var a = z.Dn(this.xhr);
        this.nj(a);
        z.zt(this)
    };
    z.e.Cl = z.m(32);
    z.e.nj = function(a) {
        var b = null;
        a && a.r
            ? a.notify ? z.tn(a.notify) : z.T.message(a.msg)
            : (4 < a.length && z.tn(a[4]), this.BC = b = a, this.data.push(b), z.At(this), z.wt(this), this.Nd(), this
                .ab.value = "", this.dispatchEvent("select"))
    };
    z.e.bH = function(a) { return z.lr(a, "nor", !1) };
    z.e.Nd = function() {
        var a = z.mb(this.data,
            function(a) {
                return [
                    '\x3cspan class\x3d"zm-tag-editor-edit-item"\x3e', this.bH(a),
                    a.xZ
                    ? ""
                    : '\x3ca id\x3d"rmid-' +
                    a[3] +
                    '" href\x3d"#" class\x3d"zg-r3px zm-tag-editor-remove-button" name\x3d"remove"\x3e\x3c/a\x3e',
                    "\x3c/span\x3e"
                ].join("")
            },
            this);
        this.Lo.innerHTML = a.join("")
    };
    z.e.Ag = function() { return this.BC };
    z.e.gb = function(a) {
        this.isEnabled = a;
        this.status = ut;
        this.oe()
    };
    z.y(z.Bt, z.tt);
    z.e = z.Bt.prototype;
    z.e.w = function(a) {
        if (this.isEnabled = !a.getAttribute("data-disabled")) z.Bt.v.w.call(this, a), this.Be(!0), z.P(this.TG, !1)
    };
    z.e.Pf = function(a) {
        var b;
        this.IA && (b = "/topic/autocomplete?no_create\x3dtrue");
        z.Bt.v.Pf.call(this, a, b);
        this.O.ae.RG = !1
    };
    z.e.Zf = function() {
        return (0, z.t)(function(a, b) {
                return z.lb(a,
                    function(a) {
                        return 3 >= a.length
                            ? !1
                            : z.Mn(this.data,
                                function(d) {
                                    return d[1] === a[2]
                                        ? b === a[1] ? (a[0] = "plain_text", a[1] = '"' + b + '"已在现有列表中', !0) : !1
                                        : !0
                                })
                    },
                    this)
            },
            this)
    };
    z.e.Pe = function(a, b) {
        this.Pb ||
        (this.Pb = !0, this.xhr = new z.ep(!0), this.o()
            .ta(this
                .xhr,
                "complete",
                this.ix), a || (a = -1), this.IA
            ? this.xhr.ajax("/topic/add",
                "tid\x3d" + this.eg + "\x26pid\x3d" + a + "\x26topic_text\x3d" + (0, window.encodeURIComponent)(b))
            : this.xhr.ajax("/topic/add",
                "tid\x3d" + this.eg + "\x26cid\x3d" + a + "\x26topic_text\x3d" + (0, window.encodeURIComponent)(b)))
    };
    z.e.bH = function(a) {
        return '\x3ca class\x3d"nor" href\x3d"/topic/' + a[1] + '/organize"\x3e' + a[0] + "\x3c/a\x3e"
    };
    z.e.Ym = function(a) {
        if (!this.da || !this.da.Jc()) {
            var b = new z.ep(!0);
            this.o().g(b,
                "success",
                function() {
                    var c = z.Dn(b);
                    c.r
                        ? z.T.message(c.msg)
                        : (z.wt(this), this.Nd(), this.dispatchEvent({ type: "remove_tag", data: { id: a } }))
                });
            this.IA
                ? b.ajax(this.cL, "cid\x3d" + this.eg + "\x26pid\x3d" + a)
                : b.ajax(this.cL, "pid\x3d" + this.eg + "\x26cid\x3d" + a);
            this.da = b
        }
    };
    z.y(Ct, z.tt);
    z.e = Ct.prototype;
    z.e.w = function(a) {
        Ct.v.w.call(this, a);
        this.Be(!0);
        z.A(z.Me("a", null, a), function(a) { z.P(a, !1) });
        this.o().g(this.ab,
            "focus",
            function() {
                this.Pr.val() && !this.EG && (this.EG = !0, this.qw());
                this.placeholder && (this.placeholder.bl("搜索话题"), rn(this.placeholder))
            });
        this.WI = new Ap;
        this.WI.attach(this.ab);
        this.o().g(this.WI,
            "key",
            function(a) {
                8 === a.keyCode &&
                (1 === this.ab.value.length &&
                (this.fF = !0, this.gP = (0, window.setTimeout)((0, z.t)(function() {
                        this.fF = !1;
                        (0, window.clearTimeout)(this.gP)
                    },
                    this))), this.ab.value.length ||
                    this.fF ||
                    (this.data.pop(), this.Nd(), this.dispatchEvent("remove_tag")))
            });
        this.SY = new z.oi(this.qw, 2E3, this);
        this.o().g(this.Pr[0],
            "keyup",
            function() {
                var a = this.Pr.val();
                this.$v !== a && (this.SY.fire(), this.$v = a)
            });
        this.o().g(this,
            ["remove_tag", "add_tag"],
            function() {
                Dt(this);
                0 < this.data.length && this.placeholder && (this.placeholder.bl("搜索话题"), rn(this.placeholder));
                5 <= this.data.length
                    ? (this.gb(!1), this.Kr.show(), this.placeholder && this.placeholder.hide(), this.Pw.hide())
                    : (this.gb(!0), this.Kr.hide(), this.placeholder &&
                        this.placeholder.show(), this.Pw.show(), this.Kr.removeClass("light"))
            })
    };
    z.e.Wy = function(a) { return z.ob(this.data, function(b) { return b[1] === a[1] }) };
    z.e.Ym = function() {
        this.dispatchEvent("remove_tag");
        z.wt(this);
        this.Nd()
    };
    z.e.gm = function() {
        this.Hc ||
        (Ct.v.gm.call(this), z.S.add(this.Hc, "zg-clear"), z.S.set(this.Lo, "zg-inline"), z.S.add(this.qe, "zg-left"), z
            .S.remove(this.qe, "zg-section"), z.S.set(this.ab, "zu-question-suggest-topic-input"), z.S
            .add(this.ab, "label-input-label"), this.Sr = (0, window
                .$)("\x3cdiv class\x3d'sug-con zg-clear' style\x3d'display:none;'\x3e\x3c/div\x3e")
            .append("\x3cspan class\x3d'zg-gray-normal zg-left tip'\x3e推荐添加\x3c/span\x3e")
            .append(this.BN = (0, window.$)("\x3cspan class\x3d'sugs zg-clear zg-inline'\x3e\x3c/span\x3e")).append(this
                .Qw =
                (0, window.$)('\x3cimg data-src\x3d"' + z.sm.bD + '/img/spinner2.gif"\x3e')), this.Sr
            .insertAfter(this.h), this.Sr.on("click",
            "a[name\x3d'add']",
            (0, z.t)(function(a) {
                    a = a.currentTarget;
                    5 > this.data.length
                        ? this.Pe((0, window.$)(a).attr("data-id"), (0, window.$)(a).attr("data-text"))
                        : this.Kr.addClass("light")
                },
                this)), this.Pw = (0, window
            .$)('\x3clabel for\x3d"topic" class\x3d"zg-icon icon-magnify"\x3e\x3c/label\x3e'), (0, window.$)(this.qe)
            .prepend(this.Pw), this.placeholder = new z.Wj(this.ab, { text: "搜索话题", cF: !0 }), (0, window.$)(this.qe)
            .append(this.Kr =
                (0, window.$)("\x3clabel class\x3d'err-tip' style\x3d'display:none;'\x3e最多添加五个话题\x3c/label\x3e")), this
            .o().g(this.Hc, "click", this.sZ))
    };
    z.e.sZ = function(a) {
        z.yr(this.h, a.target) || (a = z.L("zu-question-suggest-topic-input", this.Hc), z.ah(a) && a.focus())
    };
    z.e.qw = function() {
        this.EG &&
        (this.$v = this.Pr.val(), 8 > this.$v.length
            ? (this.mr = [], Dt(this))
            : (this.nr && this.nr.abort(), this.nr = new z.ep(!1), this.o().g(this.nr, "success", this.eW), this.nr
                .ajax("/topic-question/autocomplete?token\x3d" + this.$v + "\x26max_matches\x3d5\x26use_similar\x3d0",
                    "GET"), this.Qw.attr("src", this.Qw.attr("data-src")).show()))
    };
    z.e.eW = function() {
        this.mr = z.Dn(this.nr)[0].slice(1);
        Dt(this)
    };
    z.e.Nd = function() {
        var a = [];
        z.A(this.data,
            function(b) {
                a.push([
                    '\x3cdiv class\x3d"zm-tag-editor-edit-item"\x3e\x3cspan\x3e', b[0],
                    '\x3c/span\x3e\x3ca id\x3d"rmid-', b[3],
                    '" href\x3d"#" class\x3d"zg-r3px zm-tag-editor-remove-button" name\x3d"remove"\x3e\x3c/a\x3e\x3c/div\x3e'
                ].join(""))
            },
            this);
        this.Lo.innerHTML = a.join("")
    };
    z.e.reset = function() {
        this.data = [];
        z.wt(this);
        this.Nd()
    };
    z.e.EB = function(a) {
        var b = a.id.split("-")[1], c = z.zo(a).innerHTML;
        this.data = z.lb(this.data, function(a) { return b ? String(a[3]) !== b : a[1] !== c });
        this.Ym(b)
    };
    z.e.Pe = function(a, b) {
        var c = [b, b, "", a];
        this.BC = c;
        this.data.push(c);
        z.wt(this);
        this.Nd();
        this.ab.value = "";
        this.dispatchEvent("select");
        this.dispatchEvent("add_tag")
    };
    z.e.gb = function(a) { this.ab && z.P(this.ab, a) };
    z.e.trackEvent = function() {
        if (this.mr) {
            var a = 0, b = this.data.length;
            z.A(this.data, function(b) { z.A(this.mr, function(d) { b[1] === d[1] && a++ }, this) }, this);
            z.U.Bb({ type: "ga_click_add_question", data: { aw: a, total: b } })
        }
    };
    z.y(z.Et, z.Bt);
    z.Et.prototype.Pe = function(a) {
        this.Pb ||
        (this.Pb = !0, this.xhr = new z.ep(!0), this.o().ta(this.xhr, "complete", this.ix), this.xhr
            .ajax(this.lF, "tid\x3d" + a + "\x26method\x3dadd"))
    };
    z.Et.prototype.Ym = function(a) {
        this.Pb ||
        (this.Pb = !0, this.xhr = new z.ep(!0), this.o().g(this.xhr,
            "complete",
            function() {
                z.wt(this);
                this.Nd();
                this.Pb = !1
            }), this.xhr.ajax(this.lF, "tid\x3d" + a + "\x26method\x3ddel"))
    };
    z.y(Ft, z.xc);
    Ft.prototype.restore = function(a) {
        var b = this.Dv();
        a || this.dispose();
        return b
    };
    z.y(z.Gt, Ft);
    z.Gt.prototype.Kq = function(a) {
        z.N(z.Ht(this, !0));
        z.N(z.Ht(this, !1));
        return a
    };
    z.Gt.prototype.Dv = function() {
        var a = null, b = z.Ht(this, !this.uC), c = z.Ht(this, this.uC);
        if (b && c) {
            var a = b.parentNode, b = z.kb(a.childNodes, b), d = c.parentNode, c = z.kb(d.childNodes, c);
            d == a && (this.uC ? b-- : c--);
            a = z.ou(a, b, d, c);
            a = this.Kq(a);
            a.select()
        } else this.Kq();
        return a
    };
    z.Gt.prototype.D = function() {
        this.Kq();
        this.ca = null
    };
    z.y(z.It, z.Ld);
    z.e = z.It.prototype;
    z.e.setPosition = function(a, b, c) {
        if (this.node = a) this.ec = z.pa(b) ? b : 1 != this.node.nodeType ? 0 : this.Xc ? -1 : 1;
        z.pa(c) && (this.depth = c)
    };
    z.e.mh = function(a) {
        this.node = a.node;
        this.ec = a.ec;
        this.depth = a.depth;
        this.Xc = a.Xc;
        this.Is = a.Is
    };
    z.e.clone = function() { return new z.It(this.node, this.Xc, !this.Is, this.ec, this.depth) };
    z.e.gr = z.m(34);
    z.e.next = function() {
        var a;
        if (this.cl) {
            if (!this.node || this.Is && 0 == this.depth) throw z.Nd;
            a = this.node;
            var b = this.Xc ? -1 : 1;
            if (this.ec == b) {
                var c = this.Xc ? a.lastChild : a.firstChild;
                c ? this.setPosition(c) : this.setPosition(a, -1 * b)
            } else
                (c = this.Xc ? a.previousSibling : a.nextSibling)
                    ? this.setPosition(c)
                    : this.setPosition(a.parentNode, -1 * b);
            this.depth += this.ec * (this.Xc ? -1 : 1)
        } else this.cl = !0;
        a = this.node;
        if (!this.node) throw z.Nd;
        return a
    };
    z.e.Mm = function() { return this.cl };
    z.e.equals = function(a) { return a.node == this.node && (!this.node || a.ec == this.ec) };
    z.e.splice = function(a) {
        var b = this.node, c = this.Xc ? 1 : -1;
        this.ec == c && (this.ec = -1 * c, this.depth += this.ec * (this.Xc ? -1 : 1));
        this.Xc = !this.Xc;
        z.It.prototype.next.call(this);
        this.Xc = !this.Xc;
        for (var c = z.na(arguments[0]) ? arguments[0] : arguments, d = c.length - 1; 0 <= d; d--) z.df(c[d], b);
        z.N(b)
    };
    z.e = Jt.prototype;
    z.e.Zb = function() {
        var a = this.Ic();
        return 1 == a.nodeType ? a : a.parentNode
    };
    z.e.Ih = function() { return !1 };
    z.e.wa = function() { return z.Ke(z.C ? this.Ic() : this.Z()) };
    z.e.eb = function() { return z.Te(this.wa()) };
    z.e.containsNode = function(a, b) { return this.lh(z.Gu(a), b) };
    z.e.fj = function(a) {
        this.isCollapsed() || this.Yf();
        return this.insertNode(a, !0)
    };
    z.y(Qt, z.It);
    z.y(Rt, Jt);
    Rt.prototype.lh = function(a, b) {
        var c = z.Lt(this), d = z.Lt(a);
        return (b ? z.ob : z.Mn)(d, function(a) { return z.ob(c, function(c) { return c.lh(a, b) }) })
    };
    Rt.prototype.insertNode = function(a, b) {
        b ? z.cf(a, this.Z()) : z.df(a, this.ka());
        return a
    };
    Rt.prototype.pr = function(a, b) {
        this.insertNode(a, !0);
        this.insertNode(b, !1)
    };
    z.y(z.St, Qt);
    z.e = z.St.prototype;
    z.e.Ct = function() { return 3 != this.node.nodeType ? -1 : this.node == this.Aa ? this.Ea : 0 };
    z.e.yt = function() {
        return 3 != this.node.nodeType ? -1 : this.node == this.va ? this.Ca : this.node.nodeValue.length
    };
    z.e.Z = function() { return this.Aa };
    z.e.ka = function() { return this.va };
    z.e.Pp = function() { return this.Mm() && this.node == this.va && (!this.Ca || 1 != this.ec) };
    z.e.next = function() {
        if (this.Pp()) throw z.Nd;
        return z.St.v.next.call(this)
    };
    z.e.gr = z.m(33);
    z.e.mh = function(a) {
        this.Aa = a.Aa;
        this.va = a.va;
        this.Ea = a.Ea;
        this.Ca = a.Ca;
        this.Qf = a.Qf;
        z.St.v.mh.call(this, a)
    };
    z.e.clone = function() {
        var a = new z.St(this.Aa, this.Ea, this.va, this.Ca, this.Qf);
        a.mh(this);
        return a
    };
    z.e = Tt.prototype;
    z.e.Mj = "";
    z.e.set = function(a) { this.Mj = "" + a };
    z.e.append = function(a, b, c) {
        this.Mj += a;
        if (null != b) for (var d = 1; d < arguments.length; d++) this.Mj += arguments[d];
        return this
    };
    z.e.clear = function() { this.Mj = "" };
    z.e.toString = function() { return this.Mj };
    z.e = Ut.prototype;
    z.e.yz = function() { return Vt(this, !0) };
    z.e.pz = function() { return Vt(this, !1) };
    z.e.lh = function(a, b) {
        var c = b && !a.isCollapsed(), d = a.R;
        try {
            return c ? 0 <= this.Ve(d, 0, 1) && 0 >= this.Ve(d, 1, 0) : 0 <= this.Ve(d, 0, 0) && 0 >= this.Ve(d, 1, 1)
        } catch (f) {
            if (!z.C) throw f;
            return !1
        }
    };
    z.e.containsNode = function(a, b) { return this.lh(eu(a), b) };
    z.e.Wo = function() {
        var a = new Tt;
        z.Od(this,
            function(b, c, d) {
                3 == b.nodeType
                    ? a.append(z.Ma(b.nodeValue.substring(d.Ct(), d.yt())))
                    : 1 == b.nodeType &&
                    (-1 == d.ec
                        ? z.$e(b) && a.append("\x3c/" + b.tagName + "\x3e")
                        : (c = b.cloneNode(!1), c = z
                            .wo(c), z.C && "LI" == b.tagName
                            ? a.append(c)
                            : (b = c.lastIndexOf("\x3c"), a.append(b ? c.substr(0, b) : c))))
            },
            this);
        return a.toString()
    };
    z.e.zd = function() { return new z.St(this.Z(), this.xa(), this.ka(), this.Sa()) };
    z.y(Wt, Ut);
    z.e = Wt.prototype;
    z.e.clone = function() { return new this.constructor(this.R.cloneRange()) };
    z.e.Ic = function() { return this.R.commonAncestorContainer };
    z.e.Z = function() { return this.R.startContainer };
    z.e.xa = function() { return this.R.startOffset };
    z.e.ka = function() { return this.R.endContainer };
    z.e.Sa = function() { return this.R.endOffset };
    z.e.Ve = function(a, b, c) {
        return this.R.compareBoundaryPoints(1 == c
            ? 1 == b ? z.u.Range.START_TO_START : z.u.Range.START_TO_END
            : 1 == b ? z.u.Range.END_TO_START : z.u.Range.END_TO_END,
            a)
    };
    z.e.isCollapsed = function() { return this.R.collapsed };
    z.e.$d = function() { return this.R.toString() };
    z.e.Bg = function() {
        var a = z.Ie(this.R.startContainer).B("DIV");
        a.appendChild(this.R.cloneContents());
        a = a.innerHTML;
        if (z.Ia(a, "\x3c") || !this.isCollapsed() && !z.Wa(a, "\x3c")) return a;
        var b = this.Ic(), b = 1 == b.nodeType ? b : b.parentNode;
        return z.wo(b.cloneNode(!1)).replace("\x3e", "\x3e" + a)
    };
    z.e.select = function(a) {
        var b = z.Te(z.Ke(this.Z()));
        this.Sq(b.getSelection(), a)
    };
    z.e.Sq = function(a) {
        a.removeAllRanges();
        a.addRange(this.R)
    };
    z.e.Yf = function() {
        var a = this.R;
        a.extractContents();
        if (a.startContainer.hasChildNodes()) {
            var b = a.startContainer.childNodes[a.startOffset];
            if (b) {
                var c = b.previousSibling;
                "" == z.uo(b) && z.N(b);
                c && "" == z.uo(c) && z.N(c)
            }
        }
        if (z.Ll) {
            var b = this.Z(), c = this.xa(), d = this.ka(), f = this.Sa(), g = b.nextSibling;
            b == d &&
                b.parentNode &&
                3 == b.nodeType &&
                g &&
                3 == g.nodeType &&
                (b.nodeValue += g.nodeValue, z.N(g), a.setStart(b, c), a.setEnd(d, f))
        }
    };
    z.e.surroundContents = function(a) {
        this.R.surroundContents(a);
        return a
    };
    z.e.insertNode = function(a, b) {
        var c = this.R.cloneRange();
        c.collapse(b);
        c.insertNode(a);
        c.detach();
        return a
    };
    z.e.pr = function(a, b) {
        var c = z.Te(z.Ke(this.Z()));
        if (c = z.Du(c)) var d = c.Z(), f = c.ka(), g = c.xa(), h = c.Sa();
        var k = this.R.cloneRange(), l = this.R.cloneRange();
        k.collapse(!1);
        l.collapse(!0);
        k.insertNode(b);
        l.insertNode(a);
        k.detach();
        l.detach();
        if (c) {
            if (3 == d.nodeType)
                for (; g > d.length;) {
                    g -= d.length;
                    do d = d.nextSibling;
                    while (d == a || d == b)
                }
            if (3 == f.nodeType)
                for (; h > f.length;) {
                    h -= f.length;
                    do f = f.nextSibling;
                    while (f == a || f == b)
                }
            z.ou(d, g, f, h).select()
        }
    };
    z.e.collapse = function(a) { this.R.collapse(a) };
    z.y($t, Wt);
    $t.prototype.Sq = function(a, b) {
        !b || this.isCollapsed()
            ? $t.v.Sq.call(this, a, b)
            : (a.collapse(this.ka(), this.Sa()), a.extend(this.Z(), this.xa()))
    };
    z.y(z.au, Ut);
    z.e = z.au.prototype;
    z.e.clone = function() {
        var a = new z.au(this.R.duplicate(), this.at);
        a.Pg = this.Pg;
        a.Aa = this.Aa;
        a.va = this.va;
        return a
    };
    z.e.Vd = function() {
        this.Pg = this.Aa = this.va = null;
        this.Ea = this.Ca = -1
    };
    z.e.Ic = function() {
        if (!this.Pg) {
            var a = this.R.text, b = this.R.duplicate(), c = a.replace(/ +$/, "");
            (c = a.length - c.length) && b.moveEnd("character", -c);
            c = b.parentElement();
            b = z.$o(b.htmlText).length;
            if (this.isCollapsed() && 0 < b) return this.Pg = c;
            for (; b > z.$o(c.outerHTML).length;) c = c.parentNode;
            for (; 1 == c.childNodes.length && c.innerText == gu(c.firstChild) && Yt(c.firstChild);) c = c.firstChild;
            0 == a.length && (c = cu(this, c));
            this.Pg = c
        }
        return this.Pg
    };
    z.e.Z = function() {
        this.Aa || (this.Aa = du(this, 1), this.isCollapsed() && (this.va = this.Aa));
        return this.Aa
    };
    z.e.xa = function() {
        0 > this.Ea && (this.Ea = fu(this, 1), this.isCollapsed() && (this.Ca = this.Ea));
        return this.Ea
    };
    z.e.ka = function() {
        if (this.isCollapsed()) return this.Z();
        this.va || (this.va = du(this, 0));
        return this.va
    };
    z.e.Sa = function() {
        if (this.isCollapsed()) return this.xa();
        0 > this.Ca && (this.Ca = fu(this, 0), this.isCollapsed() && (this.Ea = this.Ca));
        return this.Ca
    };
    z.e.Ve = function(a, b, c) {
        return this.R.compareEndPoints((1 == b ? "Start" : "End") + "To" + (1 == c ? "Start" : "End"), a)
    };
    z.e.Fg = z.m(38);
    z.e.isCollapsed = function() { return 0 == this.R.compareEndPoints("StartToEnd", this.R) };
    z.e.$d = function() { return this.R.text };
    z.e.Bg = function() { return this.R.htmlText };
    z.e.select = function() { this.R.select() };
    z.e.Yf = function() {
        if (!this.isCollapsed() && this.R.htmlText) {
            var a = this.Z(), b = this.ka(), c = this.R.text, d = this.R.duplicate();
            d.moveStart("character", 1);
            d.moveStart("character", -1);
            d.text == c && (this.R = d);
            this.R.text = "";
            this.Vd();
            c = this.Z();
            d = this.xa();
            try {
                var f = a.nextSibling;
                a == b &&
                    a.parentNode &&
                    3 == a.nodeType &&
                    f &&
                    3 == f.nodeType &&
                    (a.nodeValue += f.nodeValue, z.N(f), this.R = bu(c), this.R.move("character", d), this.Vd())
            } catch (g) {
            }
        }
    };
    z.e.surroundContents = function(a) {
        z.N(a);
        a.innerHTML = this.R.htmlText;
        (a = hu(this.R, a)) && this.R.moveToElementText(a);
        this.Vd();
        return a
    };
    z.e.insertNode = function(a, b) {
        var c = iu(this.R.duplicate(), a, b);
        this.Vd();
        return c
    };
    z.e.pr = function(a, b) {
        var c = this.R.duplicate(), d = this.R.duplicate();
        iu(c, a, !0);
        iu(d, b, !1);
        this.Vd()
    };
    z.e.collapse = function(a) {
        this.R.collapse(a);
        a ? (this.va = this.Aa, this.Ca = this.Ea) : (this.Aa = this.va, this.Ea = this.Ca)
    };
    z.y(ju, Wt);
    ju.prototype.Sq = function(a) {
        a.collapse(this.Z(), this.xa());
        this.ka() == this.Z() && this.Sa() == this.xa() || a.extend(this.ka(), this.Sa());
        0 == a.rangeCount && a.addRange(this.R)
    };
    z.y(ku, Wt);
    ku.prototype.Ve = function(a, b, c) {
        return z.E("528")
            ? ku.v.Ve.call(this, a, b, c)
            : this.R.compareBoundaryPoints(1 == c
                ? 1 == b ? z.u.Range.START_TO_START : z.u.Range.END_TO_START
                : 1 == b ? z.u.Range.START_TO_END : z.u.Range.END_TO_END,
                a)
    };
    ku.prototype.Sq = function(a, b) {
        b
            ? a.setBaseAndExtent(this.ka(), this.Sa(), this.Z(), this.xa())
            : a.setBaseAndExtent(this.Z(), this.xa(), this.ka(), this.Sa())
    };
    z.y(z.mu, Jt);
    z.e = z.mu.prototype;
    z.e.clone = function() {
        var a = new z.mu;
        a.xi = this.xi && this.xi.clone();
        a.Aa = this.Aa;
        a.Ea = this.Ea;
        a.va = this.va;
        a.Ca = this.Ca;
        a.Qf = this.Qf;
        return a
    };
    z.e.Si = function() { return "text" };
    z.e.we = function() { return z.qu(this).R };
    z.e.Vd = function() { this.Aa = this.Ea = this.va = this.Ca = null };
    z.e.ik = function() { return 1 };
    z.e.Ze = function() { return this };
    z.e.Ic = function() { return z.qu(this).Ic() };
    z.e.Z = function() { return this.Aa || (this.Aa = z.qu(this).Z()) };
    z.e.xa = function() { return null != this.Ea ? this.Ea : this.Ea = z.qu(this).xa() };
    z.e.yz = function() { return z.qu(this).yz() };
    z.e.ka = function() { return this.va || (this.va = z.qu(this).ka()) };
    z.e.Sa = function() { return null != this.Ca ? this.Ca : this.Ca = z.qu(this).Sa() };
    z.e.pz = function() { return z.qu(this).pz() };
    z.e.Ih = function() { return this.Qf };
    z.e.lh = function(a, b) {
        var c = a.Si();
        return "text" == c
            ? z.qu(this).lh(z.qu(a), b)
            : "control" == c
            ? (c = a.Mi(), (b ? z.ob : z.Mn)(c, function(a) { return this.containsNode(a, b) }, this))
            : !1
    };
    z.e.Fg = z.m(37);
    z.e.isCollapsed = function() { return z.qu(this).isCollapsed() };
    z.e.$d = function() { return z.qu(this).$d() };
    z.e.Wo = function() { return z.qu(this).Wo() };
    z.e.Bg = function() { return z.qu(this).Bg() };
    z.e.zd = function() { return new z.St(this.Z(), this.xa(), this.ka(), this.Sa()) };
    z.e.select = function() { z.qu(this).select(this.Qf) };
    z.e.Yf = function() {
        z.qu(this).Yf();
        this.Vd()
    };
    z.e.surroundContents = function(a) {
        a = z.qu(this).surroundContents(a);
        this.Vd();
        return a
    };
    z.e.insertNode = function(a, b) {
        var c = z.qu(this).insertNode(a, b);
        this.Vd();
        return c
    };
    z.e.pr = function(a, b) {
        z.qu(this).pr(a, b);
        this.Vd()
    };
    z.e.xC = function() { return new ru(this) };
    z.e.collapse = function(a) {
        a = this.Ih() ? !a : a;
        this.xi && this.xi.collapse(a);
        a ? (this.va = this.Aa, this.Ca = this.Ea) : (this.Aa = this.va, this.Ea = this.Ca);
        this.Qf = !1
    };
    z.y(ru, Ft);
    ru.prototype.Dv = function() { return z.ou(this.QE, this.OO, this.WG, this.ZQ) };
    ru.prototype.D = function() {
        ru.v.D.call(this);
        this.WG = this.QE = null
    };
    z.y(z.su, Rt);
    z.e = z.su.prototype;
    z.e.Vd = function() { this.ir = this.qb = null };
    z.e.clone = function() { return uu.apply(this, this.Mi()) };
    z.e.Si = function() { return "control" };
    z.e.we = function() { return this.R || window.document.body.createControlRange() };
    z.e.ik = function() { return this.R ? this.R.length : 0 };
    z.e.Ze = function(a) {
        a = this.R.item(a);
        return nu(eu(a), void 0)
    };
    z.e.Ic = function() { return xo.apply(null, this.Mi()) };
    z.e.Z = function() { return vu(this)[0] };
    z.e.xa = function() { return 0 };
    z.e.ka = function() {
        var a = vu(this), b = z.jb(a);
        return z.pb(a, function(a) { return z.nf(a, b) })
    };
    z.e.Sa = function() { return this.ka().childNodes.length };
    z.e.Mi = function() {
        if (!this.qb && (this.qb = [], this.R)) for (var a = 0; a < this.R.length; a++) this.qb.push(this.R.item(a));
        return this.qb
    };
    z.e.Fg = z.m(36);
    z.e.isCollapsed = function() { return !this.R || !this.R.length };
    z.e.$d = function() { return "" };
    z.e.Wo = function() { return z.mb(vu(this), z.wo).join("") };
    z.e.Bg = function() { return this.Wo() };
    z.e.zd = function() { return new xu(this) };
    z.e.select = function() { this.R && this.R.select() };
    z.e.Yf = function() {
        if (this.R) {
            for (var a = [], b = 0, c = this.R.length; b < c; b++) a.push(this.R.item(b));
            z.A(a, z.N);
            this.collapse(!1)
        }
    };
    z.e.fj = function(a) {
        a = this.insertNode(a, !0);
        this.isCollapsed() || this.Yf();
        return a
    };
    z.e.xC = function() { return new wu(this) };
    z.e.collapse = function() {
        this.R = null;
        this.Vd()
    };
    z.y(wu, Ft);
    wu.prototype.Dv = function() {
        for (var a = (this.qb.length ? z.Ke(this.qb[0]) : window.document).body.createControlRange(),
            b = 0,
            c = this.qb.length;
            b < c;
            b++) a.addElement(this.qb[b]);
        return tu(a)
    };
    wu.prototype.D = function() {
        wu.v.D.call(this);
        delete this.qb
    };
    z.y(xu, Qt);
    z.e = xu.prototype;
    z.e.Ct = function() { return 0 };
    z.e.yt = function() { return 0 };
    z.e.Z = function() { return this.Aa };
    z.e.ka = function() { return this.va };
    z.e.Pp = function() { return !this.depth && !this.qb.length };
    z.e.next = function() {
        if (this.Pp()) throw z.Nd;
        if (!this.depth) {
            var a = this.qb.shift();
            this.setPosition(a, 1, 1);
            return a
        }
        return xu.v.next.call(this)
    };
    z.e.mh = function(a) {
        this.qb = a.qb;
        this.Aa = a.Aa;
        this.va = a.va;
        xu.v.mh.call(this, a)
    };
    z.e.clone = function() {
        var a = new xu(null);
        a.mh(this);
        return a
    };
    z.y(z.yu, Rt);
    z.e = z.yu.prototype;
    z.e.Vd = function() {
        this.gn = [];
        this.Js = this.An = null
    };
    z.e.clone = function() {
        var a = this.mg, b = new z.yu;
        b.mg = z.vb(a);
        return b
    };
    z.e.Si = function() { return "mutli" };
    z.e.we = function() { return this.mg[0] };
    z.e.ik = function() { return this.mg.length };
    z.e.Ze = function(a) {
        this.gn[a] || (this.gn[a] = nu(lu(this.mg[a]), void 0));
        return this.gn[a]
    };
    z.e.Ic = function() {
        if (!this.Js) {
            for (var a = [], b = 0, c = this.ik(); b < c; b++) a.push(this.Ze(b).Ic());
            this.Js = xo.apply(null, a)
        }
        return this.Js
    };
    z.e.Z = function() { return Au(this)[0].Z() };
    z.e.xa = function() { return Au(this)[0].xa() };
    z.e.ka = function() { return z.jb(Au(this)).ka() };
    z.e.Sa = function() { return z.jb(Au(this)).Sa() };
    z.e.Fg = z.m(35);
    z.e.isCollapsed = function() { return 0 == this.mg.length || 1 == this.mg.length && this.Ze(0).isCollapsed() };
    z.e.$d = function() { return z.mb(z.Lt(this), function(a) { return a.$d() }).join("") };
    z.e.Wo = function() { return this.Bg() };
    z.e.Bg = function() { return z.mb(z.Lt(this), function(a) { return a.Bg() }).join("") };
    z.e.zd = function() { return new Cu(this) };
    z.e.select = function() {
        var a = Kt(this.eb());
        a.removeAllRanges();
        for (var b = 0, c = this.ik(); b < c; b++) a.addRange(this.Ze(b).we())
    };
    z.e.Yf = function() { z.A(z.Lt(this), function(a) { a.Yf() }) };
    z.e.xC = function() { return new Bu(this) };
    z.e.collapse = function(a) {
        if (!this.isCollapsed()) {
            var b = a ? this.Ze(0) : this.Ze(this.ik() - 1);
            this.Vd();
            b.collapse(a);
            this.gn = [b];
            this.An = [b];
            this.mg = [b.we()]
        }
    };
    z.y(Bu, Ft);
    Bu.prototype.Dv = function() {
        var a = z.mb(this.yC, function(a) { return a.restore() });
        return zu(a)
    };
    Bu.prototype.D = function() {
        Bu.v.D.call(this);
        z.A(this.yC, function(a) { a.dispose() });
        delete this.yC
    };
    z.y(Cu, Qt);
    z.e = Cu.prototype;
    z.e.Ct = function() { return this.Gg[this.Xl].Ct() };
    z.e.yt = function() { return this.Gg[this.Xl].yt() };
    z.e.Z = function() { return this.Gg[0].Z() };
    z.e.ka = function() { return z.jb(this.Gg).ka() };
    z.e.Pp = function() { return this.Gg[this.Xl].Pp() };
    z.e.next = function() {
        try {
            var a = this.Gg[this.Xl], b = a.next();
            this.setPosition(a.node, a.ec, a.depth);
            return b
        } catch (c) {
            if (c !== z.Nd || this.Gg.length - 1 == this.Xl) throw c;
            this.Xl++;
            return this.next()
        }
    };
    z.e.mh = function(a) {
        this.Gg = z.vb(a.Gg);
        Cu.v.mh.call(this, a)
    };
    z.e.clone = function() {
        var a = new Cu(null);
        a.mh(this);
        return a
    };
    z.y(z.Ju, z.Ld);
    z.Ju.prototype.next = function() {
        var a = this.QJ;
        if (!a) throw z.Nd;
        this.QJ = this.PX ? a.previousSibling : a.nextSibling;
        return a
    };
    z.y(Ku, z.Ju);
    var Qu = { IMG: !0, IFRAME: !0, EMBED: !0 };
    var sG = function() {
        if (z.Xl) return Uu(/Firefox\/([0-9.]+)/);
        if (z.C || z.Gc || z.Lg) return z.Jc;
        if (z.Kf) return Uu(/Chrome\/([0-9.]+)/);
        if (z.Zl && !(z.Ec() || z.Ab("iPad") || z.Ab("iPod"))) return Uu(/Version\/([0-9.]+)/);
        if (z.Zk || z.ai) {
            var a;
            if (a = /Version\/(\S+).*Mobile\/(\S+)/.exec(z.Bb)) return a[1] + "." + a[2]
        } else if (z.Yl) return (a = Uu(/Android\s+([0-9.]+)/)) ? a : Uu(/Version\/([0-9.]+)/);
        return ""
    }();
    var vG, wG, yG, xB, DG, EG;
    z.tG = z.C && !(9 <= z.jh);
    z.uG = z.B || z.D || z.Lg || z.Gc || z.C && 9 <= z.jh;
    z.oB = z.C || z.D || z.Lg || z.Gc || !1;
    vG = z.D || !1;
    wG = z.C || z.D || z.Lg;
    z.xG = z.B || z.D;
    z.D && z.E("534.16");
    yG = z.B && !0;
    z.zG = z.B || z.D || z.Lg;
    z.AG = z.B || z.Lg;
    z.C && z.E("7.0");
    z.BG = z.B && z.E("1.8") || z.D || z.Lg;
    xB = z.D || z.C && z.E("9");
    z.C || z.Gc || z.Lg || z.B && z.E("1.9");
    z.CG = z.B || z.D && !z.E("527");
    DG = z.C || z.Lg;
    EG = z.C || z.Gc || z.D && z.E("525");
    z.FG = z.D && !z.E("531");
    z.GG = z.D && !z.E("528");
    z.B && z.E("1.9") || z.C || z.Gc || z.Lg || z.D && z.E("531");
    z.HG = z.C || z.Gc || z.B || z.Lg;
    z.IG = z.B || z.D && !z.E("526");
    z.JG = z.C || z.Lg;
    z.KG = !z.C && !z.Lg;
    z.LG = !z.D && !z.Gc;
    z.Kf && 0 <= z.$a(sG, "4") || z.Zl && z.E("533") || z.B && z.E("2.0") || z.C && z.E("10");
    z.MG = z.Lg && z.E("11.10");
    z.Kf && z.$a(sG, "12");
    z.y(z.iv, z.Gt);
    z.iv.prototype.Kq = function(a) {
        var b = z.Ht(this, !0), c = z.Ht(this, !1), b = b && c ? xo(b, c) : b || c;
        z.iv.v.Kq.call(this);
        if (a) return av(b, a);
        b && (a = z.Du(z.Te(z.Ke(b))), (a = av(b, a)) && a.select())
    };
    z.y(z.jv, z.Q);
    z.NG = 0;
    z.kv = [];
    z.jv.prototype.xc = null;
    z.jv.prototype.lm = !1;
    z.jv.prototype.gv = 0;
    var OG = z.C ? "styleFloat" : "cssFloat",
        ov = ["position", "top", "left", "width", OG],
        pv = ["position", "top", "left", "display", OG, "marginTop", "marginLeft", "marginRight", "marginBottom"];
    z.e = z.jv.prototype;
    z.e.B = function() {
        z.jv.v.B.call(this);
        this.T(this.m())
    };
    z.e.T = function(a) {
        z.jv.v.T.call(this, a);
        z.S.add(a, "goog-scrollfloater")
    };
    z.e.C = function() {
        z.jv.v.C.call(this);
        this.Gx = z.fh(window.document.body).top - 2;
        this.xc || (this.xc = this.L().B("div", { style: "visibility:hidden" }));
        this.gv = z.In(this.m()).y;
        z.lv(this, this.Iv);
        var a = this.rr = new z.oi(this.Kn, 150, this);
        this.o().g(window, "scroll", (0, z.t)(a.fire, a));
        this.o().g(window, "resize", z.Kr(150, this.Rz, !0))
    };
    z.e.D = function() {
        z.jv.v.D.call(this);
        z.tb(z.kv, this);
        this.rr.dispose();
        this.FA && (z.NG -= this.$F);
        delete this.xc
    };
    z.e.Kn = function() { this.Iv && (z.xf(this.L()).y + this.Gx > this.gv ? nv(this) : z.mv(this)) };
    z.e.Mq = function() {
        var a = this.m(), b = this.Gx;
        !this.FA && 0 < z.NG && (b += z.NG);
        a.style.top = b + "px"
    };
    z.e.Rz = function() {
        z.mv(this);
        this.gv = z.In(this.m()).y;
        this.Kn()
    };
    z.y(z.qv, z.jv);
    z.qv.prototype.Kn = function() {
        var a = rv(this.tag);
        if (this.Iv && (!a || a === this)) {
            var a = this.sX.getBoundingClientRect(), b = this.Gx + z.NG, c = b + this.yK;
            a.top < b && a.bottom > c ? nv(this) : z.mv(this)
        }
    };
    z.qv.prototype.update = function() { return this.Kn() };
    z.ka(sv);
    sv.prototype.zf = function(a, b, c) {
        z.qg("richtexteditor",
            function() {
                var d = window.ZH.createRichTextEditor(a, b), f = d[0], d = d[1];
                c && c(f, d)
            })
    };
    tv.prototype.defaults = { JX: [], rC: [], HP: !0 };
    var vv = "data-tooltip data-hovercard class style id bgcolor color size width height".split(" ");
    tv.prototype.ih = function() {
        var a = this;
        if (this.J.HP) this.H.on("paste", function() { (0, window.setTimeout)(function() { wv(a.H, xv(a)) }) })
    };
    z.y(yv, z.H);
    z.e = yv.prototype;
    z.e.defaults = {
        Vn: { Ce: 6, content: "", method: "GET", source: "/people/autocomplete" },
        VW: "mention-popup",
        Tk: window.document.body,
        CE: "activated"
    };
    z.e.D = function() {
        this.Ts();
        z.N(this.h);
        this.h = null;
        yv.v.D.call(this)
    };
    z.e.Nx = function() {
        var a = this.h = z.Ye(this.tZ);
        this.Fq = a.getElementsByTagName("input")[0];
        a.className = this.J.VW;
        a.style.display = "none";
        this.J.Tk.appendChild(a)
    };
    z.e.Ic = function() { return this.J.Tk };
    z.e
        .tZ =
        '\x3cdiv\x3e\x3cdiv class\x3d"writing-bg"\x3e\x3cinput\x3e\x3c/div\x3e\x3cdiv class\x3d"tip"\x3e想用 @ 提到谁？\x3c/div\x3e\x3c/div\x3e';
    z.e.template = (0, z
        .Zv
    )('\n    \x3c% if (data.id) { %\x3e\n        \x3cimg class\x3d"avatar" src\x3d"\x3c%\x3davatar%\x3e"\x3e\n        \x3cdiv class\x3d"body"\x3e\n            \x3cdiv class\x3d"name"\x3e\n              \x3c%\x3d label %\x3e\n              \x3c% if (badges[0]) { %\x3e\n                  \x3cspan class\x3d"OrgIcon sprite-global-icon-org-14"\n                      data-tooltip\x3d"s$b$已认证的机构"\x3e\x3c/span\x3e\n              \x3c% } %\x3e\n            \x3c/div\x3e\n            \x3cdiv class\x3d"bio"\x3e\x3c%\x3d headline %\x3e\x3c/div\x3e\n        \x3c/div\x3e\n    \x3c% } %\x3e\n');
    z.e.Eb = function() { return z.ah(this.h) };
    z.e.open = function() { this.Eb() || (z.P(this.h, !0), this.Fq.focus(), this.ih(), this.dispatchEvent("open")) };
    z.e.close = function() {
        this.Eb() &&
        (z.P(this.h, !1), z.S.remove(this.h, this.J.CE), this.Fq.value = "", this.Fq.blur(), this.Ts(), this
            .dispatchEvent("close"))
    };
    z.e.aK = function(a) { this.Eb() && !z.nf(this.h, a.target) && zv(this, a) };
    z.e.vq = function(a) {
        var b = a.keyCode, c = this.Fq;
        if (27 === b || c === a.target && "" === c.value && (8 === b || 32 === b)
        ) zv(this, a), a.preventDefault(), a.stopPropagation()
    };
    z.e.ih = function() {
        z.G(window.document, "click", this.aK, !1, this);
        z.G(this.h, "keydown", this.vq, !1, this)
    };
    z.e.Ts = function() {
        z.md(window.document, "click", this.aK, !1, this);
        z.md(this.h, "keydown", this.vq, !1, this)
    };
    z.e.Pf = function() {
        var a = this,
            b = this.J.Vn,
            c = new z.Qs(this.Fq,
            {
                ej: this.h,
                Ce: b.Ce,
                source: b.source,
                select: function(b) {
                    (0, window.setTimeout)(function() {
                        a.close();
                        a.dispatchEvent({ type: "select", data: { TW: b } })
                    });
                    return ""
                },
                rd: function(b, c, g) { g.innerHTML = a.template(b.data) }
            });
        c.LC(b.method);
        c.aa(b.content);
        c.addEventListener("suggestionsupdate", function() { z.S.enable(this.h, this.J.CE, c.Eb()) }, !1, this);
        this.Y = c
    };
    z.e.position = function(a) { z.Qg(this.h, a) };
    z.y(Av, z.H);
    var Dv = !!window.getSelection;
    Av.prototype.defaults = {
        Vn: {},
        Tk: window.document.body,
        Zp: "member_mention",
        Xt: "mention-holder",
        position: function(a, b) {
            a.x += b.width + 7;
            a.y -= 5;
            z.C && 7 < z.Jc && (a.y += b.height / 2 - 9)
        }
    };
    var Kv = z.Gb({ G_: "member_mention" });
    Av.prototype.m = function() { return this.input };
    Av.prototype.ih = function() {
        var a = this.Qg;
        z.G(a,
            "cancel",
            function(a) {
                var c = Bv(this);
                a = a.data.originalEvent;
                c &&
                    "click" !== a.type &&
                    ("keydown" === a.type &&
                        32 === a.keyCode &&
                        (c = c.parentNode.insertBefore(window.document
                            .createTextNode(" "),
                            c.nextSibling)), Cv(this, c))
            },
            !1,
            this);
        z.G(a,
            "select",
            function(a) {
                var c = a.data.TW;
                a = z.L(this.J.Xt, this.input);
                var c = this.Os(c), d = a.previousSibling, f = window.document.createTextNode(" ");
                z.Bo(c, a);
                z.df(f, c);
                d &&
                    3 === d.nodeType &&
                    !z.cp(z.qf(d), " ") &&
                    z.cf(window.document.createTextNode(" "),
                        c);
                Cv(this, f)
            },
            !1,
            this);
        z.G(this.input, "click", function() { a.Eb() && Bv(this) }, !1, this);
        z.G(this.input,
            "keydown",
            function(a) {
                var c;
                if (8 === a.keyCode && (c = z.Du())) {
                    a = c.Z();
                    var d = c.ka(), f = c.xa();
                    c = c.Sa();
                    var g = !1;
                    Jv(a.parentNode) && (f = 0, g = !0);
                    Jv(d.parentNode) && (c = d.length, g = !0);
                    g && z.ou(a, f, d, c).select()
                }
            },
            !1,
            this);
        z.G(this.input,
            z.Zk || z.ai ? "keypress" : "keyup",
            function(a) {
                function c(a, b) {
                    if (3 !== a.nodeType || "@" === a.nodeValue && Ev(a.previousSibling) || Ev(a.parentNode)) return !1;
                    var c = a.nodeValue, d = b - 1;
                    if ("@" !==
                        c.slice(d, d + 1)) return !1;
                    var f = c;
                    0 <= d && d < c.length && (f = c.substr(0, d) + c.substr(d + 1, c.length - d - 1));
                    a.nodeValue = f;
                    return !0
                }

                if ("keypress" !== a.type || "@" === String.fromCharCode(a.charCode)) {
                    var d, f, g, h;
                    if ("keyup" === a.type) {
                        if (50 !== a.keyCode) return;
                        if (Dv) {
                            d = window.getSelection();
                            g = d.anchorNode;
                            h = d.anchorOffset;
                            if (!c(g, h)) return;
                            z.D && !g.nextSibling && (g.nodeValue += " ");
                            f = window.document.createRange();
                            d.removeAllRanges();
                            f.setStart(g, h - 1);
                            f.setEnd(g, h - 1);
                            d.addRange(f)
                        } else {
                            f = z.Fu(window.document.selection.createRange());
                            g = z.Mt(f);
                            h = f.xa();
                            if (!c(g, h)) return;
                            z.Hu(g, h - 1).select()
                        }
                    }
                    this.aw(a)
                }
            },
            !1,
            this)
    };
    Av.prototype.aw = function(a) {
        var b = this, c = this.Qg;
        if (!c.Eb()) {
            var d = function(c) { return Ev(c) || c.className === b.J.Zp ? !1 : (a && a.preventDefault(), !0) },
                f = function(a) {
                    c.position(a);
                    c.open()
                };
            Dv ? Fv(b, d, f) : Iv(b, d, f)
        }
    };
    Av.prototype.Os = function(a, b) {
        return z.M("a",
        {
            "data-hash": a.id,
            href: "/" + (a.badges[0] ? "org" : "people") + "/" + a.url_token,
            className: b || this.J.Zp,
            innerHTML: "@" + a.label
        })
    };
    z.y(z.Lv, z.Q);
    z.e = z.Lv.prototype;
    z.e.D = function() {
        this.Ta = null;
        z.Lv.v.D.call(this)
    };
    z.e.T = function(a) {
        z.Lv.v.T.call(this, a);
        var b = a.getAttribute("data-resourceid");
        b && (this.LX = a.getAttribute("data-action"), this.Rq = b);
        this.status || (this.status = "normal");
        a = this.L();
        this.Ad ||
            (this.Ad = a.yg("zm-editable-content", this.h)) &&
            "1" === this.Ad.getAttribute("data-disabled") &&
            (this.disabled = !0);
        this.mc
            ? this.fc && (this.mc.innerHTML = this.fc)
            : (this.mc = a.yg("zm-editable-tip", this.h), this.fc &&
                !this.mc &&
                (this.mc = a.B("div", "zm-editable-tip"), this.mc.innerHTML = this.fc, a.ju(this.mc, this.Ad)));
        this.Ub = a.yg("zm-editable-editor-wrap",
            this.h);
        this.content = (0, z.ab)(this.content || this.ID ? z.qf(this.Ad) : this.Ad.innerHTML);
        this.oe();
        Ov(this)
    };
    z.e.B = function() {
        var a = this.L(),
            a = a.B("div",
                "zm-editable-item-wrap",
                [this.mc = a.B("div", "zm-editable-tip"), this.Ad = a.B("div", "zm-editable-content", this.content)]);
        this.T(a)
    };
    z.e.C = function() {
        z.Lv.v.C.call(this);
        this.o().g(this.Ad, "click", this.Xa);
        this.mc && this.o().g(this.mc, "click", this.Xa)
    };
    z.e.aa = function(a) {
        this.content = a;
        Ov(this)
    };
    z.e.Xa = function(a) {
        var b = z.yr(this.h, a.target), c = this.L();
        if (!b || !b.name)
            return a = c.iR(a.target, "div", "zm-editable-tip-label"), this.isEnabled && a && this.Xg(), !0;
        a = b.name;
        switch (a) {
        case "expand":
            Ov(this);
            break;
        case "collapse":
            Ov(this);
            break;
        case "edit":
            this.Iz();
            this.dispatchEvent("click_edit");
            break;
        case "save":
            this.Pt();
            break;
        case "cancel":
            this.dispatchEvent("cancel_edit");
            this.pj();
            break;
        default:
            return this.Ht(a)
        }
        return !0
    };
    z.e.Iz = function() {
        if (z.Y.Sd) {
            if (!1 === this.dispatchEvent("beforeedit")) return !1;
            this.init();
            this.Xg()
        } else (new gq).F(!0)
    };
    z.e.Pt = function() {
        var a = z.mr(this.zg()), b = /<img/i.test(a), c = /<embed/i.test(a);
        if (b || c || this.II || a && nr(a).length)
            a !== this.content || this.ZG
                ? (this.dispatchEvent("save_changed"), this.Rh(a))
                : (this.dispatchEvent("save_unchanged"), this.pj())
    };
    z.e.Rh = function(a) {
        if (!this.da || !this.da.Jc())
            if (this.Ss && this.rL) {
                this.da = new z.ep(!0);
                this.o().ta(this.da, "success", this.LE);
                var b = new z.uj(this.params.join("\x26"));
                b.add(this.Ss, a).add("field_name", this.Ss);
                this.da.ajax(this.rL, b.toString())
            } else this.dispatchEvent("change")
    };
    z.e.pj = function() {
        this.status = "normal";
        this.oe()
    };
    z.e.LE = function() {
        var a = z.Dn(this.da);
        if (!a) return z.T.message("网络异常");
        if (a.r) return z.T.message(a.msg);
        this.aa(a.msg);
        this.pj();
        this.dispatchEvent("saveSuccess");
        this.dispatchEvent("change")
    };
    z.e.cb = function() { return this.content };
    z.e.qz = z.m(39);
    z.e.isContentEditable = function() { return !this.Zd };
    z.e.zg = function() { return (0, z.Fr)(z.La(this.Ta.value)) };
    z.e.Ht = function(a) {
        this.dispatchEvent(a);
        return !0
    };
    z.e.init = function() { this.dT || (this.dT = !0, this.zf()) };
    z.e.zf = function() {
        var a = this.L();
        this.Ub
            ? (this.oc = a.yg("zm-command", this.Ub), this.Ta = a.yg("zm-editable-editor-input", this.Ub))
            : (this.Ub = a.B("div",
                "zm-editable-editor-wrap clearfix",
                this.Xj = a.B("div",
                    "zm-editable-editor-outer",
                    a.B("div",
                        "zm-editable-editor-inner zg-form-text-input",
                        this.Ta = a.B("textarea", "zm-editable-editor-input")))), a.yA(this.Ub, this.Ad), this.Vl());
        this.Ta && this.Ta.tagName && "TEXTAREA" === this.Ta.tagName && !this.lG && new z.Nr(this.Ta);
        this.rq()
    };
    z.e.ready = function(a) { this.fG.done(a) };
    z.e.rq = function() {
        this.o().g(this.oc, "click", this.Xa);
        this.rw && Nv(this);
        Mv(this);
        this.fG.resolveWith(this)
    };
    z.e.Vl = function() {
        this.oc = z.M("div",
            "zm-command",
            [
                this.ys = z.M("a", { "class": "zm-command-cancel", name: "cancel", href: "javascript:;" }, "取消"), this
                .zo = z.M("a", { "class": "zg-r3px zg-btn-blue", name: "save", href: "javascript:;" }, "保存")
            ]);
        this.Ub.appendChild(this.oc)
    };
    z.e.oe = function() {
        this.Qs && z.S.remove(this.h, this.Qs);
        "editing" === this.status
            ? (this.mc && z.P(this.mc, !1), this.Ub && z.P(this.Ub, !0), z.P(this.Ad, !1), this
                .Qs = "zm-editable-status-editing")
            : (this
                .mc &&
                (!this
                    .II ||
                    this.content ||
                    this.disabled
                    ? z.P(this.mc, !1)
                    : z.P(this.mc, !0)), this
                .Ub &&
                z.P(this.Ub, !1), this.content ? z.P(this.Ad, !0) : z.P(this.Ad, !1), this
                .Qs = "zm-editable-status-normal");
        z.S.add(this.h, this.Qs)
    };
    z.e.Xg = function() {
        this.nt ||
        (this.init(), this.ready(function() {
            this.status = "editing";
            this.oe();
            this.Yq()
        }))
    };
    z.e.Yq = function() {
        if (this.Rq) this.nt = !0, this.az();
        else {
            var a = this.Ta, b;
            b = co(this.content.replace(/<br \/>/g, "\n").replace(/<br>/g, "\n"))
                .replace(/<a.*?href="(.*?)".*?<\/a>/g, "$1");
            a.value = b
        }
    };
    z.e.kH = function() {
        var a = [];
        this.disabled ||
            a
            .push('\x3ca href\x3d"javascript:;" class\x3d"zu-edit-button" name\x3d"edit"\x3e\x3ci class\x3d"zu-edit-button-icon"\x3e\x3c/i\x3e修改\x3c/a\x3e');
        return a.join("")
    };
    z.e.az = function() {
        this.nt ||
        (this.nt = !0, z.fp(this.LX + "?id\x3d" + this.Rq,
            (0, z.t)(function(a) {
                    this.nt = !1;
                    a = z.Dn(a.target);
                    a.r ? z.T.message(a.msg) : this.Ov(a.msg)
                },
                this),
            "GET"))
    };
    z.e.Ov = function(a) { this.Ta.value = a };
    z.y(z.Pv, z.Lv);
    z.e = z.Pv.prototype;
    z.e.Ov = function(a) {
        this.Zd ? z.Pv.v.Ov.call(this, a) : (a || (a = z.B ? "" : "\x3cdiv\x3e\x3c/div\x3e"), this.Ta.ge(!1, a, !0))
    };
    z.e.Yq = function() {
        this.ready(function() {
            this.Rq
                ? this.az()
                : this.Zd
                ? z.Pv.v.Yq.call(this)
                : this.content
                ? this.Ta.ge(!1, this.content, !1, !0)
                : this.Ta.ge(!1, z.D ? "\x3cdiv\x3e\x3cbr\x3e\x3c/div\x3e" : "\x3cdiv\x3e\x3c/div\x3e", !1, !0)
        })
    };
    z.e.D = function() {
        z.Cc(this.Ta);
        z.N(this.Ub);
        this.Jr = this.lE = this.Ig = this.em = this.tD = this.Xj = this.Ub = null;
        z.Pv.v.D.call(this)
    };
    z.e.zf = function() {
        if (this.Zd) z.Pv.v.zf.call(this);
        else {
            var a = this.L();
            this.Ub = a.B("div",
                "zm-editable-editor-wrap",
                this.Xj = a.B("div",
                    "zm-editable-editor-outer",
                    [
                        this.tD = a.B("div", "zm-editable-toolbar-container"), this.em = a
                        .B("div",
                            "zm-editable-editor-field-wrap",
                            this.Ig = a.B("div", { id: this.UU, className: "zm-editable-editor-field-element" }))
                    ]));
            this.lE = (0, window.$)(this.tD);
            this.Jr = (0, window.$)(this.Ub);
            this.Jr.hide();
            a.yA(this.Ub, this.Ad);
            this.Rq || (this.Ig.innerHTML = this.content);
            a = {
                loremIpsum_: this.eB,
                enableFullScreen: this.Jy,
                content: this.content,
                useScraper_: this.MZ,
                canUploadMedia_: this.Px,
                useRemoveFormat_: this.KM
            };
            this.Vl();
            sv.ba().zf(this.Ub, a, (0, z.t)(this.rq, this));
            z.$h ||
            (this.$g = new z.qv(null, this.Xj), this.$g.w(this.tD), z.lv(this.$g, !1), z.mv(this.$g), z
                .Ac(this, this.$g))
        }
    };
    z.e.rq = function(a, b) {
        if (this.Zd) z.Pv.v.rq.call(this);
        else {
            this.Ta = a;
            this.Jr.show();
            z.Pv.v.rq.call(this);
            Qv(this, a, b);
            var c = a.bc.CodePlugin;
            c && (c.sY(b), c.ih())
        }
    };
    z.e.Xg = function() {
        z.Pv.v.Xg.call(this);
        this.ready(function() {
            this.Zd ||
                this.HQ ||
                (this.HQ = !0, z.ld(this.Ta,
                    "load",
                    function() {
                        var a = this.Ta, b = a.bc.FullScreenPlugin;
                        z.B && (a = a.Ka);
                        z.G(a,
                            ["focus", "blur"],
                            function(a) { b && z.S.has(window.document.body, b.J.So) || Rv(this, "focus" === a.type) },
                            !1,
                            this)
                    },
                    !1,
                    this), this.Ta.Be())
        })
    };
    z.e.zg = function() {
        if (this.Zd) return z.Pv.v.zg.call(this);
        var a = this.Ta;
        return Er(a.m(), !0) ? "" : a.om()
    };
    z.e.oe = function() {
        z.Pv.v.oe.call(this);
        this.$g && z.lv(this.$g, "editing" === this.status)
    };
    z.y(z.Tv, z.R);
    z.ka(z.Tv);
    var PG =
            '\x3cdiv class\x3d"zh-add-question-form"\x3e\n  \x3cdiv class\x3d"js-add-question-splash add-question-splash-page" \x3e\n    \x3cp\x3e\n      知乎是一个真诚、友善、认真、互助的社区\x3cbr\x3e\n      我们希望每一个疑惑都有解答，好的问题更容易得到好答案 \x3ca href\x3d"//www.zhihu.com/question/19555761"\x3e如何提一个好问题？\x3c/a\x3e\n    \x3c/p\x3e\n    \x3cp\x3e\n      \x3cb\x3e提问应遵循真实、客观、简洁、明确、规范的原则\x3c/b\x3e\x3cbr\x3e\n      1、提问应尽可能简洁明了，避免「请问」「有谁知道」「谢谢！」等与问题本身无关的附加语。\x3cbr\x3e\n      2、应避免使用「为神马」「童鞋」「肿么办」等网络用语。\x3cbr\x3e\n      3、基于个人判断或传言的问题，在提问时应在补充说明里详细说明原由\x3cbr\x3e\n      4、避免太宽泛问题，如调查性的问题容易变成每个人都可以发表观点，但对其他人没有价值。\x3cbr\x3e\n    \x3c/p\x3e\n    \x3cp\x3e\n      \x3cb\x3e知乎禁止这些提问\x3c/b\x3e\x3cbr\x3e\n      1、和已有问题完全重复的问题，\x3cb\x3e为避免重复，提问前可以先进行搜索\x3c/b\x3e\x3cbr\x3e\n      2、招聘 / 求职、交易 / 合作、寻人 / 征友、召集 / 赠送、求码类内容\x3cbr\x3e\n      3、投票类问题。例如：你支持方舟子还是韩寒？\x3cbr\x3e\n      4、作业或其他希望代为完成个人任务类的内容，以及针对个人具体病情的求医问药类问题\x3cbr\x3e\n      完整的提问建议可查看 \x3ca href\x3d"//www.zhihu.com/question/19806261"\x3e知乎的提问规范有哪些？\x3c/a\x3e\x3cbr\x3e\n    \x3c/p\x3e\n    \x3cdiv class\x3d"before-ask-form"\x3e\n      \x3cb\x3e提问前请先搜索\x3c/b\x3e\n      \x3cdiv style\x3d"position:relative;margin-top:18px;"\x3e\n        \x3cinput type\x3d"text" class\x3d"zg-form-text-input" id\x3d"js-before-ask" placeholder\x3d"请输入你的问题"\x3e\n      \x3c/div\x3e\n    \x3c/div\x3e\n  \x3c/div\x3e\n  \x3cform class\x3d"js-add-question-form"\x3e\n    \x3cdiv class\x3d"zg-section-big clearfix"\x3e\n      \x3cdiv id\x3d"zm-modal-dialog-info-wrapper"\x3e\x3c/div\x3e\n      \x3cdiv style\x3d"display: none;position: relative;" id\x3d"zm-modal-dialog-warnmsg-wrapper"\x3e\x3cdiv class\x3d"zm-modal-dialog-warnmsg zm-modal-dialog-guide-warn-message zg-r5px"\x3e\x3c/div\x3e\n        \x3ca name\x3d"close" title\x3d"关闭" href\x3d"javascript:;" class\x3d"zu-global-notify-close"  style\x3d"display:none"\x3ex\x3c/a\x3e\n        \x3cspan class\x3d"zm-modal-dialog-guide-title-msg"\x3e\x3c/span\x3e\n      \x3c/div\x3e\n      \x3cdiv class\x3d"zg-form-text-input add-question-title-form" style\x3d"position: relative;"\x3e\n        \x3ctextarea rows\x3d"1" class\x3d"zg-editor-input" title\x3d"在这里输入问题" id\x3d"zh-question-suggest-title-content"\x3e\x3c/textarea\x3e\n      \x3c/div\x3e\n      \x3cspan id\x3d"js-title-length-err-msg" class\x3d"title-length-err-msg zg-right"\x3e\x3c/span\x3e\n      \x3cdiv id\x3d"zh-question-suggest-ac-wrap" class\x3d"question-suggest-ac-wrap"\x3e\x3c/div\x3e\n    \x3c/div\x3e\n    \x3cdiv class\x3d"zg-section-big"\x3e\n      \x3cdiv style\x3d"display: none;position: relative;" class\x3d"zm-modal-dialog-warnmsg-wrapper"\x3e\n        \x3cdiv class\x3d"zm-modal-dialog-warnmsg zm-modal-dialog-guide-warn-message zg-r5px"\x3e\x3c/div\x3e\n        \x3ca name\x3d"close" title\x3d"关闭" href\x3d"javascript:;" class\x3d"zu-global-notify-close" style\x3d"display:none"\x3ex\x3c/a\x3e\n        \x3cspan class\x3d"zm-modal-dialog-guide-title-msg"\x3e\x3c/span\x3e\n      \x3c/div\x3e\n      \x3cdiv class\x3d"add-question-section-title"\x3e\n        \x3cspan class\x3d"zg-right extra-editor-toolbar hidden-phone"\x3e\n          \x3cdiv class\x3d"js-toggle-editor-toolbar"\x3e\x3ci class\x3d"tr-inline-icon z-ico-textedit"\x3e\x3c/i\x3e\x3c/div\x3e\n          \x3cdiv class\x3d"js-editor-add-pic"\x3e\x3ci class\x3d"tr-inline-icon tr-image"\x3e\x3c/i\x3e\x3c/div\x3e\n          \x3cdiv class\x3d"js-editor-add-video"\x3e\x3ci class\x3d"tr-inline-icon tr-video"\x3e\x3c/i\x3e\x3c/div\x3e\n        \x3c/span\x3e\n        问题说明（可选）：\n        \x3cspan id\x3d"zh-question-form-detail-err"\x3e\x3c/span\x3e\n      \x3c/div\x3e\n      \x3cdiv id\x3d"zh-question-suggest-detail-container"\x3e\n        \x3cdiv class\x3d"zm-editable-content" data-disabled\x3d"1"\x3e\x3c/div\x3e\n      \x3c/div\x3e\n    \x3c/div\x3e\n    \x3cdiv class\x3d"zm-add-question-form-topic-wrap"\x3e\n      \x3cdiv class\x3d"add-question-section-title"\x3e\n        \x3cspan class\x3d"zg-gray zg-right hidden-phone"\x3e话题越精准，越容易让相关领域专业人士看到你的问题\x3c/span\x3e\n        选择话题：\n        \x3cspan id\x3d"zh-question-form-tag-err"\x3e\x3c/span\x3e\n      \x3c/div\x3e\n      \x3cdiv id\x3d"zh-question-suggest-topic-container" class\x3d"zm-tag-editor zg-section"\x3e\n        \x3cdiv class\x3d"zm-tag-editor-labels"\x3e\x3c/div\x3e\n        \x3cdiv id\x3d"zh-question-suggest-autocomplete-container"\x3e\x3c/div\x3e\n      \x3c/div\x3e\n    \x3c/div\x3e\n    \x3cdiv class\x3d"zm-command"\x3e\n      ' + (z.Y.uc ? "" : '\x3clabel class\x3d"zm-question-form-hide-in-about-question-el zg-left"\x3e\n        \x3cinput type\x3d"checkbox" value\x3d"1" class\x3d"zg-addq-isanon"\x3e匿名\n      \x3c/label\x3e') + '\n      \x3ca href\x3d"javascript:;" name\x3d"cancel" class\x3d"zm-command-cancel"\x3e取消\x3c/a\x3e\n      \x3ca href\x3d"javascript:;" name\x3d"addq" class\x3d"zg-r5px zu-question-form-add zg-btn-blue"\x3e发布\x3c/a\x3e\n      \x3ca name\x3d"jumpq" class\x3d"zg-r5px zg-btn-blue zu-question-form-jump" style\x3d"display:none;"\x3e查看问题\x3c/a\x3e\n    \x3c/div\x3e\n  \x3c/form\x3e\n\x3c/div\x3e',
        Wv = z.Km.create("AddQuestionForm" + z.Y.be);
    z.e = z.Tv.prototype;
    z.e.C = function() {
        z.Tv.v.C.call(this);
        var a = z.Ye((0, z.ab)(PG));
        this.S().appendChild(a);
        this.Uc = z.Co("zg-editor-input", this.h)[0];
        this.Ml = z.L("zu-question-form-add", this.h);
        this.po = z.L("zu-question-form-jump", this.h);
        this.Kk = z.J("zm-modal-dialog-warnmsg-wrapper");
        this.yu = z.J("js-title-length-err-msg");
        this.iC = z.L("zm-modal-dialog-warnmsg-wrapper", this.h);
        this.kG = z.J("zh-question-form-detail-err");
        this.jD = z.J("zh-question-form-tag-err");
        this.MP = z.L("zu-global-notify-close", this.Kk);
        this.pZ = z.L("zu-global-notify-close",
            this.iC);
        this.uT = z.J("zm-modal-dialog-info-wrapper");
        this.Ou = z.L("zm-modal-dialog-warnmsg", this.Kk);
        z.L("zm-modal-dialog-warnmsg", this.iC);
        this.wF = z.L("zg-addq-isanon", this.h);
        this.jZ = z.L("js-toggle-editor-toolbar", this.h);
        this.qO = z.L("js-editor-add-pic", this.h);
        this.uO = z.L("js-editor-add-video", this.h);
        this.MY = z.L("js-add-question-splash", this.h);
        this.qJ = z.L("js-add-question-form", this.h);
        this.hF = z.J("js-before-ask");
        this.sQ = z.J("zh-question-suggest-detail-container");
        this.oZ = z.J("zh-question-suggest-topic-container");
        this.lA();
        this.sB ? ($v(this, !0), this.kA()) : (this.xp(), $v(this, !1));
        z.Y.uc && nw(this)
    };
    z.e.Cl = z.m(31);
    z.e.show = z.Dq(function(a) {
            this.J = window.$.extend({ In: null, Ok: null }, a || {});
            this.F(!0)
        },
        !0,
        "#ask");
    z.e.Wm = function() {
        z.Tv.v.Wm.call(this);
        this.J = {}
    };
    z.e.lA = function() {
        this.La("提问");
        z.Zh(this, 550);
        z.Rh(this, null);
        this.H = (0, window.$)(this.h);
        this.H.addClass("absolute-position");
        this.F(!0);
        this.ga()
    };
    z.e.xp = z.Wh(function() {
        bw(this);
        this.hc();
        Vv(this)
    });
    z.e.xr = {};
    z.e.xr
        .hC =
        '\x3c% forEach(questions, function(q, i) { q \x3d q.data; %\x3e\x3cdiv class\x3d"ac-row" data-url_token\x3d"\x3c%\x3dq.url_token%\x3e" data-answer_count\x3d"\x3c%\x3dq.answer_count%\x3e"\x3e\x3c% if (q.is_star) { %\x3e\x3ca class\x3d"zg-star" data-tooltip\x3d"s$b$优质问答" href\x3d"/question/\x3c%\x3dq.url_token%\x3e"\x3e\x3c/a\x3e\x3c% } %\x3e\x3ca class\x3d"zippy-indicator"\x3e\x3ci\x3e\x3c/i\x3e\x3c/a\x3e\x3ca style\x3d"color:#222" href\x3d"/question/\x3c%\x3dq.url_token%\x3e?q\x3d\x3c%\x3d token %\x3e"\x3e\x3c%\x3dq.title%\x3e\x3c/a\x3e \x3cspan class\x3d"zm-ac-gray"\x3e\x3c%\x3d parseInt(q.answer_count) \x3e 0 ? q.answer_count + " 个回答" : "还没有回答" %\x3e \x3c/span\x3e\x3c/div\x3e\x3c% }) %\x3e';
    z.e.xr
        .UO =
        '\x3c% forEach(answers, function(a, i) { %\x3e\x3cdiv class\x3d"zippy-row"\x3e\x3cdiv class\x3d"summary-item"\x3e\x3ca class\x3d"inline-block zm-item-vote-count" href\x3d"/question/\x3c%\x3dquestion_url_token%\x3e/answer/\x3c%\x3da.url_token%\x3e"\x3e\x3c%\x3da.vote_count%\x3e\x3c/a\x3e\x3c% if (a.author.url_token) { %\x3e\x3ca class\x3d"inline-block" href\x3d"/people/\x3c%\x3da.author.url_token%\x3e"\x3e\x3cspan class\x3d"author"\x3e\x3c%-a.author.name%\x3e\x3c/span\x3e \x3c/a\x3e\x3c% } else { %\x3e\x3cspan class\x3d"inline-block anon-author"\x3e\x3c%-a.author.name%\x3e\x3c/span\x3e \x3c% } %\x3e\x3cspan class\x3d"inline-block summary ellipsis"\x3e\x3c%\x3da.summary_text%\x3e\x3c/span\x3e\x3ca class\x3d"inline-block" href\x3d"/question/\x3c%\x3dquestion_url_token%\x3e/answer/\x3c%\x3da.url_token%\x3e"\x3e阅读全部 »\x3c/a\x3e\x3c/div\x3e\x3c/div\x3e\x3c% }) %\x3e';
    z.e.kA = function() {
        function a() {
            $v(b, !1);
            b.Uc.value = d.value
        }

        var b = this, c = (0, z.Zv)(this.xr.hC), d = this.hF, f = new Rs;
        this.iO = new z.Qs(d,
        {
            source: "/question/autocomplete",
            ej: d.offsetParent,
            rd: function() {},
            render: function(b, f, k) {
                b = (0, window.$)(b.m());
                b.html(c({ forEach: z.A, questions: k, token: (0, window.encodeURIComponent)(this.gc) }));
                0 < k.length &&
                    b.prepend('\x3cdiv class\x3d"ac-row ac-first"\x3e\x3cb\x3e你想问的是不是：\x3c/b\x3e\x3c/div\x3e')
                    .append((0, window
                        .$
                    )('\x3cdiv class\x3d"ac-row ac-last iwanttoask"\x3e\x3ca href\x3d"#"\x3e不是，我要提一个新问题 »\x3c/a\x3e\x3c/div\x3e'));
                0 === k.length &&
                    d.value &&
                    (b
                        .html('\x3cdiv class\x3d"ac-row ac-last iwanttoask"\x3e\x3ca href\x3d"#"\x3e没有找到相关问题，马上提问 »\x3c/a\x3e\x3c/div\x3e').show(), k.push("fake row"));
                b.off("click").on("click", ".iwanttoask", a)
            },
            xA: f
        });
        this.iO.io = !1
    };
    z.e.resetForm = function() {
        this.Uc.value = "";
        this.Ma && this.Ma.qw();
        this.Kk && z.P(this.Kk, !1);
        this.Ma.reset()
    };
    z.e.hc = function() {
        this.o().g(this.h, "click", this.IR);
        this.qU && this.qU.w(this.Uc);
        this.SK = new z.Nr(this.Uc);
        this.o().g(this.SK, "change", this.pK);
        this.o().g(this.MP,
            "click",
            function() {
                z.P(this.Kk, !1);
                z.P(this.uT, !0)
            });
        this.o().g(this.pZ, "click", function() { z.P(this.iC, !1) });
        this.o().g(this, "afterhide", function() { fw(this) });
        ew(this)
    };
    z.e.IR = function(a) {
        if (a = z.yr(this.h, a.target))
            switch (a = a.name, a) {
            case "expand":
                z.S.add(this.h, "zg-qform-expanded");
                break;
            default:
                this.Ht(a)
            }
    };
    z.e.Ok = function() {
        var a = z.Dn(this.xhr);
        if (!a) return dw(this, !1), z.T.message("网络异常");
        if (a.r) {
            if (281 === a.errcode) {
                var b = new jw;
                b.Xe = a.msg;
                b.level = 3;
                gw(this, b, !0)
            } else z.T.message(a.msg);
            dw(this, !1)
        } else
            z.si.set("__Q_ISNEWLYCREATED__", "yep"), Wv.clear(), (0, window.$)(window)
                .off("beforeunload.AddQuestionForm"), a = a.msg, b = a
                .match(/\/question\/(\d+)/)[1], this.J.Ok ? this.J.Ok({ url: a, Ga: b }) : window.location.href = a
    };
    z.e.Ht = function(a) {
        if ("cancel" === a) this.F(!1);
        else if ("addq" === a) {
            a = kw(this);
            var b = hw(this);
            if (!(1 < b.level || 1 < a.level)) {
                var c = lw(this), d = new jw;
                3E3 < Ar(c) ? (d.level = 3, d.Xe = "请控制在 3000 字以下") : d.level = 0;
                c = 1 < d.level;
                this.kG.innerHTML = d.Xe;
                z.P(this.kG, c);
                cw(this, c, "detail");
                this.nK()
            }
            cw(this, 1 < b.level || 1 < a.level, "title");
            this.pG
                ? gw(this, 1 < a.level ? a : b, !0)
                : (0, window.$)(this.Ml).attr("disabled") ||
                (dw(this, !0), this.xhr = new z.ep(!0), this.o().ta(this.xhr, "success", this.Ok), this.xhr
                        .ajax("/question/add", mw(this).Ed()),
                    this.Ma.trackEvent())
        }
    };
    z.e.pK = function() {
        var a = kw(this), b = hw(this);
        "toolong" === a.name || "buffer" === a.name
            ? (this.yu.innerHTML = a.Xe, z.P(this.yu, !0))
            : (this.yu.innerHTML = a.Xe, z.P(this.yu, !1));
        "multiquestionmark" === b.name || "duplicatedquestion" === b.name ? gw(this, b, !0) : gw(this, b, !1);
        cw(this, 1 < b.level, "title")
    };
    z.e.nK = function() {
        var a = !1;
        1 > this.Ma.data.length
            ? (a = !0, this.jD.innerHTML = "至少添加一个话题")
            : 5 < this.Ma.data.length && (a = !0, this.jD.innerHTML = "最多添加五个话题");
        z.P(this.jD, a);
        cw(this, a, "topic")
    };
    z.e.yV = function() { this.Yb && Sv(this.Yb) };
    ow.prototype.init = function() {
        var a = (0, window.$)("#zh-question-related-questions");
        if (a.length) {
            var b = (0, window.$)("li", a),
                c = function(a, b, c) {
                    var h = 1, k = Math.ceil(a.length / b);
                    return {
                        next: function() { 1 !== k && (h = h === k ? 1 : h + 1, c(h)) },
                        cQ: function() {
                            var c = (h - 1) * b;
                            return a.slice(c, c + b)
                        }
                    }
                }(b,
                    5,
                    function() {
                        b.attr("hidden", "true");
                        c.cQ().removeAttr("hidden")
                    });
            (0, window.$)(".next", a).click(function() {
                c.next();
                z.W("question_answer", "click_sidebarrelatedquestions_pager")
            });
            b.each(function(a, b) {
                z.V.Ya(b,
                    { module: "QuestionItem" },
                    function() {
                        return {
                            card: { card_type: "Content", content: { type: "Question", id: b.getAttribute("data-id") } }
                        }
                    })
            })
        }
    };
    z.p(z.pw, z.dk);
    z.pw.prototype.B = function() {
        z.dk.prototype.B.call(this);
        this.aa((0, window.$)(".phone-verification-template").html())
    };
    z.pw.prototype.C = function() {
        z.dk.prototype.C.call(this);
        var a = (0, window.$)(".view.verification", this.dd), b = new z.xk(this.Ro);
        this.K(b);
        b.td(this.fg);
        b.w(a[0])
    };
    z.p(qw, z.Q);
    qw.prototype.C = function() {
        z.Q.prototype.C.call(this);
        this.vf()
    };
    qw.prototype.vf = function() {
        var a = this, b = this.m();
        this.vl = (0, window.$)(".SignFlow-panel", b);
        this.vl.on("click",
            ".switch-to-login",
            function() {
                a.vl.filter(":visible").attr("hidden", !0).siblings().removeAttr("hidden");
                a.sa({ category: "sign_in", action: "switch_to_sign_in_box_appear" });
                z.V.trackEvent(a.vl, { action: "Click", element: "Button", element_name: "SignIn" })
            });
        var c = (0, window.$)(".LoginForm", b)[0], d = new z.tk({ Un: z.uk });
        d.td(this.fg);
        d.w(c);
        b = (0, window.$)(".SignupForm", b)[0];
        c = new z.wk;
        c.td(this.fg);
        c.w(b);
        c.g("success",
            function(b) {
                b = new z.pw(b.data);
                b.yb(a);
                b.F(!0)
            })
    };
    z.Ca(qw.prototype, z.an);
    z.p(rw, z.Pj);
    rw.prototype.C = function() {
        z.Pj.prototype.C.call(this);
        z.Zh(this, 310)
    };
    rw.prototype.B = function() {
        z.Pj.prototype.B.call(this);
        this
            .aa('\x3cp class\x3d"title DownloadAppDialog-title"\x3e扫描二维码下载知乎 App\x3c/p\x3e\n  \x3cdiv class\x3d"DownloadAppDialog-QRCode"\x3e\x3c/div\x3e')
    };
    z.p(sw, z.R);
    sw.prototype.C = function() {
        z.R.prototype.C.call(this);
        this.La("下载知乎客户端");
        z.Zh(this, 310);
        this.Fe(!0)
    };
    sw.prototype.B = function() {
        z.R.prototype.B.call(this);
        this
            .aa('\x3cp class\x3d"title DownloadAppDialog-title"\x3e扫描二维码下载知乎 App\x3c/p\x3e\n  \x3cdiv class\x3d"DownloadAppDialog-QRCode"\x3e\x3c/div\x3e')
    };
    tw.prototype.init = function() {
        this.rA();
        uw();
        vw();
        ww(this)
    };
    tw.prototype.rA = function() {
        var a = (0, window.$)("#SidebarSignFlow")[0];
        if (a) {
            var b = function(b) {
                var d = (0, window.$)(".account", a);
                b || d.attr("name", "account").attr("aria-label", "手机号或邮箱").attr("data-placeholder", "手机号或邮箱");
                (0, window.$)("[data-placeholder]", a).attr("placeholder",
                    function() { return (0, window.$)(this).attr("data-placeholder") })
            };
            window.$.get("/register/is_domestic").then(function(c) {
                b(c.value);
                c = new qw;
                c.td("sidebar_signflow");
                c.w(a)
            })
        }
    };
    z.p(xw, z.Q);
    xw.prototype.C = function() {
        var a = this;
        z.Q.prototype.C.call(this);
        var b = this.m(),
            c = (0, window.$)(b),
            d = c.find(".shameimaru-link"),
            f = c.find(".shameimaru-close"),
            g = c.find(".shameimaru-pixel"),
            h = c.data("close"),
            k = c.data("info"),
            l = JSON.parse(c.find('meta[itemprop\x3d"view_url"]').attr("content"));
        z.V
            .Ya(this,
                { module: "AdItem" },
                function() { return { card: { card_type: "Content", content: [z.zw(k)] } } });
        z.vn(b,
            function() {
                z.V.trackCardShow(a, { element: "Image" });
                l.forEach(function(a) { return z.yw(a) })
            });
        d.one("click",
            function() {
                var a =
                    d.attr("href");
                d.attr("href", z.Eo(a, "click", 1))
            });
        g.on("load", function() { z.V.trackEvent(a, { element: "Image", action: "Load" }) });
        f.one("click",
            function(b) {
                b.preventDefault();
                z.yw(h);
                z.V.trackEvent(a, { element: "Button", action: "Ignore" });
                c.fadeOut(500, function() { return c.remove() });
                a.dispose()
            })
    };
    z.p(Bw, z.Q);
    Bw.prototype.init = function() {
        var a = (0, window.$)(".AppPromotionBar");
        this.Ke = a;
        var b = this;
        if (a.length && (0, window.$)("html").hasClass("is-AppPromotionBarVisible"))
            a.on("click",
                ".AppPromotionBar-closeButton, .AppPromotionBar-downloadButton",
                function() {
                    (0, window.$)(this).hasClass("AppPromotionBar-downloadButton")
                        ? z.W("app-promotion", "click_mobileweb_app_dl_bar_download_btn")
                        : z.W("app-promotion", "click_mobileweb_app_dl_bar_close_btn");
                    z.si.set("hideAppPromotionBar", "true");
                    b.qC()
                })
    };
    Bw.prototype.qC = function() {
        var a = this.Ke;
        a.addClass("is-hidden");
        (0, window.setTimeout)(function() { a.remove() }, 200)
    };
    z.p(Dw, z.Q);
    Dw.prototype.init = function() {
        this.Ke = (0, window.$)(".DownloadGuide");
        var a = this,
            b = /Android/.test(window.navigator.userAgent),
            c = /iPhone|iPad/.test(window.navigator.userAgent),
            d = /MicroMessenger/.test(window.navigator.userAgent),
            f = /Weibo/.test(window.navigator.userAgent);
        /douban/.test(window.navigator.userAgent);
        (0, window.$)(".DownloadGuide-downloadButton").on("click",
            function() {
                z.V.trackEvent(this, { action: "Download", name: "downloadGuideButton" });
                Cw(function() {
                    window.location.href = d
                        ? "http://a.app.qq.com/o/simple.jsp?pkgname\x3dcom.zhihu.android\x26g_f\x3d991703"
                        : f
                        ? "http://t.cn/Rt8oSLV"
                        : b
                        ? "http://api.zhihu.com/client/download/apk"
                        : c ? "itms-apps://itunes.apple.com/app/apple-store/id432274380" : "https://www.zhihu.com/app"
                })
            });
        (0, window.$)(".DownloadGuide-header").on("click",
            function() { z.V.trackEvent(this, { action: "Click", name: "header" }) });
        (0, window.$)(".DownloadGuide-resumeButton").on("click",
            function() {
                z.V.trackEvent(this, { action: "Click", name: "resume" });
                a.qC()
            })
    };
    Dw.prototype.qC = function() {
        var a = this.Ke;
        a.addClass("is-hidden");
        (0, window.setTimeout)(function() { a.remove() }, 600)
    };
    var Gw;
    z.p(Jw, z.Q);
    z.e = Jw.prototype;
    z.e.init = function() {
        var a = window.document.querySelector(".js-WechatLoginIntro");
        a && this.w(a)
    };
    z.e.C = function() {
        z.Q.prototype.C.call(this);
        this.h.querySelector(".js-login").addEventListener("click", this.ZS.bind(this));
        this.h.querySelector(".js-other").addEventListener("click", this.ES.bind(this));
        this.h.querySelector(".js-close").addEventListener("click", this.close.bind(this));
        z.ui({ action: "show", category: "wechat-login-intro" })
    };
    z.e.ZS = function() { z.ui({ category: "wechat_login_intro", action: "click_main" }) };
    z.e.ES = function() {
        (new z.uk).show();
        z.ui({ category: "wechat_login_intro", action: "click_other" })
    };
    z.e.close = function() {
        this.h.parentNode.removeChild(this.h);
        window.$.post("/intro/wechat/uninterest");
        z.ui({ category: "wechat_login_intro", action: "close" })
    };
    z.p(Kw, z.Q);
    z.e = Kw.prototype;
    z.e.init = function() {
        var a = this, b = JSON.parse(window.localStorage.getItem("zhihu::wechat_oauth"));
        if (z.lj && z.Y.jb() && !b) {
            var b = JSON.parse(window.localStorage.getItem("zhihu::oauth_status")) || {}, c = b.isError;
            "wechat_mp_quick_bind" === b.type
                ? (this.template = '\x3cdiv class\x3d"wechat-binding-result is-active"\x3e\x3c/div\x3e', this
                    .EA = c, this.jb = !0, this.render(window.document.body), window.localStorage
                    .removeItem("zhihu::oauth_status"), window.localStorage.setItem("zhihu::wechat_oauth", !0))
                : (this.template = (0, window.$)("#wechat-binding").html(),
                    window.$.get("/oauth/bind").then(function(b) { b.data.wechat || a.render(window.document.body) }))
        }
    };
    z.e.B = function() {
        z.Q.prototype.B.call(this);
        this.h = z.M("div", { innerHTML: this.template })
    };
    z.e.C = function() {
        z.Q.prototype.C.call(this);
        this.H = (0, window.$)(this.h);
        this.jb
            ? (this.Rb = this.H.find(".wechat-binding-result"), this.Rb
                .text(this.EA ? "该微信已绑定其他知乎帐号" : "成功绑定微信账号"), this.Rb.on("click", this.bI.bind(this)), (0, window
                .setTimeout)(this.bI.bind(this), 5E3))
            : (this.Rb = this.H.find(".wechat-binding"), this.H.on("click", ".js-submit", this.Tz.bind(this)), this.H
                .on("click", ".js-cancle", this.FR.bind(this)), this.show())
    };
    z.e.bI = function() {
        this.Rb && this.Rb.length && (this.Rb.removeClass("is-active"), this.Rb.remove(), this.Rb = null)
    };
    z.e.Tz = function() {
        window.location.href = "/oauth/redirect/bind/wechat_mp_quick_bind?from\x3d" + window.location.pathname
    };
    z.e.FR = function() {
        window.localStorage.setItem("zhihu::wechat_oauth", !0);
        this.hide()
    };
    z.e.show = function() { this.Rb.addClass("is-active") };
    z.e.hide = function() { this.Rb.removeClass("is-active") };
    z.ka(Lw);
    var Nw = z.Km.create("Report" + z.Y.be);
    Lw.prototype
        .bO =
        '\x3cdiv id\x3d"zh-feedback-form"\x3e\x3cselect name\x3d"type" class\x3d"zg-editor-type zg-right"\x3e\x3coption value\x3d"help"\x3e使用帮助 \x3c/option\x3e\x3coption value\x3d"bug"\x3e问题反馈\x3c/option\x3e\x3coption value\x3d"search_suggest"\x3e搜索反馈\x3c/option\x3e\x3coption value\x3d"suggest"\x3e功能建议\x3c/option\x3e\x3c/select\x3e\x3cdiv class\x3d"zg-report-title"\x3e\x3cspan class\x3d"zg-gray-darker"\x3e请填写你的反馈内容\x3c/span\x3e\x3cspan class\x3d"zg-report-msg" style\x3d"display:none;"\x3e请选择反馈种类：\x3c/span\x3e\x3c/div\x3e\x3cdiv class\x3d"zg-editor-simple-wrap zg-form-text-input zg-report-content"\x3e\x3ctextarea class\x3d"zg-editor-input" name\x3d"content"\x3e\x3c/textarea\x3e\x3c/div\x3e\x3c/div\x3e';
    Lw.prototype.defaults = { title: "建议和反馈" };
    Lw.prototype.vf = function(a) {
        var b = (0, window.$)("#zh-feedback-form"), c = (0, window.$)("select", b), b = (0, window.$)("textarea", b);
        new z.Nr(b[0]);
        c.toggle(!a.type);
        b.html(Nw.get("content") || "");
        b.on("input change", function() { Nw.set("content", this.value) })
    };
    Lw.prototype.create = function(a) {
        var b = window.$.extend(this.defaults, a || {});
        z.T.confirm(b.title, this.bO, function(a) { if (a) return Mw(b) }, this);
        this.vf(b)
    };
    var QG, SG;
    SG = {
        "rt:button": function() { (0, z.RG)(this, "roundtable", null, ["zg-btn-follow", "zg-btn-unfollow"]) },
        "rt:link": function() { (0, z.RG)(this, "roundtable", null, null, { follow_text: "关注圆桌" }) },
        "c:link": function() { (0, z.RG)(this, "column", null, null, { follow_text: "关注专栏" }) },
        "c:button": function() { (0, z.RG)(this, "column", null, ["zg-btn-follow", "zg-btn-unfollow"]) },
        "q:link": function() { (0, z.RG)(this, "question", null, null, { follow_text: "关注问题" }) },
        "m:link": function() {
            var a = this.getAttribute("data-follow_text");
            (0, z.RG)(this,
                "people",
                null,
                null,
                a ? { follow_text: a } : {})
        },
        "t:link": function() { (0, z.RG)(this, "topic", null, null, { follow_text: "关注话题" }) },
        "t:link:simple": function() { (0, z.RG)(this, "topic") },
        "m:button": function() {
            var a = this;
            (0, z.RG)(a,
                "people",
                function() {
                    a.getAttribute("data-followme") &&
                    (z.S.has(a, "zg-btn-follow")
                        ? a.setAttribute("data-tooltip", "s$b$对方已关注你")
                        : a.setAttribute("data-tooltip", "s$b$已互相关注"))
                },
                ["zg-btn-follow", "zg-btn-unfollow"])
        },
        "q:fi:button": function() {
            var a = this;
            (0, z.RG)(a,
                "question",
                function(b) {
                    (0, window.$)(".label",
                        a).text(b ? "取消关注" : "关注");
                    var c = (0, window.$)(".count", a);
                    b = Number(c.data("count")) + (b ? 1 : -1);
                    c.length && (b = Math.max(b, 0), c.text("（" + b + "）").data("count", b))
                },
                ["unfollowing", "following"])
        },
        "q:m:button": function() {
            (0, z.RG)(this, "question", null, ["zg-btn-green", "zg-btn-white"], { follow_text: "关注问题" })
        },
        "f:button": function() { (0, z.RG)(this, "favlist", null, ["zg-btn-follow", "zg-btn-unfollow"]) },
        "f:link": function() { (0, z.RG)(this, "favlist", null, null, { follow_text: "关注收藏夹" }) },
        "t:button": function() {
            (0, z.RG)(this,
                "topic",
                null,
                ["zg-btn-follow", "zg-btn-unfollow"])
        },
        "ad:m:button": function() {
            if (z.S.has(this, "zg-btn-view")) return window.open(this.getAttribute("data-view"));
            (0, z.RG)(this,
                "people",
                null,
                ["zg-btn-follow", "zg-btn-view"],
                { follow_text: "关注帐号", unfollow_text: "去往主页" })
        },
        "ad:q:button": function() {
            if (z.S.has(this, "zg-view")) return window.open(this.getAttribute("data-view"));
            (0, z.RG)(this, "question", null, ["zg-follow", "zg-view"], { follow_text: "关注问题", unfollow_text: "查看问题" })
        }
    };
    z.RG = z.Dq(function(a, b, c, d, f) {
        function g(a) { a.r ? z.T.message(a.msg) : h(n) }

        function h(b) {
            b
                ? (z.S.hx(a, k, l), jr(a, f.unfollow_text || "取消关注"))
                : (z.S.hx(a, l, k), jr(a, f.follow_text || "关注" + ((0, window.$)(a).data("gender") || "")));
            z.qa(c) && c(b)
        }

        QG && "pending" === QG.state() && QG.abort();
        f = f || {};
        b = b || a.getAttribute("data-focustype");
        d = d || ["zg-follow", "zg-unfollow"];
        var k = d[0], l = d[1], n = z.S.has(a, k);
        z.U.Bb({ type: "ga_click_follow", target: a, data: { type: b, Ak: n } });
        var q;
        q = {
            roundtable: Pw,
            column: Ow,
            people: jt,
            question: kt,
            topic: mt,
            favlist: lt
        }[b];
        d = a.getAttribute("data-id") || a.id.match(/-(.*)/)[1];
        q &&
        (q = q(d, n), "people" === b && n ? q.done(g) : h(n), QG = q, q =
        {
            type: {
                roundtable: "Roundtable",
                column: "Column",
                people: "User",
                question: "Question",
                topic: "Topic",
                favlist: "Collection"
            }[b]
        }, "people" === b ? q.member_hash_id = d : "roundtable" === b ? q.token = d : q.id = d, z.V
            .trackEvent(a, { action: n ? "Follow" : "UnFollow", element: "Button" }, { content: q }))
    });
    z.y(Qw, z.H);
    var Uw = ["group", "key", "name"];
    Sw.prototype.defaults = { tQ: "帮助信息", By: "shortcut-tips-dialog" };
    Sw.prototype.tc = function() {
        z.pl(z.fn.register("shift+/", this.show, this), { group: "导航", name: "帮助", key: "?" })
    };
    Sw.prototype.show = function() {
        var a = this.J;
        z.T.alert({ title: a.tQ, content: Zw(), className: a.By })
    };
    var ax = z.Lj(function(a) {
        var b = z.tm["ra-urls"], c = b && b[a];
        return c
            ? new window.Promise(function(b) {
                window.$.ajax({ url: c, dataType: "script", cache: !0 }).then(function() { b(window.ra[a]) })
            })
            : window.Promise.reject(Error("Missing react app name: " + a))
    });
    var fx = [];
    z.sp.on("init",
        function() {
            function a() {
                var b = fx.shift();
                b && (b = b[0], b.length ? b(a) : (b(), a()))
            }

            a()
        });
    z.sp.on("init",
        function() {
            (0, window.$)("img.lazy").attr("data-lazyloaded", "")
                .lazyload({
                    load: function() { (0, window.$)(this).trigger("contentchange") },
                    data_attribute: "actualsrc",
                    event: "scroll updatelazy",
                    threshold: 400
                })
        });
    z.sp.on("init", function() { z.Y.email && z.si.set("lastuser:email", z.Y.email) });
    ex(function(a) { z.Y.uc || z.Nm || new tp({ Ok: a }) }, 0);
    ex(function() {
            "#ask" === window.location.hash &&
            (z.Tv.ba().show(), window.history.replaceState
                ? window.history.replaceState(null,
                    window.document.title,
                    window.location.pathname + window.location.search)
                : window.location.hash = "")
        },
        window.Infinity);
    z.sp.on("init", function() { (new ow).init() });
    z.sp.on("init", function() { (new tw).init() });
    z.sp.on("init", function() { Aw() });
    z.sp.on("init", function() { (new Bw).init() });
    z.sp.on("init", function() { (new Dw).init() });
    z.sp.on("init", function() { z.Fw() });
    z.sp.on("init", function() { z.Dk() });
    z.sp.on("init", function() { return (new Jw).init() });
    z.sp.on("init", function() { return (new Kw).init() });
    z.sp.on("init", function() { z.Sk() });
    z.sp.on("postinit", function() { (0, window.$)("#js-feedback-button").click(function() { Lw.ba().create() }) });
    z.sp.on("init",
        function() {
            (0, window.$)(window.document.body).on("click.follow",
                "[data-follow]",
                function() {
                    if (this.name) return Cr("未清除的 name 属性:", this);
                    var a = this.getAttribute("data-follow");
                    (a = a && SG[a]) && a.call(this)
                })
        });
    z.sp.on("postinit", function() { window.FastClick && !z.Qm && window.FastClick.attach(window.document.body) });
    z.sp.on("postinit",
        function() {
            if (z.Y.jb())
                if (window.WebSocket) {
                    var a;
                    a = -1 !== z.sm.wo.indexOf("https")
                        ? z.sm.wo.replace("https", "wss")
                        : z.sm.wo.replace("http", "ws");
                    (new Qw(a)).addEventListener("message",
                        function(a) { un(z.U, JSON.parse(a.data.replace(/^\+;/, ""))) })
                } else
                    a = new oq({
                        url: z.fm,
                        data: { loc: window.location.href, channel: (0, z.I)() + Gn() },
                        dataType: "polling",
                        converters: { "text polling": function(a) { return JSON.parse(a.replace(/^\+;/, "")) } }
                    }), a.addEventListener("message", function(a) { un(z.U, a.data) }), a.mv()
        });
    z.sp.on("init",
        function() {
            new Sw;
            z.tl.prototype.defaults.offsetTop = -60;
            var a = (0, window.$)('div[data-widget\x3d"navigable"], ul[data-widget\x3d"navigable"]');
            if (1 === a.length) {
                var b = a.data("navigable-options"), b = new z.tl(b);
                b.w(a.get(0));
                var c = (0, window.$)("#zh-load-more");
                b.on("action", function(a) { a.data.index >= a.data.size && c.is(":visible") && c[0].click() })
            }
        });
    z.sp.on("init",
        function() {
            (0, window.$)(window.document).on("click",
                'a[href\x3d"#"]',
                function(a) {
                    a
                        .preventDefault()
                })
        });
    z.sp.on("postinit",
        function() {
            var a = window.location.pathname;
            z.Y.jb() && "/" === a || /^\/(question|explore|collection|topic|people|search|roundtable\/)/.test(a)
                ? z.$w("CommentApp")
                : /^\/copyright(\/|$)/.test(a) && z.$w("Copyright")
        });
    z.sp.on("postinit",
        function() {
            (0, window.$)(".js-openProfilePage").on("click",
                function() {
                    var a = (0, window.$)(this).attr("data-url"),
                        a = (0, window
                                .$
                            )("\x3cform target\x3d'_blank' method\x3d'POST' style\x3d'display:none;'\x3e\x3c/form\x3e")
                            .attr({ action: a }).appendTo(window.document.body);
                    (0, window.$)('\x3cinput type\x3d"hidden" /\x3e')
                        .attr({ name: "content", value: (0, window.$)("#performance-profile-data").text() })
                        .appendTo(a);
                    a.submit();
                    a.remove()
                })
        });
    z.sp.on("init",
        function() {
            var a = z.Ai.get("d_c0", ""), b = new z.ep(!0);
            "" === a && b.ajax("/udid", "", "POST")
        });
    z.sp.on("postinit", function() { z.sm.fb || dx() });
    z.y(gx, Eq);
    gx.prototype.add = function(a) { z.rb(this.queue, a) || (this.queue.push(a), z.G(a, "finish", this.VJ, !1, this)) };
    gx.prototype.remove = function(a) { z.tb(this.queue, a) && z.md(a, "finish", this.VJ, !1, this) };
    gx.prototype.D = function() {
        z.A(this.queue, function(a) { a.dispose() });
        this.queue.length = 0;
        gx.v.D.call(this)
    };
    z.y(hx, gx);
    hx.prototype.play = function(a) {
        if (0 == this.queue.length) return !1;
        if (a || this.N == Fq) this.bz = 0, this.Kg();
        else if (1 == this.N) return !1;
        this.Bd("play");
        -1 == this.N && this.Bd("resume");
        var b = -1 == this.N && !a;
        this.startTime = (0, z.I)();
        this.endTime = null;
        this.N = 1;
        z.A(this.queue, function(c) { b && -1 != c.N || c.play(a) });
        return !0
    };
    hx.prototype.pause = function() {
        1 == this.N && (z.A(this.queue, function(a) { 1 == a.N && a.pause() }), this.N = -1, this.Bd("pause"))
    };
    hx.prototype.stop = function(a) {
        z.A(this.queue, function(b) { b.N == Fq || b.stop(a) });
        this.N = Fq;
        this.endTime = (0, z.I)();
        this.Bd("stop");
        this.Lg()
    };
    hx.prototype.VJ = function() {
        this.bz++;
        this.bz == this.queue.length && (this.endTime = (0, z.I)(), this.N = Fq, this.Bd("finish"), this.Lg())
    };
    z.y(lx, z.hj);
    z.e = lx.prototype;
    z.e.init = function() {
        if (!z.rm("back_to_top")) {
            this.h = z.Ye(this.ZY);
            window.document.body.appendChild(this.h);
            var a = new z.oi(this.$u, this.bZ, this);
            this.gM = (0, z.t)(a.fire, a);
            this.o().g(window, "resize", this.qK);
            this.qK()
        }
    };
    z.e.start = function() {
        this.cl || (this.cl = !0, this.o().g(window, "scroll", this.gM).g(this.h, "click", this.eF), this.$u())
    };
    z.e.stop = function() {
        this.cl && (this.cl = !1, this.o().pa(window, "scroll", this.gM).pa(this.h, "click", this.eF), this.hide())
    };
    z.e.qK = function() { z.Qe().width >= this.TU ? this.start() : this.stop() };
    z.e
        .ZY =
        '\x3cdiv class\x3d"zh-backtotop" style\x3d"display:none"\x3e\x3ca data-action\x3d"backtotop" data-tooltip\x3d"s$r$回到顶部" href\x3d"javascript:;" class\x3d"btn-backtotop btn-action"\x3e\x3cdiv class\x3d"arrow"\x3e\x3c/div\x3e\x3cdiv class\x3d"stick"\x3e\x3c/div\x3e\x3c/a\x3e\x3c/div\x3e';
    z.e.eF = function() {
        var a = z.Se(window.document), b = z.Re(window.document), c = b.x, b = b.y, d = new hx, f = this.o();
        d.add(new ar(a, [c, b], [0, 0], this.$X, kx));
        d.add(new fr(this.h, this.Zy, jx));
        f.g(d, "finish", this.zV);
        f.g(d, "begin", this.mV);
        d.play();
        z.U.Bb("ga_click_back_to_top");
        z.V.trackEvent(this, { action: "BackToTop", element: "Button" })
    };
    z.e.mV = function() { this.sx = this.mp = !0 };
    z.e.zV = function() { this.sx = !1 };
    z.e.show = function() {
        (new gr(this.h, this.Zy, ix)).play();
        this.mp = !1
    };
    z.e.hide = function() {
        (new fr(this.h, this.Zy, jx)).play();
        this.mp = !0
    };
    z.e.$u = function() {
        this.sx || (1200 <= z.Re(window.document).y ? this.mp && this.show() : this.mp || this.hide())
    };
    mx.prototype.link = "想来知乎工作？请发送邮件到 jobs@zhihu.com";
    mx.prototype
        .XO =
        "          _____                    _____                    _____                    _____          \n         /\\    \\                  /\\    \\                  /\\    \\                  /\\    \\         \n        /::\\____\\                /::\\    \\                /::\\    \\                /::\\    \\        \n       /:::/    /                \\:::\\    \\              /::::\\    \\              /::::\\    \\       \n      /:::/    /                  \\:::\\    \\            /::::::\\    \\            /::::::\\    \\      \n     /:::/    /                    \\:::\\    \\          /:::/\\:::\\    \\          /:::/\\:::\\    \\     \n    /:::/____/                      \\:::\\    \\        /:::/__\\:::\\    \\        /:::/__\\:::\\    \\    \n   /::::\\    \\                      /::::\\    \\      /::::\\   \\:::\\    \\      /::::\\   \\:::\\    \\   \n  /::::::\\    \\   _____    ____    /::::::\\    \\    /::::::\\   \\:::\\    \\    /::::::\\   \\:::\\    \\  \n /:::/\\:::\\    \\ /\\    \\  /\\   \\  /:::/\\:::\\    \\  /:::/\\:::\\   \\:::\\____\\  /:::/\\:::\\   \\:::\\    \\ \n/:::/  \\:::\\    /::\\____\\/::\\   \\/:::/  \\:::\\____\\/:::/  \\:::\\   \\:::|    |/:::/__\\:::\\   \\:::\\____\\\n\\::/    \\:::\\  /:::/    /\\:::\\  /:::/    \\::/    /\\::/   |::::\\  /:::|____|\\:::\\   \\:::\\   \\::/    /\n \\/____/ \\:::\\/:::/    /  \\:::\\/:::/    / \\/____/  \\/____|:::::\\/:::/    /  \\:::\\   \\:::\\   \\/____/ \n          \\::::::/    /    \\::::::/    /                 |:::::::::/    /    \\:::\\   \\:::\\    \\     \n           \\::::/    /      \\::::/____/                  |::|\\::::/    /      \\:::\\   \\:::\\____\\    \n           /:::/    /        \\:::\\    \\                  |::| \\::/____/        \\:::\\   \\::/    /    \n          /:::/    /          \\:::\\    \\                 |::|  ~|               \\:::\\   \\/____/     \n         /:::/    /            \\:::\\    \\                |::|   |                \\:::\\    \\         \n        /:::/    /              \\:::\\____\\               \\::|   |                 \\:::\\____\\        \n        \\::/    /                \\::/    /                \\:|   |                  \\::/    /        \n         \\/____/                  \\/____/                  \\|___|                   \\/____/         \n";
    z.y(nx, z.hj);
    z.TG = null;
    nx.prototype.init = function() {
        z.TG = this;
        z.ox(this)
    };
    nx.prototype.PV = function() {
        var a = z.Dn(this.Mk);
        a && !a.r && un(z.U, [a])
    };
    var qx = window.localStorage && !z.si.Km() || z.Mm && (!z.Qm || z.Pm);
    z.y(z.rx, z.hj);
    z.e = z.rx.prototype;
    z.e.defaults = { RW: "pm", yv: !1, Gl: !0 };
    z.e.ai = function(a) { this.h = a };
    z.e.m = function() { return this.h };
    z.e.lA = function() {
        this.Na = new z.R(null);
        this.Na.La("发送私信");
        z.Rh(this.Na, null);
        this.Na.Fe(!0);
        this.Na.F(!0);
        this.h = this.Na.S()
    };
    z.e.focus = function() {
        this.init();
        this.Id.focus()
    };
    z.e.init = function() {
        this.cT ||
        (this.cT = !0, this.Cr &&
        (this.Na || this.lA(), this.h
            .innerHTML =
            '\x3cdiv class\x3d"zm-pm-wrap"\x3e\x3cdl class\x3d"zm-form-table zm-form-table-medium"\x3e\x3cdt class\x3d"zm-form-table-head zm-form-table-head-align-middle"\x3e\x3clabel class\x3d"zg-medium-gray"\x3e发给：\x3c/label\x3e\x3c/dt\x3e\x3cdd class\x3d"zm-form-table-field"\x3e\x3cdiv class\x3d"zm-pm-selector-wrap"\x3e\x3cdiv class\x3d"zg-user-name" style\x3d"display:none;padding:4px 0 0 0"\x3e\x3c/div\x3e\x3cinput class\x3d"zg-form-text-input zm-pm-user-selector" type\x3d"text" /\x3e\x3c/div\x3e\x3c/dd\x3e\x3cdt class\x3d"zm-form-table-head zm-form-table-head-align-middle"\x3e\x3clabel class\x3d"zg-medium-gray"\x3e内容：\x3c/label\x3e\x3c/dt\x3e\x3cdd class\x3d"zm-form-table-field zm-form-table-field-last"\x3e\x3cdiv class\x3d"zg-editor-simple-wrap zg-form-text-input"\x3e\x3ctextarea class\x3d"zg-editor-input" style\x3d"font-weight:normal"\x3e\x3c/textarea\x3e\x3c/div\x3e\x3c/dd\x3e\x3c/dl\x3e\x3cdiv class\x3d"zh-pm-warnmsg" style\x3d"display:none;text-align:right;color:#C3412F;"\x3e\x3c/div\x3e\x3cdiv class\x3d"zm-command zg-clear"\x3e\x3cdiv class\x3d"zm-item-meta zg-left" style\x3d"margin: 0 0 0 57px;"\x3e\x3cspan class\x3d"zg-text-counter" style\x3d"display:none"\x3e还可以输入 500 字\x3c/span\x3e\x3cspan class\x3d"additional-info" \x3e\x3c/span\x3e\x3c/div\x3e\x3ca name\x3d"cancel" href\x3d"javascript:;" class\x3d"zm-command-cancel"\x3e取消\x3c/a\x3e\x3ca name\x3d"send" href\x3d"javascript:;" class\x3d"zg-btn-blue zg-r3px" id\x3d"zh-question-pm-send-button"\x3e发送\x3c/a\x3e\x3c/div\x3e\x3c/div\x3e'), this.li =
            z.L("zg-user-name", this.h), this.Id = z.L("zg-editor-input", this.h), this.sd = z
            .L("zm-pm-user-selector", this.h), this.xo = z.L("zm-command", this.h), z.L("zg-text-counter", this.h), this
            .Ou = z.L("zh-pm-warnmsg", this.h), (0, window.$)(".additional-info", (0, window.$)(this.h)), new z
            .Nr(this.Id), this.o().g(this.xo, "click", this.Xa).g(this.li, "click", this.Xa)
            .g(this.Id, "keydown", this.mS), this.sd &&
        ((new z.et("搜索用户")).w(this.sd), this.o().g(this.sd, "blur", this.zP), this.O = new z
            .st("/people/autocomplete?type\x3d" + this.J.RW,
                this.sd,
                null,
                null,
                z.L("zm-pm-wrap", this.h),
                !0), this.O.Vg(!0), this.o().g(this.O, "select", this.aW)), z.Y.Sd || ux(this, "未激活用户，不能发送私信。请先激活邮箱。"))
    };
    z.e.mS = function(a) { 13 === a.keyCode && (a.ctrlKey || a.metaKey) && (this.Qt(), a.preventDefault()) };
    z.e.zP = function() {
        this.zF && (0, window.clearTimeout)(this.zF);
        this.zF = (0, window.setTimeout)((0, z.t)(this.AP, this), 200)
    };
    z.e.AP = function() {
        var a = z.mr(this.sd.value);
        -1 === this.Gn && a && "搜索用户" !== a && ux(this, "请输入对方姓名，从下拉菜单里选择收件人")
    };
    z.e.dr = function(a) { this.AL = a };
    z.e.show = function() {
        this.init();
        this.Cr && (this.Na.F(!0), this.Na.ga())
    };
    z.e.aW = function() {
        var a = z.yb(this.O.Ag(), 1);
        z.tx(this, a[3], a[0], !0)
    };
    z.e.Qt = function() {
        if (!this.Gi || "pending" !== this.Gi.state())
            if (-1 === this.Gn) ux(this, "请填写收信人。");
            else {
                var a = this.Id.value;
                (0, z.ab)(a)
                    ? (a = -1 !== this.qr
                        ? window.$.post("/inbox/reply",
                            { message_id: this.qr, content: a, token: this.AL, type: this.cw })
                        : window.$.post("/inbox/post",
                            { member_id: this.Gn, content: a, token: this.AL, type: this.cw }), a
                        .done((0, z.t)(this.cW, this)), this.Gi = a)
                    : ux(this, "请填写私信内容。")
            }
    };
    z.e.Xa = function(a) {
        if (a = (a = this.vh(a.target)) && a.name)
            switch (a) {
            case "edit":
                this.Gn = -1;
                z.pr(this.sd, this.li);
                break;
            case "cancel":
                this.Cr && this.Na.F(!1);
                break;
            case "send":
                this.Qt()
            }
    };
    z.e.cW = function(a) {
        Br("message", "send_message");
        if (!a) return z.T.message("网络异常");
        if (a.r) return ux(this, a.msg);
        this.Cr && this.Na.F(!1);
        this.J.yv ? window.location.reload() : z.T.message("发送成功")
    };
    vx.prototype.ga = function() {};
    z.y(z.xx, vx);
    z.xx.prototype.ga = function(a, b, c) { z.Cs(this.element, this.yf, a, b, void 0, c, this.KW) };
    z.y(yx, vx);
    yx.prototype.ga = function(a, b, c, d) { z.Cs(Hn(a), 0, a, b, this.Fi, c, null, d) };
    z.y(zx, z.xn);
    zx.prototype.setPosition = function(a) {
        this.nv = a || void 0;
        this.W() && this.ga()
    };
    zx.prototype.ga = function() {
        if (this.nv) {
            var a = !this.W() && "move_offscreen" != this.Si(), b = this.m();
            a && (b.style.visibility = "hidden", z.P(b, !0));
            this.nv.ga(b, this.aC, this.hB);
            a && z.P(b, !1)
        }
    };
    z.y(z.Bx, zx);
    var Jx = [];
    z.e = z.Bx.prototype;
    z.e.nc = null;
    z.e.className = "goog-tooltip";
    z.e.er = 500;
    z.e.pp = 0;
    z.e.L = function() { return this.ca };
    z.e.attach = function(a) {
        a = z.J(a);
        this.qb.add(a);
        z.G(a, "mouseover", this.Gd, !1, this);
        z.G(a, "mouseout", this.zm, !1, this);
        z.G(a, "mousemove", this.xm, !1, this);
        z.G(a, "focus", this.ye, !1, this);
        z.G(a, "blur", this.zm, !1, this)
    };
    z.e.detach = function(a) {
        if (a) a = z.J(a), Cx(this, a), this.qb.remove(a);
        else {
            for (var b = this.qb.nd(), c = 0; a = b[c]; c++) Cx(this, a);
            this.qb.clear()
        }
    };
    z.e.sz = function() { return this.pp };
    z.e.ge = function(a) {
        a = z.Gd(a, null);
        var b = this.m();
        b && z.Fe(b, a)
    };
    z.e.ai = function(a) {
        var b = this.m();
        b && z.N(b);
        z.Bx.v.ai.call(this, a);
        a
            ? (b = this.ca.wa().body, b.insertBefore(a, b.lastChild), z.Cc(this.il), this.il = new z.th(this.m()), z
                .Ac(this, this.il), z.G(this.il, "focusin", this.Oj, void 0, this), z
                .G(this.il, "focusout", this.jr, void 0, this))
            : (z.Cc(this.il), this.il = null)
    };
    z.e.$d = function() { return z.qf(this.m()) };
    z.e.uz = z.m(40);
    z.e.getState = function() { return this.yn ? this.W() ? 4 : 1 : this.Dm ? 3 : this.W() ? 2 : 0 };
    z.e.ku = function(a) {
        if (!this.W()) return !1;
        var b = z.In(this.m()), c = z.Yg(this.m());
        return b.x <= a.x && a.x <= b.x + c.width && b.y <= a.y && a.y <= b.y + c.height
    };
    z.e.oq = function() {
        if (!z.xn.prototype.oq.call(this)) return !1;
        if (this.anchor) for (var a, b = 0; a = Jx[b]; b++) z.nf(a.m(), this.anchor) || a.F(!1);
        z.sb(Jx, this);
        a = this.m();
        a.className = this.className;
        this.Oj();
        z.G(a, "mouseover", this.Vz, !1, this);
        z.G(a, "mouseout", this.OH, !1, this);
        Lx(this);
        return !0
    };
    z.e.Rk = function() {
        z.tb(Jx, this);
        for (var a = this.m(), b, c = 0; b = Jx[c]; c++) b.anchor && z.nf(a, b.anchor) && b.F(!1);
        this.BK && this.BK.jr();
        z.md(a, "mouseover", this.Vz, !1, this);
        z.md(a, "mouseout", this.OH, !1, this);
        this.anchor = void 0;
        0 == this.getState() && (this.Jv = !1);
        z.xn.prototype.Rk.call(this)
    };
    z.e.jB = function(a, b) {
        this.anchor == a &&
            this.qb.contains(this.anchor) &&
            (this.Jv || !this.M0
                ? (this.F(!1), this.W() || (this.anchor = a, this.setPosition(b || Fx(this, 0)), this.F(!0)))
                : this.anchor = void 0);
        this.yn = void 0
    };
    z.e.Mi = function() { return this.qb };
    z.e.nm = function() { return this.nc };
    z.e.yJ = function(a) {
        this.Dm = void 0;
        if (a == this.anchor) {
            a = this.L();
            var b = a.nm();
            a = b && this.m() && a.contains(this.m(), b);
            null != this.nc && (this.nc == this.m() || this.qb.contains(this.nc)) ||
                a ||
                this.Sl && this.Sl.nc ||
                this.F(!1)
        }
    };
    z.e.Gd = function(a) {
        var b = Ex(this, a.target);
        this.nc = b;
        this.Oj();
        b != this.anchor && (this.anchor = b, Kx(this, b), Ix(this), Dx(this, a))
    };
    z.e.xm = function(a) {
        Dx(this, a);
        this.Jv = !0
    };
    z.e.ye = function(a) {
        this.nc = a = Ex(this, a.target);
        this.Jv = !0;
        if (this.anchor != a) {
            this.anchor = a;
            var b = Fx(this, 1);
            this.Oj();
            Kx(this, a, b);
            Ix(this)
        }
    };
    z.e.zm = function(a) {
        var b = Ex(this, a.target), c = Ex(this, a.relatedTarget);
        b != c &&
        (b == this.nc && (this.nc = null), Lx(this), this
            .Jv = !1, !this
            .W() ||
            a.relatedTarget && z.nf(this.m(), a.relatedTarget)
            ? this.anchor = void 0
            : this.jr())
    };
    z.e.Vz = function() {
        var a = this.m();
        this.nc != a && (this.Oj(), this.nc = a)
    };
    z.e.OH = function(a) {
        var b = this.m();
        this.nc != b || a.relatedTarget && z.nf(b, a.relatedTarget) || (this.nc = null, this.jr())
    };
    z.e.jr = function() { 2 == this.getState() && (this.Dm = z.vd((0, z.t)(this.yJ, this, this.anchor), this.sz())) };
    z.e.Oj = function() { this.Dm && (z.wd(this.Dm), this.Dm = void 0) };
    z.e.D = function() {
        this.F(!1);
        Lx(this);
        this.detach();
        this.m() && z.N(this.m());
        this.nc = null;
        delete this.ca;
        z.Bx.v.D.call(this)
    };
    z.y(Gx, yx);
    Gx.prototype.ga = function(a, b, c) {
        b = Hn(a);
        b = jo(b);
        c = c ? new z.Gg(c.top + 10, c.right, c.bottom, c.left + 10) : new z.Gg(10, 0, 0, 10);
        Fs(this.Fi, a, 4, c, b, 9) & 496 && Fs(this.Fi, a, 4, c, b, 5)
    };
    z.y(Hx, z.xx);
    Hx.prototype.ga = function(a, b, c) {
        var d = new z.Ge(10, 0);
        z.Cs(this.element, this.yf, a, b, d, c, 9) & 496 && z.Cs(this.element, 2, a, 1, d, c, 5)
    };
    z.y(Mx, z.Bx);
    z.e = Mx.prototype;
    z.e.eQ = !1;
    z.e.dQ = 100;
    z.e.yr = !1;
    z.e.Sk = function() {
        Mx.v.Sk.call(this);
        this.vs = Bn(go(this.m()));
        this.anchor && (this.qx = Bn(go(this.anchor)));
        this.yr = this.eQ;
        z.G(this.L().wa(), "mousemove", this.xm, !1, this)
    };
    z.e.Rk = function() {
        z.md(this.L().wa(), "mousemove", this.xm, !1, this);
        this.qx = this.vs = null;
        this.yr = !1;
        Mx.v.Rk.call(this)
    };
    z.e.ku = function(a) {
        if (this.sp) {
            var b = z.In(this.m()), c = z.Yg(this.m());
            return b.x - this.sp.left <= a.x &&
                a.x <= b.x + c.width + this.sp.right &&
                b.y - this.sp.top <= a.y &&
                a.y <= b.y + c.height + this.sp.bottom
        }
        return Mx.v.ku.call(this, a)
    };
    z.e.yJ = function(a) {
        this.Dm = void 0;
        a != this.anchor ||
            Ox(this, this.Rj) ||
            this.nm() ||
            this.Sl && this.Sl.nc ||
            z.B && 0 == this.Rj.x && 0 == this.Rj.y ||
            this.F(!1)
    };
    z.e.xm = function(a) {
        var b = this.W();
        if (this.vs) {
            var c = z.xf(this.L()), c = new z.Ge(a.clientX + c.x, a.clientY + c.y);
            Ox(this, c) ? b = !1 : this.yr && (b = mo(this.vs, c) >= mo(this.vs, this.Rj))
        }
        if (b) {
            if (this.jr(), this.nc = null, b = this.Sl) b.nc = null
        } else 3 == this.getState() && this.Oj();
        Mx.v.xm.call(this, a)
    };
    z.e.Vz = function() { this.nm() != this.m() && (this.yr = !1, this.nc = this.m()) };
    z.e.sz = function() { return this.yr ? this.dQ : Mx.v.sz.call(this) };
    z.y(z.Px, Mx);
    z.e = z.Px.prototype;
    z.e.D = function() {
        z.Px.v.D.call(this);
        z.md(this.Ra, "mouseover", this.QH, !1, this)
    };
    z.e.BA = function(a) { return a.tagName in this.RE && !!a.getAttribute(this.RE[a.tagName]) };
    z.e.QH = function(a) {
        if (a = a.target)
            this.BA(a)
                ? (this.setPosition(null), Qx(this, a))
                : this.yP &&
                (a = z.wf(a, (0, z.t)(this.BA, this), !1, this.C0)) &&
                (this.setPosition(null), Qx(this, a))
    };
    z.e.bv = function(a) { return this.dispatchEvent(a) };
    z.e.ut = function() { return this.qg || this.anchor };
    z.e.Rk = function() {
        z.Px.v.Rk.call(this);
        null != this.qg && Ux(this, this.qg);
        this.qg = null
    };
    z.e.Gd = function(a) {
        var b = Ex(this, a.target);
        b && b != this.anchor ? Qx(this, b) : z.Px.v.Gd.call(this, a)
    };
    z.e.zm = function(a) {
        var b = this.anchor, c = this.getState();
        z.Px.v.zm.call(this, a);
        c == this.getState() || 1 != c && 4 != c || (this.anchor = b, Tx(this))
    };
    z.e.jB = function(a, b) {
        z.Px.v.jB.call(this, a, b);
        this.W() ? (a != this.qg && Ux(this, this.qg), this.qg = a) : Rx(this)
    };
    z.y(Sx, z.Lc);
    z.y(Vx, z.xx);
    Vx.prototype.Xo = function() { return 5 };
    Vx.prototype.ga = function(a, b, c, d) {
        var f = {
                "1-4": "bottom",
                "0-4": "top",
                "0-5": "top",
                "1-5": "bottom",
                "2-5": "top",
                "3-5": "bottom",
                "3-4": "bottom",
                "2-6": "left",
                "2-4": "right"
            },
            g;
        if (this.JE) {
            g = z.Cs(this.element, this.yf, a, b, null, c, 10, d);
            var h = Wx(g, this.yf), k = Wx(g, b);
            g & 496 &&
            (g = z.Cs(this
                .element,
                h,
                a,
                k,
                null,
                c,
                10,
                d), g & 496 &&
            (h = Wx(g, h), k = Wx(g, k), this.JE
                ? z.Cs(this.element, h, a, k, null, c, this.Xo(), d)
                : z.Cs(this.element, h, a, k, null, c, 0, d)));
            this.Cq && (a = (z.ja(h) ? h : this.yf) + "-" + (z.ja(b) ? b : k), this.Cq(f[a], a))
        } else
            z.Cs(this.element,
                this.yf,
                a,
                b,
                void 0,
                c), this.Cq && (a = this.yf + "-" + b, this.Cq(f[a], a))
    };
    z.y(Xx, z.hj);
    z.e = Xx.prototype;
    z.e.dI = { t: 0, r: 2, b: 1, l: 2 };
    z.e.Vh = function() {
        var a = this.Fa, b = (0, window.$)('\x3cdiv id\x3d"zh-' + this.hb + '"\x3e\x3c/div\x3e'), c = null;
        (0, window.$)("body").append(b);
        a.ai(b[0]);
        a.on("show",
            function(a) {
                (0, window.clearTimeout)(c);
                b.addClass("in");
                z.U.Bb({ type: "ga_hover_hovercard", target: a.target.ut() })
            }).on("hide",
            function() {
                b.css({ display: "block", visibility: "visible" }).removeClass("in").addClass("out");
                c = (0, window.setTimeout)(function() {
                        b.removeClass("out").css({ display: "none", visibility: "hidden" })
                    },
                    1E3)
            })
    };
    z.e.init = function() {
        if (!z.sm.fb && !z.rm("tooltip")) {
            var a = this.Rs = "data-" + this.hb;
            this.Fa = new z.Px({ A: a, SPAN: a, BUTTON: a, I: a, DIV: a, INPUT: a, IMG: a });
            this.Fa.er = this.DY;
            this.Fa.pp = this.jT;
            this.Vh();
            this.o().g(this.Fa, "trigger", this.bv).g(this.Fa, "beforeshow", this.oq).g(this.Fa, "show", this.Vf)
                .g(this.Fa, "beforehide", this.WJ)
        }
    };
    z.e.WJ = function() {};
    z.e.oq = function() {
        var a = this.Fa.ut(), b = a.getAttribute(this.Rs).split("$");
        this.dG = a;
        this.Zl = b[0];
        this.Ho = b[2];
        this.Yl = b[1];
        this.Fa.m().setAttribute("data-theme", a.getAttribute("data-theme") || "");
        this.FM();
        Zx(this)
    };
    z.e.Vf = function() {};
    z.e.FM = function() {
        var a;
        a = this.Ho;
        var b = [];
        b.push('\x3cdiv class\x3d"tooltip-arrow"\x3e\x3c/div\x3e');
        b.push('\x3cdiv class\x3d"tooltip-inner content-prewrap"\x3e');
        b.push(co(a));
        b.push("\x3c/div\x3e");
        a = b.join("");
        $x(this, a)
    };
    z.e.Mx = function() { return Yx('\n    \x3cdiv class\x3d"zh-hovercard-spinner"\x3e\x3c/div\x3e\n  ', !0) };
    z.e.bv = function(a) {
        var b = this.Rs, c = (a = a.anchor) && a.getAttribute(b), d = c.split("$"), b = null;
        c && 1 < d.length
            ? (b = d[1], a.title && (a.setAttribute("data-original_title", a.title), a.removeAttribute("title")), this
                .ZF = b = new Vx(a, this.dI[b], "b" === b || "t" === b), a = (0, z.t)(this.lK, this), b.Cq = a, this.Fa
                .className = "tooltip")
            : Rx(this.Fa)
    };
    z.e.lK = function(a, b) {
        var c = this.Fa.m();
        z.S.remove(c, "top", "bottom", "left", "right");
        z.S.add(c, a);
        var d = z.Qn(c), f = z.Qn(this.dG), g = new z.Ge(c.offsetLeft, c.offsetTop);
        if ("t" === this.Yl || "b" === this.Yl) {
            var d = (d.width - f.width) / 2, h = g.x - d;
            if ("s" === this.Zl) z.Ig(c, "left", h + "px");
            else {
                var h = z.rb(["2-5", "3-5", "3-4", "2-4"], b),
                    k = (0, window.$)(".zh-hovercard-spinner", c)[0],
                    l = z.L("arrow", c),
                    n = z.L("arrow2", c);
                k
                    ? z.Ig(c, "left", g.x - d + "px")
                    : h ? z.Ig(c, "left", g.x + 83 + "px") : z.Ig(c, "left", g.x - 70 + "px");
                var q = f.width / 2;
                l &&
                    n &&
                    (k ||
                    (h
                        ? z.A([l, n],
                            function(a) {
                                z.Ig(a, "left", "auto");
                                z.Ig(a, "right", q + 70 + "px")
                            })
                        : z.A([l, n], function(a) { z.Ig(a, "left", q + 70 + "px") })))
            }
        } else z.Ig(c, "top", g.y - (d.height - f.height) / 2 + "px"), "l" === this.Yl && z.Qg(c, g.x - f.width)
    };
    z.y(ay, Xx);
    var cy = {
        p: "MemberProfileCardV2",
        t: "TopicProfileCardV2",
        c: "ColumnProfileCardV2",
        r: "RoundtableProfileCardV2"
    };
    z.e = ay.prototype;
    z.e.Vh = function() {
        var a = this.Fa;
        Xx.prototype.Vh.call(this);
        (0, window.$)(a.m()).on("click",
            ".member-profile-card-pm",
            function(b) {
                b.preventDefault();
                var c = (0, window.$)(this);
                a.F(!1);
                z.Dq(function() {
                        var a = new z.rx({ Gl: !1 });
                        a.show();
                        z.tx(a, c.data("pmHash"), c.data("pmName"));
                        z.sx(a, c.attr("href"));
                        a.Id.focus()
                    },
                    !0)()
            })
    };
    z.e.WJ = function() {
        this.yi[this.Zl] &&
            this.yi[this.Zl][this.Ho] &&
            (this.yi[this.Zl][this.Ho] = (0, window.$)(this.Fa.m()).find(".popover-content").html());
        z.V.trackEvent(this.Fa.m(), { action: "Hide", element: "Card" }, { link: { url: this.Fa.ut().href } })
    };
    z.e.Vf = function() {
        z.V.Ya(this.Fa, { module: "HoverCard" });
        z.V.trackCardShow(this.Fa, { element: "Card" })
    };
    z.e.FM = function() { by(this, this.Zl, this.Ho, this.Yl) };
    z.e.bv = function(a) {
        var b = this.Rs, c = (a = a.anchor) && a.getAttribute(b), d = c.split("$"), f = null;
        z.to(a, "no-hovercard")
            ? Rx(this.Fa)
            : c && 1 < d.length
            ? (a
                .title &&
                (a.setAttribute("data-original_title", a.title), a
                    .removeAttribute("title")), f = d[1], 210 > z.Ug(a).y
                ? "t" === f && (f = "b", a.setAttribute(b, c.replace("$t$", "$b$")))
                : (f = "t", a.setAttribute(b, c.replace("$b$", "$t$"))), this
                .ZF = f = new Vx(a, this.dI[f], "b" === f || "t" === f), b = (0, z.t)(this.lK, this), f.Cq = b, this.Fa
                .className = "goog-hovercard popover")
            : Rx(this.Fa)
    };
    z.y(ey, z.Q);
    z.e = ey.prototype;
    z.e.T = function(a) {
        this.h = a;
        this.H = (0, window.$)(this.h);
        this.H.addClass("zh-scroller").css({ position: "relative", overflow: "hidden" })
            .wrapInner('\x3cdiv class\x3d"zh-scroller-content"\x3e\x3c/div\x3e');
        this.H.wrapInner('\x3cdiv class\x3d"zh-scroller-inner"\x3e\x3c/div\x3e');
        this.H.append("\x3cdiv class\x3d'zh-scroller-bar-container'\x3e\x3cdiv\x3e");
        this.H.append('\x3cdiv class\x3d"zh-scroller-bar"\x3e\x3c/div\x3e');
        this.yd = this.H.children(".zh-scroller-inner");
        this.nl = this.H.children(".zh-scroller-bar-container");
        this.Je =
            this.H.children(".zh-scroller-bar");
        this.Rb = this.yd.children(".zh-scroller-content");
        this.rs = this.Je[0];
        this.FT = this.yd[0];
        this.content = this.Rb[0];
        this.ss = this.nl[0];
        this.yd.css({ height: "100%", width: "150%", overflow: "auto" });
        this.Je.css({
            position: "absolute",
            right: this.options.right,
            top: this.options.top,
            opacity: this.options.Ax,
            background: this.options.hP,
            width: this.options.width,
            "border-radius": 3,
            cursor: "default"
        });
        this.nl.css({
            position: "absolute",
            right: this.options.right - 1,
            top: 0,
            height: "100%",
            width: this.options.width,
            background: this.options.QP,
            border: "1px solid #444",
            opacity: 0,
            cursor: "default",
            "border-radius": "2px"
        });
        this.oj(this.rs, !1);
        this.oj(this.ss, !1);
        this.update()
    };
    z.e.C = function() {
        ey.v.C.call(this);
        this.mD = new z.oi(this.FB, 50, this);
        this.options.stopPropagation &&
            this.yd.bind("mousewheel DOMMouseScroll",
                function(a) {
                    var b = null;
                    "mousewheel" === a.type
                        ? b = -1 * a.originalEvent.wheelDelta
                        : "DOMMouseScroll" === a.type && (b = 40 * a.originalEvent.detail);
                    b && (a.preventDefault(), (0, window.$)(this).scrollTop(b + (0, window.$)(this).scrollTop()))
                })
    };
    z.e.enter = function() {
        this.Ny ||
        (this.o().g(this
            .FT,
            "scroll",
            function() { this.mD.fire() }), z.C ||
        (this.o().g(this.ss, "click", this.lV), this.o().g(window.document, "mousedown", this.LV), this.o()
            .g(window.document, "mouseup", this.NV), this.o().g(window.document, "mousemove", this.MV)), this.options.dP
            ? (this.he = new z.td(200), this.o().g(this.he,
                "tick",
                function() {
                    2 === this.rB || 1 === this.rB
                        ? (fy(this), this.wn && this.nl.css({ opacity: this.options.KF }))
                        : this.dt || this.lo || (gy(this, 1E3), this.nl.css({ opacity: 0 }))
                }))
            : (this.Je.css({ opacity: this.options.Ax }),
                this.nl.css({ opacity: this.options.KF })), this.he && this.he.start(), gy(this), this.Ny = !0)
    };
    z.e.LV = function(a) {
        a.target === this.rs &&
            (this.dt = !0, this.iP = a.clientY, this.jP = (0, window.parseInt)(this.Je.css("top"), 10));
        a.target !== this.rs && a.target !== this.ss || this.oj(window.document.body, !1)
    };
    z.e.NV = function() {
        this.dt = !1;
        this.oj(window.document.body, !0)
    };
    z.e.MV = function(a) {
        if (this.dt) {
            var b = hy(this, this.jP + (a.clientY - this.iP));
            this.yd.scrollTop(b)
        }
        this.rB = a.target === this.rs ? 2 : a.target === this.ss ? 1 : 0
    };
    z.e.FB = function() {
        var a = this.yd.scrollTop(), b = this.Rb.height(), c = this.yd.height(), d = a / b * (c - 2 * this.options.top);
        fy(this);
        this.Je.css({ top: d + this.options.top });
        this.dispatchEvent(new iy(this, a, b - a - c))
    };
    z.e.update = function() {
        var a = this.yh(this.yd).height, b = this.yh(this.Rb).height;
        a >= b ? (this.wn = !1, this.Je.hide()) : (this.wn = !0, this.Je.show());
        this.Je.css({ height: a / b * (a - 2 * this.options.top) });
        this.nl.css({ height: a - 2 });
        this.Rb.css({ overflow: "hidden", width: this.H.width(), "min-height": "100%" });
        return this
    };
    z.e.yh = function(a) {
        var b = { height: a.height(), width: a.width() };
        if (!b.height) {
            var c = a.css("display"), d = a.css("position"), f = a.css("visibility");
            a.css({ position: "absolute", display: "block", visibility: "hidden" });
            b = { height: a.height(), width: a.width() };
            a.css({ position: d, display: c, visibility: f })
        }
        return b
    };
    z.e.lV = function(a) { this.scrollTo(hy(this, a.offsetY - this.Je.height() / 2)) };
    z.e.scrollTop = function(a) {
        this.wn && (a = a || 200, fy(this), this.yd.stop().animate({ scrollTop: 0 }, a));
        return this
    };
    z.e.oj = function(a, b) { z.fo(a, !b) };
    z.e.scrollBy = function(a, b) {
        if (this.wn) {
            fy(this);
            var c = b || this.yh(this.yd).height, c = Math.abs(c), c = this.yd.scrollTop() + (a ? -1 : 1) * c;
            this.yd.stop().animate({ scrollTop: c }, 200)
        }
    };
    z.e.scrollTo = function(a) {
        this.wn && (fy(this), this.yd.stop().animate({ scrollTop: a }, 200));
        return this
    };
    z.y(iy, z.Lc);
    z.y(z.jy, z.Q);
    z.jy.prototype.defaults = { LJ: ".tab-nav", AK: ".tab-panel", jh: "active" };
    z.jy.prototype.T = function(a) {
        if (a) {
            this.h = a;
            var b = this, c = this.J;
            this.ul = (0, window.$)(c.LJ, a);
            this.vl = (0, window.$)(c.AK, a);
            this.uk = this.ul.index("." + c.jh);
            this.ul.on("click", function() { b.select(b.ul.index(this)) });
            this.ul.attr("role", "tab").parent().attr("role", "tablist")
        }
    };
    z.jy.prototype.select = function(a) {
        if (!(0 > a || a > this.ul.size()) &&
            (this.dispatchEvent({ type: "action", data: { index: a } }), a !== this.uk)) {
            this.uk = a;
            var b = this.J;
            this.ul.eq(a).addClass(b.jh).attr("aria-selected", "true").siblings().removeClass(b.jh)
                .attr("aria-selected", "false");
            b = this.vl.eq(a);
            this.vl.not(b.show()).hide();
            this.dispatchEvent({ type: "select", data: { index: a } })
        }
    };
    z.jy.prototype.index = function() { return this.uk };
    z.p(ky, z.hj);
    z.e = ky.prototype;
    z.e.init = function() {
        this.cj = z.J("zh-top-nav-live-new");
        this.fE = (0, window.$)(this.cj);
        if (this.Hn = z.J("zh-top-nav-count-wrap"))
            this.Ao = z.M("span",
                { id: "zh-top-nav-count", className: "zu-top-nav-count zg-noti-number", style: "display:none" }), this
                .contents = z.Co("zm-noti7-content", this.cj), this.ey = z.Co("zm-noti7-content-body", this.cj), this.Hn
                .appendChild(this.Ao), this.o().g(this.Hn, "click", this.lM)
                .g(this.Hn, "keypress", function(a) { 32 === a.keyCode && (a.preventDefault(), this.lM()) }), this.o()
                .g(z.U,
                    "notification",
                    this.AS), this.o().g(this.cj,
                "click",
                function(a) {
                    a = a.target;
                    a.href && /group_id=/.test(a.href + "") && (0, window.$)(a).parent(".unread").removeClass("unread")
                }), this.Mw = (0, window.$)(".zm-noti7-popup-tab-container .icon"), ly(this), this.JM ||
            (this.Tg = z.mb(this.contents,
                function(a) {
                    var b = new ey;
                    b.w(a);
                    return b
                })), oy(this), this.bn = z.J("zh-top-nav-pm-count"), this.bn || (this.bn = z.M("span")), this.Um = z
                .J("zh-top-nav-new-pm"), this.Um || (this.Um = z.M("span")), this.mI = (0, window.parseInt)((0, window
                        .$)(this.Um).attr("data-count") ||
                    (0, window.$)(this.bn).attr("data-count"),
                    10) ||
                0, this.o().g(z.U, "inbox", this.lS)
    };
    z.e.AS = function(a) {
        this.UJ = this.pg;
        this.pg = a.Xf;
        this.je = this.pg[0] + this.pg[1] + this.pg[2];
        z.P(this.Ao, !!this.je);
        this.Ao.innerHTML = ry(this.je);
        z.A(this.pg,
            function(a, c) {
                a ? (this.Mw.eq(c).addClass("withdot"), this.cache[c] = !1) : this.Mw.eq(c).removeClass("withdot");
                this.DG && 0 < a - this.UJ[c] && this.tm(c)
            },
            this);
        qy(this)
    };
    z.e.lM = function() {
        this.visible ? z.sm.fb ? uy(this, !1) : uy(this, !!this.je) : uy(this, !0);
        qy(this)
    };
    z.e.tm = function(a) {
        var b = this;
        if (!this.Pi[a]) {
            var c = this.Pi[a] = new z.ep(!1);
            this.o().ta(c,
                "success",
                function() {
                    var b = z.Dn(this.Pi[a]);
                    this.Pi[a] = null;
                    if (b)
                        if (b.r) z.T.message(b.msg);
                        else {
                            this.jy = !0;
                            var c = b.msg;
                            if (c)
                                1 === a &&
                                (c =
                                    '\x3cdiv class\x3d"zm-noti7-content-head-item"\x3e\x3cspan class\x3d"zg-gray-normal"\x3e这些人最近关注了你\x3c/span\x3e\x3c/div\x3e' + c);
                            else {
                                switch (a) {
                                case 0:
                                    c = "暂无新消息";
                                    break;
                                case 1:
                                    c = "有人关注你时会显示在这里";
                                    break;
                                case 2:
                                    c = "你的答案收到赞同、感谢时会显示在这里"
                                }
                                c = '\x3cdiv class\x3d"zm-noti7-popup-empty"\x3e' + c + "\x3c/div\x3e"
                            }
                            this.cache[a] =
                                c;
                            b.hasMore && 0 === this.nq[a] && (this.nq[a] = b.offset);
                            this.xn[a] && (my(this, a), this.xn[a] = !1)
                        }
                });
            this.o().ta(c, "error", function() { return b.Pi[a] = null });
            c.ajax("/noti7/stack/" + this.types[a] + "?limit\x3d10\x26r\x3d" + (0, z.I)(), "", "GET")
        }
    };
    z.e.aB = function(a) {
        var b = this;
        if (this.Pi[a]) return window.Promise.reject("Request already in progress");
        if (0 === this.nq[a]) return window.Promise.resolve(!1);
        var c = this.ey[a],
            d = z.Ye('\x3cdiv class\x3d"text-center"\x3e\x3ci class\x3d"spinner-gray"\x3e\x3c/i\x3e\x3c/div\x3e');
        c.appendChild(d);
        return this.Pi[a] = window.$.get("/noti7/stack/" + this.types[a], { offset: this.nq[a], r: (0, z.I)() })
            .then(function(f) {
                z.N(d);
                if (f)
                    if (f.r) z.T.message(f.msg);
                    else {
                        var g = z.Ye(f.msg);
                        c.appendChild(g);
                        b.Pi[a] = null;
                        b.Tg &&
                            b.Tg[a] &&
                            b.Tg[a].update();
                        b.nq[a] = f.offset;
                        return f.hasMore
                    }
            })
    };
    z.e.lS = function(a) {
        this.mI = a = window.$.isNumeric(a) ? a : a.Xf;
        0 !== a
            ? (this.Um.innerHTML = this.bn.innerHTML = a, this.Um.style.visibility = this.bn.style
                .visibility = "visible")
            : this.Um.style.visibility = this.bn.style.visibility = "hidden";
        qy(this)
    };
    z.e.It = function(a) { z.nf(this.cj, a.target) || z.nf(this.Hn, a.target) || uy(this, !1) };
    z.y(wy, z.Q);
    z.e = wy.prototype;
    z.e.defaults = { trigger: "hover", rK: "open", hideFocus: !1 };
    z.e.Sb = function() { return this.eh.length && this.xd.length };
    z.e.w = function(a) {
        if (a) {
            var b = (0, window.$)(a), c = b.prev();
            this.eh = b;
            this.xd = c;
            this.$parent = b.parent();
            wy.v.w.call(this, a);
            return this
        }
    };
    z.e.toggle = function() { this.Eb() ? this.close() : this.open() };
    z.e.Eb = function() { return this.eh.is(":visible") };
    z.e.open = function() {
        this.eh.attr("aria-hidden", "false").parent().addClass(this.J.rK);
        this.xd.attr("aria-expanded", "true")
    };
    z.e.close = function() {
        this.eh.attr("aria-hidden", "true").parent().removeClass(this.J.rK);
        this.xd.attr("aria-expanded", "false")
    };
    z.e.qV = function(a) {
        var b = a.keyCode;
        switch (b) {
        case 32:
            a.preventDefault();
            this.toggle();
            break;
        case 27:
        case 9:
            this.close();
            break;
        case 38:
        case 40:
            yy(this, 38 === b ? -1 : 0)
        }
    };
    z.e.HV = function(a) {
        var b = a.keyCode;
        switch (b) {
        case 27:
        case 9:
            this.close();
            this.xd.focus();
            break;
        case 38:
        case 40:
            a.preventDefault(), yy(this, this.index + (38 === b ? -1 : 1))
        }
    };
    z.e.C = function() {
        var a = this, b = this.J;
        xy(this);
        this.eh.on("keydown", (0, z.t)(this.HV, this));
        this.xd.on("keydown", (0, z.t)(this.qV, this));
        var c = z.Im ? "click" : b.trigger;
        if ("hover" === c)
            this.$parent.on("hover",
                (0, z.t)(function(a) { "mouseenter" === a.type ? this.open() : this.close() }, this));
        else if ("click" === c)
            this.xd.on("click",
                (0, z.t)(function(a) {
                        a.preventDefault();
                        this.toggle();
                        this.xd.focus()
                    },
                    this));
        this.$parent.on("focusout",
            function() {
                (0, window.setTimeout)(function() {
                    a.$parent.get(0).contains(window.document.activeElement) ||
                        a.close()
                })
            });
        if (b.hideFocus) this.eh.children().find("a").on("click", function() { this.blur() })
    };
    z.p(zy, z.Q);
    z.e = zy.prototype;
    z.e.C = function() {
        z.Q.prototype.C.call(this);
        this.jA()
    };
    z.e.vt = function() { return this.O };
    z.e.vD = function(a, b, c) {
        if (a) {
            var d = { query: (0, z.ab)(this.m().value) };
            z.ui({ Zc: !0, category: "search", action: a, label: b, value: c, attributes: d })
        }
    };
    z.e.jA = function() {
        var a = this, b = this.m();
        z.pl(z.fn.register("/",
                function() {
                    (0, window.setTimeout)(function() { b.focus() });
                    z.rr(b, null, 500)
                }),
            { group: "导航", name: "搜索" });
        var c = new rt, d = b.getAttribute("placeholder") || "搜索你感兴趣的内容...";
        this.O = new z.st("/autocomplete", b, null, null, b.offsetParent, null, [d], null, c);
        this.O.io = !1;
        this.O.Vg(!0);
        this.o().g(this.O, "select", this.Sz).g(this.O,
            pG,
            function() { z.V.trackEvent(a, { action: "Search", element: "InputBox" }, Ey(a)) });
        var f = b.form;
        if (f) {
            var g = this,
                h = function(a) {
                    (0, z.ab)(b.value) ? f.submit() : a.preventDefault()
                };
            this.o().g(b,
                "keydown",
                function(a) {
                    13 === a.keyCode &&
                    (g.vD("visit_search_result", "enter"), z.V
                        .trackEvent(g, { action: "Search", element: "InputBox" }, Ey(g)), h(a))
                });
            this.o().g(f, "submit", h);
            (0, window.$)(":submit", f).click(function() {
                g.vD("visit_search_result", "search_box_submit");
                z.V.trackEvent(g, { action: "Search", element: "Button" }, Ey(g))
            })
        }
        this.o().g(this.O,
            "suggestionsupdate",
            function() {
                a.uA();
                a.ex()
            });
        var k = (0, z.t)(function() { this.O.qG = !(this.metaKey || this.mB) }, this);
        this.o().g(window.document,
            "keydown",
            function(a) { a.metaKey && (this.metaKey = !0, k()) });
        this.o().g(window.document,
            "keyup",
            function(a) { if (91 === a.keyCode || 224 === a.keyCode) this.metaKey = !1, k() });
        this.o().g(window.document,
            "mouseup",
            function(a) {
                z.Qc(a, 1) &&
                (this.mB = !0, k(), (0, window.setTimeout)((0, z.t)(function() {
                            this.mB = !1;
                            k()
                        },
                        this),
                    0))
            });
        this.o().g(b,
            "mousedown",
            function(a) {
                a.stopPropagation();
                return !0
            })
    };
    z.e.uA = function() {
        var a = this.O.M;
        a && a.m() && z.V.Ya(a, { module: "SearchResultList" })
    };
    z.e.ex = function() {
        var a = this.O.Oa, b = this.O.M.lf;
        if (a && 0 !== a.length) {
            if (1 === a.length) {
                var c = z.M("div", { className: "zu-autocomplete-empty" }, "没有找到相关的结果");
                z.cf(c, b[0]);
                z.N(b[0])
            }
            var d = Ey(this);
            z.A(a,
                function(c, g) {
                    Ay(a[g - 1], c) && Cy(this, b[g], c[0]);
                    var h = (0, window.$)("a", b[g]), k = h.data("za-element-name");
                    z.vn(h[0], function() { z.V.trackCardShow(h[0], { element: "Link", element_name: k }, d) })
                },
                this)
        }
    };
    z.e.Sz = function(a) {
        var b = this.O.Ag(), c = this.O.M.Gm, d = z.yb(b, 1), f = d[2], g = null, b = b[0];
        "topic" === b
            ? (g = "/topic/" + d[1], g = Dy(this, g))
            : "people" === b
            ? (g = "/" + ((Array.isArray(d[5]) ? d[5][0] : d[5]) ? "org" : "people") + "/" + d[1], g = Dy(this, g))
            : "question" === b
            ? g = Dy(this, "/question/" + f)
            : "article" === b
            ? g = Dy(this, "https://zhuanlan.zhihu.com/p/" + f)
            : "promotion" === b
            ? g = Dy(this, "https://promotion.zhihu.com/p/" + f)
            : "column" === b
            ? g = Dy(this, "https://zhuanlan.zhihu.com/" + f)
            : "search_link" === b &&
            (g = "/search?q\x3d" +
                (0, window.encodeURI)(d[0]) +
                "\x26type\x3dcontent");
        g &&
        (z.U.Bb({ type: "ga_serach_select", data: { type: b, index: c } }), d = (0, window.$)("a", this.O.M.lf[c])[0], z
                .V
                .trackEvent(d, { action: "OpenUrl", element: "Link" }, { link: { url: d.href } }), d = c + 1,
            (b = {
                    topic: ["visit_topic", "instant_search_result_topic", d],
                    question: ["visit_question", "instant_search_result_question", d],
                    people: ["visit_people_profile", "instant_search_result_people", d],
                    search_link: ["visit_search_result"]
                }[b]) &&
                this.vD.apply(this, b), z.Ai.set("s-q", (0, window.encodeURI)(this.O.gc), -1, "/"),
            z.Ai.set("s-i", c + 1, -1, "/"), z.Ai.set("sid", (0, z.kG)(), -1, "/"), z.Ai
                .set("s-t", "autocomplete", -1, "/"), this.metaKey || this.mB
                ? window.open(g)
                : window.location.href = g);
        a.preventDefault()
    };
    var By = { people: "用户", topic: "话题", question: "内容", column: "内容", article: "内容", promotion: "内容" };
    z.y(Fy, z.hj);
    Fy.prototype.init = function() {
        if ((0, window.$)(".zu-top").length) {
            z.si.get("__Q_ISNEWLYCREATED__") && (z.si.remove("__Q_ISNEWLYCREATED__"), z.X && (z.X.HI = !0));
            if (z.Y.jb()) (new ky).init();
            else
                (0, window.$)("#zh-top-inner").on("click",
                    'a[href\x3d"/topic"]',
                    function() {
                        var a = new z.uk;
                        a.td("top_navigation_topics");
                        a.show();
                        return !1
                    }).on("click",
                    ".js-signin-noauth",
                    function() {
                        var a = new z.uk;
                        a.td("top_navigation_sign_in");
                        a.show();
                        return !1
                    }).on("click",
                    ".js-signin-noauth-mobile",
                    function() {
                        z.W("app-promotion", "click_mobileweb_signin_btn");
                        var a = new z.uk;
                        a.td("top_navigation_sign_in_mobile");
                        a.show();
                        return !1
                    }).on("click",
                    ".js-signup-noauth",
                    function() {
                        var a = new z.yk;
                        a.td("top_navigation_sign_up");
                        a.show();
                        return !1
                    }).on("click",
                    ".js-signup-noauth-mobile",
                    function() {
                        z.W("app-promotion", "click_mobileweb_signup_btn");
                        var a = new z.yk;
                        a.td("top_navigation_sign_up_mobile");
                        a.show();
                        return !1
                    });
            if (this.Fa = z.J("zh-top-search")) {
                this.LT = z.L("zu-top-search-input", this.Fa);
                var a = z.J("zu-top-add-question");
                a && this.o().g(a, "click", this.zY);
                z.ai ||
                    !z.$h
                    ? (new wy({ hideFocus: !0 })).w((0, window.$)("#top-nav-profile-dropdown").get(0))
                    : Gy();
                this.jA()
            }
        }
    };
    Fy.prototype.jA = function() {
        var a = (new z.oj(window.location)).Ed().get("q");
        a ? a = (0, window.decodeURIComponent)(a) : (a = z.si.get("query"), z.si.remove("query"));
        var b = this.LT;
        a && (b.value = a);
        z.$h &&
            this.o().g(b,
                ["focus", "blur"],
                function(a) { (0, window.$)(".zu-top").toggleClass("is-searching", "focus" === a.type) });
        (new zy).w(b)
    };
    Fy.prototype.zY = function(a) {
        z.V.trackEvent(a.target, { action: "Question", is_intent: !0 });
        z.Dq(function() { z.Tv.ba().show() }, !0, "#ask")()
    };
    window.JSON || (window.JSON = { parse: qn, stringify: Fo });
    z.C &&
    (Object
        .getPrototypeOf = function(a) {
            return function(b) {
                return b.__proto__ ||
                    a
                    .apply(this, arguments)
            }
        }(Object.getPrototypeOf));
    z.y(Hy, z.Q);
    z.UG = new Hy;
    z.UG.w(window.document);
    z.Ly = {
        digits: { required: "请填写数字验证码" },
        password: { required: "请填写密码" },
        password_repeat: { required: "请填写密码" },
        email: { required: "请填写邮箱" },
        phone_no: { required: "请填写手机号" }
    };
    z.x("ZH.ui.requestUnlock", z.Ky);
    z.x("ZH.security.twoStepVerify", z.My);
    z.y(Ny, z.Ih);
    z.ka(Ny);
    z.e = Ny.prototype;
    z.e.tc = function() {
        z.Rh(this, null);
        this.o().g(window.document, "click", this.It)
    };
    z.e.It = function(a) {
        a = a.target;
        if ("IMG" === a.tagName && z.S.has(a, this.dZ)) {
            var b = a.getAttribute("data-original");
            if (b && !z.Om && !z.to(a, "editable")) {
                this
                    .aa('\x3cdiv class\x3d"zm-light-box-x1" id\x3d"zm-light-box-x1"\x3e\x3cdiv class\x3d"zm-light-box-x2" id\x3d"zm-light-box-x2"\x3e\x3cimg src\x3d"' + b + '" class\x3d"zm-light-box-img-el" /\x3e\x3cdiv class\x3d"zm-light-box-footer"\x3e\x3ca class\x3d"zm-light-box-show-origin" href\x3d"' + b + '" target\x3d"_blank"\x3e查看原图\x3c/a\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e');
                this.F(!0);
                z.S.add(this.m(), "zm-light-box-fullscreen-image");
                var b = z.Qe(),
                    c = z.J("zm-light-box-x1"),
                    d = z.J("zm-light-box-x2"),
                    f = a.getAttribute("data-rawheight"),
                    g = a.getAttribute("data-rawwidth"),
                    g = g ? +g : 0;
                (f ? +f : 0) > b.height - 80 ? d.style.marginTop = "40px" : c.style.lineHeight = b.height + "px";
                d.style.width = g > b.width - 80 ? b.width - 80 + "px" : g + "px";
                z.U.Bb({ type: "ga_click_enlarge_image", target: a })
            }
        }
    };
    z.e.ga = z.r;
    z.e.focus = z.r;
    z.e.lL = z.Il;
    z.e.iS = function() {
        this.F(!1);
        z.S.remove(window.document.body, this.mF)
    };
    z.e.Vf = function() {
        Ny.v.Vf.call(this);
        z.S.add(window.document.body, this.mF);
        this.o().ta(window.document, "click", this.iS)
    };
    z.e.B = function() {
        Ny.v.B.call(this);
        z.S.add(this.m(), "zm-light-box")
    };
    z.e.gB = function() {
        this.ed = this.L().B("div", this.gd + "-bg zm-light-box-background");
        z.P(this.ed, !1)
    };
    Ny.ba();
    var Sy = !1, Uy = [];
    z.lg("common");
    window.console || (window.console = { info: z.r, log: z.r, warning: z.r, error: z.r });
    z.UG.on(["click!", "show!", "visit!"],
        function(a) {
            var b = a.Oc;
            b.category && b.action && z.W(b.category, a.type.replace("!", "") + "_" + b.action, b.label, b.value)
        });
    z.ud = window;
    (function() {
        function a(a) {
            z.V.config({ responseId: a.getResponseHeader(z.V.vE), experiment: a.getResponseHeader(z.V.rE) })
        }

        z.$h = z.sm.fb;
        window.$.ajaxPrefilter(function(a, c, d) {
            var f;
            c = a.url;
            "get" !== a.type.toLowerCase() &&
                (f = z.Ai.get("_xsrf")) &&
                (c.startsWith("/") || (new RegExp("https?://" + window.location.hostname + "[/|:]")).test(c)) &&
                d.setRequestHeader("X-Xsrftoken", f)
        });
        window.$.ajaxPrefilter(function(a, c, d) {
            d.complete(function() {
                try {
                    var a = JSON.parse(d.responseText);
                    a.r && 1991832 === a.errcode && z.My()
                } catch (b) {
                }
            })
        });
        window.$.ajaxPrefilter(function(b, c, d) {
            var f = Date.now();
            d.complete(function() {
                a(d);
                z.V.trackMonitor(null,
                    { monitor: { type: "Ajax", url: b.url, statusCode: d.status, loadTime: Date.now() - f } })
            })
        });
        gp("*", function(b, c) { a(c) });
        gp("json", function(a) { a.r && 1991832 === a.errcode && z.My() });
        kp(function(a) {
            var c = Date.now();
            a.on("complete",
                function() {
                    z.V.trackMonitor(null,
                        { monitor: { type: "Ajax", url: String(a.wu), statusCode: z.le(a), loadTime: Date.now() - c } })
                })
        });
        (new Fy).init();
        Py()
    })();
    z.sp.dispatchEvent("init");
    (0, window.$)(function() { z.sp.dispatchEvent("postinit") });
    z.Y.jb()
        ? (gp("json",
            function(a) {
                (a = a.profile_result) &&
                    (0, window.$)(a).css("border-top", "1px solid #eee").appendTo(window.document.body)
            }), z.sm.fb && (window.$.fx.off = !0), (0, window.$)(function() { (new nx).init() }))
        : (0, window.$)("body").addClass("no-auth");
    z.Wa(window.location.host, "zhihu.com") || (z.Ck = !0);
    (0, window.$)(window.document.body).children("div.zu-main").attr("role", "main");
    window.document.addEventListener && window.document.addEventListener("touchstart", z.r, !1);
    z.ai && (0, window.$)('meta[name\x3d"viewport"]').attr("content", "width\x3ddevice-width, initial-scale\x3d1.0");
    (0, window.$)(function() {
        window.znonce && window.znonce.evalScripts();
        (new lx).init();
        (new ay).init();
        (new Xx).init();
        var a = new mx;
        window.console && window.console.info && window.console.info(a.XO + "\n\n" + a.link);
        px();
        Oy();
        z.W.init()
    });
    z.p(z.Vy, z.Q);
    z.e = z.Vy.prototype;
    z.e.init = function(a) {
        a = void 0 === a ? {} : a;
        if (void 0 === typeof a.oa) throw Error("$form option is required.");
        var b = Object.assign({
                Om: "FormItem",
                Bx: function() { return window.Promise.resolve() },
                bo: window.$.noop,
                HD: !0,
                lR: { TI: !0 },
                mt: [],
                validator: function(a) {
                    for (var d = b, f = d.oa, g = {}, d = z.ha(d.mt), h = d.next(); !h.done; h = d.next()) {
                        var k = h.value,
                            h = k.name,
                            l = k.Al,
                            k = k.Ua,
                            n = f.find('input[name\x3d"' + h + '"]'),
                            q = n.val();
                        if (q) {
                            var v = !1, F = q.match(/[^\x00-\xff]/ig), q = q.length + (null === F ? 0 : F.length);
                            if (z.ma(l))
                                l.includes(q) ||
                                (v =
                                    !0);
                            else if (z.sa(l)) {
                                if (q < l.SU || q > l.maxLength) v = !0
                            } else q !== l && (v = !0);
                            v && (g[h] = k || n.attr("placeholder"))
                        }
                    }
                    Object.assign(g, Xy(f, a));
                    return window.$.isEmptyObject(g) ? null : g
                }
            },
            a);
        this.$b = b;
        this.oa = b.oa;
        this.w(b.oa[0]);
        return this
    };
    z.e.C = function() {
        var a = this;
        z.Q.prototype.C.call(this);
        var b = this.$b, c = b.oa, d = b.validator, f = b.Bx, g = b.bo, h = this.bL.bind(this), k = this.zX.bind(this);
        c.on("change keyup",
            ".is-error",
            function() {
                h((0, window.$)(this));
                c.find('[type\x3d"submit"]').attr("disabled", 0 !== c.find(".is-error").length)
            }).submit(function() {
            function b(d) {
                c.removeClass("form-submitting");
                d && d.r ? z.Wy(a, d.msg) : z.Wy(a, d)
            }

            function h(b) {
                c.removeClass("form-submitting");
                b && !b.r ? g.call(c, b) : z.Wy(a, b.msg)
            }

            if (c.hasClass("form-submitting")) return !1;
            k();
            var q = d(a.getData());
            if (q) return z.Wy(a, q), !1;
            f.call(c).then(function() {
                c.addClass("form-submitting");
                a.submit().then(h).catch(b)
            });
            return !1
        }).find('[type\x3d"submit"]').attr("disabled", !1)
    };
    z.e.bL = function(a) { a.removeClass("is-error").find("." + this.$b.Om + "-error").remove() };
    z.e.zX = function() {
        this.oa.find(".is-error").removeClass("is-error").end().find("." + this.$b.Om + "-error").remove()
    };
    z.e.submit = function() {
        var a = this.$b,
            b = a.oa,
            a = a.HD,
            c = b.attr("contentType") || "application/json",
            d = { url: b.attr("action"), type: b.attr("method") || "POST" };
        if (a)
            Object.assign(d,
                { data: new window.FormData(b[0]), async: !1, cache: !1, contentType: !1, processData: !1 });
        else {
            var f = this;
            Object.assign(d,
            {
                data: function() {
                    var a = f.getData();
                    "application/json" === c && (a = JSON.stringify(a));
                    return a
                }(),
                contentType: c
            })
        }
        return new window.Promise(function(a, b) {
            window.$.ajax(d).done(a).fail(function(a) { b(a.responseJSON || a.responseText) })
        })
    };
    z.e.getData = function() { return Yy(this.oa, this.$b.lR) };
    z.y($y, z.H);
    $y.prototype.handleEvent = function(a) {
        var b = 0, c = 0, d = 0;
        a = a.sc;
        if ("mousewheel" == a.type) {
            c = 1;
            if (z.C || z.D && (z.el || z.E("532.0"))) c = 40;
            d = az(-a.wheelDelta, c);
            z.ja(a.wheelDeltaX) ? (b = az(-a.wheelDeltaX, c), c = az(-a.wheelDeltaY, c)) : c = d
        } else
            d = a
                    .detail, 100 < d ? d = 3 : -100 > d && (d = -3),
                z.ja(a.axis) && a.axis === a.HORIZONTAL_AXIS ? b = d : c = d;
        z.pa(this.vJ) && (b = Lo(b, -this.vJ, this.vJ));
        z.pa(this.wJ) && (c = Lo(c, -this.wJ, this.wJ));
        this.cU && (b = -b);
        b = new bz(d, a, b, c);
        this.dispatchEvent(b)
    };
    $y.prototype.D = function() {
        $y.v.D.call(this);
        z.nd(this.iJ);
        this.iJ = null
    };
    z.y(bz, z.Pc);
    z.y(cz, z.H);
    z.e = cz.prototype;
    z.e.Ie = 0;
    z.e.jq = 0;
    z.e.fq = 100;
    z.e.No = 0;
    z.e.fl = 1;
    z.e.AI = !1;
    z.e.Pu = !1;
    z.e.Da = function(a) {
        a = dz(this, a);
        this.Ie != a &&
        (this
                .Ie = a + this.No > this.fq ? this.fq - this.No : a < this.jq ? this.jq : a,
            this.AI || this.Pu || this.dispatchEvent("change"))
    };
    z.e.X = function() { return dz(this, this.Ie) };
    z.e.Nv = function(a) {
        a = dz(this, a);
        this.No != a &&
        (this
                .No = 0 > a ? 0 : this.Ie + a > this.fq ? this.fq - this.Ie : a,
            this.AI || this.Pu || this.dispatchEvent("change"))
    };
    z.e.Ni = function() {
        var a = this.No;
        return null == this.fl ? a : Math.round(a / this.fl) * this.fl
    };
    z.e.Tc = function() { return dz(this, this.jq) };
    z.e.md = function() { return dz(this, this.fq) };
    z.e.Zo = function() { return this.fl };
    z.y(ez, z.Q);
    z.e = ez.prototype;
    z.e.Xb = "horizontal";
    z.e.Kp = !1;
    z.e.YU = !1;
    z.e.lg = 10;
    z.e.Nu = 0;
    z.e.FI = !0;
    z.e.JJ = 0;
    z.e.KN = 1E3;
    z.e.qc = !0;
    z.e.ue = !1;
    z.e.B = function() {
        ez.v.B.call(this);
        var a = this.L().B("DIV", this.V(this.Xb));
        this.T(a)
    };
    z.e.T = function(a) {
        ez.v.T.call(this, a);
        z.Ag(a, this.V(this.Xb));
        a = this.m();
        var b = z.Me(null, "goog-slider-thumb", a)[0];
        b || (b = this.L().B("DIV", "goog-slider-thumb"), z.ug(b, "button"), a.appendChild(b));
        this.ob = this.Yd = b;
        z.ug(this.m(), "slider");
        uz(this)
    };
    z.e.C = function() {
        ez.v.C.call(this);
        this.He = new z.mh(this.ob);
        this.ug = new z.mh(this.Yd);
        this.He.sh(this.ue);
        this.ug.sh(this.ue);
        this.He.uy = this.ug.uy = z.r;
        this.Fb = new Ap(this.m());
        fz(this, !0);
        this.m().tabIndex = 0;
        oz(this)
    };
    z.e.Db = function() {
        ez.v.Db.call(this);
        z.Dc(this.He, this.ug, this.Fb, this.Jk)
    };
    z.e.Gt = function(a) {
        var b = a.ct == this.He ? this.ob : this.Yd, c;
        "vertical" == this.Xb
            ? (c = this.m().clientHeight - b.offsetHeight, c = (c - a.top) / c * (this.md() - this.Tc()) + this.Tc())
            : c = a.left / (this.m().clientWidth - b.offsetWidth) * (this.md() - this.Tc()) + this.Tc();
        c = a.ct == this.He
            ? Math.min(Math.max(c, this.Tc()), this.X() + this.Ni())
            : Math.min(Math.max(c, this.X()), this.md());
        mz(this, b, c)
    };
    z.e.Rt = function(a) {
        var b = "start" == a.type;
        z.po(this.m(), "goog-slider-dragging", b);
        z.po(a.target.handle, "goog-slider-thumb-dragging", b);
        a = a.ct == this.He;
        b
            ? (this.dispatchEvent("h"), this.dispatchEvent(a ? "d" : "f"))
            : (this.dispatchEvent("i"), this.dispatchEvent(a ? "e" : "g"))
    };
    z.e.Lf = function(a) {
        var b = !0;
        switch (a.keyCode) {
        case 36:
            sz(this, this.Tc());
            break;
        case 35:
            sz(this, this.md());
            break;
        case 33:
            kz(this, this.lg);
            break;
        case 34:
            kz(this, -this.lg);
            break;
        case 37:
            var c = this.ue && this.Jd() ? 1 : -1;
            kz(this, a.shiftKey ? c * this.lg : c * this.Br);
            break;
        case 40:
            kz(this, a.shiftKey ? -this.lg : -this.Br);
            break;
        case 39:
            c = this.ue && this.Jd() ? -1 : 1;
            kz(this, a.shiftKey ? c * this.lg : c * this.Br);
            break;
        case 38:
            kz(this, a.shiftKey ? this.lg : this.Br);
            break;
        default:
            b = !1
        }
        b && a.preventDefault()
    };
    z.e.Nt = function(a) {
        this.m().focus && this.m().focus();
        var b = a.target;
        z.nf(this.ob, b) ||
            z.nf(this.Yd, b) ||
            (b = "click" == a.type, b && (0, z.I)() < this.JJ + this.KN ||
            (b || (this.JJ = (0, z.I)()), this.YU
                ? sz(this, iz(this, a))
                : (this.fD(a), this.pf = nz(this, iz(this, a)), this
                        .nI = "vertical" == this.Xb
                        ? this.tu < this.pf.offsetTop
                        : this.tu > rz(this, this.pf) + this.pf.offsetWidth, a = z.Ke(this.m()), this.o()
                        .g(a, "mouseup", this.eD, !0).g(this
                            .m(),
                            "mousemove",
                            this.fD), this.Ui || (this.Ui = new z.td(200), this.o().g(this.Ui, "tick", this.MH)), this
                        .MH(),
                    this.Ui.start())))
    };
    z.e.FH = function(a) {
        kz(this, (0 < a.detail ? -1 : 1) * this.Br);
        a.preventDefault()
    };
    z.e.MH = function() {
        var a;
        if ("vertical" == this.Xb) {
            var b = this.tu, c = this.pf.offsetTop;
            this.nI
                ? b < c && (a = jz(this, this.pf) + this.lg)
                : b > c + this.pf.offsetHeight && (a = jz(this, this.pf) - this.lg)
        } else
            b = this.tu, c = rz(this, this.pf), this.nI
                ? b > c + this.pf.offsetWidth && (a = jz(this, this.pf) + this.lg)
                : b < c && (a = jz(this, this.pf) - this.lg);
        z.ja(a) && mz(this, this.pf, a)
    };
    z.e.eD = function() {
        this.Ui && this.Ui.stop();
        var a = z.Ke(this.m());
        this.o().pa(a, "mouseup", this.eD, !0).pa(this.m(), "mousemove", this.fD)
    };
    z.e.fD = function(a) { this.tu = hz(this, a) };
    z.e.Tc = function() { return this.Lb.Tc() };
    z.e.md = function() { return this.Lb.md() };
    z.e.JH = function() {
        oz(this);
        uz(this);
        this.dispatchEvent("change")
    };
    z.e.Jp = function() { return this.Kp };
    z.e.MQ = function() { this.Kp = !1 };
    z.e.setOrientation = function(a) {
        if (this.Xb != a) {
            var b = this.V(this.Xb), c = this.V(a);
            this.Xb = a;
            this.m() &&
            (a = this.m(), z.zg(a, b) && (z.Cg(a, b), z.Ag(a, c)), b = this.ue && this.Jd() ? "right" : "left", this
                .ob.style[b] = this.ob.style.top = "", this.Yd.style[b] = this.Yd.style
                .top = "", this.cc &&
                (this.cc.style[b] = this.cc.style.top = "", this.cc.style.width = this.cc.style.height = ""), oz(this))
        }
    };
    z.e.D = function() {
        ez.v.D.call(this);
        this.Ui && this.Ui.dispose();
        delete this.Ui;
        this.Fo && this.Fo.dispose();
        delete this.Fo;
        delete this.ob;
        delete this.Yd;
        this.cc && delete this.cc;
        this.Lb.dispose();
        delete this.Lb;
        this.Fb && (this.Fb.dispose(), delete this.Fb);
        this.Jk && (this.Jk.dispose(), delete this.Jk);
        this.He && (this.He.dispose(), delete this.He);
        this.ug && (this.ug.dispose(), delete this.ug)
    };
    z.e.Br = 1;
    z.e.Zo = function() { return this.Lb.Zo() };
    z.e.X = function() { return this.Lb.X() };
    z.e.Da = function(a) { mz(this, this.ob, a) };
    z.e.Ni = function() { return this.Lb.Ni() };
    z.e.Nv = function(a) { mz(this, this.Yd, this.Lb.X() + a) };
    z.e.F = function(a) {
        z.P(this.m(), a);
        a && oz(this)
    };
    z.e.gb = function(a) {
        this.qc != a &&
            this.dispatchEvent(a ? "enable" : "disable") &&
            (this.qc = a, fz(this, a), a || this.eD(), z.po(this.m(), "goog-slider-disabled", !a))
    };
    z.e.isEnabled = function() { return this.qc };
    z.y(vz, ez);
    vz.prototype.V = function(a) { return "vertical" == a ? "goog-slider-vertical" : "goog-slider-horizontal" };
    z.y(wz, z.Q);
    z.e = wz.prototype;
    z.e.defaults = { by: 310, cy: 310, hg: 250, ig: 250, MU: 2, opacity: .25, W0: "#eee" };
    z.e.T = function(a) {
        wz.v.T.call(this, a);
        this.src = this.h.src;
        this.options.src = this.src;
        this.options.Qn = (this.options.by - this.options.hg) / 2;
        this.options.Pn = (this.options.cy - this.options.ig) / 2;
        this.Ms()
    };
    z.e.Ms = function() {
        var a = this.options;
        this.WD = (0, window.$)((0, z
            .Zv
        )('\x3cdiv class\x3d"avatar-editor-container" style\x3d"width:\x3c%\x3dcontainerWidth%\x3epx"\x3e\x3cdiv class\x3d"avatar-editor-container-inner" style\x3d"height:\x3c%\x3dcontainerHeight%\x3epx;"\x3e\x3cdiv class\x3d"avatar-editor-window" style\x3d"height:\x3c%\x3dwindowHeight%\x3epx;width:\x3c%\x3dwindowWidth%\x3epx;margin:\x3c%\x3dwindowMarginTop%\x3epx \x3c%\x3dwindowMarginLeft%\x3epx;"\x3e\x3cdiv class\x3d"avatar-editor-window-shadow" style\x3d"height:\x3c%\x3dwindowHeight%\x3epx;width:\x3c%\x3dwindowWidth%\x3epx;"\x3e\x3c/div\x3e\x3cdiv class\x3d"avatar-editor-window-inner" style\x3d"width:\x3c%\x3dcontainerWidth%\x3epx; height:\x3c%\x3dcontainerHeight%\x3epx;margin:-\x3c%\x3dwindowMarginTop%\x3epx 0 0 -\x3c%\x3dwindowMarginLeft%\x3epx;"\x3e\x3cimg class\x3d"inner" title\x3d"拖动相片"/\x3e\x3c/div\x3e\x3c/div\x3e\x3cimg class\x3d"outer" style\x3d"opacity:\x3c%\x3dopacity%\x3e;"/\x3e\x3c/div\x3e\x3cdiv class\x3d"goog-slider-wrap"\x3e\x3ci class\x3d"zg-icon image-minus"\x3e\x3c/i\x3e\x3ci class\x3d"zg-icon image-plus"\x3e\x3c/i\x3e\x3cdiv class\x3d"goog-slider"\x3e\x3cdiv class\x3d"line"\x3e\x3c/div\x3e\x3cdiv class\x3d"goog-slider-thumb"\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e',
        {
            containerWidth: a.cy,
            containerHeight: a.by,
            windowHeight: a.hg,
            windowWidth: a.ig,
            windowMarginTop: a.Qn,
            windowMarginLeft: a.Pn,
            src: a.src,
            opacity: a.opacity
        }));
        this.Ob = this.WD[0];
        this.WD.insertBefore(this.h);
        z.P(this.h, !1);
        this.UP = z.L("avatar-editor-container-inner", this.Ob);
        this.$t = z.L("outer", this.Ob);
        this.gA = z.L("inner", this.Ob);
        this.Mr = (0, window.$)(this.$t);
        this.Jw = (0, window.$)(this.gA);
        this.kI = 0;
        this.Mr.load((0, z.t)(this.yM, this));
        this.Jw.load((0, z.t)(this.yM, this));
        this.gA.src = this.$t.src = this.options.src;
        this.JY = z.L("goog-slider",
            this.Ob)
    };
    z.e.C = function() {
        this.WC = new vz;
        this.WC.w(this.JY);
        this.o().g(this.UP,
            ["mousedown", "touchstart"],
            function(a) {
                var b = new z.mh(this.Ob);
                b.addEventListener("drag",
                    (0, z.t)(function(a) {
                            var b = this.zoom;
                            this.hf = {
                                Fr: this.options.ig / b,
                                bp: this.options.hg / b,
                                x: (this.options.Pn - (this.uI.left + (a.clientX - this.Xv))) / b,
                                y: (this.options.Qn - (this.uI.top + (a.clientY - this.Yv))) / b
                            };
                            zz(this)
                        },
                        this));
                b.addEventListener("end", (0, z.t)(function() { b.dispose() }, this));
                b.Cn(a);
                this.Cn(a)
            });
        this.o().g(this.Ob,
            ["touchmove"],
            function(a) {
                a.stopPropagation();
                a.preventDefault()
            });
        this.o().g(this.WC,
            "change",
            function() {
                var a = this.WC.X(), b = this.gN;
                xz(this, (this.$Z - b) * a / 100 + b)
            })
    };
    z.e.yM = function() {
        this.AT || (this.gA.complete && this.$t.complete ? this.init() : (this.kI++, 2 <= this.kI && this.init()))
    };
    z.e.init = function() {
        var a, b;
        b = this.Mr[0];
        if (b.naturalWidth) a = b.naturalWidth, b = b.naturalHeight;
        else {
            var c = new window.Image;
            c.src = b.src;
            a = c.width;
            b = c.height
        }
        this.Zt = a;
        this.Yt = b;
        a = this.options.ig / this.Zt;
        b = this.options.hg / this.Yt;
        this.gN = a = b > a ? b : a;
        this.$Z = this.gN * this.options.MU;
        this.hf = { bp: this.options.ig / a, Fr: this.options.hg / a, x: 0, y: 0 };
        xz(this, a);
        yz(this, this.Zt / 2, this.Yt / 2);
        this.AT = !0
    };
    z.e.Cn = function(a) {
        this.Xv = a.clientX;
        this.Yv = a.clientY;
        this.uI = this.Jw.position();
        this.Mr.position()
    };
    z.e.support = function() { return "getContext" in window.document.createElement("canvas") };
    z.y(z.Az, z.Q);
    var Bz = 1;
    z.e = z.Az.prototype;
    z.e.T = function(a) {
        this.h = a;
        this.B()
    };
    z.e.B = function() {
        this.ED = z.sm.Ln + "/upload_avatar";
        this.oa = (0, window.$)((0, z
            .Zv
        )('\x3cform target\x3d"av_up_frame" style\x3d"display:none;" method\x3d"post" enctype\x3d"multipart/form-data" action\x3d"\x3c%\x3duploadAction%\x3e"\x3e\x3clabel for\x3d"avt_file"\x3e\x3c/label\x3e\x3cinput type\x3d"file" accept\x3d"image/*" name\x3d"picture" id\x3d"avt_file" /\x3e\x3cinput type\x3d"hidden" name\x3d"handle_mode" value\x3d"upload" /\x3e\x3cinput type\x3d"hidden" name\x3d"type" value\x3d"\x3c%\x3dtype%\x3e" /\x3e\x3cinput type\x3d"hidden" name\x3d"dest_id" value\x3d"\x3c%\x3ddest_id%\x3e" /\x3e\x3cinput type\x3d"hidden" name\x3d"return_size" value\x3d"\x3c%\x3dreturn_size%\x3e" /\x3e\x3c/form\x3e',
        {
            uploadAction: this.ED,
            type: this.ps,
            dest_id: this.ps === Bz ? z.Y[3] : this.JG,
            return_size: this.mL
        }));
        this.pN = (0, window
            .$
        )('\x3ciframe id\x3d"av_up_frame" name\x3d"av_up_frame" style\x3d"position: absolute; height: 0px; width: 0px; left: -9000px;"\x3e\x3c/iframe\x3e');
        this.pN.appendTo(window.document.body);
        this.input = this.oa.find("input[type\x3dfile]")[0];
        z.C
            ? (this.oa.find("label").html((0, window.$)(this.h).html()), this.h.innerHTML = "", (0, window.$)(this.h)
                .append(this.oa), this.oa.addClass("avatar-editor-form-ie"))
            : (this.oa.insertAfter(this.h),
                (0, window.$)(this.h).click(window.$.proxy(function() { this.input.click() }, this)));
        this.o().g(this.input, "change", this.Vc).g(this.input,
            "click",
            function(a) { !1 === this.dispatchEvent("beforeopen") && a.preventDefault() });
        this.o().g(z.U,
            "iframe_data",
            function(a) {
                (a = a.Xf) && !a.r
                    ? "upload" === a.handle_mode
                    ? (this.Hm = a.url, this.fA = a.id, Cz() || this.xq())
                    : "resize" === a.handle_mode && ((0, window.$)(this.h).find("form").remove(), this.UF(a))
                    : z.T.message(a.msg)
            })
    };
    z.e.Vc = function(a) {
        Dz(this);
        a = this.input = a.target;
        if (Cz()) {
            if (a.files && a.files[0]) {
                this.file = a = a.files[0];
                var b = new window.FileReader;
                b.onload = (0, z.t)(function(a) {
                        this.Hm = a.target.result;
                        this.xq()
                    },
                    this);
                b.readAsDataURL(a)
            }
        } else this.oa[0].submit();
        Gz(this)
    };
    z.e.xq = function() {
        var a = this.dialog.S();
        this.eA = new window.Image;
        this.eA.src = this.Hm;
        a = (0, window.$)(a);
        a.html("");
        a.append(this.eA);
        this.ky = new wz(this.J.aQ || {});
        this.ky.w(this.eA)
    };
    z.e.UF = function(a) {
        a && !a.r ? this.data = a : z.T.message(a.msg);
        this.dispatchEvent({ type: "success", src: this.data });
        this.dialog.F(!1)
    };
    z.e.getData = function() { return this.data || null };
    z.e.If = function(a) { return this.data ? this.data.url.replace(/(\.\w+)$/, "_" + a + "$1") : "" };
    z.p(z.Iz, z.Q);
    z.Iz.prototype.C = function() {
        z.Q.prototype.C.call(this);
        var a = this.DW, b = this.m(), c = new z.Az(Bz);
        c.w(b);
        var d = (0, window.$)(b), f = d.find(".Avatar"), g = d.find(".Spinner");
        this.o().g(c, "beforepost", function() { g.show() }).g(c,
            "success",
            function() {
                var b = c.getData();
                a.UI
                    ? (g.hide(), f.attr({ src: c.If("l"), srcset: c.If("xl") + " 2x" }), a.Wf(b))
                    : window.$.post("/node/ProfileHeaderV2",
                        { method: "save", params: { data: { avatar_path: b.id } } },
                        function(b) {
                            g.hide();
                            b && b.r
                                ? z.T.message("更新失败")
                                : (d.removeClass("ProfileAvatarEditor-none-avatar"), f.add(".top-nav-profile .Avatar")
                                    .attr({
                                        src: c.If("l"),
                                        srcset: c.If("xl") + " 2x"
                                    }), a.Wf(b))
                        })
            })
    };
    z.Jz.prototype.submit = function(a, b) {
        function c() { b ? b() : d.handleError() }

        var d = this;
        window.$.post("/report",
        {
            type: this.options.type,
            id: this.options.id,
            urlToken: this.options.Ga,
            reason: a && a.reason || "edit",
            custom_reason: a && a.customReason,
            source: "web"
        }).done(function(a) {
            d.AM && d.AM();
            a.r ? "duplicate_report" === a.errtype ? d.handleError(a.msg) : c() : Kz(!!a.noti)
        }).fail(c)
    };
    z.Jz.prototype.handleError = function(a) {
        var b = z.T({ title: "举报", content: void 0 === a ? "举报失败" : a, modal: !0, buttons: {} });
        (0, window.setTimeout)(function() { return b.F(!1) }, 4E3)
    };
    z.Jz.prototype.render = function() {
        var a = this, b = new z.R;
        b.Fe(!0);
        z.Zh(b, 420);
        b.La("举报");
        b.render();
        var c = b.S();
        c.style.margin = "0";
        c.style.padding = "0";
        z.V.Ya(b.m(),
            { module: "ReportDialog" },
            function() {
                var b = z.db(a.options.type), c = String(a.options.id);
                "Article" === b && (b = "Post");
                return {
                    card: {
                        card_type: "Content",
                        content: "Comment" === b ? { type: b, id: c } : { type: b, token: c }
                    }
                }
            });
        z.$w("Report").then(function(d) {
            function f() {
                d.unmountComponentAtNode(c);
                b.F(!1)
            }

            a.tM = 0;
            a.AM = f;
            var g = {},
                g = (g.type = a.options.type, g.id = a.options.id,
                    g.urlToken = a.options.Ga, g.talkerToken = a.options.bM, g.isColumnArticle = a.options.ST, g
                        .isTipjarEnabled = a.options.dU, g.onContentChange = function(a) {
                        b.La(a);
                        b.m().focus()
                    }, g.onClose = f, g.onSubmit = a.submit.bind(a), g
                        .onMenuChange = function(b) { return a.tM = b }, g);
            d.render(c, g);
            b.F(!0);
            b.ga();
            (0, window.$)(b.Et()).on("click",
                function(b) {
                    z.V.trackEvent(b.currentTarget, { action: "Close", element: "Button" }, { report: { id: a.tM } })
                })
        })
    };
    z.y(Lz, Cp);
    z.ka(Lz);
    Lz.prototype.V = function() { return "goog-menuheader" };
    z.y(Mz, Lp);
    z.Jp("goog-menuheader", function() { return new Mz(null) });
    z.y(Nz, Cp);
    z.ka(Nz);
    z.e = Nz.prototype;
    z.e.Hf = function() { return "menuitem" };
    z.e.B = function(a) {
        var b = a.L().B("DIV", this.xg(a).join(" "), Pz(this, a.cb(), a.L()));
        Rz(this, a, b, Fp(a, 8) || Fp(a, 16));
        return b
    };
    z.e.S = function(a) { return a && a.firstChild };
    z.e.w = function(a, b) {
        var c = z.jf(b), d = Oz(this, 2);
        c && z.zg(c, d) || b.appendChild(Pz(this, b.childNodes, a.L()));
        z.zg(b, "goog-option") && (a.Wq(!0), this.Wq(a, b, !0));
        return Nz.v.w.call(this, a, b)
    };
    z.e.aa = function(a, b) {
        var c = this.S(a), d = Qz(this, a) ? c.firstChild : null;
        Nz.v.aa.call(this, a, b);
        d && !Qz(this, a) && c.insertBefore(d, c.firstChild || null)
    };
    z.e.oj = function(a, b, c) { a && b && Rz(this, a, b, c) };
    z.e.Wq = function(a, b, c) { a && b && Rz(this, a, b, c) };
    z.e.To = function(a) {
        switch (a) {
        case 2:
            return Oz(this, 0);
        case 16:
        case 8:
            return "goog-option-selected";
        default:
            return Nz.v.To.call(this, a)
        }
    };
    z.e.Dt = function(a) {
        var b = Oz(this, 0);
        switch (a) {
        case "goog-option-selected":
            return 16;
        case b:
            return 2;
        default:
            return Nz.v.Dt.call(this, a)
        }
    };
    z.e.V = function() { return "goog-menuitem" };
    z.y(z.Sz, Lp);
    z.e = z.Sz.prototype;
    z.e.X = function() {
        var a = this.oB;
        return null != a ? a : this.wh()
    };
    z.e.Da = function(a) { this.oB = a };
    z.e.dc = function(a, b) {
        z.Sz.v.dc.call(this, a, b);
        switch (a) {
        case 8:
            this.Dg() && !b && this.yc(!1);
            var c = this.m();
            c && this.M.oj(this, c, b);
            break;
        case 16:
            (c = this.m()) && this.M.Wq(this, c, b)
        }
    };
    z.e.oj = function(a) { this.dc(8, a) };
    z.e.Wq = function(a) { this.dc(16, a) };
    z.e.wh = function() {
        var a = this.cb();
        return z.ma(a)
            ? (a = z.mb(a,
                function(a) {
                    return z.lf(a) && (z.zg(a, "goog-menuitem-accel") || z.zg(a, "goog-menuitem-mnemonic-separator"))
                        ? ""
                        : z.uo(a)
                }).join(""), Zo(a))
            : z.Sz.v.wh.call(this)
    };
    z.e.Nf = function(a) {
        var b = this.getParent();
        if (b) {
            var c = b.sK;
            b.sK = null;
            if (b = c && z.pa(a.clientX))
                b = new z.Ge(a.clientX, a.clientY), b = c == b ? !0 : c && b ? c.x == b.x && c.y == b.y : !1;
            if (b) return
        }
        z.Sz.v.Nf.call(this, a)
    };
    z.e.Mf = function(a) { return a.keyCode == this.nB && this.ee(a) ? !0 : z.Sz.v.Mf.call(this, a) };
    z.e.nR = function() { return this.nB };
    z.Jp("goog-menuitem", function() { return new z.Sz(null) });
    z.Sz.prototype.Ri = function() {
        return Fp(this, 16) ? "menuitemcheckbox" : Fp(this, 8) ? "menuitemradio" : z.Sz.v.Ri.call(this)
    };
    z.Sz.prototype.getParent = function() { return Lp.prototype.getParent.call(this) };
    z.Sz.prototype.Qi = function() { return Lp.prototype.Qi.call(this) };
    z.y(Tz, Cp);
    z.ka(Tz);
    Tz.prototype.B = function(a) { return a.L().B("DIV", this.V()) };
    Tz.prototype.w = function(a, b) {
        b.id && An(a, b.id);
        if ("HR" == b.tagName) {
            var c = b;
            b = this.B(a);
            z.cf(b, c);
            z.N(c)
        } else z.Ag(b, this.V());
        return b
    };
    Tz.prototype.aa = function() {};
    Tz.prototype.V = function() { return "goog-menuseparator" };
    z.y(z.Uz, Lp);
    z.Uz.prototype.C = function() {
        z.Uz.v.C.call(this);
        z.ug(this.m(), "separator")
    };
    z.Jp("goog-menuseparator", function() { return new z.Uz });
    z.y(Vz, Qr);
    z.ka(Vz);
    z.e = Vz.prototype;
    z.e.Sb = function(a) { return "UL" == a.tagName || Vz.v.Sb.call(this, a) };
    z.e.Uo = function(a) { return "HR" == a.tagName ? new z.Uz : Vz.v.Uo.call(this, a) };
    z.e.ng = function(a, b) { return z.nf(a.m(), b) };
    z.e.V = function() { return "goog-menu" };
    z.e.bf = function(a) {
        Vz.v.bf.call(this, a);
        z.vg(a.m(), "haspopup", "true")
    };
    z.y(z.Wz, z.Uz);
    z.Jp("goog-menuseparator", function() { return new z.Uz });
    z.y(z.Xz, z.Tr);
    z.e = z.Xz.prototype;
    z.e.co = !0;
    z.e.KO = !1;
    z.e.V = function() { return this.M.V() };
    z.e.ng = function(a) {
        if (this.M.ng(this, a)) return !0;
        for (var b = 0, c = z.Ah(this); b < c; b++) {
            var d = z.Bh(this, b);
            if ("function" == typeof d.ng && d.ng(a)) return !0
        }
        return !1
    };
    z.e.Ia = function(a) { this.K(a, !0) };
    z.e.Gj = function(a, b) { this.Bl(a, b, !0) };
    z.e.removeItem = function(a) { (a = this.removeChild(a, !0)) && a.dispose() };
    z.e.Oi = function(a) { return z.Bh(this, a) };
    z.e.rm = function() { return z.Ah(this) };
    z.e.nb = function() {
        var a = [];
        z.Ch(this, function(b) { a.push(b) });
        return a
    };
    z.e.setPosition = function(a, b) {
        var c = this.W();
        c || z.P(this.m(), !0);
        ho(this.m(), a, b);
        c || z.P(this.m(), !1)
    };
    z.e.F = function(a, b, c) {
        (b = z.Xz.v.F.call(this, a, b)) && a && this.ya && this.co && this.jc().focus();
        this.sK = a && c && z.pa(c.clientX) ? new z.Ge(c.clientX, c.clientY) : null;
        return b
    };
    z.e.Jz = function(a) {
        this.co && this.jc().focus();
        return z.Xz.v.Jz.call(this, a)
    };
    z.e.rF = function(a) { return (this.KO || a.isEnabled()) && a.W() && Fp(a, 2) };
    z.e.T = function(a) {
        var b = this.M, c;
        c = this.L();
        c = z.Ne(c.Ra, "DIV", b.V() + "-content", a);
        for (var d = c.length, f = 0; f < d; f++) Sr(b, this, c[f]);
        z.Xz.v.T.call(this, a)
    };
    z.e.Mf = function(a) {
        var b = z.Xz.v.Mf.call(this, a);
        b ||
            z.Ch(this,
                function(c) { !b && c.nR && c.nB == a.keyCode && (this.isEnabled() && this.Yc(c), b = c.kc(a)) },
                this);
        return b
    };
    z.e.Hb = function(a) {
        z.Xz.v.Hb.call(this, a);
        (a = z.Bh(this, a)) && io(a.m(), this.m())
    };
    z.y(z.Zz, z.hj);
    z.ka(z.Zz);
    z.e = z.Zz.prototype;
    z.e.B = function() {
        this.yQ = !0;
        this.h = z.M("div",
            null,
            [
                this.uU = z.M("div",
                    null,
                    [
                        this.Lh = z.M("div", "zm-favo-list-content"), this.HE = z
                        .M("div",
                            "zh-favo-add-new-wrap zm-command",
                            this.NY = z.M("a",
                                { "class": "zm-favo-dialog-create zg-left", href: "javascript:;" },
                                "+ 创建收藏夹"),
                            this.Yx = z.M("a", { href: "javascript:;", "class": "zg-btn-blue" }, "关闭")), this.gx = z
                        .M("div",
                            "zh-favo-add-new-wrap zm-command",
                            this.KP = z.M("a", { href: "javascript:;", "class": "" }, "取消"),
                            this.OY = z.M("a",
                                { "class": "zm-favo-dialog-create zg-btn-blue", href: "javascript:;" },
                                "创建收藏夹"))
                    ]), this.kz = z.M("div",
                    { "class": "zh-favo-add-form", style: "display:none" },
                    [
                        z
                        .M("div", null, ["标题", this.pD = z.M("span", { "class": "zh-favo-add-title-error" }, "请填写标题")]),
                        z.M("div", "zg-section", this.Yi = z.M("input", { "class": "zg-form-text-input" })), z
                        .M("div", null, "描述（可选）"), z.M("div",
                            { "class": "zg-section zg-form-text-input" },
                            this.Dk = z.M("textarea", { "class": "zg-editor-input", style: "height:66px" })), this
                        .kX = z.M("label",
                            null,
                            [
                                this.JA = z.M("input",
                                    { type: "radio", checked: "checked", value: "public", name: "mode" }),
                                z.M("strong", null, " 公开 "), z.M("span", "zg-gray-normal", "收藏夹关注者 \x3e 0 时不能设置为私密")
                            ]), this.lU = z.M("br"), this.fX = z
                        .M("label",
                            null,
                            [
                                this.OI = z.M("input", { type: "radio", value: "private", name: "mode" }), z
                                .M("strong", null, " 私密 "), z.M("span", "zg-gray-normal", "只有你可以查看这个收藏夹")
                            ]), z.M("div",
                            "zm-command",
                            [
                                this.Oy = z.M("label",
                                    { href: "javascript:;", "class": "zh-favo-error-message-label zg-left" },
                                    ""), this.cD = z.M("a", { href: "javascript:;", "class": "zg-mr10" }, "取消"), this
                                .Cs = z.M("a", { href: "javascript:;", "class": "zg-mr10" }, "完成"),
                                this.dx = z.M("a", { "class": "zg-btn-blue" }, "确认创建")
                            ])
                    ])
            ]);
        z.P(this.pD, !1);
        z.P(this.gx, !1);
        (new z.et(this.rD)).w(this.Yi);
        (new z.et(this.zy)).w(this.Dk);
        z.A(this.ZA, function(a) { aA(this, a) }, this);
        this.ZA.length ||
        (this.Lh
            .innerHTML =
            '\x3cdiv id\x3d"zh-fav-list-item-place-holder" class\x3d"zg-r5px zm-fav-list-item-place-holder"\x3e你可以创建多个收藏夹，将答案分类收藏\x3c/div\x3e ', z.P(this.gx, !0), z.P(this.HE, !1));
        $z(this);
        this.ua.S().innerHTML = "";
        this.ua.S().appendChild(this.h);
        this.ua.ga()
    };
    z.e.hc = function() {
        this.pP ||
        (this.pP = !0, this.o().g(this.cD,
                "click",
                function() {
                    this.ib ? fA(this, 0) : iA(this);
                    mA("click_add_collection_cancel")
                }).g(this.NY,
                "click",
                function() {
                    z.U.Bb({ type: "ga_click_add_collection" });
                    fA(this, 1);
                    z.wi("collect", "click_add_collection_start", "collect_answer_box")
                }).g(this.Yx,
                "click",
                function() {
                    mA("click_add_collection_close");
                    iA(this)
                }).g(this.OY,
                "click",
                function() {
                    z.U.Bb({ type: "ga_click_add_collection" });
                    fA(this, 1)
                }).g(this.KP, "click", function() { iA(this) }).g(this.Cs,
                "click",
                function() { iA(this) }).g(this.dx,
                "click",
                function() {
                    var a = this.Dk.value, b = this.Yi.value;
                    a && mA("click_add_collection_discription", a);
                    b && mA("click_add_collection_title", b);
                    this.Rh()
                }).g(this.Lh, "click", this.$V).g(this.Yi, "change", function() { z.P(this.pD, !1) })
            .g(this.JA, "click", function() { mA("click_add_collection_public") })
            .g(this.OI, "click", function() { mA("click_add_collection_private") }))
    };
    z.e.$V = function(a) {
        var b = z.vf(a.target, "A");
        if (b && !this.locked) {
            a = b.getAttribute("data-lid");
            var c = !1;
            z.S.has(b, "zm-favo-list-item-link-active") ? (c = !0, this.aG = a) : this.YF = a;
            b = new z.zr;
            b.add("answer_id", this.ib);
            b.add("favlist_id", a);
            this.zC = new z.ep(!0);
            this.locked = !0;
            this.o().ta(this.zC, "complete", this.FO);
            this.zC.ajax(c ? "/collection/remove" : "/collection/add", b.Ed())
        }
    };
    z.e.FO = function() {
        this.locked = !1;
        this.Yx.innerHTML = "关闭";
        var a = z.Dn(this.zC);
        a && !a.r
            ? (a = z.Co("zm-favo-list-item-link", this.Lh), z.A(a,
                function(a) {
                    var c = a.getAttribute("data-lid"), d = z.L("num", a), f = (0, window.parseInt)(d.innerHTML, 10);
                    c === this.aG
                        ? (d.innerHTML = f - 1 + "", z.S.remove(a, "zm-favo-list-item-link-active"))
                        : c === this.YF && (d.innerHTML = f + 1 + "", z.S.add(a, "zm-favo-list-item-link-active"))
                },
                this), this.YF = this.aG = null, Br("Favorite", "add_favorite"))
            : z.T.message("添加失败: " + a.msg)
    };
    z.e.Sk = function() {
        this.hc();
        this.Yx.innerHTML = "关闭";
        this.ib ? (z.P(this.Cs, !1), fA(this, 0)) : (fA(this, 1), z.P(this.cD, !1), this.Cs.innerHTML = "取消")
    };
    z.e.show = function(a) {
        a
            ? (eA(this), this.ua.F(!0), this.Sk())
            : ($z(this,
                "添加到收藏夹",
                '\x3cdiv style\x3d"text-align: center; color: #999;"\x3e收藏夹加载中\x3ci class\x3d"spinner-gray"\x3e\x3c/i\x3e\x3c/div\x3e'), this.ua.F(!0), this.Bt())
    };
    z.e.Bt = function() {
        this.ib && window.$.get("/collections/json", { answer_id: this.ib }).done((0, z.t)(this.KV, this))
    };
    z.e.KV = function(a) { a && !a.r && (this.ZA = a.msg[0], this.Du = a.msg[1], eA(this), this.Sk()) };
    z.e.Rh = function() {
        if (!this.xhr || !this.xhr.Jc()) {
            (0, window.$)(this.Oy).text("").hide();
            var a = z.mr(this.Yi.value);
            if (a && a !== this.rD) {
                a = gA(this);
                this.ib && a.add("answer_id", this.ib);
                if (this.Lm) {
                    if (this.BT.Ed() === a.Ed()) {
                        iA(this);
                        return
                    }
                    a.add("favlist_id", this.py[0])
                }
                this.xhr = new z.ep(!0);
                kA(this, this.xhr, this.dx, this.Lm);
                this.o().ta(this.xhr, "complete", this.xO);
                this.xhr.ajax(this.Lm ? "/collection/update" : "/collection/create", a.Ed())
            } else z.P(this.pD, !0)
        }
    };
    z.e.xO = function() {
        var a = z.Dn(this.xhr);
        a && !a.r
            ? this.Lm
            ? (iA(this), z.T.message("编辑成功"), (0, window.setTimeout)(function() { window.location.reload() }, 1E3), this
                .Lm = !1)
            : this.ib
            ? (z.P(this.gx, !1), z.P(this.HE, !0), fA(this, 0), this.Du.push(a.msg[0]), aA(this, a.msg, !0), this.Yi
                .value = "", this.Dk.value = "")
            : (iA(this), z.T.message("创建成功"), (0, window
                .setTimeout)(function() { window.location.href = "/collections/mine" }, 1E3))
            : lA(this.Oy, this.Lm, a.msg)
    };
    z.e.W = function() { return this.ua.W() };
    var jA = "close";
    z.Zz.prototype.th = function() {
        (0, window.$)(window).on("beforeunload.FavoDiag",
            (0, z.t)(function() { return "你对收藏夹的修改还未保存，确认离开该页面吗？" }, this))
    };
    z.Zz.prototype.Hi = function() { (0, window.$)(window).off("beforeunload.FavoDiag") };
    z.y(z.nA, z.Q);
    z.nA.prototype.C = function() { this.o().g(this.h, "click", this.Xa) };
    z.nA.prototype.Xa = function(a) {
        var b = z.yr(this.h, a.target);
        this.uo && this.uo(b);
        b &&
            b.name &&
            "focus" === b.name &&
            (0, z.RG)(b,
                this.iz,
                function() {
                    b.getAttribute("data-followme") &&
                    (z.S.has(b, "zg-btn-follow")
                        ? b.setAttribute("data-tooltip", "s$b$对方已关注你")
                        : b.setAttribute("data-tooltip", "s$b$已互相关注"))
                },
                this.hz,
                { p0: "question" === this.iz ? "关注问题" : null })
    };
    z.nA.prototype.FC = z.m(41);
    z.y(z.oA, z.xx);
    z.oA.prototype.Xo = function() { return this.Vp };
    z.oA.prototype.rn = function(a) { this.Vp = a };
    z.oA.prototype.ga = function(a, b, c, d) {
        var f = z.Cs(this.element, this.yf, a, b, null, c, 10, d, this.OB);
        if (f & 496) {
            var g = pA(f, this.yf);
            b = pA(f, b);
            f = z.Cs(this.element, g, a, b, null, c, 10, d, this.OB);
            f & 496 && (g = pA(f, g), b = pA(f, b), z.Cs(this.element, g, a, b, null, c, this.Xo(), d, this.OB))
        }
    };
    z.y(qA, z.oA);
    z.y(rA, z.Ip);
    z.ka(rA);
    z.e = rA.prototype;
    z.e.B = function(a) {
        var b = { "class": "goog-inline-block " + this.xg(a).join(" ") }, b = a.L().B("DIV", b, this.nh(a.cb(), a.L()));
        this.Qd(b, a.um());
        return b
    };
    z.e.Hf = function() { return "button" };
    z.e.S = function(a) { return a && a.firstChild && a.firstChild.firstChild };
    z.e.nh = function(a, b) {
        return b.B("DIV",
            "goog-inline-block " + (this.V() + "-outer-box"),
            b.B("DIV", "goog-inline-block " + (this.V() + "-inner-box"), a))
    };
    z.e.Sb = function(a) { return "DIV" == a.tagName };
    z.e.w = function(a, b) {
        sA(b, !0);
        sA(b, !1);
        var c;
        a: {
            c = a.L().lH(b);
            var d = this.V() + "-outer-box";
            if (c && z.zg(c, d) && (c = a.L().lH(c), d = this.V() + "-inner-box", c && z.zg(c, d))) {
                c = !0;
                break a
            }
            c = !1
        }
        c || b.appendChild(this.nh(b.childNodes, a.L()));
        z.Bg(b, ["goog-inline-block", this.V()]);
        return rA.v.w.call(this, a, b)
    };
    z.e.V = function() { return "goog-custom-button" };
    z.y(tA, rA);
    z.ka(tA);
    z.e = tA.prototype;
    z.e.S = function(a) { return tA.v.S.call(this, a && a.firstChild) };
    z.e.w = function(a, b) {
        var c = z.Me("*", "goog-menu", b)[0];
        if (c) {
            z.P(c, !1);
            z.Ke(c).body.appendChild(c);
            var d = new z.Xz;
            d.w(c);
            a.bi(d)
        }
        return tA.v.w.call(this, a, b)
    };
    z.e.nh = function(a, b) {
        return tA.v.nh.call(this,
            [this.createCaption(a, b), b.B("DIV", "goog-inline-block " + (this.V() + "-dropdown"), " ")],
            b)
    };
    z.e.createCaption = function(a, b) { return uA(a, this.V(), b) };
    z.e.V = function() { return "goog-menu-button" };
    z.y(z.vA, z.Sp);
    z.e = z.vA.prototype;
    z.e.mu = !1;
    z.e.dj = !1;
    z.e.jY = !1;
    z.e.C = function() {
        z.vA.v.C.call(this);
        AA(this, !0);
        this.ha && zA(this, this.ha, !0);
        z.vg(this.h, "haspopup", !!this.ha)
    };
    z.e.Db = function() {
        z.vA.v.Db.call(this);
        AA(this, !1);
        if (this.ha) {
            this.Mb(!1);
            this.ha.Db();
            zA(this, this.ha, !1);
            var a = this.ha.m();
            a && z.N(a)
        }
    };
    z.e.D = function() {
        z.vA.v.D.call(this);
        this.ha && (this.ha.dispose(), delete this.ha);
        delete this.WW;
        this.la.dispose()
    };
    z.e.ze = function(a) {
        z.vA.v.ze.call(this, a);
        this.Jc() && (this.Mb(!this.Eb(), a), this.ha && (a = this.Eb(), this.ha.Tf = a))
    };
    z.e.Nf = function(a) {
        z.vA.v.Nf.call(this, a);
        this.ha && !this.Jc() && (this.ha.Tf = !1)
    };
    z.e.ee = function() {
        this.setActive(!1);
        return !0
    };
    z.e.NR = function(a) { this.ha && this.ha.W() && !this.ng(a.target) && this.Mb(!1) };
    z.e.ng = function(a) { return a && z.nf(this.m(), a) || this.ha && this.ha.ng(a) || !1 };
    z.e.Mf = function(a) {
        if (32 == a.keyCode) {
            if (a.preventDefault(), "keyup" != a.type) return !0
        } else if ("key" != a.type) return !1;
        if (this.ha && this.ha.W()) {
            var b = 13 == a.keyCode || 32 == a.keyCode, c = this.ha.kc(a);
            return 27 == a.keyCode || b ? (this.Mb(!1), !0) : c
        }
        return 40 == a.keyCode || 38 == a.keyCode || 32 == a.keyCode || 13 == a.keyCode ? (this.Mb(!0, a), !0) : !1
    };
    z.e.ip = function() { this.Mb(!1) };
    z.e.wS = function() { this.Jc() || this.Mb(!1) };
    z.e.od = function(a) {
        this.mu || this.Mb(!1);
        z.vA.v.od.call(this, a)
    };
    z.e.kb = function() {
        this.ha || this.bi(new z.Xz(this.L(), this.OU));
        return this.ha || null
    };
    z.e.bi = function(a) {
        var b = this.ha;
        if (a != b &&
        (b && (this.Mb(!1), this.ya && zA(this, b, !1), delete this.ha), this.ya && z.vg(this.h, "haspopup", !!a), a
        )) {
            this.ha = a;
            z.xh(a, this);
            a.F(!1);
            var c = this.mu;
            (a.co = c) && a.mf(!0);
            this.ya && zA(this, a, !0)
        }
        return b
    };
    z.e.Ia = function(a) { this.kb().K(a, !0) };
    z.e.Gj = function(a, b) { this.kb().Bl(a, b, !0) };
    z.e.removeItem = function(a) { (a = this.kb().removeChild(a, !0)) && a.dispose() };
    z.e.Oi = function(a) { return this.ha ? z.Bh(this.ha, a) : null };
    z.e.rm = function() { return this.ha ? z.Ah(this.ha) : 0 };
    z.e.F = function(a, b) {
        var c = z.vA.v.F.call(this, a, b);
        c && !this.W() && this.Mb(!1);
        return c
    };
    z.e.gb = function(a) {
        z.vA.v.gb.call(this, a);
        this.isEnabled() || this.Mb(!1)
    };
    z.e.ML = function() { this.Mb(!0) };
    z.e.Mb = function(a, b) {
        z.vA.v.Mb.call(this, a);
        if (this.ha && !!(this.N & 64) == a) {
            if (a) {
                if (!this.ha.ya)
                    if (this.dj) {
                        var c = Ao(this.m());
                        c ? z.zn(this.ha, c) : this.ha.render(this.m().parentNode)
                    } else this.ha.render();
                this.SM = jo(this.m());
                this.pF = go(this.m());
                yA(this);
                c = !!b && (13 == b.keyCode || 32 == b.keyCode);
                b && (40 == b.keyCode || 38 == b.keyCode) || c && this.jY ? z.Xr(this.ha) : this.ha.Hb(-1)
            } else {
                this.setActive(!1);
                this.ha.Tf = !1;
                if (c = this.m()) z.vg(c, "activedescendant", ""), z.vg(c, "owns", "");
                null != this.hv &&
                (this.hv = void 0, (c = this.ha.m()) &&
                    z.Wg(c, "", ""))
            }
            this.ha.F(a, !1, b);
            if (!this.Xd) {
                var c = this.o(), d = a ? c.g : c.pa;
                d.call(c, this.L().wa(), "mousedown", this.NR, !0);
                this.mu && d.call(c, this.ha, "blur", this.wS);
                d.call(c, this.la, "tick", this.zq);
                a ? this.la.start() : this.la.stop()
            }
        }
        this.ha && this.ha.m() && this.ha.h.removeAttribute("aria-hidden")
    };
    z.e.zq = function() {
        var a = go(this.m()), b = jo(this.m()), c = this.pF;
        (c = !(c == a || c && a && c.left == a.left && c.width == a.width && c.top == a.top && c.height == a.height)) ||
        (c = this.SM, c = !(c == b ||
            c && b && c.top == b.top && c.right == b.right && c.bottom == b.bottom && c.left == b.left));
        c && (this.pF = a, this.SM = b, yA(this))
    };
    z.e.Mz = function(a) { (a = a.target.m()) && BA(this, a) };
    z.e.nS = function(a) { Fp(this, 32) && this.jc() && this.ha && this.ha.W() && a.stopPropagation() };
    z.e.Wz = function() {
        if (!Wr(this.ha)) {
            var a = this.m();
            z.vg(a, "activedescendant", "");
            z.vg(a, "owns", "")
        }
    };
    z.e.Fz = function(a) {
        if (this.Eb() && a.target instanceof z.Sz) {
            a = a.target;
            var b = a.m();
            a.W() && a.N & 2 && null != b && BA(this, b)
        }
    };
    z.Jp("goog-menu-button", function() { return new z.vA(null) });
    z.y(CA, vx);
    CA.prototype.ga = function(a, b, c, d) {
        var f = ko(z.Ke(a)), g = this.Fi.x + f.x, f = this.Fi.y + f.y, h = Ds(a), g = g - h.x, f = f - h.y;
        Fs(new z.Ge(g, f), a, b, c, null, null, d)
    };
    z.y(DA, CA);
    DA.prototype.Vp = 0;
    DA.prototype.rn = function(a) { this.Vp = a };
    DA.prototype.ga = function(a, b, c, d) {
        var f = Hn(a), f = jo(f), g;
        g = z.Ie(a);
        g = z.Se(g.Ra);
        g = new z.Ge(this.Fi.x + g.scrollLeft, this.Fi.y + g.scrollTop);
        var h = b, k = Fs(g, a, h, c, f, 10, d);
        if (0 != (k & 496)) {
            if (k & 16 || k & 32) h ^= 2;
            if (k & 64 || k & 128) h ^= 1;
            k = Fs(g, a, h, c, f, 10, d);
            0 != (k & 496) && Fs(g, a, b, c, f, this.Vp, d)
        }
    };
    z.y(z.EA, z.Xz);
    z.e = z.EA.prototype;
    z.e.kZ = !1;
    z.e.ZI = 0;
    z.e.qg = null;
    z.e.T = function(a) {
        z.EA.v.T.call(this, a);
        (a = a.getAttribute("for") || a.htmlFor) && this.attach(this.L().m(a), 1)
    };
    z.e.C = function() {
        z.EA.v.C.call(this);
        this.dg.forEach(this.XE, this);
        var a = this.o();
        a.g(this, "action", this.eV);
        a.g(this.L().wa(), "mousedown", this.ZJ, !0);
        z.D && a.g(this.L().wa(), "contextmenu", this.ZJ, !0)
    };
    z.e.attach = function(a, b, c, d, f) {
        a && this.dg.og(z.ta(a)) ||
        (a
            ? (b = { h: a, cM: b, NU: c, Ry: d ? "contextmenu" : "mousedown", hB: f }, this.dg.set(z.ta(a), b))
            : b = null, this.ya && this.XE(b), a = z.Ba(this.IV, a), this.m() && this.o().g(this.m(), "keydown", a))
    };
    z.e.IV = function(a, b) {
        if (27 == b.keyCode) a.focus();
        else {
            var c = z.Bh(this, this.$a);
            if (c) {
                var c = c.m(), d = new z.Pc(b.sc, c);
                d.target = c;
                if (32 == b.keyCode || 13 == b.keyCode) z.Vc(c) ? z.sd(c, "keydown", !1, d) : z.pd(c, "keydown", !1, d);
                32 == b.keyCode && this.hide()
            }
        }
    };
    z.e.XE = function(a) {
        this.o().g(a.h, a.Ry, this.oK);
        "contextmenu" != a.Ry && this.o().g(a.h, "keydown", this.fW)
    };
    z.e.detach = function(a) {
        if (!a || !this.dg.og(z.ta(a))) throw Error("Menu not attached to provided element, unable to detach.");
        a = z.ta(a);
        if (this.ya) {
            var b = this.dg.get(a);
            this.o().pa(b.h, b.Ry, this.oK)
        }
        this.dg.remove(a)
    };
    z.e.ML = function(a, b, c) {
        b = z.ja(a.cM) ? new z.oA(a.h, a.cM, !0) : new DA(b, c);
        b.rn && b.rn(5);
        z.FA(this, b, a.NU, a.hB, a.h)
    };
    z.e.hide = function() { this.W() && (this.F(!1), this.W() || (this.ZI = (0, z.I)(), this.qg = null)) };
    z.e.JI = function() { return this.W() || 150 > (0, z.I)() - this.ZI };
    z.e.eV = function() { this.hide() };
    z.e.oK = function(a) { GA(this, a) };
    z.e.fW = function(a) {
        32 != a.keyCode && 13 != a.keyCode && 40 != a.keyCode || GA(this, a);
        40 == a.keyCode && z.Xr(this)
    };
    z.e.ZJ = function(a) { this.W() && !this.ng(a.target) && this.hide() };
    z.e.od = function(a) {
        z.EA.v.od.call(this, a);
        this.hide()
    };
    z.e.D = function() {
        z.EA.v.D.call(this);
        this.dg && (this.dg.clear(), delete this.dg)
    };
    z.y(HA, Nz);
    z.ka(HA);
    HA.prototype.B = function(a) {
        var b = HA.v.B.call(this, a);
        z.Ag(b, "goog-submenu");
        IA(this, a, b);
        return b
    };
    HA.prototype.w = function(a, b) {
        b = HA.v.w.call(this, a, b);
        z.Ag(b, "goog-submenu");
        IA(this, a, b);
        var c = z.Me("DIV", "goog-menu", b);
        if (c.length) {
            var d = new z.Xz(a.L()), c = c[0];
            z.P(c, !1);
            a.L().wa().body.appendChild(c);
            d.w(c);
            a.bi(d, !0)
        }
        return b
    };
    HA.prototype.aa = function(a, b) {
        var c = this.S(a), d = c && c.lastChild;
        HA.v.aa.call(this, a, b);
        d && c.lastChild != d && z.zg(d, "goog-submenu-arrow") && c.appendChild(d)
    };
    HA.prototype.bf = function(a) {
        HA.v.bf.call(this, a);
        var b = a.S(), c = a.L(), c = z.Ne(c.Ra, "SPAN", "goog-submenu-arrow", b)[0];
        JA(a, c);
        c != b.lastChild && b.appendChild(c);
        z.vg(a.m(), "haspopup", "true")
    };
    z.y(KA, z.Sz);
    var QD = 218;
    z.e = KA.prototype;
    z.e.pe = null;
    z.e.RC = null;
    z.e.kB = !1;
    z.e.Ac = null;
    z.e.lt = !1;
    z.e.es = !0;
    z.e.aU = !1;
    z.e.C = function() {
        KA.v.C.call(this);
        this.o().g(this.getParent(), "hide", this.iK);
        this.Ac && OA(this, this.Ac, !0)
    };
    z.e.Db = function() {
        this.o().pa(this.getParent(), "hide", this.iK);
        this.Ac && (OA(this, this.Ac, !1), this.lt || (this.Ac.Db(), z.N(this.Ac.m())));
        KA.v.Db.call(this)
    };
    z.e.D = function() {
        this.Ac && !this.lt && this.Ac.dispose();
        this.Ac = null;
        KA.v.D.call(this)
    };
    z.e.Yc = function(a, b) {
        KA.v.Yc.call(this, a);
        b && (this.kb().Tf = !0);
        a || (this.pe && z.wd(this.pe), this.pe = z.vd(this.ph, QD, this))
    };
    z.e.Tv = function() {
        var a = this.getParent();
        a && Wr(a) == this && (NA(this, !0), MA(this))
    };
    z.e.ph = function() {
        var a = this.Ac;
        a && a.getParent() == this && (NA(this, !1), z.Ch(a, function(a) { "function" == typeof a.ph && a.ph() }))
    };
    z.e.F = function(a, b) {
        var c = KA.v.F.call(this, a, b);
        c && !this.W() && this.ph();
        return c
    };
    z.e.kc = function(a) {
        var b = a.keyCode, c = this.Jd() ? 37 : 39, d = this.Jd() ? 39 : 37;
        if (!this.kB) {
            if (!this.isEnabled() || b != c && b != this.nB) return !1;
            this.Tv();
            z.Xr(this.kb());
            LA(this)
        } else if (!this.kb().kc(a))
            if (b == d) this.ph();
            else return !1;
        a.preventDefault();
        return !0
    };
    z.e.sV = function() { this.Ac.getParent() == this && (LA(this), this.Qi().Yc(this), MA(this)) };
    z.e.iK = function(a) { a.target == this.Qi() && (this.ph(), LA(this)) };
    z.e.Gd = function(a) {
        this.isEnabled() && (LA(this), this.RC = z.vd(this.Tv, QD, this));
        KA.v.Gd.call(this, a)
    };
    z.e.ee = function(a) {
        LA(this);
        if (Fp(this, 8) || Fp(this, 16)) return KA.v.ee.call(this, a);
        this.Tv();
        return !0
    };
    z.e.Ia = function(a) { this.kb().K(a, !0) };
    z.e.Gj = function(a, b) { this.kb().Bl(a, b, !0) };
    z.e.removeItem = function(a) { (a = this.kb().removeChild(a, !0)) && a.dispose() };
    z.e.Oi = function(a) { return z.Bh(this.kb(), a) };
    z.e.rm = function() { return z.Ah(this.kb()) };
    z.e.nb = function() { return this.kb().nb() };
    z.e.kb = function() {
        this.Ac ? this.lt && this.Ac.getParent() != this && z.xh(this.Ac, this) : this.bi(new z.Xz(this.L()), !0);
        this.Ac.m() || this.Ac.B();
        return this.Ac
    };
    z.e.bi = function(a, b) {
        var c = this.Ac;
        a != c &&
        (c && (this.ph(), this.ya && OA(this, c, !1)), this.Ac = a, this
            .lt = !b, a && (z.xh(a, this), a.F(!1, !0), a.co = !1, a.mf(!1), this.ya && OA(this, a, !0)))
    };
    z.e.ng = function(a) { return this.kb().ng(a) };
    z.Jp("goog-submenu", function() { return new KA(null) });
    z.VG = function(a, b) {
        var c = [], d = [].slice, f = z.Kr(a, function() { c.length && (b(c), c = []) }, !0);
        return function() {
            c.push(d.call(arguments));
            f()
        }
    }(550, function(a) { z.Y.jb() && (a = { items: JSON.stringify(a) }, window.$.post("/lastread/touch", a)) });
    z.y(z.PA, z.Sz);
    z.Jp("goog-checkbox-menuitem", function() { return new z.PA(null) });
    z.p(QA, z.Q);
    QA.prototype.T = function(a) {
        z.Q.prototype.T.call(this, a);
        var b = (0, window.$)(a).data(), c = new z.Xz;
        RA(this, c, b.copyable);
        c.Ia(new z.Wz);
        TA(this, c);
        c.Ia(new z.Wz);
        c.Ia(new z.Sz("删除"));
        this.o().g(c, "action", this.Sz).ta(c, "show", this.TQ);
        z.S.add(c.m(), "zg-gray-normal");
        (0, window.$)(c.m()).addClass("setting-menu");
        b = new z.vA("comment", c);
        b.dj = !0;
        z.xA(b);
        wA(b);
        b.Sb = z.Hl;
        b.w(a);
        this.ha = c
    };
    QA.prototype.TQ = function() {
        var a = this;
        window.$.get("/answer/comment_permission", { answer_id: this.ti.Cb }).then(function(b) {
            if (b && !b.r) {
                var c = b.msg;
                a.XB.forEach(function(a) { a.X() === c && a.yc(!0) });
                a.Tl = c
            } else z.T.message(b.msg)
        })
    };
    QA.prototype.GC = function(a) {
        KD.GC(this.ti.Cb, a);
        (0, window.$)(".copyright", sD(this.ti)).text(WG[a]).attr("href", XG[a] || "#")
    };
    QA.prototype.Sz = function(a) {
        var b = a.target, c = b.X();
        if (c in SA)
            z.Y.DA || "2" !== c
                ? (this.GC(c), this.RF.forEach(function(a) { a.yc(a === b) }))
                : (window.open("/copyright/invite", "copyright_invite"), window
                    .setTimeout(function() { return b.yc(!1) }, 100));
        else if ("删除" === c) VA(this);
        else if (c in UA)
            if (this.Tl === c) WA(this);
            else if ("review_comment" === this.Tl) {
                var d = this;
                a = void 0;
                var f;
                "all_can_comment" === c
                    ? (a = "确认开放评论吗？", f = "开放评论后，评论提交即公开显示。\x3cbr/\x3e当前所有待审核评论不会公开，为您自动保存，若切换回预审评论可以继续审核。")
                    : "nobody_can_comment" === c &&
                    (a = "确认关闭评论吗？",
                        f = "关闭评论后，所有人无法提交评论。\x3cbr/\x3e当前所有待审核评论不会公开，为您自动保存，若切换回预审评论可以继续审核。");
                z.T.confirm(a, f, function(a) { a && XA(d, c) });
                WA(this)
            } else XA(this, c)
    };
    var SA = { 0: "禁止转载", 1: "允许规范转载", 2: "允许付费转载" },
        WG = { 0: "禁止转载", 1: "允许规范转载", 2: "允许付费转载" },
        XG = { 0: "/terms#sec-licence-6", 1: "/terms#sec-licence-1" },
        UA = z.Y.uc
            ? { all_can_comment: "开放评论", review_comment: "预审评论", nobody_can_comment: "关闭评论" }
            : { all_can_comment: "允许任何人评论", followee_can_comment: "允许我关注的人评论", nobody_can_comment: "关闭评论" },
        YA = "set_permission";
    var YG = /a(:(link|visited|active|hover))?/;
    aB.prototype.clone = function() {
        var a = new aB;
        a.$h = this.$h.concat();
        a.Ko = this.Ko;
        return a
    };
    var ZG = /(^|;|{)\s*color:([^;]+);/g,
        eB = {},
        hB = {},
        $G = {},
        aH =
            "color visibility quotes list-style-type list-style-image list-style-position list-style page-break-inside orphans widows font-family font-style font-variant font-weight text-indent text-align text-transform white-space caption-side border-collapse border-spacing empty-cells cursor".split(" "),
        bH =
            "font-family font-size font-weight font-variant font-style color text-align text-decoration text-indent text-transform letter-spacing white-space word-spacing".split(" ");
    var cH;
    z.y(z.iB, z.H);
    z.e = z.iB.prototype;
    z.e.G = null;
    z.e.cP = !0;
    z.e.CM = function() { this.G && (this.disable(this.G), this.G = null) };
    z.e.enable = function(a) { this.G == a && (this.qc = !0) };
    z.e.disable = function(a) { this.G == a && (this.qc = !1) };
    z.e.isEnabled = function(a) { return this.G == a ? this.qc : !1 };
    z.e.$r = z.Gl;
    z.e.RI = z.Gl;
    z.e.D = function() {
        this.G && this.CM(this.G);
        z.iB.v.D.call(this)
    };
    z.qB = z.Mo({ Oz: 1, oS: 2, Lt: 3, pk: 4, Mt: 5, execCommand: 6, queryCommandValue: 7, FK: 8, FP: 10, EP: 11 });
    cH = { 8: !0, 10: !0, 11: !0 };
    z.iB.prototype.execCommand = function(a, b) {
        var c = this.RI(a);
        c || (z.B && z.NB(this.G, !0, !0), this.G.Ii());
        try {
            var d = this.Ef.apply(this, arguments)
        } finally {
            c || (this.G.Cf(), z.MB(this.G))
        }
        return d
    };
    z.iB.prototype.ff = function() { return !1 };
    var rB, uB;
    z.y(pB, z.H);
    pB.prototype.Ka = null;
    pB.prototype.Wc = null;
    rB = "change";
    z.sB = "delayedchange";
    uB = {
        k_: "cvc",
        E_: "load",
        Y_: "unload",
        c_: "beforechange",
        i_: rB,
        m_: z.sB,
        d_: "beforefocus",
        p_: "focus",
        g_: "blur",
        f_: "beforetab",
        w_: "ifrsz",
        e_: "beforeselectionchange",
        N_: "selectionchange"
    };
    z.wB = 0;
    z.dH = null;
    z.e = pB.prototype;
    z.e.Eh = !1;
    z.e.NM = !1;
    z.e.uw = !1;
    z.e.m = function() { return this.Ka };
    z.e.addListener = function(a, b, c, d) {
        var f = this.m();
        yG && f && this.Bc() && (f = f.ownerDocument);
        d ? z.yd(this.rc, f, a, b, c, d) : this.rc.g(f, a, b, c)
    };
    var vB = 15, tB = 250;
    pB.prototype.Bc = z.Hl;
    pB.prototype.Op = z.Hl;
    pB.prototype.JL = z.Gl;
    var zB = { 46: !0, 8: !0 };
    z.C || (zB[9] = !0);
    var AB = { 86: !0, 88: !0 };
    z.el && !z.B && (zB[229] = !0);
    pB.prototype.Xx = function() {
        this.rc && this.rc.removeAll();
        if ((z.Zk || z.ai) && this.Bc() && this.JL()) {
            try {
                var a = this.rb.eb();
                a.removeEventListener("keydown", this.oo, !1);
                a.removeEventListener("touchend", this.oo, !1)
            } catch (b) {
            }
            delete this.oo
        }
        if (z.Lg && this.Bc()) {
            try {
                a = this.rb.eb(), a.removeEventListener("focus", this.Ix, !1), a
                    .removeEventListener("blur", this.Hx, !1)
            } catch (b) {
            }
            delete this.Ix;
            delete this.Hx
        }
        this.Ue && this.Ue.stop();
        this.Ws.stop()
    };
    pB.prototype.D = function() {
        this.Qp() || this.Kc();
        this.Wc && this.execCommand("clearlorem");
        this.Qm = z.wB;
        for (var a in this.bc) {
            var b = this.bc[a];
            b.$r() || b.disable(this)
        }
        this.rb = this.Ka = null;
        this.Xx();
        this.im && (z.nd(this.im), this.im = null);
        this.$m = null;
        this.rc && (this.rc.dispose(), this.rc = null);
        for (; a = this.YZ.pop();) a.dispose();
        z.dH == this.id && (z.dH = null);
        for (var c in this.bc) a = this.bc[c], a.cP && a.dispose();
        delete this.bc;
        pB.v.D.call(this)
    };
    var eH = [
        "DOMNodeInserted", "DOMNodeRemoved", "DOMNodeRemovedFromDocument", "DOMNodeInsertedIntoDocument",
        "DOMCharacterDataModified"
    ];
    pB.prototype.NC = function() {
        if (vG || !this.Bc()) this.rc.g(this.m(), "DOMSubtreeModified", this.Pz);
        else {
            var a = this.rb.wa();
            this.rc.g(a, eH, this.Pz, !0);
            this.rc.g(a, "DOMAttrModified", (0, z.t)(this.yH, this, this.Pz), !0)
        }
    };
    var GB = { 8: 1, 9: 1, 13: 1, 33: 1, 34: 1, 35: 1, 36: 1, 37: 1, 38: 1, 39: 1, 40: 1, 46: 1 },
        HB = { 65: !0, 86: !0, 88: !0 },
        JB = { 8: 1, 9: 1, 13: 1, 27: 1, 33: 1, 34: 1, 37: 1, 38: 1, 39: 1, 40: 1 };
    z.e = pB.prototype;
    z.e.Ip = function(a, b) {
        for (var c = this.vk[a], d = z.yb(arguments, 1), f = 0; f < c.length; ++f) {
            var g = c[f];
            if ((g.isEnabled(this) || cH[a]) && g[z.qB[a]].apply(g, d)) return !0
        }
        return !1
    };
    z.e.RT = function(a, b) {
        for (var c = this.vk[a], d = z.yb(arguments, 1), f = 0; f < c.length; ++f) {
            var g = c[f];
            (g.isEnabled(this) || cH[a]) && g[z.qB[a]].apply(g, d)
        }
    };
    z.e.wv = function(a, b, c) {
        for (var d = this.vk[a], f = z.yb(arguments, 1), g = 0; g < d.length; ++g) {
            var h = d[g];
            if (h.isEnabled(this) || cH[a]) f[0] = h[z.qB[a]].apply(h, f)
        }
        return f[0]
    };
    z.e.Lf = function(a) {
        z.Uc && 65 == a.keyCode && EB(this, a);
        (z.B || CB(this, a)) && !this.Ip(1, a) && EG && IB(this, a)
    };
    z.e.pS = function(a) {
        if (z.B) {
            if (!CB(this, a)) return
        } else this.Bz = !0, this.Ii();
        this.Ip(2, a) || EG || IB(this, a)
    };
    z.e.qS = function(a) {
        z.B || !this.Bz && !yB(a) || this.kk();
        this.Ip(3, a);
        EB(this, a)
    };
    z.e.execCommand = function(a, b) {
        for (var c = arguments, d, f = this.vk[6], g = 0; g < f.length; ++g) {
            var h = f[g];
            if (h.isEnabled(this) && h.ff(a)) {
                d = h.execCommand.apply(h, c);
                break
            }
        }
        return d
    };
    z.e.queryCommandValue = function(a) {
        var b = this.Kc() && this.Rf;
        if (z.oa(a)) return this.rv(a, b);
        for (var c = {}, d = 0; d < a.length; d++) c[a[d]] = this.rv(a[d], b);
        return c
    };
    z.e.rv = function(a, b) {
        for (var c = this.vk[7], d = 0; d < c.length; ++d) {
            var f = c[d];
            if (f.isEnabled(this) && f.ff(a) && (b || f.$r())) return f.queryCommandValue(a)
        }
        return b ? null : !1
    };
    z.e.yH = function(a, b) {
        if (!FB(this, rB)) {
            var c = b.sc;
            try {
                if (c.originalTarget.prefix || "scrollbar" == c.originalTarget.nodeName) return
            } catch (d) {
                return
            }
            c.prevValue != c.newValue && a.call(this, c)
        }
    };
    z.e.Pz = function(a) { FB(this, rB) || (a = a.fH ? a.sc : a, a.target.firebugIgnore || this.Ue.start()) };
    z.e.Jt = function() {
        z.C && this.execCommand("clearlorem", !0);
        z.B && this.Cy();
        this.Cf()
    };
    z.e.NS = function() {
        var a = this.xL;
        this.xL = null;
        z.MB(this, void 0, a)
    };
    z.e.Ii = function() { FB(this, "beforechange") || this.dispatchEvent("beforechange") };
    z.e.Cf = function(a) { PB(this, !0, a) };
    z.e.kk = function() { FB(this, rB) || (this.Ue && this.Ue.stop(), FB(this, z.sB) || this.Ws.start()) };
    z.e.sG = function() { FB(this, z.sB) || (this.Ws.stop(), this.dispatchEvent(z.sB)) };
    z.e.Cy = function() {
        this.rG();
        this.tG()
    };
    z.e.rG = function() {
        FB(this, "beforefocus") || (this.execCommand("clearlorem", !0), this.dispatchEvent("beforefocus"))
    };
    z.e.tG = function() {
        if (!FB(this, "focus")) {
            z.dH = this.id;
            this.Rf = !0;
            this.dispatchEvent("focus");
            if (z.B) {
                var a = this.m(), b = z.LB(this);
                if (b) {
                    var c = z.Ot(b);
                    0 != z.Pt(b) || c && c != a && "BODY" != c.tagName || z.Xu(a)
                }
            }
            !wG && this.Bc() && this.rb.eb().parent.getSelection().removeAllRanges()
        }
    };
    z.e.Zs = function() {
        FB(this, "blur") || (z.dH == this.id && (z.dH = null), this.Rf = !1, this.dispatchEvent("blur"))
    };
    z.e.wm = function(a) {
        z.dH = this.id;
        if (z.C) {
            var b = a.target;
            b && "A" == b.tagName && a.ctrlKey && this.$m.eb().open(b.href)
        }
        this.uw = !0
    };
    z.e.Hz = function() { this.uw = !1 };
    z.e.Ot = function(a) {
        if (!this.NM || this.uw)
            this.uw = !1, this.dispatchEvent("beforeselectionchange"), z
                .MB(this, a), z.C && (this.xL = a.target, this.yL.start())
    };
    z.e.om = function() {
        if (this.queryCommandValue("usinglorem")) return " ";
        if (!this.Kc()) return this.Wc.innerHTML;
        var a = this.m(), b = a.cloneNode(!1), a = a.innerHTML;
        z.C && a.match(/^\s*<script/i) && (a = " " + a);
        b.innerHTML = a;
        this.RT(11, b);
        return this.wv(10, b.innerHTML)
    };
    z.e.ge = function(a, b, c, d) {
        if (!this.Qp()) {
            d && this.execCommand("clearlorem");
            b && a && (b = "\x3cp\x3e" + b + "\x3c/p\x3e");
            c && z.NB(this, !1, !0);
            a = b;
            if (b = this.m()) {
                if (this.Bc() && z.D)
                    for (var f = b.ownerDocument
                                 .getElementsByTagName("HEAD"),
                        g = f.length - 1;
                        1 <= g;
                        --g) f[g].parentNode.removeChild(f[g])
            } else b = this.Wc;
            b && DB(this, a, b);
            d && this.execCommand("updatelorem");
            this.Kc() && (c ? (z.B && Hq(this.Ue), PB(this)) : this.Cf())
        }
    };
    z.e.xD = function() {
        var a = this.rb.wa();
        a.designMode = "on";
        z.BG && a.execCommand("styleWithCSS", !1, !1)
    };
    z.e.xI = function() { this.Wl && SB(this) && z.bh(this.Wl, this.m()) };
    z.e.Kc = function() { return 2 == this.Qm };
    z.e.Qp = function() { return 1 == this.Qm };
    z.e.focus = function() {
        if (!z.oB && this.Bc()) this.rb.eb().focus();
        else {
            if (z.Lg) var a = this.El.pageXOffset, b = this.El.pageYOffset;
            this.m().focus();
            z.Lg && this.El.scrollTo(a, b)
        }
    };
    z.e.wg = function() {
        !z.tG && z.B || z.RB(this);
        this.focus()
    };
    z.e.Be = function(a) {
        this.Qm = 1;
        var b = this.Wc;
        this.nodeName = b.nodeName;
        this.cssText = b.style.cssText;
        z.Ag(b, "editable");
        this.fB(a)
    };
    z.e.fB = function(a) {
        var b = this.Wc;
        if (b) {
            var b = b.innerHTML, c = {}, b = this.wv(8, b, c), d = this.$m.B("IFRAME", this.nH());
            if (SB(this)) {
                var f = (0, z.t)(this.gI, this, d, b, c);
                this.im = z.G(d, "load", f, !0);
                a && (d.src = a)
            }
            this.YE(d);
            SB(this) || this.gI(d, b, c)
        }
    };
    z.e.Kt = function() {
        z.C && Iu(this.rb.eb());
        z.dH != this.id && this.execCommand("updatelorem");
        if ((z.Zk || z.ai) && this.Bc() && this.JL()) {
            var a = this.rb.eb();
            this.oo = (0, z.t)(a.focus, a);
            a.addEventListener("keydown", this.oo, !1);
            a.addEventListener("touchend", this.oo, !1)
        }
        z.Lg && this.Bc()
            ? (this.Ix = (0, z.t)(this.Cy, this), this.Hx = (0, z.t)(this.Zs, this), a = this.rb.eb(), a
                .addEventListener("focus", this.Ix, !1), a.addEventListener("blur", this.Hx, !1))
            : (DG
                ? (this.addListener("focus", this.tG), this.addListener(z.Ql, this.rG))
                : this.addListener("focus",
                    this.Cy), this.addListener("blur", this.Zs, z.B));
        z.B
            ? this.NC()
            : (this.addListener(["beforecut", "beforepaste", "drop", "dragend"], this.Ii), this
                .addListener(["cut", "paste"], Vo(this.Cf)), this.addListener("drop", this.Jt));
        this.addListener(z.D ? "dragend" : "dragdrop", this.Jt);
        this.addListener("keydown", this.Lf);
        this.addListener("keypress", this.pS);
        this.addListener("keyup", this.qS);
        this.yL = new Gq(this.NS, 250, this);
        this.bR && this.addListener("click", QB);
        this.addListener("mousedown", this.wm);
        this.NM
            ? (this.rc.g(this.rb.wa(),
                "mouseup",
                this.Ot), this.addListener("dragstart", this.Hz))
            : this.addListener("mouseup", this.Ot);
        this.xI();
        PB(this);
        this.dispatchEvent("load");
        for (var b in this.bc) this.bc[b].enable(this)
    };
    z.e.YE = function(a) {
        var b = this.Wc;
        a.className = b.className;
        a.id = b.id;
        z.Bo(a, b)
    };
    z.e.rz = function(a) {
        var b = Cn(z.Ie(this.Wc));
        return new lB(this.id, b, !1, !1, a)
    };
    z.e.eN = function(a, b, c) {
        c = this.rz(c);
        SB(this)
            ? (a = (a.contentDocument || a.contentWindow.document).body, z.oB && (a.contentEditable = !0), a
                .className = "editable", a.setAttribute("g_editable", !0), a.hideFocus = !0, a.id = c.QG, z
                .Ig(a, c.Yy), a.innerHTML = b)
            : nB(c, b, new mB(this.m(), this.Wl), a)
    };
    z.e.gI = function(a, b, c) {
        this.im && (z.nd(this.im), this.im = null);
        a.allowTransparency = "true";
        this.eN(a, b, c);
        BB(this, (a.contentDocument || a.contentWindow.document).body);
        !z.oB && this.Bc() && this.xD();
        this.Kt()
    };
    z.e.nH = function() {
        var a = "padding:0;" + this.Wc.style.cssText;
        z.cp(a, ";") || (a += ";");
        a += "background-color:white;";
        z.C && (a += "overflow:visible;");
        return { frameBorder: 0, style: a }
    };
    var fH;
    z.y(z.TB, pB);
    z.e = z.TB.prototype;
    z.e.DI = !1;
    z.e.YT = !1;
    z.e.Op = function() { return this.DI };
    z.e.HH = function() { FB(this, rB) || UB(this) };
    z.e.VC = function() {
        if (this.fr ? 0 : this.fr = !0) {
            var a = !1, b = KB(this);
            if (b) {
                var c, d = KB(this), f = d.contentDocument.body;
                c = f.parentNode;
                0 === (0, window.parseInt)(lo(d, "height"), 10) && z.Ig(d, "height", "1px");
                Cn(z.Ie(f))
                    ? d = c.offsetHeight
                    : (d = c.scrollHeight, c.clientHeight != c.offsetHeight && (d += fH || (fH = z.kh())));
                c = d;
                this.RU && (c = Math.max(c, this.RU));
                (0, window.parseInt)(lo(b, "height"), 10) != c && (b.style.height = c + "px", a = !0)
            }
            this.fr = !1;
            a && this.dispatchEvent("ifrsz")
        }
    };
    z.e.bA = "";
    var gH = !1;
    z.e = z.TB.prototype;
    z.e.Bc = function() { return !z.oB };
    z.e.NC = function() {
        z.TB.v.NC.call(this);
        if (this.Bc()) {
            var a = KB(this).ownerDocument;
            this.rc.g(a, eH, this.HH, !0);
            this.vU = z.ld(this.rb.eb(), "load", this.VC, !0, this);
            this.rc.g(a, "DOMAttrModified", (0, z.t)(this.yH, this, this.HH), !0)
        }
    };
    z.e.kk = function() { FB(this, rB) || (z.TB.v.kk.call(this), this.Bc() && this.VC()) };
    z.e.Zs = function() {
        if (!FB(this, "blur") && (z.TB.v.Zs.call(this), !z.oB && !wG)) {
            var a = this.rb.eb(), b = !1;
            z.nd(this.hJ);
            this.hJ = z.ld(a.document.body, "dragover", function() { b = !0 });
            z.u.setTimeout((0, z.t)(function() {
                        if (!b && this.rb) {
                            var a = z.LB(this), d = this.rb.eb();
                            Iu(d);
                            a && (a.collapse(!0), a.select())
                        }
                    },
                    this),
                0)
        }
    };
    z.e.xD = function() {
        z.TB.v.xD.call(this);
        var a = this.rb.wa();
        a.execCommand("enableInlineTableEditing", !1, "false");
        a.execCommand("enableObjectResizing", !1, "false")
    };
    z.e.xI = function() { this.Bc() || gH || (this.Wl && z.bh(this.Wl, this.m()), gH = !0) };
    z.e.fB = function(a) {
        if (this.Bc()) z.TB.v.fB.call(this, a);
        else if (a = this.Wc) BB(this, a), a.contentEditable = !0, DB(this, a.innerHTML, a), this.Kt()
    };
    z.e.Kt = function() {
        if (this.Bc()) {
            var a = this;
            z.u.setTimeout(function() { VB(a) }, 0)
        }
        z.TB.v.Kt.call(this)
    };
    z.e.nH = function() { return { frameBorder: 0, style: "padding:0;" } };
    z.e.YE = function(a) {
        if (!this.YT) {
            var b = this.Wc;
            b && (this.DI = "auto" == z.Og(b, "overflowY"))
        }
        var b = this.Wc, c = z.Ie(b), d = b.style.width, f = b.style.height;
        z.Ig(b, "visibility", "hidden");
        var c = c.B("DIV", { style: "height:0;clear:both", innerHTML: "\x26nbsp;" }), g = c.cloneNode(!0);
        b.insertBefore(c, b.firstChild);
        b.appendChild(g);
        g = z.Ke(b);
        if ((c = z.C && b.currentStyle) && Cn(z.Ie(g)) && "auto" != c.width && "auto" != c.height && !c.boxSizing)
            g = z.dh(b, c.width, "width", "pixelWidth"), c = z.dh(b, c.height, "height", "pixelHeight"), g = new z.He(g,
                c);
        else
            var c = z.Qn(b),
                g = z.fh(b),
                h = z.ih(b),
                g = new z.He(c.width - h.left - g.left - g.right - h.right,
                    c.height - h.top - g.top - g.bottom - h.bottom);
        c = g.width;
        g = g.height;
        h = "";
        this.Op() &&
        (h = "\x26nbsp;", z.Ig(b, "position", "relative"), z.Ig(b, "overflow", "visible"), z
            .Ig(a, "position", "absolute"), z.Ig(a, "top", "0"), z.Ig(a, "left", "0"));
        z.Wg(b, c, g);
        Cn(z.Ie(b)) && z.Ig(b, "lineHeight", "0");
        z.Tu(b, h);
        z.Wg(a, c, g);
        z.Wg(b, d, f);
        z.Ig(b, "visibility", "");
        b.appendChild(a);
        SB(this) ||
        (b = a.contentWindow.document, Cn(z.Ie(a.ownerDocument)) &&
        (b.open(),
            a = z.Gd("\x3c!DOCTYPE HTML\x3e\x3chtml\x3e\x3c/html\x3e", null), b.write(z.Fd(a)), b.close()))
    };
    z.e.rz = function(a) {
        var b = this.Wc;
        if (b) return new lB(this.id, Cn(z.Ie(b)), !0, this.Op(), a);
        throw Error("no field");
    };
    z.e.eN = function(a, b, c) {
        z.Ig(a, "visibility", "hidden");
        c = this.rz(c);
        var d = this.Wc, f = this.Wl;
        if (!this.bA) {
            var g = this.Wc;
            if (g) {
                var h = g.ownerDocument, k = z.ta(h);
                if (!$G[k]) {
                    for (var l = z.ta(h), n = [], h = $A(h.styleSheets), q = 0, v; v = h[q]; q++)
                        if ((v = ZA(v)) && v.length)
                            for (var F = 0, K = v.length; F < K; F++) {
                                var O = new aB, ca;
                                ca = O;
                                var Va = v[F], Sa = Va.style;
                                if (Sa) {
                                    var Aa = void 0, ua = "";
                                    Sa && (Aa = Va.selectorText) && (ua = Sa.cssText)
                                        ? z.C && (ua += "/* */")
                                        : Va.cssText &&
                                        (ua = /([^\{]+)\{/, Aa = ua.exec(Va.cssText)[1], ua = Va.cssText.replace(ua, "")
                                            .replace(/\}[^\}]*$/g,
                                                ""));
                                    if (Aa) {
                                        Va = ca;
                                        Va.$h = [];
                                        Aa = Aa.split(/,\s*/gm);
                                        for (Sa = 0; Sa < Aa.length; Sa++) {
                                            var Jd = Aa[Sa];
                                            0 < Jd.length && Va.$h.push(new cB(Jd))
                                        }
                                        ca.Ko = ua;
                                        ca = !0
                                    } else ca = !1
                                } else ca = !1;
                                ca && n.push(O)
                            }
                    $G[l] = n
                }
                l = $G[k];
                k = [];
                for (n = 0; n < l.length; n++) k.push(l[n].clone());
                h = new gB(g);
                q = new dB("body");
                for (l = 0; l < k.length; l++)
                    for (v = k[l].$h, n = v.length, F = 0; F < n; F++) {
                        K = v[F];
                        O = K;
                        ca = h.uid;
                        if (O.px[ca]) ca = O.px[ca];
                        else {
                            for (var ua = 0, Sa = Aa = Va = null, Jd = h.RJ, ti = Jd.length, we = 0;
                                we <= O.bj.length;
                                we++) {
                                for (Aa = O.bj[we]; ua < ti;) {
                                    var Ud = Jd[ua];
                                    if (Aa &&
                                        fB(Aa, Ud)) {
                                        Va = { CG: ua, zL: we };
                                        ua++;
                                        break
                                    } else Sa && fB(Sa, Ud) && (Va = { CG: ua, zL: we - 1 });
                                    ua++
                                }
                                Sa = Aa
                            }
                            ca = O.px[ca] = Va
                        }
                        ca &&
                        (O = ca.zL, K = K.bj, ua = K
                            .length -
                            1, ca.CG == h.RJ.length - 1 || O < ua
                            ? (K = K.concat(), K.splice(0, O + 1, q), O = new cB, O.bj = K, v.push(O))
                            : 0 < O && O == ua && (O = new cB, O.bj = [q, K[ua]], v.push(O)))
                    }
                h = new aB;
                g = g.currentStyle || z.Ke(g).defaultView.getComputedStyle(g, "") || {};
                l = new cB;
                l.bj = [new dB("html")];
                h.$h = [l];
                q = {};
                for (l = 0; n = aH[l]; l++) q[n] = g[z.cb(n)];
                bB(h, q);
                k.push(h);
                h = new aB;
                q = new cB;
                q.bj = [new dB("body")];
                v = {
                    position: "relative",
                    top: "0",
                    left: "0",
                    right: "auto",
                    display: "block",
                    visibility: "visible"
                };
                for (l = 0; n = bH[l]; l++) v[n] = g[z.cb(n)];
                bB(h, v, !0);
                h.$h = [q];
                k.push(h);
                g = [];
                n = k.length;
                for (l = 0; l < n; l++) {
                    v = k[l];
                    h = g;
                    F = v.$h.length;
                    q = !1;
                    for (K = 0; K < F; K++) {
                        O = v.$h[K].bj;
                        ca = O.length;
                        for (ua = 0; ua < ca; ua++) h.push(O[ua].vI, " ");
                        K < F - 1 && h.push(",");
                        z.B && !z.E("1.9a") && (q = q || YG.test(O[ca - 1].vI))
                    }
                    v = v.Ko;
                    q && (v = v.replace(ZG, "$1 color: $2 ! important; "));
                    h.push("{", v, "}\n")
                }
                this.bA = g.join("")
            }
        }
        d = new mB(d, f + this.bA);
        c.us &&
        (f = z.fh(d.XZ), (f.top ||
                f.left ||
                f.right ||
                f.bottom) &&
            z.Ig(a, "margin", -f.top + "px " + -f.right + "px " + -f.bottom + "px " + -f.left + "px"));
        nB(c, b, d, a);
        VB(this);
        z.Ig(a, "visibility", "visible")
    };
    z.e.Xx = function() {
        z.nd(this.hJ);
        z.nd(this.vU);
        z.TB.v.Xx.call(this)
    };
    var uC = {};
    uC._default_ = {
        zt: function(a) { return window.$.get("/node/CommentV2", { params: { comment_id: a } }) },
        fk: dp,
        gk: dp,
        add: function(a) { return window.$.post("/node/AnswerCommentAddV2", { method: "add_comment", params: a }) },
        remove: function(a) {
            return window.$.post("/node/CommentV2", { method: "remove_comment", params: { comment_id: a } })
        },
        Au: function(a, b) {
            return window.$.post("/node/CommentV2",
                { method: b ? "like_comment" : "undo_like_comment", params: { comment_id: a } })
        }
    };
    uC.answer = {
        fk: function(a, b) {
            return window.$.get("/node/AnswerCommentBoxV2", { params: { answer_id: a, load_all: b } })
        },
        gk: function(a) { return window.$.get("/node/AnswerCommentListV2", { params: { answer_id: a } }) },
        add: function(a) { return window.$.post("/node/AnswerCommentAddV2", { method: "add_comment", params: a }) },
        bP: function(a, b) {
            return window.$.post("/node/AnswerCommentV2",
                { method: "author_remove_comment", params: { comment_id: a, is_block: b } })
        }
    };
    uC.question = {
        fk: function(a) { return window.$.get("/node/QuestionCommentBoxV2", { params: { question_id: a } }) },
        gk: function(a) { return window.$.get("/node/QuestionCommentListV2", { params: { question_id: a } }) },
        add: function(a) { return window.$.post("/node/QuestionCommentAddV2", { method: "add_comment", params: a }) }
    };
    uC.favlist = {
        fk: function(a) { return window.$.get("/node/FavlistCommentBoxV2", { params: { favlist_id: a } }) },
        gk: function(a) { return window.$.get("/node/FavlistCommentListV2", { params: { favlist_id: a } }) },
        add: function(a) { return window.$.post("/node/FavlistCommentAddV2", { method: "add_comment", params: a }) }
    };
    uC.post = {
        zt: function(a) { return window.$.get("/node/PostCommentV2", { params: { comment_id: a } }) },
        fk: function(a, b) { return window.$.get("/node/PostCommentBoxV2", { params: { post_id: a, load_all: b } }) },
        gk: function(a) { return window.$.get("/node/PostCommentListV2", { params: { post_id: a } }) },
        add: function(a) { return window.$.post("/node/PostCommentV2", { method: "add_comment", params: a }) },
        Au: function(a, b) {
            return window.$.post("/node/PostCommentV2",
                { method: b ? "like_comment" : "undo_like_comment", params: { comment_id: a } })
        },
        remove: function(a) {
            return window.$.post("/node/PostCommentV2",
                { method: "remove_comment", params: { comment_id: a } })
        }
    };
    uC.roundtable = {
        zt: function(a) { return window.$.get("/roundtable/comments/" + a) },
        fk: function(a, b) {
            return window.$.get("/node/RoundtableCommentBoxV2", { params: { roundtable_id: a, load_all: b } })
        },
        gk: function(a) { return window.$.get("/roundtable/comments", { roundtable_id: a }) },
        add: function(a) { return window.$.post("/node/RoundtableCommentV2", { method: "add_comment", params: a }) },
        Au: function(a, b) {
            return window.$.post("/node/RoundtableCommentV2",
                { method: b ? "like_comment" : "undo_like_comment", params: { comment_id: a } })
        },
        remove: function(a) {
            return window.$.post("/node/RoundtableCommentV2",
                { method: "remove_comment", params: { comment_id: a } })
        }
    };
    uC.promotion = {
        zt: function(a) { return window.$.get("/node/PromotionCommentV2", { params: { comment_id: a } }) },
        fk: function(a, b) {
            return window.$.get("/node/PromotionCommentBoxV2", { params: { post_id: a, load_all: b } })
        },
        gk: function(a) { return window.$.get("/node/PromotionCommentListV2", { params: { post_id: a } }) },
        add: function(a) { return window.$.post("/node/PromotionCommentV2", { method: "add_comment", params: a }) },
        Au: function(a, b) {
            return window.$.post("/node/PromotionCommentV2",
                { method: b ? "like_comment" : "undo_like_comment", params: { comment_id: a } })
        },
        remove: function(a) {
            return window.$.post("/node/PromotionCommentV2", { method: "remove_comment", params: { comment_id: a } })
        }
    };
    z.y(z.WB, z.Lc);
    XB.prototype.fill = function(a, b) {
        this[a] = this[a].replace("?", b);
        return this
    };
    z.y(YB, z.H);
    z.e = YB.prototype;
    z.e.dO = {
        question: "问题",
        comment: "评论",
        answer: "回答",
        favlist: "收藏",
        member: "用户",
        message: "私信",
        image: "图片",
        video: "视频",
        post: "文章"
    };
    z.e.ly = "report-dialog";
    z.e.oJ = "loading";
    z.e
        .eR =
        '\x3cform\x3e\x3cdiv class\x3d"header"\x3e\x3c% if (headnote) { %\x3e\x3cspan class\x3d"headnote"\x3e\x3c%\x3dheadnote%\x3e\x3c/span\x3e\x3c% } %\x3e\x3cspan class\x3d"error-container"\x3e\x3c/span\x3e\x3c/div\x3e\x3cul class\x3d"options clearfix"\x3e\x3c% each(options, function(option) { %\x3e\x3cli\x3e\x3clabel\x3e\x3cinput value\x3d"\x3c%\x3doption.value%\x3e" name\x3d"reason" type\x3d"radio"\x3e\x3c%\x3doption.label%\x3e\x3c/label\x3e\x3c% if (option.description) { %\x3e\x3cdiv class\x3d"description visible-if-checked"\x3e\x3c%\x3doption.description%\x3e\x3c/div\x3e\x3c% } %\x3e\x3c% if (option.options) { %\x3e\x3cul class\x3d"group-options clearfix visible-if-checked"\x3e\x3c% each(option.options, function(opt) { %\x3e\x3cli\x3e\x3clabel\x3e\x3cinput required data-description\x3d"\x3c%\x3dopt.description%\x3e" value\x3d"\x3c%\x3dopt.value%\x3e" name\x3d"reason-\x3c%\x3doption.value%\x3e" type\x3d"radio"\x3e\x3c%\x3dopt.label%\x3e\x3c/label\x3e\x3c/li\x3e\x3c% }) %\x3e\x3c/ul\x3e\x3cdiv class\x3d"group-description visible-if-checked"\x3e\x3c/div\x3e\x3c% } %\x3e\x3c% if (option.value \x3d\x3d 0) { %\x3e\x3cp class\x3d"input-container visible-if-checked"\x3e\x3cinput placeholder\x3d"请填写原因" type\x3d"text" name\x3d"detail" class\x3d"reason-text zg-form-text-input"\x3e\x3c/p\x3e\x3cp class\x3d"error-container visible-if-checked"\x3e\x3c/p\x3e\x3c% } %\x3e\x3c/li\x3e\x3c% }) %\x3e\x3c/ul\x3e\x3cp class\x3d"footnote"\x3e\x3c/p\x3e\x3c/form\x3e';
    z.e.iH = function() { return this.$s };
    z.e.Lx = function(a, b) {
        var c = new z.R;
        c.$q(!0);
        c.Fe(!0);
        z.Rh(c, z.Jh());
        c.addEventListener(z.Th, this.LR, !1, this);
        z.Ac(c, this);
        a && c.La(a);
        b && c.aa(b);
        c.F(!0);
        c.ga();
        z.S.add(c.m(), this.ly);
        return this.$s = c
    };
    z.e.LR = function(a) { if ("ok" === a.key) return this.Tz() };
    z.e.open = function(a, b, c) {
        var d = this.Lx(z.Ja("确定要%s该%s？", this.oE[this.mm()], this.dO[a] || "条目"), this.Mx());
        z.S.add(d.m(), this.oJ);
        RD(a, this.mm()).then((0, z.t)(function(f) {
                d.aa((0, z.Zv)(this.eR, { each: z.A, options: f, headnote: c }));
                z.S.remove(d.m(), this.oJ);
                d.ga();
                z.Zh(d, 450);
                this.OQ = { type: a, id: b };
                this.vf(f)
            },
            this))
    };
    z.e.Tz = function() {
        var a = (0, window.$)("form", this.$s.m()).valid();
        a && this.submit();
        return a
    };
    z.e.GH = function() {};
    z.e.vf = function(a) {
        var b = this,
            c = (0, window.$)(this.$s.m()),
            d = (0, window.$
            )("form", c),
            f = (0, window.$)(".reason-text", c);
        c.on("change",
            ":radio",
            function(g) {
                g = (0, window.$)(g.target);
                c.find("li").removeClass("checked");
                g.parentsUntil(d, "li").addClass("checked");
                var h = this.value, k = z.pb(a, function(a) { return h === String(a.value) });
                b.GH(k);
                k = "0" === h;
                f.toggle(k);
                k && f.placeholder();
                g.closest("li").find("ul, :text").length || d.valid()
            });
        c.find("ul ul").on("change",
            ":radio",
            function(a) {
                (0, window.$)(a.delegateTarget).parent().find(".group-description")
                    .text((0, window.$)(this).data("description"))
            });
        d.validate({
            rules: {
                reason: "required",
                detail: {
                    rangelength: [2, 100],
                    required: function() { return !!(0, window.$)("input[name\x3dreason]:checked", c).length }
                }
            },
            messages: { reason: "请选择理由", detail: "理由为 2-100 字" },
            errorLabelContainer: (0, window.$)(".error-container", d)
        })
    };
    z.e.Mx = function() {
        return '\x3cdiv class\x3d"loading"\x3e理由加载中\x3ci class\x3d"spinner-gray"\x3e\x3c/i\x3e\x3c/div\x3e'
    };
    z.y(z.ZB, YB);
    var RD = function(a) {
        return function(b, c) {
            return a(z
                .Ja("/manage/%s/options?action\x3d%s", b, c))
        }
    }(z.Lj(window.$.getJSON));
    z.e = z.ZB.prototype;
    z.e.oE = {
        remove: "删除",
        lock: "锁定",
        unlock: "解除锁定",
        collapse: "折叠",
        uncollapse: "解除折叠",
        mute: "隔离",
        unmute: "解除隔离"
    };
    z.e.Lx = function(a, b) {
        var c = z.ZB.v.Lx.call(this, a, b);
        c.Dc.set("ok", this.oE[this.mm()]);
        return c
    };
    z.e.mm = function() { return this.sv.op.split("-")[0] };
    z.e.BL = function(a) { (0, window.$)(".footnote", this.iH().m()).text(a) };
    z.e.GH = function(a) { a && (a.trackable ? aC(this, a).then((0, z.t)(this.BL, this)) : this.BL("")) };
    z.e.submit = function() {
        var a = this.sv.action,
            b = this.sv.content,
            c = (0, window.$)((0, window.$)("form", this.$s.m())[0]).serialize();
        b && (c += "\x26" + b);
        $B(a, c, this.Pl)
    };
    z.e.D = function() {
        this.Pl = this.sv = null;
        z.ZB.v.D.call(this)
    };
    z.e.open = function(a, b, c) {
        this.sv = z.lf(a) ? (0, window.$)(a).data() : a;
        this.Pl = c || z.je.D0;
        z.ZB.v.open.call(this, b.type, b.id, "")
    };
    z.y(bC, z.Q);
    z.e = bC.prototype;
    z.e.defaults = { trigger: { A: "data-editable" }, kO: "hc-actionbar", hU: "checked", CY: 100, iT: 100 };
    z.e.C = function() {
        bC.v.C.call(this);
        this.Ij = z.M("div");
        window.document.body.appendChild(this.Ij);
        cC(this, this.h)
    };
    z.e.D = function() {
        z.N(this.Ij);
        this.Ij = null;
        bC.v.D.call(this)
    };
    z.e.tz = function() { return this.mT };
    z.e.tP = function(a, b, c) {
        b = z.M("div",
            {
                title: a.na,
                "data-action": a.name,
                className: "button " + a.name + (0 === b ? " first" : b === c.length - 1 ? " last" : "")
            },
            [z.M("i", "icon icon-actionbar-" + a.name)]);
        z.fo(b, !0);
        this.o().g(b, "click", function() { dC(this, a.name) && a.zi(this.Re) });
        return b
    };
    z.e.render = function() {
        this.Ij.innerHTML = "";
        z.af(this.Ij, z.mb(z.Gb(En(this.Xn)), this.tP, this))
    };
    z.y(z.fC, z.Q);
    z.fC.prototype.defaults = { UH: {}, ZO: !0 };
    z.fC.prototype.C = function() {
        z.fC.v.C.call(this);
        var a = this, b = this.h;
        this.J.ZO && (this.Wn = sC(b), z.Ac(this, this.Wn));
        this.o().g(b, "paste", function() { (0, window.setTimeout)(function() { gC(a) }) }).g(b, "keydown", this.bT)
    };
    z.fC.prototype.bT = function(a) {
        var b = z.Sn(a.keyCode), c = 8 === a.keyCode;
        if (!(a.ctrlKey || a.altKey || a.metaKey || !b && !c)) {
            var b = z.Du(),
                d = b.Z(),
                f = b.ka(),
                g = this.h,
                h,
                k = jC(d, g, lC) || f !== d && (h || (h = jC(f, g, lC)));
            if (k) {
                var l = z.qf(k), n = b.xa(), q = b.Sa();
                if (k.getAttribute("data-editable") && l === k.href || "video-link" === k.className) {
                    var v = !1;
                    h = h || jC(f, g, lC) || k;
                    var g = k.contains(d), F = h.contains(f);
                    if (c)
                        g && (d = k, n = 0, v = !0), F && (f = h, q = z.Ru(h), v = !0), v && z.ou(d, n, f, q).select();
                    else if (g && F && h === k) {
                        if (!b.isCollapsed() ||
                            0 !== n &&
                            l.length !==
                            n) a.preventDefault(), z.Yu(k)
                    } else
                        g && (d = k.nextSibling, n = 0, v = !0), F && (f = h.previousSibling, q = z.Ru(f), v = !0),
                            v && z.ou(d, n, f, q).select()
                }
            }
        }
    };
    var rC =
            /\b(?:(?:https?):\/\/|www\.)(?:\([\-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[\-A-Z0-9+&@#\/%=~_|$?!:,.])*(?:\([\-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\/%=~_|$])/ig,
        nC = ["http:", "https:"],
        oC = z.Lj(function(a) { return window.$.post("/scraper", { url: a }) });
    z.y(z.tC, z.Q);
    z.e = z.tC.prototype;
    z.e.defaults = { yU: !1, autofocus: !0, Iy: "empty", Sf: "zm-item-comment" };
    z.e.T = function(a) {
        z.tC.v.T.call(this, a);
        MC(this);
        a = window.location.hash.slice(1).split("-");
        if (a = "comment" === a[0] && a[1]) a = FC(this, a), z.rr(a), z.Hr(a), a.focus();
        this.uh = !0;
        z.A(GC(this), this.Xu, this)
    };
    z.e.fo = "zm-comment-bubble";
    z.e.WE = "." + z.tC.prototype.fo;
    z.e.$ = function(a) { return (0, window.$)(a, this.h) };
    z.e.B = function() {
        this.h = z.M("div", { "class": this.BF, style: "display:none" });
        this.th()
    };
    z.e.Bo = function() {
        return '\x3ci class\x3d"icon icon-spike zm-comment-bubble"\x3e\x3c/i\x3e\x3cdiv class\x3d"zm-comment-spinner"\x3e正在加载，请稍等 \x3ci class\x3d"spinner-lightgray"\x3e\x3c/i\x3e\x3c/div\x3e'
    };
    z.e.D = function() {
        z.tC.v.D.call(this);
        this.Ka = this.JF = this.yo = this.ME = this.wd = this.bC = this.kJ = null
    };
    z.e.HY = vC(function(a) {
        var b = z.L("zm-comment-content-wrap", a),
            c = z.L("zm-comment-form", a),
            d = a.getAttribute("data-id"),
            f = this,
            g;
        if (c) {
            g = z.L("zm-comment-editable", c);
            if (z.ah(c)) {
                if (z.Gr(c)) {
                    z.P(c, !1);
                    return
                }
            } else z.P(c, !0);
            DC(g)
        } else {
            c = EC(b);
            g = z.L("zm-comment-editable", c);
            var h = new z.TB(g);
            h.ge(!1, "");
            h.Be();
            z.Bc(this, wC(h.m(), this.type, this.id));
            DC(g);
            a = z.L("zm-comment-close", c);
            b = z.L("zm-comment-submit", c);
            b.name = "";
            var k = function() {
                f.sa({ action: "click_reply_[type]_comment_submit" });
                var a = (0, z.ab)(h.om()),
                    b = (0, z.ab)(z.qf(g));
                a && b
                    ? OC(f,
                        { content: a, HX: d },
                        function(a) {
                            a.r || (z.P(c, !1), h.ge(!1, ""), (a = z.jb(GC(f))) && z.Hr(a, { offsetTop: 100, rx: !0 }))
                        })
                    : (z.T.message("请填写内容"), g.focus())
            };
            z.G(a, "click", function() { z.P(c, !1) });
            z.G(b, "click", k);
            z.G(g, "keydown", function(a) { 13 === a.keyCode && (a.ctrlKey || a.metaKey) && (k(), a.preventDefault()) })
        }
        z.Hr(c, 100)
    });
    z.e.Rv = function(a) { z.S.enable(this.JF, "expanded", a) };
    z.e.qj = function(a, b) {
        this.dispatchEvent(new z.WB("click!comment",
            { category: "?", action: this.type + "_comments", label: "?_" + a, value: z.pa(b) ? b : this.mb() }))
    };
    z.e.jk = function() { this.uh ? KC(this) : this.kv = !0 };
    z.e.EV = function(a) {
        13 === a.keyCode && (a.ctrlKey || a.metaKey) && (this.as(), (0, window.$)(this.Ka).blur(), a.preventDefault());
        27 === a.keyCode && IC(this)
    };
    z.e.Xa = function(a) {
        var b = z.yr(this.h, a.target, "BUTTON") || z.yr(this.h, a.target);
        if (b && b.name) {
            var c = z.to(b, this.J.Sf);
            a.preventDefault();
            switch (b.name) {
            case "reply_comment":
                this.sa({ action: "click_reply_[type]_comment_start" });
                this.HY(c);
                break;
            case "cancelanon":
                a = (0, window.$)(this.h).parents(".feed-item-hook").data("qid");
                z.qp(0, null, a);
                break;
            case "delcomment":
                this.hp(b);
                break;
            case "like_comment":
                this.sS(b);
                break;
            case "author_delcomment":
                RC(this, b);
                break;
            case "admin_delcomment":
                QC(this, b);
                break;
            case "closeform":
                this.sa({ action: "click_add_[type]_comment_cancel" });
                IC(this);
                break;
            case "addnew":
                this.sa({ action: "click_add_[type]_comment_submit" });
                this.as();
                break;
            case "load-more":
                this.qj("comments_all"), this.sa({ action: "click_view_all_comment" }), this.kJ(b)
            }
        }
    };
    z.e.kJ = function(a) {
        this.Gu && "pending" === this.Gu.state() ||
        (a && z.S.add(a, "loading"), this.Gu = this.bC || this.lJ(), this.Gu.done((0, z.t)(function(b) {
                b = (0, window.$)(b).filter(".zm-item-comment").get();
                if (b.length) {
                    var c = GC(this);
                    c.length &&
                    (b = z.lb(b,
                        function(a) {
                            return !z.pb(c,
                                function(b) { return b.getAttribute("data-id") === a.getAttribute("data-id") })
                        }), b = z.ub(c, b).sort(function(a, b) {
                        return a.getAttribute("data-id") - b.getAttribute("data-id")
                    }), z.A(b, this.Xu, this), a && z.N(a));
                    z.af(this.yo, b)
                }
            },
            this)))
    };
    z.e.sS = vC(function(a) {
        var b = (0, window.$)(a), c = z.to(a, this.J.Sf);
        a = (0, window.$)(".like-num", c);
        var d = c.getAttribute("data-id");
        if (c = !b.hasClass("liked")) this.qj("like_comment"), this.sa({ action: "click_like_[type]_comment" });
        this.tf.Au(d, c);
        var d = (0, window.$)("em", a), f = +d.text() + (c ? 1 : -1);
        a.toggleClass("liked", c).toggleClass("nil", 0 >= f).attr("data-tooltip", "s$r$" + f + " 人觉得这个很赞");
        d.text(f);
        b.toggleClass("liked", c);
        jr(b[0], c ? "取消赞" : "赞")
    });
    z.e.expand = function() { this.Lc(!0) };
    z.e.collapse = function() { this.Lc(!1) };
    z.e.pd = function() { return this.uh };
    z.e.Lc = function(a) {
        if (a !== this.uh) {
            a && (this.$(this.WE).hide(), this.th());
            this.uh = a;
            this.dispatchEvent(a ? "beforeexpand" : "beforecollapse");
            z.P(this.h, this.uh);
            var b = (0, z.t)(function() {
                        a && JC(this);
                        this.dispatchEvent(a ? "expand" : "collapse");
                        this.Gf && !a && (z.mv(this.Gf), z.Hr(this.Gf.h))
                    },
                    this),
                c;
            a && this.kv ? (c = KC(this)) && c.done(b) : (0, window.setTimeout)(b);
            this.wd &&
            (a
                ? (this.JW = z.qf(this.wd), jr(this.wd, "收起评论"))
                : jr(this.wd, 0 > this.Pa ? this.JW : this.Pa ? this.Pa + " 条评论" : "添加评论"))
        }
    };
    z.e.ii = function() { this.Lc(!this.uh) };
    z.e.lJ = function() { return this.tf.gk(this.id) };
    z.e.qn = function(a) { this.Pj = a };
    z.e.BX = function(a) {
        a = z.Ye((0, z.ab)(a));
        z.P(a, this.uh);
        z.A((0, window.$)("." + this.J.Sf, a).get(), this.Xu, this);
        this.kv = !1;
        this.Db();
        z.Bo(a, this.h);
        this.h = a;
        MC(this)
    };
    z.e.Qo = function() { this.Ka.focus() };
    z.e.cb = function() {
        var a = (0, z.ab)(this.Wj.om());
        return a === this.placeholder ? "" : a
    };
    z.e.as = vC(function() {
        var a = this.cb(), b = (0, z.ab)(z.qf(this.Ka));
        a && "TEXTAREA" === this.Ka.tagName && b || a ? OC(this, a) : (z.T.message("请填写内容"), this.Qo())
    });
    z.e.mb = function() { return this.Pa };
    z.e.xR = function(a) {
        if (!a) return z.T.message("网络异常");
        if (a.r && 1991832 !== a.errcode) return z.T.alert(a.msg);
        this.tf.zt(a.msg).done(window.$.proxy(this.CX, this));
        this.Wj.ge("");
        CC(this);
        this.Rv(!1)
    };
    z.e.Xu = function(a) {
        var b = this;
        a &&
        (PC(this, a), this.Cp(a), z.V.Ya(a,
            { module: "CommentItem" },
            function() {
                return { card: { card_type: "Content", content: { type: "Comment", id: String(b.data.id) } } }
            }))
    };
    z.e.Cp = function(a) {
        var b = this;
        (0, window.$)("a[name\x3dreport], button.report", a).on("click",
            function() {
                z.V.trackEvent(b, { action: "ReportIntent", element: "Button" });
                (new z.Jz({ type: "comment", id: a.getAttribute("data-id"), Ga: a.getAttribute("data-id") })).render()
            })
    };
    z.e.CX = function(a) {
        this.Ck = "";
        a = z.Ye(a);
        this.yo.appendChild(a);
        this.Xu(a);
        this.Pa += 1;
        NC(this)
    };
    z.e.hp = function(a) {
        var b = z.to(a, this.J.Sf), c = b.getAttribute("data-id");
        z.T.confirm("删除评论", "你确定要删除这条评论吗？", function(a) { a && TC(this, c, z.Ba(z.N, b)) }, this)
    };
    z.e.th = function() {
        (0, window.$)(window).on("beforeunload.CommentForm",
            (0, z.t)(function() { if (this.Ck) return "你的评论还未保存，确认离开该页面吗？" }, this))
    };
    z.e.Hi = function() { (0, window.$)(window).off("beforeunload.CommentForm") };
    z.e.sa = function(a) {
        this.dispatchEvent({
            type: "trackRequested",
            category: "comment",
            action: a.action.replace("[type]", this.type)
        })
    };
    z.p(z.VC, z.Q);
    z.e = z.VC.prototype;
    z.e.pd = function() { return this.zk };
    z.e.Lc = function(a) {
        a !== this.zk &&
        (this.dispatchEvent(a ? "beforeexpand" : "beforecollapse"), this.zk = a, z.P(this.h, a), $C(this), this
            .dispatchEvent(a ? "expand" : "collapse"), this.km && !a && (z.mv(this.km), z.Hr(this.km.m())))
    };
    z.e.ii = function() { this.Lc(!this.zk) };
    z.e.qj = function() {};
    z.e.Qo = function() { (0, window.$)("[data-input-box]", this.m()).focus() };
    z.e.reload = function() { aD(this, "reloadComments") };
    z.e.qn = function(a) { this.Pj = a };
    z.e.vf = function() {
        var a = this;
        $C(this);
        YC(this);
        this.o().g(z.sp, "anon_change", function() { a.zk && a.reload() });
        (0, window.$)(this.m()).on("click",
            'button[data-key\x3d"cancel"]',
            function(b) { 0 === XC(a) && (b.preventDefault(), a.Lc(!1)) })
    };
    z.e.B = function() {
        this.h = z.M("div", "comment-app-holder");
        z.P(this.h, !1)
    };
    z.e.render = function(a, b) {
        b = void 0 === b ? {} : b;
        var c = this;
        z.Q.prototype.render.call(this, a);
        var d = this.entryType,
            f = this.Cb,
            g = {},
            h = Object.assign((g.entry = { id: f, type: d }, g.useContentEditable = z.Hm, g
                    .createItemActions = function(a) {
                        var b = [], d = a.id, f = a.own;
                        !f &&
                            z.sm.zI &&
                            b.push({
                                key: "adminremove",
                                label: "删除",
                                icon: "zg-icon zg-icon-comment-del",
                                onClick: function() {
                                    var a = {
                                            op: "remove-comment",
                                            action: "/manage?comment_id\x3d" + d + "\x26action\x3dremove_comment2"
                                        },
                                        b = { id: d, type: "comment" };
                                    (new z.ZB).open(a,
                                        b,
                                        function() {
                                            aD(c,
                                                "RemoveComment",
                                                { id: d })
                                        })
                                }
                            });
                        f ||
                            b.push({
                                key: "report",
                                label: "举报",
                                icon: "zg-icon zg-icon-comment-report",
                                onClick: function(b) {
                                    (new z.Jz({ type: "comment", id: a.id, Ga: a.id })).render();
                                    z.V.trackEvent(b.target, { action: "ReportIntent", element: "Button" })
                                }
                            });
                        return b
                    }, g.onEditorCreated = function(a) { return wC(a, d, f) }, g.onRequestHighlight = function(a) {
                    z.rr(a);
                    z.Hr(a, { offsetTop: 45 });
                    a.focus()
                }, g),
                b),
            g = z.ha(window.location.hash.match(/#comment-(\d+)/) || []);
        g.next();
        (g = g.next().value) && (h.query = { bycomment: g });
        var k = Object.assign({},
                z.bx(),
                { authRequired: function(a) { return z.Dq(a, !0, function() { return c.Pj }) } }),
            l = z.Wh(function() { return c.yx && WC(c) });
        z.$w("CommentApp").then(function(b) {
            a.appendChild(c.h);
            c.ks = b.render(c.h, h, k);
            c.vf();
            c.ks.store.subscribe(function() {
                (0, window.setTimeout)(function() {
                    $C(c);
                    l()
                })
            })
        });
        return this
    };
    z.hH = {
        NH: function(a) {
            this.iw();
            var b = this.Ja.pd();
            (0, window.$)(".zm-meta-panel", this.m()).toggleClass("focusin", b);
            b && (a = (0, window.parseInt)(z.qf(a.currentTarget), 10) || 0, this.Ja.qj("view_comments", a));
            z.V.trackEvent(this, { action: b ? "CommentIntent" : "EndCommentIntent", element: "Button" })
        },
        fy: function() { return new (this.xt())(this.Cb, this.entryType) },
        iw: function() {
            this.HG();
            this.Ja.ii()
        },
        r0: function() { return this.Ja },
        fS: function() { this.Ja ? this.Ja.Qo() : this.iw() },
        HG: function() {
            if (!this.Ja) {
                var a = (0, window.$)(".toggle-comment, .js-toggleCommentBox",
                    this.h)[0];
                if (this.xt() === z.VC)
                    this.Ja = this.fy(), this.K(this.Ja), this.Ja
                        .render(this
                            .nz(),
                            { embedded: /^\/roundtable/.test(window.location.pathname) }), ZC(this.Ja, a);
                else if (this.Ja = this.fy(), this.K(this.Ja), z.xC(this.Ja, this.nz(), a), a = this
                    .Ja, !a.Gf && !z.sm.fb) {
                    var b = z.to(a.h, "zm-item-meta");
                    if (b) {
                        var c = z.L("zm-meta-panel", b);
                        c && (a.Gf = new z.qv(null, b), a.Gf.tag = "comment", a.Gf.w(c))
                    }
                }
                this.oz && this.Ja.qn(this.oz())
            }
        },
        xt: function() { return z.tC }
    };
    z.y(bD, z.Q);
    var cD = { jh: "is-sticky", top: null, bottom: null, Ob: null, PO: !1, mK: z.r, Zu: z.r };
    z.e = bD.prototype;
    z.e.D = function() {
        this.stop();
        bD.v.D.call(this)
    };
    z.e.start = function() {
        this.state.Mm || (this.state.Mm = !0, (0, window.$)(window).on("scroll resize", this.hM).trigger("scroll"))
    };
    z.e.stop = function() {
        this.state.Mm &&
        (this.state.Mm = !1, (0, window.$)(window).off("scroll resize", this.hM), this.restore(), this.state
            .lu = !1, this.state.nu = !0, (0, window
            .setTimeout)(function() { (0, window.$)(window).trigger("scroll") }))
    };
    z.e.update = function() {
        if (this.state.Jp) this.state.WB = !0;
        else {
            var a = this.options.top,
                b = this.options.bottom,
                c = this.state.lu,
                d = this.state.nu,
                f,
                g,
                h = (this.xc || this.h).getBoundingClientRect(),
                k = this.options.Ob.getBoundingClientRect(),
                l = (0, window.$)(window).height();
            h.height || (h.height = h.bottom - h.top);
            null !== a
                ? (f = h.top > a, g = k.bottom > a + h.height)
                : null !== b && (f = h.bottom > l - b, g = k.top > l - h.height - b);
            this.state.lu = f;
            this.state.nu = g;
            if ((c && !d) === (f && !g)) f && !g && this.ga();
            else {
                if (d && !g) return eD(this);
                if (!d && g) return gD(this);
                this.options.PO ? f ? eD(this) : gD(this) : f ? dD(this) : this.restore()
            }
        }
    };
    z.e.ga = function() {
        var a = (this.xc || this.h).getBoundingClientRect().left, b = this.options.top, c = this.options.bottom;
        (0, window.$)(this.h).css({ left: a + "px", top: b ? b + "px" : "auto", bottom: c ? c + "px" : "auto" })
    };
    z.e.restore = function() {
        this.xc &&
        ((0, window.$)(this.h).removeClass(this.options.jh).css({ left: "", top: "", bottom: "" }), (0, window
            .$)(this.xc).remove(), this.xc = null, this.options.Zu.call(this))
    };
    z.e.onAnimationEnd = function() {
        this.state.Jp = !1;
        this.state.WB && (this.state.WB = !1, this.update())
    };
    z.y(z.iD, z.Q);
    z.Ca(z.iD.prototype, z.hH);
    var jD = {
        post: "Post",
        answer: "Answer",
        question: "Question",
        roundtable: "Roundtable",
        column: "Column",
        promotion: "Ad",
        live: "Live",
        favorites: "Collection",
        ebook: "EBook",
        pin: "Pin",
        eventcard: "Event"
    };
    z.e = z.iD.prototype;
    z.e.kt = "zm-item-expanded";
    z.e.lO = "zm-item-meta, .js-contentActions";
    z.e.Zp = null;
    z.e.xy = "z-icon-fold";
    z.e.dD = "sprite-global-icon-fold-white";
    z.e.C = function() {
        z.iD.v.C.call(this);
        oD(this);
        this.Lj();
        this.kg();
        lD(this);
        mD(this);
        if (this.vb) this.fu();
        else {
            var a = this;
            this.g("expand", function() { return a.fu() })
        }
    };
    z.e.Az = function() { return Object.assign({}, { type: this.QD, id: this.Cb, token: this.We }, this.Vo()) };
    z.e.Vo = function() { return {} };
    z.e.qH = function() { return qD(this) };
    z.e.oz = function() {
        var a = this.entryType + "-" + this.Cb;
        return (0, window.$)('a[name\x3d"' + a + '"]', this.h).length && "#" + a
    };
    z.e.Lj = function(a) {
        var b = {
            ".js-expand": this.expand,
            ".js-collapse": this.collapse,
            ".js-report": this.MS,
            ".column[data-entry-url]": this.vH
        };
        z.Mb(b, a || {});
        z.Db(b, function(a, b) { if (z.qa(a)) (0, window.$)(this.h).on("click", b, window.$.proxy(a, this)) }, this);
        (0, window.$)(".js-toggleCommentBox", this.h).on("click", this.NH.bind(this))
    };
    z.e.aq = function() { (0, z.VG)(this.entryType, this.We, "read") };
    z.e.tJ = function() { (0, z.VG)(this.entryType, this.We, "touch") };
    z.e.expand = function(a) {
        this.vb ||
        (this.vb = !0, z.S.add(this.h, this.kt), this
            .dispatchEvent("expand"), a = a && z.lf(a.target) && z.zg(a.target, "js-vote-count"), this.nw(a), z.V
            .trackEvent(this, { action: "Expand", element: "Card" }))
    };
    z.e.collapse = function() {
        this.vb &&
        (this.vb = !1, this.mw(), Lr(this.h,
            (0, z.t)(function() {
                    z.S.remove(this.h, this.kt);
                    this.dispatchEvent("collapse")
                },
                this)), z.V.trackEvent(this, { action: "Collapse", element: "Button" }))
    };
    z.e.pd = function() { return this.vb };
    z.e.ii = function() { this.vb ? this.collapse() : this.expand() };
    z.e.IL = function() { return !z.Om };
    z.e.fu = function() {
        if (this.vb && this.IL() && !this.uQ) {
            this.uQ = !0;
            var a = (0, window.$)(".js-collapse-body", this.h)[0];
            if (a) {
                var b = this, c = (0, window.$)(".js-collapse", this.h)[0];
                if (!c) {
                    if ("answer" !== this.entryType) return;
                    c = (0, window.$)(".zm-meta-panel", this.h);
                    if (!c.length) return;
                    c = (0, window
                        .$
                    )('\x3cbutton class\x3d"item-collapse js-collapse"\x3e\x3ci class\x3d"sprite-global-icon-fold-white"\x3e\x3c/i\x3e收起\x3c/button\x3e').appendTo(c).on("click", (0, z.t)(this.collapse, this)).get(0)
                }
                var d = this.ZL = new bD(0,
                {
                    bottom: 12,
                    Ob: a,
                    mK: function() { (0, window.$)("i", this.h).removeClass(b.xy).addClass(b.dD) },
                    Zu: function() { (0, window.$)("i", this.h).removeClass(b.dD).addClass(b.xy) }
                });
                z.Ac(this, d);
                d.w(c);
                this.g("expand", function(a) { a.target === a.currentTarget && d.start() });
                this.g("collapse", function(a) { a.target === a.currentTarget && d.stop() });
                d.start()
            }
        }
    };
    z.e.nw = function(a) {
        var b = "view_answer", c = qD(this);
        a = a ? "vote_up_count" : "expand_answer";
        var d = (0, window.$)(this.h).index() + 1;
        if ("feed" !== c) z.wi(b, "click_expand_answer", c + "_" + a, d);
        else {
            var c = pD(this), f = rD(this);
            -1 < c.indexOf("article")
                ? (b = "view_article", c = "feed_article", a = "expand_article")
                : c = "feed_answer";
            z.wi(b, "click_expand_answer", c + "_" + f + "_" + a, d)
        }
    };
    z.e.mw = function() {
        var a = "view_answer", b = qD(this), c;
        if (c = this.ZL) c = this.ZL, c = c.state.lu && !c.state.nu;
        c = c ? "blue" : "grey";
        var d = "collapse_answer_" + c, f = (0, window.$)(this.h).index() + 1;
        if ("feed" !== b) z.wi(a, "click_collapse_answer", b + "_" + d, f);
        else {
            var b = pD(this), g = rD(this);
            -1 < b.indexOf("article")
                ? (a = "view_article", b = "feed_article", d = "collapse_article_" + c)
                : b = "feed_answer";
            z.wi(a, "click_collapse_answer", b + "_" + g + "_" + d, f)
        }
    };
    z.e.tW = function() {
        var a = z.L(this.Zp, this.h);
        window.open(a ? a.href : this.jd.url)
    };
    z.e.nk = function() {
        var a = this, b = (0, window.$)(this.m());
        b.slideUp(function() {
            a.dispose();
            b.remove()
        })
    };
    z.e.Kb = null;
    z.e.vH = function(a) {
        var b = (0, window.$)(a.currentTarget).data("entry-url");
        "column" === this.entryType && b && !a.target.href && window.open(b)
    };
    z.e.nz = function() { return sD(this) };
    z.e.xt = function() { return ["answer", "post", "ebook", "pin"].includes(this.entryType) ? z.VC : z.tC };
    z.e.kg = function() {
        this.nf = z.fn.cN(this.h);
        z.pl(z.pl(z.pl(z.pl(this.nf.register("shift+o", this.tW, this), { group: "操作", name: "新窗口打开条目" })
                    .register("o", this.ii, this),
                    { group: "操作", name: "显示全部/收起" }).register("c", this.iw, this),
                { group: "操作", name: "打开评论" }).register("shift+c", this.fS, this),
            { group: "操作", name: "定位到评论框" })
    };
    z.e.MS = function() {
        var a = { type: this.entryType, Ga: this.We, id: this.Cb };
        if ("post" === a.type) {
            var b = (0, window.$)(this.h),
                c = Boolean(b.find(".js-followButton").length),
                b = Boolean(b.find(".js-tipjar").length);
            Object.assign(a, { ST: c, dU: b })
        }
        (new z.Jz(a)).render();
        z.V.trackEvent(this, { action: "ReportIntent", element: "Button" })
    };
    z.VD = {
        rJ: function(a) {
            return (0, window
                .$
            )('\x3cdiv class\x3d"copyright-notification"\x3e\x3cdiv class\x3d"user-image-container"\x3e\x3cimg class\x3d"user-image" src\x3d"' + (a || "") + '"\x3e\x3c/div\x3e\x3cdiv class\x3d"tooltip right noty-tooltip"\x3e\x3cdiv class\x3d"tooltip-arrow arrow"\x3e \x3c/div\x3e\x3cdiv class\x3d"tooltip-inner inner"\x3e保留所有权利，禁止转载\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e')
        }
    };
    z.VD.xT = z.Wh(function() {
        var a = z.VD.rJ();
        (0, window.$)("body").append(a);
        return a
    });
    z.VD.IY = function(a, b, c, d) {
        var f = -1, g = -1, h = z.VD.xT();
        a.on("mousedown", function(a) { 3 === a.which && (f = a.pageX, g = a.pageY) });
        a.on("copy",
            function(k) {
                var l = z.Du(), n = Math.floor(22 * Math.random() + 44);
                if (l && l.$d() && (0, z.ab)(l.$d()).length > n) {
                    d && (k.preventDefault(), k.stopImmediatePropagation());
                    (0, window.$)(".user-image", h).attr("src", b);
                    (0, window.$)(".tooltip-inner", h).text(c);
                    k = l.yz();
                    var l = l.pz(),
                        n = z.In(window).y,
                        q = z.Qe(window).height,
                        v = Lo(n + 45 + 15, Math.min(k.y, l.y) + n, n + q - 15),
                        F = Lo(n + 45 + 15,
                            Math.max(k.y, l.y) +
                            n,
                            n + q - 15);
                    z.sm.fb
                        ? (q = (z.Qe(window)
                                .width -
                                265) /
                            2, k = z.Nl
                            ? l.y > k.y ? l.y + n + 10 : k.y + n - 10
                            : -1 !== g ? g + 3 : v + (F - v) / 2 - 15)
                        : (q = -1 !== f ? f + 3 : a.offset().left + a.width() / 2 - 15, k =
                            -1 !== g ? g + 3 : v + (F - v) / 2 - 15);
                    h.css({ position: "absolute", left: q, top: k }).finish().fadeIn(300).delay(2E3).fadeOut(300)
                }
                g = f = -1
            })
    };
    z.VD.EE = function(a, b, c) {
        function d(a, b, c) {
            a = ["作者：" + b, "链接：" + a, "来源：知乎", "著作权归作者所有，转载请联系作者获得授权。"];
            b = ["", ""];
            return a = c ? a.concat(b) : b.concat(a)
        }

        function f(a, b, c, f) {
            b = d(b, c, f).join("\x3cbr /\x3e");
            return "\x3cdiv\x3e" + (f ? b + a : a + b) + "\x3c/div\x3e"
        }

        function g(a, b, c, f) {
            b = d(b, c, f).join("\n");
            return f ? b + a : a + b
        }

        function h() {
            var a = "";
            window.getSelection
                ? a = window.getSelection().toString()
                : window.document.selection &&
                "Control" !== window.document.selection.type &&
                (a = window.document.selection.createRange().text);
            return a
        }

        function k(a) {
            var d = z.Du(), k = d && (0, z.ab)(d.$d());
            if (k && !(128 > k.length)) {
                k = 512 <= k.length;
                if ("object" === typeof a.originalEvent.clipboardData &&
                (a.originalEvent.clipboardData.setData("text/html", f(d.Bg(), b, c, k)), a.originalEvent
                        .clipboardData
                        .setData("text/plain", g(h(), b, c, k)),
                    0 < a.originalEvent.clipboardData.getData("text/plain").length)) {
                    a.preventDefault();
                    return
                }
                if (window.getSelection) {
                    a = d.Bg();
                    var v = (0, window.$)(f(a, b, c, k)).css({ position: "fixed", left: "-9999px" }).appendTo("body");
                    window.getSelection().selectAllChildren(v.get(0));
                    (0, window.setTimeout)(function() {
                            d.select();
                            v.remove()
                        },
                        200)
                }
            }
        }

        a &&
            b &&
            c &&
            (z.Ia(b, "http") || (b = window.location.protocol + "//" + window.location.host + b), a.on("copy", k))
    };
    z.y(vD, z.Q);
    z.e = vD.prototype;
    z.e.sa = function(a) {
        this.dispatchEvent({
            type: "trackRequested",
            category: "share",
            action: a.action.replace("[type]", "post" !== this.hb ? this.hb : "article"),
            attributes: a.attributes
        })
    };
    z.e.T = function(a) {
        var b = this;
        vD.v.T.call(this, a);
        var c = this.Ha = (0, window.$)(a);
        z.lj ? c.click(z.Iw) : z.Om ? c.click(this.un.bind(this)) : this.tc();
        c.click(function() {
            b.sa({ action: "click_share_[type]_start" });
            (!b.hq || b.hq && b.hq.W()) && z.V.trackEvent(a, { action: "ShareIntent", element: "Button" })
        })
    };
    z.e.tc = function() {
        wD(this);
        this.Ha.one("mouseover focus", window.$.proxy(z.Wh(this.$W), this))
    };
    z.e.$W = function() {
        this.tn || (this.tn = z.nt(this.hb, this.IM));
        if (this.hq) {
            var a = z.Ew(this.HL);
            (0, window.$)(".js-qrcode-image", this.hq.m()).attr("src", a)
        }
    };
    z.e.wR = function(a) {
        a = a.target.X();
        0 === a
            ? this.un()
            : 2 === a &&
            (window.open("https://dudu.zhihu.com/post?" +
                window.$.param({
                    url: this.HL,
                    utm_source: "zhihu-web_share",
                    utm_medium: "button",
                    utm_campaign: "post"
                }),
                "_blank"), this.sa({ action: "click_share_[type]_to_dudu_start" }), z.V
                .trackEvent(this.m(), { action: "Share", element: "Menu" }, { share: { type: "Dudu" } }))
    };
    z.e.un = function() {
        this.tn || (this.tn = z.nt(this.hb, this.IM));
        this.tn.then(function(a) { z.tD(a.msg.sina) });
        this.sa({ action: "click_share_[type]_to_weibo_start" });
        z.V.trackEvent(this.m(), { action: "Share", element: "Menu" }, { share: { type: "Weibo" } })
    };
    z.y(xD, KA);
    xD.prototype.kc = function(a) {
        var b = xD.v.kc.call(this, a);
        a = (0, window.parseInt)(z.jl[a.keyCode], 10);
        (0, window.isNaN)(a) || this.kb().Hb(a - 1);
        return b
    };
    z.y(z.yD, z.Q);
    var zD = { XY: "textarea.content, script.content", uP: ".toggle-expand", TY: ".summary", NF: null, LF: "" };
    z.e = z.yD.prototype;
    z.e.C = function() {
        z.yD.v.C.call(this);
        var a = this.h;
        this.Ur = (0, window.$)(this.options.XY, a);
        this.content = this.Ur.is(":input") ? this.Ur.val() : this.Ur.html();
        this.wl = (0, window.$)(this.options.TY, a);
        this.Rb = (0, window.$)(this.options.NF, a);
        this.xd = (0, window.$)(this.options.uP, this.wl);
        if (!this.wl.length) return this.dispatchEvent("invalid");
        this.LA = !!this.xd.length;
        this.xd.on("click", (0, z.t)(this.CR, this));
        this.wl.on("click", (0, z.t)(this.PS, this))
    };
    z.e.CR = function(a) {
        a.preventDefault();
        AD(this)
    };
    z.e.PS = function(a) {
        var b = z.Du();
        b && b.$d() ||
            a.target === this.xd[0] ||
            (b = (0, window.$)(a.target).closest("a")
                .get(0), b && "javascript:" !== b.protocol || (a.preventDefault(), AD(this)))
    };
    z.e.expand = function() {
        this.Rb.length ||
            (this.Rb = (0, window.$)("\x3cdiv\x3e").html(this.content).addClass(this.options.LF).insertBefore(this.Ur));
        this.wl.hide();
        this.Rb.show();
        this.dispatchEvent("expand")
    };
    z.e.collapse = function() {
        this.wl.show();
        this.Rb.hide();
        this.dispatchEvent("collapse")
    };
    var ID = {
        On: function(a, b) { return window.$.post("/node/ColumnPostVoteBarV2", { method: b, params: { post_id: a } }) },
        sH: function(a) { return window.$.get("/node/ColumnPostVoteInfoV2", { params: { post_id: a } }) }
    };
    z.y(DD, z.Q);
    z.FD = { gh: 1, zl: -1, Wr: 0 };
    DD.prototype.defaults = { CZ: "up", AQ: "down", WP: "count", pv: "pressed" };
    z.Mb(DD.prototype, z.FD);
    z.e = DD.prototype;
    z.e.N = z.FD.Wr;
    z.e.w = function(a) {
        DD.v.w.call(this, a);
        var b = this.J;
        a = this.H = (0, window.$)(a);
        this.Uw = (0, window.$)("." + b.CZ, a);
        this.Hw = (0, window.$)("." + b.AQ, a);
        this.Ir = (0, window.$)("." + b.WP, a);
        b = this.Uw.hasClass(this.J.pv);
        a = this.Hw.hasClass(this.J.pv);
        b ? this.N = z.FD.gh : a && (this.N = z.FD.zl);
        GD(this);
        this.Uw.click(window.$.proxy(this.jw, this));
        this.Hw.click(window.$.proxy(this.mM, this));
        z.V.Ya(this, { module: "VoteBar" })
    };
    z.e.getState = function() { return this.N };
    z.e.zc = z.Dq(function(a) {
            a !== this.N &&
                z.Kn(z.FD, a) &&
                (this
                        .dispatchEvent({ type: "action", data: { state: a } }),
                    this.Gi && "pending" === this.Gi.state() && this.Gi.abort(), ED(this, this.N, a), this
                        .N = a, GD(this), this
                        .VY().done((0, z.t)(function(a) { a.r || this.Vc() }, this)))
        },
        !0);
    z.e.Xq = function(a) { this.Ir.text(z.Mr((0, window.parseInt)(a))) };
    z.e.mb = function() { return this.Ir.text() };
    z.e.VY = function() {
        var a = {};
        a[z.FD.gh] = "vote_up";
        a[z.FD.zl] = "vote_down";
        a[z.FD.Wr] = "vote_neutral";
        return this.Gi = (0, { post: ID.On, answer: KD.On, promotion: BD, pin: CD }[this.entryType])(this.Cb, a[this.N])
    };
    z.e.jw = function() {
        this.zc(this.N === z.FD.zl ? z.FD.gh : this.N ^ z.FD.gh);
        z.V.trackEvent(this, { action: this.N === z.FD.Wr ? "UnUpvote" : "Upvote", element: "Button" })
    };
    z.e.mM = function() {
        this.zc(this.N === z.FD.gh ? z.FD.zl : this.N ^ z.FD.zl);
        z.V.trackEvent(this, { action: this.N === z.FD.Wr ? "UnDownvote" : "Downvote", element: "Button" })
    };
    z.e.Vc = function() { this.dispatchEvent("change") };
    z.JD = {
        On: function(a, b) {
            var c = void 0;
            switch (b) {
            case "up":
                c = window.$.ajax({ url: "/publications/" + a + "/upvote", method: "post" });
                break;
            case "neutral":
                c = window.$.ajax({ url: "/publications/" + a + "/upvote", method: "delete" })
            }
            return c
        },
        wP: function(a, b) {
            return window.$.ajax({
                method: "post",
                url: "/publications/" + a + "/buy",
                contentType: "application/json",
                data: JSON.stringify(b)
            })
        }
    };
    z.y(z.HD, z.Q);
    z.e = z.HD.prototype;
    z.e.mb = function() { return this.ub.data("votecount") };
    z.e.Xq = function(a) {
        this.ub.data("votecount", a);
        this.Vc()
    };
    z.e.Vc = function() { this.dispatchEvent("change") };
    z.e.Vh = function(a) {
        if (a = (0, z.ab)(a)) a = (0, window.$)(a), this.ub.replaceWith(a), this.ub = a, this.hc(), this.Vc()
    };
    z.e.hc = function() {
        function a(a, d) {
            var f = z.M("div", "zm-voters");
            a.appendChild(f);
            var g = z.M("div", "listview");
            f.appendChild(g);
            var h = "/" + b.entryType + "/" + b.Cb + "/voters_profile",
                k = new z.El({
                    use: [],
                    source: function() {
                        return window.$.get(h).then(function(a) {
                            var c = a.paging;
                            c && (c.total && b.Xq(c.total), h = c.next);
                            return { results: a.payload, next: !!h }
                        })
                    }
                });
            k.w(g);
            k.Jf().setAttribute("hidden", "true");
            z.Ac(d, k);
            k.o().ta(k,
                "next",
                function() {
                    k.nb().length
                        ? (k.Jf().removeAttribute("hidden"), k.use("autoload", { ns: !1, viewport: f }))
                        : (k.dispose(), f.innerHTML = '\x3cdiv class\x3d"empty-results"\x3e还没有人赞同\x3c/div\x3e')
                });
            return k.Hg()
        }

        var b = this;
        (0, window.$)("a.more", this.ub).click(function() {
            var c = z.T.async({
                modal: !0,
                title: b.mb() + " 人赞同",
                className: "zm-voters-dialog",
                dy: window.$.Deferred(function(b) {
                    (0, window.setTimeout)(function() { a(c.S(), c).then(function() { b.resolve(null) }) })
                }).promise()
            });
            c.o().g(b, "change", function() { c.La(b.mb() + " 人赞同") })
        })
    };
    z.e.C = function() {
        this.ub = (0, window.$)(this.h);
        this.hc();
        z.V.Ya(this, { module: "VoteInfo" })
    };
    z.y(MD, z.Q);
    z.e = MD.prototype;
    z.e.T = function(a) {
        MD.v.T.call(this, a);
        this.o().g(a, "click", this.wW)
    };
    z.e.rQ = function() {
        var a = this.tw;
        z.Bo(a.m(), this.UM);
        z.Dg(a.m(), [this.TM, this.VM])
    };
    z.e
        .QO =
        '\x3cdiv class\x3d"text zg-clear"\x3e\x3clabel class\x3d"zg-left"\x3e赞同\x3c/label\x3e\x3clabel class\x3d"zg-right"\x3e反对\x3c/label\x3e\x3c/div\x3e';
    z.e.YW = '\x3cdiv class\x3d"text zg-clear votebar-text-post"\x3e\n  \x3clabel\x3e赞\x3c/label\x3e\n\x3c/div\x3e';
    z.e.wW = z.Dq(function() {
            this.Na && this.Na.dispose();
            var a = new z.R(null);
            a.Fe(!0);
            a.nn(!0);
            a.YG = !0;
            ND(this);
            this.o().ta(a, "hide", this.rQ);
            var b = ["post", "promotion"].includes(this.tw.entryType) ? this.YW : this.QO, c = a.S();
            c.appendChild(this.tw.m());
            c.appendChild(z.Ye(b));
            z.S.add(a.m(), this.By);
            a.F(!0);
            this.Na = a;
            z.Ac(this, a)
        },
        !0);
    z.iH = {
        Gp: function() {
            function a() {
                var a = c.pd();
                if (a && (b(), f)) {
                    var d = f, h = d.ub;
                    h.data("async-voters") && (h.removeData("async-voters"), z.LD(d))
                }
                g && z.lv(g, a)
            }

            function b() {
                if (!g) {
                    var a = !z.$h, b = z.L("js-collapse-body", c.m());
                    a &&
                        h &&
                        (0, window.$)(h).is(":visible") &&
                        b &&
                        230 < (0, window.$)(b).height() &&
                        (g = c.V0 = new z.qv(null, b), c.K(g), g.tag = "votebar", g.yK = 50, g.w(h))
                }
            }

            var c = this, d = void 0, f = void 0, g = void 0, h = (0, window.$)(".votebar, .zm-votebar", this.m())[0];
            if (h) {
                d = this.bh = new DD(this.Cb, this.entryType);
                this.K(d);
                d.w(h);
                var k = (0, window.$)(".js-openVoteDialog", this.m())[0];
                k && (new MD(d)).w(k)
            }
            if (k = (0, window
                .$)(".zm-item-vote-info", this.m())[0])
                f = this.WM = new z.HD(this.Cb, this.entryType), this.K(f), f.w(k);
            d &&
            (this.o().g(d,
                "change",
                function() { f ? z.LD(f) : (0, window.$)("[data-bind-votecount]", this.m()).text(d.mb()) }), f &&
                this.o().g(f,
                    "change",
                    function() {
                        (0, window.$)("[data-bind-votecount]", this.m()).text(f.mb());
                        d.Xq(f.mb())
                    }));
            this.o().g(this, ["expand", "collapse"], a);
            (0, window.$)(this.m()).on("contentchange", b);
            (0, window.setTimeout)(a)
        }
    };
    z.y(z.OD, z.iD);
    z.e = z.OD.prototype;
    z.e.Vo = function() {
        return {
            parent_token: (0, window.$)(this.m()).find('link[itemprop\x3d"url"]').attr("href")
                .match(/\/question\/([\d]+)\/answer\/([\d]+)/)[1]
        }
    };
    z.e.Lj = function() {
        var a = this;
        z.OD.v.Lj.call(this,
        {
            ".js-collect": this.Gz,
            ".js-thank": this.LH,
            ".js-noHelp": this.zS,
            ".js-administer": this.KL,
            ".js-orgCollapse": this.DS,
            ".js-expandQuestionDetail": this.CL.bind(this, !0)
        });
        this.Gp();
        this.Bp();
        this.Vi();
        UD(this);
        "collect_pop" === window.location.hash.slice(1) &&
        (window.history.replaceState({},
            window.document.title,
            window.location
            .protocol +
            "//" +
            window.location.host +
            window.location.pathname +
            window.location.search), this.Gz());
        this.Fh();
        this.oA();
        this.o().g(this,
            "collapse",
            function(b) { b.target === a && a.CL(!1) });
        if (this.vb) this.Im();
        else {
            var b = this;
            this.ta("expand", function() { return b.Im() })
        }
    };
    z.e.kg = function() {
        var a = this;
        z.OD.v.kg.call(this);
        z.pl(z.pl(z.pl(z.pl(this.nf.register("v", function() { a.bh && a.bh.jw() }), { group: "操作", name: "赞同" })
                    .register("d", function() { a.bh && a.bh.mM() }),
                    { group: "操作", name: "反对" }).register("t", this.LH, this),
                { group: "操作", name: "感谢" }).register("s c", this.Gz, this),
            { group: "操作", name: "收藏" });
        if (z.sm.zI && (0, window.$)(".js-administer", sD(this))[0]) {
            var b = this,
                c = z.Uc ? "⌘" : "ctrl",
                d = function() {
                    b.KL();
                    b.cs.Hb(0)
                };
            z.pl(z.pl(this.nf.register("meta+.", d), { group: "管理", name: "展开菜单", key: c + "+." }).register("meta+k",
                    function() {
                        d();
                        var a = b.cs.Oi(0);
                        a.kb && a.kb() && (a.Tv(), a.kb().Hb(0))
                    }),
                { group: "管理", name: "展开折叠子菜单 (Kill)", key: c + "+k" })
        }
    };
    z.e.Fh = function() {
        var a = (0, window.$)(".js-share", this.m()).get(0), b = this.jd.url;
        a && b && (a = z.uD(a, "answer", this.We, b), z.Ac(this, a), a.yb(this))
    };
    z.e.Vi = function(a) {
        var b = new z.yD(a);
        this.K(b);
        b.w(this.h);
        this.g("expandRequest", (0, z.t)(this.expand, this));
        this.g("expand", function(a) { a.target === a.currentTarget && b.expand() });
        this.g("collapse", function(a) { a.target === a.currentTarget && b.collapse() });
        b.LA && this.o().ta(b, "expand", this.aq)
    };
    z.e.Bp = function() {
        var a = (0, window.$)(".phone-actions", this.m());
        if (a.length) {
            var b = new z.Xz;
            b.w((0, window.$)(".menu", a)[0]);
            b = new z.vA("operation", b);
            b.dj = !0;
            z.xA(b);
            wA(b);
            b.Sb = z.Hl;
            b.w((0, window.$)(".menubutton", a)[0])
        }
    };
    z.e.LH = kD(function(a) {
            if (a = a.target) {
                var b = "true" === a.getAttribute("data-thanked");
                b
                    ? (jr(a, "感谢"), a.setAttribute("data-thanked", !1), window.$
                        .post("/answer/cancel_thanks", { aid: this.Cb }))
                    : (jr(a, "取消感谢"), a.setAttribute("data-thanked", !0), window.$
                        .post("/answer/thanks", { aid: this.Cb }));
                z.V.trackEvent(a, { action: b ? "UnThank" : "Thank", element: "Button" })
            }
        },
        { jb: "question_answer_thank" });
    z.e.zS = kD(function(a) {
            a = a.target;
            var b = !!a.m;
            z.U.Bb({ type: "ga_click_answer_not_helpful", target: b ? a.m() : a });
            this.Ay && "pending" === this.Ay.state() && this.Ay.abort();
            var c = -1 < (b ? a.wh() : a.innerHTML).indexOf("撤销"), d = c ? "没有帮助" : "撤销没有帮助";
            b ? a.Vq(d) : a.innerHTML = d;
            d = c ? "/answer/helpful" : "/answer/not_helpful";
            b || z.rr(a);
            this.Ay = window.$.post(d, { aid: this.Cb });
            z.V.trackEvent(this, { action: c ? "UnNoHelp" : "NoHelp", element: "Button" })
        },
        !0);
    z.e.Gz = kD(function() {
            var a = z.Zz.ba();
            bA(a, this.Cb);
            a.show();
            z.V.trackEvent(this, { action: "CollectIntent", element: "Button" })
        },
        { jb: "question_answer_collect", Sd: !0 });
    z.e.oA = function() {
        var a = (0, window.$)(".js-settings", sD(this))[0];
        if (a) {
            var b = this;
            this.TE = new QA(this);
            this.TE.w(a);
            this.o().g(this.TE,
                YA,
                function() {
                    if (b.Ja) {
                        var a = b.Ja.pd();
                        b.removeChild(b.Ja, !0);
                        b.Ja.dispose();
                        b.Ja = null;
                        b.HG();
                        a && b.Ja.ii()
                    }
                })
        }
    };
    z.e.KL = function() {
        if (this.cs) return this.cs.F(!0);
        var a = PD(this);
        a && (z.FA(a, new z.oA(this.wO, 1, !0), 0, new z.Gg(5, 0, 5, 0)), SD(this, a), this.cs = a)
    };
    z.e.DS = function() {
        var a = this, b = void 0, c, d;
        this.Wi
            ? (b = "取消隐藏回答", c = "确认取消隐藏？", d = "cancel_collapse")
            : (b = "隐藏回答", c = "隐藏后该回答将不展示也不流通，是否确认隐藏？", d = "collapse");
        z.T.confirm(b,
            c,
            function(b) {
                b &&
                    window.$.post("/answer/" + a.We + "/org_" + d)
                    .then(function(a) { a.r ? z.T.message(a.msg) : (z.T.message("操作成功！"), window.location.reload()) })
            })
    };
    z.e.Im = function() {
        (0, window.$)("img.lazy:not([data-lazyloaded])", this.m()).attr("data-lazyloaded", "")
            .lazyload({
                load: function() { (0, window.$)(this).trigger("contentchange") },
                data_attribute: "actualsrc",
                event: "scroll updatelazy",
                threshold: 400
            })
    };
    z.e.Kb = z.m(48);
    z.e.CL = function(a) {
        (0, window.$)(".feed-question-detail-item", this.h).toggleClass("question-detail-expanded", a)
    };
    z.Ca(z.OD.prototype, z.iH);
    z.y(z.WD, z.iD);
    z.e = z.WD.prototype;
    z.e.Zp = "post-link";
    z.e.C = function() {
        z.WD.v.C.call(this);
        this.Gp();
        this.Vi();
        this.Bp();
        this.Fh();
        var a = (0, window.$)(".post-content", this.h), b = a.data("entryUrl"), c = a.data("authorName");
        z.VD.EE(a, b, c);
        XD(this)
    };
    z.e.qH = function() { return "feed_article_" + rD(this) + (this.pd() ? "_expand" : "") };
    z.e.Fh = function() {
        var a = (0, window.$)("a[name\x3dshare], .js-share", this.h).get(0),
            b = (0, window.$)(".post-link, .js-title-link", this.h).get(0);
        a && b && z.uD(a, "post", this.We, b.href).yb(this)
    };
    z.e.Kb = z.m(47);
    z.e.Xz = z.m(49);
    z.e.Nz = z.m(50);
    z.e.Vi = function(a) {
        var b = new z.yD(a);
        this.K(b);
        b.w(this.h);
        this.iD = b;
        this.g("expandRequest", (0, z.t)(this.expand, this));
        this.g("expand", function(a) { a.target === a.currentTarget && b.expand() });
        this.g("collapse", function(a) { a.target === a.currentTarget && b.collapse() });
        b.LA && this.o().ta(b, "expand", this.aq)
    };
    z.e.kg = function() {
        var a = this;
        z.WD.v.kg.call(this);
        z.pl(this.nf.register("v", function() { a.bh && a.bh.jw() }), { group: "操作", name: "赞同" })
    };
    z.e.Bp = function() {
        var a = (0, window.$)(".phone-actions", this.m());
        if (a.length) {
            var b = new z.Xz;
            b.w((0, window.$)(".menu", a)[0]);
            b = new z.vA("operation", b);
            b.dj = !0;
            z.xA(b);
            wA(b);
            b.Sb = z.Hl;
            b.w((0, window.$)(".menubutton", a)[0])
        }
    };
    z.Ca(z.WD.prototype, z.iH);
    z.p(z.YD, z.iD);
    z.YD.prototype.Kb = z.m(46);
    z.p(z.ZD, z.iD);
    z.ZD.prototype.Kb = z.m(45);
    z.p(z.$D, z.iD);
    z.p(z.aE, z.iD);
    z.aE.prototype.Kb = z.m(44);
    z.p(z.bE, z.iD);
    z.bE.prototype.Lj = function() {
        z.iD.prototype.Lj.call(this,
        {
            "[data-entry-url]": function(a) {
                var b = (0, window.$)(a.currentTarget).data("entry-url");
                b && !a.target.href && window.open(b)
            }
        })
    };
    z.bE.prototype.Kb = z.m(43);
    z.bE.prototype.fy = function() { return new (this.xt())(this.We, this.entryType) };
    z.p(cE, z.iD);
    cE.prototype.C = function() {
        z.iD.prototype.C.call(this);
        this.Gp();
        this.pA();
        this.Bp()
    };
    cE.prototype.pA = function() {
        var a = (0, window.$)(".js-share", this.m()).get(0), b = this.jd["promotion-url"];
        a && b && z.uD(a, this.entryType, this.We, b).yb(this)
    };
    cE.prototype.kg = function() {
        var a = this;
        z.iD.prototype.kg.call(this);
        z.pl(this.nf.register("v", function() { a.bh && a.bh.jw() }), { group: "操作", name: "赞同" })
    };
    cE.prototype.Bp = function() {
        var a = (0, window.$)(".phone-actions", this.m());
        if (a.length) {
            var b = new z.Xz;
            b.w((0, window.$)(".menu", a)[0]);
            b = new z.vA("operation", b);
            b.dj = !0;
            z.xA(b);
            wA(b);
            b.Sb = z.Hl;
            b.w((0, window.$)(".menubutton", a)[0])
        }
    };
    z.Ca(cE.prototype, z.iH);
    z.p(z.dE, z.iD);
    z.dE.prototype.Kb = z.m(42);
    z.dE.prototype.C = function() {
        z.iD.prototype.C.call(this);
        this.Gp();
        this.Fh();
        eE(this)
    };
    z.dE.prototype.Fh = function() {
        var a = (0, window.$)("a[name\x3dshare], .js-share", this.h).get(0),
            b = (0, window.$)(".pin-link, .js-title-link", this.h).get(0);
        a && b && z.uD(a, "pin", this.We, b.href).yb(this)
    };
    z.Ca(z.dE.prototype, z.iH);
    z.p(z.fE, z.iD);
    z.fE.prototype.C = function() {
        z.iD.prototype.C.call(this);
        (0, window.$)(this.m()).on("click", ".eventcard-body[data-entry-url]", this.jU)
    };
    z.fE.prototype.jU = function(a) {
        var b = (0, window.$)(a.currentTarget).data("entry-url");
        b && !a.target.href && window.open(b)
    };
    z.y(z.hE, z.H);
    z.hE.prototype.handleEvent = function(a) {
        if ("input" == a.type)
            z.C && z.E(10) && 0 == a.keyCode && 0 == a.charCode || (iE(this), this.dispatchEvent(jE(a)));
        else if ("keydown" != a.type || oo(a)) {
            var b = "keydown" == a.type ? this.h.value : null;
            z.C && 229 == a.keyCode && (b = null);
            var c = jE(a);
            iE(this);
            this.la = z.vd(function() {
                    this.la = null;
                    this.h.value != b && this.dispatchEvent(c)
                },
                0,
                this)
        }
    };
    z.hE.prototype.D = function() {
        z.hE.v.D.call(this);
        this.U.dispose();
        iE(this);
        delete this.h
    };
    z.y(kE, z.H);
    var lE = 0;
    kE.prototype.zB = function() { this.Rl() };
    kE.prototype.Rl = function() {
        var a = this.Ji.value.length;
        if (a > this.Ku) {
            var b = this.Ji.scrollTop, c = this.Ji.scrollLeft;
            this.Ji.value = this.Ji.value.substring(0, this.Ku);
            a = this.Ku;
            this.Ji.scrollTop = b;
            this.Ji.scrollLeft = c
        }
        this.BG && z.of(this.BG, String(1 == this.wQ ? a : this.Ku - a))
    };
    kE.prototype.D = function() {
        kE.v.D.call(this);
        delete this.Ji;
        this.wA.dispose();
        this.wA = null
    };
    var rE;
    z.y(z.mE, z.hj);
    z.e = z.mE.prototype;
    z.e.init = function() { this.iu || (this.iu = !0, this.B(), this.hc()) };
    z.e.hc = function() {
        z.C || (new z.et("搜索问题")).w(this.sd);
        this.O = new z.st("/redirect-question/autocomplete",
            this.sd,
            null,
            null,
            z.J("zh-question-redirect-diag-content"),
            !1);
        this.O.io = !1;
        this.O.Vg(!0);
        this.o().g(this.O, "suggestionsupdate", Jr);
        this.o().g(this.O, "select", this.bW).g(this.rP, "click", function() { this.ua.F(!1) })
    };
    z.e.bW = function() {
        var a = this.O.Ag();
        if ("search_link" === a[0])
            window.open("/search?q\x3d" + (0, window.encodeURIComponent)(a[1]) + "\x26type\x3dquestion");
        else {
            this.sd.value = "";
            var b = a[3], a = a[1];
            this.ua.F(!1);
            this.sd.value = "";
            this.xhr = new z.ep(!0);
            this.o().ta(this.xhr, "complete", this.GO);
            this.xhr.ajax("/question/redirect", "qid\x3d" + this.qa + "\x26rqid\x3d" + b);
            this.Fv = b;
            this.OK = a
        }
    };
    z.e.GO = function() {
        var a = z.Dn(this.xhr);
        a &&
        (a.r
            ? z.T.message(a.msg)
            : this.Ej
            ? (this.Ej.innerHTML = "已经重定向", this.Ej.setAttribute("data-disabled", 1))
            : this.dispatchEvent("change"))
    };
    z.e.B = function() {
        this.h = z.M("div",
            { id: "zh-question-redirect-diag" },
            [
                "将问题跳转至", z.M("div",
                    { id: "zh-question-redirect-diag-content" },
                    this.sd = z.M("input", { type: "text", "class": "zg-form-text-input" })), z
                .M("div",
                    "zm-command",
                    this.rP = z.M("a", { href: "javascript:;", "class": "zm-command-cancel", name: "cancel" }, "放弃操作"))
            ]);
        this.ua = new z.R(null);
        this.ua.La("问题重定向");
        z.Rh(this.ua, null);
        this.ua.S().appendChild(this.h)
    };
    z.e.show = function() {
        this.init();
        this.ua.F(!0)
    };
    var jH = {}, jH = function() { z.H.call(this) };
    z.y(jH, z.hj);
    jH.Yw = [
        ["需要详细阐述", "答案过于简短或表述不清晰，请完善答案。"], ["答非所问", "没有正面或直接回答问题，请修改答案。"], ["应作为问题的评论", "该内容是对问题本身的评论而不是回答，请改为发布到评论。"],
        ["应作为答案的评论", "该内容是对另外一个答案的评论或回应，而不是回答问题，请改为发布到评论。"], ["内容重复", "与已有答案重复，请修改答案。"], ["内容已过期", "答案的时效性已过，请更新答案。"],
        ["需要注明关联利益", "有广告、推销嫌疑，请注明作者与利益方的关系。"]
    ];
    jH.xk = null;
    jH.ba = function() {
        jH.xk || (jH.xk = new jH, jH.xk.init());
        return jH.xk
    };
    z.e = jH.prototype;
    z.e.init = function() {
        if (!this.h) {
            this.B();
            this.hc();
            var a = new zx(this.h);
            mn(a);
            a.$H = !0;
            a.nn(!0);
            a.F(!1);
            a.aC = 0;
            a.W() && a.ga();
            z.Ax(a, new z.Gg(13, 0, 0, -22));
            this.$B = a
        }
    };
    z.e.hc = function() { this.o().g(this.h, "click", this.ZV) };
    z.e.ZV = function(a) {
        "A" === a.target.tagName && (a = a.target.getAttribute("data-index"), this.bQ.o0(a), this.$B.F(!1))
    };
    z.e.B = function() {
        var a = z.M("div",
            { id: "zh-answer-flag-popup", "class": "zg-r5px zu-hovercard-wrap" },
            [
                z.M("div",
                    "zg-r5px zu-hovercard-inner",
                    [
                        z.M("div",
                            { id: "zh-answer-flag-popup-header" },
                            [
                                z
                                .M("a", { "class": "zg-right", href: "/question/19867017", target: "_blank" }, "这是什么？"),
                                "选择一个理由："
                            ]), this.uK = z.M("div", { id: "zh-answer-flog-options-wrap" })
                    ]), z.M("div", "zu-hovercard-spin-top")
            ]);
        z.A(jH.Yw,
            function(a, c) {
                var d = z.M("a", { href: "javascript:;", "class": "zm-menu-item-link" }, a[0]);
                d.setAttribute("data-index", c);
                this.uK.appendChild(d)
            },
            this);
        window.document.body.appendChild(a);
        this.h = a
    };
    z.e.show = function(a, b) {
        this.$B.setPosition(new z.xx(a, 1));
        nE(this, b.s0());
        this.$B.F(!0);
        this.bQ = b
    };
    var qE;
    z.y(oE, z.hj);
    oE.prototype.init = function() {
        this.B();
        this.mo()
    };
    oE.prototype.B = function() {
        this.h = z.M("div",
            null,
            [
                z.M("div", "zg-section", [z.M("div", null, "标记："), this.jm = z.M("select")]), z
                .M("div",
                    null,
                    [
                        z.M("div", null, "原因"), this.jC = z
                        .M("textarea", { style: "width:96%;border:solid 1px #666;height:66px;padding:5px" })
                    ]), this.xo = z.M("div",
                    "zm-command",
                    [
                        z.M("a", { "class": "zg-mr10", href: "javascript:void(0);", name: "cancel" }, "取消"), z
                        .M("a", { "class": "zg-btn-blue", href: "javascript:void(0);", name: "confirm" }, "确定")
                    ])
            ]);
        this.jm.appendChild(z.M("option", { value: "no" }, "选择标记原因"));
        z.A(jH.Yw,
            function(a, b) { this.jm.appendChild(z.M("option", { value: b }, a[0])) },
            this);
        this.ua = new z.R(null);
        this.ua.La("标记答案");
        z.Rh(this.ua, null);
        this.ua.S().appendChild(this.h)
    };
    oE.prototype.mo = function() {
        this.o().g(this.jm,
            "change",
            function() {
                var a = this.jm.value;
                this.jC.value = "no" === a ? "" : jH.Yw[+a][1]
            }).g(this.xo,
            "click",
            function(a) {
                "cancel" === a.target.name
                    ? this.ua.F(!1)
                    : this.jC.value &&
                    "no" !== this.jm.value &&
                    (this.cz = new z.ep(!0), this.o().g(this.cz,
                        "complete",
                        function() {
                            var a = z.Dn(this.cz);
                            a && !a.r ? (this.Ej.innerHTML = "已经标记", this.ua.F(!1)) : z.T.message(a.msg)
                        }), a = z.mr(this.jC.value), this.cz.ajax("/answer/flag",
                        "answer_id\x3d" +
                        this.jO +
                        "\x26flag\x3d" +
                        this.jm.value +
                        "\x26reason\x3d" +
                        (0, window.encodeURIComponent)(a)))
            })
    };
    oE.prototype.show = function() { this.ua.F(!0) };
    z.y(z.tE, z.Q);
    z.e = z.tE.prototype;
    z.e.JD = !z.$h;
    z.e.GD = !z.$h;
    z.e.mJ = !1;
    z.e.mj = function(a) { this.Jh = a };
    z.e.init = function() {
        this.de = z.J("zh-load-more");
        this.w(this.JQ)
    };
    z.e.C = function() {
        z.tE.v.C.call(this);
        this.jo = 1;
        xE(this);
        this.tl = (0, window.$)(this.de);
        this.de &&
        (vE(this), this.o().g(this.de,
            "click",
            function() {
                this.Lp = !0;
                this.oi && "pending" === this.oi.state() && 1 === this.jo
                    ? (this.oi.done((0, z.t)(this.Pk, this)), this.PC = !0, z.uE(this, !0))
                    : this.JD && this.ov ? (this.Pk(this.ov), this.ov = null) : (z.uE(this, !0), this.Mh())
            }), this.JD &&
            (this.mD = new z.oi(this.FB, 100, this), this.o().g(window, "scroll", function() { this.mD.fire() })));
        yE(this, this.nb())
    };
    z.e.Hg = function() { this.Mh(!0) };
    z.e.FB = function() {
        var a = this.de;
        a &&
            z.ah(a) &&
            1E3 >= a.getBoundingClientRect().top - z.Qe().height &&
            !(this.ov || this.oi && "pending" === this.oi.state()) &&
            (this.GD &&
                (3 !== this.jo || this.mJ ? (this.Lp = !1, this.jo++, this.PC = !0) : (this.jo = 1, this.PC = !1)), this
                .Mh())
    };
    z.e.Mh = function(a, b, c) {
        b = b || z.r;
        if (!this.oi || "pending" !== this.oi.state()) {
            var d = this.cC(window.$.extend(this.params, { offset: this.offset, start: this.Wv }));
            z.U.Bb({ type: "topstory_feed_more" });
            z.V.trackEvent(this, { action: this.Lp ? "LoadMore" : "RollForMore", element: "Button" });
            this.oi = window.$.post(this.url, d).done(b).done(window.$.proxy(function(b) {
                    if (c) return c.call(this, b);
                    this.JD && !a ? this.PC ? this.Pk(b) : (this.ov = b, z.uE(this, !1)) : this.Pk(b)
                },
                this));
            1 !== this.jo && z.uE(this, !0);
            return this.oi
        }
    };
    z.e.cC = function(a) { return a };
    z.e.Pk = function(a) {
        if (a && !a.r) {
            var b = a.msg, c = b[0], d = b[1], f;
            2 < b.length && (f = b[2], this.de.setAttribute("data-next", f));
            0 < c && (this.ls(d), this.offset = this.uB ? this.uB(this.nb()) : this.offset + c);
            b = !0;
            b = this.St ? this.St(a) : !(-1 === f || 10 > c);
            z.P(this.de, b);
            z.uE(this, !1);
            z.wE(this)
        }
    };
    z.e.nb = function() { return z.Co(this.Jh, this.h) };
    z.e.UB = function(a) { return a.id.replace(/^\w+-/, "") };
    z.e.ls = function(a, b) {
        var c = z.ma(a) ? a.join("") : a, c = z.Ye(c + " "), d = z.Co(this.Jh, c);
        yE(this, d);
        "prepend" === b ? z.cf(c, this.h.firstChild) : this.h.appendChild(c);
        xE(this)
    };
    z.e.Yu = z.r;
    z.y(z.AE, z.Sz);
    z.AE.prototype.ee = function() { return this.dispatchEvent("action") };
    z.Jp("goog-option", function() { return new z.AE(null) });
    z.y(z.BE, Tz);
    z.ka(z.BE);
    z.BE.prototype.B = function(a) { return a.L().B("DIV", this.xg(a).join(" ") + " goog-inline-block", " ") };
    z.BE.prototype.w = function(a, b) {
        b = z.BE.v.w.call(this, a, b);
        z.Ag(b, "goog-inline-block");
        return b
    };
    z.BE.prototype.V = function() { return "goog-toolbar-separator" };
    z.y(z.CE, Qr);
    z.ka(z.CE);
    z.CE.prototype.Uo = function(a) { return "HR" == a.tagName ? new z.Uz(z.BE.ba()) : z.CE.v.Uo.call(this, a) };
    z.CE.prototype.V = function() { return "goog-toolbar" };
    z.CE.prototype.hH = function() { return z.lG };
    z.y(DE, rA);
    z.ka(DE);
    DE.prototype.V = function() { return "goog-toolbar-button" };
    z.y(z.EE, z.Sp);
    z.Jp("goog-toolbar-button", function() { return new z.EE(null) });
    z.y(FE, tA);
    z.ka(FE);
    FE.prototype.createCaption = function(a, b) { return FE.v.createCaption.call(this, GE(a, b), b) };
    FE.prototype.Da = function(a, b) { a && HE(this.S(a), b) };
    FE.prototype.bf = function(a) {
        var b = a.m();
        this.Da(b, a.X());
        z.Ag(b, "goog-color-menu-button");
        FE.v.bf.call(this, a)
    };
    z.y(IE, z.It);
    IE.prototype.next = function() {
        do IE.v.next.call(this);
        while (-1 == this.ec);
        return this.node
    };
    z.y(z.JE, Cp);
    z.ka(z.JE);
    var NE = 0;
    z.e = z.JE.prototype;
    z.e.B = function(a) {
        var b = this.xg(a);
        a = a.L().B("DIV", b ? b.join(" ") : null, KE(this, a.cb(), a.yh(), a.L()));
        z.ug(a, "grid");
        return a
    };
    z.e.iy = function(a, b) {
        var c = b.B("TABLE", this.V() + "-table", b.B("TBODY", this.V() + "-body", a));
        c.cellSpacing = 0;
        c.cellPadding = 0;
        return c
    };
    z.e.Sb = function() { return !1 };
    z.e.w = function() { return null };
    z.e.aa = function(a, b) {
        if (a) {
            var c = z.Me("TBODY", this.V() + "-body", a)[0];
            if (c) {
                var d = 0;
                z.A(c.rows,
                    function(a) {
                        z.A(a.cells,
                            function(a) {
                                z.bf(a);
                                if (b) {
                                    var c = b[d++];
                                    c && a.appendChild(c)
                                }
                            })
                    });
                if (d < b.length) {
                    for (var f = [], g = z.Ie(a), h = c.rows[0].cells.length; d < b.length;) {
                        var k = b[d++];
                        f.push(LE(this, k, g));
                        f.length == h && (k = ME(this, f, g), c.appendChild(k), f.length = 0)
                    }
                    if (0 < f.length) {
                        for (; f.length < h;) f.push(LE(this, "", g));
                        k = ME(this, f, g);
                        c.appendChild(k)
                    }
                }
            }
            z.fo(a, !0, z.B)
        }
    };
    z.e.V = function() { return "goog-palette" };
    z.y(PE, z.H);
    z.e = PE.prototype;
    z.e.Zh = null;
    z.e.$f = null;
    z.e.rm = function() { return this.gf.length };
    z.e.Oi = function(a) { return this.gf[a] || null };
    z.e.Ia = function(a) { this.Gj(a, this.rm()) };
    z.e.Gj = function(a, b) { a && (this.mn(a, !1), z.xb(this.gf, b, 0, a)) };
    z.e.removeItem = function(a) {
        a && z.tb(this.gf, a) && a == this.Zh && (this.Zh = null, this.dispatchEvent("select"))
    };
    z.e.Kf = function() { return this.Zh };
    z.e.nb = function() { return z.vb(this.gf) };
    z.e.ag = function(a) {
        a != this.Zh && (this.mn(this.Zh, !1), this.Zh = a, this.mn(a, !0));
        this.dispatchEvent("select")
    };
    z.e.hk = function() {
        var a = this.Zh;
        return a ? z.kb(this.gf, a) : -1
    };
    z.e.cr = function(a) { this.ag(this.Oi(a)) };
    z.e.clear = function() {
        var a = this.gf;
        if (!z.ma(a)) for (var b = a.length - 1; 0 <= b; b--) delete a[b];
        a.length = 0;
        this.Zh = null
    };
    z.e.D = function() {
        PE.v.D.call(this);
        delete this.gf;
        this.Zh = null
    };
    z.e.mn = function(a, b) {
        a && ("function" == typeof this.$f ? this.$f(a, b) : "function" == typeof a.MC && a.MC(b))
    };
    z.y(z.RE, Lp);
    z.e = z.RE.prototype;
    z.e.Mc = null;
    z.e.$a = -1;
    z.e.ma = null;
    z.e.D = function() {
        z.RE.v.D.call(this);
        this.ma && (this.ma.dispose(), this.ma = null);
        this.Mc = null;
        this.Go.dispose()
    };
    z.e.pn = function(a) {
        z.RE.v.pn.call(this, a);
        UE(this);
        this.ma
            ? (this.ma.clear(), QE(this.ma, a))
            : (this.ma = new PE(a), a = (0, z.t)(this.mn, this), this.ma.$f = a, this.o()
                .g(this.ma, "select", this.pk));
        this.$a = -1
    };
    z.e.wh = function() { return "" };
    z.e.Vq = function() {};
    z.e.Gd = function(a) {
        z.RE.v.Gd.call(this, a);
        var b = OE(this.M, this, a.target);
        b && a.relatedTarget && z.nf(b, a.relatedTarget) ||
            b == VE(this) ||
            (a = this.cb(), this.Hb(a ? z.kb(a, b) : -1))
    };
    z.e.ze = function(a) {
        z.RE.v.ze.call(this, a);
        if (this.Jc() && (a = OE(this.M, this, a.target), a != VE(this))) {
            var b = this.cb();
            this.Hb(b ? z.kb(b, a) : -1)
        }
    };
    z.e.ee = function(a) {
        var b = VE(this);
        return b ? (this.ag(b), z.RE.v.ee.call(this, a)) : !1
    };
    z.e.kc = function(a) {
        var b = this.cb(), b = b ? b.length : 0, c = this.Mc.width;
        if (0 == b || !this.isEnabled()) return !1;
        if (13 == a.keyCode || 32 == a.keyCode) return this.ee(a);
        if (36 == a.keyCode) return this.Hb(0), !0;
        if (35 == a.keyCode) return this.Hb(b - 1), !0;
        var d = 0 > this.$a ? this.hk() : this.$a;
        switch (a.keyCode) {
        case 37:
            if (-1 == d || 0 == d) d = b;
            this.Hb(d - 1);
            a.preventDefault();
            return !0;
        case 39:
            return d == b - 1 && (d = -1), this.Hb(d + 1), a.preventDefault(), !0;
        case 38:
            -1 == d && (d = b + c - 1);
            if (d >= c) return this.Hb(d - c), a.preventDefault(), !0;
            break;
        case 40:
            if (-1 ==
                d &&
                (d = -c), d < b - c) return this.Hb(d + c), a.preventDefault(), !0
        }
        return !1
    };
    z.e.pk = function() {};
    z.e.yh = function() { return this.Mc };
    z.e.Hb = function(a) {
        a != this.$a &&
            (WE(this, this.$a, !1), this.VA = this.$a, this.$a = a, WE(this, a, !0), this.dispatchEvent("j"))
    };
    z.e.hk = function() { return this.ma ? this.ma.hk() : -1 };
    z.e.Kf = function() { return this.ma ? this.ma.Kf() : null };
    z.e.cr = function(a) { this.ma && this.ma.cr(a) };
    z.e.ag = function(a) { this.ma && this.ma.ag(a) };
    z.e.Yc = function(a) {
        a && -1 == this.$a ? this.Hb(-1 < this.VA ? this.VA : 0) : a || this.Hb(-1);
        z.RE.v.Yc.call(this, a)
    };
    z.e.mn = function(a, b) {
        if (this.m() && a) {
            var c = a.parentNode;
            z.po(c, this.M.V() + "-cell-selected", b);
            z.vg(c, "selected", b)
        }
    };
    z.y(SE, Lp);
    z.y(XE, z.RE);
    XE.prototype.Su = null;
    XE.prototype.ru = null;
    XE.prototype.xz = function() {
        var a = this.Kf();
        return a ? (a = lo(a, "background-color"), ZE(a)) : null
    };
    XE.prototype.ar = function(a) {
        a = ZE(a);
        this.Su || (this.Su = z.mb(this.Fs, function(a) { return ZE(a) }));
        this.cr(a ? z.kb(this.Su, a) : -1)
    };
    z.y($E, z.vA);
    var bF = {
        u_: "#000 #444 #666 #999 #ccc #eee #f3f3f3 #fff".split(" "),
        O_: "#f00 #f90 #ff0 #0f0 #0ff #00f #90f #f0f".split(" "),
        L_:
            "#f4cccc #fce5cd #fff2cc #d9ead3 #d0e0e3 #cfe2f3 #d9d2e9 #ead1dc #ea9999 #f9cb9c #ffe599 #b6d7a8 #a2c4c9 #9fc5e8 #b4a7d6 #d5a6bd #e06666 #f6b26b #ffd966 #93c47d #76a5af #6fa8dc #8e7cc3 #c27ba0 #cc0000 #e69138 #f1c232 #6aa84f #45818e #3d85c6 #674ea7 #a64d79 #990000 #b45f06 #bf9000 #38761d #134f5c #0b5394 #351c75 #741b47 #660000 #783f04 #7f6000 #274e13 #0c343d #073763 #20124d #4c1130".split(" ")
    };
    z.e = $E.prototype;
    z.e.xz = function() { return this.X() };
    z.e.ar = function(a) { this.Da(a) };
    z.e.Da = function(a) {
        for (var b = 0, c; c = this.Oi(b); b++) "function" == typeof c.ar && c.ar(a);
        $E.v.Da.call(this, a)
    };
    z.e.ip = function(a) {
        "function" == typeof a.target.xz ? this.Da(a.target.xz()) : "none" == a.target.X() && this.Da(null);
        $E.v.ip.call(this, a);
        a.stopPropagation();
        this.dispatchEvent("action")
    };
    z.e.Mb = function(a, b) {
        a && 0 == this.rm() && (this.bi(aF(this.L())), this.Da(this.X()));
        $E.v.Mb.call(this, a, b)
    };
    z.Jp("goog-color-menu-button", function() { return new $E(null) });
    z.y(cF, tA);
    z.ka(cF);
    cF.prototype.V = function() { return "goog-toolbar-menu-button" };
    z.y(dF, cF);
    z.ka(dF);
    dF.prototype.createCaption = function(a, b) { return uA(GE(a, b), this.V(), b) };
    dF.prototype.Da = function(a, b) { a && HE(this.S(a), b) };
    dF.prototype.bf = function(a) {
        this.Da(a.m(), a.X());
        z.Ag(a.m(), "goog-toolbar-color-menu-button");
        dF.v.bf.call(this, a)
    };
    z.y(eF, $E);
    z.Jp("goog-toolbar-color-menu-button", function() { return new eF(null) });
    z.y(fF, z.vA);
    z.Jp("goog-toolbar-menu-button", function() { return new fF(null) });
    z.y(gF, z.vA);
    z.e = gF.prototype;
    z.e.ma = null;
    z.e.C = function() {
        gF.v.C.call(this);
        iF(this);
        lF(this)
    };
    z.e.T = function(a) {
        gF.v.T.call(this, a);
        (a = this.wh()) ? hF(this, a) : this.Kf() || this.cr(0)
    };
    z.e.D = function() {
        gF.v.D.call(this);
        this.ma && (this.ma.dispose(), this.ma = null);
        this.wy = null
    };
    z.e.ip = function(a) {
        this.ag(a.target);
        gF.v.ip.call(this, a);
        a.stopPropagation();
        this.dispatchEvent("action")
    };
    z.e.pk = function() {
        var a = this.Kf();
        gF.v.Da.call(this, a && a.X());
        iF(this)
    };
    z.e.bi = function(a) {
        var b = gF.v.bi.call(this, a);
        a != b &&
        (this.ma && this.ma.clear(), a &&
        (this.ma
            ? z.Ch(a,
                function(a) {
                    kF(a);
                    this.ma.Ia(a)
                },
                this)
            : jF(this, a)));
        return b
    };
    z.e.Ia = function(a) {
        kF(a);
        gF.v.Ia.call(this, a);
        this.ma ? this.ma.Ia(a) : jF(this, this.kb());
        mF(this)
    };
    z.e.Gj = function(a, b) {
        kF(a);
        gF.v.Gj.call(this, a, b);
        this.ma ? this.ma.Gj(a, b) : jF(this, this.kb())
    };
    z.e.removeItem = function(a) {
        gF.v.removeItem.call(this, a);
        this.ma && this.ma.removeItem(a)
    };
    z.e.ag = function(a) {
        if (this.ma) {
            var b = this.Kf();
            this.ma.ag(a);
            a != b && this.dispatchEvent("change")
        }
    };
    z.e.cr = function(a) { this.ma && this.ag(this.ma.Oi(a)) };
    z.e.Da = function(a) {
        if (null != a && this.ma)
            for (var b = 0, c; c = this.ma.Oi(b); b++)
                if (c && "function" == typeof c.X && c.X() == a) {
                    this.ag(c);
                    return
                }
        this.ag(null)
    };
    z.e.X = function() {
        var a = this.Kf();
        return a ? a.X() : null
    };
    z.e.Kf = function() { return this.ma ? this.ma.Kf() : null };
    z.e.hk = function() { return this.ma ? this.ma.hk() : -1 };
    z.e.Mb = function(a, b) {
        gF.v.Mb.call(this, a, b);
        this.Eb() ? this.kb().Hb(this.hk()) : mF(this)
    };
    z.Jp("goog-select", function() { return new gF(null) });
    z.y(oF, gF);
    z.Jp("goog-toolbar-select", function() { return new oF(null) });
    var tF = [10, 10, 13, 16, 18, 24, 32, 48];
    var kH = z.w("Link");
    z.w("Edit Link");
    z.w("Text to display:");
    z.lH = z.w("Link to:");
    z.w("Web address");
    z.w("Link to a page or file somewhere else on the web");
    z.w("Test this link");
    z
        .w("{$startBold}Not sure what to put in the box?{$endBold} First, find the page on the web that you want to link to. (A {$searchEngineLink}search engine{$endLink} might be useful.) Then, copy the web address from the box in your browser's address bar, and paste it into the box above.", { startBold: "\x3cb\x3e", endBold: "\x3c/b\x3e", searchEngineLink: "\x3ca href\x3d'http://www.google.com/' target\x3d'_new'\x3e", endLink: "\x3c/a\x3e" });
    z.w("To what URL should this link go?");
    z.w("Email address");
    z.w("Link to an email address");
    z.w("Invalid email address");
    z.w("To what email address should this link?");
    z
        .w("{$preb}Be careful.{$postb} Remember that any time you include an email address on a web page, nasty spammers can find it too.", { preb: "\x3cb\x3e", postb: "\x3c/b\x3e" });
    z.w("Open this link in a new window");
    z.w("Image");
    var mH,
        nH,
        DF,
        CF,
        oH,
        pH,
        qH,
        rH,
        sF,
        sH,
        tH,
        uH,
        vH,
        vF,
        wH,
        xH,
        yH,
        zH,
        AH,
        BH,
        CH,
        DH,
        EH,
        FH,
        GH,
        HH,
        IH,
        JH,
        KH,
        LH,
        MH,
        NH,
        OH,
        PH,
        QH,
        RH,
        SH,
        TH,
        UH,
        VH,
        WH,
        XH,
        YH,
        $H,
        bI,
        cI,
        dI;
    for (mH = z.w("Normal"), nH = z
            .w("Normal / serif"), DF = [
            { caption: mH, value: "arial,sans-serif" }, { caption: nH, value: "times new roman,serif" },
            { caption: "Courier New", value: "courier new,monospace" }, { caption: "Georgia", value: "georgia,serif" },
            { caption: "Trebuchet", value: "trebuchet ms,sans-serif" },
            { caption: "Verdana", value: "verdana,sans-serif" }
        ], CF = {
            ja: [
                { caption: "ＭＳ Ｐゴシック", value: "ms pgothic,sans-serif" },
                { caption: "ＭＳ Ｐ明朝", value: "ms pmincho,serif" }, { caption: "ＭＳ ゴシック", value: "ms gothic,monospace" }
            ],
            ko: [
                { caption: "굴림", value: "gulim,sans-serif" },
                { caption: "바탕", value: "batang,serif" }, { caption: "굴림체", value: "gulimche,monospace" }
            ],
            "zh-tw": [{ caption: "新細明體", value: "pmingliu,serif" }, { caption: "細明體", value: "mingliu,serif" }],
            "zh-cn": [
                { caption: "宋体", value: "simsun,serif" }, { caption: "黑体", value: "simhei,sans-serif" },
                { caption: "MS Song", value: "ms song,monospace" }
            ]
        }, oH = z.w("Small"), pH = z.w("Normal"), qH = z.w("Large"), rH = z
            .w("Huge"), sF = [
            { caption: oH, value: 1 }, { caption: pH, value: 2 }, { caption: qH, value: 4 }, { caption: rH, value: 6 }
        ], sH = z.w("Heading"), tH = z.w("Subheading"), uH = z.w("Minor heading"),
        vH = z.w("Normal"), vF = [
            { caption: sH, Ba: "H2" }, { caption: tH, Ba: "H3" }, { caption: uH, Ba: "H4" }, { caption: vH, Ba: "P" }
        ], wH = z.w("Format"), xH = z.w("Format"), yH = z.w("Undo"), zH = z.w("Redo"), AH = z.w("Font"), BH = z
            .w("Font size"), CH = z.w("Text color"), DH = z.w("Bold"), EH = z.w("Italic"), FH = z.w("Underline"), GH = z
            .w("Text background color"), HH = z.w("Add or remove link"), IH = z.w("Numbered list"), JH = z
            .w("Bullet list"), KH = z.w("Decrease indent"), LH = z.w("Increase indent"), MH = z.w("Align left"), NH = z
            .w("Align center"), OH = z.w("Align right"),
        PH = z.w("Justify"), QH = z.w("Remove formatting"), RH = z.w("Insert image"), SH = z.w("Strikethrough"), TH = z
            .w("Left-to-right"), UH = z.w("Right-to-left"), VH = z.w("Quote"), WH = z.w("Edit HTML source"), XH = z
            .w("Subscript"), YH = z.w("Superscript"), $H = z.w("Edit HTML"), z.aI = {}, bI = [
            { Ba: "+undo", na: yH, Wa: "tr-icon tr-undo", factory: EF, tb: !0 },
            { Ba: "+redo", na: zH, Wa: "tr-icon tr-redo", factory: EF, tb: !0 }, {
                Ba: "+fontName",
                na: AH,
                Wa: "tr-fontName",
                factory: function(a, b, c, d, f, g) {
                    var h = zF(a, b, c, d, f, g);
                    BF(h);
                    hF(h, mH);
                    z.Ag(h.kb().S(), "goog-menu-noaccel");
                    h.tj = function(a) {
                        var b = null;
                        a && 0 < a.length && (b = z.yh(h.kb(), pF(a)));
                        b != h.Kf() && h.ag(b)
                    };
                    return h
                },
                tb: !0
            }, {
                Ba: "+fontSize",
                na: BH,
                Wa: "tr-fontSize",
                factory: function(a, b, c, d, f, g) {
                    var h = zF(a, b, c, d, f, g);
                    rF(h);
                    hF(h, pH);
                    z.Ag(h.kb().S(), "goog-menu-noaccel");
                    h.tj = function(a) {
                        var b;
                        if (b = z.oa(a)) b = a.match(YF), b = "px" == (b && b[0] || null);
                        b &&
                        (b = tF, a = Array.prototype.lastIndexOf
                            .call(b, (0, window.parseInt)(a, 10), b.length - 1));
                        a = 0 < a ? a : null;
                        a != h.X() && h.Da(a)
                    };
                    return h
                },
                tb: !0
            }, { Ba: "+bold", na: DH, Wa: "tr-icon tr-bold", tb: !0 }, {
                Ba: "+italic",
                na: EH,
                Wa: "tr-icon tr-italic",
                tb: !0
            }, { Ba: "+underline", na: FH, Wa: "tr-icon tr-underline", tb: !0 }, {
                Ba: "+foreColor",
                na: CH,
                Wa: "tr-icon tr-foreColor",
                factory: function(a, b, c, d, f, g) {
                    a = AF(a, b, c, d, f, g);
                    a.ar("#000");
                    a.tj = z.Ba(FF, a);
                    return a
                },
                tb: !0
            }, {
                Ba: "+backColor",
                na: GH,
                Wa: "tr-icon tr-backColor",
                factory: function(a, b, c, d, f, g) {
                    a = AF(a, b, c, d, f, g);
                    a.ar("#FFF");
                    a.tj = z.Ba(FF, a);
                    return a
                },
                tb: !0
            }, { Ba: "+link", na: HH, caption: kH, Wa: "tr-link", tb: !0 },
            { Ba: "+insertOrderedList", na: IH, Wa: "tr-icon tr-insertOrderedList", tb: !0 }, {
                Ba: "+insertUnorderedList",
                na: JH,
                Wa: "tr-icon tr-insertUnorderedList",
                tb: !0
            }, { Ba: "+outdent", na: KH, Wa: "tr-icon tr-outdent", factory: z.wF },
            { Ba: "+indent", na: LH, Wa: "tr-icon tr-indent", factory: z.wF },
            { Ba: "+justifyLeft", na: MH, Wa: "tr-icon tr-justifyLeft", tb: !0 },
            { Ba: "+justifyCenter", na: NH, Wa: "tr-icon tr-justifyCenter", tb: !0 },
            { Ba: "+justifyRight", na: OH, Wa: "tr-icon tr-justifyRight", tb: !0 },
            { Ba: "+justifyFull", na: PH, Wa: "tr-icon tr-justifyFull", tb: !0 },
            { Ba: "+removeFormat", na: QH, Wa: "tr-icon tr-removeFormat", factory: z.wF }, {
                Ba: "image",
                na: RH,
                Wa: "tr-icon tr-image",
                factory: z.wF
            }, { Ba: "+strikeThrough", na: SH, Wa: "tr-icon tr-strikeThrough", tb: !0 },
            { Ba: "+subscript", na: XH, Wa: "tr-icon tr-subscript", tb: !0 },
            { Ba: "+superscript", na: YH, Wa: "tr-icon tr-superscript", tb: !0 },
            { Ba: "ltr", na: TH, Wa: "tr-icon tr-ltr", tb: !0 }, {
                Ba: "rtl",
                na: UH,
                Wa: "tr-icon tr-rtl",
                factory: function(a, b, c, d, f, g) {
                    var h = z.yF(a, b, c, d, f, g);
                    h.tj = function(a) {
                        a = !!a;
                        z.po(h.getParent().m(), "tr-rtl-mode", a);
                        h.yc(a)
                    };
                    return h
                },
                tb: !0
            }, { Ba: "+BLOCKQUOTE", na: VH, Wa: "tr-icon tr-BLOCKQUOTE", tb: !0 }, {
                Ba: "+formatBlock",
                na: wH,
                caption: xH,
                Wa: "tr-formatBlock",
                factory: function(a, b, c, d, f, g) {
                    var h = zF(a, b, c, d, f, g);
                    uF(h);
                    hF(h, vH);
                    z.Ag(h.kb().S(), "goog-menu-noaccel");
                    h.tj = function(a) {
                        a = a && 0 < a.length ? a : null;
                        a != h.X() && h.Da(a)
                    };
                    return h
                },
                tb: !0
            }, { Ba: "editHtml", na: WH, caption: $H, Wa: "tr-editHtml", factory: z.wF }
        ], cI = 0, dI;
        dI = bI[cI];
        cI++) z.aI[dI.Ba] = dI;
    bI = null;
    var eI = {};
    eI.track = Br;
    z.y(z.GF, z.iB);
    z.Ca(z.GF.prototype, eI);
    z.GF.prototype.defaults = {
        jl: null,
        title: "Distraction Free Mode",
        fP: "back",
        VX: "publish",
        So: "zu-editing-distraction-free",
        PY: "sticky-goog-scrollfloater",
        nZ: "zm-editable-toolbar-container"
    };
    z.GF.prototype.Fd = z.hb("FullScreenPlugin");
    z.aI.toggleFullScreen = { Ba: "toggleFullScreen", na: "写作模式", Wa: "tr-icon tr-max", factory: z.wF };
    z.e = z.GF.prototype;
    z.e.ff = z.Ba(z.Kn, { T_: "toggleFullScreen", n_: "enterFullScreen", o_: "exitFullScreen" });
    z.e.D = function() {
        this.ea.dispose();
        z.N(this.h);
        this.J = this.ur = this.Fc = this.Nb = this.h = null;
        z.GF.v.D.call(this)
    };
    z.e.Nx = function() {
        var a = this.J, b = window.document.createElement("div");
        b.id = "zu-distraction-free-editor";
        b.innerHTML = '\x3cdiv class\x3d"header"\x3e\x3cdiv class\x3d"wrapper"\x3e\x3ch1 class\x3d"title"\x3e' +
            a.title +
            '\x3c/h1\x3e\x3ca href\x3d"#" class\x3d"' +
            a.fP +
            '" name\x3d"return"\x3e返回\x3c/a\x3e\x3ca href\x3d"#" class\x3d"' +
            a.VX +
            '" name\x3d"save"\x3e发布\x3c/a\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"toolbar"\x3e\x3cdiv class\x3d"tools"\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"content" class\x3d"grid"\x3e\x3c/div\x3e';
        window.document.body.appendChild(b);
        this.ea.g(z.L("back", b),
            "click",
            function(a) {
                a.preventDefault();
                KF(this)
            });
        this.ea.g(z.L("publish", b),
            "click",
            function(a) {
                a.preventDefault();
                this.dispatchEvent("save") && KF(this)
            });
        this.h = b;
        this.Fc = z.L("content", b);
        this.ur = z.M("div", { className: "toolbar-info" });
        this.J.jl || (this.J.jl = this.G.Ka)
    };
    z.e.Ef = function(a) {
        this.h || this.Nx();
        switch (a) {
        case "enterFullScreen":
            HF(this);
            break;
        case "exitFullScreen":
            KF(this);
            break;
        case "toggleFullScreen":
            z.S.has(window.document.body, this.J.So) ? KF(this) : HF(this)
        }
    };
    z.e.cK = function() {
        z.S.has(window.document.body, this.J.So) ? KF(this) : "writing" === window.location.hash.slice(1) && HF(this)
    };
    z.e.vq = function(a) { 27 === a.keyCode && this.dispatchEvent("shouldExitFullScreenOnEscape") && KF(this) };
    z.e.EL = function(a) { z.S[a ? "add" : "remove"](this.Nb, this.J.PY) };
    z.x("ZH.m", z.MF);
    z.y(z.NF, z.H);
    z.NF.prototype.show = function() {
        this.Bf || (this.Bf = this.hy(), this.Bf.g("hide", this.yR, !1, this));
        this.Bf.F(!0)
    };
    z.NF.prototype.hide = function() { this.Bf && this.Bf.F(!1) };
    z.NF.prototype.Eb = function() { return !!this.Bf && this.Bf.W() };
    z.OF.prototype.La = function(a) {
        this.wj.La(a);
        return this
    };
    z.OF.prototype.Td = function(a, b, c) {
        c = c || z.Wo();
        this.to.set(c, a);
        this.so[c] = b;
        return this
    };
    z.OF.prototype.si = function(a) {
        z.Ag(this.wj.xh(), a);
        return this
    };
    z.OF.prototype.aa = function(a) {
        this.wj.S().appendChild(a);
        return this
    };
    z.e = z.NF.prototype;
    z.e.wt = z.m(23);
    z.e.BS = function(a) { return (a = this.Do(a)) ? this.dispatchEvent(a) : !1 };
    z.e.fp = function() { return this.dispatchEvent("cancel") };
    z.e.D = function() {
        this.Bf && (this.hide(), this.Bf.dispose(), this.Bf = null);
        z.NF.v.D.call(this)
    };
    z.e.yR = function() { this.dispatchEvent("afterhide") };
    z.y(z.SF, z.iB);
    z.e = z.SF.prototype;
    z.e.ff = function(a) { return a == this.OP };
    z.e.execCommand = function(a, b) { return this.Ef.apply(this, arguments) };
    z.e.iH = function() { return this.Na };
    z.e.Ef = function(a, b) {
        this.oL || UF(this);
        this.Na || (this.Na = this.gy(z.Ie(this.G.El), b));
        var c = z.LB(this.G);
        this.jL = kB(this);
        this.sL = c && new z.iv(c);
        Iu(this.G.rb.eb());
        z.ld(this.Na, "afterhide", this.ep, !1, this);
        this.G.Eh = !0;
        this.Na.show();
        this.dispatchEvent("dialogOpened");
        z.MB(this.G);
        return !0
    };
    z.e.ep = function() {
        this.G.Eh = !1;
        z.TF(this);
        this.jL();
        this.oL || UF(this);
        this.dispatchEvent("dialogClosed");
        z.MB(this.G);
        this.G.Us.selectionchange = (0, z.I)()
    };
    z.e.D = function() {
        UF(this);
        z.SF.v.D.call(this)
    };
    z.e.oL = !1;
    z.e.CA = !1;
    z.y(VF, z.NF);
    z.y(WF, z.Lc);
    z.e = VF.prototype;
    z.e.template = (0, z
        .Zv
    )('\x3cdiv class\x3d"zm-img-uploader"\x3e\x3ciframe src\x3d"about:blank" name\x3d"av_up_frame" style\x3d"position: absolute; height: 0; width: 0; left: -9000px; "\x3e\x3c/iframe\x3e\x3cform class\x3d"zg-clear" target\x3d"av_up_frame" method\x3d"POST" enctype\x3d"multipart/form-data" action\x3d"\x3c%\x3d uploadURL %\x3e"\x3e\x3cdiv class\x3d"tab-content selected \x3c% if (canStylize) { %\x3einline\x3c% } %\x3e"\x3e\x3c% if (canStylize) { %\x3e\x3cinput type\x3d"file" name\x3d"upload_file" style\x3d"opacity:0;height:0;width:0;font-size:0;position:absolute;"\x3e\x3ca href\x3d"javascript:;" class\x3d"browser zg-btn-blue"\x3e选择图片\x3c/a\x3e\x3c% } else { %\x3e\x3cinput type\x3d"file" name\x3d"upload_file"\x3e\x3c% } %\x3e\x3c/div\x3e\x3cspan style\x3d"display: none; " class\x3d"zm-img-uploader-loading"\x3e正在上传\x3c/span\x3e\x3cspan style\x3d"display: none; " class\x3d"zm-img-uploader-error"\x3e上传图片失败，请稍后重试\x3c/span\x3e\x3c/form\x3e\x3cdiv class\x3d"zg-gray"\x3e请不要上传与回答问题无关的图片，详细请看 \x3ca href\x3d"/question/20064580" target\x3d"_blank"\x3e知乎图片使用规范\x3c/a\x3e\x3c/div\x3e\x3cdiv class\x3d"zm-command"\x3e\x3ca class\x3d"cancel" href\x3d"javascript:;"\x3e取消\x3c/a\x3e\x3c/div\x3e\x3c/div\x3e');
    z.e.hy = function() {
        var a = z.Ye(this.template({ uploadURL: this.ll, canStylize: this.xP }));
        z.Db({
                form: "form",
                Nh: ".zm-img-uploader-loading",
                Df: ".zm-img-uploader-error",
                ot: "input[type\x3dfile]",
                nF: ".browser",
                Qx: ".cancel"
            },
            function(b, d) { this[d] = (0, window.$)(b, a).get(0) },
            this);
        this.U.g(z.U, "iframe_data", this.kx).g(this.ot, "change", this.ZW).g(this.Qx,
            "click",
            function() {
                this.fp();
                this.hide()
            });
        this.MF = a;
        this.nF && this.U.g(this.nF, "click", function() { this.ot.click() });
        var b = new z.OF(this);
        b.La("插入图片").aa(this.MF);
        b = z.RF(b);
        z.Rh(b, null);
        return b
    };
    z.e.ZW = function() {
        this.ot.value &&
        (Dr(this.ot.value)
            ? (z.P(this.Nh, !0), z.P(this.Df, !1), this.form.submit())
            : (z.P(this.Nh, !1), this.Df.innerHTML = "图片不是 .jpg 或 .png 格式无法上传", z.P(this.Df, !0)))
    };
    z.e.kx = function(a) {
        z.P(this.Nh, !1);
        this.nj(a.Xf)
    };
    z.e.nj = function(a) {
        a && !a.r
            ? (this.dispatchEvent(this.Do(a.msg)), this.hide())
            : (a = a.msg, z.P(this.Nh, !1), this.Df.innerHTML = a, z.P(this.Df, !0))
    };
    z.e.Do = function(a) { return new WF(a) };
    z.e.D = function() {
        this.U.dispose();
        this.U = null;
        VF.v.D.call(this)
    };
    z.y(z.XF, z.SF);
    z.e = z.XF.prototype;
    z.e.Fd = z.hb("ImageDialogPlugin");
    z.e.Ef = function(a, b) {
        var c = this.G;
        return c.Rf || (c.wg(), c.Rf) ? z.XF.v.Ef.call(this, a, b) : !1
    };
    z.e.pk = function(a) {
        if (a && "mouseup" === a.type) {
            var b = a.target;
            b &&
                "IMG" === b.nodeName &&
                (a = z.Ou(b), a || (a = window.document.createElement("br"), z.df(a, b)), z.Xu(a))
        }
    };
    z.e.ep = function(a) { z.XF.v.ep.call(this, a) };
    z.e.gy = function(a) {
        a = new VF(a);
        this.U.g(a, "ok", this.jp).g(a, "cancel", this.Dz);
        return a
    };
    z.e.D = function() {
        z.XF.v.D.call(this);
        this.U.dispose()
    };
    z.e.jp = function(a) {
        z.TF(this);
        var b = z.jB(this), c;
        c = a.wK
            ? b.B("IMG",
                { "class": "origin_image zh-lightbox-thumb", "data-original": a.wK, title: "点击查看原图", src: a.Hm })
            : b.B("IMG", { "class": "content_image", src: a.Hm });
        a.UK && c.setAttribute("data-rawwidth", a.UK);
        a.TK && c.setAttribute("data-rawheight", a.TK);
        a = z.LB(this.G);
        if (z.gv(a)) a.fj(c), z.C || (z.Yu(c, !1), b.eb().focus()), z.MB(this.G), this.G.Cf();
        else return null;
        this.U.removeAll()
    };
    z.e.Dz = function() { this.U.removeAll() };
}).call(this, __z_z__);
