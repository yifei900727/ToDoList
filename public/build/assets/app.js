var ai = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};

function Lw(n) {
    return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n
}
var vu = {
    exports: {}
};
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
(function (n, e) {
    (function () {
        var i, o = "4.17.21",
            a = 200,
            l = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",
            c = "Expected a function",
            h = "Invalid `variable` option passed into `_.template`",
            _ = "__lodash_hash_undefined__",
            y = 500,
            b = "__lodash_placeholder__",
            S = 1,
            T = 2,
            I = 4,
            Y = 1,
            W = 2,
            L = 1,
            P = 2,
            U = 4,
            F = 8,
            B = 16,
            R = 32,
            z = 64,
            et = 128,
            st = 256,
            ut = 512,
            ft = 30,
            gt = "...",
            lt = 800,
            ht = 16,
            xt = 1,
            be = 2,
            yt = 3,
            At = 1 / 0,
            Gt = 9007199254740991,
            We = 17976931348623157e292,
            Fe = 0 / 0,
            kt = 4294967295,
            Ln = kt - 1,
            Zn = kt >>> 1,
            rn = [
                ["ary", et],
                ["bind", L],
                ["bindKey", P],
                ["curry", F],
                ["curryRight", B],
                ["flip", ut],
                ["partial", R],
                ["partialRight", z],
                ["rearg", st]
            ],
            Pt = "[object Arguments]",
            Ne = "[object Array]",
            tr = "[object AsyncFunction]",
            jt = "[object Boolean]",
            He = "[object Date]",
            go = "[object DOMException]",
            sn = "[object Error]",
            er = "[object Function]",
            Kr = "[object GeneratorFunction]",
            Xt = "[object Map]",
            Rn = "[object Number]",
            Ni = "[object Null]",
            ae = "[object Object]",
            Li = "[object Promise]",
            vo = "[object Proxy]",
            Jt = "[object RegExp]",
            It = "[object Set]",
            on = "[object String]",
            In = "[object Symbol]",
            qr = "[object Undefined]",
            an = "[object WeakMap]",
            Ri = "[object WeakSet]",
            un = "[object ArrayBuffer]",
            Ue = "[object DataView]",
            mo = "[object Float32Array]",
            Eo = "[object Float64Array]",
            bo = "[object Int8Array]",
            yo = "[object Int16Array]",
            Ao = "[object Int32Array]",
            wo = "[object Uint8Array]",
            To = "[object Uint8ClampedArray]",
            xo = "[object Uint16Array]",
            Oo = "[object Uint32Array]",
            J_ = /\b__p \+= '';/g,
            Q_ = /\b(__p \+=) '' \+/g,
            Z_ = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
            Rl = /&(?:amp|lt|gt|quot|#39);/g,
            Il = /[&<>"']/g,
            tg = RegExp(Rl.source),
            eg = RegExp(Il.source),
            ng = /<%-([\s\S]+?)%>/g,
            rg = /<%([\s\S]+?)%>/g,
            Dl = /<%=([\s\S]+?)%>/g,
            ig = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
            sg = /^\w*$/,
            og = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
            So = /[\\^$.*+?()[\]{}|]/g,
            ag = RegExp(So.source),
            Co = /^\s+/,
            ug = /\s/,
            lg = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
            cg = /\{\n\/\* \[wrapped with (.+)\] \*/,
            fg = /,? & /,
            hg = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
            dg = /[()=,{}\[\]\/\s]/,
            pg = /\\(\\)?/g,
            _g = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
            $l = /\w*$/,
            gg = /^[-+]0x[0-9a-f]+$/i,
            vg = /^0b[01]+$/i,
            mg = /^\[object .+?Constructor\]$/,
            Eg = /^0o[0-7]+$/i,
            bg = /^(?:0|[1-9]\d*)$/,
            yg = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
            Ii = /($^)/,
            Ag = /['\n\r\u2028\u2029\\]/g,
            Di = "\\ud800-\\udfff",
            wg = "\\u0300-\\u036f",
            Tg = "\\ufe20-\\ufe2f",
            xg = "\\u20d0-\\u20ff",
            Pl = wg + Tg + xg,
            Ml = "\\u2700-\\u27bf",
            Bl = "a-z\\xdf-\\xf6\\xf8-\\xff",
            Og = "\\xac\\xb1\\xd7\\xf7",
            Sg = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",
            Cg = "\\u2000-\\u206f",
            Ng = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
            Wl = "A-Z\\xc0-\\xd6\\xd8-\\xde",
            Fl = "\\ufe0e\\ufe0f",
            Hl = Og + Sg + Cg + Ng,
            No = "['\u2019]",
            Lg = "[" + Di + "]",
            Ul = "[" + Hl + "]",
            $i = "[" + Pl + "]",
            kl = "\\d+",
            Rg = "[" + Ml + "]",
            Vl = "[" + Bl + "]",
            Kl = "[^" + Di + Hl + kl + Ml + Bl + Wl + "]",
            Lo = "\\ud83c[\\udffb-\\udfff]",
            Ig = "(?:" + $i + "|" + Lo + ")",
            ql = "[^" + Di + "]",
            Ro = "(?:\\ud83c[\\udde6-\\uddff]){2}",
            Io = "[\\ud800-\\udbff][\\udc00-\\udfff]",
            nr = "[" + Wl + "]",
            Yl = "\\u200d",
            zl = "(?:" + Vl + "|" + Kl + ")",
            Dg = "(?:" + nr + "|" + Kl + ")",
            Gl = "(?:" + No + "(?:d|ll|m|re|s|t|ve))?",
            jl = "(?:" + No + "(?:D|LL|M|RE|S|T|VE))?",
            Xl = Ig + "?",
            Jl = "[" + Fl + "]?",
            $g = "(?:" + Yl + "(?:" + [ql, Ro, Io].join("|") + ")" + Jl + Xl + ")*",
            Pg = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",
            Mg = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",
            Ql = Jl + Xl + $g,
            Bg = "(?:" + [Rg, Ro, Io].join("|") + ")" + Ql,
            Wg = "(?:" + [ql + $i + "?", $i, Ro, Io, Lg].join("|") + ")",
            Fg = RegExp(No, "g"),
            Hg = RegExp($i, "g"),
            Do = RegExp(Lo + "(?=" + Lo + ")|" + Wg + Ql, "g"),
            Ug = RegExp([nr + "?" + Vl + "+" + Gl + "(?=" + [Ul, nr, "$"].join("|") + ")", Dg + "+" + jl + "(?=" + [Ul, nr + zl, "$"].join("|") + ")", nr + "?" + zl + "+" + Gl, nr + "+" + jl, Mg, Pg, kl, Bg].join("|"), "g"),
            kg = RegExp("[" + Yl + Di + Pl + Fl + "]"),
            Vg = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
            Kg = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"],
            qg = -1,
            ct = {};
        ct[mo] = ct[Eo] = ct[bo] = ct[yo] = ct[Ao] = ct[wo] = ct[To] = ct[xo] = ct[Oo] = !0, ct[Pt] = ct[Ne] = ct[un] = ct[jt] = ct[Ue] = ct[He] = ct[sn] = ct[er] = ct[Xt] = ct[Rn] = ct[ae] = ct[Jt] = ct[It] = ct[on] = ct[an] = !1;
        var at = {};
        at[Pt] = at[Ne] = at[un] = at[Ue] = at[jt] = at[He] = at[mo] = at[Eo] = at[bo] = at[yo] = at[Ao] = at[Xt] = at[Rn] = at[ae] = at[Jt] = at[It] = at[on] = at[In] = at[wo] = at[To] = at[xo] = at[Oo] = !0, at[sn] = at[er] = at[an] = !1;
        var Yg = {
                \u00C0: "A",
                \u00C1: "A",
                \u00C2: "A",
                \u00C3: "A",
                \u00C4: "A",
                \u00C5: "A",
                \u00E0: "a",
                \u00E1: "a",
                \u00E2: "a",
                \u00E3: "a",
                \u00E4: "a",
                \u00E5: "a",
                \u00C7: "C",
                \u00E7: "c",
                \u00D0: "D",
                \u00F0: "d",
                \u00C8: "E",
                \u00C9: "E",
                \u00CA: "E",
                \u00CB: "E",
                \u00E8: "e",
                \u00E9: "e",
                \u00EA: "e",
                \u00EB: "e",
                \u00CC: "I",
                \u00CD: "I",
                \u00CE: "I",
                \u00CF: "I",
                \u00EC: "i",
                \u00ED: "i",
                \u00EE: "i",
                \u00EF: "i",
                \u00D1: "N",
                \u00F1: "n",
                \u00D2: "O",
                \u00D3: "O",
                \u00D4: "O",
                \u00D5: "O",
                \u00D6: "O",
                \u00D8: "O",
                \u00F2: "o",
                \u00F3: "o",
                \u00F4: "o",
                \u00F5: "o",
                \u00F6: "o",
                \u00F8: "o",
                \u00D9: "U",
                \u00DA: "U",
                \u00DB: "U",
                \u00DC: "U",
                \u00F9: "u",
                \u00FA: "u",
                \u00FB: "u",
                \u00FC: "u",
                \u00DD: "Y",
                \u00FD: "y",
                \u00FF: "y",
                \u00C6: "Ae",
                \u00E6: "ae",
                \u00DE: "Th",
                \u00FE: "th",
                \u00DF: "ss",
                \u0100: "A",
                \u0102: "A",
                \u0104: "A",
                \u0101: "a",
                \u0103: "a",
                \u0105: "a",
                \u0106: "C",
                \u0108: "C",
                \u010A: "C",
                \u010C: "C",
                \u0107: "c",
                \u0109: "c",
                \u010B: "c",
                \u010D: "c",
                \u010E: "D",
                \u0110: "D",
                \u010F: "d",
                \u0111: "d",
                \u0112: "E",
                \u0114: "E",
                \u0116: "E",
                \u0118: "E",
                \u011A: "E",
                \u0113: "e",
                \u0115: "e",
                \u0117: "e",
                \u0119: "e",
                \u011B: "e",
                \u011C: "G",
                \u011E: "G",
                \u0120: "G",
                \u0122: "G",
                \u011D: "g",
                \u011F: "g",
                \u0121: "g",
                \u0123: "g",
                \u0124: "H",
                \u0126: "H",
                \u0125: "h",
                \u0127: "h",
                \u0128: "I",
                \u012A: "I",
                \u012C: "I",
                \u012E: "I",
                \u0130: "I",
                \u0129: "i",
                \u012B: "i",
                \u012D: "i",
                \u012F: "i",
                \u0131: "i",
                \u0134: "J",
                \u0135: "j",
                \u0136: "K",
                \u0137: "k",
                \u0138: "k",
                \u0139: "L",
                \u013B: "L",
                \u013D: "L",
                \u013F: "L",
                \u0141: "L",
                \u013A: "l",
                \u013C: "l",
                \u013E: "l",
                \u0140: "l",
                \u0142: "l",
                \u0143: "N",
                \u0145: "N",
                \u0147: "N",
                \u014A: "N",
                \u0144: "n",
                \u0146: "n",
                \u0148: "n",
                \u014B: "n",
                \u014C: "O",
                \u014E: "O",
                \u0150: "O",
                \u014D: "o",
                \u014F: "o",
                \u0151: "o",
                \u0154: "R",
                \u0156: "R",
                \u0158: "R",
                \u0155: "r",
                \u0157: "r",
                \u0159: "r",
                \u015A: "S",
                \u015C: "S",
                \u015E: "S",
                \u0160: "S",
                \u015B: "s",
                \u015D: "s",
                \u015F: "s",
                \u0161: "s",
                \u0162: "T",
                \u0164: "T",
                \u0166: "T",
                \u0163: "t",
                \u0165: "t",
                \u0167: "t",
                \u0168: "U",
                \u016A: "U",
                \u016C: "U",
                \u016E: "U",
                \u0170: "U",
                \u0172: "U",
                \u0169: "u",
                \u016B: "u",
                \u016D: "u",
                \u016F: "u",
                \u0171: "u",
                \u0173: "u",
                \u0174: "W",
                \u0175: "w",
                \u0176: "Y",
                \u0177: "y",
                \u0178: "Y",
                \u0179: "Z",
                \u017B: "Z",
                \u017D: "Z",
                \u017A: "z",
                \u017C: "z",
                \u017E: "z",
                \u0132: "IJ",
                \u0133: "ij",
                \u0152: "Oe",
                \u0153: "oe",
                \u0149: "'n",
                \u017F: "s"
            },
            zg = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;"
            },
            Gg = {
                "&amp;": "&",
                "&lt;": "<",
                "&gt;": ">",
                "&quot;": '"',
                "&#39;": "'"
            },
            jg = {
                "\\": "\\",
                "'": "'",
                "\n": "n",
                "\r": "r",
                "\u2028": "u2028",
                "\u2029": "u2029"
            },
            Xg = parseFloat,
            Jg = parseInt,
            Zl = typeof ai == "object" && ai && ai.Object === Object && ai,
            Qg = typeof self == "object" && self && self.Object === Object && self,
            Nt = Zl || Qg || Function("return this")(),
            $o = e && !e.nodeType && e,
            Dn = $o && !0 && n && !n.nodeType && n,
            tc = Dn && Dn.exports === $o,
            Po = tc && Zl.process,
            ue = function () {
                try {
                    var m = Dn && Dn.require && Dn.require("util").types;
                    return m || Po && Po.binding && Po.binding("util")
                } catch {}
            }(),
            ec = ue && ue.isArrayBuffer,
            nc = ue && ue.isDate,
            rc = ue && ue.isMap,
            ic = ue && ue.isRegExp,
            sc = ue && ue.isSet,
            oc = ue && ue.isTypedArray;

        function Qt(m, w, A) {
            switch (A.length) {
                case 0:
                    return m.call(w);
                case 1:
                    return m.call(w, A[0]);
                case 2:
                    return m.call(w, A[0], A[1]);
                case 3:
                    return m.call(w, A[0], A[1], A[2])
            }
            return m.apply(w, A)
        }

        function Zg(m, w, A, $) {
            for (var K = -1, nt = m == null ? 0 : m.length; ++K < nt;) {
                var wt = m[K];
                w($, wt, A(wt), m)
            }
            return $
        }

        function le(m, w) {
            for (var A = -1, $ = m == null ? 0 : m.length; ++A < $ && w(m[A], A, m) !== !1;);
            return m
        }

        function tv(m, w) {
            for (var A = m == null ? 0 : m.length; A-- && w(m[A], A, m) !== !1;);
            return m
        }

        function ac(m, w) {
            for (var A = -1, $ = m == null ? 0 : m.length; ++A < $;)
                if (!w(m[A], A, m)) return !1;
            return !0
        }

        function ln(m, w) {
            for (var A = -1, $ = m == null ? 0 : m.length, K = 0, nt = []; ++A < $;) {
                var wt = m[A];
                w(wt, A, m) && (nt[K++] = wt)
            }
            return nt
        }

        function Pi(m, w) {
            var A = m == null ? 0 : m.length;
            return !!A && rr(m, w, 0) > -1
        }

        function Mo(m, w, A) {
            for (var $ = -1, K = m == null ? 0 : m.length; ++$ < K;)
                if (A(w, m[$])) return !0;
            return !1
        }

        function dt(m, w) {
            for (var A = -1, $ = m == null ? 0 : m.length, K = Array($); ++A < $;) K[A] = w(m[A], A, m);
            return K
        }

        function cn(m, w) {
            for (var A = -1, $ = w.length, K = m.length; ++A < $;) m[K + A] = w[A];
            return m
        }

        function Bo(m, w, A, $) {
            var K = -1,
                nt = m == null ? 0 : m.length;
            for ($ && nt && (A = m[++K]); ++K < nt;) A = w(A, m[K], K, m);
            return A
        }

        function ev(m, w, A, $) {
            var K = m == null ? 0 : m.length;
            for ($ && K && (A = m[--K]); K--;) A = w(A, m[K], K, m);
            return A
        }

        function Wo(m, w) {
            for (var A = -1, $ = m == null ? 0 : m.length; ++A < $;)
                if (w(m[A], A, m)) return !0;
            return !1
        }
        var nv = Fo("length");

        function rv(m) {
            return m.split("")
        }

        function iv(m) {
            return m.match(hg) || []
        }

        function uc(m, w, A) {
            var $;
            return A(m, function (K, nt, wt) {
                if (w(K, nt, wt)) return $ = nt, !1
            }), $
        }

        function Mi(m, w, A, $) {
            for (var K = m.length, nt = A + ($ ? 1 : -1); $ ? nt-- : ++nt < K;)
                if (w(m[nt], nt, m)) return nt;
            return -1
        }

        function rr(m, w, A) {
            return w === w ? gv(m, w, A) : Mi(m, lc, A)
        }

        function sv(m, w, A, $) {
            for (var K = A - 1, nt = m.length; ++K < nt;)
                if ($(m[K], w)) return K;
            return -1
        }

        function lc(m) {
            return m !== m
        }

        function cc(m, w) {
            var A = m == null ? 0 : m.length;
            return A ? Uo(m, w) / A : Fe
        }

        function Fo(m) {
            return function (w) {
                return w == null ? i : w[m]
            }
        }

        function Ho(m) {
            return function (w) {
                return m == null ? i : m[w]
            }
        }

        function fc(m, w, A, $, K) {
            return K(m, function (nt, wt, ot) {
                A = $ ? ($ = !1, nt) : w(A, nt, wt, ot)
            }), A
        }

        function ov(m, w) {
            var A = m.length;
            for (m.sort(w); A--;) m[A] = m[A].value;
            return m
        }

        function Uo(m, w) {
            for (var A, $ = -1, K = m.length; ++$ < K;) {
                var nt = w(m[$]);
                nt !== i && (A = A === i ? nt : A + nt)
            }
            return A
        }

        function ko(m, w) {
            for (var A = -1, $ = Array(m); ++A < m;) $[A] = w(A);
            return $
        }

        function av(m, w) {
            return dt(w, function (A) {
                return [A, m[A]]
            })
        }

        function hc(m) {
            return m && m.slice(0, gc(m) + 1).replace(Co, "")
        }

        function Zt(m) {
            return function (w) {
                return m(w)
            }
        }

        function Vo(m, w) {
            return dt(w, function (A) {
                return m[A]
            })
        }

        function Yr(m, w) {
            return m.has(w)
        }

        function dc(m, w) {
            for (var A = -1, $ = m.length; ++A < $ && rr(w, m[A], 0) > -1;);
            return A
        }

        function pc(m, w) {
            for (var A = m.length; A-- && rr(w, m[A], 0) > -1;);
            return A
        }

        function uv(m, w) {
            for (var A = m.length, $ = 0; A--;) m[A] === w && ++$;
            return $
        }
        var lv = Ho(Yg),
            cv = Ho(zg);

        function fv(m) {
            return "\\" + jg[m]
        }

        function hv(m, w) {
            return m == null ? i : m[w]
        }

        function ir(m) {
            return kg.test(m)
        }

        function dv(m) {
            return Vg.test(m)
        }

        function pv(m) {
            for (var w, A = []; !(w = m.next()).done;) A.push(w.value);
            return A
        }

        function Ko(m) {
            var w = -1,
                A = Array(m.size);
            return m.forEach(function ($, K) {
                A[++w] = [K, $]
            }), A
        }

        function _c(m, w) {
            return function (A) {
                return m(w(A))
            }
        }

        function fn(m, w) {
            for (var A = -1, $ = m.length, K = 0, nt = []; ++A < $;) {
                var wt = m[A];
                (wt === w || wt === b) && (m[A] = b, nt[K++] = A)
            }
            return nt
        }

        function Bi(m) {
            var w = -1,
                A = Array(m.size);
            return m.forEach(function ($) {
                A[++w] = $
            }), A
        }

        function _v(m) {
            var w = -1,
                A = Array(m.size);
            return m.forEach(function ($) {
                A[++w] = [$, $]
            }), A
        }

        function gv(m, w, A) {
            for (var $ = A - 1, K = m.length; ++$ < K;)
                if (m[$] === w) return $;
            return -1
        }

        function vv(m, w, A) {
            for (var $ = A + 1; $--;)
                if (m[$] === w) return $;
            return $
        }

        function sr(m) {
            return ir(m) ? Ev(m) : nv(m)
        }

        function ye(m) {
            return ir(m) ? bv(m) : rv(m)
        }

        function gc(m) {
            for (var w = m.length; w-- && ug.test(m.charAt(w)););
            return w
        }
        var mv = Ho(Gg);

        function Ev(m) {
            for (var w = Do.lastIndex = 0; Do.test(m);) ++w;
            return w
        }

        function bv(m) {
            return m.match(Do) || []
        }

        function yv(m) {
            return m.match(Ug) || []
        }
        var Av = function m(w) {
                w = w == null ? Nt : or.defaults(Nt.Object(), w, or.pick(Nt, Kg));
                var A = w.Array,
                    $ = w.Date,
                    K = w.Error,
                    nt = w.Function,
                    wt = w.Math,
                    ot = w.Object,
                    qo = w.RegExp,
                    wv = w.String,
                    ce = w.TypeError,
                    Wi = A.prototype,
                    Tv = nt.prototype,
                    ar = ot.prototype,
                    Fi = w["__core-js_shared__"],
                    Hi = Tv.toString,
                    it = ar.hasOwnProperty,
                    xv = 0,
                    vc = function () {
                        var t = /[^.]+$/.exec(Fi && Fi.keys && Fi.keys.IE_PROTO || "");
                        return t ? "Symbol(src)_1." + t : ""
                    }(),
                    Ui = ar.toString,
                    Ov = Hi.call(ot),
                    Sv = Nt._,
                    Cv = qo("^" + Hi.call(it).replace(So, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                    ki = tc ? w.Buffer : i,
                    hn = w.Symbol,
                    Vi = w.Uint8Array,
                    mc = ki ? ki.allocUnsafe : i,
                    Ki = _c(ot.getPrototypeOf, ot),
                    Ec = ot.create,
                    bc = ar.propertyIsEnumerable,
                    qi = Wi.splice,
                    yc = hn ? hn.isConcatSpreadable : i,
                    zr = hn ? hn.iterator : i,
                    $n = hn ? hn.toStringTag : i,
                    Yi = function () {
                        try {
                            var t = Fn(ot, "defineProperty");
                            return t({}, "", {}), t
                        } catch {}
                    }(),
                    Nv = w.clearTimeout !== Nt.clearTimeout && w.clearTimeout,
                    Lv = $ && $.now !== Nt.Date.now && $.now,
                    Rv = w.setTimeout !== Nt.setTimeout && w.setTimeout,
                    zi = wt.ceil,
                    Gi = wt.floor,
                    Yo = ot.getOwnPropertySymbols,
                    Iv = ki ? ki.isBuffer : i,
                    Ac = w.isFinite,
                    Dv = Wi.join,
                    $v = _c(ot.keys, ot),
                    Tt = wt.max,
                    Dt = wt.min,
                    Pv = $.now,
                    Mv = w.parseInt,
                    wc = wt.random,
                    Bv = Wi.reverse,
                    zo = Fn(w, "DataView"),
                    Gr = Fn(w, "Map"),
                    Go = Fn(w, "Promise"),
                    ur = Fn(w, "Set"),
                    jr = Fn(w, "WeakMap"),
                    Xr = Fn(ot, "create"),
                    ji = jr && new jr,
                    lr = {},
                    Wv = Hn(zo),
                    Fv = Hn(Gr),
                    Hv = Hn(Go),
                    Uv = Hn(ur),
                    kv = Hn(jr),
                    Xi = hn ? hn.prototype : i,
                    Jr = Xi ? Xi.valueOf : i,
                    Tc = Xi ? Xi.toString : i;

                function d(t) {
                    if (vt(t) && !q(t) && !(t instanceof Q)) {
                        if (t instanceof fe) return t;
                        if (it.call(t, "__wrapped__")) return Of(t)
                    }
                    return new fe(t)
                }
                var cr = function () {
                    function t() {}
                    return function (r) {
                        if (!_t(r)) return {};
                        if (Ec) return Ec(r);
                        t.prototype = r;
                        var s = new t;
                        return t.prototype = i, s
                    }
                }();

                function Ji() {}

                function fe(t, r) {
                    this.__wrapped__ = t, this.__actions__ = [], this.__chain__ = !!r, this.__index__ = 0, this.__values__ = i
                }
                d.templateSettings = {
                    escape: ng,
                    evaluate: rg,
                    interpolate: Dl,
                    variable: "",
                    imports: {
                        _: d
                    }
                }, d.prototype = Ji.prototype, d.prototype.constructor = d, fe.prototype = cr(Ji.prototype), fe.prototype.constructor = fe;

                function Q(t) {
                    this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = kt, this.__views__ = []
                }

                function Vv() {
                    var t = new Q(this.__wrapped__);
                    return t.__actions__ = Vt(this.__actions__), t.__dir__ = this.__dir__, t.__filtered__ = this.__filtered__, t.__iteratees__ = Vt(this.__iteratees__), t.__takeCount__ = this.__takeCount__, t.__views__ = Vt(this.__views__), t
                }

                function Kv() {
                    if (this.__filtered__) {
                        var t = new Q(this);
                        t.__dir__ = -1, t.__filtered__ = !0
                    } else t = this.clone(), t.__dir__ *= -1;
                    return t
                }

                function qv() {
                    var t = this.__wrapped__.value(),
                        r = this.__dir__,
                        s = q(t),
                        u = r < 0,
                        f = s ? t.length : 0,
                        p = rE(0, f, this.__views__),
                        g = p.start,
                        v = p.end,
                        E = v - g,
                        x = u ? v : g - 1,
                        O = this.__iteratees__,
                        C = O.length,
                        D = 0,
                        M = Dt(E, this.__takeCount__);
                    if (!s || !u && f == E && M == E) return Gc(t, this.__actions__);
                    var k = [];
                    t: for (; E-- && D < M;) {
                        x += r;
                        for (var j = -1, V = t[x]; ++j < C;) {
                            var J = O[j],
                                tt = J.iteratee,
                                ne = J.type,
                                Wt = tt(V);
                            if (ne == be) V = Wt;
                            else if (!Wt) {
                                if (ne == xt) continue t;
                                break t
                            }
                        }
                        k[D++] = V
                    }
                    return k
                }
                Q.prototype = cr(Ji.prototype), Q.prototype.constructor = Q;

                function Pn(t) {
                    var r = -1,
                        s = t == null ? 0 : t.length;
                    for (this.clear(); ++r < s;) {
                        var u = t[r];
                        this.set(u[0], u[1])
                    }
                }

                function Yv() {
                    this.__data__ = Xr ? Xr(null) : {}, this.size = 0
                }

                function zv(t) {
                    var r = this.has(t) && delete this.__data__[t];
                    return this.size -= r ? 1 : 0, r
                }

                function Gv(t) {
                    var r = this.__data__;
                    if (Xr) {
                        var s = r[t];
                        return s === _ ? i : s
                    }
                    return it.call(r, t) ? r[t] : i
                }

                function jv(t) {
                    var r = this.__data__;
                    return Xr ? r[t] !== i : it.call(r, t)
                }

                function Xv(t, r) {
                    var s = this.__data__;
                    return this.size += this.has(t) ? 0 : 1, s[t] = Xr && r === i ? _ : r, this
                }
                Pn.prototype.clear = Yv, Pn.prototype.delete = zv, Pn.prototype.get = Gv, Pn.prototype.has = jv, Pn.prototype.set = Xv;

                function ke(t) {
                    var r = -1,
                        s = t == null ? 0 : t.length;
                    for (this.clear(); ++r < s;) {
                        var u = t[r];
                        this.set(u[0], u[1])
                    }
                }

                function Jv() {
                    this.__data__ = [], this.size = 0
                }

                function Qv(t) {
                    var r = this.__data__,
                        s = Qi(r, t);
                    if (s < 0) return !1;
                    var u = r.length - 1;
                    return s == u ? r.pop() : qi.call(r, s, 1), --this.size, !0
                }

                function Zv(t) {
                    var r = this.__data__,
                        s = Qi(r, t);
                    return s < 0 ? i : r[s][1]
                }

                function tm(t) {
                    return Qi(this.__data__, t) > -1
                }

                function em(t, r) {
                    var s = this.__data__,
                        u = Qi(s, t);
                    return u < 0 ? (++this.size, s.push([t, r])) : s[u][1] = r, this
                }
                ke.prototype.clear = Jv, ke.prototype.delete = Qv, ke.prototype.get = Zv, ke.prototype.has = tm, ke.prototype.set = em;

                function Ve(t) {
                    var r = -1,
                        s = t == null ? 0 : t.length;
                    for (this.clear(); ++r < s;) {
                        var u = t[r];
                        this.set(u[0], u[1])
                    }
                }

                function nm() {
                    this.size = 0, this.__data__ = {
                        hash: new Pn,
                        map: new(Gr || ke),
                        string: new Pn
                    }
                }

                function rm(t) {
                    var r = cs(this, t).delete(t);
                    return this.size -= r ? 1 : 0, r
                }

                function im(t) {
                    return cs(this, t).get(t)
                }

                function sm(t) {
                    return cs(this, t).has(t)
                }

                function om(t, r) {
                    var s = cs(this, t),
                        u = s.size;
                    return s.set(t, r), this.size += s.size == u ? 0 : 1, this
                }
                Ve.prototype.clear = nm, Ve.prototype.delete = rm, Ve.prototype.get = im, Ve.prototype.has = sm, Ve.prototype.set = om;

                function Mn(t) {
                    var r = -1,
                        s = t == null ? 0 : t.length;
                    for (this.__data__ = new Ve; ++r < s;) this.add(t[r])
                }

                function am(t) {
                    return this.__data__.set(t, _), this
                }

                function um(t) {
                    return this.__data__.has(t)
                }
                Mn.prototype.add = Mn.prototype.push = am, Mn.prototype.has = um;

                function Ae(t) {
                    var r = this.__data__ = new ke(t);
                    this.size = r.size
                }

                function lm() {
                    this.__data__ = new ke, this.size = 0
                }

                function cm(t) {
                    var r = this.__data__,
                        s = r.delete(t);
                    return this.size = r.size, s
                }

                function fm(t) {
                    return this.__data__.get(t)
                }

                function hm(t) {
                    return this.__data__.has(t)
                }

                function dm(t, r) {
                    var s = this.__data__;
                    if (s instanceof ke) {
                        var u = s.__data__;
                        if (!Gr || u.length < a - 1) return u.push([t, r]), this.size = ++s.size, this;
                        s = this.__data__ = new Ve(u)
                    }
                    return s.set(t, r), this.size = s.size, this
                }
                Ae.prototype.clear = lm, Ae.prototype.delete = cm, Ae.prototype.get = fm, Ae.prototype.has = hm, Ae.prototype.set = dm;

                function xc(t, r) {
                    var s = q(t),
                        u = !s && Un(t),
                        f = !s && !u && vn(t),
                        p = !s && !u && !f && pr(t),
                        g = s || u || f || p,
                        v = g ? ko(t.length, wv) : [],
                        E = v.length;
                    for (var x in t)(r || it.call(t, x)) && !(g && (x == "length" || f && (x == "offset" || x == "parent") || p && (x == "buffer" || x == "byteLength" || x == "byteOffset") || ze(x, E))) && v.push(x);
                    return v
                }

                function Oc(t) {
                    var r = t.length;
                    return r ? t[sa(0, r - 1)] : i
                }

                function pm(t, r) {
                    return fs(Vt(t), Bn(r, 0, t.length))
                }

                function _m(t) {
                    return fs(Vt(t))
                }

                function jo(t, r, s) {
                    (s !== i && !we(t[r], s) || s === i && !(r in t)) && Ke(t, r, s)
                }

                function Qr(t, r, s) {
                    var u = t[r];
                    (!(it.call(t, r) && we(u, s)) || s === i && !(r in t)) && Ke(t, r, s)
                }

                function Qi(t, r) {
                    for (var s = t.length; s--;)
                        if (we(t[s][0], r)) return s;
                    return -1
                }

                function gm(t, r, s, u) {
                    return dn(t, function (f, p, g) {
                        r(u, f, s(f), g)
                    }), u
                }

                function Sc(t, r) {
                    return t && Re(r, Ot(r), t)
                }

                function vm(t, r) {
                    return t && Re(r, qt(r), t)
                }

                function Ke(t, r, s) {
                    r == "__proto__" && Yi ? Yi(t, r, {
                        configurable: !0,
                        enumerable: !0,
                        value: s,
                        writable: !0
                    }) : t[r] = s
                }

                function Xo(t, r) {
                    for (var s = -1, u = r.length, f = A(u), p = t == null; ++s < u;) f[s] = p ? i : La(t, r[s]);
                    return f
                }

                function Bn(t, r, s) {
                    return t === t && (s !== i && (t = t <= s ? t : s), r !== i && (t = t >= r ? t : r)), t
                }

                function he(t, r, s, u, f, p) {
                    var g, v = r & S,
                        E = r & T,
                        x = r & I;
                    if (s && (g = f ? s(t, u, f, p) : s(t)), g !== i) return g;
                    if (!_t(t)) return t;
                    var O = q(t);
                    if (O) {
                        if (g = sE(t), !v) return Vt(t, g)
                    } else {
                        var C = $t(t),
                            D = C == er || C == Kr;
                        if (vn(t)) return Jc(t, v);
                        if (C == ae || C == Pt || D && !f) {
                            if (g = E || D ? {} : vf(t), !v) return E ? Gm(t, vm(g, t)) : zm(t, Sc(g, t))
                        } else {
                            if (!at[C]) return f ? t : {};
                            g = oE(t, C, v)
                        }
                    }
                    p || (p = new Ae);
                    var M = p.get(t);
                    if (M) return M;
                    p.set(t, g), Yf(t) ? t.forEach(function (V) {
                        g.add(he(V, r, s, V, t, p))
                    }) : Kf(t) && t.forEach(function (V, J) {
                        g.set(J, he(V, r, s, J, t, p))
                    });
                    var k = x ? E ? ga : _a : E ? qt : Ot,
                        j = O ? i : k(t);
                    return le(j || t, function (V, J) {
                        j && (J = V, V = t[J]), Qr(g, J, he(V, r, s, J, t, p))
                    }), g
                }

                function mm(t) {
                    var r = Ot(t);
                    return function (s) {
                        return Cc(s, t, r)
                    }
                }

                function Cc(t, r, s) {
                    var u = s.length;
                    if (t == null) return !u;
                    for (t = ot(t); u--;) {
                        var f = s[u],
                            p = r[f],
                            g = t[f];
                        if (g === i && !(f in t) || !p(g)) return !1
                    }
                    return !0
                }

                function Nc(t, r, s) {
                    if (typeof t != "function") throw new ce(c);
                    return si(function () {
                        t.apply(i, s)
                    }, r)
                }

                function Zr(t, r, s, u) {
                    var f = -1,
                        p = Pi,
                        g = !0,
                        v = t.length,
                        E = [],
                        x = r.length;
                    if (!v) return E;
                    s && (r = dt(r, Zt(s))), u ? (p = Mo, g = !1) : r.length >= a && (p = Yr, g = !1, r = new Mn(r));
                    t: for (; ++f < v;) {
                        var O = t[f],
                            C = s == null ? O : s(O);
                        if (O = u || O !== 0 ? O : 0, g && C === C) {
                            for (var D = x; D--;)
                                if (r[D] === C) continue t;
                            E.push(O)
                        } else p(r, C, u) || E.push(O)
                    }
                    return E
                }
                var dn = nf(Le),
                    Lc = nf(Qo, !0);

                function Em(t, r) {
                    var s = !0;
                    return dn(t, function (u, f, p) {
                        return s = !!r(u, f, p), s
                    }), s
                }

                function Zi(t, r, s) {
                    for (var u = -1, f = t.length; ++u < f;) {
                        var p = t[u],
                            g = r(p);
                        if (g != null && (v === i ? g === g && !ee(g) : s(g, v))) var v = g,
                            E = p
                    }
                    return E
                }

                function bm(t, r, s, u) {
                    var f = t.length;
                    for (s = G(s), s < 0 && (s = -s > f ? 0 : f + s), u = u === i || u > f ? f : G(u), u < 0 && (u += f), u = s > u ? 0 : Gf(u); s < u;) t[s++] = r;
                    return t
                }

                function Rc(t, r) {
                    var s = [];
                    return dn(t, function (u, f, p) {
                        r(u, f, p) && s.push(u)
                    }), s
                }

                function Lt(t, r, s, u, f) {
                    var p = -1,
                        g = t.length;
                    for (s || (s = uE), f || (f = []); ++p < g;) {
                        var v = t[p];
                        r > 0 && s(v) ? r > 1 ? Lt(v, r - 1, s, u, f) : cn(f, v) : u || (f[f.length] = v)
                    }
                    return f
                }
                var Jo = rf(),
                    Ic = rf(!0);

                function Le(t, r) {
                    return t && Jo(t, r, Ot)
                }

                function Qo(t, r) {
                    return t && Ic(t, r, Ot)
                }

                function ts(t, r) {
                    return ln(r, function (s) {
                        return Ge(t[s])
                    })
                }

                function Wn(t, r) {
                    r = _n(r, t);
                    for (var s = 0, u = r.length; t != null && s < u;) t = t[Ie(r[s++])];
                    return s && s == u ? t : i
                }

                function Dc(t, r, s) {
                    var u = r(t);
                    return q(t) ? u : cn(u, s(t))
                }

                function Mt(t) {
                    return t == null ? t === i ? qr : Ni : $n && $n in ot(t) ? nE(t) : _E(t)
                }

                function Zo(t, r) {
                    return t > r
                }

                function ym(t, r) {
                    return t != null && it.call(t, r)
                }

                function Am(t, r) {
                    return t != null && r in ot(t)
                }

                function wm(t, r, s) {
                    return t >= Dt(r, s) && t < Tt(r, s)
                }

                function ta(t, r, s) {
                    for (var u = s ? Mo : Pi, f = t[0].length, p = t.length, g = p, v = A(p), E = 1 / 0, x = []; g--;) {
                        var O = t[g];
                        g && r && (O = dt(O, Zt(r))), E = Dt(O.length, E), v[g] = !s && (r || f >= 120 && O.length >= 120) ? new Mn(g && O) : i
                    }
                    O = t[0];
                    var C = -1,
                        D = v[0];
                    t: for (; ++C < f && x.length < E;) {
                        var M = O[C],
                            k = r ? r(M) : M;
                        if (M = s || M !== 0 ? M : 0, !(D ? Yr(D, k) : u(x, k, s))) {
                            for (g = p; --g;) {
                                var j = v[g];
                                if (!(j ? Yr(j, k) : u(t[g], k, s))) continue t
                            }
                            D && D.push(k), x.push(M)
                        }
                    }
                    return x
                }

                function Tm(t, r, s, u) {
                    return Le(t, function (f, p, g) {
                        r(u, s(f), p, g)
                    }), u
                }

                function ti(t, r, s) {
                    r = _n(r, t), t = yf(t, r);
                    var u = t == null ? t : t[Ie(pe(r))];
                    return u == null ? i : Qt(u, t, s)
                }

                function $c(t) {
                    return vt(t) && Mt(t) == Pt
                }

                function xm(t) {
                    return vt(t) && Mt(t) == un
                }

                function Om(t) {
                    return vt(t) && Mt(t) == He
                }

                function ei(t, r, s, u, f) {
                    return t === r ? !0 : t == null || r == null || !vt(t) && !vt(r) ? t !== t && r !== r : Sm(t, r, s, u, ei, f)
                }

                function Sm(t, r, s, u, f, p) {
                    var g = q(t),
                        v = q(r),
                        E = g ? Ne : $t(t),
                        x = v ? Ne : $t(r);
                    E = E == Pt ? ae : E, x = x == Pt ? ae : x;
                    var O = E == ae,
                        C = x == ae,
                        D = E == x;
                    if (D && vn(t)) {
                        if (!vn(r)) return !1;
                        g = !0, O = !1
                    }
                    if (D && !O) return p || (p = new Ae), g || pr(t) ? pf(t, r, s, u, f, p) : tE(t, r, E, s, u, f, p);
                    if (!(s & Y)) {
                        var M = O && it.call(t, "__wrapped__"),
                            k = C && it.call(r, "__wrapped__");
                        if (M || k) {
                            var j = M ? t.value() : t,
                                V = k ? r.value() : r;
                            return p || (p = new Ae), f(j, V, s, u, p)
                        }
                    }
                    return D ? (p || (p = new Ae), eE(t, r, s, u, f, p)) : !1
                }

                function Cm(t) {
                    return vt(t) && $t(t) == Xt
                }

                function ea(t, r, s, u) {
                    var f = s.length,
                        p = f,
                        g = !u;
                    if (t == null) return !p;
                    for (t = ot(t); f--;) {
                        var v = s[f];
                        if (g && v[2] ? v[1] !== t[v[0]] : !(v[0] in t)) return !1
                    }
                    for (; ++f < p;) {
                        v = s[f];
                        var E = v[0],
                            x = t[E],
                            O = v[1];
                        if (g && v[2]) {
                            if (x === i && !(E in t)) return !1
                        } else {
                            var C = new Ae;
                            if (u) var D = u(x, O, E, t, r, C);
                            if (!(D === i ? ei(O, x, Y | W, u, C) : D)) return !1
                        }
                    }
                    return !0
                }

                function Pc(t) {
                    if (!_t(t) || cE(t)) return !1;
                    var r = Ge(t) ? Cv : mg;
                    return r.test(Hn(t))
                }

                function Nm(t) {
                    return vt(t) && Mt(t) == Jt
                }

                function Lm(t) {
                    return vt(t) && $t(t) == It
                }

                function Rm(t) {
                    return vt(t) && vs(t.length) && !!ct[Mt(t)]
                }

                function Mc(t) {
                    return typeof t == "function" ? t : t == null ? Yt : typeof t == "object" ? q(t) ? Fc(t[0], t[1]) : Wc(t) : sh(t)
                }

                function na(t) {
                    if (!ii(t)) return $v(t);
                    var r = [];
                    for (var s in ot(t)) it.call(t, s) && s != "constructor" && r.push(s);
                    return r
                }

                function Im(t) {
                    if (!_t(t)) return pE(t);
                    var r = ii(t),
                        s = [];
                    for (var u in t) u == "constructor" && (r || !it.call(t, u)) || s.push(u);
                    return s
                }

                function ra(t, r) {
                    return t < r
                }

                function Bc(t, r) {
                    var s = -1,
                        u = Kt(t) ? A(t.length) : [];
                    return dn(t, function (f, p, g) {
                        u[++s] = r(f, p, g)
                    }), u
                }

                function Wc(t) {
                    var r = ma(t);
                    return r.length == 1 && r[0][2] ? Ef(r[0][0], r[0][1]) : function (s) {
                        return s === t || ea(s, t, r)
                    }
                }

                function Fc(t, r) {
                    return ba(t) && mf(r) ? Ef(Ie(t), r) : function (s) {
                        var u = La(s, t);
                        return u === i && u === r ? Ra(s, t) : ei(r, u, Y | W)
                    }
                }

                function es(t, r, s, u, f) {
                    t !== r && Jo(r, function (p, g) {
                        if (f || (f = new Ae), _t(p)) Dm(t, r, g, s, es, u, f);
                        else {
                            var v = u ? u(Aa(t, g), p, g + "", t, r, f) : i;
                            v === i && (v = p), jo(t, g, v)
                        }
                    }, qt)
                }

                function Dm(t, r, s, u, f, p, g) {
                    var v = Aa(t, s),
                        E = Aa(r, s),
                        x = g.get(E);
                    if (x) {
                        jo(t, s, x);
                        return
                    }
                    var O = p ? p(v, E, s + "", t, r, g) : i,
                        C = O === i;
                    if (C) {
                        var D = q(E),
                            M = !D && vn(E),
                            k = !D && !M && pr(E);
                        O = E, D || M || k ? q(v) ? O = v : mt(v) ? O = Vt(v) : M ? (C = !1, O = Jc(E, !0)) : k ? (C = !1, O = Qc(E, !0)) : O = [] : oi(E) || Un(E) ? (O = v, Un(v) ? O = jf(v) : (!_t(v) || Ge(v)) && (O = vf(E))) : C = !1
                    }
                    C && (g.set(E, O), f(O, E, u, p, g), g.delete(E)), jo(t, s, O)
                }

                function Hc(t, r) {
                    var s = t.length;
                    if (!!s) return r += r < 0 ? s : 0, ze(r, s) ? t[r] : i
                }

                function Uc(t, r, s) {
                    r.length ? r = dt(r, function (p) {
                        return q(p) ? function (g) {
                            return Wn(g, p.length === 1 ? p[0] : p)
                        } : p
                    }) : r = [Yt];
                    var u = -1;
                    r = dt(r, Zt(H()));
                    var f = Bc(t, function (p, g, v) {
                        var E = dt(r, function (x) {
                            return x(p)
                        });
                        return {
                            criteria: E,
                            index: ++u,
                            value: p
                        }
                    });
                    return ov(f, function (p, g) {
                        return Ym(p, g, s)
                    })
                }

                function $m(t, r) {
                    return kc(t, r, function (s, u) {
                        return Ra(t, u)
                    })
                }

                function kc(t, r, s) {
                    for (var u = -1, f = r.length, p = {}; ++u < f;) {
                        var g = r[u],
                            v = Wn(t, g);
                        s(v, g) && ni(p, _n(g, t), v)
                    }
                    return p
                }

                function Pm(t) {
                    return function (r) {
                        return Wn(r, t)
                    }
                }

                function ia(t, r, s, u) {
                    var f = u ? sv : rr,
                        p = -1,
                        g = r.length,
                        v = t;
                    for (t === r && (r = Vt(r)), s && (v = dt(t, Zt(s))); ++p < g;)
                        for (var E = 0, x = r[p], O = s ? s(x) : x;
                            (E = f(v, O, E, u)) > -1;) v !== t && qi.call(v, E, 1), qi.call(t, E, 1);
                    return t
                }

                function Vc(t, r) {
                    for (var s = t ? r.length : 0, u = s - 1; s--;) {
                        var f = r[s];
                        if (s == u || f !== p) {
                            var p = f;
                            ze(f) ? qi.call(t, f, 1) : ua(t, f)
                        }
                    }
                    return t
                }

                function sa(t, r) {
                    return t + Gi(wc() * (r - t + 1))
                }

                function Mm(t, r, s, u) {
                    for (var f = -1, p = Tt(zi((r - t) / (s || 1)), 0), g = A(p); p--;) g[u ? p : ++f] = t, t += s;
                    return g
                }

                function oa(t, r) {
                    var s = "";
                    if (!t || r < 1 || r > Gt) return s;
                    do r % 2 && (s += t), r = Gi(r / 2), r && (t += t); while (r);
                    return s
                }

                function X(t, r) {
                    return wa(bf(t, r, Yt), t + "")
                }

                function Bm(t) {
                    return Oc(_r(t))
                }

                function Wm(t, r) {
                    var s = _r(t);
                    return fs(s, Bn(r, 0, s.length))
                }

                function ni(t, r, s, u) {
                    if (!_t(t)) return t;
                    r = _n(r, t);
                    for (var f = -1, p = r.length, g = p - 1, v = t; v != null && ++f < p;) {
                        var E = Ie(r[f]),
                            x = s;
                        if (E === "__proto__" || E === "constructor" || E === "prototype") return t;
                        if (f != g) {
                            var O = v[E];
                            x = u ? u(O, E, v) : i, x === i && (x = _t(O) ? O : ze(r[f + 1]) ? [] : {})
                        }
                        Qr(v, E, x), v = v[E]
                    }
                    return t
                }
                var Kc = ji ? function (t, r) {
                        return ji.set(t, r), t
                    } : Yt,
                    Fm = Yi ? function (t, r) {
                        return Yi(t, "toString", {
                            configurable: !0,
                            enumerable: !1,
                            value: Da(r),
                            writable: !0
                        })
                    } : Yt;

                function Hm(t) {
                    return fs(_r(t))
                }

                function de(t, r, s) {
                    var u = -1,
                        f = t.length;
                    r < 0 && (r = -r > f ? 0 : f + r), s = s > f ? f : s, s < 0 && (s += f), f = r > s ? 0 : s - r >>> 0, r >>>= 0;
                    for (var p = A(f); ++u < f;) p[u] = t[u + r];
                    return p
                }

                function Um(t, r) {
                    var s;
                    return dn(t, function (u, f, p) {
                        return s = r(u, f, p), !s
                    }), !!s
                }

                function ns(t, r, s) {
                    var u = 0,
                        f = t == null ? u : t.length;
                    if (typeof r == "number" && r === r && f <= Zn) {
                        for (; u < f;) {
                            var p = u + f >>> 1,
                                g = t[p];
                            g !== null && !ee(g) && (s ? g <= r : g < r) ? u = p + 1 : f = p
                        }
                        return f
                    }
                    return aa(t, r, Yt, s)
                }

                function aa(t, r, s, u) {
                    var f = 0,
                        p = t == null ? 0 : t.length;
                    if (p === 0) return 0;
                    r = s(r);
                    for (var g = r !== r, v = r === null, E = ee(r), x = r === i; f < p;) {
                        var O = Gi((f + p) / 2),
                            C = s(t[O]),
                            D = C !== i,
                            M = C === null,
                            k = C === C,
                            j = ee(C);
                        if (g) var V = u || k;
                        else x ? V = k && (u || D) : v ? V = k && D && (u || !M) : E ? V = k && D && !M && (u || !j) : M || j ? V = !1 : V = u ? C <= r : C < r;
                        V ? f = O + 1 : p = O
                    }
                    return Dt(p, Ln)
                }

                function qc(t, r) {
                    for (var s = -1, u = t.length, f = 0, p = []; ++s < u;) {
                        var g = t[s],
                            v = r ? r(g) : g;
                        if (!s || !we(v, E)) {
                            var E = v;
                            p[f++] = g === 0 ? 0 : g
                        }
                    }
                    return p
                }

                function Yc(t) {
                    return typeof t == "number" ? t : ee(t) ? Fe : +t
                }

                function te(t) {
                    if (typeof t == "string") return t;
                    if (q(t)) return dt(t, te) + "";
                    if (ee(t)) return Tc ? Tc.call(t) : "";
                    var r = t + "";
                    return r == "0" && 1 / t == -At ? "-0" : r
                }

                function pn(t, r, s) {
                    var u = -1,
                        f = Pi,
                        p = t.length,
                        g = !0,
                        v = [],
                        E = v;
                    if (s) g = !1, f = Mo;
                    else if (p >= a) {
                        var x = r ? null : Qm(t);
                        if (x) return Bi(x);
                        g = !1, f = Yr, E = new Mn
                    } else E = r ? [] : v;
                    t: for (; ++u < p;) {
                        var O = t[u],
                            C = r ? r(O) : O;
                        if (O = s || O !== 0 ? O : 0, g && C === C) {
                            for (var D = E.length; D--;)
                                if (E[D] === C) continue t;
                            r && E.push(C), v.push(O)
                        } else f(E, C, s) || (E !== v && E.push(C), v.push(O))
                    }
                    return v
                }

                function ua(t, r) {
                    return r = _n(r, t), t = yf(t, r), t == null || delete t[Ie(pe(r))]
                }

                function zc(t, r, s, u) {
                    return ni(t, r, s(Wn(t, r)), u)
                }

                function rs(t, r, s, u) {
                    for (var f = t.length, p = u ? f : -1;
                        (u ? p-- : ++p < f) && r(t[p], p, t););
                    return s ? de(t, u ? 0 : p, u ? p + 1 : f) : de(t, u ? p + 1 : 0, u ? f : p)
                }

                function Gc(t, r) {
                    var s = t;
                    return s instanceof Q && (s = s.value()), Bo(r, function (u, f) {
                        return f.func.apply(f.thisArg, cn([u], f.args))
                    }, s)
                }

                function la(t, r, s) {
                    var u = t.length;
                    if (u < 2) return u ? pn(t[0]) : [];
                    for (var f = -1, p = A(u); ++f < u;)
                        for (var g = t[f], v = -1; ++v < u;) v != f && (p[f] = Zr(p[f] || g, t[v], r, s));
                    return pn(Lt(p, 1), r, s)
                }

                function jc(t, r, s) {
                    for (var u = -1, f = t.length, p = r.length, g = {}; ++u < f;) {
                        var v = u < p ? r[u] : i;
                        s(g, t[u], v)
                    }
                    return g
                }

                function ca(t) {
                    return mt(t) ? t : []
                }

                function fa(t) {
                    return typeof t == "function" ? t : Yt
                }

                function _n(t, r) {
                    return q(t) ? t : ba(t, r) ? [t] : xf(rt(t))
                }
                var km = X;

                function gn(t, r, s) {
                    var u = t.length;
                    return s = s === i ? u : s, !r && s >= u ? t : de(t, r, s)
                }
                var Xc = Nv || function (t) {
                    return Nt.clearTimeout(t)
                };

                function Jc(t, r) {
                    if (r) return t.slice();
                    var s = t.length,
                        u = mc ? mc(s) : new t.constructor(s);
                    return t.copy(u), u
                }

                function ha(t) {
                    var r = new t.constructor(t.byteLength);
                    return new Vi(r).set(new Vi(t)), r
                }

                function Vm(t, r) {
                    var s = r ? ha(t.buffer) : t.buffer;
                    return new t.constructor(s, t.byteOffset, t.byteLength)
                }

                function Km(t) {
                    var r = new t.constructor(t.source, $l.exec(t));
                    return r.lastIndex = t.lastIndex, r
                }

                function qm(t) {
                    return Jr ? ot(Jr.call(t)) : {}
                }

                function Qc(t, r) {
                    var s = r ? ha(t.buffer) : t.buffer;
                    return new t.constructor(s, t.byteOffset, t.length)
                }

                function Zc(t, r) {
                    if (t !== r) {
                        var s = t !== i,
                            u = t === null,
                            f = t === t,
                            p = ee(t),
                            g = r !== i,
                            v = r === null,
                            E = r === r,
                            x = ee(r);
                        if (!v && !x && !p && t > r || p && g && E && !v && !x || u && g && E || !s && E || !f) return 1;
                        if (!u && !p && !x && t < r || x && s && f && !u && !p || v && s && f || !g && f || !E) return -1
                    }
                    return 0
                }

                function Ym(t, r, s) {
                    for (var u = -1, f = t.criteria, p = r.criteria, g = f.length, v = s.length; ++u < g;) {
                        var E = Zc(f[u], p[u]);
                        if (E) {
                            if (u >= v) return E;
                            var x = s[u];
                            return E * (x == "desc" ? -1 : 1)
                        }
                    }
                    return t.index - r.index
                }

                function tf(t, r, s, u) {
                    for (var f = -1, p = t.length, g = s.length, v = -1, E = r.length, x = Tt(p - g, 0), O = A(E + x), C = !u; ++v < E;) O[v] = r[v];
                    for (; ++f < g;)(C || f < p) && (O[s[f]] = t[f]);
                    for (; x--;) O[v++] = t[f++];
                    return O
                }

                function ef(t, r, s, u) {
                    for (var f = -1, p = t.length, g = -1, v = s.length, E = -1, x = r.length, O = Tt(p - v, 0), C = A(O + x), D = !u; ++f < O;) C[f] = t[f];
                    for (var M = f; ++E < x;) C[M + E] = r[E];
                    for (; ++g < v;)(D || f < p) && (C[M + s[g]] = t[f++]);
                    return C
                }

                function Vt(t, r) {
                    var s = -1,
                        u = t.length;
                    for (r || (r = A(u)); ++s < u;) r[s] = t[s];
                    return r
                }

                function Re(t, r, s, u) {
                    var f = !s;
                    s || (s = {});
                    for (var p = -1, g = r.length; ++p < g;) {
                        var v = r[p],
                            E = u ? u(s[v], t[v], v, s, t) : i;
                        E === i && (E = t[v]), f ? Ke(s, v, E) : Qr(s, v, E)
                    }
                    return s
                }

                function zm(t, r) {
                    return Re(t, Ea(t), r)
                }

                function Gm(t, r) {
                    return Re(t, _f(t), r)
                }

                function is(t, r) {
                    return function (s, u) {
                        var f = q(s) ? Zg : gm,
                            p = r ? r() : {};
                        return f(s, t, H(u, 2), p)
                    }
                }

                function fr(t) {
                    return X(function (r, s) {
                        var u = -1,
                            f = s.length,
                            p = f > 1 ? s[f - 1] : i,
                            g = f > 2 ? s[2] : i;
                        for (p = t.length > 3 && typeof p == "function" ? (f--, p) : i, g && Bt(s[0], s[1], g) && (p = f < 3 ? i : p, f = 1), r = ot(r); ++u < f;) {
                            var v = s[u];
                            v && t(r, v, u, p)
                        }
                        return r
                    })
                }

                function nf(t, r) {
                    return function (s, u) {
                        if (s == null) return s;
                        if (!Kt(s)) return t(s, u);
                        for (var f = s.length, p = r ? f : -1, g = ot(s);
                            (r ? p-- : ++p < f) && u(g[p], p, g) !== !1;);
                        return s
                    }
                }

                function rf(t) {
                    return function (r, s, u) {
                        for (var f = -1, p = ot(r), g = u(r), v = g.length; v--;) {
                            var E = g[t ? v : ++f];
                            if (s(p[E], E, p) === !1) break
                        }
                        return r
                    }
                }

                function jm(t, r, s) {
                    var u = r & L,
                        f = ri(t);

                    function p() {
                        var g = this && this !== Nt && this instanceof p ? f : t;
                        return g.apply(u ? s : this, arguments)
                    }
                    return p
                }

                function sf(t) {
                    return function (r) {
                        r = rt(r);
                        var s = ir(r) ? ye(r) : i,
                            u = s ? s[0] : r.charAt(0),
                            f = s ? gn(s, 1).join("") : r.slice(1);
                        return u[t]() + f
                    }
                }

                function hr(t) {
                    return function (r) {
                        return Bo(rh(nh(r).replace(Fg, "")), t, "")
                    }
                }

                function ri(t) {
                    return function () {
                        var r = arguments;
                        switch (r.length) {
                            case 0:
                                return new t;
                            case 1:
                                return new t(r[0]);
                            case 2:
                                return new t(r[0], r[1]);
                            case 3:
                                return new t(r[0], r[1], r[2]);
                            case 4:
                                return new t(r[0], r[1], r[2], r[3]);
                            case 5:
                                return new t(r[0], r[1], r[2], r[3], r[4]);
                            case 6:
                                return new t(r[0], r[1], r[2], r[3], r[4], r[5]);
                            case 7:
                                return new t(r[0], r[1], r[2], r[3], r[4], r[5], r[6])
                        }
                        var s = cr(t.prototype),
                            u = t.apply(s, r);
                        return _t(u) ? u : s
                    }
                }

                function Xm(t, r, s) {
                    var u = ri(t);

                    function f() {
                        for (var p = arguments.length, g = A(p), v = p, E = dr(f); v--;) g[v] = arguments[v];
                        var x = p < 3 && g[0] !== E && g[p - 1] !== E ? [] : fn(g, E);
                        if (p -= x.length, p < s) return cf(t, r, ss, f.placeholder, i, g, x, i, i, s - p);
                        var O = this && this !== Nt && this instanceof f ? u : t;
                        return Qt(O, this, g)
                    }
                    return f
                }

                function of (t) {
                    return function (r, s, u) {
                        var f = ot(r);
                        if (!Kt(r)) {
                            var p = H(s, 3);
                            r = Ot(r), s = function (v) {
                                return p(f[v], v, f)
                            }
                        }
                        var g = t(r, s, u);
                        return g > -1 ? f[p ? r[g] : g] : i
                    }
                }

                function af(t) {
                    return Ye(function (r) {
                        var s = r.length,
                            u = s,
                            f = fe.prototype.thru;
                        for (t && r.reverse(); u--;) {
                            var p = r[u];
                            if (typeof p != "function") throw new ce(c);
                            if (f && !g && ls(p) == "wrapper") var g = new fe([], !0)
                        }
                        for (u = g ? u : s; ++u < s;) {
                            p = r[u];
                            var v = ls(p),
                                E = v == "wrapper" ? va(p) : i;
                            E && ya(E[0]) && E[1] == (et | F | R | st) && !E[4].length && E[9] == 1 ? g = g[ls(E[0])].apply(g, E[3]) : g = p.length == 1 && ya(p) ? g[v]() : g.thru(p)
                        }
                        return function () {
                            var x = arguments,
                                O = x[0];
                            if (g && x.length == 1 && q(O)) return g.plant(O).value();
                            for (var C = 0, D = s ? r[C].apply(this, x) : O; ++C < s;) D = r[C].call(this, D);
                            return D
                        }
                    })
                }

                function ss(t, r, s, u, f, p, g, v, E, x) {
                    var O = r & et,
                        C = r & L,
                        D = r & P,
                        M = r & (F | B),
                        k = r & ut,
                        j = D ? i : ri(t);

                    function V() {
                        for (var J = arguments.length, tt = A(J), ne = J; ne--;) tt[ne] = arguments[ne];
                        if (M) var Wt = dr(V),
                            re = uv(tt, Wt);
                        if (u && (tt = tf(tt, u, f, M)), p && (tt = ef(tt, p, g, M)), J -= re, M && J < x) {
                            var Et = fn(tt, Wt);
                            return cf(t, r, ss, V.placeholder, s, tt, Et, v, E, x - J)
                        }
                        var Te = C ? s : this,
                            Xe = D ? Te[t] : t;
                        return J = tt.length, v ? tt = gE(tt, v) : k && J > 1 && tt.reverse(), O && E < J && (tt.length = E), this && this !== Nt && this instanceof V && (Xe = j || ri(Xe)), Xe.apply(Te, tt)
                    }
                    return V
                }

                function uf(t, r) {
                    return function (s, u) {
                        return Tm(s, t, r(u), {})
                    }
                }

                function os(t, r) {
                    return function (s, u) {
                        var f;
                        if (s === i && u === i) return r;
                        if (s !== i && (f = s), u !== i) {
                            if (f === i) return u;
                            typeof s == "string" || typeof u == "string" ? (s = te(s), u = te(u)) : (s = Yc(s), u = Yc(u)), f = t(s, u)
                        }
                        return f
                    }
                }

                function da(t) {
                    return Ye(function (r) {
                        return r = dt(r, Zt(H())), X(function (s) {
                            var u = this;
                            return t(r, function (f) {
                                return Qt(f, u, s)
                            })
                        })
                    })
                }

                function as(t, r) {
                    r = r === i ? " " : te(r);
                    var s = r.length;
                    if (s < 2) return s ? oa(r, t) : r;
                    var u = oa(r, zi(t / sr(r)));
                    return ir(r) ? gn(ye(u), 0, t).join("") : u.slice(0, t)
                }

                function Jm(t, r, s, u) {
                    var f = r & L,
                        p = ri(t);

                    function g() {
                        for (var v = -1, E = arguments.length, x = -1, O = u.length, C = A(O + E), D = this && this !== Nt && this instanceof g ? p : t; ++x < O;) C[x] = u[x];
                        for (; E--;) C[x++] = arguments[++v];
                        return Qt(D, f ? s : this, C)
                    }
                    return g
                }

                function lf(t) {
                    return function (r, s, u) {
                        return u && typeof u != "number" && Bt(r, s, u) && (s = u = i), r = je(r), s === i ? (s = r, r = 0) : s = je(s), u = u === i ? r < s ? 1 : -1 : je(u), Mm(r, s, u, t)
                    }
                }

                function us(t) {
                    return function (r, s) {
                        return typeof r == "string" && typeof s == "string" || (r = _e(r), s = _e(s)), t(r, s)
                    }
                }

                function cf(t, r, s, u, f, p, g, v, E, x) {
                    var O = r & F,
                        C = O ? g : i,
                        D = O ? i : g,
                        M = O ? p : i,
                        k = O ? i : p;
                    r |= O ? R : z, r &= ~(O ? z : R), r & U || (r &= ~(L | P));
                    var j = [t, r, f, M, C, k, D, v, E, x],
                        V = s.apply(i, j);
                    return ya(t) && Af(V, j), V.placeholder = u, wf(V, t, r)
                }

                function pa(t) {
                    var r = wt[t];
                    return function (s, u) {
                        if (s = _e(s), u = u == null ? 0 : Dt(G(u), 292), u && Ac(s)) {
                            var f = (rt(s) + "e").split("e"),
                                p = r(f[0] + "e" + (+f[1] + u));
                            return f = (rt(p) + "e").split("e"), +(f[0] + "e" + (+f[1] - u))
                        }
                        return r(s)
                    }
                }
                var Qm = ur && 1 / Bi(new ur([, -0]))[1] == At ? function (t) {
                    return new ur(t)
                } : Ma;

                function ff(t) {
                    return function (r) {
                        var s = $t(r);
                        return s == Xt ? Ko(r) : s == It ? _v(r) : av(r, t(r))
                    }
                }

                function qe(t, r, s, u, f, p, g, v) {
                    var E = r & P;
                    if (!E && typeof t != "function") throw new ce(c);
                    var x = u ? u.length : 0;
                    if (x || (r &= ~(R | z), u = f = i), g = g === i ? g : Tt(G(g), 0), v = v === i ? v : G(v), x -= f ? f.length : 0, r & z) {
                        var O = u,
                            C = f;
                        u = f = i
                    }
                    var D = E ? i : va(t),
                        M = [t, r, s, u, f, O, C, p, g, v];
                    if (D && dE(M, D), t = M[0], r = M[1], s = M[2], u = M[3], f = M[4], v = M[9] = M[9] === i ? E ? 0 : t.length : Tt(M[9] - x, 0), !v && r & (F | B) && (r &= ~(F | B)), !r || r == L) var k = jm(t, r, s);
                    else r == F || r == B ? k = Xm(t, r, v) : (r == R || r == (L | R)) && !f.length ? k = Jm(t, r, s, u) : k = ss.apply(i, M);
                    var j = D ? Kc : Af;
                    return wf(j(k, M), t, r)
                }

                function hf(t, r, s, u) {
                    return t === i || we(t, ar[s]) && !it.call(u, s) ? r : t
                }

                function df(t, r, s, u, f, p) {
                    return _t(t) && _t(r) && (p.set(r, t), es(t, r, i, df, p), p.delete(r)), t
                }

                function Zm(t) {
                    return oi(t) ? i : t
                }

                function pf(t, r, s, u, f, p) {
                    var g = s & Y,
                        v = t.length,
                        E = r.length;
                    if (v != E && !(g && E > v)) return !1;
                    var x = p.get(t),
                        O = p.get(r);
                    if (x && O) return x == r && O == t;
                    var C = -1,
                        D = !0,
                        M = s & W ? new Mn : i;
                    for (p.set(t, r), p.set(r, t); ++C < v;) {
                        var k = t[C],
                            j = r[C];
                        if (u) var V = g ? u(j, k, C, r, t, p) : u(k, j, C, t, r, p);
                        if (V !== i) {
                            if (V) continue;
                            D = !1;
                            break
                        }
                        if (M) {
                            if (!Wo(r, function (J, tt) {
                                    if (!Yr(M, tt) && (k === J || f(k, J, s, u, p))) return M.push(tt)
                                })) {
                                D = !1;
                                break
                            }
                        } else if (!(k === j || f(k, j, s, u, p))) {
                            D = !1;
                            break
                        }
                    }
                    return p.delete(t), p.delete(r), D
                }

                function tE(t, r, s, u, f, p, g) {
                    switch (s) {
                        case Ue:
                            if (t.byteLength != r.byteLength || t.byteOffset != r.byteOffset) return !1;
                            t = t.buffer, r = r.buffer;
                        case un:
                            return !(t.byteLength != r.byteLength || !p(new Vi(t), new Vi(r)));
                        case jt:
                        case He:
                        case Rn:
                            return we(+t, +r);
                        case sn:
                            return t.name == r.name && t.message == r.message;
                        case Jt:
                        case on:
                            return t == r + "";
                        case Xt:
                            var v = Ko;
                        case It:
                            var E = u & Y;
                            if (v || (v = Bi), t.size != r.size && !E) return !1;
                            var x = g.get(t);
                            if (x) return x == r;
                            u |= W, g.set(t, r);
                            var O = pf(v(t), v(r), u, f, p, g);
                            return g.delete(t), O;
                        case In:
                            if (Jr) return Jr.call(t) == Jr.call(r)
                    }
                    return !1
                }

                function eE(t, r, s, u, f, p) {
                    var g = s & Y,
                        v = _a(t),
                        E = v.length,
                        x = _a(r),
                        O = x.length;
                    if (E != O && !g) return !1;
                    for (var C = E; C--;) {
                        var D = v[C];
                        if (!(g ? D in r : it.call(r, D))) return !1
                    }
                    var M = p.get(t),
                        k = p.get(r);
                    if (M && k) return M == r && k == t;
                    var j = !0;
                    p.set(t, r), p.set(r, t);
                    for (var V = g; ++C < E;) {
                        D = v[C];
                        var J = t[D],
                            tt = r[D];
                        if (u) var ne = g ? u(tt, J, D, r, t, p) : u(J, tt, D, t, r, p);
                        if (!(ne === i ? J === tt || f(J, tt, s, u, p) : ne)) {
                            j = !1;
                            break
                        }
                        V || (V = D == "constructor")
                    }
                    if (j && !V) {
                        var Wt = t.constructor,
                            re = r.constructor;
                        Wt != re && "constructor" in t && "constructor" in r && !(typeof Wt == "function" && Wt instanceof Wt && typeof re == "function" && re instanceof re) && (j = !1)
                    }
                    return p.delete(t), p.delete(r), j
                }

                function Ye(t) {
                    return wa(bf(t, i, Nf), t + "")
                }

                function _a(t) {
                    return Dc(t, Ot, Ea)
                }

                function ga(t) {
                    return Dc(t, qt, _f)
                }
                var va = ji ? function (t) {
                    return ji.get(t)
                } : Ma;

                function ls(t) {
                    for (var r = t.name + "", s = lr[r], u = it.call(lr, r) ? s.length : 0; u--;) {
                        var f = s[u],
                            p = f.func;
                        if (p == null || p == t) return f.name
                    }
                    return r
                }

                function dr(t) {
                    var r = it.call(d, "placeholder") ? d : t;
                    return r.placeholder
                }

                function H() {
                    var t = d.iteratee || $a;
                    return t = t === $a ? Mc : t, arguments.length ? t(arguments[0], arguments[1]) : t
                }

                function cs(t, r) {
                    var s = t.__data__;
                    return lE(r) ? s[typeof r == "string" ? "string" : "hash"] : s.map
                }

                function ma(t) {
                    for (var r = Ot(t), s = r.length; s--;) {
                        var u = r[s],
                            f = t[u];
                        r[s] = [u, f, mf(f)]
                    }
                    return r
                }

                function Fn(t, r) {
                    var s = hv(t, r);
                    return Pc(s) ? s : i
                }

                function nE(t) {
                    var r = it.call(t, $n),
                        s = t[$n];
                    try {
                        t[$n] = i;
                        var u = !0
                    } catch {}
                    var f = Ui.call(t);
                    return u && (r ? t[$n] = s : delete t[$n]), f
                }
                var Ea = Yo ? function (t) {
                        return t == null ? [] : (t = ot(t), ln(Yo(t), function (r) {
                            return bc.call(t, r)
                        }))
                    } : Ba,
                    _f = Yo ? function (t) {
                        for (var r = []; t;) cn(r, Ea(t)), t = Ki(t);
                        return r
                    } : Ba,
                    $t = Mt;
                (zo && $t(new zo(new ArrayBuffer(1))) != Ue || Gr && $t(new Gr) != Xt || Go && $t(Go.resolve()) != Li || ur && $t(new ur) != It || jr && $t(new jr) != an) && ($t = function (t) {
                    var r = Mt(t),
                        s = r == ae ? t.constructor : i,
                        u = s ? Hn(s) : "";
                    if (u) switch (u) {
                        case Wv:
                            return Ue;
                        case Fv:
                            return Xt;
                        case Hv:
                            return Li;
                        case Uv:
                            return It;
                        case kv:
                            return an
                    }
                    return r
                });

                function rE(t, r, s) {
                    for (var u = -1, f = s.length; ++u < f;) {
                        var p = s[u],
                            g = p.size;
                        switch (p.type) {
                            case "drop":
                                t += g;
                                break;
                            case "dropRight":
                                r -= g;
                                break;
                            case "take":
                                r = Dt(r, t + g);
                                break;
                            case "takeRight":
                                t = Tt(t, r - g);
                                break
                        }
                    }
                    return {
                        start: t,
                        end: r
                    }
                }

                function iE(t) {
                    var r = t.match(cg);
                    return r ? r[1].split(fg) : []
                }

                function gf(t, r, s) {
                    r = _n(r, t);
                    for (var u = -1, f = r.length, p = !1; ++u < f;) {
                        var g = Ie(r[u]);
                        if (!(p = t != null && s(t, g))) break;
                        t = t[g]
                    }
                    return p || ++u != f ? p : (f = t == null ? 0 : t.length, !!f && vs(f) && ze(g, f) && (q(t) || Un(t)))
                }

                function sE(t) {
                    var r = t.length,
                        s = new t.constructor(r);
                    return r && typeof t[0] == "string" && it.call(t, "index") && (s.index = t.index, s.input = t.input), s
                }

                function vf(t) {
                    return typeof t.constructor == "function" && !ii(t) ? cr(Ki(t)) : {}
                }

                function oE(t, r, s) {
                    var u = t.constructor;
                    switch (r) {
                        case un:
                            return ha(t);
                        case jt:
                        case He:
                            return new u(+t);
                        case Ue:
                            return Vm(t, s);
                        case mo:
                        case Eo:
                        case bo:
                        case yo:
                        case Ao:
                        case wo:
                        case To:
                        case xo:
                        case Oo:
                            return Qc(t, s);
                        case Xt:
                            return new u;
                        case Rn:
                        case on:
                            return new u(t);
                        case Jt:
                            return Km(t);
                        case It:
                            return new u;
                        case In:
                            return qm(t)
                    }
                }

                function aE(t, r) {
                    var s = r.length;
                    if (!s) return t;
                    var u = s - 1;
                    return r[u] = (s > 1 ? "& " : "") + r[u], r = r.join(s > 2 ? ", " : " "), t.replace(lg, `{
/* [wrapped with ` + r + `] */
`)
                }

                function uE(t) {
                    return q(t) || Un(t) || !!(yc && t && t[yc])
                }

                function ze(t, r) {
                    var s = typeof t;
                    return r = r == null ? Gt : r, !!r && (s == "number" || s != "symbol" && bg.test(t)) && t > -1 && t % 1 == 0 && t < r
                }

                function Bt(t, r, s) {
                    if (!_t(s)) return !1;
                    var u = typeof r;
                    return (u == "number" ? Kt(s) && ze(r, s.length) : u == "string" && r in s) ? we(s[r], t) : !1
                }

                function ba(t, r) {
                    if (q(t)) return !1;
                    var s = typeof t;
                    return s == "number" || s == "symbol" || s == "boolean" || t == null || ee(t) ? !0 : sg.test(t) || !ig.test(t) || r != null && t in ot(r)
                }

                function lE(t) {
                    var r = typeof t;
                    return r == "string" || r == "number" || r == "symbol" || r == "boolean" ? t !== "__proto__" : t === null
                }

                function ya(t) {
                    var r = ls(t),
                        s = d[r];
                    if (typeof s != "function" || !(r in Q.prototype)) return !1;
                    if (t === s) return !0;
                    var u = va(s);
                    return !!u && t === u[0]
                }

                function cE(t) {
                    return !!vc && vc in t
                }
                var fE = Fi ? Ge : Wa;

                function ii(t) {
                    var r = t && t.constructor,
                        s = typeof r == "function" && r.prototype || ar;
                    return t === s
                }

                function mf(t) {
                    return t === t && !_t(t)
                }

                function Ef(t, r) {
                    return function (s) {
                        return s == null ? !1 : s[t] === r && (r !== i || t in ot(s))
                    }
                }

                function hE(t) {
                    var r = _s(t, function (u) {
                            return s.size === y && s.clear(), u
                        }),
                        s = r.cache;
                    return r
                }

                function dE(t, r) {
                    var s = t[1],
                        u = r[1],
                        f = s | u,
                        p = f < (L | P | et),
                        g = u == et && s == F || u == et && s == st && t[7].length <= r[8] || u == (et | st) && r[7].length <= r[8] && s == F;
                    if (!(p || g)) return t;
                    u & L && (t[2] = r[2], f |= s & L ? 0 : U);
                    var v = r[3];
                    if (v) {
                        var E = t[3];
                        t[3] = E ? tf(E, v, r[4]) : v, t[4] = E ? fn(t[3], b) : r[4]
                    }
                    return v = r[5], v && (E = t[5], t[5] = E ? ef(E, v, r[6]) : v, t[6] = E ? fn(t[5], b) : r[6]), v = r[7], v && (t[7] = v), u & et && (t[8] = t[8] == null ? r[8] : Dt(t[8], r[8])), t[9] == null && (t[9] = r[9]), t[0] = r[0], t[1] = f, t
                }

                function pE(t) {
                    var r = [];
                    if (t != null)
                        for (var s in ot(t)) r.push(s);
                    return r
                }

                function _E(t) {
                    return Ui.call(t)
                }

                function bf(t, r, s) {
                    return r = Tt(r === i ? t.length - 1 : r, 0),
                        function () {
                            for (var u = arguments, f = -1, p = Tt(u.length - r, 0), g = A(p); ++f < p;) g[f] = u[r + f];
                            f = -1;
                            for (var v = A(r + 1); ++f < r;) v[f] = u[f];
                            return v[r] = s(g), Qt(t, this, v)
                        }
                }

                function yf(t, r) {
                    return r.length < 2 ? t : Wn(t, de(r, 0, -1))
                }

                function gE(t, r) {
                    for (var s = t.length, u = Dt(r.length, s), f = Vt(t); u--;) {
                        var p = r[u];
                        t[u] = ze(p, s) ? f[p] : i
                    }
                    return t
                }

                function Aa(t, r) {
                    if (!(r === "constructor" && typeof t[r] == "function") && r != "__proto__") return t[r]
                }
                var Af = Tf(Kc),
                    si = Rv || function (t, r) {
                        return Nt.setTimeout(t, r)
                    },
                    wa = Tf(Fm);

                function wf(t, r, s) {
                    var u = r + "";
                    return wa(t, aE(u, vE(iE(u), s)))
                }

                function Tf(t) {
                    var r = 0,
                        s = 0;
                    return function () {
                        var u = Pv(),
                            f = ht - (u - s);
                        if (s = u, f > 0) {
                            if (++r >= lt) return arguments[0]
                        } else r = 0;
                        return t.apply(i, arguments)
                    }
                }

                function fs(t, r) {
                    var s = -1,
                        u = t.length,
                        f = u - 1;
                    for (r = r === i ? u : r; ++s < r;) {
                        var p = sa(s, f),
                            g = t[p];
                        t[p] = t[s], t[s] = g
                    }
                    return t.length = r, t
                }
                var xf = hE(function (t) {
                    var r = [];
                    return t.charCodeAt(0) === 46 && r.push(""), t.replace(og, function (s, u, f, p) {
                        r.push(f ? p.replace(pg, "$1") : u || s)
                    }), r
                });

                function Ie(t) {
                    if (typeof t == "string" || ee(t)) return t;
                    var r = t + "";
                    return r == "0" && 1 / t == -At ? "-0" : r
                }

                function Hn(t) {
                    if (t != null) {
                        try {
                            return Hi.call(t)
                        } catch {}
                        try {
                            return t + ""
                        } catch {}
                    }
                    return ""
                }

                function vE(t, r) {
                    return le(rn, function (s) {
                        var u = "_." + s[0];
                        r & s[1] && !Pi(t, u) && t.push(u)
                    }), t.sort()
                }

                function Of(t) {
                    if (t instanceof Q) return t.clone();
                    var r = new fe(t.__wrapped__, t.__chain__);
                    return r.__actions__ = Vt(t.__actions__), r.__index__ = t.__index__, r.__values__ = t.__values__, r
                }

                function mE(t, r, s) {
                    (s ? Bt(t, r, s) : r === i) ? r = 1: r = Tt(G(r), 0);
                    var u = t == null ? 0 : t.length;
                    if (!u || r < 1) return [];
                    for (var f = 0, p = 0, g = A(zi(u / r)); f < u;) g[p++] = de(t, f, f += r);
                    return g
                }

                function EE(t) {
                    for (var r = -1, s = t == null ? 0 : t.length, u = 0, f = []; ++r < s;) {
                        var p = t[r];
                        p && (f[u++] = p)
                    }
                    return f
                }

                function bE() {
                    var t = arguments.length;
                    if (!t) return [];
                    for (var r = A(t - 1), s = arguments[0], u = t; u--;) r[u - 1] = arguments[u];
                    return cn(q(s) ? Vt(s) : [s], Lt(r, 1))
                }
                var yE = X(function (t, r) {
                        return mt(t) ? Zr(t, Lt(r, 1, mt, !0)) : []
                    }),
                    AE = X(function (t, r) {
                        var s = pe(r);
                        return mt(s) && (s = i), mt(t) ? Zr(t, Lt(r, 1, mt, !0), H(s, 2)) : []
                    }),
                    wE = X(function (t, r) {
                        var s = pe(r);
                        return mt(s) && (s = i), mt(t) ? Zr(t, Lt(r, 1, mt, !0), i, s) : []
                    });

                function TE(t, r, s) {
                    var u = t == null ? 0 : t.length;
                    return u ? (r = s || r === i ? 1 : G(r), de(t, r < 0 ? 0 : r, u)) : []
                }

                function xE(t, r, s) {
                    var u = t == null ? 0 : t.length;
                    return u ? (r = s || r === i ? 1 : G(r), r = u - r, de(t, 0, r < 0 ? 0 : r)) : []
                }

                function OE(t, r) {
                    return t && t.length ? rs(t, H(r, 3), !0, !0) : []
                }

                function SE(t, r) {
                    return t && t.length ? rs(t, H(r, 3), !0) : []
                }

                function CE(t, r, s, u) {
                    var f = t == null ? 0 : t.length;
                    return f ? (s && typeof s != "number" && Bt(t, r, s) && (s = 0, u = f), bm(t, r, s, u)) : []
                }

                function Sf(t, r, s) {
                    var u = t == null ? 0 : t.length;
                    if (!u) return -1;
                    var f = s == null ? 0 : G(s);
                    return f < 0 && (f = Tt(u + f, 0)), Mi(t, H(r, 3), f)
                }

                function Cf(t, r, s) {
                    var u = t == null ? 0 : t.length;
                    if (!u) return -1;
                    var f = u - 1;
                    return s !== i && (f = G(s), f = s < 0 ? Tt(u + f, 0) : Dt(f, u - 1)), Mi(t, H(r, 3), f, !0)
                }

                function Nf(t) {
                    var r = t == null ? 0 : t.length;
                    return r ? Lt(t, 1) : []
                }

                function NE(t) {
                    var r = t == null ? 0 : t.length;
                    return r ? Lt(t, At) : []
                }

                function LE(t, r) {
                    var s = t == null ? 0 : t.length;
                    return s ? (r = r === i ? 1 : G(r), Lt(t, r)) : []
                }

                function RE(t) {
                    for (var r = -1, s = t == null ? 0 : t.length, u = {}; ++r < s;) {
                        var f = t[r];
                        u[f[0]] = f[1]
                    }
                    return u
                }

                function Lf(t) {
                    return t && t.length ? t[0] : i
                }

                function IE(t, r, s) {
                    var u = t == null ? 0 : t.length;
                    if (!u) return -1;
                    var f = s == null ? 0 : G(s);
                    return f < 0 && (f = Tt(u + f, 0)), rr(t, r, f)
                }

                function DE(t) {
                    var r = t == null ? 0 : t.length;
                    return r ? de(t, 0, -1) : []
                }
                var $E = X(function (t) {
                        var r = dt(t, ca);
                        return r.length && r[0] === t[0] ? ta(r) : []
                    }),
                    PE = X(function (t) {
                        var r = pe(t),
                            s = dt(t, ca);
                        return r === pe(s) ? r = i : s.pop(), s.length && s[0] === t[0] ? ta(s, H(r, 2)) : []
                    }),
                    ME = X(function (t) {
                        var r = pe(t),
                            s = dt(t, ca);
                        return r = typeof r == "function" ? r : i, r && s.pop(), s.length && s[0] === t[0] ? ta(s, i, r) : []
                    });

                function BE(t, r) {
                    return t == null ? "" : Dv.call(t, r)
                }

                function pe(t) {
                    var r = t == null ? 0 : t.length;
                    return r ? t[r - 1] : i
                }

                function WE(t, r, s) {
                    var u = t == null ? 0 : t.length;
                    if (!u) return -1;
                    var f = u;
                    return s !== i && (f = G(s), f = f < 0 ? Tt(u + f, 0) : Dt(f, u - 1)), r === r ? vv(t, r, f) : Mi(t, lc, f, !0)
                }

                function FE(t, r) {
                    return t && t.length ? Hc(t, G(r)) : i
                }
                var HE = X(Rf);

                function Rf(t, r) {
                    return t && t.length && r && r.length ? ia(t, r) : t
                }

                function UE(t, r, s) {
                    return t && t.length && r && r.length ? ia(t, r, H(s, 2)) : t
                }

                function kE(t, r, s) {
                    return t && t.length && r && r.length ? ia(t, r, i, s) : t
                }
                var VE = Ye(function (t, r) {
                    var s = t == null ? 0 : t.length,
                        u = Xo(t, r);
                    return Vc(t, dt(r, function (f) {
                        return ze(f, s) ? +f : f
                    }).sort(Zc)), u
                });

                function KE(t, r) {
                    var s = [];
                    if (!(t && t.length)) return s;
                    var u = -1,
                        f = [],
                        p = t.length;
                    for (r = H(r, 3); ++u < p;) {
                        var g = t[u];
                        r(g, u, t) && (s.push(g), f.push(u))
                    }
                    return Vc(t, f), s
                }

                function Ta(t) {
                    return t == null ? t : Bv.call(t)
                }

                function qE(t, r, s) {
                    var u = t == null ? 0 : t.length;
                    return u ? (s && typeof s != "number" && Bt(t, r, s) ? (r = 0, s = u) : (r = r == null ? 0 : G(r), s = s === i ? u : G(s)), de(t, r, s)) : []
                }

                function YE(t, r) {
                    return ns(t, r)
                }

                function zE(t, r, s) {
                    return aa(t, r, H(s, 2))
                }

                function GE(t, r) {
                    var s = t == null ? 0 : t.length;
                    if (s) {
                        var u = ns(t, r);
                        if (u < s && we(t[u], r)) return u
                    }
                    return -1
                }

                function jE(t, r) {
                    return ns(t, r, !0)
                }

                function XE(t, r, s) {
                    return aa(t, r, H(s, 2), !0)
                }

                function JE(t, r) {
                    var s = t == null ? 0 : t.length;
                    if (s) {
                        var u = ns(t, r, !0) - 1;
                        if (we(t[u], r)) return u
                    }
                    return -1
                }

                function QE(t) {
                    return t && t.length ? qc(t) : []
                }

                function ZE(t, r) {
                    return t && t.length ? qc(t, H(r, 2)) : []
                }

                function tb(t) {
                    var r = t == null ? 0 : t.length;
                    return r ? de(t, 1, r) : []
                }

                function eb(t, r, s) {
                    return t && t.length ? (r = s || r === i ? 1 : G(r), de(t, 0, r < 0 ? 0 : r)) : []
                }

                function nb(t, r, s) {
                    var u = t == null ? 0 : t.length;
                    return u ? (r = s || r === i ? 1 : G(r), r = u - r, de(t, r < 0 ? 0 : r, u)) : []
                }

                function rb(t, r) {
                    return t && t.length ? rs(t, H(r, 3), !1, !0) : []
                }

                function ib(t, r) {
                    return t && t.length ? rs(t, H(r, 3)) : []
                }
                var sb = X(function (t) {
                        return pn(Lt(t, 1, mt, !0))
                    }),
                    ob = X(function (t) {
                        var r = pe(t);
                        return mt(r) && (r = i), pn(Lt(t, 1, mt, !0), H(r, 2))
                    }),
                    ab = X(function (t) {
                        var r = pe(t);
                        return r = typeof r == "function" ? r : i, pn(Lt(t, 1, mt, !0), i, r)
                    });

                function ub(t) {
                    return t && t.length ? pn(t) : []
                }

                function lb(t, r) {
                    return t && t.length ? pn(t, H(r, 2)) : []
                }

                function cb(t, r) {
                    return r = typeof r == "function" ? r : i, t && t.length ? pn(t, i, r) : []
                }

                function xa(t) {
                    if (!(t && t.length)) return [];
                    var r = 0;
                    return t = ln(t, function (s) {
                        if (mt(s)) return r = Tt(s.length, r), !0
                    }), ko(r, function (s) {
                        return dt(t, Fo(s))
                    })
                }

                function If(t, r) {
                    if (!(t && t.length)) return [];
                    var s = xa(t);
                    return r == null ? s : dt(s, function (u) {
                        return Qt(r, i, u)
                    })
                }
                var fb = X(function (t, r) {
                        return mt(t) ? Zr(t, r) : []
                    }),
                    hb = X(function (t) {
                        return la(ln(t, mt))
                    }),
                    db = X(function (t) {
                        var r = pe(t);
                        return mt(r) && (r = i), la(ln(t, mt), H(r, 2))
                    }),
                    pb = X(function (t) {
                        var r = pe(t);
                        return r = typeof r == "function" ? r : i, la(ln(t, mt), i, r)
                    }),
                    _b = X(xa);

                function gb(t, r) {
                    return jc(t || [], r || [], Qr)
                }

                function vb(t, r) {
                    return jc(t || [], r || [], ni)
                }
                var mb = X(function (t) {
                    var r = t.length,
                        s = r > 1 ? t[r - 1] : i;
                    return s = typeof s == "function" ? (t.pop(), s) : i, If(t, s)
                });

                function Df(t) {
                    var r = d(t);
                    return r.__chain__ = !0, r
                }

                function Eb(t, r) {
                    return r(t), t
                }

                function hs(t, r) {
                    return r(t)
                }
                var bb = Ye(function (t) {
                    var r = t.length,
                        s = r ? t[0] : 0,
                        u = this.__wrapped__,
                        f = function (p) {
                            return Xo(p, t)
                        };
                    return r > 1 || this.__actions__.length || !(u instanceof Q) || !ze(s) ? this.thru(f) : (u = u.slice(s, +s + (r ? 1 : 0)), u.__actions__.push({
                        func: hs,
                        args: [f],
                        thisArg: i
                    }), new fe(u, this.__chain__).thru(function (p) {
                        return r && !p.length && p.push(i), p
                    }))
                });

                function yb() {
                    return Df(this)
                }

                function Ab() {
                    return new fe(this.value(), this.__chain__)
                }

                function wb() {
                    this.__values__ === i && (this.__values__ = zf(this.value()));
                    var t = this.__index__ >= this.__values__.length,
                        r = t ? i : this.__values__[this.__index__++];
                    return {
                        done: t,
                        value: r
                    }
                }

                function Tb() {
                    return this
                }

                function xb(t) {
                    for (var r, s = this; s instanceof Ji;) {
                        var u = Of(s);
                        u.__index__ = 0, u.__values__ = i, r ? f.__wrapped__ = u : r = u;
                        var f = u;
                        s = s.__wrapped__
                    }
                    return f.__wrapped__ = t, r
                }

                function Ob() {
                    var t = this.__wrapped__;
                    if (t instanceof Q) {
                        var r = t;
                        return this.__actions__.length && (r = new Q(this)), r = r.reverse(), r.__actions__.push({
                            func: hs,
                            args: [Ta],
                            thisArg: i
                        }), new fe(r, this.__chain__)
                    }
                    return this.thru(Ta)
                }

                function Sb() {
                    return Gc(this.__wrapped__, this.__actions__)
                }
                var Cb = is(function (t, r, s) {
                    it.call(t, s) ? ++t[s] : Ke(t, s, 1)
                });

                function Nb(t, r, s) {
                    var u = q(t) ? ac : Em;
                    return s && Bt(t, r, s) && (r = i), u(t, H(r, 3))
                }

                function Lb(t, r) {
                    var s = q(t) ? ln : Rc;
                    return s(t, H(r, 3))
                }
                var Rb = of (Sf),
                    Ib = of (Cf);

                function Db(t, r) {
                    return Lt(ds(t, r), 1)
                }

                function $b(t, r) {
                    return Lt(ds(t, r), At)
                }

                function Pb(t, r, s) {
                    return s = s === i ? 1 : G(s), Lt(ds(t, r), s)
                }

                function $f(t, r) {
                    var s = q(t) ? le : dn;
                    return s(t, H(r, 3))
                }

                function Pf(t, r) {
                    var s = q(t) ? tv : Lc;
                    return s(t, H(r, 3))
                }
                var Mb = is(function (t, r, s) {
                    it.call(t, s) ? t[s].push(r) : Ke(t, s, [r])
                });

                function Bb(t, r, s, u) {
                    t = Kt(t) ? t : _r(t), s = s && !u ? G(s) : 0;
                    var f = t.length;
                    return s < 0 && (s = Tt(f + s, 0)), ms(t) ? s <= f && t.indexOf(r, s) > -1 : !!f && rr(t, r, s) > -1
                }
                var Wb = X(function (t, r, s) {
                        var u = -1,
                            f = typeof r == "function",
                            p = Kt(t) ? A(t.length) : [];
                        return dn(t, function (g) {
                            p[++u] = f ? Qt(r, g, s) : ti(g, r, s)
                        }), p
                    }),
                    Fb = is(function (t, r, s) {
                        Ke(t, s, r)
                    });

                function ds(t, r) {
                    var s = q(t) ? dt : Bc;
                    return s(t, H(r, 3))
                }

                function Hb(t, r, s, u) {
                    return t == null ? [] : (q(r) || (r = r == null ? [] : [r]), s = u ? i : s, q(s) || (s = s == null ? [] : [s]), Uc(t, r, s))
                }
                var Ub = is(function (t, r, s) {
                    t[s ? 0 : 1].push(r)
                }, function () {
                    return [
                        [],
                        []
                    ]
                });

                function kb(t, r, s) {
                    var u = q(t) ? Bo : fc,
                        f = arguments.length < 3;
                    return u(t, H(r, 4), s, f, dn)
                }

                function Vb(t, r, s) {
                    var u = q(t) ? ev : fc,
                        f = arguments.length < 3;
                    return u(t, H(r, 4), s, f, Lc)
                }

                function Kb(t, r) {
                    var s = q(t) ? ln : Rc;
                    return s(t, gs(H(r, 3)))
                }

                function qb(t) {
                    var r = q(t) ? Oc : Bm;
                    return r(t)
                }

                function Yb(t, r, s) {
                    (s ? Bt(t, r, s) : r === i) ? r = 1: r = G(r);
                    var u = q(t) ? pm : Wm;
                    return u(t, r)
                }

                function zb(t) {
                    var r = q(t) ? _m : Hm;
                    return r(t)
                }

                function Gb(t) {
                    if (t == null) return 0;
                    if (Kt(t)) return ms(t) ? sr(t) : t.length;
                    var r = $t(t);
                    return r == Xt || r == It ? t.size : na(t).length
                }

                function jb(t, r, s) {
                    var u = q(t) ? Wo : Um;
                    return s && Bt(t, r, s) && (r = i), u(t, H(r, 3))
                }
                var Xb = X(function (t, r) {
                        if (t == null) return [];
                        var s = r.length;
                        return s > 1 && Bt(t, r[0], r[1]) ? r = [] : s > 2 && Bt(r[0], r[1], r[2]) && (r = [r[0]]), Uc(t, Lt(r, 1), [])
                    }),
                    ps = Lv || function () {
                        return Nt.Date.now()
                    };

                function Jb(t, r) {
                    if (typeof r != "function") throw new ce(c);
                    return t = G(t),
                        function () {
                            if (--t < 1) return r.apply(this, arguments)
                        }
                }

                function Mf(t, r, s) {
                    return r = s ? i : r, r = t && r == null ? t.length : r, qe(t, et, i, i, i, i, r)
                }

                function Bf(t, r) {
                    var s;
                    if (typeof r != "function") throw new ce(c);
                    return t = G(t),
                        function () {
                            return --t > 0 && (s = r.apply(this, arguments)), t <= 1 && (r = i), s
                        }
                }
                var Oa = X(function (t, r, s) {
                        var u = L;
                        if (s.length) {
                            var f = fn(s, dr(Oa));
                            u |= R
                        }
                        return qe(t, u, r, s, f)
                    }),
                    Wf = X(function (t, r, s) {
                        var u = L | P;
                        if (s.length) {
                            var f = fn(s, dr(Wf));
                            u |= R
                        }
                        return qe(r, u, t, s, f)
                    });

                function Ff(t, r, s) {
                    r = s ? i : r;
                    var u = qe(t, F, i, i, i, i, i, r);
                    return u.placeholder = Ff.placeholder, u
                }

                function Hf(t, r, s) {
                    r = s ? i : r;
                    var u = qe(t, B, i, i, i, i, i, r);
                    return u.placeholder = Hf.placeholder, u
                }

                function Uf(t, r, s) {
                    var u, f, p, g, v, E, x = 0,
                        O = !1,
                        C = !1,
                        D = !0;
                    if (typeof t != "function") throw new ce(c);
                    r = _e(r) || 0, _t(s) && (O = !!s.leading, C = "maxWait" in s, p = C ? Tt(_e(s.maxWait) || 0, r) : p, D = "trailing" in s ? !!s.trailing : D);

                    function M(Et) {
                        var Te = u,
                            Xe = f;
                        return u = f = i, x = Et, g = t.apply(Xe, Te), g
                    }

                    function k(Et) {
                        return x = Et, v = si(J, r), O ? M(Et) : g
                    }

                    function j(Et) {
                        var Te = Et - E,
                            Xe = Et - x,
                            oh = r - Te;
                        return C ? Dt(oh, p - Xe) : oh
                    }

                    function V(Et) {
                        var Te = Et - E,
                            Xe = Et - x;
                        return E === i || Te >= r || Te < 0 || C && Xe >= p
                    }

                    function J() {
                        var Et = ps();
                        if (V(Et)) return tt(Et);
                        v = si(J, j(Et))
                    }

                    function tt(Et) {
                        return v = i, D && u ? M(Et) : (u = f = i, g)
                    }

                    function ne() {
                        v !== i && Xc(v), x = 0, u = E = f = v = i
                    }

                    function Wt() {
                        return v === i ? g : tt(ps())
                    }

                    function re() {
                        var Et = ps(),
                            Te = V(Et);
                        if (u = arguments, f = this, E = Et, Te) {
                            if (v === i) return k(E);
                            if (C) return Xc(v), v = si(J, r), M(E)
                        }
                        return v === i && (v = si(J, r)), g
                    }
                    return re.cancel = ne, re.flush = Wt, re
                }
                var Qb = X(function (t, r) {
                        return Nc(t, 1, r)
                    }),
                    Zb = X(function (t, r, s) {
                        return Nc(t, _e(r) || 0, s)
                    });

                function ty(t) {
                    return qe(t, ut)
                }

                function _s(t, r) {
                    if (typeof t != "function" || r != null && typeof r != "function") throw new ce(c);
                    var s = function () {
                        var u = arguments,
                            f = r ? r.apply(this, u) : u[0],
                            p = s.cache;
                        if (p.has(f)) return p.get(f);
                        var g = t.apply(this, u);
                        return s.cache = p.set(f, g) || p, g
                    };
                    return s.cache = new(_s.Cache || Ve), s
                }
                _s.Cache = Ve;

                function gs(t) {
                    if (typeof t != "function") throw new ce(c);
                    return function () {
                        var r = arguments;
                        switch (r.length) {
                            case 0:
                                return !t.call(this);
                            case 1:
                                return !t.call(this, r[0]);
                            case 2:
                                return !t.call(this, r[0], r[1]);
                            case 3:
                                return !t.call(this, r[0], r[1], r[2])
                        }
                        return !t.apply(this, r)
                    }
                }

                function ey(t) {
                    return Bf(2, t)
                }
                var ny = km(function (t, r) {
                        r = r.length == 1 && q(r[0]) ? dt(r[0], Zt(H())) : dt(Lt(r, 1), Zt(H()));
                        var s = r.length;
                        return X(function (u) {
                            for (var f = -1, p = Dt(u.length, s); ++f < p;) u[f] = r[f].call(this, u[f]);
                            return Qt(t, this, u)
                        })
                    }),
                    Sa = X(function (t, r) {
                        var s = fn(r, dr(Sa));
                        return qe(t, R, i, r, s)
                    }),
                    kf = X(function (t, r) {
                        var s = fn(r, dr(kf));
                        return qe(t, z, i, r, s)
                    }),
                    ry = Ye(function (t, r) {
                        return qe(t, st, i, i, i, r)
                    });

                function iy(t, r) {
                    if (typeof t != "function") throw new ce(c);
                    return r = r === i ? r : G(r), X(t, r)
                }

                function sy(t, r) {
                    if (typeof t != "function") throw new ce(c);
                    return r = r == null ? 0 : Tt(G(r), 0), X(function (s) {
                        var u = s[r],
                            f = gn(s, 0, r);
                        return u && cn(f, u), Qt(t, this, f)
                    })
                }

                function oy(t, r, s) {
                    var u = !0,
                        f = !0;
                    if (typeof t != "function") throw new ce(c);
                    return _t(s) && (u = "leading" in s ? !!s.leading : u, f = "trailing" in s ? !!s.trailing : f), Uf(t, r, {
                        leading: u,
                        maxWait: r,
                        trailing: f
                    })
                }

                function ay(t) {
                    return Mf(t, 1)
                }

                function uy(t, r) {
                    return Sa(fa(r), t)
                }

                function ly() {
                    if (!arguments.length) return [];
                    var t = arguments[0];
                    return q(t) ? t : [t]
                }

                function cy(t) {
                    return he(t, I)
                }

                function fy(t, r) {
                    return r = typeof r == "function" ? r : i, he(t, I, r)
                }

                function hy(t) {
                    return he(t, S | I)
                }

                function dy(t, r) {
                    return r = typeof r == "function" ? r : i, he(t, S | I, r)
                }

                function py(t, r) {
                    return r == null || Cc(t, r, Ot(r))
                }

                function we(t, r) {
                    return t === r || t !== t && r !== r
                }
                var _y = us(Zo),
                    gy = us(function (t, r) {
                        return t >= r
                    }),
                    Un = $c(function () {
                        return arguments
                    }()) ? $c : function (t) {
                        return vt(t) && it.call(t, "callee") && !bc.call(t, "callee")
                    },
                    q = A.isArray,
                    vy = ec ? Zt(ec) : xm;

                function Kt(t) {
                    return t != null && vs(t.length) && !Ge(t)
                }

                function mt(t) {
                    return vt(t) && Kt(t)
                }

                function my(t) {
                    return t === !0 || t === !1 || vt(t) && Mt(t) == jt
                }
                var vn = Iv || Wa,
                    Ey = nc ? Zt(nc) : Om;

                function by(t) {
                    return vt(t) && t.nodeType === 1 && !oi(t)
                }

                function yy(t) {
                    if (t == null) return !0;
                    if (Kt(t) && (q(t) || typeof t == "string" || typeof t.splice == "function" || vn(t) || pr(t) || Un(t))) return !t.length;
                    var r = $t(t);
                    if (r == Xt || r == It) return !t.size;
                    if (ii(t)) return !na(t).length;
                    for (var s in t)
                        if (it.call(t, s)) return !1;
                    return !0
                }

                function Ay(t, r) {
                    return ei(t, r)
                }

                function wy(t, r, s) {
                    s = typeof s == "function" ? s : i;
                    var u = s ? s(t, r) : i;
                    return u === i ? ei(t, r, i, s) : !!u
                }

                function Ca(t) {
                    if (!vt(t)) return !1;
                    var r = Mt(t);
                    return r == sn || r == go || typeof t.message == "string" && typeof t.name == "string" && !oi(t)
                }

                function Ty(t) {
                    return typeof t == "number" && Ac(t)
                }

                function Ge(t) {
                    if (!_t(t)) return !1;
                    var r = Mt(t);
                    return r == er || r == Kr || r == tr || r == vo
                }

                function Vf(t) {
                    return typeof t == "number" && t == G(t)
                }

                function vs(t) {
                    return typeof t == "number" && t > -1 && t % 1 == 0 && t <= Gt
                }

                function _t(t) {
                    var r = typeof t;
                    return t != null && (r == "object" || r == "function")
                }

                function vt(t) {
                    return t != null && typeof t == "object"
                }
                var Kf = rc ? Zt(rc) : Cm;

                function xy(t, r) {
                    return t === r || ea(t, r, ma(r))
                }

                function Oy(t, r, s) {
                    return s = typeof s == "function" ? s : i, ea(t, r, ma(r), s)
                }

                function Sy(t) {
                    return qf(t) && t != +t
                }

                function Cy(t) {
                    if (fE(t)) throw new K(l);
                    return Pc(t)
                }

                function Ny(t) {
                    return t === null
                }

                function Ly(t) {
                    return t == null
                }

                function qf(t) {
                    return typeof t == "number" || vt(t) && Mt(t) == Rn
                }

                function oi(t) {
                    if (!vt(t) || Mt(t) != ae) return !1;
                    var r = Ki(t);
                    if (r === null) return !0;
                    var s = it.call(r, "constructor") && r.constructor;
                    return typeof s == "function" && s instanceof s && Hi.call(s) == Ov
                }
                var Na = ic ? Zt(ic) : Nm;

                function Ry(t) {
                    return Vf(t) && t >= -Gt && t <= Gt
                }
                var Yf = sc ? Zt(sc) : Lm;

                function ms(t) {
                    return typeof t == "string" || !q(t) && vt(t) && Mt(t) == on
                }

                function ee(t) {
                    return typeof t == "symbol" || vt(t) && Mt(t) == In
                }
                var pr = oc ? Zt(oc) : Rm;

                function Iy(t) {
                    return t === i
                }

                function Dy(t) {
                    return vt(t) && $t(t) == an
                }

                function $y(t) {
                    return vt(t) && Mt(t) == Ri
                }
                var Py = us(ra),
                    My = us(function (t, r) {
                        return t <= r
                    });

                function zf(t) {
                    if (!t) return [];
                    if (Kt(t)) return ms(t) ? ye(t) : Vt(t);
                    if (zr && t[zr]) return pv(t[zr]());
                    var r = $t(t),
                        s = r == Xt ? Ko : r == It ? Bi : _r;
                    return s(t)
                }

                function je(t) {
                    if (!t) return t === 0 ? t : 0;
                    if (t = _e(t), t === At || t === -At) {
                        var r = t < 0 ? -1 : 1;
                        return r * We
                    }
                    return t === t ? t : 0
                }

                function G(t) {
                    var r = je(t),
                        s = r % 1;
                    return r === r ? s ? r - s : r : 0
                }

                function Gf(t) {
                    return t ? Bn(G(t), 0, kt) : 0
                }

                function _e(t) {
                    if (typeof t == "number") return t;
                    if (ee(t)) return Fe;
                    if (_t(t)) {
                        var r = typeof t.valueOf == "function" ? t.valueOf() : t;
                        t = _t(r) ? r + "" : r
                    }
                    if (typeof t != "string") return t === 0 ? t : +t;
                    t = hc(t);
                    var s = vg.test(t);
                    return s || Eg.test(t) ? Jg(t.slice(2), s ? 2 : 8) : gg.test(t) ? Fe : +t
                }

                function jf(t) {
                    return Re(t, qt(t))
                }

                function By(t) {
                    return t ? Bn(G(t), -Gt, Gt) : t === 0 ? t : 0
                }

                function rt(t) {
                    return t == null ? "" : te(t)
                }
                var Wy = fr(function (t, r) {
                        if (ii(r) || Kt(r)) {
                            Re(r, Ot(r), t);
                            return
                        }
                        for (var s in r) it.call(r, s) && Qr(t, s, r[s])
                    }),
                    Xf = fr(function (t, r) {
                        Re(r, qt(r), t)
                    }),
                    Es = fr(function (t, r, s, u) {
                        Re(r, qt(r), t, u)
                    }),
                    Fy = fr(function (t, r, s, u) {
                        Re(r, Ot(r), t, u)
                    }),
                    Hy = Ye(Xo);

                function Uy(t, r) {
                    var s = cr(t);
                    return r == null ? s : Sc(s, r)
                }
                var ky = X(function (t, r) {
                        t = ot(t);
                        var s = -1,
                            u = r.length,
                            f = u > 2 ? r[2] : i;
                        for (f && Bt(r[0], r[1], f) && (u = 1); ++s < u;)
                            for (var p = r[s], g = qt(p), v = -1, E = g.length; ++v < E;) {
                                var x = g[v],
                                    O = t[x];
                                (O === i || we(O, ar[x]) && !it.call(t, x)) && (t[x] = p[x])
                            }
                        return t
                    }),
                    Vy = X(function (t) {
                        return t.push(i, df), Qt(Jf, i, t)
                    });

                function Ky(t, r) {
                    return uc(t, H(r, 3), Le)
                }

                function qy(t, r) {
                    return uc(t, H(r, 3), Qo)
                }

                function Yy(t, r) {
                    return t == null ? t : Jo(t, H(r, 3), qt)
                }

                function zy(t, r) {
                    return t == null ? t : Ic(t, H(r, 3), qt)
                }

                function Gy(t, r) {
                    return t && Le(t, H(r, 3))
                }

                function jy(t, r) {
                    return t && Qo(t, H(r, 3))
                }

                function Xy(t) {
                    return t == null ? [] : ts(t, Ot(t))
                }

                function Jy(t) {
                    return t == null ? [] : ts(t, qt(t))
                }

                function La(t, r, s) {
                    var u = t == null ? i : Wn(t, r);
                    return u === i ? s : u
                }

                function Qy(t, r) {
                    return t != null && gf(t, r, ym)
                }

                function Ra(t, r) {
                    return t != null && gf(t, r, Am)
                }
                var Zy = uf(function (t, r, s) {
                        r != null && typeof r.toString != "function" && (r = Ui.call(r)), t[r] = s
                    }, Da(Yt)),
                    tA = uf(function (t, r, s) {
                        r != null && typeof r.toString != "function" && (r = Ui.call(r)), it.call(t, r) ? t[r].push(s) : t[r] = [s]
                    }, H),
                    eA = X(ti);

                function Ot(t) {
                    return Kt(t) ? xc(t) : na(t)
                }

                function qt(t) {
                    return Kt(t) ? xc(t, !0) : Im(t)
                }

                function nA(t, r) {
                    var s = {};
                    return r = H(r, 3), Le(t, function (u, f, p) {
                        Ke(s, r(u, f, p), u)
                    }), s
                }

                function rA(t, r) {
                    var s = {};
                    return r = H(r, 3), Le(t, function (u, f, p) {
                        Ke(s, f, r(u, f, p))
                    }), s
                }
                var iA = fr(function (t, r, s) {
                        es(t, r, s)
                    }),
                    Jf = fr(function (t, r, s, u) {
                        es(t, r, s, u)
                    }),
                    sA = Ye(function (t, r) {
                        var s = {};
                        if (t == null) return s;
                        var u = !1;
                        r = dt(r, function (p) {
                            return p = _n(p, t), u || (u = p.length > 1), p
                        }), Re(t, ga(t), s), u && (s = he(s, S | T | I, Zm));
                        for (var f = r.length; f--;) ua(s, r[f]);
                        return s
                    });

                function oA(t, r) {
                    return Qf(t, gs(H(r)))
                }
                var aA = Ye(function (t, r) {
                    return t == null ? {} : $m(t, r)
                });

                function Qf(t, r) {
                    if (t == null) return {};
                    var s = dt(ga(t), function (u) {
                        return [u]
                    });
                    return r = H(r), kc(t, s, function (u, f) {
                        return r(u, f[0])
                    })
                }

                function uA(t, r, s) {
                    r = _n(r, t);
                    var u = -1,
                        f = r.length;
                    for (f || (f = 1, t = i); ++u < f;) {
                        var p = t == null ? i : t[Ie(r[u])];
                        p === i && (u = f, p = s), t = Ge(p) ? p.call(t) : p
                    }
                    return t
                }

                function lA(t, r, s) {
                    return t == null ? t : ni(t, r, s)
                }

                function cA(t, r, s, u) {
                    return u = typeof u == "function" ? u : i, t == null ? t : ni(t, r, s, u)
                }
                var Zf = ff(Ot),
                    th = ff(qt);

                function fA(t, r, s) {
                    var u = q(t),
                        f = u || vn(t) || pr(t);
                    if (r = H(r, 4), s == null) {
                        var p = t && t.constructor;
                        f ? s = u ? new p : [] : _t(t) ? s = Ge(p) ? cr(Ki(t)) : {} : s = {}
                    }
                    return (f ? le : Le)(t, function (g, v, E) {
                        return r(s, g, v, E)
                    }), s
                }

                function hA(t, r) {
                    return t == null ? !0 : ua(t, r)
                }

                function dA(t, r, s) {
                    return t == null ? t : zc(t, r, fa(s))
                }

                function pA(t, r, s, u) {
                    return u = typeof u == "function" ? u : i, t == null ? t : zc(t, r, fa(s), u)
                }

                function _r(t) {
                    return t == null ? [] : Vo(t, Ot(t))
                }

                function _A(t) {
                    return t == null ? [] : Vo(t, qt(t))
                }

                function gA(t, r, s) {
                    return s === i && (s = r, r = i), s !== i && (s = _e(s), s = s === s ? s : 0), r !== i && (r = _e(r), r = r === r ? r : 0), Bn(_e(t), r, s)
                }

                function vA(t, r, s) {
                    return r = je(r), s === i ? (s = r, r = 0) : s = je(s), t = _e(t), wm(t, r, s)
                }

                function mA(t, r, s) {
                    if (s && typeof s != "boolean" && Bt(t, r, s) && (r = s = i), s === i && (typeof r == "boolean" ? (s = r, r = i) : typeof t == "boolean" && (s = t, t = i)), t === i && r === i ? (t = 0, r = 1) : (t = je(t), r === i ? (r = t, t = 0) : r = je(r)), t > r) {
                        var u = t;
                        t = r, r = u
                    }
                    if (s || t % 1 || r % 1) {
                        var f = wc();
                        return Dt(t + f * (r - t + Xg("1e-" + ((f + "").length - 1))), r)
                    }
                    return sa(t, r)
                }
                var EA = hr(function (t, r, s) {
                    return r = r.toLowerCase(), t + (s ? eh(r) : r)
                });

                function eh(t) {
                    return Ia(rt(t).toLowerCase())
                }

                function nh(t) {
                    return t = rt(t), t && t.replace(yg, lv).replace(Hg, "")
                }

                function bA(t, r, s) {
                    t = rt(t), r = te(r);
                    var u = t.length;
                    s = s === i ? u : Bn(G(s), 0, u);
                    var f = s;
                    return s -= r.length, s >= 0 && t.slice(s, f) == r
                }

                function yA(t) {
                    return t = rt(t), t && eg.test(t) ? t.replace(Il, cv) : t
                }

                function AA(t) {
                    return t = rt(t), t && ag.test(t) ? t.replace(So, "\\$&") : t
                }
                var wA = hr(function (t, r, s) {
                        return t + (s ? "-" : "") + r.toLowerCase()
                    }),
                    TA = hr(function (t, r, s) {
                        return t + (s ? " " : "") + r.toLowerCase()
                    }),
                    xA = sf("toLowerCase");

                function OA(t, r, s) {
                    t = rt(t), r = G(r);
                    var u = r ? sr(t) : 0;
                    if (!r || u >= r) return t;
                    var f = (r - u) / 2;
                    return as(Gi(f), s) + t + as(zi(f), s)
                }

                function SA(t, r, s) {
                    t = rt(t), r = G(r);
                    var u = r ? sr(t) : 0;
                    return r && u < r ? t + as(r - u, s) : t
                }

                function CA(t, r, s) {
                    t = rt(t), r = G(r);
                    var u = r ? sr(t) : 0;
                    return r && u < r ? as(r - u, s) + t : t
                }

                function NA(t, r, s) {
                    return s || r == null ? r = 0 : r && (r = +r), Mv(rt(t).replace(Co, ""), r || 0)
                }

                function LA(t, r, s) {
                    return (s ? Bt(t, r, s) : r === i) ? r = 1 : r = G(r), oa(rt(t), r)
                }

                function RA() {
                    var t = arguments,
                        r = rt(t[0]);
                    return t.length < 3 ? r : r.replace(t[1], t[2])
                }
                var IA = hr(function (t, r, s) {
                    return t + (s ? "_" : "") + r.toLowerCase()
                });

                function DA(t, r, s) {
                    return s && typeof s != "number" && Bt(t, r, s) && (r = s = i), s = s === i ? kt : s >>> 0, s ? (t = rt(t), t && (typeof r == "string" || r != null && !Na(r)) && (r = te(r), !r && ir(t)) ? gn(ye(t), 0, s) : t.split(r, s)) : []
                }
                var $A = hr(function (t, r, s) {
                    return t + (s ? " " : "") + Ia(r)
                });

                function PA(t, r, s) {
                    return t = rt(t), s = s == null ? 0 : Bn(G(s), 0, t.length), r = te(r), t.slice(s, s + r.length) == r
                }

                function MA(t, r, s) {
                    var u = d.templateSettings;
                    s && Bt(t, r, s) && (r = i), t = rt(t), r = Es({}, r, u, hf);
                    var f = Es({}, r.imports, u.imports, hf),
                        p = Ot(f),
                        g = Vo(f, p),
                        v, E, x = 0,
                        O = r.interpolate || Ii,
                        C = "__p += '",
                        D = qo((r.escape || Ii).source + "|" + O.source + "|" + (O === Dl ? _g : Ii).source + "|" + (r.evaluate || Ii).source + "|$", "g"),
                        M = "//# sourceURL=" + (it.call(r, "sourceURL") ? (r.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++qg + "]") + `
`;
                    t.replace(D, function (V, J, tt, ne, Wt, re) {
                        return tt || (tt = ne), C += t.slice(x, re).replace(Ag, fv), J && (v = !0, C += `' +
__e(` + J + `) +
'`), Wt && (E = !0, C += `';
` + Wt + `;
__p += '`), tt && (C += `' +
((__t = (` + tt + `)) == null ? '' : __t) +
'`), x = re + V.length, V
                    }), C += `';
`;
                    var k = it.call(r, "variable") && r.variable;
                    if (!k) C = `with (obj) {
` + C + `
}
`;
                    else if (dg.test(k)) throw new K(h);
                    C = (E ? C.replace(J_, "") : C).replace(Q_, "$1").replace(Z_, "$1;"), C = "function(" + (k || "obj") + `) {
` + (k ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (v ? ", __e = _.escape" : "") + (E ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + C + `return __p
}`;
                    var j = ih(function () {
                        return nt(p, M + "return " + C).apply(i, g)
                    });
                    if (j.source = C, Ca(j)) throw j;
                    return j
                }

                function BA(t) {
                    return rt(t).toLowerCase()
                }

                function WA(t) {
                    return rt(t).toUpperCase()
                }

                function FA(t, r, s) {
                    if (t = rt(t), t && (s || r === i)) return hc(t);
                    if (!t || !(r = te(r))) return t;
                    var u = ye(t),
                        f = ye(r),
                        p = dc(u, f),
                        g = pc(u, f) + 1;
                    return gn(u, p, g).join("")
                }

                function HA(t, r, s) {
                    if (t = rt(t), t && (s || r === i)) return t.slice(0, gc(t) + 1);
                    if (!t || !(r = te(r))) return t;
                    var u = ye(t),
                        f = pc(u, ye(r)) + 1;
                    return gn(u, 0, f).join("")
                }

                function UA(t, r, s) {
                    if (t = rt(t), t && (s || r === i)) return t.replace(Co, "");
                    if (!t || !(r = te(r))) return t;
                    var u = ye(t),
                        f = dc(u, ye(r));
                    return gn(u, f).join("")
                }

                function kA(t, r) {
                    var s = ft,
                        u = gt;
                    if (_t(r)) {
                        var f = "separator" in r ? r.separator : f;
                        s = "length" in r ? G(r.length) : s, u = "omission" in r ? te(r.omission) : u
                    }
                    t = rt(t);
                    var p = t.length;
                    if (ir(t)) {
                        var g = ye(t);
                        p = g.length
                    }
                    if (s >= p) return t;
                    var v = s - sr(u);
                    if (v < 1) return u;
                    var E = g ? gn(g, 0, v).join("") : t.slice(0, v);
                    if (f === i) return E + u;
                    if (g && (v += E.length - v), Na(f)) {
                        if (t.slice(v).search(f)) {
                            var x, O = E;
                            for (f.global || (f = qo(f.source, rt($l.exec(f)) + "g")), f.lastIndex = 0; x = f.exec(O);) var C = x.index;
                            E = E.slice(0, C === i ? v : C)
                        }
                    } else if (t.indexOf(te(f), v) != v) {
                        var D = E.lastIndexOf(f);
                        D > -1 && (E = E.slice(0, D))
                    }
                    return E + u
                }

                function VA(t) {
                    return t = rt(t), t && tg.test(t) ? t.replace(Rl, mv) : t
                }
                var KA = hr(function (t, r, s) {
                        return t + (s ? " " : "") + r.toUpperCase()
                    }),
                    Ia = sf("toUpperCase");

                function rh(t, r, s) {
                    return t = rt(t), r = s ? i : r, r === i ? dv(t) ? yv(t) : iv(t) : t.match(r) || []
                }
                var ih = X(function (t, r) {
                        try {
                            return Qt(t, i, r)
                        } catch (s) {
                            return Ca(s) ? s : new K(s)
                        }
                    }),
                    qA = Ye(function (t, r) {
                        return le(r, function (s) {
                            s = Ie(s), Ke(t, s, Oa(t[s], t))
                        }), t
                    });

                function YA(t) {
                    var r = t == null ? 0 : t.length,
                        s = H();
                    return t = r ? dt(t, function (u) {
                        if (typeof u[1] != "function") throw new ce(c);
                        return [s(u[0]), u[1]]
                    }) : [], X(function (u) {
                        for (var f = -1; ++f < r;) {
                            var p = t[f];
                            if (Qt(p[0], this, u)) return Qt(p[1], this, u)
                        }
                    })
                }

                function zA(t) {
                    return mm(he(t, S))
                }

                function Da(t) {
                    return function () {
                        return t
                    }
                }

                function GA(t, r) {
                    return t == null || t !== t ? r : t
                }
                var jA = af(),
                    XA = af(!0);

                function Yt(t) {
                    return t
                }

                function $a(t) {
                    return Mc(typeof t == "function" ? t : he(t, S))
                }

                function JA(t) {
                    return Wc(he(t, S))
                }

                function QA(t, r) {
                    return Fc(t, he(r, S))
                }
                var ZA = X(function (t, r) {
                        return function (s) {
                            return ti(s, t, r)
                        }
                    }),
                    tw = X(function (t, r) {
                        return function (s) {
                            return ti(t, s, r)
                        }
                    });

                function Pa(t, r, s) {
                    var u = Ot(r),
                        f = ts(r, u);
                    s == null && !(_t(r) && (f.length || !u.length)) && (s = r, r = t, t = this, f = ts(r, Ot(r)));
                    var p = !(_t(s) && "chain" in s) || !!s.chain,
                        g = Ge(t);
                    return le(f, function (v) {
                        var E = r[v];
                        t[v] = E, g && (t.prototype[v] = function () {
                            var x = this.__chain__;
                            if (p || x) {
                                var O = t(this.__wrapped__),
                                    C = O.__actions__ = Vt(this.__actions__);
                                return C.push({
                                    func: E,
                                    args: arguments,
                                    thisArg: t
                                }), O.__chain__ = x, O
                            }
                            return E.apply(t, cn([this.value()], arguments))
                        })
                    }), t
                }

                function ew() {
                    return Nt._ === this && (Nt._ = Sv), this
                }

                function Ma() {}

                function nw(t) {
                    return t = G(t), X(function (r) {
                        return Hc(r, t)
                    })
                }
                var rw = da(dt),
                    iw = da(ac),
                    sw = da(Wo);

                function sh(t) {
                    return ba(t) ? Fo(Ie(t)) : Pm(t)
                }

                function ow(t) {
                    return function (r) {
                        return t == null ? i : Wn(t, r)
                    }
                }
                var aw = lf(),
                    uw = lf(!0);

                function Ba() {
                    return []
                }

                function Wa() {
                    return !1
                }

                function lw() {
                    return {}
                }

                function cw() {
                    return ""
                }

                function fw() {
                    return !0
                }

                function hw(t, r) {
                    if (t = G(t), t < 1 || t > Gt) return [];
                    var s = kt,
                        u = Dt(t, kt);
                    r = H(r), t -= kt;
                    for (var f = ko(u, r); ++s < t;) r(s);
                    return f
                }

                function dw(t) {
                    return q(t) ? dt(t, Ie) : ee(t) ? [t] : Vt(xf(rt(t)))
                }

                function pw(t) {
                    var r = ++xv;
                    return rt(t) + r
                }
                var _w = os(function (t, r) {
                        return t + r
                    }, 0),
                    gw = pa("ceil"),
                    vw = os(function (t, r) {
                        return t / r
                    }, 1),
                    mw = pa("floor");

                function Ew(t) {
                    return t && t.length ? Zi(t, Yt, Zo) : i
                }

                function bw(t, r) {
                    return t && t.length ? Zi(t, H(r, 2), Zo) : i
                }

                function yw(t) {
                    return cc(t, Yt)
                }

                function Aw(t, r) {
                    return cc(t, H(r, 2))
                }

                function ww(t) {
                    return t && t.length ? Zi(t, Yt, ra) : i
                }

                function Tw(t, r) {
                    return t && t.length ? Zi(t, H(r, 2), ra) : i
                }
                var xw = os(function (t, r) {
                        return t * r
                    }, 1),
                    Ow = pa("round"),
                    Sw = os(function (t, r) {
                        return t - r
                    }, 0);

                function Cw(t) {
                    return t && t.length ? Uo(t, Yt) : 0
                }

                function Nw(t, r) {
                    return t && t.length ? Uo(t, H(r, 2)) : 0
                }
                return d.after = Jb, d.ary = Mf, d.assign = Wy, d.assignIn = Xf, d.assignInWith = Es, d.assignWith = Fy, d.at = Hy, d.before = Bf, d.bind = Oa, d.bindAll = qA, d.bindKey = Wf, d.castArray = ly, d.chain = Df, d.chunk = mE, d.compact = EE, d.concat = bE, d.cond = YA, d.conforms = zA, d.constant = Da, d.countBy = Cb, d.create = Uy, d.curry = Ff, d.curryRight = Hf, d.debounce = Uf, d.defaults = ky, d.defaultsDeep = Vy, d.defer = Qb, d.delay = Zb, d.difference = yE, d.differenceBy = AE, d.differenceWith = wE, d.drop = TE, d.dropRight = xE, d.dropRightWhile = OE, d.dropWhile = SE, d.fill = CE, d.filter = Lb, d.flatMap = Db, d.flatMapDeep = $b, d.flatMapDepth = Pb, d.flatten = Nf, d.flattenDeep = NE, d.flattenDepth = LE, d.flip = ty, d.flow = jA, d.flowRight = XA, d.fromPairs = RE, d.functions = Xy, d.functionsIn = Jy, d.groupBy = Mb, d.initial = DE, d.intersection = $E, d.intersectionBy = PE, d.intersectionWith = ME, d.invert = Zy, d.invertBy = tA, d.invokeMap = Wb, d.iteratee = $a, d.keyBy = Fb, d.keys = Ot, d.keysIn = qt, d.map = ds, d.mapKeys = nA, d.mapValues = rA, d.matches = JA, d.matchesProperty = QA, d.memoize = _s, d.merge = iA, d.mergeWith = Jf, d.method = ZA, d.methodOf = tw, d.mixin = Pa, d.negate = gs, d.nthArg = nw, d.omit = sA, d.omitBy = oA, d.once = ey, d.orderBy = Hb, d.over = rw, d.overArgs = ny, d.overEvery = iw, d.overSome = sw, d.partial = Sa, d.partialRight = kf, d.partition = Ub, d.pick = aA, d.pickBy = Qf, d.property = sh, d.propertyOf = ow, d.pull = HE, d.pullAll = Rf, d.pullAllBy = UE, d.pullAllWith = kE, d.pullAt = VE, d.range = aw, d.rangeRight = uw, d.rearg = ry, d.reject = Kb, d.remove = KE, d.rest = iy, d.reverse = Ta, d.sampleSize = Yb, d.set = lA, d.setWith = cA, d.shuffle = zb, d.slice = qE, d.sortBy = Xb, d.sortedUniq = QE, d.sortedUniqBy = ZE, d.split = DA, d.spread = sy, d.tail = tb, d.take = eb, d.takeRight = nb, d.takeRightWhile = rb, d.takeWhile = ib, d.tap = Eb, d.throttle = oy, d.thru = hs, d.toArray = zf, d.toPairs = Zf, d.toPairsIn = th, d.toPath = dw, d.toPlainObject = jf, d.transform = fA, d.unary = ay, d.union = sb, d.unionBy = ob, d.unionWith = ab, d.uniq = ub, d.uniqBy = lb, d.uniqWith = cb, d.unset = hA, d.unzip = xa, d.unzipWith = If, d.update = dA, d.updateWith = pA, d.values = _r, d.valuesIn = _A, d.without = fb, d.words = rh, d.wrap = uy, d.xor = hb, d.xorBy = db, d.xorWith = pb, d.zip = _b, d.zipObject = gb, d.zipObjectDeep = vb, d.zipWith = mb, d.entries = Zf, d.entriesIn = th, d.extend = Xf, d.extendWith = Es, Pa(d, d), d.add = _w, d.attempt = ih, d.camelCase = EA, d.capitalize = eh, d.ceil = gw, d.clamp = gA, d.clone = cy, d.cloneDeep = hy, d.cloneDeepWith = dy, d.cloneWith = fy, d.conformsTo = py, d.deburr = nh, d.defaultTo = GA, d.divide = vw, d.endsWith = bA, d.eq = we, d.escape = yA, d.escapeRegExp = AA, d.every = Nb, d.find = Rb, d.findIndex = Sf, d.findKey = Ky, d.findLast = Ib, d.findLastIndex = Cf, d.findLastKey = qy, d.floor = mw, d.forEach = $f, d.forEachRight = Pf, d.forIn = Yy, d.forInRight = zy, d.forOwn = Gy, d.forOwnRight = jy, d.get = La, d.gt = _y, d.gte = gy, d.has = Qy, d.hasIn = Ra, d.head = Lf, d.identity = Yt, d.includes = Bb, d.indexOf = IE, d.inRange = vA, d.invoke = eA, d.isArguments = Un, d.isArray = q, d.isArrayBuffer = vy, d.isArrayLike = Kt, d.isArrayLikeObject = mt, d.isBoolean = my, d.isBuffer = vn, d.isDate = Ey, d.isElement = by, d.isEmpty = yy, d.isEqual = Ay, d.isEqualWith = wy, d.isError = Ca, d.isFinite = Ty, d.isFunction = Ge, d.isInteger = Vf, d.isLength = vs, d.isMap = Kf, d.isMatch = xy, d.isMatchWith = Oy, d.isNaN = Sy, d.isNative = Cy, d.isNil = Ly, d.isNull = Ny, d.isNumber = qf, d.isObject = _t, d.isObjectLike = vt, d.isPlainObject = oi, d.isRegExp = Na, d.isSafeInteger = Ry, d.isSet = Yf, d.isString = ms, d.isSymbol = ee, d.isTypedArray = pr, d.isUndefined = Iy, d.isWeakMap = Dy, d.isWeakSet = $y, d.join = BE, d.kebabCase = wA, d.last = pe, d.lastIndexOf = WE, d.lowerCase = TA, d.lowerFirst = xA, d.lt = Py, d.lte = My, d.max = Ew, d.maxBy = bw, d.mean = yw, d.meanBy = Aw, d.min = ww, d.minBy = Tw, d.stubArray = Ba, d.stubFalse = Wa, d.stubObject = lw, d.stubString = cw, d.stubTrue = fw, d.multiply = xw, d.nth = FE, d.noConflict = ew, d.noop = Ma, d.now = ps, d.pad = OA, d.padEnd = SA, d.padStart = CA, d.parseInt = NA, d.random = mA, d.reduce = kb, d.reduceRight = Vb, d.repeat = LA, d.replace = RA, d.result = uA, d.round = Ow, d.runInContext = m, d.sample = qb, d.size = Gb, d.snakeCase = IA, d.some = jb, d.sortedIndex = YE, d.sortedIndexBy = zE, d.sortedIndexOf = GE, d.sortedLastIndex = jE, d.sortedLastIndexBy = XE, d.sortedLastIndexOf = JE, d.startCase = $A, d.startsWith = PA, d.subtract = Sw, d.sum = Cw, d.sumBy = Nw, d.template = MA, d.times = hw, d.toFinite = je, d.toInteger = G, d.toLength = Gf, d.toLower = BA, d.toNumber = _e, d.toSafeInteger = By, d.toString = rt, d.toUpper = WA, d.trim = FA, d.trimEnd = HA, d.trimStart = UA, d.truncate = kA, d.unescape = VA, d.uniqueId = pw, d.upperCase = KA, d.upperFirst = Ia, d.each = $f, d.eachRight = Pf, d.first = Lf, Pa(d, function () {
                    var t = {};
                    return Le(d, function (r, s) {
                        it.call(d.prototype, s) || (t[s] = r)
                    }), t
                }(), {
                    chain: !1
                }), d.VERSION = o, le(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function (t) {
                    d[t].placeholder = d
                }), le(["drop", "take"], function (t, r) {
                    Q.prototype[t] = function (s) {
                        s = s === i ? 1 : Tt(G(s), 0);
                        var u = this.__filtered__ && !r ? new Q(this) : this.clone();
                        return u.__filtered__ ? u.__takeCount__ = Dt(s, u.__takeCount__) : u.__views__.push({
                            size: Dt(s, kt),
                            type: t + (u.__dir__ < 0 ? "Right" : "")
                        }), u
                    }, Q.prototype[t + "Right"] = function (s) {
                        return this.reverse()[t](s).reverse()
                    }
                }), le(["filter", "map", "takeWhile"], function (t, r) {
                    var s = r + 1,
                        u = s == xt || s == yt;
                    Q.prototype[t] = function (f) {
                        var p = this.clone();
                        return p.__iteratees__.push({
                            iteratee: H(f, 3),
                            type: s
                        }), p.__filtered__ = p.__filtered__ || u, p
                    }
                }), le(["head", "last"], function (t, r) {
                    var s = "take" + (r ? "Right" : "");
                    Q.prototype[t] = function () {
                        return this[s](1).value()[0]
                    }
                }), le(["initial", "tail"], function (t, r) {
                    var s = "drop" + (r ? "" : "Right");
                    Q.prototype[t] = function () {
                        return this.__filtered__ ? new Q(this) : this[s](1)
                    }
                }), Q.prototype.compact = function () {
                    return this.filter(Yt)
                }, Q.prototype.find = function (t) {
                    return this.filter(t).head()
                }, Q.prototype.findLast = function (t) {
                    return this.reverse().find(t)
                }, Q.prototype.invokeMap = X(function (t, r) {
                    return typeof t == "function" ? new Q(this) : this.map(function (s) {
                        return ti(s, t, r)
                    })
                }), Q.prototype.reject = function (t) {
                    return this.filter(gs(H(t)))
                }, Q.prototype.slice = function (t, r) {
                    t = G(t);
                    var s = this;
                    return s.__filtered__ && (t > 0 || r < 0) ? new Q(s) : (t < 0 ? s = s.takeRight(-t) : t && (s = s.drop(t)), r !== i && (r = G(r), s = r < 0 ? s.dropRight(-r) : s.take(r - t)), s)
                }, Q.prototype.takeRightWhile = function (t) {
                    return this.reverse().takeWhile(t).reverse()
                }, Q.prototype.toArray = function () {
                    return this.take(kt)
                }, Le(Q.prototype, function (t, r) {
                    var s = /^(?:filter|find|map|reject)|While$/.test(r),
                        u = /^(?:head|last)$/.test(r),
                        f = d[u ? "take" + (r == "last" ? "Right" : "") : r],
                        p = u || /^find/.test(r);
                    !f || (d.prototype[r] = function () {
                        var g = this.__wrapped__,
                            v = u ? [1] : arguments,
                            E = g instanceof Q,
                            x = v[0],
                            O = E || q(g),
                            C = function (J) {
                                var tt = f.apply(d, cn([J], v));
                                return u && D ? tt[0] : tt
                            };
                        O && s && typeof x == "function" && x.length != 1 && (E = O = !1);
                        var D = this.__chain__,
                            M = !!this.__actions__.length,
                            k = p && !D,
                            j = E && !M;
                        if (!p && O) {
                            g = j ? g : new Q(this);
                            var V = t.apply(g, v);
                            return V.__actions__.push({
                                func: hs,
                                args: [C],
                                thisArg: i
                            }), new fe(V, D)
                        }
                        return k && j ? t.apply(this, v) : (V = this.thru(C), k ? u ? V.value()[0] : V.value() : V)
                    })
                }), le(["pop", "push", "shift", "sort", "splice", "unshift"], function (t) {
                    var r = Wi[t],
                        s = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru",
                        u = /^(?:pop|shift)$/.test(t);
                    d.prototype[t] = function () {
                        var f = arguments;
                        if (u && !this.__chain__) {
                            var p = this.value();
                            return r.apply(q(p) ? p : [], f)
                        }
                        return this[s](function (g) {
                            return r.apply(q(g) ? g : [], f)
                        })
                    }
                }), Le(Q.prototype, function (t, r) {
                    var s = d[r];
                    if (s) {
                        var u = s.name + "";
                        it.call(lr, u) || (lr[u] = []), lr[u].push({
                            name: r,
                            func: s
                        })
                    }
                }), lr[ss(i, P).name] = [{
                    name: "wrapper",
                    func: i
                }], Q.prototype.clone = Vv, Q.prototype.reverse = Kv, Q.prototype.value = qv, d.prototype.at = bb, d.prototype.chain = yb, d.prototype.commit = Ab, d.prototype.next = wb, d.prototype.plant = xb, d.prototype.reverse = Ob, d.prototype.toJSON = d.prototype.valueOf = d.prototype.value = Sb, d.prototype.first = d.prototype.head, zr && (d.prototype[zr] = Tb), d
            },
            or = Av();
        Dn ? ((Dn.exports = or)._ = or, $o._ = or) : Nt._ = or
    }).call(ai)
})(vu, vu.exports);
const Rw = vu.exports;
var Ft = "top",
    se = "bottom",
    oe = "right",
    Ht = "left",
    ks = "auto",
    Br = [Ft, se, oe, Ht],
    zn = "start",
    xr = "end",
    md = "clippingParents",
    ku = "viewport",
    br = "popper",
    Ed = "reference",
    mu = Br.reduce(function (n, e) {
        return n.concat([e + "-" + zn, e + "-" + xr])
    }, []),
    Vu = [].concat(Br, [ks]).reduce(function (n, e) {
        return n.concat([e, e + "-" + zn, e + "-" + xr])
    }, []),
    bd = "beforeRead",
    yd = "read",
    Ad = "afterRead",
    wd = "beforeMain",
    Td = "main",
    xd = "afterMain",
    Od = "beforeWrite",
    Sd = "write",
    Cd = "afterWrite",
    Nd = [bd, yd, Ad, wd, Td, xd, Od, Sd, Cd];

function Me(n) {
    return n ? (n.nodeName || "").toLowerCase() : null
}

function me(n) {
    if (n == null) return window;
    if (n.toString() !== "[object Window]") {
        var e = n.ownerDocument;
        return e && e.defaultView || window
    }
    return n
}

function Gn(n) {
    var e = me(n).Element;
    return n instanceof e || n instanceof Element
}

function ge(n) {
    var e = me(n).HTMLElement;
    return n instanceof e || n instanceof HTMLElement
}

function Ku(n) {
    if (typeof ShadowRoot > "u") return !1;
    var e = me(n).ShadowRoot;
    return n instanceof e || n instanceof ShadowRoot
}

function Iw(n) {
    var e = n.state;
    Object.keys(e.elements).forEach(function (i) {
        var o = e.styles[i] || {},
            a = e.attributes[i] || {},
            l = e.elements[i];
        !ge(l) || !Me(l) || (Object.assign(l.style, o), Object.keys(a).forEach(function (c) {
            var h = a[c];
            h === !1 ? l.removeAttribute(c) : l.setAttribute(c, h === !0 ? "" : h)
        }))
    })
}

function Dw(n) {
    var e = n.state,
        i = {
            popper: {
                position: e.options.strategy,
                left: "0",
                top: "0",
                margin: "0"
            },
            arrow: {
                position: "absolute"
            },
            reference: {}
        };
    return Object.assign(e.elements.popper.style, i.popper), e.styles = i, e.elements.arrow && Object.assign(e.elements.arrow.style, i.arrow),
        function () {
            Object.keys(e.elements).forEach(function (o) {
                var a = e.elements[o],
                    l = e.attributes[o] || {},
                    c = Object.keys(e.styles.hasOwnProperty(o) ? e.styles[o] : i[o]),
                    h = c.reduce(function (_, y) {
                        return _[y] = "", _
                    }, {});
                !ge(a) || !Me(a) || (Object.assign(a.style, h), Object.keys(l).forEach(function (_) {
                    a.removeAttribute(_)
                }))
            })
        }
}
const qu = {
    name: "applyStyles",
    enabled: !0,
    phase: "write",
    fn: Iw,
    effect: Dw,
    requires: ["computeStyles"]
};

function $e(n) {
    return n.split("-")[0]
}
var Vn = Math.max,
    $s = Math.min,
    Or = Math.round;

function Eu() {
    var n = navigator.userAgentData;
    return n != null && n.brands ? n.brands.map(function (e) {
        return e.brand + "/" + e.version
    }).join(" ") : navigator.userAgent
}

function Ld() {
    return !/^((?!chrome|android).)*safari/i.test(Eu())
}

function Sr(n, e, i) {
    e === void 0 && (e = !1), i === void 0 && (i = !1);
    var o = n.getBoundingClientRect(),
        a = 1,
        l = 1;
    e && ge(n) && (a = n.offsetWidth > 0 && Or(o.width) / n.offsetWidth || 1, l = n.offsetHeight > 0 && Or(o.height) / n.offsetHeight || 1);
    var c = Gn(n) ? me(n) : window,
        h = c.visualViewport,
        _ = !Ld() && i,
        y = (o.left + (_ && h ? h.offsetLeft : 0)) / a,
        b = (o.top + (_ && h ? h.offsetTop : 0)) / l,
        S = o.width / a,
        T = o.height / l;
    return {
        width: S,
        height: T,
        top: b,
        right: y + S,
        bottom: b + T,
        left: y,
        x: y,
        y: b
    }
}

function Yu(n) {
    var e = Sr(n),
        i = n.offsetWidth,
        o = n.offsetHeight;
    return Math.abs(e.width - i) <= 1 && (i = e.width), Math.abs(e.height - o) <= 1 && (o = e.height), {
        x: n.offsetLeft,
        y: n.offsetTop,
        width: i,
        height: o
    }
}

function Rd(n, e) {
    var i = e.getRootNode && e.getRootNode();
    if (n.contains(e)) return !0;
    if (i && Ku(i)) {
        var o = e;
        do {
            if (o && n.isSameNode(o)) return !0;
            o = o.parentNode || o.host
        } while (o)
    }
    return !1
}

function en(n) {
    return me(n).getComputedStyle(n)
}

function $w(n) {
    return ["table", "td", "th"].indexOf(Me(n)) >= 0
}

function Sn(n) {
    return ((Gn(n) ? n.ownerDocument : n.document) || window.document).documentElement
}

function Vs(n) {
    return Me(n) === "html" ? n : n.assignedSlot || n.parentNode || (Ku(n) ? n.host : null) || Sn(n)
}

function ah(n) {
    return !ge(n) || en(n).position === "fixed" ? null : n.offsetParent
}

function Pw(n) {
    var e = /firefox/i.test(Eu()),
        i = /Trident/i.test(Eu());
    if (i && ge(n)) {
        var o = en(n);
        if (o.position === "fixed") return null
    }
    var a = Vs(n);
    for (Ku(a) && (a = a.host); ge(a) && ["html", "body"].indexOf(Me(a)) < 0;) {
        var l = en(a);
        if (l.transform !== "none" || l.perspective !== "none" || l.contain === "paint" || ["transform", "perspective"].indexOf(l.willChange) !== -1 || e && l.willChange === "filter" || e && l.filter && l.filter !== "none") return a;
        a = a.parentNode
    }
    return null
}

function bi(n) {
    for (var e = me(n), i = ah(n); i && $w(i) && en(i).position === "static";) i = ah(i);
    return i && (Me(i) === "html" || Me(i) === "body" && en(i).position === "static") ? e : i || Pw(n) || e
}

function zu(n) {
    return ["top", "bottom"].indexOf(n) >= 0 ? "x" : "y"
}

function di(n, e, i) {
    return Vn(n, $s(e, i))
}

function Mw(n, e, i) {
    var o = di(n, e, i);
    return o > i ? i : o
}

function Id() {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    }
}

function Dd(n) {
    return Object.assign({}, Id(), n)
}

function $d(n, e) {
    return e.reduce(function (i, o) {
        return i[o] = n, i
    }, {})
}
var Bw = function (e, i) {
    return e = typeof e == "function" ? e(Object.assign({}, i.rects, {
        placement: i.placement
    })) : e, Dd(typeof e != "number" ? e : $d(e, Br))
};

function Ww(n) {
    var e, i = n.state,
        o = n.name,
        a = n.options,
        l = i.elements.arrow,
        c = i.modifiersData.popperOffsets,
        h = $e(i.placement),
        _ = zu(h),
        y = [Ht, oe].indexOf(h) >= 0,
        b = y ? "height" : "width";
    if (!(!l || !c)) {
        var S = Bw(a.padding, i),
            T = Yu(l),
            I = _ === "y" ? Ft : Ht,
            Y = _ === "y" ? se : oe,
            W = i.rects.reference[b] + i.rects.reference[_] - c[_] - i.rects.popper[b],
            L = c[_] - i.rects.reference[_],
            P = bi(l),
            U = P ? _ === "y" ? P.clientHeight || 0 : P.clientWidth || 0 : 0,
            F = W / 2 - L / 2,
            B = S[I],
            R = U - T[b] - S[Y],
            z = U / 2 - T[b] / 2 + F,
            et = di(B, z, R),
            st = _;
        i.modifiersData[o] = (e = {}, e[st] = et, e.centerOffset = et - z, e)
    }
}

function Fw(n) {
    var e = n.state,
        i = n.options,
        o = i.element,
        a = o === void 0 ? "[data-popper-arrow]" : o;
    a != null && (typeof a == "string" && (a = e.elements.popper.querySelector(a), !a) || !Rd(e.elements.popper, a) || (e.elements.arrow = a))
}
const Pd = {
    name: "arrow",
    enabled: !0,
    phase: "main",
    fn: Ww,
    effect: Fw,
    requires: ["popperOffsets"],
    requiresIfExists: ["preventOverflow"]
};

function Cr(n) {
    return n.split("-")[1]
}
var Hw = {
    top: "auto",
    right: "auto",
    bottom: "auto",
    left: "auto"
};

function Uw(n) {
    var e = n.x,
        i = n.y,
        o = window,
        a = o.devicePixelRatio || 1;
    return {
        x: Or(e * a) / a || 0,
        y: Or(i * a) / a || 0
    }
}

function uh(n) {
    var e, i = n.popper,
        o = n.popperRect,
        a = n.placement,
        l = n.variation,
        c = n.offsets,
        h = n.position,
        _ = n.gpuAcceleration,
        y = n.adaptive,
        b = n.roundOffsets,
        S = n.isFixed,
        T = c.x,
        I = T === void 0 ? 0 : T,
        Y = c.y,
        W = Y === void 0 ? 0 : Y,
        L = typeof b == "function" ? b({
            x: I,
            y: W
        }) : {
            x: I,
            y: W
        };
    I = L.x, W = L.y;
    var P = c.hasOwnProperty("x"),
        U = c.hasOwnProperty("y"),
        F = Ht,
        B = Ft,
        R = window;
    if (y) {
        var z = bi(i),
            et = "clientHeight",
            st = "clientWidth";
        if (z === me(i) && (z = Sn(i), en(z).position !== "static" && h === "absolute" && (et = "scrollHeight", st = "scrollWidth")), z = z, a === Ft || (a === Ht || a === oe) && l === xr) {
            B = se;
            var ut = S && z === R && R.visualViewport ? R.visualViewport.height : z[et];
            W -= ut - o.height, W *= _ ? 1 : -1
        }
        if (a === Ht || (a === Ft || a === se) && l === xr) {
            F = oe;
            var ft = S && z === R && R.visualViewport ? R.visualViewport.width : z[st];
            I -= ft - o.width, I *= _ ? 1 : -1
        }
    }
    var gt = Object.assign({
            position: h
        }, y && Hw),
        lt = b === !0 ? Uw({
            x: I,
            y: W
        }) : {
            x: I,
            y: W
        };
    if (I = lt.x, W = lt.y, _) {
        var ht;
        return Object.assign({}, gt, (ht = {}, ht[B] = U ? "0" : "", ht[F] = P ? "0" : "", ht.transform = (R.devicePixelRatio || 1) <= 1 ? "translate(" + I + "px, " + W + "px)" : "translate3d(" + I + "px, " + W + "px, 0)", ht))
    }
    return Object.assign({}, gt, (e = {}, e[B] = U ? W + "px" : "", e[F] = P ? I + "px" : "", e.transform = "", e))
}

function kw(n) {
    var e = n.state,
        i = n.options,
        o = i.gpuAcceleration,
        a = o === void 0 ? !0 : o,
        l = i.adaptive,
        c = l === void 0 ? !0 : l,
        h = i.roundOffsets,
        _ = h === void 0 ? !0 : h,
        y = {
            placement: $e(e.placement),
            variation: Cr(e.placement),
            popper: e.elements.popper,
            popperRect: e.rects.popper,
            gpuAcceleration: a,
            isFixed: e.options.strategy === "fixed"
        };
    e.modifiersData.popperOffsets != null && (e.styles.popper = Object.assign({}, e.styles.popper, uh(Object.assign({}, y, {
        offsets: e.modifiersData.popperOffsets,
        position: e.options.strategy,
        adaptive: c,
        roundOffsets: _
    })))), e.modifiersData.arrow != null && (e.styles.arrow = Object.assign({}, e.styles.arrow, uh(Object.assign({}, y, {
        offsets: e.modifiersData.arrow,
        position: "absolute",
        adaptive: !1,
        roundOffsets: _
    })))), e.attributes.popper = Object.assign({}, e.attributes.popper, {
        "data-popper-placement": e.placement
    })
}
const Gu = {
    name: "computeStyles",
    enabled: !0,
    phase: "beforeWrite",
    fn: kw,
    data: {}
};
var bs = {
    passive: !0
};

function Vw(n) {
    var e = n.state,
        i = n.instance,
        o = n.options,
        a = o.scroll,
        l = a === void 0 ? !0 : a,
        c = o.resize,
        h = c === void 0 ? !0 : c,
        _ = me(e.elements.popper),
        y = [].concat(e.scrollParents.reference, e.scrollParents.popper);
    return l && y.forEach(function (b) {
            b.addEventListener("scroll", i.update, bs)
        }), h && _.addEventListener("resize", i.update, bs),
        function () {
            l && y.forEach(function (b) {
                b.removeEventListener("scroll", i.update, bs)
            }), h && _.removeEventListener("resize", i.update, bs)
        }
}
const ju = {
    name: "eventListeners",
    enabled: !0,
    phase: "write",
    fn: function () {},
    effect: Vw,
    data: {}
};
var Kw = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
};

function Ns(n) {
    return n.replace(/left|right|bottom|top/g, function (e) {
        return Kw[e]
    })
}
var qw = {
    start: "end",
    end: "start"
};

function lh(n) {
    return n.replace(/start|end/g, function (e) {
        return qw[e]
    })
}

function Xu(n) {
    var e = me(n),
        i = e.pageXOffset,
        o = e.pageYOffset;
    return {
        scrollLeft: i,
        scrollTop: o
    }
}

function Ju(n) {
    return Sr(Sn(n)).left + Xu(n).scrollLeft
}

function Yw(n, e) {
    var i = me(n),
        o = Sn(n),
        a = i.visualViewport,
        l = o.clientWidth,
        c = o.clientHeight,
        h = 0,
        _ = 0;
    if (a) {
        l = a.width, c = a.height;
        var y = Ld();
        (y || !y && e === "fixed") && (h = a.offsetLeft, _ = a.offsetTop)
    }
    return {
        width: l,
        height: c,
        x: h + Ju(n),
        y: _
    }
}

function zw(n) {
    var e, i = Sn(n),
        o = Xu(n),
        a = (e = n.ownerDocument) == null ? void 0 : e.body,
        l = Vn(i.scrollWidth, i.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0),
        c = Vn(i.scrollHeight, i.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0),
        h = -o.scrollLeft + Ju(n),
        _ = -o.scrollTop;
    return en(a || i).direction === "rtl" && (h += Vn(i.clientWidth, a ? a.clientWidth : 0) - l), {
        width: l,
        height: c,
        x: h,
        y: _
    }
}

function Qu(n) {
    var e = en(n),
        i = e.overflow,
        o = e.overflowX,
        a = e.overflowY;
    return /auto|scroll|overlay|hidden/.test(i + a + o)
}

function Md(n) {
    return ["html", "body", "#document"].indexOf(Me(n)) >= 0 ? n.ownerDocument.body : ge(n) && Qu(n) ? n : Md(Vs(n))
}

function pi(n, e) {
    var i;
    e === void 0 && (e = []);
    var o = Md(n),
        a = o === ((i = n.ownerDocument) == null ? void 0 : i.body),
        l = me(o),
        c = a ? [l].concat(l.visualViewport || [], Qu(o) ? o : []) : o,
        h = e.concat(c);
    return a ? h : h.concat(pi(Vs(c)))
}

function bu(n) {
    return Object.assign({}, n, {
        left: n.x,
        top: n.y,
        right: n.x + n.width,
        bottom: n.y + n.height
    })
}

function Gw(n, e) {
    var i = Sr(n, !1, e === "fixed");
    return i.top = i.top + n.clientTop, i.left = i.left + n.clientLeft, i.bottom = i.top + n.clientHeight, i.right = i.left + n.clientWidth, i.width = n.clientWidth, i.height = n.clientHeight, i.x = i.left, i.y = i.top, i
}

function ch(n, e, i) {
    return e === ku ? bu(Yw(n, i)) : Gn(e) ? Gw(e, i) : bu(zw(Sn(n)))
}

function jw(n) {
    var e = pi(Vs(n)),
        i = ["absolute", "fixed"].indexOf(en(n).position) >= 0,
        o = i && ge(n) ? bi(n) : n;
    return Gn(o) ? e.filter(function (a) {
        return Gn(a) && Rd(a, o) && Me(a) !== "body"
    }) : []
}

function Xw(n, e, i, o) {
    var a = e === "clippingParents" ? jw(n) : [].concat(e),
        l = [].concat(a, [i]),
        c = l[0],
        h = l.reduce(function (_, y) {
            var b = ch(n, y, o);
            return _.top = Vn(b.top, _.top), _.right = $s(b.right, _.right), _.bottom = $s(b.bottom, _.bottom), _.left = Vn(b.left, _.left), _
        }, ch(n, c, o));
    return h.width = h.right - h.left, h.height = h.bottom - h.top, h.x = h.left, h.y = h.top, h
}

function Bd(n) {
    var e = n.reference,
        i = n.element,
        o = n.placement,
        a = o ? $e(o) : null,
        l = o ? Cr(o) : null,
        c = e.x + e.width / 2 - i.width / 2,
        h = e.y + e.height / 2 - i.height / 2,
        _;
    switch (a) {
        case Ft:
            _ = {
                x: c,
                y: e.y - i.height
            };
            break;
        case se:
            _ = {
                x: c,
                y: e.y + e.height
            };
            break;
        case oe:
            _ = {
                x: e.x + e.width,
                y: h
            };
            break;
        case Ht:
            _ = {
                x: e.x - i.width,
                y: h
            };
            break;
        default:
            _ = {
                x: e.x,
                y: e.y
            }
    }
    var y = a ? zu(a) : null;
    if (y != null) {
        var b = y === "y" ? "height" : "width";
        switch (l) {
            case zn:
                _[y] = _[y] - (e[b] / 2 - i[b] / 2);
                break;
            case xr:
                _[y] = _[y] + (e[b] / 2 - i[b] / 2);
                break
        }
    }
    return _
}

function Nr(n, e) {
    e === void 0 && (e = {});
    var i = e,
        o = i.placement,
        a = o === void 0 ? n.placement : o,
        l = i.strategy,
        c = l === void 0 ? n.strategy : l,
        h = i.boundary,
        _ = h === void 0 ? md : h,
        y = i.rootBoundary,
        b = y === void 0 ? ku : y,
        S = i.elementContext,
        T = S === void 0 ? br : S,
        I = i.altBoundary,
        Y = I === void 0 ? !1 : I,
        W = i.padding,
        L = W === void 0 ? 0 : W,
        P = Dd(typeof L != "number" ? L : $d(L, Br)),
        U = T === br ? Ed : br,
        F = n.rects.popper,
        B = n.elements[Y ? U : T],
        R = Xw(Gn(B) ? B : B.contextElement || Sn(n.elements.popper), _, b, c),
        z = Sr(n.elements.reference),
        et = Bd({
            reference: z,
            element: F,
            strategy: "absolute",
            placement: a
        }),
        st = bu(Object.assign({}, F, et)),
        ut = T === br ? st : z,
        ft = {
            top: R.top - ut.top + P.top,
            bottom: ut.bottom - R.bottom + P.bottom,
            left: R.left - ut.left + P.left,
            right: ut.right - R.right + P.right
        },
        gt = n.modifiersData.offset;
    if (T === br && gt) {
        var lt = gt[a];
        Object.keys(ft).forEach(function (ht) {
            var xt = [oe, se].indexOf(ht) >= 0 ? 1 : -1,
                be = [Ft, se].indexOf(ht) >= 0 ? "y" : "x";
            ft[ht] += lt[be] * xt
        })
    }
    return ft
}

function Jw(n, e) {
    e === void 0 && (e = {});
    var i = e,
        o = i.placement,
        a = i.boundary,
        l = i.rootBoundary,
        c = i.padding,
        h = i.flipVariations,
        _ = i.allowedAutoPlacements,
        y = _ === void 0 ? Vu : _,
        b = Cr(o),
        S = b ? h ? mu : mu.filter(function (Y) {
            return Cr(Y) === b
        }) : Br,
        T = S.filter(function (Y) {
            return y.indexOf(Y) >= 0
        });
    T.length === 0 && (T = S);
    var I = T.reduce(function (Y, W) {
        return Y[W] = Nr(n, {
            placement: W,
            boundary: a,
            rootBoundary: l,
            padding: c
        })[$e(W)], Y
    }, {});
    return Object.keys(I).sort(function (Y, W) {
        return I[Y] - I[W]
    })
}

function Qw(n) {
    if ($e(n) === ks) return [];
    var e = Ns(n);
    return [lh(n), e, lh(e)]
}

function Zw(n) {
    var e = n.state,
        i = n.options,
        o = n.name;
    if (!e.modifiersData[o]._skip) {
        for (var a = i.mainAxis, l = a === void 0 ? !0 : a, c = i.altAxis, h = c === void 0 ? !0 : c, _ = i.fallbackPlacements, y = i.padding, b = i.boundary, S = i.rootBoundary, T = i.altBoundary, I = i.flipVariations, Y = I === void 0 ? !0 : I, W = i.allowedAutoPlacements, L = e.options.placement, P = $e(L), U = P === L, F = _ || (U || !Y ? [Ns(L)] : Qw(L)), B = [L].concat(F).reduce(function (rn, Pt) {
                return rn.concat($e(Pt) === ks ? Jw(e, {
                    placement: Pt,
                    boundary: b,
                    rootBoundary: S,
                    padding: y,
                    flipVariations: Y,
                    allowedAutoPlacements: W
                }) : Pt)
            }, []), R = e.rects.reference, z = e.rects.popper, et = new Map, st = !0, ut = B[0], ft = 0; ft < B.length; ft++) {
            var gt = B[ft],
                lt = $e(gt),
                ht = Cr(gt) === zn,
                xt = [Ft, se].indexOf(lt) >= 0,
                be = xt ? "width" : "height",
                yt = Nr(e, {
                    placement: gt,
                    boundary: b,
                    rootBoundary: S,
                    altBoundary: T,
                    padding: y
                }),
                At = xt ? ht ? oe : Ht : ht ? se : Ft;
            R[be] > z[be] && (At = Ns(At));
            var Gt = Ns(At),
                We = [];
            if (l && We.push(yt[lt] <= 0), h && We.push(yt[At] <= 0, yt[Gt] <= 0), We.every(function (rn) {
                    return rn
                })) {
                ut = gt, st = !1;
                break
            }
            et.set(gt, We)
        }
        if (st)
            for (var Fe = Y ? 3 : 1, kt = function (Pt) {
                    var Ne = B.find(function (tr) {
                        var jt = et.get(tr);
                        if (jt) return jt.slice(0, Pt).every(function (He) {
                            return He
                        })
                    });
                    if (Ne) return ut = Ne, "break"
                }, Ln = Fe; Ln > 0; Ln--) {
                var Zn = kt(Ln);
                if (Zn === "break") break
            }
        e.placement !== ut && (e.modifiersData[o]._skip = !0, e.placement = ut, e.reset = !0)
    }
}
const Wd = {
    name: "flip",
    enabled: !0,
    phase: "main",
    fn: Zw,
    requiresIfExists: ["offset"],
    data: {
        _skip: !1
    }
};

function fh(n, e, i) {
    return i === void 0 && (i = {
        x: 0,
        y: 0
    }), {
        top: n.top - e.height - i.y,
        right: n.right - e.width + i.x,
        bottom: n.bottom - e.height + i.y,
        left: n.left - e.width - i.x
    }
}

function hh(n) {
    return [Ft, oe, se, Ht].some(function (e) {
        return n[e] >= 0
    })
}

function tT(n) {
    var e = n.state,
        i = n.name,
        o = e.rects.reference,
        a = e.rects.popper,
        l = e.modifiersData.preventOverflow,
        c = Nr(e, {
            elementContext: "reference"
        }),
        h = Nr(e, {
            altBoundary: !0
        }),
        _ = fh(c, o),
        y = fh(h, a, l),
        b = hh(_),
        S = hh(y);
    e.modifiersData[i] = {
        referenceClippingOffsets: _,
        popperEscapeOffsets: y,
        isReferenceHidden: b,
        hasPopperEscaped: S
    }, e.attributes.popper = Object.assign({}, e.attributes.popper, {
        "data-popper-reference-hidden": b,
        "data-popper-escaped": S
    })
}
const Fd = {
    name: "hide",
    enabled: !0,
    phase: "main",
    requiresIfExists: ["preventOverflow"],
    fn: tT
};

function eT(n, e, i) {
    var o = $e(n),
        a = [Ht, Ft].indexOf(o) >= 0 ? -1 : 1,
        l = typeof i == "function" ? i(Object.assign({}, e, {
            placement: n
        })) : i,
        c = l[0],
        h = l[1];
    return c = c || 0, h = (h || 0) * a, [Ht, oe].indexOf(o) >= 0 ? {
        x: h,
        y: c
    } : {
        x: c,
        y: h
    }
}

function nT(n) {
    var e = n.state,
        i = n.options,
        o = n.name,
        a = i.offset,
        l = a === void 0 ? [0, 0] : a,
        c = Vu.reduce(function (b, S) {
            return b[S] = eT(S, e.rects, l), b
        }, {}),
        h = c[e.placement],
        _ = h.x,
        y = h.y;
    e.modifiersData.popperOffsets != null && (e.modifiersData.popperOffsets.x += _, e.modifiersData.popperOffsets.y += y), e.modifiersData[o] = c
}
const Hd = {
    name: "offset",
    enabled: !0,
    phase: "main",
    requires: ["popperOffsets"],
    fn: nT
};

function rT(n) {
    var e = n.state,
        i = n.name;
    e.modifiersData[i] = Bd({
        reference: e.rects.reference,
        element: e.rects.popper,
        strategy: "absolute",
        placement: e.placement
    })
}
const Zu = {
    name: "popperOffsets",
    enabled: !0,
    phase: "read",
    fn: rT,
    data: {}
};

function iT(n) {
    return n === "x" ? "y" : "x"
}

function sT(n) {
    var e = n.state,
        i = n.options,
        o = n.name,
        a = i.mainAxis,
        l = a === void 0 ? !0 : a,
        c = i.altAxis,
        h = c === void 0 ? !1 : c,
        _ = i.boundary,
        y = i.rootBoundary,
        b = i.altBoundary,
        S = i.padding,
        T = i.tether,
        I = T === void 0 ? !0 : T,
        Y = i.tetherOffset,
        W = Y === void 0 ? 0 : Y,
        L = Nr(e, {
            boundary: _,
            rootBoundary: y,
            padding: S,
            altBoundary: b
        }),
        P = $e(e.placement),
        U = Cr(e.placement),
        F = !U,
        B = zu(P),
        R = iT(B),
        z = e.modifiersData.popperOffsets,
        et = e.rects.reference,
        st = e.rects.popper,
        ut = typeof W == "function" ? W(Object.assign({}, e.rects, {
            placement: e.placement
        })) : W,
        ft = typeof ut == "number" ? {
            mainAxis: ut,
            altAxis: ut
        } : Object.assign({
            mainAxis: 0,
            altAxis: 0
        }, ut),
        gt = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null,
        lt = {
            x: 0,
            y: 0
        };
    if (!!z) {
        if (l) {
            var ht, xt = B === "y" ? Ft : Ht,
                be = B === "y" ? se : oe,
                yt = B === "y" ? "height" : "width",
                At = z[B],
                Gt = At + L[xt],
                We = At - L[be],
                Fe = I ? -st[yt] / 2 : 0,
                kt = U === zn ? et[yt] : st[yt],
                Ln = U === zn ? -st[yt] : -et[yt],
                Zn = e.elements.arrow,
                rn = I && Zn ? Yu(Zn) : {
                    width: 0,
                    height: 0
                },
                Pt = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : Id(),
                Ne = Pt[xt],
                tr = Pt[be],
                jt = di(0, et[yt], rn[yt]),
                He = F ? et[yt] / 2 - Fe - jt - Ne - ft.mainAxis : kt - jt - Ne - ft.mainAxis,
                go = F ? -et[yt] / 2 + Fe + jt + tr + ft.mainAxis : Ln + jt + tr + ft.mainAxis,
                sn = e.elements.arrow && bi(e.elements.arrow),
                er = sn ? B === "y" ? sn.clientTop || 0 : sn.clientLeft || 0 : 0,
                Kr = (ht = gt == null ? void 0 : gt[B]) != null ? ht : 0,
                Xt = At + He - Kr - er,
                Rn = At + go - Kr,
                Ni = di(I ? $s(Gt, Xt) : Gt, At, I ? Vn(We, Rn) : We);
            z[B] = Ni, lt[B] = Ni - At
        }
        if (h) {
            var ae, Li = B === "x" ? Ft : Ht,
                vo = B === "x" ? se : oe,
                Jt = z[R],
                It = R === "y" ? "height" : "width",
                on = Jt + L[Li],
                In = Jt - L[vo],
                qr = [Ft, Ht].indexOf(P) !== -1,
                an = (ae = gt == null ? void 0 : gt[R]) != null ? ae : 0,
                Ri = qr ? on : Jt - et[It] - st[It] - an + ft.altAxis,
                un = qr ? Jt + et[It] + st[It] - an - ft.altAxis : In,
                Ue = I && qr ? Mw(Ri, Jt, un) : di(I ? Ri : on, Jt, I ? un : In);
            z[R] = Ue, lt[R] = Ue - Jt
        }
        e.modifiersData[o] = lt
    }
}
const Ud = {
    name: "preventOverflow",
    enabled: !0,
    phase: "main",
    fn: sT,
    requiresIfExists: ["offset"]
};

function oT(n) {
    return {
        scrollLeft: n.scrollLeft,
        scrollTop: n.scrollTop
    }
}

function aT(n) {
    return n === me(n) || !ge(n) ? Xu(n) : oT(n)
}

function uT(n) {
    var e = n.getBoundingClientRect(),
        i = Or(e.width) / n.offsetWidth || 1,
        o = Or(e.height) / n.offsetHeight || 1;
    return i !== 1 || o !== 1
}

function lT(n, e, i) {
    i === void 0 && (i = !1);
    var o = ge(e),
        a = ge(e) && uT(e),
        l = Sn(e),
        c = Sr(n, a, i),
        h = {
            scrollLeft: 0,
            scrollTop: 0
        },
        _ = {
            x: 0,
            y: 0
        };
    return (o || !o && !i) && ((Me(e) !== "body" || Qu(l)) && (h = aT(e)), ge(e) ? (_ = Sr(e, !0), _.x += e.clientLeft, _.y += e.clientTop) : l && (_.x = Ju(l))), {
        x: c.left + h.scrollLeft - _.x,
        y: c.top + h.scrollTop - _.y,
        width: c.width,
        height: c.height
    }
}

function cT(n) {
    var e = new Map,
        i = new Set,
        o = [];
    n.forEach(function (l) {
        e.set(l.name, l)
    });

    function a(l) {
        i.add(l.name);
        var c = [].concat(l.requires || [], l.requiresIfExists || []);
        c.forEach(function (h) {
            if (!i.has(h)) {
                var _ = e.get(h);
                _ && a(_)
            }
        }), o.push(l)
    }
    return n.forEach(function (l) {
        i.has(l.name) || a(l)
    }), o
}

function fT(n) {
    var e = cT(n);
    return Nd.reduce(function (i, o) {
        return i.concat(e.filter(function (a) {
            return a.phase === o
        }))
    }, [])
}

function hT(n) {
    var e;
    return function () {
        return e || (e = new Promise(function (i) {
            Promise.resolve().then(function () {
                e = void 0, i(n())
            })
        })), e
    }
}

function dT(n) {
    var e = n.reduce(function (i, o) {
        var a = i[o.name];
        return i[o.name] = a ? Object.assign({}, a, o, {
            options: Object.assign({}, a.options, o.options),
            data: Object.assign({}, a.data, o.data)
        }) : o, i
    }, {});
    return Object.keys(e).map(function (i) {
        return e[i]
    })
}
var dh = {
    placement: "bottom",
    modifiers: [],
    strategy: "absolute"
};

function ph() {
    for (var n = arguments.length, e = new Array(n), i = 0; i < n; i++) e[i] = arguments[i];
    return !e.some(function (o) {
        return !(o && typeof o.getBoundingClientRect == "function")
    })
}

function Ks(n) {
    n === void 0 && (n = {});
    var e = n,
        i = e.defaultModifiers,
        o = i === void 0 ? [] : i,
        a = e.defaultOptions,
        l = a === void 0 ? dh : a;
    return function (h, _, y) {
        y === void 0 && (y = l);
        var b = {
                placement: "bottom",
                orderedModifiers: [],
                options: Object.assign({}, dh, l),
                modifiersData: {},
                elements: {
                    reference: h,
                    popper: _
                },
                attributes: {},
                styles: {}
            },
            S = [],
            T = !1,
            I = {
                state: b,
                setOptions: function (P) {
                    var U = typeof P == "function" ? P(b.options) : P;
                    W(), b.options = Object.assign({}, l, b.options, U), b.scrollParents = {
                        reference: Gn(h) ? pi(h) : h.contextElement ? pi(h.contextElement) : [],
                        popper: pi(_)
                    };
                    var F = fT(dT([].concat(o, b.options.modifiers)));
                    return b.orderedModifiers = F.filter(function (B) {
                        return B.enabled
                    }), Y(), I.update()
                },
                forceUpdate: function () {
                    if (!T) {
                        var P = b.elements,
                            U = P.reference,
                            F = P.popper;
                        if (!!ph(U, F)) {
                            b.rects = {
                                reference: lT(U, bi(F), b.options.strategy === "fixed"),
                                popper: Yu(F)
                            }, b.reset = !1, b.placement = b.options.placement, b.orderedModifiers.forEach(function (ft) {
                                return b.modifiersData[ft.name] = Object.assign({}, ft.data)
                            });
                            for (var B = 0; B < b.orderedModifiers.length; B++) {
                                if (b.reset === !0) {
                                    b.reset = !1, B = -1;
                                    continue
                                }
                                var R = b.orderedModifiers[B],
                                    z = R.fn,
                                    et = R.options,
                                    st = et === void 0 ? {} : et,
                                    ut = R.name;
                                typeof z == "function" && (b = z({
                                    state: b,
                                    options: st,
                                    name: ut,
                                    instance: I
                                }) || b)
                            }
                        }
                    }
                },
                update: hT(function () {
                    return new Promise(function (L) {
                        I.forceUpdate(), L(b)
                    })
                }),
                destroy: function () {
                    W(), T = !0
                }
            };
        if (!ph(h, _)) return I;
        I.setOptions(y).then(function (L) {
            !T && y.onFirstUpdate && y.onFirstUpdate(L)
        });

        function Y() {
            b.orderedModifiers.forEach(function (L) {
                var P = L.name,
                    U = L.options,
                    F = U === void 0 ? {} : U,
                    B = L.effect;
                if (typeof B == "function") {
                    var R = B({
                            state: b,
                            name: P,
                            instance: I,
                            options: F
                        }),
                        z = function () {};
                    S.push(R || z)
                }
            })
        }

        function W() {
            S.forEach(function (L) {
                return L()
            }), S = []
        }
        return I
    }
}
var pT = Ks(),
    _T = [ju, Zu, Gu, qu],
    gT = Ks({
        defaultModifiers: _T
    }),
    vT = [ju, Zu, Gu, qu, Hd, Wd, Ud, Pd, Fd],
    tl = Ks({
        defaultModifiers: vT
    });
const kd = Object.freeze(Object.defineProperty({
    __proto__: null,
    popperGenerator: Ks,
    detectOverflow: Nr,
    createPopperBase: pT,
    createPopper: tl,
    createPopperLite: gT,
    top: Ft,
    bottom: se,
    right: oe,
    left: Ht,
    auto: ks,
    basePlacements: Br,
    start: zn,
    end: xr,
    clippingParents: md,
    viewport: ku,
    popper: br,
    reference: Ed,
    variationPlacements: mu,
    placements: Vu,
    beforeRead: bd,
    read: yd,
    afterRead: Ad,
    beforeMain: wd,
    main: Td,
    afterMain: xd,
    beforeWrite: Od,
    write: Sd,
    afterWrite: Cd,
    modifierPhases: Nd,
    applyStyles: qu,
    arrow: Pd,
    computeStyles: Gu,
    eventListeners: ju,
    flip: Wd,
    hide: Fd,
    offset: Hd,
    popperOffsets: Zu,
    preventOverflow: Ud
}, Symbol.toStringTag, {
    value: "Module"
}));
/*!
 * Bootstrap v5.2.0 (https://getbootstrap.com/)
 * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */
const mT = 1e6,
    ET = 1e3,
    yu = "transitionend",
    bT = n => n == null ? `${n}` : Object.prototype.toString.call(n).match(/\s([a-z]+)/i)[1].toLowerCase(),
    yT = n => {
        do n += Math.floor(Math.random() * mT); while (document.getElementById(n));
        return n
    },
    Vd = n => {
        let e = n.getAttribute("data-bs-target");
        if (!e || e === "#") {
            let i = n.getAttribute("href");
            if (!i || !i.includes("#") && !i.startsWith(".")) return null;
            i.includes("#") && !i.startsWith("#") && (i = `#${i.split("#")[1]}`), e = i && i !== "#" ? i.trim() : null
        }
        return e
    },
    Kd = n => {
        const e = Vd(n);
        return e && document.querySelector(e) ? e : null
    },
    Qe = n => {
        const e = Vd(n);
        return e ? document.querySelector(e) : null
    },
    AT = n => {
        if (!n) return 0;
        let {
            transitionDuration: e,
            transitionDelay: i
        } = window.getComputedStyle(n);
        const o = Number.parseFloat(e),
            a = Number.parseFloat(i);
        return !o && !a ? 0 : (e = e.split(",")[0], i = i.split(",")[0], (Number.parseFloat(e) + Number.parseFloat(i)) * ET)
    },
    qd = n => {
        n.dispatchEvent(new Event(yu))
    },
    Ze = n => !n || typeof n != "object" ? !1 : (typeof n.jquery < "u" && (n = n[0]), typeof n.nodeType < "u"),
    An = n => Ze(n) ? n.jquery ? n[0] : n : typeof n == "string" && n.length > 0 ? document.querySelector(n) : null,
    Wr = n => {
        if (!Ze(n) || n.getClientRects().length === 0) return !1;
        const e = getComputedStyle(n).getPropertyValue("visibility") === "visible",
            i = n.closest("details:not([open])");
        if (!i) return e;
        if (i !== n) {
            const o = n.closest("summary");
            if (o && o.parentNode !== i || o === null) return !1
        }
        return e
    },
    wn = n => !n || n.nodeType !== Node.ELEMENT_NODE || n.classList.contains("disabled") ? !0 : typeof n.disabled < "u" ? n.disabled : n.hasAttribute("disabled") && n.getAttribute("disabled") !== "false",
    Yd = n => {
        if (!document.documentElement.attachShadow) return null;
        if (typeof n.getRootNode == "function") {
            const e = n.getRootNode();
            return e instanceof ShadowRoot ? e : null
        }
        return n instanceof ShadowRoot ? n : n.parentNode ? Yd(n.parentNode) : null
    },
    Ps = () => {},
    yi = n => {
        n.offsetHeight
    },
    zd = () => window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null,
    Fa = [],
    wT = n => {
        document.readyState === "loading" ? (Fa.length || document.addEventListener("DOMContentLoaded", () => {
            for (const e of Fa) e()
        }), Fa.push(n)) : n()
    },
    ve = () => document.documentElement.dir === "rtl",
    Ee = n => {
        wT(() => {
            const e = zd();
            if (e) {
                const i = n.NAME,
                    o = e.fn[i];
                e.fn[i] = n.jQueryInterface, e.fn[i].Constructor = n, e.fn[i].noConflict = () => (e.fn[i] = o, n.jQueryInterface)
            }
        })
    },
    Je = n => {
        typeof n == "function" && n()
    },
    Gd = (n, e, i = !0) => {
        if (!i) {
            Je(n);
            return
        }
        const o = 5,
            a = AT(e) + o;
        let l = !1;
        const c = ({
            target: h
        }) => {
            h === e && (l = !0, e.removeEventListener(yu, c), Je(n))
        };
        e.addEventListener(yu, c), setTimeout(() => {
            l || qd(e)
        }, a)
    },
    el = (n, e, i, o) => {
        const a = n.length;
        let l = n.indexOf(e);
        return l === -1 ? !i && o ? n[a - 1] : n[0] : (l += i ? 1 : -1, o && (l = (l + a) % a), n[Math.max(0, Math.min(l, a - 1))])
    },
    TT = /[^.]*(?=\..*)\.|.*/,
    xT = /\..*/,
    OT = /::\d+$/,
    Ha = {};
let _h = 1;
const jd = {
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    },
    ST = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);

function Xd(n, e) {
    return e && `${e}::${_h++}` || n.uidEvent || _h++
}

function Jd(n) {
    const e = Xd(n);
    return n.uidEvent = e, Ha[e] = Ha[e] || {}, Ha[e]
}

function CT(n, e) {
    return function i(o) {
        return nl(o, {
            delegateTarget: n
        }), i.oneOff && N.off(n, o.type, e), e.apply(n, [o])
    }
}

function NT(n, e, i) {
    return function o(a) {
        const l = n.querySelectorAll(e);
        for (let {
                target: c
            } = a; c && c !== this; c = c.parentNode)
            for (const h of l)
                if (h === c) return nl(a, {
                    delegateTarget: c
                }), o.oneOff && N.off(n, a.type, e, i), i.apply(c, [a])
    }
}

function Qd(n, e, i = null) {
    return Object.values(n).find(o => o.callable === e && o.delegationSelector === i)
}

function Zd(n, e, i) {
    const o = typeof e == "string",
        a = o ? i : e || i;
    let l = tp(n);
    return ST.has(l) || (l = n), [o, a, l]
}

function gh(n, e, i, o, a) {
    if (typeof e != "string" || !n) return;
    let [l, c, h] = Zd(e, i, o);
    e in jd && (c = (Y => function (W) {
        if (!W.relatedTarget || W.relatedTarget !== W.delegateTarget && !W.delegateTarget.contains(W.relatedTarget)) return Y.call(this, W)
    })(c));
    const _ = Jd(n),
        y = _[h] || (_[h] = {}),
        b = Qd(y, c, l ? i : null);
    if (b) {
        b.oneOff = b.oneOff && a;
        return
    }
    const S = Xd(c, e.replace(TT, "")),
        T = l ? NT(n, i, c) : CT(n, c);
    T.delegationSelector = l ? i : null, T.callable = c, T.oneOff = a, T.uidEvent = S, y[S] = T, n.addEventListener(h, T, l)
}

function Au(n, e, i, o, a) {
    const l = Qd(e[i], o, a);
    !l || (n.removeEventListener(i, l, Boolean(a)), delete e[i][l.uidEvent])
}

function LT(n, e, i, o) {
    const a = e[i] || {};
    for (const l of Object.keys(a))
        if (l.includes(o)) {
            const c = a[l];
            Au(n, e, i, c.callable, c.delegationSelector)
        }
}

function tp(n) {
    return n = n.replace(xT, ""), jd[n] || n
}
const N = {
    on(n, e, i, o) {
        gh(n, e, i, o, !1)
    },
    one(n, e, i, o) {
        gh(n, e, i, o, !0)
    },
    off(n, e, i, o) {
        if (typeof e != "string" || !n) return;
        const [a, l, c] = Zd(e, i, o), h = c !== e, _ = Jd(n), y = _[c] || {}, b = e.startsWith(".");
        if (typeof l < "u") {
            if (!Object.keys(y).length) return;
            Au(n, _, c, l, a ? i : null);
            return
        }
        if (b)
            for (const S of Object.keys(_)) LT(n, _, S, e.slice(1));
        for (const S of Object.keys(y)) {
            const T = S.replace(OT, "");
            if (!h || e.includes(T)) {
                const I = y[S];
                Au(n, _, c, I.callable, I.delegationSelector)
            }
        }
    },
    trigger(n, e, i) {
        if (typeof e != "string" || !n) return null;
        const o = zd(),
            a = tp(e),
            l = e !== a;
        let c = null,
            h = !0,
            _ = !0,
            y = !1;
        l && o && (c = o.Event(e, i), o(n).trigger(c), h = !c.isPropagationStopped(), _ = !c.isImmediatePropagationStopped(), y = c.isDefaultPrevented());
        let b = new Event(e, {
            bubbles: h,
            cancelable: !0
        });
        return b = nl(b, i), y && b.preventDefault(), _ && n.dispatchEvent(b), b.defaultPrevented && c && c.preventDefault(), b
    }
};

function nl(n, e) {
    for (const [i, o] of Object.entries(e || {})) try {
        n[i] = o
    } catch {
        Object.defineProperty(n, i, {
            configurable: !0,
            get() {
                return o
            }
        })
    }
    return n
}
const mn = new Map,
    Ua = {
        set(n, e, i) {
            mn.has(n) || mn.set(n, new Map);
            const o = mn.get(n);
            if (!o.has(e) && o.size !== 0) {
                console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(o.keys())[0]}.`);
                return
            }
            o.set(e, i)
        },
        get(n, e) {
            return mn.has(n) && mn.get(n).get(e) || null
        },
        remove(n, e) {
            if (!mn.has(n)) return;
            const i = mn.get(n);
            i.delete(e), i.size === 0 && mn.delete(n)
        }
    };

function vh(n) {
    if (n === "true") return !0;
    if (n === "false") return !1;
    if (n === Number(n).toString()) return Number(n);
    if (n === "" || n === "null") return null;
    if (typeof n != "string") return n;
    try {
        return JSON.parse(decodeURIComponent(n))
    } catch {
        return n
    }
}

function ka(n) {
    return n.replace(/[A-Z]/g, e => `-${e.toLowerCase()}`)
}
const tn = {
    setDataAttribute(n, e, i) {
        n.setAttribute(`data-bs-${ka(e)}`, i)
    },
    removeDataAttribute(n, e) {
        n.removeAttribute(`data-bs-${ka(e)}`)
    },
    getDataAttributes(n) {
        if (!n) return {};
        const e = {},
            i = Object.keys(n.dataset).filter(o => o.startsWith("bs") && !o.startsWith("bsConfig"));
        for (const o of i) {
            let a = o.replace(/^bs/, "");
            a = a.charAt(0).toLowerCase() + a.slice(1, a.length), e[a] = vh(n.dataset[o])
        }
        return e
    },
    getDataAttribute(n, e) {
        return vh(n.getAttribute(`data-bs-${ka(e)}`))
    }
};
class Ai {
    static get Default() {
        return {}
    }
    static get DefaultType() {
        return {}
    }
    static get NAME() {
        throw new Error('You have to implement the static method "NAME", for each component!')
    }
    _getConfig(e) {
        return e = this._mergeConfigObj(e), e = this._configAfterMerge(e), this._typeCheckConfig(e), e
    }
    _configAfterMerge(e) {
        return e
    }
    _mergeConfigObj(e, i) {
        const o = Ze(i) ? tn.getDataAttribute(i, "config") : {};
        return {
            ...this.constructor.Default,
            ...typeof o == "object" ? o : {},
            ...Ze(i) ? tn.getDataAttributes(i) : {},
            ...typeof e == "object" ? e : {}
        }
    }
    _typeCheckConfig(e, i = this.constructor.DefaultType) {
        for (const o of Object.keys(i)) {
            const a = i[o],
                l = e[o],
                c = Ze(l) ? "element" : bT(l);
            if (!new RegExp(a).test(c)) throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${o}" provided type "${c}" but expected type "${a}".`)
        }
    }
}
const RT = "5.2.0";
class Se extends Ai {
    constructor(e, i) {
        super(), e = An(e), e && (this._element = e, this._config = this._getConfig(i), Ua.set(this._element, this.constructor.DATA_KEY, this))
    }
    dispose() {
        Ua.remove(this._element, this.constructor.DATA_KEY), N.off(this._element, this.constructor.EVENT_KEY);
        for (const e of Object.getOwnPropertyNames(this)) this[e] = null
    }
    _queueCallback(e, i, o = !0) {
        Gd(e, i, o)
    }
    _getConfig(e) {
        return e = this._mergeConfigObj(e, this._element), e = this._configAfterMerge(e), this._typeCheckConfig(e), e
    }
    static getInstance(e) {
        return Ua.get(An(e), this.DATA_KEY)
    }
    static getOrCreateInstance(e, i = {}) {
        return this.getInstance(e) || new this(e, typeof i == "object" ? i : null)
    }
    static get VERSION() {
        return RT
    }
    static get DATA_KEY() {
        return `bs.${this.NAME}`
    }
    static get EVENT_KEY() {
        return `.${this.DATA_KEY}`
    }
    static eventName(e) {
        return `${e}${this.EVENT_KEY}`
    }
}
const qs = (n, e = "hide") => {
        const i = `click.dismiss${n.EVENT_KEY}`,
            o = n.NAME;
        N.on(document, i, `[data-bs-dismiss="${o}"]`, function (a) {
            if (["A", "AREA"].includes(this.tagName) && a.preventDefault(), wn(this)) return;
            const l = Qe(this) || this.closest(`.${o}`);
            n.getOrCreateInstance(l)[e]()
        })
    },
    IT = "alert",
    DT = "bs.alert",
    ep = `.${DT}`,
    $T = `close${ep}`,
    PT = `closed${ep}`,
    MT = "fade",
    BT = "show";
class Ys extends Se {
    static get NAME() {
        return IT
    }
    close() {
        if (N.trigger(this._element, $T).defaultPrevented) return;
        this._element.classList.remove(BT);
        const i = this._element.classList.contains(MT);
        this._queueCallback(() => this._destroyElement(), this._element, i)
    }
    _destroyElement() {
        this._element.remove(), N.trigger(this._element, PT), this.dispose()
    }
    static jQueryInterface(e) {
        return this.each(function () {
            const i = Ys.getOrCreateInstance(this);
            if (typeof e == "string") {
                if (i[e] === void 0 || e.startsWith("_") || e === "constructor") throw new TypeError(`No method named "${e}"`);
                i[e](this)
            }
        })
    }
}
qs(Ys, "close");
Ee(Ys);
const WT = "button",
    FT = "bs.button",
    HT = `.${FT}`,
    UT = ".data-api",
    kT = "active",
    mh = '[data-bs-toggle="button"]',
    VT = `click${HT}${UT}`;
class zs extends Se {
    static get NAME() {
        return WT
    }
    toggle() {
        this._element.setAttribute("aria-pressed", this._element.classList.toggle(kT))
    }
    static jQueryInterface(e) {
        return this.each(function () {
            const i = zs.getOrCreateInstance(this);
            e === "toggle" && i[e]()
        })
    }
}
N.on(document, VT, mh, n => {
    n.preventDefault();
    const e = n.target.closest(mh);
    zs.getOrCreateInstance(e).toggle()
});
Ee(zs);
const Z = {
        find(n, e = document.documentElement) {
            return [].concat(...Element.prototype.querySelectorAll.call(e, n))
        },
        findOne(n, e = document.documentElement) {
            return Element.prototype.querySelector.call(e, n)
        },
        children(n, e) {
            return [].concat(...n.children).filter(i => i.matches(e))
        },
        parents(n, e) {
            const i = [];
            let o = n.parentNode.closest(e);
            for (; o;) i.push(o), o = o.parentNode.closest(e);
            return i
        },
        prev(n, e) {
            let i = n.previousElementSibling;
            for (; i;) {
                if (i.matches(e)) return [i];
                i = i.previousElementSibling
            }
            return []
        },
        next(n, e) {
            let i = n.nextElementSibling;
            for (; i;) {
                if (i.matches(e)) return [i];
                i = i.nextElementSibling
            }
            return []
        },
        focusableChildren(n) {
            const e = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map(i => `${i}:not([tabindex^="-"])`).join(",");
            return this.find(e, n).filter(i => !wn(i) && Wr(i))
        }
    },
    KT = "swipe",
    Fr = ".bs.swipe",
    qT = `touchstart${Fr}`,
    YT = `touchmove${Fr}`,
    zT = `touchend${Fr}`,
    GT = `pointerdown${Fr}`,
    jT = `pointerup${Fr}`,
    XT = "touch",
    JT = "pen",
    QT = "pointer-event",
    ZT = 40,
    t0 = {
        endCallback: null,
        leftCallback: null,
        rightCallback: null
    },
    e0 = {
        endCallback: "(function|null)",
        leftCallback: "(function|null)",
        rightCallback: "(function|null)"
    };
class Ms extends Ai {
    constructor(e, i) {
        super(), this._element = e, !(!e || !Ms.isSupported()) && (this._config = this._getConfig(i), this._deltaX = 0, this._supportPointerEvents = Boolean(window.PointerEvent), this._initEvents())
    }
    static get Default() {
        return t0
    }
    static get DefaultType() {
        return e0
    }
    static get NAME() {
        return KT
    }
    dispose() {
        N.off(this._element, Fr)
    }
    _start(e) {
        if (!this._supportPointerEvents) {
            this._deltaX = e.touches[0].clientX;
            return
        }
        this._eventIsPointerPenTouch(e) && (this._deltaX = e.clientX)
    }
    _end(e) {
        this._eventIsPointerPenTouch(e) && (this._deltaX = e.clientX - this._deltaX), this._handleSwipe(), Je(this._config.endCallback)
    }
    _move(e) {
        this._deltaX = e.touches && e.touches.length > 1 ? 0 : e.touches[0].clientX - this._deltaX
    }
    _handleSwipe() {
        const e = Math.abs(this._deltaX);
        if (e <= ZT) return;
        const i = e / this._deltaX;
        this._deltaX = 0, i && Je(i > 0 ? this._config.rightCallback : this._config.leftCallback)
    }
    _initEvents() {
        this._supportPointerEvents ? (N.on(this._element, GT, e => this._start(e)), N.on(this._element, jT, e => this._end(e)), this._element.classList.add(QT)) : (N.on(this._element, qT, e => this._start(e)), N.on(this._element, YT, e => this._move(e)), N.on(this._element, zT, e => this._end(e)))
    }
    _eventIsPointerPenTouch(e) {
        return this._supportPointerEvents && (e.pointerType === JT || e.pointerType === XT)
    }
    static isSupported() {
        return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0
    }
}
const n0 = "carousel",
    r0 = "bs.carousel",
    Cn = `.${r0}`,
    np = ".data-api",
    i0 = "ArrowLeft",
    s0 = "ArrowRight",
    o0 = 500,
    ui = "next",
    gr = "prev",
    yr = "left",
    Ls = "right",
    a0 = `slide${Cn}`,
    Va = `slid${Cn}`,
    u0 = `keydown${Cn}`,
    l0 = `mouseenter${Cn}`,
    c0 = `mouseleave${Cn}`,
    f0 = `dragstart${Cn}`,
    h0 = `load${Cn}${np}`,
    d0 = `click${Cn}${np}`,
    rp = "carousel",
    ys = "active",
    p0 = "slide",
    _0 = "carousel-item-end",
    g0 = "carousel-item-start",
    v0 = "carousel-item-next",
    m0 = "carousel-item-prev",
    ip = ".active",
    sp = ".carousel-item",
    E0 = ip + sp,
    b0 = ".carousel-item img",
    y0 = ".carousel-indicators",
    A0 = "[data-bs-slide], [data-bs-slide-to]",
    w0 = '[data-bs-ride="carousel"]',
    T0 = {
        [i0]: Ls,
        [s0]: yr
    },
    x0 = {
        interval: 5e3,
        keyboard: !0,
        pause: "hover",
        ride: !1,
        touch: !0,
        wrap: !0
    },
    O0 = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        pause: "(string|boolean)",
        ride: "(boolean|string)",
        touch: "boolean",
        wrap: "boolean"
    };
class wi extends Se {
    constructor(e, i) {
        super(e, i), this._interval = null, this._activeElement = null, this._isSliding = !1, this.touchTimeout = null, this._swipeHelper = null, this._indicatorsElement = Z.findOne(y0, this._element), this._addEventListeners(), this._config.ride === rp && this.cycle()
    }
    static get Default() {
        return x0
    }
    static get DefaultType() {
        return O0
    }
    static get NAME() {
        return n0
    }
    next() {
        this._slide(ui)
    }
    nextWhenVisible() {
        !document.hidden && Wr(this._element) && this.next()
    }
    prev() {
        this._slide(gr)
    }
    pause() {
        this._isSliding && qd(this._element), this._clearInterval()
    }
    cycle() {
        this._clearInterval(), this._updateInterval(), this._interval = setInterval(() => this.nextWhenVisible(), this._config.interval)
    }
    _maybeEnableCycle() {
        if (!!this._config.ride) {
            if (this._isSliding) {
                N.one(this._element, Va, () => this.cycle());
                return
            }
            this.cycle()
        }
    }
    to(e) {
        const i = this._getItems();
        if (e > i.length - 1 || e < 0) return;
        if (this._isSliding) {
            N.one(this._element, Va, () => this.to(e));
            return
        }
        const o = this._getItemIndex(this._getActive());
        if (o === e) return;
        const a = e > o ? ui : gr;
        this._slide(a, i[e])
    }
    dispose() {
        this._swipeHelper && this._swipeHelper.dispose(), super.dispose()
    }
    _configAfterMerge(e) {
        return e.defaultInterval = e.interval, e
    }
    _addEventListeners() {
        this._config.keyboard && N.on(this._element, u0, e => this._keydown(e)), this._config.pause === "hover" && (N.on(this._element, l0, () => this.pause()), N.on(this._element, c0, () => this._maybeEnableCycle())), this._config.touch && Ms.isSupported() && this._addTouchEventListeners()
    }
    _addTouchEventListeners() {
        for (const o of Z.find(b0, this._element)) N.on(o, f0, a => a.preventDefault());
        const i = {
            leftCallback: () => this._slide(this._directionToOrder(yr)),
            rightCallback: () => this._slide(this._directionToOrder(Ls)),
            endCallback: () => {
                this._config.pause === "hover" && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout(() => this._maybeEnableCycle(), o0 + this._config.interval))
            }
        };
        this._swipeHelper = new Ms(this._element, i)
    }
    _keydown(e) {
        if (/input|textarea/i.test(e.target.tagName)) return;
        const i = T0[e.key];
        i && (e.preventDefault(), this._slide(this._directionToOrder(i)))
    }
    _getItemIndex(e) {
        return this._getItems().indexOf(e)
    }
    _setActiveIndicatorElement(e) {
        if (!this._indicatorsElement) return;
        const i = Z.findOne(ip, this._indicatorsElement);
        i.classList.remove(ys), i.removeAttribute("aria-current");
        const o = Z.findOne(`[data-bs-slide-to="${e}"]`, this._indicatorsElement);
        o && (o.classList.add(ys), o.setAttribute("aria-current", "true"))
    }
    _updateInterval() {
        const e = this._activeElement || this._getActive();
        if (!e) return;
        const i = Number.parseInt(e.getAttribute("data-bs-interval"), 10);
        this._config.interval = i || this._config.defaultInterval
    }
    _slide(e, i = null) {
        if (this._isSliding) return;
        const o = this._getActive(),
            a = e === ui,
            l = i || el(this._getItems(), o, a, this._config.wrap);
        if (l === o) return;
        const c = this._getItemIndex(l),
            h = I => N.trigger(this._element, I, {
                relatedTarget: l,
                direction: this._orderToDirection(e),
                from: this._getItemIndex(o),
                to: c
            });
        if (h(a0).defaultPrevented || !o || !l) return;
        const y = Boolean(this._interval);
        this.pause(), this._isSliding = !0, this._setActiveIndicatorElement(c), this._activeElement = l;
        const b = a ? g0 : _0,
            S = a ? v0 : m0;
        l.classList.add(S), yi(l), o.classList.add(b), l.classList.add(b);
        const T = () => {
            l.classList.remove(b, S), l.classList.add(ys), o.classList.remove(ys, S, b), this._isSliding = !1, h(Va)
        };
        this._queueCallback(T, o, this._isAnimated()), y && this.cycle()
    }
    _isAnimated() {
        return this._element.classList.contains(p0)
    }
    _getActive() {
        return Z.findOne(E0, this._element)
    }
    _getItems() {
        return Z.find(sp, this._element)
    }
    _clearInterval() {
        this._interval && (clearInterval(this._interval), this._interval = null)
    }
    _directionToOrder(e) {
        return ve() ? e === yr ? gr : ui : e === yr ? ui : gr
    }
    _orderToDirection(e) {
        return ve() ? e === gr ? yr : Ls : e === gr ? Ls : yr
    }
    static jQueryInterface(e) {
        return this.each(function () {
            const i = wi.getOrCreateInstance(this, e);
            if (typeof e == "number") {
                i.to(e);
                return
            }
            if (typeof e == "string") {
                if (i[e] === void 0 || e.startsWith("_") || e === "constructor") throw new TypeError(`No method named "${e}"`);
                i[e]()
            }
        })
    }
}
N.on(document, d0, A0, function (n) {
    const e = Qe(this);
    if (!e || !e.classList.contains(rp)) return;
    n.preventDefault();
    const i = wi.getOrCreateInstance(e),
        o = this.getAttribute("data-bs-slide-to");
    if (o) {
        i.to(o), i._maybeEnableCycle();
        return
    }
    if (tn.getDataAttribute(this, "slide") === "next") {
        i.next(), i._maybeEnableCycle();
        return
    }
    i.prev(), i._maybeEnableCycle()
});
N.on(window, h0, () => {
    const n = Z.find(w0);
    for (const e of n) wi.getOrCreateInstance(e)
});
Ee(wi);
const S0 = "collapse",
    C0 = "bs.collapse",
    Ti = `.${C0}`,
    N0 = ".data-api",
    L0 = `show${Ti}`,
    R0 = `shown${Ti}`,
    I0 = `hide${Ti}`,
    D0 = `hidden${Ti}`,
    $0 = `click${Ti}${N0}`,
    Ka = "show",
    wr = "collapse",
    As = "collapsing",
    P0 = "collapsed",
    M0 = `:scope .${wr} .${wr}`,
    B0 = "collapse-horizontal",
    W0 = "width",
    F0 = "height",
    H0 = ".collapse.show, .collapse.collapsing",
    wu = '[data-bs-toggle="collapse"]',
    U0 = {
        parent: null,
        toggle: !0
    },
    k0 = {
        parent: "(null|element)",
        toggle: "boolean"
    };
class mi extends Se {
    constructor(e, i) {
        super(e, i), this._isTransitioning = !1, this._triggerArray = [];
        const o = Z.find(wu);
        for (const a of o) {
            const l = Kd(a),
                c = Z.find(l).filter(h => h === this._element);
            l !== null && c.length && this._triggerArray.push(a)
        }
        this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle()
    }
    static get Default() {
        return U0
    }
    static get DefaultType() {
        return k0
    }
    static get NAME() {
        return S0
    }
    toggle() {
        this._isShown() ? this.hide() : this.show()
    }
    show() {
        if (this._isTransitioning || this._isShown()) return;
        let e = [];
        if (this._config.parent && (e = this._getFirstLevelChildren(H0).filter(h => h !== this._element).map(h => mi.getOrCreateInstance(h, {
                toggle: !1
            }))), e.length && e[0]._isTransitioning || N.trigger(this._element, L0).defaultPrevented) return;
        for (const h of e) h.hide();
        const o = this._getDimension();
        this._element.classList.remove(wr), this._element.classList.add(As), this._element.style[o] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
        const a = () => {
                this._isTransitioning = !1, this._element.classList.remove(As), this._element.classList.add(wr, Ka), this._element.style[o] = "", N.trigger(this._element, R0)
            },
            c = `scroll${o[0].toUpperCase()+o.slice(1)}`;
        this._queueCallback(a, this._element, !0), this._element.style[o] = `${this._element[c]}px`
    }
    hide() {
        if (this._isTransitioning || !this._isShown() || N.trigger(this._element, I0).defaultPrevented) return;
        const i = this._getDimension();
        this._element.style[i] = `${this._element.getBoundingClientRect()[i]}px`, yi(this._element), this._element.classList.add(As), this._element.classList.remove(wr, Ka);
        for (const a of this._triggerArray) {
            const l = Qe(a);
            l && !this._isShown(l) && this._addAriaAndCollapsedClass([a], !1)
        }
        this._isTransitioning = !0;
        const o = () => {
            this._isTransitioning = !1, this._element.classList.remove(As), this._element.classList.add(wr), N.trigger(this._element, D0)
        };
        this._element.style[i] = "", this._queueCallback(o, this._element, !0)
    }
    _isShown(e = this._element) {
        return e.classList.contains(Ka)
    }
    _configAfterMerge(e) {
        return e.toggle = Boolean(e.toggle), e.parent = An(e.parent), e
    }
    _getDimension() {
        return this._element.classList.contains(B0) ? W0 : F0
    }
    _initializeChildren() {
        if (!this._config.parent) return;
        const e = this._getFirstLevelChildren(wu);
        for (const i of e) {
            const o = Qe(i);
            o && this._addAriaAndCollapsedClass([i], this._isShown(o))
        }
    }
    _getFirstLevelChildren(e) {
        const i = Z.find(M0, this._config.parent);
        return Z.find(e, this._config.parent).filter(o => !i.includes(o))
    }
    _addAriaAndCollapsedClass(e, i) {
        if (!!e.length)
            for (const o of e) o.classList.toggle(P0, !i), o.setAttribute("aria-expanded", i)
    }
    static jQueryInterface(e) {
        const i = {};
        return typeof e == "string" && /show|hide/.test(e) && (i.toggle = !1), this.each(function () {
            const o = mi.getOrCreateInstance(this, i);
            if (typeof e == "string") {
                if (typeof o[e] > "u") throw new TypeError(`No method named "${e}"`);
                o[e]()
            }
        })
    }
}
N.on(document, $0, wu, function (n) {
    (n.target.tagName === "A" || n.delegateTarget && n.delegateTarget.tagName === "A") && n.preventDefault();
    const e = Kd(this),
        i = Z.find(e);
    for (const o of i) mi.getOrCreateInstance(o, {
        toggle: !1
    }).toggle()
});
Ee(mi);
const Eh = "dropdown",
    V0 = "bs.dropdown",
    Xn = `.${V0}`,
    rl = ".data-api",
    K0 = "Escape",
    bh = "Tab",
    q0 = "ArrowUp",
    yh = "ArrowDown",
    Y0 = 2,
    z0 = `hide${Xn}`,
    G0 = `hidden${Xn}`,
    j0 = `show${Xn}`,
    X0 = `shown${Xn}`,
    op = `click${Xn}${rl}`,
    ap = `keydown${Xn}${rl}`,
    J0 = `keyup${Xn}${rl}`,
    Ar = "show",
    Q0 = "dropup",
    Z0 = "dropend",
    tx = "dropstart",
    ex = "dropup-center",
    nx = "dropdown-center",
    Gs = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',
    rx = `${Gs}.${Ar}`,
    up = ".dropdown-menu",
    ix = ".navbar",
    sx = ".navbar-nav",
    ox = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
    ax = ve() ? "top-end" : "top-start",
    ux = ve() ? "top-start" : "top-end",
    lx = ve() ? "bottom-end" : "bottom-start",
    cx = ve() ? "bottom-start" : "bottom-end",
    fx = ve() ? "left-start" : "right-start",
    hx = ve() ? "right-start" : "left-start",
    dx = "top",
    px = "bottom",
    _x = {
        autoClose: !0,
        boundary: "clippingParents",
        display: "dynamic",
        offset: [0, 2],
        popperConfig: null,
        reference: "toggle"
    },
    gx = {
        autoClose: "(boolean|string)",
        boundary: "(string|element)",
        display: "string",
        offset: "(array|string|function)",
        popperConfig: "(null|object|function)",
        reference: "(string|element|object)"
    };
class Pe extends Se {
    constructor(e, i) {
        super(e, i), this._popper = null, this._parent = this._element.parentNode, this._menu = Z.findOne(up, this._parent), this._inNavbar = this._detectNavbar()
    }
    static get Default() {
        return _x
    }
    static get DefaultType() {
        return gx
    }
    static get NAME() {
        return Eh
    }
    toggle() {
        return this._isShown() ? this.hide() : this.show()
    }
    show() {
        if (wn(this._element) || this._isShown()) return;
        const e = {
            relatedTarget: this._element
        };
        if (!N.trigger(this._element, j0, e).defaultPrevented) {
            if (this._createPopper(), "ontouchstart" in document.documentElement && !this._parent.closest(sx))
                for (const o of [].concat(...document.body.children)) N.on(o, "mouseover", Ps);
            this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add(Ar), this._element.classList.add(Ar), N.trigger(this._element, X0, e)
        }
    }
    hide() {
        if (wn(this._element) || !this._isShown()) return;
        const e = {
            relatedTarget: this._element
        };
        this._completeHide(e)
    }
    dispose() {
        this._popper && this._popper.destroy(), super.dispose()
    }
    update() {
        this._inNavbar = this._detectNavbar(), this._popper && this._popper.update()
    }
    _completeHide(e) {
        if (!N.trigger(this._element, z0, e).defaultPrevented) {
            if ("ontouchstart" in document.documentElement)
                for (const o of [].concat(...document.body.children)) N.off(o, "mouseover", Ps);
            this._popper && this._popper.destroy(), this._menu.classList.remove(Ar), this._element.classList.remove(Ar), this._element.setAttribute("aria-expanded", "false"), tn.removeDataAttribute(this._menu, "popper"), N.trigger(this._element, G0, e)
        }
    }
    _getConfig(e) {
        if (e = super._getConfig(e), typeof e.reference == "object" && !Ze(e.reference) && typeof e.reference.getBoundingClientRect != "function") throw new TypeError(`${Eh.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
        return e
    }
    _createPopper() {
        if (typeof kd > "u") throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
        let e = this._element;
        this._config.reference === "parent" ? e = this._parent : Ze(this._config.reference) ? e = An(this._config.reference) : typeof this._config.reference == "object" && (e = this._config.reference);
        const i = this._getPopperConfig();
        this._popper = tl(e, this._menu, i)
    }
    _isShown() {
        return this._menu.classList.contains(Ar)
    }
    _getPlacement() {
        const e = this._parent;
        if (e.classList.contains(Z0)) return fx;
        if (e.classList.contains(tx)) return hx;
        if (e.classList.contains(ex)) return dx;
        if (e.classList.contains(nx)) return px;
        const i = getComputedStyle(this._menu).getPropertyValue("--bs-position").trim() === "end";
        return e.classList.contains(Q0) ? i ? ux : ax : i ? cx : lx
    }
    _detectNavbar() {
        return this._element.closest(ix) !== null
    }
    _getOffset() {
        const {
            offset: e
        } = this._config;
        return typeof e == "string" ? e.split(",").map(i => Number.parseInt(i, 10)) : typeof e == "function" ? i => e(i, this._element) : e
    }
    _getPopperConfig() {
        const e = {
            placement: this._getPlacement(),
            modifiers: [{
                name: "preventOverflow",
                options: {
                    boundary: this._config.boundary
                }
            }, {
                name: "offset",
                options: {
                    offset: this._getOffset()
                }
            }]
        };
        return (this._inNavbar || this._config.display === "static") && (tn.setDataAttribute(this._menu, "popper", "static"), e.modifiers = [{
            name: "applyStyles",
            enabled: !1
        }]), {
            ...e,
            ...typeof this._config.popperConfig == "function" ? this._config.popperConfig(e) : this._config.popperConfig
        }
    }
    _selectMenuItem({
        key: e,
        target: i
    }) {
        const o = Z.find(ox, this._menu).filter(a => Wr(a));
        !o.length || el(o, i, e === yh, !o.includes(i)).focus()
    }
    static jQueryInterface(e) {
        return this.each(function () {
            const i = Pe.getOrCreateInstance(this, e);
            if (typeof e == "string") {
                if (typeof i[e] > "u") throw new TypeError(`No method named "${e}"`);
                i[e]()
            }
        })
    }
    static clearMenus(e) {
        if (e.button === Y0 || e.type === "keyup" && e.key !== bh) return;
        const i = Z.find(rx);
        for (const o of i) {
            const a = Pe.getInstance(o);
            if (!a || a._config.autoClose === !1) continue;
            const l = e.composedPath(),
                c = l.includes(a._menu);
            if (l.includes(a._element) || a._config.autoClose === "inside" && !c || a._config.autoClose === "outside" && c || a._menu.contains(e.target) && (e.type === "keyup" && e.key === bh || /input|select|option|textarea|form/i.test(e.target.tagName))) continue;
            const h = {
                relatedTarget: a._element
            };
            e.type === "click" && (h.clickEvent = e), a._completeHide(h)
        }
    }
    static dataApiKeydownHandler(e) {
        const i = /input|textarea/i.test(e.target.tagName),
            o = e.key === K0,
            a = [q0, yh].includes(e.key);
        if (!a && !o || i && !o) return;
        e.preventDefault();
        const l = Z.findOne(Gs, e.delegateTarget.parentNode),
            c = Pe.getOrCreateInstance(l);
        if (a) {
            e.stopPropagation(), c.show(), c._selectMenuItem(e);
            return
        }
        c._isShown() && (e.stopPropagation(), c.hide(), l.focus())
    }
}
N.on(document, ap, Gs, Pe.dataApiKeydownHandler);
N.on(document, ap, up, Pe.dataApiKeydownHandler);
N.on(document, op, Pe.clearMenus);
N.on(document, J0, Pe.clearMenus);
N.on(document, op, Gs, function (n) {
    n.preventDefault(), Pe.getOrCreateInstance(this).toggle()
});
Ee(Pe);
const Ah = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
    wh = ".sticky-top",
    ws = "padding-right",
    Th = "margin-right";
class Tu {
    constructor() {
        this._element = document.body
    }
    getWidth() {
        const e = document.documentElement.clientWidth;
        return Math.abs(window.innerWidth - e)
    }
    hide() {
        const e = this.getWidth();
        this._disableOverFlow(), this._setElementAttributes(this._element, ws, i => i + e), this._setElementAttributes(Ah, ws, i => i + e), this._setElementAttributes(wh, Th, i => i - e)
    }
    reset() {
        this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, ws), this._resetElementAttributes(Ah, ws), this._resetElementAttributes(wh, Th)
    }
    isOverflowing() {
        return this.getWidth() > 0
    }
    _disableOverFlow() {
        this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden"
    }
    _setElementAttributes(e, i, o) {
        const a = this.getWidth(),
            l = c => {
                if (c !== this._element && window.innerWidth > c.clientWidth + a) return;
                this._saveInitialAttribute(c, i);
                const h = window.getComputedStyle(c).getPropertyValue(i);
                c.style.setProperty(i, `${o(Number.parseFloat(h))}px`)
            };
        this._applyManipulationCallback(e, l)
    }
    _saveInitialAttribute(e, i) {
        const o = e.style.getPropertyValue(i);
        o && tn.setDataAttribute(e, i, o)
    }
    _resetElementAttributes(e, i) {
        const o = a => {
            const l = tn.getDataAttribute(a, i);
            if (l === null) {
                a.style.removeProperty(i);
                return
            }
            tn.removeDataAttribute(a, i), a.style.setProperty(i, l)
        };
        this._applyManipulationCallback(e, o)
    }
    _applyManipulationCallback(e, i) {
        if (Ze(e)) {
            i(e);
            return
        }
        for (const o of Z.find(e, this._element)) i(o)
    }
}
const lp = "backdrop",
    vx = "fade",
    xh = "show",
    Oh = `mousedown.bs.${lp}`,
    mx = {
        className: "modal-backdrop",
        clickCallback: null,
        isAnimated: !1,
        isVisible: !0,
        rootElement: "body"
    },
    Ex = {
        className: "string",
        clickCallback: "(function|null)",
        isAnimated: "boolean",
        isVisible: "boolean",
        rootElement: "(element|string)"
    };
class cp extends Ai {
    constructor(e) {
        super(), this._config = this._getConfig(e), this._isAppended = !1, this._element = null
    }
    static get Default() {
        return mx
    }
    static get DefaultType() {
        return Ex
    }
    static get NAME() {
        return lp
    }
    show(e) {
        if (!this._config.isVisible) {
            Je(e);
            return
        }
        this._append();
        const i = this._getElement();
        this._config.isAnimated && yi(i), i.classList.add(xh), this._emulateAnimation(() => {
            Je(e)
        })
    }
    hide(e) {
        if (!this._config.isVisible) {
            Je(e);
            return
        }
        this._getElement().classList.remove(xh), this._emulateAnimation(() => {
            this.dispose(), Je(e)
        })
    }
    dispose() {
        !this._isAppended || (N.off(this._element, Oh), this._element.remove(), this._isAppended = !1)
    }
    _getElement() {
        if (!this._element) {
            const e = document.createElement("div");
            e.className = this._config.className, this._config.isAnimated && e.classList.add(vx), this._element = e
        }
        return this._element
    }
    _configAfterMerge(e) {
        return e.rootElement = An(e.rootElement), e
    }
    _append() {
        if (this._isAppended) return;
        const e = this._getElement();
        this._config.rootElement.append(e), N.on(e, Oh, () => {
            Je(this._config.clickCallback)
        }), this._isAppended = !0
    }
    _emulateAnimation(e) {
        Gd(e, this._getElement(), this._config.isAnimated)
    }
}
const bx = "focustrap",
    yx = "bs.focustrap",
    Bs = `.${yx}`,
    Ax = `focusin${Bs}`,
    wx = `keydown.tab${Bs}`,
    Tx = "Tab",
    xx = "forward",
    Sh = "backward",
    Ox = {
        autofocus: !0,
        trapElement: null
    },
    Sx = {
        autofocus: "boolean",
        trapElement: "element"
    };
class fp extends Ai {
    constructor(e) {
        super(), this._config = this._getConfig(e), this._isActive = !1, this._lastTabNavDirection = null
    }
    static get Default() {
        return Ox
    }
    static get DefaultType() {
        return Sx
    }
    static get NAME() {
        return bx
    }
    activate() {
        this._isActive || (this._config.autofocus && this._config.trapElement.focus(), N.off(document, Bs), N.on(document, Ax, e => this._handleFocusin(e)), N.on(document, wx, e => this._handleKeydown(e)), this._isActive = !0)
    }
    deactivate() {
        !this._isActive || (this._isActive = !1, N.off(document, Bs))
    }
    _handleFocusin(e) {
        const {
            trapElement: i
        } = this._config;
        if (e.target === document || e.target === i || i.contains(e.target)) return;
        const o = Z.focusableChildren(i);
        o.length === 0 ? i.focus() : this._lastTabNavDirection === Sh ? o[o.length - 1].focus() : o[0].focus()
    }
    _handleKeydown(e) {
        e.key === Tx && (this._lastTabNavDirection = e.shiftKey ? Sh : xx)
    }
}
const Cx = "modal",
    Nx = "bs.modal",
    Be = `.${Nx}`,
    Lx = ".data-api",
    Rx = "Escape",
    Ix = `hide${Be}`,
    Dx = `hidePrevented${Be}`,
    hp = `hidden${Be}`,
    dp = `show${Be}`,
    $x = `shown${Be}`,
    Px = `resize${Be}`,
    Mx = `mousedown.dismiss${Be}`,
    Bx = `keydown.dismiss${Be}`,
    Wx = `click${Be}${Lx}`,
    Ch = "modal-open",
    Fx = "fade",
    Nh = "show",
    qa = "modal-static",
    Hx = ".modal.show",
    Ux = ".modal-dialog",
    kx = ".modal-body",
    Vx = '[data-bs-toggle="modal"]',
    Kx = {
        backdrop: !0,
        focus: !0,
        keyboard: !0
    },
    qx = {
        backdrop: "(boolean|string)",
        focus: "boolean",
        keyboard: "boolean"
    };
class Lr extends Se {
    constructor(e, i) {
        super(e, i), this._dialog = Z.findOne(Ux, this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = !1, this._isTransitioning = !1, this._scrollBar = new Tu, this._addEventListeners()
    }
    static get Default() {
        return Kx
    }
    static get DefaultType() {
        return qx
    }
    static get NAME() {
        return Cx
    }
    toggle(e) {
        return this._isShown ? this.hide() : this.show(e)
    }
    show(e) {
        this._isShown || this._isTransitioning || N.trigger(this._element, dp, {
            relatedTarget: e
        }).defaultPrevented || (this._isShown = !0, this._isTransitioning = !0, this._scrollBar.hide(), document.body.classList.add(Ch), this._adjustDialog(), this._backdrop.show(() => this._showElement(e)))
    }
    hide() {
        !this._isShown || this._isTransitioning || N.trigger(this._element, Ix).defaultPrevented || (this._isShown = !1, this._isTransitioning = !0, this._focustrap.deactivate(), this._element.classList.remove(Nh), this._queueCallback(() => this._hideModal(), this._element, this._isAnimated()))
    }
    dispose() {
        for (const e of [window, this._dialog]) N.off(e, Be);
        this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose()
    }
    handleUpdate() {
        this._adjustDialog()
    }
    _initializeBackDrop() {
        return new cp({
            isVisible: Boolean(this._config.backdrop),
            isAnimated: this._isAnimated()
        })
    }
    _initializeFocusTrap() {
        return new fp({
            trapElement: this._element
        })
    }
    _showElement(e) {
        document.body.contains(this._element) || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0;
        const i = Z.findOne(kx, this._dialog);
        i && (i.scrollTop = 0), yi(this._element), this._element.classList.add(Nh);
        const o = () => {
            this._config.focus && this._focustrap.activate(), this._isTransitioning = !1, N.trigger(this._element, $x, {
                relatedTarget: e
            })
        };
        this._queueCallback(o, this._dialog, this._isAnimated())
    }
    _addEventListeners() {
        N.on(this._element, Bx, e => {
            if (e.key === Rx) {
                if (this._config.keyboard) {
                    e.preventDefault(), this.hide();
                    return
                }
                this._triggerBackdropTransition()
            }
        }), N.on(window, Px, () => {
            this._isShown && !this._isTransitioning && this._adjustDialog()
        }), N.on(this._element, Mx, e => {
            if (e.target === e.currentTarget) {
                if (this._config.backdrop === "static") {
                    this._triggerBackdropTransition();
                    return
                }
                this._config.backdrop && this.hide()
            }
        })
    }
    _hideModal() {
        this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide(() => {
            document.body.classList.remove(Ch), this._resetAdjustments(), this._scrollBar.reset(), N.trigger(this._element, hp)
        })
    }
    _isAnimated() {
        return this._element.classList.contains(Fx)
    }
    _triggerBackdropTransition() {
        if (N.trigger(this._element, Dx).defaultPrevented) return;
        const i = this._element.scrollHeight > document.documentElement.clientHeight,
            o = this._element.style.overflowY;
        o === "hidden" || this._element.classList.contains(qa) || (i || (this._element.style.overflowY = "hidden"), this._element.classList.add(qa), this._queueCallback(() => {
            this._element.classList.remove(qa), this._queueCallback(() => {
                this._element.style.overflowY = o
            }, this._dialog)
        }, this._dialog), this._element.focus())
    }
    _adjustDialog() {
        const e = this._element.scrollHeight > document.documentElement.clientHeight,
            i = this._scrollBar.getWidth(),
            o = i > 0;
        if (o && !e) {
            const a = ve() ? "paddingLeft" : "paddingRight";
            this._element.style[a] = `${i}px`
        }
        if (!o && e) {
            const a = ve() ? "paddingRight" : "paddingLeft";
            this._element.style[a] = `${i}px`
        }
    }
    _resetAdjustments() {
        this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
    }
    static jQueryInterface(e, i) {
        return this.each(function () {
            const o = Lr.getOrCreateInstance(this, e);
            if (typeof e == "string") {
                if (typeof o[e] > "u") throw new TypeError(`No method named "${e}"`);
                o[e](i)
            }
        })
    }
}
N.on(document, Wx, Vx, function (n) {
    const e = Qe(this);
    ["A", "AREA"].includes(this.tagName) && n.preventDefault(), N.one(e, dp, a => {
        a.defaultPrevented || N.one(e, hp, () => {
            Wr(this) && this.focus()
        })
    });
    const i = Z.findOne(Hx);
    i && Lr.getInstance(i).hide(), Lr.getOrCreateInstance(e).toggle(this)
});
qs(Lr);
Ee(Lr);
const Yx = "offcanvas",
    zx = "bs.offcanvas",
    nn = `.${zx}`,
    pp = ".data-api",
    Gx = `load${nn}${pp}`,
    jx = "Escape",
    Lh = "show",
    Rh = "showing",
    Ih = "hiding",
    Xx = "offcanvas-backdrop",
    _p = ".offcanvas.show",
    Jx = `show${nn}`,
    Qx = `shown${nn}`,
    Zx = `hide${nn}`,
    Dh = `hidePrevented${nn}`,
    gp = `hidden${nn}`,
    tO = `resize${nn}`,
    eO = `click${nn}${pp}`,
    nO = `keydown.dismiss${nn}`,
    rO = '[data-bs-toggle="offcanvas"]',
    iO = {
        backdrop: !0,
        keyboard: !0,
        scroll: !1
    },
    sO = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        scroll: "boolean"
    };
class Tn extends Se {
    constructor(e, i) {
        super(e, i), this._isShown = !1, this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._addEventListeners()
    }
    static get Default() {
        return iO
    }
    static get DefaultType() {
        return sO
    }
    static get NAME() {
        return Yx
    }
    toggle(e) {
        return this._isShown ? this.hide() : this.show(e)
    }
    show(e) {
        if (this._isShown || N.trigger(this._element, Jx, {
                relatedTarget: e
            }).defaultPrevented) return;
        this._isShown = !0, this._backdrop.show(), this._config.scroll || new Tu().hide(), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add(Rh);
        const o = () => {
            (!this._config.scroll || this._config.backdrop) && this._focustrap.activate(), this._element.classList.add(Lh), this._element.classList.remove(Rh), N.trigger(this._element, Qx, {
                relatedTarget: e
            })
        };
        this._queueCallback(o, this._element, !0)
    }
    hide() {
        if (!this._isShown || N.trigger(this._element, Zx).defaultPrevented) return;
        this._focustrap.deactivate(), this._element.blur(), this._isShown = !1, this._element.classList.add(Ih), this._backdrop.hide();
        const i = () => {
            this._element.classList.remove(Lh, Ih), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._config.scroll || new Tu().reset(), N.trigger(this._element, gp)
        };
        this._queueCallback(i, this._element, !0)
    }
    dispose() {
        this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose()
    }
    _initializeBackDrop() {
        const e = () => {
                if (this._config.backdrop === "static") {
                    N.trigger(this._element, Dh);
                    return
                }
                this.hide()
            },
            i = Boolean(this._config.backdrop);
        return new cp({
            className: Xx,
            isVisible: i,
            isAnimated: !0,
            rootElement: this._element.parentNode,
            clickCallback: i ? e : null
        })
    }
    _initializeFocusTrap() {
        return new fp({
            trapElement: this._element
        })
    }
    _addEventListeners() {
        N.on(this._element, nO, e => {
            if (e.key === jx) {
                if (!this._config.keyboard) {
                    N.trigger(this._element, Dh);
                    return
                }
                this.hide()
            }
        })
    }
    static jQueryInterface(e) {
        return this.each(function () {
            const i = Tn.getOrCreateInstance(this, e);
            if (typeof e == "string") {
                if (i[e] === void 0 || e.startsWith("_") || e === "constructor") throw new TypeError(`No method named "${e}"`);
                i[e](this)
            }
        })
    }
}
N.on(document, eO, rO, function (n) {
    const e = Qe(this);
    if (["A", "AREA"].includes(this.tagName) && n.preventDefault(), wn(this)) return;
    N.one(e, gp, () => {
        Wr(this) && this.focus()
    });
    const i = Z.findOne(_p);
    i && i !== e && Tn.getInstance(i).hide(), Tn.getOrCreateInstance(e).toggle(this)
});
N.on(window, Gx, () => {
    for (const n of Z.find(_p)) Tn.getOrCreateInstance(n).show()
});
N.on(window, tO, () => {
    for (const n of Z.find("[aria-modal][class*=show][class*=offcanvas-]")) getComputedStyle(n).position !== "fixed" && Tn.getOrCreateInstance(n).hide()
});
qs(Tn);
Ee(Tn);
const oO = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]),
    aO = /^aria-[\w-]*$/i,
    uO = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,
    lO = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
    cO = (n, e) => {
        const i = n.nodeName.toLowerCase();
        return e.includes(i) ? oO.has(i) ? Boolean(uO.test(n.nodeValue) || lO.test(n.nodeValue)) : !0 : e.filter(o => o instanceof RegExp).some(o => o.test(i))
    },
    vp = {
        "*": ["class", "dir", "id", "lang", "role", aO],
        a: ["target", "href", "title", "rel"],
        area: [],
        b: [],
        br: [],
        col: [],
        code: [],
        div: [],
        em: [],
        hr: [],
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        i: [],
        img: ["src", "srcset", "alt", "title", "width", "height"],
        li: [],
        ol: [],
        p: [],
        pre: [],
        s: [],
        small: [],
        span: [],
        sub: [],
        sup: [],
        strong: [],
        u: [],
        ul: []
    };

function fO(n, e, i) {
    if (!n.length) return n;
    if (i && typeof i == "function") return i(n);
    const a = new window.DOMParser().parseFromString(n, "text/html"),
        l = [].concat(...a.body.querySelectorAll("*"));
    for (const c of l) {
        const h = c.nodeName.toLowerCase();
        if (!Object.keys(e).includes(h)) {
            c.remove();
            continue
        }
        const _ = [].concat(...c.attributes),
            y = [].concat(e["*"] || [], e[h] || []);
        for (const b of _) cO(b, y) || c.removeAttribute(b.nodeName)
    }
    return a.body.innerHTML
}
const hO = "TemplateFactory",
    dO = {
        allowList: vp,
        content: {},
        extraClass: "",
        html: !1,
        sanitize: !0,
        sanitizeFn: null,
        template: "<div></div>"
    },
    pO = {
        allowList: "object",
        content: "object",
        extraClass: "(string|function)",
        html: "boolean",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        template: "string"
    },
    _O = {
        entry: "(string|element|function|null)",
        selector: "(string|element)"
    };
class gO extends Ai {
    constructor(e) {
        super(), this._config = this._getConfig(e)
    }
    static get Default() {
        return dO
    }
    static get DefaultType() {
        return pO
    }
    static get NAME() {
        return hO
    }
    getContent() {
        return Object.values(this._config.content).map(e => this._resolvePossibleFunction(e)).filter(Boolean)
    }
    hasContent() {
        return this.getContent().length > 0
    }
    changeContent(e) {
        return this._checkContent(e), this._config.content = {
            ...this._config.content,
            ...e
        }, this
    }
    toHtml() {
        const e = document.createElement("div");
        e.innerHTML = this._maybeSanitize(this._config.template);
        for (const [a, l] of Object.entries(this._config.content)) this._setContent(e, l, a);
        const i = e.children[0],
            o = this._resolvePossibleFunction(this._config.extraClass);
        return o && i.classList.add(...o.split(" ")), i
    }
    _typeCheckConfig(e) {
        super._typeCheckConfig(e), this._checkContent(e.content)
    }
    _checkContent(e) {
        for (const [i, o] of Object.entries(e)) super._typeCheckConfig({
            selector: i,
            entry: o
        }, _O)
    }
    _setContent(e, i, o) {
        const a = Z.findOne(o, e);
        if (!!a) {
            if (i = this._resolvePossibleFunction(i), !i) {
                a.remove();
                return
            }
            if (Ze(i)) {
                this._putElementInTemplate(An(i), a);
                return
            }
            if (this._config.html) {
                a.innerHTML = this._maybeSanitize(i);
                return
            }
            a.textContent = i
        }
    }
    _maybeSanitize(e) {
        return this._config.sanitize ? fO(e, this._config.allowList, this._config.sanitizeFn) : e
    }
    _resolvePossibleFunction(e) {
        return typeof e == "function" ? e(this) : e
    }
    _putElementInTemplate(e, i) {
        if (this._config.html) {
            i.innerHTML = "", i.append(e);
            return
        }
        i.textContent = e.textContent
    }
}
const vO = "tooltip",
    mO = new Set(["sanitize", "allowList", "sanitizeFn"]),
    Ya = "fade",
    EO = "modal",
    Ts = "show",
    bO = ".tooltip-inner",
    $h = `.${EO}`,
    Ph = "hide.bs.modal",
    li = "hover",
    za = "focus",
    yO = "click",
    AO = "manual",
    wO = "hide",
    TO = "hidden",
    xO = "show",
    OO = "shown",
    SO = "inserted",
    CO = "click",
    NO = "focusin",
    LO = "focusout",
    RO = "mouseenter",
    IO = "mouseleave",
    DO = {
        AUTO: "auto",
        TOP: "top",
        RIGHT: ve() ? "left" : "right",
        BOTTOM: "bottom",
        LEFT: ve() ? "right" : "left"
    },
    $O = {
        allowList: vp,
        animation: !0,
        boundary: "clippingParents",
        container: !1,
        customClass: "",
        delay: 0,
        fallbackPlacements: ["top", "right", "bottom", "left"],
        html: !1,
        offset: [0, 0],
        placement: "top",
        popperConfig: null,
        sanitize: !0,
        sanitizeFn: null,
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        title: "",
        trigger: "hover focus"
    },
    PO = {
        allowList: "object",
        animation: "boolean",
        boundary: "(string|element)",
        container: "(string|element|boolean)",
        customClass: "(string|function)",
        delay: "(number|object)",
        fallbackPlacements: "array",
        html: "boolean",
        offset: "(array|string|function)",
        placement: "(string|function)",
        popperConfig: "(null|object|function)",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        selector: "(string|boolean)",
        template: "string",
        title: "(string|element|function)",
        trigger: "string"
    };
class Hr extends Se {
    constructor(e, i) {
        if (typeof kd > "u") throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
        super(e, i), this._isEnabled = !0, this._timeout = 0, this._isHovered = !1, this._activeTrigger = {}, this._popper = null, this._templateFactory = null, this._newContent = null, this.tip = null, this._setListeners()
    }
    static get Default() {
        return $O
    }
    static get DefaultType() {
        return PO
    }
    static get NAME() {
        return vO
    }
    enable() {
        this._isEnabled = !0
    }
    disable() {
        this._isEnabled = !1
    }
    toggleEnabled() {
        this._isEnabled = !this._isEnabled
    }
    toggle(e) {
        if (!!this._isEnabled) {
            if (e) {
                const i = this._initializeOnDelegatedTarget(e);
                i._activeTrigger.click = !i._activeTrigger.click, i._isWithActiveTrigger() ? i._enter() : i._leave();
                return
            }
            if (this._isShown()) {
                this._leave();
                return
            }
            this._enter()
        }
    }
    dispose() {
        clearTimeout(this._timeout), N.off(this._element.closest($h), Ph, this._hideModalHandler), this.tip && this.tip.remove(), this._disposePopper(), super.dispose()
    }
    show() {
        if (this._element.style.display === "none") throw new Error("Please use show on visible elements");
        if (!(this._isWithContent() && this._isEnabled)) return;
        const e = N.trigger(this._element, this.constructor.eventName(xO)),
            o = (Yd(this._element) || this._element.ownerDocument.documentElement).contains(this._element);
        if (e.defaultPrevented || !o) return;
        this.tip && (this.tip.remove(), this.tip = null);
        const a = this._getTipElement();
        this._element.setAttribute("aria-describedby", a.getAttribute("id"));
        const {
            container: l
        } = this._config;
        if (this._element.ownerDocument.documentElement.contains(this.tip) || (l.append(a), N.trigger(this._element, this.constructor.eventName(SO))), this._popper ? this._popper.update() : this._popper = this._createPopper(a), a.classList.add(Ts), "ontouchstart" in document.documentElement)
            for (const h of [].concat(...document.body.children)) N.on(h, "mouseover", Ps);
        const c = () => {
            const h = this._isHovered;
            this._isHovered = !1, N.trigger(this._element, this.constructor.eventName(OO)), h && this._leave()
        };
        this._queueCallback(c, this.tip, this._isAnimated())
    }
    hide() {
        if (!this._isShown() || N.trigger(this._element, this.constructor.eventName(wO)).defaultPrevented) return;
        const i = this._getTipElement();
        if (i.classList.remove(Ts), "ontouchstart" in document.documentElement)
            for (const a of [].concat(...document.body.children)) N.off(a, "mouseover", Ps);
        this._activeTrigger[yO] = !1, this._activeTrigger[za] = !1, this._activeTrigger[li] = !1, this._isHovered = !1;
        const o = () => {
            this._isWithActiveTrigger() || (this._isHovered || i.remove(), this._element.removeAttribute("aria-describedby"), N.trigger(this._element, this.constructor.eventName(TO)), this._disposePopper())
        };
        this._queueCallback(o, this.tip, this._isAnimated())
    }
    update() {
        this._popper && this._popper.update()
    }
    _isWithContent() {
        return Boolean(this._getTitle())
    }
    _getTipElement() {
        return this.tip || (this.tip = this._createTipElement(this._newContent || this._getContentForTemplate())), this.tip
    }
    _createTipElement(e) {
        const i = this._getTemplateFactory(e).toHtml();
        if (!i) return null;
        i.classList.remove(Ya, Ts), i.classList.add(`bs-${this.constructor.NAME}-auto`);
        const o = yT(this.constructor.NAME).toString();
        return i.setAttribute("id", o), this._isAnimated() && i.classList.add(Ya), i
    }
    setContent(e) {
        this._newContent = e, this._isShown() && (this._disposePopper(), this.show())
    }
    _getTemplateFactory(e) {
        return this._templateFactory ? this._templateFactory.changeContent(e) : this._templateFactory = new gO({
            ...this._config,
            content: e,
            extraClass: this._resolvePossibleFunction(this._config.customClass)
        }), this._templateFactory
    }
    _getContentForTemplate() {
        return {
            [bO]: this._getTitle()
        }
    }
    _getTitle() {
        return this._resolvePossibleFunction(this._config.title) || this._config.originalTitle
    }
    _initializeOnDelegatedTarget(e) {
        return this.constructor.getOrCreateInstance(e.delegateTarget, this._getDelegateConfig())
    }
    _isAnimated() {
        return this._config.animation || this.tip && this.tip.classList.contains(Ya)
    }
    _isShown() {
        return this.tip && this.tip.classList.contains(Ts)
    }
    _createPopper(e) {
        const i = typeof this._config.placement == "function" ? this._config.placement.call(this, e, this._element) : this._config.placement,
            o = DO[i.toUpperCase()];
        return tl(this._element, e, this._getPopperConfig(o))
    }
    _getOffset() {
        const {
            offset: e
        } = this._config;
        return typeof e == "string" ? e.split(",").map(i => Number.parseInt(i, 10)) : typeof e == "function" ? i => e(i, this._element) : e
    }
    _resolvePossibleFunction(e) {
        return typeof e == "function" ? e.call(this._element) : e
    }
    _getPopperConfig(e) {
        const i = {
            placement: e,
            modifiers: [{
                name: "flip",
                options: {
                    fallbackPlacements: this._config.fallbackPlacements
                }
            }, {
                name: "offset",
                options: {
                    offset: this._getOffset()
                }
            }, {
                name: "preventOverflow",
                options: {
                    boundary: this._config.boundary
                }
            }, {
                name: "arrow",
                options: {
                    element: `.${this.constructor.NAME}-arrow`
                }
            }, {
                name: "preSetPlacement",
                enabled: !0,
                phase: "beforeMain",
                fn: o => {
                    this._getTipElement().setAttribute("data-popper-placement", o.state.placement)
                }
            }]
        };
        return {
            ...i,
            ...typeof this._config.popperConfig == "function" ? this._config.popperConfig(i) : this._config.popperConfig
        }
    }
    _setListeners() {
        const e = this._config.trigger.split(" ");
        for (const i of e)
            if (i === "click") N.on(this._element, this.constructor.eventName(CO), this._config.selector, o => this.toggle(o));
            else if (i !== AO) {
            const o = i === li ? this.constructor.eventName(RO) : this.constructor.eventName(NO),
                a = i === li ? this.constructor.eventName(IO) : this.constructor.eventName(LO);
            N.on(this._element, o, this._config.selector, l => {
                const c = this._initializeOnDelegatedTarget(l);
                c._activeTrigger[l.type === "focusin" ? za : li] = !0, c._enter()
            }), N.on(this._element, a, this._config.selector, l => {
                const c = this._initializeOnDelegatedTarget(l);
                c._activeTrigger[l.type === "focusout" ? za : li] = c._element.contains(l.relatedTarget), c._leave()
            })
        }
        this._hideModalHandler = () => {
            this._element && this.hide()
        }, N.on(this._element.closest($h), Ph, this._hideModalHandler), this._config.selector ? this._config = {
            ...this._config,
            trigger: "manual",
            selector: ""
        } : this._fixTitle()
    }
    _fixTitle() {
        const e = this._config.originalTitle;
        !e || (!this._element.getAttribute("aria-label") && !this._element.textContent.trim() && this._element.setAttribute("aria-label", e), this._element.removeAttribute("title"))
    }
    _enter() {
        if (this._isShown() || this._isHovered) {
            this._isHovered = !0;
            return
        }
        this._isHovered = !0, this._setTimeout(() => {
            this._isHovered && this.show()
        }, this._config.delay.show)
    }
    _leave() {
        this._isWithActiveTrigger() || (this._isHovered = !1, this._setTimeout(() => {
            this._isHovered || this.hide()
        }, this._config.delay.hide))
    }
    _setTimeout(e, i) {
        clearTimeout(this._timeout), this._timeout = setTimeout(e, i)
    }
    _isWithActiveTrigger() {
        return Object.values(this._activeTrigger).includes(!0)
    }
    _getConfig(e) {
        const i = tn.getDataAttributes(this._element);
        for (const o of Object.keys(i)) mO.has(o) && delete i[o];
        return e = {
            ...i,
            ...typeof e == "object" && e ? e : {}
        }, e = this._mergeConfigObj(e), e = this._configAfterMerge(e), this._typeCheckConfig(e), e
    }
    _configAfterMerge(e) {
        return e.container = e.container === !1 ? document.body : An(e.container), typeof e.delay == "number" && (e.delay = {
            show: e.delay,
            hide: e.delay
        }), e.originalTitle = this._element.getAttribute("title") || "", typeof e.title == "number" && (e.title = e.title.toString()), typeof e.content == "number" && (e.content = e.content.toString()), e
    }
    _getDelegateConfig() {
        const e = {};
        for (const i in this._config) this.constructor.Default[i] !== this._config[i] && (e[i] = this._config[i]);
        return e
    }
    _disposePopper() {
        this._popper && (this._popper.destroy(), this._popper = null)
    }
    static jQueryInterface(e) {
        return this.each(function () {
            const i = Hr.getOrCreateInstance(this, e);
            if (typeof e == "string") {
                if (typeof i[e] > "u") throw new TypeError(`No method named "${e}"`);
                i[e]()
            }
        })
    }
}
Ee(Hr);
const MO = "popover",
    BO = ".popover-header",
    WO = ".popover-body",
    FO = {
        ...Hr.Default,
        content: "",
        offset: [0, 8],
        placement: "right",
        template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
        trigger: "click"
    },
    HO = {
        ...Hr.DefaultType,
        content: "(null|string|element|function)"
    };
class il extends Hr {
    static get Default() {
        return FO
    }
    static get DefaultType() {
        return HO
    }
    static get NAME() {
        return MO
    }
    _isWithContent() {
        return this._getTitle() || this._getContent()
    }
    _getContentForTemplate() {
        return {
            [BO]: this._getTitle(),
            [WO]: this._getContent()
        }
    }
    _getContent() {
        return this._resolvePossibleFunction(this._config.content)
    }
    static jQueryInterface(e) {
        return this.each(function () {
            const i = il.getOrCreateInstance(this, e);
            if (typeof e == "string") {
                if (typeof i[e] > "u") throw new TypeError(`No method named "${e}"`);
                i[e]()
            }
        })
    }
}
Ee(il);
const UO = "scrollspy",
    kO = "bs.scrollspy",
    sl = `.${kO}`,
    VO = ".data-api",
    KO = `activate${sl}`,
    Mh = `click${sl}`,
    qO = `load${sl}${VO}`,
    YO = "dropdown-item",
    vr = "active",
    zO = '[data-bs-spy="scroll"]',
    Ga = "[href]",
    GO = ".nav, .list-group",
    Bh = ".nav-link",
    jO = ".nav-item",
    XO = ".list-group-item",
    JO = `${Bh}, ${jO} > ${Bh}, ${XO}`,
    QO = ".dropdown",
    ZO = ".dropdown-toggle",
    tS = {
        offset: null,
        rootMargin: "0px 0px -25%",
        smoothScroll: !1,
        target: null
    },
    eS = {
        offset: "(number|null)",
        rootMargin: "string",
        smoothScroll: "boolean",
        target: "element"
    };
class js extends Se {
    constructor(e, i) {
        super(e, i), this._targetLinks = new Map, this._observableSections = new Map, this._rootElement = getComputedStyle(this._element).overflowY === "visible" ? null : this._element, this._activeTarget = null, this._observer = null, this._previousScrollData = {
            visibleEntryTop: 0,
            parentScrollTop: 0
        }, this.refresh()
    }
    static get Default() {
        return tS
    }
    static get DefaultType() {
        return eS
    }
    static get NAME() {
        return UO
    }
    refresh() {
        this._initializeTargetsAndObservables(), this._maybeEnableSmoothScroll(), this._observer ? this._observer.disconnect() : this._observer = this._getNewObserver();
        for (const e of this._observableSections.values()) this._observer.observe(e)
    }
    dispose() {
        this._observer.disconnect(), super.dispose()
    }
    _configAfterMerge(e) {
        return e.target = An(e.target) || document.body, e
    }
    _maybeEnableSmoothScroll() {
        !this._config.smoothScroll || (N.off(this._config.target, Mh), N.on(this._config.target, Mh, Ga, e => {
            const i = this._observableSections.get(e.target.hash);
            if (i) {
                e.preventDefault();
                const o = this._rootElement || window,
                    a = i.offsetTop - this._element.offsetTop;
                if (o.scrollTo) {
                    o.scrollTo({
                        top: a,
                        behavior: "smooth"
                    });
                    return
                }
                o.scrollTop = a
            }
        }))
    }
    _getNewObserver() {
        const e = {
            root: this._rootElement,
            threshold: [.1, .5, 1],
            rootMargin: this._getRootMargin()
        };
        return new IntersectionObserver(i => this._observerCallback(i), e)
    }
    _observerCallback(e) {
        const i = c => this._targetLinks.get(`#${c.target.id}`),
            o = c => {
                this._previousScrollData.visibleEntryTop = c.target.offsetTop, this._process(i(c))
            },
            a = (this._rootElement || document.documentElement).scrollTop,
            l = a >= this._previousScrollData.parentScrollTop;
        this._previousScrollData.parentScrollTop = a;
        for (const c of e) {
            if (!c.isIntersecting) {
                this._activeTarget = null, this._clearActiveClass(i(c));
                continue
            }
            const h = c.target.offsetTop >= this._previousScrollData.visibleEntryTop;
            if (l && h) {
                if (o(c), !a) return;
                continue
            }!l && !h && o(c)
        }
    }
    _getRootMargin() {
        return this._config.offset ? `${this._config.offset}px 0px -30%` : this._config.rootMargin
    }
    _initializeTargetsAndObservables() {
        this._targetLinks = new Map, this._observableSections = new Map;
        const e = Z.find(Ga, this._config.target);
        for (const i of e) {
            if (!i.hash || wn(i)) continue;
            const o = Z.findOne(i.hash, this._element);
            Wr(o) && (this._targetLinks.set(i.hash, i), this._observableSections.set(i.hash, o))
        }
    }
    _process(e) {
        this._activeTarget !== e && (this._clearActiveClass(this._config.target), this._activeTarget = e, e.classList.add(vr), this._activateParents(e), N.trigger(this._element, KO, {
            relatedTarget: e
        }))
    }
    _activateParents(e) {
        if (e.classList.contains(YO)) {
            Z.findOne(ZO, e.closest(QO)).classList.add(vr);
            return
        }
        for (const i of Z.parents(e, GO))
            for (const o of Z.prev(i, JO)) o.classList.add(vr)
    }
    _clearActiveClass(e) {
        e.classList.remove(vr);
        const i = Z.find(`${Ga}.${vr}`, e);
        for (const o of i) o.classList.remove(vr)
    }
    static jQueryInterface(e) {
        return this.each(function () {
            const i = js.getOrCreateInstance(this, e);
            if (typeof e == "string") {
                if (i[e] === void 0 || e.startsWith("_") || e === "constructor") throw new TypeError(`No method named "${e}"`);
                i[e]()
            }
        })
    }
}
N.on(window, qO, () => {
    for (const n of Z.find(zO)) js.getOrCreateInstance(n)
});
Ee(js);
const nS = "tab",
    rS = "bs.tab",
    Jn = `.${rS}`,
    iS = `hide${Jn}`,
    sS = `hidden${Jn}`,
    oS = `show${Jn}`,
    aS = `shown${Jn}`,
    uS = `click${Jn}`,
    lS = `keydown${Jn}`,
    cS = `load${Jn}`,
    fS = "ArrowLeft",
    Wh = "ArrowRight",
    hS = "ArrowUp",
    Fh = "ArrowDown",
    bn = "active",
    Hh = "fade",
    ja = "show",
    dS = "dropdown",
    pS = ".dropdown-toggle",
    _S = ".dropdown-menu",
    gS = ".dropdown-item",
    Xa = ":not(.dropdown-toggle)",
    vS = '.list-group, .nav, [role="tablist"]',
    mS = ".nav-item, .list-group-item",
    ES = `.nav-link${Xa}, .list-group-item${Xa}, [role="tab"]${Xa}`,
    mp = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
    Ja = `${ES}, ${mp}`,
    bS = `.${bn}[data-bs-toggle="tab"], .${bn}[data-bs-toggle="pill"], .${bn}[data-bs-toggle="list"]`;
class Rr extends Se {
    constructor(e) {
        super(e), this._parent = this._element.closest(vS), this._parent && (this._setInitialAttributes(this._parent, this._getChildren()), N.on(this._element, lS, i => this._keydown(i)))
    }
    static get NAME() {
        return nS
    }
    show() {
        const e = this._element;
        if (this._elemIsActive(e)) return;
        const i = this._getActiveElem(),
            o = i ? N.trigger(i, iS, {
                relatedTarget: e
            }) : null;
        N.trigger(e, oS, {
            relatedTarget: i
        }).defaultPrevented || o && o.defaultPrevented || (this._deactivate(i, e), this._activate(e, i))
    }
    _activate(e, i) {
        if (!e) return;
        e.classList.add(bn), this._activate(Qe(e));
        const o = () => {
            if (e.getAttribute("role") !== "tab") {
                e.classList.add(ja);
                return
            }
            e.focus(), e.removeAttribute("tabindex"), e.setAttribute("aria-selected", !0), this._toggleDropDown(e, !0), N.trigger(e, aS, {
                relatedTarget: i
            })
        };
        this._queueCallback(o, e, e.classList.contains(Hh))
    }
    _deactivate(e, i) {
        if (!e) return;
        e.classList.remove(bn), e.blur(), this._deactivate(Qe(e));
        const o = () => {
            if (e.getAttribute("role") !== "tab") {
                e.classList.remove(ja);
                return
            }
            e.setAttribute("aria-selected", !1), e.setAttribute("tabindex", "-1"), this._toggleDropDown(e, !1), N.trigger(e, sS, {
                relatedTarget: i
            })
        };
        this._queueCallback(o, e, e.classList.contains(Hh))
    }
    _keydown(e) {
        if (![fS, Wh, hS, Fh].includes(e.key)) return;
        e.stopPropagation(), e.preventDefault();
        const i = [Wh, Fh].includes(e.key),
            o = el(this._getChildren().filter(a => !wn(a)), e.target, i, !0);
        o && Rr.getOrCreateInstance(o).show()
    }
    _getChildren() {
        return Z.find(Ja, this._parent)
    }
    _getActiveElem() {
        return this._getChildren().find(e => this._elemIsActive(e)) || null
    }
    _setInitialAttributes(e, i) {
        this._setAttributeIfNotExists(e, "role", "tablist");
        for (const o of i) this._setInitialAttributesOnChild(o)
    }
    _setInitialAttributesOnChild(e) {
        e = this._getInnerElement(e);
        const i = this._elemIsActive(e),
            o = this._getOuterElement(e);
        e.setAttribute("aria-selected", i), o !== e && this._setAttributeIfNotExists(o, "role", "presentation"), i || e.setAttribute("tabindex", "-1"), this._setAttributeIfNotExists(e, "role", "tab"), this._setInitialAttributesOnTargetPanel(e)
    }
    _setInitialAttributesOnTargetPanel(e) {
        const i = Qe(e);
        !i || (this._setAttributeIfNotExists(i, "role", "tabpanel"), e.id && this._setAttributeIfNotExists(i, "aria-labelledby", `#${e.id}`))
    }
    _toggleDropDown(e, i) {
        const o = this._getOuterElement(e);
        if (!o.classList.contains(dS)) return;
        const a = (l, c) => {
            const h = Z.findOne(l, o);
            h && h.classList.toggle(c, i)
        };
        a(pS, bn), a(_S, ja), a(gS, bn), o.setAttribute("aria-expanded", i)
    }
    _setAttributeIfNotExists(e, i, o) {
        e.hasAttribute(i) || e.setAttribute(i, o)
    }
    _elemIsActive(e) {
        return e.classList.contains(bn)
    }
    _getInnerElement(e) {
        return e.matches(Ja) ? e : Z.findOne(Ja, e)
    }
    _getOuterElement(e) {
        return e.closest(mS) || e
    }
    static jQueryInterface(e) {
        return this.each(function () {
            const i = Rr.getOrCreateInstance(this);
            if (typeof e == "string") {
                if (i[e] === void 0 || e.startsWith("_") || e === "constructor") throw new TypeError(`No method named "${e}"`);
                i[e]()
            }
        })
    }
}
N.on(document, uS, mp, function (n) {
    ["A", "AREA"].includes(this.tagName) && n.preventDefault(), !wn(this) && Rr.getOrCreateInstance(this).show()
});
N.on(window, cS, () => {
    for (const n of Z.find(bS)) Rr.getOrCreateInstance(n)
});
Ee(Rr);
const yS = "toast",
    AS = "bs.toast",
    Nn = `.${AS}`,
    wS = `mouseover${Nn}`,
    TS = `mouseout${Nn}`,
    xS = `focusin${Nn}`,
    OS = `focusout${Nn}`,
    SS = `hide${Nn}`,
    CS = `hidden${Nn}`,
    NS = `show${Nn}`,
    LS = `shown${Nn}`,
    RS = "fade",
    Uh = "hide",
    xs = "show",
    Os = "showing",
    IS = {
        animation: "boolean",
        autohide: "boolean",
        delay: "number"
    },
    DS = {
        animation: !0,
        autohide: !0,
        delay: 5e3
    };
class Xs extends Se {
    constructor(e, i) {
        super(e, i), this._timeout = null, this._hasMouseInteraction = !1, this._hasKeyboardInteraction = !1, this._setListeners()
    }
    static get Default() {
        return DS
    }
    static get DefaultType() {
        return IS
    }
    static get NAME() {
        return yS
    }
    show() {
        if (N.trigger(this._element, NS).defaultPrevented) return;
        this._clearTimeout(), this._config.animation && this._element.classList.add(RS);
        const i = () => {
            this._element.classList.remove(Os), N.trigger(this._element, LS), this._maybeScheduleHide()
        };
        this._element.classList.remove(Uh), yi(this._element), this._element.classList.add(xs, Os), this._queueCallback(i, this._element, this._config.animation)
    }
    hide() {
        if (!this.isShown() || N.trigger(this._element, SS).defaultPrevented) return;
        const i = () => {
            this._element.classList.add(Uh), this._element.classList.remove(Os, xs), N.trigger(this._element, CS)
        };
        this._element.classList.add(Os), this._queueCallback(i, this._element, this._config.animation)
    }
    dispose() {
        this._clearTimeout(), this.isShown() && this._element.classList.remove(xs), super.dispose()
    }
    isShown() {
        return this._element.classList.contains(xs)
    }
    _maybeScheduleHide() {
        !this._config.autohide || this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout(() => {
            this.hide()
        }, this._config.delay))
    }
    _onInteraction(e, i) {
        switch (e.type) {
            case "mouseover":
            case "mouseout":
                this._hasMouseInteraction = i;
                break;
            case "focusin":
            case "focusout":
                this._hasKeyboardInteraction = i;
                break
        }
        if (i) {
            this._clearTimeout();
            return
        }
        const o = e.relatedTarget;
        this._element === o || this._element.contains(o) || this._maybeScheduleHide()
    }
    _setListeners() {
        N.on(this._element, wS, e => this._onInteraction(e, !0)), N.on(this._element, TS, e => this._onInteraction(e, !1)), N.on(this._element, xS, e => this._onInteraction(e, !0)), N.on(this._element, OS, e => this._onInteraction(e, !1))
    }
    _clearTimeout() {
        clearTimeout(this._timeout), this._timeout = null
    }
    static jQueryInterface(e) {
        return this.each(function () {
            const i = Xs.getOrCreateInstance(this, e);
            if (typeof e == "string") {
                if (typeof i[e] > "u") throw new TypeError(`No method named "${e}"`);
                i[e](this)
            }
        })
    }
}
qs(Xs);
Ee(Xs);
var Ep = {
        exports: {}
    },
    ol = {
        exports: {}
    },
    bp = function (e, i) {
        return function () {
            for (var a = new Array(arguments.length), l = 0; l < a.length; l++) a[l] = arguments[l];
            return e.apply(i, a)
        }
    },
    $S = bp,
    al = Object.prototype.toString,
    ul = function (n) {
        return function (e) {
            var i = al.call(e);
            return n[i] || (n[i] = i.slice(8, -1).toLowerCase())
        }
    }(Object.create(null));

function Qn(n) {
    return n = n.toLowerCase(),
        function (i) {
            return ul(i) === n
        }
}

function ll(n) {
    return Array.isArray(n)
}

function Ws(n) {
    return typeof n > "u"
}

function PS(n) {
    return n !== null && !Ws(n) && n.constructor !== null && !Ws(n.constructor) && typeof n.constructor.isBuffer == "function" && n.constructor.isBuffer(n)
}
var yp = Qn("ArrayBuffer");

function MS(n) {
    var e;
    return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(n) : e = n && n.buffer && yp(n.buffer), e
}

function BS(n) {
    return typeof n == "string"
}

function WS(n) {
    return typeof n == "number"
}

function Ap(n) {
    return n !== null && typeof n == "object"
}

function Rs(n) {
    if (ul(n) !== "object") return !1;
    var e = Object.getPrototypeOf(n);
    return e === null || e === Object.prototype
}
var FS = Qn("Date"),
    HS = Qn("File"),
    US = Qn("Blob"),
    kS = Qn("FileList");

function cl(n) {
    return al.call(n) === "[object Function]"
}

function VS(n) {
    return Ap(n) && cl(n.pipe)
}

function KS(n) {
    var e = "[object FormData]";
    return n && (typeof FormData == "function" && n instanceof FormData || al.call(n) === e || cl(n.toString) && n.toString() === e)
}
var qS = Qn("URLSearchParams");

function YS(n) {
    return n.trim ? n.trim() : n.replace(/^\s+|\s+$/g, "")
}

function zS() {
    return typeof navigator < "u" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS") ? !1 : typeof window < "u" && typeof document < "u"
}

function fl(n, e) {
    if (!(n === null || typeof n > "u"))
        if (typeof n != "object" && (n = [n]), ll(n))
            for (var i = 0, o = n.length; i < o; i++) e.call(null, n[i], i, n);
        else
            for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && e.call(null, n[a], a, n)
}

function xu() {
    var n = {};

    function e(a, l) {
        Rs(n[l]) && Rs(a) ? n[l] = xu(n[l], a) : Rs(a) ? n[l] = xu({}, a) : ll(a) ? n[l] = a.slice() : n[l] = a
    }
    for (var i = 0, o = arguments.length; i < o; i++) fl(arguments[i], e);
    return n
}

function GS(n, e, i) {
    return fl(e, function (a, l) {
        i && typeof a == "function" ? n[l] = $S(a, i) : n[l] = a
    }), n
}

function jS(n) {
    return n.charCodeAt(0) === 65279 && (n = n.slice(1)), n
}

function XS(n, e, i, o) {
    n.prototype = Object.create(e.prototype, o), n.prototype.constructor = n, i && Object.assign(n.prototype, i)
}

function JS(n, e, i) {
    var o, a, l, c = {};
    e = e || {};
    do {
        for (o = Object.getOwnPropertyNames(n), a = o.length; a-- > 0;) l = o[a], c[l] || (e[l] = n[l], c[l] = !0);
        n = Object.getPrototypeOf(n)
    } while (n && (!i || i(n, e)) && n !== Object.prototype);
    return e
}

function QS(n, e, i) {
    n = String(n), (i === void 0 || i > n.length) && (i = n.length), i -= e.length;
    var o = n.indexOf(e, i);
    return o !== -1 && o === i
}

function ZS(n) {
    if (!n) return null;
    var e = n.length;
    if (Ws(e)) return null;
    for (var i = new Array(e); e-- > 0;) i[e] = n[e];
    return i
}
var tC = function (n) {
        return function (e) {
            return n && e instanceof n
        }
    }(typeof Uint8Array < "u" && Object.getPrototypeOf(Uint8Array)),
    Rt = {
        isArray: ll,
        isArrayBuffer: yp,
        isBuffer: PS,
        isFormData: KS,
        isArrayBufferView: MS,
        isString: BS,
        isNumber: WS,
        isObject: Ap,
        isPlainObject: Rs,
        isUndefined: Ws,
        isDate: FS,
        isFile: HS,
        isBlob: US,
        isFunction: cl,
        isStream: VS,
        isURLSearchParams: qS,
        isStandardBrowserEnv: zS,
        forEach: fl,
        merge: xu,
        extend: GS,
        trim: YS,
        stripBOM: jS,
        inherits: XS,
        toFlatObject: JS,
        kindOf: ul,
        kindOfTest: Qn,
        endsWith: QS,
        toArray: ZS,
        isTypedArray: tC,
        isFileList: kS
    },
    mr = Rt;

function kh(n) {
    return encodeURIComponent(n).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
}
var wp = function (e, i, o) {
        if (!i) return e;
        var a;
        if (o) a = o(i);
        else if (mr.isURLSearchParams(i)) a = i.toString();
        else {
            var l = [];
            mr.forEach(i, function (_, y) {
                _ === null || typeof _ > "u" || (mr.isArray(_) ? y = y + "[]" : _ = [_], mr.forEach(_, function (S) {
                    mr.isDate(S) ? S = S.toISOString() : mr.isObject(S) && (S = JSON.stringify(S)), l.push(kh(y) + "=" + kh(S))
                }))
            }), a = l.join("&")
        }
        if (a) {
            var c = e.indexOf("#");
            c !== -1 && (e = e.slice(0, c)), e += (e.indexOf("?") === -1 ? "?" : "&") + a
        }
        return e
    },
    eC = Rt;

function Js() {
    this.handlers = []
}
Js.prototype.use = function (e, i, o) {
    return this.handlers.push({
        fulfilled: e,
        rejected: i,
        synchronous: o ? o.synchronous : !1,
        runWhen: o ? o.runWhen : null
    }), this.handlers.length - 1
};
Js.prototype.eject = function (e) {
    this.handlers[e] && (this.handlers[e] = null)
};
Js.prototype.forEach = function (e) {
    eC.forEach(this.handlers, function (o) {
        o !== null && e(o)
    })
};
var nC = Js,
    rC = Rt,
    iC = function (e, i) {
        rC.forEach(e, function (a, l) {
            l !== i && l.toUpperCase() === i.toUpperCase() && (e[i] = a, delete e[l])
        })
    },
    Tp = Rt;

function Ir(n, e, i, o, a) {
    Error.call(this), this.message = n, this.name = "AxiosError", e && (this.code = e), i && (this.config = i), o && (this.request = o), a && (this.response = a)
}
Tp.inherits(Ir, Error, {
    toJSON: function () {
        return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: this.config,
            code: this.code,
            status: this.response && this.response.status ? this.response.status : null
        }
    }
});
var xp = Ir.prototype,
    Op = {};
["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED"].forEach(function (n) {
    Op[n] = {
        value: n
    }
});
Object.defineProperties(Ir, Op);
Object.defineProperty(xp, "isAxiosError", {
    value: !0
});
Ir.from = function (n, e, i, o, a, l) {
    var c = Object.create(xp);
    return Tp.toFlatObject(n, c, function (_) {
        return _ !== Error.prototype
    }), Ir.call(c, n.message, e, i, o, a), c.name = n.name, l && Object.assign(c, l), c
};
var Ur = Ir,
    Sp = {
        silentJSONParsing: !0,
        forcedJSONParsing: !0,
        clarifyTimeoutError: !1
    },
    xe = Rt;

function sC(n, e) {
    e = e || new FormData;
    var i = [];

    function o(l) {
        return l === null ? "" : xe.isDate(l) ? l.toISOString() : xe.isArrayBuffer(l) || xe.isTypedArray(l) ? typeof Blob == "function" ? new Blob([l]) : Buffer.from(l) : l
    }

    function a(l, c) {
        if (xe.isPlainObject(l) || xe.isArray(l)) {
            if (i.indexOf(l) !== -1) throw Error("Circular reference detected in " + c);
            i.push(l), xe.forEach(l, function (_, y) {
                if (!xe.isUndefined(_)) {
                    var b = c ? c + "." + y : y,
                        S;
                    if (_ && !c && typeof _ == "object") {
                        if (xe.endsWith(y, "{}")) _ = JSON.stringify(_);
                        else if (xe.endsWith(y, "[]") && (S = xe.toArray(_))) {
                            S.forEach(function (T) {
                                !xe.isUndefined(T) && e.append(b, o(T))
                            });
                            return
                        }
                    }
                    a(_, b)
                }
            }), i.pop()
        } else e.append(c, o(l))
    }
    return a(n), e
}
var Cp = sC,
    Qa, Vh;

function oC() {
    if (Vh) return Qa;
    Vh = 1;
    var n = Ur;
    return Qa = function (i, o, a) {
        var l = a.config.validateStatus;
        !a.status || !l || l(a.status) ? i(a) : o(new n("Request failed with status code " + a.status, [n.ERR_BAD_REQUEST, n.ERR_BAD_RESPONSE][Math.floor(a.status / 100) - 4], a.config, a.request, a))
    }, Qa
}
var Za, Kh;

function aC() {
    if (Kh) return Za;
    Kh = 1;
    var n = Rt;
    return Za = n.isStandardBrowserEnv() ? function () {
        return {
            write: function (o, a, l, c, h, _) {
                var y = [];
                y.push(o + "=" + encodeURIComponent(a)), n.isNumber(l) && y.push("expires=" + new Date(l).toGMTString()), n.isString(c) && y.push("path=" + c), n.isString(h) && y.push("domain=" + h), _ === !0 && y.push("secure"), document.cookie = y.join("; ")
            },
            read: function (o) {
                var a = document.cookie.match(new RegExp("(^|;\\s*)(" + o + ")=([^;]*)"));
                return a ? decodeURIComponent(a[3]) : null
            },
            remove: function (o) {
                this.write(o, "", Date.now() - 864e5)
            }
        }
    }() : function () {
        return {
            write: function () {},
            read: function () {
                return null
            },
            remove: function () {}
        }
    }(), Za
}
var uC = function (e) {
        return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)
    },
    lC = function (e, i) {
        return i ? e.replace(/\/+$/, "") + "/" + i.replace(/^\/+/, "") : e
    },
    cC = uC,
    fC = lC,
    Np = function (e, i) {
        return e && !cC(i) ? fC(e, i) : i
    },
    tu, qh;

function hC() {
    if (qh) return tu;
    qh = 1;
    var n = Rt,
        e = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
    return tu = function (o) {
        var a = {},
            l, c, h;
        return o && n.forEach(o.split(`
`), function (y) {
            if (h = y.indexOf(":"), l = n.trim(y.substr(0, h)).toLowerCase(), c = n.trim(y.substr(h + 1)), l) {
                if (a[l] && e.indexOf(l) >= 0) return;
                l === "set-cookie" ? a[l] = (a[l] ? a[l] : []).concat([c]) : a[l] = a[l] ? a[l] + ", " + c : c
            }
        }), a
    }, tu
}
var eu, Yh;

function dC() {
    if (Yh) return eu;
    Yh = 1;
    var n = Rt;
    return eu = n.isStandardBrowserEnv() ? function () {
        var i = /(msie|trident)/i.test(navigator.userAgent),
            o = document.createElement("a"),
            a;

        function l(c) {
            var h = c;
            return i && (o.setAttribute("href", h), h = o.href), o.setAttribute("href", h), {
                href: o.href,
                protocol: o.protocol ? o.protocol.replace(/:$/, "") : "",
                host: o.host,
                search: o.search ? o.search.replace(/^\?/, "") : "",
                hash: o.hash ? o.hash.replace(/^#/, "") : "",
                hostname: o.hostname,
                port: o.port,
                pathname: o.pathname.charAt(0) === "/" ? o.pathname : "/" + o.pathname
            }
        }
        return a = l(window.location.href),
            function (h) {
                var _ = n.isString(h) ? l(h) : h;
                return _.protocol === a.protocol && _.host === a.host
            }
    }() : function () {
        return function () {
            return !0
        }
    }(), eu
}
var nu, zh;

function Qs() {
    if (zh) return nu;
    zh = 1;
    var n = Ur,
        e = Rt;

    function i(o) {
        n.call(this, o == null ? "canceled" : o, n.ERR_CANCELED), this.name = "CanceledError"
    }
    return e.inherits(i, n, {
        __CANCEL__: !0
    }), nu = i, nu
}
var ru, Gh;

function pC() {
    return Gh || (Gh = 1, ru = function (e) {
        var i = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
        return i && i[1] || ""
    }), ru
}
var iu, jh;

function Xh() {
    if (jh) return iu;
    jh = 1;
    var n = Rt,
        e = oC(),
        i = aC(),
        o = wp,
        a = Np,
        l = hC(),
        c = dC(),
        h = Sp,
        _ = Ur,
        y = Qs(),
        b = pC();
    return iu = function (T) {
        return new Promise(function (Y, W) {
            var L = T.data,
                P = T.headers,
                U = T.responseType,
                F;

            function B() {
                T.cancelToken && T.cancelToken.unsubscribe(F), T.signal && T.signal.removeEventListener("abort", F)
            }
            n.isFormData(L) && n.isStandardBrowserEnv() && delete P["Content-Type"];
            var R = new XMLHttpRequest;
            if (T.auth) {
                var z = T.auth.username || "",
                    et = T.auth.password ? unescape(encodeURIComponent(T.auth.password)) : "";
                P.Authorization = "Basic " + btoa(z + ":" + et)
            }
            var st = a(T.baseURL, T.url);
            R.open(T.method.toUpperCase(), o(st, T.params, T.paramsSerializer), !0), R.timeout = T.timeout;

            function ut() {
                if (!!R) {
                    var lt = "getAllResponseHeaders" in R ? l(R.getAllResponseHeaders()) : null,
                        ht = !U || U === "text" || U === "json" ? R.responseText : R.response,
                        xt = {
                            data: ht,
                            status: R.status,
                            statusText: R.statusText,
                            headers: lt,
                            config: T,
                            request: R
                        };
                    e(function (yt) {
                        Y(yt), B()
                    }, function (yt) {
                        W(yt), B()
                    }, xt), R = null
                }
            }
            if ("onloadend" in R ? R.onloadend = ut : R.onreadystatechange = function () {
                    !R || R.readyState !== 4 || R.status === 0 && !(R.responseURL && R.responseURL.indexOf("file:") === 0) || setTimeout(ut)
                }, R.onabort = function () {
                    !R || (W(new _("Request aborted", _.ECONNABORTED, T, R)), R = null)
                }, R.onerror = function () {
                    W(new _("Network Error", _.ERR_NETWORK, T, R, R)), R = null
                }, R.ontimeout = function () {
                    var ht = T.timeout ? "timeout of " + T.timeout + "ms exceeded" : "timeout exceeded",
                        xt = T.transitional || h;
                    T.timeoutErrorMessage && (ht = T.timeoutErrorMessage), W(new _(ht, xt.clarifyTimeoutError ? _.ETIMEDOUT : _.ECONNABORTED, T, R)), R = null
                }, n.isStandardBrowserEnv()) {
                var ft = (T.withCredentials || c(st)) && T.xsrfCookieName ? i.read(T.xsrfCookieName) : void 0;
                ft && (P[T.xsrfHeaderName] = ft)
            }
            "setRequestHeader" in R && n.forEach(P, function (ht, xt) {
                typeof L > "u" && xt.toLowerCase() === "content-type" ? delete P[xt] : R.setRequestHeader(xt, ht)
            }), n.isUndefined(T.withCredentials) || (R.withCredentials = !!T.withCredentials), U && U !== "json" && (R.responseType = T.responseType), typeof T.onDownloadProgress == "function" && R.addEventListener("progress", T.onDownloadProgress), typeof T.onUploadProgress == "function" && R.upload && R.upload.addEventListener("progress", T.onUploadProgress), (T.cancelToken || T.signal) && (F = function (lt) {
                !R || (W(!lt || lt && lt.type ? new y : lt), R.abort(), R = null)
            }, T.cancelToken && T.cancelToken.subscribe(F), T.signal && (T.signal.aborted ? F() : T.signal.addEventListener("abort", F))), L || (L = null);
            var gt = b(st);
            if (gt && ["http", "https", "file"].indexOf(gt) === -1) {
                W(new _("Unsupported protocol " + gt + ":", _.ERR_BAD_REQUEST, T));
                return
            }
            R.send(L)
        })
    }, iu
}
var su, Jh;

function _C() {
    return Jh || (Jh = 1, su = null), su
}
var St = Rt,
    Qh = iC,
    Zh = Ur,
    gC = Sp,
    vC = Cp,
    mC = {
        "Content-Type": "application/x-www-form-urlencoded"
    };

function td(n, e) {
    !St.isUndefined(n) && St.isUndefined(n["Content-Type"]) && (n["Content-Type"] = e)
}

function EC() {
    var n;
    return (typeof XMLHttpRequest < "u" || typeof process < "u" && Object.prototype.toString.call(process) === "[object process]") && (n = Xh()), n
}

function bC(n, e, i) {
    if (St.isString(n)) try {
        return (e || JSON.parse)(n), St.trim(n)
    } catch (o) {
        if (o.name !== "SyntaxError") throw o
    }
    return (i || JSON.stringify)(n)
}
var Zs = {
    transitional: gC,
    adapter: EC(),
    transformRequest: [function (e, i) {
        if (Qh(i, "Accept"), Qh(i, "Content-Type"), St.isFormData(e) || St.isArrayBuffer(e) || St.isBuffer(e) || St.isStream(e) || St.isFile(e) || St.isBlob(e)) return e;
        if (St.isArrayBufferView(e)) return e.buffer;
        if (St.isURLSearchParams(e)) return td(i, "application/x-www-form-urlencoded;charset=utf-8"), e.toString();
        var o = St.isObject(e),
            a = i && i["Content-Type"],
            l;
        if ((l = St.isFileList(e)) || o && a === "multipart/form-data") {
            var c = this.env && this.env.FormData;
            return vC(l ? {
                "files[]": e
            } : e, c && new c)
        } else if (o || a === "application/json") return td(i, "application/json"), bC(e);
        return e
    }],
    transformResponse: [function (e) {
        var i = this.transitional || Zs.transitional,
            o = i && i.silentJSONParsing,
            a = i && i.forcedJSONParsing,
            l = !o && this.responseType === "json";
        if (l || a && St.isString(e) && e.length) try {
            return JSON.parse(e)
        } catch (c) {
            if (l) throw c.name === "SyntaxError" ? Zh.from(c, Zh.ERR_BAD_RESPONSE, this, null, this.response) : c
        }
        return e
    }],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
        FormData: _C()
    },
    validateStatus: function (e) {
        return e >= 200 && e < 300
    },
    headers: {
        common: {
            Accept: "application/json, text/plain, */*"
        }
    }
};
St.forEach(["delete", "get", "head"], function (e) {
    Zs.headers[e] = {}
});
St.forEach(["post", "put", "patch"], function (e) {
    Zs.headers[e] = St.merge(mC)
});
var hl = Zs,
    yC = Rt,
    AC = hl,
    wC = function (e, i, o) {
        var a = this || AC;
        return yC.forEach(o, function (c) {
            e = c.call(a, e, i)
        }), e
    },
    ou, ed;

function Lp() {
    return ed || (ed = 1, ou = function (e) {
        return !!(e && e.__CANCEL__)
    }), ou
}
var nd = Rt,
    au = wC,
    TC = Lp(),
    xC = hl,
    OC = Qs();

function uu(n) {
    if (n.cancelToken && n.cancelToken.throwIfRequested(), n.signal && n.signal.aborted) throw new OC
}
var SC = function (e) {
        uu(e), e.headers = e.headers || {}, e.data = au.call(e, e.data, e.headers, e.transformRequest), e.headers = nd.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers), nd.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function (a) {
            delete e.headers[a]
        });
        var i = e.adapter || xC.adapter;
        return i(e).then(function (a) {
            return uu(e), a.data = au.call(e, a.data, a.headers, e.transformResponse), a
        }, function (a) {
            return TC(a) || (uu(e), a && a.response && (a.response.data = au.call(e, a.response.data, a.response.headers, e.transformResponse))), Promise.reject(a)
        })
    },
    ie = Rt,
    Rp = function (e, i) {
        i = i || {};
        var o = {};

        function a(b, S) {
            return ie.isPlainObject(b) && ie.isPlainObject(S) ? ie.merge(b, S) : ie.isPlainObject(S) ? ie.merge({}, S) : ie.isArray(S) ? S.slice() : S
        }

        function l(b) {
            if (ie.isUndefined(i[b])) {
                if (!ie.isUndefined(e[b])) return a(void 0, e[b])
            } else return a(e[b], i[b])
        }

        function c(b) {
            if (!ie.isUndefined(i[b])) return a(void 0, i[b])
        }

        function h(b) {
            if (ie.isUndefined(i[b])) {
                if (!ie.isUndefined(e[b])) return a(void 0, e[b])
            } else return a(void 0, i[b])
        }

        function _(b) {
            if (b in i) return a(e[b], i[b]);
            if (b in e) return a(void 0, e[b])
        }
        var y = {
            url: c,
            method: c,
            data: c,
            baseURL: h,
            transformRequest: h,
            transformResponse: h,
            paramsSerializer: h,
            timeout: h,
            timeoutMessage: h,
            withCredentials: h,
            adapter: h,
            responseType: h,
            xsrfCookieName: h,
            xsrfHeaderName: h,
            onUploadProgress: h,
            onDownloadProgress: h,
            decompress: h,
            maxContentLength: h,
            maxBodyLength: h,
            beforeRedirect: h,
            transport: h,
            httpAgent: h,
            httpsAgent: h,
            cancelToken: h,
            socketPath: h,
            responseEncoding: h,
            validateStatus: _
        };
        return ie.forEach(Object.keys(e).concat(Object.keys(i)), function (S) {
            var T = y[S] || l,
                I = T(S);
            ie.isUndefined(I) && T !== _ || (o[S] = I)
        }), o
    },
    lu, rd;

function Ip() {
    return rd || (rd = 1, lu = {
        version: "0.27.2"
    }), lu
}
var CC = Ip().version,
    En = Ur,
    dl = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(function (n, e) {
    dl[n] = function (o) {
        return typeof o === n || "a" + (e < 1 ? "n " : " ") + n
    }
});
var id = {};
dl.transitional = function (e, i, o) {
    function a(l, c) {
        return "[Axios v" + CC + "] Transitional option '" + l + "'" + c + (o ? ". " + o : "")
    }
    return function (l, c, h) {
        if (e === !1) throw new En(a(c, " has been removed" + (i ? " in " + i : "")), En.ERR_DEPRECATED);
        return i && !id[c] && (id[c] = !0, console.warn(a(c, " has been deprecated since v" + i + " and will be removed in the near future"))), e ? e(l, c, h) : !0
    }
};

function NC(n, e, i) {
    if (typeof n != "object") throw new En("options must be an object", En.ERR_BAD_OPTION_VALUE);
    for (var o = Object.keys(n), a = o.length; a-- > 0;) {
        var l = o[a],
            c = e[l];
        if (c) {
            var h = n[l],
                _ = h === void 0 || c(h, l, n);
            if (_ !== !0) throw new En("option " + l + " must be " + _, En.ERR_BAD_OPTION_VALUE);
            continue
        }
        if (i !== !0) throw new En("Unknown option " + l, En.ERR_BAD_OPTION)
    }
}
var LC = {
        assertOptions: NC,
        validators: dl
    },
    Dp = Rt,
    RC = wp,
    sd = nC,
    od = SC,
    to = Rp,
    IC = Np,
    $p = LC,
    Er = $p.validators;

function Dr(n) {
    this.defaults = n, this.interceptors = {
        request: new sd,
        response: new sd
    }
}
Dr.prototype.request = function (e, i) {
    typeof e == "string" ? (i = i || {}, i.url = e) : i = e || {}, i = to(this.defaults, i), i.method ? i.method = i.method.toLowerCase() : this.defaults.method ? i.method = this.defaults.method.toLowerCase() : i.method = "get";
    var o = i.transitional;
    o !== void 0 && $p.assertOptions(o, {
        silentJSONParsing: Er.transitional(Er.boolean),
        forcedJSONParsing: Er.transitional(Er.boolean),
        clarifyTimeoutError: Er.transitional(Er.boolean)
    }, !1);
    var a = [],
        l = !0;
    this.interceptors.request.forEach(function (I) {
        typeof I.runWhen == "function" && I.runWhen(i) === !1 || (l = l && I.synchronous, a.unshift(I.fulfilled, I.rejected))
    });
    var c = [];
    this.interceptors.response.forEach(function (I) {
        c.push(I.fulfilled, I.rejected)
    });
    var h;
    if (!l) {
        var _ = [od, void 0];
        for (Array.prototype.unshift.apply(_, a), _ = _.concat(c), h = Promise.resolve(i); _.length;) h = h.then(_.shift(), _.shift());
        return h
    }
    for (var y = i; a.length;) {
        var b = a.shift(),
            S = a.shift();
        try {
            y = b(y)
        } catch (T) {
            S(T);
            break
        }
    }
    try {
        h = od(y)
    } catch (T) {
        return Promise.reject(T)
    }
    for (; c.length;) h = h.then(c.shift(), c.shift());
    return h
};
Dr.prototype.getUri = function (e) {
    e = to(this.defaults, e);
    var i = IC(e.baseURL, e.url);
    return RC(i, e.params, e.paramsSerializer)
};
Dp.forEach(["delete", "get", "head", "options"], function (e) {
    Dr.prototype[e] = function (i, o) {
        return this.request(to(o || {}, {
            method: e,
            url: i,
            data: (o || {}).data
        }))
    }
});
Dp.forEach(["post", "put", "patch"], function (e) {
    function i(o) {
        return function (l, c, h) {
            return this.request(to(h || {}, {
                method: e,
                headers: o ? {
                    "Content-Type": "multipart/form-data"
                } : {},
                url: l,
                data: c
            }))
        }
    }
    Dr.prototype[e] = i(), Dr.prototype[e + "Form"] = i(!0)
});
var DC = Dr,
    cu, ad;

function $C() {
    if (ad) return cu;
    ad = 1;
    var n = Qs();

    function e(i) {
        if (typeof i != "function") throw new TypeError("executor must be a function.");
        var o;
        this.promise = new Promise(function (c) {
            o = c
        });
        var a = this;
        this.promise.then(function (l) {
            if (!!a._listeners) {
                var c, h = a._listeners.length;
                for (c = 0; c < h; c++) a._listeners[c](l);
                a._listeners = null
            }
        }), this.promise.then = function (l) {
            var c, h = new Promise(function (_) {
                a.subscribe(_), c = _
            }).then(l);
            return h.cancel = function () {
                a.unsubscribe(c)
            }, h
        }, i(function (c) {
            a.reason || (a.reason = new n(c), o(a.reason))
        })
    }
    return e.prototype.throwIfRequested = function () {
        if (this.reason) throw this.reason
    }, e.prototype.subscribe = function (o) {
        if (this.reason) {
            o(this.reason);
            return
        }
        this._listeners ? this._listeners.push(o) : this._listeners = [o]
    }, e.prototype.unsubscribe = function (o) {
        if (!!this._listeners) {
            var a = this._listeners.indexOf(o);
            a !== -1 && this._listeners.splice(a, 1)
        }
    }, e.source = function () {
        var o, a = new e(function (c) {
            o = c
        });
        return {
            token: a,
            cancel: o
        }
    }, cu = e, cu
}
var fu, ud;

function PC() {
    return ud || (ud = 1, fu = function (e) {
        return function (o) {
            return e.apply(null, o)
        }
    }), fu
}
var hu, ld;

function MC() {
    if (ld) return hu;
    ld = 1;
    var n = Rt;
    return hu = function (i) {
        return n.isObject(i) && i.isAxiosError === !0
    }, hu
}
var cd = Rt,
    BC = bp,
    Is = DC,
    WC = Rp,
    FC = hl;

function Pp(n) {
    var e = new Is(n),
        i = BC(Is.prototype.request, e);
    return cd.extend(i, Is.prototype, e), cd.extend(i, e), i.create = function (a) {
        return Pp(WC(n, a))
    }, i
}
var zt = Pp(FC);
zt.Axios = Is;
zt.CanceledError = Qs();
zt.CancelToken = $C();
zt.isCancel = Lp();
zt.VERSION = Ip().version;
zt.toFormData = Cp;
zt.AxiosError = Ur;
zt.Cancel = zt.CanceledError;
zt.all = function (e) {
    return Promise.all(e)
};
zt.spread = PC();
zt.isAxiosError = MC();
ol.exports = zt;
ol.exports.default = zt;
(function (n) {
    n.exports = ol.exports
})(Ep);
const HC = Lw(Ep.exports);
window._ = Rw;
window.axios = HC;
window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
var Ou = !1,
    Su = !1,
    Kn = [];

function UC(n) {
    kC(n)
}

function kC(n) {
    Kn.includes(n) || Kn.push(n), VC()
}

function Mp(n) {
    let e = Kn.indexOf(n);
    e !== -1 && Kn.splice(e, 1)
}

function VC() {
    !Su && !Ou && (Ou = !0, queueMicrotask(KC))
}

function KC() {
    Ou = !1, Su = !0;
    for (let n = 0; n < Kn.length; n++) Kn[n]();
    Kn.length = 0, Su = !1
}
var kr, xi, eo, Bp, Cu = !0;

function qC(n) {
    Cu = !1, n(), Cu = !0
}

function YC(n) {
    kr = n.reactive, eo = n.release, xi = e => n.effect(e, {
        scheduler: i => {
            Cu ? UC(i) : i()
        }
    }), Bp = n.raw
}

function fd(n) {
    xi = n
}

function zC(n) {
    let e = () => {};
    return [o => {
        let a = xi(o);
        return n._x_effects || (n._x_effects = new Set, n._x_runEffects = () => {
            n._x_effects.forEach(l => l())
        }), n._x_effects.add(a), e = () => {
            a !== void 0 && (n._x_effects.delete(a), eo(a))
        }, a
    }, () => {
        e()
    }]
}
var Wp = [],
    Fp = [],
    Hp = [];

function GC(n) {
    Hp.push(n)
}

function Up(n, e) {
    typeof e == "function" ? (n._x_cleanups || (n._x_cleanups = []), n._x_cleanups.push(e)) : (e = n, Fp.push(e))
}

function jC(n) {
    Wp.push(n)
}

function XC(n, e, i) {
    n._x_attributeCleanups || (n._x_attributeCleanups = {}), n._x_attributeCleanups[e] || (n._x_attributeCleanups[e] = []), n._x_attributeCleanups[e].push(i)
}

function kp(n, e) {
    !n._x_attributeCleanups || Object.entries(n._x_attributeCleanups).forEach(([i, o]) => {
        (e === void 0 || e.includes(i)) && (o.forEach(a => a()), delete n._x_attributeCleanups[i])
    })
}
var pl = new MutationObserver(vl),
    _l = !1;

function Vp() {
    pl.observe(document, {
        subtree: !0,
        childList: !0,
        attributes: !0,
        attributeOldValue: !0
    }), _l = !0
}

function JC() {
    QC(), pl.disconnect(), _l = !1
}
var _i = [],
    du = !1;

function QC() {
    _i = _i.concat(pl.takeRecords()), _i.length && !du && (du = !0, queueMicrotask(() => {
        ZC(), du = !1
    }))
}

function ZC() {
    vl(_i), _i.length = 0
}

function Ct(n) {
    if (!_l) return n();
    JC();
    let e = n();
    return Vp(), e
}
var gl = !1,
    Fs = [];

function t1() {
    gl = !0
}

function e1() {
    gl = !1, vl(Fs), Fs = []
}

function vl(n) {
    if (gl) {
        Fs = Fs.concat(n);
        return
    }
    let e = [],
        i = [],
        o = new Map,
        a = new Map;
    for (let l = 0; l < n.length; l++)
        if (!n[l].target._x_ignoreMutationObserver && (n[l].type === "childList" && (n[l].addedNodes.forEach(c => c.nodeType === 1 && e.push(c)), n[l].removedNodes.forEach(c => c.nodeType === 1 && i.push(c))), n[l].type === "attributes")) {
            let c = n[l].target,
                h = n[l].attributeName,
                _ = n[l].oldValue,
                y = () => {
                    o.has(c) || o.set(c, []), o.get(c).push({
                        name: h,
                        value: c.getAttribute(h)
                    })
                },
                b = () => {
                    a.has(c) || a.set(c, []), a.get(c).push(h)
                };
            c.hasAttribute(h) && _ === null ? y() : c.hasAttribute(h) ? (b(), y()) : b()
        } a.forEach((l, c) => {
        kp(c, l)
    }), o.forEach((l, c) => {
        Wp.forEach(h => h(c, l))
    });
    for (let l of i)
        if (!e.includes(l) && (Fp.forEach(c => c(l)), l._x_cleanups))
            for (; l._x_cleanups.length;) l._x_cleanups.pop()();
    e.forEach(l => {
        l._x_ignoreSelf = !0, l._x_ignore = !0
    });
    for (let l of e) i.includes(l) || !l.isConnected || (delete l._x_ignoreSelf, delete l._x_ignore, Hp.forEach(c => c(l)), l._x_ignore = !0, l._x_ignoreSelf = !0);
    e.forEach(l => {
        delete l._x_ignoreSelf, delete l._x_ignore
    }), e = null, i = null, o = null, a = null
}

function Kp(n) {
    return Si($r(n))
}

function Oi(n, e, i) {
    return n._x_dataStack = [e, ...$r(i || n)], () => {
        n._x_dataStack = n._x_dataStack.filter(o => o !== e)
    }
}

function hd(n, e) {
    let i = n._x_dataStack[0];
    Object.entries(e).forEach(([o, a]) => {
        i[o] = a
    })
}

function $r(n) {
    return n._x_dataStack ? n._x_dataStack : typeof ShadowRoot == "function" && n instanceof ShadowRoot ? $r(n.host) : n.parentNode ? $r(n.parentNode) : []
}

function Si(n) {
    let e = new Proxy({}, {
        ownKeys: () => Array.from(new Set(n.flatMap(i => Object.keys(i)))),
        has: (i, o) => n.some(a => a.hasOwnProperty(o)),
        get: (i, o) => (n.find(a => {
            if (a.hasOwnProperty(o)) {
                let l = Object.getOwnPropertyDescriptor(a, o);
                if (l.get && l.get._x_alreadyBound || l.set && l.set._x_alreadyBound) return !0;
                if ((l.get || l.set) && l.enumerable) {
                    let c = l.get,
                        h = l.set,
                        _ = l;
                    c = c && c.bind(e), h = h && h.bind(e), c && (c._x_alreadyBound = !0), h && (h._x_alreadyBound = !0), Object.defineProperty(a, o, {
                        ..._,
                        get: c,
                        set: h
                    })
                }
                return !0
            }
            return !1
        }) || {})[o],
        set: (i, o, a) => {
            let l = n.find(c => c.hasOwnProperty(o));
            return l ? l[o] = a : n[n.length - 1][o] = a, !0
        }
    });
    return e
}

function qp(n) {
    let e = o => typeof o == "object" && !Array.isArray(o) && o !== null,
        i = (o, a = "") => {
            Object.entries(Object.getOwnPropertyDescriptors(o)).forEach(([l, {
                value: c,
                enumerable: h
            }]) => {
                if (h === !1 || c === void 0) return;
                let _ = a === "" ? l : `${a}.${l}`;
                typeof c == "object" && c !== null && c._x_interceptor ? o[l] = c.initialize(n, _, l) : e(c) && c !== o && !(c instanceof Element) && i(c, _)
            })
        };
    return i(n)
}

function Yp(n, e = () => {}) {
    let i = {
        initialValue: void 0,
        _x_interceptor: !0,
        initialize(o, a, l) {
            return n(this.initialValue, () => n1(o, a), c => Nu(o, a, c), a, l)
        }
    };
    return e(i), o => {
        if (typeof o == "object" && o !== null && o._x_interceptor) {
            let a = i.initialize.bind(i);
            i.initialize = (l, c, h) => {
                let _ = o.initialize(l, c, h);
                return i.initialValue = _, a(l, c, h)
            }
        } else i.initialValue = o;
        return i
    }
}

function n1(n, e) {
    return e.split(".").reduce((i, o) => i[o], n)
}

function Nu(n, e, i) {
    if (typeof e == "string" && (e = e.split(".")), e.length === 1) n[e[0]] = i;
    else {
        if (e.length === 0) throw error;
        return n[e[0]] || (n[e[0]] = {}), Nu(n[e[0]], e.slice(1), i)
    }
}
var zp = {};

function Ce(n, e) {
    zp[n] = e
}

function Lu(n, e) {
    return Object.entries(zp).forEach(([i, o]) => {
        Object.defineProperty(n, `$${i}`, {
            get() {
                let [a, l] = Zp(e);
                return a = {
                    interceptor: Yp,
                    ...a
                }, Up(e, l), o(e, a)
            },
            enumerable: !1
        })
    }), n
}

function r1(n, e, i, ...o) {
    try {
        return i(...o)
    } catch (a) {
        Ei(a, n, e)
    }
}

function Ei(n, e, i = void 0) {
    Object.assign(n, {
        el: e,
        expression: i
    }), console.warn(`Alpine Expression Error: ${n.message}

${i?'Expression: "'+i+`"

`:""}`, e), setTimeout(() => {
        throw n
    }, 0)
}
var Ds = !0;

function i1(n) {
    let e = Ds;
    Ds = !1, n(), Ds = e
}

function Tr(n, e, i = {}) {
    let o;
    return Ut(n, e)(a => o = a, i), o
}

function Ut(...n) {
    return Gp(...n)
}
var Gp = jp;

function s1(n) {
    Gp = n
}

function jp(n, e) {
    let i = {};
    Lu(i, n);
    let o = [i, ...$r(n)];
    if (typeof e == "function") return o1(o, e);
    let a = u1(o, e, n);
    return r1.bind(null, n, e, a)
}

function o1(n, e) {
    return (i = () => {}, {
        scope: o = {},
        params: a = []
    } = {}) => {
        let l = e.apply(Si([o, ...n]), a);
        Hs(i, l)
    }
}
var pu = {};

function a1(n, e) {
    if (pu[n]) return pu[n];
    let i = Object.getPrototypeOf(async function () {}).constructor,
        o = /^[\n\s]*if.*\(.*\)/.test(n) || /^(let|const)\s/.test(n) ? `(() => { ${n} })()` : n,
        l = (() => {
            try {
                return new i(["__self", "scope"], `with (scope) { __self.result = ${o} }; __self.finished = true; return __self.result;`)
            } catch (c) {
                return Ei(c, e, n), Promise.resolve()
            }
        })();
    return pu[n] = l, l
}

function u1(n, e, i) {
    let o = a1(e, i);
    return (a = () => {}, {
        scope: l = {},
        params: c = []
    } = {}) => {
        o.result = void 0, o.finished = !1;
        let h = Si([l, ...n]);
        if (typeof o == "function") {
            let _ = o(o, h).catch(y => Ei(y, i, e));
            o.finished ? (Hs(a, o.result, h, c, i), o.result = void 0) : _.then(y => {
                Hs(a, y, h, c, i)
            }).catch(y => Ei(y, i, e)).finally(() => o.result = void 0)
        }
    }
}

function Hs(n, e, i, o, a) {
    if (Ds && typeof e == "function") {
        let l = e.apply(i, o);
        l instanceof Promise ? l.then(c => Hs(n, c, i, o)).catch(c => Ei(c, a, e)) : n(l)
    } else n(e)
}
var ml = "x-";

function Vr(n = "") {
    return ml + n
}

function l1(n) {
    ml = n
}
var Xp = {};

function bt(n, e) {
    Xp[n] = e
}

function El(n, e, i) {
    if (e = Array.from(e), n._x_virtualDirectives) {
        let l = Object.entries(n._x_virtualDirectives).map(([h, _]) => ({
                name: h,
                value: _
            })),
            c = Jp(l);
        l = l.map(h => c.find(_ => _.name === h.name) ? {
            name: `x-bind:${h.name}`,
            value: `"${h.value}"`
        } : h), e = e.concat(l)
    }
    let o = {};
    return e.map(n_((l, c) => o[l] = c)).filter(i_).map(h1(o, i)).sort(d1).map(l => f1(n, l))
}

function Jp(n) {
    return Array.from(n).map(n_()).filter(e => !i_(e))
}
var Ru = !1,
    hi = new Map,
    Qp = Symbol();

function c1(n) {
    Ru = !0;
    let e = Symbol();
    Qp = e, hi.set(e, []);
    let i = () => {
            for (; hi.get(e).length;) hi.get(e).shift()();
            hi.delete(e)
        },
        o = () => {
            Ru = !1, i()
        };
    n(i), o()
}

function Zp(n) {
    let e = [],
        i = h => e.push(h),
        [o, a] = zC(n);
    return e.push(a), [{
        Alpine: Ci,
        effect: o,
        cleanup: i,
        evaluateLater: Ut.bind(Ut, n),
        evaluate: Tr.bind(Tr, n)
    }, () => e.forEach(h => h())]
}

function f1(n, e) {
    let i = () => {},
        o = Xp[e.type] || i,
        [a, l] = Zp(n);
    XC(n, e.original, l);
    let c = () => {
        n._x_ignore || n._x_ignoreSelf || (o.inline && o.inline(n, e, a), o = o.bind(o, n, e, a), Ru ? hi.get(Qp).push(o) : o())
    };
    return c.runCleanups = l, c
}
var t_ = (n, e) => ({
        name: i,
        value: o
    }) => (i.startsWith(n) && (i = i.replace(n, e)), {
        name: i,
        value: o
    }),
    e_ = n => n;

function n_(n = () => {}) {
    return ({
        name: e,
        value: i
    }) => {
        let {
            name: o,
            value: a
        } = r_.reduce((l, c) => c(l), {
            name: e,
            value: i
        });
        return o !== e && n(o, e), {
            name: o,
            value: a
        }
    }
}
var r_ = [];

function bl(n) {
    r_.push(n)
}

function i_({
    name: n
}) {
    return s_().test(n)
}
var s_ = () => new RegExp(`^${ml}([^:^.]+)\\b`);

function h1(n, e) {
    return ({
        name: i,
        value: o
    }) => {
        let a = i.match(s_()),
            l = i.match(/:([a-zA-Z0-9\-:]+)/),
            c = i.match(/\.[^.\]]+(?=[^\]]*$)/g) || [],
            h = e || n[i] || i;
        return {
            type: a ? a[1] : null,
            value: l ? l[1] : null,
            modifiers: c.map(_ => _.replace(".", "")),
            expression: o,
            original: h
        }
    }
}
var Iu = "DEFAULT",
    Ss = ["ignore", "ref", "data", "id", "bind", "init", "for", "mask", "model", "modelable", "transition", "show", "if", Iu, "teleport"];

function d1(n, e) {
    let i = Ss.indexOf(n.type) === -1 ? Iu : n.type,
        o = Ss.indexOf(e.type) === -1 ? Iu : e.type;
    return Ss.indexOf(i) - Ss.indexOf(o)
}

function gi(n, e, i = {}) {
    n.dispatchEvent(new CustomEvent(e, {
        detail: i,
        bubbles: !0,
        composed: !0,
        cancelable: !0
    }))
}
var Du = [],
    yl = !1;

function o_(n = () => {}) {
    return queueMicrotask(() => {
        yl || setTimeout(() => {
            $u()
        })
    }), new Promise(e => {
        Du.push(() => {
            n(), e()
        })
    })
}

function $u() {
    for (yl = !1; Du.length;) Du.shift()()
}

function p1() {
    yl = !0
}

function jn(n, e) {
    if (typeof ShadowRoot == "function" && n instanceof ShadowRoot) {
        Array.from(n.children).forEach(a => jn(a, e));
        return
    }
    let i = !1;
    if (e(n, () => i = !0), i) return;
    let o = n.firstElementChild;
    for (; o;) jn(o, e), o = o.nextElementSibling
}

function Pr(n, ...e) {
    console.warn(`Alpine Warning: ${n}`, ...e)
}

function _1() {
    document.body || Pr("Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?"), gi(document, "alpine:init"), gi(document, "alpine:initializing"), Vp(), GC(e => xn(e, jn)), Up(e => v1(e)), jC((e, i) => {
        El(e, i).forEach(o => o())
    });
    let n = e => !no(e.parentElement, !0);
    Array.from(document.querySelectorAll(l_())).filter(n).forEach(e => {
        xn(e)
    }), gi(document, "alpine:initialized")
}
var Al = [],
    a_ = [];

function u_() {
    return Al.map(n => n())
}

function l_() {
    return Al.concat(a_).map(n => n())
}

function c_(n) {
    Al.push(n)
}

function f_(n) {
    a_.push(n)
}

function no(n, e = !1) {
    return ro(n, i => {
        if ((e ? l_() : u_()).some(a => i.matches(a))) return !0
    })
}

function ro(n, e) {
    if (!!n) {
        if (e(n)) return n;
        if (n._x_teleportBack && (n = n._x_teleportBack), !!n.parentElement) return ro(n.parentElement, e)
    }
}

function g1(n) {
    return u_().some(e => n.matches(e))
}

function xn(n, e = jn) {
    c1(() => {
        e(n, (i, o) => {
            El(i, i.attributes).forEach(a => a()), i._x_ignore && o()
        })
    })
}

function v1(n) {
    jn(n, e => kp(e))
}

function wl(n, e) {
    return Array.isArray(e) ? dd(n, e.join(" ")) : typeof e == "object" && e !== null ? m1(n, e) : typeof e == "function" ? wl(n, e()) : dd(n, e)
}

function dd(n, e) {
    let i = a => a.split(" ").filter(l => !n.classList.contains(l)).filter(Boolean),
        o = a => (n.classList.add(...a), () => {
            n.classList.remove(...a)
        });
    return e = e === !0 ? e = "" : e || "", o(i(e))
}

function m1(n, e) {
    let i = h => h.split(" ").filter(Boolean),
        o = Object.entries(e).flatMap(([h, _]) => _ ? i(h) : !1).filter(Boolean),
        a = Object.entries(e).flatMap(([h, _]) => _ ? !1 : i(h)).filter(Boolean),
        l = [],
        c = [];
    return a.forEach(h => {
        n.classList.contains(h) && (n.classList.remove(h), c.push(h))
    }), o.forEach(h => {
        n.classList.contains(h) || (n.classList.add(h), l.push(h))
    }), () => {
        c.forEach(h => n.classList.add(h)), l.forEach(h => n.classList.remove(h))
    }
}

function io(n, e) {
    return typeof e == "object" && e !== null ? E1(n, e) : b1(n, e)
}

function E1(n, e) {
    let i = {};
    return Object.entries(e).forEach(([o, a]) => {
        i[o] = n.style[o], o.startsWith("--") || (o = y1(o)), n.style.setProperty(o, a)
    }), setTimeout(() => {
        n.style.length === 0 && n.removeAttribute("style")
    }), () => {
        io(n, i)
    }
}

function b1(n, e) {
    let i = n.getAttribute("style", e);
    return n.setAttribute("style", e), () => {
        n.setAttribute("style", i || "")
    }
}

function y1(n) {
    return n.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
}

function Pu(n, e = () => {}) {
    let i = !1;
    return function () {
        i ? e.apply(this, arguments) : (i = !0, n.apply(this, arguments))
    }
}
bt("transition", (n, {
    value: e,
    modifiers: i,
    expression: o
}, {
    evaluate: a
}) => {
    typeof o == "function" && (o = a(o)), o ? A1(n, o, e) : w1(n, i, e)
});

function A1(n, e, i) {
    h_(n, wl, ""), {
        enter: a => {
            n._x_transition.enter.during = a
        },
        "enter-start": a => {
            n._x_transition.enter.start = a
        },
        "enter-end": a => {
            n._x_transition.enter.end = a
        },
        leave: a => {
            n._x_transition.leave.during = a
        },
        "leave-start": a => {
            n._x_transition.leave.start = a
        },
        "leave-end": a => {
            n._x_transition.leave.end = a
        }
    } [i](e)
}

function w1(n, e, i) {
    h_(n, io);
    let o = !e.includes("in") && !e.includes("out") && !i,
        a = o || e.includes("in") || ["enter"].includes(i),
        l = o || e.includes("out") || ["leave"].includes(i);
    e.includes("in") && !o && (e = e.filter((P, U) => U < e.indexOf("out"))), e.includes("out") && !o && (e = e.filter((P, U) => U > e.indexOf("out")));
    let c = !e.includes("opacity") && !e.includes("scale"),
        h = c || e.includes("opacity"),
        _ = c || e.includes("scale"),
        y = h ? 0 : 1,
        b = _ ? ci(e, "scale", 95) / 100 : 1,
        S = ci(e, "delay", 0),
        T = ci(e, "origin", "center"),
        I = "opacity, transform",
        Y = ci(e, "duration", 150) / 1e3,
        W = ci(e, "duration", 75) / 1e3,
        L = "cubic-bezier(0.4, 0.0, 0.2, 1)";
    a && (n._x_transition.enter.during = {
        transformOrigin: T,
        transitionDelay: S,
        transitionProperty: I,
        transitionDuration: `${Y}s`,
        transitionTimingFunction: L
    }, n._x_transition.enter.start = {
        opacity: y,
        transform: `scale(${b})`
    }, n._x_transition.enter.end = {
        opacity: 1,
        transform: "scale(1)"
    }), l && (n._x_transition.leave.during = {
        transformOrigin: T,
        transitionDelay: S,
        transitionProperty: I,
        transitionDuration: `${W}s`,
        transitionTimingFunction: L
    }, n._x_transition.leave.start = {
        opacity: 1,
        transform: "scale(1)"
    }, n._x_transition.leave.end = {
        opacity: y,
        transform: `scale(${b})`
    })
}

function h_(n, e, i = {}) {
    n._x_transition || (n._x_transition = {
        enter: {
            during: i,
            start: i,
            end: i
        },
        leave: {
            during: i,
            start: i,
            end: i
        },
        in (o = () => {}, a = () => {}) {
            Mu(n, e, {
                during: this.enter.during,
                start: this.enter.start,
                end: this.enter.end
            }, o, a)
        },
        out(o = () => {}, a = () => {}) {
            Mu(n, e, {
                during: this.leave.during,
                start: this.leave.start,
                end: this.leave.end
            }, o, a)
        }
    })
}
window.Element.prototype._x_toggleAndCascadeWithTransitions = function (n, e, i, o) {
    const a = document.visibilityState === "visible" ? requestAnimationFrame : setTimeout;
    let l = () => a(i);
    if (e) {
        n._x_transition && (n._x_transition.enter || n._x_transition.leave) ? n._x_transition.enter && (Object.entries(n._x_transition.enter.during).length || Object.entries(n._x_transition.enter.start).length || Object.entries(n._x_transition.enter.end).length) ? n._x_transition.in(i) : l() : n._x_transition ? n._x_transition.in(i) : l();
        return
    }
    n._x_hidePromise = n._x_transition ? new Promise((c, h) => {
        n._x_transition.out(() => {}, () => c(o)), n._x_transitioning.beforeCancel(() => h({
            isFromCancelledTransition: !0
        }))
    }) : Promise.resolve(o), queueMicrotask(() => {
        let c = d_(n);
        c ? (c._x_hideChildren || (c._x_hideChildren = []), c._x_hideChildren.push(n)) : a(() => {
            let h = _ => {
                let y = Promise.all([_._x_hidePromise, ...(_._x_hideChildren || []).map(h)]).then(([b]) => b());
                return delete _._x_hidePromise, delete _._x_hideChildren, y
            };
            h(n).catch(_ => {
                if (!_.isFromCancelledTransition) throw _
            })
        })
    })
};

function d_(n) {
    let e = n.parentNode;
    if (!!e) return e._x_hidePromise ? e : d_(e)
}

function Mu(n, e, {
    during: i,
    start: o,
    end: a
} = {}, l = () => {}, c = () => {}) {
    if (n._x_transitioning && n._x_transitioning.cancel(), Object.keys(i).length === 0 && Object.keys(o).length === 0 && Object.keys(a).length === 0) {
        l(), c();
        return
    }
    let h, _, y;
    T1(n, {
        start() {
            h = e(n, o)
        },
        during() {
            _ = e(n, i)
        },
        before: l,
        end() {
            h(), y = e(n, a)
        },
        after: c,
        cleanup() {
            _(), y()
        }
    })
}

function T1(n, e) {
    let i, o, a, l = Pu(() => {
        Ct(() => {
            i = !0, o || e.before(), a || (e.end(), $u()), e.after(), n.isConnected && e.cleanup(), delete n._x_transitioning
        })
    });
    n._x_transitioning = {
        beforeCancels: [],
        beforeCancel(c) {
            this.beforeCancels.push(c)
        },
        cancel: Pu(function () {
            for (; this.beforeCancels.length;) this.beforeCancels.shift()();
            l()
        }),
        finish: l
    }, Ct(() => {
        e.start(), e.during()
    }), p1(), requestAnimationFrame(() => {
        if (i) return;
        let c = Number(getComputedStyle(n).transitionDuration.replace(/,.*/, "").replace("s", "")) * 1e3,
            h = Number(getComputedStyle(n).transitionDelay.replace(/,.*/, "").replace("s", "")) * 1e3;
        c === 0 && (c = Number(getComputedStyle(n).animationDuration.replace("s", "")) * 1e3), Ct(() => {
            e.before()
        }), o = !0, requestAnimationFrame(() => {
            i || (Ct(() => {
                e.end()
            }), $u(), setTimeout(n._x_transitioning.finish, c + h), a = !0)
        })
    })
}

function ci(n, e, i) {
    if (n.indexOf(e) === -1) return i;
    const o = n[n.indexOf(e) + 1];
    if (!o || e === "scale" && isNaN(o)) return i;
    if (e === "duration") {
        let a = o.match(/([0-9]+)ms/);
        if (a) return a[1]
    }
    return e === "origin" && ["top", "right", "left", "center", "bottom"].includes(n[n.indexOf(e) + 2]) ? [o, n[n.indexOf(e) + 2]].join(" ") : o
}
var Bu = !1;

function so(n, e = () => {}) {
    return (...i) => Bu ? e(...i) : n(...i)
}

function x1(n, e) {
    e._x_dataStack || (e._x_dataStack = n._x_dataStack), Bu = !0, S1(() => {
        O1(e)
    }), Bu = !1
}

function O1(n) {
    let e = !1;
    xn(n, (o, a) => {
        jn(o, (l, c) => {
            if (e && g1(l)) return c();
            e = !0, a(l, c)
        })
    })
}

function S1(n) {
    let e = xi;
    fd((i, o) => {
        let a = e(i);
        return eo(a), () => {}
    }), n(), fd(e)
}

function p_(n, e, i, o = []) {
    switch (n._x_bindings || (n._x_bindings = kr({})), n._x_bindings[e] = i, e = o.includes("camel") ? $1(e) : e, e) {
        case "value":
            C1(n, i);
            break;
        case "style":
            L1(n, i);
            break;
        case "class":
            N1(n, i);
            break;
        default:
            R1(n, e, i);
            break
    }
}

function C1(n, e) {
    if (n.type === "radio") n.attributes.value === void 0 && (n.value = e), window.fromModel && (n.checked = pd(n.value, e));
    else if (n.type === "checkbox") Number.isInteger(e) ? n.value = e : !Number.isInteger(e) && !Array.isArray(e) && typeof e != "boolean" && ![null, void 0].includes(e) ? n.value = String(e) : Array.isArray(e) ? n.checked = e.some(i => pd(i, n.value)) : n.checked = !!e;
    else if (n.tagName === "SELECT") D1(n, e);
    else {
        if (n.value === e) return;
        n.value = e
    }
}

function N1(n, e) {
    n._x_undoAddedClasses && n._x_undoAddedClasses(), n._x_undoAddedClasses = wl(n, e)
}

function L1(n, e) {
    n._x_undoAddedStyles && n._x_undoAddedStyles(), n._x_undoAddedStyles = io(n, e)
}

function R1(n, e, i) {
    [null, void 0, !1].includes(i) && P1(e) ? n.removeAttribute(e) : (__(e) && (i = e), I1(n, e, i))
}

function I1(n, e, i) {
    n.getAttribute(e) != i && n.setAttribute(e, i)
}

function D1(n, e) {
    const i = [].concat(e).map(o => o + "");
    Array.from(n.options).forEach(o => {
        o.selected = i.includes(o.value)
    })
}

function $1(n) {
    return n.toLowerCase().replace(/-(\w)/g, (e, i) => i.toUpperCase())
}

function pd(n, e) {
    return n == e
}

function __(n) {
    return ["disabled", "checked", "required", "readonly", "hidden", "open", "selected", "autofocus", "itemscope", "multiple", "novalidate", "allowfullscreen", "allowpaymentrequest", "formnovalidate", "autoplay", "controls", "loop", "muted", "playsinline", "default", "ismap", "reversed", "async", "defer", "nomodule"].includes(n)
}

function P1(n) {
    return !["aria-pressed", "aria-checked", "aria-expanded", "aria-selected"].includes(n)
}

function M1(n, e, i) {
    if (n._x_bindings && n._x_bindings[e] !== void 0) return n._x_bindings[e];
    let o = n.getAttribute(e);
    return o === null ? typeof i == "function" ? i() : i : __(e) ? !![e, "true"].includes(o) : o === "" ? !0 : o
}

function g_(n, e) {
    var i;
    return function () {
        var o = this,
            a = arguments,
            l = function () {
                i = null, n.apply(o, a)
            };
        clearTimeout(i), i = setTimeout(l, e)
    }
}

function v_(n, e) {
    let i;
    return function () {
        let o = this,
            a = arguments;
        i || (n.apply(o, a), i = !0, setTimeout(() => i = !1, e))
    }
}

function B1(n) {
    n(Ci)
}
var kn = {},
    _d = !1;

function W1(n, e) {
    if (_d || (kn = kr(kn), _d = !0), e === void 0) return kn[n];
    kn[n] = e, typeof e == "object" && e !== null && e.hasOwnProperty("init") && typeof e.init == "function" && kn[n].init(), qp(kn[n])
}

function F1() {
    return kn
}
var m_ = {};

function H1(n, e) {
    let i = typeof e != "function" ? () => e : e;
    n instanceof Element ? E_(n, i()) : m_[n] = i
}

function U1(n) {
    return Object.entries(m_).forEach(([e, i]) => {
        Object.defineProperty(n, e, {
            get() {
                return (...o) => i(...o)
            }
        })
    }), n
}

function E_(n, e, i) {
    let o = [];
    for (; o.length;) o.pop()();
    let a = Object.entries(e).map(([c, h]) => ({
            name: c,
            value: h
        })),
        l = Jp(a);
    a = a.map(c => l.find(h => h.name === c.name) ? {
        name: `x-bind:${c.name}`,
        value: `"${c.value}"`
    } : c), El(n, a, i).map(c => {
        o.push(c.runCleanups), c()
    })
}
var b_ = {};

function k1(n, e) {
    b_[n] = e
}

function V1(n, e) {
    return Object.entries(b_).forEach(([i, o]) => {
        Object.defineProperty(n, i, {
            get() {
                return (...a) => o.bind(e)(...a)
            },
            enumerable: !1
        })
    }), n
}
var K1 = {
        get reactive() {
            return kr
        },
        get release() {
            return eo
        },
        get effect() {
            return xi
        },
        get raw() {
            return Bp
        },
        version: "3.10.3",
        flushAndStopDeferringMutations: e1,
        dontAutoEvaluateFunctions: i1,
        disableEffectScheduling: qC,
        setReactivityEngine: YC,
        closestDataStack: $r,
        skipDuringClone: so,
        addRootSelector: c_,
        addInitSelector: f_,
        addScopeToNode: Oi,
        deferMutations: t1,
        mapAttributes: bl,
        evaluateLater: Ut,
        setEvaluator: s1,
        mergeProxies: Si,
        findClosest: ro,
        closestRoot: no,
        interceptor: Yp,
        transition: Mu,
        setStyles: io,
        mutateDom: Ct,
        directive: bt,
        throttle: v_,
        debounce: g_,
        evaluate: Tr,
        initTree: xn,
        nextTick: o_,
        prefixed: Vr,
        prefix: l1,
        plugin: B1,
        magic: Ce,
        store: W1,
        start: _1,
        clone: x1,
        bound: M1,
        $data: Kp,
        data: k1,
        bind: H1
    },
    Ci = K1;

function q1(n, e) {
    const i = Object.create(null),
        o = n.split(",");
    for (let a = 0; a < o.length; a++) i[o[a]] = !0;
    return e ? a => !!i[a.toLowerCase()] : a => !!i[a]
}
var Y1 = Object.freeze({});
Object.freeze([]);
var y_ = Object.assign,
    z1 = Object.prototype.hasOwnProperty,
    oo = (n, e) => z1.call(n, e),
    qn = Array.isArray,
    vi = n => A_(n) === "[object Map]",
    G1 = n => typeof n == "string",
    Tl = n => typeof n == "symbol",
    ao = n => n !== null && typeof n == "object",
    j1 = Object.prototype.toString,
    A_ = n => j1.call(n),
    w_ = n => A_(n).slice(8, -1),
    xl = n => G1(n) && n !== "NaN" && n[0] !== "-" && "" + parseInt(n, 10) === n,
    X1 = n => {
        const e = Object.create(null);
        return i => e[i] || (e[i] = n(i))
    },
    J1 = X1(n => n.charAt(0).toUpperCase() + n.slice(1)),
    T_ = (n, e) => n !== e && (n === n || e === e),
    Wu = new WeakMap,
    fi = [],
    De, Yn = Symbol("iterate"),
    Fu = Symbol("Map key iterate");

function Q1(n) {
    return n && n._isEffect === !0
}

function Z1(n, e = Y1) {
    Q1(n) && (n = n.raw);
    const i = nN(n, e);
    return e.lazy || i(), i
}

function tN(n) {
    n.active && (x_(n), n.options.onStop && n.options.onStop(), n.active = !1)
}
var eN = 0;

function nN(n, e) {
    const i = function () {
        if (!i.active) return n();
        if (!fi.includes(i)) {
            x_(i);
            try {
                return iN(), fi.push(i), De = i, n()
            } finally {
                fi.pop(), O_(), De = fi[fi.length - 1]
            }
        }
    };
    return i.id = eN++, i.allowRecurse = !!e.allowRecurse, i._isEffect = !0, i.active = !0, i.raw = n, i.deps = [], i.options = e, i
}

function x_(n) {
    const {
        deps: e
    } = n;
    if (e.length) {
        for (let i = 0; i < e.length; i++) e[i].delete(n);
        e.length = 0
    }
}
var Mr = !0,
    Ol = [];

function rN() {
    Ol.push(Mr), Mr = !1
}

function iN() {
    Ol.push(Mr), Mr = !0
}

function O_() {
    const n = Ol.pop();
    Mr = n === void 0 ? !0 : n
}

function Oe(n, e, i) {
    if (!Mr || De === void 0) return;
    let o = Wu.get(n);
    o || Wu.set(n, o = new Map);
    let a = o.get(i);
    a || o.set(i, a = new Set), a.has(De) || (a.add(De), De.deps.push(a), De.options.onTrack && De.options.onTrack({
        effect: De,
        target: n,
        type: e,
        key: i
    }))
}

function On(n, e, i, o, a, l) {
    const c = Wu.get(n);
    if (!c) return;
    const h = new Set,
        _ = b => {
            b && b.forEach(S => {
                (S !== De || S.allowRecurse) && h.add(S)
            })
        };
    if (e === "clear") c.forEach(_);
    else if (i === "length" && qn(n)) c.forEach((b, S) => {
        (S === "length" || S >= o) && _(b)
    });
    else switch (i !== void 0 && _(c.get(i)), e) {
        case "add":
            qn(n) ? xl(i) && _(c.get("length")) : (_(c.get(Yn)), vi(n) && _(c.get(Fu)));
            break;
        case "delete":
            qn(n) || (_(c.get(Yn)), vi(n) && _(c.get(Fu)));
            break;
        case "set":
            vi(n) && _(c.get(Yn));
            break
    }
    const y = b => {
        b.options.onTrigger && b.options.onTrigger({
            effect: b,
            target: n,
            key: i,
            type: e,
            newValue: o,
            oldValue: a,
            oldTarget: l
        }), b.options.scheduler ? b.options.scheduler(b) : b()
    };
    h.forEach(y)
}
var sN = q1("__proto__,__v_isRef,__isVue"),
    S_ = new Set(Object.getOwnPropertyNames(Symbol).map(n => Symbol[n]).filter(Tl)),
    oN = uo(),
    aN = uo(!1, !0),
    uN = uo(!0),
    lN = uo(!0, !0),
    Us = {};
["includes", "indexOf", "lastIndexOf"].forEach(n => {
    const e = Array.prototype[n];
    Us[n] = function (...i) {
        const o = pt(this);
        for (let l = 0, c = this.length; l < c; l++) Oe(o, "get", l + "");
        const a = e.apply(o, i);
        return a === -1 || a === !1 ? e.apply(o, i.map(pt)) : a
    }
});
["push", "pop", "shift", "unshift", "splice"].forEach(n => {
    const e = Array.prototype[n];
    Us[n] = function (...i) {
        rN();
        const o = e.apply(this, i);
        return O_(), o
    }
});

function uo(n = !1, e = !1) {
    return function (o, a, l) {
        if (a === "__v_isReactive") return !n;
        if (a === "__v_isReadonly") return n;
        if (a === "__v_raw" && l === (n ? e ? EN : k_ : e ? mN : U_).get(o)) return o;
        const c = qn(o);
        if (!n && c && oo(Us, a)) return Reflect.get(Us, a, l);
        const h = Reflect.get(o, a, l);
        return (Tl(a) ? S_.has(a) : sN(a)) || (n || Oe(o, "get", a), e) ? h : Hu(h) ? !c || !xl(a) ? h.value : h : ao(h) ? n ? V_(h) : Ll(h) : h
    }
}
var cN = C_(),
    fN = C_(!0);

function C_(n = !1) {
    return function (i, o, a, l) {
        let c = i[o];
        if (!n && (a = pt(a), c = pt(c), !qn(i) && Hu(c) && !Hu(a))) return c.value = a, !0;
        const h = qn(i) && xl(o) ? Number(o) < i.length : oo(i, o),
            _ = Reflect.set(i, o, a, l);
        return i === pt(l) && (h ? T_(a, c) && On(i, "set", o, a, c) : On(i, "add", o, a)), _
    }
}

function hN(n, e) {
    const i = oo(n, e),
        o = n[e],
        a = Reflect.deleteProperty(n, e);
    return a && i && On(n, "delete", e, void 0, o), a
}

function dN(n, e) {
    const i = Reflect.has(n, e);
    return (!Tl(e) || !S_.has(e)) && Oe(n, "has", e), i
}

function pN(n) {
    return Oe(n, "iterate", qn(n) ? "length" : Yn), Reflect.ownKeys(n)
}
var N_ = {
        get: oN,
        set: cN,
        deleteProperty: hN,
        has: dN,
        ownKeys: pN
    },
    L_ = {
        get: uN,
        set(n, e) {
            return console.warn(`Set operation on key "${String(e)}" failed: target is readonly.`, n), !0
        },
        deleteProperty(n, e) {
            return console.warn(`Delete operation on key "${String(e)}" failed: target is readonly.`, n), !0
        }
    };
y_({}, N_, {
    get: aN,
    set: fN
});
y_({}, L_, {
    get: lN
});
var Sl = n => ao(n) ? Ll(n) : n,
    Cl = n => ao(n) ? V_(n) : n,
    Nl = n => n,
    lo = n => Reflect.getPrototypeOf(n);

function co(n, e, i = !1, o = !1) {
    n = n.__v_raw;
    const a = pt(n),
        l = pt(e);
    e !== l && !i && Oe(a, "get", e), !i && Oe(a, "get", l);
    const {
        has: c
    } = lo(a), h = o ? Nl : i ? Cl : Sl;
    if (c.call(a, e)) return h(n.get(e));
    if (c.call(a, l)) return h(n.get(l));
    n !== a && n.get(e)
}

function fo(n, e = !1) {
    const i = this.__v_raw,
        o = pt(i),
        a = pt(n);
    return n !== a && !e && Oe(o, "has", n), !e && Oe(o, "has", a), n === a ? i.has(n) : i.has(n) || i.has(a)
}

function ho(n, e = !1) {
    return n = n.__v_raw, !e && Oe(pt(n), "iterate", Yn), Reflect.get(n, "size", n)
}

function R_(n) {
    n = pt(n);
    const e = pt(this);
    return lo(e).has.call(e, n) || (e.add(n), On(e, "add", n, n)), this
}

function I_(n, e) {
    e = pt(e);
    const i = pt(this),
        {
            has: o,
            get: a
        } = lo(i);
    let l = o.call(i, n);
    l ? H_(i, o, n) : (n = pt(n), l = o.call(i, n));
    const c = a.call(i, n);
    return i.set(n, e), l ? T_(e, c) && On(i, "set", n, e, c) : On(i, "add", n, e), this
}

function D_(n) {
    const e = pt(this),
        {
            has: i,
            get: o
        } = lo(e);
    let a = i.call(e, n);
    a ? H_(e, i, n) : (n = pt(n), a = i.call(e, n));
    const l = o ? o.call(e, n) : void 0,
        c = e.delete(n);
    return a && On(e, "delete", n, void 0, l), c
}

function $_() {
    const n = pt(this),
        e = n.size !== 0,
        i = vi(n) ? new Map(n) : new Set(n),
        o = n.clear();
    return e && On(n, "clear", void 0, void 0, i), o
}

function po(n, e) {
    return function (o, a) {
        const l = this,
            c = l.__v_raw,
            h = pt(c),
            _ = e ? Nl : n ? Cl : Sl;
        return !n && Oe(h, "iterate", Yn), c.forEach((y, b) => o.call(a, _(y), _(b), l))
    }
}

function Cs(n, e, i) {
    return function (...o) {
        const a = this.__v_raw,
            l = pt(a),
            c = vi(l),
            h = n === "entries" || n === Symbol.iterator && c,
            _ = n === "keys" && c,
            y = a[n](...o),
            b = i ? Nl : e ? Cl : Sl;
        return !e && Oe(l, "iterate", _ ? Fu : Yn), {
            next() {
                const {
                    value: S,
                    done: T
                } = y.next();
                return T ? {
                    value: S,
                    done: T
                } : {
                    value: h ? [b(S[0]), b(S[1])] : b(S),
                    done: T
                }
            },
            [Symbol.iterator]() {
                return this
            }
        }
    }
}

function yn(n) {
    return function (...e) {
        {
            const i = e[0] ? `on key "${e[0]}" ` : "";
            console.warn(`${J1(n)} operation ${i}failed: target is readonly.`, pt(this))
        }
        return n === "delete" ? !1 : this
    }
}
var P_ = {
        get(n) {
            return co(this, n)
        },
        get size() {
            return ho(this)
        },
        has: fo,
        add: R_,
        set: I_,
        delete: D_,
        clear: $_,
        forEach: po(!1, !1)
    },
    M_ = {
        get(n) {
            return co(this, n, !1, !0)
        },
        get size() {
            return ho(this)
        },
        has: fo,
        add: R_,
        set: I_,
        delete: D_,
        clear: $_,
        forEach: po(!1, !0)
    },
    B_ = {
        get(n) {
            return co(this, n, !0)
        },
        get size() {
            return ho(this, !0)
        },
        has(n) {
            return fo.call(this, n, !0)
        },
        add: yn("add"),
        set: yn("set"),
        delete: yn("delete"),
        clear: yn("clear"),
        forEach: po(!0, !1)
    },
    W_ = {
        get(n) {
            return co(this, n, !0, !0)
        },
        get size() {
            return ho(this, !0)
        },
        has(n) {
            return fo.call(this, n, !0)
        },
        add: yn("add"),
        set: yn("set"),
        delete: yn("delete"),
        clear: yn("clear"),
        forEach: po(!0, !0)
    },
    _N = ["keys", "values", "entries", Symbol.iterator];
_N.forEach(n => {
    P_[n] = Cs(n, !1, !1), B_[n] = Cs(n, !0, !1), M_[n] = Cs(n, !1, !0), W_[n] = Cs(n, !0, !0)
});

function F_(n, e) {
    const i = e ? n ? W_ : M_ : n ? B_ : P_;
    return (o, a, l) => a === "__v_isReactive" ? !n : a === "__v_isReadonly" ? n : a === "__v_raw" ? o : Reflect.get(oo(i, a) && a in o ? i : o, a, l)
}
var gN = {
        get: F_(!1, !1)
    },
    vN = {
        get: F_(!0, !1)
    };

function H_(n, e, i) {
    const o = pt(i);
    if (o !== i && e.call(n, o)) {
        const a = w_(n);
        console.warn(`Reactive ${a} contains both the raw and reactive versions of the same object${a==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)
    }
}
var U_ = new WeakMap,
    mN = new WeakMap,
    k_ = new WeakMap,
    EN = new WeakMap;

function bN(n) {
    switch (n) {
        case "Object":
        case "Array":
            return 1;
        case "Map":
        case "Set":
        case "WeakMap":
        case "WeakSet":
            return 2;
        default:
            return 0
    }
}

function yN(n) {
    return n.__v_skip || !Object.isExtensible(n) ? 0 : bN(w_(n))
}

function Ll(n) {
    return n && n.__v_isReadonly ? n : K_(n, !1, N_, gN, U_)
}

function V_(n) {
    return K_(n, !0, L_, vN, k_)
}

function K_(n, e, i, o, a) {
    if (!ao(n)) return console.warn(`value cannot be made reactive: ${String(n)}`), n;
    if (n.__v_raw && !(e && n.__v_isReactive)) return n;
    const l = a.get(n);
    if (l) return l;
    const c = yN(n);
    if (c === 0) return n;
    const h = new Proxy(n, c === 2 ? o : i);
    return a.set(n, h), h
}

function pt(n) {
    return n && pt(n.__v_raw) || n
}

function Hu(n) {
    return Boolean(n && n.__v_isRef === !0)
}
Ce("nextTick", () => o_);
Ce("dispatch", n => gi.bind(gi, n));
Ce("watch", (n, {
    evaluateLater: e,
    effect: i
}) => (o, a) => {
    let l = e(o),
        c = !0,
        h, _ = i(() => l(y => {
            JSON.stringify(y), c ? h = y : queueMicrotask(() => {
                a(y, h), h = y
            }), c = !1
        }));
    n._x_effects.delete(_)
});
Ce("store", F1);
Ce("data", n => Kp(n));
Ce("root", n => no(n));
Ce("refs", n => (n._x_refs_proxy || (n._x_refs_proxy = Si(AN(n))), n._x_refs_proxy));

function AN(n) {
    let e = [],
        i = n;
    for (; i;) i._x_refs && e.push(i._x_refs), i = i.parentNode;
    return e
}
var _u = {};

function q_(n) {
    return _u[n] || (_u[n] = 0), ++_u[n]
}

function wN(n, e) {
    return ro(n, i => {
        if (i._x_ids && i._x_ids[e]) return !0
    })
}

function TN(n, e) {
    n._x_ids || (n._x_ids = {}), n._x_ids[e] || (n._x_ids[e] = q_(e))
}
Ce("id", n => (e, i = null) => {
    let o = wN(n, e),
        a = o ? o._x_ids[e] : q_(e);
    return i ? `${e}-${a}-${i}` : `${e}-${a}`
});
Ce("el", n => n);
Y_("Focus", "focus", "focus");
Y_("Persist", "persist", "persist");

function Y_(n, e, i) {
    Ce(e, o => Pr(`You can't use [$${directiveName}] without first installing the "${n}" plugin here: https://alpinejs.dev/plugins/${i}`, o))
}
bt("modelable", (n, {
    expression: e
}, {
    effect: i,
    evaluateLater: o
}) => {
    let a = o(e),
        l = () => {
            let y;
            return a(b => y = b), y
        },
        c = o(`${e} = __placeholder`),
        h = y => c(() => {}, {
            scope: {
                __placeholder: y
            }
        }),
        _ = l();
    h(_), queueMicrotask(() => {
        if (!n._x_model) return;
        n._x_removeModelListeners.default();
        let y = n._x_model.get,
            b = n._x_model.set;
        i(() => h(y())), i(() => b(l()))
    })
});
bt("teleport", (n, {
    expression: e
}, {
    cleanup: i
}) => {
    n.tagName.toLowerCase() !== "template" && Pr("x-teleport can only be used on a <template> tag", n);
    let o = document.querySelector(e);
    o || Pr(`Cannot find x-teleport element for selector: "${e}"`);
    let a = n.content.cloneNode(!0).firstElementChild;
    n._x_teleport = a, a._x_teleportBack = n, n._x_forwardEvents && n._x_forwardEvents.forEach(l => {
        a.addEventListener(l, c => {
            c.stopPropagation(), n.dispatchEvent(new c.constructor(c.type, c))
        })
    }), Oi(a, {}, n), Ct(() => {
        o.appendChild(a), xn(a), a._x_ignore = !0
    }), i(() => a.remove())
});
var z_ = () => {};
z_.inline = (n, {
    modifiers: e
}, {
    cleanup: i
}) => {
    e.includes("self") ? n._x_ignoreSelf = !0 : n._x_ignore = !0, i(() => {
        e.includes("self") ? delete n._x_ignoreSelf : delete n._x_ignore
    })
};
bt("ignore", z_);
bt("effect", (n, {
    expression: e
}, {
    effect: i
}) => i(Ut(n, e)));

function G_(n, e, i, o) {
    let a = n,
        l = _ => o(_),
        c = {},
        h = (_, y) => b => y(_, b);
    if (i.includes("dot") && (e = xN(e)), i.includes("camel") && (e = ON(e)), i.includes("passive") && (c.passive = !0), i.includes("capture") && (c.capture = !0), i.includes("window") && (a = window), i.includes("document") && (a = document), i.includes("prevent") && (l = h(l, (_, y) => {
            y.preventDefault(), _(y)
        })), i.includes("stop") && (l = h(l, (_, y) => {
            y.stopPropagation(), _(y)
        })), i.includes("self") && (l = h(l, (_, y) => {
            y.target === n && _(y)
        })), (i.includes("away") || i.includes("outside")) && (a = document, l = h(l, (_, y) => {
            n.contains(y.target) || y.target.isConnected !== !1 && (n.offsetWidth < 1 && n.offsetHeight < 1 || n._x_isShown !== !1 && _(y))
        })), i.includes("once") && (l = h(l, (_, y) => {
            _(y), a.removeEventListener(e, l, c)
        })), l = h(l, (_, y) => {
            CN(e) && NN(y, i) || _(y)
        }), i.includes("debounce")) {
        let _ = i[i.indexOf("debounce") + 1] || "invalid-wait",
            y = Uu(_.split("ms")[0]) ? Number(_.split("ms")[0]) : 250;
        l = g_(l, y)
    }
    if (i.includes("throttle")) {
        let _ = i[i.indexOf("throttle") + 1] || "invalid-wait",
            y = Uu(_.split("ms")[0]) ? Number(_.split("ms")[0]) : 250;
        l = v_(l, y)
    }
    return a.addEventListener(e, l, c), () => {
        a.removeEventListener(e, l, c)
    }
}

function xN(n) {
    return n.replace(/-/g, ".")
}

function ON(n) {
    return n.toLowerCase().replace(/-(\w)/g, (e, i) => i.toUpperCase())
}

function Uu(n) {
    return !Array.isArray(n) && !isNaN(n)
}

function SN(n) {
    return n.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/[_\s]/, "-").toLowerCase()
}

function CN(n) {
    return ["keydown", "keyup"].includes(n)
}

function NN(n, e) {
    let i = e.filter(l => !["window", "document", "prevent", "stop", "once"].includes(l));
    if (i.includes("debounce")) {
        let l = i.indexOf("debounce");
        i.splice(l, Uu((i[l + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1)
    }
    if (i.length === 0 || i.length === 1 && gd(n.key).includes(i[0])) return !1;
    const a = ["ctrl", "shift", "alt", "meta", "cmd", "super"].filter(l => i.includes(l));
    return i = i.filter(l => !a.includes(l)), !(a.length > 0 && a.filter(c => ((c === "cmd" || c === "super") && (c = "meta"), n[`${c}Key`])).length === a.length && gd(n.key).includes(i[0]))
}

function gd(n) {
    if (!n) return [];
    n = SN(n);
    let e = {
        ctrl: "control",
        slash: "/",
        space: "-",
        spacebar: "-",
        cmd: "meta",
        esc: "escape",
        up: "arrow-up",
        down: "arrow-down",
        left: "arrow-left",
        right: "arrow-right",
        period: ".",
        equal: "="
    };
    return e[n] = n, Object.keys(e).map(i => {
        if (e[i] === n) return i
    }).filter(i => i)
}
bt("model", (n, {
    modifiers: e,
    expression: i
}, {
    effect: o,
    cleanup: a
}) => {
    let l = Ut(n, i),
        c = `${i} = rightSideOfExpression($event, ${i})`,
        h = Ut(n, c);
    var _ = n.tagName.toLowerCase() === "select" || ["checkbox", "radio"].includes(n.type) || e.includes("lazy") ? "change" : "input";
    let y = LN(n, e, i),
        b = G_(n, _, e, T => {
            h(() => {}, {
                scope: {
                    $event: T,
                    rightSideOfExpression: y
                }
            })
        });
    n._x_removeModelListeners || (n._x_removeModelListeners = {}), n._x_removeModelListeners.default = b, a(() => n._x_removeModelListeners.default());
    let S = Ut(n, `${i} = __placeholder`);
    n._x_model = {
        get() {
            let T;
            return l(I => T = I), T
        },
        set(T) {
            S(() => {}, {
                scope: {
                    __placeholder: T
                }
            })
        }
    }, n._x_forceModelUpdate = () => {
        l(T => {
            T === void 0 && i.match(/\./) && (T = ""), window.fromModel = !0, Ct(() => p_(n, "value", T)), delete window.fromModel
        })
    }, o(() => {
        e.includes("unintrusive") && document.activeElement.isSameNode(n) || n._x_forceModelUpdate()
    })
});

function LN(n, e, i) {
    return n.type === "radio" && Ct(() => {
        n.hasAttribute("name") || n.setAttribute("name", i)
    }), (o, a) => Ct(() => {
        if (o instanceof CustomEvent && o.detail !== void 0) return o.detail || o.target.value;
        if (n.type === "checkbox")
            if (Array.isArray(a)) {
                let l = e.includes("number") ? gu(o.target.value) : o.target.value;
                return o.target.checked ? a.concat([l]) : a.filter(c => !RN(c, l))
            } else return o.target.checked;
        else {
            if (n.tagName.toLowerCase() === "select" && n.multiple) return e.includes("number") ? Array.from(o.target.selectedOptions).map(l => {
                let c = l.value || l.text;
                return gu(c)
            }) : Array.from(o.target.selectedOptions).map(l => l.value || l.text); {
                let l = o.target.value;
                return e.includes("number") ? gu(l) : e.includes("trim") ? l.trim() : l
            }
        }
    })
}

function gu(n) {
    let e = n ? parseFloat(n) : null;
    return IN(e) ? e : n
}

function RN(n, e) {
    return n == e
}

function IN(n) {
    return !Array.isArray(n) && !isNaN(n)
}
bt("cloak", n => queueMicrotask(() => Ct(() => n.removeAttribute(Vr("cloak")))));
f_(() => `[${Vr("init")}]`);
bt("init", so((n, {
    expression: e
}, {
    evaluate: i
}) => typeof e == "string" ? !!e.trim() && i(e, {}, !1) : i(e, {}, !1)));
bt("text", (n, {
    expression: e
}, {
    effect: i,
    evaluateLater: o
}) => {
    let a = o(e);
    i(() => {
        a(l => {
            Ct(() => {
                n.textContent = l
            })
        })
    })
});
bt("html", (n, {
    expression: e
}, {
    effect: i,
    evaluateLater: o
}) => {
    let a = o(e);
    i(() => {
        a(l => {
            Ct(() => {
                n.innerHTML = l, n._x_ignoreSelf = !0, xn(n), delete n._x_ignoreSelf
            })
        })
    })
});
bl(t_(":", e_(Vr("bind:"))));
bt("bind", (n, {
    value: e,
    modifiers: i,
    expression: o,
    original: a
}, {
    effect: l
}) => {
    if (!e) {
        let h = {};
        U1(h), Ut(n, o)(y => {
            E_(n, y, a)
        }, {
            scope: h
        });
        return
    }
    if (e === "key") return DN(n, o);
    let c = Ut(n, o);
    l(() => c(h => {
        h === void 0 && o.match(/\./) && (h = ""), Ct(() => p_(n, e, h, i))
    }))
});

function DN(n, e) {
    n._x_keyExpression = e
}
c_(() => `[${Vr("data")}]`);
bt("data", so((n, {
    expression: e
}, {
    cleanup: i
}) => {
    e = e === "" ? "{}" : e;
    let o = {};
    Lu(o, n);
    let a = {};
    V1(a, o);
    let l = Tr(n, e, {
        scope: a
    });
    l === void 0 && (l = {}), Lu(l, n);
    let c = kr(l);
    qp(c);
    let h = Oi(n, c);
    c.init && Tr(n, c.init), i(() => {
        c.destroy && Tr(n, c.destroy), h()
    })
}));
bt("show", (n, {
    modifiers: e,
    expression: i
}, {
    effect: o
}) => {
    let a = Ut(n, i);
    n._x_doHide || (n._x_doHide = () => {
        Ct(() => {
            n.style.setProperty("display", "none", e.includes("important") ? "important" : void 0)
        })
    }), n._x_doShow || (n._x_doShow = () => {
        Ct(() => {
            n.style.length === 1 && n.style.display === "none" ? n.removeAttribute("style") : n.style.removeProperty("display")
        })
    });
    let l = () => {
            n._x_doHide(), n._x_isShown = !1
        },
        c = () => {
            n._x_doShow(), n._x_isShown = !0
        },
        h = () => setTimeout(c),
        _ = Pu(S => S ? c() : l(), S => {
            typeof n._x_toggleAndCascadeWithTransitions == "function" ? n._x_toggleAndCascadeWithTransitions(n, S, c, l) : S ? h() : l()
        }),
        y, b = !0;
    o(() => a(S => {
        !b && S === y || (e.includes("immediate") && (S ? h() : l()), _(S), y = S, b = !1)
    }))
});
bt("for", (n, {
    expression: e
}, {
    effect: i,
    cleanup: o
}) => {
    let a = PN(e),
        l = Ut(n, a.items),
        c = Ut(n, n._x_keyExpression || "index");
    n._x_prevKeys = [], n._x_lookup = {}, i(() => $N(n, a, l, c)), o(() => {
        Object.values(n._x_lookup).forEach(h => h.remove()), delete n._x_prevKeys, delete n._x_lookup
    })
});

function $N(n, e, i, o) {
    let a = c => typeof c == "object" && !Array.isArray(c),
        l = n;
    i(c => {
        MN(c) && c >= 0 && (c = Array.from(Array(c).keys(), L => L + 1)), c === void 0 && (c = []);
        let h = n._x_lookup,
            _ = n._x_prevKeys,
            y = [],
            b = [];
        if (a(c)) c = Object.entries(c).map(([L, P]) => {
            let U = vd(e, P, L, c);
            o(F => b.push(F), {
                scope: {
                    index: L,
                    ...U
                }
            }), y.push(U)
        });
        else
            for (let L = 0; L < c.length; L++) {
                let P = vd(e, c[L], L, c);
                o(U => b.push(U), {
                    scope: {
                        index: L,
                        ...P
                    }
                }), y.push(P)
            }
        let S = [],
            T = [],
            I = [],
            Y = [];
        for (let L = 0; L < _.length; L++) {
            let P = _[L];
            b.indexOf(P) === -1 && I.push(P)
        }
        _ = _.filter(L => !I.includes(L));
        let W = "template";
        for (let L = 0; L < b.length; L++) {
            let P = b[L],
                U = _.indexOf(P);
            if (U === -1) _.splice(L, 0, P), S.push([W, L]);
            else if (U !== L) {
                let F = _.splice(L, 1)[0],
                    B = _.splice(U - 1, 1)[0];
                _.splice(L, 0, B), _.splice(U, 0, F), T.push([F, B])
            } else Y.push(P);
            W = P
        }
        for (let L = 0; L < I.length; L++) {
            let P = I[L];
            h[P]._x_effects && h[P]._x_effects.forEach(Mp), h[P].remove(), h[P] = null, delete h[P]
        }
        for (let L = 0; L < T.length; L++) {
            let [P, U] = T[L], F = h[P], B = h[U], R = document.createElement("div");
            Ct(() => {
                B.after(R), F.after(B), B._x_currentIfEl && B.after(B._x_currentIfEl), R.before(F), F._x_currentIfEl && F.after(F._x_currentIfEl), R.remove()
            }), hd(B, y[b.indexOf(U)])
        }
        for (let L = 0; L < S.length; L++) {
            let [P, U] = S[L], F = P === "template" ? l : h[P];
            F._x_currentIfEl && (F = F._x_currentIfEl);
            let B = y[U],
                R = b[U],
                z = document.importNode(l.content, !0).firstElementChild;
            Oi(z, kr(B), l), Ct(() => {
                F.after(z), xn(z)
            }), typeof R == "object" && Pr("x-for key cannot be an object, it must be a string or an integer", l), h[R] = z
        }
        for (let L = 0; L < Y.length; L++) hd(h[Y[L]], y[b.indexOf(Y[L])]);
        l._x_prevKeys = b
    })
}

function PN(n) {
    let e = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/,
        i = /^\s*\(|\)\s*$/g,
        o = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,
        a = n.match(o);
    if (!a) return;
    let l = {};
    l.items = a[2].trim();
    let c = a[1].replace(i, "").trim(),
        h = c.match(e);
    return h ? (l.item = c.replace(e, "").trim(), l.index = h[1].trim(), h[2] && (l.collection = h[2].trim())) : l.item = c, l
}

function vd(n, e, i, o) {
    let a = {};
    return /^\[.*\]$/.test(n.item) && Array.isArray(e) ? n.item.replace("[", "").replace("]", "").split(",").map(c => c.trim()).forEach((c, h) => {
        a[c] = e[h]
    }) : /^\{.*\}$/.test(n.item) && !Array.isArray(e) && typeof e == "object" ? n.item.replace("{", "").replace("}", "").split(",").map(c => c.trim()).forEach(c => {
        a[c] = e[c]
    }) : a[n.item] = e, n.index && (a[n.index] = i), n.collection && (a[n.collection] = o), a
}

function MN(n) {
    return !Array.isArray(n) && !isNaN(n)
}

function j_() {}
j_.inline = (n, {
    expression: e
}, {
    cleanup: i
}) => {
    let o = no(n);
    o._x_refs || (o._x_refs = {}), o._x_refs[e] = n, i(() => delete o._x_refs[e])
};
bt("ref", j_);
bt("if", (n, {
    expression: e
}, {
    effect: i,
    cleanup: o
}) => {
    let a = Ut(n, e),
        l = () => {
            if (n._x_currentIfEl) return n._x_currentIfEl;
            let h = n.content.cloneNode(!0).firstElementChild;
            return Oi(h, {}, n), Ct(() => {
                n.after(h), xn(h)
            }), n._x_currentIfEl = h, n._x_undoIf = () => {
                jn(h, _ => {
                    _._x_effects && _._x_effects.forEach(Mp)
                }), h.remove(), delete n._x_currentIfEl
            }, h
        },
        c = () => {
            !n._x_undoIf || (n._x_undoIf(), delete n._x_undoIf)
        };
    i(() => a(h => {
        h ? l() : c()
    })), o(() => n._x_undoIf && n._x_undoIf())
});
bt("id", (n, {
    expression: e
}, {
    evaluate: i
}) => {
    i(e).forEach(a => TN(n, a))
});
bl(t_("@", e_(Vr("on:"))));
bt("on", so((n, {
    value: e,
    modifiers: i,
    expression: o
}, {
    cleanup: a
}) => {
    let l = o ? Ut(n, o) : () => {};
    n.tagName.toLowerCase() === "template" && (n._x_forwardEvents || (n._x_forwardEvents = []), n._x_forwardEvents.includes(e) || n._x_forwardEvents.push(e));
    let c = G_(n, e, i, h => {
        l(() => {}, {
            scope: {
                $event: h
            },
            params: [h]
        })
    });
    a(() => c())
}));
_o("Collapse", "collapse", "collapse");
_o("Intersect", "intersect", "intersect");
_o("Focus", "trap", "focus");
_o("Mask", "mask", "mask");

function _o(n, e, i) {
    bt(e, o => Pr(`You can't use [x-${e}] without first installing the "${n}" plugin here: https://alpinejs.dev/plugins/${i}`, o))
}
Ci.setEvaluator(jp);
Ci.setReactivityEngine({
    reactive: Ll,
    effect: Z1,
    release: tN,
    raw: pt
});
var BN = Ci,
    X_ = BN;
window.Alpine = X_;
X_.start();
