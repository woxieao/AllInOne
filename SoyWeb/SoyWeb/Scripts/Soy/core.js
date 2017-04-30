(function () {
    window.NEJ = window.NEJ || {};
    NEJ.O = {};
    NEJ.R = [];
    NEJ.F = function () {
        return !1
    }
        ;
    NEJ.P = function (Fk) {
        if (!Fk || !Fk.length)
            return null;
        var Xd = window;
        for (var a = Fk.split("."), l = a.length, i = a[0] == "window" ? 1 : 0; i < l; Xd = Xd[a[i]] = Xd[a[i]] || {},
            i++)
            ;
        return Xd
    }
        ;
    NEJ.Q = function (dg, Fk) {
        dg = dg || NEJ.O;
        var cF = Fk.split(".");
        for (var i = 0, l = cF.length; i < l; i++) {
            dg = dg[cF[i]];
            if (!dg)
                break
        }
        return dg
    }
        ;
    NEJ.C = function () {
        var bxW = function () {
            return NEJ.O.toString.call(arguments[0]) != "[object Function]"
        };
        var btR = function (bF, cI) {
            for (var x in cI)
                if (bF == cI[x])
                    return x;
            return null
        };
        var bsF = {
            dG: 0,
            cv: 1,
            cR: 2,
            di: 3,
            cX: 4,
            gF: 5,
            mf: 6,
            fJ: 7
        }
            , vX = {
                dM: 0,
                cw: 1,
                cW: 2,
                dv: 3,
                dc: 4,
                ik: 5,
                mZ: 6,
                hr: 7
            };
        return function () {
            var gJ = function () {
                this.bub();
                return this.dG.apply(this, arguments)
            };
            gJ.prototype.bub = NEJ.F;
            gJ.prototype.dG = NEJ.F;
            gJ.bT = function (Dd, bAj) {
                if (bxW(Dd))
                    return;
                if (bAj == null || !!bAj)
                    NEJ.X(this, Dd, bxW);
                this.bPi = Dd;
                this.dC = Dd.prototype;
                var cS = function () { };
                cS.prototype = Dd.prototype;
                this.prototype = new cS;
                var FE = this.prototype;
                FE.constructor = this;
                var gd;
                for (var x in bsF) {
                    gd = btR(bsF[x], vX);
                    if (!gd || !this.dC[x])
                        continue;
                    FE[x] = function (bY) {
                        return function () {
                            this[bY].apply(this, arguments)
                        }
                    }(gd)
                }
                var Es = {};
                for (var x in vX) {
                    gd = btR(vX[x], bsF);
                    if (!gd || !this.dC[gd])
                        continue;
                    Es[gd] = Dd;
                    FE[x] = function (bY) {
                        return function () {
                            var bo, cS = this.bsr[bY], UD = cS.prototype[bY];
                            this.bsr[bY] = cS.bPi || Dd;
                            if (!!UD)
                                bo = UD.apply(this, arguments);
                            this.bsr[bY] = Dd;
                            return bo
                        }
                    }(gd)
                }
                FE.bub = function () {
                    this.bsr = NEJ.X({}, Es)
                }
                    ;
                FE.cxz = FE.dM;
                return FE
            }
                ;
            return gJ
        }
    }();
    NEJ.X = function (hD, cZ, fm) {
        if (!hD || !cZ)
            return hD;
        fm = fm || NEJ.F;
        for (var x in cZ) {
            if (cZ.hasOwnProperty(x) && !fm(cZ[x], x))
                hD[x] = cZ[x]
        }
        return hD
    }
        ;
    NEJ.EX = function (hD, cZ) {
        if (!hD || !cZ)
            return hD;
        for (var x in hD) {
            if (hD.hasOwnProperty(x) && cZ[x] != null)
                hD[x] = cZ[x]
        }
        return hD
    }
        ;
    var Hr = Function.prototype;
    Hr.fz = function (qc, bsg) {
        var f = NEJ.F
            , bsg = bsg || f
            , qc = qc || f
            , fR = this;
        return function () {
            var be = {
                args: NEJ.R.slice.call(arguments, 0)
            };
            qc(be);
            if (!be.stopped) {
                be.value = fR.apply(this, be.args);
                bsg(be)
            }
            return be.value
        }
    }
        ;
    Hr.bi = function () {
        var cn = arguments
            , hD = arguments[0]
            , bsc = this;
        return function () {
            var xN = NEJ.R.slice.call(cn, 1);
            NEJ.R.push.apply(xN, arguments);
            return bsc.apply(hD || window, xN)
        }
    }
        ;
    Hr.fE = function () {
        var cn = arguments
            , hD = NEJ.R.shift.call(cn)
            , bsc = this;
        return function () {
            NEJ.R.push.apply(arguments, cn);
            return bsc.apply(hD || window, arguments)
        }
    }
        ;
    var Hr = String.prototype;
    if (!Hr.trim) {
        Hr.trim = function () {
            var ej = /(?:^\s+)|(?:\s+$)/g;
            return function () {
                return this.replace(ej, "")
            }
        }()
    }
    if (!window.MWF)
        window.MWF = NEJ;
    if (!window.mwf)
        window.mwf = NEJ.P("nej");
    if (!window.console) {
        NEJ.P("console").log = NEJ.F;
        NEJ.P("console").error = NEJ.F
    }
    var lt, gt, amp, nbsp, quot, apos, copy, reg
})();
(function () {
    var bd = NEJ.P
        , cg = NEJ.O
        , bR = bd("nej.p")
        , UO = window.navigator.platform
        , wv = window.navigator.userAgent;
    var lV = {
        mac: UO,
        win: UO,
        linux: UO,
        ipad: wv,
        ipod: wv,
        iphone: UO,
        android: wv
    };
    bR.Mk = lV;
    for (var x in lV)
        lV[x] = (new RegExp(x, "i")).test(lV[x]);
    lV.ios = lV.ipad || lV.iphone || lV.ipod;
    lV.tablet = lV.ipad;
    lV.desktop = lV.mac || lV.win || lV.linux && !lV.android;
    var jx = {
        engine: "unknow",
        release: "unknow",
        browser: "unknow",
        version: "unknow",
        prefix: {
            css: "",
            pro: "",
            clz: ""
        }
    };
    bR.ei = jx;
    if (/msie\s+(.*?);/i.test(wv) || /trident\/.+rv:([\d\.]+)/i.test(wv)) {
        jx.engine = "trident";
        jx.browser = "ie";
        jx.version = RegExp.$1;
        jx.prefix = {
            css: "ms",
            pro: "ms",
            clz: "MS",
            evt: "MS"
        };
        var rU = {
            6: "2.0",
            7: "3.0",
            8: "4.0",
            9: "5.0",
            10: "6.0",
            11: "7.0"
        };
        jx.release = rU[document.documentMode] || rU[parseInt(jx.version)]
    } else if (/webkit\/?([\d.]+?)(?=\s|$)/i.test(wv)) {
        jx.engine = "webkit";
        jx.release = RegExp.$1 || "";
        jx.prefix = {
            css: "webkit",
            pro: "webkit",
            clz: "WebKit"
        }
    } else if (/rv\:(.*?)\)\s+gecko\//i.test(wv)) {
        jx.engine = "gecko";
        jx.release = RegExp.$1 || "";
        jx.browser = "firefox";
        jx.prefix = {
            css: "Moz",
            pro: "moz",
            clz: "Moz"
        };
        if (/firefox\/(.*?)(?=\s|$)/i.test(wv))
            jx.version = RegExp.$1 || ""
    } else if (/presto\/(.*?)\s/i.test(wv)) {
        jx.engine = "presto";
        jx.release = RegExp.$1 || "";
        jx.browser = "opera";
        jx.prefix = {
            css: "O",
            pro: "o",
            clz: "O"
        };
        if (/version\/(.*?)(?=\s|$)/i.test(wv))
            jx.version = RegExp.$1 || ""
    }
    if (jx.browser == "unknow") {
        var rU = ["chrome", "maxthon", "safari"];
        for (var i = 0, l = rU.length, bY; i < l; i++) {
            bY = rU[i] == "safari" ? "version" : rU[i];
            if ((new RegExp(bY + "/(.*?)(?=\\s|$)", "i")).test(wv)) {
                jx.browser = rU[i];
                jx.version = RegExp.$1.trim();
                break
            }
        }
    }
    bR.bBN = {};
    var WH = jx.engine != "trident";
    bR.ov = {
        gecko: jx.engine != "gecko",
        webkit: jx.engine != "webkit",
        presto: jx.engine != "presto",
        trident0: WH || jx.release > "2.0",
        trident1: WH || jx.release < "6.0",
        trident2: WH || jx.release > "3.0",
        trident: WH || jx.release >= "6.0"
    }
})();
(function () {
    var ks = NEJ.P("nej.c")
        , bW = {};
    var brN = function () {
        var ej = /^([\w]+?:\/\/.*?(?=\/|$))/i;
        return function (ce) {
            ce = ce || "";
            if (ej.test(ce))
                return RegExp.$1;
            return location.protocol + "//" + location.host
        }
    }();
    var No = function () {
        var bDs = function (bk, cI) {
            if (!bk || !bk.length)
                return;
            for (var i = 0, l = bk.length, mF; i < l; i++) {
                mF = bk[i];
                if (mF.indexOf("://") > 0)
                    cI[brN(mF)] = mF
            }
        };
        var cl = {
            portrait: {
                name: "portrait",
                dft: "portrait/"
            },
            "ajax.swf": {
                name: "ajax",
                dft: "nej_proxy_flash.swf"
            },
            "chart.swf": {
                name: "chart",
                dft: "nej_flex_chart.swf"
            },
            "audio.swf": {
                name: "audio",
                dft: "nej_player_audio.swf"
            },
            "video.swf": {
                name: "video",
                dft: "nej_player_video.swf"
            },
            "clipboard.swf": {
                name: "clipboard",
                dft: "nej_clipboard.swf"
            }
        };
        return function (cZ) {
            ks.Ht("root", cZ.root || "/res/");
            var brE, gZ = ks.bD("root");
            for (var x in cl) {
                brE = cl[x];
                ks.Ht(x, cZ[brE.name] || gZ + brE.dft)
            }
            var CL = cZ.p_csrf;
            if (CL == !0) {
                CL = {
                    cookie: "AntiCSRF",
                    param: "AntiCSRF"
                }
            }
            ks.Ht("csrf", NEJ.EX({
                cookie: "",
                param: ""
            }, CL));
            bW.frames = {};
            bDs(cZ.p_frame, bW.frames);
            bW.flashs = {};
            bDs(cZ.p_flash, bW.flashs)
        }
    }();
    ks.Ht = function (bP, bF) {
        bW[bP] = bF
    }
        ;
    ks.bD = function (bP) {
        return bW[bP]
    }
        ;
    ks.bPr = function (ce) {
        var xC = brN(ce);
        return bW.frames[xC] || xC + "/res/nej_proxy_frame.html"
    }
        ;
    ks.bQe = function (ce) {
        return bW.flashs[brN(ce)]
    }
        ;
    No(window.NEJ_CONF || NEJ.O)
})();
(function () {
    var bd = NEJ.P
        , bR = bd("nej.p")
        , ks = bd("nej.c")
        , cZ = window.NEJ_CONF || NEJ.O;
    if (bR.ov.trident)
        return;
    ks.Ht("storage.swf", cZ.storage || ks.bD("root") + "nej_storage.swf");
    if (bR.ei.release < "4.0") {
        ks.Ht("blank.png", cZ.blank || ks.bD("root") + "nej_blank.gif")
    }
    var bk = cZ.xdr
        , hx = /^(https?:\/\/.*?)(?=\/|$)/i
        , kZ = /[\/?=&]/i;
    var byO = function (ce) {
        return (hx.test(ce) ? RegExp.$1 : "").toLowerCase()
    };
    if (!!bk && !!bk.length)
        for (var i = bk.length - 1, ce, bP; i >= 0; i--) {
            ce = bk[i];
            bP = byO(ce);
            if (!!bP)
                ks.Ht(bP, ce)
        }
    ks.cxu = function (ce) {
        var bP = byO(ce);
        if (!bP) {
            if (kZ.test(ce)) {
                bP = location.protocol + "//" + location.host
            } else if (ce.indexOf("://") < 0) {
                bP = location.protocol + "//" + ce
            } else {
                bP = ce
            }
        }
        return ks.bD(bP) || bP + "/res/nej_xdomain.html"
    }
})();
(function () {
    var bd = NEJ.P
        , ks = bd("nej.c")
        , bR = bd("nej.g")
        , hw = +(new Date);
    bR.cxt = 1e4 - hw;
    bR.brz = 10001 - hw;
    bR.cxr = 10002 - hw;
    bR.bEF = 10003 - hw;
    bR.bQi = 10004 - hw;
    bR.cxp = 10005 - hw;
    bR.brv = 10006 - hw;
    bR.bQq = 10007 - hw;
    bR.Ap = "Content-Type";
    bR.cxl = "text/plain";
    bR.Ge = "multipart/form-data";
    bR.bQw = "application/x-www-form-urlencoded";
    bR.brp = ks.bD("blank.png") || "data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
})();
(function () {
    var bd = NEJ.P
        , gI = NEJ.R
        , bR = bd("nej.p")
        , bb = bd("nej.e")
        , bj = bd("nej.v")
        , bm = bd("nej.u")
        , cj = bd("nej.h");
    var mM = bR.ei.prefix
        , bDu = bR.bBN
        , bQG = {
            scale: "scale({x|1},{y|1})",
            rotate: "rotate({a})",
            translate: "translate({x},{y})"
        }
        , bQO = {
            scale: "scale3d({x|1},{y|1},{z|1})",
            rotate: "rotate3d({x},{y},{z},{a})",
            translate: "translate3d({x},{y},{z})"
        }
        , OF = {
            transition: !0,
            transform: !0,
            animation: !0,
            keyframes: !0,
            box: !0,
            "box-pack": !0,
            "box-flex": !0,
            marquee: !0,
            "border-radius": !0,
            "user-select": !0
        };
    var No = function () {
        var uJ = cj.bJC();
        bDu.css3d = !!uJ && uJ.m41 != null;
        var ej = /-([a-z])/g;
        for (var x in OF) {
            OF[bJD(x)] = OF[x]
        }
    };
    var bJD = function () {
        var ej = /-([a-z])/g;
        return function (bY) {
            bY = bY || "";
            return bY.replace(ej, function ($1, $2) {
                return $2.toUpperCase()
            })
        }
    }();
    var bJF = function (bY) {
        return (!bDu.css3d ? bQG : bQO)[bY]
    };
    var bLm = function () {
        var ej = /\s+/;
        return function (gJ) {
            gJ = (gJ || "").trim();
            return !!gJ ? gJ.split(ej) : null
        }
    }();
    var VM = function (bM, bw, gJ) {
        bM = bb.bD(bM);
        if (!bM)
            return;
        bm.cr(bLm(gJ), function (fk) {
            bM.classList[bw](fk)
        })
    };
    cj.Hv = function (bk) {
        return gI.slice.call(bk, 0)
    }
        ;
    cj.brk = function (bM) {
        return cj.Hv(bM.children)
    }
        ;
    cj.brj = function (bM, gJ) {
        return cj.Hv(bM.getElementsByClassName(gJ))
    }
        ;
    cj.bri = function (bM, Hy) {
        VM(bM, "add", Hy)
    }
        ;
    cj.brc = function (bM, Hz) {
        VM(bM, "remove", Hz)
    }
        ;
    cj.QL = function (bM, Hz, Hy) {
        VM(bM, "remove", Hz);
        VM(bM, "add", Hy)
    }
        ;
    cj.bqW = function (bM, gJ) {
        bM = bb.bD(bM);
        if (!bM)
            return !1;
        var bk = bM.classList;
        if (!bk || !bk.length)
            return !1;
        return bm.eu(bLm(gJ), function (fk) {
            return bk.contains(fk)
        }) >= 0
    }
        ;
    cj.bqV = function (bM, fk) { }
        ;
    cj.bqU = function (bM) { }
        ;
    cj.bqR = function (hc, oR) {
        hc.selectionEnd = oR.end || 0;
        hc.selectionStart = oR.start || 0;
        hc.focus()
    }
        ;
    cj.bqO = function (hc) {
        return {
            end: hc.selectionEnd,
            start: hc.selectionStart
        }
    }
        ;
    cj.bqN = function () {
        var FC = function (fk, be) {
            var bM = bj.bZ(be);
            if (!bM.value)
                bb.bB(bM, fk)
        };
        var HF = function (fk, be) {
            bb.bC(bj.bZ(be), fk)
        };
        return function (bM, gf, fk) {
            if (gf == 1) {
                bj.bt(bM, "blur", FC.bi(null, fk))
            }
            if (gf == 1 || gf == -1) {
                bj.bt(bM, "focus", HF.bi(null, fk))
            }
        }
    }();
    cj.bqJ = function (bJ) {
        return (new XMLSerializer).serializeToString(bJ) || ""
    }
        ;
    cj.bqI = function (BU) {
        var gZ = (new DOMParser).parseFromString(BU, "text/xml").documentElement;
        return gZ.nodeName == "parsererror" ? null : gZ
    }
        ;
    cj.bqG = function (bM) { }
        ;
    cj.oN = function (bM) {
        return null
    }
        ;
    cj.bqB = function (bM) {
        return null
    }
        ;
    cj.bqA = function (fi) { }
        ;
    cj.bqr = function () {
        var cn = cj.Hv(arguments);
        cn[0] = bb.bD(cn[0]);
        if (!cn[0])
            return null;
        cn[1] = (cn[1] || "").toLowerCase();
        if (!cn[1])
            return null;
        return cn
    }
        ;
    cj.BL = function () {
        var wO = {
            touchstart: "mousedown",
            touchmove: "mousemove",
            touchend: "mouseup"
        }
            , kt = {
                transitionend: "TransitionEnd",
                animationend: "AnimationEnd",
                animationstart: "AnimationStart",
                animationiteration: "AnimationIteration"
            };
        var bQP = function (bw) {
            return (mM.evt || mM.pro) + bw
        };
        return function () {
            var cn = cj.bqr.apply(cj, arguments);
            if (!cn)
                return;
            var VN = kt[cn[1]]
                , WO = wO[cn[1]];
            if (!!VN) {
                cn[4] = cn[1];
                cn[1] = bQP(VN)
            } else if (!!WO) {
                var bY = "on" + cn[1];
                if (!(bY in cn[0])) {
                    cn[4] = cn[1];
                    cn[1] = WO
                }
            }
            return cn
        }
    }();
    cj.bqc = function () {
        var cn = arguments;
        cn[0].addEventListener(cn[1], cn[2], !!cn[3])
    }
        ;
    cj.YH = function () {
        var cn = arguments;
        cn[0].removeEventListener(cn[1], cn[2], !!cn[3])
    }
        ;
    cj.bpR = function (bM, bw, bf) {
        var be = document.createEvent("Event");
        be.initEvent(bw, !0, !0);
        NEJ.X(be, bf);
        bM.dispatchEvent(be)
    }
        ;
    cj.bJC = function () {
        var hx = /\((.*?)\)/
            , kZ = /\s*,\s*/
            , bk = ["m11", "m12", "m21", "m22", "m41", "m42"];
        var YQ = function (uJ) {
            var jT = {};
            if (hx.test(uJ || "")) {
                bm.cr(RegExp.$1.split(kZ), function (bF, bv) {
                    jT[bk[bv]] = bF || ""
                })
            }
            return jT
        };
        return function (uJ) {
            if (!!window.CSSMatrix)
                return new CSSMatrix(uJ);
            var bY = mM.clz + "CSSMatrix";
            if (!!window[bY])
                return new window[bY](uJ || "");
            return YQ(uJ)
        }
    }();
    cj.bvt = function () {
        var ej = /\{(.*?)\}/g;
        return function (bY, cI) {
            cI = cI || o;
            var uc = bJF(bY);
            return !uc ? "" : uc.replace(ej, function ($1, $2) {
                var cF = $2.split("|");
                return cI[cF[0]] || cF[1] || "0"
            })
        }
    }();
    cj.bpI = function (bM, bY, bF) {
        bM.style[cj.bxV(bY)] = bF
    }
        ;
    cj.bxV = function () {
        var ej = /^[a-z]/
            , bpG = mM.css;
        var bRk = function (bY) {
            return bY.replace(ej, function ($1) {
                return bpG + $1.toUpperCase()
            })
        };
        return function (bY) {
            bY = bJD(bY);
            var bRO = cj.bSl(bY, OF);
            return bRO ? bRk(bY) : bY
        }
    }();
    cj.bSl = function () {
        var ej = /^([a-z]+?)[A-Z]/;
        return function (bY, cI) {
            if (!cI[bY]) {
                if (ej.test(bY))
                    bY = RegExp.$1
            }
            return !!cI[bY]
        }
    }();
    cj.bSv = function () {
        var ej = /\$<(.*?)>/gi
            , bpG = "-" + mM.css.toLowerCase() + "-";
        return function (lk) {
            return lk.replace(ej, function ($1, $2) {
                var gw = $2
                    , cF = gw.split("|")
                    , uc = bJF(cF[0]);
                if (!!uc) {
                    return cj.bvt(cF[0], bm.jg(cF[1]))
                }
                return !cj.bSM(gw, OF) ? gw : bpG + gw
            })
        }
    }();
    cj.bSM = function (bY, cI) {
        return !!cI[bY]
    }
        ;
    cj.bpn = function (dw, lk) {
        dw.textContent = lk
    }
        ;
    cj.bpk = function (dw, lk) {
        var zK = dw.sheet
            , cD = zK.cssRules.length;
        zK.insertRule(lk, cD);
        return zK.cssRules[cD]
    }
        ;
    cj.cwZ = function (bM, bf) { }
        ;
    cj.TR = function (TW) {
        return (TW || "").toLowerCase() != "transparent"
    }
        ;
    cj.bSU = function (bM) { }
        ;
    cj.boO = function (bM, bY) {
        if (!!bM.getAttribute)
            return bM.getAttribute(bY);
        return ""
    }
        ;
    cj.Vh = function (gC) {
        bb.dY(gC)
    }
        ;
    No()
})();
(function () {
    var bd = NEJ.P
        , bb = bd("nej.e")
        , bj = bd("nej.v")
        , bR = bd("nej.p")
        , cj = bd("nej.h");
    if (bR.ov.trident0)
        return;
    var hw = +(new Date);
    bW = {};
    cj.bqV = cj.bqV.fz(function (be) {
        be.stopped = !0;
        var cn = be.args
            , bE = bb.mX(cn[0])
            , bP = "hover-" + bE;
        if (!bE || !!bW[bP])
            return;
        bW[bP] = !0;
        bj.bt(bE, "mouseenter", bb.bC.bi(bb, bE, cn[1]));
        bj.bt(bE, "mouseleave", bb.bB.bi(bb, bE, cn[1]))
    });
    cj.bqU = function () {
        var cwX = function () { };
        return cj.bqU.fz(function (be) {
            be.stopped = !0;
            var bM = be.args[0]
                , bE = "fixed-" + bb.mX(bM);
            if (!!bW[bE])
                return;
            var cl = {};
            bW[bE] = cl
        })
    }();
    cj.bqG = cj.bqG.fz(function (be) {
        be.stopped = !0;
        var bM = be.args[0]
            , dw = bM.style
            , buV = bb.rg();
        dw.width = buV.scrollWidth + "px";
        dw.height = buV.scrollHeight + "px"
    });
    cj.oN = cj.oN.fz(function (be) {
        be.stopped = !0;
        var bM = be.args[0]
            , lS = bW[bM.msk];
        if (!lS) {
            bM.msk = hw++;
            lS = bb.ew("iframe");
            lS.style.position = "absolute";
            bW[bM.msk] = lS
        }
        be.value = lS;
        var dw = lS.style;
        dw.top = (parseInt(bb.eE(bM, "top")) || 0) + "px";
        dw.left = (parseInt(bb.eE(bM, "left")) || 0) + "px";
        dw.width = bM.offsetWidth + "px";
        dw.height = bM.offsetHeight + "px";
        bM.insertAdjacentElement("beforeBegin", lS)
    });
    cj.bqB = cj.bqB.fz(function (be) {
        be.stopped = !0;
        var lS = bW[be.args[0].msk];
        if (!!lS)
            bb.oi(lS)
    })
})();
(function () {
    var bd = NEJ.P
        , bR = bd("nej.p")
        , bb = bd("nej.e")
        , cj = bd("nej.h");
    if (bR.ov.trident1)
        return;
    cj.BL = function () {
        var wO = {
            touchcancel: "MSPointerCancel",
            touchstart: "MSPointerDown",
            touchmove: "MSPointerMove",
            touchend: "MSPointerUp"
        };
        return cj.BL.fz(function (be) {
            var cn = cj.bqr.apply(cj, be.args);
            if (!cn) {
                be.stopped = !0;
                return
            }
            var bw = wO[cn[1]];
            if (!!bw && ("on" + bw).toLowerCase() in cn[0]) {
                cn[4] = cn[1];
                cn[1] = bw;
                be.stopped = !0;
                be.value = cn
            }
        })
    }();
    cj.TR = function (TW) {
        return !0
    }
        ;
    cj.Vh = cj.Vh.fz(function (be) {
        be.stopped = !0;
        var gC = be.args[0];
        bb.cf(gC, "display", "none");
        try {
            gC.contentWindow.document.body.innerHTML = "&nbsp;"
        } catch (ex) { }
    })
})();
(function () {
    var bd = NEJ.P
        , cg = NEJ.O
        , bR = bd("nej.p")
        , bb = bd("nej.e")
        , bj = bd("nej.v")
        , bm = bd("nej.u")
        , cj = bd("nej.h")
        , boF = {};
    if (bR.ov.trident)
        return;
    cj.Hv = cj.Hv.fz(function (be) {
        be.stopped = !0;
        var bk = be.args[0];
        if (!bk) {
            be.value = null;
            return
        }
        var bv = 0
            , bo = [];
        while (!!bk[bv]) {
            bo.push(bk[bv++])
        }
        be.value = bo
    });
    cj.brk = cj.brk.fz(function (be) {
        be.stopped = !0;
        var cF = [];
        bm.cr(be.args[0].childNodes, function (bh) {
            if (bh.nodeType == 1)
                cF.push(bh)
        });
        be.value = cF
    });
    cj.brj = cj.brj.fz(function (be) {
        var bM = be.args[0];
        if (!!bM.getElementsByClassName)
            return;
        be.stopped = !0;
        var bo = []
            , boC = new RegExp("(\\s|^)(?:" + be.args[1].replace(/\s+/g, "|") + ")(?=\\s|$)");
        bm.cr(bM.getElementsByTagName("*"), function (bh) {
            if (boC.test(bh.className))
                bo.push(bh)
        });
        be.value = bo
    });
    cj.bqR = cj.bqR.fz(function (be) {
        var hc = be.args[0]
            , oR = be.args[1];
        if (hc.selectionStart == null) {
            be.stopped = !0;
            var dZ = hc.createTextRange();
            dZ.collapse(!0);
            dZ.moveStart("character", oR.start);
            dZ.moveEnd("character", oR.end - oR.start);
            dZ.select();
            hc.focus()
        }
    });
    cj.bqO = cj.bqO.fz(function (be) {
        var hc = be.args[0];
        hc.focus();
        if (hc.selectionStart == null) {
            be.stopped = !0;
            var bCD = document.selection.createRange();
            var bCS = hc.createTextRange();
            bCS.moveToBookmark(bCD.getBookmark());
            var boA = hc.createTextRange();
            boA.collapse(!0);
            boA.setEndPoint("EndToStart", bCS);
            var ko = boA.text.length;
            be.value = {
                start: ko,
                end: ko + bCD.text.length
            }
        }
    });
    cj.bqJ = cj.bqJ.fz(function (be) {
        if (!!window.XMLSerializer)
            return;
        be.stopped = !0;
        var bM = be.args[0];
        be.value = bM.xml != null ? bM.xml : bM.outHTML
    });
    cj.bqI = function () {
        var Pf = ["Msxml2.DOMDocument.6.0", "Msxml2.DOMDocument.3.0"];
        var bTb = function () {
            try {
                for (var i = 0, l = Pf.length; i < l; i++)
                    return new ActiveXObject(Pf[i])
            } catch (ex) {
                return null
            }
        };
        return cj.bqI.fz(function (be) {
            if (!!window.DOMParser)
                return;
            be.stopped = !0;
            var DN = bTb();
            if (!!DN && DN.loadXML(be.args[0]) && !DN.parseError.errorCode)
                be.value = DN.documentElement
        })
    }();
    cj.BL = function () {
        var kt = {
            input: "propertychange",
            load: "readystatechange"
        };
        for (var x in kt)
            boF[kt[x]] = !0;
        var bTo = function (bM, bw) {
            if ("on" + bw in bM)
                return null;
            return kt[bw] || ""
        };
        var bTD = function (bw, fR) {
            var eS = fR;
            switch (bw) {
                case "readystatechange":
                    eS = function (be) {
                        var bM = bj.bZ(be) || this;
                        if (bM.readyState == "loaded" || bM.readyState == "complete") {
                            be.target = bM;
                            fR.call(bM, be)
                        }
                    }
                        ;
                    break;
                case "propertychange":
                    eS = function (be) {
                        var bM = bj.bZ(be) || this;
                        if ("value" in bM && be.propertyName == "value") {
                            be.target = bM;
                            fR.call(bM, be)
                        }
                    }
                        ;
                    break
            }
            return eS
        };
        return cj.BL.fz(function (be) {
            var cn = cj.bqr.apply(cj, be.args);
            if (!cn) {
                be.stopped = !0;
                return
            }
            var bw = bTo(cn[0], cn[1]);
            if (!!bw) {
                be.stopped = !0;
                cn[4] = cn[1];
                cn[1] = bw;
                if (!!cn[2]) {
                    cn[5] = cn[2];
                    cn[2] = bTD(cn[1], cn[2])
                }
                be.value = cn
            }
        }, function (be) {
            var cn = be.value;
            if (!cn[0] || !bm.hF(cn[2]))
                return;
            if (!bm.hF(cn[5]))
                cn[5] = cn[2];
            cn[2] = cn[2].bi(cn[0])
        })
    }();
    cj.bqc = cj.bqc.fz(function (be) {
        var cn = be.args;
        if (!!boF[cn[1]] || !document.addEventListener) {
            be.stopped = !0;
            cn[0].attachEvent("on" + cn[1], cn[2])
        }
    });
    cj.YH = cj.YH.fz(function (be) {
        var cn = be.args;
        if (!!boF[cn[1]] || !document.removeEventListener) {
            be.stopped = !0;
            cn[0].detachEvent("on" + cn[1], cn[2])
        }
    });
    cj.bpR = cj.bpR.fz(function (be) {
        if (!document.createEvent) {
            be.stopped = !0;
            var cn = be.args
                , bGw = document.createEventObject();
            NEJ.X(bGw, cn[2]);
            try {
                cn[0].fireEvent("on" + cn[1], bGw)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
        }
    });
    cj.bpI = cj.bpI.fz(function (be) {
        var cn = be.args
            , bY = cn[1].toLowerCase();
        if (bY == "opacity" && !(bY in document.body.style)) {
            cn[1] = "filter";
            cn[2] = "alpha(opacity=" + cn[2] * 100 + ")"
        }
    });
    cj.bpn = function () {
        var hI = 30;
        return cj.bpn.fz(function (be) {
            var bM = be.args[0];
            if (!bM.styleSheet)
                return;
            be.stopped = !0;
            var lk = be.args[1];
            var bk = document.styleSheets;
            if (bk.length > hI) {
                bM = bk[hI];
                lk = bM.cssText + lk
            } else {
                bM = bM.styleSheet
            }
            bM.cssText = lk
        })
    }();
    cj.bpk = cj.bpk.fz(function (be) {
        var cn = be.args
            , zK = cn[0].sheet;
        if (!!zK)
            return;
        be.stopped = !0;
        var zK = cn[0].styleSheet
            , cD = zK.rules.length
            , cF = cn[1].split(/[\{\}]/);
        zK.addRule(cF[0], cF[1], cD);
        be.value = zK.rules[cD]
    });
    cj.bqN = function () {
        var FC = function (fk, be) {
            bb.bB(bj.bZ(be), fk)
        };
        return cj.bqN.fz(function (be) {
            if (bR.ei.release >= "4.0")
                return;
            var cn = be.args;
            if (cn[1] != 1) {
                bj.bt(cn[0], "blur", FC.bi(null, cn[2]));
                cn[1] = -1
            }
        })
    }();
    cj.TR = function (TW) {
        return !0
    }
        ;
    cj.boO = cj.boO.fz(function (be) {
        var cn = be.args
            , bh = (cn[0].attributes || cg)[cn[1]];
        if (!!bh) {
            be.stopped = !0;
            be.value = bh.value
        }
    }, function (be) {
        var cn = be.args;
        if (cn[1] == "maxlength" && be.value == 2147483647)
            be.value = ""
    });
    if (bR.ei.release < 5) {
        cj.bqA = function () {
            var gL, gC, lj = [], boc = "cb-" + +(new Date), cu = '<script>parent.nej.h["' + boc + '"] = !0;parent.location.hash = decodeURIComponent("#<HASH>");</scr' + "ipt>";
            var bKX = function () {
                gL = window.clearTimeout(gL);
                if (!lj.length)
                    return;
                var fi = lj.shift();
                try {
                    var wV = gC.contentWindow.document;
                    wV.open();
                    wV.write("<head><title>");
                    wV.write(document.title);
                    wV.write("</title>");
                    wV.write(cu.replace("#<HASH>", encodeURIComponent(fi)));
                    wV.write("</head><body></body>");
                    if (location.hostname != document.domain)
                        wV.domain = document.domain;
                    wV.close();
                    cj[boc] = !1
                } catch (ex) {
                    console.log(ex.message || ex);
                    lj.unshift(fi)
                }
                gL = window.setTimeout(bKX, 50)
            };
            return cj.bqA.fz(function (be) {
                be.stopped = !0;
                var fi = be.args[0];
                if (!!cj[boc] || !gC && !fi)
                    return;
                lj.push(fi);
                if (!gC)
                    gC = bb.Yt();
                bKX()
            })
        }()
    }
    try {
        document.execCommand("BackgroundImageCache", !1, !0)
    } catch (e) { }
})();
(function () {
    var bd = NEJ.P
        , bj = bd("nej.v")
        , cj = bd("nej.h")
        , bR = bd("nej.p")
        , YW = bR.bBN;
    if (bR.ov.gecko)
        return;
    var No = function () {
        YW.css3d = YW.css3d || "MozPerspective" in document.body.style;
        if (!document.body.insertAdjacentElement)
            HTMLElement.prototype.insertAdjacentElement = function (jA, bM) {
                if (!jA || !bM)
                    return;
                switch (jA) {
                    case "beforeEnd":
                        this.appendChild(bM);
                        return;
                    case "beforeBegin":
                        this.parentNode.insertBefore(bM, this);
                        return;
                    case "afterBegin":
                        !this.firstChild ? this.appendChild(bM) : this.insertBefore(bM, this.firstChild);
                        return;
                    case "afterEnd":
                        !this.nextSibling ? this.parentNode.appendChild(bM) : this.parentNode.insertBefore(bM, this.nextSibling);
                        return
                }
            }
                ;
        if (!("innerText" in document.body)) {
            HTMLElement.prototype["__defineGetter__"]("innerText", function () {
                return this.textContent
            });
            HTMLElement.prototype["__defineSetter__"]("innerText", function (cu) {
                this.textContent = cu
            })
        }
    };
    cj.BL = function () {
        var hx = /^(?:transitionend|animationend|animationstart|animationiteration)$/i;
        return cj.BL.fz(function (be) {
            var cn = be.args;
            if (hx.test(cn[1] || "")) {
                be.stopped = !0;
                be.value = cn
            }
        })
    }();
    cj.bSU = function () {
        var bUh = function (be) {
            bj.co(be);
            bj.bZ(be).control.click()
        };
        return function (bM) {
            bj.bt(bM, "click", bUh)
        }
    }();
    No()
})();
(function () {
    var bd = NEJ.P
        , bb = bd("nej.e")
        , cj = bd("nej.h");
    var YX = function () {
        var rU = !!document.body.classList;
        return function () {
            return rU
        }
    }();
    var buG = function () {
        var ej = /\s+/g;
        return function (gJ) {
            gJ = (gJ || "").trim();
            return !gJ ? null : new RegExp("(\\s|^)(?:" + gJ.replace(ej, "|") + ")(?=\\s|$)", "g")
        }
    }();
    cj.QL = cj.QL.fz(function (be) {
        if (YX())
            return;
        be.stopped = !0;
        var cn = be.args
            , bM = bb.bD(cn[0]);
        if (!bM || !cn[1] && !cn[2])
            return;
        var gJ = bM.className || "";
        var Hy = " " + (cn[2] || "")
            , Hz = buG((cn[1] || "") + Hy);
        !!Hz && (gJ = gJ.replace(Hz, "$1"));
        bM.className = (gJ + Hy).replace(/\s+/g, " ").trim()
    });
    cj.bri = cj.bri.fz(function (be) {
        if (YX())
            return;
        be.stopped = !0;
        var cn = be.args;
        cj.QL(cn[0], "", cn[1])
    });
    cj.brc = cj.brc.fz(function (be) {
        if (YX())
            return;
        be.stopped = !0;
        var cn = be.args;
        cj.QL(cn[0], cn[1], "")
    });
    cj.bqW = cj.bqW.fz(function (be) {
        if (YX())
            return;
        be.stopped = !0;
        var cn = be.args
            , bM = bb.bD(cn[0]);
        if (!bM) {
            be.value = !1;
            return
        }
        var ej = buG(cn[1]);
        be.value = !ej ? !1 : ej.test(bM.className || "")
    })
})();
(function () {
    var bd = NEJ.P
        , bR = bd("nej.p")
        , cj = bd("nej.h");
    if (bR.ov.webkit)
        return;
    cj.TR = function (TW) {
        return !0
    }
})();
(function () {
    var bd = NEJ.P
        , cj = bd("nej.h")
        , bb = bd("nej.e")
        , bm = bd("nej.u")
        , bj = bd("nej.v")
        , en = bd("nej.x")
        , bW = {};
    var bvn = function (bM) {
        bM = bb.bD(bM);
        if (!bM || !bW[bM.id])
            return;
        var ZB = !0
            , bE = bM.id;
        bm.fD(bW[bE], function () {
            ZB = !1;
            return !0
        });
        if (ZB)
            delete bW[bE]
    };
    bj.bt = en.bt = function () {
        var bUD = function () {
            var cn = cj.BL.apply(cj, arguments);
            if (!cn || !cn[2])
                return;
            var wg = bb.mX(cn[0])
                , pu = bW[wg] || {};
            bW[wg] = pu;
            wg = cn[4] || cn[1];
            var AN = pu[wg] || [];
            pu[wg] = AN;
            AN.push({
                type: cn[1],
                func: cn[2],
                capt: !!cn[3],
                sfun: cn[5] || cn[2]
            });
            return cn.slice(0, 4)
        };
        return function () {
            var cn = bUD.apply(null, arguments);
            if (!!cn)
                cj.bqc.apply(cj, cn);
            return this
        }
    }();
    bj.px = en.px = function () {
        var bUT = function () {
            var xN = arguments
                , wg = bb.mX(xN[0])
                , pu = bW[wg]
                , bw = (xN[1] || "").toLowerCase()
                , be = xN[2];
            if (!pu || !bw || !be)
                return;
            pu = pu[bw];
            if (!pu)
                return;
            var bUV = !!xN[3]
                , bv = bm.eu(pu, function (kt) {
                    return be == kt.sfun && bUV == kt.capt
                });
            if (bv < 0)
                return;
            var kt = pu.splice(bv, 1)[0];
            return !kt ? null : [bb.bD(wg), kt.type, kt.func, kt.capt]
        };
        return function () {
            var cn = bUT.apply(null, arguments);
            if (!!cn) {
                cj.YH.apply(cj, cn);
                bvn(cn[0])
            }
            return this
        }
    }();
    bj.kX = en.kX = function () {
        var bAn = function () {
            var xN = arguments
                , wg = bb.mX(xN[0])
                , pu = bW[wg]
                , AN = (xN[1] || "").toLowerCase();
            if (!pu || !AN)
                return;
            var bM = bb.bD(wg);
            bm.oj(pu[AN], function (kt, bv, bk) {
                cj.YH(bM, kt.type, kt.func, kt.capt);
                bk.splice(bv, 1)
            });
            delete pu[AN]
        };
        var bVe = function (bM) {
            bM = bb.bD(bM);
            if (!bM)
                return;
            var bE = bM.id;
            bm.fD(bW[bE], function (bk, bw) {
                bAn(bE, bw)
            });
            delete bW[bE]
        };
        return function (bM, bw) {
            !bw ? bVe(bM) : bAn(bM, bw);
            bvn(bM);
            return this
        }
    }();
    bj.bZ = function () {
        var bnC;
        var Ir = function (bY, bM) {
            var cF = bY.split(":");
            if (cF.length > 1) {
                if (!bnC)
                    bnC = {
                        c: bb.cN,
                        d: bb.bz,
                        a: bb.jn
                    };
                var It = bnC[cF[0]];
                if (!!It)
                    return !!It(bM, cF[1]);
                bY = cF[1]
            }
            return !!bb.jn(bM, bY) || !!bb.bz(bM, bY) || bb.cN(bM, bY)
        };
        return function (be) {
            if (!be)
                return null;
            var bM = be.target || be.srcElement
                , fm = arguments[1];
            if (!fm)
                return bM;
            if (bm.gO(fm))
                fm = Ir.bi(null, fm);
            if (bm.hF(fm)) {
                while (bM) {
                    if (!!fm(bM))
                        return bM;
                    bM = bM.parentNode
                }
                return null
            }
            return bM
        }
    }();
    bj.co = function (be) {
        bj.tC(be);
        bj.dz(be);
        return this
    }
        ;
    bj.tC = function (be) {
        if (!!be) {
            !!be.stopPropagation ? be.stopPropagation() : be.cancelBubble = !0
        }
        return this
    }
        ;
    bj.dz = function (be) {
        if (!!be) {
            !!be.preventDefault ? be.preventDefault() : be.returnValue = !1
        }
        return this
    }
        ;
    bj.cwM = function () {
        var rJ = !1;
        var bVl = function () {
            if (rJ)
                return;
            rJ = !0;
            bj.bt(document, "click", bVq, !0)
        };
        var bVq = function (be) {
            var bM = bj.bZ(be)
                , bWq = bb.bz(bM, "stopped");
            if (bWq == "true") {
                bj.co(be);
                bb.bz(bM, "stopped", "false")
            }
        };
        return function (be) {
            if (!be)
                return;
            if (be.type == "click") {
                bj.co(be);
                return
            }
            bVl();
            bb.bz(bj.bZ(be), "stopped", "true")
        }
    }();
    bj.nc = function (be) {
        return be.pageX != null ? be.pageX : be.clientX + bb.rg().scrollLeft
    }
        ;
    bj.qv = function (be) {
        return be.pageY != null ? be.pageY : be.clientY + bb.rg().scrollTop
    }
        ;
    bj.bG = en.bG = function (bM, bw, bf) {
        var cn = cj.BL(bM, bw);
        if (!!cn)
            cj.bpR(cn[0], cn[1], bf);
        return this
    }
        ;
    bd("dbg").dumpEV = function () {
        return bW
    }
        ;
    en.isChange = !0
})();
(function () {
    var o = !0
        , w = null;
    (function (B) {
        function v(a) {
            if ("bug-string-char-index" == a)
                return "a" != "a"[0];
            var f, c = "json" == a;
            if (c || "json-stringify" == a || "json-parse" == a) {
                if ("json-stringify" == a || c) {
                    var d = k.stringify
                        , b = "function" == typeof d && l;
                    if (b) {
                        (f = function () {
                            return 1
                        }
                        ).toJSON = f;
                        try {
                            b = "0" === d(0) && "0" === d(new Number) && '""' == d(new String) && d(m) === r && d(r) === r && d() === r && "1" === d(f) && "[1]" == d([f]) && "[null]" == d([r]) && "null" == d(w) && "[null,null,null]" == d([r, m, w]) && '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}' == d({
                                a: [f, o, !1, w, "\0\b\n\f\r\t"]
                            }) && "1" === d(w, f) && "[\n 1,\n 2\n]" == d([1, 2], w, 1) && '"-271821-04-20T00:00:00.000Z"' == d(new Date(-864e13)) && '"+275760-09-13T00:00:00.000Z"' == d(new Date(864e13)) && '"-000001-01-01T00:00:00.000Z"' == d(new Date(-621987552e5)) && '"1969-12-31T23:59:59.999Z"' == d(new Date(-1))
                        } catch (n) {
                            b = !1
                        }
                    }
                    if (!c)
                        return b
                }
                if ("json-parse" == a || c) {
                    a = k.parse;
                    if ("function" == typeof a)
                        try {
                            if (0 === a("0") && !a(!1)) {
                                f = a('{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}');
                                var e = 5 == f.a.length && 1 === f.a[0];
                                if (e) {
                                    try {
                                        e = !a('"\t"')
                                    } catch (g) { }
                                    if (e)
                                        try {
                                            e = 1 !== a("01")
                                        } catch (i) { }
                                }
                            }
                        } catch (O) {
                            e = !1
                        }
                    if (!c)
                        return e
                }
                return b && e
            }
        }
        var m = {}.toString, p, C, r, D = typeof define === "function" && define.amd, k = "object" == typeof exports && exports;
        k || D ? "object" == typeof JSON && JSON ? k ? (k.stringify = JSON.stringify,
            k.parse = JSON.parse) : k = JSON : D && (k = B.JSON = {}) : k = B.JSON || (B.JSON = {});
        var l = new Date(-0xc782b5b800cec);
        try {
            l = -109252 == l.getUTCFullYear() && 0 === l.getUTCMonth() && 1 === l.getUTCDate() && 10 == l.getUTCHours() && 37 == l.getUTCMinutes() && 6 == l.getUTCSeconds() && 708 == l.getUTCMilliseconds()
        } catch (P) { }
        if (!v("json")) {
            var s = v("bug-string-char-index");
            if (!l)
                var t = Math.floor
                    , J = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334]
                    , z = function (a, f) {
                        return J[f] + 365 * (a - 1970) + t((a - 1969 + (f = +(f > 1))) / 4) - t((a - 1901 + f) / 100) + t((a - 1601 + f) / 400)
                    };
            if (!(p = {}.hasOwnProperty))
                p = function (a) {
                    var f = {}, c;
                    if ((f.__proto__ = w,
                        f.__proto__ = {
                            toString: 1
                        },
                        f).toString != m)
                        p = function (a) {
                            var f = this.__proto__
                                , a = a in (this.__proto__ = w,
                                    this);
                            this.__proto__ = f;
                            return a
                        }
                            ;
                    else {
                        c = f.constructor;
                        p = function (a) {
                            var f = (this.constructor || c).prototype;
                            return a in this && !(a in f && this[a] === f[a])
                        }
                    }
                    f = w;
                    return p.call(this, a)
                }
                    ;
            var K = {
                "boolean": 1,
                number: 1,
                string: 1,
                "undefined": 1
            };
            C = function (a, f) {
                var c = 0, b, h, n;
                (b = function () {
                    this.valueOf = 0
                }
                ).prototype.valueOf = 0;
                h = new b;
                for (n in h)
                    p.call(h, n) && c++;
                b = h = w;
                if (c)
                    c = c == 2 ? function (a, f) {
                        var c = {}, b = m.call(a) == "[object Function]", d;
                        for (d in a)
                            !(b && d == "prototype") && !p.call(c, d) && (c[d] = 1) && p.call(a, d) && f(d)
                    }
                        : function (a, f) {
                            var c = m.call(a) == "[object Function]", b, d;
                            for (b in a)
                                !(c && b == "prototype") && p.call(a, b) && !(d = b === "constructor") && f(b);
                            (d || p.call(a, b = "constructor")) && f(b)
                        }
                        ;
                else {
                    h = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"];
                    c = function (a, f) {
                        var c = m.call(a) == "[object Function]", b, d;
                        if (d = !c)
                            if (d = typeof a.constructor != "function") {
                                d = typeof a.hasOwnProperty;
                                d = d == "object" ? !!a.hasOwnProperty : !K[d]
                            }
                        d = d ? a.hasOwnProperty : p;
                        for (b in a)
                            !(c && b == "prototype") && d.call(a, b) && f(b);
                        for (c = h.length; b = h[--c]; d.call(a, b) && f(b))
                            ;
                    }
                }
                c(a, f)
            }
                ;
            if (!v("json-stringify")) {
                var L = {
                    92: "\\\\",
                    34: '\\"',
                    8: "\\b",
                    12: "\\f",
                    10: "\\n",
                    13: "\\r",
                    9: "\\t"
                }
                    , u = function (a, f) {
                        return ("000000" + (f || 0)).slice(-a)
                    }
                    , G = function (a) {
                        var f = '"', b = 0, d = a.length, h = d > 10 && s, n;
                        for (h && (n = a.split("")); b < d; b++) {
                            var e = a.charCodeAt(b);
                            switch (e) {
                                case 8:
                                case 9:
                                case 10:
                                case 12:
                                case 13:
                                case 34:
                                case 92:
                                    f = f + L[e];
                                    break;
                                default:
                                    if (e < 32) {
                                        f = f + ("\\u00" + u(2, e.toString(16)));
                                        break
                                    }
                                    f = f + (h ? n[b] : s ? a.charAt(b) : a[b])
                            }
                        }
                        return f + '"'
                    }
                    , E = function (a, b, c, d, h, n, e) {
                        var g = b[a], i, j, k, l, q, s, v, x, y;
                        try {
                            g = b[a]
                        } catch (A) { }
                        if (typeof g == "object" && g) {
                            i = m.call(g);
                            if (i == "[object Date]" && !p.call(g, "toJSON"))
                                if (g > -1 / 0 && g < 1 / 0) {
                                    if (z) {
                                        k = t(g / 864e5);
                                        for (i = t(k / 365.2425) + 1970 - 1; z(i + 1, 0) <= k; i++)
                                            ;
                                        for (j = t((k - z(i, 0)) / 30.42); z(i, j + 1) <= k; j++)
                                            ;
                                        k = 1 + k - z(i, j);
                                        l = (g % 864e5 + 864e5) % 864e5;
                                        q = t(l / 36e5) % 24;
                                        s = t(l / 6e4) % 60;
                                        v = t(l / 1e3) % 60;
                                        l = l % 1e3
                                    } else {
                                        i = g.getUTCFullYear();
                                        j = g.getUTCMonth();
                                        k = g.getUTCDate();
                                        q = g.getUTCHours();
                                        s = g.getUTCMinutes();
                                        v = g.getUTCSeconds();
                                        l = g.getUTCMilliseconds()
                                    }
                                    g = (i <= 0 || i >= 1e4 ? (i < 0 ? "-" : "+") + u(6, i < 0 ? -i : i) : u(4, i)) + "-" + u(2, j + 1) + "-" + u(2, k) + "T" + u(2, q) + ":" + u(2, s) + ":" + u(2, v) + "." + u(3, l) + "Z"
                                } else
                                    g = w;
                            else if (typeof g.toJSON == "function" && (i != "[object Number]" && i != "[object String]" && i != "[object Array]" || p.call(g, "toJSON")))
                                g = g.toJSON(a)
                        }
                        c && (g = c.call(b, a, g));
                        if (g === w)
                            return "null";
                        i = m.call(g);
                        if (i == "[object Boolean]")
                            return "" + g;
                        if (i == "[object Number]")
                            return g > -1 / 0 && g < 1 / 0 ? "" + g : "null";
                        if (i == "[object String]")
                            return G("" + g);
                        if (typeof g == "object") {
                            for (a = e.length; a--;)
                                if (e[a] === g)
                                    throw TypeError();
                            e.push(g);
                            x = [];
                            b = n;
                            n = n + h;
                            if (i == "[object Array]") {
                                j = 0;
                                for (a = g.length; j < a; y || (y = o),
                                    j++) {
                                    i = E(j, g, c, d, h, n, e);
                                    x.push(i === r ? "null" : i)
                                }
                                a = y ? h ? "[\n" + n + x.join(",\n" + n) + "\n" + b + "]" : "[" + x.join(",") + "]" : "[]"
                            } else {
                                C(d || g, function (a) {
                                    var b = E(a, g, c, d, h, n, e);
                                    b !== r && x.push(G(a) + ":" + (h ? " " : "") + b);
                                    y || (y = o)
                                });
                                a = y ? h ? "{\n" + n + x.join(",\n" + n) + "\n" + b + "}" : "{" + x.join(",") + "}" : "{}"
                            }
                            e.pop();
                            return a
                        }
                    };
                k.stringify = function (a, b, c) {
                    var d, h, j;
                    if (typeof b == "function" || typeof b == "object" && b)
                        if (m.call(b) == "[object Function]")
                            h = b;
                        else if (m.call(b) == "[object Array]") {
                            j = {};
                            for (var e = 0, g = b.length, i; e < g; i = b[e++],
                                (m.call(i) == "[object String]" || m.call(i) == "[object Number]") && (j[i] = 1))
                                ;
                        }
                    if (c)
                        if (m.call(c) == "[object Number]") {
                            if ((c = c - c % 1) > 0) {
                                d = "";
                                for (c > 10 && (c = 10); d.length < c; d = d + " ")
                                    ;
                            }
                        } else
                            m.call(c) == "[object String]" && (d = c.length <= 10 ? c : c.slice(0, 10));
                    return E("", (i = {},
                        i[""] = a,
                        i), h, j, d, "", [])
                }
            }
            if (!v("json-parse")) {
                var M = String.fromCharCode, N = {
                    92: "\\",
                    34: '"',
                    47: "/",
                    98: "\b",
                    116: "\t",
                    110: "\n",
                    102: "\f",
                    114: "\r"
                }, b, A, j = function () {
                    b = A = w;
                    throw SyntaxError()
                }, q = function () {
                    for (var a = A, f = a.length, c, d, h, k, e; b < f;) {
                        e = a.charCodeAt(b);
                        switch (e) {
                            case 9:
                            case 10:
                            case 13:
                            case 32:
                                b++;
                                break;
                            case 123:
                            case 125:
                            case 91:
                            case 93:
                            case 58:
                            case 44:
                                c = s ? a.charAt(b) : a[b];
                                b++;
                                return c;
                            case 34:
                                c = "@";
                                for (b++; b < f;) {
                                    e = a.charCodeAt(b);
                                    if (e < 32)
                                        j();
                                    else if (e == 92) {
                                        e = a.charCodeAt(++b);
                                        switch (e) {
                                            case 92:
                                            case 34:
                                            case 47:
                                            case 98:
                                            case 116:
                                            case 110:
                                            case 102:
                                            case 114:
                                                c = c + N[e];
                                                b++;
                                                break;
                                            case 117:
                                                d = ++b;
                                                for (h = b + 4; b < h; b++) {
                                                    e = a.charCodeAt(b);
                                                    e >= 48 && e <= 57 || e >= 97 && e <= 102 || e >= 65 && e <= 70 || j()
                                                }
                                                c = c + M("0x" + a.slice(d, b));
                                                break;
                                            default:
                                                j()
                                        }
                                    } else {
                                        if (e == 34)
                                            break;
                                        e = a.charCodeAt(b);
                                        for (d = b; e >= 32 && e != 92 && e != 34;)
                                            e = a.charCodeAt(++b);
                                        c = c + a.slice(d, b)
                                    }
                                }
                                if (a.charCodeAt(b) == 34) {
                                    b++;
                                    return c
                                }
                                j();
                            default:
                                d = b;
                                if (e == 45) {
                                    k = o;
                                    e = a.charCodeAt(++b)
                                }
                                if (e >= 48 && e <= 57) {
                                    for (e == 48 && (e = a.charCodeAt(b + 1),
                                        e >= 48 && e <= 57) && j(); b < f && (e = a.charCodeAt(b),
                                            e >= 48 && e <= 57); b++)
                                        ;
                                    if (a.charCodeAt(b) == 46) {
                                        for (h = ++b; h < f && (e = a.charCodeAt(h),
                                            e >= 48 && e <= 57); h++)
                                            ;
                                        h == b && j();
                                        b = h
                                    }
                                    e = a.charCodeAt(b);
                                    if (e == 101 || e == 69) {
                                        e = a.charCodeAt(++b);
                                        (e == 43 || e == 45) && b++;
                                        for (h = b; h < f && (e = a.charCodeAt(h),
                                            e >= 48 && e <= 57); h++)
                                            ;
                                        h == b && j();
                                        b = h
                                    }
                                    return +a.slice(d, b)
                                }
                                k && j();
                                if (a.slice(b, b + 4) == "true") {
                                    b = b + 4;
                                    return o
                                }
                                if (a.slice(b, b + 5) == "false") {
                                    b = b + 5;
                                    return false
                                }
                                if (a.slice(b, b + 4) == "null") {
                                    b = b + 4;
                                    return w
                                }
                                j()
                        }
                    }
                    return "$"
                }, F = function (a) {
                    var b, c;
                    a == "$" && j();
                    if (typeof a == "string") {
                        if ((s ? a.charAt(0) : a[0]) == "@")
                            return a.slice(1);
                        if (a == "[") {
                            for (b = []; ; c || (c = o)) {
                                a = q();
                                if (a == "]")
                                    break;
                                if (c)
                                    if (a == ",") {
                                        a = q();
                                        a == "]" && j()
                                    } else
                                        j();
                                a == "," && j();
                                b.push(F(a))
                            }
                            return b
                        }
                        if (a == "{") {
                            for (b = {}; ; c || (c = o)) {
                                a = q();
                                if (a == "}")
                                    break;
                                if (c)
                                    if (a == ",") {
                                        a = q();
                                        a == "}" && j()
                                    } else
                                        j();
                                (a == "," || typeof a != "string" || (s ? a.charAt(0) : a[0]) != "@" || q() != ":") && j();
                                b[a.slice(1)] = F(q())
                            }
                            return b
                        }
                        j()
                    }
                    return a
                }, I = function (a, b, c) {
                    c = H(a, b, c);
                    c === r ? delete a[b] : a[b] = c
                }, H = function (a, b, c) {
                    var d = a[b], h;
                    if (typeof d == "object" && d)
                        if (m.call(d) == "[object Array]")
                            for (h = d.length; h--;)
                                I(d, h, c);
                        else
                            C(d, function (a) {
                                I(d, a, c)
                            });
                    return c.call(a, b, d)
                };
                k.parse = function (a, f) {
                    var c, d;
                    b = 0;
                    A = "" + a;
                    c = F(q());
                    q() != "$" && j();
                    b = A = w;
                    return f && m.call(f) == "[object Function]" ? H((d = {},
                        d[""] = c,
                        d), "", f) : c
                }
            }
        }
        D && define(function () {
            return k
        })
    })(this)
})();
(function () {
    var bd = NEJ.P
        , bR = bd("nej.p");
    if (bR.ov.trident0)
        return;
    JSON.parse = JSON.parse.fz(function (be) {
        var ee = be.args[0] || "";
        if (ee.length >= 5e5) {
            be.stopped = !0;
            be.value = eval("(" + ee + ")")
        }
    })
})();
(function () {
    var bd = NEJ.P, cg = NEJ.O, cz = NEJ.F, fu = bd("nej.g"), bb = bd("nej.e"), bm = bd("nej.u"), bj = bd("nej.v"), cj = bd("nej.h"), en = bd("nej.x"), Iz, bnc = {}, bW = document.createDocumentFragment();
    bb.mX = en.mX = function (bM) {
        bM = bb.bD(bM);
        if (!bM)
            return;
        var bE = !!bM.id ? bM.id : "auto-id-" + bm.bmZ(16);
        bM.id = bE;
        if (bb.bD(bE) != bM)
            bnc[bE] = bM;
        return bE
    }
        ;
    bb.bD = en.bD = function (bM) {
        var bh = bnc["" + bM];
        if (!!bh)
            return bh;
        if (!bm.gO(bM) && !bm.wD(bM))
            return bM;
        return document.getElementById(bM)
    }
        ;
    bb.ek = en.ek = function (bM, fk) {
        bM = bb.bD(bM);
        if (!bM)
            return null;
        var bk = cj.brk(bM);
        if (!!fk)
            bm.oj(bk, function (bh, bv) {
                if (!bb.cN(bh, fk))
                    bk.splice(bv, 1)
            });
        return bk
    }
        ;
    bb.bN = en.bN = function (bM, gJ) {
        bM = bb.bD(bM);
        return !bM ? null : cj.brj(bM, gJ.trim())
    }
        ;
    bb.buB = en.buB = function (bM) {
        bM = bb.bD(bM);
        if (!!bM) {
            bM = bM.parentNode;
            while (!!bM) {
                if (bM.scrollHeight > bM.clientHeight)
                    break;
                bM = bM.parentNode
            }
            if (!!bM)
                return bM
        }
        var pu = document.body.scrollHeight
            , AN = document.documentElement.scrollHeight;
        return AN >= pu ? document.documentElement : document.body
    }
        ;
    bb.rg = function () {
        var buF = function (bk) {
            var bo = 0;
            bm.cr(bk, function (il) {
                if (!il)
                    return;
                if (!bo) {
                    bo = il
                } else {
                    bo = Math.min(bo, il)
                }
            });
            return bo
        };
        return function (wV) {
            var buS = wV || document
                , Aw = buS.body
                , BO = buS.documentElement
                , bo = {
                    scrollTop: Math.max(Aw.scrollTop, BO.scrollTop),
                    scrollLeft: Math.max(Aw.scrollLeft, BO.scrollLeft),
                    clientWidth: buF([Aw.clientWidth, Aw.offsetWidth, BO.clientWidth, BO.offsetWidth]),
                    clientHeight: buF([Aw.clientHeight, Aw.offsetHeight, BO.clientHeight, BO.offsetHeight])
                };
            bo.scrollWidth = Math.max(bo.clientWidth, Aw.scrollWidth, BO.scrollWidth);
            bo.scrollHeight = Math.max(bo.clientHeight, Aw.scrollHeight, BO.scrollHeight);
            return bo
        }
    }();
    bb.cwG = function (hI, pQ) {
        var bo = NEJ.X({}, pQ)
            , bwn = hI.width / hI.height
            , TT = pQ.width / pQ.height;
        if (bwn > TT && pQ.height > hI.height) {
            bo.height = hI.height;
            bo.width = bo.height * TT
        }
        if (bwn < TT && pQ.width > hI.width) {
            bo.width = hI.width;
            bo.height = bo.width / TT
        }
        return bo
    }
        ;
    bb.cwF = function () {
        var ej = /\s+/;
        var vO = {
            left: function () {
                return 0
            },
            center: function (ij, pQ) {
                return (ij.width - pQ.width) / 2
            },
            right: function (ij, pQ) {
                return ij.width - pQ.width
            },
            top: function () {
                return 0
            },
            middle: function (ij, pQ) {
                return (ij.height - pQ.height) / 2
            },
            bottom: function (ij, pQ) {
                return ij.height - pQ.height
            }
        };
        return function (ij, pQ, oO) {
            var bo = {}
                , cF = (oO || "").split(ej)
                , hK = vO[cF[1]] || vO.middle
                , ht = vO[cF[0]] || vO.center;
            bo.top = hK(ij, pQ);
            bo.left = ht(ij, pQ);
            return bo
        }
    }();
    bb.uo = en.uo = function (bM, fk) {
        cj.bqV(bM, fk || bb.bz(bM, "hover") || "js-hover");
        return this
    }
        ;
    bb.IF = en.IF = function (bM) {
        bM = bb.bD(bM);
        if (!bM)
            return;
        cj.bqU(bM)
    }
        ;
    bb.bWJ = en.bWJ = function () {
        var bW = {}
            , bAA = 2;
        var bXg = function (bE, fk, be) {
            bW[bE] = [bj.nc(be), bj.qv(be)];
            bb.bC(bE, fk)
        };
        var bXE = function (bE, fk, be) {
            var cQ = bW[bE];
            if (!bm.fU(cQ))
                return;
            var bXI = Math.abs(bj.nc(be) - cQ[0])
                , bXK = Math.abs(bj.qv(be) - cQ[1]);
            if (bXI > bAA || bXK > bAA)
                bmK(bE, fk)
        };
        var bmK = function (bE, fk) {
            if (bm.fU(bW[bE])) {
                bW[bE] = -1;
                bb.bB(bE, fk)
            }
        };
        return function (bM, fk) {
            var bE = bb.mX(bM);
            if (!bE || bW[bE] != null)
                return;
            bW[bE] = -1;
            fk = fk || bb.bz(bE, "highlight") || "js-highlight";
            bj.bt(bE, "touchstart", bXg.bi(null, bE, fk));
            bj.bt(document, "touchmove", bXE.bi(null, bE, fk));
            bj.bt(document, "touchend", bmK.bi(null, bE, fk));
            bj.bt(document, "touchcancel", bmK.bi(null, bE, fk))
        }
    }();
    bb.Az = en.Az = function () {
        var bXR = function (bE, fk, bYf) {
            var bM = bb.bD(bE)
                , be = {
                    clazz: fk,
                    target: bM
                };
            if (bb.cN(bM, fk)) {
                be.toggled = !1;
                bb.bB(bM, fk)
            } else {
                be.toggled = !0;
                bb.bC(bM, fk)
            }
            bYf.call(null, be)
        };
        return function (bM, bf) {
            bM = bb.bD(bM);
            if (!!bM) {
                var jT = {
                    ontoggle: cz,
                    clazz: "js-toggle",
                    element: bM.parentNode
                };
                if (bm.gO(bf)) {
                    var bh = bb.bD(bf);
                    !!bh ? jT.element = bh : jT.clazz = bf
                } else {
                    NEJ.EX(jT, bf);
                    jT.element = bb.bD(jT.element)
                }
                var bE = bb.mX(jT.element);
                bj.bt(bM, "click", bXR.bi(null, bE, jT.clazz, jT.ontoggle || cz))
            }
            return this
        }
    }();
    bb.nu = en.nu = function (bM, bf) {
        bM = bb.bD(bM);
        if (!bM)
            return;
        var gf = 0
            , fk = "js-focus";
        if (bm.wD(bf)) {
            gf = bf
        } else if (bm.gO(bf)) {
            fk = bf
        } else if (bm.mK(bf)) {
            gf = bf.mode || gf;
            fk = bf.clazz || fk
        }
        var bF = parseInt(bb.bz(bM, "mode"));
        if (!isNaN(bF))
            gf = bF;
        bF = bb.bz(bM, "focus");
        if (!!bF)
            fk = bF;
        cj.bqN(bM, gf, fk);
        return this
    }
        ;
    bb.ew = function () {
        var cI = {
            a: {
                href: "#",
                hideFocus: !0
            },
            style: {
                type: "text/css"
            },
            link: {
                type: "text/css",
                rel: "stylesheet"
            },
            iframe: {
                frameBorder: 0
            },
            script: {
                defer: !0,
                type: "text/javascript"
            }
        };
        return function (gA, gJ, cS) {
            var bM = document.createElement(gA);
            NEJ.X(bM, cI[gA.toLowerCase()]);
            if (!!gJ)
                bM.className = gJ;
            cS = bb.bD(cS);
            if (!!cS)
                cS.appendChild(bM);
            return bM
        }
    }();
    bb.Yt = function () {
        var bYk = function () {
            if (location.hostname == document.domain)
                return "about:blank";
            return 'javascript:(function(){document.open();document.domain="' + document.domain + '";document.close();})();'
        };
        var bYu = function (bY) {
            bY = bY.trim();
            if (!bY)
                return bb.ew("iframe");
            var gC;
            try {
                gC = document.createElement('<iframe name="' + bY + '"></iframe>');
                gC.frameBorder = 0
            } catch (e) {
                gC = bb.ew("iframe");
                gC.name = bY
            }
            return gC
        };
        return function (bf) {
            bf = bf || cg;
            var gC = bYu(bf.name || "");
            if (!bf.visible)
                gC.style.display = "none";
            if (bm.hF(bf.onload))
                bj.bt(gC, "load", function (be) {
                    if (!gC.src)
                        return;
                    bj.kX(gC, "load");
                    bf.onload(be)
                });
            var cS = bf.parent;
            if (bm.hF(cS)) {
                try {
                    cS(gC)
                } catch (e) { }
            } else {
                (bb.bD(cS) || document.body).appendChild(gC)
            }
            var fh = bf.src || bYk();
            window.setTimeout(function () {
                gC.src = fh
            }, 0);
            return gC
        }
    }();
    bb.dY = en.dY = function () {
        var bFA = function (Td) {
            Td.src = fu.brp
        };
        var bGe = function (xJ) {
            xJ.src = "about:blank"
        };
        return function (bM, bYz) {
            bM = bb.bD(bM);
            if (!bM)
                return this;
            if (!bYz)
                bj.kX(bM);
            delete bnc[bM.id];
            var gA = bM.tagName;
            if (gA == "IFRAME") {
                bGe(bM)
            } else if (gA == "IMG") {
                bFA(bM)
            } else if (!!bM.getElementsByTagName) {
                bm.cr(bM.getElementsByTagName("img"), bFA);
                bm.cr(bM.getElementsByTagName("iframe"), bGe)
            }
            if (!!bM.parentNode) {
                bM.parentNode.removeChild(bM)
            }
            return this
        }
    }();
    bb.oi = en.oi = function (bM) {
        bM = bb.bD(bM);
        if (!!bM)
            bW.appendChild(bM);
        return this
    }
        ;
    bb.bGI = en.bGI = function (bM) {
        bM = bb.bD(bM);
        if (!bM)
            return;
        bm.oj(bM.childNodes, function (bh) {
            bb.dY(bh)
        })
    }
        ;
    bb.IM = en.IM = function () {
        var fk, hx = /\s+/;
        var bYI = function () {
            if (!!fk)
                return;
            fk = bb.tY(".#<uispace>{position:relative;zoom:1;}.#<uispace>-show{position:absolute;top:0;left:100%;cursor:text;white-space:nowrap;overflow:hidden;}");
            bb.bJh()
        };
        return function (bM, bf) {
            bM = bb.bD(bM);
            if (!bM)
                return;
            bYI();
            bf = bf || cg;
            var cS = bM.parentNode;
            if (!bb.cN(cS, fk)) {
                cS = bb.ew("span", fk);
                bM.insertAdjacentElement("beforeBegin", cS);
                cS.appendChild(bM)
            }
            var bJA = bf.nid || ""
                , bh = bb.bN(cS, bJA || fk + "-show")[0];
            if (!bh) {
                var fd = ((bf.clazz || "") + " " + bJA).trim();
                fd = fk + "-show" + (!fd ? "" : " ") + fd;
                bh = bb.ew(bf.tag || "span", fd);
                cS.appendChild(bh)
            }
            var fd = bf.clazz;
            if (!!fd) {
                fd = (fd || "").trim().split(hx)[0] + "-parent";
                bb.bC(cS, fd)
            }
            return bh
        }
    }();
    bb.bz = en.bz = function () {
        var bmr = {}
            , gA = "data-"
            , ej = /\-(.{1})/gi;
        var DJ = function (bM) {
            var bE = bb.mX(bM);
            if (!!bmr[bE])
                return;
            var cI = {};
            bm.cr(bM.attributes, function (bh) {
                var bP = bh.nodeName;
                if (bP.indexOf(gA) != 0)
                    return;
                bP = bP.replace(gA, "").replace(ej, function ($1, $2) {
                    return $2.toUpperCase()
                });
                cI[bP] = bh.nodeValue || ""
            });
            bmr[bE] = cI
        };
        return function (bM, bP, bF) {
            bM = bb.bD(bM);
            if (!bM)
                return null;
            var US = bM.dataset;
            if (!US) {
                DJ(bM);
                US = bmr[bM.id]
            }
            if (bF !== undefined)
                US[bP] = bF;
            return US[bP]
        }
    }();
    bb.jn = en.jn = function (bM, bY, bF) {
        bM = bb.bD(bM);
        if (!bM)
            return "";
        if (bF !== undefined && !!bM.setAttribute)
            bM.setAttribute(bY, bF);
        return cj.boO(bM, bY)
    }
        ;
    bb.qe = function (fg) {
        var sy = document.createElement("div");
        sy.innerHTML = fg;
        var bk = bb.ek(sy);
        return bk.length > 1 ? sy : bk[0]
    }
        ;
    bb.bYN = en.bYN = function (bM) {
        bM = bb.bD(bM);
        return !bM ? "" : cj.bqJ(bM)
    }
        ;
    bb.btM = function (BU) {
        BU = (BU || "").trim();
        return !BU ? null : cj.bqI(BU)
    }
        ;
    bb.bZj = function (eB, bw) {
        eB = eB || "";
        switch (bw) {
            case "xml":
                eB = bb.btM(eB);
                break;
            case "json":
                try {
                    eB = JSON.parse(eB)
                } catch (ex) {
                    eB = null
                }
                break
        }
        return eB
    }
        ;
    bb.kn = en.kn = function () {
        var bZq = function (bM) {
            return bM == document.body || bM == document.documentElement
        };
        return function (fj, qg) {
            fj = bb.bD(fj);
            if (!fj)
                return null;
            qg = bb.bD(qg) || null;
            var bo = {
                x: 0,
                y: 0
            }, bmf, eG, VB;
            while (!!fj && fj != qg) {
                bmf = bZq(fj);
                eG = bmf ? 0 : fj.scrollLeft;
                VB = parseInt(bb.eE(fj, "borderLeftWidth")) || 0;
                bo.x += fj.offsetLeft + VB - eG;
                eG = bmf ? 0 : fj.scrollTop;
                VB = parseInt(bb.eE(fj, "borderTopWidth")) || 0;
                bo.y += fj.offsetTop + VB - eG;
                fj = fj.offsetParent
            }
            return bo
        }
    }();
    bb.oQ = en.oQ = function (bM) {
        var cs = bb.kn(bM);
        window.scrollTo(cs.x, cs.y);
        return this
    }
        ;
    bb.cwe = function (uJ) {
        uJ = (uJ || "").trim();
        return cj.bJC(uJ)
    }
        ;
    bb.cbc = en.cbc = function (bM, bY, cI) {
        bM = bb.bD(bM);
        if (!bM)
            return this;
        var bF = cj.bvt(bY, cI);
        if (!bF)
            return this;
        bb.cf(bM, "transform", bF);
        return this
    }
        ;
    bb.hG = en.hG = function (bM, cI) {
        bM = bb.bD(bM);
        if (!!bM)
            bm.fD(cI, function (bF, bY) {
                bb.cf(bM, bY, bF)
            });
        return this
    }
        ;
    bb.cbz = en.cbz = function (hc, bf) {
        hc = bb.bD(hc);
        if (!hc)
            return {
                start: 0,
                end: 0
            };
        if (bm.wD(bf))
            bf = {
                start: bf,
                end: bf
            };
        if (bf != null) {
            if (bf.end == null)
                bf.end = bf.start || 0;
            cj.bqR(hc, bf)
        } else {
            bf = cj.bqO(hc)
        }
        return bf
    }
        ;
    bb.cf = en.cf = function (bM, bY, bF) {
        bM = bb.bD(bM);
        if (!!bM)
            cj.bpI(bM, bY, bF);
        return this
    }
        ;
    bb.eE = en.eE = function (bM, bY) {
        bM = bb.bD(bM);
        if (!bM)
            return "";
        var hN = !window.getComputedStyle ? bM.currentStyle || cg : window.getComputedStyle(bM, null);
        return hN[cj.bxV(bY)] || ""
    }
        ;
    bb.bwu = function () {
        var ej = /[\s\r\n]+/gi;
        return function (dw) {
            dw = (dw || "").trim().replace(ej, " ");
            if (!dw)
                return;
            var bh = bb.ew("style");
            document.head.appendChild(bh);
            cj.bpn(bh, cj.bSv(dw));
            return bh
        }
    }();
    bb.bww = function (zO) {
        try {
            zO = zO.trim();
            if (!!zO)
                return (new Function(zO))()
        } catch (ex) {
            console.error(ex.message);
            console.error(ex.stack)
        }
    }
        ;
    bb.tY = function () {
        var ej = /#<.*?>/g
            , hw = +(new Date);
        return function (lk) {
            if (!Iz)
                Iz = [];
            var gJ = "auto-" + hw++;
            Iz.push(lk.replace(ej, gJ));
            return gJ
        }
    }();
    bb.bJh = function () {
        if (!!Iz) {
            bb.bwu(Iz.join(""));
            Iz = null
        }
        return this
    }
        ;
    bb.cwb = function (dw, lk) {
        dw = bb.bD(dw);
        return !dw ? null : cj.bpk(dw, lk)
    }
        ;
    bb.bC = en.bC = function () {
        cj.bri.apply(cj, arguments);
        return this
    }
        ;
    bb.bB = en.bB = function () {
        cj.brc.apply(cj, arguments);
        return this
    }
        ;
    bb.gP = en.gP = function () {
        cj.QL.apply(cj, arguments);
        return this
    }
        ;
    bb.cN = en.cN = function () {
        return cj.bqW.apply(cj, arguments)
    }
        ;
    if (!document.head)
        document.head = document.getElementsByTagName("head")[0] || document.body;
    en.isChange = !0
})();
(function () {
    var bd = NEJ.P
        , cg = NEJ.O
        , gI = NEJ.R
        , cz = NEJ.F
        , bb = bd("nej.e")
        , cj = bd("nej.h")
        , bm = bd("nej.u");
    var Gn = function (bl, bw) {
        try {
            bw = bw.toLowerCase();
            if (bl === null)
                return bw == "null";
            if (bl === undefined)
                return bw == "undefined";
            return cg.toString.call(bl).toLowerCase() == "[object " + bw + "]"
        } catch (e) {
            return !1
        }
    };
    bm.hF = function (bl) {
        return Gn(bl, "function")
    }
        ;
    bm.gO = function (bl) {
        return Gn(bl, "string")
    }
        ;
    bm.wD = function (bl) {
        return Gn(bl, "number")
    }
        ;
    bm.cwa = function (bl) {
        return Gn(bl, "boolean")
    }
        ;
    bm.VE = function (bl) {
        return Gn(bl, "date")
    }
        ;
    bm.fU = function (bl) {
        return Gn(bl, "array")
    }
        ;
    bm.mK = function (bl) {
        return Gn(bl, "object")
    }
        ;
    bm.hg = function () {
        var ej = /[^\x00-\xfff]/g;
        return function (cu) {
            return ("" + (cu || "")).replace(ej, "**").length
        }
    }();
    bm.eu = function (bk, bu) {
        var fm = bm.hF(bu) ? bu : function (bF) {
            return bF === bu
        }
            , bv = bm.fD(bk, fm);
        return bv != null ? bv : -1
    }
        ;
    bm.cvZ = function () {
        var bAg;
        var LU = function (bk, ql, pq) {
            if (ql > pq)
                return -1;
            var DE = Math.ceil((ql + pq) / 2)
                , bo = bAg(bk[DE], DE, bk);
            if (bo == 0)
                return DE;
            if (bo < 0)
                return LU(bk, ql, DE - 1);
            return LU(bk, DE + 1, pq)
        };
        return function (bk, It) {
            bAg = It || cz;
            return LU(bk, 0, bk.length - 1)
        }
    }();
    bm.oj = function (bk, eS, kE) {
        if (!bk || !bk.length || !bm.hF(eS))
            return null;
        for (var i = bk.length - 1; i >= 0; i--)
            if (!!eS.call(kE, bk[i], i, bk))
                return i;
        return null
    }
        ;
    bm.cr = function (bk, eS, kE) {
        if (!bk || !bk.length || !bm.hF(eS))
            return this;
        if (!!bk.forEach) {
            bk.forEach(eS, kE);
            return this
        }
        for (var i = 0, l = bk.length; i < l; i++)
            eS.call(kE, bk[i], i, bk);
        return this
    }
        ;
    bm.fD = function (bk, eS, kE) {
        if (!bk || !bm.hF(eS))
            return null;
        if (bk.length != null) {
            if (bk.length > 0)
                for (var i = 0, l = bk.length; i < l; i++)
                    if (!!eS.call(kE, bk[i], i, bk))
                        return i
        }
        if (bm.mK(bk)) {
            for (var x in bk)
                if (bk.hasOwnProperty(x) && !!eS.call(kE, bk[x], x, bk))
                    return x
        }
        return null
    }
        ;
    bm.cci = function (jR, cco, bf) {
        jR = jR || [];
        bf = bf || cg;
        var bDp = !!bf.union
            , xv = !!bf.begin
            , VX = bf.compare
            , ccp = bDp && xv ? bm.oj : bm.cr;
        ccp(cco, function (bu) {
            if (!!VX)
                VX = VX.fE(bu);
            var bv = bm.eu(jR, VX || bu);
            if (bv >= 0)
                jR.splice(bv, 1);
            if (bDp)
                jR[xv ? "unshift" : "push"](bu)
        });
        return jR
    }
        ;
    bm.Eg = function (cI, cu) {
        if (!cI || !cu || !cu.replace)
            return cu || "";
        return cu.replace(cI.r, function ($1) {
            var bo = cI[!cI.i ? $1.toLowerCase() : $1];
            return bo != null ? bo : $1
        })
    }
        ;
    bm.fo = function () {
        var cI = {
            r: /\<|\>|\&lt;|\&gt;|\&|\r|\n|\s|\'|\"/g,
            "<": "&lt;",
            ">": "&gt;",
            "&": "&amp;",
            " ": "&nbsp;",
            '"': "&quot;",
            "'": "&#39;",
            "\n": "<br/>",
            "\r": "",
            "&lt;": "&lt;",
            "&gt;": "&gt;"
        };
        return function (cu) {
            return bm.Eg(cI, cu)
        }
    }();
    bm.Mf = function () {
        var cI = {
            r: /\&(?:lt|gt|amp|nbsp|#39|quot)\;|\<br\/\>/gi,
            "&lt;": "<",
            "&gt;": ">",
            "&amp;": "&",
            "&nbsp;": " ",
            "&#39;": "'",
            "&quot;": '"',
            "<br/>": "\n"
        };
        return function (cu) {
            return bm.Eg(cI, cu)
        }
    }();
    bm.og = function () {
        var cI = {
            i: !0,
            r: /\byyyy|yy|MM|cM|eM|M|dd|d|HH|H|mm|ms|ss|m|s|w|ct|et\b/g
        }
            , ccC = ["上午", "下午"]
            , ccD = ["A.M.", "P.M."]
            , blx = ["日", "一", "二", "三", "四", "五", "六"]
            , ccE = ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二"]
            , ccF = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
        var Mt = function (hb) {
            hb = parseInt(hb) || 0;
            return (hb < 10 ? "0" : "") + hb
        };
        var ccG = function (qP) {
            return qP < 12 ? 0 : 1
        };
        return function (cY, IZ, ccK) {
            if (!cY || !IZ)
                return "";
            cY = bm.WN(cY);
            cI.yyyy = cY.getFullYear();
            cI.yy = ("" + cI.yyyy).substr(2);
            cI.M = cY.getMonth() + 1;
            cI.MM = Mt(cI.M);
            cI.eM = ccF[cI.M - 1];
            cI.cM = ccE[cI.M - 1];
            cI.d = cY.getDate();
            cI.dd = Mt(cI.d);
            cI.H = cY.getHours();
            cI.HH = Mt(cI.H);
            cI.m = cY.getMinutes();
            cI.mm = Mt(cI.m);
            cI.s = cY.getSeconds();
            cI.ss = Mt(cI.s);
            cI.ms = cY.getMilliseconds();
            cI.w = blx[cY.getDay()];
            var bIA = ccG(cI.H);
            cI.ct = ccC[bIA];
            cI.et = ccD[bIA];
            if (!!ccK) {
                cI.H = cI.H % 12
            }
            return bm.Eg(cI, IZ)
        }
    }();
    bm.WN = function (cY) {
        var dW = cY;
        if (bm.gO(cY))
            dW = new Date(Date.parse(cY));
        if (!bm.VE(cY))
            dW = new Date(cY);
        return dW
    }
        ;
    bm.IF = function (ccL, ceB) {
        return (new Number(ccL)).toFixed(ceB)
    }
        ;
    bm.blq = function () {
        var hx = /([^\/:])\/.*$/
            , kZ = /\/[^\/]+$/
            , Gv = /[#\?]/
            , blp = location.href.split(/[?#]/)[0]
            , uL = document.createElement("a");
        var bli = function (nC) {
            return (nC || "").indexOf("://") > 0
        };
        var bLo = function (nC) {
            return (nC || "").split(Gv)[0].replace(kZ, "/")
        };
        var ceF = function (nC, gZ) {
            if (nC.indexOf("/") == 0)
                return gZ.replace(hx, "$1") + nC;
            return bLo(gZ) + nC
        };
        blp = bLo(blp);
        return function (nC, gZ) {
            nC = (nC || "").trim();
            if (!bli(gZ))
                gZ = blp;
            if (!nC)
                return gZ;
            if (bli(nC))
                return nC;
            nC = ceF(nC, gZ);
            uL.href = nC;
            nC = uL.href;
            return bli(nC) ? nC : uL.getAttribute("href", 4)
        }
    }();
    bm.cfL = function () {
        var ej = /^([\w]+?:\/\/.*?(?=\/|$))/i;
        return function (ce) {
            if (ej.test(ce || ""))
                return RegExp.$1.toLowerCase();
            return ""
        }
    }();
    bm.bMw = function (bJ, jT) {
        if (!bJ)
            return jT;
        var bY = bJ.tagName.toLowerCase()
            , bk = bb.ek(bJ);
        if (!bk || !bk.length) {
            jT[bY] = bJ.textContent || bJ.text || "";
            return jT
        }
        var gd = {};
        jT[bY] = gd;
        bm.cr(bk, function (bh) {
            bm.bMw(bh, gd)
        });
        return jT
    }
        ;
    bm.cvD = function (BU) {
        try {
            return bm.bMw(bb.btM(BU), {})
        } catch (ex) {
            return null
        }
    }
        ;
    bm.bMN = function (jm, MD) {
        var jT = {};
        bm.cr((jm || "").split(MD), function (bY) {
            var Xk = bY.split("=");
            if (!Xk || !Xk.length)
                return;
            var bP = Xk.shift();
            if (!bP)
                return;
            jT[decodeURIComponent(bP)] = decodeURIComponent(Xk.join("="))
        });
        return jT
    }
        ;
    bm.ze = function (hD, MD, cfR) {
        if (!hD)
            return "";
        var cF = [];
        for (var x in hD) {
            cF.push(encodeURIComponent(x) + "=" + (!!cfR ? encodeURIComponent(hD[x]) : hD[x]))
        }
        return cF.join(MD || ",")
    }
        ;
    bm.jg = function (cO) {
        return bm.bMN(cO, "&")
    }
        ;
    bm.eH = function (hD) {
        return bm.ze(hD, "&", !0)
    }
        ;
    bm.cxB = function (hD) {
        return cj.Hv(hD)
    }
        ;
    bm.cvw = function (bk, fm) {
        var bo = {};
        bm.cr(bk, function (bu) {
            var bP = bu;
            if (!!fm) {
                bP = fm(bu)
            }
            bo[bP] = bu
        });
        return bo
    }
        ;
    bm.cvv = function (hb, hA) {
        var cfY = ("" + hb).length
            , cfZ = Math.max(1, parseInt(hA) || 0)
            , eG = cfZ - cfY;
        if (eG > 0) {
            hb = (new Array(eG + 1)).join("0") + hb
        }
        return "" + hb
    }
        ;
    bm.XP = function (hD, bY) {
        if (!bm.fU(bY)) {
            try {
                delete hD[bY]
            } catch (e) {
                hD[bY] = undefined
            }
            return this
        }
        bm.cr(bY, bm.XP.bi(bm, hD));
        return this
    }
        ;
    bm.bmZ = function () {
        var bvp = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
        return function (cD) {
            cD = cD || 10;
            var bo = [];
            for (var i = 0, bvq; i < cD; ++i) {
                bvq = Math.floor(Math.random() * bvp.length);
                bo.push(bvp.charAt(bvq))
            }
            return bo.join("")
        }
    }();
    bm.MX = function (iO, hI) {
        return Math.floor(Math.random() * (hI - iO) + iO)
    }
        ;
    bm.oX = function (cD) {
        cD = Math.max(0, Math.min(cD || 8, 30));
        var iO = Math.pow(10, cD - 1)
            , hI = iO * 10;
        return bm.MX(iO, hI).toString()
    }
        ;
    bm.Ym = function () {
        var hw = +(new Date);
        return function () {
            return "" + hw++
        }
    }()
})();
(function () {
    var bd = NEJ.P, cg = NEJ.O, gI = NEJ.R, cz = NEJ.F, bj = bd("nej.v"), bm = bd("nej.u"), bR = bd("nej.ut"), pE;
    if (!!bR.dX)
        return;
    bR.dX = NEJ.C();
    pE = bR.dX.prototype;
    bR.dX.bH = function (bf) {
        bf = bf || {};
        var dJ = !!this.AV && this.AV.shift();
        if (!dJ) {
            dJ = new this(bf);
            this.cgd = (this.cgd || 0) + 1
        }
        dJ.cv(bf);
        return dJ
    }
        ;
    bR.dX.bX = function () {
        var Ng = function (bu, bv, bk) {
            bu.bX();
            bk.splice(bv, 1)
        };
        return function (dJ) {
            if (!dJ)
                return null;
            if (!bm.fU(dJ)) {
                if (!(dJ instanceof this)) {
                    var gJ = dJ.constructor;
                    if (!!gJ.bX)
                        gJ.bX(dJ);
                    return null
                }
                if (dJ == this.gr)
                    delete this.gr;
                if (dJ == this.AW)
                    delete this.AW;
                dJ.cR();
                if (!this.AV)
                    this.AV = [];
                if (bm.eu(this.AV, dJ) < 0) {
                    this.AV.push(dJ)
                }
                return null
            }
            bm.oj(dJ, Ng, this)
        }
    }();
    bR.dX.hC = function (bf) {
        bf = bf || {};
        if (!this.gr)
            this.gr = this.bH(bf);
        return this.gr
    }
        ;
    bR.dX.cge = function (bf, sT) {
        bf = bf || {};
        if (!!sT && !!this.AW) {
            this.AW.bX();
            delete this.AW
        }
        if (!this.AW) {
            this.AW = this.bH(bf)
        } else {
            this.AW.cv(bf)
        }
        return this.AW
    }
        ;
    pE.dG = function () {
        var hw = +(new Date);
        return function () {
            this.id = hw++;
            this.mL = {};
            this.bzX = {}
        }
    }();
    pE.cv = function (bf) {
        this.bks(bf)
    }
        ;
    pE.cR = function () {
        this.kX();
        this.Jn()
    }
        ;
    pE.df = function () {
        var hw = +(new Date);
        var cgi = function (cn) {
            if (!cn || cn.length < 3)
                return;
            this.bzX["de-" + hw++] = cn;
            bj.bt.apply(bj, cn)
        };
        return function (bk) {
            bm.cr(bk, cgi, this)
        }
    }();
    pE.Jn = function () {
        var cgn = function (cn, bP, cI) {
            delete cI[bP];
            bj.px.apply(bj, cn)
        };
        return function () {
            bm.fD(this.bzX, cgn)
        }
    }();
    pE.cvn = function (fm) {
        fm = fm || cz;
        bm.fD(this, function (GV, bP, cI) {
            if (!!GV && !!GV.bX && !fm(GV)) {
                delete cI[bP];
                GV.bX()
            }
        })
    }
        ;
    pE.bX = function () {
        this.constructor.bX(this)
    }
        ;
    pE.bBM = function (bw) {
        var be = this.mL[bw.toLowerCase()];
        return !!be && be !== cz
    }
        ;
    pE.bt = function (bw, be) {
        this.wR.apply(this, arguments);
        return this
    }
        ;
    pE.px = function (bw, be) {
        var bw = (bw || "").toLowerCase()
            , fZ = this.mL[bw];
        if (!bm.fU(fZ)) {
            if (fZ == be)
                delete this.mL[bw];
            return
        }
        bm.oj(fZ, function (gk, bv, bk) {
            if (gk == be)
                bk.splice(bv, 1)
        })
    }
        ;
    pE.wR = function (bw, be) {
        if (!!bw && bm.hF(be))
            this.mL[bw.toLowerCase()] = be;
        return this
    }
        ;
    pE.bks = function () {
        var cgt = function (be, bw) {
            this.wR(bw, be)
        };
        return function (fZ) {
            bm.fD(fZ, cgt, this);
            return this
        }
    }();
    pE.kX = function () {
        var bkm = function (be, bw) {
            this.kX(bw)
        };
        return function (bw) {
            var bw = (bw || "").toLowerCase();
            if (!!bw) {
                delete this.mL[bw]
            } else {
                bm.fD(this.mL, bkm, this)
            }
            return this
        }
    }();
    pE.bkl = function (bw, be) {
        if (!bw || !bm.hF(be))
            return this;
        bw = bw.toLowerCase();
        var fZ = this.mL[bw];
        if (!fZ) {
            this.mL[bw] = be;
            return this
        }
        if (!bm.fU(fZ)) {
            this.mL[bw] = [fZ]
        }
        this.mL[bw].push(be);
        return this
    }
        ;
    pE.bG = function (bw) {
        var be = this.mL[(bw || "").toLowerCase()];
        if (!be)
            return this;
        var cn = gI.slice.call(arguments, 1);
        if (!bm.fU(be))
            return be.apply(this, cn);
        bm.cr(be, function (fR) {
            try {
                fR.apply(this, cn)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
        }, this);
        return this
    }
        ;
    bR.Zd = function () {
        var bW = {};
        return function (bE, gJ, bf) {
            var gi = gJ.cgO;
            if (!gi) {
                gi = bm.bmZ(10);
                gJ.cgO = gi
            }
            var bP = bE + "-" + gi
                , dJ = bW[bP];
            if (!!bf && !dJ) {
                dJ = gJ.bH(bf);
                dJ.bX = dJ.bX.fz(function (be) {
                    delete bW[bP];
                    delete dJ.bX
                });
                bW[bP] = dJ
            }
            return dJ
        }
    }()
})();
(function () {
    var o = NEJ.O
        , u = NEJ.P("nej.u")
        , j = NEJ.P("nej.j");
    j.iF = function () {
        var dW = new Date
            , cgZ = +dW
            , bjX = 864e5;
        var chU = function (bY) {
            var sW = document.cookie
                , tQ = "\\b" + bY + "="
                , ZA = sW.search(tQ);
            if (ZA < 0)
                return "";
            ZA += tQ.length - 2;
            var AY = sW.indexOf(";", ZA);
            if (AY < 0)
                AY = sW.length;
            return sW.substring(ZA, AY) || ""
        };
        return function (bY, bl) {
            if (bl === undefined)
                return chU(bY);
            if (u.gO(bl)) {
                if (!!bl) {
                    document.cookie = bY + "=" + bl + ";";
                    return bl
                }
                bl = {
                    expires: -100
                }
            }
            bl = bl || o;
            var sW = bY + "=" + (bl.value || "") + ";";
            delete bl.value;
            if (bl.expires !== undefined) {
                dW.setTime(cgZ + bl.expires * bjX);
                bl.expires = dW.toGMTString()
            }
            sW += u.ze(bl, ";");
            document.cookie = sW
        }
    }()
})();
(function () {
    var bd = NEJ.P, cz = NEJ.F, ks = bd("nej.c"), fu = bd("nej.g"), bb = bd("nej.e"), bA = bd("nej.j"), bL = bd("nej.ut"), bR = bd("nej.ut.j"), bm = bd("nej.u"), bc;
    if (!!bR.Ju)
        return;
    bR.Ju = NEJ.C();
    bc = bR.Ju.bT(bL.dX);
    bc.cv = function (bf) {
        this.cw(bf);
        this.qX = {
            noescape: false,
            url: "",
            sync: !1,
            cookie: !1,
            type: "text",
            method: "GET",
            timeout: 6e4
        };
        NEJ.EX(this.qX, bf);
        var CL = ks.bD("csrf");
        if ((/^\/[^\/]/.test(this.qX.url) || this.qX.url.indexOf(location.protocol + "//" + location.host) == 0) && !!CL.cookie && !!CL.param) {
            var cO = encodeURIComponent(CL.param) + "=" + encodeURIComponent(bA.iF(CL.cookie) || "")
                , MD = this.qX.url.indexOf("?") < 0 ? "?" : "&";
            this.qX.url += MD + cO
        }
        this.ZK = bf.headers || {};
        var cu = this.ZK[fu.Ap];
        if (cu == null)
            this.ZK[fu.Ap] = fu.bQw
    }
        ;
    bc.cR = function () {
        this.cW();
        delete this.AZ;
        delete this.qX;
        delete this.ZK
    }
        ;
    bc.ciO = function (cu) {
        var cI = {
            r: /\<|\>/g,
            "<": "&lt;",
            ">": "&gt;"
        };
        if (!this.qX.noescape) {
            return bm.Eg(cI, cu)
        } else {
            return cu
        }
    }
        ;
    bc.vw = function (be) {
        var gE = be.status;
        if (gE == -1) {
            this.bG("onerror", {
                code: fu.bEF,
                message: "请求[" + this.qX.url + "]超时！"
            });
            return
        }
        if (("" + gE).indexOf("2") != 0) {
            this.bG("onerror", {
                data: gE,
                code: fu.brv,
                message: "服务器返回异常状态[" + gE + "]!"
            });
            return
        }
        this.bG("onload", bb.bZj(this.ciO(be.result), this.qX.type))
    }
        ;
    bc.dK = cz;
    bc.bjM = function (bl) {
        var ce = this.qX.url;
        if (!ce) {
            this.bG("onerror", {
                code: fu.brz,
                message: "没有输入请求地址！"
            });
            return this
        }
        try {
            this.qX.data = bl == null ? null : bl;
            var be = {
                request: this.qX,
                headers: this.ZK
            };
            try {
                this.bG("onbeforerequest", be)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
            this.dK(be)
        } catch (e) {
            this.bG("onerror", {
                code: fu.brv,
                message: "请求[" + ce + "]失败:" + e.message + "！"
            })
        }
        return this
    }
        ;
    bc.mx = cz
})();
(function () {
    var bd = NEJ.P, cz = NEJ.F, cj = bd("nej.h"), fu = bd("nej.g"), bm = bd("nej.u"), bR = bd("nej.ut.j"), bW = {}, TQ;
    if (!!bR.ZS)
        return;
    bR.ZS = NEJ.C();
    TQ = bR.ZS.bT(bR.Ju);
    TQ.cR = function () {
        this.cW();
        window.clearTimeout(this.fr);
        delete this.fr;
        try {
            this.tf.onreadystatechange = cz;
            this.tf.abort()
        } catch (e) { }
        delete this.tf
    }
        ;
    TQ.dK = function () {
        var ciR = function (bF, bP) {
            this.tf.setRequestHeader(bP, bF)
        };
        return function (bf) {
            var hd = bf.request
                , pM = bf.headers;
            this.tf = cj.bjE();
            if (pM[fu.Ap] === fu.Ge) {
                delete pM[fu.Ap];
                this.tf.upload.onprogress = this.jb.bi(this, 1);
                if (hd.data.tagName === "FORM")
                    hd.data = new FormData(hd.data)
            }
            this.tf.onreadystatechange = this.jb.bi(this, 2);
            if (hd.timeout != 0) {
                this.fr = window.setTimeout(this.jb.bi(this, 3), hd.timeout)
            }
            this.tf.open(hd.method, hd.url, !hd.sync);
            bm.fD(pM, ciR, this);
            if (!!this.qX.cookie && "withCredentials" in this.tf)
                this.tf.withCredentials = !0;
            this.tf.send(hd.data)
        }
    }();
    TQ.jb = function (bw) {
        switch (bw) {
            case 1:
                this.bG("onuploading", arguments[1]);
                break;
            case 2:
                if (this.tf.readyState == 4)
                    this.vw({
                        status: this.tf.status,
                        result: this.tf.responseText || ""
                    });
                break;
            case 3:
                this.vw({
                    status: -1
                });
                break
        }
    }
        ;
    TQ.mx = function () {
        this.vw({
            status: 0
        });
        return this
    }
})();
(function () {
    if (typeof TrimPath === "undefined") {
        TrimPath = {};
        if (typeof exports !== "undefined")
            TrimPath = exports
    }
    var NR = {}, baV = [], bML = /\s+/g, hw = +(new Date), JD, cZ, pb;
    var Gp = function () {
        var hx = /^\s*[\[\{'"].*?[\]\}'"]\s*$/
            , kZ = /[\&\|\<\>\+\-\*\/\%\,\(\)\[\]\?\:\!\=\;\s]/
            , Gv = /^(?:defined|null|undefined|true|false|instanceof|new|this|typeof|\$v|[\d]+)$/i
            , bjj = /^new\s+/
            , cjl = /['"]/;
        var cjq = function (bF) {
            if (hx.test(bF))
                return;
            bF = bF.split(".")[0].trim();
            if (!bF || cjl.test(bF))
                return;
            bF = bF.replace(bjj, "");
            try {
                if (Gv.test(bF))
                    return;
                pb[bF] = 1
            } catch (e) { }
        };
        return function (cu) {
            cu = cu || "";
            if (!cu || hx.test(cu))
                return;
            var cF = cu.split(kZ);
            for (var i = 0, l = cF.length; i < l; i++)
                cjq(cF[i])
        }
    }();
    var cjs = function (eO) {
        if (eO[2] != "in")
            throw "bad for loop statement: " + eO.join(" ");
        baV.push(eO[1]);
        Gp(eO[3]);
        return "var __HASH__" + eO[1] + " = " + eO[3] + "," + eO[1] + "," + eO[1] + "_count=0;" + "if (!!__HASH__" + eO[1] + ")" + "for(var " + eO[1] + "_key in __HASH__" + eO[1] + "){" + eO[1] + " = __HASH__" + eO[1] + "[" + eO[1] + "_key];" + "if (typeof(" + eO[1] + ')=="function") continue;' + eO[1] + "_count++;"
    };
    var cjy = function () {
        var eO = baV[baV.length - 1];
        return "}; if(!__HASH__" + eO + "||!" + eO + "_count){"
    };
    var cjA = function () {
        baV.pop();
        return "};"
    };
    var cjJ = function (eO) {
        if (eO[2] != "as")
            throw "bad for list loop statement: " + eO.join(" ");
        var OE = eO[1].split("..");
        if (OE.length > 1) {
            Gp(OE[0]);
            Gp(OE[1]);
            return "for(var " + eO[3] + "," + eO[3] + "_index=0," + eO[3] + "_beg=" + OE[0] + "," + eO[3] + "_end=" + OE[1] + "," + eO[3] + "_length=parseInt(" + eO[3] + "_end-" + eO[3] + "_beg+1);" + eO[3] + "_index<" + eO[3] + "_length;" + eO[3] + "_index++){" + eO[3] + " = " + eO[3] + "_beg+" + eO[3] + "_index;"
        } else {
            Gp(eO[1]);
            return "for(var __LIST__" + eO[3] + " = " + eO[1] + "," + eO[3] + "," + eO[3] + "_index=0," + eO[3] + "_length=__LIST__" + eO[3] + ".length;" + eO[3] + "_index<" + eO[3] + "_length;" + eO[3] + "_index++){" + eO[3] + " = __LIST__" + eO[3] + "[" + eO[3] + "_index];"
        }
    };
    var cjM = function (eO) {
        if (!eO || !eO.length)
            return;
        eO.shift();
        var bY = eO[0].split("(")[0];
        return "var " + bY + " = function" + eO.join("").replace(bY, "") + "{var __OUT=[];"
    };
    var cjS = function (eO) {
        if (!eO[1])
            throw "bad include statement: " + eO.join(" ");
        return 'if (typeof inline == "function"){__OUT.push(inline('
    };
    var biU = function (mM, eO) {
        Gp(eO.slice(1).join(" "));
        return mM
    };
    var cjU = function (eO) {
        return biU("if(", eO)
    };
    var ckl = function (eO) {
        return biU("}else if(", eO)
    };
    var ckp = function (eO) {
        return biU("var ", eO)
    };
    cZ = {
        blk: /^\{(cdata|minify|eval)/i,
        tag: "forelse|for|list|if|elseif|else|var|macro|break|notrim|trim|include",
        def: {
            "if": {
                pfix: cjU,
                sfix: "){",
                pmin: 1
            },
            "else": {
                pfix: "}else{"
            },
            elseif: {
                pfix: ckl,
                sfix: "){",
                pdft: "true"
            },
            "/if": {
                pfix: "}"
            },
            "for": {
                pfix: cjs,
                pmin: 3
            },
            forelse: {
                pfix: cjy
            },
            "/for": {
                pfix: cjA
            },
            list: {
                pfix: cjJ,
                pmin: 3
            },
            "/list": {
                pfix: "};"
            },
            "break": {
                pfix: "break;"
            },
            "var": {
                pfix: ckp,
                sfix: ";"
            },
            macro: {
                pfix: cjM
            },
            "/macro": {
                pfix: 'return __OUT.join("");};'
            },
            trim: {
                pfix: function () {
                    JD = !0
                }
            },
            "/trim": {
                pfix: function () {
                    JD = null
                }
            },
            inline: {
                pfix: cjS,
                pmin: 1,
                sfix: "));}"
            }
        },
        ext: {
            seed: function (mM) {
                return (mM || "") + "" + hw
            },
            "default": function (bF, mq) {
                return bF || mq
            }
        }
    };
    var ckq = function () {
        var ckr = /\\([\{\}])/g;
        return function (cu, kx) {
            cu = cu.replace(ckr, "$1");
            var eO = cu.slice(1, -1).split(bML)
                , cl = cZ.def[eO[0]];
            if (!cl) {
                UA(cu, kx);
                return
            }
            if (!!cl.pmin && cl.pmin >= eO.length)
                throw "Statement needs more parameters:" + cu;
            kx.push(!!cl.pfix && typeof cl.pfix != "string" ? cl.pfix(eO) : cl.pfix || "");
            if (!!cl.sfix) {
                if (eO.length <= 1) {
                    if (!!cl.pdft)
                        kx.push(cl.pdft)
                } else {
                    for (var i = 1, l = eO.length; i < l; i++) {
                        if (i > 1)
                            kx.push(" ");
                        kx.push(eO[i])
                    }
                }
                kx.push(cl.sfix)
            }
        }
    }();
    var bwm = function (JW, kx) {
        if (!JW || !JW.length)
            return;
        if (JW.length == 1) {
            var bit = JW.pop();
            Gp(bit);
            kx.push(bit == "" ? '""' : bit);
            return
        }
        var bis = JW.pop().split(":");
        kx.push("__MDF['" + bis.shift() + "'](");
        bwm(JW, kx);
        if (bis.length > 0) {
            var cn = bis.join(":");
            Gp(cn);
            kx.push("," + cn)
        }
        kx.push(")")
    };
    var UA = function (cu, kx) {
        if (!cu)
            return;
        var wG = cu.split("\n");
        if (!wG || !wG.length)
            return;
        for (var i = 0, l = wG.length, iH; i < l; i++) {
            iH = wG[i];
            if (!!JD) {
                iH = iH.trim();
                if (!iH)
                    continue
            }
            cks(iH, kx);
            if (!!JD && i < l - 1)
                kx.push("__OUT.push('\\n');")
        }
    };
    var cks = function () {
        var ckt = /\|\|/g
            , cku = /#@@#/g;
        return function (cu, kx) {
            var Ps = "}", Pt = -1, cD = cu.length, xv, hU, Kf, Vj, PB;
            while (Pt + Ps.length < cD) {
                xv = "${";
                hU = "}";
                Kf = cu.indexOf(xv, Pt + Ps.length);
                if (Kf < 0)
                    break;
                if (cu.charAt(Kf + 2) == "%") {
                    xv = "${%";
                    hU = "%}"
                }
                Vj = cu.indexOf(hU, Kf + xv.length);
                if (Vj < 0)
                    break;
                Vo(cu.substring(Pt + Ps.length, Kf), kx);
                PB = cu.substring(Kf + xv.length, Vj).replace(ckt, "#@@#").split("|");
                for (var i = 0, l = PB.length; i < l; PB[i] = PB[i].replace(cku, "||"),
                    i++)
                    ;
                kx.push("__OUT.push(");
                bwm(PB, kx);
                kx.push(");");
                Ps = hU;
                Pt = Vj
            }
            Vo(cu.substring(Pt + Ps.length), kx)
        }
    }();
    var Vo = function () {
        var cI = {
            r: /\n|\\|\'/g,
            "\n": "\\n",
            "\\": "\\\\",
            "'": "\\'"
        };
        var ckK = function (cu) {
            return (cu || "").replace(cI.r, function ($1) {
                return cI[$1] || $1
            })
        };
        return function (cu, kx) {
            if (!cu)
                return;
            kx.push("__OUT.push('" + ckK(cu) + "');")
        }
    }();
    var ckV = function () {
        var ckW = /\t/g
            , clq = /\n/g
            , clw = /\r\n?/g;
        var bAO = function (cu, xv) {
            var bv = cu.indexOf("}", xv + 1);
            while (cu.charAt(bv - 1) == "\\") {
                bv = cu.indexOf("}", bv + 1)
            }
            return bv
        };
        var clx = function () {
            var cF = []
                , Fw = arguments[0];
            for (var x in Fw) {
                x = (x || "").trim();
                if (!x)
                    continue;
                cF.push(x + "=$v('" + x + "')")
            }
            return cF.length > 0 ? "var " + cF.join(",") + ";" : ""
        };
        return function (cu) {
            pb = {};
            cu = cu.replace(clw, "\n").replace(ckW, "    ");
            var tk = ["if(!__CTX) return '';", ""];
            tk.push("function $v(__NAME){var v = __CTX[__NAME];return v==null?window[__NAME]:v;};");
            tk.push("var defined=function(__NAME){return __CTX[__NAME]!=null;},");
            tk.push("__OUT=[];");
            var FA = -1
                , cD = cu.length;
            var oE, Ko, PM, PP, Bu, PW, bhv, Qb;
            while (FA + 1 < cD) {
                oE = FA;
                oE = cu.indexOf("{", oE + 1);
                while (oE >= 0) {
                    Ko = bAO(cu, oE);
                    PM = cu.substring(oE, Ko);
                    PP = PM.match(cZ.blk);
                    if (!!PP) {
                        Bu = PP[1].length + 1;
                        PW = cu.indexOf("}", oE + Bu);
                        if (PW >= 0) {
                            bhv = PW - oE - Bu <= 0 ? "{/" + PP[1] + "}" : PM.substr(Bu + 1);
                            Bu = cu.indexOf(bhv, PW + 1);
                            if (Bu >= 0) {
                                UA(cu.substring(FA + 1, oE), tk);
                                Qb = cu.substring(PW + 1, Bu);
                                switch (PP[1]) {
                                    case "cdata":
                                        Vo(Qb, tk);
                                        break;
                                    case "minify":
                                        Vo(Qb.replace(clq, " ").replace(bML, " "), tk);
                                        break;
                                    case "eval":
                                        if (!!Qb)
                                            tk.push("__OUT.push((function(){" + Qb + "})());");
                                        break
                                }
                                oE = FA = Bu + bhv.length - 1
                            }
                        }
                    } else if (cu.charAt(oE - 1) != "$" && cu.charAt(oE - 1) != "\\" && PM.substr(PM.charAt(1) == "/" ? 2 : 1).search(cZ.tag) == 0) {
                        break
                    }
                    oE = cu.indexOf("{", oE + 1)
                }
                if (oE < 0)
                    break;
                Ko = bAO(cu, oE);
                if (Ko < 0)
                    break;
                UA(cu.substring(FA + 1, oE), tk);
                ckq(cu.substring(oE, Ko + 1), tk);
                FA = Ko
            }
            UA(cu.substring(FA + 1), tk);
            tk.push(';return __OUT.join("");');
            tk[1] = clx(pb);
            pb = null;
            return new Function("__CTX", "__MDF", tk.join(""))
        }
    }();
    TrimPath.seed = function () {
        return hw
    }
        ;
    TrimPath.merge = function () {
        var Qc = {};
        TrimPath.dump = function () {
            return {
                func: Qc,
                text: NR
            }
        }
            ;
        return function (gi, bl, mW) {
            try {
                bl = bl || {};
                if (!Qc[gi] && !NR[gi])
                    return "";
                if (!Qc[gi]) {
                    Qc[gi] = ckV(NR[gi]);
                    delete NR[gi]
                }
                if (!!mW) {
                    for (var x in cZ.ext)
                        if (!mW[x])
                            mW[x] = cZ.ext[x]
                }
                return Qc[gi](bl, mW || cZ.ext)
            } catch (ex) {
                return ex.message || ""
            }
        }
    }();
    TrimPath.parse = function () {
        var clG = +(new Date);
        return function (cu, gi) {
            if (!cu)
                return "";
            gi = gi || "ck_" + clG++;
            NR[gi] = cu;
            return gi
        }
    }()
})();
(function () {
    var bd = NEJ.P
        , bb = bd("nej.e")
        , bm = bd("nej.u")
        , hm = {};
    bb.Ks = TrimPath.seed;
    bb.dm = function () {
        var bEn = function (bE) {
            return !bb.jQ ? "" : bb.jQ(bE)
        };
        return function (gi, bl, mW) {
            bl = bl || {};
            bl.inline = bEn;
            mW = NEJ.X(NEJ.X({}, hm), mW);
            mW.rand = bm.oX;
            mW.format = bm.og;
            mW.escape = bm.fo;
            mW.inline = bEn;
            return TrimPath.merge(gi, bl, mW)
        }
    }();
    bb.fT = function (cu, clJ) {
        if (!cu)
            return "";
        var gi, bM = bb.bD(cu);
        if (!!bM) {
            gi = bM.id;
            cu = bM.value || bM.innerText;
            if (!clJ)
                bb.dY(bM)
        }
        return TrimPath.parse(cu, gi)
    }
        ;
    bb.fG = function (cS, gi, bl, mW) {
        cS = bb.bD(cS);
        if (!!cS)
            cS.innerHTML = bb.dm(gi, bl, mW);
        return this
    }
        ;
    bb.cuB = function (cI) {
        NEJ.X(hm, cI)
    }
        ;
    bd("dbg").dumpJST = function () {
        return TrimPath.dump()
    }
})();
(function () {
    var eI = NEJ.P("nej.p")
        , bR = window
        , lV = eI.Mk
        , bFS = lV.ipad || lV.iphone;
    if (!bFS && !!bR.requestAnimationFrame && !!bR.cancelRequestAnimationFrame)
        return;
    var mM = eI.ei.prefix.pro;
    if (!bFS && !!bR[mM + "RequestAnimationFrame"] && !!bR[mM + "CancelRequestAnimationFrame"]) {
        bR.requestAnimationFrame = bR[mM + "RequestAnimationFrame"];
        bR.cancelRequestAnimationFrame = bR[mM + "CancelRequestAnimationFrame"];
        return
    }
    var Wi = lV.desktop ? 80 : lV.ios ? 50 : 30;
    bR.requestAnimationFrame = function (eS) {
        return window.setTimeout(function () {
            try {
                eS(+(new Date))
            } catch (ex) { }
        }, 1e3 / Wi)
    }
        ;
    bR.cancelRequestAnimationFrame = function (bE) {
        window.clearTimeout(bE);
        return this
    }
})();
(function () {
    var bd = NEJ.P, cz = NEJ.F, bm = bd("nej.u"), bb = bd("nej.e"), bj = bd("nej.v"), cj = bd("nej.h"), en = bd("nej.x"), Wj = bd("nej.ut.j.cb"), hH;
    if (!!bb.te)
        return;
    bb.te = en.te = function () {
        var bW = {}
            , hx = /^(?:mouse.*|(?:dbl)?click)$/i;
        window.onflashevent = function (be) {
            var bE = decodeURIComponent(be.target)
                , bw = be.type.toLowerCase();
            var fR = bW[bE + "-on" + bw];
            if (!!fR) {
                try {
                    fR(be)
                } catch (e) { }
                return
            }
            var ed = bW[bE + "-tgt"];
            if (!!ed && hx.test(bw)) {
                bHk(ed, be)
            }
        }
            ;
        var bgZ = function (bf) {
            var cS = bb.bD(bf.parent) || document.body
                , fg = bb.dm(hH, bf);
            cS.insertAdjacentHTML(!bf.hidden ? "beforeEnd" : "afterBegin", fg)
        };
        var bHk = function (bE, be) {
            var bw = be.type.toLowerCase();
            requestAnimationFrame(function () {
                bj.bG(bE, bw)
            })
        };
        var clK = function (iS) {
            return !!iS && !!iS.inited && !!iS.inited()
        };
        var Qi = function (bE) {
            var cF = [document.embeds[bE], bb.bD(bE), document[bE], window[bE]]
                , bv = bm.fD(cF, clK)
                , iS = cF[bv]
                , bgU = bE + "-count";
            bW[bgU]++;
            if (!!iS || bW[bgU] > 100) {
                bW[bE](iS);
                delete bW[bE];
                delete bW[bgU];
                return
            }
            window.setTimeout(Qi.bi(null, bE), 300)
        };
        var clN = function (bf) {
            var bE = bf.id
                , hQ = bf.params;
            if (!hQ) {
                hQ = {};
                bf.params = hQ
            }
            var pb = hQ.flashvars || "";
            pb += (!pb ? "" : "&") + ("id=" + bE);
            if (!bf.hidden && (!!bf.target || cj.TR(hQ.wmode))) {
                var iP = bb.mX(bf.target) || bb.mX(bf.parent)
                    , WA = bm.Ym();
                Wj["cb" + WA] = bHk.bi(null, iP);
                pb += "&onevent=nej.ut.j.cb.cb" + WA;
                bW[bE + "-tgt"] = iP
            }
            hQ.flashvars = pb;
            bm.fD(bf, function (bF, bP) {
                if (bm.hF(bF) && bP != "onready") {
                    bW[bE + "-" + bP] = bF
                }
            })
        };
        return function (bf) {
            bf = NEJ.X({}, bf);
            if (!bf.src)
                return;
            var bE = "flash_" + bm.Ym();
            bf.id = bE;
            clN(bf);
            bgZ(bf);
            if (!bf.onready)
                return;
            bW[bE] = bf.onready;
            bW[bE + "-count"] = 0;
            Qi(bE)
        }
    }();
    hH = bb.fT('{var hide  = defined("hidden")&&!!hidden}{var param = defined("params")&&params||NEJ.O}{var width = !hide?width:"1px",height = !hide?height:"1px"}{if hide}<div style="position:absolute;top:0;left:0;width:1px;height:1px;z-index:10000;overflow:hidden;">{/if}<object classid = "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"codebase = "http://fpdownload.macromedia.com/get/flashplayer/current/swflash.cab"width = "${width|default:"100px"}"height = "${height|default:"100px"}" id="${id}"><param value="${src}" name="movie">{for x in param}<param value="${x}" name="${x_key}"/>{/for}<embed src="${src}" name="${id}"width="${width|default:"100px"}"height="${height|default:"100px"}"pluginspage="http://www.adobe.com/go/getflashplayer"type="application/x-shockwave-flash"{for x in param}${x_key}="${x}" {/for}></embed></object>{if hide}</div>{/if}');
    en.isChange = !0
})();
(function () {
    var bd = NEJ.P, ks = bd("nej.c"), bb = bd("nej.e"), bm = bd("nej.u"), bR = bd("nej.ut.j"), Wj = bd("nej.ut.j.cb"), bW = {}, hw = +(new Date), bgO;
    if (!!bR.bgJ)
        return;
    Wj["ld" + hw] = function (bP, eB) {
        var kU = bW[bP];
        if (!kU)
            return;
        delete bW[bP];
        kU.vw({
            status: 200,
            result: eB
        })
    }
        ;
    Wj["er" + hw] = function (bP, gE) {
        var kU = bW[bP];
        if (!kU)
            return;
        delete bW[bP];
        kU.vw({
            status: gE || 0
        })
    }
        ;
    bR.bgJ = NEJ.C();
    bgO = bR.bgJ.bT(bR.Ju);
    bgO.dK = function (bf) {
        var iS = bW.flash;
        if (bm.fU(iS)) {
            iS.push(this.dK.bi(this, bf));
            return
        }
        if (!iS) {
            bW.flash = [this.dK.bi(this, bf)];
            bb.te({
                hidden: !0,
                src: ks.bD("ajax.swf"),
                onready: function (iS) {
                    if (!iS)
                        return;
                    var bk = bW.flash;
                    bW.flash = iS;
                    bm.oj(bk, function (fR) {
                        try {
                            fR()
                        } catch (e) { }
                    })
                }
            });
            return
        }
        this.AZ = "swf-" + bm.oX();
        bW[this.AZ] = this;
        var bl = NEJ.EX({
            url: "",
            data: null,
            method: "GET"
        }, bf.request);
        bl.key = this.AZ;
        bl.headers = bf.headers;
        bl.onerror = "nej.ut.j.cb.er" + hw;
        bl.onloaded = "nej.ut.j.cb.ld" + hw;
        var bKF = ks.bQe(bl.url);
        if (!!bKF)
            bl.policyURL = bKF;
        iS.request(bl)
    }
        ;
    bgO.mx = function () {
        delete bW[this.AZ];
        this.vw({
            status: 0
        });
        return this
    }
})();
(function () {
    var bd = NEJ.P
        , cg = NEJ.O
        , cj = bd("nej.h");
    cj.bKT = function () {
        var ej = /^([\w]+?:\/\/.*?(?=\/|$))/i;
        return function (ju) {
            ju = ju || "";
            if (ej.test(ju))
                return RegExp.$1;
            return "*"
        }
    }();
    cj.bgI = function (bl) {
        return bl
    }
        ;
    cj.bgH = function (bLQ, bf) {
        if (!bLQ.postMessage)
            return;
        bf = bf || cg;
        bLQ.postMessage(cj.bgI(bf.data), cj.bKT(bf.origin))
    }
})();
(function () {
    var bd = NEJ.P, cz = NEJ.F, bb = bd("nej.e"), bj = bd("nej.v"), bm = bd("nej.u"), bR = bd("nej.ut"), bc;
    if (!!bR.he)
        return;
    bR.he = NEJ.C();
    bc = bR.he.bT(bR.dX);
    bc.dG = function () {
        this.bU = {};
        this.dM()
    }
        ;
    bc.cv = function (bf) {
        this.cw(bf);
        this.Qx = bb.bD(bf.element) || window;
        this.bMD(bf.event);
        this.clO();
        this.bG("oninit")
    }
        ;
    bc.cR = function () {
        var DY = function (bF, bP, cI) {
            if (!bm.fU(bF)) {
                bm.XP(this.Qx, bP)
            }
            delete cI[bP]
        };
        return function () {
            this.cW();
            bm.fD(this.bU, DY, this);
            delete this.Qx
        }
    }();
    bc.WV = function (bM, bw) {
        bM = bb.bD(bM);
        return bM == this.Qx && (!bw || !!this.bU["on" + bw])
    }
        ;
    bc.bMD = function (be) {
        if (bm.gO(be)) {
            var bY = "on" + be;
            if (!this.bU[bY]) {
                this.bU[bY] = this.cno.bi(this, be)
            }
            this.bOn(be);
            return
        }
        if (bm.fU(be)) {
            bm.cr(be, this.bMD, this)
        }
    }
        ;
    bc.bOn = function (bw) {
        var be = "on" + bw
            , fR = this.Qx[be]
            , btj = this.bU[be];
        if (fR != btj) {
            this.WX(bw);
            if (!!fR && fR != cz)
                this.btD(bw, fR);
            this.Qx[be] = btj
        }
    }
        ;
    bc.btD = function (bw, fR, coy) {
        var bk = this.bU[bw];
        if (!bk) {
            bk = [];
            this.bU[bw] = bk
        }
        if (bm.hF(fR)) {
            !coy ? bk.push(fR) : bk.unshift(fR)
        }
    }
        ;
    bc.WX = function (bw, fR) {
        var bk = this.bU[bw];
        if (!bk || !bk.length)
            return;
        if (!fR) {
            delete this.bU[bw];
            return
        }
        bm.oj(bk, function (bF, bv, KE) {
            if (fR === bF) {
                KE.splice(bv, 1);
                return !0
            }
        })
    }
        ;
    bc.cno = function (bw, be) {
        be = be || {
            noargs: !0
        };
        be.type = bw;
        this.bG("ondispatch", be);
        if (!!be.stopped)
            return;
        bm.cr(this.bU[bw], function (fR) {
            try {
                fR(be)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
        })
    }
        ;
    bc.clO = function () {
        var bgq = function (be) {
            var cn = be.args
                , bw = cn[1].toLowerCase();
            if (this.WV(cn[0], bw)) {
                be.stopped = !0;
                this.bOn(bw);
                this.btD(bw, cn[2], cn[3]);
                this.bG("oneventadd", {
                    type: bw,
                    listener: cn[2]
                })
            }
        };
        var coz = function (be) {
            var cn = be.args
                , bw = cn[1].toLowerCase();
            if (this.WV(cn[0], bw)) {
                be.stopped = !0;
                this.WX(bw, cn[2])
            }
        };
        var bkm = function (be) {
            var cn = be.args
                , bw = (cn[1] || "").toLowerCase();
            if (this.WV(cn[0])) {
                if (!!bw) {
                    this.WX(bw);
                    return
                }
                bm.fD(this.bU, function (bF, bP) {
                    if (bm.fU(bF)) {
                        this.WX(bP)
                    }
                }, this)
            }
        };
        var coI = function (be) {
            var cn = be.args
                , bw = cn[1].toLowerCase();
            if (this.WV(cn[0], bw)) {
                be.stopped = !0;
                cn[0]["on" + bw].apply(cn[0], cn.slice(2))
            }
        };
        return function () {
            if (!!this.coJ)
                return;
            this.coJ = true;
            bj.bt = bj.bt.fz(bgq.bi(this));
            bj.px = bj.px.fz(coz.bi(this));
            bj.kX = bj.kX.fz(bkm.bi(this));
            bj.bG = bj.bG.fz(coI.bi(this))
        }
    }()
})();
(function () {
    var bd = NEJ.P
        , bR = bd("nej.p")
        , cj = bd("nej.h")
        , bm = bd("nej.u")
        , bj = bd("nej.v")
        , bL = bd("nej.ut");
    if (bR.ov.trident)
        return;
    if (!!window.postMessage) {
        cj.bgI = cj.bgI.fz(function (be) {
            be.stopped = !0;
            be.value = JSON.stringify(be.args[0])
        });
        return
    }
    var bP = "MSG|"
        , lj = [];
    var cpj = function () {
        var bY = unescape(window.name || "").trim();
        if (!bY || bY.indexOf(bP) != 0)
            return;
        window.name = "";
        var bo = bm.bMN(bY.replace(bP, ""), "|")
            , ju = (bo.origin || "").toLowerCase();
        if (!!ju && ju != "*" && location.href.toLowerCase().indexOf(ju) != 0)
            return;
        bj.bG(window, "message", {
            data: JSON.parse(bo.data || "null"),
            source: window.frames[bo.self] || bo.self,
            origin: cj.bKT(bo.ref || document.referrer)
        })
    };
    var cpo = function () {
        var Xx;
        var cpF = function (cI, bv, bk) {
            if (bm.eu(Xx, cI.w) < 0) {
                Xx.push(cI.w);
                bk.splice(bv, 1);
                cI.w.name = cI.d
            }
        };
        return function () {
            Xx = [];
            bm.oj(lj, cpF);
            Xx = null
        }
    }();
    cj.bgH = function () {
        var cpI = function (bl) {
            var bo = {};
            bl = bl || cg;
            bo.origin = bl.origin || "";
            bo.ref = location.href;
            bo.self = bl.source;
            bo.data = JSON.stringify(bl.data);
            return bP + bm.ze(bo, "|", !0)
        };
        return cj.bgH.fz(function (be) {
            be.stopped = !0;
            var cn = be.args;
            lj.unshift({
                w: cn[0],
                d: escape(cpI(cn[1]))
            })
        })
    }();
    bL.he.bH({
        element: window,
        event: "message"
    });
    window.setInterval(cpo, 100);
    window.setInterval(cpj, 20)
})();
(function () {
    var bd = NEJ.P
        , cj = bd("nej.h")
        , bb = bd("nej.e")
        , bA = bd("nej.j");
    bA.cpN = function () {
        var kl = window.name || "_parent"
            , cpT = {
                hK: window.top,
                kl: window,
                cS: window.parent
            };
        return function (ed, bf) {
            if (typeof ed == "string") {
                ed = cpT[ed] || window.frames[ed];
                if (!ed)
                    return this
            }
            var bl = NEJ.X({
                origin: "*",
                source: kl
            }, bf);
            cj.bgH(ed, bl);
            return this
        }
    }()
})();
(function () {
    var bd = NEJ.P, ks = bd("nej.c"), bb = bd("nej.e"), bj = bd("nej.v"), bm = bd("nej.u"), bA = bd("nej.j"), bR = bd("nej.ut.j"), bW = {}, XC;
    if (!!bR.bfV)
        return;
    bR.bfV = NEJ.C();
    XC = bR.bfV.bT(bR.Ju);
    XC.dG = function () {
        var ge = "NEJ-AJAX-DATA:"
            , DJ = !1;
        var bfU = function (be) {
            var bl = be.data;
            if (bl.indexOf(ge) != 0)
                return;
            bl = JSON.parse(bl.replace(ge, ""));
            var kU = bW[bl.key];
            if (!kU)
                return;
            delete bW[bl.key];
            bl.result = decodeURIComponent(bl.result || "");
            kU.vw(bl)
        };
        var bfS = function () {
            if (!DJ) {
                DJ = !0;
                bj.bt(window, "message", bfU)
            }
        };
        return function () {
            this.dM();
            bfS()
        }
    }();
    XC.dK = function (bf) {
        var hd = bf.request
            , kU = ks.bPr(hd.url)
            , xJ = bW[kU];
        if (bm.fU(xJ)) {
            xJ.push(this.dK.bi(this, bf));
            return
        }
        if (!xJ) {
            bW[kU] = [this.dK.bi(this, bf)];
            bb.Yt({
                src: kU,
                visible: !1,
                onload: function (be) {
                    var bk = bW[kU];
                    bW[kU] = bj.bZ(be).contentWindow;
                    bm.oj(bk, function (fR) {
                        try {
                            fR()
                        } catch (e) { }
                    })
                }
            });
            return
        }
        this.AZ = "frm-" + bm.oX();
        bW[this.AZ] = this;
        var bl = NEJ.EX({
            url: "",
            data: null,
            timeout: 0,
            method: "GET"
        }, hd);
        bl.key = this.AZ;
        bl.headers = bf.headers;
        bA.cpN(bW[kU], {
            data: bl
        })
    }
        ;
    XC.mx = function () {
        delete bW[this.AZ];
        this.vw({
            status: 0
        });
        return this
    }
})();
(function () {
    var bd = NEJ.P, cg = NEJ.O, fu = bd("nej.g"), bb = bd("nej.e"), bj = bd("nej.v"), bm = bd("nej.u"), bA = bd("nej.j"), bR = bd("nej.ut.j"), bW = {}, KS;
    if (!!bR.bfE)
        return;
    bR.bfE = NEJ.C();
    KS = bR.bfE.bT(bR.Ju);
    KS.dG = function () {
        var ge = "NEJ-UPLOAD-RESULT:"
            , DJ = !1;
        var bfU = function (be) {
            var bl = be.data;
            if (bl.indexOf(ge) != 0)
                return;
            bl = JSON.parse(bl.replace(ge, ""));
            var kU = bW[bl.key];
            if (!kU)
                return;
            delete bW[bl.key];
            kU.vw(decodeURIComponent(bl.result))
        };
        var bfS = function () {
            if (!DJ) {
                DJ = !0;
                bj.bt(window, "message", bfU)
            }
        };
        return function () {
            this.dM();
            bfS()
        }
    }();
    KS.cR = function () {
        this.cW();
        bb.dY(this.bfC);
        delete this.bfC;
        window.clearTimeout(this.fr);
        delete this.fr
    }
        ;
    KS.vw = function (eB) {
        var bV;
        try {
            bV = JSON.parse(eB);
            this.bG("onload", bV)
        } catch (e) {
            this.bG("onerror", {
                code: fu.bQi,
                message: eB
            })
        }
    }
        ;
    KS.dK = function () {
        var cqg = function () {
            var nY, eB;
            try {
                var nY = this.bfC.contentWindow.document.body
                    , eB = nY.innerText || nY.textContent
            } catch (e) {
                return
            }
            this.vw(eB)
        };
        var bfs = function (ce, gf, sW) {
            bA.cE(ce, {
                type: "json",
                method: "POST",
                cookie: sW,
                mode: parseInt(gf) || 0,
                onload: function (bl) {
                    if (!this.fr)
                        return;
                    this.bG("onuploading", bl);
                    this.fr = window.setTimeout(bfs.bi(this, ce, gf, sW), 1e3)
                }
                    .bi(this),
                onerror: function (dh) {
                    if (!this.fr)
                        return;
                    this.fr = window.setTimeout(bfs.bi(this, ce, gf, sW), 1e3)
                }
                    .bi(this)
            })
        };
        return function (bf) {
            var hd = bf.request
                , pM = bf.headers
                , gj = hd.data
                , bY = "fom-" + bm.oX();
            bW[bY] = this;
            gj.target = bY;
            gj.method = "POST";
            gj.enctype = fu.Ge;
            gj.encoding = fu.Ge;
            var ce = gj.action || ""
                , nX = ce.indexOf("?") <= 0 ? "?" : "&";
            gj.action = ce + nX + "_proxy_=form";
            this.bfC = bb.Yt({
                name: bY,
                onload: function (be) {
                    var xJ = bj.bZ(be);
                    bj.bt(xJ, "load", cqg.bi(this));
                    gj.submit();
                    var bxd = (gj.nej_query || cg).value;
                    if (!bxd)
                        return;
                    var gf = (gj.nej_mode || cg).value
                        , sW = (gj.nej_cookie || cg).value == "true";
                    this.fr = window.setTimeout(bfs.bi(this, bxd, gf, sW), 100)
                }
                    .bi(this)
            })
        }
    }();
    KS.mx = function () {
        this.bG("onerror", {
            code: fu.bQq,
            message: "客户端终止文件上传"
        });
        return this
    }
})();
(function () {
    var bd = NEJ.P
        , cg = NEJ.O
        , cj = bd("nej.h")
        , bR = bd("nej.ut.j");
    cj.bjE = function () {
        return new XMLHttpRequest
    }
        ;
    cj.bfl = function (gf, Yp, bf) {
        var cI = !!Yp ? {
            2: bR.bfE
        } : {
                2: bR.bfV,
                3: bR.bgJ
            };
        return (cI[gf] || bR.ZS).bH(bf)
    }
})();
(function () {
    var bd = NEJ.P
        , bR = bd("nej.p")
        , cj = bd("nej.h");
    if (bR.ov.trident)
        return;
    cj.bjE = function () {
        var Pf = ["Msxml2.XMLHTTP.6.0", "Msxml2.XMLHTTP.3.0", "Msxml2.XMLHTTP.4.0", "Msxml2.XMLHTTP.5.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"];
        var cql = function () {
            for (var i = 0, l = Pf.length; i < l; i++) {
                try {
                    return new ActiveXObject(Pf[i])
                } catch (e) { }
            }
            return null
        };
        return cj.bjE.fz(function (be) {
            if (!!window.XMLHttpRequest)
                return;
            be.stopped = !0;
            be.value = cql()
        })
    }();
    cj.bfl = function () {
        var Es = {
            0: 2,
            1: 3
        };
        return cj.bfl.fz(function (be) {
            var cn = be.args
                , gf = cn[0] || 0;
            cn[0] = !!cn[1] ? 2 : Es[gf] || gf
        })
    }()
})();
(function () {
    var bd = NEJ.P
        , cg = NEJ.O
        , cz = NEJ.F
        , cj = bd("nej.h")
        , fu = bd("nej.g")
        , bm = bd("nej.u")
        , bA = bd("nej.j")
        , bR = bd("nej.ut.j")
        , qh = {}
        , Ir = cz;
    bA.mx = function (gi) {
        var bW = qh[gi];
        if (!bW)
            return this;
        bW.req.mx();
        return this
    }
        ;
    bA.bzn = function (fm) {
        Ir = fm || cz;
        return this
    }
        ;
    bA.cE = function () {
        var kC = (location.protocol + "//" + location.host).toLowerCase();
        var cqW = function (ce) {
            var ju = bm.cfL(ce);
            return !!ju && ju != kC
        };
        var crc = function (pM) {
            return (pM || cg)[fu.Ap] == fu.Ge
        };
        var crk = function (bf) {
            var Yp = crc(bf.headers);
            if (!cqW(bf.url) && !Yp)
                return bR.ZS.bH(bf);
            return cj.bfl(bf.mode, Yp, bf)
        };
        var DY = function (gi) {
            var bW = qh[gi];
            if (!bW)
                return;
            if (!!bW.req)
                bW.req.bX();
            delete qh[gi]
        };
        var bzP = function (gi, bw) {
            var bW = qh[gi];
            if (!bW)
                return;
            DY(gi);
            try {
                var be = {
                    type: bw,
                    result: arguments[2]
                };
                Ir(be);
                if (!be.stopped)
                    (bW[bw] || cz)(be.result)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex)
            }
        };
        var yC = function (gi, bl) {
            bzP(gi, "onload", bl)
        };
        var BF = function (gi, dh) {
            bzP(gi, "onerror", dh)
        };
        return function (ce, bf) {
            bf = bf || {};
            var gi = bm.oX()
                , bW = {
                    onload: bf.onload || cz,
                    onerror: bf.onerror || cz
                };
            qh[gi] = bW;
            bf.onload = yC.bi(null, gi);
            bf.onerror = BF.bi(null, gi);
            if (!!bf.query) {
                var nX = ce.indexOf("?") < 0 ? "?" : "&"
                    , cO = bf.query;
                if (bm.mK(cO))
                    cO = bm.eH(cO);
                if (!!cO)
                    ce += nX + cO
            }
            bf.url = ce;
            bW.req = crk(bf);
            bW.req.bjM(bf.data);
            return gi
        }
    }();
    bA.hT = function (gj, bf) {
        var hZ = {
            mode: 0,
            type: "json",
            query: null,
            cookie: !1,
            headers: {},
            onload: null,
            onerror: null,
            onuploading: null,
            onbeforerequest: null
        };
        NEJ.EX(hZ, bf);
        hZ.data = gj;
        hZ.method = "POST";
        hZ.timeout = 0;
        hZ.headers[fu.Ap] = fu.Ge;
        return bA.cE(gj.action, hZ)
    }
})();
(function () {
    var bd = NEJ.P, cz = NEJ.F, fu = bd("nej.g"), bj = bd("nej.v"), bm = bd("nej.u"), bL = bd("nej.ut"), bR = bd("nej.ut.j"), nT, li = 6e4;
    if (!!bR.RD)
        return;
    bR.RD = NEJ.C();
    nT = bR.RD.bT(bL.dX);
    nT.dG = function () {
        this.dM();
        this.RF = {
            onerror: this.crm.bi(this),
            onloaded: this.crt.bi(this)
        };
        if (!this.constructor.bU)
            this.constructor.bU = {
                loaded: {}
            }
    }
        ;
    nT.cv = function (bf) {
        this.cw(bf);
        this.KY = bf.version;
        this.beP = bf.timeout;
        this.RF.version = this.KY;
        this.RF.timeout = this.beP
    }
        ;
    nT.bCo = function (bP) {
        delete this.constructor.bU[bP]
    }
        ;
    nT.BH = function (bP) {
        return this.constructor.bU[bP]
    }
        ;
    nT.bCJ = function (bP, bl) {
        this.constructor.bU[bP] = bl
    }
        ;
    nT.YT = cz;
    nT.bCU = function (hd) {
        bj.kX(hd)
    }
        ;
    nT.beM = function (hd) {
        hd.src = this.mr;
        document.head.appendChild(hd)
    }
        ;
    nT.BI = function () {
        var bW = this.BH(this.mr);
        if (!bW)
            return;
        window.clearTimeout(bW.timer);
        this.bCU(bW.request);
        delete bW.bind;
        delete bW.timer;
        delete bW.request;
        this.bCo(this.mr);
        this.BH("loaded")[this.mr] = !0
    }
        ;
    nT.Zc = function (bY) {
        var bW = this.BH(this.mr);
        if (!bW)
            return;
        var bk = bW.bind;
        this.BI();
        if (!!bk && bk.length > 0) {
            var dJ;
            while (bk.length) {
                dJ = bk.shift();
                try {
                    dJ.bG(bY, arguments[1])
                } catch (ex) {
                    console.error(ex.message);
                    console.error(ex.stack)
                }
                dJ.bX()
            }
        }
    }
        ;
    nT.gg = function (dh) {
        this.Zc("onerror", dh)
    }
        ;
    nT.bDw = function () {
        this.Zc("onloaded")
    }
        ;
    nT.cry = function (ce) {
        this.constructor.bH(this.RF).Lb(ce)
    }
        ;
    nT.bDI = function (dh) {
        var bW = this.BH(this.wP);
        if (!bW)
            return;
        if (!!dh)
            bW.error++;
        bW.loaded++;
        if (bW.loaded < bW.total)
            return;
        this.bCo(this.wP);
        this.bG(bW.error > 0 ? "onerror" : "onloaded")
    }
        ;
    nT.crm = function (dh) {
        this.bDI(!0)
    }
        ;
    nT.crt = function () {
        this.bDI()
    }
        ;
    nT.Lb = function (ce) {
        ce = bm.blq(ce);
        if (!ce) {
            this.bG("onerror", {
                code: fu.brz,
                message: "请指定要载入的资源地址！"
            });
            return this
        }
        this.mr = ce;
        if (!!this.KY)
            this.mr += (this.mr.indexOf("?") < 0 ? "?" : "&") + this.KY;
        if (this.BH("loaded")[this.mr]) {
            try {
                this.bG("onloaded")
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
            this.bX();
            return this
        }
        var bW = this.BH(this.mr), hd;
        if (!!bW) {
            bW.bind.unshift(this);
            bW.timer = window.clearTimeout(bW.timer)
        } else {
            hd = this.YT();
            bW = {
                request: hd,
                bind: [this]
            };
            this.bCJ(this.mr, bW);
            bj.bt(hd, "load", this.bDw.bi(this));
            bj.bt(hd, "error", this.gg.bi(this, {
                code: fu.brv,
                message: "无法加载指定资源文件[" + this.mr + "]！"
            }))
        }
        if (this.beP != 0)
            bW.timer = window.setTimeout(this.gg.bi(this, {
                code: fu.bEF,
                message: "指定资源文件[" + this.mr + "]载入超时！"
            }), this.beP || li);
        if (!!hd)
            this.beM(hd);
        this.bG("onloading");
        return this
    }
        ;
    nT.bDS = function (bk) {
        if (!bk || !bk.length) {
            this.bG("onerror", {
                code: fu.brz,
                message: "请指定要载入的资源队列！"
            });
            return this
        }
        this.wP = bm.oX();
        var bW = {
            error: 0,
            loaded: 0,
            total: bk.length
        };
        this.bCJ(this.wP, bW);
        for (var i = 0, l = bk.length; i < l; i++) {
            if (!bk[i]) {
                bW.total--;
                continue
            }
            this.cry(bk[i])
        }
        this.bG("onloading");
        return this
    }
})();
(function () {
    var bd = NEJ.P, cg = NEJ.O, bb = bd("nej.e"), cj = bd("nej.h"), bR = bd("nej.ut.j"), Sh;
    if (!!bR.bet)
        return;
    bR.bet = NEJ.C();
    Sh = bR.bet.bT(bR.RD);
    Sh.YT = function () {
        var gC = bb.ew("iframe");
        gC.width = 0;
        gC.height = 0;
        gC.style.display = "none";
        return gC
    }
        ;
    Sh.beM = function (hd) {
        hd.src = this.mr;
        document.body.appendChild(hd)
    }
        ;
    Sh.gg = function (dh) {
        var gC = (this.BH(this.mr) || cg).request;
        this.Zc("onerror", dh);
        cj.Vh(gC)
    }
        ;
    Sh.bDw = function () {
        var nY = null
            , gC = (this.BH(this.mr) || cg).request;
        try {
            nY = gC.contentWindow.document.body
        } catch (ex) { }
        this.Zc("onloaded", nY);
        cj.Vh(gC)
    }
})();
(function () {
    var bd = NEJ.P, bb = bd("nej.e"), bR = bd("nej.ut.j"), bep;
    if (!!bR.ZD)
        return;
    bR.ZD = NEJ.C();
    bep = bR.ZD.bT(bR.RD);
    bep.YT = function () {
        return bb.ew("link")
    }
        ;
    bep.beM = function (hd) {
        hd.href = this.mr;
        document.head.appendChild(hd)
    }
})();
(function () {
    var bd = NEJ.P, bb = bd("nej.e"), bR = bd("nej.ut.j"), ZL;
    if (!!bR.ZM)
        return;
    bR.ZM = NEJ.C();
    ZL = bR.ZM.bT(bR.RD);
    ZL.cv = function (bf) {
        this.cw(bf);
        this.bEz = bf.async;
        this.bee = bf.charset;
        this.RF.async = !1;
        this.RF.charset = this.bee
    }
        ;
    ZL.YT = function () {
        var hd = bb.ew("script");
        if (this.bEz != null)
            hd.async = !!this.bEz;
        if (this.bee != null)
            hd.charset = this.bee;
        return hd
    }
        ;
    ZL.bCU = function (hd) {
        bb.dY(hd)
    }
})();
(function () {
    var bd = NEJ.P
        , bA = bd("nej.j")
        , bR = bd("nej.ut.j");
    bA.crz = function (ce, bf) {
        bR.ZM.bH(bf).Lb(ce);
        return this
    }
        ;
    bA.crE = function (bk, bf) {
        bR.ZM.bH(bf).bDS(bk);
        return this
    }
        ;
    bA.ctD = function (ce, bf) {
        bR.ZD.bH(bf).Lb(ce);
        return this
    }
        ;
    bA.crF = function (bk, bf) {
        bR.ZD.bH(bf).bDS(bk);
        return this
    }
        ;
    bA.bFM = function (ce, bf) {
        bR.bet.bH(bf).Lb(ce);
        return this
    }
})();
(function () {
    var bd = NEJ.P
        , cg = NEJ.O
        , bb = bd("nej.e")
        , bj = bd("nej.v")
        , bm = bd("nej.u")
        , bA = bd("nej.j")
        , bL = bd("nej.ut")
        , bW = {}
        , tG = +(new Date) + "-";
    bb.eb = function () {
        var dB = 0;
        var St = function () {
            if (dB > 0)
                return;
            dB = 0;
            bj.bG(document, "templateready");
            bj.kX(document, "templateready")
        };
        var ZT = function (hc, bf) {
            var fh = bb.bz(hc, "src");
            if (!fh)
                return;
            bf = bf || cg;
            var gZ = bf.root;
            if (!gZ) {
                gZ = hc.ownerDocument.location.href
            } else {
                gZ = bm.blq(gZ)
            }
            fh = fh.split(",");
            bm.cr(fh, function (bF, bv, bk) {
                bk[bv] = bm.blq(bF, gZ)
            });
            return fh
        };
        var crI = function (hc, bf) {
            if (!hc)
                return;
            var fh = ZT(hc, bf);
            if (!!fh)
                bA.crF(fh, {
                    version: bb.bz(hc, "version")
                });
            bb.bwu(hc.value)
        };
        var crK = function (bF) {
            dB--;
            bb.bww(bF);
            St()
        };
        var csa = function (hc, bf) {
            if (!hc)
                return;
            var fh = ZT(hc, bf)
                , gw = hc.value;
            if (!!fh) {
                dB++;
                var bf = {
                    version: bb.bz(hc, "version"),
                    onloaded: crK.bi(null, gw)
                };
                window.setTimeout(bA.crE.bi(bA, fh, bf), 0);
                return
            }
            bb.bww(gw)
        };
        var ctj = function (nY) {
            dB--;
            bb.eb(nY);
            St()
        };
        var ctq = function (hc, bf) {
            if (!hc)
                return;
            var fh = ZT(hc, bf)[0];
            if (!!fh) {
                dB++;
                var bf = {
                    version: bb.bz(hc, "version"),
                    onloaded: ctj
                };
                window.setTimeout(bA.bFM.bi(bA, fh, bf), 0)
            }
        };
        var ctp = function (bE, eB) {
            dB--;
            bb.Lo(bE, eB || "");
            St()
        };
        var ctn = function (hc, bf) {
            if (!hc || !hc.id)
                return;
            var bE = hc.id
                , fh = ZT(hc, bf)[0];
            if (!!fh) {
                dB++;
                var ce = fh + (fh.indexOf("?") < 0 ? "?" : "&") + (bb.bz(hc, "version") || "")
                    , bf = {
                        type: "text",
                        method: "GET",
                        onload: ctp.bi(null, bE)
                    };
                window.setTimeout(bA.cE.bi(bA, ce, bf), 0)
            }
        };
        var ctk = function (bh, bf) {
            var bw = bh.name.toLowerCase();
            switch (bw) {
                case "jst":
                    bb.fT(bh, !0);
                    return;
                case "txt":
                    bb.Lo(bh.id, bh.value || "");
                    return;
                case "ntp":
                    bb.jK(bh.value || "", bh.id);
                    return;
                case "js":
                    csa(bh, bf);
                    return;
                case "css":
                    crI(bh, bf);
                    return;
                case "html":
                    ctq(bh, bf);
                    return;
                case "res":
                    ctn(bh, bf);
                    return
            }
        };
        bL.he.bH({
            element: document,
            event: "templateready",
            oneventadd: St
        });
        return function (bM, bf) {
            bM = bb.bD(bM);
            if (!!bM) {
                var bk = bM.tagName == "TEXTAREA" ? [bM] : bM.getElementsByTagName("textarea");
                bm.cr(bk, function (bh) {
                    ctk(bh, bf)
                });
                bb.dY(bM, !0)
            }
            St();
            return this
        }
    }();
    bb.Lo = function (bP, bF) {
        bW[bP] = bF || "";
        return this
    }
        ;
    bb.jQ = function (bP) {
        return bW[bP] || ""
    }
        ;
    bb.jK = function (bM, bP) {
        bP = bP || bm.oX();
        bM = bb.bD(bM) || bM;
        bb.Lo(tG + bP, bM);
        bb.oi(bM);
        return bP
    }
        ;
    bb.eU = function (bP) {
        if (!bP)
            return null;
        bP = tG + bP;
        var bF = bb.jQ(bP);
        if (!bF)
            return null;
        if (bm.gO(bF)) {
            bF = bb.qe(bF);
            bb.Lo(bP, bF)
        }
        return bF.cloneNode(!0)
    }
        ;
    bb.BT = function () {
        var Ir = function (bF, bP) {
            return bP == "offset" || bP == "limit"
        };
        return function (bk, bu, bf) {
            var cF = [];
            if (!bk || !bk.length || !bu)
                return cF;
            bf = bf || cg;
            var fB = bk.length
                , kO = parseInt(bf.offset) || 0
                , hU = Math.min(fB, kO + (parseInt(bf.limit) || fB))
                , dH = {
                    total: bk.length,
                    range: [kO, hU]
                };
            NEJ.X(dH, bf, Ir);
            for (var i = kO, dJ; i < hU; i++) {
                dH.index = i;
                dH.data = bk[i];
                dJ = bu.bH(dH);
                var bE = dJ.Fz();
                bW[bE] = dJ;
                dJ.bX = dJ.bX.fz(function (bE, dJ) {
                    delete bW[bE];
                    delete dJ.bX
                }
                    .bi(null, bE, dJ));
                cF.push(dJ)
            }
            return cF
        }
    }();
    bb.bJK = function (bE) {
        return bW[bE]
    }
        ;
    bb.ctu = function (fd, bf) {
        bf = bf || cg;
        bb.eb(bf.tid || "template-box");
        bj.bt(document, "templateready", function () {
            fd.bH().bG("onshow", bf)
        })
    }
        ;
    bd("dbg").dumpTC = function () {
        return bW
    }
})();
(function () {
    var bd = NEJ.P, cg = NEJ.O, cz = NEJ.F, bb = bd("nej.e"), bm = bd("nej.u"), bL = bd("nej.ut"), bR = bd("nej.ui"), bc;
    if (!!bR.fP)
        return;
    bR.fP = NEJ.C();
    bc = bR.fP.bT(bL.dX);
    bc.dG = function () {
        this.dM();
        bb.bJh();
        this.dq();
        this.di()
    }
        ;
    bc.cv = function (bf) {
        this.cw(bf);
        this.cti(bf.clazz);
        this.bLd(bf.parent)
    }
        ;
    bc.cR = function () {
        this.cW();
        this.bLg();
        delete this.hh;
        bb.oi(this.bq);
        bb.bB(this.bq, this.bdC);
        delete this.bdC
    }
        ;
    bc.dq = cz;
    bc.di = function () {
        if (!this.dr)
            this.bay();
        this.bq = bb.eU(this.dr);
        if (!this.bq)
            this.bq = bb.ew("div", this.nd);
        bb.bC(this.bq, this.nd)
    }
        ;
    bc.bay = cz;
    bc.cti = function (fk) {
        this.bdC = fk || "";
        bb.bC(this.bq, this.bdC)
    }
        ;
    bc.ctf = function () {
        if (!this.nd)
            return;
        bb.bC(this.hh, this.nd + "-parent")
    }
        ;
    bc.bLg = function () {
        if (!this.nd)
            return;
        bb.bB(this.hh, this.nd + "-parent")
    }
        ;
    bc.nn = function () {
        return this.bq
    }
        ;
    bc.bLd = function (cS) {
        if (!this.bq)
            return this;
        this.bLg();
        if (bm.hF(cS)) {
            this.hh = cS(this.bq)
        } else {
            this.hh = bb.bD(cS);
            if (!!this.hh)
                this.hh.appendChild(this.bq)
        }
        this.ctf();
        return this
    }
        ;
    bc.bS = function () {
        if (!this.hh || !this.bq || this.bq.parentNode == this.hh)
            return this;
        this.hh.appendChild(this.bq);
        return this
    }
        ;
    bc.cC = function () {
        bb.oi(this.bq);
        return this
    }
})();
(function () {
    var bd = NEJ.P, cg = NEJ.O, cz = NEJ.F, bb = bd("nej.e"), bm = bd("nej.u"), cj = bd("nej.h"), bR = bd("nej.ui"), xg, bNo;
    if (!!bR.SN)
        return;
    bR.SN = NEJ.C();
    xg = bR.SN.bT(bR.fP);
    bNo = bR.SN.dC;
    xg.cv = function (bf) {
        this.cw(bf);
        this.wR("oncontentready", bf.oncontentready || this.cte.bi(this));
        this.ctd = !!bf.nohack;
        this.ctb = !!bf.destroyable;
        this.Lu(bf.content)
    }
        ;
    xg.cR = function () {
        this.bG("onbeforerecycle");
        this.cW();
        this.baU();
        this.Lu("");
        bb.hG(this.bq, {
            top: "",
            left: ""
        })
    }
        ;
    xg.cte = cz;
    xg.Lw = cz;
    xg.baU = function () {
        bb.oi(this.bq);
        if (!!this.oN) {
            this.oN = cj.bqB(this.bq);
            delete this.oN
        }
    }
        ;
    xg.Lu = function (cu) {
        if (!this.bq || !this.Cf || cu == null)
            return this;
        cu = cu || "";
        bm.gO(cu) ? this.Cf.innerHTML = cu : this.Cf.appendChild(cu);
        this.bG("oncontentready", this.Cf);
        return this
    }
        ;
    xg.hz = function (cs) {
        var bF = cs.top;
        if (bF != null) {
            bF += "px";
            bb.cf(this.bq, "top", bF);
            bb.cf(this.oN, "top", bF)
        }
        var bF = cs.left;
        if (bF != null) {
            bF += "px";
            bb.cf(this.bq, "left", bF);
            bb.cf(this.oN, "left", bF)
        }
        return this
    }
        ;
    xg.bS = function () {
        bb.cf(this.bq, "visibility", "hidden");
        bNo.bS.apply(this, arguments);
        this.Lw();
        bb.cf(this.bq, "visibility", "");
        if (!this.ctd) {
            this.oN = cj.oN(this.bq)
        }
        return this
    }
        ;
    xg.cC = function () {
        this.ctb ? this.bX() : this.baU();
        return this
    }
})();
(function () {
    var bd = NEJ.P, cz = NEJ.F, bm = bd("nej.u"), bb = bd("nej.e"), bR = bd("nej.ui"), Ch;
    if (!!bR.bbg)
        return;
    bR.bbg = NEJ.C();
    Ch = bR.bbg.bT(bR.fP);
    Ch.cv = function (bf) {
        this.Tf();
        this.cw(this.csZ(bf));
        this.dk.onbeforerecycle = this.bX.bi(this);
        this.pD = this.bcW()
    }
        ;
    Ch.cR = function () {
        this.bG("onbeforerecycle");
        this.cW();
        delete this.dk;
        bb.oi(this.bq);
        var Cm = this.pD;
        if (!!Cm) {
            delete this.pD;
            Cm.bX()
        }
    }
        ;
    Ch.bcW = cz;
    Ch.csZ = function (bf) {
        var bo = {};
        bm.fD(bf, function (bu, bP) {
            this.dk.hasOwnProperty(bP) ? this.dk[bP] = bu : bo[bP] = bu
        }, this);
        return bo
    }
        ;
    Ch.Tf = function () {
        this.dk = {
            clazz: "",
            parent: null,
            content: this.bq,
            destroyable: !1,
            oncontentready: null,
            nohack: !1
        }
    }
        ;
    Ch.bS = function () {
        if (!!this.pD)
            this.pD.bS();
        this.bG("onaftershow");
        return this
    }
        ;
    Ch.cC = function () {
        if (!!this.pD)
            this.pD.cC();
        return this
    }
})();
(function () {
    var bd = NEJ.P, fu = bd("nej.g"), cj = bd("nej.h"), bb = bd("nej.e"), bm = bd("nej.u"), bj = bd("nej.v"), bR = bd("nej.ui"), Tk, buL;
    if (!!bR.LC)
        return;
    var jN = bb.tY(".#<uispace>{position:fixed;_position:absolute;z-index:100;top:0;bottom:0;left:0;right:0;width:100%;height:100%;background-image:url(" + fu.brp + ");}");
    bR.LC = NEJ.C();
    Tk = bR.LC.bT(bR.fP);
    buL = bR.LC.dC;
    Tk.cv = function (bf) {
        this.cw(bf);
        var cu = bf.content || "&nbsp;";
        bm.gO(cu) ? this.bq.innerHTML = cu : this.bq.appendChild(cu)
    }
        ;
    Tk.cR = function () {
        this.cW();
        this.bq.innerHTML = "&nbsp;"
    }
        ;
    Tk.dq = function () {
        this.nd = jN
    }
        ;
    Tk.bS = function () {
        cj.bqG(this.bq);
        buL.bS.apply(this, arguments);
        return this
    }
})();
(function () {
    var bd = NEJ.P, cg = NEJ.O, bb = bd("nej.e"), bj = bd("nej.v"), bR = bd("nej.ut"), xl;
    if (!!bR.zS)
        return;
    bR.zS = NEJ.C();
    xl = bR.zS.bT(bR.dX);
    xl.cv = function (bf) {
        this.cw(bf);
        this.csY = !!bf.overflow;
        this.bq = bb.bD(bf.body);
        this.Cp = bb.bD(bf.view) || bb.buB(this.bq);
        this.bvB = bb.bD(bf.mbar) || this.bq;
        this.bbD = parseInt(bf.direction) || 0;
        if (!!bf.isRelative) {
            this.bq.style.position = "relative";
            this.bcO = true;
            this.bcN()
        }
        this.df([[document, "mouseup", this.bcM.bi(this)], [document, "mousemove", this.bcH.bi(this)], [this.bvB, "mousedown", this.TE.bi(this)]])
    }
        ;
    xl.bcN = function () {
        if (!!this.bcO) {
            this.LK = bb.kn(this.bq, this.Cp);
            this.LK.x -= parseInt(bb.eE(this.bq, "left")) || 0;
            this.LK.y -= parseInt(bb.eE(this.bq, "top")) || 0
        }
    }
        ;
    xl.cR = function () {
        this.cW();
        delete this.bq;
        delete this.bvB;
        delete this.Cp
    }
        ;
    xl.bcx = function () {
        return {
            x: Math.max(this.Cp.clientWidth, this.Cp.scrollWidth) - this.bq.offsetWidth,
            y: Math.max(this.Cp.clientHeight, this.Cp.scrollHeight) - this.bq.offsetHeight
        }
    }
        ;
    xl.TE = function (be) {
        bj.co(be);
        if (!!this.jI)
            return;
        this.jI = {
            x: bj.nc(be),
            y: bj.qv(be)
        };
        this.bwG = this.bcx();
        this.bG("ondragstart", be)
    }
        ;
    xl.bcH = function (be) {
        if (!this.jI)
            return;
        var cs = {
            x: bj.nc(be),
            y: bj.qv(be)
        };
        var uE = cs.x - this.jI.x
            , us = cs.y - this.jI.y
            , bF = {
                top: (parseInt(bb.eE(this.bq, "top")) || 0) + us,
                left: (parseInt(bb.eE(this.bq, "left")) || 0) + uE
            };
        if (this.bcO) {
            this.bcN();
            bF.top = bF.top + this.LK.y;
            bF.left = bF.left + this.LK.x
        }
        this.jI = cs;
        this.hz(bF)
    }
        ;
    xl.bcM = function (be) {
        if (!this.jI)
            return;
        delete this.bwG;
        delete this.jI;
        this.bG("ondragend", this.bcw())
    }
        ;
    xl.hz = function (be) {
        if (!this.csY) {
            var bxJ = this.bwG || this.bcx();
            be.top = Math.min(bxJ.y, Math.max(0, be.top));
            be.left = Math.min(bxJ.x, Math.max(0, be.left))
        }
        var dw = this.bq.style;
        if (this.bcO) {
            this.bcN();
            be.top = be.top - this.LK.y;
            be.left = be.left - this.LK.x
        }
        if (this.bbD == 0 || this.bbD == 2)
            dw.top = be.top + "px";
        if (this.bbD == 0 || this.bbD == 1)
            dw.left = be.left + "px";
        this.bG("onchange", be);
        return this
    }
        ;
    xl.bcw = function () {
        return {
            left: parseInt(bb.eE(this.bq, "left")) || 0,
            top: parseInt(bb.eE(this.bq, "top")) || 0
        }
    }
})();
(function () {
    var bd = NEJ.P, cg = NEJ.O, bb = NEJ.P("nej.e"), bj = NEJ.P("nej.v"), bm = NEJ.P("nej.u"), bL = NEJ.P("nej.ut"), bR = NEJ.P("nej.ui"), jN, hH, bc, bO;
    if (!!bR.bcg)
        return;
    bR.bcg = NEJ.C();
    bc = bR.bcg.bT(bR.SN);
    bO = bR.bcg.dC;
    bc.dG = function () {
        this.sz = {};
        this.lH = {
            onchange: this.bcH.bi(this)
        };
        this.dM()
    }
        ;
    bc.cv = function (bf) {
        this.cw(bf);
        this.csW(bf.mask);
        this.csU(bf.align);
        this.Cr(bf.title);
        if (!bf.draggable)
            return;
        this.kW = bL.zS.bH(this.lH)
    }
        ;
    bc.cR = function () {
        this.cW();
        delete this.rS;
        delete this.TM;
        if (!!this.Cs) {
            this.Cs.bX();
            delete this.Cs
        }
        if (!!this.kW) {
            this.kW.bX();
            delete this.kW
        }
    }
        ;
    bc.dq = function () {
        this.nd = jN;
        this.dr = hH
    }
        ;
    bc.di = function () {
        this.dv();
        var bk = bb.ek(this.bq);
        this.Cf = bk[1];
        this.lH.mbar = bk[0];
        this.lH.body = this.bq;
        bj.bt(bk[2], "mousedown", this.csT.bi(this));
        bj.bt(this.lH.mbar, "mousedown", this.TE.bi(this));
        this.bzW = bb.ek(this.lH.mbar)[0]
    }
        ;
    bc.csT = function (be) {
        bj.co(be);
        this.bG("onclose", be);
        if (!be.stopped) {
            this.cC()
        }
    }
        ;
    bc.TE = function (be) {
        bj.bG(document, "click")
    }
        ;
    bc.bcH = function (be) {
        if (!this.oN)
            return;
        bb.hG(this.oN, {
            top: be.top + "px",
            left: be.left + "px"
        })
    }
        ;
    bc.Lw = function () {
        var gk = [function () {
            return 0
        }
            , function (oT, EH, cs, bP) {
                if (bP == "top" && window.top != window.self) {
                    var bcn = 0
                        , bcr = 0;
                    if (top.g_topBarHeight)
                        bcn = top.g_topBarHeight;
                    if (top.g_bottomBarShow && top.g_bottomBarHeight)
                        bcr = top.g_bottomBarHeight;
                    if (oT.top <= bcn) {
                        var bct = Math.max(0, (EH.height - (bcn - oT.top) - bcr - cs.height) / 2);
                        return bct + bcn
                    } else {
                        var bct = Math.max(0, (EH.height - bcr - cs.height) / 2);
                        return bct + oT.top
                    }
                }
                return Math.max(0, oT[bP] + (EH[jZ[bP]] - cs[jZ[bP]]) / 2)
            }
            , function (oT, EH, cs, bP) {
                return oT[bP] + (EH[jZ[bP]] - cs[jZ[bP]])
            }
        ]
            , csR = ["left", "top"]
            , jZ = {
                left: "width",
                top: "height"
            };
        return function () {
            var bF = {}
                , dw = this.bq.style
                , kB = bb.rg()
                , oT = {
                    left: kB.scrollLeft,
                    top: kB.scrollTop
                }
                , EH = {
                    width: kB.clientWidth,
                    height: kB.clientHeight
                }
                , cs = {
                    width: this.bq.offsetWidth,
                    height: this.bq.offsetHeight
                }
                , eG = {
                    left: kB.clientWidth - this.bq.offsetWidth,
                    top: kB.clientHeight - this.bq.offsetHeight
                };
            bm.cr(csR, function (bP, bv) {
                var fR = gk[this.rS[bv]];
                if (!fR)
                    return;
                bF[bP] = fR(oT, EH, cs, bP)
            }, this);
            this.hz(bF)
        }
    }();
    bc.csP = function () {
        if (!this.Cs) {
            if (!this.TM)
                return;
            this.sz.parent = this.hh;
            this.Cs = this.TM.bH(this.sz)
        }
        this.Cs.bS()
    }
        ;
    bc.baU = function () {
        if (!!this.Cs)
            this.Cs.cC();
        bO.baU.apply(this, arguments)
    }
        ;
    bc.csW = function (lS) {
        if (!!lS) {
            if (lS instanceof bR.LC) {
                this.Cs = lS;
                return
            }
            if (bm.hF(lS)) {
                this.TM = lS;
                return
            }
            this.TM = bR.LC;
            if (bm.gO(lS))
                this.sz.clazz = lS;
            return
        }
        this.TM = null
    }
        ;
    bc.Cr = function (gl, fg) {
        if (!!this.bzW) {
            var UD = !fg ? "innerText" : "innerHTML";
            this.bzW[UD] = gl || "标题"
        }
        return this
    }
        ;
    bc.csU = function () {
        var ej = /\s+/
            , csL = {
                left: 0,
                center: 1,
                right: 2,
                auto: 3
            }
            , csJ = {
                top: 0,
                middle: 1,
                bottom: 2,
                auto: 3
            };
        return function (oO) {
            this.rS = (oO || "").split(ej);
            var gd = csL[this.rS[0]];
            if (gd == null)
                gd = 1;
            this.rS[0] = gd;
            var gd = csJ[this.rS[1]];
            if (gd == null)
                gd = 1;
            this.rS[1] = gd;
            return this
        }
    }();
    bc.bS = function () {
        bO.bS.apply(this, arguments);
        this.csP();
        return this
    }
        ;
    jN = bb.tY(".#<uispace>{position:absolute;z-index:1000;border:1px solid #aaa;background:#fff;}.#<uispace> .zbar{line-height:30px;background:#8098E7;border-bottom:1px solid #aaa;}.#<uispace> .zcnt{padding:10px 5px;}.#<uispace> .zttl{margin-right:20px;text-align:left;}.#<uispace> .zcls{position:absolute;top:5px;right:0;width:20px;height:20px;line-height:20px;cursor:pointer;}");
    hH = bb.jK('<div class="' + jN + '"><div class="zbar"><div class="zttl">标题</div></div><div class="zcnt"></div><span class="zcls" title="关闭窗体">×</span></div>')
})();
(function () {
    var bd = NEJ.P, bm = bd("nej.u"), bR = bd("nej.ui"), bcB;
    if (!!bR.bbQ)
        return;
    bR.bbQ = NEJ.C();
    bcB = bR.bbQ.bT(bR.bbg);
    bcB.bcW = function () {
        return bR.bcg.bH(this.dk)
    }
        ;
    bcB.Tf = function () {
        bR.bbQ.dC.Tf.apply(this, arguments);
        this.dk.mask = null;
        this.dk.title = "标题";
        this.dk.align = "";
        this.dk.draggable = !1;
        this.dk.onclose = null
    }
})();
(function () {
    var bd = NEJ.P, bb = bd("nej.e"), cq = bd("nej.ui"), bp = bd("nm.l"), bc, bO;
    bp.fA = NEJ.C();
    bc = bp.fA.bT(cq.bbQ);
    bc.cv = function (bf) {
        bf.clazz = "m-layer z-show " + (bf.clazz || "");
        bf.nohack = true;
        bf.draggable = true;
        this.cw(bf)
    }
        ;
    bc.eX = function (bh, cT) {
        if (!bh)
            return;
        bb.cf(bh, "display", !cT ? "none" : "");
        bh.lastChild.innerText = cT || ""
    }
        ;
    bc.fp = function (iT, dV, Tx, Tr) {
        var fd = "js-lock";
        if (dV === undefined)
            return bb.cN(iT, fd);
        !dV ? bb.bB(iT, fd) : bb.bC(iT, fd);
        iT.firstChild.innerText = !dV ? Tx : Tr
    }
        ;
    bp.fA.bS = function (bf) {
        bf = bf || {};
        if (bf.mask === undefined)
            bf.mask = "m-mask";
        if (bf.parent === undefined)
            bf.parent = document.body;
        if (bf.draggable === undefined)
            bf.draggable = true;
        !!this.gr && this.gr.bX();
        this.gr = this.bH(bf);
        this.gr.bS(bf);
        return this.gr
    }
        ;
    bp.fA.cC = function () {
        !!this.gr && this.gr.bX()
    }
})();
(function () {
    var bd = NEJ.P, cg = NEJ.O, bb = bd("nej.e"), bj = bd("nej.v"), bm = bd("nej.u"), bs = bd("nm.d"), bn = bd("nm.x"), bp = bd("nm.l"), bc, bO;
    bp.bcR = NEJ.C();
    bc = bp.bcR.bT(bp.fA);
    bO = bp.bcR.dC;
    bc.cv = function (bf) {
        this.cw(bf);
        if (bf.bubble === undefined)
            bf.bubble = true;
        this.Tn = bf.bubble;
        this.sd = bf.message || ""
    }
        ;
    bc.dq = function () {
        this.dr = bb.jK('<div class="lyct f-cb f-tc"></div>')
    }
        ;
    bc.di = function () {
        this.dv();
        bj.bt(this.bq, "click", this.dN.bi(this))
    }
        ;
    bc.dN = function (be) {
        var bh = bj.bZ(be, "d:action");
        if (!bh)
            return;
        if (bh.href)
            bj.dz(be);
        if (bb.bz(bh, "action") == "close")
            this.cC();
        if (this.Tn === !1)
            bj.tC(be);
        this.bG("onaction", bb.bz(bh, "action"))
    }
        ;
    bc.bS = function () {
        bO.bS.call(this);
        this.bq.innerHTML = this.sd
    }
        ;
    var hw = bb.fT('<div class="f-fs1" style="line-height:22px;">${message|default:""}</div><div class="lybtn">{list buttons as item}<a hidefocus="true" class="u-btn2 ${item.klass} {if item.style}${item.style}{else}u-btn2-w2{/if}" href="#" {if !!item.action}data-action="${item.action}"{/if}><i>${item.text}</i></a>{/list}</div>');
    bn.ot = function () {
        var gL;
        var dJ;
        var bcS = function (jL, ch) {
            if (bm.hF(jL, "function") && jL(ch) != -1)
                dJ.bX()
        };
        var Cw = function () {
            !!dJ && dJ.cC()
        };
        return function (bf) {
            clearTimeout(gL);
            bf = bf || {};
            bf.title = bf.title || "提示";
            bf.clazz = bf.clazz || "";
            bf.parent = bf.parent || document.body;
            bf.buttons = bf.buttons || [];
            bf.message = bb.dm(hw, bf);
            bf.onaction = bcS.bi(null, bf.action);
            if (bf.mask === undefined)
                bf.mask = true;
            if (bf.draggable === undefined)
                bf.draggable = true;
            !!dJ && dJ.bX();
            dJ = bp.bcR.bH(bf);
            dJ.bS();
            if (bf.autoclose)
                gL = setTimeout(Cw.bi(null), 2e3);
            return dJ
        }
    }();
    bn.gM = function (bf) {
        bf = bf || {};
        bf.clazz = bf.clazz || "m-layer-w1";
        bf.buttons = [{
            klass: "u-btn2-2",
            action: "close",
            text: bf.btntxt || "确定"
        }];
        var dJ = bn.ot(bf);
        return dJ
    }
        ;
    bn.iB = function (bf) {
        bf = bf || {};
        bf.clazz = bf.clazz || "m-layer-w2";
        bf.buttons = [{
            klass: "u-btn2-2",
            action: "ok",
            text: bf.btnok || "确定",
            style: bf.okstyle || ""
        }, {
            klass: "u-btn2-1",
            action: "close",
            text: bf.btncc || "取消",
            style: bf.ccstyle || ""
        }];
        var dJ = bn.ot(bf);
        return dJ
    }
})();
(function () {
    var bd = NEJ.P
        , cz = NEJ.F
        , bb = bd("nej.e")
        , bj = bd("nej.v")
        , bm = bd("nej.u");
    bb.csH = function () {
        var hx = /[\r\n]/gi
            , bW = {};
        var csE = function (ee) {
            return (ee || "").replace(hx, "aa").length
        };
        var bEN = function (bE) {
            var cl = bW[bE]
                , bET = bb.bD(bE)
                , csD = bb.bD(bE + "-counter");
            if (!bET || !cl)
                return;
            var be = {
                input: bET.value
            };
            be.length = cl.onlength(be.input);
            be.delta = cl.max - be.length;
            cl.onchange(be);
            csD.innerHTML = be.value || "剩余" + be.delta + "个字"
        };
        return function (bM, bf) {
            var bE = bb.mX(bM);
            if (!bE || !!bW[bE])
                return;
            var cl = NEJ.X({}, bf);
            cl.onchange = cl.onchange || cz;
            cl.onlength = csE;
            if (!cl.max) {
                var bFi = parseInt(bb.jn(bE, "maxlength"))
                    , bFn = parseInt(bb.bz(bE, "maxLength"));
                cl.max = bFi || bFn || 100;
                if (!bFi && !!bFn)
                    cl.onlength = bm.hg
            }
            bW[bE] = cl;
            bj.bt(bE, "input", bEN.bi(null, bE));
            var bh = bb.IM(bE, {
                nid: cl.nid || "js-counter",
                clazz: cl.clazz
            });
            cl.xid = bE + "-counter";
            bh.id = cl.xid;
            bEN(bE)
        }
    }()
})();
(function () {
    var bd = NEJ.P
        , bb = bd("nej.e")
        , cj = bd("nej.h");
    cj.bcT = function (bM, fk) { }
})();
(function () {
    var bd = NEJ.P
        , cz = NEJ.F
        , bR = bd("nej.p")
        , bb = bd("nej.e")
        , bj = bd("nej.v")
        , cj = bd("nej.h");
    if (bR.ov.trident)
        return;
    cj.bcT = function () {
        var bW = {};
        var HF = function (be) {
            var eA = bj.bZ(be);
            if (!!eA.value)
                return;
            bb.cf(bb.IM(eA), "display", "none")
        };
        var FC = function (be) {
            var eA = bj.bZ(be);
            if (!!eA.value)
                return;
            bb.cf(bb.IM(eA), "display", "")
        };
        var csC = function (eA, fk) {
            var bE = bb.mX(eA)
                , lE = bb.IM(eA, {
                    tag: "label",
                    clazz: fk
                });
            lE.htmlFor = bE;
            var eB = bb.jn(eA, "placeholder") || "";
            lE.innerText = eB == "null" ? "" : eB;
            var dF = eA.offsetHeight + "px";
            bb.hG(lE, {
                left: 0,
                display: !eA.value ? "" : "none"
            })
        };
        return cj.bcT.fz(function (be) {
            be.stopped = !0;
            var cn = be.args
                , eA = bb.bD(cn[0]);
            if (!!bW[eA.id])
                return;
            csC(eA, cn[1]);
            bW[eA.id] = !0;
            bj.bt(eA, "blur", FC.bi(null));
            bj.bt(eA, "focus", HF.bi(null))
        })
    }()
})();
(function () {
    var bd = NEJ.P
        , cj = bd("nej.h")
        , bb = bd("nej.e")
        , en = bd("nej.x");
    bb.hl = en.hl = function (bM, fk) {
        cj.bcT(bM, bb.bz(bM, "holder") || fk || "js-placeholder");
        return this
    }
        ;
    en.isChange = !0
})();
(function () {
    var bd = NEJ.P, cg = NEJ.O, cz = NEJ.F, bb = bd("nej.e"), bj = bd("nej.v"), bm = bd("nej.u"), bR = bd("nej.ut"), iL;
    if (!!bR.Tj)
        return;
    bR.Tj = NEJ.C();
    iL = bR.Tj.bT(bR.dX);
    iL.dG = function () {
        this.dM();
        this.GS = {
            tp: {
                nid: "js-nej-tp"
            },
            ok: {
                nid: "js-nej-ok"
            },
            er: {
                nid: "js-nej-er"
            }
        }
    }
        ;
    iL.cv = function (bf) {
        this.cw(bf);
        this.ho = document.forms[bf.form] || bb.bD(bf.form);
        this.df([[this.ho, "keypress", this.csB.bi(this)]]);
        this.sd = bf.message || {};
        this.sd.pass = this.sd.pass || "&nbsp;";
        var gf = this.qm(this.ho, "focusMode", 1);
        if (!isNaN(gf)) {
            this.bHj = {
                mode: gf,
                clazz: bf.focus
            }
        }
        this.CG = bf.holder;
        this.GS.tp.clazz = "js-mhd " + (bf.tip || "js-tip");
        this.GS.ok.clazz = "js-mhd " + (bf.pass || "js-pass");
        this.GS.er.clazz = "js-mhd " + (bf.error || "js-error");
        this.bHm = bf.invalid || "js-invalid";
        this.csA(bf);
        this.is();
        if (!!this.CH)
            this.CH.focus()
    }
        ;
    iL.cR = function () {
        this.cW();
        delete this.sd;
        delete this.CH;
        delete this.Dm;
        delete this.ho;
        delete this.bIc;
        delete this.Th
    }
        ;
    iL.qm = function (bh, Lx, bw) {
        var bF = bb.bz(bh, Lx);
        switch (bw) {
            case 1:
                return parseInt(bF);
            case 2:
                return (bF || "").toLowerCase() == "true";
            case 3:
                return this.bda(bF)
        }
        return bF
    }
        ;
    iL.CM = function (bF, bw) {
        if (bw == "date")
            return this.bda(bF);
        return parseInt(bF)
    }
        ;
    iL.bba = function () {
        var kZ = /^button|submit|reset|image|hidden|file$/i;
        return function (bh) {
            bh = this.bD(bh) || bh;
            var bw = bh.type;
            return !!bh.name && !kZ.test(bh.type || "")
        }
    }();
    iL.csz = function () {
        var kZ = /^hidden$/i;
        return function (bh) {
            if (this.bba(bh))
                return !0;
            bh = this.bD(bh) || bh;
            var bw = bh.type || "";
            return kZ.test(bw)
        }
    }();
    iL.bda = function () {
        var ej = /[-\/]/;
        var csx = function (bF) {
            if (!bF)
                return "";
            bF = bF.split(ej);
            bF.push(bF.shift());
            return bF.join("/")
        };
        return function (bF) {
            if ((bF || "").toLowerCase() == "now")
                return +(new Date);
            return Date.parse(csx(bF))
        }
    }();
    iL.csB = function (be) {
        if (be.keyCode != 13)
            return;
        this.bG("onenter", be)
    }
        ;
    iL.csw = function (bE, bY) {
        var sq = this.Th[bY]
            , bF = this.qm(bE, bY);
        if (!bF || !sq)
            return;
        this.baS(bE, sq);
        this.bdj(bE, bY, bF)
    }
        ;
    iL.cst = function (bE, bY) {
        try {
            var bJH = this.qm(bE, bY);
            if (!bJH)
                return;
            var bF = new RegExp(bJH);
            this.bdj(bE, bY, bF);
            this.baS(bE, this.Th[bY])
        } catch (e) { }
    }
        ;
    iL.csr = function (bE, bY) {
        var sq = this.Th[bY];
        if (!!sq && this.qm(bE, bY, 2))
            this.baS(bE, sq)
    }
        ;
    iL.bdl = function (bE, bY, bF) {
        bF = parseInt(bF);
        if (isNaN(bF))
            return;
        this.bdj(bE, bY, bF);
        this.baS(bE, this.Th[bY])
    }
        ;
    iL.bJQ = function (bE, bY) {
        this.bdl(bE, bY, this.qm(bE, bY))
    }
        ;
    iL.bJU = function (bE, bY) {
        this.bdl(bE, bY, bb.jn(bE, bY))
    }
        ;
    iL.bKA = function (bE, bY, bw) {
        var bF = this.CM(this.qm(bE, bY), this.qm(bE, "type"));
        this.bdl(bE, bY, bF)
    }
        ;
    iL.csq = function () {
        var hx = /^input|textarea$/i;
        var HF = function (be) {
            this.qL(bj.bZ(be))
        };
        var FC = function (be) {
            var bh = bj.bZ(be);
            if (!this.qm(bh, "ignore", 2)) {
                this.bKJ(bh)
            }
        };
        return function (bh) {
            if (this.qm(bh, "autoFocus", 2))
                this.CH = bh;
            var rX = bb.jn(bh, "placeholder");
            if (!!rX && rX != "null")
                bb.hl(bh, this.CG);
            if (!!this.bHj && hx.test(bh.tagName))
                bb.nu(bh, this.bHj);
            var bE = bb.mX(bh);
            this.csr(bE, "required");
            this.csw(bE, "type");
            this.cst(bE, "pattern");
            this.bJU(bE, "maxlength");
            this.bJU(bE, "minlength");
            this.bJQ(bE, "maxLength");
            this.bJQ(bE, "minLength");
            this.bKA(bE, "min");
            this.bKA(bE, "max");
            var bY = bh.name;
            this.sd[bY + "-tip"] = this.qm(bh, "tip");
            this.sd[bY + "-error"] = this.qm(bh, "message");
            this.qL(bh);
            var cG = this.Dm[bE]
                , bl = (cG || cg).data || cg
                , SQ = this.qm(bh, "counter", 2);
            if (SQ && (bl.maxlength || bl.maxLength)) {
                bb.csH(bE, {
                    nid: this.GS.tp.nid,
                    clazz: "js-counter"
                })
            }
            if (!!cG && hx.test(bh.tagName)) {
                this.df([[bh, "focus", HF.bi(this)], [bh, "blur", FC.bi(this)]])
            } else if (this.qm(bh, "focus", 2)) {
                this.df([[bh, "focus", HF.bi(this)]])
            }
        }
    }();
    iL.csA = function () {
        var DR = {
            number: /^[\d]+$/i,
            url: /^[a-z]+:\/\/(?:[\w-]+\.)+[a-z]{2,6}.*$/i,
            email: /^[\w-\.]+@(?:[\w-]+\.)+[a-z]{2,6}$/i,
            date: function (v) {
                return !v || !isNaN(this.bda(v))
            }
        };
        var csp = {
            required: function (bh) {
                var bw = bh.type
                    , cso = !bh.value
                    , csn = (bw == "checkbox" || bw == "radio") && !bh.checked;
                if (csn || cso)
                    return -1
            },
            type: function (bh, bf) {
                var ej = this.bIc[bf.type]
                    , gw = bh.value.trim()
                    , csm = !!ej.test && !ej.test(gw)
                    , csk = bm.hF(ej) && !ej.call(this, gw);
                if (csm || csk)
                    return -2
            },
            pattern: function (bh, bf) {
                if (!bf.pattern.test(bh.value))
                    return -3
            },
            maxlength: function (bh, bf) {
                if (bh.value.length > bf.maxlength)
                    return -4
            },
            minlength: function (bh, bf) {
                if (bh.value.length < bf.minlength)
                    return -5
            },
            maxLength: function (bh, bf) {
                if (bm.hg(bh.value) > bf.maxLength)
                    return -4
            },
            minLength: function (bh, bf) {
                if (bm.hg(bh.value) < bf.minLength)
                    return -5
            },
            min: function (bh, bf) {
                var hb = this.CM(bh.value, bf.type);
                if (isNaN(hb) || hb < bf.min)
                    return -6
            },
            max: function (bh, bf) {
                var hb = this.CM(bh.value, bf.type);
                if (isNaN(hb) || hb > bf.max)
                    return -7
            }
        };
        return function (bf) {
            this.bIc = NEJ.X(NEJ.X({}, DR), bf.type);
            this.Th = NEJ.X(NEJ.X({}, csp), bf.attr)
        }
    }();
    iL.baS = function (bE, yv) {
        if (!bm.hF(yv))
            return;
        var cG = this.Dm[bE];
        if (!cG || !cG.func) {
            cG = cG || {};
            cG.func = [];
            this.Dm[bE] = cG
        }
        cG.func.push(yv)
    }
        ;
    iL.bdj = function (bE, bY, bF) {
        if (!bY)
            return;
        var cG = this.Dm[bE];
        if (!cG || !cG.data) {
            cG = cG || {};
            cG.data = {};
            this.Dm[bE] = cG
        }
        cG.data[bY] = bF
    }
        ;
    iL.bKJ = function (bh) {
        bh = this.bD(bh) || bh;
        var cG = this.Dm[bb.mX(bh)];
        if (!bh || !cG || !this.bba(bh))
            return !0;
        var bo;
        bm.fD(cG.func, function (gk) {
            bo = gk.call(this, bh, cG.data);
            return bo != null
        }, this);
        if (bo == null) {
            var be = {
                target: bh,
                form: this.ho
            };
            this.bG("oncheck", be);
            bo = be.value
        }
        var be = {
            target: bh,
            form: this.ho
        };
        if (bo != null) {
            be.code = bo;
            this.bG("oninvalid", be);
            if (!be.stopped) {
                this.csj(bh, be.value || this.sd[bh.name + bo])
            }
        } else {
            this.bG("onvalid", be);
            if (!be.stopped)
                this.csh(bh, be.value)
        }
        return bo == null
    }
        ;
    iL.zN = function () {
        var csg = function (VN, WO) {
            return VN == WO ? "block" : "none"
        };
        var csf = function (bh, bw, cT) {
            var rX = bMP.call(this, bh, bw);
            if (!rX && !!cT)
                rX = bb.IM(bh, this.GS[bw]);
            return rX
        };
        var bMP = function (bh, bw) {
            var rX;
            if (bw == "tp")
                rX = bb.bD(bh.name + "-tip");
            if (!rX)
                rX = bb.bN(bh.parentNode, this.GS[bw].nid)[0];
            return rX
        };
        return function (bh, cT, bw) {
            bh = this.bD(bh) || bh;
            if (!bh)
                return;
            bw == "er" ? bb.bC(bh, this.bHm) : bb.bB(bh, this.bHm);
            var rX = csf.call(this, bh, bw, cT);
            if (!!rX && !!cT)
                rX.innerHTML = cT;
            bm.fD(this.GS, function (bF, bP) {
                bb.cf(bMP.call(this, bh, bP), "display", csg(bw, bP))
            }, this)
        }
    }();
    iL.qL = function (bh, cT) {
        this.zN(bh, cT || this.sd[bh.name + "-tip"], "tp");
        return this
    }
        ;
    iL.csh = function (bh, cT) {
        this.zN(bh, cT || this.sd[bh.name + "-pass"] || this.sd.pass, "ok");
        return this
    }
        ;
    iL.csj = function (bh, cT) {
        this.zN(bh, cT || this.sd[bh.name + "-error"], "er");
        return this
    }
        ;
    iL.jP = function () {
        var hx = /^(?:radio|checkbox)$/i;
        var cse = function (bF) {
            return bF == null ? "" : bF
        };
        var bNI = function (bF, bh) {
            if (hx.test(bh.type || "")) {
                bh.checked = bF == bh.value
            } else {
                bh.value = cse(bF)
            }
        };
        return function (bY, bF) {
            var bh = this.bD(bY);
            if (!bh)
                return this;
            if (bh.tagName == "SELECT" || !bh.length) {
                bNI(bF, bh)
            } else {
                bm.cr(bh, bNI.bi(null, bF))
            }
            return this
        }
    }();
    iL.bD = function (bY) {
        return this.ho.elements[bY]
    }
        ;
    iL.cty = function () {
        return this.ho
    }
        ;
    iL.baA = function () {
        var hx = /^radio|checkbox$/i
            , kZ = /^number|date$/;
        var csc = function (cI, bh) {
            var bY = bh.name
                , bF = bh.value
                , cG = cI[bY]
                , bw = this.qm(bh, "type");
            if (kZ.test(bw))
                bF = this.CM(bF, bw);
            if (hx.test(bh.type) && !bh.checked) {
                bF = this.qm(bh, "value");
                if (!bF)
                    return
            }
            if (!!cG) {
                if (!bm.fU(cG)) {
                    cG = [cG];
                    cI[bY] = cG
                }
                cG.push(bF)
            } else {
                cI[bY] = bF
            }
        };
        return function () {
            var bo = {};
            bm.cr(this.ho.elements, function (bh) {
                if (this.csz(bh))
                    csc.call(this, bo, bh)
            }, this);
            return bo
        }
    }();
    iL.bax = function () {
        var csb = function (bh) {
            if (this.bba(bh))
                this.qL(bh)
        };
        return function () {
            this.ho.reset();
            bm.cr(this.ho.elements, csb, this);
            return this
        }
    }();
    iL.ctz = function () {
        this.ho.submit();
        return this
    }
        ;
    iL.is = function () {
        var crO = function (bh) {
            if (this.bba(bh))
                this.csq(bh)
        };
        return function () {
            this.Dm = {};
            bm.cr(this.ho.elements, crO, this);
            return this
        }
    }();
    iL.crN = function (bh) {
        bh = this.bD(bh) || bh;
        if (!!bh)
            return this.bKJ(bh);
        var bo = !0;
        bm.cr(this.ho.elements, function (bh) {
            var lR = this.crN(bh);
            bo = bo && lR
        }, this);
        return bo
    }
})();
(function () {
    var bd = NEJ.P, cg = NEJ.O, bb = bd("nej.e"), bj = bd("nej.v"), bL = bd("nej.ut"), bm = bd("nej.u"), bn = bd("nm.x"), bp = bd("nm.l"), bc, bO;
    bp.bar = NEJ.C();
    bc = bp.bar.bT(bp.fA);
    bO = bp.bar.dC;
    bc.di = function () {
        this.dv();
        bj.bt(this.bq, "click", this.dN.bi(this));
        bj.bt(document, "mousewheel", this.CS.bi(this));
        if (!!document.body.addEventListener)
            document.body.addEventListener("DOMMouseScroll", this.CS.bi(this))
    }
        ;
    bc.cv = function (bf) {
        this.cw(bf);
        if (bf.jst) {
            this.bq.innerHTML = bb.dm(bf.jst, bf.data)
        } else if (bf.ntp) {
            this.bq.appendChild(bb.eU(bf.ntp))
        } else if (bf.txt) {
            this.bq.innerHTML = bb.jQ(bf.txt)
        } else if (bf.html) {
            this.bq.innerHTML = bf.html
        }
        var SE = this.bq.getElementsByTagName("form");
        if (SE.length) {
            this.ho = bL.Tj.bH({
                form: SE[0]
            })
        }
        this.EO = bb.ek(this.bq)[0]
    }
        ;
    bc.cR = function () {
        this.bG("ondestroy");
        this.cW();
        this.bq.innerHTML = "";
        delete this.EO
    }
        ;
    bc.dN = function (be) {
        var bh = bj.bZ(be, "d:action")
            , bl = this.ho ? this.ho.baA() : null
            , be = {
                action: bb.bz(bh, "action")
            };
        if (bl)
            be.data = bl;
        if (be.action) {
            this.bG("onaction", be);
            if (be.stopped)
                return;
            this.cC()
        }
    }
        ;
    bc.CS = function (be) {
        if (!this.EO)
            return;
        bj.co(be);
        var eG = be.wheelDelta || -be.detail;
        this.EO.scrollTop -= eG
    }
        ;
    bn.lT = function (bf) {
        bf.destroyable = bf.destroyable || true;
        bf.title = bf.title || "提示";
        bf.draggable = true;
        bf.parent = document.body;
        bf.mask = bf.mask || true;
        var Cm = bp.bar.bH(bf);
        Cm.bS();
        return Cm
    }
})();
(function () {
    var p = NEJ.P("nej.u");
    var btU = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
        , SD = {}
        , ET = {};
    for (var i = 0, l = btU.length, c; i < l; i++) {
        c = btU.charAt(i);
        SD[i] = c;
        ET[c] = i
    }
    var crM = function (kw) {
        var bv = 0, c, bo = [];
        while (bv < kw.length) {
            c = kw[bv];
            if (c < 128) {
                bo.push(String.fromCharCode(c));
                bv++
            } else if (c > 191 && c < 224) {
                bo.push(String.fromCharCode((c & 31) << 6 | kw[bv + 1] & 63));
                bv += 2
            } else {
                bo.push(String.fromCharCode((c & 15) << 12 | (kw[bv + 1] & 63) << 6 | kw[bv + 2] & 63));
                bv += 3
            }
        }
        return bo.join("")
    };
    var crJ = function () {
        var iH = /\r\n/g;
        return function (bl) {
            bl = bl.replace(iH, "\n");
            var bo = []
                , rU = String.fromCharCode(237);
            if (rU.charCodeAt(0) < 0)
                for (var i = 0, l = bl.length, c; i < l; i++) {
                    c = bl.charCodeAt(i);
                    c > 0 ? bo.push(c) : bo.push(256 + c >> 6 | 192, 256 + c & 63 | 128)
                }
            else
                for (var i = 0, l = bl.length, c; i < l; i++) {
                    c = bl.charCodeAt(i);
                    if (c < 128)
                        bo.push(c);
                    else if (c > 127 && c < 2048)
                        bo.push(c >> 6 | 192, c & 63 | 128);
                    else
                        bo.push(c >> 12 | 224, c >> 6 & 63 | 128, c & 63 | 128)
                }
            return bo
        }
    }();
    var Lp = function (kw) {
        var bv = 0
            , bo = []
            , gf = kw.length % 3;
        if (gf == 1)
            kw.push(0, 0);
        if (gf == 2)
            kw.push(0);
        while (bv < kw.length) {
            bo.push(SD[kw[bv] >> 2], SD[(kw[bv] & 3) << 4 | kw[bv + 1] >> 4], SD[(kw[bv + 1] & 15) << 2 | kw[bv + 2] >> 6], SD[kw[bv + 2] & 63]);
            bv += 3
        }
        if (gf == 1)
            bo[bo.length - 1] = bo[bo.length - 2] = "=";
        if (gf == 2)
            bo[bo.length - 1] = "=";
        return bo.join("")
    };
    var crG = function () {
        var sT = /\n|\r|=/g;
        return function (bl) {
            var bv = 0
                , bo = [];
            bl = bl.replace(sT, "");
            for (var i = 0, l = bl.length; i < l; i += 4)
                bo.push(ET[bl.charAt(i)] << 2 | ET[bl.charAt(i + 1)] >> 4, (ET[bl.charAt(i + 1)] & 15) << 4 | ET[bl.charAt(i + 2)] >> 2, (ET[bl.charAt(i + 2)] & 3) << 6 | ET[bl.charAt(i + 3)]);
            var cD = bo.length
                , gf = bl.length % 4;
            if (gf == 2)
                bo = bo.slice(0, cD - 2);
            if (gf == 3)
                bo = bo.slice(0, cD - 1);
            return bo
        }
    }();
    p.ctE = function (bl) {
        return crM(crG(bl))
    }
        ;
    p.crD = function (bl) {
        try {
            return window.btoa(bl)
        } catch (ex) {
            return Lp(crJ(bl))
        }
    }
})();
(function () {
    var bd = NEJ.P, cg = NEJ.O, bj = bd("nej.v"), bb = bd("nej.e"), bA = bd("nej.j"), bR = bd("nej.p"), bm = bd("nej.u"), bp = bd("nm.l"), bK = bd("nm.w"), cV = bd("nej.ui"), bs = bd("nm.d"), bn = bd("nm.x"), bc, bO;
    var TYPE_MAP = {
        13: "playlist",
        17: "program",
        18: "song",
        19: "album"
    };
    bp.buR = NEJ.C();
    bc = bp.buR.bT(bp.fA);
    bc.dq = function () {
        this.dr = "m-download-layer"
    }
        ;
    bc.di = function () {
        this.dv();
        var bk = bb.bN(this.bq, "j-flag");
        this.bdK = bk[0];
        this.bdL = bk[1];
        this.bvb = bk[2];
        bA.cE("/client/version/get", {
            type: "json",
            onload: this.crC.bi(this)
        });
        if (bR.Mk.mac) {
            bb.bB(this.bdK.parentNode, "f-hide");
            bb.bC(this.bdL.parentNode, "f-hide");
            bb.bC(this.bvb, "f-hide")
        } else {
            bb.bC(this.bdK.parentNode, "f-hide");
            bb.bB(this.bdL.parentNode, "f-hide");
            bb.bB(this.bvb, "f-hide")
        }
    }
        ;
    bc.cv = function (bf) {
        bf.clazz = " m-layer-down";
        bf.parent = bf.parent || document.body;
        bf.title = "下载";
        bf.draggable = !0;
        bf.destroyalbe = !0;
        bf.mask = true;
        this.cw(bf);
        this.df([[this.bq, "click", this.de.bi(this)]]);
        this.gc = TYPE_MAP[bf.type];
        this.ir = bf.id
    }
        ;
    bc.cR = function () {
        this.cW()
    }
        ;
    bc.CT = function () {
        this.cC()
    }
        ;
    bc.FG = function (be) {
        this.bG("onok", bF);
        this.cC()
    }
        ;
    bc.de = function (be) {
        var bh = bj.bZ(be, "d:action");
        switch (bb.bz(bh, "action")) {
            case "download":
                this.cC();
                window.open(bb.bz(bh, "src"));
                break;
            case "orpheus":
                this.cC();
                location.href = "orpheus://" + bm.crD(JSON.stringify({
                    type: this.gc,
                    id: this.ir,
                    cmd: "download"
                }));
                break
        }
    }
        ;
    bc.crC = function (be) {
        if (be.code == 200) {
            this.KY = be.data;
            this.bdK.innerText = "V" + this.KY.mac;
            this.bdL.innerText = "V" + this.KY.pc
        }
    }
        ;
    bn.baf = function (bf) {
        bp.buR.bH(bf).bS()
    }
})();
(function () {
    var bd = NEJ.P
        , cg = NEJ.O
        , bm = bd("nej.u")
        , bs = bd("nm.d")
        , cZ = {};
    bs.bD = function (bP) {
        return cZ[bP]
    }
        ;
    bs.wh = function (bP, cl) {
        cZ[bP] = cl
    }
        ;
    bs.gs = function (bl) {
        bm.fD(bl, function (bu, bP) {
            var cl = cZ[bP] || {};
            NEJ.X(cl, bu);
            cZ[bP] = cl
        })
    }
})();
(function () {
    var bd = NEJ.P
        , cz = NEJ.F
        , cj = bd("nej.h");
    cj.bae = function (bP) {
        return localStorage.getItem(bP)
    }
        ;
    cj.bad = function (bP, bF) {
        localStorage.setItem(bP, bF)
    }
        ;
    cj.bdO = function (bP) {
        localStorage.removeItem(bP)
    }
        ;
    cj.bdU = function () {
        localStorage.clear()
    }
        ;
    cj.crB = function () {
        var bo = [];
        for (var i = 0, l = localStorage.length; i < l; i++)
            bo.push(localStorage.key(i));
        return bo
    }
        ;
    cj.bec = function () {
        (document.onstorageready || cz)()
    }
        ;
    cj.beh = function () {
        return !0
    }
})();
(function () {
    var bd = NEJ.P, bR = bd("nej.p"), ks = bd("nej.c"), cj = bd("nej.h"), ux;
    if (bR.ov.trident || !!window.localStorage)
        return;
    var crA = function () {
        var sy, gL;
        var bgZ = function () {
            sy = document.createElement("div");
            NEJ.X(sy.style, {
                position: "absolute",
                top: 0,
                left: 0,
                width: "1px",
                height: "1px",
                zIndex: 1e4,
                overflow: "hidden"
            });
            document.body.insertAdjacentElement("afterBegin", sy);
            sy.innerHTML = '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="1" height="1"id="f-' + +(new Date) + '" codebase="http://fpdownload.macromedia.com/get/flashplayer/current/swflash.cab"><param name="movie" value="' + ks.bD("storage.swf") + '"/><param name="AllowScriptAccess" value="sameDomain"/></object>'
        };
        var Qi = function () {
            gL = window.clearTimeout(gL);
            var iS = sy.getElementsByTagName("object")[0];
            if (!!iS.initStorage) {
                delete sy;
                ux = iS;
                ux.initStorage("nej-storage");
                (document.onstorageready || cz)();
                return
            }
            gL = window.setTimeout(Qi, 500)
        };
        return function () {
            if (!!ux)
                return;
            bgZ();
            Qi()
        }
    }();
    cj.bae = cj.bae.fz(function (be) {
        be.stopped = !0;
        if (!ux)
            return;
        be.value = ux.getItem(be.args[0])
    });
    cj.bad = cj.bad.fz(function (be) {
        be.stopped = !0;
        if (!ux)
            return;
        var cn = be.args;
        ux.setItem(cn[0], cn[1])
    });
    cj.bdO = cj.bdO.fz(function (be) {
        be.stopped = !0;
        if (!ux)
            return;
        ux.removeItem(be.args[0])
    });
    cj.bdU = cj.bdU.fz(function (be) {
        be.stopped = !0;
        if (!!ux)
            ux.clear()
    });
    cj.bec = cj.bec.fz(function (be) {
        be.stopped = !0;
        crA()
    });
    cj.beh = cj.beh.fz(function (be) {
        be.stopped = !0;
        be.value = !!ux
    })
})();
(function () {
    var bd = NEJ.P
        , bm = bd("nej.u")
        , bj = bd("nej.v")
        , cj = bd("nej.h")
        , bA = bd("nej.j")
        , bL = bd("nej.ut")
        , bW = {};
    bA.xO = function (bP, bF) {
        var bxC = JSON.stringify(bF);
        try {
            cj.bad(bP, bxC)
        } catch (ex) {
            console.error(ex.message);
            console.error(ex)
        }
        if (bxC != cj.bae(bP))
            bW[bP] = bF;
        return this
    }
        ;
    bA.vS = function (bP) {
        var bl = JSON.parse(cj.bae(bP) || "null");
        return bl == null ? bW[bP] : bl
    }
        ;
    bA.bxP = function (bP, bF) {
        var bl = bA.vS(bP);
        if (bl == null) {
            bl = bF;
            bA.xO(bP, bl)
        }
        return bl
    }
        ;
    bA.Sn = function (bP) {
        delete bW[bP];
        cj.bdO(bP);
        return this
    }
        ;
    bA.ctF = function () {
        var ben = function (bu, bP, cI) {
            delete cI[bP]
        };
        return function () {
            bm.fD(bW, ben);
            cj.bdU();
            return this
        }
    }();
    bA.ctG = function (bo) {
        bo = bo || {};
        bm.cr(cj.crB(), function (bP) {
            bo[bP] = bA.vS(bP)
        });
        return bo
    }
        ;
    bL.he.bH({
        element: document,
        event: "storageready",
        oneventadd: function () {
            if (cj.beh()) {
                document.onstorageready()
            }
        }
    });
    var crx = function () {
        var crv = function (bF, bP, cI) {
            cj.bad(bP, JSON.stringify(bF));
            delete cI[bP]
        };
        return function () {
            bm.fD(bW, crv)
        }
    }();
    bj.bt(document, "storageready", crx);
    cj.bec()
})();
(function () {
    var bd = NEJ.P, bj = bd("nej.v"), bm = bd("nej.u"), bR = bd("nej.ut"), Lc;
    if (!!bR.beD)
        return;
    bR.beD = NEJ.C();
    Lc = bR.beD.bT(bR.dX);
    Lc.dG = function () {
        var hw = +(new Date)
            , oq = "dat-" + hw;
        return function () {
            this.dM();
            var bW = this.constructor[oq];
            if (!bW) {
                bW = {};
                this.constructor[oq] = bW
            }
            this.bU = bW
        }
    }();
    Lc.bD = function (bP) {
        return this.bU[bP]
    }
        ;
    Lc.wh = function (bP, bF) {
        var np = this.bU[bP];
        this.bU[bP] = bF;
        bj.bG(localCache, "cachechange", {
            key: bP,
            type: "set",
            oldValue: np,
            newValue: bF
        });
        return this
    }
        ;
    Lc.dY = function (bP) {
        var np = this.bU[bP];
        bm.XP(this.bU, bP);
        bj.bG(localCache, "cachechange", {
            key: bP,
            type: "delete",
            oldValue: np,
            newValue: undefined
        });
        return np
    }
        ;
    Lc.Zk = function (Fk) {
        return NEJ.Q(this.bU, Fk)
    }
        ;
    window.localCache = bR.beD.bH();
    bR.he.bH({
        element: localCache,
        event: "cachechange"
    })
})();
(function () {
    var bd = NEJ.P, gI = NEJ.R, cz = NEJ.F, bm = bd("nej.u"), bA = bd("nej.j"), bR = bd("nej.ut"), oq = "dat-" + +(new Date), oh;
    if (!!bR.beI)
        return;
    bR.beI = NEJ.C();
    oh = bR.beI.bT(bR.dX);
    oh.dG = function () {
        this.dM();
        this.bU = this.constructor[oq];
        if (!this.bU) {
            this.bU = {};
            this.bU[oq + "-l"] = {};
            this.constructor[oq] = this.bU
        }
    }
        ;
    oh.sQ = function (bP) {
        return this.bU[bP]
    }
        ;
    oh.qD = function (bP, bF) {
        this.bU[bP] = bF
    }
        ;
    oh.mw = function (bP, mq) {
        var bl = this.sQ(bP);
        if (bl == null) {
            bl = mq;
            this.qD(bP, bl)
        }
        return bl
    }
        ;
    oh.cru = function (bP) {
        if (bP != null) {
            delete this.bU[bP];
            return
        }
        bm.fD(this.bU, function (bu, bP) {
            if (bP == oq + "-l")
                return;
            this.cru(bP)
        }, this)
    }
        ;
    oh.ctH = function (bP) {
        if (!!bA.Sn)
            return bA.Sn(bP)
    }
        ;
    oh.crp = function (bP) {
        if (!!bA.vS)
            return bA.vS(bP)
    }
        ;
    oh.cro = function (bP, bF) {
        if (!!bA.xO)
            bA.xO(bP, bF)
    }
        ;
    oh.Dk = function (bP, mq) {
        var bl = this.RQ(bP);
        if (bl == null) {
            bl = mq;
            this.xQ(bP, bl)
        }
        return bl
    }
        ;
    oh.RQ = function (bP) {
        var bl = this.sQ(bP);
        if (bl != null)
            return bl;
        bl = this.crp(bP);
        if (bl != null)
            this.qD(bP, bl);
        return bl
    }
        ;
    oh.xQ = function (bP, bF) {
        this.cro(bP, bF);
        this.qD(bP, bF)
    }
        ;
    oh.bBh = function (bP) {
        if (bP != null) {
            delete this.bU[bP];
            if (!!bA.Sn)
                bA.Sn(bP);
            return
        }
        bm.fD(this.bU, function (bu, bP) {
            if (bP == oq + "-l")
                return;
            this.bBh(bP)
        }, this)
    }
        ;
    oh.ctI = function () {
        this.bBh();
        return this
    }
        ;
    oh.ctJ = function (bP) {
        var bl = this.bU[oq + "-l"];
        delete bl[bP]
    }
        ;
    oh.beO = function (bP) {
        var bl = this.bU[oq + "-l"]
            , cn = gI.slice.call(arguments, 1);
        bm.cr(bl[bP], function (eS) {
            try {
                eS.apply(null, cn)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
        });
        delete bl[bP]
    }
        ;
    oh.beQ = function (bP, eS) {
        eS = eS || cz;
        var bk = this.bU[oq + "-l"][bP];
        if (!bk) {
            bk = [eS];
            this.bU[oq + "-l"][bP] = bk;
            return !1
        }
        bk.push(eS);
        return !0
    }
        ;
    oh.crj = function (bk, cs, hA) {
        if (!bk)
            return !1;
        cs = parseInt(cs) || 0;
        hA = parseInt(hA) || 0;
        if (!hA) {
            if (!bk.loaded)
                return !1;
            hA = bk.length
        }
        if (!!bk.loaded)
            hA = Math.min(hA, bk.length - cs);
        for (var i = 0; i < hA; i++)
            if (!bk[cs + i])
                return !1;
        return !0
    }
})();
(function () {
    var bd = NEJ.P, cg = NEJ.O, cz = NEJ.F, bm = bd("nej.u"), bR = bd("nej.ut"), bc, bO;
    if (!!bR.RO)
        return;
    bR.RO = NEJ.C();
    bc = bR.RO.bT(bR.beI);
    bO = bR.RO.dC;
    bc.cv = function (bf) {
        this.cw(bf);
        this.wP = bf.key || "id";
        this.ck = bf.data || cg;
        this.cri = !!bf.autogc;
        this.crg(bf.id)
    }
        ;
    bc.cR = function () {
        this.cW();
        if (!!this.fr) {
            this.bCn()
        }
    }
        ;
    bc.crg = function (bE) {
        var bW;
        if (!!bE) {
            bW = this.bU[bE];
            if (!bW) {
                bW = {};
                this.bU[bE] = bW
            }
        }
        bW = bW || this.bU;
        bW.hash = bW.hash || {};
        this.RL = bW
    }
        ;
    bc.bCn = function () {
        this.fr = window.clearTimeout(this.fr);
        var cI = {};
        bm.fD(this.RL, function (bk, bP) {
            if (bP == "hash")
                return;
            if (!bm.fU(bk))
                return;
            bm.cr(bk, function (bu) {
                if (!bu)
                    return;
                cI[bu[this.wP]] = !0
            }, this)
        }, this);
        bm.fD(this.YM(), function (bu, bE, fi) {
            if (!cI[bE]) {
                delete fi[bE]
            }
        })
    }
        ;
    bc.crf = function () {
        if (!!this.fr) {
            this.fr = window.clearTimeout(this.fr)
        }
        this.fr = window.setTimeout(this.bCn.bi(this), 150)
    }
        ;
    bc.Db = function (bu, YJ) {
        bu = this.bCW(bu, YJ) || bu;
        if (!bu)
            return null;
        var bP = bu[this.wP];
        if (bP != null) {
            var jw = this.YM()[bP];
            if (!!jw)
                bu = NEJ.X(jw, bu);
            this.YM()[bP] = bu
        }
        delete bu.bDm;
        return bu
    }
        ;
    bc.bCW = cz;
    bc.beV = function (bP, bu) {
        if (!bu)
            return;
        if (!bm.fU(bu)) {
            var bk = this.iG(bP)
                , bu = this.Db(bu, bP);
            if (!!bu)
                bk.unshift(bu);
            return
        }
        bm.oj(bu, this.beV.bi(this, bP))
    }
        ;
    bc.RG = function (bP, dO) {
        var bk = this.iG(bP);
        bk.length = Math.max(bk.length, dO);
        this.beY(bP);
        return this
    }
        ;
    bc.lL = function (bP) {
        return this.iG(bP).length
    }
        ;
    bc.beY = function (bP, pz) {
        this.iG(bP).loaded = pz != !1;
        return this
    }
        ;
    bc.YE = function (bP) {
        return !!this.iG(bP).loaded
    }
        ;
    bc.tZ = function (bP, bk) {
        this.vC(bP);
        this.bfc({
            key: bP,
            offset: 0,
            limit: bk.length + 1
        }, {
                list: bk,
                total: bk.length
            })
    }
        ;
    bc.iG = function () {
        var DV = function (bP) {
            return (bP || "") + (!bP ? "" : "-") + "list"
        };
        return function (bP) {
            var bP = DV(bP)
                , bk = this.RL[bP];
            if (!bk) {
                bk = [];
                this.RL[bP] = bk
            }
            return bk
        }
    }();
    bc.YM = function () {
        var fi = this.RL.hash;
        if (!fi) {
            fi = {};
            this.RL.hash = fi
        }
        return fi
    }
        ;
    bc.bfd = function () {
        var DV = function (bf) {
            return "r-" + bf.key
        };
        return function (bf) {
            var jF = NEJ.X({}, bf)
                , oY = DV(jF);
            if (!this.beQ(oY, this.bG.bi(this))) {
                jF.rkey = oY;
                jF.onload = this.cre.bi(this, jF);
                this.bG("dopullrefresh", jF)
            }
            return this
        }
    }();
    bc.cre = function (bf, bk) {
        this.beV(bf.key, bk);
        this.beO(bf.rkey, "onpullrefresh", bf)
    }
        ;
    bc.pH = function () {
        var DV = function (bf) {
            return "r-" + bf.key + "-" + bf.offset + "-" + bf.limit
        };
        return function (bf) {
            bf = bf || cg;
            var jF = {
                key: "" + bf.key || "",
                ext: bf.ext || null,
                data: bf.data || null,
                offset: parseInt(bf.offset) || 0,
                limit: parseInt(bf.limit) || 0
            }
                , bk = this.iG(jF.key);
            if (this.crj(bk, jF.offset, jF.limit)) {
                this.bG("onlistload", jF);
                return this
            }
            var oY = DV(jF);
            if (!this.beQ(oY, this.bG.bi(this))) {
                jF.rkey = oY;
                jF.onload = this.bfc.bi(this, jF);
                this.bG("doloadlist", jF)
            }
            return this
        }
    }();
    bc.bfc = function () {
        var DY = function (bu, bv, bk) {
            if (!!bu) {
                return !0
            }
            bk.splice(bv, 1)
        };
        return function (bf, bo) {
            bf = bf || cg;
            var bP = bf.key
                , cs = bf.offset
                , bEB = this.iG(bP);
            var bk = bo || [];
            if (!bm.fU(bk)) {
                bk = bo.result || bo.list || [];
                var dO = parseInt(bo.total);
                if (!isNaN(dO) || dO > bk.length) {
                    this.RG(bP, dO)
                }
            }
            bm.cr(bk, function (bu, bv) {
                bEB[cs + bv] = this.Db(bu, bP)
            }, this);
            if (bk.length < bf.limit) {
                this.beY(bP);
                bm.oj(bEB, DY)
            }
            this.beO(bf.rkey, "onlistload", bf)
        }
    }();
    bc.vC = function () {
        var DY = function (bu, bv, bk) {
            bk.splice(bv, 1)
        };
        return function (bP) {
            var bk = this.iG(bP);
            bm.oj(bk, DY);
            this.beY(bP, !1);
            if (this.cri) {
                this.crf()
            }
            return this
        }
    }();
    bc.bED = function (bu, YJ) {
        return !bu.bDm
    }
        ;
    bc.fH = function (bE) {
        return this.YM()[bE]
    }
        ;
    bc.ctK = function (bE) {
        var bu = this.fH(bE);
        if (!!bu)
            bu.bDm = !0
    }
        ;
    bc.Yz = function () {
        var DV = function (bf) {
            return "r-" + bf.key + "-" + bf.id
        };
        return function (bf) {
            bf = bf || cg;
            var bE = bf[this.wP]
                , jF = {
                    id: bE,
                    ext: bf.ext,
                    data: bf.data || {},
                    key: "" + bf.key || ""
                };
            bu = this.fH(bE);
            jF.data[this.wP] = bE;
            if (!!bu && this.bED(bu, jF.key)) {
                this.bG("onitemload", jF);
                return this
            }
            var oY = DV(jF);
            if (!this.beQ(oY, this.bG.bi(this))) {
                jF.rkey = oY;
                jF.onload = this.crb.bi(this, jF);
                this.bG("doloaditem", jF)
            }
            return this
        }
    }();
    bc.crb = function (bf, bu) {
        bf = bf || cg;
        this.Db(bu, bf.key);
        this.beO(bf.rkey, "onitemload", bf)
    }
        ;
    bc.kJ = function (bf) {
        bf = NEJ.X({}, bf);
        bf.onload = this.zG.bi(this, bf);
        this.bG("doadditem", bf)
    }
        ;
    bc.zG = function (bf, bu) {
        var bP = bf.key;
        bu = this.Db(bu, bP);
        if (!!bu) {
            var ge = 0
                , bk = this.iG(bP);
            if (!bf.push) {
                ge = -1;
                var cs = bf.offset || 0;
                bk.splice(cs, 0, bu)
            } else if (bk.loaded) {
                ge = 1;
                bk.push(bu)
            } else {
                bk.length++
            }
        }
        var be = {
            key: bP,
            flag: ge,
            data: bu,
            action: "add",
            ext: bf.ext
        };
        this.bG("onitemadd", be);
        return be
    }
        ;
    bc.Ry = function (bf) {
        bf = NEJ.X({}, bf);
        bf.onload = this.bfm.bi(this, bf);
        this.bG("dodeleteitem", bf)
    }
        ;
    bc.bfm = function (bf, bFr) {
        var bu, bP = bf.key;
        if (!!bFr) {
            bu = this.fH(bf.id) || null;
            var bE = bf.id
                , cra = this.wP
                , bk = this.iG(bP)
                , bv = bm.eu(bk, function (jw) {
                    return !!jw && jw[cra] == bE
                });
            if (bv >= 0)
                bk.splice(bv, 1)
        }
        var be = {
            key: bP,
            data: bu,
            action: "delete",
            ext: bf.ext
        };
        this.bG("onitemdelete", be);
        return be
    }
        ;
    bc.Yl = function (bf) {
        bf = NEJ.X({}, bf);
        bf.onload = this.cqY.bi(this, bf);
        this.bG("doupdateitem", bf)
    }
        ;
    bc.cqY = function (bf, bu) {
        var bP = bf.key;
        if (!!bu)
            bu = this.Db(bu, bP);
        var be = {
            key: bP,
            data: bu,
            action: "update",
            ext: bf.ext
        };
        this.bG("onitemupdate", be);
        return be
    }
})();
(function () {
    var bd = NEJ.P, cg = NEJ.O, cz = NEJ.F, bm = bd("nej.u"), bR = bd("nej.ut"), bc;
    if (!!bR.bft)
        return;
    bR.bft = NEJ.C();
    bc = bR.bft.bT(bR.RO);
    bc.cv = function (bf) {
        this.cw(bf);
        this.bks({
            doloadlist: this.Yi.bi(this),
            doloaditem: this.bfv.bi(this),
            doadditem: this.bFQ.bi(this),
            dodeleteitem: this.Yf.bi(this),
            doupdateitem: this.Yd.bi(this),
            dopullrefresh: this.bGh.bi(this)
        })
    }
        ;
    bc.Yi = cz;
    bc.bGh = cz;
    bc.bfv = cz;
    bc.bFQ = cz;
    bc.Yf = cz;
    bc.Yd = cz
})();
(function () {
    var bd = NEJ.P, cg = NEJ.O, cz = NEJ.F, bm = bd("nej.u"), bj = bd("nej.v"), bA = bd("nej.j"), bL = bd("nej.ut"), bn = bd("nm.x"), bs = bd("nm.d"), bc, bO;
    bs.iR = NEJ.C();
    bc = bs.iR.bT(bL.bft);
    bc.dK = function () {
        var Rs = location.protocol + "//" + location.host;
        var cqX = function (cF, bl) {
            var cI = {
                conf: {},
                data: {},
                urls: []
            };
            bm.cr(cF, function (bP, bv, bk) {
                var cl = bs.bD(bP);
                if (!cl)
                    return;
                var bfz = bGO(cl.url, bl[bP]);
                cI.urls.push(bfz);
                cI.conf[bfz] = cl;
                cI.data[bfz] = JSON.stringify(bl[bP] == null ? "" : bl[bP])
            });
            return cI
        };
        var bGO = function (ce, bl) {
            return ce.replace(/\{(.*?)\}/gi, function ($1, $2) {
                return bl[$2] || $1
            })
        };
        var bGW = function (cl, bf, be) {
            bj.bG(window, "requesterror", be);
            if (!!be.stopped)
                return;
            var KT = cl.onerror || bf.onerror;
            if (bm.gO(KT)) {
                this.bG(KT, be, bf)
            } else {
                (KT || cz).call(this, be, bf)
            }
            var be = {
                result: be,
                option: bf
            };
            this.bG("onerror", be);
            if (!be.stopped)
                (cl.onmessage || cz).call(this, be.result.code, be.result)
        };
        var bHc = function (bV, cl, bf) {
            var bo = bV;
            if (bm.hF(cl.format)) {
                bo = cl.format.call(this, bV, bf)
            }
            return bo
        };
        var yC = function (bV, cl, bf, vX) {
            if (bm.hF(cl.beforeload)) {
                cl.beforeload.call(this, bV, bf, cl)
            }
            if (bV && bV.code != null && bV.code != 200) {
                bGW.call(this, cl, bf, {
                    key: bf.key,
                    code: bV.code,
                    message: bV.message || "",
                    captchaId: bV.captchaId,
                    ext: bV
                });
                return
            }
            var bo = bV;
            if (!vX) {
                bo = bHc.call(this, bV, cl, bf)
            } else if (bm.hF(cl.format)) {
                var bfD = [];
                bm.cr(vX.urls, function (ce) {
                    bfD.push(bHc.call(this, bV[ce], vX.conf[ce], bf))
                }, this);
                bfD.push(bf);
                bo = cl.format.apply(this, bfD)
            }
            var vp = cl.onload || bf.onload
                , bHl = cl.finaly || bf.finaly || cz;
            if (bm.gO(vp)) {
                bHl.call(this, this.bG(vp, bo), bf)
            } else {
                bHl.call(this, (vp || cz).call(this, bo), bf)
            }
        };
        var BF = function (cl, bf, dh) {
            bGW.call(this, cl, bf, {
                key: bf.key,
                code: dh.code || -1,
                message: dh.message || ""
            })
        };
        return function (cl, bf) {
            if (bm.gO(cl)) {
                cl = bs.bD(cl)
            }
            delete bf.value;
            (cl.filter || cz).call(this, bf, cl);
            var bV = bf.value;
            if (!!bV) {
                yC.call(this, bV, cl, bf);
                return
            }
            var ce, bl = bf.data || cg, zt = {
                cookie: !0,
                type: cl.rtype || "json",
                method: cl.type || "POST",
                onerror: BF.bi(this, cl, bf),
                noescape: cl.noescape
            };
            if (bm.fU(cl.url)) {
                var vX = cqX(cl.url, bl);
                ce = Rs + "/api/batch";
                zt.data = bm.eH(vX.data);
                zt.onload = yC.fE(this, cl, bf, vX);
                zt.headers = {
                    "batch-method": "POST"
                };
                delete vX.data
            } else {
                var mM = cl.url.indexOf(":") < 0 ? Rs : "";
                ce = bGO(mM + cl.url, bl);
                zt.data = bm.eH(bf.data);
                zt.onload = yC.fE(this, cl, bf)
            }
            if (zt.method == "GET")
                zt.query = zt.data;
            return bA.cE(ce, zt)
        }
    }();
    bc.ES = function () {
        var hx = /^get|list|pull$/i;
        return function (bHw, bf) {
            var bP = bf.key
                , cl = bs.bD(bP.split("-")[0] + "-" + bHw);
            if (hx.test(bHw) && bP.indexOf("post-") < 0)
                cl.type = "GET";
            this.dK(cl, bf)
        }
    }();
    bc.ctL = function (bP, bk) {
        var dO = bk.length;
        this.bfc({
            key: bP,
            offset: 0,
            limit: dO + 1
        }, {
                list: bk,
                total: dO
            })
    }
        ;
    bc.Yi = function (bf) {
        this.ES("list", bf)
    }
        ;
    bc.bfv = function (bf) {
        this.ES("get", bf)
    }
        ;
    bc.bGh = function (bf) {
        this.ES("pull", bf)
    }
        ;
    bc.bFQ = function (bf) {
        this.ES("add", bf)
    }
        ;
    bc.Yf = function (bf) {
        this.ES("del", bf)
    }
        ;
    bc.Yd = function (bf) {
        this.ES("update", bf)
    }
        ;
    bc.cqS = function (bu) {
        this.Db(bu)
    }
        ;
    bL.he.bH({
        element: window,
        event: "requesterror"
    })
})();
(function () {
    var bd = NEJ.P, cg = NEJ.O, cz = NEJ.F, bj = bd("nej.v"), bL = bd("nej.ut"), bs = bd("nm.d"), bfN = {}, bc, bO;
    var wp = function (bo, bf) {
        bo.conf = bf.conf;
        return bo
    };
    bs.gs({
        "res-mv-get": {
            type: "GET",
            url: "/api/v1/mv/detail",
            format: function (bV, bf) {
                return wp({
                    mv: bV
                }, bf)
            }
        },
        "res-song-get": {
            type: "GET",
            url: "/api/song/detail",
            format: function (bo, bf) {
                if (!!bo.songs && bo.songs.length > 0)
                    bo.song = bo.songs[0];
                else
                    bo.song = bfN;
                delete bo.songs;
                return wp(bo, bf)
            },
            filter: function (bf) {
                bf.data.ids = "[" + bf.data.id + "]"
            }
        },
        "res-program-get": {
            type: "GET",
            url: "/api/dj/program/detail",
            format: wp
        },
        "res-album-get": {
            type: "GET",
            url: "/api/album/{id}",
            format: wp
        },
        "res-playlist-get": {
            type: "GET",
            url: "/api/playlist/detail",
            format: function (bo, bf) {
                bo.playlist = bo.result;
                delete bo.result;
                return wp(bo, bf)
            }
        },
        "res-mv-play": {
            type: "GET",
            url: "/api/song/mv/play",
            format: wp
        },
        "res-playlist-play": {
            type: "GET",
            url: "/api/playlist/update/playcount",
            format: wp
        },
        "res-program-play": {
            type: "GET",
            url: "/api/dj/program/listen",
            format: wp
        },
        "res-djradio-get": {
            type: "GET",
            url: "/api/dj/program/byradio",
            filter: function (bf) {
                var bk = bf.data.id.split("-");
                bf.data.radioId = bk[0];
                bf.data.asc = bk[1] == 2;
                bf.data.limit = 1e3;
                delete bf.data.id
            },
            format: function (bV, bf) {
                var cqR = {
                    id: bf.data.radioId,
                    programs: bV.programs
                };
                return wp({
                    djradio: cqR
                }, bf)
            }
        },
        "res-hotSongs-get": {
            type: "GET",
            url: "/api/artist/{id}",
            format: wp
        },
        "res-lyric-get": {
            type: "GET",
            url: "/api/song/lyric",
            filter: function (bf) {
                bf.data.lv = 0;
                bf.data.tv = 0
            },
            format: function (bo, bf) {
                var xV = {
                    lyric: "",
                    nolyric: true
                };
                if (bo.code == 200 && bo.lrc && bo.lrc.lyric) {
                    xV.lyric = bo.lrc.lyric;
                    xV.nolyric = false
                } else {
                    xV.nolyric = true
                }
                return wp({
                    lyric: xV
                }, bf)
            }
        }
    });
    bs.xX = NEJ.C();
    bc = bs.xX.bT(bs.iR);
    bc.cqP = function (bw, dT) {
        return this.sQ(this.XJ(bw, dT))
    }
        ;
    bc.Rg = function (bw, dT, bf) {
        bf = bf || {};
        var bl = this.sQ(this.XJ(bw, dT));
        if (bl && (bw != 13 && bw != 19 || bf.conf && bf.conf.useCache)) {
            this.bG("onresourceload", bw, dT, bl, bf.conf);
            return
        }
        bf.data = {
            id: dT
        };
        bf.onload = this.cqO.bi(this, bw, dT);
        bf.onerror = this.cqN.bi(this, bw, dT);
        this.dK("res-" + this.Bw(bw) + "-get", bf)
    }
        ;
    bc.cqO = function (bw, dT, bo) {
        var bl = bo[this.Bw(bw)];
        this.qD(this.XJ(bw, dT), bl);
        this.bG("onresourceload", bw, dT, bl, bo.conf)
    }
        ;
    bc.cqN = function (bw, dT, bo, bf) {
        if (bo.code != 404) {
            this.bG("onresourceerror", bw, dT, bo.code);
            return
        }
        this.qD(this.XJ(bw, dT), bfN);
        this.bG("onresourceload", bw, dT, bfN, bf.conf)
    }
        ;
    bc.ctM = function (bw, bf) {
        this.dK("res-" + this.Bw(bw) + "-play", bf)
    }
        ;
    bc.XJ = function (bw, dT) {
        return "res-" + this.Bw(bw) + "-" + dT
    }
        ;
    bc.Bw = function (bw) {
        var cI = {
            2: "hotSongs",
            13: "playlist",
            17: "program",
            18: "song",
            19: "album",
            21: "mv",
            41: "lyric",
            70: "djradio"
        };
        return cI[bw]
    }
        ;
    bs.xX.KQ = function (bw, dT) {
        if (!this.gr)
            this.gr = bs.xX.bH({});
        return this.gr.cqP(bw, dT)
    }
})();
(function () {
    var bd = NEJ.P, cg = NEJ.O, cz = NEJ.F, bj = bd("nej.v"), bm = bd("nej.u"), bL = bd("nej.ut"), bs = bd("nm.d"), bfX = /^[1-9][0-9]*$/, bc, bO;
    var LOCAL_LOG_KEY = "local-log";
    bs.gs({
        "bi-log": {
            url: "/api/feedback/weblog"
        },
        "bi-batch-log": {
            url: "/api/feedback/weblog"
        },
        "plus-mv-count": {
            url: "/api/song/mv/play"
        },
        "plus-song-count": {
            url: "/api/song/play"
        },
        "plus-dj-count": {
            type: "GET",
            url: "/api/dj/program/listen"
        },
        "plus-playlist-count": {
            type: "GET",
            url: "/api/playlist/update/playcount"
        }
    });
    bs.jE = NEJ.C();
    bc = bs.jE.bT(bs.iR);
    bc.ic = function (ch, cl) {
        if (!ch || !cl)
            return;
        if (bm.gO(cl)) {
            try {
                cl = JSON.parse(cl)
            } catch (_e) {
                if (console && console.warn) {
                    console.warn("bilog error: ", bb)
                }
            }
        }
        if (!bm.mK(cl))
            return;
        this.dK("bi-log", {
            data: {
                logs: JSON.stringify([{
                    action: ch,
                    json: cl
                }])
            }
        });
        if (typeof GEnvType == "string" && GEnvType == "local") {
            console.log("[BI LOG] action=" + ch + ", json=" + JSON.stringify(cl))
        }
    }
        ;
    bc.XB = function (pj) {
        if (!bm.fU(pj))
            return;
        this.dK("bi-batch-log", {
            data: {
                logs: JSON.stringify(pj)
            }
        })
    }
        ;
    bc.bJL = function (cl) {
        if (!cl || !cl.type || !cl.rid)
            return;
        var pi = cl.type;
        if (bfX.test(pi)) {
            pi = this.Bw(pi)
        }
        if (!pi)
            return;
        if (pi == "playlist")
            pi = "list";
        this.ic("search", {
            type: pi,
            id: cl.rid || null,
            keyword: cl.keyword || null
        })
    }
        ;
    bc.Rd = function () {
        var cqI = /^\/m\/(song|album|playlist)\?id=(\d+)/;
        return function (cl) {
            if (!cl || !cl.type || !cl.rid)
                return;
            if (cl.play === undefined)
                cl.play = true;
            var pi = cl.type;
            if (bfX.test(pi)) {
                pi = this.Bw(pi)
            }
            if (!pi)
                return;
            if (pi == "playlist")
                pi = "list";
            var bV = {
                id: cl.rid,
                type: pi
            };
            if (pi == "song" && cl.source) {
                bV.source = this.bKt(cl.source);
                if (!!cl.sourceid)
                    bV.sourceid = cl.sourceid
            }
            this.ic(!cl.play ? "addto" : "play", bV);
            if (pi == "song" && cl.hash && cl.hash.match(cqI)) {
                this.ic(!cl.play ? "addto" : "play", {
                    type: RegExp.$1,
                    id: RegExp.$2
                })
            }
        }
    }();
    bc.bfZ = function (bE, cY, fj, FP) {
        var bV = {
            type: "song",
            wifi: 0,
            download: 0
        };
        var cqF = {
            1: "ui",
            2: "playend",
            3: "interrupt",
            4: "exception"
        };
        bV.id = bE;
        bV.time = Math.round(cY);
        bV.end = bm.gO(FP) ? FP : cqF[FP] || "";
        if (fj && fj.fid) {
            bV.source = this.bKt(fj.fid);
            bV.sourceId = fj.fdata
        }
        this.ic("play", bV)
    }
        ;
    bc.bKG = function (bw, dT) {
        if (!bw || !dT)
            return;
        if (bfX.test(bw))
            bw = this.Bw(bw);
        if (bw != "playlist" && bw != "dj")
            return;
        var cl = bs.bD("plus-" + bw + "-count");
        if (!cl)
            return !1;
        this.dK(cl, {
            data: {
                id: dT
            }
        });
        var bW = this.mw("play-hist-" + bw, []);
        if (bm.eu(bW, dT) < 0) {
            bW.push(dT);
            return !0
        }
        return !1
    }
        ;
    bc.Bw = function (bw) {
        var cI = {
            1: "user",
            2: "artist",
            13: "playlist",
            17: "dj",
            18: "song",
            19: "album",
            21: "mv",
            31: "toplist"
        };
        return cI[bw]
    }
        ;
    bc.bKt = function (KM) {
        var cI = {
            1: "user",
            2: "artist",
            13: "list",
            17: "dj",
            18: "song",
            19: "album",
            21: "mv",
            31: "toplist",
            32: "search",
            33: "search",
            34: "event",
            35: "msg"
        };
        return cI[KM]
    }
        ;
    bc.cqD = function (iD) {
        var pj = this.Dk(LOCAL_LOG_KEY, []);
        pj.unshift(iD);
        if (pj.length > 200) {
            pj.length = 200
        }
        this.xQ(LOCAL_LOG_KEY, pj)
    }
        ;
    bc.cqB = function () {
        return this.RQ(LOCAL_LOG_KEY)
    }
})();
(function () {
    var bd = NEJ.P
        , cg = NEJ.O
        , cz = NEJ.F
        , bj = bd("nej.v")
        , bA = bd("nej.j")
        , bL = bd("nej.ut")
        , bb = bd("nej.e")
        , bm = bd("nej.u")
        , bp = bd("nm.l")
        , bn = bd("nm.x")
        , bs = bd("nm.d");
    if (!bs.xX)
        return;
    var bW = bs.xX.bH({
        onresourceload: cqA
    });
    var Gb = bs.jE.hC();
    function cqA(bw, dT, bl, cl) {
        var bk = [];
        switch (parseInt(bw)) {
            case 2:
                bk = bl;
                break;
            case 13:
                bk = bl.tracks;
                break;
            case 18:
                bk.push(bl);
                break;
            case 19:
                bk = bl.songs;
                break;
            case 21:
                if (bl.mp && bl.mp.fee && bl.mp.pl <= 0) {
                    bn.bgj(bl.data.id, bl.mp.fee);
                    return
                }
                break
        }
        if (bn.KJ(bk, true, null, bw == 19 ? {
            source: "album",
            sourceid: dT
        } : null) == 0) {
            return
        }
        bn.gM({
            clazz: "m-layer-w2",
            bubble: !1,
            message: cl.message
        })
    }
    function cqy(be, sE, zX, hm) {
        hm = hm || {};
        if (be.action == "ok") {
            if (zX) {
                location.dispatch2("/payfee?songId=" + zX)
            } else {
                location.dispatch2("/payfee?fee=" + sE || 1)
            }
            Gb.ic("click", {
                type: "tobuyvip",
                name: "box",
                source: hm.source || "song",
                sourceid: hm.sourceid || zX || 0
            })
        } else if (be.action == "song") {
            location.dispatch2("/payfee?singleSong=true&songId=" + zX);
            Gb.ic("click", {
                type: "tobuyone",
                name: "box",
                source: hm.source || "song",
                sourceid: hm.sourceid || zX || 0
            })
        }
    }
    function QP(cT) {
        bn.gM({
            clazz: "m-layer-w2",
            bubble: !1,
            message: cT,
            btntxt: "知道了"
        })
    }
    function QO(cT, bV) {
        QP((bV || cg).toast || cT)
    }
    bn.kN = function (cT, bE, bw, cqx, cm) {
        cT = cT || "由于版权保护，您所在的地区暂时无法使用。";
        if (cqx && cm && cm.privilege && cm.privilege.toast) {
            bA.cE("/api/song/toast", {
                query: {
                    id: cm.id
                },
                type: "json",
                onload: QO.bi(this, cT),
                onerror: QO.bi(this, cT)
            })
        } else if (bE && bw) {
            bW.Rg(bw, bE, {
                conf: {
                    message: cT,
                    useCache: bw != 18
                }
            })
        } else {
            QP(cT)
        }
    }
        ;
    bn.wq = function (sE, zX, bw, hm, rf) {
        var cZ, uc = "m-popup-info", bgk = "单首购买", bgl = "马上去开通", dS = "唱片公司要求，当前歌曲须付费使用。", bMX = true;
        try {
            cZ = top.api.feeMessage || {}
        } catch (e) {
            cZ = {}
        }
        if (sE == 1 || sE == 8 || sE == 16) {
            if (bw == "song") {
                uc = "m-popup-song-buy";
                dS = cZ["vip2"] || dS;
                bgl = cZ["vip2button"] || "包月购买";
                bgk = cZ["vip2link"] || bgk;
                if (rf && rf.flag !== undefined) {
                    var cF = rf.flag.toString(2).split("");
                    if (parseInt(cF.pop(), 10) == 1) {
                        bMX = false
                    }
                }
            } else {
                dS = cZ["vip"] || dS
            }
        } else if (sE == 4) {
            dS = cZ["album"] || dS;
            bgl = "立即订购"
        } else {
            dS = cZ["unknow"] || dS
        }
        bn.lT({
            clazz: "m-layer-w5",
            html: bb.dm(uc, {
                songTxt: bgk,
                tip: dS,
                oktext: bgl,
                cctext: "以后再说",
                showSongText: bMX
            }),
            onaction: cqy.fE(null, sE, zX, hm)
        })
    }
        ;
    bn.bNa = function (jc, iU) {
        bn.iB({
            title: "提示",
            message: "唱片公司要求，该歌曲须下载后播放",
            btnok: "下载",
            btncc: "取消",
            okstyle: "u-btn2-w1",
            ccstyle: "u-btn2-w1",
            action: function (bw) {
                if (bw == "ok") {
                    bn.baf({
                        id: jc,
                        type: iU
                    })
                }
            }
        })
    }
        ;
    bn.bgj = function (pO, sE) {
        var cZ, dS = "唱片公司要求，当前歌曲须付费使用。";
        try {
            cZ = top.api.feeMessage || {}
        } catch (e) {
            cZ = {}
        }
        if (sE == 1 || sE == 8) {
            dS = cZ["vip"] || dS
        } else if (sE == 4) {
            dS = cZ["album"] || dS
        } else {
            dS = cZ["unknow"] || dS
        }
        return bn.lT({
            clazz: "m-layer-w5",
            html: bb.dm("m-popup-info", {
                tip: dS,
                oktext: "马上去开通",
                cctext: "以后再说"
            }),
            onaction: function (be) {
                if (be.action == "ok") {
                    location.dispatch2("/payfee?mvId=" + pO);
                    Gb.ic("click", {
                        type: "tobuyone",
                        name: "box",
                        source: "mv",
                        sourceid: pO || 0
                    })
                }
            }
        })
    }
        ;
    bn.KJ = function () {
        function compareFee(cqu, cqs) {
            var cI = {
                1: 99,
                8: 99,
                4: 88,
                16: 99
            };
            return (cI[cqu] || 0) - (cI[cqs] || 0)
        }
        return function (bk, dS, vT, hm) {
            vT = vT || {};
            var yv = []
                , KH = {}
                , btf = 0
                , bth = 0
                , KG = null;
            if (!bk || !bk.length)
                return yv;
            bm.cr(bk, function (cm) {
                var gG = bn.qy(cm);
                if (gG == 0) {
                    yv.push(cm)
                } else if (gG == 10) {
                    if (cm.privilege) {
                        cm.fee = cm.privilege.fee
                    }
                    if (compareFee(cm.fee, KH.fee) > 0) {
                        KH = cm
                    }
                } else if (gG == 11) {
                    ++btf;
                    if (!vT.play)
                        yv.push(cm)
                } else if (gG == 1e3) {
                    ++bth;
                    if (!vT.download)
                        yv.push(cm)
                } else if (gG == 100) {
                    KG = cm
                }
            });
            if (yv.length == 0 && dS) {
                if (btf == bk.length) {
                    var ul = bk[0].privilege || {};
                    if (ul.payed) {
                        bn.kN("唱片公司要求，该歌曲须下载后播放")
                    } else {
                        bn.wq(ul.fee, null, null, hm)
                    }
                } else if (bth == bk.length) {
                    bn.kN("因版权方要求，该歌曲不支持下载")
                } else if (KH.id) {
                    bn.wq(KH.fee, KH.id, null, hm, KH.privilege)
                } else {
                    if (KG && bk.length == 1 && KG.privilege && KG.privilege.st < 0 && KG.privilege.toast) {
                        bn.kN(null, null, null, true, KG)
                    } else {
                        bn.kN()
                    }
                }
            }
            return yv
        }
    }();
    bn.qy = function (cm) {
        if (!cm)
            return 0;
        var gG = cm.privilege;
        if (cm.program)
            return 0;
        if (window.GAbroad)
            return 100;
        if (gG) {
            if (gG.st != null && gG.st < 0) {
                return 100
            }
            if (gG.fee > 0 && gG.fee != 8 && gG.payed == 0)
                return 10;
            if (gG.fee == 16)
                return 11;
            if ((gG.fee == 0 || gG.payed) && gG.pl > 0 && gG.dl == 0)
                return 1e3;
            if (gG.pl == 0 && gG.dl == 0)
                return 100;
            return 0
        } else {
            var gE = cm.status != null ? cm.status : cm.st != null ? cm.st : 0;
            if (cm.status >= 0)
                return 0;
            if (cm.fee > 0)
                return 10;
            return 100
        }
    }
})();
(function () {
    var bd = NEJ.P, cg = NEJ.O, bj = bd("nej.v"), bb = bd("nej.e"), bR = bd("nej.ui"), bc;
    if (!!bR.Xc)
        return;
    var jN = bb.tY(".#<uispace>{position:absolute;background:#fff;}");
    bR.Xc = NEJ.C();
    bc = bR.Xc.bT(bR.SN);
    bc.cv = function (bf) {
        this.cw(bf);
        this.df([[document, "click", this.uf.bi(this)]]);
        this.cqq = !!bf.nostop;
        this.btF = {
            top: bf.top,
            left: bf.left
        }
    }
        ;
    bc.cR = function () {
        delete this.As;
        delete this.bgt;
        delete this.rS;
        delete this.btO;
        delete this.WY;
        delete this.btF;
        this.cW()
    }
        ;
    bc.dq = function () {
        this.nd = jN
    }
        ;
    bc.di = function () {
        this.dv();
        this.Cf = this.bq;
        bj.bt(this.bq, "click", this.cqp.bi(this))
    }
        ;
    bc.uf = function (be) {
        if (be.button != 2)
            this.cC()
    }
        ;
    bc.cqp = function (be) {
        if (this.cqq)
            return;
        bj.tC(be);
        var bM = bj.bZ(be);
        if (bM.tagName == "A")
            bj.dz(be)
    }
        ;
    bc.cqo = function () {
        var ej = /\s+/i;
        return function (oO) {
            oO = (oO || "").trim().toLowerCase().split(ej);
            oO[0] = oO[0] || "bottom";
            oO[1] = oO[1] || "left";
            this.rS = oO
        }
    }();
    bc.cqn = function (oO) {
        var bo = {}
            , oz = this.bgt
            , ctO = bb.rg()
            , eC = this.bq.offsetWidth
            , dF = this.bq.offsetHeight;
        switch (oO[0]) {
            case "top":
                bo.top = oz.top - dF;
                bo.left = oO[1] == "right" ? oz.left + oz.width - eC : oz.left;
                break;
            case "left":
                bo.left = oz.left - eC;
                bo.top = oO[1] == "bottom" ? oz.top + oz.height - dF : oz.top;
                break;
            case "right":
                bo.left = oz.left + oz.width;
                bo.top = oO[1] == "bottom" ? oz.top + oz.height - dF : oz.top;
                break;
            default:
                bo.top = oz.top + oz.height;
                bo.left = oO[1] == "right" ? oz.left + oz.width - eC : oz.left;
                break
        }
        return bo
    }
        ;
    bc.Lw = function () {
        if (!this.btO) {
            this.hz(this.btF);
            return
        }
        if (!!this.WY) {
            this.hz(this.As);
            return
        }
        if (!!this.bgt)
            this.hz(this.cqn(this.rS))
    }
        ;
    bc.cqj = function (bM, eG, be) {
        eG = eG || cg;
        var bui = bb.rg()
            , en = bj.nc(be) + (eG.left || 0)
            , ix = bj.qv(be) + (eG.top || 0)
            , eC = bM.offsetWidth + (eG.right || 0)
            , dF = bM.offsetHeight + (eG.bottom || 0)
            , KD = bui.scrollWidth
            , bgz = bui.scrollHeight
            , bgB = en + eC
            , bgC = ix + dF;
        switch (this.rS[0]) {
            case "top":
                ix = bgC > bgz ? ix - dF : ix;
                if (this.rS[1] == "right") {
                    en = en - eC < 0 ? 0 : en - eC
                } else {
                    en = bgB > KD ? KD - eC : en
                }
                break;
            case "left":
                en = bgB > KD ? KD - eC : en;
                if (this.rS[1] == "top") {
                    ix = bgC > bgz ? ix - dF : ix
                } else {
                    ix = ix - dF < 0 ? ix : ix - dF
                }
                break;
            case "right":
                en = en - eC < 0 ? 0 : en - eC;
                if (this.rS[1] == "top") {
                    ix = bgC > bgz ? ix - dF : ix
                } else {
                    ix = ix - dF < 0 ? ix : ix - dF
                }
                break;
            default:
                ix = ix - dF < 0 ? ix : ix - dF;
                if (this.rS[1] == "left") {
                    en = bgB > KD ? KD - eC : en
                } else {
                    en = en - eC < 0 ? 0 : en - eC
                }
                break
        }
        return {
            top: ix,
            left: en
        }
    }
        ;
    bc.bgD = function () {
        var cqi = function (bM, eG) {
            bM = bb.bD(bM);
            if (!bM)
                return;
            eG = eG || cg;
            var cs = bb.kn(bM);
            return {
                top: cs.y - (eG.top || 0),
                left: cs.x - (eG.left || 0),
                width: bM.offsetWidth + (eG.right || 0),
                height: bM.offsetHeight + (eG.bottom || 0)
            }
        };
        return function (bf) {
            bf = bf || cg;
            this.WY = bf.event;
            this.cqo(bf.align);
            if (!!this.WY)
                this.As = this.cqj(bf.target, bf.delta, this.WY);
            this.bgt = cqi(bf.target, bf.delta);
            this.btO = !!bf.fitable;
            this.bS();
            return this
        }
    }()
})();
(function () {
    var bd = NEJ.P, cg = NEJ.O, bb = bd("nej.e"), bj = bd("nej.v"), bm = bd("nej.u"), bR = bd("nej.ui"), bc, bO;
    if (!!bR.CZ)
        return;
    bR.CZ = NEJ.C();
    bc = bR.CZ.bT(bR.bbg);
    bO = bR.CZ.dC;
    bR.CZ.ctP = function () {
        var cqe = function (be, bE, gJ, lf, Qy) {
            var dJ, bP = bE + "-i", bW = gJ.yL, bvc = !!lf.noclear, bvd = !!lf.toggled;
            if (bm.hF(lf.onbeforeclick)) {
                var WJ = lf.noclear
                    , cqd = lf.toggled;
                try {
                    lf.onbeforeclick(lf)
                } catch (e) { }
                bvc = !!lf.noclear;
                bvd = !!lf.toggled;
                lf.toggled = cqd;
                lf.noclear = WJ
            }
            var GV = bW[bP];
            if (bvd && !!GV) {
                GV.cC();
                return
            }
            bj.co(be);
            if (!bvc) {
                bj.bG(document, "click");
                dJ = gJ.bH(lf)
            } else {
                dJ = gJ.cge(lf, !0)
            }
            bW[bP] = dJ;
            dJ.wR("onbeforerecycle", function () {
                delete bW[bP]
            });
            dJ.bgD(Qy)
        };
        return function (bh, bf) {
            bh = bb.bD(bh);
            if (!bh)
                return this;
            if (!this.yL)
                this.yL = {};
            var bE = bb.mX(bh);
            if (!!this.yL[bE])
                return this;
            bf = NEJ.X({}, bf);
            var Qy = NEJ.EX({
                align: "",
                delta: null,
                fitable: !1
            }, bf);
            Qy.target = bE;
            bf.destroyable = !0;
            if (!bf.fixed) {
                Qy.fitable = !0;
                bf.parent = document.body
            }
            this.yL[bE] = [bE, bf.event || "click", cqe.fE(null, bE, this, bf, Qy)];
            bj.bt.apply(bj, this.yL[bE]);
            return this
        }
    }();
    bR.CZ.ctQ = function (bh) {
        if (!this.yL)
            return this;
        var bE = bb.mX(bh)
            , be = this.yL[bE];
        if (!be)
            return this;
        delete this.yL[bE];
        bj.px.apply(bj, be);
        var dJ = this.yL[bE + "-i"];
        if (!!dJ)
            dJ.cC();
        return this
    }
        ;
    bc.bcW = function () {
        return bR.Xc.bH(this.dk)
    }
        ;
    bc.Tf = function () {
        bO.Tf.apply(this, arguments);
        this.dk.top = null;
        this.dk.left = null;
        this.dk.nostop = !1
    }
        ;
    bc.bgD = function (bf) {
        if (!!this.pD)
            this.pD.bgD(bf);
        return this
    }
})();
(function () {
    var bd = NEJ.P, cq = bd("nej.ui"), bp = bd("nm.l"), bc, bO;
    bp.bgL = NEJ.C();
    bc = bp.bgL.bT(cq.CZ);
    bc.cv = function (bf) {
        bf.nohack = true;
        this.cw(bf)
    }
})();
(function () {
    var bd = NEJ.P, bb = bd("nej.e"), bp = bd("nm.l"), bc, bO;
    bp.ci = NEJ.C();
    bc = bp.ci.bT(bp.bgL);
    bO = bp.ci.dC;
    bc.cv = function (bf) {
        this.cw(bf);
        this.gc = bf.type || 1
    }
        ;
    bc.di = function () {
        this.dv();
        this.bq = bb.qe(this.cqb());
        var bk = bb.ek(this.bq);
        this.zk = bk[0];
        this.dE = bk[1]
    }
        ;
    bc.cqb = function () {
        return '<div class="sysmsg"><i class="u-icn u-icn-31"></i><span></span></div>'
    }
        ;
    bc.Lw = function () {
        var bF = {}
            , dw = this.bq.style
            , kB = bb.rg()
            , oT = {
                left: kB.scrollLeft,
                top: kB.scrollTop
            }
            , eG = {
                left: kB.clientWidth - this.bq.offsetWidth,
                top: kB.clientHeight - this.bq.offsetHeight
            };
        bF.top = Math.max(0, oT.top + eG.top / 2);
        bF.left = Math.max(0, oT.left + eG.left / 2);
        this.pD.hz(bF)
    }
        ;
    bc.bS = function (bf) {
        bO.bS.call(this);
        this.Lw();
        this.gc == 1 ? bb.gP(this.zk, "u-icn-32", "u-icn-31") : bb.gP(this.zk, "u-icn-31", "u-icn-32");
        this.dE.innerHTML = bf.tip || ""
    }
        ;
    bp.ci.bS = function () {
        var gL;
        return function (bf) {
            clearTimeout(gL);
            if (bf.parent === undefined)
                bf.parent = document.body;
            if (bf.autoclose === undefined)
                bf.autoclose = true;
            bf.clazz = "m-sysmsg";
            !!this.gr && this.gr.bX();
            this.gr = this.bH(bf);
            this.gr.bS(bf);
            if (bf.autoclose)
                gL = setTimeout(this.cC.bi(this), 2e3)
        }
    }();
    bp.ci.cC = function () {
        !!this.gr && this.gr.cC()
    }
})();
(function () {
    var bd = NEJ.P
        , bA = bd("nej.j")
        , bm = bd("nej.u");
    if (window["GRef"] && window["GRef"] == "mail") {
        bA.cE = bA.cE.fz(function (be) {
            bf = be.args[1];
            bf.query = bf.query || {};
            if (bm.gO(bf.query))
                bf.query = bm.jg(bf.query);
            bf.query.ref = "mail"
        })
    }
})();
(function () {
    var bd = NEJ.P, cz = NEJ.F, gI = NEJ.R, bL = bd("nej.ut"), bm = bd("nej.u"), bj = bd("nej.v"), bA = bd("nej.j"), bs = bd("nm.d"), bp = bd("nm.l"), bP = "playlist-tracks_", bc;
    bs.gs({
        "playlist_my-list": {
            url: "/api/user/playlist",
            type: "GET",
            format: function (bV, bf) {
                this.cqa(bV.playlist);
                return {
                    total: 0,
                    list: gI
                }
            },
            onerror: function () {
                this.bG("onlisterror")
            }
        },
        "playlist_new-add": {
            url: "/api/playlist/create",
            format: function (bV, bf) {
                var ky = bV.playlist;
                ky.creator = GUser;
                ky.isHost = !0;
                ky.typeFlag = "playlist";
                return ky
            },
            finaly: function (be, bf) {
                bj.bG(bs.jd, "listchange", be)
            },
            onmessage: function () {
                var nB = {
                    507: "歌单数量超过上限！",
                    405: "你操作太快了，请休息一会再试！",
                    406: "你操作太快了，请休息一会再试！"
                };
                return function (dP) {
                    bp.ci.bS({
                        tip: nB[dP] || "创建失败",
                        type: 2
                    })
                }
            }()
        },
        "playlist_new-del": {
            url: "/api/playlist/delete",
            type: "GET",
            filter: function (bf) {
                bf.id = bf.data.pid
            },
            finaly: function (be, bf) {
                bj.bG(bs.jd, "listchange", be)
            },
            onmessage: function () {
                var nB = {
                    404: "歌单不存在！",
                    405: "你操作太快了，请休息一会再试！",
                    406: "你操作太快了，请休息一会再试！"
                };
                return function (dP) {
                    bp.ci.bS({
                        tip: nB[dP] || "删除失败",
                        type: 2
                    })
                }
            }()
        },
        "playlist_fav-add": {
            type: "GET",
            url: "/api/playlist/subscribe",
            filter: function (bf) {
                var hm = bf.ext || {};
                bf.ext = NEJ.X(hm, bf.data);
                bf.data = {
                    id: bf.ext.id
                }
            },
            format: function (bV, bf) {
                bp.ci.bS({
                    tip: "收藏成功" + (bV.point > 0 ? ' 获得<em class="s-fc6">' + bV.point + "积分</em>" : "")
                });
                var bu = bf.ext;
                bu.subscribedCount++;
                return bu
            },
            finaly: function (be, bf) {
                bj.bG(bs.cpZ, "listchange", be);
                bj.bG(bs.cpZ, "itemchange", {
                    attr: "subscribedCount",
                    data: be.data
                })
            },
            onmessage: function () {
                var nB = {
                    404: "歌单不存在！",
                    501: "歌单已经收藏！",
                    506: "歌单收藏数量超过上限！"
                };
                return function (dP) {
                    bp.ci.bS({
                        type: 2,
                        tip: nB[dP] || "收藏失败，请稍后再试！"
                    })
                }
            }()
        },
        "playlist_fav-del": {
            url: "/api/playlist/unsubscribe",
            type: "GET",
            filter: function (bf) {
                bf.id = bf.data.id = bf.data.pid
            },
            finaly: function (be, bf) {
                bj.bG(bs.jd, "listchange", be)
            },
            onmessage: function () {
                var nB = {
                    404: "歌单不存在！",
                    405: "你操作太快了，请休息一会再试！",
                    406: "你操作太快了，请休息一会再试！"
                };
                return function (dP) {
                    bp.ci.bS({
                        tip: nB[dP],
                        type: 2
                    })
                }
            }()
        },
        "playlist_new-update": {
            url: ["playlist-update-name", "playlist-update-tag", "playlist-update-desc"],
            filter: function (bf) {
                var bl = bf.data
                    , WD = {};
                WD["playlist-update-name"] = {
                    id: bl.id,
                    name: bl.name
                };
                WD["playlist-update-tag"] = {
                    id: bl.id,
                    tags: bl.tags.join(";")
                };
                WD["playlist-update-desc"] = {
                    id: bl.id,
                    desc: bl.description
                };
                bf.data = WD;
                bf.ext = bl
            },
            format: function (bY, rH, Qt, bf) {
                if (bY.code == 200 && rH.code == 200 && Qt.code == 200) {
                    bf.ext.allSuccess = true;
                    bp.ci.bS({
                        tip: "保存成功"
                    })
                } else if (bY.code == 407 || rH.code == 407 || Qt.code == 407) {
                    bf.ext.allSuccess = false;
                    bp.ci.bS({
                        type: 2,
                        tip: "输入内容包含关键字"
                    })
                } else {
                    bf.ext.allSuccess = false;
                    bp.ci.bS({
                        type: 2,
                        tip: "保存失败"
                    })
                }
                return this.fH(bf.ext.id)
            },
            finaly: function (be, bf) {
                bj.bG(bs.jd, "listchange", be)
            },
            onmessage: function (dP) {
                bp.ci.bS({
                    type: 2,
                    tip: "保存失败"
                })
            }
        },
        "playlist-update-name": {
            url: "/api/playlist/update/name",
            format: function (bV, bf) {
                var bu = this.fH(bf.ext.id);
                if (bV.code == 200)
                    bu.name = bf.ext.name;
                return bV
            }
        },
        "playlist-update-tag": {
            url: "/api/playlist/tags/update",
            format: function (bV, bf) {
                var bu = this.fH(bf.ext.id);
                if (bV.code == 200)
                    bu.tags = bf.ext.tags;
                return bV
            }
        },
        "playlist-update-desc": {
            url: "/api/playlist/desc/update",
            format: function (bV, bf) {
                var bu = this.fH(bf.ext.id);
                if (bV.code == 200)
                    bu.description = bf.ext.description;
                return bV
            }
        },
        "playlist-update-cover": {
            url: "/api/playlist/cover/update",
            filter: function (bf) {
                bf.url = bf.data.url;
                delete bf.data.url
            },
            format: function (bV, bf) {
                bp.ci.bS({
                    tip: "保存成功"
                });
                var bu = this.fH(bf.data.id);
                bu.coverImgUrl = bf.url;
                bf.ext = bu;
                return bu
            },
            onmessage: function (dP) {
                bp.ci.bS({
                    type: 2,
                    tip: "保存失败"
                })
            },
            finaly: function (be, bf) {
                bj.bG(bs.jd, "itemchange", {
                    attr: "coverImgUrl",
                    data: bf.ext
                })
            }
        },
        "playlist-upcount": {
            url: "/api/playlist/update/playcount",
            type: "GET",
            format: function (bV, bf) {
                var ky = this.fH(bf.data.id);
                if (!ky)
                    return;
                ky.playCount++;
                bj.bG(bs.jd, "itemchange", {
                    attr: "playcount",
                    data: ky
                })
            }
        }
    });
    bs.jd = NEJ.C();
    bc = bs.jd.bT(bs.iR);
    bc.dG = function () {
        this.dM()
    }
        ;
    bc.bxb = function () {
        var fq = GUser.userId;
        this.pH({
            limit: 1001,
            key: "playlist_my-" + fq,
            data: {
                offset: 0,
                limit: 1001,
                uid: fq
            }
        })
    }
        ;
    bc.cqa = function (bk) {
        var fq = GUser.userId
            , kV = []
            , bxz = [];
        bm.cr(bk, function (bu) {
            bu.typeFlag = "playlist";
            if (bu.creator && bu.creator.userId == fq) {
                if (bu.specialType == 5)
                    bu.name = "我喜欢的音乐";
                bu.isHost = !0;
                kV.push(bu)
            } else {
                bxz.push(bu)
            }
        });
        this.tZ("playlist_new-" + fq, kV);
        this.tZ("playlist_fav-" + fq, bxz)
    }
        ;
    bc.cpX = function (bl) {
        this.dK("playlist-update-cover", {
            data: bl
        })
    }
        ;
    bc.ctR = function () {
        var Qr = this.cpV.bD("host-plist");
        if (Qr.length == 0) {
            return
        }
        if (Qr.length == 1 && Qr[0].trackCount <= 0) {
            return
        }
        for (var i = 0, len = Qr.length; i < len; i++) {
            var bu = Qr[i];
            if (bu.trackCount > 0)
                return bu.id
        }
        return this.cpV.bD("host-plist")[0].id
    }
        ;
    bc.cpU = function (bE) {
        if (GUser && GUser.userId > 0) {
            this.dK("playlist-upcount", {
                data: {
                    id: bE
                }
            })
        }
    }
        ;
    bc.Ej = function () {
        if (GUser && GUser.userId > 0) {
            return !0
        } else {
            top.login();
            return !1
        }
    }
        ;
    bc.ctS = function () {
        return GUser.userId
    }
        ;
    bc.bgQ = function (bu) {
        if (bu.userId == GUser.userId && bu.specialType == 5)
            bu.name = "我喜欢的音乐";
        bj.bG(this.constructor, "itemchange", {
            data: this.Db(bu)
        });
        return bu
    }
        ;
    bL.he.bH({
        element: bs.jd,
        event: ["listchange", "playcountchange", "itemchange"]
    })
})();
(function () {
    var bd = NEJ.P, gI = NEJ.R, cz = NEJ.F, cg = NEJ.O, bL = bd("nej.ut"), bj = bd("nej.v"), bm = bd("nej.u"), bn = bd("nm.x"), bs = bd("nm.d"), bp = bd("nm.l"), bc, bO;
    bs.gs({
        "program-get": {
            url: "/api/dj/program/detail",
            format: function (bV) {
                return bV.program
            }
        },
        "program_djradio-list": {
            type: "GET",
            url: "/api/dj/program/byradio",
            filter: function (bf) {
                bf.data.limit = 1e3;
                delete bf.data.id
            },
            format: function (bV, bf) {
                var byL = []
                    , CU = bV.programs;
                if (CU) {
                    for (var i = 0, l = CU.length; i < l; i++) {
                        if (CU[i].programFeeType < 10 || CU[i].buyed) {
                            byL.push(CU[i])
                        }
                    }
                }
                return byL
            }
        },
        "program_fav-list": {
            url: "/api/djprogram/subscribed/paged",
            format: function (bV, bf) {
                return bV.programs
            },
            onerror: "onlisterror"
        },
        "program_fav-add": {
            url: "/api/djprogram/subscribe",
            filter: function (bf) {
                bf.ext = bf.data;
                bf.data = {
                    id: bf.ext.id
                };
                bf.id = bf.data.id
            },
            format: function (bV, bf) {
                bp.ci.bS({
                    tip: "收藏成功"
                });
                var bu = bf.ext;
                bu.subscribedCount++;
                bu.subscribed = !0;
                return bu
            },
            finaly: function (be, bf) {
                bj.bG(bs.rK, "listchange", be)
            },
            onmessage: function () {
                var nB = {
                    404: "节目不存在！",
                    501: "节目已收藏！"
                };
                return function (dP) {
                    bp.ci.bS({
                        type: 2,
                        tip: nB[dP] || "收藏失败！"
                    })
                }
            }()
        },
        "program_fav-del": {
            url: "/api/djprogram/unsubscribe",
            finaly: function (be, bf) {
                bj.bG(bs.rK, "listchange", be)
            },
            onmessage: function () {
                var nB = {
                    404: "节目不存在！",
                    502: "没有收藏此节目！"
                };
                return function (dP) {
                    bn.bgV({
                        txt: nB[dP] || "取消收藏失败！"
                    })
                }
            }()
        },
        "program-update-count": {
            type: "GET",
            url: "/api/dj/program/listen",
            filter: function (bf) {
                var bu = this.fH(bf.data.id) || cg;
                bf.ext = (bu.listenerCount || 0) + 1
            },
            format: function (bV, bf) {
                var bu = this.fH(bf.data.id);
                if (!!bu) {
                    bu.listenerCount = Math.max(bf.ext, bu.listenerCount || 0)
                }
            },
            finaly: function (be, bf) {
                bj.bG(bs.rK, "itemchange", {
                    attr: "playCount",
                    data: this.fH(bf.data.id)
                })
            }
        },
        "program-like": {
            url: "/api/resource/like",
            filter: function (bf) {
                bf.data = {
                    threadId: "A_DJ_1_" + bf.id
                }
            },
            format: function (bV, bf) {
                var bu = bf.ext.data || this.fH(bf.id);
                bu.liked = true;
                bu.likedCount++;
                bf.ext.data = bu;
                try {
                    top.player.setLike(bu)
                } catch (e) { }
                return bu
            },
            finaly: function (be, bf) {
                bj.bG(bs.rK, "itemchange", {
                    attr: "likedCount",
                    data: bf.ext.data
                })
            }
        },
        "program-unlike": {
            url: "/api/resource/unlike",
            filter: function (bf) {
                bf.data = {
                    threadId: "A_DJ_1_" + bf.id
                }
            },
            format: function (bV, bf) {
                var bu = bf.ext.data || this.fH(bf.id);
                bu.liked = false;
                bu.likedCount--;
                bf.ext.data = bu;
                try {
                    top.player.setLike(bu)
                } catch (e) { }
                return bu
            },
            finaly: function (be, bf) {
                bj.bG(bs.rK, "itemchange", {
                    attr: "likedCount",
                    data: bf.ext.data
                })
            }
        }
    });
    bs.rK = NEJ.C();
    bc = bs.rK.bT(bs.iR);
    bc.ctT = function () {
        var fq = GUser.userId;
        this.pH({
            limit: 1001,
            key: "program_fav-" + fq,
            data: {
                offset: 0,
                limit: 1e3,
                uid: fq
            }
        })
    }
        ;
    bc.ctU = function (ep) {
        var qJ = ep[this.wP];
        bn.cpP(4, function (bW) {
            bW.tZ("track_program-" + qJ, ep.songs)
        });
        delete ep.songs;
        var cU = ep.mainSong;
        bn.cpP(4, function (bW) {
            bW.tZ("track_program_main-" + qJ, !cU ? [] : [cU])
        });
        ep.mainSong = (cU || cg).id
    }
        ;
    bc.ctV = function (bE) {
        var ep = this.fH(bE)
            , fq = localCache.Zk("host.profile.userId");
        return !!ep && ep.dj.userId == fq
    }
        ;
    bc.ctW = function (bE) {
        return !1
    }
        ;
    bc.bgQ = function (bu) {
        bj.bG(this.constructor, "itemchange", {
            attr: "detail",
            data: this.Db(bu)
        });
        return bu
    }
        ;
    bc.cpU = function (bE) {
        this.dK("program-update-count", {
            data: {
                id: bE
            }
        })
    }
        ;
    bn.bzK = function (bf) {
        var bW = bs.rK.bH({
            onitemadd: function () {
                (bf.onsuccess || cz)()
            },
            onerror: function () {
                (bf.onerror || cz)()
            }
        });
        if (bf.data.liked) {
            bW.Qk(bf.data)
        } else {
            bW.xI(bf.data)
        }
    }
        ;
    bc.xI = function (ep) {
        if (!bn.iJ())
            return;
        var dH = {
            ext: {}
        };
        if (bm.mK(ep)) {
            dH.id = ep.id;
            dH.ext.data = ep
        } else {
            dH.id = ep
        }
        this.dK("program-like", dH)
    }
        ;
    bc.Qk = function (ep) {
        if (!bn.iJ())
            return;
        var dH = {
            ext: {}
        };
        if (bm.mK(ep)) {
            dH.id = ep.id;
            dH.ext.data = ep
        } else {
            dH.id = ep
        }
        this.dK("program-unlike", dH)
    }
        ;
    bL.he.bH({
        element: bs.rK,
        event: ["listchange", "itemchange"]
    })
})();
(function () {
    var bd = NEJ.P, cz = NEJ.F, gI = NEJ.R, bL = bd("nej.ut"), bm = bd("nej.u"), bj = bd("nej.v"), bA = bd("nej.j"), bs = bd("nm.d"), bp = bd("nm.l"), bn = bd("nm.x"), bP = "playlist-tracks_", bn = bd("nm.x"), bc;
    bs.gs({
        "track-get": {
            url: "/api/v3/song/detail",
            filter: function (bf) {
                bf.data.c = JSON.stringify([{
                    id: bf.data.id
                }])
            },
            format: function (bV, bf) {
                var cm = bn.EA(bV.songs[0]);
                cm.privilege = bV.privileges[0];
                return cm
            }
        },
        "track_playlist-list": {
            url: "/api/v3/playlist/detail",
            filter: function (bf) {
                bf.data.n = 1e3
            },
            format: function (bV, bf) {
                var ig = [];
                this.up.bgQ(bV.playlist);
                bm.cr(bV.playlist.tracks, function (cU, bv) {
                    var bAd = bn.EA(cU);
                    bAd.privilege = bV.privileges[bv];
                    ig.push(bAd)
                }, this);
                return ig
            }
        },
        "track_album-list": {
            url: "/api/v1/album/{id}",
            format: function (bV, bf) {
                var ig = [];
                bm.cr(bV.songs, function (cm) {
                    ig.push(bn.EA(cm))
                });
                return ig
            }
        },
        "track_playlist-add": {
            url: "/api/playlist/manipulate/tracks",
            filter: function (bf) {
                var cI = {}
                    , bl = bf.data
                    , cpM = this.iG(bf.key) || [];
                EF = [];
                bm.cr(cpM, function (cU) {
                    var bE = bm.mK(cU) ? cU.id : cU;
                    cI[bE] = true
                });
                bf.ext = [];
                bm.cr(bl.tracks, function (cU) {
                    var bE = bm.mK(cU) ? cU.id : cU;
                    if (!cI[bE]) {
                        EF.push(bE);
                        cI[bE] = true;
                        bf.ext.push(cU)
                    }
                });
                bl.trackIds = JSON.stringify(EF);
                bl.op = "add";
                if (!EF.length) {
                    bf.value = {
                        code: 502
                    }
                }
            },
            format: function (bV, bf) {
                bp.ci.bS({
                    tip: "已添加至歌单"
                });
                var ky = this.up.fH(bf.data.pid);
                if (!!bV.coverImgUrl)
                    ky.coverImgUrl = bV.coverImgUrl;
                bm.oj(bf.ext, function (cU) {
                    this.zG(bf, bm.mK(cU) ? cU : null);
                    if (!!ky)
                        ky.trackCount++
                }, this);
                bj.bG(bs.jd, "itemchange", {
                    data: ky || {},
                    cmd: "add"
                });
                this.bG("onaddsuccess");
                return null
            },
            finaly: function (be, bf) {
                bj.bG(bs.xH, "listchange", {
                    key: bf.key,
                    action: "refresh"
                });
                var qJ = bf.data.pid
                    , dO = this.lL(bf.key)
            },
            onmessage: function () {
                var nB = {
                    502: "歌曲已存在！"
                };
                return function (dP) {
                    setTimeout(function () {
                        bp.ci.bS({
                            tip: nB[dP] || "添加失败，请稍后再试！",
                            type: 2
                        })
                    }, 0)
                }
            }()
        },
        "track_playlist-del": {
            url: "/api/playlist/manipulate/tracks",
            filter: function (bf) {
                var bl = bf.data;
                bf.ext = bl.trackIds;
                bl.trackIds = JSON.stringify(bl.trackIds);
                bl.op = "del"
            },
            format: function (bV, bf) {
                var ky = this.up.fH(bf.data.pid);
                bm.cr(bf.ext, function (bE) {
                    this.bfm({
                        id: bE,
                        key: "track_playlist-" + bf.data.pid
                    }, !0);
                    if (!!ky)
                        ky.trackCount = Math.max(0, ky.trackCount - 1)
                }, this);
                bj.bG(bs.jd, "itemchange", {
                    data: ky || {},
                    cmd: "del"
                });
                return null
            },
            finaly: function (be, bf) {
                bj.bG(bs.xH, "listchange", {
                    key: bf.key,
                    action: "refresh"
                })
            },
            onmessage: function (dP) {
                bn.bgV({
                    text: "歌曲删除失败！"
                })
            }
        },
        "track_program-list": {
            url: "/api/dj/program/detail",
            format: function (bV, bf) {
                return this.bAl.bgQ(bV.program).songs
            },
            onerror: "onlisterror"
        },
        "track_listen_record-list": {
            url: "/api/v1/play/record",
            format: function (bV, bf) {
                var bk = [];
                if (bf.data.type == -1) {
                    if (bV.weekData && bV.weekData.length) {
                        bf.data.type = 1
                    } else {
                        bf.data.type = 0
                    }
                }
                if (bf.data.type == 1) {
                    bk = this.bAm(bV.weekData)
                } else {
                    bk = this.bAm(bV.allData)
                }
                return bk
            },
            onerror: "onlisterror"
        },
        "track_day-list": {
            url: "/api/v2/discovery/recommend/songs",
            format: function (bV) {
                var pj = [];
                bm.cr(bV.recommend, function (cm, bv) {
                    pj.push({
                        action: "recommendimpress",
                        json: {
                            alg: cm.alg,
                            scene: "user-song",
                            position: bv,
                            id: cm.id
                        }
                    })
                });
                this.lu.XB(pj);
                return bV.recommend
            },
            onerror: "onlisterror"
        },
        "track_lyric-get": {
            type: "GET",
            url: "/api/song/lyric",
            filter: function (bf) {
                bf.data.lv = 0;
                bf.data.tv = 0
            },
            format: function (bo, bf) {
                return bo
            },
            onload: "onlyricload",
            onerror: "onlyricerror"
        }
    });
    bs.xH = NEJ.C();
    bc = bs.xH.bT(bs.iR);
    bc.dG = function () {
        this.dM();
        this.up = bs.jd.bH();
        this.bAl = bs.rK.bH();
        this.lu = bs.jE.bH()
    }
        ;
    bc.bAm = function (bk) {
        var bo = []
            , hI = 0;
        bm.cr(bk, function (bu, bv) {
            var cm = bn.EA(bu.song);
            if (bv == 0) {
                hI = bu.score
            }
            cm.max = hI;
            cm.playCount = bu.playCount;
            cm.score = bu.score;
            bo.push(cm)
        });
        return bo
    }
        ;
    bL.he.bH({
        element: bs.xH,
        event: ["listchange"]
    })
})();
(function () {
    function J() {
        var d = "6skV4PUYecGhx07l".split("");
        this.d = function (f) {
            if (null == f || void 0 == f)
                return f;
            if (0 != f.length % 2)
                throw Error("1100");
            for (var b = [], c = 0; c < f.length; c++) {
                0 == c % 2 && b.push("%");
                for (var g = d, a = 0; a < g.length; a++)
                    if (f.charAt(c) == g[a]) {
                        b.push(a.toString(16));
                        break
                    }
            }
            return decodeURIComponent(b.join(""))
        }
    }
    var k = (new J).d
        , d = (new J).d
        , e = (new J).d
        , f = (new J).d
        , g = (new J).d;
    (function () {
        var B = [e("44UsY4UP"), e("40UcU7UcUkUsYkP6UxYPUYUcU7"), d("U4UPUVUlU4UPPPPk4c4VUlU0Y6UlU7UPU7Y4"), f("47P6P6UxUsYcUPYkPVUeUPUxUx"), f("40PVk6PkUPUUUPYkUPU7UVUPk6PVUsU7YVk6PVUPYkUcUU"), e("4eUcYkUsUYUcU7Ulk6PVUsU7YVk64Y4k"), d("YVUPYkUcUU"), g("UYUPY44VUlU7Y4UPYeY4")]
            , J = [g("YPU7UcUUUlYkU0VkUU")]
            , b = [d(""), g("4YYkUsYcP4UPYeY4"), k("Y6UsYkUPU7Y4"), e("7Phchx7PcxeU"), k("Y6UxYPUYUcU7YV"), d("4sU4UlUkUP4PYe40UsU744UPY4UPUVY4"), e("V6V6VsV6"), d("4YUlUlUYUxUPk64PUsYkY4Uek6P6UxYPUYUcU7"), k("PUUPUPY4UxUPk6P4PUk64VUlYkUP"), f("V6V6V6VY"), f("V6V6V6V4"), d("V6V6V6Vk"), d("V6V6V6VV"), g("V6V6V6V6"), e("V6V6V6Vs"), g("PPU7UcY4Yck6P6UxUsYcUPYk"), d("PVUhYcY6UPk6PYUPUkk6P6UxYPUYUcU7"), d("PYUPUk4hUcY4k0UcU7Y4UPUYYkUcUPYkY4UPk6P6444U"), e("4kUPUxUxk640P4"), e("V6V6V6Ve"), g("UYUPY4PVYPY6Y6UlYkY4UPU44PYeY4UPU7YVUcUlU7YV"), d("YVUPY4P4UcU0UP"), e("V6V6V6Vc"), g("PVUsUUUPPVUPUsYkUVUe"), d("kk"), f("k4"), f("PPU7UcYUUPYkYV"), e("kP"), e("kU"), f("kY"), f("VsVsVsV6"), d("UYUPY4k6Y6UxYPUYUcU7k6YVY4YkUcU7UYk6UPYeUVUPY6Y4UcUlU7"), e("P4UeYkUPUP44PVUeUsU4UlYY"), g("kh"), f("kx"), d("k0"), f("4sYkUsUk"), g("7eehhc7Uc7cx74heh07YhheU7PG7eh"), d("k7"), g("4UPPPG4PPVUeUsYkUP"), g("kl"), d("V6"), k("Vs"), f("Vk"), e("VV"), e("V4"), e("74hhhl7PG7ehPl4Y4kVkVVVsVk"), g("VP"), f("VU"), e("4cU7UsUVY4UcYUUP4VUsY6Y4UcUlU7P4UPYeY4"), f("VY"), d("PY4P4kPG4P47k64kYkUlYYYVUPYkk64PYeY4UPU7YVUcUlU7"), f("Ve"), e("Vc"), g("VG"), g("44UcYUPek64kYkUlYYYVUPYkk6P6UxYPUYk04cU7"), k("Vh"), g("V0"), d("PPY6UxUsYck6P64V"), e("UVUsU7YUUsYVk6UPYeUVUPY6Y4UcUlU7"), f("4s"), k("4k"), g("4V"), g("44"), g("4P"), f("7Ph7G77eh0Gl7ccheP7chhcs"), e("4U"), k("4eUsYkYkUcU7UYY4UlU7"), f("4Y"), f("4e"), f("4c"), k("4G"), e("4YU7UlU0UPk6PVUeUPUxUxk64cU7Y4UPUYYkUsY4UcUlU7"), f("4h"), f("4x"), f("40"), e("47"), f("4l"), k("P6"), d("Ps"), k("Pk"), d("PV"), g("47UcUsUYUsYkUsk6PVUlUxUcU4"), g("P4"), e("PVUPUU4VUxUcUPU7Y4k6P6UxYPUYUcU7"), d("PP"), e("PU"), d("VsVsVsVs"), e("PY"), d("Pe"), g("Pc"), k("PG"), e("4YUlYPU4Yck64lUxU4k6PVY4YcUxUP"), k("Px"), g("PkUlUkUxUlYek64xUsYPU7UVUeUPYkk6P6UxYPUYUcU7"), d("40UcUVYkUlYVUlUUY4k64lUUUUUcUVUPk6VkV6VsVV"), f("PsPs40YPYVUcUV"), k("Us"), e("4PYPYkUlYVY4UcUxUP"), e("Uk"), k("YkU0UlUVYek7PkUPUsUxP6UxUsYcUPYkk64YVkk64VUlU7Y4YkUlUxk7Vs"), k("UV"), d("PVUVYkUcY6Y4UcU7UYk744UcUVY4UcUlU7UsYkYc"), f("U4"), f("74hhhl7PG7eh"), f("UP"), k("UU"), k("UY"), e("Ue"), d("40Usk04VUlU7UUUcUYk7UVUlU0k6Y6UxYPUYUcU7"), d("Uc"), g("VsV6VsV6"), d("4VUsYVYPUsUx"), d("UG"), e("Uh"), e("Ux"), d("U0"), g("U7"), e("Ul"), d("Y6"), k("VsV6V6Ve"), f("UVY4"), d("U4Ul47UlY4P4YkUsUVUh"), g("Ys"), d("YVUPY4P4UcU0UPUlYPY4"), f("74heh07PG7ehk6P6YkUl"), e("Yk"), k("4YUcYVUeUs"), k("UYUPY4P4UcU0UPYGUlU7UP4lUUUUYVUPY4"), g("YV"), d("VsV6V6VP"), g("VsV6V6V4"), k("Y4"), k("YP"), g("VsV6V6VV"), f("YU"), f("VsV6V6Vs"), d("YY"), e("Ye"), e("U4YkUsYY4sYkYkUsYcYV"), g("Yc"), e("YG"), f("Yh"), g("Y0"), k("Y7"), d("UUUlU7Y4"), g("VsV6V6Vc"), k("V0U7YPUxUxVhk6Y6UsY4UeV0klVhk6UPYeY6UcYkUPYVV0"), f("PVUeUPUxUxk7PP4c4eUPUxY6UPYk"), f("Y4Ul44UsY4UsPPPk4x"), f("PYUcU7U4UlYYP4UPYeY4"), e("UxUsU7UYYPUsUYUP"), g("U4Ul"), f("74heh07chhcsk6P6YkUl"), e("4eUcUYUeUxUcUYUeY4P4UPYeY4"), k("U4UcYU"), g("40UPU7YPP4UPYeY4"), e("4s4l4xk640UPU4UcUsk6P6UxUsYcUkUsUVUhk6P6UxYPUYUcU7"), f("4VUcY4YkUcYek6UlU7UxUcU7UPk6Y6UxYPUYk0UcU7"), f("UPUV"), f("44UPYVU4UPU0UlU7Us"), k("4cU7UsUVY4UcYUUP4kUlYkU4UPYk"), f("PkUPUsUxP6UxUsYcUPYk"), d("4e4P4x4x4l"), f("kxk6kYUVUlU4UPkYVG"), k("UPU0"), f("U7Y6P4UlU7UYUkYP4sU4U4UcU7"), e("UVYkUPUsY4UP4PUxUPU0UPU7Y4"), g("Y6UeUsU7Y4UlU0"), k("40PVk6P640UcU7UVUeUl"), d("7UGPhY74h0cV"), d("UPYUUsUx"), f("UPYe"), k("44UcYUPek6PU4l44k64eUPUxY6UPYkk6P6UxYPUYk0UcU7"), f("7UcUh67YhheU7Ucee774h0cV"), d("PsYPUcUVUhP4UcU0UP4VUeUPUVUh4lUkUGUPUVY4k7PsYPUcUVUhP4UcU0UP4VUeUPUVUhk7Vs"), k("4UUxYc4lYk44UcUPk64YUsU0UPYVk6P6UxYPUYUcU7"), e("UsY4Y4UsUVUePVUeUsU4UPYk"), e("P6UxUsYc4lU7k6P6UxYPUYk0UcU7"), f("UYUPY4P4UcU0UP"), e("Vsk7V6Vs"), e("4kYkUlUsU4YYUsYc"), k("UUY6"), e("4sUxUsYYUsYkk647P64sP64ck6YPY4UcUxYV"), d("4UUlYkY4UP"), g("UeUsYVUe4VUlU4UP"), e("7UcUhc7UG0GV7PGYcG74h0cV"), e("4PPV47k6PVUlU7UsYkk64sP64c"), k("4eP644UPY4UPUVY4"), e("4kUcY4U4UPUUUPU7U4UPYkk6PsYPUcUVUhPVUVUsU7"), k("4c4Pk6P4UsUkk6Y6UxYPUYUcU7"), g("kYkx"), k("4kYPY4Y4UlU74UUsUVUP"), e("UVY6YP4VUxUsYVYV"), g("4VUPU7Y4YPYkYck64YUlY4UeUcUV"), f("4lU7UxUcU7UPk6PVY4UlYkUsUYUPk6Y6UxYPUYk0UcU7"), k("PVUsUUUPYkk6PPY6U4UsY4UP"), d("40YVYeU0UxVkk7444l4044UlUVYPU0UPU7Y4"), d("4PU7UYYkUsYUUPYkYVk640P4"), d("PVUcUxYUUPYkUxUcUYUeY4k6P6UxYPUYk04cU7"), g("4YUlUlUYUxUPk64YUPUsYkYVk6V6k7VPk7VVVVk7V6"), g("4VUcY4YkUcYek64c4V4sk64VUxUcUPU7Y4"), d("UsUxY6UeUsUkUPY4UcUV"), k("PU44UlYYU7UxUlUsU4UPYk"), e("7Pe0e77UcUeY7UGPhY74h0cV"), f("UsY4Y4YkPUUPYkY4UPYe"), g("7PG7eh74h0cV"), f("UVUlUlUhUcUP"), g("kPVkVk"), k("kPVkVU"), g("4VUPU7Y4UsYPYk"), g("V4UYUsU0UP"), e("PkUlUVUhYYUPUxUx"), e("4xUlUY40UP4cU7k6P6UxYPUYUcU7k6Vsk7V6k7V6k7VcVUVs"), g("4lUVY4UlYVUeUsY6UPk6PVY4YkUPUsU0UcU7UYk6PVUPYkYUUcUVUPYV"), e("Y4Ul4Y40P4PVY4YkUcU7UY"), d("Y4UeV0kl"), d("PVYPU0UsY4YkUsP6444Uk64kYkUlYYYVUPYkk6P6UxYPUYUcU7"), k("P6444Uk7P6U4UU4VY4YkUx"), g("UUUcUxUxPVY4YcUxUP"), d("UGUP"), f("4sU4UlUkUPk640UcU7UYk6PVY4U4"), g("P4UlYkUVUe4eUPUxY6UPYk"), e("4UYkUsU7UhUxUcU7k64YUlY4UeUcUVk64eUPUsYUYc"), f("7Pe0e77UcUeY74hhhl7PG7eh"), g("4eUsYkU0UlU7Yck6P6UxYPUYk04cU7"), d("4YUcUYUc"), f("YUVsk7Vs"), g("4hUcU7Ulk640P4"), f("PVUcU04eUPUc"), k("4sUxUcPVPV4l4xUlUYUcU7k6Y6UxYPUYUcU7"), k("PkUPUsUxP6UxUsYcUPYkk7PkUPUsUxP6UxUsYcUPYkkeY4U0kck64sUVY4UcYUUPPek64VUlU7Y4YkUlUxk6keVVVkk0UkUcY4kc"), d("PcUsU7U4UPYek6P6444Uk6PUUcUPYYUPYk"), g("4VUcY4YkUcYek6PkUPUVUPUcYUUPYkk6P6UxYPUYk0UcU7"), g("U0UsUc"), g("Y4UlY6"), d("4sUVYkUlP6444Uk7P6444U"), g("UVUsU7YUUsYVk6UsY6Uck6UPYeUVUPY6Y4UcUlU7"), d("4cU7UsUVY4UcYUUP4VUsY6Y4UcUlU7"), g("40UPU7YP"), d("Y6YkUPUVUcYVUcUlU7k6U0UPU4UcYPU0Y6k6UUUxUlUsY4Vhk6YUUsYkYcUcU7UYk6YUUPUVVkk6YUUsYkYcUcU7P4UPYe4VUlUlYkU4UcU7UsY4UPVhk6YUUlUcU4k6U0UsUcU7kekck6Yhk6k6k6UYUxPl4UYkUsUY4VUlUxUlYkk6V0k6YUUPUVV4keYUUsYkYcUcU7P4UPYe4VUlUlYkU4UcU7UsY4UPkxk6V6kxk6VskcVhk6Y0"), g("PsPsVkV6VsVVk64UUcYkUPUUUlYek6P6UxYPUYUcU7"), f("4YUlUlUYUxUPk6PPY6U4UsY4UP"), k("7Pe0e77UcUeY7Ph0Gc74hGcs"), k("UP40YPYVUcUVP6UxYPUYUcU7k6444x40VU"), f("PYUPUkk64VUlU0Y6UlU7UPU7Y4YV"), e("4kUsUkYcUxUlU7k6P4UlUlUx4kUsYk"), g("4VUlUlYYUlU7k6PPY6U4UsY4UP"), k("4cU7UUUlP4UPYeY4"), f("YkU0UlUVYek7PkUPUsUxP6UxUsYcUPYkk64YVkk64VUlU7Y4YkUlUx"), d("Uc40UPYVUek6Y6UxYPUYUcU7"), e("PkUPUsUx44UlYYU7UxUlUsU4UPYkk6P6UxYPUYUcU7"), e("PVYcU0UsU7Y4UPUVk6P64h4ck64VUxUcUPU7Y4"), g("PlY6UeUsU7Y4UlU0"), g("4Y444xk64lUkUGUPUVY4k6PYUPUkk6P6UxYPUYk0UcU7k6VsVUk7V6V6"), d("YYUPUkUYUx"), k("7Pe0e77UcUeY7PG7eh74h0cV"), g("YVUVYkUPUPU7"), k("UkUlU4Yc"), f("P4Pk4c4s474Y4x4PPlPVP4Pk4cP6"), k("U7V0"), d("P4UxYYUY40UlU7Ul"), f("kYVGkY"), k("4xUlUY40UP4cU7k6P6UxYPUYUcU7k6Vsk7V6k7V6k7VcVVVP"), d("UUYPU7UVY4UcUlU7"), e("UVUlU7Y4UPYeY4k7UeUsYVUe4VUlU4UP"), k("4sYkUVUeUc4V4s44"), g("PU4PPkP44PPePlPV4e4s444PPk"), k("PPUkYPU7Y4YP"), d("4UUsUVUPUkUlUlUhk6P6UxYPUYUcU7"), e("4sUVY4UcYUUP4VUsY6Y4UcUlU7"), g("7YhheU7Ucee774h0cV"), k("40UsUxUYYPU7k64YUlY4UeUcUV"), e("47UPYYYVk64YUlY4UeUcUVk640P4"), e("4VUsY6Y4UcUlU7P4UPYeY4"), k("UsPGUkPcV6UVPeU4PYVsUPPUUUVkPPUYVVP4UeV4PVUcPkVPUGPsUhVUP6Ux4lVYU047U7Ve40Ul4xVcY64hYs4GYk4cYV4eY44YYP4UYU4PYY44Ye4VYc4kYG4s"), e("44UPUGUsPUYPk64x4Y4Vk6PVUsU7YVk640UlU7Ul"), k("4VUlY6Y6UPYkY6UxUsY4UPk64YUlY4UeUcUVk64xUcUYUeY4"), e("PVUPUYUlUPk6P6YkUcU7Y4"), g("PVUsYYUsYVU4UPUP"), d("4kUsYPUeUsYPYVk6VcVV"), f("4VUeUsUxUhU4YPYVY4UPYk"), g("4sUkUsU4Uck640P4k64VUlU7U4UPU7YVUPU4k64xUcUYUeY4"), f("4xYPUVUcU4Usk64kYkUcUYUeY4"), g("PYUcU4UPk64xUsY4UcU7"), g("UUUlU7Y4k6U4UPY4UPUVY4k6UPYkYkUlYk"), f("4hUlYGYPUhUsk64YUlY4UeUcUVk6P6YkVU47"), d("4eY4U0UxVPk6UxUlUVUsY4UcUlU7k6Y6YkUlYUUcU4UPYk"), f("44UcYUPek6P6UxYPYVk6PYUPUkk6P6UxUsYcUPYk"), f("PUUxUsU4UcU0UcYkk6PVUVYkUcY6Y4"), d("4UUcUxUPk644UlYYU7UxUlUsU4UPYkk6P6UxYPUYk0UcU7"), f("UlUk"), d("4sU4UlU4Ukk7PVY4YkUPUsU0"), d("40UPU7UxUl"), e("UVUsUxUxP6UeUsU7Y4UlU0"), k("PYUlUxUUYkUsU0k640UsY4UeUPU0UsY4UcUVUs"), e("4VUsY4UsUxUcU7Us4YYkUlYPY6k6PPY6U4UsY4UP"), k("4PYkUsYVk64kUlUxU4k64cP44V"), e("44UPYUUsUxPUPkPe4VY4YkUxk744UPYUUsUxPUPkPe4VY4YkUxk7Vs"), k("4GPV4PPVPV4c4l474c44k0PYPcPcPc"), g("7Pe0e77UcUeY7YhheU7chhcs"), k("UsU4U44kUPUeUsYUUcUlYk"), k("Y6Us"), k("4kUcY4YVY4YkUPUsU0k6PUUPYkUsk6PVUPYkUcUU"), d("keUUYPU7UVY4UcUlU7kekcYhYkUPY4YPYkU7k6VsVkVVVhY0kckekcVh"), d("Y6Uc"), d("P4UPU7UVUPU7Y4k64UP447k6Y6UxYPUYk0UcU7"), k("YkUPU0UlYUUP4VUeUcUxU4"), f("4UUlUxYek6VVk64kYkUlYYYVUPYkk6P6UxYPUYUcU7"), k("YPYVUPP6YkUlUYYkUsU0"), f("UeUlYVY4U7UsU0UP"), f("Y6UeUsU7Y4UlU0k7UcU7UGUPUVY44GYV"), f("PVUeUlUVUhYYUsYUUP4UUxUsYVUek7PVUeUlUVUhYYUsYUUP4UUxUsYVUe"), d("YkUYUkUskeVsV6Vkkxk6VkV6V4kxk6V6kxk6V6k7VYkc"), e("4sU4UkUxUlUVUhP6UxYPUYUcU7"), e("4kUsUVUhUYYkUlYPU7U4"), g("4sUY4VUlU7Y4YkUlUxk74sUY4VUlU7Y4YkUlUx"), e("P6UeUlY4Ul4VUPU7Y4UPYkP6UxYPUYUcU7Vsk7Vsk7Vkk7Vk"), g("4YYPU7UYPVUPUl"), e("YVV0"), d("U4UPUVUlU4UPPPPk4c"), g("7UcUhc7UG0GV7eeeck74h0cV"), d("7Pe0e77UcUeY7UcUh67cG0el"), d("VsVkVV"), g("YYUPUkUYUxk6UPYeUVUPY6Y4UcUlU7"), f("YkUP"), k("PY40P6UxUsYcUPYkk74l4VPe"), e("VYVkY6Ye"), f("4sY6Y6PYUlYkUhYVY6UsUVUP"), d("4eUcUYUeUxUcUYUeY4"), e("U4UlUVYPU0UPU7Y4"), d("PcUsU7U4UPYek640UPU4UcUsk6P6UxYPUYUcU7"), e("4PPV47k64xUsYPU7UVUek640UlYGUcUxUxUsk6P6UxYPUYUcU7"), d("VYV6Y6Yek6kY4sYkUcUsUxkY"), k("UcU7UGUPUVY44GYV"), g("4xUlU0Us"), d("4kUcY44VUlU0UPY44sUYUPU7Y4"), f("4VUsUxUcUkYkUc"), f("4kUlUlUhU0UsU7k64lUxU4k6PVY4YcUxUP"), d("YVUPYVYVUcUlU7PVY4UlYkUsUYUP"), f("PPY4UlY6UcUs"), k("UVUlU0Y6UcUxUPPVUeUsU4UPYk"), e("UPYVUVUsY6UP"), d("PVUVYkUlUxUxUkUsYk"), g("PYUcU7U4UlYY"), d("VsV4VYV4V4U4VcVPVVVeVVUVU4VVV6VYVP444sV4Vk4VVcVVUV44Us4sUPVYV4VUVP4V4U4sVPUU4VV64kVcVV4kVs"), d("7ccGhU74hcGU"), d("4hUsYVY6UPYkYVUhYck6P6UsYVYVYYUlYkU4k640UsU7UsUYUPYk"), e("40UcU7UY4xUcPPk04PYeY44k"), d("UYUPY4k6YVYcYVY4UPU0k6UVUlUxUlYkYVk6UPYeUVUPY6Y4UcUlU7"), d("PVUhYcY6UPk744UPY4UPUVY4UcUlU7"), k("4UUcUxUP4xUsUkk6Y6UxYPUYUcU7"), e("U7Y64sP64ck6P6UxYPUYUcU7"), g("U7UlY4PlUPYeUcYVY4PlUeUlYVY4"), e("VkU4"), d("4sUVY4UcYUUPPe4lUkUGUPUVY4"), k("44UlY4YPU0"), d("P6444Uk0Pe4VUeUsU7UYUPk6PUUcUPYYUPYk"), d("P640UcU7UY4xUcPP"), k("UVUlUxUlYk44UPY6Y4Ue")]
            , c = [f("47UlUhUcUsk6PVYPUcY4UPk64PU7UsUkUxUPYkk6P6UxYPUYUcU7"), k("PkUPUsUxPUUcU4UPUlk7PkUPUsUxPUUcU4UPUlkeY4U0kck64sUVY4UcYUUPPek64VUlU7Y4YkUlUxk6keVVVkk0UkUcY4kc"), k("40UsUYU7UPY4Ul"), e("4sU4UlUkUP4PYe40UsU74V4V44UPY4UPUVY4"), f("4YUsUkYkUcUlUxUs"), k("P6UxUsYcUkUcUxUx"), e("U7UsYUUcUYUsY4UlYk"), g("PkUsUVUeUsU7Us"), e("P4YYk64VUPU7k640P4k64VUlU7U4UPU7YVUPU4k64PYeY4YkUsk64kUlUxU4"), e("PsPs40UcU7Uc444xk6P6UxYPUYUcU7"), f("kVUUVUV6"), f("UUUcUxUxPkUPUVY4"), e("V0U7YPUxUxVhk6Y6UsY4UeV0klVhk6U4UlU0UsUcU7V0"), d("44UPUUUsYPUxY4k64kYkUlYYYVUPYkk64eUPUxY6UPYk"), d("4UYkUPU7UVUek6PVUVYkUcY6Y4k640P4"), g("7UG6eY7UGPhY74h0cV"), g("UPU7UVUlU4UPPPPk4c"), e("PPU0Y6YPYVUe"), k("UcUVY6"), f("7Pe0e77UcUeY7Yc6GP7Yele6"), k("UVYkUPUsY4UPP6YkUlUYYkUsU0"), g("U0UlU7UlYVY6UsUVUP"), k("4kYPY4Y4UlU7PVUeUsU4UlYY"), k("4kUlU4UlU7Uck640P4"), g("PVP44sP44c4VPl44Pk4sPY"), e("7chhcs74h0cV"), k("U4UlYYU7UxUlUsU4PPY6U4UsY4UPYk"), k("4sUxUcUPU4UcY4k6P6UxYPUYk04cU7"), d("P6444Uk6UcU7Y4UPUYYkUsU4Ulk6U4Ulk6PYUPUk4hUcY4"), k("YPU7UcUUUlYkU04lUUUUYVUPY4"), k("UPU7UVUlU4UPPPPk4c4VUlU0Y6UlU7UPU7Y4"), f("P6UcUVUsYVUs"), f("4sU4UlUkUPk64UUsU7UYYVUlU7UYk6PVY4U4"), k("UkUcU7U44kYPUUUUUPYk"), g("4sPU4Yk6PVUcY4UPPVUsUUUPY4Yck6Y6UxYPUYUcU7"), f("4lYkUkUcY4k644UlYYU7UxUlUsU4UPYk"), d("UVUlUxUlYk"), f("UeUcU4U4UPU7"), f("UxUlUVUsUxPVY4UlYkUsUYUP"), e("4YUlUlUYUxUPk6P4UsUxUhk64PUUUUUPUVY4YVk6P6UxYPUYUcU7"), d("UcU7U4UPYeUPU4444k"), g("4xYPUVUcU4Usk64UUsYe"), g("4sU0UsYGUlU740P6VV44UlYYU7UxUlUsU4UPYkP6UxYPUYUcU7"), k("UVYkUPUsY4UP4kYPUUUUUPYk"), f("4VUsYVY4UPUxUxUsYk"), k("UxUcU7UhP6YkUlUYYkUsU0"), f("4VUsUxUcUUUlYkU7UcUsU7k64U4k"), f("P4UeYkUPUP444eUcUYUeUxUcUYUeY4"), g("UVYkUPUsY4UPPVUeUsU4UPYk"), f("4YYPUxUcU0"), f("47YcYe4xUsYPU7UVUeUPYk"), d("PcUlYPP4YPUkUPk6P6UxYPUYk0UcU7"), e("7UGPhY74h0cVPl4Y4kVkVVVsVk"), g("PVPY4VY4Uxk7PVPY4VY4Ux"), f("4YUlUlUYUxUPk64PUsYkY4Uek6P6UxYPUYk0UcU7"), k("PsPs44UlYYU7UxUlUsU4k6P6UxYPUYUcU7"), k("k7U0YPYVUcUVk7VsVUVVk7UVUlU0Vhk7UcUYUsU0UPk7VsVUVVk7UVUlU0Vhk7U0YPYVUcUVk7UeYGk7U7UPY4UPUsYVUPk7UVUlU0"), k("47UlYkY4UlU7k64cU4UPU7Y4UcY4Yck6PVUsUUUP"), d("Y6UsYkYVUP4cU7Y4"), f("PVUcU0Y6UxUPk6P6UsYVYV"), d("4VUlUxUlU7U7Usk640P4"), k("YGUsUhUl"), k("UYUPY4PPU7UcUUUlYkU04xUlUVUsY4UcUlU7"), e("YVUeUsU4UPYkPVUlYPYkUVUP"), d("44UlYYU7UxUlUsU4UPYkYVk6Y6UxYPUYUcU7"), f("UxUlUVUsY4UcUlU7"), f("4eUPYkUlUPYVk6kUk64YUPU7UPYkUsUxYVk6UxUcYUUP"), g("YYUcU7U4UlYY"), g("PVUeUlYYUVUsYkU4k64YUlY4UeUcUV"), d("7Ph7G77eh0Gl7UG0GV7chhcs74h0cV"), e("7Pe0e77UcUeY7eGsex7UGPhY"), d("4YUcU7UYUPYk"), g("PkUlUVUh40UPUxY4k6PPY6U4UsY4UP"), f("PYUcU7U4UlYY4UYkUsU0UP"), g("UPU7UsUkUxUPPUUPYkY4UPYe4sY4Y4YkUcUk4sYkYkUsYc"), k("4hUsUVYVY44lU7UP"), d("UsY4Y4YkUcUkYPY4UPk6YUUPUVVkk6UsY4Y4YkPUUPYkY4UPYeVhk6YUUsYkYcUcU7UYk6YUUPUVVkk6YUUsYkYcUcU7P4UPYe4VUlUlYkU4UcU7UsY4UPVhk6YPU7UcUUUlYkU0k6YUUPUVVkk6YPU7UcUUUlYkU04lUUUUYVUPY4Vhk6YUUlUcU4k6U0UsUcU7kekck6Yhk6k6k6YUUsYkYcUcU7P4UPYe4VUlUlYkU4UcU7UsY4UPk6V0k6UsY4Y4YkPUUPYkY4UPYek6khk6YPU7UcUUUlYkU04lUUUUYVUPY4Vhk6k6k6UYUxPlP6UlYVUcY4UcUlU7k6V0k6YUUPUVV4keUsY4Y4YkPUUPYkY4UPYekxk6V6kxk6VskcVhk6Y0"), f("P6UPYkY6UPY4YPUs"), k("UlY6UPU744UsY4UsUkUsYVUP"), f("UVUsU7YUUsYV"), d("Uc4YUPY4Y4UPYkPVUVYkUcY6Y4UsUkUxUPP6UxYPUYUcU7"), d("4cU7UUUlYkU0UsUxk6PkUlU0UsU7"), k("47UcY4YkUlk6P6444Uk6P6UxYPUYk04cU7"), g("40YVYeU0UxVkk7Pe404x4eP4P4P6"), e("7Pe0e77UcUeY7chhcs74h0cV"), f("47P64xUsYVY4P6UsYVYV"), d("P4UeYkUPUP444UUsUVUP"), f("4xUsYVY4P6UsYVYV"), f("VGVG"), k("Y6UsYkYVUP4UUxUlUsY4"), k("7Pe0e77UcUeY7ccGhU74hcGU"), d("Vhk6"), g("UYUPY44sY4Y4YkUcUk4xUlUVUsY4UcUlU7"), f("YhkYU7UsU0UPkYVG"), e("47YcUsUxUs"), f("U7UlY4PlUPYeUcYVY4PlUeUlYVY4U7UsU0UP"), f("PxkY"), g("4Y4U4s4V4Pk6P6UxYPUYUcU7"), k("YPU7U4UPUUUcU7UPU4"), d("7UcUh67PG7eh74h0cV"), g("PlUcYPYsYeUxU4U0YGYkPl"), e("Pxk7"), f("40UsY4YPYkUsk640P4k6PVUVYkUcY6Y4k64VUsY6UcY4UsUxYV"), e("4sYkUcUsUxk64kUxUsUVUh"), e("4UUsU7UYPVUlU7UY"), d("U0YY4Vk6U7UhUkUsUUUGUlYkU4k6Y6UeYVUYUxYck6UPYeYUY4k6YGYsUcYPkxk67sh0G6k6Y4Y6UeYVY4klVGklYPUeUkUYY4UcUVk7U0UlklUxUPYUYUUs"), d("4kYkUsUYUYUsU4UlUVUcUl"), f("4eUsYkU0UlU7Yck64UUcYkUPUUUlYek6P6UxYPUYUcU7"), f("P6UsUxUsUVUPk6PVUVYkUcY6Y4k640P4"), g("47UsY4UcYUUPk64VUxUcUPU7Y4"), e("YPYVUPYk4sUYUPU7Y4"), g("PsYPUcUVUhP4UcU0UPk7PsYPUcUVUhP4UcU0UP"), k("UPYeY6UPYkUcU0UPU7Y4UsUxk0YYUPUkUYUx"), f("4sPkPk4sPcPl4kPP4U4U4PPk"), f("7eehhc7Uc7cx74heh074heG07chhcs"), d("4sUxUcY6UsYck6PVUPUVYPYkUcY4Yck64VUlU7Y4YkUlUxk6VV"), d("PVUVYkUcY6Y4k640P4k64kUlUxU4"), e("kxk6kYUkYkUlYYYVUPYkP6YkUlY6kYVG"), g("P4444V4VY4Uxk7P4444V4VY4Ux"), k("YVUPUxUU"), f("4cU7UUUl4kUsUVUhUYYkUlYPU7U4"), g("P6UsU7U4Ulk6PYUPUkk6P6UxYPUYUcU7"), e("4eUsUPY4Y4UPU7YVUVUeYYUPUcUxUPYk"), d("YVY6UsU7"), g("4sUVY4UcYUUP4kUlYkU4UPYk"), k("P4UeYkUPUP444xUcUYUeY4PVUeUsU4UlYY"), g("V6VkV6Vk"), f("V6VkV6VV"), e("V6VkV6V6"), d("V6VkV6Vs"), d("PYP64ck644UPY4UPUVY4UlYkk6Vsk7V4"), g("Vhk6UPYeY6UcYkUPYVV0"), d("P4UeYkUPUP4444UsYkUhPVUeUsU4UlYY"), g("4PYeUcUUk64PYUUPYkYcYYUeUPYkUP"), d("4kUsY4Y4UxUPUxUlUYk64YUsU0UPk64xUsYPU7UVUeUPYk"), g("4cU0Y6UsUVY4"), k("PU4x4Vk640YPUxY4UcU0UPU4UcUsk6P6UxYPUYUcU7"), d("4sU4UlUkUPk64eUPUkYkUPYY"), e("4kUxYPUPPVY4UsUVUhYVk64cU7YVY4UsUxUxk644UPY4UPUVY4UlYk"), d("YYYYYYU0U0U0U0U0U0U0U0U0U0UxUxUc"), d("UeUcYVY4UlYkYc"), g("YVUsU7YVk0YVUPYkUcUU"), g("P6UsY6YcYkYPYV"), d("4kYPY4Y4UlU7P4UPYeY4"), k("V6VkVsVs"), f("4sY6Y6PPY6"), g("P6UsYkUlU0k7P4PUk6Y6UxUsYcUPYkk6Y6UxYPUYUcU7"), k("44UPUsUxP6UxYc4xUcYUUPk6PPY6U4UsY4UP"), f("4xUlUeUcY4k64YYPUGUsYkUsY4Uc"), d("4UPk4s4Y404P47P4PlPV4e4s444PPk"), d("4sUYUPU7UVYck64U4k"), e("40UsUVYkUlU0UPU4UcUs4UUxUsYVUeP6UsY6UPYkk740UsUVYkUlU0UPU4UcUs4UUxUsYVUeP6UsY6UPYk"), d("kVkVkV"), f("PYUlYkU44VUsY6Y4YPYkUPPe"), k("UYUPY44VUlU0Y6YPY4UPU4PVY4YcUxUP"), e("Y6UxUsY4UUUlYkU0"), e("V6VsV6VP"), g("4sYkUsUkUcUVk6P4YcY6UPYVUPY4Y4UcU7UY"), e("V6VsV6VU"), e("V6VsV6VV"), d("7Pe0e77UcUeY74heG07PG7eh"), g("V6VsV6V4"), f("V6VsV6Vs"), g("V6VsV6Vk"), f("V6VsV6V6"), k("V6VsV6VY"), k("4kYPY4Y4UlU74eUcUYUeUxUcUYUeY4"), k("YUUPYkY4UPYe4sY4Y4YkUcUkP6UlUcU7Y4UPYk"), e("V6VsV6Ve"), k("Y4UPYeY44kUsYVUPUxUcU7UP"), e("kVV6VUVc"), f("U4UlYPUkUxUPP4YYUcYVY4k6PYUPUkk6P6UxYPUYUcU7"), g("YPU7UPYVUVUsY6UP"), g("P4UeYPU7U4UPYkk644UsY64VY4YkUxk647P64sP64ck6P6UxYPUYUcU7"), d("4kUsY4UsU7UY"), d("444U4hUsUck0PV4k"), g("PVU7UsY6k64cP44V")]
            , Ja = [e("40UlUlUx4kUlYkUsU7")];
        (function () {
            var a = [82, 73, 50, 30, 45, 29, 28, 16, 82, 41, 77, 5, 27, 92, 27, 0, 2, 1423857449, -2, 3, -3, 3432918353, 1555261956, 4, 2847714899, -4, 5, -5, 2714866558, 1281953886, 6, -6, 198958881, 1141124467, 2970347812, -7, 7, 3110523913, 8, -8, 2428444049, -9, 9, 10, -10, 11, -11, 2563907772, 12, -12, 13, 2282248934, -13, 2154129355, -14, 14, 15, -15, 16, -16, 17, -17, 18, -18, 19, -19, 20, -20, 21, -21, -22, 22, 23, -23, 24, -24, -25, 25, -26, 26, 27, -27, 28, -28, 29, -29, -30, 30, 31, -31, -32, 32, -33, 33, -34, 34, -35, 35, -37, -36, 36, 37, -38, 39, -39, 38, -41, 41, 40, -40, 42, -43, 43, -42, -45, 45, -44, 44, -46, 47, 46, -47, 48, -48, 49, -49, 50, -51, 51, -50, 570562233, 53, -52, -53, 52, 55, 54, -54, -55, 503444072, -57, -56, 57, 56, 58, -59, -58, 59, 60, 61, -61, -60, 62, 63, -63, -62, -66, 711928724, 64, -67, 66, 65, -64, -65, 67, -69, 68, 69, 70, -70, -68, -71, 71, -72, 3686517206, -75, -74, 75, 73, 72, 74, -73, 79, 76, -76, 77, -79, -78, 78, -77, 3554079995, 82, -80, 80, -83, -82, 81, -81, 83, -85, -84, -86, 86, 84, 85, 87, -87, -91, 90, 88, 89, -88, -90, 91, -89, 95, 94, -92, -95, 93, -94, -93, 92, -99, 99, -96, 98, -97, -98, 96, 97, -101, 3272380065, 100, -103, 101, 102, -102, -100, 103, 107, -105, 104, 106, 105, -106, -104, -107, 111, 108, 110, 109, -108, -110, -109, -111, 251722036, -114, 115, 113, 112, 114, -115, -112, -113, -118, 118, -116, -119, 116, 117, -117, 119, 123, 120, 122, 121, -120, -122, -121, -123, 125, 127, 3412177804, 126, 124, -125, -126, -124, -127, -128, 128, -129, 1843258603, 3803740692, 984961486, 3939845945, 4195302755, 4066508878, 255, 1706088902, 256, 1969922972, 365, 2097651377, 376229701, 853044451, 752459403, 1e3, 426522225, 3772115230, 615818150, 3904427059, 4167216745, 4027552580, 3654703836, 1886057615, 879679996, 3518719985, 3244367275, 2013776290, 3373015174, 1759359992, 285281116, 1622183637, 1006888145, 1e4, 1231636301, 83908371, 1090812512, 2463272603, 1373503546, 2596254646, 2321926636, 1504918807, 2181625025, 2882616665, 2747007092, 3009837614, 3138078467, 397917763, 81470997, 829329135, 2657392035, 956543938, 2517215374, 2262029012, 40735498, 2394877945, 3266489909, 702138776, 2808555105, 2936675148, 1258607687, 1131014506, 3218104598, 3082640443, 1404277552, 565507253, 534414190, 1541320221, 1913087877, 2053790376, 1789927666, 3965973030, 3826175755, 4107580753, 4240017532, 1658658271, 3579855332, 3708648649, 3453421203, 3317316542, 1873836001, 1742555852, 461845907, 3608007406, 1996959894, 3747672003, 3485111705, 2137656763, 3352799412, 213261112, 3993919788, 1.01, 3865271297, 4139329115, 4275313526, 282753626, 1068828381, 2768942443, 2909243462, 936918e3, 3183342108, 27492, 141376813, 174e4, 3050360625, 654459306, 2617837225, 1454621731, 2489596804, 2227061214, 1591671054, 2362670323, 4294967295, 1308918612, 2246822507, 795835527, 1181335161, 414664567, 4279200368, 1661365465, 1037604311, 4150417245, 3887607047, 1802195444, 4023717930, 2075208622, 1943803523, 901097722, 628085408, 755167117, 3322730930, 3462522015, 3736837829, 3604390888, 2366115317, .4, 2238001368, 2512341634, 2647816111, -.2, 314042704, 1510334235, 58964, 1382605366, 31158534, 450548861, 3020668471, 1119000684, 3160834842, 2898065728, 1256170817, 18e5, 2765210733, 3060149565, 3188396048, 2932959818, 124634137, 2797360999, 366619977, 62317068, -.26, 1202900863, 498536548, 1340076626, 2405801727, 2265490386, 1594198024, 1466479909, 2547177864, 249268274, 2680153253, 2125561021, 3294710456, 855842277, 3423369109, .732134444, 3705015759, 3569037538, 1994146192, 1711684554, 1852507879, 997073096, 733239954, 4251122042, 601450431, 4111451223, 167816743, 3855990285, 3988292384, 3369554304, 3233442989, 3495958263, 3624741850, 65535, 453092731, -.9, 2094854071, 1957810842, 325883990, 4057260610, 1684777152, 4189708143, 3915621685, 162941995, 1812370925, 3775830040, 783551873, 3134207493, 1172266101, 2998733608, 2724688242, 1303535960, 2852801631, 112637215, 1567103746, 651767980, 1426400815, 906185462, 2211677639, 1047427035, 2344532202, 2607071920, 2466906013, 225274430, 544179635, 2176718541, 2312317920, 1483230225, 1342533948, 2567524794, 2439277719, 1088359270, 671266974, 1219638859, 953729732, 3099436303, 2966460450, 817233897, 2685067896, 2825379669, 4089016648, 4224994405, 3943577151, 3814918930, 476864866, 1634467795, 335633487, 1762050814, 1, 2044508324, -1, 3401237130, 3268935591, 3524101629, 3663771856, 1907459465];
            (function () {
                function d(b, c) {
                    if (null == b)
                        return null;
                    for (var l = x(c), f = [], g = b.length, e = a[15]; e < g; e++)
                        f.push(Y(b[e], l++));
                    return f
                }
                function f(b) {
                    if (null == b)
                        return null;
                    for (var c = [], l = a[15], d = b.length; l < d; l++) {
                        var g = b[l];
                        c[l] = Ka[(g >>> a[23] & a[56]) * a[58] + (g & a[56])]
                    }
                    return c
                }
                function g(h) {
                    var c = [];
                    if (null == h || void 0 == h || h.length == a[15])
                        return za(L);
                    if (h.length >= L) {
                        var c = a[15]
                            , l = [];
                        if (null != h && h.length != a[15]) {
                            if (h.length < L)
                                throw Error(b[134]);
                            for (var d = a[15]; d < L; d++)
                                l[d] = h[c + d]
                        }
                        return l
                    }
                    for (l = a[15]; l < L; l++)
                        c[l] = h[l % h.length];
                    return c
                }
                function e(h) {
                    var c = a[405];
                    if (null != h)
                        for (var l = a[15]; l < h.length; l++)
                            c = c >>> a[38] ^ La[(c ^ h[l]) & a[299]];
                    h = Aa(c ^ a[405]);
                    c = h.length;
                    if (null == h || c < a[15])
                        h = new String(b[0]);
                    else {
                        for (var l = [], d = a[15]; d < c; d++)
                            l.push(Ma(h[d]));
                        h = l.join(b[0])
                    }
                    return h
                }
                function k(h, c, l) {
                    var d, f = [b[70], b[85], b[118], b[73], b[77], b[106], b[80], b[116], b[44], b[42], b[62], b[114], b[93], b[105], b[40], b[64], b[103], b[86], b[99], b[141], b[48], b[89], b[76], b[69], b[132], b[47], b[88], b[33], b[43], b[45], b[78], b[53], b[110], b[50], b[68], b[101], b[52], b[41], b[138], b[133], b[66], b[129], b[108], b[81], b[140], b[90], b[117], b[63], b[107], b[91], b[135], b[115], b[113], b[97], b[60], b[61], b[137], b[126], b[83], b[79], b[119], b[71], b[123], b[75]], g = b[74], e = [];
                    if (l == a[541])
                        l = h[c],
                            d = a[15],
                            e.push(f[l >>> a[16] & a[153]]),
                            e.push(f[(l << a[23] & a[122]) + (d >>> a[23] & a[56])]),
                            e.push(g),
                            e.push(g);
                    else if (l == a[16])
                        l = h[c],
                            d = h[c + a[541]],
                            h = a[15],
                            e.push(f[l >>> a[16] & a[153]]),
                            e.push(f[(l << a[23] & a[122]) + (d >>> a[23] & a[56])]),
                            e.push(f[(d << a[16] & a[148]) + (h >>> a[30] & a[19])]),
                            e.push(g);
                    else if (l == a[19])
                        l = h[c],
                            d = h[c + a[541]],
                            h = h[c + a[16]],
                            e.push(f[l >>> a[16] & a[153]]),
                            e.push(f[(l << a[23] & a[122]) + (d >>> a[23] & a[56])]),
                            e.push(f[(d << a[16] & a[148]) + (h >>> a[30] & a[19])]),
                            e.push(f[h & a[153]]);
                    else
                        throw Error(b[111]);
                    return e.join(b[0])
                }
                function za(b) {
                    for (var c = [], l = a[15]; l < b; l++)
                        c[l] = a[15];
                    return c
                }
                function Z(h, c, l, d, f) {
                    if (null != h && h.length != a[15]) {
                        if (null == l)
                            throw Error(b[131]);
                        if (h.length < f)
                            throw Error(b[134]);
                        for (var e = a[15]; e < f; e++)
                            l[d + e] = h[c + e]
                    }
                }
                function Aa(b) {
                    var c = [];
                    c[0] = b >>> a[74] & a[299];
                    c[1] = b >>> a[58] & a[299];
                    c[2] = b >>> a[38] & a[299];
                    c[3] = b & a[299];
                    return c
                }
                function ma(h) {
                    if (null == h || void 0 == h)
                        return h;
                    h = encodeURIComponent(h);
                    for (var c = [], l = h.length, d = a[15]; d < l; d++)
                        if (h.charAt(d) == b[27])
                            if (d + a[16] < l)
                                c.push(Na(h.charAt(++d) + b[0] + h.charAt(++d))[0]);
                            else
                                throw Error(b[146]);
                        else
                            c.push(h.charCodeAt(d));
                    return c
                }
                function Na(b) {
                    if (null == b || b.length == a[15])
                        return [];
                    b = new String(b);
                    for (var c = [], l = b.length / a[16], d = a[15], f = a[15]; f < l; f++) {
                        var e = parseInt(b.charAt(d++), a[58]) << a[23]
                            , g = parseInt(b.charAt(d++), a[58]);
                        c[f] = x(e + g)
                    }
                    return c
                }
                function Ma(c) {
                    var d = [];
                    d.push(aa[c >>> a[23] & a[56]]);
                    d.push(aa[c & a[56]]);
                    return d.join(b[0])
                }
                function na(b, c) {
                    if (null == b || null == c || b.length != c.length)
                        return b;
                    for (var d = [], f = a[15], e = b.length; f < e; f++)
                        d[f] = Y(b[f], c[f]);
                    return d
                }
                function Y(a, b) {
                    a = x(a);
                    b = x(b);
                    return x(a ^ b)
                }
                function Oa(a, b) {
                    return x(a + b)
                }
                function x(c) {
                    if (c < a[290])
                        return x(a[291] - (a[290] - c));
                    if (c >= a[290] && c <= a[282])
                        return c;
                    if (c > a[282])
                        return x(a[292] + c - a[282]);
                    throw Error(b[136])
                }
                function Pa(h) {
                    function d() {
                        for (var h = [b[282], c[32], c[137], b[221], c[150], b[36], c[157], c[103], c[174], b[280], b[18], b[303], c[23], b[338], c[106], b[181], b[337], c[46], c[44], b[112], b[210], b[194], b[281], c[60], b[277], b[276], b[160], c[175], b[356], b[198], b[297], b[98], c[104], b[184], b[223], c[14], c[4], b[226], b[127], b[92], c[49], b[318], c[122], b[67], B[5], c[135], c[81], c[75], b[228], b[286], c[148], b[335], b[283], c[41], c[2], b[272], c[102], b[293], b[348], Ja[0], b[169], B[4], b[273], b[82], c[94], c[108], c[142], c[77], c[5], b[358], c[7], b[212], b[279], c[116], b[278], c[68], b[229], c[176], b[261], c[8], b[268], c[17], b[26], b[340], b[289], b[284], b[104], c[160], b[224], b[256], b[243], b[322], b[204], c[19], b[300], c[70], c[90], b[206], b[3], b[65], c[99], b[186], b[321], b[170], b[346], c[25], b[174], b[271], c[15], b[46], c[52], c[69], c[84], b[153], b[125], c[114], b[37]], f = [], e = a[15]; e < h.length; e++)
                            try {
                                var g = h[e];
                                l()(g) && f.push(g)
                            } catch (k) { }
                        return f.join(b[56])
                    }
                    function l() {
                        function h(a) {
                            var c = {};
                            return k.style.fontFamily = a,
                                g.appendChild(k),
                                c.height = k.offsetHeight,
                                c.width = k.offsetWidth,
                                g[b[307]](k),
                                c
                        }
                        var d = [c[21], c[141], B[6]]
                            , l = []
                            , f = c[139]
                            , e = b[327]
                            , g = C[b[258]]
                            , k = C[b[167]](c[123]);
                        k.style.fontSize = e;
                        k.style.visibility = c[37];
                        k.innerHTML = f;
                        for (f = a[15]; f < d.length; f++)
                            l[f] = h(d[f]);
                        return function (c) {
                            for (var f = a[15]; f < l.length; f++) {
                                var e = h(c + b[34] + d[f])
                                    , g = l[f];
                                if (e.height !== g.height || e.width !== g.width)
                                    return !0
                            }
                            return !1
                        }
                    }
                    function f() {
                        var a = null
                            , h = null
                            , d = [];
                        try {
                            h = C[b[167]](c[79]),
                                a = h[B[7]](b[255]) || h[B[7]](c[112])
                        } catch (l) { }
                        if (!a)
                            return d;
                        try {
                            d.push(a[b[20]]())
                        } catch (g) { }
                        try {
                            d.push(e(a, h))
                        } catch (k) { }
                        return d.join(b[56])
                    }
                    function e(h, d) {
                        try {
                            var f = c[76]
                                , l = b[240]
                                , g = h[c[43]]();
                            h[c[33]](h[c[113]], g);
                            var k = new Float32Array([a[432], a[488], a[15], a[428], a[453], a[15], a[15], a[468], a[15]]);
                            h.bufferData(h[c[113]], k, h[c[24]]);
                            g.k = a[19];
                            g.l = a[19];
                            var t = h[c[20]]()
                                , X = h[c[48]](h[b[267]]);
                            h[c[63]](X, f);
                            h[b[341]](X);
                            var la = h[c[48]](h[c[149]]);
                            return h[c[63]](la, l),
                                h[b[341]](la),
                                h[b[177]](t, X),
                                h[b[177]](t, la),
                                h[c[45]](t),
                                h[b[309]](t),
                                t.n = h[c[92]](t, b[205]),
                                t.m = h[c[62]](t, c[29]),
                                h[c[74]](t.o),
                                h[c[167]](t.n, g.k, h.FLOAT, !a[541], a[15], a[15]),
                                h[J[0]](t.m, a[541], a[541]),
                                h[b[139]](h[b[259]], a[15], g.l),
                                M(d[b[149]]())
                        } catch ($a) {
                            return b[324]
                        }
                    }
                    function g() {
                        var h = C[b[167]](b[155])
                            , d = []
                            , f = [c[124], b[270], b[328], b[315], b[192], c[166], c[22], c[143], b[274], b[1], b[329], b[154], b[161], b[238], b[49], c[120], b[248], b[239], b[156], b[343], c[132], c[86], c[47], c[125], b[32], b[344], c[73], b[150]];
                        if (!window[c[154]])
                            return d.join(b[0]);
                        for (var l = a[15]; l < f.length; l++)
                            try {
                                C[b[258]].appendChild(h),
                                    h.style.color = f[l],
                                    d.push(f[l]),
                                    d.push(window[c[154]](h).getPropertyValue(c[36])),
                                    C[b[258]][b[307]](h)
                            } catch (e) {
                                d.push(b[349])
                            }
                        return d.join(b[54])
                    }
                    function k() {
                        try {
                            var h = C[b[167]](c[79])
                                , d = h[B[7]](b[354])
                                , f = c[105];
                            d[c[169]] = b[235];
                            d[b[145]] = b[333];
                            d[c[169]] = b[202];
                            d[b[219]] = c[10];
                            d[c[11]](a[281], a[541], a[152], a[66]);
                            d[b[219]] = c[170];
                            d.fillText(f, a[16], a[56]);
                            d[b[219]] = b[313];
                            d.fillText(f, a[23], a[60]);
                            return h[b[149]]()
                        } catch (l) {
                            return b[237]
                        }
                    }
                    function m() {
                        try {
                            return window[b[355]] && n.h ? q() : r()
                        } catch (a) {
                            return b[31]
                        }
                    }
                    function r() {
                        if (!y[b[4]])
                            return b[0];
                        var h = [b[211], b[314], c[3], b[5], b[183], c[27], c[115], b[230], c[42], b[157], c[145], b[266], c[34], b[246], c[134], b[336], b[189], c[138], b[296], b[201], b[158], b[233], b[247], c[147], c[13], b[55], b[288], b[173], c[171], c[64], c[26], b[244], b[332], b[187], c[133], b[269], b[290], b[351], b[176], b[308], b[39], b[254], c[97], c[71], b[72], b[7], c[54], b[200], c[39], b[242], c[107], b[225], c[66], b[188], b[287], b[190], c[80], b[250], b[347], c[87], b[263], b[213], b[109], b[95], B[1], c[109], c[82], c[0], c[57], b[352], c[85], B[3], b[166], c[50], b[214], b[195], c[35], c[121], c[146], c[28], b[357], b[317], c[31], b[178], b[241], c[55], c[9], b[96], b[251], b[94], c[72], b[196], b[23], b[102], b[84], b[148], b[199], c[59], b[16], b[217], b[252], b[306], c[173], b[222], b[15], b[58], b[203], b[8], c[136], b[245], b[17], b[51], b[295], c[153], c[130], b[331], b[232], c[51], c[61]]
                            , d = []
                            , f = {};
                        d.push(p(y[b[4]], function (h) {
                            f[h.name] = a[541];
                            var d = p(h, function (a) {
                                return [a.type, a.suffixes].join(b[144])
                            }).join(b[34]);
                            return [h.name, h.description, d].join(c[88])
                        }, this).join(b[25]));
                        d.push(p(h, function (a) {
                            if (f[a])
                                return b[0];
                            a = y[b[4]][a];
                            if (!a)
                                return b[0];
                            var h = p(a, function (a) {
                                return [a.type, a.suffixes].join(b[144])
                            }).join(b[34]);
                            return [a.name, a.description, h].join(c[88])
                        }, this).join(b[56]));
                        return d.join(b[56])
                    }
                    function q() {
                        return window[b[355]] ? p([b[236], b[292], b[316], b[298], c[151], b[197], c[83], b[218], c[111], b[175], b[249], b[100], b[162], b[231], c[1], b[249], b[102], b[148], b[312], c[53], b[350], c[118], b[326]], function (a) {
                            try {
                                return new window[b[355]](a),
                                    a
                            } catch (h) {
                                return null
                            }
                        }).join(b[56]) : b[0]
                    }
                    function p(a, b, h) {
                        var c = [];
                        if (null == a)
                            return c;
                        if (I && a.map === I)
                            return a.map(b, h);
                        E(a, function (a, d, f) {
                            c[c.length] = b.call(h, a, d, f)
                        });
                        return c
                    }
                    function E(b, h) {
                        if (null !== b)
                            if (z && b.forEach === z)
                                b.forEach(h, void 0);
                            else if (b.length === +b.length)
                                for (var c = a[15], d = b.length; c < d && h.call(void 0, b[c], c, b) !== {}; c++)
                                    ;
                            else
                                for (c in b)
                                    if (b.hasOwnProperty(c) && h.call(void 0, b[c], c, b) === {})
                                        break
                    }
                    var z = Array.prototype.forEach
                        , I = Array.prototype.map
                        , n = {
                            e: M,
                            j: !0,
                            i: !0,
                            h: !0,
                            b: !0,
                            a: !0
                        };
                    typeof h == b[264] ? n.e = h : (null != h.b && void 0 != h.b && (n.b = h.b),
                        null != h.a && void 0 != h.a && (n.a = h.a));
                    this.get = function () {
                        var h = []
                            , l = [];
                        if (Qa) {
                            var e;
                            try {
                                e = !!window[b[339]]
                            } catch (X) {
                                e = !0
                            }
                            h.push(e);
                            var p;
                            try {
                                p = !!window[c[38]]
                            } catch (z) {
                                p = !0
                            }
                            h.push(p);
                            h.push(!!window[c[40]]);
                            C[b[258]] ? h.push(typeof C[b[258]][b[301]]) : h.push("undefined");
                            h.push(typeof window[c[78]]);
                            h.push(y[b[193]]);
                            h.push(y[c[155]]);
                            if (e = n.i)
                                try {
                                    var u = C[b[167]](c[79]);
                                    e = !(!u[B[7]] || !u[B[7]](b[354]))
                                } catch (r) {
                                    e = !1
                                }
                            if (e)
                                try {
                                    h.push(k()),
                                        n.b && h.push(f())
                                } catch (E) {
                                    h.push(b[59])
                                }
                            h.push(g());
                            n.a && l.push(d());
                            l.push(y[c[110]]);
                            l.push(y[b[151]]);
                            l.push(window[b[257]][b[359]]);
                            n.j && (u = window[b[257]] ? [window[b[257]].height, window[b[257]].width] : [a[15], a[15]],
                                typeof u !== c[98] && l.push(u.join(b[138])));
                            l.push((new Date)[b[128]]());
                            l.push(y[b[122]]);
                            l.push(m())
                        }
                        u = [];
                        n.e ? (u.push(n.e(h.join(c[152]))),
                            u.push(n.e(l.join(c[152])))) : (u.push(M(h.join(c[152]))),
                                u.push(M(l.join(c[152]))));
                        return u
                    }
                }
                function M(h) {
                    var c = a[88], d, f, e, g, k, m;
                    d = h.length & a[19];
                    f = h.length - d;
                    e = c;
                    c = a[21];
                    g = a[375];
                    for (m = a[15]; m < f;)
                        k = h.charCodeAt(m) & a[299] | (h.charCodeAt(++m) & a[299]) << a[38] | (h.charCodeAt(++m) & a[299]) << a[58] | (h.charCodeAt(++m) & a[299]) << a[74],
                            ++m,
                            k = (k & a[486]) * c + (((k >>> a[58]) * c & a[486]) << a[58]) & a[405],
                            k = k << a[56] | k >>> a[60],
                            k = (k & a[486]) * g + (((k >>> a[58]) * g & a[486]) << a[58]) & a[405],
                            e ^= k,
                            e = e << a[50] | e >>> a[64],
                            e = (e & a[486]) * a[26] + (((e >>> a[58]) * a[26] & a[486]) << a[58]) & a[405],
                            e = (e & a[486]) + a[394] + (((e >>> a[58]) + a[435] & a[486]) << a[58]);
                    k = a[15];
                    switch (d) {
                        case a[19]:
                            k ^= (h.charCodeAt(m + a[16]) & a[299]) << a[58];
                        case a[16]:
                            k ^= (h.charCodeAt(m + a[541]) & a[299]) << a[38];
                        case a[541]:
                            k ^= h.charCodeAt(m) & a[299],
                                k = (k & a[486]) * c + (((k >>> a[58]) * c & a[486]) << a[58]) & a[405],
                                k = k << a[56] | k >>> a[60],
                                k = (k & a[486]) * g + (((k >>> a[58]) * g & a[486]) << a[58]) & a[405],
                                e ^= k
                    }
                    e ^= h.length;
                    e ^= e >>> a[58];
                    e = (e & a[486]) * a[407] + (((e >>> a[58]) * a[407] & a[486]) << a[58]) & a[405];
                    e ^= e >>> a[50];
                    e = (e & a[486]) * a[349] + (((e >>> a[58]) * a[349] & a[486]) << a[58]) & a[405];
                    e ^= e >>> a[58];
                    h = e >>> a[15];
                    d = [];
                    d.push(h);
                    try {
                        for (var r, B = h + b[0], p = a[15], E = a[15], z = a[15]; z < B.length; z++)
                            try {
                                var q = parseInt(B.charAt(z) + b[0])
                                    , p = q || q === a[15] ? p + q : p + a[541];
                                E++
                            } catch (n) {
                                p += a[541],
                                    E++
                            }
                        E = E == a[15] ? a[541] : E;
                        r = ba(p * a[541] / E, N);
                        for (var x, C = Math.floor(r / Math.pow(a[43], N - a[541])), G = h + b[0], w = a[15], D = a[15], H = a[15], u = a[15], F = a[15]; F < G.length; F++)
                            try {
                                var v = parseInt(G.charAt(F) + b[0]);
                                v || v === a[15] ? v < C ? (D++ ,
                                    w += v) : (u++ ,
                                        H += v) : (u++ ,
                                            H += C)
                            } catch (A) {
                                u++ ,
                                    H += C
                            }
                        u = u == a[15] ? a[541] : u;
                        D = D == a[15] ? a[541] : D;
                        x = ba(H * a[541] / u - w * a[541] / D, T);
                        d.push(ca(r, N, b[41]));
                        d.push(ca(x, T, b[41]))
                    } catch (y) {
                        d = [],
                            d.push(h),
                            d.push(U(N, b[35]).join(b[0])),
                            d.push(U(T, b[35]).join(b[0]))
                    }
                    return d.join(b[0])
                }
                function ba(h, c) {
                    if (h < a[15] || h >= a[43])
                        throw Error(b[30]);
                    for (var d = U(c, b[41]), e = b[0] + h, f = a[15], g = a[15]; f < d.length && g < e.length; g++)
                        e.charAt(g) != b[38] && (d[f++] = e.charAt(g));
                    return parseInt(d.join(b[0]))
                }
                function ca(a, c, d) {
                    a = b[0] + a;
                    if (a.length > c)
                        throw Error(b[87]);
                    if (a.length == c)
                        return a;
                    for (var e = [], f = a.length; f < c; f++)
                        e.push(d);
                    e.push(a);
                    return e.join(b[0])
                }
                function U(b, c) {
                    if (b <= a[15])
                        return [a[15]];
                    for (var d = [], e = a[15]; e < b; e++)
                        d.push(c);
                    return d
                }
                function r(a) {
                    return null == a || void 0 == a
                }
                function m(a, b, c) {
                    this.f = a;
                    this.c = b;
                    this.g = r(c) ? !0 : c
                }
                function Ra(a) {
                    if (r(a) || r(a.f) || r(a.c))
                        return !1;
                    try {
                        if (r(window[a.f]))
                            return !1
                    } catch (b) {
                        return !1
                    }
                    return !0
                }
                function v(c, d) {
                    if (r(c))
                        return b[0];
                    for (var e = a[15]; e < c.length; e++) {
                        var f = c[e];
                        if (!r(f) && f.f == d)
                            return f
                    }
                }
                function da() {
                    var h;
                    a: {
                        if (!r(q))
                            for (h = a[15]; h < q.length; h++) {
                                var d = q[h];
                                if (d.g && !Ra(d)) {
                                    h = d;
                                    break a
                                }
                            }
                        h = null
                    }
                    var e;
                    if (r(h)) {
                        try {
                            e = window.parseFloat(b[180]) === a[384] && window.isNaN(window.parseFloat(b[163]))
                        } catch (f) {
                            e = !1
                        }
                        if (e) {
                            var g;
                            try {
                                g = window.parseInt(b[323]) === a[273] && window.isNaN(window.parseInt(b[163]))
                            } catch (k) {
                                g = !1
                            }
                            if (g) {
                                var m;
                                try {
                                    m = window.decodeURI(b[208]) === b[24]
                                } catch (C) {
                                    m = !1
                                }
                                if (m) {
                                    var x;
                                    try {
                                        x = window.decodeURIComponent(b[209]) === b[28]
                                    } catch (F) {
                                        x = !1
                                    }
                                    if (x) {
                                        var p;
                                        try {
                                            p = window.encodeURI(b[24]) === b[208]
                                        } catch (E) {
                                            p = !1
                                        }
                                        if (p) {
                                            var z;
                                            try {
                                                z = window.encodeURIComponent(b[28]) === b[209]
                                            } catch (I) {
                                                z = !1
                                            }
                                            if (z) {
                                                var n;
                                                try {
                                                    n = window.escape(b[28]) === b[209]
                                                } catch (A) {
                                                    n = !1
                                                }
                                                if (n) {
                                                    var y;
                                                    try {
                                                        y = window.unescape(b[209]) === b[28]
                                                    } catch (G) {
                                                        y = !1
                                                    }
                                                    if (y) {
                                                        var w;
                                                        try {
                                                            w = window.eval(b[304]) === a[273]
                                                        } catch (D) {
                                                            w = !1
                                                        }
                                                        e = w ? null : v(q, b[171])
                                                    } else
                                                        e = v(q, c[172])
                                                } else
                                                    e = v(q, b[342])
                                            } else
                                                e = v(q, c[30])
                                        } else
                                            e = v(q, c[16])
                                    } else
                                        e = v(q, B[2])
                                } else
                                    e = v(q, b[320])
                            } else
                                e = v(q, c[58])
                        } else
                            e = v(q, c[89])
                    } else
                        e = h;
                    return e
                }
                function Sa() {
                    var a = da();
                    if (!r(a))
                        return a.c;
                    try {
                        a = r(window[b[168]]) || r(window[b[168]][b[334]]) ? null : v(q, b[311])
                    } catch (c) {
                        a = null
                    }
                    if (!r(a))
                        return a.c;
                    try {
                        a = r(context) || r(context[b[185]]) ? null : v(q, b[265])
                    } catch (d) {
                        a = null
                    }
                    return r(a) ? null : a.c
                }
                function Ba(c) {
                    for (var d = [], e = a[15]; e < c; e++) {
                        var f = Math.random() * Ta
                            , f = Math.floor(f);
                        d.push(ea.charAt(f))
                    }
                    return d.join(b[0])
                }
                function P(h) {
                    for (var d = (C[b[207]] || b[0]).split(c[91]), e = a[15]; e < d.length; e++) {
                        var f = d[e].indexOf(b[57]);
                        if (f >= a[15]) {
                            var g = d[e].substring(f + a[541], d[e].length);
                            if (d[e].substring(a[15], f) == h)
                                return window.decodeURIComponent(g)
                        }
                    }
                    return null
                }
                function Ca(h) {
                    var d = [b[135], b[182], b[133], b[108], b[159], b[165], c[18]]
                        , e = b[0];
                    if (null == h || void 0 == h)
                        return h;
                    if (typeof h == [b[291], b[220], b[121]].join(b[0])) {
                        for (var e = e + b[142], f = a[15]; f < d.length; f++)
                            if (h.hasOwnProperty(d[f])) {
                                var g = b[29] + d[f] + b[262], k;
                                k = b[0] + h[d[f]];
                                k = null == k || void 0 == k ? k : k.replace(/'/g, c[96]).replace(/"/g, b[24]);
                                e += g + k + b[191]
                            }
                        e.charAt(e.length - a[541]) == b[34] && (e = e.substring(a[15], e.length - a[541]));
                        return e += b[143]
                    }
                    return null
                }
                function oa(a, d, e, f) {
                    var g = [];
                    g.push(a + b[57] + encodeURIComponent(d));
                    e && (a = new Date,
                        a = new Date(f),
                        f = a[b[215]](),
                        g.push(c[91]),
                        g.push(b[172]),
                        g.push(b[305]),
                        g.push(b[325]),
                        g.push(b[319]),
                        g.push(f));
                    g.push(c[91]);
                    g.push(b[302]);
                    g.push(b[216]);
                    null != A && void 0 != A && A != b[0] && (g.push(c[91]),
                        g.push(b[152]),
                        g.push(b[234]),
                        g.push(b[260]),
                        g.push(A));
                    C[b[207]] = g.join(b[0])
                }
                function Da(a) {
                    window[pa] = a
                }
                function Ea(a) {
                    window[qa] = a
                }
                function Fa(c, d) {
                    for (var e = [], f = a[15]; f < d; f++)
                        e.push(c);
                    return e.join(b[0])
                }
                function Ga(a, c) {
                    var d = P(a);
                    null !== d && void 0 !== d && d !== b[0] || oa(a, c, !1)
                }
                function ra() {
                    var a = P(V);
                    if (null == a || void 0 == a || a == b[0])
                        a = window[qa];
                    return a
                }
                function Ua() {
                    var a = ra();
                    if (null == a || void 0 == a || a == b[0])
                        return !1;
                    try {
                        return (a = parseInt(a)) && a >= fa ? !0 : !1
                    } catch (c) {
                        return !1
                    }
                }
                function ga(c) {
                    if (null == c || void 0 == c || c == b[0])
                        return null;
                    c = c.split(b[54]);
                    return c.length < a[16] || !/[0-9]+/gi.test(c[1]) ? null : parseInt(c[1])
                }
                function Q() {
                    var a = P(S);
                    if (null == a || void 0 == a || a == b[0])
                        a = window[pa];
                    return a
                }
                function Va() {
                    var c = Q();
                    if (null == c || void 0 == c || c == b[0])
                        return a[15];
                    c = ga(c);
                    return null == c ? a[15] : c - (sa - ta) - (new window[B[0]])[b[179]]()
                }
                function Ha(d, e) {
                    var f = new window[B[0]];
                    f[b[21]](f[b[179]]() - a[326]);
                    window[b[330]][b[207]] = null == e || void 0 == e || e == b[0] ? d + b[147] + f[b[215]]() : d + c[12] + e + c[131] + f[b[215]]()
                }
                function Ia() {
                    if (!(null == K || void 0 == K || K.length <= a[15]))
                        for (var c = a[15]; c < K.length; c++) {
                            var d = K[c];
                            (null != A && void 0 != A && A != b[0] || null != d && void 0 != d && d != b[0]) && A != d && (Ha(S, d),
                                Ha(V, d))
                        }
                }
                function ua() {
                    Ia();
                    window[qa] = null;
                    window[pa] = null;
                    var h = !0
                        , t = {
                            v: b[227]
                        }
                        , l = Sa();
                    l && (t[c[18]] = l);
                    l = null;
                    t[b[108]] = Wa;
                    var m = (new window[B[0]])[b[179]]() + sa
                        , r = m + a[308] * a[148] * a[148] * a[74] * a[303] * a[26];
                    t[b[133]] = Ba(a[19]) + m + Ba(a[19]);
                    try {
                        var q = (new Pa({
                            b: Xa,
                            a: Ya
                        })).get();
                        null != q && void 0 != q && q.length > a[15] ? t[b[182]] = q.join(b[34]) : (t[b[182]] = Fa(b[41], a[43]),
                            t[b[159]] = b[42],
                            h = !1)
                    } catch (C) {
                        t[b[182]] = Fa(b[41], a[43]),
                            t[b[159]] = b[42],
                            h = !1
                    }
                    try {
                        var v = l = Ca(t)
                            , t = Za;
                        if (null == t || void 0 == t)
                            throw Error(b[120]);
                        if (null == v || void 0 == v)
                            v = b[0];
                        var q = v, y;
                        y = null == v ? e([]) : e(ma(v));
                        var A = ma(q + y)
                            , p = ma(t);
                        null == A && (A = []);
                        y = [];
                        for (var E = a[15]; E < va; E++) {
                            var z = Math.random() * a[301]
                                , z = Math.floor(z);
                            y[E] = x(z)
                        }
                        var p = g(p), p = na(p, g(y)), E = p = g(p), I;
                        if (null == A || void 0 == A || A.length == a[15])
                            I = za(F);
                        else {
                            var n = A.length
                                , J = a[15]
                                , J = n % F <= F - ha ? F - n % F - ha : F * a[16] - n % F - ha
                                , z = [];
                            Z(A, a[15], z, a[15], n);
                            for (var K = a[15]; K < J; K++)
                                z[n + K] = a[15];
                            Z(Aa(n), a[15], z, n + J, ha);
                            I = z
                        }
                        n = I;
                        if (null == n || n.length % F != a[15])
                            throw Error(b[130]);
                        I = [];
                        for (var G = a[15], w = n.length / F, D = a[15]; D < w; D++) {
                            I[D] = [];
                            for (var H = a[15]; H < F; H++)
                                I[D][H] = n[G++]
                        }
                        G = [];
                        Z(y, a[15], G, a[15], va);
                        for (var u = I.length, L = a[15]; L < u; L++) {
                            var O, M;
                            var N = I[L];
                            if (null == N)
                                M = null;
                            else {
                                for (var T = x(a[104]), w = [], U = N.length, P = a[15]; P < U; P++)
                                    w.push(Oa(N[P], T++));
                                M = w
                            }
                            var Q;
                            w = M;
                            if (null == w)
                                Q = null;
                            else {
                                for (var aa = x(a[143]), D = [], ba = w.length, wa = a[15]; wa < ba; wa++)
                                    D.push(Y(w[wa], aa--));
                                Q = D
                            }
                            var ca = d(Q, a[127]);
                            O = d(ca, a[36]);
                            var xa = na(O, p), ia;
                            w = xa;
                            D = E;
                            if (null == w)
                                ia = null;
                            else if (null == D)
                                ia = w;
                            else {
                                for (var H = [], da = D.length, W = a[15], ea = w.length; W < ea; W++)
                                    H[W] = x(w[W] + D[W % da]);
                                ia = H
                            }
                            var xa = na(ia, E)
                                , ja = f(xa)
                                , ja = f(ja);
                            Z(ja, a[15], G, L * F + va, F);
                            E = ja
                        }
                        var ka;
                        if (null == G || void 0 == G)
                            ka = null;
                        else if (G.length == a[15])
                            ka = b[0];
                        else {
                            var ya = a[19];
                            try {
                                for (var u = [], R = a[15]; R < G.length;)
                                    if (R + ya <= G.length)
                                        u.push(k(G, R, ya)),
                                            R += ya;
                                    else {
                                        u.push(k(G, R, G.length - R));
                                        break
                                    }
                                ka = u.join(b[0])
                            } catch (ra) {
                                throw Error(b[111])
                            }
                        }
                        l = ka
                    } catch (ga) {
                        l = Ca({
                            ec: b[43],
                            em: ga.message
                        }),
                            h = !1
                    }
                    l = l + b[54] + m;
                    oa(S, l, h, r);
                    Ga(S, l);
                    Da(l);
                    oa(V, fa, h, r);
                    Ga(V, fa);
                    Ea(fa);
                    window[b[124]] && window[b[124]](ua, ta)
                }
                m.prototype = {
                    toString: function () {
                        return c[93] + this.f + b[164] + this.c + c[117] + this.g + b[143]
                    }
                };
                var q = [new m(c[67], b[13]), new m(b[330], b[14]), new m(c[6], b[11]), new m(c[65], b[12]), new m(c[140], b[10]), new m(b[257], b[9]), new m(b[2], b[19]), new m(b[235], b[22]), new m(c[119], b[6]), new m(c[89], c[164]), new m(c[58], c[162]), new m(b[320], c[163]), new m(B[2], c[159]), new m(c[16], c[161]), new m(c[30], c[156]), new m(b[342], c[158]), new m(c[172], c[165]), new m(b[171], c[168]), new m(b[253], c[128], !1), new m(b[294], c[129], !1), new m(b[168], c[126], !1), new m(b[311], c[127], !1), new m(b[265], c[144], !1)]
                    , Qa = da() ? !1 : !0
                    , Wa = window && window[c[65]] && window[c[65]].host || b[353]
                    , C = window[b[330]]
                    , y = window[c[6]]
                    , N = a[16]
                    , T = a[16]
                    , aa = [b[41], b[42], b[43], b[44], b[45], b[47], b[48], b[50], b[52], b[53], b[97], b[99], b[101], b[103], b[105], b[106]]
                    , La = [a[15], a[377], a[383], a[522], a[449], a[316], a[495], a[343], a[462], a[542], a[310], a[461], a[496], a[464], a[415], a[40], a[455], a[363], a[533], a[402], a[438], a[293], a[366], a[511], a[491], a[493], a[476], a[333], a[539], a[412], a[297], a[427], a[474], a[29], a[369], a[503], a[325], a[353], a[546], a[390], a[420], a[440], a[174], a[442], a[306], a[501], a[469], a[336], a[508], a[331], a[482], a[355], a[358], a[400], a[379], a[528], a[525], a[459], a[423], a[34], a[408], a[520], a[319], a[446], a[471], a[437], a[47], a[417], a[548], a[506], a[463], a[312], a[320], a[256], a[345], a[498], a[380], a[395], a[523], a[385], a[416], a[537], a[429], a[298], a[497], a[487], a[335], a[478], a[300], a[433], a[513], a[367], a[368], a[451], a[404], a[534], a[504], a[295], a[337], a[470], a[443], a[413], a[445], a[190], a[354], a[317], a[391], a[547], a[33], a[466], a[505], a[370], a[521], a[398], a[447], a[321], a[460], a[517], a[37], a[424], a[403], a[350], a[529], a[381], a[334], a[499], a[356], a[483], a[481], a[332], a[452], a[490], a[296], a[431], a[341], a[419], a[536], a[401], a[516], a[362], a[365], a[515], a[479], a[304], a[314], a[458], a[139], a[540], a[414], a[53], a[309], a[473], a[387], a[519], a[388], a[374], a[494], a[348], a[340], a[324], a[426], a[28], a[527], a[456], a[318], a[450], a[389], a[526], a[485], a[352], a[510], a[329], a[378], a[532], a[342], a[409], a[283], a[441], a[421], a[436], a[467], a[339], a[130], a[509], a[372], a[502], a[475], a[22], a[545], a[397], a[307], a[360], a[514], a[364], a[302], a[347], a[399], a[535], a[361], a[328], a[430], a[294], a[418], a[382], a[330], a[480], a[489], a[32], a[346], a[492], a[322], a[359], a[518], a[386], a[373], a[410], a[51], a[411], a[472], a[323], a[457], a[313], a[538], a[305], a[531], a[376], a[406], a[344], a[351], a[484], a[327], a[512], a[448], a[315], a[524], a[392], a[24], a[425], a[454], a[530], a[393], a[544], a[357], a[311], a[500], a[371], a[17], a[477], a[338], a[465], a[507], a[157], a[439], a[232], a[434], a[422]]
                    , Ka = [a[76], a[182], a[199], a[231], a[165], a[156], a[75], a[207], a[166], a[19], a[158], a[223], a[191], a[102], a[35], a[94], a[126], a[127], a[248], a[192], a[56], a[66], a[284], a[274], a[82], a[110], a[257], a[258], a[175], a[275], a[86], a[215], a[224], a[95], a[167], a[168], a[193], a[233], a[64], a[285], a[159], a[70], a[153], a[240], a[208], a[45], a[173], a[241], a[140], a[83], a[65], a[103], a[152], a[135], a[194], a[209], a[144], a[38], a[276], a[46], a[114], a[265], a[68], a[131], a[106], a[242], a[243], a[225], a[136], a[71], a[132], a[145], a[128], a[183], a[60], a[44], a[286], a[118], a[266], a[72], a[90], a[18], a[267], a[200], a[73], a[123], a[169], a[111], a[137], a[115], a[244], a[277], a[98], a[216], a[74], a[26], a[124], a[282], a[27], a[133], a[259], a[281], a[31], a[217], a[249], a[41], a[96], a[78], a[23], a[160], a[176], a[184], a[250], a[201], a[119], a[226], a[62], a[16], a[251], a[59], a[48], a[227], a[148], a[129], a[116], a[290], a[170], a[107], a[99], a[234], a[87], a[134], a[245], a[210], a[84], a[235], a[195], a[260], a[91], a[261], a[92], a[211], a[100], a[80], a[262], a[268], a[112], a[185], a[218], a[79], a[122], a[269], a[104], a[120], a[177], a[20], a[263], a[149], a[61], a[77], a[154], a[36], a[150], a[125], a[89], a[219], a[101], a[252], a[113], a[141], a[121], a[220], a[273], a[186], a[253], a[178], a[202], a[246], a[108], a[187], a[81], a[117], a[49], a[203], a[30], a[264], a[270], a[142], a[271], a[212], a[138], a[52], a[221], a[88], a[109], a[222], a[143], a[236], a[54], a[97], a[272], a[287], a[541], a[228], a[247], a[146], a[63], a[278], a[67], a[254], a[161], a[15], a[543], a[213], a[204], a[214], a[188], a[179], a[196], a[58], a[229], a[288], a[237], a[55], a[279], a[162], a[50], a[155], a[289], a[69], a[197], a[180], a[280], a[151], a[93], a[230], a[181], a[39], a[85], a[238], a[105], a[25], a[255], a[171], a[189], a[42], a[198], a[57], a[163], a[164], a[205], a[239], a[172], a[206], a[147], a[43]]
                    , F = a[158]
                    , L = a[158]
                    , ha = a[23]
                    , va = a[23]
                    , d = function (b, c) {
                        if (null == b)
                            return null;
                        for (var d = x(c), e = [], f = b.length, g = a[15]; g < f; g++)
                            e.push(Y(b[g], d++));
                        return e
                    }
                    , Za = b[345]
                    , S = b[299]
                    , V = c[100]
                    , fa = a[91]
                    , ea = b[275]
                    , Ta = ea.length
                    , sa = a[444]
                    , ta = a[396]
                    , Ya = !1
                    , Xa = !1
                    , O = window && window[c[65]] && window[c[65]][b[310]] || c[95]
                    , A = c[56]
                    , A = function (d, e) {
                        if (null == d || void 0 == d || d == b[0] || null == e || void 0 == e || e.length <= a[15])
                            return null;
                        e = e.split(b[56]);
                        for (var f = a[15]; f < e.length; f++) {
                            var g = new RegExp(e[f].replace(/\./g, c[101]) + b[25]);
                            if (null != d.match(g) || null != (b[38] + d).match(g))
                                return e[f]
                        }
                        return null
                    }(O, A)
                    , pa = S.replace(/[^a-zA-Z0-9$]/g, b[0]).toLowerCase()
                    , qa = V.replace(/[^a-zA-Z0-9$]/g, b[0]).toLowerCase()
                    , K = function (c) {
                        var d = [];
                        if (!c)
                            return d;
                        c = c.split(b[38]);
                        for (var e = b[0], f = a[15]; f < c.length; f++)
                            f < c.length - a[541] && (e = b[38] + c[c.length - a[541] - f] + e,
                                d.push(e));
                        return d
                    }(O);
                K.push(null);
                K.push(b[38] + O);
                (function (d) {
                    for (var e = a[15], f = (C[b[207]] || b[0]).split(c[91]), g = a[15]; g < f.length; g++) {
                        var k = f[g].indexOf(b[57]);
                        k >= a[15] && f[g].substring(a[15], k) == d && (e += a[541])
                    }
                    return e
                })(S) > a[541] && Ia();
                (function () {
                    var a = Q();
                    if (null == a || void 0 == a || a == b[0])
                        a = !1;
                    else {
                        var c;
                        if (c = Ua())
                            a = ga(a),
                                c = !(null == a || a - (new window[B[0]])[b[179]]() <= sa - ta);
                        a = c
                    }
                    return a
                })() ? (Da(Q()),
                    Ea(ra()),
                    O = Va(),
                    window[b[124]] && window[b[124]](ua, O)) : ua()
            })()
        })()
    })()
})();
(function () { })();
(function () {
    var bAy;
    var vr = "VISITOR_CLIENT_NO_COOKIE_SUPPORT";
    var cpL = 0;
    var bAD = 0;
    var bAF = 1;
    var bAG = 0;
    var bhn = "";
    var bAR = "";
    var bAV = "";
    var Wc = "";
    var Wb = "";
    var bhp = "";
    var bBn = 0;
    var bBr = "";
    var Kr = "";
    var EU = 0;
    var bhw = ntes_get_domain();
    var bhD = null;
    var ctX = "//analytics.163.com";
    var cpH = function () { };
    function is_spider() {
        return /baiduspider/gi.test(window.navigator.userAgent)
    }
    function ntes_get_domain() {
        var f = document.domain;
        var d = f.split(".");
        var c = d.length;
        var e = /^\d+$/g;
        if (e.test(d[c - 1])) {
            return f
        }
        if (d.length < 3) {
            return "." + f
        }
        var g = ["com", "net", "org", "gov", "co"];
        var b, a = false;
        for (b = 0; b < g.length; b++) {
            if (d[c - 2] == g[b]) {
                a = true
            }
        }
        if (!a) {
            return "." + d[c - 2] + "." + d[c - 1]
        } else {
            return "." + d[c - 3] + "." + d[c - 2] + "." + d[c - 1]
        }
    }
    function ntes_set_cookie_long(a, c) {
        var b = new Date;
        b.setTime(b.getTime() + 1e3 * 60 * 60 * 24 * 365 * 100);
        document.cookie = a + "=" + c + "; expires=" + b.toGMTString() + "; path=/; domain=" + bhw
    }
    function ntes_set_cookie(a, c) {
        var b = new Date;
        b.setTime(b.getTime() + 0);
        document.cookie = a + "=" + c + "; path=/; domain=" + bhw
    }
    function ntes_set_cookie_new(b, d, a) {
        if (!a || a == "") {
            a = 1e3 * 60 * 60 * 24 * 365 * 1
        }
        var c = new Date;
        c.setTime(c.getTime() + a);
        document.cookie = b + "=" + d + "; expires=" + c.toGMTString() + "; path=/; domain=" + bhw
    }
    function ntes_get_cookie(c) {
        var a = document.cookie;
        var d = c + "=";
        var g = a.length;
        var b = 0;
        while (b < g) {
            var e = b + d.length;
            if (a.substring(b, e) == d) {
                var f = a.indexOf(";", e);
                if (f == -1) {
                    f = g
                }
                return unescape(a.substring(e, f))
            }
            b = a.indexOf(" ", b) + 1;
            if (b == 0) {
                break
            }
        }
        return -1
    }
    function ntes_get_flashver() {
        var f = ""
            , n = navigator;
        if (n.plugins && n.plugins.length) {
            for (var ii = 0; ii < n.plugins.length; ii++) {
                if (n.plugins[ii].name.indexOf("Shockwave Flash") != -1) {
                    f = n.plugins[ii].description.split("Shockwave Flash")[1];
                    break
                }
            }
        } else {
            if (window.ActiveXObject) {
                for (var ii = 10; ii >= 2; ii--) {
                    try {
                        var fl = eval("new ActiveXObject('ShockwaveFlash.ShockwaveFlash." + ii + "');");
                        if (fl) {
                            f = ii + ".0";
                            break
                        }
                    } catch (e) { }
                }
            }
        }
        return f
    }
    var cpG = 0;
    var PT = 8;
    function ntes_hex_md5(a) {
        return binl2hex(ntes_core_md5(str2binl(a), a.length * PT))
    }
    function ntes_core_md5(p, k) {
        p[k >> 5] |= 128 << k % 32;
        p[(k + 64 >>> 9 << 4) + 14] = k;
        var o = 1732584193;
        var n = -271733879;
        var m = -1732584194;
        var l = 271733878;
        for (var g = 0; g < p.length; g += 16) {
            var j = o;
            var h = n;
            var f = m;
            var e = l;
            o = md5_ff(o, n, m, l, p[g + 0], 7, -680876936);
            l = md5_ff(l, o, n, m, p[g + 1], 12, -389564586);
            m = md5_ff(m, l, o, n, p[g + 2], 17, 606105819);
            n = md5_ff(n, m, l, o, p[g + 3], 22, -1044525330);
            o = md5_ff(o, n, m, l, p[g + 4], 7, -176418897);
            l = md5_ff(l, o, n, m, p[g + 5], 12, 1200080426);
            m = md5_ff(m, l, o, n, p[g + 6], 17, -1473231341);
            n = md5_ff(n, m, l, o, p[g + 7], 22, -45705983);
            o = md5_ff(o, n, m, l, p[g + 8], 7, 1770035416);
            l = md5_ff(l, o, n, m, p[g + 9], 12, -1958414417);
            m = md5_ff(m, l, o, n, p[g + 10], 17, -42063);
            n = md5_ff(n, m, l, o, p[g + 11], 22, -1990404162);
            o = md5_ff(o, n, m, l, p[g + 12], 7, 1804603682);
            l = md5_ff(l, o, n, m, p[g + 13], 12, -40341101);
            m = md5_ff(m, l, o, n, p[g + 14], 17, -1502002290);
            n = md5_ff(n, m, l, o, p[g + 15], 22, 1236535329);
            o = md5_gg(o, n, m, l, p[g + 1], 5, -165796510);
            l = md5_gg(l, o, n, m, p[g + 6], 9, -1069501632);
            m = md5_gg(m, l, o, n, p[g + 11], 14, 643717713);
            n = md5_gg(n, m, l, o, p[g + 0], 20, -373897302);
            o = md5_gg(o, n, m, l, p[g + 5], 5, -701558691);
            l = md5_gg(l, o, n, m, p[g + 10], 9, 38016083);
            m = md5_gg(m, l, o, n, p[g + 15], 14, -660478335);
            n = md5_gg(n, m, l, o, p[g + 4], 20, -405537848);
            o = md5_gg(o, n, m, l, p[g + 9], 5, 568446438);
            l = md5_gg(l, o, n, m, p[g + 14], 9, -1019803690);
            m = md5_gg(m, l, o, n, p[g + 3], 14, -187363961);
            n = md5_gg(n, m, l, o, p[g + 8], 20, 1163531501);
            o = md5_gg(o, n, m, l, p[g + 13], 5, -1444681467);
            l = md5_gg(l, o, n, m, p[g + 2], 9, -51403784);
            m = md5_gg(m, l, o, n, p[g + 7], 14, 1735328473);
            n = md5_gg(n, m, l, o, p[g + 12], 20, -1926607734);
            o = md5_hh(o, n, m, l, p[g + 5], 4, -378558);
            l = md5_hh(l, o, n, m, p[g + 8], 11, -2022574463);
            m = md5_hh(m, l, o, n, p[g + 11], 16, 1839030562);
            n = md5_hh(n, m, l, o, p[g + 14], 23, -35309556);
            o = md5_hh(o, n, m, l, p[g + 1], 4, -1530992060);
            l = md5_hh(l, o, n, m, p[g + 4], 11, 1272893353);
            m = md5_hh(m, l, o, n, p[g + 7], 16, -155497632);
            n = md5_hh(n, m, l, o, p[g + 10], 23, -1094730640);
            o = md5_hh(o, n, m, l, p[g + 13], 4, 681279174);
            l = md5_hh(l, o, n, m, p[g + 0], 11, -358537222);
            m = md5_hh(m, l, o, n, p[g + 3], 16, -722521979);
            n = md5_hh(n, m, l, o, p[g + 6], 23, 76029189);
            o = md5_hh(o, n, m, l, p[g + 9], 4, -640364487);
            l = md5_hh(l, o, n, m, p[g + 12], 11, -421815835);
            m = md5_hh(m, l, o, n, p[g + 15], 16, 530742520);
            n = md5_hh(n, m, l, o, p[g + 2], 23, -995338651);
            o = md5_ii(o, n, m, l, p[g + 0], 6, -198630844);
            l = md5_ii(l, o, n, m, p[g + 7], 10, 1126891415);
            m = md5_ii(m, l, o, n, p[g + 14], 15, -1416354905);
            n = md5_ii(n, m, l, o, p[g + 5], 21, -57434055);
            o = md5_ii(o, n, m, l, p[g + 12], 6, 1700485571);
            l = md5_ii(l, o, n, m, p[g + 3], 10, -1894986606);
            m = md5_ii(m, l, o, n, p[g + 10], 15, -1051523);
            n = md5_ii(n, m, l, o, p[g + 1], 21, -2054922799);
            o = md5_ii(o, n, m, l, p[g + 8], 6, 1873313359);
            l = md5_ii(l, o, n, m, p[g + 15], 10, -30611744);
            m = md5_ii(m, l, o, n, p[g + 6], 15, -1560198380);
            n = md5_ii(n, m, l, o, p[g + 13], 21, 1309151649);
            o = md5_ii(o, n, m, l, p[g + 4], 6, -145523070);
            l = md5_ii(l, o, n, m, p[g + 11], 10, -1120210379);
            m = md5_ii(m, l, o, n, p[g + 2], 15, 718787259);
            n = md5_ii(n, m, l, o, p[g + 9], 21, -343485551);
            o = safe_add(o, j);
            n = safe_add(n, h);
            m = safe_add(m, f);
            l = safe_add(l, e)
        }
        return Array(o, n, m, l)
    }
    function md5_cmn(h, e, d, c, g, f) {
        return safe_add(bit_rol(safe_add(safe_add(e, h), safe_add(c, f)), g), d)
    }
    function md5_ff(g, f, k, j, e, i, h) {
        return md5_cmn(f & k | ~f & j, g, f, e, i, h)
    }
    function md5_gg(g, f, k, j, e, i, h) {
        return md5_cmn(f & j | k & ~j, g, f, e, i, h)
    }
    function md5_hh(g, f, k, j, e, i, h) {
        return md5_cmn(f ^ k ^ j, g, f, e, i, h)
    }
    function md5_ii(g, f, k, j, e, i, h) {
        return md5_cmn(k ^ (f | ~j), g, f, e, i, h)
    }
    function safe_add(a, d) {
        var c = (a & 65535) + (d & 65535);
        var b = (a >> 16) + (d >> 16) + (c >> 16);
        return b << 16 | c & 65535
    }
    function bit_rol(a, b) {
        return a << b | a >>> 32 - b
    }
    function str2binl(d) {
        var c = new Array;
        var a = (1 << PT) - 1;
        for (var b = 0; b < d.length * PT; b += PT) {
            c[b >> 5] |= (d.charCodeAt(b / PT) & a) << b % 32
        }
        return c
    }
    function binl2hex(c) {
        var b = cpG ? "0123456789ABCDEF" : "0123456789abcdef";
        var d = "";
        for (var a = 0; a < c.length * 4; a++) {
            d += b.charAt(c[a >> 2] >> a % 4 * 8 + 4 & 15) + b.charAt(c[a >> 2] >> a % 4 * 8 & 15)
        }
        return d
    }
    function str_to_ent(e) {
        var a = "";
        var d;
        for (d = 0; d < e.length; d++) {
            var f = e.charCodeAt(d);
            var b = "";
            if (f > 255) {
                while (f >= 1) {
                    b = "0123456789".charAt(f % 10) + b;
                    f = f / 10
                }
                if (b == "") {
                    b = "0"
                }
                b = "#" + b;
                b = "&" + b;
                b = b + ";";
                a += b
            } else {
                a += e.charAt(d)
            }
        }
        return a
    }
    function ntes_get_navigation_info() {
        Wc = "-";
        bhp = "-";
        Wb = "-";
        var c = window.self
            , b = window.screen
            , a = window.navigator;
        if (c.screen) {
            Wc = b.width + "x" + b.height;
            bhp = b.colorDepth + "-bit"
        } else {
            if (c.java) {
                var e = java.awt.Toolkit.getDefaultToolkit();
                var f = e.getScreenSize();
                Wc = f.width + "x" + f.height
            }
        }
        if (a.language) {
            Wb = a.language.toLowerCase()
        } else {
            if (a.browserLanguage) {
                Wb = a.browserLanguage.toLowerCase()
            }
        }
        var g = new Date(document.lastModified);
        bBn = g.getTime() / 1e3
    }
    function fetch_visitor_hash() {
        var c = new Date;
        var b = document.body.clientWidth + ":" + document.body.clientHeight;
        var a = str_to_ent(c.getTime() + Math.random() + document.location + document.referrer + screen.width + screen.height + navigator.userAgent + document.cookie + b);
        return ntes_hex_md5(a)
    }
    function ctY(c, b, f) {
        var e = c + "_" + +(new Date) + parseInt(Math.random() * 100), a, d = f || cpH;
        a = window[e] = new Image;
        a.onload = function () {
            window[e] = null;
            d()
        }
            ;
        a.onerror = function () {
            window[e] = null;
            d()
        }
            ;
        a.src = b;
        a = null
    }
    function neteaseTracker(l, a, m, k) {
        if (is_spider()) {
            return
        }
        var e = k || bAy;
        bhn = escape(a || document.location);
        bAR = escape(m || document.title);
        bAV = l === true ? "" : escape(l || document.referrer);
        bBr = ntes_get_flashver();
        var b = (new Date).getTime();
        if (bhD == null) {
            document.cookie = "__ntes__test__cookies=" + b;
            bhD = ntes_get_cookie("__ntes__test__cookies") == b ? true : false;
            document.cookie = "__ntes__test__cookies=" + b + "; expires=" + (new Date("1970/01/01")).toUTCString()
        }
        if (e == "undefined" || !e) {
            return
        }
        if (bhn.indexOf("http") != 0) {
            return
        }
        var h = ntes_get_cookie("_ntes_nnid");
        if (h == -1) {
            if (bhD) {
                vr = fetch_visitor_hash();
                bAD = 1;
                ntes_set_cookie_long("_ntes_nnid", vr + "," + (new Date).getTime());
                ntes_set_cookie_long("_ntes_nuid", vr)
            }
        } else {
            var o = h.indexOf(",");
            var p = h.indexOf("|");
            var f = false;
            if (p == -1) {
                p = h.length
            }
            vr = h.substr(0, o);
            EU = h.substr(o + 1, p - o - 1);
            if (EU == 0) {
                EU = (new Date).getTime();
                f = true
            }
            if (!vr) {
                vr = fetch_visitor_hash();
                f = true
            }
            if (f) {
                ntes_set_cookie_long("_ntes_nnid", vr + "," + EU);
                ntes_set_cookie_long("_ntes_nuid", vr)
            }
            if (EU != 0 && b - EU > 365 * 86400 * 1e3) {
                EU = 0;
                ntes_set_cookie_long("_ntes_nnid", vr + "," + (new Date).getTime());
                ntes_set_cookie_long("_ntes_nuid", vr)
            }
        }
        function c(q, i) {
            var s = ntes_get_cookie(q)
                , r = ntes_get_cookie(i);
            return s == -1 ? r == -1 ? "" : r : s
        }
        Kr = c("P_INFO", "P_OINFO");
        Kr = Kr ? Kr.substr(0, Kr.indexOf("|")) : "";
        bAG = c("S_INFO", "S_OINFO") ? 1 : 0;
        ntes_get_navigation_info();
        var n = ["_nacc=", e, "&_nvid=", vr, "&_nvtm=", cpL, "&_nvsf=", bAF, "&_nvfi=", bAD, "&_nlag=", Wb, "&_nlmf=", bBn, "&_nres=", Wc, "&_nscd=", bhp, "&_nstm=", bAG, "&_nurl=", bhn, "&_ntit=", bAR, "&_nref=", bAV, "&_nfla=", bBr, "&_nssn=", Kr, "&_nxkey=", (b + "" + Math.random()).substring(6, 20), "&_end1"].join("");
        bAF = 0;
        neteaseTracker.callback = null
    }
    bAy = "iad";
    neteaseTracker()
})();
(function () { })();
var CryptoJS = CryptoJS || function (u, p) {
    var d = {}
        , l = d.lib = {}
        , s = function () { }
        , t = l.Base = {
            extend: function (a) {
                s.prototype = this;
                var c = new s;
                a && c.mixIn(a);
                c.hasOwnProperty("init") || (c.init = function () {
                    c.$super.init.apply(this, arguments)
                }
                );
                c.init.prototype = c;
                c.$super = this;
                return c
            },
            create: function () {
                var a = this.extend();
                a.init.apply(a, arguments);
                return a
            },
            init: function () { },
            mixIn: function (a) {
                for (var c in a)
                    a.hasOwnProperty(c) && (this[c] = a[c]);
                a.hasOwnProperty("toString") && (this.toString = a.toString)
            },
            clone: function () {
                return this.init.prototype.extend(this)
            }
        }
        , r = l.WordArray = t.extend({
            init: function (a, c) {
                a = this.words = a || [];
                this.sigBytes = c != p ? c : 4 * a.length
            },
            toString: function (a) {
                return (a || v).stringify(this)
            },
            concat: function (a) {
                var c = this.words
                    , e = a.words
                    , j = this.sigBytes;
                a = a.sigBytes;
                this.clamp();
                if (j % 4)
                    for (var k = 0; k < a; k++)
                        c[j + k >>> 2] |= (e[k >>> 2] >>> 24 - 8 * (k % 4) & 255) << 24 - 8 * ((j + k) % 4);
                else if (65535 < e.length)
                    for (k = 0; k < a; k += 4)
                        c[j + k >>> 2] = e[k >>> 2];
                else
                    c.push.apply(c, e);
                this.sigBytes += a;
                return this
            },
            clamp: function () {
                var a = this.words
                    , c = this.sigBytes;
                a[c >>> 2] &= 4294967295 << 32 - 8 * (c % 4);
                a.length = u.ceil(c / 4)
            },
            clone: function () {
                var a = t.clone.call(this);
                a.words = this.words.slice(0);
                return a
            },
            random: function (a) {
                for (var c = [], e = 0; e < a; e += 4)
                    c.push(4294967296 * u.random() | 0);
                return new r.init(c, a)
            }
        })
        , w = d.enc = {}
        , v = w.Hex = {
            stringify: function (a) {
                var c = a.words;
                a = a.sigBytes;
                for (var e = [], j = 0; j < a; j++) {
                    var k = c[j >>> 2] >>> 24 - 8 * (j % 4) & 255;
                    e.push((k >>> 4).toString(16));
                    e.push((k & 15).toString(16))
                }
                return e.join("")
            },
            parse: function (a) {
                for (var c = a.length, e = [], j = 0; j < c; j += 2)
                    e[j >>> 3] |= parseInt(a.substr(j, 2), 16) << 24 - 4 * (j % 8);
                return new r.init(e, c / 2)
            }
        }
        , b = w.Latin1 = {
            stringify: function (a) {
                var c = a.words;
                a = a.sigBytes;
                for (var e = [], j = 0; j < a; j++)
                    e.push(String.fromCharCode(c[j >>> 2] >>> 24 - 8 * (j % 4) & 255));
                return e.join("")
            },
            parse: function (a) {
                for (var c = a.length, e = [], j = 0; j < c; j++)
                    e[j >>> 2] |= (a.charCodeAt(j) & 255) << 24 - 8 * (j % 4);
                return new r.init(e, c)
            }
        }
        , x = w.Utf8 = {
            stringify: function (a) {
                try {
                    return decodeURIComponent(escape(b.stringify(a)))
                } catch (c) {
                    throw Error("Malformed UTF-8 data")
                }
            },
            parse: function (a) {
                return b.parse(unescape(encodeURIComponent(a)))
            }
        }
        , q = l.BufferedBlockAlgorithm = t.extend({
            reset: function () {
                this.bl = new r.init;
                this.bCA = 0
            },
            VH: function (a) {
                "string" == typeof a && (a = x.parse(a));
                this.bl.concat(a);
                this.bCA += a.sigBytes
            },
            Kp: function (a) {
                var c = this.bl
                    , e = c.words
                    , j = c.sigBytes
                    , k = this.blockSize
                    , b = j / (4 * k)
                    , b = a ? u.ceil(b) : u.max((b | 0) - this.bCx, 0);
                a = b * k;
                j = u.min(4 * a, j);
                if (a) {
                    for (var q = 0; q < a; q += k)
                        this.bCC(e, q);
                    q = e.splice(0, a);
                    c.sigBytes -= j
                }
                return new r.init(q, j)
            },
            clone: function () {
                var a = t.clone.call(this);
                a.bl = this.bl.clone();
                return a
            },
            bCx: 0
        });
    l.Hasher = q.extend({
        cfg: t.extend(),
        init: function (a) {
            this.cfg = this.cfg.extend(a);
            this.reset()
        },
        reset: function () {
            q.reset.call(this);
            this.bhL()
        },
        update: function (a) {
            this.VH(a);
            this.Kp();
            return this
        },
        finalize: function (a) {
            a && this.VH(a);
            return this.VA()
        },
        blockSize: 16,
        bhG: function (a) {
            return function (b, e) {
                return (new a.init(e)).finalize(b)
            }
        },
        cpD: function (a) {
            return function (b, e) {
                return (new n.HMAC.init(a, e)).finalize(b)
            }
        }
    });
    var n = d.algo = {};
    return d
}(Math);
(function () {
    var u = CryptoJS
        , p = u.lib.WordArray;
    u.enc.Base64 = {
        stringify: function (d) {
            var l = d.words
                , p = d.sigBytes
                , t = this.cI;
            d.clamp();
            d = [];
            for (var r = 0; r < p; r += 3)
                for (var w = (l[r >>> 2] >>> 24 - 8 * (r % 4) & 255) << 16 | (l[r + 1 >>> 2] >>> 24 - 8 * ((r + 1) % 4) & 255) << 8 | l[r + 2 >>> 2] >>> 24 - 8 * ((r + 2) % 4) & 255, v = 0; 4 > v && r + .75 * v < p; v++)
                    d.push(t.charAt(w >>> 6 * (3 - v) & 63));
            if (l = t.charAt(64))
                for (; d.length % 4;)
                    d.push(l);
            return d.join("")
        },
        parse: function (d) {
            var l = d.length
                , s = this.cI
                , t = s.charAt(64);
            t && (t = d.indexOf(t),
                -1 != t && (l = t));
            for (var t = [], r = 0, w = 0; w < l; w++)
                if (w % 4) {
                    var v = s.indexOf(d.charAt(w - 1)) << 2 * (w % 4)
                        , b = s.indexOf(d.charAt(w)) >>> 6 - 2 * (w % 4);
                    t[r >>> 2] |= (v | b) << 24 - 8 * (r % 4);
                    r++
                }
            return p.create(t, r)
        },
        cI: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
    }
})();
(function (u) {
    function p(b, n, a, c, e, j, k) {
        b = b + (n & a | ~n & c) + e + k;
        return (b << j | b >>> 32 - j) + n
    }
    function d(b, n, a, c, e, j, k) {
        b = b + (n & c | a & ~c) + e + k;
        return (b << j | b >>> 32 - j) + n
    }
    function l(b, n, a, c, e, j, k) {
        b = b + (n ^ a ^ c) + e + k;
        return (b << j | b >>> 32 - j) + n
    }
    function s(b, n, a, c, e, j, k) {
        b = b + (a ^ (n | ~c)) + e + k;
        return (b << j | b >>> 32 - j) + n
    }
    for (var t = CryptoJS, r = t.lib, w = r.WordArray, v = r.Hasher, r = t.algo, b = [], x = 0; 64 > x; x++)
        b[x] = 4294967296 * u.abs(u.sin(x + 1)) | 0;
    r = r.MD5 = v.extend({
        bhL: function () {
            this.fi = new w.init([1732584193, 4023233417, 2562383102, 271733878])
        },
        bCC: function (q, n) {
            for (var a = 0; 16 > a; a++) {
                var c = n + a
                    , e = q[c];
                q[c] = (e << 8 | e >>> 24) & 16711935 | (e << 24 | e >>> 8) & 4278255360
            }
            var a = this.fi.words
                , c = q[n + 0]
                , e = q[n + 1]
                , j = q[n + 2]
                , k = q[n + 3]
                , z = q[n + 4]
                , r = q[n + 5]
                , t = q[n + 6]
                , w = q[n + 7]
                , v = q[n + 8]
                , A = q[n + 9]
                , B = q[n + 10]
                , C = q[n + 11]
                , u = q[n + 12]
                , D = q[n + 13]
                , E = q[n + 14]
                , x = q[n + 15]
                , f = a[0]
                , m = a[1]
                , g = a[2]
                , h = a[3]
                , f = p(f, m, g, h, c, 7, b[0])
                , h = p(h, f, m, g, e, 12, b[1])
                , g = p(g, h, f, m, j, 17, b[2])
                , m = p(m, g, h, f, k, 22, b[3])
                , f = p(f, m, g, h, z, 7, b[4])
                , h = p(h, f, m, g, r, 12, b[5])
                , g = p(g, h, f, m, t, 17, b[6])
                , m = p(m, g, h, f, w, 22, b[7])
                , f = p(f, m, g, h, v, 7, b[8])
                , h = p(h, f, m, g, A, 12, b[9])
                , g = p(g, h, f, m, B, 17, b[10])
                , m = p(m, g, h, f, C, 22, b[11])
                , f = p(f, m, g, h, u, 7, b[12])
                , h = p(h, f, m, g, D, 12, b[13])
                , g = p(g, h, f, m, E, 17, b[14])
                , m = p(m, g, h, f, x, 22, b[15])
                , f = d(f, m, g, h, e, 5, b[16])
                , h = d(h, f, m, g, t, 9, b[17])
                , g = d(g, h, f, m, C, 14, b[18])
                , m = d(m, g, h, f, c, 20, b[19])
                , f = d(f, m, g, h, r, 5, b[20])
                , h = d(h, f, m, g, B, 9, b[21])
                , g = d(g, h, f, m, x, 14, b[22])
                , m = d(m, g, h, f, z, 20, b[23])
                , f = d(f, m, g, h, A, 5, b[24])
                , h = d(h, f, m, g, E, 9, b[25])
                , g = d(g, h, f, m, k, 14, b[26])
                , m = d(m, g, h, f, v, 20, b[27])
                , f = d(f, m, g, h, D, 5, b[28])
                , h = d(h, f, m, g, j, 9, b[29])
                , g = d(g, h, f, m, w, 14, b[30])
                , m = d(m, g, h, f, u, 20, b[31])
                , f = l(f, m, g, h, r, 4, b[32])
                , h = l(h, f, m, g, v, 11, b[33])
                , g = l(g, h, f, m, C, 16, b[34])
                , m = l(m, g, h, f, E, 23, b[35])
                , f = l(f, m, g, h, e, 4, b[36])
                , h = l(h, f, m, g, z, 11, b[37])
                , g = l(g, h, f, m, w, 16, b[38])
                , m = l(m, g, h, f, B, 23, b[39])
                , f = l(f, m, g, h, D, 4, b[40])
                , h = l(h, f, m, g, c, 11, b[41])
                , g = l(g, h, f, m, k, 16, b[42])
                , m = l(m, g, h, f, t, 23, b[43])
                , f = l(f, m, g, h, A, 4, b[44])
                , h = l(h, f, m, g, u, 11, b[45])
                , g = l(g, h, f, m, x, 16, b[46])
                , m = l(m, g, h, f, j, 23, b[47])
                , f = s(f, m, g, h, c, 6, b[48])
                , h = s(h, f, m, g, w, 10, b[49])
                , g = s(g, h, f, m, E, 15, b[50])
                , m = s(m, g, h, f, r, 21, b[51])
                , f = s(f, m, g, h, u, 6, b[52])
                , h = s(h, f, m, g, k, 10, b[53])
                , g = s(g, h, f, m, B, 15, b[54])
                , m = s(m, g, h, f, e, 21, b[55])
                , f = s(f, m, g, h, v, 6, b[56])
                , h = s(h, f, m, g, x, 10, b[57])
                , g = s(g, h, f, m, t, 15, b[58])
                , m = s(m, g, h, f, D, 21, b[59])
                , f = s(f, m, g, h, z, 6, b[60])
                , h = s(h, f, m, g, C, 10, b[61])
                , g = s(g, h, f, m, j, 15, b[62])
                , m = s(m, g, h, f, A, 21, b[63]);
            a[0] = a[0] + f | 0;
            a[1] = a[1] + m | 0;
            a[2] = a[2] + g | 0;
            a[3] = a[3] + h | 0
        },
        VA: function () {
            var b = this.bl
                , n = b.words
                , a = 8 * this.bCA
                , c = 8 * b.sigBytes;
            n[c >>> 5] |= 128 << 24 - c % 32;
            var e = u.floor(a / 4294967296);
            n[(c + 64 >>> 9 << 4) + 15] = (e << 8 | e >>> 24) & 16711935 | (e << 24 | e >>> 8) & 4278255360;
            n[(c + 64 >>> 9 << 4) + 14] = (a << 8 | a >>> 24) & 16711935 | (a << 24 | a >>> 8) & 4278255360;
            b.sigBytes = 4 * (n.length + 1);
            this.Kp();
            b = this.fi;
            n = b.words;
            for (a = 0; 4 > a; a++)
                c = n[a],
                    n[a] = (c << 8 | c >>> 24) & 16711935 | (c << 24 | c >>> 8) & 4278255360;
            return b
        },
        clone: function () {
            var b = v.clone.call(this);
            b.fi = this.fi.clone();
            return b
        }
    });
    t.MD5 = v.bhG(r);
    t.HmacMD5 = v.cpD(r)
})(Math);
(function () {
    var u = CryptoJS
        , p = u.lib
        , d = p.Base
        , l = p.WordArray
        , p = u.algo
        , s = p.EvpKDF = d.extend({
            cfg: d.extend({
                keySize: 4,
                hasher: p.MD5,
                iterations: 1
            }),
            init: function (d) {
                this.cfg = this.cfg.extend(d)
            },
            compute: function (d, r) {
                for (var p = this.cfg, s = p.hasher.create(), b = l.create(), u = b.words, q = p.keySize, p = p.iterations; u.length < q;) {
                    n && s.update(n);
                    var n = s.update(d).finalize(r);
                    s.reset();
                    for (var a = 1; a < p; a++)
                        n = s.finalize(n),
                            s.reset();
                    b.concat(n)
                }
                b.sigBytes = 4 * q;
                return b
            }
        });
    u.EvpKDF = function (d, l, p) {
        return s.create(p).compute(d, l)
    }
})();
CryptoJS.lib.Cipher || function (u) {
    var p = CryptoJS
        , d = p.lib
        , l = d.Base
        , s = d.WordArray
        , t = d.BufferedBlockAlgorithm
        , r = p.enc.Base64
        , w = p.algo.EvpKDF
        , v = d.Cipher = t.extend({
            cfg: l.extend(),
            createEncryptor: function (e, a) {
                return this.create(this.bhW, e, a)
            },
            createDecryptor: function (e, a) {
                return this.create(this.cpC, e, a)
            },
            init: function (e, a, b) {
                this.cfg = this.cfg.extend(b);
                this.bDa = e;
                this.bP = a;
                this.reset()
            },
            reset: function () {
                t.reset.call(this);
                this.bhL()
            },
            process: function (e) {
                this.VH(e);
                return this.Kp()
            },
            finalize: function (e) {
                e && this.VH(e);
                return this.VA()
            },
            keySize: 4,
            ivSize: 4,
            bhW: 1,
            cpC: 2,
            bhG: function (e) {
                return {
                    encrypt: function (b, k, d) {
                        return ("string" == typeof k ? c : a).encrypt(e, b, k, d)
                    },
                    decrypt: function (b, k, d) {
                        return ("string" == typeof k ? c : a).decrypt(e, b, k, d)
                    }
                }
            }
        });
    d.StreamCipher = v.extend({
        VA: function () {
            return this.Kp(!0)
        },
        blockSize: 1
    });
    var b = p.mode = {}
        , x = function (e, a, b) {
            var c = this.bDd;
            c ? this.bDd = u : c = this.bDe;
            for (var d = 0; d < b; d++)
                e[a + d] ^= c[d]
        }
        , q = (d.BlockCipherMode = l.extend({
            createEncryptor: function (e, a) {
                return this.Encryptor.create(e, a)
            },
            createDecryptor: function (e, a) {
                return this.Decryptor.create(e, a)
            },
            init: function (e, a) {
                this.bDg = e;
                this.bDd = a
            }
        })).extend();
    q.Encryptor = q.extend({
        processBlock: function (e, a) {
            var b = this.bDg
                , c = b.blockSize;
            x.call(this, e, a, c);
            b.encryptBlock(e, a);
            this.bDe = e.slice(a, a + c)
        }
    });
    q.Decryptor = q.extend({
        processBlock: function (e, a) {
            var b = this.bDg
                , c = b.blockSize
                , d = e.slice(a, a + c);
            b.decryptBlock(e, a);
            x.call(this, e, a, c);
            this.bDe = d
        }
    });
    b = b.CBC = q;
    q = (p.pad = {}).Pkcs7 = {
        pad: function (a, b) {
            for (var c = 4 * b, c = c - a.sigBytes % c, d = c << 24 | c << 16 | c << 8 | c, l = [], n = 0; n < c; n += 4)
                l.push(d);
            c = s.create(l, c);
            a.concat(c)
        },
        unpad: function (a) {
            a.sigBytes -= a.words[a.sigBytes - 1 >>> 2] & 255
        }
    };
    d.BlockCipher = v.extend({
        cfg: v.cfg.extend({
            mode: b,
            padding: q
        }),
        reset: function () {
            v.reset.call(this);
            var a = this.cfg
                , b = a.iv
                , a = a.mode;
            if (this.bDa == this.bhW)
                var c = a.createEncryptor;
            else
                c = a.createDecryptor,
                    this.bCx = 1;
            this.gf = c.call(a, this, b && b.words)
        },
        bCC: function (a, b) {
            this.gf.processBlock(a, b)
        },
        VA: function () {
            var a = this.cfg.padding;
            if (this.bDa == this.bhW) {
                a.pad(this.bl, this.blockSize);
                var b = this.Kp(!0)
            } else
                b = this.Kp(!0),
                    a.unpad(b);
            return b
        },
        blockSize: 4
    });
    var n = d.CipherParams = l.extend({
        init: function (a) {
            this.mixIn(a)
        },
        toString: function (a) {
            return (a || this.formatter).stringify(this)
        }
    })
        , b = (p.format = {}).OpenSSL = {
            stringify: function (a) {
                var b = a.ciphertext;
                a = a.salt;
                return (a ? s.create([1398893684, 1701076831]).concat(a).concat(b) : b).toString(r)
            },
            parse: function (a) {
                a = r.parse(a);
                var b = a.words;
                if (1398893684 == b[0] && 1701076831 == b[1]) {
                    var c = s.create(b.slice(2, 4));
                    b.splice(0, 4);
                    a.sigBytes -= 16
                }
                return n.create({
                    ciphertext: a,
                    salt: c
                })
            }
        }
        , a = d.SerializableCipher = l.extend({
            cfg: l.extend({
                format: b
            }),
            encrypt: function (a, b, c, d) {
                d = this.cfg.extend(d);
                var l = a.createEncryptor(c, d);
                b = l.finalize(b);
                l = l.cfg;
                return n.create({
                    ciphertext: b,
                    key: c,
                    iv: l.iv,
                    algorithm: a,
                    mode: l.mode,
                    padding: l.padding,
                    blockSize: a.blockSize,
                    formatter: d.format
                })
            },
            decrypt: function (a, b, c, d) {
                d = this.cfg.extend(d);
                b = this.YQ(b, d.format);
                return a.createDecryptor(c, d).finalize(b.ciphertext)
            },
            YQ: function (a, b) {
                return "string" == typeof a ? b.parse(a, this) : a
            }
        })
        , p = (p.kdf = {}).OpenSSL = {
            execute: function (a, b, c, d) {
                d || (d = s.random(8));
                a = w.create({
                    keySize: b + c
                }).compute(a, d);
                c = s.create(a.words.slice(b), 4 * c);
                a.sigBytes = 4 * b;
                return n.create({
                    key: a,
                    iv: c,
                    salt: d
                })
            }
        }
        , c = d.PasswordBasedCipher = a.extend({
            cfg: a.cfg.extend({
                kdf: p
            }),
            encrypt: function (b, c, d, l) {
                l = this.cfg.extend(l);
                d = l.kdf.execute(d, b.keySize, b.ivSize);
                l.iv = d.iv;
                b = a.encrypt.call(this, b, c, d.key, l);
                b.mixIn(d);
                return b
            },
            decrypt: function (b, c, d, l) {
                l = this.cfg.extend(l);
                c = this.YQ(c, l.format);
                d = l.kdf.execute(d, b.keySize, b.ivSize, c.salt);
                l.iv = d.iv;
                return a.decrypt.call(this, b, c, d.key, l)
            }
        })
}();
(function () {
    for (var u = CryptoJS, p = u.lib.BlockCipher, d = u.algo, l = [], s = [], t = [], r = [], w = [], v = [], b = [], x = [], q = [], n = [], a = [], c = 0; 256 > c; c++)
        a[c] = 128 > c ? c << 1 : c << 1 ^ 283;
    for (var e = 0, j = 0, c = 0; 256 > c; c++) {
        var k = j ^ j << 1 ^ j << 2 ^ j << 3 ^ j << 4
            , k = k >>> 8 ^ k & 255 ^ 99;
        l[e] = k;
        s[k] = e;
        var z = a[e]
            , F = a[z]
            , G = a[F]
            , y = 257 * a[k] ^ 16843008 * k;
        t[e] = y << 24 | y >>> 8;
        r[e] = y << 16 | y >>> 16;
        w[e] = y << 8 | y >>> 24;
        v[e] = y;
        y = 16843009 * G ^ 65537 * F ^ 257 * z ^ 16843008 * e;
        b[k] = y << 24 | y >>> 8;
        x[k] = y << 16 | y >>> 16;
        q[k] = y << 8 | y >>> 24;
        n[k] = y;
        e ? (e = z ^ a[a[a[G ^ z]]],
            j ^= a[a[j]]) : e = j = 1
    }
    var H = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54]
        , d = d.AES = p.extend({
            bhL: function () {
                for (var a = this.bP, c = a.words, d = a.sigBytes / 4, a = 4 * ((this.cpA = d + 6) + 1), e = this.cps = [], j = 0; j < a; j++)
                    if (j < d)
                        e[j] = c[j];
                    else {
                        var k = e[j - 1];
                        j % d ? 6 < d && 4 == j % d && (k = l[k >>> 24] << 24 | l[k >>> 16 & 255] << 16 | l[k >>> 8 & 255] << 8 | l[k & 255]) : (k = k << 8 | k >>> 24,
                            k = l[k >>> 24] << 24 | l[k >>> 16 & 255] << 16 | l[k >>> 8 & 255] << 8 | l[k & 255],
                            k ^= H[j / d | 0] << 24);
                        e[j] = e[j - d] ^ k
                    }
                c = this.cpr = [];
                for (d = 0; d < a; d++)
                    j = a - d,
                        k = d % 4 ? e[j] : e[j - 4],
                        c[d] = 4 > d || 4 >= j ? k : b[l[k >>> 24]] ^ x[l[k >>> 16 & 255]] ^ q[l[k >>> 8 & 255]] ^ n[l[k & 255]]
            },
            encryptBlock: function (a, b) {
                this.bDi(a, b, this.cps, t, r, w, v, l)
            },
            decryptBlock: function (a, c) {
                var d = a[c + 1];
                a[c + 1] = a[c + 3];
                a[c + 3] = d;
                this.bDi(a, c, this.cpr, b, x, q, n, s);
                d = a[c + 1];
                a[c + 1] = a[c + 3];
                a[c + 3] = d
            },
            bDi: function (a, b, c, d, e, j, l, f) {
                for (var m = this.cpA, g = a[b] ^ c[0], h = a[b + 1] ^ c[1], k = a[b + 2] ^ c[2], n = a[b + 3] ^ c[3], p = 4, r = 1; r < m; r++)
                    var q = d[g >>> 24] ^ e[h >>> 16 & 255] ^ j[k >>> 8 & 255] ^ l[n & 255] ^ c[p++]
                        , s = d[h >>> 24] ^ e[k >>> 16 & 255] ^ j[n >>> 8 & 255] ^ l[g & 255] ^ c[p++]
                        , t = d[k >>> 24] ^ e[n >>> 16 & 255] ^ j[g >>> 8 & 255] ^ l[h & 255] ^ c[p++]
                        , n = d[n >>> 24] ^ e[g >>> 16 & 255] ^ j[h >>> 8 & 255] ^ l[k & 255] ^ c[p++]
                        , g = q
                        , h = s
                        , k = t;
                q = (f[g >>> 24] << 24 | f[h >>> 16 & 255] << 16 | f[k >>> 8 & 255] << 8 | f[n & 255]) ^ c[p++];
                s = (f[h >>> 24] << 24 | f[k >>> 16 & 255] << 16 | f[n >>> 8 & 255] << 8 | f[g & 255]) ^ c[p++];
                t = (f[k >>> 24] << 24 | f[n >>> 16 & 255] << 16 | f[g >>> 8 & 255] << 8 | f[h & 255]) ^ c[p++];
                n = (f[n >>> 24] << 24 | f[g >>> 16 & 255] << 16 | f[h >>> 8 & 255] << 8 | f[k & 255]) ^ c[p++];
                a[b] = q;
                a[b + 1] = s;
                a[b + 2] = t;
                a[b + 3] = n
            },
            keySize: 8
        });
    u.AES = p.bhG(d)
})();
function RSAKeyPair(a, b, c) {
    this.e = biFromHex(a),
        this.d = biFromHex(b),
        this.m = biFromHex(c),
        this.chunkSize = 2 * biHighIndex(this.m),
        this.radix = 16,
        this.barrett = new BarrettMu(this.m)
}
function twoDigit(a) {
    return (10 > a ? "0" : "") + String(a)
}
function encryptedString(a, b) {
    for (var f, g, h, i, j, k, l, c = new Array, d = b.length, e = 0; d > e;)
        c[e] = b.charCodeAt(e),
            e++;
    for (; 0 != c.length % a.chunkSize;)
        c[e++] = 0;
    for (f = c.length,
        g = "",
        e = 0; f > e; e += a.chunkSize) {
        for (j = new BigInt,
            h = 0,
            i = e; i < e + a.chunkSize; ++h)
            j.digits[h] = c[i++],
                j.digits[h] += c[i++] << 8;
        k = a.barrett.powMod(j, a.e),
            l = 16 == a.radix ? biToHex(k) : biToString(k, a.radix),
            g += l + " "
    }
    return g.substring(0, g.length - 1)
}
function decryptedString(a, b) {
    var e, f, g, h, c = b.split(" "), d = "";
    for (e = 0; e < c.length; ++e)
        for (h = 16 == a.radix ? biFromHex(c[e]) : biFromString(c[e], a.radix),
            g = a.barrett.powMod(h, a.d),
            f = 0; f <= biHighIndex(g); ++f)
            d += String.fromCharCode(255 & g.digits[f], g.digits[f] >> 8);
    return 0 == d.charCodeAt(d.length - 1) && (d = d.substring(0, d.length - 1)),
        d
}
function setMaxDigits(a) {
    maxDigits = a,
        ZERO_ARRAY = new Array(maxDigits);
    for (var b = 0; b < ZERO_ARRAY.length; b++)
        ZERO_ARRAY[b] = 0;
    bigZero = new BigInt,
        bigOne = new BigInt,
        bigOne.digits[0] = 1
}
function BigInt(a) {
    this.digits = "boolean" == typeof a && 1 == a ? null : ZERO_ARRAY.slice(0),
        this.isNeg = !1
}
function biFromDecimal(a) {
    for (var d, e, f, b = "-" == a.charAt(0), c = b ? 1 : 0; c < a.length && "0" == a.charAt(c);)
        ++c;
    if (c == a.length)
        d = new BigInt;
    else {
        for (e = a.length - c,
            f = e % dpl10,
            0 == f && (f = dpl10),
            d = biFromNumber(Number(a.substr(c, f))),
            c += f; c < a.length;)
            d = biAdd(biMultiply(d, lr10), biFromNumber(Number(a.substr(c, dpl10)))),
                c += dpl10;
        d.isNeg = b
    }
    return d
}
function biCopy(a) {
    var b = new BigInt(!0);
    return b.digits = a.digits.slice(0),
        b.isNeg = a.isNeg,
        b
}
function biFromNumber(a) {
    var c, b = new BigInt;
    for (b.isNeg = 0 > a,
        a = Math.abs(a),
        c = 0; a > 0;)
        b.digits[c++] = a & maxDigitVal,
            a >>= biRadixBits;
    return b
}
function reverseStr(a) {
    var c, b = "";
    for (c = a.length - 1; c > -1; --c)
        b += a.charAt(c);
    return b
}
function biToString(a, b) {
    var d, e, c = new BigInt;
    for (c.digits[0] = b,
        d = biDivideModulo(a, c),
        e = hexatrigesimalToChar[d[1].digits[0]]; 1 == biCompare(d[0], bigZero);)
        d = biDivideModulo(d[0], c),
            digit = d[1].digits[0],
            e += hexatrigesimalToChar[d[1].digits[0]];
    return (a.isNeg ? "-" : "") + reverseStr(e)
}
function biToDecimal(a) {
    var c, d, b = new BigInt;
    for (b.digits[0] = 10,
        c = biDivideModulo(a, b),
        d = String(c[1].digits[0]); 1 == biCompare(c[0], bigZero);)
        c = biDivideModulo(c[0], b),
            d += String(c[1].digits[0]);
    return (a.isNeg ? "-" : "") + reverseStr(d)
}
function digitToHex(a) {
    var b = 15
        , c = "";
    for (i = 0; 4 > i; ++i)
        c += hexToChar[a & b],
            a >>>= 4;
    return reverseStr(c)
}
function biToHex(a) {
    var d, b = "";
    for (biHighIndex(a),
        d = biHighIndex(a); d > -1; --d)
        b += digitToHex(a.digits[d]);
    return b
}
function charToHex(a) {
    var h, b = 48, c = b + 9, d = 97, e = d + 25, f = 65, g = 90;
    return h = a >= b && c >= a ? a - b : a >= f && g >= a ? 10 + a - f : a >= d && e >= a ? 10 + a - d : 0
}
function hexToDigit(a) {
    var d, b = 0, c = Math.min(a.length, 4);
    for (d = 0; c > d; ++d)
        b <<= 4,
            b |= charToHex(a.charCodeAt(d));
    return b
}
function biFromHex(a) {
    var d, e, b = new BigInt, c = a.length;
    for (d = c,
        e = 0; d > 0; d -= 4,
        ++e)
        b.digits[e] = hexToDigit(a.substr(Math.max(d - 4, 0), Math.min(d, 4)));
    return b
}
function biFromString(a, b) {
    var g, h, i, j, c = "-" == a.charAt(0), d = c ? 1 : 0, e = new BigInt, f = new BigInt;
    for (f.digits[0] = 1,
        g = a.length - 1; g >= d; g--)
        h = a.charCodeAt(g),
            i = charToHex(h),
            j = biMultiplyDigit(f, i),
            e = biAdd(e, j),
            f = biMultiplyDigit(f, b);
    return e.isNeg = c,
        e
}
function biDump(a) {
    return (a.isNeg ? "-" : "") + a.digits.join(" ")
}
function biAdd(a, b) {
    var c, d, e, f;
    if (a.isNeg != b.isNeg)
        b.isNeg = !b.isNeg,
            c = biSubtract(a, b),
            b.isNeg = !b.isNeg;
    else {
        for (c = new BigInt,
            d = 0,
            f = 0; f < a.digits.length; ++f)
            e = a.digits[f] + b.digits[f] + d,
                c.digits[f] = 65535 & e,
                d = Number(e >= biRadix);
        c.isNeg = a.isNeg
    }
    return c
}
function biSubtract(a, b) {
    var c, d, e, f;
    if (a.isNeg != b.isNeg)
        b.isNeg = !b.isNeg,
            c = biAdd(a, b),
            b.isNeg = !b.isNeg;
    else {
        for (c = new BigInt,
            e = 0,
            f = 0; f < a.digits.length; ++f)
            d = a.digits[f] - b.digits[f] + e,
                c.digits[f] = 65535 & d,
                c.digits[f] < 0 && (c.digits[f] += biRadix),
                e = 0 - Number(0 > d);
        if (-1 == e) {
            for (e = 0,
                f = 0; f < a.digits.length; ++f)
                d = 0 - c.digits[f] + e,
                    c.digits[f] = 65535 & d,
                    c.digits[f] < 0 && (c.digits[f] += biRadix),
                    e = 0 - Number(0 > d);
            c.isNeg = !a.isNeg
        } else
            c.isNeg = a.isNeg
    }
    return c
}
function biHighIndex(a) {
    for (var b = a.digits.length - 1; b > 0 && 0 == a.digits[b];)
        --b;
    return b
}
function biNumBits(a) {
    var e, b = biHighIndex(a), c = a.digits[b], d = (b + 1) * bitsPerDigit;
    for (e = d; e > d - bitsPerDigit && 0 == (32768 & c); --e)
        c <<= 1;
    return e
}
function biMultiply(a, b) {
    var d, h, i, k, c = new BigInt, e = biHighIndex(a), f = biHighIndex(b);
    for (k = 0; f >= k; ++k) {
        for (d = 0,
            i = k,
            j = 0; e >= j; ++j,
            ++i)
            h = c.digits[i] + a.digits[j] * b.digits[k] + d,
                c.digits[i] = h & maxDigitVal,
                d = h >>> biRadixBits;
        c.digits[k + e + 1] = d
    }
    return c.isNeg = a.isNeg != b.isNeg,
        c
}
function biMultiplyDigit(a, b) {
    var c, d, e, f;
    for (result = new BigInt,
        c = biHighIndex(a),
        d = 0,
        f = 0; c >= f; ++f)
        e = result.digits[f] + a.digits[f] * b + d,
            result.digits[f] = e & maxDigitVal,
            d = e >>> biRadixBits;
    return result.digits[1 + c] = d,
        result
}
function arrayCopy(a, b, c, d, e) {
    var g, h, f = Math.min(b + e, a.length);
    for (g = b,
        h = d; f > g; ++g,
        ++h)
        c[h] = a[g]
}
function biShiftLeft(a, b) {
    var e, f, g, h, c = Math.floor(b / bitsPerDigit), d = new BigInt;
    for (arrayCopy(a.digits, 0, d.digits, c, d.digits.length - c),
        e = b % bitsPerDigit,
        f = bitsPerDigit - e,
        g = d.digits.length - 1,
        h = g - 1; g > 0; --g,
        --h)
        d.digits[g] = d.digits[g] << e & maxDigitVal | (d.digits[h] & highBitMasks[e]) >>> f;
    return d.digits[0] = d.digits[g] << e & maxDigitVal,
        d.isNeg = a.isNeg,
        d
}
function biShiftRight(a, b) {
    var e, f, g, h, c = Math.floor(b / bitsPerDigit), d = new BigInt;
    for (arrayCopy(a.digits, c, d.digits, 0, a.digits.length - c),
        e = b % bitsPerDigit,
        f = bitsPerDigit - e,
        g = 0,
        h = g + 1; g < d.digits.length - 1; ++g,
        ++h)
        d.digits[g] = d.digits[g] >>> e | (d.digits[h] & lowBitMasks[e]) << f;
    return d.digits[d.digits.length - 1] >>>= e,
        d.isNeg = a.isNeg,
        d
}
function biMultiplyByRadixPower(a, b) {
    var c = new BigInt;
    return arrayCopy(a.digits, 0, c.digits, b, c.digits.length - b),
        c
}
function biDivideByRadixPower(a, b) {
    var c = new BigInt;
    return arrayCopy(a.digits, b, c.digits, 0, c.digits.length - b),
        c
}
function biModuloByRadixPower(a, b) {
    var c = new BigInt;
    return arrayCopy(a.digits, 0, c.digits, 0, b),
        c
}
function biCompare(a, b) {
    if (a.isNeg != b.isNeg)
        return 1 - 2 * Number(a.isNeg);
    for (var c = a.digits.length - 1; c >= 0; --c)
        if (a.digits[c] != b.digits[c])
            return a.isNeg ? 1 - 2 * Number(a.digits[c] > b.digits[c]) : 1 - 2 * Number(a.digits[c] < b.digits[c]);
    return 0
}
function biDivideModulo(a, b) {
    var f, g, h, i, j, k, l, m, n, o, p, q, r, s, c = biNumBits(a), d = biNumBits(b), e = b.isNeg;
    if (d > c)
        return a.isNeg ? (f = biCopy(bigOne),
            f.isNeg = !b.isNeg,
            a.isNeg = !1,
            b.isNeg = !1,
            g = biSubtract(b, a),
            a.isNeg = !0,
            b.isNeg = e) : (f = new BigInt,
                g = biCopy(a)),
            new Array(f, g);
    for (f = new BigInt,
        g = a,
        h = Math.ceil(d / bitsPerDigit) - 1,
        i = 0; b.digits[h] < biHalfRadix;)
        b = biShiftLeft(b, 1),
            ++i,
            ++d,
            h = Math.ceil(d / bitsPerDigit) - 1;
    for (g = biShiftLeft(g, i),
        c += i,
        j = Math.ceil(c / bitsPerDigit) - 1,
        k = biMultiplyByRadixPower(b, j - h); -1 != biCompare(g, k);)
        ++f.digits[j - h],
            g = biSubtract(g, k);
    for (l = j; l > h; --l) {
        for (m = l >= g.digits.length ? 0 : g.digits[l],
            n = l - 1 >= g.digits.length ? 0 : g.digits[l - 1],
            o = l - 2 >= g.digits.length ? 0 : g.digits[l - 2],
            p = h >= b.digits.length ? 0 : b.digits[h],
            q = h - 1 >= b.digits.length ? 0 : b.digits[h - 1],
            f.digits[l - h - 1] = m == p ? maxDigitVal : Math.floor((m * biRadix + n) / p),
            r = f.digits[l - h - 1] * (p * biRadix + q),
            s = m * biRadixSquared + (n * biRadix + o); r > s;)
            --f.digits[l - h - 1],
                r = f.digits[l - h - 1] * (p * biRadix | q),
                s = m * biRadix * biRadix + (n * biRadix + o);
        k = biMultiplyByRadixPower(b, l - h - 1),
            g = biSubtract(g, biMultiplyDigit(k, f.digits[l - h - 1])),
            g.isNeg && (g = biAdd(g, k),
                --f.digits[l - h - 1])
    }
    return g = biShiftRight(g, i),
        f.isNeg = a.isNeg != e,
        a.isNeg && (f = e ? biAdd(f, bigOne) : biSubtract(f, bigOne),
            b = biShiftRight(b, i),
            g = biSubtract(b, g)),
        0 == g.digits[0] && 0 == biHighIndex(g) && (g.isNeg = !1),
        new Array(f, g)
}
function biDivide(a, b) {
    return biDivideModulo(a, b)[0]
}
function biModulo(a, b) {
    return biDivideModulo(a, b)[1]
}
function biMultiplyMod(a, b, c) {
    return biModulo(biMultiply(a, b), c)
}
function biPow(a, b) {
    for (var c = bigOne, d = a; ;) {
        if (0 != (1 & b) && (c = biMultiply(c, d)),
            b >>= 1,
            0 == b)
            break;
        d = biMultiply(d, d)
    }
    return c
}
function biPowMod(a, b, c) {
    for (var d = bigOne, e = a, f = b; ;) {
        if (0 != (1 & f.digits[0]) && (d = biMultiplyMod(d, e, c)),
            f = biShiftRight(f, 1),
            0 == f.digits[0] && 0 == biHighIndex(f))
            break;
        e = biMultiplyMod(e, e, c)
    }
    return d
}
function BarrettMu(a) {
    this.modulus = biCopy(a),
        this.k = biHighIndex(this.modulus) + 1;
    var b = new BigInt;
    b.digits[2 * this.k] = 1,
        this.mu = biDivide(b, this.modulus),
        this.bkplus1 = new BigInt,
        this.bkplus1.digits[this.k + 1] = 1,
        this.modulo = BarrettMu_modulo,
        this.multiplyMod = BarrettMu_multiplyMod,
        this.powMod = BarrettMu_powMod
}
function BarrettMu_modulo(a) {
    var i, b = biDivideByRadixPower(a, this.k - 1), c = biMultiply(b, this.mu), d = biDivideByRadixPower(c, this.k + 1), e = biModuloByRadixPower(a, this.k + 1), f = biMultiply(d, this.modulus), g = biModuloByRadixPower(f, this.k + 1), h = biSubtract(e, g);
    for (h.isNeg && (h = biAdd(h, this.bkplus1)),
        i = biCompare(h, this.modulus) >= 0; i;)
        h = biSubtract(h, this.modulus),
            i = biCompare(h, this.modulus) >= 0;
    return h
}
function BarrettMu_multiplyMod(a, b) {
    var c = biMultiply(a, b);
    return this.modulo(c)
}
function BarrettMu_powMod(a, b) {
    var d, e, c = new BigInt;
    for (c.digits[0] = 1,
        d = a,
        e = b; ;) {
        if (0 != (1 & e.digits[0]) && (c = this.multiplyMod(c, d)),
            e = biShiftRight(e, 1),
            0 == e.digits[0] && 0 == biHighIndex(e))
            break;
        d = this.multiplyMod(d, d)
    }
    return c
}
var maxDigits, ZERO_ARRAY, bigZero, bigOne, dpl10, lr10, hexatrigesimalToChar, hexToChar, highBitMasks, lowBitMasks, biRadixBase = 2, biRadixBits = 16, bitsPerDigit = biRadixBits, biRadix = 65536, biHalfRadix = biRadix >>> 1, biRadixSquared = biRadix * biRadix, maxDigitVal = biRadix - 1, maxInteger = 9999999999999998;
setMaxDigits(20),
    dpl10 = 15,
    lr10 = biFromNumber(1e15),
    hexatrigesimalToChar = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"),
    hexToChar = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"),
    highBitMasks = new Array(0, 32768, 49152, 57344, 61440, 63488, 64512, 65024, 65280, 65408, 65472, 65504, 65520, 65528, 65532, 65534, 65535),
    lowBitMasks = new Array(0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535);
!function () {
    function a(a) {
        var d, e, b = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", c = "";
        for (d = 0; a > d; d += 1)
            e = Math.random() * b.length,
                e = Math.floor(e),
                c += b.charAt(e);
        return c
    }
    function b(a, b) {
        var c = CryptoJS.enc.Utf8.parse(b)
            , d = CryptoJS.enc.Utf8.parse("0102030405060708")
            , e = CryptoJS.enc.Utf8.parse(a)
            , f = CryptoJS.AES.encrypt(e, c, {
                iv: d,
                mode: CryptoJS.mode.CBC
            });
        return f.toString()
    }
    function c(a, b, c) {
        var d, e;
        return setMaxDigits(131),
            d = new RSAKeyPair(b, "", c),
            e = encryptedString(d, a)
    }
    function d(d, e, f, g) {
        var h = {}
            , i = a(16);
        return h.encText = b(d, g),
            h.encText = b(h.encText, i),
            h.encSecKey = c(i, e, f),
            h
    }
    function e(a, b, d, e) {
        var f = {};
        return f.encText = c(a + e, b, d),
            f
    }
    window.asrsea = d,
        window.ecnonasr = e
}();
(function () {
    var bd = NEJ.P
        , fu = bd("nej.g")
        , bA = bd("nej.j")
        , bm = bd("nej.u")
        , Pz = bd("nm.x.ek");
    Pz.emj = {
        "色": "00e0b",
        "流感": "509f6",
        "这边": "259df",
        "弱": "8642d",
        "嘴唇": "bc356",
        "亲": "62901",
        "开心": "477df",
        "呲牙": "22677",
        "憨笑": "ec152",
        "猫": "b5ff6",
        "皱眉": "8ace6",
        "幽灵": "15bb7",
        "蛋糕": "b7251",
        "发怒": "52b3a",
        "大哭": "b17a8",
        "兔子": "76aea",
        "星星": "8a5aa",
        "钟情": "76d2e",
        "牵手": "41762",
        "公鸡": "9ec4e",
        "爱意": "e341f",
        "禁止": "56135",
        "狗": "fccf6",
        "亲亲": "95280",
        "叉": "104e0",
        "礼物": "312ec",
        "晕": "bda92",
        "呆": "557c9",
        "生病": "38701",
        "钻石": "14af6",
        "拜": "c9d05",
        "怒": "c4f7f",
        "示爱": "0c368",
        "汗": "5b7a4",
        "小鸡": "6bee2",
        "痛苦": "55932",
        "撇嘴": "575cc",
        "惶恐": "e10b4",
        "口罩": "24d81",
        "吐舌": "3cfe4",
        "心碎": "875d3",
        "生气": "e8204",
        "可爱": "7b97d",
        "鬼脸": "def52",
        "跳舞": "741d5",
        "男孩": "46b8e",
        "奸笑": "289dc",
        "猪": "6935b",
        "圈": "3ece0",
        "便便": "462db",
        "外星": "0a22b",
        "圣诞": "8e7",
        "流泪": "01000",
        "强": "1",
        "爱心": "0CoJU",
        "女孩": "m6Qyw",
        "惊恐": "8W8ju",
        "大笑": "d"
    };
    Pz.md = ["色", "流感", "这边", "弱", "嘴唇", "亲", "开心", "呲牙", "憨笑", "猫", "皱眉", "幽灵", "蛋糕", "发怒", "大哭", "兔子", "星星", "钟情", "牵手", "公鸡", "爱意", "禁止", "狗", "亲亲", "叉", "礼物", "晕", "呆", "生病", "钻石", "拜", "怒", "示爱", "汗", "小鸡", "痛苦", "撇嘴", "惶恐", "口罩", "吐舌", "心碎", "生气", "可爱", "鬼脸", "跳舞", "男孩", "奸笑", "猪", "圈", "便便", "外星", "圣诞"]
})();
(function () {
    var bd = NEJ.P
        , fu = bd("nej.g")
        , bA = bd("nej.j")
        , bm = bd("nej.u")
        , Pz = bd("nm.x.ek")
        , bn = bd("nm.x");
    if (bA.cE.redefine)
        return;
    window.GEnc = true;
    var bia = function (cpq) {
        var bo = [];
        bm.cr(cpq, function (cpn) {
            bo.push(Pz.emj[cpn])
        });
        return bo.join("")
    };
    var cpm = bA.cE;
    bA.cE = function (ce, bf) {
        var bl = {}
            , bf = NEJ.X({}, bf)
            , nX = ce.indexOf("?");
        if (window.GEnc && /(^|\.com)\/api/.test(ce) && !(bf.headers && bf.headers[fu.Ap] == fu.Ge) && !bf.noEnc) {
            if (nX != -1) {
                bl = bm.jg(ce.substring(nX + 1));
                ce = ce.substring(0, nX)
            }
            if (bf.query) {
                bl = NEJ.X(bl, bm.gO(bf.query) ? bm.jg(bf.query) : bf.query)
            }
            if (bf.data) {
                bl = NEJ.X(bl, bm.gO(bf.data) ? bm.jg(bf.data) : bf.data)
            }
            bl["csrf_token"] = bA.iF("__csrf");
            ce = ce.replace("api", "weapi");
            bf.method = "post";
            delete bf.query;
            var bDC = window.asrsea(JSON.stringify(bl), bia(["流泪", "强"]), bia(Pz.md), bia(["爱心", "女孩", "惊恐", "大笑"]));
            bf.data = bm.eH({
                params: bDC.encText,
                encSecKey: bDC.encSecKey
            })
        }
        cpm(ce, bf)
    }
        ;
    bA.cE.redefine = true
})();
(function () { })();
(function () {
    var bd = NEJ.P
        , bb = bd("nej.e")
        , eI = bd("nej.p")
        , bm = bd("nej.u")
        , bj = bd("nej.v")
        , bA = bd("nej.j")
        , eJ = bd("nm.u")
        , bn = bd("nm.x")
        , bs = bd("nm.d")
        , bp = bd("nm.l")
        , bic = "http://s1.music.126.net/style/web2/emt/emoji_{ID}.png"
        , bl = {
            "大笑": "86",
            "可爱": "85",
            "憨笑": "359",
            "色": "95",
            "亲亲": "363",
            "惊恐": "96",
            "流泪": "356",
            "亲": "362",
            "呆": "352",
            "哀伤": "342",
            "呲牙": "343",
            "吐舌": "348",
            "撇嘴": "353",
            "怒": "361",
            "奸笑": "341",
            "汗": "97",
            "痛苦": "346",
            "惶恐": "354",
            "生病": "350",
            "口罩": "351",
            "大哭": "357",
            "晕": "355",
            "发怒": "115",
            "开心": "360",
            "鬼脸": "94",
            "皱眉": "87",
            "流感": "358",
            "爱心": "33",
            "心碎": "34",
            "钟情": "303",
            "星星": "309",
            "生气": "314",
            "便便": "89",
            "强": "13",
            "弱": "372",
            "拜": "14",
            "牵手": "379",
            "跳舞": "380",
            "禁止": "374",
            "这边": "262",
            "爱意": "106",
            "示爱": "376",
            "嘴唇": "367",
            "狗": "81",
            "猫": "78",
            "猪": "100",
            "兔子": "459",
            "小鸡": "450",
            "公鸡": "461",
            "幽灵": "116",
            "圣诞": "411",
            "外星": "101",
            "钻石": "52",
            "礼物": "107",
            "男孩": "0",
            "女孩": "1",
            "蛋糕": "337",
            18: "186",
            "圈": "312",
            "叉": "313"
        }
        , cpl = function () {
            if (bj && bj.bG) {
                bj.dispatchEventalias = bj.bG
            }
        };
    cpl();
    bn.bil = function (cU) {
        if (!cU || cU.copyrightId === undefined || !!cU.program)
            return false;
        if (window.GAbroad) {
            cU.fee = 0;
            return true
        }
        if (cU.status < 0)
            return true;
        var Pq;
        if (typeof GCopyrights !== "undefined")
            Pq = GCopyrights;
        try {
            if (!Pq && !!top.GCopyrights)
                Pq = top.GCopyrights
        } catch (e) { }
        if (Pq) {
            var bv = bm.eu(Pq, cU.copyrightId);
            if (bv >= 0)
                return true
        }
        return false
    }
        ;
    bn.bim = function () {
        var CK = /^\/m\/(song|album|artist|playlist|dj|search)\?/
            , wO = {
                2: "artist",
                13: "playlist",
                17: "dj",
                19: "album",
                18: "song",
                31: "toplist",
                32: "searchsong",
                33: "searchlyric",
                34: "event",
                70: "djradio",
                24: "day",
                50: "record"
            }
            , cpi = {
                song: "单曲",
                album: "专辑",
                artist: "歌手",
                playlist: "歌单",
                dj: "电台节目",
                searchsong: "单曲搜索",
                searchlyric: "歌词搜索",
                toplist: "榜单",
                event: "动态",
                djradio: "电台",
                day: "每日歌曲推荐",
                record: "听歌排行榜"
            };
        var cpg = function (bP, bl, Pl) {
            switch (bP) {
                case "event":
                    bl = bl.split("|");
                    return "/event?id=" + bl[0] + "&uid=" + bl[1];
                case "searchsong":
                case "searchlyric":
                    var bw = bP == "searchsong" ? 1 : 1006;
                    return "/search/m/?s=" + encodeURIComponent(bl) + "&type=" + bw;
                case "toplist":
                    return "/discover/toplist?id=" + bl + "&_hash=songlist-" + Pl;
                case "day":
                    return "/discover/recommend/taste" + "?_hash=songlist-" + Pl;
                    ;
                case "record":
                    bl = bl.split("|");
                    return "/user/songs/rank?id=" + bl[0] + "&cat=" + bl[1];
                    break;
                default:
                    return "/" + bP + "?id=" + bl + "&_hash=songlist-" + Pl
            }
        };
        return function (fj, Pl) {
            if (!fj)
                return null;
            var KM = fj.fid || (fj.type != 18 ? fj.type : null)
                , bip = fj.fdata || fj.rid
                , bEu = fj.page || fj.fhref;
            var bP = wO[KM];
            if (!bP) {
                var zx = (bEu || "").match(CK);
                if (zx)
                    bP = zx[1]
            }
            if (!bP)
                return null;
            return {
                title: cpi[bP],
                link: !wO[KM] ? bEu : cpg(bP, bip, Pl),
                fid: KM,
                fdata: bip
            }
        }
    }();
    bn.UM = function (mq) {
        var eR = mq;
        if (typeof GUser !== "undefined" && GUser.userId > 0)
            eR = GUser;
        return eR
    }
        ;
    bn.iJ = function () {
        if (typeof GUser !== "undefined" && GUser.userId > 0) {
            return true
        } else {
            top.login();
            return false
        }
    }
        ;
    bn.Kb = function () {
        var CK = /#(.*?)$/;
        return function (hK) {
            var kC = hK === false ? location : top.location;
            return CK.test(kC.href) ? RegExp.$1 : ""
        }
    }();
    bn.CD = function () {
        var bEI = bn.biy().supported
            , CC = bb.ew("audio")
            , bEL = CC.canPlayType && CC.canPlayType("audio/mpeg");
        if (eI.Mk.mac) {
            if (bEL)
                return 2;
            if (bEI)
                return 1;
            return 0
        } else {
            if (bEI)
                return 1;
            if (bEL)
                return 2;
            return 0
        }
    }
        ;
    bn.biy = function () {
        var hD, biF = !1, biG = "";
        if (eI.ei.browser == "ie") {
            try {
                hD = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")
            } catch (e) {
                hD = null
            }
            if (hD) {
                biF = !0;
                biG = hD.GetVariable("$version")
            }
        } else {
            if (navigator.plugins && navigator.plugins.length > 0) {
                hD = navigator.plugins["Shockwave Flash"];
                if (hD) {
                    biF = !0;
                    biG = hD.description
                }
            }
        }
        return {
            supported: biF,
            version: biG
        }
    }
        ;
    bn.sm = function () {
        return "网易云音乐"
    }
        ;
    bn.cpf = function () {
        return bl
    }
        ;
    bn.bFp = function (eB) {
        var bE = bl[eB];
        return bE == null ? "" : bic.replace("{ID}", bE)
    }
        ;
    bn.vi = function (cu, fd, JT) {
        if (!cu)
            return "";
        if (!!JT) {
            cu = bn.coY(cu)
        }
        return bn.biI(bn.coX(cu, fd))
    }
        ;
    bn.biO = function () {
        var OJ = {
            AT: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@：])|$))/g,
            LINK: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@：])|$))|((http[s]{0,1}):\/\/[\-a-zA-Z0-9\.]+(:(6553[0-5]|655[0-2][0-9]|65[0-4][0-9][0-9]|6[0-4][0-9][0-9][0-9]|\\d{2,4}|[1-9]))?(\/[a-zA-Z0-9\\\.\-~!@#$%\^&\*\+\?:_\/=<>]*)?)/g,
            ACT_NOLINK: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@：])|$))|(#[^\[\]\/\\\#\r\n]+?#)/g,
            ACT: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@：])|$))|((http[s]{0,1}):\/\/[\-a-zA-Z0-9\.]+(:(6553[0-5]|655[0-2][0-9]|65[0-4][0-9][0-9]|6[0-4][0-9][0-9][0-9]|\\d{2,4}|[1-9]))?(\/[a-zA-Z0-9\\\.\-~!@#$%\^&\*\+\?:_\/=<>]*)?)|(#[^\[\]\/\\\#\r\n]+?#)/g,
            LING: /\n/g,
            BLANK: /\s/g,
            MLINE: /([ \f\r\t\v]*\n){2,}/g
        }
            , biV = {
                LINK: '<a href="${url}" class="${klass}">${value}</a>',
                AT: '<a href="${url}" class="${klass}">@${value}</a>',
                ACT: '<a href="javascript:;" class="${klass}" data-title="${value}" data-action="activity">${value}</a>'
            }
            , coW = {
                r: /\<|\>|\&lt;|\&gt;|\&|\'|\"/g,
                "<": "&lt;",
                ">": "&gt;",
                "&": "&amp;",
                " ": "&nbsp;",
                '"': "&quot;",
                "'": "&#39;",
                "&lt;": "&lt;",
                "&gt;": "&gt;"
            }
            , coQ = ["AT", "LINK", "ACT_NOLINK", "ACT"];
        var coP = function (fy, biZ) {
            fy = JJ(fy);
            if (!!biZ) {
                fy = fy.replace(OJ.MLINE, "\n\n").replace(OJ.LING, "</br>")
            }
            fy = bn.biI(fy);
            return fy
        };
        var JJ = function (cu) {
            return bm.Eg(coW, cu)
        };
        return function (fy, bf, hO) {
            bf = bf || {};
            hO = hO || {};
            hO.actHash = {};
            var coG = !!bf.parseLink
                , coE = !!bf.parseAct
                , coD = bf.linkTpl || biV.LINK
                , coC = bf.atTpl || biV.AT
                , coA = bf.actTpl || biV.ACT
                , biZ = !!bf.keepSpace
                , bjd = bf.linkKlass || "s-fc7";
            cud = bf.actBiJson || "";
            if (!fy)
                return "";
            fy = fy.trim().replace(/&amp;/g, "&").replace(/&nbsp;/g, " ");
            var bcc = coQ[coG + 2 * coE]
                , ej = OJ[bcc]
                , cF = null
                , mI = null
                , ib = 0
                , cue = ""
                , cuf = "";
            var Ct = [];
            ej.lastIndex = 0;
            while (cF = ej.exec(fy)) {
                var hp = {
                    html: "",
                    before: cF.index - 1,
                    after: cF.index + cF[0].length
                };
                if (cF[1]) {
                    var mI = cF[2].replace(/[^\x00-\xff]/g, "**");
                    if (mI.length < 4 || mI.length > 32) { } else {
                        var Os = bb.fT(coC);
                        hp.html = bb.dm(Os, {
                            value: JJ(cF[2]),
                            url: encodeURI("/user/home?nickname=" + cF[2]),
                            klass: bjd
                        });
                        Ct.push(hp)
                    }
                } else if (cF.length > 8 && cF[4]) {
                    var Os = bb.fT(coD);
                    hp.html = bb.dm(Os, {
                        value: JJ(cF[4]),
                        url: encodeURI(cF[4]),
                        klass: bjd
                    });
                    Ct.push(hp)
                } else {
                    var bHK = bcc == "ACT_NOLINK" ? 4 : 9;
                    var Os = bb.fT(coA);
                    hp.html = bb.dm(Os, {
                        value: JJ(cF[bHK]),
                        klass: bjd
                    });
                    Ct.push(hp);
                    hO.actHash[cF[bHK].slice(1, -1)] = true
                }
            }
            var cos = Ct.length
                , mq = {
                    before: fy.length - 1,
                    after: 0
                }
                , bjq = "";
            for (var i = 0; i <= cos; i++) {
                var ko, hU;
                ko = (Ct[i - 1] || mq).after;
                hU = (Ct[i] || mq).before;
                if (hU >= ko && ko >= 0 && hU <= fy.length - 1) {
                    bjq += coP(fy.substring(ko, hU + 1), biZ)
                }
                if (Ct[i]) {
                    bjq += Ct[i].html
                }
            }
            return bjq
        }
    }();
    bn.coY = function () {
        var ej = new RegExp("(http[s]{0,1})://[-a-zA-Z0-9.]+(:(6553[0-5]|655[0-2][0-9]|65[0-4][0-9][0-9]|6[0-4][0-9][0-9][0-9]|\\d{2,4}|[1-9]))?(/[a-zA-Z0-9\\.\\-~!@#$%^&*+?:_/=<>]*)?", "g");
        return function (cu) {
            return (cu || "").replace(/&amp;/g, "&").replace(/&nbsp;/g, " ").replace(ej, function ($0, $1) {
                return "<a href=" + $0 + ' class="link u-link"><i class="u-dicn u-dicn-28"></i>网页链接</a>'
            })
        }
    }();
    bn.coX = function () {
        var ej = /@([a-zA-Z0-9_\-\u4E00-\u9FA5]+)/g;
        var gk = function (mI, fd) {
            return '<a href="/user/home?nickname=' + encodeURIComponent(mI) + '" class="' + (fd || "") + '">@' + mI + "</a>"
        };
        return function (cu, fd) {
            return (cu || "").replace(ej, function ($0, $1) {
                return gk($1, fd)
            })
        }
    }();
    bn.biI = function () {
        var ej = /\[(.*?)\]/g;
        return function (cu) {
            return (cu || "").replace(ej, function ($1, $2) {
                var ce = bn.bFp($2);
                return !ce ? $1 : '<img src="' + ce + '"/>'
            })
        }
    }();
    bn.Az = function (bM, fd) {
        bb.cN(bM, fd) ? bb.bB(bM, fd) : bb.bC(bM, fd)
    }
        ;
    bn.Ok = function (ed, ju) {
        ed = bb.bD(ed);
        ju = bb.bD(ju);
        if (!ed || !ju)
            return !1;
        for (ju = ju.parentNode; !!ju && ju != ed; ju = ju.parentNode)
            ;
        return ju == ed
    }
        ;
    bn.nx = function () {
        var bIf = function (hb) {
            return (hb < 10 ? "0" : "") + hb
        };
        return function (pt) {
            pt = parseInt(pt) || 0;
            if (!pt)
                return "00:00";
            var Oj = Math.floor(pt % 60)
                , coo = Math.floor(pt / 60);
            return bIf(coo) + ":" + bIf(Oj)
        }
    }();
    bn.zm = function (gR, xq) {
        if (!gR || gR.length == 0)
            return "";
        xq = xq || "/";
        var cF = [];
        for (var i = gR.length - 1; i >= 0; i--) {
            cF.unshift(gR[i].name)
        }
        return cF.join(xq)
    }
        ;
    bn.rQ = function () {
        var Oe = function (iZ, fd, ed) {
            if (!iZ || !iZ.name)
                return "";
            if (!iZ.id)
                return '<span class="' + fd + '">' + bm.fo(iZ.name) + "</span>";
            return "<a" + (ed ? ' target="_blank"' : "") + ' class="' + fd + '" href="/artist?id=' + iZ.id + '" hidefocus="true">' + bm.fo(iZ.name) + "</a>"
        };
        return function (gR, bY, xq, ed, bJB) {
            if (!gR || !gR.length)
                return "";
            xq = xq || "/";
            bY = bY || "";
            JB = "";
            var gl = [];
            for (var i = 0, bk = [], uz = [], im; i < gR.length; ++i) {
                gl.push(gR[i].name);
                if (!gR[i] || gR[i].id <= 0) {
                    uz.push(gR[i]);
                    continue
                }
                if (bm.hF(bY)) {
                    im = bY(gR[i])
                } else {
                    im = Oe(gR[i], bY, ed)
                }
                if (im && bJB && gR[i].tns && gR[i].tns.length > 0) {
                    JB = bm.fo(gR[i].tns[0]);
                    im += '<span class="s-fc8" title="' + JB + '"> - (' + JB + ")</span>"
                }
                !!im && bk.push(im)
            }
            for (var i = 0, im; i < uz.length; ++i) {
                if (bm.hF(bY)) {
                    im = bY(uz[i])
                } else {
                    im = Oe(uz[i], bY, ed)
                }
                if (im && bJB && uz[i].tns && uz[i].tns.length > 0) {
                    JB = bm.fo(uz[i].tns[0]);
                    im += '<span class="s-fc8" title="' + JB + '"> - (' + JB + ")</span>"
                }
                !!im && bk.push(im)
            }
            return '<span title="' + gl.join(xq) + '">' + bk.join(xq) + "</span>"
        }
    }();
    bn.zz = function (gx) {
        return !!gx && /^[0-9]{11}$/.test(gx)
    }
        ;
    bn.cug = function (gx) {
        if (!bn.zz(gx))
            return gx;
        return gx.substring(0, 3) + "****" + gx.substr(7)
    }
        ;
    bn.kL = function () {
        var ej = /^\s+$/g;
        return function (jm) {
            return !jm || ej.test(jm)
        }
    }();
    bn.JA = function () {
        var bjr = /[^\x00-\xfff]/g;
        return function (jm) {
            var cok = jm.match(bjr) || []
                , fB = cok.length;
            return jm.length + fB
        }
    }();
    bn.Co = function () {
        var bjr = /[^\x00-\xfff]/;
        return function (jm, il) {
            for (var i = 0, len = jm.length; i < len && il > 0; i++) {
                if (bjr.test(jm.charAt(i))) {
                    il -= 2;
                    if (il < 0) {
                        break
                    }
                } else {
                    il -= 1
                }
            }
            return jm.substring(0, i)
        }
    }();
    bn.DQ = function (jm, il, SQ) {
        il = il || 10;
        SQ = SQ || nej.p.ei.engine == "trident" && parseInt(nej.p.ei.release) < 5;
        if (SQ && bn.JA(jm) > il) {
            return bn.Co(jm, il) + "..."
        } else {
            return jm
        }
    }
        ;
    bn.bKv = function (bh) {
        return bh === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(bh.type || bh.href || ~bh.tabIndex)
    }
        ;
    bn.coi = function (be, ed) {
        if (!be || !ed)
            return !0;
        var bh, bw = be.type.toLowerCase();
        if (bw == "mouseout") {
            bh = be.relatedTarget || be.toElement
        } else if (bw == "mouseover") {
            bh = be.relatedTarget || be.fromElement
        }
        return !bh || bh !== ed && !bn.Ok(ed, bh)
    }
        ;
    bn.uo = function () {
        bW = {};
        return function (bh, fk) {
            var bE = bb.mX(bh)
                , bP = "hover-" + bE;
            if (!fk || !bE || !!bW[bP])
                return;
            bW[bP] = !0;
            bj.bt(bE, "mouseover", function () {
                var bjt = bb.bN(bh, "hshow") || [];
                var bju = bb.bN(bh, "icn-dislike") || [];
                bb.bC(bE, "z-hover");
                bb.cf(bjt[0], "display", "block");
                bb.cf(bju[0], "display", "block")
            });
            bj.bt(bE, "mouseout", function () {
                var bjt = bb.bN(bh, "hshow") || [];
                var bju = bb.bN(bh, "icn-dislike") || [];
                bb.bB(bE, "z-hover");
                bb.cf(bjt[0], "display", "none");
                bb.cf(bju[0], "display", "none")
            })
        }
    }();
    bn.bKC = function () {
        var cI = {
            r: /\(|\)|\[|\]|\{|\}|\*|\+|\^|\$|\?|\!|\\|\||\./gi,
            "(": "\\(",
            ")": "\\)",
            "[": "\\[",
            "]": "\\]",
            "{": "\\{",
            "}": "\\}",
            "*": "\\*",
            "+": "\\+",
            "^": "\\^",
            $: "\\$",
            "?": "\\?",
            "!": "\\!",
            "\\": "\\\\",
            "|": "\\|",
            ".": "\\."
        };
        return function (jm) {
            return bm.Eg(cI, jm)
        }
    }();
    bn.tA = function (cY) {
        if (bm.VE(cY))
            cY = cY.getTime();
        var jz = new Date
            , Jz = jz.getTime() - cY;
        if (Jz <= 6e4)
            return "刚刚";
        var baR = jz.getHours() * 36e5 + jz.getMinutes() * 6e4 + jz.getSeconds() * 1e3;
        if (Jz <= baR) {
            if (Jz < 36e5) {
                var bjx = Math.floor(Jz / 6e4);
                return bjx + "分钟前"
            }
            return bm.og(cY, "HH:mm")
        } else {
            if (Jz < baR + 864e5) {
                return "昨天" + bm.og(cY, "HH:mm")
            } else {
                var hW = jz.getFullYear()
                    , coh = new Date(hW, 0, 1);
                var baR = jz.getTime() - coh.getTime();
                if (Jz < baR) {
                    return bm.og(cY, "M月d日 HH:mm")
                }
                return bm.og(cY, "yyyy年M月d日")
            }
        }
    }
        ;
    bn.NO = function () {
        var ej = /\{(.*?)\}/gi;
        return function (uc, bl) {
            return (uc || "").replace(ej, function ($1, $2) {
                var bF = bl[$2];
                return bF == null ? $1 : bF
            })
        }
    }();
    bn.gs = function () {
        var cn = Array.prototype.slice.call(arguments, 0)
            , uc = cn.shift();
        if (uc) {
            return uc.replace(/{(\d+)}/g, function ($1, $2) {
                return $2 < cn.length ? cn[$2] : $1
            })
        }
        return ""
    }
        ;
    bn.Jw = function (bk, fd, mM) {
        return "";
        mM = mM || " - ";
        if (bk && bk.length) {
            return mM + (!!fd ? '<span class="' + fd + '">' + bk[0] + "</span>" : bk[0])
        }
        return ""
    }
        ;
    bn.bLh = function () {
        if (window.getSelection) {
            var sj = window.getSelection();
            if (sj && sj.focusNode && sj.focusNode.tagName) {
                var Cl = bb.ek(sj.focusNode);
                for (var i = 0, yc; i < Cl.length; ++i) {
                    yc = Cl[i].tagName;
                    if (!yc)
                        continue;
                    yc = yc.toLowerCase();
                    if (yc == "textarea" || yc == "input")
                        return !0
                }
            }
        } else if (document.selection) {
            var dZ = document.selection.createRange();
            if (dZ) {
                var bh = dZ.parentElement();
                if (bh && bh.tagName) {
                    var yc = bh.tagName.toLowerCase();
                    if (yc == "textarea" || yc == "input")
                        return !0
                }
            }
        }
        return !1
    }
        ;
    bn.Cj = function (gY) {
        if (/^[A-Z]\:\\/i.test(gY)) {
            gY = gY.split("\\")
        } else {
            gY = gY.split("/")
        }
        gY = gY[gY.length - 1];
        return gY
    }
        ;
    bn.cog = function () {
        var DR = [13, 17, 34, 19, 18, 21];
        return function (bE) {
            var cF = (bE || "").split("_");
            return {
                type: DR[cF[2]] || -1,
                id: cF[3] || ""
            }
        }
    }();
    bn.bjz = function (eR) {
        if (4 == eR.userType) {
            return '<sup class="icn u-icn2 u-icn2-music2"></sup>'
        } else if (eR.authStatus == 1) {
            return '<sup class="u-icn u-icn-1"></sup>'
        } else if (eR.expertTags && eR.expertTags.length) {
            return '<sup class="u-icn u-icn-84"></sup>'
        }
    }
        ;
    bn.NE = function (hb) {
        hb += "";
        if (hb) {
            return hb.substr(0, 3) + "****" + hb.substr(hb.length - 4)
        }
    }
        ;
    bn.cuh = function (bv, dO) {
        return (bv % dO + dO) % dO
    }
        ;
    bn.bMz = function () {
        var DR = ["playlist", "program", "event", "album", "song", "mv", "topic"];
        return function (bE) {
            var cF = (bE || "").split("_")
                , bo = {
                    type: DR[cF[2]] || -1,
                    id: cF[3] || ""
                };
            if (bo.type == "event") {
                bo.uid = cF[4] || "";
                return "/" + bo.type + "?id=" + bo.id + "&uid=" + bo.uid
            }
            return "/" + bo.type + "?id=" + bo.id
        }
    }();
    bn.bMC = function () {
        var DR = ["歌单", "电台节目", "动态", "专辑", "单曲", "MV", "专栏文章"];
        return function (bE) {
            var cF = (bE || "").split("_");
            return DR[cF[2]] || "资源"
        }
    }();
    bn.coe = function (cO) {
        var qs = cO.length > 0 ? cO.substring(1) : ""
            , args = {}
            , items = qs.length ? qs.split("&") : []
            , item = null
            , name = null
            , value = null
            , i = 0
            , len = items.length;
        for (i = 0; i < len; i++) {
            item = items[i].split("=");
            name = decodeURIComponent(item[0]);
            value = decodeURIComponent(item[1]);
            if (name.length) {
                args[name] = value
            }
        }
        return args
    }
        ;
    bn.bMG = function (ys, NC) {
        var bag = 0
            , gE = new Array;
        bm.cr(ys, function (ce, bv) {
            var fV = bb.ew("img");
            fV.src = ce;
            bj.bt(fV, "load", function (bv, be) {
                gE[bv] = 1;
                bag++;
                if (bag == ys.length)
                    NC(ys, gE)
            }
                .bi(this, bv));
            bj.bt(fV, "error", function (be, bv) {
                gE[bv] = 0;
                bag++;
                if (bag == ys.length)
                    NC(ys, gE)
            }
                .bi(this, bv))
        })
    }
        ;
    bn.bMU = function (bk, fm) {
        var bo = [];
        bm.cr(bk, function (bu, bv, kE) {
            bo.push(fm(bu, bv, kE))
        });
        return bo
    }
        ;
    bn.bzn = function (bk, fm, kE) {
        var bo = [];
        bm.cr(bk, function (bu, bv) {
            if (fm.call(kE, bu, bv, bk)) {
                bo.push(bu)
            }
        });
        return bo
    }
        ;
    bn.coa = function (cu) {
        return bm.fo((cu || "").replace(/\s{2,}/g, " ").trim())
    }
        ;
    bn.bjB = function (cm) {
        if (cm.transNames && cm.transNames.length) {
            return cm.transNames[0]
        } else if (cm.alias && cm.alias.length) {
            return cm.alias[0]
        }
    }
        ;
    bn.bNe = function (Qt) {
        if (Qt) {
            return Qt.replace(/\n{2,}/g, "<br/><br/>").replace(/\n/g, "<br/>").replace(/(<br\/?>){2,}/g, "<br/><br/>")
        }
    }
        ;
    bn.bjC = function (bh) {
        var bh = bb.bD(bh)
            , eB = bh && bh.getElementsByTagName("textarea")[0]
            , bP = bb.bz(bh, "key")
            , bjF = bb.bz(bh, "simple") == "1"
            , bNt = bs.xH.hC();
        if (!(bh && eB && bP))
            return;
        if (bjF) {
            bNt.tZ(bP, bn.EA(JSON.parse(eB.value)))
        } else {
            bNt.tZ(bP, JSON.parse(eB.value || eB.defaultValue))
        }
        bh.innerHTML = "";
        return bP
    }
        ;
    bn.cnX = function (qF) {
        if (!qF.onbeforelistload) {
            qF.onbeforelistload = function (be) {
                be.value = '<div class="u-load s-fc4"><i class="icn"></i> 加载中...</div>'
            }
        }
        if (!qF.onemptylist) {
            qF.onemptylist = function (be) {
                be.value = '<div class="n-nmusic"><h3 class="f-ff2"><i class="u-icn u-icn-21"></i>' + (qF.emptyMsg || "暂时还没有数据") + "</h3></div>"
            }
        }
        return qF
    }
        ;
    bn.EA = function (jh) {
        if (bm.fU(jh)) {
            var hO = [];
            bm.cr(jh, function (bjF) {
                hO.push(bOa(bjF))
            });
            return hO
        } else {
            return bOa(jh)
        }
        function bOa(jh) {
            if (!jh)
                return null;
            var hO = {
                album: jh.al,
                alias: jh.alia || jh.ala || [],
                artists: jh.ar || [],
                commentThreadId: "R_SO_4_" + jh.id,
                copyrightId: jh.cp || 0,
                duration: jh.dt || 0,
                id: jh.id,
                mvid: jh.mv || 0,
                name: jh.name || "",
                cd: jh.cd,
                position: jh.no || 0,
                ringtone: jh.rt,
                rtUrl: jh.rtUrl,
                status: jh.st || 0,
                pstatus: jh.pst || 0,
                fee: jh.fee || 0,
                version: jh.v || 0,
                eq: jh.eq,
                songType: jh.t || 0,
                mst: jh.mst,
                score: jh.pop || 0,
                ftype: jh.ftype,
                rtUrls: jh.rtUrls,
                transNames: jh.tns,
                privilege: jh.privilege,
                lyrics: jh.lyrics
            };
            return hO
        }
    }
        ;
    bn.cul = function () {
        var bh = bb.qe('<div class="u-mask u-mask-light"></div>' + '<div class="m-opentip">' + '<div class="lay">' + '<div class="note">' + "<h3>分享打不开？</h3>" + '<p>请点击右上角<br>选择<span class="s-fc5">“分享到...”</span></p>' + "</div></div></div>");
        document.body.appendChild(bh);
        bj.bt(bh, "click", function (be) {
            bj.co(be);
            bb.dY(bh)
        })
    }
        ;
    bn.oH = function (dB) {
        if (dB < 1e5) {
            return dB
        } else {
            return Math.floor(dB / 1e4) + "万"
        }
    }
        ;
    bn.xh = function (dB, eB) {
        return "<i>" + (dB ? "(" + dB + ")" : eB) + "</i>"
    }
        ;
    bn.bOo = function (bw, iY) {
        var bf = {};
        if (!bm.mK(iY)) {
            return bf
        }
        switch (parseInt(bw)) {
            case 17:
                bf.title = iY.name;
                bf.author = (iY.radio || []).name;
                bf.picUrl = iY.coverUrl;
                bf.category = iY.radio.category;
                break;
            case 19:
                bf.title = iY.name;
                bf.author = bn.zm(iY.artists);
                bf.authors = bn.zm(iY.artists, " / ");
                bf.picUrl = iY.picUrl;
                break;
            case 13:
                bf.title = iY.name;
                bf.author = (iY.creator || []).nickname;
                bf.picUrl = iY.coverImgUrl;
                break;
            case 18:
                bf.title = iY.name;
                bf.author = bn.zm(iY.artists);
                bf.picUrl = (iY.album || []).picUrl;
                break;
            case 20:
                bf.title = iY.name;
                bf.author = "";
                bf.picUrl = iY.img1v1Url;
                break;
            case 21:
                bf.title = iY.name;
                bf.author = iY.artistName;
                bf.authors = bn.zm(iY.artists, " / ");
                bf.picUrl = iY.newCover || iY.cover;
                break;
            case 70:
                bf.title = iY.name;
                bf.author = (iY.dj || []).nickname;
                bf.picUrl = iY.picUrl;
                bf.category = iY.category;
                break;
            default:
                break
        }
        return bf
    }
        ;
    bn.bta = function () {
        return location.hostname.indexOf("igame.163.com") >= 0
    }
        ;
    bn.cnM = function (gk, xf, bf) {
        var dg, cn, bo;
        var li = null;
        var Ny = 0;
        if (!bf)
            bf = {};
        var ZG = function () {
            Ny = bf.leading === false ? 0 : +(new Date);
            li = null;
            bo = gk.apply(dg, cn);
            if (!li)
                dg = cn = null
        };
        return function () {
            var jz = +(new Date);
            if (!Ny && bf.leading === false)
                Ny = jz;
            var bjR = xf - (jz - Ny);
            dg = this;
            cn = arguments;
            if (bjR <= 0 || bjR > xf) {
                if (li) {
                    clearTimeout(li);
                    li = null
                }
                Ny = jz;
                bo = gk.apply(dg, cn);
                if (!li)
                    dg = cn = null
            } else if (!li && bf.trailing !== false) {
                li = setTimeout(ZG, bjR)
            }
            return bo
        }
    }
        ;
    bn.btq = function (gk, xf, sI) {
        var li, cn, dg, Nu, bo;
        var ZG = function () {
            var ib = new Date - Nu;
            if (ib < xf && ib >= 0) {
                li = setTimeout(ZG, xf - ib)
            } else {
                li = null;
                if (!sI) {
                    bo = gk.apply(dg, cn);
                    if (!li)
                        dg = cn = null
                }
            }
        };
        return function () {
            dg = this;
            cn = arguments;
            Nu = new Date;
            var bjT = sI && !li;
            if (!li)
                li = setTimeout(ZG, xf);
            if (bjT) {
                bo = gk.apply(dg, cn);
                dg = cn = null
            }
            return bo
        }
    }
        ;
    bn.Nt = function (bh, kr) {
        if (bh) {
            var bh = bh.firstElementChild;
            if (bh) {
                bh.firstElementChild && (bh = bh.firstElementChild);
                bh.setAttribute("xlink:href", "/style/pc/svg/" + kr)
            }
        }
    }
        ;
    bn.btI = function (gl) {
        if (!gl || !gl.length) {
            return
        }
        gl = /^#(.+?)#$/.exec(gl)[1];
        gl = gl.replace(/\s/g, " ");
        bA.cE("/api/act/detail", {
            type: "json",
            method: "post",
            data: bm.eH({
                actname: gl
            }),
            onload: function (bV) {
                if (!bV || bV.code != 200 || !bV.act) {
                    bp.ci.bS({
                        type: 2,
                        tip: "该话题暂未创建"
                    })
                } else {
                    location.dispatch2("/activity?id=" + bV.act.actId)
                }
            },
            onerror: function (dh) {
                bp.ci.bS({
                    type: 2,
                    tip: "操作失败，请稍后再试"
                })
            }
        })
    }
        ;
    bn.bka = function (Nq, zj) {
        if (!Nq || !zj)
            return false;
        if (Nq == zj)
            return true;
        return bn.bka(Nq, zj.parentNode)
    }
        ;
    bb.hB = function (cS, mH) {
        if (!cS)
            return null;
        if (!mH)
            return cS.firstChild;
        return bb.bN(cS, mH)[0]
    }
        ;
    bn.cnL = function (jm) {
        return /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i.test(jm)
    }
        ;
    bn.cnK = function (vY) {
        if (!vY) {
            return "0b"
        }
        var cnJ = ["Bytes", "KB", "MB", "GB"];
        var cq = Math.floor(Math.log(vY) / Math.log(1024));
        return (vY / Math.pow(1024, Math.floor(cq))).toFixed(cq == 1 ? 0 : 1) + cnJ[cq]
    }
})();
(function () {
    function cnI() {
        var BR = function (le) {
            if (le < -128) {
                return BR(128 - (-128 - le))
            } else if (le >= -128 && le <= 127) {
                return le
            } else if (le > 127) {
                return BR(-129 + le - 127)
            } else {
                throw new Error("1001")
            }
        };
        var cnH = function (le, cs) {
            return BR(le + cs)
        };
        var cnE = function (Zj, bkf) {
            if (Zj == null) {
                return null
            }
            if (bkf == null) {
                return Zj
            }
            var rB = [];
            var cnC = bkf.length;
            for (var i = 0, cD = Zj.length; i < cD; i++) {
                rB[i] = cnH(Zj[i], bkf[i % cnC])
            }
            return rB
        };
        var cny = function (Ze) {
            if (Ze == null) {
                return Ze
            }
            var rB = [];
            var cnx = Ze.length;
            for (var i = 0, cD = cnx; i < cD; i++) {
                rB[i] = BR(0 - Ze[i])
            }
            return rB
        };
        var cnw = function (bki, Nn) {
            bki = BR(bki);
            Nn = BR(Nn);
            return BR(bki ^ Nn)
        };
        var buM = function (Nm, bkq) {
            if (Nm == null || bkq == null || Nm.length != bkq.length) {
                return Nm
            }
            var rB = [];
            var cnu = Nm.length;
            for (var i = 0, cD = cnu; i < cD; i++) {
                rB[i] = cnw(Nm[i], bkq[i])
            }
            return rB
        };
        var buX = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
        var cnt = function (eI) {
            var Jm = [];
            Jm.push(buX[eI >>> 4 & 15]);
            Jm.push(buX[eI & 15]);
            return Jm.join("")
        };
        var cns = function (vY) {
            var cD = vY.length;
            if (vY == null || cD < 0) {
                return new String("")
            }
            var Jm = [];
            for (var i = 0; i < cD; i++) {
                Jm.push(cnt(vY[i]))
            }
            return Jm.join("")
        };
        var bvk = function (Yo) {
            if (Yo == null || Yo.length == 0) {
                return Yo
            }
            var bky = new String(Yo);
            var rB = [];
            var cD = bky.length / 2;
            var cs = 0;
            for (var i = 0; i < cD; i++) {
                var pq = parseInt(bky.charAt(cs++), 16) << 4;
                var ql = parseInt(bky.charAt(cs++), 16);
                rB[i] = BR(pq + ql)
            }
            return rB
        };
        var cnr = function (ee) {
            if (ee == null || ee == undefined) {
                return ee
            }
            var MU = encodeURIComponent(ee);
            var vY = [];
            var bvv = MU.length;
            for (var i = 0; i < bvv; i++) {
                if (MU.charAt(i) == "%") {
                    if (i + 2 < bvv) {
                        vY.push(bvk(MU.charAt(++i) + "" + MU.charAt(++i))[0])
                    } else {
                        throw new Error("1009")
                    }
                } else {
                    vY.push(MU.charCodeAt(i))
                }
            }
            return vY
        };
        var cnq = function (wT) {
            var cq = 0;
            cq += (wT[0] & 255) << 24;
            cq += (wT[1] & 255) << 16;
            cq += (wT[2] & 255) << 8;
            cq += wT[3] & 255;
            return cq
        };
        var cun = function (cq) {
            var wT = [];
            wT[0] = cq >>> 24 & 255;
            wT[1] = cq >>> 16 & 255;
            wT[2] = cq >>> 8 & 255;
            wT[3] = cq & 255;
            return wT
        };
        var cnn = function (fh, bkz, cD) {
            var hO = [];
            if (fh == null || fh.length == 0) {
                return hO
            }
            if (fh.length < cD) {
                throw new Error("1003")
            }
            for (var i = 0; i < cD; i++) {
                hO[i] = fh[bkz + i]
            }
            return hO
        };
        var bkA = function (fh, bkz, XL, cnk, cD) {
            if (fh == null || fh.length == 0) {
                return XL
            }
            if (XL == null) {
                throw new Error("1004")
            }
            if (fh.length < cD) {
                throw new Error("1003")
            }
            for (var i = 0; i < cD; i++) {
                XL[cnk + i] = fh[bkz + i]
            }
            return XL
        };
        var cnj = function (cD) {
            var cF = [];
            for (var i = 0; i < cD; i++) {
                cF[i] = 0
            }
            return cF
        };
        var cni = [82, 9, 106, -43, 48, 54, -91, 56, -65, 64, -93, -98, -127, -13, -41, -5, 124, -29, 57, -126, -101, 47, -1, -121, 52, -114, 67, 68, -60, -34, -23, -53, 84, 123, -108, 50, -90, -62, 35, 61, -18, 76, -107, 11, 66, -6, -61, 78, 8, 46, -95, 102, 40, -39, 36, -78, 118, 91, -94, 73, 109, -117, -47, 37, 114, -8, -10, 100, -122, 104, -104, 22, -44, -92, 92, -52, 93, 101, -74, -110, 108, 112, 72, 80, -3, -19, -71, -38, 94, 21, 70, 87, -89, -115, -99, -124, -112, -40, -85, 0, -116, -68, -45, 10, -9, -28, 88, 5, -72, -77, 69, 6, -48, 44, 30, -113, -54, 63, 15, 2, -63, -81, -67, 3, 1, 19, -118, 107, 58, -111, 17, 65, 79, 103, -36, -22, -105, -14, -49, -50, -16, -76, -26, 115, -106, -84, 116, 34, -25, -83, 53, -123, -30, -7, 55, -24, 28, 117, -33, 110, 71, -15, 26, 113, 29, 41, -59, -119, 111, -73, 98, 14, -86, 24, -66, 27, -4, 86, 62, 75, -58, -46, 121, 32, -102, -37, -64, -2, 120, -51, 90, -12, 31, -35, -88, 51, -120, 7, -57, 49, -79, 18, 16, 89, 39, -128, -20, 95, 96, 81, 127, -87, 25, -75, 74, 13, 45, -27, 122, -97, -109, -55, -100, -17, -96, -32, 59, 77, -82, 42, -11, -80, -56, -21, -69, 60, -125, 83, -103, 97, 23, 43, 4, 126, -70, 119, -42, 38, -31, 105, 20, 99, 85, 33, 12, 125];
        var Jh = 64;
        var XD = 64;
        var bwB = 4;
        var cnh = function (rx) {
            var bwK = [];
            if (rx == null || rx == undefined || rx.length == 0) {
                return cnj(XD)
            }
            if (rx.length >= XD) {
                return cnn(rx, 0, XD)
            } else {
                for (var i = 0; i < XD; i++) {
                    bwK[i] = rx[i % rx.length]
                }
            }
            return bwK
        };
        var cng = function (Xu) {
            if (Xu == null || Xu.length % Jh != 0) {
                throw new Error("1005")
            }
            var blf = [];
            var cs = 0;
            var cnf = Xu.length / Jh;
            for (var i = 0; i < cnf; i++) {
                blf[i] = [];
                for (var j = 0; j < Jh; j++) {
                    blf[i][j] = Xu[cs++]
                }
            }
            return blf
        };
        var cnc = function (bxq) {
            var pq = bxq >>> 4 & 15;
            var ql = bxq & 15;
            var cs = pq * 16 + ql;
            return cni[cs]
        };
        var bxw = function (blw) {
            if (blw == null) {
                return null
            }
            var bxB = [];
            for (var i = 0, cD = blw.length; i < cD; i++) {
                bxB[i] = cnc(blw[i])
            }
            return bxB
        };
        var cnb = function (IX, rx) {
            if (IX == null) {
                return null
            }
            if (IX.length == 0) {
                return []
            }
            if (IX.length % Jh != 0) {
                throw new Error("1005")
            }
            rx = cnh(rx);
            var blB = rx;
            var blD = cng(IX);
            var Ml = [];
            var cna = blD.length;
            for (var i = 0; i < cna; i++) {
                var blG = bxw(blD[i]);
                blG = bxw(blG);
                var blI = buM(blG, blB);
                var cmZ = cnE(blI, cny(blB));
                blI = buM(cmZ, rx);
                bkA(blI, 0, Ml, i * Jh, Jh);
                blB = blD[i]
            }
            var byj = [];
            bkA(Ml, Ml.length - bwB, byj, 0, bwB);
            var cD = cnq(byj);
            if (cD > Ml.length) {
                throw new Error("1006")
            }
            var rB = [];
            bkA(Ml, 0, rB, 0, cD);
            return rB
        };
        var cmX = function (Wl, bP) {
            if (Wl == null) {
                return null
            }
            var byD = new String(Wl);
            if (byD.length == 0) {
                return []
            }
            var IX = bvk(byD);
            if (bP == null || bP == undefined) {
                throw new Error("1007")
            }
            var rx = cnr(bP);
            return cnb(IX, rx)
        };
        this.cmW = function (Wl, bP) {
            var cmV = cmX(Wl, bP);
            var blM = new String(cns(cmV));
            var VW = [];
            var cmT = blM.length / 2;
            var cs = 0;
            for (var i = 0; i < cmT; i++) {
                VW.push("%");
                VW.push(blM.charAt(cs++));
                VW.push(blM.charAt(cs++))
            }
            return VW.join("")
        }
    }
    window.settmusic = (new cnI).cmW
})();
(function () {
    var bd = NEJ.P, cz = NEJ.F, bL = bd("nej.ut"), bm = bd("nej.u"), bj = bd("nej.v"), bA = bd("nej.j"), bs = bd("nm.d"), bn = bd("nm.x"), bP = "Search-tracks_", bc;
    bs.gs({
        "search-suggest": {
            url: "/api/search/suggest/web",
            type: "POST",
            format: function (bV) {
                return bV
            },
            onerror: function (bV, bf) {
                if (bV.code == 407) {
                    bf.onForbidden()
                }
            }
        },
        "search-multimatch": {
            url: "/api/search/suggest/multimatch",
            type: "GET"
        },
        "search-list": {
            url: "/api/cloudsearch/get/web",
            type: "post",
            noescape: true,
            filter: function (bf, cl) {
                window.log && window.log("searchkeywordclient", {
                    type: this.cmS(parseInt(bf.data.type)) || "suggest",
                    keyword: bf.data.s,
                    offset: bf.offset
                })
            },
            format: function (bV, bf) {
                if (bV.abroad) {
                    try {
                        bV.result = JSON.parse(decodeURIComponent(settmusic(bV.result, bs.sk)))
                    } catch (e) { }
                }
                bV.result = bV.result || {};
                var bk, dO, lp = [], vh = bf.data.s || "", hA = bf.data.limit, bw = parseInt(bf.data.type) || 1, bo = bV.result;
                switch (bw) {
                    case 1:
                        bk = this.bzg(bo.songs, bf.data.hlpretag, bf.data.hlposttag);
                        dO = bo.songCount;
                        break;
                    case 10:
                        bk = bo.albums;
                        dO = bo.albumCount;
                        break;
                    case 100:
                        bk = bo.artists;
                        dO = bo.artistCount;
                        break;
                    case 1e3:
                        bk = bo.playlists;
                        dO = bo.playlistCount;
                        break;
                    case 1002:
                        bk = bo.userprofiles;
                        dO = bo.userprofileCount;
                        break;
                    case 1004:
                        bk = bo.mvs;
                        dO = bo.mvCount;
                        break;
                    case 1006:
                        bk = this.bzg(bo.songs, bf.data.hlpretag, bf.data.hlposttag);
                        dO = bo.songCount;
                        break;
                    case 1009:
                        var rv = bo.djRadios;
                        if (!!rv) {
                            bm.cr(rv, function (bF, bv, cmQ) {
                                bF.xid = bF.id;
                                bF.id = bF.id + "_rad"
                            });
                            if (rv.length) {
                                this.tZ("radio_search-" + bf.data.s, rv)
                            }
                        }
                        dO = Math.min(bo.djprogramCount, 500);
                        bk = bo.djprograms || [];
                        if (bf.data.isPub) {
                            bm.oj(rv, function (bF, bv, cmQ) {
                                bF.stype = 1;
                                bk.unshift(bF)
                            });
                            dO = Math.min(bk.length, 500)
                        }
                        break
                }
                this.bG("onsearchload", bV);
                if (bk && bk.length) {
                    for (var i = 0; i < hA; i++) {
                        if (i < bk.length) {
                            lp.push(bk[i])
                        } else {
                            lp.push(null)
                        }
                    }
                }
                return {
                    more: !0,
                    total: Math.min(dO || 0, vh.length < 3 ? 500 : 5e3),
                    list: lp
                }
            },
            onerror: function (bV, bf) {
                bf.onload(bf, []);
                if (bm.hF(bf.onerror)) {
                    bf.onerror(bV)
                }
            }
        }
    });
    bs.GN = NEJ.C();
    bc = bs.GN.bT(bs.iR);
    bc.dG = function () {
        this.dM()
    }
        ;
    bc.cmP = function (bP, bf) {
        if (!bP)
            return;
        if (!!this.bzo)
            bA.mx(this.bzo);
        this.bzo = this.dK("search-suggest", NEJ.X({
            data: {
                s: bP,
                limit: 8
            }
        }, bf))
    }
        ;
    bc.cmO = function (bP, bf) {
        if (!bP)
            return;
        this.dK("search-multimatch", NEJ.X({
            data: {
                s: bP
            }
        }, bf))
    }
        ;
    bc.bzg = function () {
        var cmN = function (iH, bzu, bzx) {
            var cmM = iH.match(new RegExp(bzu + "(.+?)" + bzx, "gi"))
                , dB = 0;
            bm.cr(cmM, function (bu) {
                dB += bu.replace(new RegExp(bzu, "g"), "").replace(new RegExp(bzx, "g"), "").length
            });
            return dB
        };
        return function (kp, cmL, cmJ) {
            var bzL = [];
            bm.cr(kp, function (cm, cq) {
                cm = bn.EA(cm);
                var VI = cm.lyrics || [], fB = VI.length, kO = 0, dO = 4, VG = {
                    l: 0,
                    v: 0
                }, bmc;
                if (fB > 4) {
                    bm.cr(VI, function (iH, bv) {
                        var bzS = cmN(iH, cmL, cmJ);
                        if (bzS > VG.v) {
                            VG.v = bzS;
                            VG.l = bv
                        }
                    });
                    kO = VG.l;
                    kO = Math.max(kO, 0);
                    bmc = fB - kO - 4;
                    if (bmc < 0)
                        kO += bmc;
                    cm.lrcAbstractEnd = kO + dO - 1
                } else {
                    cm.lrcAbstractEnd = fB - 1
                }
                cm.lrcAbstractStart = kO;
                cm.indexId = (VI && VI.length ? "L" : "NL") + cm.id;
                bzL.push(cm)
            });
            return bzL
        }
    }();
    bc.cmS = function (bw) {
        switch (bw) {
            case 1:
                return "song";
                break;
            case 100:
                return "artist";
                break;
            case 10:
                return "album";
                break;
            case 1004:
                return "mv";
                break;
            case 1006:
                return "lyric";
                break;
            case 1e3:
                return "list";
                break;
            case 1009:
                return "djradio";
                break;
            case 1002:
                return "user";
                break;
            default:
                return "suggest";
                break
        }
    }
})();
(function () {
    var bd = NEJ.P, bb = bd("nej.e"), bj = bd("nej.v"), bm = bd("nej.u"), bL = bd("nej.ut"), bA = bd("nej.j"), bs = bd("nm.d"), bn = bd("nm.x"), bI = bd("nm.m"), bp = bd("nm.l"), ez = bd("nm.i"), bQ = bd("nm.m.sch"), bc, bO;
    var bmj = {
        songs: 1,
        artists: 100,
        albums: 10,
        playlists: 1e3
    };
    bQ.LO = NEJ.C();
    bc = bQ.LO.bT(bL.dX);
    bc.dG = function (bh) {
        this.dM();
        this.di(bh);
        this.bU = bs.GN.hC()
    }
        ;
    bc.di = function (bh) {
        this.bq = bh;
        var bk = bb.bN(bh, "j-flag");
        this.fW = bk[0];
        this.bmn = bk[1];
        this.dx = bk[2];
        this.oG = bk[3];
        bj.bt(this.fW, "input", this.hk.bi(this));
        bj.bt(this.fW, "keyup", this.hk.bi(this));
        bj.bt(this.fW, "focus", this.hy.bi(this));
        bj.bt(this.bmn, "click", this.hy.bi(this));
        bj.bt(this.fW, "blur", this.bmo.bi(this));
        bj.bt(this.dx, "click", this.UY.bi(this));
        bj.bt(this.bq, "keydown", this.bmp.bi(this));
        bj.bt(this.bq, "keypress", this.UW.bi(this));
        bj.bt(this.oG, "mouseover", this.TF.bi(this));
        bj.bt(this.oG, "mouseout", this.TF.bi(this));
        if (this.fW.value) {
            this.fW.value = ""
        }
        if (this.fW.style.opacity != null) {
            this.fW.style.opacity = 1
        }
    }
        ;
    bc.hk = function (be) {
        if (be.type == "keyup" && be.keyCode == 8 || be.keyCode == 46) {
            this.Dt()
        } else if (be.type == "input" || be.type == "propertychange") {
            setTimeout(this.Dt.bi(this), 0)
        }
    }
        ;
    bc.hy = function () {
        this.yZ(this.bmn, !1);
        bb.bC(this.bq, "m-srch-fcs");
        this.fW.focus();
        this.Dt();
        bb.bC(bb.bN("g-topbar", "j-showoff")[0], "f-hide")
    }
        ;
    bc.bmo = function () {
        if (!this.fW.value) {
            this.yZ(this.bmn, !0)
        }
        var Dv = bb.bN(this.oG, "slt");
        if (this.UQ(this.oG) && Dv.length > 0 && bb.bz(Dv[0], "type")) {
            var kr = Dv[0].href;
            if (/#\/(song|album|artist|playlist)\?id=(\d+)/.test(kr)) {
                window.log("search", {
                    rid: RegExp.$2,
                    type: RegExp.$1,
                    keyword: this.fW.value
                })
            }
            this.bms(Dv[0].href)
        }
        this.yZ(this.oG, !1);
        bb.bB(this.bq, "m-srch-fcs")
    }
        ;
    bc.yZ = function (bh, nb) {
        bb.cf(bh, "display", !nb ? "none" : "")
    }
        ;
    bc.UQ = function (bh) {
        return bb.eE(bh, "display") != "none"
    }
        ;
    bc.Dt = function () {
        var DA = function (vB, eB) {
            if (!eB)
                return;
            return eB.replace(new RegExp(bn.bKC(vB), "gi"), function ($1) {
                return '<span class="s-fc7 f-tdn">' + $1 + "</span>"
            })
        };
        var cmF = function (jm) {
            var il = this.bq.clientWidth > 250 ? 41 : 17;
            if (bn.JA(jm) > il) {
                return bn.Co(jm, il) + "..."
            } else {
                return jm
            }
        };
        var UI = function (bo) {
            return bo.songs && bo.songs.length || bo.albums && bo.albums.length || bo.artists && bo.artists.length || bo.playlists && bo.playlists.length
        };
        var vp = function (vB, be) {
            if (!bn.bKv(this.fW) || bn.kL(this.fW.value)) {
                this.yZ(this.oG, !1);
                return
            }
            be.keyword = bm.fo(vB);
            var fg = bb.dm("m-search-suggest", be, {
                mark: DA.bi(this, vB),
                cutStr: cmF.bi(this)
            })
                , vD = be.result.order;
            this.oG.innerHTML = fg;
            this.yZ(this.oG, UI(be.result) ? !0 : !1);
            if (!!vD && !!vD.length) {
                this.bmA = {
                    keyword: vB,
                    type: bmj[vD[0]]
                }
            }
        };
        var cmD = function () {
            this.yZ(this.oG, !1);
            return
        };
        return function () {
            var bF = this.fW.value;
            if (bn.kL(bF)) {
                this.yZ(this.oG, !1);
                return
            }
            this.bU.cmP(bF, {
                onload: vp.bi(this, bF),
                onForbidden: cmD.bi(this)
            })
        }
    }();
    bc.UW = function (be) {
        if (be.keyCode != 13)
            return;
        var Dv = bb.bN(this.oG, "slt");
        if (this.UQ(this.oG) && Dv.length > 0) {
            this.bms(Dv[0].href);
            this.yZ(this.oG, !1);
            return
        }
        this.UY();
        this.yZ(this.oG, !1)
    }
        ;
    bc.bmp = function (be) {
        if (!this.UQ(this.oG))
            return;
        var bk = bb.bN(this.oG, "xtag")
            , fB = bk.length
            , bv = bm.eu(bk, function (bu) {
                return bb.cN(bu, "slt")
            });
        switch (be.keyCode) {
            case 38:
                if (bv >= 0)
                    bb.bB(bk[bv], "slt");
                bb.bC(bk[bv <= 0 ? fB - 1 : bv - 1], "slt");
                break;
            case 40:
                if (bv >= 0)
                    bb.bB(bk[bv], "slt");
                bb.bC(bk[(bv + 1) % fB], "slt");
                break
        }
    }
        ;
    bc.TF = function (be) {
        if (!this.UQ(this.oG))
            return;
        var Tl, bM = bj.bZ(be), bk = bb.bN(this.oG, "xtag");
        if (bM.tagName.toLowerCase() == "a")
            Tl = bM;
        else if (bM.parentNode.tagName.toLowerCase() == "a")
            Tl = bM.parentNode;
        if (!Tl)
            return;
        bm.cr(bk, function (bu) {
            bb.bB(bu, "slt");
            bb.bz(bu, "type", "")
        });
        if (be.type == "mouseout")
            return;
        bb.bC(Tl, "slt");
        bb.bz(Tl, "type", "mouse")
    }
        ;
    bc.UY = function () {
        var fi = location.hash
            , bv = fi.indexOf("?")
            , cO = bm.jg(fi.substring(bv + 1));
        cO.s = this.fW.value;
        if (bn.kL(cO.s))
            return;
        if (!cO.type && this.bmA && this.bmA.keyword == cO.s) {
            cO.type = this.bmA.type
        }
        this.bms("/search/#/?" + bm.eH(cO));
        this.fW.blur()
    }
        ;
    bc.bms = function (ce) {
        if (location.dispatch2) {
            location.dispatch2(ce)
        } else {
            location.href = ce
        }
    }
        ;
    bQ.LO.cmA = function () {
        var bk = bb.bN(document.body, "j-suggest");
        bm.cr(bk, function (bu) {
            new bQ.LO(bu)
        })
    }
        ;
    bQ.LO.cmA()
})();
(function () {
    var bd = NEJ.P, cz = NEJ.F, bL = bd("nej.ut"), bm = bd("nej.u"), bj = bd("nej.v"), bA = bd("nej.j"), bs = bd("nm.d"), bc;
    bs.gs({
        "mv_artist-list": {
            url: "/api/artist/mvs",
            type: "get",
            format: function (bV) {
                return {
                    total: bV.size || 0,
                    list: bV.mvs || []
                }
            }
        },
        "album_artist-list": {
            url: "/api/artist/albums/{id}",
            type: "get",
            format: function (bV) {
                return {
                    total: bV.size || 0,
                    list: bV.hotAlbums || []
                }
            }
        },
        "ydcailing_post-list": {
            url: "/api/cailing/all",
            type: "POST",
            format: function (bV) {
                return bV.result.songs
            }
        },
        "wo-list": {
            url: "/api/unicom/wo/content",
            format: function (bV, bf) {
                if (bf.offset == 0) {
                    var By = bV.data[0];
                    this.bG("onfirstload", By);
                    bV.data.splice(0, 1);
                    return bV.data
                } else {
                    return bV.data
                }
            }
        }
    });
    bs.DK = NEJ.C();
    bc = bs.DK.bT(bs.iR);
    bc.dG = function () {
        this.dM()
    }
        ;
    bc.SZ = function () {
        var tG = "LOCAL_FLAG";
        return function (bw, cmz) {
            var bl = this.Dk(tG, {});
            if (bl[bw]) {
                return true
            } else {
                if (!cmz) {
                    bl[bw] = true;
                    this.xQ(tG, bl)
                }
                return false
            }
        }
    }()
})();
(function () {
    var bd = NEJ.P, bb = bd("nej.e"), bm = bd("nej.u"), bR = bd("nej.ut"), bmO;
    if (!!bR.rj)
        return;
    bR.rj = NEJ.C();
    bmO = bR.rj.bT(bR.dX);
    bmO.cv = function () {
        var cmw = function (be) {
            be.matched = be.source == be.target
        };
        return function (bf) {
            bf.oncheck = bf.oncheck || cmw;
            this.cw(bf);
            this.dn = bf.list;
            this.jY = bf.dataset || "id";
            this.lD = bf.selected || "js-selected"
        }
    }();
    bmO.ri = function (bF) {
        var bM, be = {
            target: bF
        };
        bm.cr(this.dn, function (bh) {
            delete be.matched;
            be.source = bb.bz(bh, this.jY);
            this.bG("oncheck", be);
            if (!be.matched) {
                bb.bB(bh, this.lD)
            } else {
                bM = bh;
                bb.bC(bh, this.lD)
            }
        }, this);
        return bM
    }
})();
(function () {
    var bd = NEJ.P, cg = NEJ.O, cz = NEJ.F, bb = bd("nej.e"), bR = bd("nej.ut"), qq;
    if (!!bR.eh)
        return;
    bR.eh = NEJ.C();
    qq = bR.eh.bT(bR.dX);
    qq.dG = function () {
        this.kk = {};
        this.dM();
        this.cX()
    }
        ;
    qq.cv = function (bf) {
        this.cw(bf);
        this.bmT = bf.umi || "";
        this.Br = bf.dispatcher;
        this.IE = bf.composite || cg;
        this.bks({
            onshow: this.gF.bi(this),
            onhide: this.mf.bi(this),
            onrefresh: this.fJ.bi(this),
            onmessage: this.th.bi(this),
            onbeforehide: this.cmv.bi(this)
        })
    }
        ;
    qq.cR = function () {
        delete this.bmT;
        this.kk = {};
        this.cW()
    }
        ;
    qq.vU = function (be) {
        if (!!be)
            be.stopped = !0
    }
        ;
    qq.cX = cz;
    qq.gF = cz;
    qq.mf = cz;
    qq.fJ = cz;
    qq.th = cz;
    qq.cmv = cz;
    qq.tj = function (qg, cT, gf) {
        this.Br.bDn({
            to: qg,
            mode: gf || 0,
            data: cT,
            from: this.bmT
        })
    }
        ;
    qq.cup = function (bw, bl) {
        this.Br.Bo(bw, {
            from: this.bmT,
            data: bl
        })
    }
        ;
    qq.cur = function () {
        this.Br.nW.apply(this.Br, arguments)
    }
        ;
    qq.cms = function () {
        return this.kk
    }
        ;
    bb.bci = function () {
        if (!!window.dispatcher) {
            dispatcher.bDx.apply(dispatcher, arguments)
        }
    }
})();
(function () {
    var bd = NEJ.P, cz = NEJ.F, cg = NEJ.O, bb = bd("nej.e"), bm = bd("nej.u"), bR = bd("nej.ut"), Ac;
    if (!!bR.eP)
        return;
    bR.eP = NEJ.C();
    Ac = bR.eP.bT(bR.eh);
    Ac.cmp = function (bf) {
        var cS;
        if (!cS) {
            var bl = bf.input || cg;
            cS = bb.bD(bl.parent)
        }
        if (!cS) {
            var bl = bf.data || cg;
            cS = bb.bD(bl.parent)
        }
        if (!cS) {
            cS = bb.bD(bf.parent)
        }
        return cS
    }
        ;
    Ac.gF = function (bf) {
        var cS = this.cmp(bf);
        if (!!cS && !!this.bq)
            cS.appendChild(this.bq);
        this.ik(bf);
        this.bDG("onshow", bf);
        this.fJ(bf)
    }
        ;
    Ac.fJ = function (bf) {
        this.hr(bf);
        this.bDG("onrefresh", bf)
    }
        ;
    Ac.mf = function () {
        this.mZ();
        this.cml();
        bb.oi(this.bq)
    }
        ;
    Ac.bDK = function () {
        var hx = /^onshow|onrefresh|delay$/;
        return function (dp) {
            return hx.test(dp)
        }
    }();
    Ac.bDQ = cz;
    Ac.bDG = function () {
        var bDR = function (cO, bf, dp, qJ) {
            if (this.bDK(qJ))
                return;
            if (!!cO)
                dp += (dp.indexOf("?") > 1 ? "&" : "?") + cO;
            var eA = this.bDQ(qJ, bf) || {};
            eA.location = bf;
            eA.parent = this.kk[qJ];
            this.Br.jV(dp, {
                input: eA
            })
        };
        return function (bw, bf) {
            if (!bf.nodelay) {
                if (!!this.IE.delay)
                    return;
                var bDT = this.IE[bw] || cg;
                if (bDT.delay)
                    return
            }
            var cO = bm.eH(bf.param) || "";
            if (bw == "onrefresh") {
                bm.fD(this.IE, bDR.bi(this, cO, bf))
            }
            bm.fD(bDT, bDR.bi(this, cO, bf))
        }
    }();
    Ac.cml = function () {
        var Cw = function (dp, qJ) {
            if (!this.bDK(qJ))
                this.Br.cC(dp)
        };
        return function () {
            bm.fD(this.IE, Cw, this);
            bm.fD(this.IE.onshow, Cw, this);
            bm.fD(this.IE.onrefresh, Cw, this)
        }
    }()
})();
(function () {
    var bd = NEJ.P, bb = bd("nej.e"), bj = bd("nej.v"), bL = bd("nej.ut"), bA = bd("nej.j"), bm = bd("nej.u"), bI = bd("nm.m"), bn = bd("nm.x"), bs = bd("nm.d"), bc, bO;
    bI.bce = NEJ.C();
    bc = bI.bce.bT(bL.dX);
    bc.dG = function () {
        this.dM();
        this.bq = bb.bD("g-topbar");
        var bk = bb.bN(this.bq, "j-tflag");
        this.bmX = bk[0];
        this.IA = bk[1];
        this.wf = bk[2];
        this.bEl = bk[3];
        this.bna = bk[4];
        this.cmk = bL.rj.bH({
            list: this.bmX.getElementsByTagName("a"),
            selected: "z-slt",
            dataset: "module"
        });
        this.bnb = bL.rj.bH({
            list: this.bna.getElementsByTagName("a"),
            selected: "z-slt",
            dataset: "module"
        });
        this.df([[this.IA, "click", this.dN.bi(this)], [this.IA, "mouseout", this.bEw.bi(this, 0)], [this.IA, "mouseover", this.bEw.bi(this, 1)]]);
        window.scrollTopbar = this.cmj.bi(this);
        window.matchNav = this.bEy.bi(this);
        window.polling = this.uC.bi(this);
        this.Sc = bs.DK.bH();
        this.cmg();
        this.Iy();
        var cO = bm.jg(location.href.split("?")[1]) || {};
        if (cO.market) {
            bb.bD("topbar-download-link").href = "/download?market=" + cO.market
        }
        var bnf = bb.bN(this.bq, "j-showoff");
        if (bnf && !this.Sc.SZ("newMvSearch")) {
            bb.bB(bnf[0], "f-hide");
            window.setTimeout(function () {
                bb.bC(bnf[0], "f-hide")
            }, 5e3)
        }
    }
        ;
    bc.uC = function (be) {
        var fi = bn.Kb();
        if (!/^\/msg/.test(fi)) {
            var Ix = 0;
            Ix += be.comment;
            Ix += be.forward;
            Ix += be.msg;
            Ix += be.notice;
            if (Ix > 0) {
                this.wf.innerHTML = bb.dm("m-topbar-mesg-count", {
                    count: Ix
                })
            } else {
                this.wf.innerHTML = ""
            }
            var fX = "/at";
            if (be.notice)
                fX = "/notify";
            if (be.comment)
                fX = "/comment";
            if (be.msg > 0)
                fX = "/private";
            if (be.forward > 0)
                fX = "/at";
            this.wf.href = "/msg/#" + fX
        } else {
            this.wf.innerHTML = ""
        }
        var bk = bb.bN(this.bmX, "j-t");
        if (!/^\/friend/.test(fi)) {
            if (bk && bk.length) {
                bb.cf(bk[0], "display", be.event > 0 ? "" : "none")
            }
        } else {
            bb.cf(bk[0], "display", "none")
        }
    }
        ;
    bc.dN = function (be) {
        var bh = bj.bZ(be, "d:action");
        if (bh) {
            switch (bb.bz(bh, "action")) {
                case "login":
                    bj.dz(be);
                    var bw = bb.bz(bh, "type");
                    if (bw) {
                        if (bw == "sina" || bw == "tencent")
                            top.open(bh.href);
                        else
                            top.login(bw == "mobile" ? 0 : 3)
                    } else {
                        top.login()
                    }
                    break;
                case "logout":
                    bj.dz(be);
                    top.logout();
                    break;
                case "viewStore":
                    if (!this.Sc.SZ("storeNew")) {
                        bb.bC(this.bnr, "f-vhide")
                    }
                    break;
                case "viewLevel":
                    if (!this.Sc.SZ("levelNew")) {
                        bb.bC(this.bnt, "f-vhide")
                    }
                    break
            }
        }
    }
        ;
    bc.bEw = function (Bf, be) {
        if (this.bEW) {
            this.bEW.style.display = !Bf ? "none" : ""
        }
    }
        ;
    bc.cmj = function (jO) {
        bb.cf(this.bq, "top", -jO + "px")
    }
        ;
    bc.bEy = function (fX, cmf) {
        this.cmk.ri(fX);
        if (fX == "discover") {
            bb.bC(this.bEl, "f-hide");
            bb.bB(this.bna, "f-hide");
            window.g_topBarHeight = 105;
            this.bnb.ri(cmf)
        } else {
            bb.bB(this.bEl, "f-hide");
            bb.bC(this.bna, "f-hide");
            window.g_topBarHeight = 75
        }
    }
        ;
    bc.cmg = function () {
        var xJ = bb.bD("g_iframe");
        if (!xJ)
            return;
        var hK = xJ.contentWindow.document.getElementById("g_top");
        this.bEy(bb.bz(hK, "module"), bb.bz(hK, "sub"))
    }
        ;
    bc.Iy = function () {
        var eR = GUser || {}
            , cmb = GUserAcc || {};
        if (eR && eR.userId) {
            bb.fG(this.IA, "m-topbar-user-login", NEJ.X(eR, cmb));
            bb.cf(this.wf, "display", "")
        } else {
            this.IA.innerHTML = bb.jQ("m-topbar-user-unlogin");
            this.wf.innerHTML = "";
            var bk = bb.bN(this.bmX, "j-t");
            bb.cf(bk[0], "display", "none");
            bb.cf(this.wf, "display", "none")
        }
        var bk = bb.bN(this.IA, "j-uflag");
        this.bEW = bk[0];
        this.cuv = bk[1];
        this.bnt = bk[2];
        this.bnr = bk[3];
        if (!this.Sc.SZ("storeNew", true)) {
            bb.bB(this.bnr, "f-vhide")
        } else {
            bb.bC(this.bnr, "f-vhide")
        }
        if (!this.Sc.SZ("levelNew", true)) {
            bb.bB(this.bnt, "f-vhide")
        } else {
            bb.bC(this.bnt, "f-vhide")
        }
    }
})();
(function () {
    var bd = NEJ.P, cg = NEJ.O, cz = NEJ.F, bj = bd("nej.v"), bL = bd("nej.ut"), bs = bd("nm.d"), bc, bO;
    bs.gs({
        "polling-get": {
            type: "GET",
            url: "/api/pl/count",
            format: function (bV) {
                bj.bG(bs.wF, "message", bV)
            }
        }
    });
    bs.wF = NEJ.C();
    bc = bs.wF.bT(bs.iR);
    bc.bbi = function () {
        this.dK("polling-get", {})
    }
        ;
    bc.ym = function () {
        var gL;
        return function () {
            if (!!gL)
                return;
            gL = window.setInterval(this.bbi.bi(this), 1e5);
            this.bbi()
        }
    }();
    bL.he.bH({
        event: "message",
        element: bs.wF
    })
})();
var io = "undefined" === typeof module ? {} : module.exports;
(function () {
    (function (exports, global) {
        var io = exports;
        io.version = "0.9.16";
        io.protocol = 1;
        io.transports = [];
        io.j = [];
        io.sockets = {};
        io.connect = function (host, details) {
            var uri = io.util.parseUri(host), uuri, socket;
            if (global && global.location) {
                uri.protocol = uri.protocol || global.location.protocol.slice(0, -1);
                uri.host = uri.host || (global.document ? global.document.domain : global.location.hostname);
                uri.port = uri.port || global.location.port
            }
            uuri = io.util.uniqueUri(uri);
            var options = {
                host: uri.host,
                secure: "https" == uri.protocol,
                port: uri.port || ("https" == uri.protocol ? 443 : 80),
                query: uri.query || ""
            };
            io.util.merge(options, details);
            if (options["force new connection"] || !io.sockets[uuri]) {
                socket = new io.Socket(options)
            }
            if (!options["force new connection"] && socket) {
                io.sockets[uuri] = socket
            }
            socket = socket || io.sockets[uuri];
            return socket.of(uri.path.length > 1 ? uri.path : "")
        }
    })("object" === typeof module ? module.exports : this.io = {}, this);
    (function (exports, global) {
        var util = exports.util = {};
        var re = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
        var parts = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
        util.parseUri = function (str) {
            var m = re.exec(str || "")
                , uri = {}
                , i = 14;
            while (i--) {
                uri[parts[i]] = m[i] || ""
            }
            return uri
        }
            ;
        util.uniqueUri = function (uri) {
            var protocol = uri.protocol
                , host = uri.host
                , port = uri.port;
            if ("document" in global) {
                host = host || document.domain;
                port = port || (protocol == "https" && document.location.protocol !== "https:" ? 443 : document.location.port)
            } else {
                host = host || "localhost";
                if (!port && protocol == "https") {
                    port = 443
                }
            }
            return (protocol || "http") + "://" + host + ":" + (port || 80)
        }
            ;
        util.query = function (base, addition) {
            var query = util.chunkQuery(base || "")
                , components = [];
            util.merge(query, util.chunkQuery(addition || ""));
            for (var part in query) {
                if (query.hasOwnProperty(part)) {
                    components.push(part + "=" + query[part])
                }
            }
            return components.length ? "?" + components.join("&") : ""
        }
            ;
        util.chunkQuery = function (qs) {
            var query = {}, params = qs.split("&"), i = 0, l = params.length, kv;
            for (; i < l; ++i) {
                kv = params[i].split("=");
                if (kv[0]) {
                    query[kv[0]] = kv[1]
                }
            }
            return query
        }
            ;
        var pageLoaded = false;
        util.load = function (fn) {
            if ("document" in global && document.readyState === "complete" || pageLoaded) {
                return fn()
            }
            util.on(global, "load", fn, false)
        }
            ;
        util.on = function (element, event, fn, capture) {
            if (element.attachEvent) {
                element.attachEvent("on" + event, fn)
            } else if (element.addEventListener) {
                element.addEventListener(event, fn, capture)
            }
        }
            ;
        util.request = function (xdomain) {
            if (xdomain && "undefined" != typeof XDomainRequest && !util.ua.hasCORS) {
                return new XDomainRequest
            }
            if ("undefined" != typeof XMLHttpRequest && (!xdomain || util.ua.hasCORS)) {
                return new XMLHttpRequest
            }
            if (!xdomain) {
                try {
                    return new (window[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP")
                } catch (e) { }
            }
            return null
        }
            ;
        if ("undefined" != typeof window) {
            util.load(function () {
                pageLoaded = true
            })
        }
        util.defer = function (fn) {
            if (!util.ua.webkit || "undefined" != typeof importScripts) {
                return fn()
            }
            util.load(function () {
                setTimeout(fn, 100)
            })
        }
            ;
        util.merge = function merge(target, additional, deep, lastseen) {
            var seen = lastseen || [], depth = typeof deep == "undefined" ? 2 : deep, prop;
            for (prop in additional) {
                if (additional.hasOwnProperty(prop) && util.indexOf(seen, prop) < 0) {
                    if (typeof target[prop] !== "object" || !depth) {
                        target[prop] = additional[prop];
                        seen.push(additional[prop])
                    } else {
                        util.merge(target[prop], additional[prop], depth - 1, seen)
                    }
                }
            }
            return target
        }
            ;
        util.mixin = function (ctor, ctor2) {
            util.merge(ctor.prototype, ctor2.prototype)
        }
            ;
        util.inherit = function (ctor, ctor2) {
            function f() { }
            f.prototype = ctor2.prototype;
            ctor.prototype = new f
        }
            ;
        util.isArray = Array.isArray || function (obj) {
            return Object.prototype.toString.call(obj) === "[object Array]"
        }
            ;
        util.intersect = function (arr, arr2) {
            var ret = []
                , longest = arr.length > arr2.length ? arr : arr2
                , shortest = arr.length > arr2.length ? arr2 : arr;
            for (var i = 0, l = shortest.length; i < l; i++) {
                if (~util.indexOf(longest, shortest[i]))
                    ret.push(shortest[i])
            }
            return ret
        }
            ;
        util.indexOf = function (arr, o, i) {
            for (var j = arr.length, i = i < 0 ? i + j < 0 ? 0 : i + j : i || 0; i < j && arr[i] !== o; i++) { }
            return j <= i ? -1 : i
        }
            ;
        util.toArray = function (enu) {
            var arr = [];
            for (var i = 0, l = enu.length; i < l; i++)
                arr.push(enu[i]);
            return arr
        }
            ;
        util.ua = {};
        util.ua.hasCORS = "undefined" != typeof XMLHttpRequest && function () {
            try {
                var a = new XMLHttpRequest
            } catch (e) {
                return false
            }
            return a.withCredentials != undefined
        }();
        util.ua.webkit = "undefined" != typeof navigator && /webkit/i.test(navigator.userAgent);
        util.ua.iDevice = "undefined" != typeof navigator && /iPad|iPhone|iPod/i.test(navigator.userAgent)
    })("undefined" != typeof io ? io : module.exports, this);
    (function (exports, io) {
        exports.EventEmitter = EventEmitter;
        function EventEmitter() { }
        EventEmitter.prototype.on = function (name, fn) {
            if (!this.$events) {
                this.$events = {}
            }
            if (!this.$events[name]) {
                this.$events[name] = fn
            } else if (io.util.isArray(this.$events[name])) {
                this.$events[name].push(fn)
            } else {
                this.$events[name] = [this.$events[name], fn]
            }
            return this
        }
            ;
        EventEmitter.prototype.addListener = EventEmitter.prototype.on;
        EventEmitter.prototype.once = function (name, fn) {
            var self = this;
            function on() {
                self.removeListener(name, on);
                fn.apply(this, arguments)
            }
            on.listener = fn;
            this.on(name, on);
            return this
        }
            ;
        EventEmitter.prototype.removeListener = function (name, fn) {
            if (this.$events && this.$events[name]) {
                var list = this.$events[name];
                if (io.util.isArray(list)) {
                    var pos = -1;
                    for (var i = 0, l = list.length; i < l; i++) {
                        if (list[i] === fn || list[i].listener && list[i].listener === fn) {
                            pos = i;
                            break
                        }
                    }
                    if (pos < 0) {
                        return this
                    }
                    list.splice(pos, 1);
                    if (!list.length) {
                        delete this.$events[name]
                    }
                } else if (list === fn || list.listener && list.listener === fn) {
                    delete this.$events[name]
                }
            }
            return this
        }
            ;
        EventEmitter.prototype.removeAllListeners = function (name) {
            if (name === undefined) {
                this.$events = {};
                return this
            }
            if (this.$events && this.$events[name]) {
                this.$events[name] = null
            }
            return this
        }
            ;
        EventEmitter.prototype.listeners = function (name) {
            if (!this.$events) {
                this.$events = {}
            }
            if (!this.$events[name]) {
                this.$events[name] = []
            }
            if (!io.util.isArray(this.$events[name])) {
                this.$events[name] = [this.$events[name]]
            }
            return this.$events[name]
        }
            ;
        EventEmitter.prototype.emit = function (name) {
            if (!this.$events) {
                return false
            }
            var handler = this.$events[name];
            if (!handler) {
                return false
            }
            var args = Array.prototype.slice.call(arguments, 1);
            if ("function" == typeof handler) {
                handler.apply(this, args)
            } else if (io.util.isArray(handler)) {
                var listeners = handler.slice();
                for (var i = 0, l = listeners.length; i < l; i++) {
                    listeners[i].apply(this, args)
                }
            } else {
                return false
            }
            return true
        }
    })("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    (function (exports, nativeJSON) {
        "use strict";
        if (nativeJSON && nativeJSON.parse) {
            return exports.JSON = {
                parse: nativeJSON.parse,
                stringify: nativeJSON.stringify
            }
        }
        var JSON = exports.JSON = {};
        function f(n) {
            return n < 10 ? "0" + n : n
        }
        function date(d, key) {
            return isFinite(d.valueOf()) ? d.getUTCFullYear() + "-" + f(d.getUTCMonth() + 1) + "-" + f(d.getUTCDate()) + "T" + f(d.getUTCHours()) + ":" + f(d.getUTCMinutes()) + ":" + f(d.getUTCSeconds()) + "Z" : null
        }
        var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, gap, indent, meta = {
            "\b": "\\b",
            "\t": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"
        }, rep;
        function quote(string) {
            escapable.lastIndex = 0;
            return escapable.test(string) ? '"' + string.replace(escapable, function (a) {
                var c = meta[a];
                return typeof c === "string" ? c : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
            }) + '"' : '"' + string + '"'
        }
        function str(key, holder) {
            var i, k, v, length, mind = gap, partial, value = holder[key];
            if (value instanceof Date) {
                value = date(key)
            }
            if (typeof rep === "function") {
                value = rep.call(holder, key, value)
            }
            switch (typeof value) {
                case "string":
                    return quote(value);
                case "number":
                    return isFinite(value) ? String(value) : "null";
                case "boolean":
                case "null":
                    return String(value);
                case "object":
                    if (!value) {
                        return "null"
                    }
                    gap += indent;
                    partial = [];
                    if (Object.prototype.toString.apply(value) === "[object Array]") {
                        length = value.length;
                        for (i = 0; i < length; i += 1) {
                            partial[i] = str(i, value) || "null"
                        }
                        v = partial.length === 0 ? "[]" : gap ? "[\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "]" : "[" + partial.join(",") + "]";
                        gap = mind;
                        return v
                    }
                    if (rep && typeof rep === "object") {
                        length = rep.length;
                        for (i = 0; i < length; i += 1) {
                            if (typeof rep[i] === "string") {
                                k = rep[i];
                                v = str(k, value);
                                if (v) {
                                    partial.push(quote(k) + (gap ? ": " : ":") + v)
                                }
                            }
                        }
                    } else {
                        for (k in value) {
                            if (Object.prototype.hasOwnProperty.call(value, k)) {
                                v = str(k, value);
                                if (v) {
                                    partial.push(quote(k) + (gap ? ": " : ":") + v)
                                }
                            }
                        }
                    }
                    v = partial.length === 0 ? "{}" : gap ? "{\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "}" : "{" + partial.join(",") + "}";
                    gap = mind;
                    return v
            }
        }
        JSON.stringify = function (value, replacer, space) {
            var i;
            gap = "";
            indent = "";
            if (typeof space === "number") {
                for (i = 0; i < space; i += 1) {
                    indent += " "
                }
            } else if (typeof space === "string") {
                indent = space
            }
            rep = replacer;
            if (replacer && typeof replacer !== "function" && (typeof replacer !== "object" || typeof replacer.length !== "number")) {
                throw new Error("JSON.stringify")
            }
            return str("", {
                "": value
            })
        }
            ;
        JSON.parse = function (text, reviver) {
            var j;
            function walk(holder, key) {
                var k, v, value = holder[key];
                if (value && typeof value === "object") {
                    for (k in value) {
                        if (Object.prototype.hasOwnProperty.call(value, k)) {
                            v = walk(value, k);
                            if (v !== undefined) {
                                value[k] = v
                            } else {
                                delete value[k]
                            }
                        }
                    }
                }
                return reviver.call(holder, key, value)
            }
            text = String(text);
            cx.lastIndex = 0;
            if (cx.test(text)) {
                text = text.replace(cx, function (a) {
                    return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
                })
            }
            if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) {
                j = eval("(" + text + ")");
                return typeof reviver === "function" ? walk({
                    "": j
                }, "") : j
            }
            throw new SyntaxError("JSON.parse")
        }
    })("undefined" != typeof io ? io : module.exports, typeof JSON !== "undefined" ? JSON : undefined);
    (function (exports, io) {
        var parser = exports.parser = {};
        var packets = parser.packets = ["disconnect", "connect", "heartbeat", "message", "json", "event", "ack", "error", "noop"];
        var reasons = parser.reasons = ["transport not supported", "client not handshaken", "unauthorized"];
        var advice = parser.advice = ["reconnect"];
        var JSON = io.JSON
            , indexOf = io.util.indexOf;
        parser.encodePacket = function (packet) {
            var type = indexOf(packets, packet.type)
                , id = packet.id || ""
                , endpoint = packet.endpoint || ""
                , ack = packet.ack
                , data = null;
            switch (packet.type) {
                case "error":
                    var reason = packet.reason ? indexOf(reasons, packet.reason) : ""
                        , adv = packet.advice ? indexOf(advice, packet.advice) : "";
                    if (reason !== "" || adv !== "")
                        data = reason + (adv !== "" ? "+" + adv : "");
                    break;
                case "message":
                    if (packet.data !== "")
                        data = packet.data;
                    break;
                case "event":
                    var ev = {
                        name: packet.name
                    };
                    if (packet.args && packet.args.length) {
                        ev.args = packet.args
                    }
                    data = JSON.stringify(ev);
                    break;
                case "json":
                    data = JSON.stringify(packet.data);
                    break;
                case "connect":
                    if (packet.qs)
                        data = packet.qs;
                    break;
                case "ack":
                    data = packet.ackId + (packet.args && packet.args.length ? "+" + JSON.stringify(packet.args) : "");
                    break
            }
            var encoded = [type, id + (ack == "data" ? "+" : ""), endpoint];
            if (data !== null && data !== undefined)
                encoded.push(data);
            return encoded.join(":")
        }
            ;
        parser.encodePayload = function (packets) {
            var decoded = "";
            if (packets.length == 1)
                return packets[0];
            for (var i = 0, l = packets.length; i < l; i++) {
                var packet = packets[i];
                decoded += "�" + packet.length + "�" + packets[i]
            }
            return decoded
        }
            ;
        var regexp = /([^:]+):([0-9]+)?(\+)?:([^:]+)?:?([\s\S]*)?/;
        parser.decodePacket = function (data) {
            var pieces = data.match(regexp);
            if (!pieces)
                return {};
            var id = pieces[2] || ""
                , data = pieces[5] || ""
                , packet = {
                    type: packets[pieces[1]],
                    endpoint: pieces[4] || ""
                };
            if (id) {
                packet.id = id;
                if (pieces[3])
                    packet.ack = "data";
                else
                    packet.ack = true
            }
            switch (packet.type) {
                case "error":
                    var pieces = data.split("+");
                    packet.reason = reasons[pieces[0]] || "";
                    packet.advice = advice[pieces[1]] || "";
                    break;
                case "message":
                    packet.data = data || "";
                    break;
                case "event":
                    try {
                        var opts = JSON.parse(data);
                        packet.name = opts.name;
                        packet.args = opts.args
                    } catch (e) { }
                    packet.args = packet.args || [];
                    break;
                case "json":
                    try {
                        packet.data = JSON.parse(data)
                    } catch (e) { }
                    break;
                case "connect":
                    packet.qs = data || "";
                    break;
                case "ack":
                    var pieces = data.match(/^([0-9]+)(\+)?(.*)/);
                    if (pieces) {
                        packet.ackId = pieces[1];
                        packet.args = [];
                        if (pieces[3]) {
                            try {
                                packet.args = pieces[3] ? JSON.parse(pieces[3]) : []
                            } catch (e) { }
                        }
                    }
                    break;
                case "disconnect":
                case "heartbeat":
                    break
            }
            return packet
        }
            ;
        parser.decodePayload = function (data) {
            if (data.charAt(0) == "�") {
                var ret = [];
                for (var i = 1, length = ""; i < data.length; i++) {
                    if (data.charAt(i) == "�") {
                        ret.push(parser.decodePacket(data.substr(i + 1).substr(0, length)));
                        i += Number(length) + 1;
                        length = ""
                    } else {
                        length += data.charAt(i)
                    }
                }
                return ret
            } else {
                return [parser.decodePacket(data)]
            }
        }
    })("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    (function (exports, io) {
        exports.Transport = Transport;
        function Transport(socket, sessid) {
            this.socket = socket;
            this.sessid = sessid
        }
        io.util.mixin(Transport, io.EventEmitter);
        Transport.prototype.heartbeats = function () {
            return true
        }
            ;
        Transport.prototype.onData = function (data) {
            this.clearCloseTimeout();
            if (this.socket.connected || this.socket.connecting || this.socket.reconnecting) {
                this.setCloseTimeout()
            }
            if (data !== "") {
                var msgs = io.parser.decodePayload(data);
                if (msgs && msgs.length) {
                    for (var i = 0, l = msgs.length; i < l; i++) {
                        this.onPacket(msgs[i])
                    }
                }
            }
            return this
        }
            ;
        Transport.prototype.onPacket = function (packet) {
            this.socket.setHeartbeatTimeout();
            if (packet.type == "heartbeat") {
                return this.onHeartbeat()
            }
            if (packet.type == "connect" && packet.endpoint == "") {
                this.onConnect()
            }
            if (packet.type == "error" && packet.advice == "reconnect") {
                this.isOpen = false
            }
            this.socket.onPacket(packet);
            return this
        }
            ;
        Transport.prototype.setCloseTimeout = function () {
            if (!this.closeTimeout) {
                var self = this;
                this.closeTimeout = setTimeout(function () {
                    self.onDisconnect()
                }, this.socket.closeTimeout)
            }
        }
            ;
        Transport.prototype.onDisconnect = function () {
            if (this.isOpen)
                this.close();
            this.clearTimeouts();
            this.socket.onDisconnect();
            return this
        }
            ;
        Transport.prototype.onConnect = function () {
            this.socket.onConnect();
            return this
        }
            ;
        Transport.prototype.clearCloseTimeout = function () {
            if (this.closeTimeout) {
                clearTimeout(this.closeTimeout);
                this.closeTimeout = null
            }
        }
            ;
        Transport.prototype.clearTimeouts = function () {
            this.clearCloseTimeout();
            if (this.reopenTimeout) {
                clearTimeout(this.reopenTimeout)
            }
        }
            ;
        Transport.prototype.packet = function (packet) {
            this.send(io.parser.encodePacket(packet))
        }
            ;
        Transport.prototype.onHeartbeat = function (heartbeat) {
            this.packet({
                type: "heartbeat"
            })
        }
            ;
        Transport.prototype.onOpen = function () {
            this.isOpen = true;
            this.clearCloseTimeout();
            this.socket.onOpen()
        }
            ;
        Transport.prototype.onClose = function () {
            var self = this;
            this.isOpen = false;
            this.socket.onClose();
            this.onDisconnect()
        }
            ;
        Transport.prototype.prepareUrl = function () {
            var options = this.socket.options;
            return this.scheme() + "://" + options.host + ":" + options.port + "/" + options.resource + "/" + io.protocol + "/" + this.name + "/" + this.sessid
        }
            ;
        Transport.prototype.ready = function (socket, fn) {
            fn.call(this)
        }
    })("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    (function (exports, io, global) {
        exports.Socket = Socket;
        function Socket(options) {
            this.options = {
                port: 80,
                secure: false,
                document: "document" in global ? document : false,
                resource: "socket.io",
                transports: io.transports,
                "connect timeout": 1e4,
                "try multiple transports": true,
                reconnect: true,
                "reconnection delay": 500,
                "reconnection limit": Infinity,
                "reopen delay": 3e3,
                "max reconnection attempts": 10,
                "sync disconnect on unload": false,
                "auto connect": true,
                "flash policy port": 10843,
                manualFlush: false
            };
            io.util.merge(this.options, options);
            this.connected = false;
            this.open = false;
            this.connecting = false;
            this.reconnecting = false;
            this.namespaces = {};
            this.buffer = [];
            this.doBuffer = false;
            if (this.options["sync disconnect on unload"] && (!this.isXDomain() || io.util.ua.hasCORS)) {
                var self = this;
                io.util.on(global, "beforeunload", function () {
                    self.disconnectSync()
                }, false)
            }
            if (this.options["auto connect"]) {
                this.connect()
            }
        }
        io.util.mixin(Socket, io.EventEmitter);
        Socket.prototype.of = function (name) {
            if (!this.namespaces[name]) {
                this.namespaces[name] = new io.SocketNamespace(this, name);
                if (name !== "") {
                    this.namespaces[name].packet({
                        type: "connect"
                    })
                }
            }
            return this.namespaces[name]
        }
            ;
        Socket.prototype.publish = function () {
            this.emit.apply(this, arguments);
            var nsp;
            for (var i in this.namespaces) {
                if (this.namespaces.hasOwnProperty(i)) {
                    nsp = this.of(i);
                    nsp.$emit.apply(nsp, arguments)
                }
            }
        }
            ;
        function empty() { }
        Socket.prototype.handshake = function (fn) {
            var self = this
                , options = this.options;
            function complete(data) {
                if (data instanceof Error) {
                    self.connecting = false;
                    self.onError(data.message)
                } else {
                    fn.apply(null, data.split(":"))
                }
            }
            var url = ["http" + (options.secure ? "s" : "") + ":/", options.host + ":" + options.port, options.resource, io.protocol, io.util.query(this.options.query, "t=" + +(new Date))].join("/");
            if (this.isXDomain() && !io.util.ua.hasCORS) {
                var insertAt = document.getElementsByTagName("script")[0]
                    , script = document.createElement("script");
                script.src = url + "&jsonp=" + io.j.length;
                insertAt.parentNode.insertBefore(script, insertAt);
                io.j.push(function (data) {
                    complete(data);
                    script.parentNode.removeChild(script)
                })
            } else {
                var xhr = io.util.request();
                xhr.open("GET", url, true);
                if (this.isXDomain()) {
                    xhr.withCredentials = true
                }
                xhr.onreadystatechange = function () {
                    if (xhr.readyState == 4) {
                        xhr.onreadystatechange = empty;
                        if (xhr.status == 200) {
                            complete(xhr.responseText)
                        } else if (xhr.status == 403) {
                            self.onError(xhr.responseText)
                        } else {
                            self.connecting = false;
                            !self.reconnecting && self.onError(xhr.responseText)
                        }
                    }
                }
                    ;
                xhr.send(null)
            }
        }
            ;
        Socket.prototype.getTransport = function (override) {
            var transports = override || this.transports, match;
            for (var i = 0, transport; transport = transports[i]; i++) {
                if (io.Transport[transport] && io.Transport[transport].check(this) && (!this.isXDomain() || io.Transport[transport].xdomainCheck(this))) {
                    return new io.Transport[transport](this, this.sessionid)
                }
            }
            return null
        }
            ;
        Socket.prototype.connect = function (fn) {
            if (this.connecting && this.transports != "jsonp-polling") {
                return this
            }
            var self = this;
            self.connecting = true;
            this.handshake(function (sid, heartbeat, close, transports) {
                self.sessionid = sid;
                self.closeTimeout = close * 1e3;
                self.heartbeatTimeout = heartbeat * 1e3;
                var check = function () {
                    return "WebSocket" in global && !("__addTask" in WebSocket) || "MozWebSocket" in global
                };
                if (!check()) {
                    transports = "jsonp-polling"
                }
                if (!self.transports)
                    self.transports = self.origTransports = transports ? io.util.intersect(transports.split(","), self.options.transports) : self.options.transports;
                self.setHeartbeatTimeout();
                function connect(transports) {
                    if (self.transport)
                        self.transport.clearTimeouts();
                    self.transport = self.getTransport(transports);
                    if (!self.transport)
                        return self.publish("connect_failed");
                    self.transport.ready(self, function () {
                        self.connecting = true;
                        self.publish("connecting", self.transport.name);
                        self.transport.open();
                        if (self.options["connect timeout"]) {
                            self.connectTimeoutTimer = setTimeout(function () {
                                if (!self.connected) {
                                    self.connecting = false;
                                    if (self.options["try multiple transports"]) {
                                        var remaining = self.transports;
                                        while (remaining.length > 0 && remaining.splice(0, 1)[0] != self.transport.name) { }
                                        if (remaining.length) {
                                            connect(remaining)
                                        } else {
                                            self.publish("connect_failed")
                                        }
                                    }
                                }
                            }, self.options["connect timeout"])
                        }
                    })
                }
                connect(self.transports);
                self.once("connect", function () {
                    clearTimeout(self.connectTimeoutTimer);
                    fn && typeof fn == "function" && fn()
                })
            });
            return this
        }
            ;
        Socket.prototype.setHeartbeatTimeout = function () {
            clearTimeout(this.heartbeatTimeoutTimer);
            if (this.transport && !this.transport.heartbeats())
                return;
            var self = this;
            this.heartbeatTimeoutTimer = setTimeout(function () {
                self.transport.onClose()
            }, this.heartbeatTimeout)
        }
            ;
        Socket.prototype.packet = function (data) {
            if (this.connected && !this.doBuffer) {
                this.transport.packet(data)
            } else {
                this.buffer.push(data)
            }
            return this
        }
            ;
        Socket.prototype.setBuffer = function (v) {
            this.doBuffer = v;
            if (!v && this.connected && this.buffer.length) {
                if (!this.options["manualFlush"]) {
                    this.flushBuffer()
                }
            }
        }
            ;
        Socket.prototype.flushBuffer = function () {
            this.transport.payload(this.buffer);
            this.buffer = []
        }
            ;
        Socket.prototype.disconnect = function () {
            if (this.connected || this.connecting) {
                if (this.open) {
                    this.of("").packet({
                        type: "disconnect"
                    })
                }
                this.onDisconnect("booted")
            }
            return this
        }
            ;
        Socket.prototype.disconnectSync = function () {
            var xhr = io.util.request();
            var uri = ["http" + (this.options.secure ? "s" : "") + ":/", this.options.host + ":" + this.options.port, this.options.resource, io.protocol, "", this.sessionid].join("/") + "/?disconnect=1";
            xhr.open("GET", uri, false);
            xhr.send(null);
            this.onDisconnect("booted")
        }
            ;
        Socket.prototype.isXDomain = function () {
            var port = global.location.port || ("https:" == global.location.protocol ? 443 : 80);
            return this.options.host !== global.location.hostname || this.options.port != port
        }
            ;
        Socket.prototype.onConnect = function () {
            if (!this.connected) {
                this.connected = true;
                this.connecting = false;
                if (!this.doBuffer) {
                    this.setBuffer(false)
                }
                this.emit("connect")
            }
        }
            ;
        Socket.prototype.onOpen = function () {
            this.open = true
        }
            ;
        Socket.prototype.onClose = function () {
            this.open = false;
            clearTimeout(this.heartbeatTimeoutTimer)
        }
            ;
        Socket.prototype.onPacket = function (packet) {
            this.of(packet.endpoint).onPacket(packet)
        }
            ;
        Socket.prototype.onError = function (err) {
            if (err && err.advice) {
                if (err.advice === "reconnect" && (this.connected || this.connecting)) {
                    this.disconnect();
                    if (this.options.reconnect) {
                        this.reconnect()
                    }
                }
            }
            this.publish("error", err && err.reason ? err.reason : err)
        }
            ;
        Socket.prototype.onDisconnect = function (reason) {
            var wasConnected = this.connected
                , wasConnecting = this.connecting;
            this.connected = false;
            this.connecting = false;
            this.open = false;
            if (wasConnected || wasConnecting) {
                this.transport.close();
                this.transport.clearTimeouts();
                if (wasConnected) {
                    this.publish("disconnect", reason);
                    if ("booted" != reason && this.options.reconnect && !this.reconnecting) {
                        this.reconnect()
                    }
                }
            }
        }
            ;
        Socket.prototype.reconnect = function () {
            this.reconnecting = true;
            this.reconnectionAttempts = 0;
            this.reconnectionDelay = this.options["reconnection delay"];
            var self = this
                , maxAttempts = this.options["max reconnection attempts"]
                , tryMultiple = this.options["try multiple transports"]
                , limit = this.options["reconnection limit"];
            function reset() {
                if (self.connected) {
                    for (var i in self.namespaces) {
                        if (self.namespaces.hasOwnProperty(i) && "" !== i) {
                            self.namespaces[i].packet({
                                type: "connect"
                            })
                        }
                    }
                    self.publish("reconnect", self.transport.name, self.reconnectionAttempts)
                }
                clearTimeout(self.reconnectionTimer);
                self.removeListener("connect_failed", maybeReconnect);
                self.removeListener("connect", maybeReconnect);
                self.reconnecting = false;
                delete self.reconnectionAttempts;
                delete self.reconnectionDelay;
                delete self.reconnectionTimer;
                delete self.redoTransports;
                self.options["try multiple transports"] = tryMultiple
            }
            function maybeReconnect() {
                if (!self.reconnecting) {
                    return
                }
                if (self.connected) {
                    return reset()
                }
                if (self.connecting && self.reconnecting && self.transports != "jsonp-polling") {
                    return self.reconnectionTimer = setTimeout(maybeReconnect, 1e3)
                }
                if (self.reconnectionAttempts++ >= maxAttempts) {
                    if (!self.redoTransports) {
                        self.on("connect_failed", maybeReconnect);
                        self.options["try multiple transports"] = true;
                        self.transports = self.origTransports;
                        self.transport = self.getTransport();
                        self.redoTransports = true;
                        self.connect()
                    } else {
                        self.publish("reconnect_failed");
                        reset()
                    }
                } else {
                    if (self.reconnectionDelay < limit) {
                        self.reconnectionDelay *= 2
                    }
                    self.connect();
                    self.publish("reconnecting", self.reconnectionDelay, self.reconnectionAttempts);
                    self.reconnectionTimer = setTimeout(maybeReconnect, self.reconnectionDelay)
                }
            }
            this.options["try multiple transports"] = false;
            this.reconnectionTimer = setTimeout(maybeReconnect, this.reconnectionDelay);
            this.on("connect", maybeReconnect)
        }
    })("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
    (function (exports, io) {
        exports.SocketNamespace = SocketNamespace;
        function SocketNamespace(socket, name) {
            this.socket = socket;
            this.name = name || "";
            this.flags = {};
            this.json = new Flag(this, "json");
            this.ackPackets = 0;
            this.acks = {}
        }
        io.util.mixin(SocketNamespace, io.EventEmitter);
        SocketNamespace.prototype.$emit = io.EventEmitter.prototype.emit;
        SocketNamespace.prototype.of = function () {
            return this.socket.of.apply(this.socket, arguments)
        }
            ;
        SocketNamespace.prototype.packet = function (packet) {
            packet.endpoint = this.name;
            this.socket.packet(packet);
            this.flags = {};
            return this
        }
            ;
        SocketNamespace.prototype.send = function (data, fn) {
            var packet = {
                type: this.flags.json ? "json" : "message",
                data: data
            };
            if ("function" == typeof fn) {
                packet.id = ++this.ackPackets;
                packet.ack = true;
                this.acks[packet.id] = fn
            }
            return this.packet(packet)
        }
            ;
        SocketNamespace.prototype.emit = function (name) {
            var args = Array.prototype.slice.call(arguments, 1)
                , lastArg = args[args.length - 1]
                , packet = {
                    type: "event",
                    name: name
                };
            if ("function" == typeof lastArg) {
                packet.id = ++this.ackPackets;
                packet.ack = "data";
                this.acks[packet.id] = lastArg;
                args = args.slice(0, args.length - 1)
            }
            packet.args = args;
            return this.packet(packet)
        }
            ;
        SocketNamespace.prototype.disconnect = function () {
            if (this.name === "") {
                this.socket.disconnect()
            } else {
                this.packet({
                    type: "disconnect"
                });
                this.$emit("disconnect")
            }
            return this
        }
            ;
        SocketNamespace.prototype.onPacket = function (packet) {
            var self = this;
            function ack() {
                self.packet({
                    type: "ack",
                    args: io.util.toArray(arguments),
                    ackId: packet.id
                })
            }
            switch (packet.type) {
                case "connect":
                    this.$emit("connect");
                    break;
                case "disconnect":
                    if (this.name === "") {
                        this.socket.onDisconnect(packet.reason || "booted")
                    } else {
                        this.$emit("disconnect", packet.reason)
                    }
                    break;
                case "message":
                case "json":
                    var params = ["message", packet.data];
                    if (packet.ack == "data") {
                        params.push(ack)
                    } else if (packet.ack) {
                        this.packet({
                            type: "ack",
                            ackId: packet.id
                        })
                    }
                    this.$emit.apply(this, params);
                    break;
                case "event":
                    var params = [packet.name].concat(packet.args);
                    if (packet.ack == "data")
                        params.push(ack);
                    this.$emit.apply(this, params);
                    break;
                case "ack":
                    if (this.acks[packet.ackId]) {
                        this.acks[packet.ackId].apply(this, packet.args);
                        delete this.acks[packet.ackId]
                    }
                    break;
                case "error":
                    if (packet.advice) {
                        this.socket.onError(packet)
                    } else {
                        if (packet.reason == "unauthorized") {
                            this.$emit("connect_failed", packet.reason)
                        } else {
                            this.$emit("error", packet.reason)
                        }
                    }
                    break
            }
        }
            ;
        function Flag(nsp, name) {
            this.namespace = nsp;
            this.name = name
        }
        Flag.prototype.send = function () {
            this.namespace.flags[this.name] = true;
            this.namespace.send.apply(this.namespace, arguments)
        }
            ;
        Flag.prototype.emit = function () {
            this.namespace.flags[this.name] = true;
            this.namespace.emit.apply(this.namespace, arguments)
        }
    })("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    (function (exports, io, global) {
        exports.websocket = WS;
        function WS(socket) {
            io.Transport.apply(this, arguments)
        }
        io.util.inherit(WS, io.Transport);
        WS.prototype.name = "websocket";
        WS.prototype.open = function () {
            var query = io.util.query(this.socket.options.query), self = this, Socket;
            if (!Socket) {
                Socket = global.MozWebSocket || global.WebSocket
            }
            this.websocket = new Socket(this.prepareUrl() + query);
            this.websocket.onopen = function () {
                self.onOpen();
                self.socket.setBuffer(false)
            }
                ;
            this.websocket.onmessage = function (ev) {
                self.onData(ev.data)
            }
                ;
            this.websocket.onclose = function () {
                self.onClose();
                self.socket.setBuffer(true)
            }
                ;
            this.websocket.onerror = function (e) {
                self.onError(e)
            }
                ;
            return this
        }
            ;
        if (io.util.ua.iDevice) {
            WS.prototype.send = function (data) {
                var self = this;
                setTimeout(function () {
                    self.websocket.send(data)
                }, 0);
                return this
            }
        } else {
            WS.prototype.send = function (data) {
                this.websocket.send(data);
                return this
            }
        }
        WS.prototype.payload = function (arr) {
            for (var i = 0, l = arr.length; i < l; i++) {
                this.packet(arr[i])
            }
            return this
        }
            ;
        WS.prototype.close = function () {
            this.websocket.close();
            return this
        }
            ;
        WS.prototype.onError = function (e) {
            this.socket.onError(e)
        }
            ;
        WS.prototype.scheme = function () {
            return this.socket.options.secure ? "wss" : "ws"
        }
            ;
        WS.check = function () {
            return "WebSocket" in global && !("__addTask" in WebSocket) || "MozWebSocket" in global
        }
            ;
        WS.xdomainCheck = function () {
            return true
        }
            ;
        io.transports.push("websocket")
    })("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
    (function (exports, io) {
        exports.flashsocket = Flashsocket;
        function Flashsocket() {
            io.Transport.websocket.apply(this, arguments)
        }
        io.util.inherit(Flashsocket, io.Transport.websocket);
        Flashsocket.prototype.name = "flashsocket";
        Flashsocket.prototype.open = function () {
            var self = this
                , args = arguments;
            WebSocket.bbe(function () {
                io.Transport.websocket.prototype.open.apply(self, args)
            });
            return this
        }
            ;
        Flashsocket.prototype.send = function () {
            var self = this
                , args = arguments;
            WebSocket.bbe(function () {
                io.Transport.websocket.prototype.send.apply(self, args)
            });
            return this
        }
            ;
        Flashsocket.prototype.close = function () {
            WebSocket.Ri.length = 0;
            io.Transport.websocket.prototype.close.call(this);
            return this
        }
            ;
        Flashsocket.prototype.ready = function (socket, fn) {
            function init() {
                var options = socket.options
                    , port = options["flash policy port"]
                    , path = ["http" + (options.secure ? "s" : "") + ":/", options.host + ":" + options.port, options.resource, "static/flashsocket", "WebSocketMain" + (socket.isXDomain() ? "Insecure" : "") + ".swf"];
                if (!Flashsocket.loaded) {
                    if (typeof WEB_SOCKET_SWF_LOCATION === "undefined") {
                        WEB_SOCKET_SWF_LOCATION = path.join("/")
                    }
                    if (port !== 843) {
                        WebSocket.loadFlashPolicyFile("xmlsocket://" + options.host + ":" + port)
                    }
                    WebSocket.bnA();
                    Flashsocket.loaded = true
                }
                fn.call(self)
            }
            var self = this;
            if (document.body)
                return init();
            io.util.load(init)
        }
            ;
        Flashsocket.check = function () {
            if (typeof WebSocket == "undefined" || !("__initialize" in WebSocket) || !swfobject)
                return false;
            return swfobject.getFlashPlayerVersion().major >= 10
        }
            ;
        Flashsocket.xdomainCheck = function () {
            return true
        }
            ;
        if (typeof window != "undefined") {
            WEB_SOCKET_DISABLE_AUTO_INITIALIZATION = true
        }
        io.transports.push("flashsocket")
    })("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    if ("undefined" != typeof window) {
        var swfobject = function () {
            var D = "undefined", r = "object", S = "Shockwave Flash", W = "ShockwaveFlash.ShockwaveFlash", q = "application/x-shockwave-flash", R = "SWFObjectExprInst", x = "onreadystatechange", O = window, j = document, t = navigator, T = false, U = [h], o = [], N = [], I = [], l, Q, E, B, J = false, a = false, n, G, m = true, M = function () {
                var aa = typeof j.getElementById != D && typeof j.getElementsByTagName != D && typeof j.createElement != D
                    , ah = t.userAgent.toLowerCase()
                    , Y = t.platform.toLowerCase()
                    , ae = Y ? /win/.test(Y) : /win/.test(ah)
                    , ac = Y ? /mac/.test(Y) : /mac/.test(ah)
                    , af = /webkit/.test(ah) ? parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : false
                    , X = !+"1"
                    , ag = [0, 0, 0]
                    , ab = null;
                if (typeof t.plugins != D && typeof t.plugins[S] == r) {
                    ab = t.plugins[S].description;
                    if (ab && !(typeof t.mimeTypes != D && t.mimeTypes[q] && !t.mimeTypes[q].enabledPlugin)) {
                        T = true;
                        X = false;
                        ab = ab.replace(/^.*\s+(\S+\s+\S+$)/, "$1");
                        ag[0] = parseInt(ab.replace(/^(.*)\..*$/, "$1"), 10);
                        ag[1] = parseInt(ab.replace(/^.*\.(.*)\s.*$/, "$1"), 10);
                        ag[2] = /[a-zA-Z]/.test(ab) ? parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0
                    }
                } else {
                    if (typeof O[["Active"].concat("Object").join("X")] != D) {
                        try {
                            var ad = new (window[["Active"].concat("Object").join("X")])(W);
                            if (ad) {
                                ab = ad.GetVariable("$version");
                                if (ab) {
                                    X = true;
                                    ab = ab.split(" ")[1].split(",");
                                    ag = [parseInt(ab[0], 10), parseInt(ab[1], 10), parseInt(ab[2], 10)]
                                }
                            }
                        } catch (Z) { }
                    }
                }
                return {
                    w3: aa,
                    pv: ag,
                    wk: af,
                    ie: X,
                    win: ae,
                    mac: ac
                }
            }(), k = function () {
                if (!M.w3) {
                    return
                }
                if (typeof j.readyState != D && j.readyState == "complete" || typeof j.readyState == D && (j.getElementsByTagName("body")[0] || j.body)) {
                    f()
                }
                if (!J) {
                    if (typeof j.addEventListener != D) {
                        j.addEventListener("DOMContentLoaded", f, false)
                    }
                    if (M.ie && M.win) {
                        j.attachEvent(x, function () {
                            if (j.readyState == "complete") {
                                j.detachEvent(x, arguments.callee);
                                f()
                            }
                        });
                        if (O == top) {
                            (function () {
                                if (J) {
                                    return
                                }
                                try {
                                    j.documentElement.doScroll("left")
                                } catch (X) {
                                    setTimeout(arguments.callee, 0);
                                    return
                                }
                                f()
                            })()
                        }
                    }
                    if (M.wk) {
                        (function () {
                            if (J) {
                                return
                            }
                            if (!/loaded|complete/.test(j.readyState)) {
                                setTimeout(arguments.callee, 0);
                                return
                            }
                            f()
                        })()
                    }
                    s(f)
                }
            }();
            function f() {
                if (J) {
                    return
                }
                try {
                    var Z = j.getElementsByTagName("body")[0].appendChild(C("span"));
                    Z.parentNode.removeChild(Z)
                } catch (aa) {
                    return
                }
                J = true;
                var X = U.length;
                for (var Y = 0; Y < X; Y++) {
                    U[Y]()
                }
            }
            function K(X) {
                if (J) {
                    X()
                } else {
                    U[U.length] = X
                }
            }
            function s(Y) {
                if (typeof O.addEventListener != D) {
                    O.addEventListener("load", Y, false)
                } else {
                    if (typeof j.addEventListener != D) {
                        j.addEventListener("load", Y, false)
                    } else {
                        if (typeof O.attachEvent != D) {
                            i(O, "onload", Y)
                        } else {
                            if (typeof O.onload == "function") {
                                var X = O.onload;
                                O.onload = function () {
                                    X();
                                    Y()
                                }
                            } else {
                                O.onload = Y
                            }
                        }
                    }
                }
            }
            function h() {
                if (T) {
                    V()
                } else {
                    H()
                }
            }
            function V() {
                var X = j.getElementsByTagName("body")[0];
                var aa = C(r);
                aa.setAttribute("type", q);
                aa.style.visibility = "hidden";
                var Z = X.appendChild(aa);
                if (Z) {
                    var Y = 0;
                    (function () {
                        if (typeof Z.GetVariable != D) {
                            var ab = Z.GetVariable("$version");
                            if (ab) {
                                ab = ab.split(" ")[1].split(",");
                                M.pv = [parseInt(ab[0], 10), parseInt(ab[1], 10), parseInt(ab[2], 10)]
                            }
                        } else {
                            if (Y < 10) {
                                Y++;
                                setTimeout(arguments.callee, 10);
                                return
                            }
                        }
                        X.removeChild(aa);
                        Z = null;
                        H()
                    })()
                } else {
                    H()
                }
            }
            function H() {
                var ag = o.length;
                if (ag > 0) {
                    for (var af = 0; af < ag; af++) {
                        var Y = o[af].id;
                        var ab = o[af].callbackFn;
                        var aa = {
                            success: false,
                            id: Y
                        };
                        if (M.pv[0] > 0) {
                            var ae = c(Y);
                            if (ae) {
                                if (F(o[af].swfVersion) && !(M.wk && M.wk < 312)) {
                                    w(Y, true);
                                    if (ab) {
                                        aa.success = true;
                                        aa.ref = z(Y);
                                        ab(aa)
                                    }
                                } else {
                                    if (o[af].expressInstall && A()) {
                                        var ai = {};
                                        ai.data = o[af].expressInstall;
                                        ai.width = ae.getAttribute("width") || "0";
                                        ai.height = ae.getAttribute("height") || "0";
                                        if (ae.getAttribute("class")) {
                                            ai.styleclass = ae.getAttribute("class")
                                        }
                                        if (ae.getAttribute("align")) {
                                            ai.align = ae.getAttribute("align")
                                        }
                                        var ah = {};
                                        var X = ae.getElementsByTagName("param");
                                        var ac = X.length;
                                        for (var ad = 0; ad < ac; ad++) {
                                            if (X[ad].getAttribute("name").toLowerCase() != "movie") {
                                                ah[X[ad].getAttribute("name")] = X[ad].getAttribute("value")
                                            }
                                        }
                                        P(ai, ah, Y, ab)
                                    } else {
                                        p(ae);
                                        if (ab) {
                                            ab(aa)
                                        }
                                    }
                                }
                            }
                        } else {
                            w(Y, true);
                            if (ab) {
                                var Z = z(Y);
                                if (Z && typeof Z.SetVariable != D) {
                                    aa.success = true;
                                    aa.ref = Z
                                }
                                ab(aa)
                            }
                        }
                    }
                }
            }
            function z(aa) {
                var X = null;
                var Y = c(aa);
                if (Y && Y.nodeName == "OBJECT") {
                    if (typeof Y.SetVariable != D) {
                        X = Y
                    } else {
                        var Z = Y.getElementsByTagName(r)[0];
                        if (Z) {
                            X = Z
                        }
                    }
                }
                return X
            }
            function A() {
                return !a && F("6.0.65") && (M.win || M.mac) && !(M.wk && M.wk < 312)
            }
            function P(aa, ab, X, Z) {
                a = true;
                E = Z || null;
                B = {
                    success: false,
                    id: X
                };
                var ae = c(X);
                if (ae) {
                    if (ae.nodeName == "OBJECT") {
                        l = g(ae);
                        Q = null
                    } else {
                        l = ae;
                        Q = X
                    }
                    aa.id = R;
                    if (typeof aa.width == D || !/%$/.test(aa.width) && parseInt(aa.width, 10) < 310) {
                        aa.width = "310"
                    }
                    if (typeof aa.height == D || !/%$/.test(aa.height) && parseInt(aa.height, 10) < 137) {
                        aa.height = "137"
                    }
                    j.title = j.title.slice(0, 47) + " - Flash Player Installation";
                    var ad = M.ie && M.win ? ["Active"].concat("").join("X") : "PlugIn"
                        , ac = "MMredirectURL=" + O.location.toString().replace(/&/g, "%26") + "&MMplayerType=" + ad + "&MMdoctitle=" + j.title;
                    if (typeof ab.flashvars != D) {
                        ab.flashvars += "&" + ac
                    } else {
                        ab.flashvars = ac
                    }
                    if (M.ie && M.win && ae.readyState != 4) {
                        var Y = C("div");
                        X += "SWFObjectNew";
                        Y.setAttribute("id", X);
                        ae.parentNode.insertBefore(Y, ae);
                        ae.style.display = "none";
                        (function () {
                            if (ae.readyState == 4) {
                                ae.parentNode.removeChild(ae)
                            } else {
                                setTimeout(arguments.callee, 10)
                            }
                        })()
                    }
                    u(aa, ab, X)
                }
            }
            function p(Y) {
                if (M.ie && M.win && Y.readyState != 4) {
                    var X = C("div");
                    Y.parentNode.insertBefore(X, Y);
                    X.parentNode.replaceChild(g(Y), X);
                    Y.style.display = "none";
                    (function () {
                        if (Y.readyState == 4) {
                            Y.parentNode.removeChild(Y)
                        } else {
                            setTimeout(arguments.callee, 10)
                        }
                    })()
                } else {
                    Y.parentNode.replaceChild(g(Y), Y)
                }
            }
            function g(ab) {
                var aa = C("div");
                if (M.win && M.ie) {
                    aa.innerHTML = ab.innerHTML
                } else {
                    var Y = ab.getElementsByTagName(r)[0];
                    if (Y) {
                        var ad = Y.childNodes;
                        if (ad) {
                            var X = ad.length;
                            for (var Z = 0; Z < X; Z++) {
                                if (!(ad[Z].nodeType == 1 && ad[Z].nodeName == "PARAM") && !(ad[Z].nodeType == 8)) {
                                    aa.appendChild(ad[Z].cloneNode(true))
                                }
                            }
                        }
                    }
                }
                return aa
            }
            function u(ai, ag, Y) {
                var X, aa = c(Y);
                if (M.wk && M.wk < 312) {
                    return X
                }
                if (aa) {
                    if (typeof ai.id == D) {
                        ai.id = Y
                    }
                    if (M.ie && M.win) {
                        var ah = "";
                        for (var ae in ai) {
                            if (ai[ae] != Object.prototype[ae]) {
                                if (ae.toLowerCase() == "data") {
                                    ag.movie = ai[ae]
                                } else {
                                    if (ae.toLowerCase() == "styleclass") {
                                        ah += ' class="' + ai[ae] + '"'
                                    } else {
                                        if (ae.toLowerCase() != "classid") {
                                            ah += " " + ae + '="' + ai[ae] + '"'
                                        }
                                    }
                                }
                            }
                        }
                        var af = "";
                        for (var ad in ag) {
                            if (ag[ad] != Object.prototype[ad]) {
                                af += '<param name="' + ad + '" value="' + ag[ad] + '" />'
                            }
                        }
                        aa.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + ah + ">" + af + "</object>";
                        N[N.length] = ai.id;
                        X = c(ai.id)
                    } else {
                        var Z = C(r);
                        Z.setAttribute("type", q);
                        for (var ac in ai) {
                            if (ai[ac] != Object.prototype[ac]) {
                                if (ac.toLowerCase() == "styleclass") {
                                    Z.setAttribute("class", ai[ac])
                                } else {
                                    if (ac.toLowerCase() != "classid") {
                                        Z.setAttribute(ac, ai[ac])
                                    }
                                }
                            }
                        }
                        for (var ab in ag) {
                            if (ag[ab] != Object.prototype[ab] && ab.toLowerCase() != "movie") {
                                e(Z, ab, ag[ab])
                            }
                        }
                        aa.parentNode.replaceChild(Z, aa);
                        X = Z
                    }
                }
                return X
            }
            function e(Z, X, Y) {
                var aa = C("param");
                aa.setAttribute("name", X);
                aa.setAttribute("value", Y);
                Z.appendChild(aa)
            }
            function y(Y) {
                var X = c(Y);
                if (X && X.nodeName == "OBJECT") {
                    if (M.ie && M.win) {
                        X.style.display = "none";
                        (function () {
                            if (X.readyState == 4) {
                                b(Y)
                            } else {
                                setTimeout(arguments.callee, 10)
                            }
                        })()
                    } else {
                        X.parentNode.removeChild(X)
                    }
                }
            }
            function b(Z) {
                var Y = c(Z);
                if (Y) {
                    for (var X in Y) {
                        if (typeof Y[X] == "function") {
                            Y[X] = null
                        }
                    }
                    Y.parentNode.removeChild(Y)
                }
            }
            function c(Z) {
                var X = null;
                try {
                    X = j.getElementById(Z)
                } catch (Y) { }
                return X
            }
            function C(X) {
                return j.createElement(X)
            }
            function i(Z, X, Y) {
                Z.attachEvent(X, Y);
                I[I.length] = [Z, X, Y]
            }
            function F(Z) {
                var Y = M.pv
                    , X = Z.split(".");
                X[0] = parseInt(X[0], 10);
                X[1] = parseInt(X[1], 10) || 0;
                X[2] = parseInt(X[2], 10) || 0;
                return Y[0] > X[0] || Y[0] == X[0] && Y[1] > X[1] || Y[0] == X[0] && Y[1] == X[1] && Y[2] >= X[2] ? true : false
            }
            function v(ac, Y, ad, ab) {
                if (M.ie && M.mac) {
                    return
                }
                var aa = j.getElementsByTagName("head")[0];
                if (!aa) {
                    return
                }
                var X = ad && typeof ad == "string" ? ad : "screen";
                if (ab) {
                    n = null;
                    G = null
                }
                if (!n || G != X) {
                    var Z = C("style");
                    Z.setAttribute("type", "text/css");
                    Z.setAttribute("media", X);
                    n = aa.appendChild(Z);
                    if (M.ie && M.win && typeof j.styleSheets != D && j.styleSheets.length > 0) {
                        n = j.styleSheets[j.styleSheets.length - 1]
                    }
                    G = X
                }
                if (M.ie && M.win) {
                    if (n && typeof n.addRule == r) {
                        n.addRule(ac, Y)
                    }
                } else {
                    if (n && typeof j.createTextNode != D) {
                        n.appendChild(j.createTextNode(ac + " {" + Y + "}"))
                    }
                }
            }
            function w(Z, X) {
                if (!m) {
                    return
                }
                var Y = X ? "visible" : "hidden";
                if (J && c(Z)) {
                    c(Z).style.visibility = Y
                } else {
                    v("#" + Z, "visibility:" + Y)
                }
            }
            function L(Y) {
                var Z = /[\\\"<>\.;]/;
                var X = Z.exec(Y) != null;
                return X && typeof encodeURIComponent != D ? encodeURIComponent(Y) : Y
            }
            var d = function () {
                if (M.ie && M.win) {
                    window.attachEvent("onunload", function () {
                        var ac = I.length;
                        for (var ab = 0; ab < ac; ab++) {
                            I[ab][0].detachEvent(I[ab][1], I[ab][2])
                        }
                        var Z = N.length;
                        for (var aa = 0; aa < Z; aa++) {
                            y(N[aa])
                        }
                        for (var Y in M) {
                            M[Y] = null
                        }
                        M = null;
                        for (var X in swfobject) {
                            swfobject[X] = null
                        }
                        swfobject = null
                    })
                }
            }();
            return {
                registerObject: function (ab, X, aa, Z) {
                    if (M.w3 && ab && X) {
                        var Y = {};
                        Y.id = ab;
                        Y.swfVersion = X;
                        Y.expressInstall = aa;
                        Y.callbackFn = Z;
                        o[o.length] = Y;
                        w(ab, false)
                    } else {
                        if (Z) {
                            Z({
                                success: false,
                                id: ab
                            })
                        }
                    }
                },
                getObjectById: function (X) {
                    if (M.w3) {
                        return z(X)
                    }
                },
                embedSWF: function (ab, ah, ae, ag, Y, aa, Z, ad, af, ac) {
                    var X = {
                        success: false,
                        id: ah
                    };
                    if (M.w3 && !(M.wk && M.wk < 312) && ab && ah && ae && ag && Y) {
                        w(ah, false);
                        K(function () {
                            ae += "";
                            ag += "";
                            var aj = {};
                            if (af && typeof af === r) {
                                for (var al in af) {
                                    aj[al] = af[al]
                                }
                            }
                            aj.data = ab;
                            aj.width = ae;
                            aj.height = ag;
                            var am = {};
                            if (ad && typeof ad === r) {
                                for (var ak in ad) {
                                    am[ak] = ad[ak]
                                }
                            }
                            if (Z && typeof Z === r) {
                                for (var ai in Z) {
                                    if (typeof am.flashvars != D) {
                                        am.flashvars += "&" + ai + "=" + Z[ai]
                                    } else {
                                        am.flashvars = ai + "=" + Z[ai]
                                    }
                                }
                            }
                            if (F(Y)) {
                                var an = u(aj, am, ah);
                                if (aj.id == ah) {
                                    w(ah, true)
                                }
                                X.success = true;
                                X.ref = an
                            } else {
                                if (aa && A()) {
                                    aj.data = aa;
                                    P(aj, am, ah, ac);
                                    return
                                } else {
                                    w(ah, true)
                                }
                            }
                            if (ac) {
                                ac(X)
                            }
                        })
                    } else {
                        if (ac) {
                            ac(X)
                        }
                    }
                },
                switchOffAutoHideShow: function () {
                    m = false
                },
                ua: M,
                getFlashPlayerVersion: function () {
                    return {
                        major: M.pv[0],
                        minor: M.pv[1],
                        release: M.pv[2]
                    }
                },
                hasFlashPlayerVersion: F,
                createSWF: function (Z, Y, X) {
                    if (M.w3) {
                        return u(Z, Y, X)
                    } else {
                        return undefined
                    }
                },
                showExpressInstall: function (Z, aa, X, Y) {
                    if (M.w3 && A()) {
                        P(Z, aa, X, Y)
                    }
                },
                removeSWF: function (X) {
                    if (M.w3) {
                        y(X)
                    }
                },
                createCSS: function (aa, Z, Y, X) {
                    if (M.w3) {
                        v(aa, Z, Y, X)
                    }
                },
                addDomLoadEvent: K,
                addLoadEvent: s,
                getQueryParamValue: function (aa) {
                    var Z = j.location.search || j.location.hash;
                    if (Z) {
                        if (/\?/.test(Z)) {
                            Z = Z.split("?")[1]
                        }
                        if (aa == null) {
                            return L(Z)
                        }
                        var Y = Z.split("&");
                        for (var X = 0; X < Y.length; X++) {
                            if (Y[X].substring(0, Y[X].indexOf("=")) == aa) {
                                return L(Y[X].substring(Y[X].indexOf("=") + 1))
                            }
                        }
                    }
                    return ""
                },
                expressInstallCallback: function () {
                    if (a) {
                        var X = c(R);
                        if (X && l) {
                            X.parentNode.replaceChild(l, X);
                            if (Q) {
                                w(Q, true);
                                if (M.ie && M.win) {
                                    l.style.display = "block"
                                }
                            }
                            if (E) {
                                E(B)
                            }
                        }
                        a = false
                    }
                }
            }
        }()
    }
    (function () {
        if ("undefined" == typeof window || window.WebSocket)
            return;
        var console = window.console;
        if (!console || !console.log || !console.error) {
            console = {
                log: function () { },
                error: function () { }
            }
        }
        if (!swfobject.hasFlashPlayerVersion("10.0.0")) {
            console.error("Flash Player >= 10.0.0 is required.");
            return
        }
        if (location.protocol == "file:") {
            console.error("WARNING: web-socket-js doesn't work in file:///... URL " + "unless you set Flash Security Settings properly. " + "Open the page via Web server i.e. http://...")
        }
        WebSocket = function (url, protocols, proxyHost, proxyPort, headers) {
            var self = this;
            self.ir = WebSocket.clV++;
            WebSocket.bFL[self.ir] = self;
            self.readyState = WebSocket.CONNECTING;
            self.bufferedAmount = 0;
            self.mL = {};
            if (!protocols) {
                protocols = []
            } else if (typeof protocols == "string") {
                protocols = [protocols]
            }
            setTimeout(function () {
                WebSocket.bbe(function () {
                    WebSocket.qM.create(self.ir, url, protocols, proxyHost || null, proxyPort || 0, headers || null)
                })
            }, 0)
        }
            ;
        WebSocket.prototype.send = function (data) {
            if (this.readyState == WebSocket.CONNECTING) {
                throw "INVALID_STATE_ERR: Web Socket connection has not been established"
            }
            var result = WebSocket.qM.send(this.ir, encodeURIComponent(data));
            if (result < 0) {
                return true
            } else {
                this.bufferedAmount += result;
                return false
            }
        }
            ;
        WebSocket.prototype.close = function () {
            if (this.readyState == WebSocket.CLOSED || this.readyState == WebSocket.CLOSING) {
                return
            }
            this.readyState = WebSocket.CLOSING;
            WebSocket.qM.close(this.ir)
        }
            ;
        WebSocket.prototype.addEventListener = function (type, listener, useCapture) {
            if (!(type in this.mL)) {
                this.mL[type] = []
            }
            this.mL[type].push(listener)
        }
            ;
        WebSocket.prototype.removeEventListener = function (type, listener, useCapture) {
            if (!(type in this.mL))
                return;
            var events = this.mL[type];
            for (var i = events.length - 1; i >= 0; --i) {
                if (events[i] === listener) {
                    events.splice(i, 1);
                    break
                }
            }
        }
            ;
        WebSocket.prototype.dispatchEvent = function (event) {
            var events = this.mL[event.type] || [];
            for (var i = 0; i < events.length; ++i) {
                events[i](event)
            }
            var handler = this["on" + event.type];
            if (handler)
                handler(event)
        }
            ;
        WebSocket.prototype.clS = function (flashEvent) {
            if ("readyState" in flashEvent) {
                this.readyState = flashEvent.readyState
            }
            if ("protocol" in flashEvent) {
                this.protocol = flashEvent.protocol
            }
            var jsEvent;
            if (flashEvent.type == "open" || flashEvent.type == "error") {
                jsEvent = this.bFP(flashEvent.type)
            } else if (flashEvent.type == "close") {
                jsEvent = this.bFP("close")
            } else if (flashEvent.type == "message") {
                var data = decodeURIComponent(flashEvent.message);
                jsEvent = this.clR("message", data)
            } else {
                throw "unknown event type: " + flashEvent.type
            }
            this.dispatchEvent(jsEvent)
        }
            ;
        WebSocket.prototype.bFP = function (type) {
            if (document.createEvent && window.Event) {
                var event = document.createEvent("Event");
                event.initEvent(type, false, false);
                return event
            } else {
                return {
                    type: type,
                    bubbles: false,
                    cancelable: false
                }
            }
        }
            ;
        WebSocket.prototype.clR = function (type, data) {
            if (document.createEvent && window.MessageEvent && !window.opera) {
                var event = document.createEvent("MessageEvent");
                event.initMessageEvent("message", false, false, data, null, null, window, null);
                return event
            } else {
                return {
                    type: type,
                    data: data,
                    bubbles: false,
                    cancelable: false
                }
            }
        }
            ;
        WebSocket.CONNECTING = 0;
        WebSocket.OPEN = 1;
        WebSocket.CLOSING = 2;
        WebSocket.CLOSED = 3;
        WebSocket.qM = null;
        WebSocket.bFL = {};
        WebSocket.Ri = [];
        WebSocket.clV = 0;
        WebSocket.loadFlashPolicyFile = function (url) {
            WebSocket.bbe(function () {
                WebSocket.qM.loadManualPolicyFile(url)
            })
        }
            ;
        WebSocket.bnA = function () {
            if (WebSocket.qM)
                return;
            if (WebSocket.clQ) {
                window.WEB_SOCKET_SWF_LOCATION = WebSocket.clQ
            }
            if (!window.WEB_SOCKET_SWF_LOCATION) {
                console.error("[WebSocket] set WEB_SOCKET_SWF_LOCATION to location of WebSocketMain.swf");
                return
            }
            var container = document.createElement("div");
            container.id = "webSocketContainer";
            container.style.position = "absolute";
            if (WebSocket.clP()) {
                container.style.left = "0px";
                container.style.top = "0px"
            } else {
                container.style.left = "-100px";
                container.style.top = "-100px"
            }
            var holder = document.createElement("div");
            holder.id = "webSocketFlash";
            container.appendChild(holder);
            document.body.appendChild(container);
            swfobject.embedSWF(WEB_SOCKET_SWF_LOCATION, "webSocketFlash", "1", "1", "10.0.0", null, null, {
                hasPriority: true,
                swliveconnect: true,
                allowScriptAccess: "always"
            }, null, function (e) {
                if (!e.success) {
                    console.error("[WebSocket] swfobject.embedSWF failed")
                }
            })
        }
            ;
        WebSocket.cux = function () {
            setTimeout(function () {
                WebSocket.qM = document.getElementById("webSocketFlash");
                WebSocket.qM.setCallerUrl(location.href);
                WebSocket.qM.setDebug(!!window.WEB_SOCKET_DEBUG);
                for (var i = 0; i < WebSocket.Ri.length; ++i) {
                    WebSocket.Ri[i]()
                }
                WebSocket.Ri = []
            }, 0)
        }
            ;
        WebSocket.cuy = function () {
            setTimeout(function () {
                try {
                    var events = WebSocket.qM.receiveEvents();
                    for (var i = 0; i < events.length; ++i) {
                        WebSocket.bFL[events[i].webSocketId].clS(events[i])
                    }
                } catch (e) {
                    console.error(e)
                }
            }, 0);
            return true
        }
            ;
        WebSocket.cuz = function (message) {
            console.log(decodeURIComponent(message))
        }
            ;
        WebSocket.eX = function (message) {
            console.error(decodeURIComponent(message))
        }
            ;
        WebSocket.bbe = function (task) {
            if (WebSocket.qM) {
                task()
            } else {
                WebSocket.Ri.push(task)
            }
        }
            ;
        WebSocket.clP = function () {
            if (!window.navigator || !window.navigator.mimeTypes) {
                return false
            }
            var mimeType = window.navigator.mimeTypes["application/x-shockwave-flash"];
            if (!mimeType || !mimeType.enabledPlugin || !mimeType.enabledPlugin.filename) {
                return false
            }
            return mimeType.enabledPlugin.filename.match(/flashlite/i) ? true : false
        }
            ;
        if (!window.WEB_SOCKET_DISABLE_AUTO_INITIALIZATION) {
            if (window.addEventListener) {
                window.addEventListener("load", function () {
                    WebSocket.bnA()
                }, false)
            } else {
                window.attachEvent("onload", function () {
                    WebSocket.bnA()
                })
            }
        }
    })();
    (function (exports, io, global) {
        exports.XHR = XHR;
        function XHR(socket) {
            if (!socket)
                return;
            io.Transport.apply(this, arguments);
            this.sendBuffer = []
        }
        io.util.inherit(XHR, io.Transport);
        XHR.prototype.open = function () {
            this.socket.setBuffer(false);
            this.onOpen();
            this.get();
            this.setCloseTimeout();
            return this
        }
            ;
        XHR.prototype.payload = function (payload) {
            var msgs = [];
            for (var i = 0, l = payload.length; i < l; i++) {
                msgs.push(io.parser.encodePacket(payload[i]))
            }
            this.send(io.parser.encodePayload(msgs))
        }
            ;
        XHR.prototype.send = function (data) {
            this.post(data);
            return this
        }
            ;
        function empty() { }
        XHR.prototype.post = function (data) {
            var self = this;
            this.socket.setBuffer(true);
            function stateChange() {
                if (this.readyState == 4) {
                    this.onreadystatechange = empty;
                    self.posting = false;
                    if (this.status == 200) {
                        self.socket.setBuffer(false)
                    } else {
                        self.onClose()
                    }
                }
            }
            function onload() {
                this.onload = empty;
                self.socket.setBuffer(false)
            }
            this.sendXHR = this.request("POST");
            if (global.XDomainRequest && this.sendXHR instanceof XDomainRequest) {
                this.sendXHR.onload = this.sendXHR.onerror = onload
            } else {
                this.sendXHR.onreadystatechange = stateChange
            }
            this.sendXHR.send(data)
        }
            ;
        XHR.prototype.close = function () {
            this.onClose();
            return this
        }
            ;
        XHR.prototype.request = function (method) {
            var req = io.util.request(this.socket.isXDomain())
                , query = io.util.query(this.socket.options.query, "t=" + +(new Date));
            req.open(method || "GET", this.prepareUrl() + query, true);
            if (method == "POST") {
                try {
                    if (req.setRequestHeader) {
                        req.setRequestHeader("Content-type", "text/plain;charset=UTF-8")
                    } else {
                        req.contentType = "text/plain"
                    }
                } catch (e) { }
            }
            return req
        }
            ;
        XHR.prototype.scheme = function () {
            return this.socket.options.secure ? "https" : "http"
        }
            ;
        XHR.check = function (socket, xdomain) {
            try {
                var request = io.util.request(xdomain)
                    , usesXDomReq = global.XDomainRequest && request instanceof XDomainRequest
                    , socketProtocol = socket && socket.options && socket.options.secure ? "https:" : "http:"
                    , isXProtocol = global.location && socketProtocol != global.location.protocol;
                if (request && !(usesXDomReq && isXProtocol)) {
                    return true
                }
            } catch (e) { }
            return false
        }
            ;
        XHR.xdomainCheck = function (socket) {
            return XHR.check(socket, true)
        }
    })("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
    (function (exports, io) {
        exports.htmlfile = HTMLFile;
        function HTMLFile(socket) {
            io.Transport.XHR.apply(this, arguments)
        }
        io.util.inherit(HTMLFile, io.Transport.XHR);
        HTMLFile.prototype.name = "htmlfile";
        HTMLFile.prototype.get = function () {
            this.doc = new (window[["Active"].concat("Object").join("X")])("htmlfile");
            this.doc.open();
            this.doc.write("<html></html>");
            this.doc.close();
            this.doc.parentWindow.s = this;
            var iframeC = this.doc.createElement("div");
            iframeC.className = "socketio";
            this.doc.body.appendChild(iframeC);
            this.iframe = this.doc.createElement("iframe");
            iframeC.appendChild(this.iframe);
            var self = this
                , query = io.util.query(this.socket.options.query, "t=" + +(new Date));
            this.iframe.src = this.prepareUrl() + query;
            io.util.on(window, "unload", function () {
                self.destroy()
            })
        }
            ;
        HTMLFile.prototype.bd = function (data, doc) {
            data = data.replace(/\\\//g, "/");
            this.onData(data);
            try {
                var script = doc.getElementsByTagName("script")[0];
                script.parentNode.removeChild(script)
            } catch (e) { }
        }
            ;
        HTMLFile.prototype.destroy = function () {
            if (this.iframe) {
                try {
                    this.iframe.src = "about:blank"
                } catch (e) { }
                this.doc = null;
                this.iframe.parentNode.removeChild(this.iframe);
                this.iframe = null;
                CollectGarbage()
            }
        }
            ;
        HTMLFile.prototype.close = function () {
            this.destroy();
            return io.Transport.XHR.prototype.close.call(this)
        }
            ;
        HTMLFile.check = function (socket) {
            if (typeof window != "undefined" && ["Active"].concat("Object").join("X") in window) {
                try {
                    var a = new (window[["Active"].concat("Object").join("X")])("htmlfile");
                    return a && io.Transport.XHR.check(socket)
                } catch (e) { }
            }
            return false
        }
            ;
        HTMLFile.xdomainCheck = function () {
            return false
        }
            ;
        io.transports.push("htmlfile")
    })("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    (function (exports, io, global) {
        exports["xhr-polling"] = XHRPolling;
        function XHRPolling() {
            io.Transport.XHR.apply(this, arguments)
        }
        io.util.inherit(XHRPolling, io.Transport.XHR);
        io.util.merge(XHRPolling, io.Transport.XHR);
        XHRPolling.prototype.name = "xhr-polling";
        XHRPolling.prototype.heartbeats = function () {
            return false
        }
            ;
        XHRPolling.prototype.open = function () {
            var self = this;
            io.Transport.XHR.prototype.open.call(self);
            return false
        }
            ;
        function empty() { }
        XHRPolling.prototype.get = function () {
            if (!this.isOpen)
                return;
            var self = this;
            function stateChange() {
                if (this.readyState == 4) {
                    this.onreadystatechange = empty;
                    if (this.status == 200) {
                        self.onData(this.responseText);
                        self.get()
                    } else {
                        self.onClose()
                    }
                }
            }
            function onload() {
                this.onload = empty;
                this.onerror = empty;
                self.retryCounter = 1;
                self.onData(this.responseText);
                self.get()
            }
            function onerror() {
                self.retryCounter++;
                if (!self.retryCounter || self.retryCounter > 3) {
                    self.onClose()
                } else {
                    self.get()
                }
            }
            this.xhr = this.request();
            if (global.XDomainRequest && this.xhr instanceof XDomainRequest) {
                this.xhr.onload = onload;
                this.xhr.onerror = onerror
            } else {
                this.xhr.onreadystatechange = stateChange
            }
            this.xhr.send(null)
        }
            ;
        XHRPolling.prototype.onClose = function () {
            io.Transport.XHR.prototype.onClose.call(this);
            if (this.xhr) {
                this.xhr.onreadystatechange = this.xhr.onload = this.xhr.onerror = empty;
                try {
                    this.xhr.abort()
                } catch (e) { }
                this.xhr = null
            }
        }
            ;
        XHRPolling.prototype.ready = function (socket, fn) {
            var self = this;
            io.util.defer(function () {
                fn.call(self)
            })
        }
            ;
        io.transports.push("xhr-polling")
    })("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
    (function (exports, io, global) {
        var indicator = global.document && "MozAppearance" in global.document.documentElement.style;
        exports["jsonp-polling"] = JSONPPolling;
        function JSONPPolling(socket) {
            io.Transport["xhr-polling"].apply(this, arguments);
            this.index = io.j.length;
            var self = this;
            io.j.push(function (msg) {
                self.bd(msg)
            })
        }
        io.util.inherit(JSONPPolling, io.Transport["xhr-polling"]);
        JSONPPolling.prototype.name = "jsonp-polling";
        JSONPPolling.prototype.post = function (data) {
            var self = this
                , query = io.util.query(this.socket.options.query, "t=" + +(new Date) + "&i=" + this.index);
            if (!this.form) {
                var form = document.createElement("form"), area = document.createElement("textarea"), id = this.iframeId = "socketio_iframe_" + this.index, iframe;
                form.className = "socketio";
                form.style.position = "absolute";
                form.style.top = "0px";
                form.style.left = "0px";
                form.style.display = "none";
                form.target = id;
                form.method = "POST";
                form.setAttribute("accept-charset", "utf-8");
                area.name = "d";
                form.appendChild(area);
                document.body.appendChild(form);
                this.form = form;
                this.area = area
            }
            this.form.action = this.prepareUrl() + query;
            function complete() {
                initIframe();
                self.socket.setBuffer(false)
            }
            function initIframe() {
                if (self.iframe) {
                    self.form.removeChild(self.iframe)
                }
                try {
                    iframe = document.createElement('<iframe name="' + self.iframeId + '">')
                } catch (e) {
                    iframe = document.createElement("iframe");
                    iframe.name = self.iframeId
                }
                iframe.id = self.iframeId;
                self.form.appendChild(iframe);
                self.iframe = iframe
            }
            initIframe();
            this.area.value = io.JSON.stringify(data);
            try {
                this.form.submit()
            } catch (e) { }
            if (this.iframe.attachEvent) {
                iframe.onreadystatechange = function () {
                    if (self.iframe.readyState == "complete") {
                        complete()
                    }
                }
            } else {
                this.iframe.onload = complete
            }
            this.socket.setBuffer(true)
        }
            ;
        JSONPPolling.prototype.get = function () {
            var self = this
                , script = document.createElement("script")
                , query = io.util.query(this.socket.options.query, "t=" + +(new Date) + "&i=" + this.index);
            if (this.script) {
                this.script.parentNode.removeChild(this.script);
                this.script = null
            }
            script.async = true;
            script.src = this.prepareUrl() + query;
            script.onerror = function () {
                self.onClose()
            }
                ;
            var insertAt = document.getElementsByTagName("script")[0];
            insertAt.parentNode.insertBefore(script, insertAt);
            this.script = script;
            if (indicator) {
                setTimeout(function () {
                    var iframe = document.createElement("iframe");
                    document.body.appendChild(iframe);
                    document.body.removeChild(iframe)
                }, 100)
            }
        }
            ;
        JSONPPolling.prototype.bd = function (msg) {
            this.onData(msg);
            if (this.isOpen) {
                this.get()
            }
            return this
        }
            ;
        JSONPPolling.prototype.ready = function (socket, fn) {
            var self = this;
            if (!indicator)
                return fn.call(this);
            io.util.load(function () {
                fn.call(self)
            })
        }
            ;
        JSONPPolling.check = function () {
            return "document" in global
        }
            ;
        JSONPPolling.xdomainCheck = function () {
            return true
        }
            ;
        io.transports.push("jsonp-polling")
    })("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
    if (typeof define === "function" && define.amd) {
        define([], function () {
            return io
        })
    }
})();
(function () {
    var isArray = Array.isArray;
    if (isArray === undefined) {
        isArray = function (arr) {
            return Object.prototype.toString.call(arr) === "[object Array]"
        }
    }
    var root = this;
    function EventEmitter() { }
    if (typeof module !== "undefined" && module.exports) {
        module.exports.EventEmitter = EventEmitter
    } else {
        root = window;
        root.EventEmitter = EventEmitter
    }
    var defaultMaxListeners = 10;
    EventEmitter.prototype.setMaxListeners = function (n) {
        if (!this.fZ)
            this.fZ = {};
        this.bGE = n
    }
        ;
    EventEmitter.prototype.emit = function () {
        var type = arguments[0];
        if (type === "error") {
            if (!this.fZ || !this.fZ.error || isArray(this.fZ.error) && !this.fZ.error.length) {
                if (this.domain) {
                    var er = arguments[1];
                    er.domain_emitter = this;
                    er.domain = this.domain;
                    er.domain_thrown = false;
                    this.domain.emit("error", er);
                    return false
                }
                if (arguments[1] instanceof Error) {
                    throw arguments[1]
                } else {
                    throw new Error("Uncaught, unspecified 'error' event.")
                }
                return false
            }
        }
        if (!this.fZ)
            return false;
        var handler = this.fZ[type];
        if (!handler)
            return false;
        if (typeof handler == "function") {
            if (this.domain) {
                this.domain.enter()
            }
            switch (arguments.length) {
                case 1:
                    handler.call(this);
                    break;
                case 2:
                    handler.call(this, arguments[1]);
                    break;
                case 3:
                    handler.call(this, arguments[1], arguments[2]);
                    break;
                default:
                    var l = arguments.length;
                    var args = new Array(l - 1);
                    for (var i = 1; i < l; i++)
                        args[i - 1] = arguments[i];
                    handler.apply(this, args)
            }
            if (this.domain) {
                this.domain.exit()
            }
            return true
        } else if (isArray(handler)) {
            if (this.domain) {
                this.domain.enter()
            }
            var l = arguments.length;
            var args = new Array(l - 1);
            for (var i = 1; i < l; i++)
                args[i - 1] = arguments[i];
            var listeners = handler.slice();
            for (var i = 0, l = listeners.length; i < l; i++) {
                listeners[i].apply(this, args)
            }
            if (this.domain) {
                this.domain.exit()
            }
            return true
        } else {
            return false
        }
    }
        ;
    EventEmitter.prototype.addListener = function (type, listener) {
        if ("function" !== typeof listener) {
            throw new Error("addListener only takes instances of Function")
        }
        if (!this.fZ)
            this.fZ = {};
        this.emit("newListener", type, typeof listener.listener === "function" ? listener.listener : listener);
        if (!this.fZ[type]) {
            this.fZ[type] = listener
        } else if (isArray(this.fZ[type])) {
            this.fZ[type].push(listener)
        } else {
            this.fZ[type] = [this.fZ[type], listener]
        }
        if (isArray(this.fZ[type]) && !this.fZ[type].warned) {
            var m;
            if (this.bGE !== undefined) {
                m = this.bGE
            } else {
                m = defaultMaxListeners
            }
            if (m && m > 0 && this.fZ[type].length > m) {
                this.fZ[type].warned = true;
                console.error("(node) warning: possible EventEmitter memory " + "leak detected. %d listeners added. " + "Use emitter.setMaxListeners() to increase limit.", this.fZ[type].length);
                console.trace()
            }
        }
        return this
    }
        ;
    EventEmitter.prototype.on = EventEmitter.prototype.addListener;
    EventEmitter.prototype.once = function (type, listener) {
        if ("function" !== typeof listener) {
            throw new Error(".once only takes instances of Function")
        }
        var self = this;
        function g() {
            self.removeListener(type, g);
            listener.apply(this, arguments)
        }
        g.listener = listener;
        self.on(type, g);
        return this
    }
        ;
    EventEmitter.prototype.removeListener = function (type, listener) {
        if ("function" !== typeof listener) {
            throw new Error("removeListener only takes instances of Function")
        }
        if (!this.fZ || !this.fZ[type])
            return this;
        var list = this.fZ[type];
        if (isArray(list)) {
            var position = -1;
            for (var i = 0, length = list.length; i < length; i++) {
                if (list[i] === listener || list[i].listener && list[i].listener === listener) {
                    position = i;
                    break
                }
            }
            if (position < 0)
                return this;
            list.splice(position, 1)
        } else if (list === listener || list.listener && list.listener === listener) {
            delete this.fZ[type]
        }
        return this
    }
        ;
    EventEmitter.prototype.removeAllListeners = function (type) {
        if (arguments.length === 0) {
            this.fZ = {};
            return this
        }
        var events = this.fZ && this.fZ[type];
        if (!events)
            return this;
        if (isArray(events)) {
            events.splice(0)
        } else {
            this.fZ[type] = null
        }
        return this
    }
        ;
    EventEmitter.prototype.listeners = function (type) {
        if (!this.fZ)
            this.fZ = {};
        if (!this.fZ[type])
            this.fZ[type] = [];
        if (!isArray(this.fZ[type])) {
            this.fZ[type] = [this.fZ[type]]
        }
        return this.fZ[type]
    }
})();
(function () {
    if (typeof Object.create !== "function") {
        Object.create = function (o) {
            function F() { }
            F.prototype = o;
            return new F
        }
    }
    var root = window;
    var pomelo = Object.create(EventEmitter.prototype);
    root.pomelo = pomelo;
    var socket = null;
    var id = 1;
    var callbacks = {};
    var route = "web-connector.messageHandler.";
    var isRegister = false;
    var success = 200;
    var register_ack = "register";
    var bind_ack = "bind";
    var regBind_ack = "registerAndBind";
    var cancelBind_ack = "cancelBind";
    var message_store = {};
    var heartbeat_interval = 1e3 * 60;
    var heartbeat_timer;
    var current_user;
    var current_domain;
    var cacheMessageIds = [];
    var cacheSize = 100;
    pomelo.init = function (host, port, reconnect, cb) {
        var url = "ws://" + host;
        if (port) {
            url += ":" + port
        }
        var params;
        if (reconnect) {
            params = {
                "force new connection": true,
                reconnect: true,
                "max reconnection attempts": 50
            }
        } else {
            params = {
                "force new connection": true,
                reconnect: false
            }
        }
        socket = io.connect(url, params);
        socket.on("connect", function () {
            console.log("[pomeloclient.init] websocket connected!");
            cb()
        });
        socket.on("reconnect", function () {
            pomelo.emit("reconnect")
        });
        socket.on("message", function (data) {
            message_store = {};
            if (typeof data === "string") {
                data = JSON.parse(data)
            }
            if (data instanceof Array) {
                processMessageBatch(data)
            } else {
                processMessage(data);
                emitMessage()
            }
        });
        socket.on("error", function (err) {
            cb(err)
        });
        socket.on("disconnect", function (reason) {
            isRegister = false;
            pomelo.emit("disconnect", reason)
        })
    }
        ;
    var request = function (method, opts, cb) {
        if (!method) {
            console.error("request message error with no method.");
            return
        }
        id++;
        callbacks[id] = cb;
        sendMsg(method, id, opts)
    };
    var notify = function (method, msg) {
        if (!method) {
            console.error("notify message error with no method.");
            return
        }
        sendMsg(method, 0, msg)
    };
    var sendMsg = function (method, msgId, msg) {
        var path = route + method;
        var rs = {
            id: msgId,
            route: path,
            msg: msg
        };
        var sg = JSON.stringify(rs);
        socket.send(sg)
    };
    var processMessageBatch = function (msgs) {
        for (var i = 0, l = msgs.length; i < l; i++) {
            processMessage(msgs[i])
        }
        emitMessage()
    };
    var emitMessage = function () {
        for (var key in message_store) {
            pomelo.emit(key, message_store[key])
        }
    };
    var processMessage = function (msg) {
        if (msg.id) {
            var cb = callbacks[msg.id];
            delete callbacks[msg.id];
            if (typeof cb !== "function") {
                console.log("[pomeloclient.processMessage] cb is not a function for request " + msg.id);
                return
            }
            cb(msg.body);
            if (msg.body.type === register_ack && msg.body.code == success) {
                isRegister = true
            }
            if ((msg.body.type === bind_ack || msg.body.type === regBind_ack) && msg.body.code == success) {
                heartbeat_timer = setInterval(function () {
                    notify("heartbeat", {
                        flag: "online",
                        domain: current_domain,
                        user: current_user
                    })
                }, heartbeat_interval)
            }
            if (msg.body.type === cancelBind_ack && msg.body.code == success) {
                clearInterval(heartbeat_timer)
            }
            return
        } else {
            if (!filterMessage(msg)) {
                return
            }
            if (!message_store[msg.route]) {
                if (msg.body instanceof Array) {
                    message_store[msg.route] = msg.body
                } else {
                    message_store[msg.route] = [msg.body]
                }
            } else {
                var arr = message_store[msg.route];
                if (msg.body instanceof Array) {
                    var messages = msg.body;
                    for (var i = 0; i < messages.length; i++) {
                        arr.push(messages[i])
                    }
                } else {
                    arr.push(msg.body)
                }
                message_store[msg.route] = arr
            }
        }
    };
    var filterMessage = function (message) {
        var msgs = message.body;
        var ids = [];
        var results = {};
        if (msgs instanceof Array) {
            for (var i = 0; i < msgs.length; i++) {
                var id = msgs[i].msgId;
                ids.push(id)
            }
            var duplicatedIds = checkMessage(ids);
            if (duplicatedIds.length !== 0) {
                return false
            } else {
                cacheMessageIds = cacheMessageIds.concat(ids);
                if (cacheMessageIds.length > cacheSize) {
                    var length = cacheMessageIds - cacheSize;
                    for (var i = 0; i < length; i++) {
                        cacheMessageIds.shift()
                    }
                }
            }
        }
        return true
    };
    var checkMessage = function (ids) {
        var array = [];
        for (var i = 0; i < cacheMessageIds.length; i++) {
            var id = cacheMessageIds[i];
            for (var j = 0; j < ids.length; j++) {
                if (ids[j] === id) {
                    array.push(id)
                }
            }
        }
        return array
    };
    pomelo.register = function (opts, cb) {
        request("register", opts, cb)
    }
        ;
    pomelo.bind = function (opts, cb) {
        if (isRegister) {
            current_domain = opts.domain;
            current_user = opts.user;
            request("bind", opts, cb)
        } else {
            console.log("cannot bind without registration.")
        }
    }
        ;
    pomelo.registerAndBind = function (opts, cb) {
        current_domain = opts.domain;
        current_user = opts.user;
        request("registerAndBind", opts, cb)
    }
        ;
    pomelo.cancelBind = function (opts, cb) {
        current_domain = null;
        current_user = null;
        request("cancelBind", opts, cb)
    }
        ;
    pomelo.getOnlineUser = function (opts, cb) {
        request("getOnlineUser", opts, cb)
    }
        ;
    pomelo.disconnect = function () {
        if (socket) {
            socket.disconnect();
            socket = null
        }
    }
        ;
    pomelo.ackMessage = function (domain, msgs) {
        var msgIds = "";
        var types = "";
        var message = {};
        var user;
        for (var i = 0; i < msgs.length; i++) {
            var data = msgs[i];
            if (!user) {
                user = data.user
            }
            msgIds += data.msgId;
            types += data.type;
            if (i !== msgs.length - 1) {
                msgIds += ";";
                types += ";"
            }
        }
        var message = {
            user: user,
            msgIds: msgIds,
            types: types,
            domain: domain
        };
        notify("ack", message)
    }
})();
(function () {
    var bd = NEJ.P, cg = NEJ.O, cz = NEJ.F, bj = bd("nej.v"), bm = bd("nej.u"), bL = bd("nej.ut"), bn = bd("nm.x"), eJ = bd("nm.u"), bs = bd("nm.d"), QQ = bd("pomelo"), eN = 0, bc, bO;
    bs.gs({
        "polling-init": {
            url: "/api/push/init",
            format: function (bV) {
                eN = 2;
                var uK = {
                    domain: "music.163.com",
                    host: MUSIC_CONFIG.pushHost,
                    port: MUSIC_CONFIG.pushPort,
                    key: MUSIC_CONFIG.pushKey,
                    secret: "bec0b878892740c498505a85eb3dcec9"
                }
                    , bl = bV.account || cg
                    , fq = GUser.userId;
                QQ.init(uK.host, uK.port, true, this.clL.bi(this, {
                    user: fq,
                    nonce: bl.nonce,
                    domain: uK.domain,
                    productKey: uK.key,
                    signature: bl.signature,
                    expire_time: bl.expireTime
                }))
            },
            onerror: function () {
                return this.bnD()
            }
        }
    });
    bs.Bc = NEJ.C();
    bc = bs.Bc.bT(bs.iR);
    bc.dG = function () {
        var rJ = !1;
        return function (bf) {
            if (!rJ) {
                rJ = !0
            }
            this.dM(bf);
            QQ.on("specify", this.th.bi(this));
            QQ.on("broadcast", this.th.bi(this))
        }
    }();
    bc.th = function (be) {
        bm.cr(be, function (cT) {
            bj.bG(bs.Bc, "message", cT)
        }, this)
    }
        ;
    bc.bnD = function () {
        var cY = 500;
        return function () {
            eN = 0;
            QQ.disconnect();
            if (cY > 6e4)
                cY = 500;
            cY *= 2
        }
    }();
    bc.clL = function (bf, dh) {
        if (!!dh) {
            return this.bnD()
        }
        eN = 3;
        QQ.registerAndBind(bf, function (bo) {
            if (bo.code != 200) {
                return this.bnD()
            }
            eN = 4
        }
            .bi(this))
    }
        ;
    bc.cuA = function () {
        eJ.clI.hC().cuC()
    }
        ;
    bc.cuD = function () {
        eJ.clI.hC().cuE()
    }
        ;
    bc.bnM = function () {
        var rJ = !1;
        return function () {
            if (rJ)
                return;
            rJ = !0;
            this.dK("polling-init", {})
        }
    }();
    bL.he.bH({
        event: "message",
        element: bs.Bc
    })
})();
(function () {
    var bd = NEJ.P, cg = NEJ.O, bb = bd("nej.e"), bj = bd("nej.v"), bA = bd("nej.j"), eI = bd("nej.p"), bm = bd("nej.u"), bp = bd("nm.l"), bs = bd("nm.d"), bn = bd("nm.x"), ff = bd("api"), bc, bO;
    var hH = bb.jK('<div class="lyct f-cb"><div class="m-fdback"><div class="tip">任何产品中的问题，欢迎反馈给我们</div><div class="u-txtwrap f-pr"><textarea class="u-txt area" placeholder="请输入反馈内容"></textarea><span class="zs s-fc2">140</span></div><div class="u-txtwrap f-pr holder-parent"><textarea class="u-txt contact" placeholder="请留下联系方式（电话、QQ、邮箱）" maxLength="100"></textarea></div><div style="display:none" class="u-err"><i class="u-icn u-icn-25"></i>内容不能为空！</div></div><div class="lybtn f-tc"><a href="javascript:;" class="u-btn2 u-btn2-2 u-btn2-w4" hidefocus="true"><i>发送意见</i></a><a href="javascript:;" class="u-btn2 u-btn2-1 u-btn2-w4" hidefocus="true"><i>取 消</i></a></div></div>');
    bp.bnO = NEJ.C();
    bc = bp.bnO.bT(bp.fA);
    bO = bp.bnO.dC;
    bc.cv = function (bf) {
        bf.title = "意见反馈";
        this.cw(bf)
    }
        ;
    bc.dq = function () {
        this.dr = hH
    }
        ;
    bc.di = function () {
        this.dv();
        this.ip = {};
        var In = bb.bN;
        var FI = bj.bt;
        this.ip.submit_btn = In(this.bq, "u-btn2")[0];
        this.ip.cancle_btn = In(this.bq, "u-btn2")[1];
        this.ip.prompt_msg = In(this.bq, "u-err")[0];
        this.ip.zs = In(this.bq, "zs")[0];
        bb.cf(this.ip.zs, "display", "none");
        this.ip.fb_txt = In(this.bq, "u-txt")[0];
        this.ip.contact = In(this.bq, "u-txt")[1];
        bb.hl(this.ip.fb_txt, "holder");
        bb.hl(this.ip.contact, "holder");
        if (bb.cN(this.ip.fb_txt.parentNode, "holder-parent")) {
            bb.cf(this.ip.fb_txt.parentNode, "display", "block")
        }
        if (bb.cN(this.ip.contact.parentNode, "holder-parent")) {
            bb.cf(this.ip.contact.parentNode, "display", "block")
        }
        FI(this.ip.submit_btn, "click", this.clF.bi(this));
        FI(this.ip.cancle_btn, "click", this.clC.bi(this));
        FI(this.ip.prompt_msg, "msgShow", this.clB.bi(this));
        FI(this.ip.fb_txt, "keyup", this.vg.bi(this));
        FI(this.ip.fb_txt, "input", this.gQ.bi(this));
        FI(this.ip.contact, "keyup", this.clA.bi(this));
        FI(this.ip.contact, "input", this.bHT.bi(this));
        this.lu = bs.jE.bH()
    }
        ;
    bc.clF = function (be) {
        bj.co(be);
        if (this.dR())
            return;
        var cu = this.ip.fb_txt.value.trim();
        var cD = cu.length;
        var bf = {
            type: "json",
            method: "post",
            noEnc: true
        };
        var bIb = this.ip.contact.value.trim();
        var Zx = {
            ua: navigator.userAgent,
            hash: top.location.hash,
            href: location.href,
            flash: bn.biy(),
            contact: bIb
        };
        var bl = {
            content: cu,
            client: "web",
            xInfo: JSON.stringify(Zx)
        }
            , pj = this.lu.cqB();
        if (pj && pj.length) {
            bl.log = pj.join("\n")
        }
        if (cD == 0) {
            this.ip.prompt_msg.innerHTML = "反馈内容不能为空";
            bb.cf(this.ip.prompt_msg, "display", "block");
            return
        }
        if (bIb.length > 100) {
            this.ip.prompt_msg.innerHTML = "联系方式最多只能输入100个字符";
            bb.cf(this.ip.prompt_msg, "display", "block");
            return
        }
        this.dR(true);
        bf.data = bm.eH(bl);
        bf.onload = this.cly.bi(this);
        bf.onerror = this.jM.bi(this);
        bA.cE("/api/feedback/web", bf)
    }
        ;
    bc.gQ = function (be) {
        var cD = this.ip.fb_txt.value.trim().length;
        if (cD > 0)
            bb.cf(this.ip.prompt_msg, "display", "none");
        eI.ei.browser == "ie" && eI.ei.version < "7.0" ? setTimeout(this.hk.bi(this), 0) : this.hk()
    }
        ;
    bc.vg = function (be) {
        if (be.keyCode === 8)
            this.hk()
    }
        ;
    bc.hk = function () {
        var cD = this.ip.fb_txt.value.trim().length;
        this.ip.zs.innerHTML = !cD ? "0/140" : cD + "/140"
    }
        ;
    bc.bHT = function (be) {
        var cD = this.ip.contact.value.trim().length;
        if (cD > 0)
            bb.cf(this.ip.prompt_msg, "display", "none")
    }
        ;
    bc.clA = function (be) {
        if (be.keyCode === 8)
            this.bHT()
    }
        ;
    bc.clC = function (be) {
        bj.dz(be);
        this.cC()
    }
        ;
    bc.clB = function (be) {
        var bh = bj.bZ(be);
        bh.innerHTML = "请输入反馈内容"
    }
        ;
    bc.cuF = function (cuG) {
        var bh = bj.bZ(be);
        bh.innerHTML = ""
    }
        ;
    bc.cly = function (bo) {
        this.dR(false);
        this.cC();
        bp.ci.bS({
            tip: "意见发送成功",
            autoclose: true
        })
    }
        ;
    bc.jM = function (bo) {
        this.dR(false);
        bp.ci.bS({
            tip: "意见发送失败",
            autoclose: true
        })
    }
        ;
    bc.dR = function (dV) {
        return this.fp(this.ip.submit_btn, dV, "发送意见", "发送中...")
    }
        ;
    bc.bS = function () {
        bO.bS.call(this);
        this.dR(false);
        this.ip.fb_txt.value = "";
        this.ip.contact.value = "";
        bb.cf(this.ip.prompt_msg, "display", "none");
        this.hk()
    }
        ;
    bn.clv = function (bf) {
        bf = bf || {};
        if (bf.title === undefined)
            bf.title = "意见反馈";
        bp.bnO.bS(bf)
    }
        ;
    ff.feedback = bn.feedback = bn.clv
})();
(function () {
    var bd = NEJ.P, cg = NEJ.O, cz = NEJ.F, bR = bd("nej.ui"), bc;
    if (!!bR.yO)
        return;
    bR.yO = NEJ.C();
    bc = bR.yO.bT(bR.fP);
    bc.dG = function () {
        this.ir = this.bIS();
        this.dM()
    }
        ;
    bc.cv = function (bf) {
        this.cw(bf);
        this.ef = bf.index;
        this.iw = bf.total;
        this.iu = bf.range;
        this.is(bf.data)
    }
        ;
    bc.cR = function () {
        this.cW();
        delete this.ck;
        delete this.ef;
        delete this.iw;
        delete this.iu
    }
        ;
    bc.iV = cz;
    bc.bIS = function () {
        var hw = +(new Date);
        return function () {
            return "itm-" + ++hw
        }
    }();
    bc.Fz = function () {
        return this.ir
    }
        ;
    bc.jt = function () {
        return this.ck
    }
        ;
    bc.is = function (bl) {
        this.ck = bl || {};
        this.iV(this.ck)
    }
})();
(function () {
    var bd = NEJ.P, bb = bd("nej.e"), bj = bd("nej.v"), bR = bd("nej.ui"), bc, bO;
    if (!!bR.tH)
        return;
    bR.tH = NEJ.C();
    bc = bR.tH.bT(bR.yO);
    bO = bR.tH.dC;
    bc.cv = function (bf) {
        this.clu = bf.pkey || "id";
        this.cw(bf)
    }
        ;
    bc.Gd = function (bl) {
        this.bG("ondelete", {
            ext: bl,
            id: this.Fz(),
            data: this.jt(),
            body: this.nn()
        })
    }
        ;
    bc.QF = function (bl) {
        this.bG("onupdate", {
            ext: bl,
            id: this.Fz(),
            data: this.jt(),
            body: this.nn()
        })
    }
        ;
    bc.is = function (bl) {
        bO.is.apply(this, arguments);
        this.ir = this.ck[this.clu] || this.bIS()
    }
})();
(function () {
    var bd = NEJ.P, cg = NEJ.O, gI = NEJ.R, bb = bd("nej.e"), bm = bd("nej.u"), bR = bd("nej.ui"), bc, jN, bnT;
    if (!!bR.bnY)
        return;
    bR.bnY = NEJ.C();
    bc = bR.bnY.bT(bR.fP);
    bc.cv = function (bf) {
        this.YN = NEJ.X({}, bf);
        this.hj = NEJ.X({}, bf);
        delete this.YN.onchange;
        this.hj.onchange = this.hS.bi(this);
        this.cw(bf);
        this.cls({
            number: bf.number,
            label: bf.label || cg
        })
    }
        ;
    bc.cR = function () {
        this.cW();
        if (!!this.lQ) {
            this.lQ.bX();
            delete this.lQ
        }
        delete this.YN;
        delete this.hj;
        this.clr();
        this.bq.innerHTML = "&nbsp;"
    }
        ;
    bc.dq = function () {
        this.nd = jN
    }
        ;
    bc.cls = function (bl) {
        bb.fG(this.bq, bnT, bl);
        var hw = bb.Ks();
        this.hj.list = bb.bN(this.bq, "js-i-" + hw);
        this.hj.pbtn = (bb.bN(this.bq, "js-p-" + hw) || gI)[0];
        this.hj.nbtn = (bb.bN(this.bq, "js-n-" + hw) || gI)[0]
    }
        ;
    bc.di = function () {
        this.dv()
    }
        ;
    bc.cuH = function (bl) {
        return bb.dm(bnT, bl)
    }
        ;
    bc.hS = function (be) {
        if (this.Ql)
            return;
        var bv = be.index
            , dO = be.total;
        this.Ql = !0;
        this.Qg(bv, dO);
        bm.cr(this.Yb, function (uF) {
            uF.Qg(bv, dO)
        });
        this.Ql = !1;
        this.bG("onchange", be)
    }
        ;
    bc.bi = function (cS) {
        cS = bb.bD(cS);
        if (!cS)
            return this;
        var dH = NEJ.X({}, this.YN);
        dH.parent = cS;
        dH.index = this.uw();
        dH.total = this.lL();
        var uF = this.constructor.bH(dH);
        uF.wR("onchange", this.hj.onchange);
        if (!this.Yb)
            this.Yb = [];
        this.Yb.push(uF);
        return this
    }
        ;
    bc.clr = function () {
        var ben = function (uF, bv, bk) {
            uF.bX();
            bk.splice(bv, 1)
        };
        return function () {
            bm.oj(this.Yb, ben)
        }
    }();
    bc.lC = function (bv) {
        if (!this.lQ)
            return;
        this.lQ.lC(bv)
    }
        ;
    bc.uw = function () {
        if (!this.lQ)
            return 1;
        return this.lQ.uw()
    }
        ;
    bc.lL = function () {
        if (!this.lQ)
            return 1;
        return this.lQ.lL()
    }
        ;
    bc.Qg = function (bv, dO) {
        if (!this.lQ)
            return;
        this.lQ.Qg(bv, dO)
    }
        ;
    bc.bog = function (dO) {
        if (!this.lQ)
            return;
        this.lQ.bog(dO)
    }
        ;
    jN = bb.tY(".#<uispace>{font-size:12px;line-height:160%;}.#<uispace> a{margin:0 2px;padding:2px 8px;color:#333;border:1px solid #aaa;text-decoration:none;}.#<uispace> .js-disabled{cursor:default;}.#<uispace> .js-selected{cursor:default;background:#bbb;}");
    bnT = bb.fT('{trim}{if !defined("noprv")||!noprv}<a href="#" class="zbtn zprv ${\'js-p-\'|seed}">${label.prev||"上一页"}</a>{/if}{list 1..number as x}<a href="#" class="zpgi zpg${x} ${\'js-i-\'|seed}"></a>{/list}{if !defined("nonxt")||!nonxt}<a href="#" class="zbtn znxt ${\'js-n-\'|seed}">${label.next||"下一页"}</a>{/if}{/trim}')
})();
(function () {
    var bd = NEJ.P, cg = NEJ.O, cz = NEJ.F, bb = bd("nej.e"), bj = bd("nej.v"), bm = bd("nej.u"), bR = bd("nej.ut"), bc;
    if (!!bR.XM)
        return;
    bR.XM = NEJ.C();
    bc = bR.XM.bT(bR.dX);
    bc.cv = function (bf) {
        this.cw(bf);
        this.XF = bf.pbtn;
        this.dx = bf.nbtn;
        this.Xt = bf.sbtn;
        this.Xo = bf.ebtn;
        this.jY = bf.event || "click";
        this.lD = bf.selected || "js-selected";
        this.oV = bf.disabled || "js-disabled";
        this.clm(bf.list);
        this.Qg(bf.index || 1, bf.total || 1)
    }
        ;
    bc.cR = function () {
        this.cW();
        delete this.dn;
        delete this.jY;
        delete this.XF;
        delete this.dx;
        delete this.Xt;
        delete this.Xo;
        delete this.bKZ;
        delete this.iw;
        delete this.ef;
        delete this.lD;
        delete this.oV
    }
        ;
    bc.clm = function () {
        var boh = function (bh) {
            this.dn.push(bh);
            this.df([[bh, this.jY, this.es.fE(this, 0)]])
        };
        return function (bk) {
            this.dn = [];
            this.df([[this.XF, "click", this.es.fE(this, -1)], [this.dx, "click", this.es.fE(this, 1)], [this.Xt, "click", this.es.fE(this, -2)], [this.Xo, "click", this.es.fE(this, 2)]]);
            bm.cr(bk, boh, this)
        }
    }();
    bc.GG = function (bh, bv) {
        if (bv == null) {
            bh.innerText = "";
            bb.cf(bh, "display", "none");
            bb.bB(bh, this.lD)
        } else {
            bh.innerText = bv;
            bb.cf(bh, "display", "");
            bv == this.ef ? bb.bC(bh, this.lD) : bb.bB(bh, this.lD)
        }
    }
        ;
    bc.bok = function () {
        if (this.ef <= 1) {
            bb.bC(this.XF, this.oV);
            bb.bC(this.Xt, this.oV)
        } else {
            bb.bB(this.XF, this.oV);
            bb.bB(this.Xt, this.oV)
        }
        if (this.ef >= this.iw) {
            bb.bC(this.dx, this.oV);
            bb.bC(this.Xo, this.oV)
        } else {
            bb.bB(this.dx, this.oV);
            bb.bB(this.Xo, this.oV)
        }
    }
        ;
    bc.Xj = cz;
    bc.bol = function () {
        this.Xj();
        this.bok();
        this.bG("onchange", {
            last: this.bKZ,
            total: this.iw,
            index: this.ef,
            ext: this.bom
        })
    }
        ;
    bc.bLx = function (bv) {
        bv = parseInt(bv);
        if (isNaN(bv) || this.iw == null)
            return !1;
        bv = Math.max(1, Math.min(bv, this.iw));
        this.bKZ = this.ef;
        this.ef = bv;
        return !0
    }
        ;
    bc.bon = function (dO) {
        dO = parseInt(dO);
        if (isNaN(dO) || dO < 1)
            return !1;
        this.iw = dO;
        return !0
    }
        ;
    bc.es = function (be, ge) {
        bj.dz(be);
        var bM = bj.bZ(be);
        if (!bM || bb.cN(bM, this.lD) || bb.cN(bM, this.oV))
            return;
        var bv = bM.innerText;
        switch (ge) {
            case 1:
            case -1:
                bv = this.ef + ge;
                break;
            case 2:
                bv = this.iw;
                break;
            case -2:
                bv = 1;
                break
        }
        this.lC(bv)
    }
        ;
    bc.uw = function () {
        return this.ef
    }
        ;
    bc.lC = function (bv) {
        var clk = this.ef;
        this.bLx(bv);
        if (clk != this.ef)
            this.bol();
        return this
    }
        ;
    bc.lL = function () {
        return this.iw
    }
        ;
    bc.RG = function (dO) {
        if (this.bon(dO) && this.ef != null) {
            this.ef = 1;
            this.bol()
        }
        return this
    }
        ;
    bc.bog = function (dO) {
        if (this.bon(dO)) {
            this.Xj();
            this.bok()
        }
        return this
    }
        ;
    bc.Qg = function (bv, dO) {
        if (!this.bon(dO) || !this.bLx(bv))
            return this;
        this.bol();
        return this
    }
})();
(function () {
    var bd = NEJ.P, cg = NEJ.O, bb = bd("nej.e"), bm = bd("nej.u"), en = bd("nej.x"), bR = bd("nej.ut"), bc;
    if (!!bR.Px)
        return;
    bR.Px = NEJ.C();
    bc = bR.Px.bT(bR.XM);
    bc.dG = function () {
        this.dM();
        var bh = bb.ew("span", "zdot");
        bh.innerText = "...";
        this.WP = [bh.cloneNode(true), bh]
    }
        ;
    bc.cR = function () {
        this.cW();
        this.bMm()
    }
        ;
    bc.bMm = function () {
        bb.oi(this.WP[0]);
        bb.oi(this.WP[1])
    }
        ;
    bc.Xj = function () {
        this.bom = {
            last: !1,
            first: !1,
            list: this.dn
        };
        this.bMm();
        this.GG(this.dn[0], 1);
        var cQ = 1
            , cD = this.dn.length;
        if (this.iw < cD) {
            for (var rT; cQ < cD; cQ++) {
                rT = cQ + 1;
                this.GG(this.dn[cQ], rT > this.iw ? null : rT)
            }
            return
        }
        if (this.ef > 1) {
            var dB = Math.floor((cD - 2) / 2)
                , clj = this.iw - cD + 2
                , ko = Math.max(2, this.ef - dB);
            if (this.iw >= cD) {
                ko = Math.min(ko, clj)
            }
            if (ko > 2) {
                this.dn[0].insertAdjacentElement("afterEnd", this.WP[0]);
                this.bom.first = !0
            }
            for (var bv; ; cQ++) {
                bv = ko + cQ - 1;
                if (bv > this.ef)
                    break;
                this.GG(this.dn[cQ], bv)
            }
        }
        if (this.ef < this.iw) {
            var bv, ko = this.ef + 1;
            for (var i = 0, l = cD - 2; ; i++ ,
                cQ++) {
                bv = ko + i;
                if (cQ > l || bv > this.iw)
                    break;
                this.GG(this.dn[cQ], bv)
            }
            if (bv < this.iw) {
                this.dn[cQ].insertAdjacentElement("beforeBegin", this.WP[1]);
                this.bom.last = !0
            }
            if (bv <= this.iw) {
                this.GG(this.dn[cQ++], this.iw)
            }
        }
        for (; cQ < cD; cQ++) {
            this.GG(this.dn[cQ])
        }
    }
        ;
    bb.cli = en.cli = function (cS, bf) {
        var bE = bb.mX(cS);
        if (!bE)
            return null;
        if (!bR.Zd(bE, bR.Px)) {
            bf = bf || {};
            var bk = !bf.clazz ? bb.ek(bE) : bb.bN(bE, bf.clazz);
            bf.pbtn = bk.shift();
            bf.nbtn = bk.pop();
            bf.list = bk;
            delete bf.clazz
        }
        return bR.Zd(bE, bR.Px, bf || cg)
    }
        ;
    en.isChange = !0
})();
(function () {
    var bd = NEJ.P, cg = NEJ.O, gI = NEJ.R, bb = bd("nej.e"), bm = bd("nej.u"), bL = bd("nej.ut"), bR = bd("nej.ui"), bc, bO, hH;
    if (!!bR.Pm)
        return;
    bR.Pm = NEJ.C();
    bc = bR.Pm.bT(bR.bnY);
    bO = bR.Pm.dC;
    bc.cv = function (bf) {
        bf.number = parseInt(bf.number) || 9;
        this.cw(bf);
        this.lQ = bL.Px.bH(this.hj)
    }
        ;
    bc.hS = function (be) {
        if (!!this.YN.noend) {
            var bMx = be.ext || cg
                , bk = bMx.list || gI;
            if (bMx.last) {
                bb.cf(bk[bk.length - 1], "display", "none")
            }
        }
        bO.hS.apply(this, arguments)
    }
})();
(function () {
    var bd = NEJ.P, cg = NEJ.O, cz = NEJ.F, bb = bd("nej.e"), bj = bd("nej.v"), bm = bd("nej.u"), cq = bd("nej.ui"), bR = bd("nej.ut"), bc;
    if (!!bR.Wv)
        return;
    bR.Wv = NEJ.C();
    bc = bR.Wv.bT(bR.dX);
    bc.cv = function (bf) {
        this.kg = {};
        this.cw(bf);
        this.kH = bb.bD(bf.parent);
        this.gD = {
            parent: this.kH
        };
        this.sv = parseInt(bf.limit) || 10;
        this.zH = parseInt(bf.first) || this.sv;
        this.clh(bf.item);
        this.clg(bf.cache || cg);
        this.clf(bf.pager || cg);
        this.is()
    }
        ;
    bc.cR = function () {
        this.bG("onbeforerecycle");
        this.OY();
        this.cW();
        if (this.kg.clear) {
            this.bU.vC(this.kg.key)
        }
        this.bU.bX();
        if (!!this.ki) {
            this.ki.bX();
            delete this.ki
        }
        delete this.bMZ;
        delete this.hj;
        delete this.Wq;
        delete this.bU;
        delete this.kH;
        delete this.OV;
        delete this.gD;
        delete this.kg
    }
        ;
    bc.bNg = function (bE) {
        return bE + "" + bb.Ks()
    }
        ;
    bc.AH = function (cQ, cs, hA, cD) {
        var bo = {
            index: 1,
            total: 1
        };
        if (cs >= cQ) {
            bo.index = Math.floor((cs - cQ) / hA) + 2
        }
        if (cD > cQ) {
            bo.total = Math.ceil((cD - cQ) / hA) + 1
        }
        return bo
    }
        ;
    bc.bNi = function (bP) {
        delete this.OV;
        this.Ig = bP;
        this.df([[this.kH, "click", this.cle.bi(this)]])
    }
        ;
    bc.clh = function (bu) {
        if (bm.gO(bu)) {
            this.bNi(bu);
            return
        }
        NEJ.X(this.gD, bu);
        var fd = this.gD.klass;
        delete this.gD.klass;
        if (bm.gO(fd)) {
            this.bNi(fd);
            return
        }
        delete this.Ig;
        this.OV = fd;
        this.gD.ondelete = this.bG.bi(this, "ondelete");
        this.gD.onupdate = this.bG.bi(this, "onupdate")
    }
        ;
    bc.clg = function (bW) {
        var fd = bW.klass
            , lf = NEJ.X({}, bW);
        this.kg.key = lf.lkey;
        this.kg.data = lf.data || {};
        this.kg.clear = !!lf.clear;
        this.gD.pkey = lf.key || "id";
        lf.onlistload = this.boy.bi(this);
        lf.onpullrefresh = this.cld.bi(this);
        if (!!fd && "onlistchange" in fd) {
            this.df([[fd, "listchange", this.boB.bi(this)]])
        } else {
            lf.onitemadd = this.Vy.bi(this);
            lf.onitemdelete = this.Vt.bi(this);
            lf.onitemupdate = this.bOc.bi(this)
        }
        this.bU = (fd || bR.RO).bH(lf);
        if (bW.total != null) {
            this.bU.RG(this.kg.key, bW.total)
        }
        if (!!bW.list) {
            this.bU.tZ(this.kg.key, bW.list)
        }
    }
        ;
    bc.clf = function (uF) {
        this.bMZ = uF.klass || cq.Pm;
        this.hj = NEJ.X({}, uF);
        if (bm.fU(uF.parent)) {
            this.hj.parent = uF.parent[0];
            this.Oy = uF.parent.slice(1);
            if (!this.Oy || !this.Oy.length) {
                delete this.Oy
            }
        }
        delete this.hj.klass
    }
        ;
    bc.OY = function () {
        var hx = /^(?:table|tr|tbody|ul|ol|select)$/i;
        return function () {
            this.bG("onbeforelistclear", {
                parent: this.kH
            });
            if (!!this.hs && this.hs.length > 0) {
                this.hs = this.OV.bX(this.hs);
                delete this.hs
            }
            if (hx.test(this.kH.tagName)) {
                bb.bGI(this.kH)
            } else {
                this.kH.innerHTML = ""
            }
        }
    }();
    bc.boI = function (Vl) {
        if (!!this.hj.fixed)
            return;
        bb.cf(this.hj.parent, "display", Vl);
        bm.cr(this.Oy, function (cS) {
            bb.cf(cS, "display", Vl)
        }, this)
    }
        ;
    bc.boK = function () {
        var bv = this.hj.index || 1;
        delete this.hj.index;
        if (!!this.ki) {
            bv = this.ki.uw()
        }
        this.AE({
            last: bv,
            index: bv
        })
    }
        ;
    bc.AE = function (be) {
        this.bG("onpagechange", be)
    }
        ;
    bc.btd = function (cs) {
        this.kg.offset = cs;
        this.Yi()
    }
        ;
    bc.bte = function (bf) {
        return bf
    }
        ;
    bc.Yi = function () {
        this.Oq();
        var bl = this.kg.data;
        bl.offset = this.kg.offset;
        var By = bl.offset == 0;
        bl.total = By;
        this.kg.limit = By ? this.zH : this.sv;
        bl.limit = this.kg.limit;
        this.bU.pH(this.bte(NEJ.X({}, this.kg)))
    }
        ;
    bc.boy = function (bf) {
        if (bf.key != this.kg.key || bf.offset != this.kg.offset)
            return;
        this.UE();
        var bk = this.bU.iG(bf.key);
        if (!bk || !bk.length) {
            this.boU();
            return
        }
        var hA = bf.limit
            , cs = bf.offset;
        if (this.boV(bk, cs, hA))
            return;
        this.bG("onbeforelistrender", {
            list: bk,
            offset: cs,
            parent: this.kH
        });
        if (!!this.Ig) {
            this.gD.xlist = bk;
            this.gD.beg = cs;
            this.gD.end = Math.min(bk.length, cs + hA) - 1;
            this.gD.act = "list";
            var fg = bb.dm(this.Ig, this.gD);
            this.Ud(fg)
        } else {
            this.gD.limit = hA;
            this.gD.offset = cs;
            var jX = bb.BT(bk, this.OV, this.gD);
            this.TZ(jX)
        }
        this.bG("onafterlistrender", {
            list: bk,
            offset: cs,
            parent: this.kH
        })
    }
        ;
    bc.cld = function (bf) {
        if (!this.Wq)
            return;
        delete this.Wq;
        this.UE("onafterpullrefresh");
        this.is()
    }
        ;
    bc.btw = function (bv, dO) {
        if (!!this.ki) {
            var AY = this.ki.uw()
                , clc = this.ki.lL();
            if (AY > dO || dO != clc) {
                this.ki.bX();
                delete this.ki;
                this.AE({
                    last: AY,
                    index: Math.min(bv, dO)
                });
                return !0
            }
        } else {
            this.hj.index = bv;
            this.hj.total = dO;
            this.ki = this.bMZ.bH(this.hj);
            this.ki.wR("onchange", this.AE.bi(this));
            bm.cr(this.Oy, function (cS) {
                this.ki.bi(cS)
            }, this)
        }
    }
        ;
    bc.bty = function () {
        var hw = +(new Date);
        return function (bl) {
            var bE = bl[this.gD.pkey];
            if (!bE) {
                bl["dirty-data"] = !0;
                bl[this.gD.pkey] = "dirty-" + hw++
            }
            return bl
        }
    }();
    bc.btA = function (bl) {
        var bE = bl[this.gD.pkey];
        if (!!bl["dirty-data"]) {
            delete bl["dirty-data"];
            delete bl[this.gD.pkey]
        }
        return bE
    }
        ;
    bc.btC = function () {
        var clb = function (nt, nY) {
            this.kH.insertAdjacentElement(nt, nY)
        };
        return function (nt, bl) {
            var KE = [bl];
            if (!!this.Ig) {
                this.gD.xlist = KE;
                this.gD.beg = 0;
                this.gD.end = 0;
                this.gD.act = "add";
                this.Ud(bb.dm(this.Ig, this.gD), nt)
            } else {
                this.gD.limit = 1;
                this.gD.offset = 0;
                this.gD.parent = clb.bi(this, nt);
                var jX = bb.BT(KE, this.OV, this.gD);
                this.gD.parent = this.kH;
                this.TZ(jX)
            }
        }
    }();
    bc.Oq = cz;
    bc.UE = function (bY) {
        var be = {
            parent: this.kH
        };
        this.bG(bY || "onafterlistload", be);
        if (!be.stopped) {
            bb.oi(this.dE)
        }
    }
        ;
    bc.boV = cz;
    bc.bpe = function (cT, nt) {
        if (bm.gO(cT)) {
            if (!this.dE)
                this.dE = bb.ew("div");
            this.dE.innerHTML = cT
        } else {
            this.dE = cT
        }
        this.kH.insertAdjacentElement(nt || "beforeEnd", this.dE)
    }
        ;
    bc.zN = function (bY, mq, nt) {
        var be = {
            parent: this.kH
        };
        this.bG(bY, be);
        if (!be.stopped) {
            this.bpe(be.value || mq, nt)
        }
    }
        ;
    bc.boU = cz;
    bc.Ud = cz;
    bc.TZ = cz;
    bc.cle = function () {
        var hx = /^(?:delete|update)$/;
        return function (be) {
            var bh = bj.bZ(be, "d:action");
            if (!bh)
                return;
            var ch = bb.bz(bh, "action");
            if (!hx.test(ch))
                return;
            var bE = bb.bz(bh, "id");
            if (!bE)
                return;
            var bu = this.bU.fH(bE);
            if (!bu)
                return;
            bj.co(be);
            this.bG("on" + ch, {
                data: bu,
                id: bu[this.gD.pkey],
                body: bb.bD(this.bNg(bE))
            })
        }
    }();
    bc.Vy = cz;
    bc.Yf = function (be) {
        var bl = be.data || {}
            , bf = {
                data: bl,
                key: this.kg.key,
                id: bl[this.gD.pkey]
            };
        this.bG("onbeforedelete", bf);
        this.bU.Ry(bf)
    }
        ;
    bc.Vt = cz;
    bc.Yd = function (be) {
        var bl = be.data || {}
            , bf = {
                data: bl,
                key: this.kg.key
            };
        this.bG("onbeforeupdate", bf);
        this.bU.Yl(bf)
    }
        ;
    bc.bOc = function (be) {
        this.Nx(be, "onafterupdate");
        if (be.stopped)
            return;
        var bE = be.data[this.gD.pkey];
        if (!!this.hs) {
            var bu = bb.bJK(bE);
            if (!!bu)
                bu.is(be.data)
        } else {
            var bh = bb.bD(bE + "" + bb.Ks());
            if (!bh)
                return;
            var bk = this.bU.iG(be.key)
                , bv = bm.eu(bk, be.data);
            if (bv < 0)
                return;
            this.gD.list = bk;
            this.gD.beg = bv;
            this.gD.end = bv;
            this.gD.act = "update";
            var fg = bb.dm(this.Ig, this.gD);
            bh.insertAdjacentHTML("afterEnd", fg);
            bb.dY(bh)
        }
    }
        ;
    bc.Nx = function (be, bY) {
        var bu = be.data;
        if (!bu || bu[this.gD.pkey] == null) {
            this.bG("onerror", be);
            be.stopped = !0
        }
        if (!be.stopped) {
            this.bG(bY, be)
        }
    }
        ;
    bc.bph = cz;
    bc.bpl = cz;
    bc.boB = function (be) {
        if (be.key != this.kg.key)
            return;
        switch (be.action) {
            case "add":
                this.Vy(be);
                break;
            case "delete":
                this.Vt(be);
                break;
            case "update":
                this.bOc(be);
                break;
            case "refresh":
                this.is();
                break;
            case "unshift":
                this.bpl(be.offset, be.limit);
                break;
            case "append":
                this.bph(be.offset, be.limit);
                break
        }
    }
        ;
    bc.qO = function (bu) {
        this.Yd({
            data: bu
        })
    }
        ;
    bc.nr = function (bu) {
        this.Yf({
            data: bu
        })
    }
        ;
    bc.Ns = function (bu) {
        this.bU.kJ({
            data: bu,
            key: this.kg.key
        })
    }
        ;
    bc.uB = function () {
        return this.bU
    }
        ;
    bc.btT = function (bl) {
        this.btC("afterBegin", this.bty(bl));
        return this.btA(bl)
    }
        ;
    bc.cla = function (bl) {
        this.btC("beforeEnd", this.bty(bl));
        return this.btA(bl)
    }
        ;
    bc.is = function () {
        this.OY();
        this.boK()
    }
        ;
    bc.cuI = function () {
        this.bU.vC(this.kg.key);
        this.is()
    }
        ;
    bc.bfd = function () {
        if (!!this.Wq)
            return;
        this.Wq = !0;
        this.zN("onbeforepullrefresh", "列表刷新中...", "afterBegin");
        this.bU.bfd({
            key: this.kg.key,
            data: this.kg.data
        })
    }
        ;
    bc.lL = function () {
        return this.bU.lL(this.kg.key)
    }
        ;
    bc.btY = function () {
        return this.ki
    }
        ;
    bc.YE = function () {
        return this.bU.YE(this.kg.key)
    }
})();
(function () {
    var bd = NEJ.P, cg = NEJ.O, gI = NEJ.R, bm = bd("nej.u"), bb = bd("nej.e"), bR = bd("nej.ut"), bc, bO;
    if (!!bR.kb)
        return;
    bR.kb = NEJ.C();
    bc = bR.kb.bT(bR.Wv);
    bO = bR.kb.dC;
    bc.AH = function (cs, cD) {
        return bO.AH.call(this, this.zH, cs, this.sv, cD)
    }
        ;
    bc.bpo = function (bv) {
        var cs = 0;
        if (bv > 1)
            cs = this.zH + (bv - 2) * this.sv;
        return cs
    }
        ;
    bc.AE = function (be) {
        bO.AE.apply(this, arguments);
        if (!be.stopped) {
            this.btd(this.bpo(be.index))
        }
    }
        ;
    bc.Oq = function () {
        this.OY();
        this.zN("onbeforelistload", "列表加载中...")
    }
        ;
    bc.UE = function () {
        bO.UE.apply(this, arguments);
        this.OY()
    }
        ;
    bc.boV = function (bk, cs, hA) {
        var cG = this.AH(cs, bk.length);
        if (this.btw(cG.index, cG.total))
            return !0;
        this.boI(cG.total > 1 ? "" : "none")
    }
        ;
    bc.boU = function () {
        this.zN("onemptylist", "没有列表数据！")
    }
        ;
    bc.bpe = function (cT, nt) {
        if (!nt && bm.gO(cT)) {
            this.kH.innerHTML = cT;
            return
        }
        bO.bpe.apply(this, arguments)
    }
        ;
    bc.Ud = function (fg) {
        this.kH.innerHTML = fg
    }
        ;
    bc.TZ = function (jX) {
        this.hs = jX
    }
        ;
    bc.Vy = function (be) {
        this.Nx(be, "onafteradd");
        if (!be.stopped)
            this.is()
    }
        ;
    bc.Vt = function (be) {
        this.Nx(be, "onafterdelete");
        if (!be.stopped)
            this.is()
    }
        ;
    bc.bph = function (cs, hA) {
        var bv = 1;
        if (!!this.ki) {
            bv = this.ki.uw()
        }
        var kO = this.bpo(bv)
            , hU = kO + (bv > 1 ? this.sv : this.zH);
        if (cs >= hU && !!this.ki) {
            var cG = this.AH(0, this.lL());
            this.ki.bog(cG.total);
            this.boI(cG.total > 1 ? "" : "none")
        } else {
            this.is()
        }
    }
        ;
    bc.bpl = function (cs, hA) {
        var bv = 1;
        if (!!this.ki) {
            bv = this.ki.uw()
        }
        var kO = this.bpo(bv)
            , cG = this.AH(kO, this.lL());
        this.AE({
            last: bv,
            index: cG.index
        })
    }
})();
(function () {
    var bd = NEJ.P, cg = NEJ.O, cz = NEJ.F, bb = bd("nej.e"), bj = bd("nej.v"), bL = bd("nej.ut"), bm = bd("nej.u"), bn = bd("nm.x"), bs = bd("nm.d"), bK = bd("nm.w"), hI = 40, bc, bO;
    bK.bbF = NEJ.C();
    bc = bK.bbF.bT(bL.dX);
    bO = bK.bbF.dC;
    bc.dG = function () {
        this.dM()
    }
        ;
    bc.cv = function (bf) {
        this.cw(bf);
        this.Nj = bf.inputer;
        this.bpu = bf.tipper;
        this.df([[this.Nj, "input", this.gQ.bi(this)]])
    }
        ;
    bc.cR = function () {
        this.cW();
        this.HT(null, null)
    }
        ;
    bc.gQ = function (be) {
        if (be && be.type == "keyup" && (be.keyCode != 8 || be.keyCode != 68))
            return;
        var bY = this.Nj.value, cuJ;
        if (bn.JA(bY) > hI) {
            this.Nj.value = bn.Co(bY, hI);
            this.HT("歌单名不能超过20个汉字或40个英文字符！", arguments.callee.bi(this))
        } else if (bY.indexOf("#") >= 0 || bY.indexOf("@") >= 0) {
            this.HT("歌单名不能包含字符“@”和“#”！")
        } else {
            this.HT(null, null);
            this.bG("onchange", {
                value: bY
            })
        }
    }
        ;
    bc.ckU = function () {
        this.gQ()
    }
        ;
    bc.HT = function () {
        var bE = 0;
        return function (fy, bul) {
            if (!!bE)
                window.clearTimeout(bE);
            if (!fy) {
                bb.bC(this.bpu, "f-vhide");
                this.bum = !1;
                return
            }
            this.bpu.innerHTML = '<i class="u-icn u-icn-25"></i>' + fy;
            bb.bB(this.bpu, "f-vhide");
            this.bum = !0;
            if (bm.hF(bul))
                bE = window.setTimeout(function () {
                    this.HT(null, null);
                    bul()
                }
                    .bi(this), 1e3)
        }
    }();
    bc.bus = function () {
        if (this.bum)
            return !1;
        if (bn.kL(this.Nj.value)) {
            this.HT("歌单名不能为空");
            return !1
        }
        return !0
    }
        ;
    bc.gV = function () {
        return this.Nj.value
    }
})();
(function () {
    var bd = NEJ.P, cg = NEJ.O, bj = bd("nej.v"), bb = bd("nej.e"), bA = bd("nej.j"), bp = bd("nm.l"), bK = bd("nm.w"), cV = bd("nej.ui"), bs = bd("nm.d"), bn = bd("nm.x"), bc, bO;
    bp.bao = NEJ.C();
    bc = bp.bao.bT(bp.fA);
    bO = bp.bao.dC;
    bc.dG = function () {
        this.dM()
    }
        ;
    bc.di = function () {
        this.dv();
        var bk = bb.bN(this.bq, "j-flag");
        this.baa = {
            inputer: bk[0],
            tipper: bk[1]
        };
        this.iz = {
            onerror: this.buC.bi(this),
            onitemadd: this.buC.bi(this)
        };
        this.rL = bk[2];
        bj.bt(bk[2], "click", this.Ed.bi(this));
        bj.bt(bk[3], "click", this.CT.bi(this));
        bj.bt(this.bq, "keypress", this.buJ.bi(this))
    }
        ;
    bc.dq = function () {
        this.dr = "m-wgt-create"
    }
        ;
    bc.cv = function (bf) {
        bf.clazz = " m-layer-w2";
        bf.parent = bf.parent || document.body;
        bf.title = "新建歌单";
        bf.draggable = !0;
        bf.destroyalbe = !0;
        bf.mask = true;
        this.cw(bf);
        this.baa.inputer.value = bf.name || "";
        this.uV = bK.bbF.bH(this.baa);
        this.uV.ckU();
        this.bU = bs.jd.bH(this.iz);
        setTimeout(function () {
            this.baa.inputer.focus()
        }
            .bi(this), 0)
    }
        ;
    bc.cR = function () {
        this.cW();
        if (this.uV) {
            this.uV.bX();
            delete this.uV
        }
        this.tW(!1);
        this.baa.inputer.value = ""
    }
        ;
    bc.tW = function (MW) {
        this.qN = MW;
        if (MW) {
            this.rL.innerHTML = "<i>新建中...</i>";
            bb.bC(this.rL, "u-btn2-dis")
        } else {
            this.rL.innerHTML = "<i>新 建</i>";
            bb.bB(this.rL, "u-btn2-dis")
        }
    }
        ;
    bc.Ed = function () {
        if (this.qN || !this.uV.bus())
            return;
        var dH = {
            key: "playlist_new-" + GUser.userId,
            data: {
                name: this.uV.gV()
            },
            offset: 1
        };
        this.bU.kJ(dH);
        this.tW(!0)
    }
        ;
    bc.buC = function (be) {
        var dP = (be.result || cg).code;
        if (!dP) {
            this.bG("onsuccess", be.data)
        } else {
            this.bG("onerror", be)
        }
        this.cC()
    }
        ;
    bc.CT = function () {
        this.cC()
    }
        ;
    bc.buJ = function (be) {
        if (be.keyCode == 13)
            this.Ed()
    }
})();
(function () {
    var bd = NEJ.P, cg = NEJ.O, cz = NEJ.F, bb = bd("nej.e"), bj = bd("nej.v"), bm = bd("nej.u"), bL = bd("nej.ut"), bA = bd("nej.j"), bn = bd("nm.x"), bs = bd("nm.d"), bp = bd("nm.l"), bc, bO;
    bp.bpE = NEJ.C();
    bc = bp.bpE.bT(bp.fA);
    bO = bp.bpE.dC;
    bc.dG = function () {
        this.dM()
    }
        ;
    bc.di = function () {
        this.dv();
        var bk = bb.bN(this.bq, "j-flag");
        this.jC = {
            limit: 301,
            parent: bk[1],
            cache: {
                klass: bs.jd,
                lkey: "playlist_new-" + GUser.userId,
                onlisterror: this.bpS.bi(this)
            },
            item: {
                klass: "m-wgt-subscribe-item",
                cutStr: bn.DQ,
                escape: bm.fo
            }
        };
        this.iz = {
            onsuccess: this.YG.bi(this),
            onerror: this.gg.bi(this)
        };
        bj.bt(bk[0], "click", this.Ed.bi(this));
        bj.bt(bk[1], "click", this.nH.bi(this))
    }
        ;
    bc.dq = function () {
        this.dr = "m-wgt-subscribe"
    }
        ;
    bc.cv = function (bf) {
        bf.parent = bf.parent || document.body;
        bf.clazz = " m-layer-w2";
        bf.title = "添加到歌单";
        bf.draggable = !0;
        bf.mask = !0;
        this.cw(bf);
        this.Yr = (bf.tracks || []).reverse();
        this.jC.item.size = this.Yr.length;
        this.iz.name = bf.name || "";
        this.bvh = bs.xH.bH({
            onaddsuccess: this.AM.bi(this)
        });
        this.up = bs.jd.bH({
            onlistload: this.ckT.bi(this)
        });
        this.up.bxb();
        bm.cr(this.Yr, function (bu, bv, bk) {
            if (!bm.mK(bu)) {
                bk[bv] = this.bvh.fH(bu) || bu
            }
        }, this)
    }
        ;
    bc.ckT = function () {
        if (this.eV)
            this.eV.bX();
        this.eV = bL.kb.bH(this.jC)
    }
        ;
    bc.Ed = function () {
        this.cC();
        if (this.Er)
            this.Er.bX();
        this.Er = bp.bao.bH(this.iz);
        this.Er.bS()
    }
        ;
    bc.nH = function () {
        var ckQ = function (bh) {
            while (bh && bh != document) {
                if (bh.tagName.toLowerCase() == "li") {
                    return bh
                }
                bh = bh.parentNode
            }
        };
        return function (be) {
            bj.dz(be);
            var bM = bj.bZ(be)
                , bqe = ckQ(bM);
            if (!!bqe && !bb.cN(bqe, "dis")) {
                this.YG({
                    id: bb.bz(bqe, "id")
                })
            }
        }
    }();
    bc.YG = function (be) {
        var bE = be.id;
        if (!bE || !this.Yr.length)
            return;
        this.bvh.kJ({
            key: "track_playlist-" + bE,
            data: {
                tracks: this.Yr,
                pid: bE
            }
        });
        this.cC()
    }
        ;
    bc.AM = function () {
        this.bG("onsuccess");
        bp.ci.bS({
            tip: "收藏成功"
        })
    }
        ;
    bc.gg = function (be) {
        this.cC();
        this.bG("onerror", be);
        var dS = "收藏失败";
        switch (be.code) {
            case 405:
                dS = "操作过于频繁，先休息一下再试吧";
                break;
            case 507:
                dS = "歌单数量超过限制";
                break;
            case 502:
                dS = "歌曲已经存在"
        }
        bp.ci.bS({
            tip: dS,
            type: 2
        })
    }
        ;
    bc.bpS = function () {
        this.cC();
        bp.ci.bS({
            tip: "列表下载失败，请稍后再试",
            type: 2
        })
    }
        ;
    bn.nW = function (bf) {
        if (!GUser || !GUser.userId || GUser.userId <= 0) {
            top.login();
            return
        }
        bp.bpE.bS(bf)
    }
})();
(function () {
    var bd = NEJ.P
        , cg = NEJ.O
        , cz = NEJ.F
        , eI = bd("nej.p")
        , bb = bd("nej.e")
        , bj = bd("nej.v")
        , bA = bd("nej.j")
        , bm = bd("nej.u")
        , bn = bd("nm.x");
    var bqj, pz, ce = decodeURIComponent(location.href), kU = /.+(http:\/\/.+\/proxy.html)/.test(ce) ? RegExp.$1 : "";
    if (!!kU) {
        bA.xO("mail_proxy_url", kU)
    } else {
        kU = bA.vS("mail_proxy_url") || "about:blank"
    }
    bqj = bb.Yt({
        src: kU,
        onload: function () {
            pz = true
        }
    });
    var bvw = function () {
        bA.iF("USER_TRIGGER", {
            value: true,
            expire: 1 / (24 * 60),
            path: "/"
        })
    };
    var ckP = function () {
        if (eI.ei.browser == "ie" && parseInt(eI.ei.version) < 9) {
            bn.gM({
                clazz: "m-layer-w2",
                message: "当前浏览器版本过低，暂时无法使用，请升级后再试。"
            });
            return false
        }
        return true
    };
    bn.bqk = function (bw, bE, ch) {
        if (!ckP())
            return;
        bvw();
        if (ch == "stop") {
            if (!pz)
                throw "proxy not loaded";
            bvw();
            bqj.contentWindow.location.replace(kU + "#" + bm.eH({
                to: "ifrmMusic",
                message: JSON.stringify({
                    s: +(new Date),
                    action: "stop"
                })
            }))
        } else {
            bqj.contentWindow.location.replace(kU + "#" + bm.eH({
                to: "ifrmMusic",
                message: JSON.stringify({
                    type: bw,
                    id: bE,
                    s: +(new Date),
                    action: ch
                })
            }))
        }
    }
})();
(function () {
    var bd = NEJ.P
        , cg = NEJ.O
        , cz = NEJ.F
        , bb = bd("nej.e")
        , bj = bd("nej.v")
        , bA = bd("nej.j")
        , bm = bd("nej.u")
        , bn = bd("nm.x")
        , bp = bd("nm.l")
        , bs = bd("nm.d");
    var lu = bs.jE.bH();
    var pn = bs.xH.bH({
        onlistload: ckO,
        onitemload: ckN,
        onerror: gg
    });
    var Ex = bs.rK.bH({
        onlistload: ckM,
        onitemload: ckL,
        onerror: gg
    });
    var bvV = {};
    function wW(be) {
        var bh = bj.bZ(be, "d:resAction")
            , ch = bb.bz(bh, "resAction");
        if (bh && (ch == "play" || ch == "addto")) {
            bvX({
                action: ch,
                type: parseInt(bb.bz(bh, "resType")),
                id: bb.bz(bh, "resId"),
                from: bb.bz(bh, "resFrom"),
                data: bb.bz(bh, "resData"),
                order: bb.bz(bh, "resOrder")
            });
            ckJ(bh)
        }
    }
    function bvX(cZ) {
        var ch = cZ.action
            , bw = cZ.type
            , bE = cZ.id
            , fj = cZ.from
            , bl = cZ.data
            , vD = cZ.order
            , bf = {
                limit: 1e3,
                offset: 0,
                data: {
                    id: bE
                },
                ext: {
                    id: bE,
                    action: ch,
                    type: bw,
                    from: fj,
                    data: bl
                }
            };
        if (ch != "play" && ch != "addto" || !bw)
            return;
        if (window.GRef && GRef == "mail") {
            bn.bqk(bw, bE, ch);
            return
        }
        switch (bw) {
            case 13:
                bf.key = "track_playlist-" + bE;
                pn.pH(bf);
                if (ch == "play") {
                    bA.cE("/api/playlist/update/playcount", {
                        query: {
                            id: bE
                        }
                    })
                }
                break;
            case 17:
                bf.key = "program";
                bf.id = bE;
                Ex.Yz(bf);
                if (ch == "play") {
                    bA.cE("/api/dj/program/listen", {
                        query: {
                            id: bE
                        }
                    })
                }
                break;
            case 18:
                bf.key = "track";
                bf.id = bE;
                pn.Yz(bf);
                break;
            case 19:
                bf.key = "track_album-" + bE;
                pn.pH(bf);
                break;
            case 24:
                bf.key = "track_day";
                pn.pH(bf);
                break;
            case 2:
                bf.key = "track_artist_top-" + bE;
                pn.pH(bf);
                break;
            case 70:
                bf.key = "program_djradio-" + bE + "-" + vD;
                bf.data.radioId = bE;
                bf.data.asc = vD == 2;
                Ex.pH(bf);
                break
        }
    }
    function bwa(bk) {
        var bo = [];
        bm.cr(bk, function (bu) {
            if (bu.mainSong) {
                bu.mainSong.program = bu;
                bo.push(bu.mainSong);
                bu.localupdatetime = +(new Date);
                pn.cqS(bu.mainSong);
                bu.mainTrackId = bu.mainSong.id;
                delete bu.mainSong
            } else {
                var bwf = pn.fH(bu.mainTrackId);
                bwf && bo.push(bwf)
            }
        });
        return bo
    }
    function Wy(bk, bf) {
        var sT = bf.action == "play" && bf.type != 17 && bf.type != 18
            , gy = bf.action == "play";
        if (!bk.length)
            return;
        if (bf.type == 19) {
            bk = bn.KJ(bk, true, {
                play: true
            }, {
                    source: "album",
                    sourceid: bf.id
                })
        } else {
            bk = bn.KJ(bk, true, {
                play: true
            })
        }
        bm.cr(bk, function (bu) {
            bu.source = bn.bim({
                fid: bf.from,
                fdata: bf.data,
                type: bf.type,
                rid: bf.id
            }, bu.id)
        });
        top.player.addTo(bk, sT, gy);
        lu.Rd({
            rid: bf.id,
            type: bf.type,
            hash: bn.Kb(),
            play: gy,
            source: bf.from,
            sourceid: bf.data
        })
    }
    function ckO(be) {
        var bk = pn.iG(be.key);
        Wy(bk, be.ext)
    }
    function ckN(be) {
        var bk = [pn.fH(be.id)]
            , cm = bk[0]
            , rw = bn.qy(cm)
            , ul = cm.privilege || {};
        if (rw == 10) {
            bn.wq(ul.fee || cm.fee, cm.id, "song", null, ul)
        } else if (rw == 100) {
            bn.kN(null, null, null, true, cm)
        } else if (rw == 11) {
            bn.bNa(cm.id, 18)
        } else {
            Wy(bk, be.ext)
        }
    }
    function ckM(be) {
        var bk = bwa(Ex.iG(be.key));
        Wy(bk, be.ext)
    }
    function ckL(be) {
        var bk = bwa([Ex.fH(be.id)]);
        Wy(bk, be.ext)
    }
    function gg() {
        top.player.tipPlay("无法播放，音乐已下线")
    }
    function ckJ(bh) {
        var bw = bb.bz(bh, "resType")
            , bE = bb.bz(bh, "resId")
            , bP = bw + "-" + bE;
        if (bvV[bP])
            return;
        var bwo = bb.bD("play-count")
            , bql = bb.bN(bh.parentNode, "nb")
            , LM = null;
        if (bwo) {
            LM = bwo
        } else {
            LM = !!bql && !!bql[0] ? bql[0] : null
        }
        if (LM) {
            var dB = LM.innerHTML;
            if (/^\d+$/.test(dB)) {
                LM.innerText = +dB + 1
            }
            bvV[bP] = true
        }
    }
    bn.ckI = function (bh) {
        bj.bt(bh || document.body, "click", wW.bi(this))
    }
        ;
    bn.ckH = function (ch, bw, bE) {
        bvX({
            action: ch,
            type: bw,
            id: bE
        })
    }
})();
(function () {
    var bd = NEJ.P, cg = NEJ.O, cz = NEJ.F, bj = bd("nej.v"), bm = bd("nej.u"), bA = bd("nej.j"), bL = bd("nej.ut"), bs = bd("nm.d"), bc, bO;
    bs.gs({
        "share-all": {
            url: "/api/share/friends/resource",
            format: function (bo, bf) {
                this.ckG(bo, bf)
            },
            onerror: "onshareerror"
        },
        "share-sns": {
            url: "/api/share/resource/sns",
            format: function (bo, bf) {
                this.bG("onshareall", bf.result)
            },
            onerror: function (bo, bf) {
                this.bG("onshareall", bf.result)
            }
        },
        "share-private": {
            url: "/api/msg/private/send",
            onload: "onshareprivate",
            onerror: "onshareerror"
        },
        share_img_compound: {
            url: "/upload/event/img/compound",
            type: "POST",
            format: function (bo, bf) {
                bf.options.picUrl = bo.picUrl;
                this.bwD(bf.options, bf.result)
            },
            onerror: function (bo, bf) {
                this.bG("onshareall", bf.result)
            }
        },
        "vid-get": {
            url: "/api/video/coversvid/get",
            format: function (bV, bf) {
                this.qD("vid_info-" + bf.data.nosKey, bV);
                return bV
            }
        }
    });
    bs.bqm = NEJ.C();
    bc = bs.bqm.bT(bs.iR);
    bc.ckF = function () {
        var wr = function (bV, bf) {
            bf.times++;
            if (bf.times > 10) {
                this.bG("onvinfoerror", bf.key, bV)
            } else {
                setTimeout(gk.bi(this, bf), bf.times * 1e3)
            }
        };
        var yf = function (bV, bf) {
            this.bG("onvinfo", bf.key, bV)
        };
        var gk = function (bf) {
            var ce = bf.url;
            bA.cE(ce + "?vinfo", {
                method: "GET",
                type: "json",
                mode: 1,
                onload: yf.fE(this, bf),
                onerror: wr.fE(this, bf)
            })
        };
        return function (bf) {
            bf.times = 0;
            gk.call(this, bf)
        }
    }();
    bc.ckE = function () {
        var Ts;
        var wr = function (bV, bf) {
            if (bV.code > 0) {
                clearInterval(this.EM);
                this.bG("onviderror", bf.data.nosKey)
            }
        };
        var yf = function (bP, bV) {
            if (bV.vid && bV.covers) {
                clearInterval(this.EM);
                this.bG("onvid", bP, bV)
            }
        };
        var gk = function (bf) {
            if (+(new Date) - Ts > 60 * 60 * 1e3) {
                clearInterval(this.EM);
                this.bG("onviderror", bf.data.nosKey);
                return
            }
            bf.onload = yf.bi(this, bf.data.nosKey);
            bf.onerror = wr.bi(this);
            this.dK("vid-get", bf)
        };
        return function (bf) {
            if (!bf || !bf.data)
                return;
            Ts = +(new Date);
            this.EM = clearInterval(this.EM);
            this.EM = setInterval(gk.bi(this, bf), 1e4);
            gk.apply(this, arguments)
        }
    }();
    bc.ckC = function () {
        this.EM = clearInterval(this.EM)
    }
        ;
    bc.ckG = function (bo, oL) {
        if (bo.event && oL.snsTypes) {
            if (oL.pics) {
                var bxf = [];
                for (var i = 0, len = oL.pics.length; i < len; i++) {
                    bxf[i] = oL.pics[i].originId
                }
                this.dK("share_img_compound", {
                    data: {
                        picIds: bxf.join(",")
                    },
                    options: oL,
                    result: bo
                })
            } else {
                oL.picUrl = oL.picUrl;
                this.bwD(oL, bo)
            }
        } else {
            this.bG("onshareall", bo)
        }
        var Gb = bs.jE.bH();
        Gb.ic(oL.isPub ? "pubevent" : "shareevent", {
            id: bo.id
        })
    }
        ;
    bc.bwD = function (oL, bo) {
        var dH = {};
        dH.eventid = bo.event.id;
        dH.eventtype = bo.event.type;
        oL.picUrl && (dH.picUrl = oL.picUrl);
        dH.snsTypes = oL.snsTypes;
        dH.msg = oL.data.msg || "";
        dH.type = oL.data.type;
        oL.data.id && (dH.id = oL.data.id);
        this.dK("share-sns", {
            data: dH,
            result: bo
        })
    }
        ;
    bc.ckB = function (bf) {
        var bl = {
            type: "",
            id: 0,
            threadId: "",
            msg: "",
            actId: 0,
            pics: "",
            uuid: "publish-" + +(new Date) + bm.oX(5)
        };
        bl = NEJ.EX(bl, bf);
        if (!(bl.id > 0)) {
            delete bl.id;
            bl.type = "noresource"
        }
        if (!bl.threadId) {
            delete bl.threadId
        }
        if (!bl.actId) {
            delete bl.actId
        }
        if (!bl.pics) {
            delete bl.pics
        } else {
            bl.pics = JSON.stringify(bl.pics)
        }
        this.dK("share-all", {
            data: bl,
            snsTypes: bf.snsTypes,
            picUrl: bf.picUrl,
            pics: bf.pics,
            isPub: bf.isPub
        })
    }
        ;
    bc.ckA = function (bf) {
        this.dK("share-private", bf)
    }
        ;
    bc.ckz = function (bf) {
        this.dK("share-all", bf)
    }
})();
(function () {
    var bd = NEJ.P, cg = NEJ.O, cz = NEJ.F, bj = bd("nej.v"), bm = bd("nej.u"), bL = bd("nej.ut"), bs = bd("nm.d"), bn = bd("nm.x"), bc, bO;
    var cky = {
        40: !0
    };
    bs.gs({
        "event-list": {
            url: "/api/v1/event/get",
            filter: function (bf) {
                bf.data.getcounts = true;
                bf.data.pagesize = bf.data.limit;
                if (bf.data.offset == 0) {
                    bf.data.lasttime = -1
                }
                delete bf.data.offset
            },
            format: function (bV, bf) {
                bV.event = bn.bzn(bV.event, function (bu, bv) {
                    return !cky[bu.type]
                });
                this.ckw(bV.event);
                bf.data.lasttime = bV.lasttime;
                if (bV.event.length) {
                    bV.event.length = bf.limit
                }
                return {
                    list: bV.event,
                    total: bV.size
                }
            }
        },
        "event_latest-list": {
            url: "/api/act/event/getnews",
            format: function (bV, bf) {
                return {
                    list: bV.events,
                    total: bV.count
                }
            }
        },
        "event-pull": {
            url: "/api/event/getnews",
            filter: function (bf) {
                bf.data.pagesize = 20
            },
            format: function (bV, bf) {
                return bV.event
            }
        },
        "ievent-get": {
            type: "GET",
            url: "/api/event/get",
            onload: "oneventload",
            onerror: "oneventloaderror"
        },
        "ievent-new-get": {
            type: "GET",
            url: "/api/event/getnews",
            onload: "oneventnewload"
        },
        "ievent_user-list": {
            type: "GET",
            url: "/api/event/get/{userId}",
            filter: function (bf) {
                bf.data.time = -1;
                bf.data.getcounts = true
            },
            format: function (bV, bf) {
                bV.events.length = bf.limit;
                return {
                    list: bV.events,
                    total: bV.size
                }
            }
        },
        "ievent-res-get": {
            url: "/api/res/status",
            format: function (bo, bf) {
                bo.conf = bf.conf;
                return bo
            }
        },
        "ievent-like": {
            url: "/api/resource/like",
            onload: "oneventlike",
            filter: function (bf, cl) {
                if (bf.like) {
                    if (bf.comment) {
                        cl.url = "/api/v1/comment/like"
                    } else {
                        cl.url = "/api/resource/like"
                    }
                    cl.onload = "oneventlike";
                    cl.onerror = "oneventlikeerr"
                } else {
                    if (bf.comment) {
                        cl.url = "/api/v1/comment/unlike"
                    } else {
                        cl.url = "/api/resource/unlike"
                    }
                    cl.onload = "oneventunlike";
                    cl.onerror = "oneventunlikeerr"
                }
            },
            format: function (bo, bf) {
                bo.eid = bf.eid;
                bo.origin = bf.origin;
                bo.ext = bf.ext;
                return bo
            }
        },
        "ievent_user-del": {
            url: "/api/event/delete",
            format: function (bo, bf) {
                bo.id = bf.data.id;
                return bo
            }
        },
        "event-del": {
            url: "/api/event/delete",
            filter: function (bf, cl) {
                if (bf.data.type == "nointer") {
                    cl.url = "/api/event/rcmd/reject"
                } else {
                    cl.url = "/api/event/delete"
                }
            },
            format: function (bo, bf) {
                bo.id = bf.data.id;
                return bo
            }
        },
        "event_activity-del": {
            url: "/api/event/delete",
            format: function (bo, bf) {
                bo.id = bf.data.id;
                return bo
            }
        },
        "event_activity-list": {
            url: "/api/act/event",
            filter: function (bf) {
                bf.data.lasttime = bf.data.lasttime || -1;
                bf.data.pagesize = bf.data.limit;
                bf.data.getcounts = true;
                delete bf.data.offset
            },
            format: function (bV, bf) {
                bf.data.lasttime = bV.lasttime;
                var bk = bV.events;
                if (bV.more || bf.offset + bf.limit < bV.size) {
                    bk = this.ckv(bk, bf.data.pagesize)
                }
                return {
                    list: bk,
                    total: bV.size
                }
            },
            onerror: "onlisterror"
        }
    });
    bs.Bn = NEJ.C();
    bc = bs.Bn.bT(bs.iR);
    bc.dG = function () {
        this.dM();
        this.lu = bs.jE.bH()
    }
        ;
    bc.bqv = function (bw, dT) {
        return bw + "-" + dT
    }
        ;
    bc.cuM = function (bf) {
        this.dK("ievent-get", bf)
    }
        ;
    bc.cuN = function (bf) {
        this.dK("ievent-new-get", bf)
    }
        ;
    bc.cuO = function (bf) {
        this.dK("ievent-user-get", bf)
    }
        ;
    bc.cuP = function (bw, dT) {
        return this.sQ(this.bqv(bw, dT))
    }
        ;
    bc.cuQ = function (HJ, bf) {
        if (!HJ || !HJ.length)
            return;
        bf = bf || {};
        var cI = {
            song: 2,
            album: 4,
            playlist: 1,
            mv: 3,
            program: 5
        };
        for (var i = 0, EF = [], bxY = [], bl; i < HJ.length; ++i) {
            bl = HJ[i];
            bl = this.sQ(this.bqv(bl.type, bl.id));
            if (!bl) {
                EF.push(HJ[i].id);
                bxY.push(cI[HJ[i].type] || 0)
            }
        }
        if (!EF.length) {
            this.bG("oneventresload", bf.conf);
            return
        }
        bf.data = {
            ids: JSON.stringify(EF),
            types: JSON.stringify(bxY)
        };
        bf.onload = this.cko.bi(this);
        this.dK("ievent-res-get", bf)
    }
        ;
    bc.cko = function (bo) {
        if (bo.code != 200) {
            this.bG("oneventreserror", bo.code);
            return
        }
        var cI = {
            1: "playlist",
            2: "song",
            3: "mv",
            4: "album",
            5: "program"
        };
        for (var i = 0, bk = bo.results; i < bk.length; ++i) {
            this.qD(this.bqv(cI[bk[i].type], bk[i].id), bk[i])
        }
        this.bG("oneventresload", bo.conf)
    }
        ;
    bc.byc = function (bl) {
        var bP = "event-list";
        this.beV(bP, bl);
        this.bG("onitemadd", {
            key: bP,
            action: "add",
            data: bl,
            flag: -1
        })
    }
        ;
    bc.xI = function (bf) {
        this.dK("ievent-like", bf)
    }
        ;
    bc.nr = function (bf) {
        this.dK("ievent-delete", bf)
    }
        ;
    bc.ckv = function (bk, hA) {
        for (var i = bk.length; i < hA; i++)
            bk.push(null);
        return bk
    }
        ;
    bc.ckw = function (bk) {
        var bo = [];
        if (!bk || !bk.length)
            return;
        bm.cr(bk, function (be) {
            bo.push({
                action: "eventimpress",
                json: this.byh(be)
            })
        }, this);
        this.lu.XB(bo)
    }
        ;
    bc.byh = function () {
        var bmj = {
            32: "comment",
            33: "activity",
            34: "recomment_artist"
        }
            , ckn = [13, 17, 18, 19, 20, 21, 22, 28, 31];
        return function (be) {
            var bV = {
                id: be.id,
                sourceid: be.user.userId,
                alg: be.rcmdInfo ? be.rcmdInfo.alg : null,
                contentType: bmj[be.type] || (bm.eu(ckn, be.type) != -1 ? "user_event" : "other")
            };
            return bV
        }
    }();
    bc.Ff = function (ckm, be) {
        var bV = this.byh(be);
        bV.actionType = ckm;
        if (window.log)
            log("eventclick", bV)
    }
        ;
    bc.cuR = function (bf) {
        this.dK("event_latest-list", bf)
    }
})();
(function () {
    var bd = NEJ.P, cg = NEJ.O, cz = NEJ.F, bb = bd("nej.e"), bj = bd("nej.v"), bm = bd("nej.u"), bA = bd("nej.j"), cV = bd("nej.ui"), bn = bd("nm.x"), bQ = bd("nm.w"), bc, bO;
    bQ.bcm = NEJ.C();
    bc = bQ.bcm.bT(cV.fP);
    bO = bQ.bcm.dC;
    bc.cv = function (bf) {
        this.cw(bf);
        var ij = bf.box || cg;
        bb.hG(this.bq, {
            position: "absolute",
            width: ij.width + "px",
            height: ij.height + "px",
            top: ij.top + "px",
            left: ij.left + "px"
        });
        window.uploader = this
    }
        ;
    bc.cR = function () {
        this.cW()
    }
        ;
    bc.nH = function (be) {
        this.bG("onselect", be);
        console.log("select", be)
    }
        ;
    bc.um = function (be) {
        this.bG("onprogress", be);
        console.log("progress", be)
    }
        ;
    bc.vI = function (be) {
        if (be.code == 200) {
            this.bG("oncomplete", be)
        } else {
            this.gg(be)
        }
        console.log("complete", be)
    }
        ;
    bc.gg = function (be) {
        this.bG("onerror", be);
        console.log("error", be)
    }
        ;
    bc.hT = cz;
    bc.ckk = cz
})();
(function () {
    var bd = NEJ.P, cg = NEJ.O, bb = bd("nej.e"), bj = bd("nej.v"), bm = bd("nej.u"), bA = bd("nej.j"), cV = bd("nej.ui"), bn = bd("nm.x"), bQ = bd("nm.w"), jL = bd("cb"), bc, bO;
    bQ.bqM = NEJ.C();
    bc = bQ.bqM.bT(bQ.bcm);
    bO = bQ.bqM.dC;
    bc.dG = function () {
        this.dM()
    }
        ;
    bc.cv = function (bf) {
        this.cw(bf);
        var bP = bm.oX(8)
            , kY = "onselect" + bP
            , ld = "onprogress" + bP
            , byV = "oncomplete" + bP
            , dh = "onerror" + bP;
        jL[kY] = this.nH.bi(this);
        jL[ld] = this.um.bi(this);
        jL[byV] = this.vI.bi(this);
        jL[dh] = this.gg.bi(this);
        var ckj = "/style/swf/MusicUpload.swf?v=20150202"
            , cI = {
                music: "音频(*.mp3,*.m4a,*.x-m4a)",
                image: "*.jpg;*.jpeg;*.png;*.gif;"
            }
            , pb = {
                url: bf.api,
                token: bf.token,
                filter: cI[bf.accept] || bf.accept || bf.flashAccept || "",
                multiple: bf.multiple,
                error: "cb." + dh,
                select: "cb." + kY,
                progress: "cb." + ld,
                complete: "cb." + byV
            };
        this.qM = bb.te({
            src: ckj,
            hidden: false,
            parent: this.bq,
            onready: this.BC.bi(this),
            width: bf.box.width,
            height: bf.box.height,
            params: {
                flashvars: bm.ze(pb, "&", false),
                allowscriptaccess: "always",
                wmode: "transparent"
            }
        })
    }
        ;
    bc.cR = function () {
        this.cW();
        this.bq.innerHTML = ""
    }
        ;
    bc.BC = function (iS) {
        this.qM = iS
    }
        ;
    bc.hT = function (kq) {
        this.qM.upload(kq)
    }
        ;
    bc.ckk = function () {
        this.qM.cancle()
    }
        ;
    bc.sY = function (Fs) {
        this.qM.disable(Fs)
    }
})();
(function () {
    var bd = NEJ.P, cg = NEJ.O, fu = bd("nej.g"), bb = bd("nej.e"), bj = bd("nej.v"), bm = bd("nej.u"), bA = bd("nej.j"), cV = bd("nej.ui"), bn = bd("nm.x"), bQ = bd("nm.w"), bc, bO;
    var jN = bb.tY(".#<uispace>{position:absolute;z-index:100;overflow:hidden;cursor:pointer;}.#<uispace> .hfile{position:absolute;top:0;left:0;width:100%;height:100%;cursor:pointer;opacity:0;filter:Alpha(opacity=0);font-size:12px;font-size:16px;*font-size:15px;}");
    var hH = bb.jK('<div class="' + jN + '"><form><input multiple="multiple" type="file" name="uploadfile" class="hfile" size="70"></form></div>');
    bQ.bqP = NEJ.C();
    bc = bQ.bqP.bT(bQ.bcm);
    bO = bQ.bqP.dC;
    bc.dq = function () {
        this.nd = jN;
        this.dr = hH
    }
        ;
    bc.di = function () {
        this.dv();
        var cA = bb.ek(this.bq);
        this.cK = cA[0];
        bj.bt(this.cK.uploadfile, "change", this.sX.bi(this))
    }
        ;
    bc.cv = function (bf) {
        this.cw(bf);
        this.cki = bf.api || "";
        this.XA = bf.multiple;
        this.cK.multiple = this.XA ? "coverImgUrl" : "";
        this.cK.reset();
        this.WZ = [];
        this.WK = {};
        var cI = {
            music: "audio/mp3,audio/x-m4a,audio/m4a",
            image: "image/*"
        };
        if (bf.accept || bf.htmlAccept) {
            this.cK.uploadfile.accept = cI[bf.accept] || bf.accept || bf.htmlAccept
        }
        if (bf.tipTitle) {
            this.cK.uploadfile.title = bf.tipTitle
        }
    }
        ;
    bc.cR = function () {
        this.cW();
        this.brh();
        this.cK.reset();
        delete this.WZ;
        delete this.WK;
        this.cK.uploadfile.accept = "*"
    }
        ;
    bc.sX = function (be) {
        var bzD = this.cK.uploadfile.files
            , bzE = [];
        if (!this.XA) {
            this.WZ = [];
            this.WK = {}
        }
        for (var i = 0, ii = bzD.length; i < ii; i++) {
            var Wn = this.ckh(bzD[i]);
            this.WZ.push(Wn);
            this.WK[Wn.uuid] = Wn;
            bzE.push(Wn);
            if (!this.XA)
                break
        }
        this.nH(bzE);
        this.cK.reset()
    }
        ;
    bc.brh = function () {
        if (this.bzH) {
            this.bzJ = true;
            bA.mx(this.Hx);
            this.bzJ = false;
            delete this.bzH;
            delete this.Hx
        }
    }
        ;
    bc.ckh = function (fc) {
        return {
            uuid: "file-" + +(new Date) + bm.oX(5),
            name: fc.name,
            size: fc.size,
            refernce: fc
        }
    }
        ;
    bc.hT = function (kq) {
        this.brh();
        var fc = this.XA ? this.WK[kq] : this.WZ[0]
            , bl = new FormData
            , pM = {};
        if (fc) {
            pM[fu.Ap] = fu.Ge;
            bl.append("fileupload", fc.refernce);
            this.bzH = fc;
            this.Hx = bA.cE(this.cki, {
                type: "json",
                method: "post",
                headers: pM,
                data: bl,
                timeout: 0,
                onload: this.BP.bi(this, kq),
                onerror: this.BP.bi(this, kq),
                onuploading: this.ckg.bi(this, kq)
            })
        }
    }
        ;
    bc.BP = function (kq, be) {
        be.uuid = kq;
        if (be.code == 200) {
            this.vI(be)
        } else {
            if (!this.bzJ) {
                this.gg(be)
            }
        }
    }
        ;
    bc.ckg = function (kq, be) {
        be.uuid = kq;
        this.um(be)
    }
        ;
    bc.ckf = function () {
        this.brh()
    }
        ;
    bc.sY = function (Fs) {
        if (Fs) {
            this.cC()
        } else {
            this.bS()
        }
    }
})();
(function () {
    var bd = NEJ.P
        , cg = NEJ.O
        , bQ = bd("nm.w")
        , ckd = typeof FormData != "undefined";
    bQ.FJ = NEJ.C();
    bQ.FJ.bT(ckd ? bQ.bqP : bQ.bqM)
})();
(function () {
    var bd = NEJ.P, bb = bd("nej.e"), fu = bd("nej.g"), bj = bd("nej.v"), bm = bd("nej.u"), im = bd("nej.n"), bL = bd("nej.ut"), cq = bd("nej.ui"), bK = bd("nm.w"), bp = bd("nm.l"), bs = bd("nm.d"), bn = bd("nm.x"), bQ = bd("nm.x.f"), bc, bO, brl = {
        0: "",
        "-1": "不能添加重复图片",
        "-10": "最多只能添加9张",
        "-3": "请选择不超过5M的图片"
    }, brm = 5 * 1024 * 1024, cuS = 80, ckb = /\.(bmp|jpg|jpeg|png|gif)$/i;
    bK.bAi = NEJ.C();
    bc = bK.bAi.bT(bL.zS);
    bc.bcx = function () {
        return {
            x: this.Cp.clientWidth - this.bq.offsetWidth,
            y: this.Cp.clientHeight - this.bq.offsetHeight
        }
    }
        ;
    bK.brn = NEJ.C();
    bc = bK.brn.bT(cq.fP);
    bc.dq = function () {
        this.dr = "m-xwgt-share-upload"
    }
        ;
    bc.di = function () {
        this.dv();
        var bk = bb.bN(this.bq, "j-flag");
        this.VJ = bk.shift();
        this.FQ = bk.shift();
        this.OI = bk.shift();
        this.cka = {
            onselect: this.bAr.fE(this, 0),
            onerror: this.gg.bi(this),
            oncomplete: this.vI.bi(this),
            multiple: true,
            parent: this.FQ,
            api: "/upload/event/img",
            htmlAccept: "image/bmp,image/jpg,image/jpeg,image/png,image/gif",
            flashAccept: "图片(*.bmp;*.jpg;*.jpeg;*.png;*.gif;)",
            box: {
                width: 60,
                height: 60,
                top: 0,
                left: 0
            },
            tipTitle: "上传图片"
        };
        this.bAt = {
            onselect: this.bAr.fE(this, 1),
            onerror: this.gg.bi(this),
            oncomplete: this.vI.bi(this),
            multiple: true,
            parent: this.FQ,
            api: "/upload/event/img",
            htmlAccept: "image/bmp,image/jpg,image/jpeg,image/png,image/gif",
            flashAccept: "图片(*.bmp;*.jpg;*.jpeg;*.png;*.gif;)",
            box: {
                width: 20,
                height: 20,
                top: 0,
                left: 0
            },
            tipTitle: "上传图片"
        };
        this.cjZ = bK.FJ.bH(this.cka)
    }
        ;
    bc.cR = function () {
        bj.kX(this.uj, "click");
        if (!!this.gN) {
            for (var i = this.gN.length - 1; i >= 0; i--) {
                bb.dY(this.gN[i].element, false);
                if (this.gN[i].dragger)
                    this.gN[i].dragger.bX()
            }
        }
        this.gN = [];
        this.UF = {};
        if (this.Cg) {
            clearTimeout(this.Cg)
        }
        this.Cg = 0;
        this.Hu && this.Hu.bX();
        delete this.Hu;
        this.cW()
    }
        ;
    bc.bAr = function (bk, bv) {
        if (!bk)
            return;
        for (var i = 0, len = bk.length; i < len; i++) {
            if (!ckb.test(bk[i].name)) {
                this.brA({
                    path: bk[i].name,
                    index: bv,
                    uuid: bk[i].uuid,
                    status: -4,
                    fail: "这不是<br>图片"
                })
            } else if (bk[i].size > brm) {
                this.brL(-3);
                this.brA({
                    path: bk[i].name,
                    index: bv,
                    uuid: bk[i].uuid,
                    status: -3,
                    fail: "上传<br>失败"
                })
            } else {
                this.brA({
                    path: bk[i].name,
                    index: bv,
                    uuid: bk[i].uuid,
                    status: 0
                })
            }
        }
    }
        ;
    bc.gg = function (be) {
        var fc = this.UF[be.uuid];
        fc.status = -4;
        fc.fail = "上传<br>失败";
        this.bAU(fc);
        this.Ck()
    }
        ;
    bc.vI = function (be) {
        var fc = this.UF[be.uuid];
        fc.status = 2;
        var cG = NEJ.X({}, be.picInfo);
        cG.originId = cG.originIdStr;
        cG.squareId = cG.squareIdStr;
        cG.rectangleId = cG.rectangleIdStr;
        cG.pcSquareId = cG.pcSquareIdStr;
        cG.pcRectangleId = cG.pcRectangleIdStr;
        cG.originJpgId = cG.originJpgIdStr || cG.originJpgId;
        fc.picInfo = cG;
        fc.picUrl = be.picInfo.pcSquareUrl;
        this.bAU(fc);
        this.Ck()
    }
        ;
    bc.brA = function (fc) {
        if (this.gN.length >= 9) {
            this.brL(-10, 3e3, this.bAW.bi(this));
            return
        }
        this.cjY(fc);
        this.gN.push(fc);
        this.UF[fc.uuid] = fc;
        if (!!this.gN.length) {
            this.bq.style.display = ""
        }
        if (this.gN.length >= 9) {
            this.FQ.style.display = "none"
        } else {
            this.FQ.style.display = ""
        }
        this.Ck()
    }
        ;
    bc.Ck = function () {
        var brM = -1
            , bBi = 0;
        for (var i = 0, l = this.gN.length; i < l; i++) {
            if (this.gN[i].status == 1) {
                return
            }
            if (this.gN[i].status == 0 && brM < 0) {
                brM = i
            }
            if (this.gN[i].status == 2 || this.gN[i].status < 0) {
                bBi++
            }
        }
        var bu = this.gN[brM];
        if (bu) {
            (bu.index == 0 ? this.cjZ : this.Hu).hT(bu.uuid);
            bu.status = 1;
            this.bG("onstartupload", {})
        } else if (bBi == this.gN.length) {
            this.bG("onfinishupload", {})
        }
    }
        ;
    bc.brL = function (bv, pt, jL) {
        if (this.Nk < bv) {
            return
        }
        if (this.Cg) {
            clearTimeout(this.Cg);
            this.Cg = 0
        }
        if (pt) {
            this.OI.innerText = brl[bv * 1];
            this.Nk = bv;
            this.Cg = setTimeout(this.XO.bi(this, bv, jL), pt)
        } else {
            this.OI.innerText = brl[bv];
            this.Nk = bv
        }
        this.OI.style.display = ""
    }
        ;
    bc.XO = function (bv, jL) {
        if (bv && this.Nk !== bv) {
            return
        }
        this.Nk = 0;
        this.OI.innerText = brl[0];
        this.OI.style.display = "none";
        jL && jL()
    }
        ;
    bc.cjY = function (fc) {
        var bl = {};
        if (fc.fail) {
            bl.fail = fc.fail
        }
        var fg = bb.dm("m-xwgt-share-upload-preview", bl);
        fc.element = bb.qe(fg);
        bj.bt(bb.bN(fc.element, "del")[0], "mousedown", this.cjX.bi(this, fc), false);
        this.VJ.insertBefore(fc.element, this.VJ.lastElementChild);
        fc.dragger = bK.bAi.bH({
            view: this.VJ.parentNode,
            body: fc.element,
            overflow: false,
            direction: 0,
            isRelative: 1,
            ondragstart: this.TE.bi(this, fc),
            onchange: this.cjV.bi(this, fc),
            ondragend: this.bcM.bi(this, fc)
        })
    }
        ;
    bc.bAU = function (fc) {
        if (!fc || !fc.element) {
            return false
        }
        var bl = {};
        if (fc.fail) {
            bl.fail = fc.fail
        } else {
            bl.url = fc.picUrl
        }
        bb.bC(fc.element, "z-fail");
        fc.element.firstChild.outerHTML = bb.dm("m-xwgt-share-upload-preview-img", bl)
    }
        ;
    bc.TE = function (bu, nt) {
        bb.bC(bu.element, "z-sel")
    }
        ;
    bc.cjV = function (bu, nt) {
        var cuT, ib = this.gN.length - 1, qr;
        for (var i = ib; i >= 0; i--) {
            bb.bB(this.gN[i].element, "z-jump");
            if (this.gN[i] == bu) {
                qr = i
            } else {
                bb.hG(this.gN[i].element, {
                    left: "",
                    top: ""
                })
            }
        }
        var MO = {
            x: 46 + 92 * (qr % 5) + nt.left,
            y: 46 + 92 * (qr / 5 >> 0) + nt.top
        };
        var brQ = MO.x / 92 >> 0
            , brT = MO.y / 92 >> 0
            , yP = Math.max(0, Math.min(ib, brT * 5 + brQ));
        if (yP == qr) {
            return
        }
        var cjT = yP < qr;
        for (var i = Math.min(yP, qr); i <= Math.max(yP, qr); i++) {
            if (i !== qr) {
                var bBE = i % 5;
                if (cjT) {
                    if (bBE == 4) {
                        bb.hG(this.gN[i].element, {
                            left: "-368px",
                            top: "92px"
                        })
                    } else {
                        bb.hG(this.gN[i].element, {
                            left: "92px",
                            top: ""
                        })
                    }
                } else {
                    if (bBE == 0) {
                        bb.hG(this.gN[i].element, {
                            left: "368px",
                            top: "-92px"
                        })
                    } else {
                        bb.hG(this.gN[i].element, {
                            left: "-92px",
                            top: ""
                        })
                    }
                }
            }
        }
    }
        ;
    bc.bcM = function (bu, nt) {
        var cuU, ib = this.gN.length - 1, qr;
        for (var i = ib; i >= 0; i--) {
            bb.hG(this.gN[i].element, {
                left: "",
                top: ""
            });
            if (this.gN[i] == bu) {
                qr = i
            }
        }
        bb.bB(bu.element, "z-sel");
        var MO = {
            x: 46 + 92 * (qr % 5) + nt.left,
            y: 46 + 92 * (qr / 5 >> 0) + nt.top
        };
        var brQ = MO.x / 92 >> 0
            , brT = MO.y / 92 >> 0
            , yP = Math.max(0, Math.min(ib, brT * 5 + brQ));
        if (yP == qr) {
            return
        }
        this.VJ.insertBefore(bu.element, (this.gN[yP + (yP > qr ? 1 : 0)] || {}).element || this.FQ);
        this.gN.splice(qr, 1);
        this.gN.splice(yP, 0, bu)
    }
        ;
    bc.cjX = function (bu, be) {
        bb.dY(bu.element, false);
        if (bu.dragger)
            bu.dragger.bX();
        delete bu.dragger;
        var bv = -1;
        for (var i = this.gN.length - 1; i >= 0; i--) {
            if (this.gN[i] == bu) {
                bv = i;
                break
            }
        }
        this.gN.splice(bv, bv >= 0 ? 1 : 0);
        delete bu;
        if (this.gN.length >= 9) {
            this.FQ.style.display = "none"
        } else {
            this.FQ.style.display = ""
        }
        if (!this.gN.length) {
            this.bq.style.display = "none";
            this.XO(0)
        } else {
            this.bAW()
        }
        this.Ck()
    }
        ;
    bc.bAW = function () {
        var bBI = false;
        for (var i = 0, len = this.gN.length; i < len; i++) {
            if (this.gN[i].status == -3) {
                bBI = true
            }
        }
        if (bBI) {
            this.brL(-3)
        } else {
            this.XO(-3)
        }
    }
        ;
    bc.LW = function () {
        var hO = [];
        for (var i = this.gN.length - 1; i >= 0; i--) {
            if (this.gN[i].status == 2) {
                hO.unshift(this.gN[i].picInfo)
            }
        }
        return hO
    }
        ;
    bc.cv = function (bf) {
        this.cw(bf);
        this.bAt.parent = bf.button;
        this.Hu && this.Hu.bX();
        this.Hu = bK.FJ.bH(this.bAt);
        this.bq.style.display = "none";
        if (!!this.gN) {
            for (var i = this.gN.length - 1; i >= 0; i--) {
                bb.dY(this.gN[i].element, false);
                if (this.gN[i].dragger)
                    this.gN[i].dragger.bX()
            }
        }
        this.gN = [];
        this.UF = {};
        if (this.Cg) {
            clearTimeout(this.Cg)
        }
        this.XO(0);
        this.Nk = 0
    }
        ;
    bL.he.bH({
        element: bK.brn,
        event: ["onstartupload", "onfinishupload"]
    })
})();
(function () {
    var bd = NEJ.P, cg = NEJ.O, gI = NEJ.R, bb = bd("nej.e"), bj = bd("nej.v"), bm = bd("nej.u"), cq = bd("nej.ui"), bR = bd("nej.ut"), bc, bO;
    if (!!bR.pw)
        return;
    bR.pw = NEJ.C();
    bc = bR.pw.bT(bR.Wv);
    bO = bR.pw.dC;
    bc.cv = function (bf) {
        this.cjR(bf.more);
        this.Wk = bb.bD(bf.sbody);
        this.df([[this.Wk, "scroll", this.cjQ.bi(this)]]);
        var eG = bf.delta;
        if (eG == null)
            eG = 30;
        this.Vi = Math.max(0, eG);
        var dB = parseInt(bf.count) || 0;
        this.kA = Math.max(0, dB);
        var hb = parseInt(bf.number) || 0;
        if (hb > 1 && hb <= dB) {
            this.CM = hb
        }
        this.cw(bf)
    }
        ;
    bc.cR = function () {
        this.cW();
        delete this.Cz;
        delete this.Wk;
        delete this.vd;
        delete this.Ui
    }
        ;
    bc.AH = function (cs, cD) {
        var cQ = this.zH + (this.kA - 1) * this.sv
            , hA = this.kA * this.sv;
        return bO.AH.call(this, cQ, cs, hA, cD)
    }
        ;
    bc.cjR = function (TX) {
        this.Cz = bb.bD(TX);
        this.df([[this.Cz, "click", this.sl.bi(this)]])
    }
        ;
    bc.bCP = function (bM) {
        bM = bM || {};
        if (this.vd || !bM)
            return;
        if (!bM.scrollHeight)
            bM = bb.rg();
        var cs = bb.kn(this.kH)
            , eG = cs.y + this.kH.offsetHeight - bM.scrollTop - bM.clientHeight
            , cjP = bM.scrollHeight <= bM.clientHeight;
        if (eG <= this.Vi || cjP && !this.vd) {
            this.sl()
        }
    }
        ;
    bc.cjQ = function (be) {
        if (this.vd)
            return;
        this.bCP(bj.bZ(be))
    }
        ;
    bc.AE = function (be) {
        bO.AE.apply(this, arguments);
        if (!be.stopped) {
            this.OY();
            var cs = 0;
            if (be.index > 1) {
                cs = this.zH + ((be.index - 1) * this.kA - 1) * this.sv
            }
            this.jI = cs;
            this.sl()
        }
    }
        ;
    bc.bte = function (bf) {
        if (!!this.CM) {
            var eG = bf.offset > 0 ? this.sv : this.zH
                , hA = eG + this.sv * (this.CM - 1);
            this.jI = bf.offset + hA;
            bf.data.limit = hA;
            bf.limit = hA;
            delete this.CM
        }
        return bf
    }
        ;
    bc.boy = function (bf) {
        delete this.Ui;
        bO.boy.apply(this, arguments);
        this.bCR()
    }
        ;
    bc.boB = function (be) {
        if (be.key != this.kg.key)
            return;
        switch (be.action) {
            case "refresh":
            case "append":
                delete this.Ui;
                break
        }
        bO.boB.apply(this, arguments)
    }
        ;
    bc.Oq = function () {
        this.zN("onbeforelistload", "列表加载中...");
        bb.cf(this.Cz, "display", "none")
    }
        ;
    bc.boV = function (bk, cs, hA) {
        var cD = bk.length
            , bsf = bk.loaded ? cs + hA >= cD : cs + hA > cD;
        this.jI = Math.min(this.jI, cD);
        bb.cf(this.Cz, "display", bsf ? "none" : "");
        if (bsf)
            this.vd = !0;
        if (this.kA > 0) {
            var cG = this.AH(cs, bk.length);
            if (this.btw(cG.index, cG.total))
                return !0;
            var eG = this.zH - this.sv
                , hb = this.kA * this.sv;
            this.vd = (cs + hA - eG) % hb == 0 || bsf;
            bb.cf(this.Cz, "display", this.vd ? "none" : "");
            this.boI(this.vd && cG.total > 1 ? "" : "none")
        }
    }
        ;
    bc.boU = function () {
        this.jI = 0;
        this.vd = !0;
        this.zN("onemptylist", "没有列表数据！")
    }
        ;
    bc.Ud = function (fg, nt) {
        this.kH.insertAdjacentHTML(nt || "beforeEnd", fg)
    }
        ;
    bc.TZ = function (jX) {
        this.hs = this.hs || [];
        if (bm.fU(jX)) {
            gI.push.apply(this.hs, jX)
        } else {
            this.hs.push(jX)
        }
    }
        ;
    bc.Vy = function (be) {
        bb.oi(this.dE);
        this.Nx(be, "onafteradd");
        var ge = be.flag;
        if (be.stopped || !ge)
            return;
        if (this.kA > 0) {
            this.boK();
            return
        }
        this.jI += 1;
        ge == -1 ? this.btT(be.data) : this.cla(be.data)
    }
        ;
    bc.Vt = function (be) {
        this.Nx(be, "onafterdelete");
        if (be.stopped)
            return;
        if (this.kA > 0) {
            this.boK();
            return
        }
        var bE = be.data[this.gD.pkey];
        if (!!this.hs) {
            var bu = bb.bJK(bE)
                , bv = bm.eu(this.hs, bu);
            if (bv >= 0) {
                this.hs.splice(bv, 1);
                this.jI -= 1
            }
            if (!!bu)
                bu.bX()
        } else {
            var bh = bb.bD(this.bNg(bE));
            if (!!bh)
                this.jI -= 1;
            bb.dY(bh)
        }
        if (this.jI <= 0)
            this.sl()
    }
        ;
    bc.bph = function (cs, hA) {
        if (cs != this.jI)
            return;
        if (this.YE()) {
            this.vd = !1;
            this.bCR()
        }
    }
        ;
    bc.bpl = function (cs, hA) {
        if (cs != 0)
            return;
        var KE = this.bU.iG(this.kg.key);
        for (var i = hA - 1; i >= 0; i--) {
            this.btT(KE[i])
        }
    }
        ;
    bc.bCR = function () {
        var bM = this.Wk;
        if (!bM || this.vd)
            return;
        this.bCP(this.Wk)
    }
        ;
    bc.is = function () {
        delete this.vd;
        bO.is.apply(this, arguments)
    }
        ;
    bc.sl = function () {
        if (!!this.Ui)
            return;
        this.Ui = !0;
        var cs = this.jI;
        this.jI += cs == 0 ? this.zH : this.sv;
        this.btd(cs)
    }
})();
(function () {
    var bd = NEJ.P, cg = NEJ.O, bb = bd("nej.e"), bm = bd("nej.u"), bj = bd("nej.v"), en = bd("nej.x"), bR = bd("nej.ut"), bc;
    if (!!bR.GA)
        return;
    bR.GA = NEJ.C();
    bc = bR.GA.bT(bR.dX);
    bc.cv = function (bf) {
        this.cw(bf);
        this.jY = bf.event || "click";
        this.lD = bf.selected || "js-selected";
        this.oV = bf.disabled || "js-disabled";
        this.bCV = !!bf.inverse;
        this.cjO(bf.list);
        this.Se(bf.index || 0)
    }
        ;
    bc.cR = function () {
        var cjN = function (bh) {
            this.bsp(bh, !1)
        };
        return function () {
            this.cW();
            bm.cr(this.dn, cjN, this);
            delete this.dn;
            delete this.jY;
            delete this.ef;
            delete this.oV;
            delete this.lD;
            delete this.bCV
        }
    }();
    bc.cjO = function () {
        var boh = function (bu) {
            if (!bu)
                return;
            this.dn.push(bu);
            var bv = this.dn.length - 1
                , fR = this.bst[bv];
            if (!fR) {
                fR = this.Se.bi(this, bv);
                this.bst[bv] = fR
            }
            this.df([[bu, this.jY, fR]])
        };
        return function (bk) {
            this.dn = [];
            if (!this.bst)
                this.bst = [];
            bm.cr(bk, boh, this)
        }
    }();
    bc.bsp = function (bM, cjL) {
        !!cjL && !this.bCV ? bb.bC(bM, this.lD) : bb.bB(bM, this.lD)
    }
        ;
    bc.Se = function (bv, PG, bl) {
        var bM = this.dn[bv];
        if (PG != !0 && (bv == this.ef || !bM || bb.cN(bM, this.oV))) {
            bj.dz(arguments[1]);
            return this
        }
        var be = {
            index: bv,
            last: this.ef,
            list: this.pH(),
            data: bl || bb.bz(bM, "value")
        };
        this.ef = bv;
        bM = this.dn[be.last];
        if (!!bM)
            this.bsp(bM, !1);
        bM = this.dn[this.ef];
        this.bsp(bM, !0);
        this.bG("onchange", be);
        if (!be.nostop)
            bj.dz(arguments[1]);
        return this
    }
        ;
    bc.uw = function () {
        return this.ef
    }
        ;
    bc.pH = function () {
        return this.dn
    }
        ;
    bb.cjK = en.cjK = function (cS, bf) {
        var bE = bb.mX(cS);
        if (!bE)
            return null;
        if (!bR.Zd(bE, bR.GA)) {
            bf = bf || {};
            bf.list = !bf.clazz ? bb.ek(bE) : bb.bN(bE, bf.clazz);
            delete bf.clazz
        }
        return bR.Zd(bE, bR.GA, bf || cg)
    }
        ;
    en.isChange = !0
})();
(function () {
    var bd = NEJ.P
        , cg = NEJ.O
        , bm = bd("nej.u")
        , bA = bd("nej.j")
        , bn = bd("nm.x");
    var SETTING_KEY = "player-setting";
    var oy = {
        mode: 4,
        volume: .8,
        autoPlay: false,
        index: 0,
        lock: false
    };
    oy = bA.vS(SETTING_KEY) || oy;
    bn.bsB = function () {
        return oy
    }
        ;
    bn.Hm = function (GL) {
        if (GL) {
            oy = GL;
            bA.xO(SETTING_KEY, GL)
        }
    }
})();
(function () {
    var bd = NEJ.P
        , cg = NEJ.O
        , bb = bd("nej.e")
        , bj = bd("nej.v")
        , bm = bd("nej.u")
        , bL = bd("nej.ut")
        , bn = bd("nm.x")
        , bs = bd("nm.d")
        , iD = bd("nm.w.player.log");
    var lu = bs.jE.bH();
    var LogLevel = {
        ERROR: 10,
        INFO: 6,
        DEBUG: 2
    };
    var os = function (bw, cT, rw) {
        var eB = bn.gs("{0} {1} {2}", bm.og(new Date, "yyyy-MM-dd HH:mm:ss"), bw, cT);
        if (rw == LogLevel.ERROR) {
            lu.ic("playerror", {
                message: cT
            })
        }
        if (rw >= LogLevel.INFO) {
            lu.cqD(eB)
        }
        if (location.hostname.indexOf("igame.163.com") != -1) {
            console.log(eB)
        }
    };
    iD.ds = function () {
        os("PLAY_ERROR", bn.gs.apply(null, arguments), LogLevel.ERROR)
    }
        ;
    iD.qH = function () {
        os("PLAY_INFO", bn.gs.apply(null, arguments), LogLevel.INFO)
    }
        ;
    iD.cuW = function () {
        os("PLAY_DEBUG", bn.gs.apply(null, arguments), LogLevel.DEBUG)
    }
})();
(function () {
    var bd = NEJ.P
        , bb = bd("nej.e")
        , bj = bd("nej.v")
        , bL = bd("nej.ut")
        , bm = bd("nej.u")
        , bK = bd("nm.w")
        , jL = bd("flash.cb");
    var fZ = ["loadedmetadata", "play", "pause", "ended", "waiting", "playing", "timeupdate", "progress", "stalled", "error"];
    var GQ, Wr, wA;
    bK.cjH = function (bw, eS) {
        if (bw != "flash") {
            if (!GQ) {
                GQ = bb.ew("audio");
                bm.cr(fZ, function (bw) {
                    bj.bt(GQ, bw, onMediaCallBack)
                })
            }
            if (GQ && GQ.canPlayType && GQ.canPlayType("audio/mpeg")) {
                eS(new MediaWrap("audio"));
                return
            }
        }
        if (!Wr) {
            bb.te({
                src: "/style/swf/music/music.swf?v=20151204",
                hidden: true,
                params: {
                    allowscriptaccess: "always"
                },
                onready: function (iS) {
                    Wr = iS;
                    bm.cr(fZ, function (bw) {
                        jL[bw] = onMediaCallBack;
                        Wr.addCallback(bw, "flash.cb." + bw)
                    });
                    eS(new MediaWrap("flash"))
                }
                    .bi(this)
            })
        } else {
            eS(new MediaWrap("flash"))
        }
    }
        ;
    function MediaWrap(GT) {
        var ml;
        bL.he.bH({
            element: this,
            event: fZ.concat(["interrupt", "recover"])
        });
        ml = GT == "audio" ? GQ : Wr;
        this.type = GT;
        this.destroy = function () { }
            ;
        this.setSrc = function (ce) {
            if (wA != this) {
                var ib = wA;
                if (ib) {
                    ib.interrupt()
                }
                wA = this
            }
            if (GT == "flash") {
                ml.setSrc(ce)
            } else {
                ml.src = ce
            }
        }
            ;
        this.play = function () {
            if (wA != this) {
                var ib = wA;
                if (ib) {
                    ib.interrupt();
                    wA = this;
                    this.recover()
                } else {
                    wA = this
                }
            }
            if (GT == "flash") {
                ml.as_play()
            } else {
                ml.play()
            }
        }
            ;
        this.pause = function () {
            if (wA != this)
                return;
            if (GT == "flash") {
                ml.as_pause()
            } else {
                ml.pause()
            }
        }
            ;
        this.load = function () {
            if (wA != this)
                return;
            if (GT == "flash") {
                ml.as_load()
            } else {
                ml.load()
            }
        }
            ;
        this.interrupt = function () {
            onMediaCallBack({
                type: "interrupt"
            })
        }
            ;
        this.recover = function () {
            onMediaCallBack({
                type: "recover"
            })
        }
            ;
        this.getMedia = function () {
            return ml
        }
            ;
        var pV = ["Src", "Duration", "CurrentTime", "Paused", "Ended", "ReadyState", "Volume", "Error", "Buffered", "NetworkState"];
        bm.cr(pV, function (bY) {
            var Tg = "get" + bY
                , QC = "set" + bY;
            if (GT == "flash") {
                if (!this[Tg]) {
                    this[Tg] = function () {
                        return ml[Tg]()
                    }
                }
                if (!this[QC]) {
                    this[QC] = function (value) {
                        ml[QC](value)
                    }
                }
            } else {
                var bDL = bY.slice(0, 1).toLowerCase() + bY.slice(1);
                if (!this[Tg]) {
                    this[Tg] = function () {
                        return ml[bDL]
                    }
                }
                if (!this[QC]) {
                    this[QC] = function (value) {
                        ml[bDL] = value
                    }
                }
            }
        }, this)
    }
    function onMediaCallBack(be) {
        if (wA) {
            bj.bG(wA, be.type, be)
        }
    }
})();
(function () {
    var bd = NEJ.P, bj = bd("nej.v"), bA = bd("nej.j"), bL = bd("nej.ut"), eI = bd("nej.p"), bK = bd("nm.w"), bn = bd("nm.x"), iD = bd("nm.w.player.log"), bc;
    var DEFAULT_BR = 128e3;
    var CDN_HOST_REG = /(m\d+\.music\.126\.net)/;
    var MAX_STALLED_RETRY = 2;
    var MediaError = {
        MEDIA_ERR_ABORTED: 1,
        MEDIA_ERR_NETWORK: 2,
        MEDIA_ERR_DECODE: 3,
        MEDIA_ERR_SRC_NOT_SUPPORTED: 4
    };
    var ErrorType = {
        INFO_GET_ERR: 1,
        NET_ERR: 2,
        UNKNOWN_ERR: 10
    };
    var LoadState = {
        LOAD_START: 1,
        LOADED_META: 2,
        IN_RELOAD: 3,
        IN_RE_GET_URL: 4,
        IN_SWITCH_CDN: 5,
        IN_SWITCH_MEDIA: 6
    };
    var RetryLevel = {
        NONE: 0,
        GET_URL: 1,
        RELOAD: 2,
        SWITCH_CDN: 3
    };
    var bDM = false;
    bK.gS = NEJ.C();
    bc = bK.gS.bT(bL.dX);
    bc.cv = function (bf) {
        this.cw(bf);
        this.dL = {};
        this.Wt(bf.media);
        bA.cE("/api/cdns", {
            type: "json",
            onload: function (be) {
                if (be.code) {
                    this.rl = be.data
                }
            }
                .bi(this)
        })
    }
        ;
    bc.cR = function () {
        this.cW();
        delete this.dL
    }
        ;
    bc.Vr = function (cm) {
        if (!cm)
            return;
        var De = this.dL.volume;
        if (this.eT) {
            this.eT.pause()
        }
        this.dL = {
            time: 0,
            id: cm.id,
            duration: cm.duration / 1e3,
            play: this.dL.play,
            stalledRetryCount: 0
        };
        if (De != null) {
            this.dL.volume = De
        }
        this.dL.loadState = LoadState.LOAD_START;
        this.bEd(cm.id);
        iD.qH("play song id: {0}", cm.id)
    }
        ;
    bc.gu = function () {
        if (this.dL.error) {
            this.dL.error = null;
            if (this.dL.error == ErrorType.INFO_GET_ERR || this.bEf()) {
                this.bEi()
            } else {
                this.OT()
            }
        } else {
            if (this.eT) {
                this.eT.play()
            }
        }
        this.dL.play = true;
        this.qI("play")
    }
        ;
    bc.gW = function () {
        if (this.eT) {
            this.eT.pause()
        }
        this.dL.play = false;
        this.qI("pause")
    }
        ;
    bc.qd = function (cY) {
        if (this.eT) {
            this.eT.setCurrentTime(cY)
        }
        this.dL.time = cY;
        iD.qH("seek to: {0}", cY)
    }
        ;
    bc.bsV = function () {
        return this.dL.duration || 0
    }
        ;
    bc.xP = function () {
        return !!this.dL.play
    }
        ;
    bc.nR = function (Nw) {
        this.dL.volume = Nw;
        if (this.eT) {
            this.eT.setVolume(Nw)
        }
    }
        ;
    bc.bsS = function () {
        return this.dL.time
    }
        ;
    bc.Wt = function (bw) {
        bK.cjH(bw, function (ml) {
            this.eT = ml;
            iD.qH("media loaded: {0}", ml.type);
            this.df([[this.eT, "loadedmetadata", this.cjG.bi(this)], [this.eT, "ended", this.cjF.bi(this)], [this.eT, "waiting", this.zq.bi(this)], [this.eT, "play", this.vJ.bi(this)], [this.eT, "pause", this.bsM.bi(this)], [this.eT, "playing", this.Sb.bi(this)], [this.eT, "timeupdate", this.cjE.bi(this)], [this.eT, "progress", this.um.bi(this)], [this.eT, "stalled", this.bsL.bi(this)], [this.eT, "interrupt", this.gW.bi(this)], [this.eT, "recover", this.cjC.bi(this)], [this.eT, "error", this.gg.bi(this)]]);
            if (this.dL) {
                if (this.dL.loadState == LoadState.LOAD_START || this.dL.loadState == LoadState.IN_SWITCH_MEDIA) {
                    this.bsK();
                    if (this.dL.volume != null) {
                        this.eT.setVolume(this.dL.volume)
                    }
                }
            }
        }
            .bi(this))
    }
        ;
    bc.cjB = function (bw) {
        this.Jn();
        this.eT.destroy();
        this.dL.loadState = LoadState.IN_SWITCH_MEDIA;
        this.zq();
        this.Wt(bw);
        iD.qH("switch media")
    }
        ;
    bc.cuX = function () {
        return this.eT
    }
        ;
    bc.bEd = function () {
        this.zq();
        bA.cE("/api/song/enhance/player/url", {
            type: "json",
            query: {
                ids: JSON.stringify([this.dL.id]),
                br: DEFAULT_BR
            },
            onload: this.bFg.bi(this),
            onerror: this.bFg.bi(this)
        })
    }
        ;
    bc.bFg = function (be) {
        if (be.code == 200 && be.data && be.data.length) {
            var cG = be.data[0];
            if (!cG.url) {
                this.dL.error = ErrorType.INFO_GET_ERR;
                this.qI("error", {
                    code: this.dL.error
                });
                return
            }
            this.dL.playUrl = cG.url;
            this.dL.expireTime = (new Date).getTime() + cG.expi * 1e3;
            this.bsK()
        } else {
            this.dL.error = ErrorType.INFO_GET_ERR;
            this.qI("error", {
                code: this.dL.error
            });
            iD.ds("info load error")
        }
    }
        ;
    bc.bsK = function () {
        if (this.eT) {
            var ce = this.dL.playUrl;
            if (this.dL.time > 0 && (this.dL.loadState == LoadState.IN_RE_GET_URL || this.dL.loadState == LoadState.IN_RE_GET_URL)) {
                ce += "#t=" + this.dL.time
            }
            this.eT.setSrc(ce);
            iD.qH("load mp3: {0},loadState: {1}.", ce, this.dL.loadState)
        }
    }
        ;
    bc.bFh = function () {
        if (/#t=(\d+)$/.test(this.eT.getSrc())) {
            return parseInt(RegExp.$1) || 0
        } else {
            return 0
        }
    }
        ;
    bc.OT = function () {
        var cY = parseInt(this.dL.time) || 0
            , cjz = this.bFh();
        if (cY === cjz) {
            this.eT.load()
        } else {
            this.eT.setSrc(this.dL.playUrl + "#t=" + cY)
        }
        this.dL.loadState = LoadState.IN_RELOAD;
        this.zq();
        iD.qH("reload from: {0}", cY)
    }
        ;
    bc.bEi = function () {
        this.dL.loadState = LoadState.IN_RE_GET_URL;
        this.bEd()
    }
        ;
    bc.bFj = function () {
        var xC = getHost(this.dL.playUrl);
        if (xC) {
            for (var i = 0; i < this.rl.length; i++) {
                var lA = this.rl[i] || []
                    , bv = lA.indexOf(xC);
                if (bv >= 0 && lA.length > 1) {
                    return lA[(bv + 1) % lA.length]
                }
            }
        }
        function getHost(ce) {
            if (CDN_HOST_REG.test(ce))
                return RegExp.$1
        }
    }
        ;
    bc.cjx = function () {
        this.dL.playUrl = this.dL.playUrl.replace(CDN_HOST_REG, this.bFj());
        this.dL.loadState = LoadState.IN_SWITCH_CDN;
        this.bsK();
        this.zq()
    }
        ;
    bc.cjG = function () {
        if (this.dL.loadState == LoadState.LOAD_START) {
            this.dL.loadState = LoadState.LOADED_META;
            if (this.eT.type == "audio") {
                this.dL.duration = this.eT.getDuration()
            }
            this.qI("loadedmeta", {
                duration: this.dL.duration
            })
        } else {
            this.dL.loadState = LoadState.LOADED_META
        }
        if (this.dL.play) {
            this.eT.play()
        } else {
            this.eT.pause()
        }
        if (this.dL.time && parseInt(this.dL.time) != this.bFh()) {
            this.eT.setCurrentTime(this.dL.time)
        }
        this.Hn();
        this.Sb();
        bDM = true;
        iD.qH("loaded meta")
    }
        ;
    bc.cjF = function () {
        this.dL.ended = true;
        this.qI("ended")
    }
        ;
    bc.zq = function () {
        if (!this.dL.waiting) {
            this.dL.waiting = true;
            this.dL.waitTimestamp = +(new Date);
            this.qI("waiting")
        }
    }
        ;
    bc.Sb = function () {
        this.dL.waiting = false;
        this.dL.waitTimestamp = 0;
        this.qI("playing")
    }
        ;
    bc.vJ = function () {
        this.qI("play")
    }
        ;
    bc.bsM = function () {
        this.qI("pause")
    }
        ;
    bc.cjE = function () {
        if (this.dL.loadState != LoadState.LOADED_META)
            return;
        var cY = this.eT.getCurrentTime();
        if (this.dL.waiting && cY > this.dL.time) {
            this.Sb()
        }
        this.dL.time = cY;
        this.qI("timeupdate", {
            time: this.dL.time,
            duration: this.dL.duration
        })
    }
        ;
    bc.um = function (be) {
        if (this.dL.loadState != LoadState.LOADED_META)
            return;
        var bo = {};
        if (be.data) {
            bo.total = be.data.total;
            bo.loaded = be.data.loaded
        } else {
            var zo = this.eT.getBuffered()
                , cY = this.eT.getCurrentTime()
                , pz = 0;
            for (var i = 0; i < zo.length; i++) {
                if (cY > zo.start(i) && cY < zo.end(i)) {
                    pz = zo.end(i);
                    break
                }
            }
            bo.total = this.dL.duration;
            bo.loaded = Math.min(pz, bo.total)
        }
        this.qI("progress", bo)
    }
        ;
    bc.Hn = function () {
        if (this.dL.retry) {
            clearTimeout(this.dL.retry.tid);
            this.dL.retry = null
        }
    }
        ;
    bc.gg = function () {
        var dh = this.eT.getError();
        iD.ds("media error code: {0}, netState: {1}", dh.code, this.eT.getNetworkState());
        if (dh.code == MediaError.MEDIA_ERR_NETWORK || dh.code == MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED) {
            var GL = bn.bsB();
            if (!this.dL.retry) {
                this.dL.retry = {
                    level: RetryLevel.NONE
                }
            } else {
                window.clearTimeout(this.dL.retry.tid)
            }
            if (this.dL.retry.level == RetryLevel.NONE) {
                if (this.bEf()) {
                    this.dL.retry.level = RetryLevel.GET_URL;
                    this.bEi();
                    iD.qH("Url expired, get url.")
                } else {
                    this.dL.retry.level = RetryLevel.RELOAD;
                    this.dL.retry.tid = setTimeout(this.OT.bi(this), 3e3);
                    iD.qH("Reload mp3 3s later.")
                }
            } else if (this.dL.retry.level == RetryLevel.GET_URL) {
                this.dL.retry.level = RetryLevel.RELOAD;
                this.dL.retry.tid = setTimeout(this.OT.bi(this), 3e3);
                iD.qH("Reload mp3 3s later.")
            } else if (this.dL.retry.level == RetryLevel.RELOAD) {
                this.dL.retry.level = RetryLevel.SWITCH_CDN;
                if (this.bFj()) {
                    this.dL.retry.tid = setTimeout(this.cjx.bi(this), 5e3);
                    iD.qH("Switch CDN 5s later.")
                } else {
                    this.dL.retry.tid = setTimeout(this.OT.bi(this), 5e3);
                    iD.qH("Reload mp3 5s later.")
                }
            } else if (!bDM && this.eT.type == "audio" && !GL.useFlash && !eI.Mk.mac && bn.biy().supported) {
                GL.useFlash = true;
                bn.Hm(GL);
                this.cjB("flash")
            } else {
                this.Hn();
                this.gW();
                this.dL.error = ErrorType.NET_ERR;
                this.qI("error", {
                    code: this.dL.error
                });
                iD.ds("error can not retry.")
            }
        } else {
            this.Hn();
            this.gW();
            this.dL.error = ErrorType.UNKNOWN_ERR;
            this.qI("error", {
                code: this.dL.error
            });
            iD.ds("error can not retry.")
        }
    }
        ;
    bc.bsL = function () {
        var iP = 0
            , bFv = 5e3;
        return function () {
            this.zq();
            clearTimeout(iP);
            setTimeout(function () {
                var jz = +(new Date);
                if (this.dL.waiting && jz - this.dL.waitTimestamp >= bFv && this.dL.stalledRetryCount < MAX_STALLED_RETRY) {
                    iD.qH("stalled too long retry.");
                    this.dL.stalledRetryCount++;
                    this.OT()
                }
            }
                .bi(this), bFv);
            iD.qH("stalled")
        }
    }();
    bc.bEf = function () {
        var jz = +(new Date);
        return jz > this.dL.expireTime
    }
        ;
    bc.cjC = function () {
        var cY = parseInt(this.dL.time) || 0;
        this.eT.setSrc(this.dL.playUrl + "#t=" + cY);
        this.dL.loadState = LoadState.IN_RELOAD;
        this.zq();
        iD.qH("recover from: {0}", cY)
    }
        ;
    bc.qI = function (ch, bl) {
        bj.bG(bK.gS, "playaction", {
            action: ch,
            data: bl || {}
        })
    }
        ;
    bL.he.bH({
        element: bK.gS,
        event: ["playaction"]
    })
})();
(function () {
    if (!(window == top)) {
        return
    }
    var bd = NEJ.P, bj = bd("nej.v"), bL = bd("nej.ut"), bK = bd("nm.w"), bc;
    bK.GH = NEJ.C();
    bc = bK.GH.bT(bK.gS);
    bO = bK.GH.dC;
    bc.dG = function () {
        this.dM()
    }
        ;
    bc.cju = function (cU) {
        this.Vr(cU);
        this.gu()
    }
        ;
    bc.bsx = function () {
        this.gW()
    }
        ;
    bc.wW = function (be) {
        if (be.action == "play") {
            this.gW()
        }
    }
        ;
    bc.qI = function (ch, bl) {
        bj.bG(bK.GH, "tmpplayaction", {
            action: ch,
            data: bl || {},
            tmp: true
        })
    }
        ;
    bc.tO = function () {
        return this.dL
    }
        ;
    bL.he.bH({
        element: bK.GH,
        event: ["tmpplayaction"]
    })
})();
(function () {
    var bd = NEJ.P, cg = NEJ.O, bb = bd("nej.e"), bj = bd("nej.v"), bm = bd("nej.u"), im = bd("nej.n"), bA = bd("nej.j"), bL = bd("nej.ut"), cq = bd("nej.ui"), bK = bd("nm.w"), bp = bd("nm.l"), ly = bd("nm.c"), bs = bd("nm.d"), bn = bd("nm.x"), bc, bO, VV = [{
        item: "m-publish-search-single",
        type: 1
    }, {
        item: "m-publish-search-artist",
        type: 100
    }, {
        item: "m-publish-search-album",
        type: 10
    }, {
        item: "m-publish-search-mv",
        type: 1004
    }, {
        item: "m-publish-search-playlist",
        type: 1e3
    }, {
        item: "m-publish-search-djRadio",
        type: 1009
    }];
    var bss = {
        song: 0,
        artist: 1,
        album: 2,
        mv: 3,
        playlist: 4,
        djradio: 5
    };
    bK.bsq = NEJ.C();
    bc = bK.bsq.bT(cq.fP);
    bc.dG = function (bf) {
        this.dM(bf);
        var bk = bb.bN(this.bq, "j-flag");
        this.cuZ = bk.shift();
        this.cjr = bk.shift();
        this.Hq = bk.shift();
        this.bFU = bk.shift();
        this.bsl = [bk.shift(), bk.shift(), bk.shift(), bk.shift(), bk.shift(), bk.shift()];
        this.XX = bk.shift();
        this.bGg = bk.shift();
        this.sR = {
            list: this.bsl,
            selected: "z-curr",
            onchange: this.bGn.bi(this)
        };
        bj.bt(this.Hq, "input", this.Yy.bi(this));
        bj.bt(this.Hq, "propertychange", this.Yy.bi(this));
        bj.bt(this.Hq, "keyup", this.Yy.bi(this));
        bj.bt(this.cjr, "click", this.Yy.bi(this));
        bj.bt(this.XX, "click", this.dN.bi(this));
        bj.bt(this.bGg, "click", function () {
            this.bG("oncancel", {})
        }
            .bi(this));
        this.bU = bs.GN.hC();
        this.So = top.nm.w.GH.hC();
        bL.he.bH({
            element: top.nm.w.GH,
            event: ["tmpplayaction"]
        });
        this.sz = {
            limit: 100,
            offset: 0,
            parent: this.XX,
            onbeforelistload: this.sh.bi(this)
        };
        bj.bt(top.nm.w.GH, "tmpplayaction", this.wW.bi(this))
    }
        ;
    bc.dq = function () {
        this.dr = "m-xwgt-publish-search"
    }
        ;
    bc.cv = function (bf) {
        this.cw(bf);
        if (!!this.CE) {
            this.CE.bX();
            delete this.CE
        }
        this.sR.index = bss[bf.type || "song"];
        this.CE = bL.GA.bH(this.sR);
        this.Hq.value = "";
        this.Hq.focus();
        this.uZ = "";
        this.cva = 0;
        if (bf.showMV == true) {
            this.bsl[bss["mv"]].parentNode.style.display = "";
            bb.bC(this.bFU, "srchtab-1")
        } else {
            this.bsl[bss["mv"]].parentNode.style.display = "none";
            bb.bB(this.bFU, "srchtab-1")
        }
        if (!!this.eV) {
            this.eV = this.eV.bX()
        }
        if (bf.hideBack) {
            bb.bC(this.bGg.parentNode, "f-hide")
        }
    }
        ;
    bc.cR = function () {
        this.So.bsx();
        this.cW()
    }
        ;
    bc.Yy = function () {
        var value = this.Hq.value.trim();
        if (value && value.length) {
            if (value != this.uZ) {
                this.uZ = value;
                this.bGn({
                    index: this.CE.uw()
                })
            }
        } else {
            if (this.eV) {
                this.eV = this.eV.bX()
            }
        }
        this.uZ = value
    }
        ;
    bc.dN = function () {
        var cjp = function (bM) {
            return bb.cN(bM, "sitm") || bb.cN(bM, "itm") || bb.cN(bM, "mv-item")
        }
            , cjn = function (bM) {
                return bb.cN(bM, "ply")
            }
            , bGQ = function () {
                bp.ci.bS({
                    type: 2,
                    tip: "因合作方要求，该资源需付费使用"
                })
            }
            , cjk = function () {
                bp.ci.bS({
                    type: 2,
                    tip: "因合作方要求，该资源需下载后播放"
                })
            }
            , bsa = function (cm) {
                if (cm && cm.privilege && cm.privilege.toast) {
                    bA.cE("/api/song/toast", {
                        query: {
                            id: cm.id
                        },
                        type: "json",
                        onload: QO.bi(this),
                        onerror: QO.bi(this)
                    })
                } else {
                    QP()
                }
            }
            , QO = function (bV) {
                QP((bV || cg).toast)
            }
            , QP = function (cT) {
                bp.ci.bS({
                    type: 2,
                    tip: cT || "因合作方要求，该资源暂时下架>_<"
                })
            };
        return function (be) {
            var Gs = bj.bZ(be, cjn)
                , bk = bj.bZ(be, cjp)
                , gE = this.So.tO();
            if (!!bk) {
                bj.co(be);
                this.Tv = bb.bz(bk, "id");
                this.LP = bb.bz(bk, "type");
                if (this.LP == 18) {
                    var cU = this.bU.fH(this.Tv)
                        , rw = bn.qy(cU);
                    if (!Gs) {
                        if (rw == 10) {
                            bGQ();
                            return
                        } else if (rw == 100) {
                            bsa(cU);
                            return
                        }
                    } else {
                        if (rw == 10) {
                            bGQ();
                            return
                        } else if (rw == 100) {
                            bsa(cU);
                            return
                        } else if (rw == 11) {
                            cjk();
                            return
                        } else {
                            bb.bB(this.Cx, "z-pause z-loading");
                            if (Gs == this.Cx && gE.play && !gE.ended) {
                                this.So.bsx()
                            } else {
                                this.Cx = Gs;
                                this.So.cju(cU)
                            }
                            return
                        }
                    }
                } else if (this.LP == 70) {
                    if (bb.cN(bk, "z-noprogram")) {
                        bp.ci.bS({
                            type: 2,
                            tip: "不能分享没有节目的电台"
                        });
                        return
                    }
                }
                this.cjj()
            }
        }
    }();
    bc.cjj = function () {
        var iY = this.bU.fH(this.Tv)
            , tR = bn.bOo(this.LP, iY);
        tR.title = tR.title || "";
        tR.author = tR.author || "";
        tR.picUrl = tR.picUrl || "";
        tR.authors = tR.authors || "";
        if (this.LP == 70) {
            this.Tv = this.Tv.slice(0, -4)
        }
        this.bG("onfinish", {
            id: this.Tv,
            type: this.LP,
            data: tR
        })
    }
        ;
    bc.wW = function (be) {
        var bl = be.data;
        if (!this.Cx) {
            return
        }
        switch (be.action) {
            case "play":
                bb.gP(this.Cx, "z-pause z-play", "z-loading");
                break;
            case "pause":
            case "ended":
                bb.bB(this.Cx, "z-pause z-loading");
                break;
            case "error":
                bp.ci.bS({
                    type: 2,
                    tip: "试听遇到问题，播放失败"
                });
                bb.bB(this.Cx, "z-pause z-loading");
                break;
            case "playing":
                bb.gP(this.Cx, "z-loading", "z-pause");
                break;
            case "waiting":
                bb.gP(this.Cx, "z-pause", "z-loading");
                break
        }
    }
        ;
    bc.cji = function (be) {
        if (be.result.code == 407) {
            this.XX.innerHTML = '<div class="n-norlt s-fc1">根据相关法律法规和政策，搜索结果未予显示</div>';
            return
        }
        this.XX.innerHTML = '<div class="n-norlt s-fc1">页面出错，请稍后再试！</div>'
    }
        ;
    bc.bGn = function (be) {
        if (!this.uZ || be.index < 0 || be.index > 5) {
            return
        }
        this.So.bsx();
        var cl = VV[be.index]
            , bf = NEJ.X({}, this.sz);
        bf.cache = {
            klass: bs.GN,
            clear: true,
            onerror: this.cji.bi(this)
        };
        bf.cache.lkey = "search-publish-" + cl.type + "-" + this.uZ;
        bf.item = {
            klass: cl.item,
            getRestrictLevel: bn.qy,
            dur2time: bn.nx
        };
        if (!bf.cache.data) {
            bf.cache.data = {}
        }
        bf.cache.data.s = this.uZ;
        bf.cache.data.type = cl.type;
        bf.cache.data.isPub = true;
        if (cl.type == 1) {
            bf.cache.data.hlpretag = '<span class="s-fc7">';
            bf.cache.data.hlposttag = "</span>"
        }
        bf.onemptylist = this.cjh.bi(this, this.uZ);
        if (!!this.Gk)
            this.bU.vC(this.Gk);
        if (!!this.eV) {
            this.eV = this.eV.bX()
        }
        this.eV = bL.pw.bH(bf);
        this.Gk = bf.cache.lkey
    }
        ;
    bc.sh = function (be) {
        be.value = bb.jQ("m-publish-search-loading")
    }
        ;
    bc.cjh = function (bP, be) {
        bb.fG(be.parent, "m-publish-emtpy-message", {
            key: bP
        });
        be.stopped = true
    }
})();
(function () {
    var bd = NEJ.P, bb = bd("nej.e"), bj = bd("nej.v"), eI = bd("nej.p"), bA = bd("nej.j"), dI = bd("nej.ut"), cV = bd("nej.ui"), bK = bd("nm.w"), bc, bO;
    var cje = ".j-item.j-selected a{background:#eee;text-decoration:none;color:#333;}";
    bK.Gh = NEJ.C();
    bc = bK.Gh.bT(cV.fP);
    var hH = bb.fT("m-wgt-receiverInput");
    var cjd = bb.fT("m-wgt-receiverList");
    var jN = bb.tY(cje);
    var cjc = bb.fT('<div data-id=${userId} class="blk s-fc3 j-receiver">${username}<a href="#" class="cls" title="删除">&times;</a></div>');
    bc.dG = function (bf) {
        this.ck = [];
        this.xk = bf.receiver || null;
        this.cjb = bf.unique || false;
        this.or = bf.err;
        this.bHU(this.bHX, bf.uid);
        this.dM(bf)
    }
        ;
    bc.cv = function (bf) {
        this.cw(bf);
        this.NV();
        this.NW();
        this.baw();
        if (bf.receiver)
            this.brH(bf.receiver.nickname, bf.receiver.userId);
        bb.cf(this.CG, "display", "block");
        bb.cf(this.brG, "cursor", "text");
        bb.cf(this.CG, "cursor", "text")
    }
        ;
    bc.dq = function () {
        var bl = this.bIq();
        this.dr = bb.jK(bb.dm(hH, {
            receiver: this.xk,
            users: bl
        }));
        this.nd = jN
    }
        ;
    bc.di = function () {
        this.dv();
        var cJ = bb.bN(this.bq, "j-flag");
        var jX = bb.bN(this.bq, "j-item");
        this.brG = cJ[0];
        this.bIz = cJ[1];
        this.fb = cJ[2];
        this.CG = cJ[3];
        this.Ug = cJ[4];
        this.brr = cJ[5];
        this.hs = jX;
        bb.bC(this.hs[0], "j-selected");
        bj.bt(this.fb, "keyup", this.brq.bi(this));
        bj.bt(this.fb, "keydown", this.OA.bi(this));
        bj.bt(this.fb, "focus", this.lO.bi(this));
        bj.bt(this.Ug, "click", this.cja.bi(this));
        bj.bt(this.brG, "click", this.ciZ.bi(this));
        bj.bt(document.body, "click", this.po.bi(this));
        bj.bt(this.fb, "input", this.gQ.bi(this));
        bj.bt(this.fb, "blur", this.qR.bi(this))
    }
        ;
    bc.cR = function (bf) {
        bj.px(document.body, "click", this.po.bi(this));
        this.cW();
        this.baw();
        this.ciY();
        this.po()
    }
        ;
    bc.brq = function (be) {
        bj.co(be);
        var kS = be.keyCode || be.which;
        var cu = this.fb.value;
        var cD = this.hs.length;
        var sJ = bb.bN(this.bq, "j-selected")[0];
        switch (kS) {
            case 13:
                var nj = bb.jn(sJ, "data-username");
                var ji = bb.jn(sJ, "data-userId");
                this.brH(nj, ji);
                this.po();
                this.fb.value = "";
                break;
            case 38:
                var bv = bb.jn(sJ, "data-index") - 1 < 0 ? cD - 1 : bb.jn(sJ, "data-index") - 1;
                bb.bB(sJ, "j-selected");
                bb.bC(this.hs[bv], "j-selected");
                break;
            case 40:
                var bv = parseInt(bb.jn(sJ, "data-index")) + 1 >= cD ? 0 : parseInt(bb.jn(sJ, "data-index")) + 1;
                bb.bB(sJ, "j-selected");
                bb.bC(this.hs[bv], "j-selected");
                break;
            default:
                this.wY()
        }
    }
        ;
    bc.OA = function (be) {
        var kS = be.keyCode || be.which;
        var cu = this.fb.value;
        var bv = bb.bN(this.bq, "j-receiver").length - 1;
        if (kS === 8 && cu === "")
            this.ciW(bv)
    }
        ;
    bc.gQ = function (be) {
        var cu = this.fb.value;
        if (cu.length > 10) {
            this.fb.value = cu.substring(0, 10);
            return
        }
        eI.ei.browser == "ie" && eI.ei.version < "7.0" ? setTimeout(this.brd.bi(this), 0) : this.brd();
        this.NW()
    }
        ;
    bc.lO = function () {
        if (this.ck[0])
            this.wY();
        else
            this.bHU(this.ciV);
        bb.cf(this.CG, "display", "none")
    }
        ;
    bc.qR = function () {
        var cD = bb.bN(this.bq, "j-receiver").length;
        if (this.fb.value.trim() == "" && cD <= 0)
            bb.cf(this.CG, "display", "block")
    }
        ;
    bc.brH = function (nj, ji) {
        var HA = this.QG();
        if (HA.length >= 10) {
            this.eX();
            return
        }
        var cq;
        for (cq = 0; cq < HA.length; cq++) {
            if (HA[cq] == ji) {
                this.po();
                return
            }
        }
        if (!nj || !ji)
            return;
        var bh = bb.eU(bb.jK(bb.dm(cjc, {
            username: nj,
            userId: ji
        })));
        var cS = this.bIz.parentNode;
        if (this.cjb) {
            this.baw()
        }
        cS.insertBefore(bh, this.bIz);
        this.fb.value = "";
        var cD = bb.bN(this.bq, "j-receiver").length;
        if (cD > 1)
            bb.cf(this.CG, "display", "none");
        this.brd();
        this.NW()
    }
        ;
    bc.baw = function () {
        var QI = bb.bN(this.bq, "j-receiver");
        var cq;
        if (QI.length > 0) {
            for (cq = 0; cq < QI.length; cq++) {
                bb.dY(QI[cq], false)
            }
        }
    }
        ;
    bc.ciY = function () {
        this.fb.value = ""
    }
        ;
    bc.ciW = function (bv) {
        this.eX(!0);
        var QI = bb.bN(this.bq, "j-receiver");
        bb.dY(QI[bv], false);
        this.NW()
    }
        ;
    bc.wY = function () {
        var cu = this.fb.value;
        var cO = cu.trim().toLowerCase();
        var bl;
        cO = cO.replace(/\[/g, "\\[");
        cO = cO.replace(/\]/g, "\\]");
        bl = this.bIq(cO);
        this.ciU(bl)
    }
        ;
    bc.po = function (be) {
        bb.cf(this.Ug, "display", "none")
    }
        ;
    bc.eX = function (hZ) {
        if (hZ && this.or) {
            bb.cf(this.or, "display", "none");
            return
        }
        if (this.or)
            bb.cf(this.or, "display", "block")
    }
        ;
    bc.cja = function (be) {
        bj.dz(be);
        var eK = be.target || be.srcElement;
        if (bb.cN(eK, "j-flag"))
            return;
        var cS = eK.nodeName.toLowerCase() == "a" ? eK.parentNode : eK.parentNode.parentNode;
        var nj = bb.jn(cS, "data-username");
        var ji = bb.jn(cS, "data-userId");
        this.brH(nj, ji);
        this.po();
        bb.cf(this.CG, "display", "none")
    }
        ;
    bc.ciZ = function (be) {
        bj.co(be);
        var eK = be.target || be.srcElement;
        if (bb.cN(eK.parentNode, "j-receiver")) {
            bb.dY(eK.parentNode, false);
            this.eX(!0);
            this.NW()
        } else
            this.fb.focus()
    }
        ;
    bc.brd = function () {
        this.brr.innerHTML = this.fb.value;
        var eC = this.brr.offsetWidth + 2;
        bb.cf(this.fb, "width", eC + "px")
    }
        ;
    bc.NW = function () {
        var WR = bb.kn(this.fb, this.bq).y;
        var bKz = Math.floor((WR - 8) / 27);
        if (bKz < 0)
            return;
        bb.cf(this.brG, "height", 19 + bKz * 29 + "px")
    }
        ;
    bc.NV = function () {
        var rz = ["height", "paddingLeft", "paddingTop", "paddingRight", "paddingBottom", "fontSize", "fontFamily", "lineHeight"];
        for (var i = 0; i < rz.length; i++) {
            bb.cf(this.brr, rz[i], bb.eE(this.fb, rz[i]))
        }
    }
        ;
    bc.bHU = function (eS, bE) {
        var fq = bE ? bE : window.GUser.userId;
        var ce = "/api/user/getfollows/" + fq;
        var hd = bA.cE(ce, {
            sync: false,
            method: "get",
            query: "offset = 0&limit=1000&order=true",
            onload: eS.bi(this),
            onerror: function (bl) {
                this.ck = []
            },
            onbeforerequest: function (bl) { }
        })
    }
        ;
    bc.bHX = function (bl) {
        this.ck = JSON.parse(bl).follow || [];
        var bE = GUser.userId;
        for (var i = 0; i < this.ck.length; i++) {
            if (this.ck[i].userId == bE) {
                this.ck.splice(i, 1);
                continue
            }
            this.ck[i].avatarUrl = this.ck[i].avatarUrl + "?param=30y30"
        }
    }
        ;
    bc.ciV = function (bl) {
        if (this.ck[0])
            return;
        this.bHX(bl);
        this.wY()
    }
        ;
    bc.bIq = function (cO) {
        var cO = cO ? cO : "";
        this.ck = this.ck[0] ? this.ck : [];
        var cD = this.ck.length;
        var QU = this.QG();
        var tN = [];
        var QX, Rc, bqY;
        if (!this.ck[0])
            return tN;
        for (var cq = 0; cq < cD; cq++) {
            bqY = false;
            for (var bA = 0; bA < QU.length; bA++) {
                if (this.ck[cq].userId == QU[bA]) {
                    bqY = true;
                    break
                }
            }
            if (bqY)
                continue;
            QX = this.ck[cq].nickname.toLowerCase().search(cO);
            Rc = this.ck[cq].py ? this.ck[cq].py.toLowerCase().search(cO) : -1;
            if (QX !== -1 || Rc != -1)
                tN.push(this.ck[cq])
        }
        return tN
    }
        ;
    bc.ciU = function (bl) {
        bb.fG(this.Ug, cjd, {
            users: bl
        });
        bb.bC(bb.bN(this.bq, "j-item")[0], "j-selected");
        this.hs = bb.bN(this.bq, "j-item");
        bb.cf(this.Ug, "display", "block")
    }
        ;
    bc.QG = function () {
        var tN = bb.bN(this.bq, "j-receiver") || [];
        var ji = [];
        for (var i = 0; i < tN.length; i++) {
            ji.push(bb.jn(tN[i], "data-id"))
        }
        return ji
    }
        ;
    bc.cvc = function () {
        var ji = this.QG();
        var tN = [];
        for (var i = 0; i < ji.length; i++) {
            for (var j = 0; j < this.ck.length; j++) {
                if (ji[i] == this.ck[j].userId)
                    tN.push(this.ck[j])
            }
        }
        return tN
    }
        ;
    bc.ciQ = function () {
        this.baw()
    }
        ;
    bK.Gh.bS = function (bf) {
        if (!GUser || !GUser.userId || GUser.userId <= 0) {
            bp.pT.bS({
                title: "登录"
            });
            return
        }
        bf = bf || {};
        if (bf.parent === undefined)
            bf.parent = document.body;
        !!this.gr && this.gr.bX();
        this.gr = this.bH(bf)
    }
        ;
    bK.Gh.cC = function () {
        !!this.gr && this.gr.bX()
    }
        ;
    bK.Gh.HC = function () {
        return this.po()
    }
        ;
    bK.Gh.cvd = function () {
        return this.wY()
    }
})();
(function () {
    var bd = NEJ.P, bb = bd("nej.e"), bm = bd("nej.u"), bj = bd("nej.v"), bn = bd("nm.x"), bp = bd("nm.l"), bc, bO;
    bp.HD = NEJ.C();
    bc = bp.HD.bT(bp.bgL);
    bO = bp.HD.dC;
    bc.cv = function () {
        var Ft;
        var ciN = function (bF, bP) {
            Ft = Ft || [];
            if (bP != "18")
                Ft.push({
                    key: bP,
                    value: bF
                })
        };
        return function (bf) {
            this.cw(bf);
            if (!Ft) {
                var cI = bn.cpf();
                bm.fD(cI, ciN)
            }
            var cD = Ft.length;
            Ft.splice(cD - 2, 0, {
                key: "18",
                value: "186"
            });
            this.bbN = Ft
        }
    }();
    bc.dq = function () {
        this.dr = "ntp-portrait"
    }
        ;
    bc.di = function () {
        this.dv();
        var bk = bb.bN(this.bq, "j-flag");
        this.cP = bk[0];
        this.ciI = bk[1];
        this.ciH = bk[2];
        this.ciG = bk[3];
        bj.bt(this.cP, "click", this.zD.bi(this));
        bj.bt(this.ciI, "click", this.Fe.bi(this, 1));
        bj.bt(this.ciG, "click", this.Fe.bi(this, 2))
    }
        ;
    bc.bqE = function (bv) {
        this.Ub = bv;
        var cs = (bv - 1) * 50;
        var bk = this.bbN.slice(cs, Math.min(cs + 50, this.bbN.length));
        this.cP.innerHTML = bb.dm("jst-portrait", {
            plist: bk
        }, {
                purl: bn.bFp
            });
        this.ciH.innerText = bv + "/" + Math.ceil(this.bbN.length / 50)
    }
        ;
    bc.Fe = function (bv) {
        var ciF = Math.ceil(this.bbN.length / 50);
        if (bv == 1 && this.Ub == 1 || bv == 2 && this.Ub == ciF)
            return;
        bv == 1 ? this.bqE(this.Ub - 1) : this.bqE(this.Ub + 1)
    }
        ;
    bc.zD = function (be) {
        var bM = bj.bZ(be, "d:text");
        if (!bM)
            return;
        var be = {
            url: bb.bz(bM, "url"),
            text: bb.bz(bM, "text")
        };
        this.bG("onselect", be);
        if (!be.stopped)
            this.cC()
    }
        ;
    bc.bS = function () {
        bO.bS.call(this);
        this.bqE(1)
    }
})();
(function () {
    var bd = NEJ.P
        , bj = bd("nej.v")
        , bm = bd("nej.u")
        , eI = bd("nej.p")
        , cj = bd("nej.h")
        , bL = bd("nej.ut")
        , kZ = /^[#?]+/
        , Gv = /#(.*?)$/
        , zI = window
        , bqD = !history.pushState || eI.Mk.android || !history.auto;
    var Un = function (ce, bqC) {
        zI.history[!bqC ? "pushState" : "replaceState"](null, document.title, ce)
    };
    var UC = function () {
        return location.parse(zI.location.href)
    };
    Un = Un.fz(function (be) {
        if (!bqD)
            return;
        var cn = be.args;
        be.stopped = !0;
        ce = cn[0].replace(kZ, "");
        !cn[1] ? zI.location.hash = ce : zI.location.replace("#" + ce)
    });
    UC = UC.fz(function (be) {
        if (!bqD)
            return;
        be.stopped = !0;
        var fi = Gv.test(zI.location.href) ? RegExp.$1 : "";
        be.value = location.parse(fi.replace(kZ, ""))
    });
    location.redirect = function (ce, bqC) {
        Un(ce, bqC);
        return this
    }
        ;
    location.active = function () {
        var gL, ce, kC, dV, NC;
        var bqy = function (kr) {
            if (!!dV) {
                dV = !1;
                return
            }
            var be = {
                oldValue: kC,
                newValue: UC()
            };
            if (!!location.ignored) {
                location.ignored = !1
            } else {
                bj.bG(location, "beforeurlchange", be);
                if (be.stopped) {
                    if (!!kC) {
                        dV = !0;
                        Un(kC.href, !0)
                    }
                    return
                }
            }
            ce = zI.location.href;
            kC = be.newValue;
            bj.bG(location, "urlchange", kC);
            cj.bqA(kC.href)
        };
        var bMy = function () {
            if (ce != zI.location.href)
                bqy();
            gL = requestAnimationFrame(bMy)
        };
        return function (dg) {
            if (!!NC)
                return this;
            NC = !0;
            zI = dg || window;
            if (bqD && "onhashchange" in window && eI.ov.trident2) {
                bj.bt(zI, "hashchange", bqy);
                bqy()
            } else if (!gL) {
                gL = requestAnimationFrame(bMy)
            }
            return this
        }
    }();
    location.parse = function () {
        var hx = /^https?:\/\/.*?\//i
            , kZ = /[?#]/;
        return function (ce) {
            var bo = {
                href: ce
            };
            ce = (ce || "").replace(hx, "/").split(kZ);
            var dB = 1;
            if (ce[0] == "/" && (ce[1] || "").indexOf("/") == 0)
                dB = 2;
            bo.path = ce.splice(0, dB).join("?");
            bo.query = bm.jg(ce.join("&"));
            return bo
        }
    }();
    location.same = function (ce) {
        return UC().href == ce
    }
        ;
    bL.he.bH({
        element: location,
        event: ["beforeurlchange", "urlchange"]
    })
})();
(function () {
    var bd = NEJ.P
        , bb = bd("nej.e")
        , bj = bd("nej.v")
        , hq = bd("nm.ut");
    hq.vW = function (gb) {
        var hP = {
            text: "",
            start: 0,
            end: 0
        };
        if (gb.setSelectionRange) {
            hP.start = gb.selectionStart;
            hP.end = gb.selectionEnd;
            hP.text = hP.start != hP.end ? gb.value.substring(hP.start, hP.end) : ""
        } else if (document.selection) {
            var i, Vs = document.selection.createRange(), zZ = document.body.createTextRange();
            zZ.moveToElementText(gb);
            hP.text = Vs.text;
            hP.bookmark = Vs.getBookmark();
            for (i = 0; zZ.compareEndPoints("StartToStart", Vs) < 0 && Vs.moveStart("character", -1) !== 0; i++) {
                if (gb.value.charAt(i) == "\n") {
                    i++
                }
            }
            hP.start = i;
            hP.end = hP.text.length + hP.start
        }
        return hP
    }
        ;
    hq.VK = function (gb, hP) {
        var zZ;
        if (!hP) {
            hP = {
                text: "",
                start: 0,
                end: 0
            }
        }
        gb.focus();
        if (gb.setSelectionRange) {
            gb.setSelectionRange(hP.start, hP.end)
        } else if (gb.createTextRange) {
            zZ = gb.createTextRange();
            if (gb.value.length === hP.start) {
                zZ.collapse(false);
                zZ.select()
            } else {
                zZ.moveToBookmark(hP.bookmark);
                zZ.select()
            }
        }
    }
        ;
    hq.HL = function (gb, hP, eB) {
        var hP = hP || {
            text: "",
            start: 0,
            end: 0
        };
        var bqn, bMS, zZ, Tm, bMV, bMW, EL;
        this.VK(gb, hP);
        if (gb.setSelectionRange) {
            bqn = gb.value;
            bMS = bqn.substring(0, hP.start) + eB + bqn.substring(hP.end);
            bMV = bMW = hP.start + eB.length;
            EL = gb.scrollTop;
            gb.value = bMS;
            if (gb.scrollTop != EL) {
                gb.scrollTop = EL
            }
            gb.setSelectionRange(bMV, bMW)
        } else if (gb.createTextRange) {
            Tm = document.selection.createRange();
            Tm.text = eB;
            Tm.setEndPoint("StartToEnd", Tm);
            Tm.select()
        }
        bj.bG(gb, "keyup")
    }
})();
(function () {
    var bd = NEJ.P, bb = bd("nej.e"), bj = bd("nej.v"), eI = bd("nej.p"), bm = bd("nej.u"), dI = bd("nej.ut"), bK = bd("nm.w"), hq = bd("nm.ut"), bc;
    bK.bMY = NEJ.C();
    bc = bK.bMY.bT(dI.dX);
    bc.dG = function (bf) {
        this.dM(bf)
    }
        ;
    bc.cv = function (bf) {
        this.cw(bf);
        this.hn = bf.txt;
        this.EG = bf.sgtsContainer;
        this.bNb = bf.sgtsList[0];
        this.Wg = bf.sgtsItem;
        this.qf = bf.rangeData;
        this.HN = bf.atIndex;
        bb.bC(this.Wg[0], "selected-item");
        this.LV()
    }
        ;
    bc.cR = function () {
        this.cW();
        bj.px(document.body, "keyup", this.bNj.bi(this));
        bj.px(document.body, "click", this.bNk.bi(this))
    }
        ;
    bc.LV = function () {
        this.df([[document.body, "keyup", this.bNj.bi(this)], [document.body, "click", this.bNk.bi(this)], [this.hn, "keydown", this.bNm.bi(this)], [this.hn, "keypress", this.bNm.bi(this)], [this.bNb, "click", this.bNn.bi(this)], [this.bNb, "mouseover", this.ED.bi(this)]])
    }
        ;
    bc.ED = function (be) {
        var eK = bj.bZ(be);
        var bu = bb.bN(this.EG, "selected-item");
        if (bb.cN(eK, "j-sgt")) {
            bb.bB(bu[0], "selected-item");
            bb.bC(eK, "selected-item")
        }
    }
        ;
    bc.bNj = function (be) {
        var bu = bb.bN(this.EG, "selected-item");
        var cD = this.Wg.length;
        var kS = be.keyCode || be.which;
        var bv, bl;
        switch (kS) {
            case 38:
                bv = bb.jn(bu[0], "data-index") - 1 < 0 ? cD - 1 : bb.jn(bu[0], "data-index") - 1;
                bb.bB(bu[0], "selected-item");
                bb.bC(this.Wg[bv], "selected-item");
                break;
            case 40:
                bv = parseInt(bb.jn(bu[0], "data-index")) + 1 >= cD ? 0 : parseInt(bb.jn(bu[0], "data-index")) + 1;
                bb.bB(bu[0], "selected-item");
                bb.bC(this.Wg[bv], "selected-item");
                break;
            case 13:
                this.bNn(be);
                break;
            case 27:
                this.po();
                break;
            case 32:
                var cu = this.hn.value;
                var bv = hq.vW(this.hn);
                if (cu.charAt(bv.start - 1) !== " ")
                    return;
                this.po();
                break
        }
    }
        ;
    bc.bNm = function (be) {
        var kS = be.keyCode || be.which;
        if (kS === 13 || kS === 38 || kS === 40) {
            bj.dz(be);
            be.keyCode = 0;
            be.which = 0;
            be.returnvalue = false
        }
    }
        ;
    bc.bNk = function (be) {
        var eK = be.target || be.srcElement;
        if (eK === this.hn)
            return;
        this.po()
    }
        ;
    bc.bNn = function (be) {
        bj.co(be);
        var bu = bb.bN(this.EG, "selected-item")[0];
        var sJ = be.target || be.srcElement;
        var bw = be.type;
        if (bb.cN(sJ, "lst"))
            return;
        if (bw == "click") {
            bb.bB(bu, "selected-item");
            bb.bC(sJ, "selected-item")
        } else
            sJ = bu;
        var bl = sJ.innerHTML + " ";
        this.po();
        var hP = this.qf;
        hP.start = this.HN + 1;
        if (eI.ei.browser == "ie" && eI.ei.version < "9.0") {
            this.hn.value = this.hn.value.substring(0, hP.start) + this.hn.value.substring(hP.end, this.hn.value.length);
            hP.end = hP.start
        }
        hq.HL(this.hn, hP, bl);
        bj.bG(this.hn, "keyup")
    }
        ;
    bc.po = function (be) {
        if (!!this.EG)
            bb.cf(this.EG, "display", "none");
        this.bX()
    }
        ;
    bc.wY = function (be) {
        if (!!this.EG)
            bb.cf(this.EG, "display", "block")
    }
})();
(function () {
    var bd = NEJ.P, bb = bd("nej.e"), bj = bd("nej.v"), bm = bd("nej.u"), bA = bd("nej.j"), bK = bd("nm.w"), dI = bd("nej.ut"), cV = bd("nej.ui"), bc;
    var ciE = ".u-atlist{position: absolute;z-index: 10000;}.f-thide.selected-item{background-color: #eee;}";
    var ciD = bb.fT("m-wgt-atlist");
    var jN = bb.tY(ciE);
    bK.bNv = NEJ.C();
    bc = bK.bNv.bT(cV.fP);
    bc.dG = function (bf) {
        this.hj = {};
        this.dM()
    }
        ;
    bc.cv = function (bf) {
        this.hj.txt = bb.bD(bf.target);
        this.hj.data = bf.data;
        this.hj.offset = bf.offset;
        this.hj.rangeData = bf.rangeData;
        this.hj.atIndex = bf.atIndex;
        this.ciC(bf);
        this.cw(bf);
        this.hj.sgtsContainer = this.bq;
        this.hj.sgtsList = bb.bN(this.bq, "lst");
        this.hj.sgtsItem = bb.bN(this.bq, "f-thide");
        this.bax(bf);
        this.ciy = bK.bMY.bH(this.hj)
    }
        ;
    bc.cR = function (bf) {
        this.cW();
        this.ciy.bX()
    }
        ;
    bc.dq = function () {
        this.nd = jN
    }
        ;
    bc.di = function () {
        this.dv()
    }
        ;
    bc.ciC = function (bf) {
        this.bq = bb.eU(bb.jK(bb.dm(ciD, bf.data)))
    }
        ;
    bc.bax = function (bf) {
        var bNG = bb.bN(this.bq, "selected-item")[0];
        if (bNG)
            bb.bB(bNG, "selected-item");
        var en = bf.offset.x + "px";
        var ix = bf.offset.y + "px";
        bb.cf(this.bq, "left", en);
        bb.cf(this.bq, "top", ix)
    }
})();
(function () {
    var bd = NEJ.P
        , bA = bd("nej.j")
        , hq = bd("nm.ut");
    hq.bNH = function (cu) {
        if (!GUser || !GUser.userId || GUser.userId <= 0)
            return;
        var ej = /@([a-zA-Z0-9_\-\u4E00-\u9FA5]+)/g;
        var HQ = cu.match(ej) || [];
        for (var cq = 0; cq < HQ.length; cq++) {
            HQ[cq] = HQ[cq].split("@")[1]
        }
        HQ = HQ.reverse();
        var ji = GUser.userId;
        var cix = bA.vS("mentioners" + ji) || [];
        var kQ = HQ.concat(cix);
        if (kQ.length > 10)
            kQ = kQ.slice(0, 10);
        bA.xO("mentioners" + ji, kQ)
    }
        ;
    hq.ciw = function () {
        if (!GUser || !GUser.userId || GUser.userId <= 0)
            return;
        var ji = GUser.userId;
        return bA.vS("mentioners" + ji) || []
    }
})();
(function () {
    var bd = NEJ.P, bb = bd("nej.e"), bj = bd("nej.v"), eI = bd("nej.p"), bA = bd("nej.j"), bm = bd("nej.u"), dI = bd("nej.ut"), bK = bd("nm.w"), hq = bd("nm.ut"), bc;
    bK.bNP = NEJ.C();
    bc = bK.bNP.bT(dI.dX);
    bc.dG = function (bf) {
        this.dM(bf);
        this.bNS()
    }
        ;
    bc.cv = function (bf) {
        this.cw(bf);
        this.hn = bf.txt;
        this.bq = bf.body;
        this.bNT = bf.before;
        this.Ql = bf.flag;
        this.civ = bf.after;
        this.rA = [];
        if (eI.ei.browser != "ie") {
            setTimeout(function () {
                this.nk()
            }
                .bi(this), 0)
        }
        this.LV()
    }
        ;
    bc.cR = function () {
        this.cW();
        if (this.vE)
            this.vE.bX();
        delete this.vE
    }
        ;
    bc.LV = function () {
        this.df([[this.hn, "keyup", this.bOk.bi(this, this.hn)], [this.hn, "click", this.bOk.bi(this, this.hn)], [this.hn, "focus", this.nk.bi(this)]])
    }
        ;
    bc.nk = function (be) {
        this.qf = hq.vW(this.hn)
    }
        ;
    bc.bNS = function () {
        if (!GUser || !GUser.userId || GUser.userId <= 0) {
            window.GFollowers = [];
            return
        }
        var fq = window.GUser.userId;
        var ce = "/api/user/getfollows/" + fq;
        var hd = bA.cE(ce, {
            sync: false,
            method: "get",
            query: "offset = 0&limit=1000&order=true",
            onload: function (bl) {
                window.GFollowers = JSON.parse(bl).follow
            }
                .bi(this),
            onerror: function (bl) { },
            onbeforerequest: function (bl) { }
        })
    }
        ;
    bc.bOl = function (index) {
        var bF = this.hn.value, cs, bqh, bqg, Mw;
        this.bNT.innerHTML = bm.fo(bF.substr(0, index)).replace(/\n/g, "<br/>").replace(/\s/g, '<span class="j-test" style="display:inline-block;white-space: pre-wrap; font-family:Arial, Helvetica, sans-serif;"></span>');
        var rU = bb.bN(this.bNT, "j-test");
        for (var cq = 0; cq < rU.length; cq++) {
            rU[cq].innerText = " "
        }
        this.Ql.innerHTML = bF.charAt(index);
        this.civ.innerHTML = bm.fo(bF.substr(index + 1, bF.length));
        Mw = parseInt(bb.eE(this.hn, "lineHeight"));
        bb.cf(this.bq, "display", "block");
        bqh = bb.kn(this.Ql, this.bq);
        bqg = bb.kn(this.hn);
        bb.cf(this.bq, "display", "none");
        var en = bqh.x + bqg.x;
        var ix = bqh.y + bqg.y + Mw;
        cs = {
            x: en,
            y: ix
        };
        this.ciu(cs)
    }
        ;
    bc.bOk = function (gb, be) {
        bj.dz(be);
        var gb = gb;
        var bF = gb.value;
        var cD = bF.length;
        var bv = hq.vW(gb).start;
        var bOu = 0;
        var kS = be.keyCode || be.which;
        var kQ;
        this.qf = hq.vW(gb);
        var bOv = false;
        for (var i = 1; i < 20; i++) {
            kQ = bv - i;
            if (bF.charAt(kQ) === " ")
                break;
            if (bF.charAt(kQ) === "@") {
                bOv = true;
                this.HN = bOu = kQ;
                break
            }
        }
        if (bOv && be.shiftKey === false && kS !== 38 && kS !== 40) {
            if (kS !== 27 && kS !== 13) {
                this.vE ? this.vE.bX() : null;
                this.bOl(bOu)
            }
        } else if (kS !== 38 && kS !== 40 && be.keyCode !== 32) {
            this.vE ? this.vE.bX() : null
        }
    }
        ;
    bc.ciu = function (cs) {
        var cs = cs;
        var bl = this.HR();
        var bf = {
            parent: document.body,
            offset: cs,
            data: bl,
            target: this.hn,
            rangeData: this.qf,
            atIndex: this.HN
        };
        this.vE ? this.vE.bX() : null;
        this.vE = bK.bNv.bH(bf)
    }
        ;
    bc.HR = function () {
        var cit = hq.vW(this.hn).start;
        var cir = this.HN + 1;
        var btb = hq.ciw() || [];
        var btc = [];
        var cO = this.hn.value.substring(cir, cit).toLowerCase();
        cO = cO.replace(/\[/g, "\\[");
        cO = cO.replace(/\]/g, "\\]");
        if (window.GFollowers) {
            this.rA = window.GFollowers[0] ? window.GFollowers : []
        } else
            this.rA = [];
        if (!this.rA[0])
            this.bNS();
        for (var cq = 0; cq < btb.length; cq++) {
            for (var bA = 0; bA < this.rA.length; bA++) {
                if (this.rA[bA].nickname == btb[cq])
                    btc.push(this.rA[bA])
            }
        }
        this.rA = bm.cci(this.rA, btc, {
            union: true,
            begin: true
        });
        var ciq = this.rA.length;
        var Xy = [];
        var QX, Rc;
        if (!this.rA[0])
            return {
                suggests: Xy
            };
        for (var i = 0; i < ciq; i++) {
            QX = this.rA[i].nickname.toLowerCase().search(cO);
            Rc = this.rA[i].py ? this.rA[i].py.toLowerCase().search(cO) : -1;
            if (QX !== -1 || Rc != -1)
                Xy.push(this.rA[i]);
            if (Xy.length === 10)
                break
        }
        return {
            suggests: Xy
        }
    }
        ;
    bc.MB = function () {
        var hP = this.qf || {
            text: "",
            start: 0,
            end: 0
        };
        bj.bG(this.hn, "focus");
        hq.HL(this.hn, hP, "@");
        this.qf = hq.vW(this.hn);
        this.HN = hP.start;
        this.bOl(this.HN)
    }
        ;
    bc.HC = function () {
        if (this.vE)
            this.vE.bX()
    }
})();
(function () {
    var bd = NEJ.P, bb = bd("nej.e"), bj = bd("nej.v"), bm = bd("nej.u"), bA = bd("nej.j"), bK = bd("nm.w"), dI = bd("nej.ut"), cV = bd("nej.ui"), bc;
    var cio = "#shadow-box{position: absolute;display: block;left: 450px;top: 1020px;border: 1px solid black;word-wrap: break-word;display:none;opacity: 0;filter: Alpha(opacity=0);z-index: -1000;}";
    var cin = '<div id="shadow-box" style="word-wrap:break-word"><span  class="node-before"></span><span>@</span><span  class="node-after"></span></div>';
    var hH = bb.jK(cin);
    var jN = bb.tY(cio);
    bK.MJ = NEJ.C();
    bc = bK.MJ.bT(cV.fP);
    bc.dG = function (bf) {
        this.hj = {};
        this.dM()
    }
        ;
    bc.cv = function (bf) {
        this.cw(bf);
        this.hj.txt = bb.bD(bf.target);
        this.NV();
        this.MN = bK.bNP.bH(this.hj)
    }
        ;
    bc.cR = function (bf) {
        this.cW();
        this.MN.bX()
    }
        ;
    bc.dq = function () {
        this.dr = hH;
        this.nd = jN
    }
        ;
    bc.di = function () {
        this.dv();
        var bk = bb.ek(bb.bD(this.bq));
        this.hj.body = this.bq;
        this.hj.before = bk[0];
        this.hj.flag = bk[1];
        this.hj.after = bk[2]
    }
        ;
    bc.NV = function () {
        var rz = ["width", "borderWidth", "border-style", "outline", "marginLeft", "marginTop", "marginRight", "marginBottom", "height", "paddingLeft", "paddingTop", "fontSize", "wordWrap", "fontFamily", "lineHeight", "overflowX", "overflowY"];
        for (var i = 0; i < rz.length; i++) {
            if (rz[i] === "width" && bb.eE(this.hj.txt, rz[i]) == "100%") {
                bb.cf(this.bq, rz[i], this.hj.txt.offsetWidth + "px");
                continue
            }
            bb.cf(this.bq, rz[i], bb.eE(this.hj.txt, rz[i]))
        }
    }
        ;
    bc.MB = function () {
        this.MN.MB()
    }
        ;
    bc.HC = function () {
        this.MN.HC()
    }
})();
(function () {
    var bd = NEJ.P, cg = NEJ.O, cz = NEJ.F, gI = NEJ.R, bb = bd("nej.e"), bj = bd("nej.v"), bm = bd("nej.u"), bL = bd("nej.ut"), ly = bd("nm.c"), bW = {}, bc;
    if (!!ly.bqd)
        return;
    ly.bqd = NEJ.C();
    bc = ly.bqd.bT(bL.dX);
    bc.dG = function () {
        this.dM()
    }
        ;
    bc.cv = function (bf) {
        this.cw(bf)
    }
        ;
    bc.cR = function () {
        this.cW()
    }
        ;
    bc.HS = function (gi, eS) {
        if (bW[gi]) {
            this.jJ("register commonJST[" + gi + "] duplicate");
            return
        }
        if (!bm.hF(eS)) {
            eS = ctl.comJST.cil(gi, eS)
        }
        bW[gi] = eS
    }
        ;
    bc.cij = function (YC) {
        if (bm.fU(YC)) {
            bm.cr(YC, function (bu) {
                ctl.comJST.HS.apply(this, bu)
            }, this)
        } else if (bm.mK(YC)) {
            bm.fD(YC, function (gw, bP) {
                ctl.comJST.HS(bP, gw)
            })
        }
    }
        ;
    bc.cil = function (gi, vR, btz) {
        vR = vR || {};
        NEJ.X(vR, {
            comJST: this.sf
        });
        if (vR.resetDataName && !bm.fU(vR.resetDataName)) {
            vR.resetDataName = [vR.resetDataName]
        }
        return function () {
            var bl = arguments[0]
                , mW = arguments[1];
            if (vR.resetDataName) {
                var kQ = {};
                for (var i = 0, ii = vR.resetDataName.length; i < ii; i++) {
                    kQ[vR.resetDataName[i]] = arguments[i]
                }
                bl = kQ;
                mW = arguments[ii]
            }
            NEJ.X(bl, vR, fm);
            if (btz) {
                mW = mW || {};
                NEJ.X(mW, btz)
            }
            return bb.dm(gi, bl, mW)
        }
    }
        ;
    bc.sf = function (gi) {
        if (!bW[gi]) {
            this.jJ("commonJST[" + gi + "] is unregister");
            return ""
        } else {
            return bW[gi].apply(null, gI.slice.call(arguments, 1))
        }
    }
        ;
    bc.dump = function () {
        return bW
    }
        ;
    bc.jJ = function (cii) {
        if (console && console.log) {
            console.log(cii)
        }
    }
        ;
    var fm = function (gw, bP) {
        return bP == "resetDataName"
    };
    bd("ctl").comJST = ly.bqd.hC()
})();
(function () {
    var bd = NEJ.P, cg = NEJ.O, cz = NEJ.F, gI = NEJ.R, bb = bd("nej.e"), bj = bd("nej.v"), bm = bd("nej.u"), bL = bd("nej.ut"), ly = bd("nm.c"), bW = {}, bc;
    if (!!ly.bpQ)
        return;
    ly.bpQ = NEJ.C();
    bc = ly.bpQ.bT(bL.dX);
    bc.dG = function () {
        this.dM();
        var bf = {
            "com-mv-artists": function (gR, fk, DA, bpP) {
                return bb.dm("com-mv-artists", {
                    artists: gR,
                    clazz: fk,
                    boxClazz: bpP,
                    mark: DA || function (ee) {
                        return ee
                    }
                    ,
                    escape: bm.fo,
                    comJST: ctl.comJST.sf
                })
            },
            "com-album-artists": function (gR, fk, DA, bpP) {
                return bb.dm("com-album-artists", {
                    artists: gR,
                    clazz: fk,
                    boxClazz: bpP,
                    mark: DA || function (ee) {
                        return ee
                    }
                    ,
                    escape: bm.fo,
                    comJST: ctl.comJST.sf
                })
            },
            "com-artists-title": {
                resetDataName: ["artists"],
                escape: bm.fo
            }
        };
        for (var bE in bf) {
            ctl.comJST.HS(bE, bf[bE])
        }
    }
        ;
    bc.cv = function (bf) {
        this.cw(bf)
    }
        ;
    bc.cR = function () {
        this.cW()
    }
        ;
    bd("ctl").comJSTUtil = ly.bpQ.hC()
})();
(function () {
    var bd = NEJ.P, cg = NEJ.O, bb = bd("nej.e"), eI = bd("nej.p"), bj = bd("nej.v"), bm = bd("nej.u"), bL = bd("nej.ut"), bA = bd("nej.j"), bK = bd("nm.w"), hq = bd("nm.ut"), bs = bd("nm.d"), bn = bd("nm.x"), bp = bd("nm.l"), YS = [2, 3], fd = ["sn", "db"], bc, bO, cif = {
        13: "playlist",
        17: "djprogram",
        18: "song",
        19: "album",
        20: "artist",
        21: "mv",
        24: "topic",
        25: "activity",
        70: "djradio",
        38: "concert",
        39: "video"
    }, Zg = {
        djprogram: "节目",
        album: "专辑",
        playlist: "歌单",
        song: "单曲",
        yunsong: "单曲",
        artist: "歌手",
        mv: "MV",
        topic: "音乐专栏",
        djradio: "电台",
        concert: "演出",
        video: "视频"
    }, btJ = {
        djprogram: " - ",
        album: " - ",
        playlist: " by ",
        song: " - ",
        yunsong: " - ",
        artist: "",
        mv: " - ",
        djradio: " by "
    }, cie = {
        0: 13,
        1: 17,
        3: 19,
        4: 18,
        5: 21,
        6: 24,
        14: 70,
        17: 20
    }, Ei = {
        pubEventWithPics: false,
        pubEventWithoutResource: false,
        pubEventWithPictureForbiddenNotice: "等级达到Lv.4，即可添加图片"
    };
    bp.zT = NEJ.C();
    bc = bp.zT.bT(bp.fA);
    bO = bp.zT.dC;
    bc.cv = function (bf) {
        if (bf.onclose === undefined) {
            bf.onclose = this.btP.bi(this)
        }
        this.cw(bf);
        this.AA = bf.isPub;
        this.lI = bf.rid || -1;
        this.gc = bf.type || -1;
        this.bat = bf.purl;
        this.DU = bf.name || "";
        this.DT = bf.author || "";
        this.bpt = bf.authors || "";
        this.baB = bf.actId;
        this.baC = bf.actName;
        this.bps = bf.title;
        this.baF = {};
        this.cic = bf.mesg || "";
        this.cib = bf.placeholder || "说点什么吧";
        this.bpq = bf.hideTip;
        var bk, jz = +(new Date);
        try {
            bk = top.localCache.bD("user") || {}
        } catch (e) {
            bk = {}
        }
        for (var i = 0, bk = bk.bindings || [], fO; i < bk.length; ++i) {
            fO = !bk[i].tokenJsonStr ? null : JSON.parse(bk[i].tokenJsonStr);
            if (!fO || fO.expires_in === undefined)
                continue;
            var bbj = parseInt(fO.expires_in)
                , bbo = parseInt(bk[i].refreshTime)
                , chZ = (bbj + bbo) * 1e3 - 5 * 60 * 1e3;
            if (chZ > jz)
                this.baF[bk[i].type] = !0
        }
        this.xk = bK.Gh.bH({
            parent: this.bbx,
            err: this.bur
        });
        if (this.iK) {
            this.iK.bX()
        }
        this.iK = bK.MJ.bH({
            parent: document.body,
            target: this.fN
        });
        if (this.gc == 24 || this.gc == 21 || this.uO()) {
            this.Ao.style.display = "none"
        } else {
            this.Ao.style.display = "";
            this.pW = bK.brn.bH({
                parent: this.bpj,
                button: this.Ao,
                onstartupload: this.buE.bi(this, true),
                onfinishupload: this.buE.bi(this, false)
            })
        }
        if (this.uO()) {
            this.xS = bK.bpg.bH({
                parent: this.bq.parentNode,
                onfinish: this.buH.bi(this),
                oncancel: function () {
                    this.cC()
                }
                    .bi(this)
            });
            if (bf.extError) {
                this.xS.chW({
                    agent: bf.videoUploadAgent,
                    code: -600
                })
            } else {
                this.xS.Se({
                    agent: bf.videoUploadAgent,
                    fileName: bf.videoFileName
                })
            }
            this.bck = true;
            this.bpf("addvideo")
        } else {
            this.bck = false
        }
    }
        ;
    bc.cR = function () {
        this.cW();
        if (this.xk) {
            this.xk.bX();
            delete this.xk
        }
        if (this.iK) {
            this.iK.bX();
            delete this.iK
        }
        if (this.pW) {
            this.pW.bX();
            delete this.pW
        }
        if (this.ns) {
            this.ns.bX();
            delete this.ns
        }
    }
        ;
    bc.dq = function () {
        this.dr = "m-wgt-sharewin"
    }
        ;
    bc.di = function () {
        this.dv();
        this.buN = bb.ek(this.bq)[0];
        var cA = bb.bN(this.bq, "j-flag");
        this.ry = cA.shift();
        this.bur = cA.shift();
        this.bbx = cA.shift();
        this.fN = cA.shift();
        this.sM = cA.shift();
        this.bpc = cA.shift();
        this.chV = cA.shift();
        this.Ao = cA.shift();
        this.dE = cA.shift();
        this.bpj = cA.shift();
        this.AB = cA.shift();
        this.cve = cA.shift();
        this.chS = cA.shift();
        this.fx = cA.shift();
        this.HX = bb.bN(this.chS, "j-t");
        this.CE = bL.GA.bH({
            list: bb.ek(this.ry),
            selected: "z-slt",
            onchange: this.boW.bi(this)
        });
        if (eI.ei.browser == "ie" && eI.ei.version < "8.0") {
            bb.cf(this.bbx, "position", "relative");
            bb.cf(this.bbx, "zIndex", "10")
        }
        bj.bt(window, "snsbind", this.Ob.bi(this));
        bj.bt(this.fN, "input", this.gQ.bi(this));
        bj.bt(this.fN, "keyup", this.vg.bi(this));
        bj.bt(this.bq, "click", this.dN.bi(this));
        this.bU = bs.bqm.bH();
        this.bU.bt("onshareall", this.Ul.bi(this, 0));
        this.bU.bt("onshareerror", this.jM.bi(this));
        this.bU.bt("onshareprivate", this.Ul.bi(this, 1));
        this.Um = bs.Bn.bH();
        this.jJ = bs.jE.bH();
        try {
            this.Oc = top.api.sharePermission
        } catch (e) { }
        if (!this.Oc) {
            this.Oc = Ei;
            bA.cE("/api/event/user/permission", {
                type: "json",
                onload: function (be) {
                    if (be.code == 200) {
                        this.Oc = NEJ.EX(Ei, be)
                    }
                }
                    .bi(this)
            })
        }
    }
        ;
    bc.boW = function (be) {
        be.index == 0 ? bb.bB(this.buN, "m-plshare") : bb.bC(this.buN, "m-plshare");
        this.bbx.style.display = be.index == 0 ? "none" : "";
        this.chV.style.display = be.index == 0 ? "" : "none";
        this.Ao.style.display = be.index == 0 ? "" : "none";
        if (this.gc == 24 || this.gc == 21) {
            this.Ao.style.display = "none"
        }
        this.bur.style.display = "none";
        this.fN.value = "";
        this.ds();
        this.Dy();
        if (be.index == 0) {
            var eC = bb.eE(this.fN, "width");
            if (eC == "auto" || !eC) {
                return
            } else {
                if (this.iK) {
                    this.iK.bX()
                }
                this.iK = bK.MJ.bH({
                    parent: document.body,
                    target: this.fN
                })
            }
            this.bpj.style.display = ""
        } else {
            if (this.iK) {
                this.iK.bX();
                delete this.iK
            }
            this.bpj.style.display = "none"
        }
    }
        ;
    bc.dN = function (be) {
        var bh = bj.bZ(be, "d:action");
        if (!bh)
            return;
        if (bb.bz(bh, "default") === undefined) {
            bj.dz(be)
        }
        switch (bb.bz(bh, "action")) {
            case "txt":
                this.nk();
                break;
            case "search":
                if (this.uO()) {
                    this.bck = true;
                    this.bpf("addvideo");
                    this.bq.style.display = "none";
                    this.xK("编辑封面");
                    this.xS = bK.bpg.bH({
                        parent: this.bq.parentNode,
                        onfinish: this.buH.bi(this),
                        oncancel: function () {
                            this.cC()
                        }
                            .bi(this)
                    });
                    this.xS.chR({
                        covers: this.Uv,
                        fileName: this.DU,
                        fileInfo: this.Uz.fileInfo,
                        covers: this.Uz.covers
                    });
                    this.jJ.ic("click", {
                        type: "replacecover",
                        page: "sharevideo"
                    })
                } else if (this.AA && this.gc != 24) {
                    if (this.ns) {
                        this.ns.bX()
                    }
                    this.ns = bK.bsq.bH({
                        parent: this.bq.parentNode,
                        onfinish: this.boS.bi(this),
                        oncancel: this.chP.bi(this)
                    });
                    this.boQ = true;
                    this.bq.style.display = "none";
                    this.xK(this.lI > 0 ? "更换音乐" : "添加音乐")
                }
                break;
            case "at":
                bj.tC(be);
                !!this.iy && this.iy.cC();
                this.iK.MB();
                this.hk();
                break;
            case "emot":
                bj.tC(be);
                !!this.iK && this.iK.HC();
                if (!this.iy) {
                    this.iy = bp.HD.bH({
                        parent: this.bpc
                    });
                    this.iy.bt("onselect", this.zD.bi(this))
                }
                this.iy.bS();
                break;
            case "upload":
                break;
            case "sns":
                bj.co(be);
                var boN, cO, bw = bb.bz(bh, "type");
                if (!this.baF[bw]) {
                    boN = bh.href.split("?");
                    cO = bm.jg(boN[1]);
                    cO["csrf_token"] = bA.iF("__csrf");
                    top.open(boN[0] + "?" + bm.eH(cO));
                    return
                }
                var cI = {
                    2: "sn",
                    3: "db",
                    4: "rr"
                };
                bn.Az(bh, "u-slg-" + cI[bw] + "-gray");
                break;
            case "close":
                !!this.iy && this.iy.cC();
                this.btP();
                break;
            case "share":
                bj.co(be);
                if (this.uO()) {
                    this.chO()
                } else if (bb.cN(bh, "u-btn2-2-dis")) {
                    if (!this.Oc.pubEventWithoutResource && !(this.lI > 0)) {
                        this.chN()
                    } else { }
                } else if (!(this.lI > 0) && !this.fN.value && this.pW && this.pW.LW().length == 0) {
                    bp.ci.bS({
                        type: 2,
                        tip: "请输入内容"
                    })
                } else {
                    this.chM()
                }
                break
        }
    }
        ;
    bc.chN = function () {
        var tI = 0, boJ = function () {
            if (tI % 2) {
                bb.bB(this.sM, "z-show")
            } else {
                bb.bC(this.sM, "z-show")
            }
            tI++;
            if (tI > 5) {
                clearInterval(gL)
            }
        }, gL;
        return function () {
            tI = 0;
            clearInterval(gL);
            gL = setInterval(boJ.bi(this), 200)
        }
    }();
    bc.Ob = function (bo) {
        bo = bo.result;
        this.baF[bo.type] = !0;
        var bv = bm.eu(YS, bo.type)
            , dw = "u-slg-" + fd[bv] + "-gray";
        bb.bB(this.HX[bv], dw)
    }
        ;
    bc.boS = function (cG) {
        var bl = cG.data;
        this.lI = cG.id;
        this.gc = cG.type;
        this.bq.style.display = "";
        this.xK(this.bps);
        this.ns && this.ns.bX();
        this.boQ = false;
        this.bat = bl.picUrl;
        this.DU = bl.title || "";
        this.DT = bl.author || "";
        this.bpt = bl.authors || "";
        this.bwc();
        this.Ow()
    }
        ;
    bc.buH = function (cG) {
        this.xS && this.xS.bX();
        this.bck = false;
        this.bpf("sharevideo");
        this.xK(this.bps);
        this.bq.style.display = "";
        this.bat = cG.coverUrl;
        this.DU = cG.fileName,
            this.Uz = cG;
        this.DT = bn.cnK(cG.fileInfo.size || cG.fileInfo.afterSize);
        this.fN.focus();
        this.bwc();
        this.Ow()
    }
        ;
    bc.chP = function () {
        this.ns && this.ns.bX();
        this.bq.style.display = "";
        this.xK(this.bps);
        this.boQ = false;
        this.Ow()
    }
        ;
    bc.zD = function (be) {
        var cu = "[" + be.text + "]";
        hq.HL(this.fN, this.qf, cu);
        this.hk()
    }
        ;
    bc.gQ = function (be) {
        eI.ei.browser == "ie" && eI.ei.version < "7.0" ? setTimeout(this.hk.bi(this), 0) : this.hk()
    }
        ;
    bc.vg = function (be) {
        this.nk();
        if (be.keyCode == 8)
            this.hk()
    }
        ;
    bc.hk = function () {
        this.nk();
        this.Dy()
    }
        ;
    bc.Dy = function () {
        var cD = Math.ceil(bm.hg(this.fN.value.trim()) / 2);
        this.dE.innerText = 140 - cD;
        cD > 140 ? bb.gP(this.dE, "s-fc4", "s-fc6") : bb.gP(this.dE, "s-fc6", "s-fc4")
    }
        ;
    bc.chM = function () {
        if (this.dR())
            return;
        if (bm.hg(this.fN.value.trim()) > 280) {
            this.ds("字数超过140个字符");
            return
        }
        var bw = this.CE.uw(), bl;
        if (bw == 0) {
            for (var i = 0, zW = []; i < this.HX.length; ++i) {
                if (!bb.cN(this.HX[i], "u-slg-" + fd[i] + "-gray"))
                    zW.push(YS[i])
            }
            this.dR(!0);
            bl = {
                id: this.lI,
                msg: this.fN.value.trim(),
                type: this.Vm(this.gc),
                picUrl: this.bat,
                snsTypes: zW.join(","),
                isPub: this.AA
            };
            if (this.baB > 0) {
                bl.actId = this.baB;
                if (this.baC) {
                    bl.msg = "#" + this.baC + "#" + bl.msg
                }
            }
            var qS = this.pW && this.pW.LW();
            if (qS && qS.length) {
                bl.pics = qS
            }
            this.bU.ckB(bl)
        } else {
            var tN = this.xk.QG();
            if (tN.length <= 0) {
                this.ds("请至少选择一位好友");
                return
            }
            this.bU.ckA({
                data: {
                    id: this.lI,
                    msg: this.fN.value.trim(),
                    type: this.Vm(this.gc),
                    userIds: "[" + tN.join(",") + "]"
                }
            })
        }
    }
        ;
    bc.chO = function () {
        if (this.dR()) {
            return
        }
        if (bm.hg(this.fN.value.trim()) > 280) {
            this.ds("字数超过140个字符");
            return
        }
        for (var i = 0, zW = []; i < this.HX.length; ++i) {
            if (!bb.cN(this.HX[i], "u-slg-" + fd[i] + "-gray"))
                zW.push(YS[i])
        }
        this.dR(!0);
        var AF = this.Uz.fileInfo
            , bl = {
                msg: this.fN.value.trim(),
                type: "video"
            }
            , chL = {
                vid: AF.vid,
                coverId: this.Uz.coverId,
                nosKey: AF.objectKey,
                size: AF.afterSize,
                duration: AF.afterDuration,
                width: AF.coverWidth,
                height: AF.coverHeight
            };
        if (this.baB > 0) {
            bl.actId = this.baB;
            if (this.baC) {
                bl.msg = "#" + this.baC + "#" + bl.msg
            }
        }
        bl.videoinfo = JSON.stringify(chL);
        this.bU.ckz({
            data: bl,
            snsTypes: zW.join(",")
        })
    }
        ;
    bc.Ul = function (bw, bo) {
        this.dR(!1);
        this.cC();
        if (!this.bpq) {
            bp.ci.bS({
                tip: "分享成功" + (bo.point > 0 ? ' 获得<em class="s-fc6">' + bo.point + "积分</em>" : ""),
                autoclose: true
            })
        }
        bj.bG(bp.zT, "sharesuccess", {
            isPrivate: bw,
            rid: this.lI,
            rtype: this.gc,
            data: bo.event
        });
        this.bG("onshare")
    }
        ;
    bc.jM = function (bo) {
        this.dR(!1);
        var cT = "分享失败";
        if (bo.code) {
            switch (bo.code) {
                case 404:
                    cT = "分享的资源不存在";
                    break;
                case 407:
                    cT = "输入内容包含有关键字";
                    break;
                case 408:
                    cT = "分享太快了，过会再分享吧";
                    break;
                case 315:
                    cT = bo.message || "根据对方设置，你没有该操作权限";
                    break
            }
        }
        this.ds(cT)
    }
        ;
    bc.nk = function () {
        this.qf = hq.vW(this.fN)
    }
        ;
    bc.ds = function (cT) {
        this.eX(this.fx, cT)
    }
        ;
    bc.dR = function (dV) {
        return this.fp(this.AB, dV, "分享", "分享中...")
    }
        ;
    bc.Vm = function (le) {
        return cif[le] || ""
    }
        ;
    bc.chJ = function () {
        var gb, vV = this.Vm(this.gc);
        this.sM.style.display = "";
        if (this.lI <= 0) {
            this.sM.innerHTML = '<i class="highlight"></i><div class="text f-thide f-fl f-fs1"><i class="logo f-fl u-icn2 u-icn2-quaver"></i><span class="f-fs1 f-fl">给动态配上音乐</span></div><i class="f-fr icn u-icn2 u-icn2-plus"></i>'
        } else {
            if (!this.DU) {
                this.sM.style.display = "none";
                return
            }
            var VF = this.AA && this.gc != 24;
            gb = (Zg[vV] ? Zg[vV] + "：" : "") + this.DU + (btJ[vV] || " ") + (vV == "mv" || vV == "album" ? this.bpt || this.DT : this.DT);
            bb.fG(this.sM, "m-xwgt-share-infobar", {
                canChange: VF,
                info: gb
            });
            if (VF) {
                bb.bB(this.sM, "z-dis")
            } else {
                bb.bC(this.sM, "z-dis")
            }
        }
        bb.bB(this.sM, "info-video")
    }
        ;
    bc.bwc = function () {
        var vV = this.Vm(this.gc)
            , gb = (Zg[vV] ? Zg[vV] + "：" : "") + this.DU + (btJ[vV] || " ") + (vV == "mv" || vV == "album" ? this.bpt || this.DT : this.DT);
        VF = this.AA && this.gc != 24;
        if (this.uO()) {
            bb.bC(this.sM, "info-video");
            bb.fG(this.sM, "m-xwgt-share-videobar", {
                cover: this.bat,
                name: this.DU,
                size: this.DT
            })
        } else {
            bb.bB(this.sM, "info-video");
            bb.fG(this.sM, "m-xwgt-share-infobar", {
                canChange: VF,
                isPub: this.AA,
                info: gb
            })
        }
    }
        ;
    bc.chI = function () {
        var Id = this.fN.value;
        if (this.AA) {
            if (this.uO()) {
                return true
            }
            if (!!this.boQ) {
                return !!Id && !!Id.length || !!this.pW && this.pW.LW().length > 0
            } else {
                return this.lI > 0 || !!Id && !!Id.length || !!this.pW && this.pW.LW().length > 0
            }
        } else {
            return !!Id && !!Id.length || !!this.pW && this.pW.LW().length > 0
        }
    }
        ;
    bc.Ow = function () {
        if (!this.AA || this.Oc.pubEventWithoutResource || this.lI > 0 || this.uO()) {
            bb.bB(this.AB, "u-btn2-2-dis")
        } else {
            bb.bC(this.AB, "u-btn2-2-dis")
        }
    }
        ;
    bc.buE = function (boE) {
        if (boE) {
            bb.bC(this.AB, "u-btn2-2-dis")
        } else {
            this.Ow()
        }
    }
        ;
    bc.btP = function (be) {
        be = be || {};
        be.stopped = true;
        if (this.bck) {
            this.xS.chH();
            this.jJ.ic("click", {
                type: "cancel",
                page: "addvideo"
            })
        } else if (this.chI()) {
            bn.iB({
                title: "提示",
                message: this.uO() ? "确定退出本次视频编辑？" : "是否退出本次编辑？",
                btnok: "退出",
                action: function (ch) {
                    if (ch == "ok") {
                        this.cC()
                    }
                }
                    .bi(this)
            });
            if (this.uO()) {
                this.jJ.ic("click", {
                    type: "cancel",
                    page: "sharevideo"
                })
            }
        } else {
            this.cC()
        }
    }
        ;
    bc.xK = function (gl, fg) {
        this.pD.Cr(gl, fg)
    }
        ;
    bc.bpf = function (bw) {
        this.jJ.ic("page", {
            type: bw
        })
    }
        ;
    bc.uO = function () {
        return this.gc == 39
    }
        ;
    bc.bS = function () {
        var chG = function (bu, bv) {
            var dw = "u-slg-" + fd[bv] + "-gray";
            !this.baF[YS[bv]] ? bb.bC(bu, dw) : bb.bB(bu, dw)
        };
        return function () {
            if (this.uO()) {
                this.bq.style.display = "none";
                this.xK("添加视频")
            } else {
                this.bq.style.display = ""
            }
            bO.bS.call(this);
            this.bq.style.display = "";
            this.ds();
            this.dR(!1);
            this.CE.Se(0);
            this.fN.focus();
            this.fN.value = this.cic || "";
            this.fN.placeholder = this.cib || "";
            this.chJ();
            this.hk();
            this.xk.ciQ();
            bm.cr(this.HX, chG, this);
            this.nk();
            if (this.AA) {
                this.ry.style.display = "none"
            } else {
                this.ry.style.display = ""
            }
            this.Ow();
            if (this.uO()) {
                this.bq.style.display = "none"
            }
        }
    }();
    bc.cC = function (be) {
        bO.cC.call(this);
        !!this.iy && this.iy.cC();
        if (this.xk) {
            this.xk.bX();
            delete this.xk
        }
        if (this.iK) {
            this.iK.bX();
            delete this.iK
        }
        if (this.pW) {
            this.pW.bX();
            delete this.pW
        }
        if (this.xS) {
            this.xS = this.xS.bX()
        }
        if (this.ns) {
            this.ns.bX();
            delete this.ns
        }
    }
        ;
    bn.oe = function (bf) {
        if (!GUser || !GUser.userId || GUser.userId <= 0) {
            top.login();
            return
        }
        if (bf.title === undefined) {
            bf.title = "分享"
        }
        if (bf.actId) {
            var bw = cie[bf.resourceType], fe = bf.resourceJson, iY;
            if (bm.gO(fe)) {
                try {
                    fe = JSON.parse(fe)
                } catch (e) { }
            }
            if (bw) {
                iY = bn.bOo(bw, fe);
                bf.name = iY.title;
                bf.author = iY.author;
                bf.picUrl = iY.picUrl;
                bf.type = bw;
                bf.rid = (fe || []).id
            }
        }
        bp.zT.bS(bf)
    }
        ;
    bL.he.bH({
        element: bp.zT,
        event: ["sharesuccess"]
    })
})();
(function () {
    var bd = NEJ.P, cg = NEJ.O, bj = bd("nej.v"), bb = bd("nej.e"), bA = bd("nej.j"), bp = bd("nm.l"), bK = bd("nm.w"), cV = bd("nej.ui"), bs = bd("nm.d"), bn = bd("nm.x"), bc, bO;
    bp.VT = NEJ.C();
    bc = bp.VT.bT(bp.fA);
    bO = bp.VT.dC;
    bc.dG = function () {
        this.dM()
    }
        ;
    bc.di = function () {
        this.dv();
        var bk = bb.bN(this.bq, "j-flag");
        bj.bt(bk[0], "click", this.FG.bi(this))
    }
        ;
    bc.dq = function () {
        this.dr = "m-import-ok"
    }
        ;
    bc.cv = function (bf) {
        bf.parent = bf.parent || document.body;
        bf.title = "歌曲同步完成";
        this.cw(bf)
    }
        ;
    bc.cR = function () {
        this.cW()
    }
        ;
    bc.FG = function (be) {
        this.cC();
        if (location.pathname.indexOf("my") >= 0) {
            location.reload()
        } else {
            location.dispatch2("/my/")
        }
    }
        ;
    bc.CT = function () {
        this.cC()
    }
        ;
    bc.buJ = function (be) {
        if (be.keyCode == 13)
            this.Ed()
    }
})();
(function () {
    var bd = NEJ.P, cg = NEJ.O, bj = bd("nej.v"), bb = bd("nej.e"), bA = bd("nej.j"), bR = bd("nej.p"), bm = bd("nej.u"), bp = bd("nm.l"), bK = bd("nm.w"), cV = bd("nej.ui"), bs = bd("nm.d"), bn = bd("nm.x"), bc, bO;
    bp.bwO = NEJ.C();
    bc = bp.bwO.bT(bp.fA);
    bc.dq = function () {
        this.dr = "m-programtips-layer"
    }
        ;
    bc.di = function () {
        this.dv();
        this.dn = bb.bN(this.bq, "j-flag")
    }
        ;
    bc.cv = function (bf) {
        bf.clazz = " m-layer-programtips";
        bf.parent = bf.parent || document.body;
        bf.title = "付费内容提示";
        bf.draggable = !0;
        bf.destroyalbe = !0;
        bf.mask = true;
        this.cw(bf);
        this.ir = bf.id;
        this.chF = bf.radiotype;
        this.mr = location.protocol + "//" + (this.chE() || "music.163.com") + "/m/" + this.chF + "?id=" + this.ir;
        this.chD()
    }
        ;
    bc.cR = function () {
        this.cW()
    }
        ;
    bc.CT = function () {
        this.cC()
    }
        ;
    bc.FG = function (be) {
        this.bG("onok", bF);
        this.cC()
    }
        ;
    bn.bwU = function (bf) {
        bp.bwO.bH(bf).bS()
    }
        ;
    bc.chD = function () {
        bA.cE("/api/web/qrcode/get", {
            method: "POST",
            type: "json",
            data: bm.eH({
                url: this.mr,
                size: 180
            }),
            onload: function (bl) {
                if (bl.code == 200) {
                    this.chA(bl.qrcodeImageUrl)
                } else {
                    alert("二维码获取失败")
                }
            }
                .bi(this)
        })
    }
        ;
    bc.chE = function () {
        var chy = location.host;
        if (chy.indexOf("music") >= 0) {
            return "music.163.com"
        } else {
            return "igame.163.com"
        }
    }
        ;
    bc.chA = function (ni) {
        this.dn[0].style.backgroundImage = "url(" + ni + ")"
    }
})();
(function () {
    var bd = NEJ.P, bb = bd("nej.e"), eI = bd("nej.p"), bj = bd("nej.v"), bm = bd("nej.u"), bL = bd("nej.ut"), bA = bd("nej.j"), bs = bd("nm.d"), bn = bd("nm.x"), bI = bd("nm.m"), bp = bd("nm.l"), bQ = bd("nm.m.f"), bc, bO;
    bI.eh = NEJ.C();
    bc = bI.eh.bT(bL.eP);
    bc.cX = function () {
        var rJ = !1;
        return function () {
            if (rJ)
                return;
            rJ = !0;
            this.dc();
            if (top == self) {
                return
            }
            this.uG = bb.bD("g_backtop");
            if (window.GRef != "mail") { } else {
                this.bxe()
            }
            bL.he.bH({
                element: window,
                event: ["share", "playchange", "snsbind", "playstatechange"]
            });
            this.df([[window, "scroll", this.AI.bi(this)], [document, "keyup", this.chx.bi(this)], [document.body, "click", this.uf.bi(this)], [document, "mouseup", this.chv.bi(this)], [this.uG, "click", this.OX.bi(this)], [bs.wF, "message", this.uC.bi(this)]]);
            bn.ckI(document.body);
            this.AI();
            if (this.Hg !== false && typeof GUser !== "undefined" && GUser.userId > 0)
                bs.wF.hC().ym();
            try {
                top.GUser = NEJ.X(top.GUser, GUser);
                top.api.refreshUserInfo();
                if (eI.ei.browser == "ie" && parseInt(eI.ei.version) < 9 && /#(.*?)$/.test(top.document.title)) {
                    top.document.title = "网易云音乐"
                } else {
                    var hN = top.player.getPlaying();
                    if (hN && hN.track && hN.playing) {
                        top.document.title = decodeURIComponent("%E2%96%B6%20") + hN.track.name
                    } else {
                        top.document.title = document.title
                    }
                }
            } catch (e) { }
            window.share = this.zJ.bi(this);
            this.lP = bs.jE.bH();
            window.log = this.os.bi(this);
            var tQ = location.search;
            if (tQ) {
                var cO = tQ.substr(tQ.indexOf("?") + 1)
                    , hD = bm.jg(cO);
                if (hD && hD["_hash"])
                    location.hash = hD["_hash"]
            }
        }
    }();
    bc.chx = function (be) {
        var bh = bj.bZ(be);
        try {
            if (be.keyCode == 80 && bn.bLh() || ["textarea", "input"].indexOf(bh.tagName.toLowerCase()) >= 0)
                return;
            bj.bG(top.document, "keyup", {
                ctrlKey: be.ctrlKey,
                keyCode: be.keyCode
            })
        } catch (e) { }
    }
        ;
    bc.uf = function (be) {
        var bh = bj.bZ(be);
        if (bh && bh.tagName == "INPUT")
            return;
        var bh = bj.bZ(be, "d:pid");
        if (bh) {
            bj.dz(be);
            var qJ = bb.bz(bh, "pid")
                , AJ = bb.bz(bh, "ptype")
                , ch = bb.bz(bh, "action") || "play";
            switch (ch) {
                case "subscribe":
                    bn.nW({
                        tracks: [qJ]
                    });
                    break
            }
        }
        bh = bj.bZ(be, "d:resAction");
        if (bh && bh.className.indexOf("-dis") == -1) {
            var dT = bb.bz(bh, "resId")
                , bw = bb.bz(bh, "resType")
                , bot = bb.bz(bh, "resRadiotype")
                , fj = bb.bz(bh, "resFrom")
                , bl = bb.bz(bh, "resData")
                , ch = bb.bz(bh, "resAction")
                , bsa = bb.bz(bh, "resCopyright");
            if (ch != "log" && ch != "bilog")
                bj.dz(be);
            switch (ch) {
                case "log":
                    bl = (bl || "").split("|");
                    if (!!bl[0]) {
                        var cl = {
                            id: dT,
                            alg: bl[2] || "itembased",
                            scene: bl[3],
                            position: bl[1] || 0
                        };
                        if (!!bl[4])
                            cl.srcid = bl[4];
                        window.log(bl[0], cl)
                    }
                    break;
                case "bilog":
                    var cho = bb.bz(bh, "logAction")
                        , chn = bb.bz(bh, "logJson");
                    window.log(cho, chn);
                    break;
                case "share":
                    share(dT, bw, bb.bz(bh, "resPic"), bb.bz(bh, "resName"), bb.bz(bh, "resAuthor"), bb.bz(bh, "resAuthors"));
                    break;
                case "fav":
                case "subscribe":
                    if (bw == 18) {
                        var rw = bb.bz(bh, "resLevel")
                            , sE = bb.bz(bh, "resFee");
                        if (rw == 10) {
                            bn.wq(sE, dT, "song");
                            break
                        }
                        bn.nW({
                            tracks: [dT]
                        })
                    }
                    break;
                case "download":
                    bn.baf({
                        id: dT,
                        type: bw
                    });
                    break;
                case "programtips":
                    bn.bwU({
                        id: dT,
                        radiotype: bot
                    });
                    break
            }
        }
        if (top == self)
            return;
        try {
            top.onIframeClick(be)
        } catch (e) { }
    }
        ;
    bc.chv = function (be) {
        try {
            bj.bG(top.document, "mouseup")
        } catch (e) { }
    }
        ;
    bc.AI = function () {
        var boq = function () {
            var dF = window.innerHeight;
            if (!bm.wD(dF))
                dF = (document.documentElement || document.body).clientHeight;
            return dF
        };
        return function (be) {
            if (!this.uG)
                return;
            var Pk = boq()
                , jO = document.documentElement.scrollTop || document.body.scrollTop;
            bb.cf(this.uG, "display", jO > 0 ? "" : "none");
            if (eI.ei.browser == "ie" && eI.ei.version < "7.0") {
                var hK = Math.min(document.body.clientHeight, Pk + jO) - 204;
                bb.cf(this.uG, "top", hK + "px")
            }
        }
    }();
    bc.OX = function (be) {
        bj.dz(be);
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0
    }
        ;
    bc.zJ = function () {
        var bop = function (be) {
            bj.bG(window, "share", be)
        };
        return function (dT, bw, GU, bY, Pn, Pu) {
            bn.oe({
                rid: dT,
                type: bw,
                purl: GU,
                name: bY,
                author: Pn,
                authors: Pu,
                onshare: bop.bi(this)
            })
        }
    }();
    bc.os = function (ch, cl) {
        try {
            top.log(ch, cl)
        } catch (e) {
            switch (ch) {
                case "play":
                    this.lP.gu(cl);
                    break;
                case "search":
                    this.lP.bJL(cl);
                    break;
                default:
                    this.lP.ic(ch, cl)
            }
        }
    }
        ;
    bc.bxe = function () {
        var WM, boo = false, cF = [45, 60];
        var chm = function (cT) {
            if (cT.title != "MailBoxImport")
                return;
            var bV = JSON.parse(cT.content || "null") || cg;
            if (bV.status == 10) {
                bp.VT.bH().bS();
                window.clearTimeout(WM)
            }
        };
        var vp = function (be) {
            if (be.code == 200) {
                if (be.status == 1) {
                    bj.bt(bs.Bc, "message", chm.bi(this));
                    bs.Bc.bH().bnM();
                    boo = true
                } else {
                    if (boo) {
                        if (be.status == 10) {
                            bp.VT.bH().bS();
                            bj.kX(bs.Bc, "message");
                            window.clearTimeout(WM);
                            boo = false
                        }
                    } else {
                        window.clearTimeout(WM)
                    }
                }
            }
        };
        return function () {
            var uI = cF.shift() * 1e3;
            bA.cE("/api/musicbox/mail/status", {
                type: "json",
                method: "get",
                onload: vp.bi(this)
            });
            if (uI) {
                WM = window.setTimeout(arguments.callee, uI)
            }
        }
    }();
    bc.uC = function (be) {
        try {
            top.polling(be)
        } catch (e) { }
    }
})()
