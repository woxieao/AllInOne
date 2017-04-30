
var bd = NEJ.P
    , fu = bd("nej.g")
    , bA = bd("nej.j")
    , bm = bd("nej.u")
    , Pz = bd("nm.x.ek")
    , bn = bd("nm.x");

var bia = function (cpq) {
    var bo = [];
    bm.cr(cpq, function (cpn) {
        bo.push(Pz.emj[cpn]);
    });
    return bo.join("");
};

var mess = {
    a: function (a) {
        var d, e, b = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", c = "";
        for (d = 0; a > d; d += 1)
            e = Math.random() * b.length,
                e = Math.floor(e),
                c += b.charAt(e);
        return c;
    },
    b: function (a, b) {
        var c = CryptoJS.enc.Utf8.parse(b)
            , d = CryptoJS.enc.Utf8.parse("0102030405060708")
            , e = CryptoJS.enc.Utf8.parse(a)
            , f = CryptoJS.AES.encrypt(e, c, {
                iv: d,
                mode: CryptoJS.mode.CBC
            });
        return f.toString()
    },
    c: function (a) {
        var  e;
        var key = new RSAKeyPair(s0, "", s1);
        return setMaxDigits(131),
            e = encryptedString(key, a);
    },
    d: function (d) {
        var h = {}
            , i = mess.a(16);
        return h.encText = mess.b(d, s2),
            h.encText = mess.b(h.encText, i),
            h.encSecKey = mess.c(i),
            h;
    }
};
var s0 = "010001";
var s1 = "00e0b509f6259df8642dbc35662901477df22677ec152b5ff68ace615bb7b725152b3ab17a876aea8a5aa76d2e417629ec4ee341f56135fccf695280104e0312ecbda92557c93870114af6c9d05c4f7f0c3685b7a46bee255932575cce10b424d813cfe4875d3e82047b97ddef52741d546b8e289dc6935b3ece0462db0a22b8e7";
var s2 = "0CoJUm6Qyw8W8jud";
var pwd = {
    encrypt: function (d) {
        return mess.d(JSON.stringify(d), s0, s1, s2);
    },
    decrypt: function (key, encText) {
        var a = new RSAKeyPair(s0, "", s1);
   

        var e, f, g, h, c = encText.split(" "), d = "";
        for (e = 0; e < c.length; ++e)
            for (h = 16 == a.radix ? biFromHex(c[e]) : biFromString(c[e], a.radix),
                g = a.barrett.powMod(h, a.d),
                f = 0; f <= biHighIndex(g); ++f)
                d += String.fromCharCode(255 & g.digits[f], g.digits[f] >> 8);
        return 0 == d.charCodeAt(d.length - 1) && (d = d.substring(0, d.length - 1)),
            d;
    }

}
var xx = pwd.encrypt({ "nickname": "XAzrael", "signature": "不要删我歌单 啊啊啊啊", "gender": 1, "avatarImgId": 0, "province": "310000", "city": "310000", "birthday": 1 });
var yy = pwd.decrypt(xx.encSecKey, xx.encText);
yy
