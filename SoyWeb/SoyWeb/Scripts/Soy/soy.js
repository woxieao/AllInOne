(function () {
    var bd = NEJ.P, cz = NEJ.F, bA = bd("nej.j"), bn = bd("nm.x"), bs = bd("nm.d"), bc, bO;
    bs.mC = NEJ.C();
    bs.mC.bQa = function (qY) {
        var rI = bs.mC.RP(qY);
        return !!rI ? rI.name : ""
    }
        ;
    bs.mC.bPZ = function (qY, bqQ) {
        var yS = bs.mC.Ro(qY);
        return yS[bqQ] || ""
    }
        ;
    bs.mC.Ro = function (qY) {
        var rI = bs.mC.RP(qY);
        return !!rI ? rI.cities : []
    }
        ;
    bs.mC.bqT = function () {
        return yM
    }
        ;
    bs.mC.RP = function (qY) {
        for (var i = 0; i < yM.length; i++) {
            if (yM[i].id == qY)
                return yM[i]
        }
        return null
    }
        ;
    var yM = [{
        id: 1,
        name: "ֱϽ��",
        cities: {
            11e4: "������",
            12e4: "�����",
            31e4: "�Ϻ���",
            5e5: "������"
        }
    }, {
        id: 2,
        name: "�ر�������",
        cities: {
            81e4: "���",
            82e4: "����"
        }
    }, {
        id: 13e4,
        name: "�ӱ�ʡ",
        alias: "�ӱ�",
        type: 0,
        cities: {
            130100: "ʯ��ׯ��",
            130200: "��ɽ��",
            130300: "�ػʵ���",
            130400: "������",
            130500: "��̨��",
            130600: "������",
            130700: "�żҿ���",
            130800: "�е���",
            130900: "������",
            131e3: "�ȷ���",
            131100: "��ˮ��"
        }
    }, {
        id: 14e4,
        name: "ɽ��ʡ",
        alias: "ɽ��",
        type: 0,
        cities: {
            140100: "̫ԭ��",
            140200: "��ͬ��",
            140300: "��Ȫ��",
            140400: "������",
            140500: "������",
            140600: "˷����",
            140700: "������",
            140800: "�˳���",
            140900: "������",
            141e3: "�ٷ���",
            141100: "������"
        }
    }, {
        id: 15e4,
        name: "���ɹ�",
        alias: null,
        type: 0,
        cities: {
            150100: "���ͺ�����",
            150200: "��ͷ��",
            150300: "�ں���",
            150400: "�����",
            150500: "ͨ����",
            150600: "������˹��",
            150700: "���ױ�����",
            150800: "�����׶���",
            150900: "�����첼��",
            152200: "�˰���",
            152500: "���ֹ�����",
            152900: "��������"
        }
    }, {
        id: 21e4,
        name: "����ʡ",
        alias: "����",
        type: 0,
        cities: {
            210100: "������",
            210200: "������",
            210300: "��ɽ��",
            210400: "��˳��",
            210500: "��Ϫ��",
            210600: "������",
            210700: "������",
            210800: "Ӫ����",
            210900: "������",
            211e3: "������",
            211100: "�̽���",
            211200: "������",
            211300: "������",
            211400: "��«����"
        }
    }, {
        id: 22e4,
        name: "����ʡ",
        alias: "����",
        type: 0,
        cities: {
            220100: "������",
            220200: "������",
            220300: "��ƽ��",
            220400: "��Դ��",
            220500: "ͨ����",
            220600: "��ɽ��",
            220700: "��ԭ��",
            220800: "�׳���",
            222400: "�ӱ߳�����������"
        }
    }, {
        id: 23e4,
        name: "������ʡ",
        alias: "������",
        type: 0,
        cities: {
            230100: "��������",
            230200: "���������",
            230300: "������",
            230400: "�׸���",
            230500: "˫Ѽɽ��",
            230600: "������",
            230700: "������",
            230800: "��ľ˹��",
            230900: "��̨����",
            231e3: "ĵ������",
            231100: "�ں���",
            231200: "�绯��",
            232700: "���˰������"
        }
    }, {
        id: 32e4,
        name: "����ʡ",
        alias: "����",
        type: 0,
        cities: {
            320100: "�Ͼ���",
            320200: "������",
            320300: "������",
            320400: "������",
            320500: "������",
            320600: "��ͨ��",
            320700: "���Ƹ���",
            320800: "������",
            320900: "�γ���",
            321e3: "������",
            321100: "����",
            321200: "̩����",
            321300: "��Ǩ��"
        }
    }, {
        id: 33e4,
        name: "�㽭ʡ",
        alias: "�㽭",
        type: 0,
        cities: {
            330100: "������",
            330200: "������",
            330300: "������",
            330400: "������",
            330500: "������",
            330600: "������",
            330700: "����",
            330800: "������",
            330900: "��ɽ��",
            331e3: "̨����",
            331100: "��ˮ��"
        }
    }, {
        id: 34e4,
        name: "����ʡ",
        alias: "����",
        type: 0,
        cities: {
            340100: "�Ϸ���",
            340200: "�ߺ���",
            340300: "������",
            340400: "������",
            340500: "��ɽ��",
            340600: "������",
            340700: "ͭ����",
            340800: "������",
            341e3: "��ɽ��",
            341100: "������",
            341200: "������",
            341300: "������",
            341400: "������",
            341500: "������",
            341600: "������",
            341700: "������",
            341800: "������"
        }
    }, {
        id: 35e4,
        name: "����ʡ",
        alias: "����",
        type: 0,
        cities: {
            350100: "������",
            350200: "������",
            350300: "������",
            350400: "������",
            350500: "Ȫ����",
            350600: "������",
            350700: "��ƽ��",
            350800: "������",
            350900: "������"
        }
    }, {
        id: 36e4,
        name: "����ʡ",
        alias: "����",
        type: 0,
        cities: {
            360100: "�ϲ���",
            360200: "��������",
            360300: "Ƽ����",
            360400: "�Ž���",
            360500: "������",
            360600: "ӥ̶��",
            360700: "������",
            360800: "������",
            360900: "�˴���",
            361e3: "������",
            361100: "������"
        }
    }, {
        id: 37e4,
        name: "ɽ��ʡ",
        alias: "ɽ��",
        type: 0,
        cities: {
            370100: "������",
            370200: "�ൺ��",
            370300: "�Ͳ���",
            370400: "��ׯ��",
            370500: "��Ӫ��",
            370600: "��̨��",
            370700: "Ϋ����",
            370800: "������",
            370900: "̩����",
            371e3: "������",
            371100: "������",
            371200: "������",
            371300: "������",
            371400: "������",
            371500: "�ĳ���",
            371600: "������",
            371700: "������"
        }
    }, {
        id: 41e4,
        name: "����ʡ",
        alias: "����",
        type: 0,
        cities: {
            410100: "֣����",
            410200: "������",
            410300: "������",
            410400: "ƽ��ɽ��",
            410500: "������",
            410600: "�ױ���",
            410700: "������",
            410800: "������",
            410900: "�����",
            411e3: "�����",
            411100: "�����",
            411200: "����Ͽ��",
            411300: "������",
            411400: "������",
            411500: "������",
            411600: "�ܿ���",
            411700: "פ�����",
            419001: "��Դ��"
        }
    }, {
        id: 42e4,
        name: "����ʡ",
        alias: "����",
        type: 0,
        cities: {
            420100: "�人��",
            420200: "��ʯ��",
            420300: "ʮ����",
            420500: "�˲���",
            420600: "�差��",
            420700: "������",
            420800: "������",
            420900: "Т����",
            421e3: "������",
            421100: "�Ƹ���",
            421200: "������",
            421300: "������",
            422800: "��ʩ����������������",
            429004: "������",
            429005: "Ǳ����",
            429006: "������",
            429021: "��ũ������"
        }
    }, {
        id: 43e4,
        name: "����ʡ",
        alias: "����",
        type: 0,
        cities: {
            430100: "��ɳ��",
            430200: "������",
            430300: "��̶��",
            430400: "������",
            430500: "������",
            430600: "������",
            430700: "������",
            430800: "�żҽ���",
            430900: "������",
            431e3: "������",
            431100: "������",
            431200: "������",
            431300: "¦����",
            433100: "��������������������"
        }
    }, {
        id: 44e4,
        name: "�㶫ʡ",
        alias: "�㶫",
        type: 0,
        cities: {
            440100: "������",
            440200: "�ع���",
            440300: "������",
            440400: "�麣��",
            440500: "��ͷ��",
            440600: "��ɽ��",
            440700: "������",
            440800: "տ����",
            440900: "ï����",
            441200: "������",
            441300: "������",
            441400: "÷����",
            441500: "��β��",
            441600: "��Դ��",
            441700: "������",
            441800: "��Զ��",
            441900: "��ݸ��",
            442e3: "��ɽ��",
            445100: "������",
            445200: "������",
            445300: "�Ƹ���"
        }
    }, {
        id: 45e4,
        name: "����",
        alias: null,
        type: 0,
        cities: {
            450100: "������",
            450200: "������",
            450300: "������",
            450400: "������",
            450500: "������",
            450600: "���Ǹ���",
            450700: "������",
            450800: "�����",
            450900: "������",
            451e3: "��ɫ��",
            451100: "������",
            451200: "�ӳ���",
            451300: "������",
            451400: "������"
        }
    }, {
        id: 46e4,
        name: "����ʡ",
        alias: "����",
        type: 0,
        cities: {
            460100: "������",
            460200: "������",
            469001: "��ָɽ��",
            469002: "����",
            469003: "������",
            469005: "�Ĳ���",
            469006: "������",
            469007: "������",
            469021: "������",
            469022: "�Ͳ���",
            469023: "������",
            469024: "�ٸ���",
            469025: "��ɳ����������",
            469026: "��������������",
            469027: "�ֶ�����������",
            469028: "��ˮ����������",
            469029: "��ͤ��������������",
            469030: "������������������"
        }
    }, {
        id: 51e4,
        name: "�Ĵ�ʡ",
        alias: "�Ĵ�",
        type: 0,
        cities: {
            510100: "�ɶ���",
            510300: "�Թ���",
            510400: "��֦����",
            510500: "������",
            510600: "������",
            510700: "������",
            510800: "��Ԫ��",
            510900: "������",
            511e3: "�ڽ���",
            511100: "��ɽ��",
            511300: "�ϳ���",
            511400: "üɽ��",
            511500: "�˱���",
            511600: "�㰲��",
            511700: "������",
            511800: "�Ű���",
            511900: "������",
            512e3: "������",
            513200: "���Ӳ���Ǽ��������",
            513300: "���β���������",
            513400: "��ɽ����������"
        }
    }, {
        id: 52e4,
        name: "����ʡ",
        alias: "����",
        type: 0,
        cities: {
            520100: "������",
            520200: "����ˮ��",
            520300: "������",
            520400: "��˳��",
            522200: "ͭ�ʵ���",
            522300: "ǭ���ϲ���������������",
            522400: "�Ͻڵ���",
            522600: "ǭ�������嶱��������",
            522700: "ǭ�ϲ���������������"
        }
    }, {
        id: 53e4,
        name: "����ʡ",
        alias: "����",
        type: 0,
        cities: {
            530100: "������",
            530300: "������",
            530400: "��Ϫ��",
            530500: "��ɽ��",
            530600: "��ͨ��",
            530700: "������",
            530800: "�ն���",
            530900: "�ٲ���",
            532300: "��������������",
            532500: "��ӹ���������������",
            532600: "��ɽ׳������������",
            532800: "��˫���ɴ���������",
            532900: "�������������",
            533100: "�º���徰����������",
            533300: "ŭ��������������",
            533400: "�������������"
        }
    }, {
        id: 54e4,
        name: "����",
        alias: null,
        type: 0,
        cities: {
            540100: "������",
            542100: "��������",
            542200: "ɽ�ϵ���",
            542300: "�տ������",
            542400: "��������",
            542500: "�������",
            542600: "��֥����"
        }
    }, {
        id: 61e4,
        name: "����ʡ",
        alias: "����",
        type: 0,
        cities: {
            610100: "������",
            610200: "ͭ����",
            610300: "������",
            610400: "������",
            610500: "μ����",
            610600: "�Ӱ���",
            610700: "������",
            610800: "������",
            610900: "������",
            611e3: "������"
        }
    }, {
        id: 62e4,
        name: "����ʡ",
        alias: "����",
        type: 0,
        cities: {
            620100: "������",
            620200: "��������",
            620300: "�����",
            620400: "������",
            620500: "��ˮ��",
            620600: "������",
            620700: "��Ҵ��",
            620800: "ƽ����",
            620900: "��Ȫ��",
            621e3: "������",
            621100: "������",
            621200: "¤����",
            622900: "���Ļ���������",
            623e3: "���ϲ���������"
        }
    }, {
        id: 63e4,
        name: "�ຣʡ",
        alias: "�ຣ",
        type: 0,
        cities: {
            630100: "������",
            632100: "��������",
            632200: "��������������",
            632300: "���ϲ���������",
            632500: "���ϲ���������",
            632600: "�������������",
            632700: "��������������",
            632800: "�����ɹ������������"
        }
    }, {
        id: 64e4,
        name: "����",
        alias: null,
        type: 0,
        cities: {
            640100: "������",
            640200: "ʯ��ɽ��",
            640300: "������",
            640400: "��ԭ��",
            640500: "������"
        }
    }, {
        id: 65e4,
        name: "�½�",
        alias: null,
        type: 0,
        cities: {
            650100: "��³ľ����",
            650200: "����������",
            652100: "��³������",
            652200: "���ܵ���",
            652300: "��������������",
            652700: "���������ɹ�������",
            652800: "���������ɹ�������",
            652900: "�����յ���",
            653e3: "�������տ¶�����������",
            653100: "��ʲ����",
            653200: "�������",
            654e3: "���������������",
            654200: "���ǵ���",
            654300: "����̩����",
            659001: "ʯ������",
            659002: "��������",
            659003: "ͼľ�����",
            659004: "�������"
        }
    }, {
        id: 71e4,
        name: "̨��ʡ",
        alias: "̨��",
        type: 0,
        cities: {
            710100: "̨����",
            710200: "������",
            710300: "��¡��",
            710400: "̨����",
            710500: "̨����",
            710600: "������",
            710700: "������",
            710900: "̨����",
            711e3: "������",
            711100: "��԰��",
            711200: "������",
            711300: "������",
            711400: "̨����",
            711500: "�û���",
            711600: "��Ͷ��",
            711700: "������",
            711800: "������",
            711900: "̨����",
            712e3: "������",
            712100: "������",
            712200: "�����",
            712300: "̨����",
            712400: "������"
        }
    }, {
        id: 1e6,
        name: "����",
        alias: "����",
        type: 3,
        cities: {
            1000100: "����������",
            1000200: "����͢",
            1000300: "������",
            1000400: "����",
            1000500: "������",
            1000600: "�µ���",
            1000700: "�Ĵ�����",
            1000800: "�͹���",
            1000900: "�ͻ�˹̹",
            1001e3: "����",
            1001100: "�׶���˹",
            1001200: "����ʱ",
            1001300: "����",
            1001400: "����",
            1001500: "����ά��",
            1001600: "������",
            1001700: "����",
            1001800: "����",
            1001900: "�¹�",
            1002e3: "����˹",
            1002100: "��϶��",
            1002200: "����",
            1002300: "���ɱ�",
            1002400: "����",
            1002500: "���ױ���",
            1002600: "�Ű�",
            1002700: "�ص�",
            1002800: "������˹̹",
            1002900: "����",
            1003e3: "����",
            1003100: "���ô�",
            1003200: "����",
            1003300: "����կ",
            1003400: "�ݿ�",
            1003500: "������",
            1003600: "������",
            1003700: "���޵���",
            1003800: "������",
            1003900: "����",
            1004e3: "¬ɭ��",
            1004100: "��������",
            1004200: "�������",
            1004300: "��������",
            1004400: "����",
            1004500: "�ɹ�",
            1004600: "�ϼ���",
            1004700: "��³",
            1004800: "���",
            1004900: "Ħ���",
            1005e3: "ī����",
            1005100: "�Ϸ�",
            1005200: "��������",
            1005300: "Ų��",
            1005400: "������",
            1005500: "�ձ�",
            1005600: "���",
            1005700: "��ʿ",
            1005800: "ɳ�ذ�����",
            1005900: "˹������",
            1006e3: "�յ�",
            1006100: "̩��",
            1006200: "̹ɣ����",
            1006300: "������",
            1006400: "ί������",
            1006500: "�ڿ���",
            1006600: "������",
            1006700: "ϣ��",
            1006800: "�¼���",
            1006900: "������",
            1007e3: "������",
            1007100: "������",
            1007200: "����",
            1007300: "��ɫ��",
            1007400: "�����",
            1007500: "ӡ��",
            1007600: "ӡ��������",
            1007700: "Ӣ��",
            1007800: "Խ��",
            1007900: "����",
            101e4: "����"
        }
    }]
})();
(function () {
    var bd = NEJ.P, cg = NEJ.O, bb = bd("nej.e"), bj = bd("nej.v"), bm = bd("nej.u"), cV = bd("nej.ui"), bL = bd("nej.ut"), bA = bd("nej.j"), bs = bd("nm.d"), bQ = bd("nm.m.p"), bc, bO;
    bQ.zv = NEJ.C();
    bc = bQ.zv.bT(nej.ut.dX, !0);
    bO = bQ.zv.dC;
    bc.cv = function (bf) {
        this.cw(bf);
        this.bAo = bf.itemRenderer || bQ.bgi
    }
        ;
    bc.dG = function (bf) {
        this.dM(bf);
        this.KK = bf.listParent;
        this.KK.style.display = "none";
        this.uj = bf.btn;
        this.lD = bf.selected;
        this.bAs(bf.defaultText);
        bj.bt(this.uj, "click", this.Xp.bi(this));
        bj.bt(document, "click", this.bAu.bi(this))
    }
        ;
    bc.cwd = function () {
        bj.px(this.uj, "click", this.Xp.bi(this));
        bj.px(document, "click", this.bAu.bi(this))
    }
        ;
    bc.bAu = function (be) {
        if (bj.bZ(be) == this.uj)
            return;
        this.KK.style.display = "none"
    }
        ;
    bc.Xp = function (be) {
        bj.co(be);
        with (this.KK.style) {
            display = display == "" ? "none" : ""
        }
    }
        ;
    bc.nH = function (bu) {
        this.KK.style.display = "none";
        if (this.Xr != bu) {
            this.Xr = bu;
            var tR = bu.jt();
            this.lD.innerHTML = tR.text;
            this.bG("onchange", tR)
        }
    }
        ;
    bc.QW = function () {
        this.KK.style.display = "none"
    }
        ;
    bc.gn = function (bF) {
        if (!this.dn)
            return;
        for (var i = 0, tmp = null; i < this.dn.length; i++) {
            if (this.dn[i].jt().value == bF) {
                this.nH(this.dn[i]);
                break
            }
        }
    }
        ;
    bc.gV = function () {
        if (this.Xr) {
            return this.Xr.jt().value
        }
        return -1
    }
        ;
    bc.bAs = function (eB) {
        this.QY = eB;
        this.lD.innerHTML = eB
    }
        ;
    bc.kJ = function (bl) {
        if (!bm.fU(bl))
            bl = [bl];
        var bk = bb.BT(bl, this.bAo, {
            parent: this.KK,
            onclick: this.nH.bi(this)
        });
        if (this.dn)
            this.dn = this.dn.concat(bk);
        else
            this.dn = bk
    }
        ;
    bc.uh = function () {
        this.bAo.bX(this.dn);
        delete this.dn;
        delete this.Xr;
        this.bAs(this.QY)
    }
        ;
    bQ.bgi = NEJ.C();
    var KN, cbb;
    KN = bQ.bgi.bT(cV.yO, !0);
    cbb = bQ.bgi.dC;
    KN.di = function () {
        this.dv();
        this.bq = bb.ew("LI", "f-thide");
        this.LV()
    }
        ;
    KN.LV = function () {
        bj.bt(this.bq, "click", function (be) {
            bj.co(be);
            this.bG("onclick", this)
        }
            .bi(this))
    }
        ;
    KN.dq = function () { }
        ;
    KN.cv = function (bf) {
        this.cw(bf);
        this.bt("onclick", bf.onclick || NEJ.F)
    }
        ;
    KN.iV = function () {
        this.bq.innerHTML = '<a href="#">' + this.ck.text + "</a>"
    }
})();
(function () {
    var bd = NEJ.P, cg = NEJ.O, cz = NEJ.F, bb = bd("nej.e"), bj = bd("nej.v"), cV = bd("nej.ui"), bL = bd("nej.ut"), bm = bd("nej.u"), bA = bd("nej.j"), bs = bd("nm.d"), bK = bd("nm.w"), bp = bd("nm.l"), bn = bd("nm.x"), bc, bO;
    var bgP = {
        0: {
            upl: "<i>�ϴ�����</i>",
            prev: "�赥����Ԥ��",
            big: "��ߴ���棨180x180���أ�",
            sml: "С�ߴ���棨40x40���أ�"
        },
        1: {
            upl: "<i>�ϴ�ͷ��</i>",
            prev: "ͷ��Ԥ��",
            big: "��ߴ�ͷ��180x180���أ�",
            sml: "С�ߴ�ͷ��40x40���أ�"
        },
        2: {
            upl: "<i>ѡ��ͼƬ</i>",
            prev: "����Ԥ��",
            big: "��ߴ���棨180*180��",
            sml: "С�ߴ���棨40*40��"
        }
    };
    bK.uu = NEJ.C();
    bc = bK.uu.bT(cV.fP);
    bO = bK.uu.dC;
    bc.dG = function () {
        this.dM();
        this.Eb()
    }
        ;
    bc.di = function () {
        this.dv();
        var cA = bb.bN(this.bq, "j-flag");
        var bk = bb.bN(cA[0], "ztag");
        this.cK = bk[0];
        this.oW = bk[1];
        bk = bb.bN(cA[1], "ztag");
        this.dU = {
            wrap: bk[0],
            holder: bk[1],
            view: bk[2],
            rect: bk[3],
            zoom: bk[4]
        };
        bk = bb.bN(cA[2], "ztag");
        this.je = {
            label: bk[0],
            big: bk[1],
            textBG: bk[2],
            small: bk[3],
            textSM: bk[4]
        };
        bk = bb.bN(cA[3], "ztag");
        this.gU = bk[0];
        bj.bt(bk[0], "click", this.mB.bi(this));
        bj.bt(bk[1], "click", this.Qw.bi(this));
        bj.bt(this.cK.fileupload, "change", this.DF.bi(this));
        bj.bt(this.cK.fileupload, "click", this.bgG.bi(this));
        this.bt("onrectchange", this.xR.bi(this));
        this.bt("onstatechange", this.jb.bi(this))
    }
        ;
    bc.dq = function () {
        this.dr = "m-wgt-cropper"
    }
        ;
    bc.bgF = function (bw) {
        var lE = bgP[bw || 0];
        this.oW.innerHTML = lE.upl;
        this.je.label.innerText = lE.prev;
        this.je.textBG.innerText = lE.big;
        this.je.textSM.innerText = lE.sml;
        this.Kg = lE
    }
        ;
    bc.cv = function (bf) {
        this.cw(bf);
        this.wy = bf.minrect;
        this.bgF(bf.type);
        this.fC = {};
        this.fQ = {};
        this.dD = {};
        if (!!bf.holder) {
            var fV = bb.ew("img", "full");
            fV.src = bf.holder + "?param=180y180";
            this.fQ = {
                big: fV,
                small: fV.cloneNode()
            };
            this.je.big.appendChild(this.fQ.big);
            this.je.small.appendChild(this.fQ.small)
        }
        this.lK = {
            width: this.dU.wrap.clientWidth,
            height: this.dU.wrap.clientHeight
        };
        this.kW = bL.zS.bH({
            body: this.dU.rect,
            view: this.dU.view,
            overflow: false,
            direction: 0,
            onchange: this.bG.bi(this, "onrectchange")
        });
        this.bG("onstatechange", "empty")
    }
        ;
    bc.cR = function () {
        bb.bB(this.dU.holder, "f-hide");
        bb.bC(this.dU.view, "f-hide");
        this.sZ();
        this.kW.bX();
        delete this.fC;
        delete this.fQ;
        delete this.dD;
        delete this.lK
    }
        ;
    bc.Eb = function () {
        var iO = 10
            , cs = {}
            , fv = {}
            , qp = !1;
        var ko = function (be) {
            bj.co(be);
            qp = !0;
            cs.x = bj.nc(be);
            cs.y = bj.qv(be);
            fv.width = this.dU.rect.clientWidth;
            fv.height = this.dU.rect.clientHeight
        };
        var oF = function (be) {
            if (!qp)
                return;
            var jr = this.dU.rect
                , uE = bj.nc(be) - cs.x
                , us = bj.qv(be) - cs.y
                , eG = Math.abs(uE) > Math.abs(us) ? uE : us
                , eC = fv.width + eG
                , dF = fv.height + eG
                , hI = Math.min(this.dD.vwidth - parseInt(bb.eE(jr, "left")), this.dD.vheight - parseInt(bb.eE(jr, "top")));
            dw = this.dU.rect.style;
            dw.width = Math.max(Math.min(eC, hI), iO) + "px";
            dw.height = Math.max(Math.min(dF, hI), iO) + "px";
            this.bG("onrectchange")
        };
        var pS = function () {
            qp = !1
        };
        return function () {
            bj.bt(this.dU.zoom, "mousedown", ko.bi(this));
            bj.bt(document, "mousemove", oF.bi(this));
            bj.bt(document, "mouseup", pS.bi(this))
        }
    }();
    bc.sZ = function () {
        if (this.fC.img)
            bb.dY(this.fC.img);
        if (this.fC.bg)
            bb.dY(this.fC.bg);
        if (this.fQ.big)
            bb.dY(this.fQ.big);
        if (this.fQ.small)
            bb.dY(this.fQ.small)
    }
        ;
    bc.DF = function () {
        var Hh = /.+\.(jpg)|(png)|(jpeg)|(jpe)|(jfif)|(bmp)$/i;
        var Hf = function (bF) {
            return Hh.test(bF)
        };
        return function () {
            if (bn.kL(this.cK.fileupload.value))
                return;
            if (!Hf(this.cK.fileupload.value)) {
                bp.ci.bS({
                    type: 2,
                    tip: "��֧��jpg��png��bmp��ʽ��ͼƬ�ϴ�"
                });
                return
            }
            bA.hT(this.cK, {
                type: "json",
                method: "post",
                onload: this.He.bi(this),
                onerror: this.uW.bi(this)
            });
            this.bG("onstatechange", "uploading")
        }
    }();
    bc.He = function (be) {
        if (be.code != 200) {
            this.uW();
            this.bG("onstatechange", "empty");
            return
        }
        if (this.wy && (be.height < this.wy[1] || be.width < this.wy[0])) {
            this.cK.reset();
            bp.ci.bS({
                type: 2,
                tip: "��ѡ��ߴ����" + this.wy[0] + "*" + this.wy[1] + "��ͼƬ�ļ�"
            });
            this.bG("onstatechange", "empty");
            return
        }
        this.cK.reset();
        this.sZ();
        this.GY = be.id;
        var fV = bb.ew("img");
        fV.src = be.url;
        this.fC.img = fV;
        this.fC.bg = fV.cloneNode();
        this.fQ.big = fV.cloneNode();
        this.fQ.small = fV.cloneNode();
        bj.bt(fV, "load", this.wb.bi(this));
        this.bG("onstatechange")
    }
        ;
    bc.wb = function (be) {
        bj.co(be);
        bj.kX(this.bgn, "load");
        this.dD.owidth = this.fC.img.width;
        this.dD.oheight = this.fC.img.height;
        var gq = this.dD.owidth > this.dD.oheight ? this.lK.width / this.dD.owidth : this.lK.height / this.dD.oheight;
        this.dD.vwidth = gq * this.dD.owidth;
        this.dD.vheight = gq * this.dD.oheight;
        var dw = this.dU.view.style;
        dw.width = this.dD.vwidth + "px";
        dw.height = this.dD.vheight + "px";
        dw.top = (this.lK.height - this.dD.vheight) / 2 + "px";
        dw.left = (this.lK.width - this.dD.vwidth) / 2 + "px";
        var rh = Math.min(Math.min(this.dD.vwidth, this.dD.vheight), 180)
            , nO = this.dU.rect.style;
        nO.width = rh + "px";
        nO.height = rh + "px";
        nO.top = (this.dD.vheight - rh) / 2 + "px";
        nO.left = (this.dD.vwidth - rh) / 2 + "px";
        this.dU.view.appendChild(this.fC.bg);
        this.dU.view.appendChild(this.fC.img);
        this.je.big.appendChild(this.fQ.big);
        this.je.small.appendChild(this.fQ.small);
        bb.bC(this.fQ.big, "f-pr");
        bb.bC(this.fQ.small, "f-pr");
        bb.bC(this.fC.bg, "bgimg");
        bb.bB(this.dU.view, "f-hide");
        bb.bC(this.dU.holder, "f-hide");
        this.bG("onrectchange")
    }
        ;
    bc.xR = function () {
        var zC = function (fv, mz, gz) {
            var gq = mz.clientWidth / fv.clientWidth
                , dw = gz.style;
            gz.width = gq * this.dD.vwidth;
            gz.height = gq * this.dD.vheight;
            dw.top = -gq * Math.max(parseInt(bb.eE(fv, "top")), 0) + "px";
            dw.left = -gq * parseInt(bb.eE(fv, "left")) + "px"
        };
        return function () {
            var fv = this.dU.rect
                , hK = parseInt(bb.eE(fv, "top")) + 1
                , ht = parseInt(bb.eE(fv, "left")) + 1
                , eC = fv.clientWidth
                , dF = fv.clientHeight
                , Gi = "rect(" + hK + "px " + (ht + eC) + "px " + (hK + dF) + "px " + ht + "px)";
            bb.cf(this.fC.img, "clip", Gi);
            zC.call(this, fv, this.je.big, this.fQ.big);
            zC.call(this, fv, this.je.small, this.fQ.small)
        }
    }();
    bc.mB = function () {
        if (bb.cN(this.gU, "u-btn2-dis"))
            return;
        var gq = this.dD.owidth / this.dD.vwidth
            , jr = this.dU.rect
            , xW = [Math.round(gq * parseInt(bb.eE(jr, "left"))), Math.max(Math.round(gq * parseInt(bb.eE(jr, "top"))), 0), Math.round(gq * jr.clientWidth), Math.round(gq * jr.clientHeight)];
        bA.cE("/upload/img/op", {
            type: "json",
            method: "get",
            query: {
                id: this.GY,
                op: xW.join("y")
            },
            onload: function (be) {
                this.bG("onstatechange");
                if (be.code == 200) {
                    this.bG("onclip", be)
                } else {
                    bp.ci.bS({
                        type: 2,
                        tip: "����ʧ��"
                    })
                }
            }
                .bi(this),
            onerror: function () {
                this.bG("onstatechange");
                bp.ci.bS({
                    type: 2,
                    tip: "����ʧ��"
                })
            }
        });
        this.bG("onstatechange", "saving")
    }
        ;
    bc.bgG = function (be) {
        if (bb.cN(this.oW, "u-btn2-dis"))
            bj.co(be)
    }
        ;
    bc.uW = function () {
        this.bG("onstatechange");
        if (!bb.cN(this.dU.holder, "f-hide")) { }
        bp.ci.bS({
            type: 2,
            tip: "�ϴ�ʧ��"
        })
    }
        ;
    bc.Qw = function () {
        this.bG("oncancle")
    }
        ;
    bc.jb = function (eN) {
        bb.bB(this.oW, "u-btn2-dis");
        bb.bB(this.gU, "u-btn2-dis");
        this.oW.innerHTML = this.Kg.upl;
        this.gU.innerHTML = "<i>�� ��</i>";
        switch (eN) {
            case "empty":
                bb.bC(this.gU, "u-btn2-dis");
                break;
            case "uploading":
                bb.bC(this.oW, "u-btn2-dis");
                bb.bC(this.gU, "u-btn2-dis");
                this.oW.innerHTML = "<i>�ϴ���...</i>";
                break;
            case "saving":
                bb.bC(this.gU, "u-btn2-dis");
                this.gU.innerHTML = "<i>������...</i>";
                break
        }
    }
})();
(function () {
    var bd = NEJ.P, cg = NEJ.O, bb = bd("nej.e"), bj = bd("nej.v"), bm = bd("nej.u"), bL = bd("nej.ut"), bA = bd("nej.j"), bs = bd("nm.d"), bI = bd("nm.m"), bn = bd("nm.x"), bp = bd("nm.l"), bQ = bd("nm.m.p"), bc, bO, bzd = "�ǳ�Ϊ4-30���֣��Ҳ�������-��_����������ַ�";
    bQ.byZ = NEJ.C();
    bc = bQ.byZ.bT(bI.eh);
    bc.cX = function () {
        this.dc();
        this.bVy = bb.bD("update_form");
        this.tr = bb.bD("err");
        var cJ = bb.ek("yselect");
        this.OM = bQ.zv.bH({
            selected: cJ[0],
            btn: cJ[1],
            listParent: cJ[2],
            defaultText: "--"
        });
        for (var i = (new Date).getFullYear(), wn = []; i >= 1920; i--) {
            wn.push({
                index: i,
                text: i,
                value: i
            })
        }
        this.OM.kJ(wn);
        this.OM.bt("onchange", this.rR.bi(this));
        cJ = bb.ek("mselect");
        this.OW = bQ.zv.bH({
            selected: cJ[0],
            btn: cJ[1],
            listParent: cJ[2],
            defaultText: "-"
        });
        for (var i = 1, wn = []; i <= 12; i++) {
            wn.push({
                index: i,
                text: i >= 10 ? i : "0" + i,
                value: i
            })
        }
        this.OW.kJ(wn);
        this.OW.bt("onchange", this.rR.bi(this));
        cJ = bb.ek("dselect");
        this.JV = bQ.zv.bH({
            selected: cJ[0],
            btn: cJ[1],
            listParent: cJ[2],
            defaultText: "-"
        });
        if (window.birthday > (new Date(1900, 0, 1)).getTime()) {
            var biB = new Date(window.birthday);
            this.OM.gn(biB.getFullYear());
            this.OW.gn(biB.getMonth() + 1);
            this.JV.gn(biB.getDate())
        }
        cJ = bb.ek("pselect");
        this.JX = bQ.zv.bH({
            selected: cJ[0],
            btn: cJ[1],
            listParent: cJ[2],
            defaultText: "-ʡ��-"
        });
        cJ = bb.ek("cselect");
        this.JY = bQ.zv.bH({
            selected: cJ[0],
            btn: cJ[1],
            listParent: cJ[2],
            defaultText: "-����-"
        });
        var GZ = bs.mC.bqT();
        for (var i = 0, wn = []; i < GZ.length; i++) {
            wn.push({
                index: i,
                text: GZ[i].name,
                value: GZ[i].id
            })
        }
        this.JX.kJ(wn);
        this.JX.bt("onchange", this.bVH.bi(this));
        this.JY.bt("onchange", function () {
            this.JX.QW()
        }
            .bi(this));
        if (window.province == 11e4 || window.province == 12e4 || window.province == 31e4 || window.province == 5e5) {
            window.city = window.province;
            window.province = 1
        } else if (window.province == 81e4 || window.province == 82e4) {
            window.city = window.province;
            window.province = 2
        }
        this.JX.gn(window.province);
        this.JY.gn(window.city);
        bj.bt(document, "click", this.dN.bi(this));
        this.tS = bb.bD("signature");
        this.byA = bb.bD("remain");
        bj.bt(this.tS, "input", this.byw.bi(this));
        this.byw();
        this.rd = bb.bD("nickname");
        bj.bt(this.rd, "blur", this.bVK.bi(this));
        this.mJ = bb.bD("baseBox");
        this.rq = bb.bD("cropBox");
        bj.bt("upload", "click", this.Le.bi(this));
        bj.bt("back", "click", function (be) {
            bj.co(be);
            this.mJ.style.display = "";
            this.rq.parentNode.style.display = "none"
        }
            .bi(this));
        if (window.sub == "ava")
            this.Le()
    }
        ;
    bc.Le = function (be) {
        this.mJ.style.display = "none";
        this.rq.parentNode.style.display = "";
        bj.co(be);
        if (this.kI)
            this.kI.bX();
        this.kI = bd("nm.w").uu.bH({
            type: 1,
            parent: "cropBox",
            holder: window.avatarUrl,
            onclip: this.mB.bi(this),
            oncancle: function () {
                this.mJ.style.display = "";
                this.rq.parentNode.style.display = "none"
            }
                .bi(this)
        })
    }
        ;
    bc.mB = function (bl) {
        this.biv = bl.url;
        this.bVM = bl.id;
        bb.bD("avatar").src = this.biv;
        this.mJ.style.display = "";
        this.rq.parentNode.style.display = "none";
        bA.cE("/api/user/avatar/set", {
            type: "json",
            method: "POST",
            data: bm.eH({
                avatarUrl: this.biv
            }),
            onload: function (bo) { }
                .bi(this)
        })
    }
        ;
    bc.byw = function (be) {
        nej.p.ei.browser == "ie" && nej.p.ei.version < "7.0" ? setTimeout(this.bym.bi(this), 0) : this.bym()
    }
        ;
    bc.bym = function () {
        var cD = this.tS.value.trim().length;
        if (cD > 140) {
            this.byA.innerHTML = "��������";
            bb.bC(this.tS, "u-txt-err")
        } else {
            this.byA.innerHTML = 140 - cD;
            bb.bB(this.tS, "u-txt-err")
        }
    }
        ;
    bc.bbV = function () {
        var minLength = 4;
        var maxLength = 30;
        var strt = this.rd.value.trim();
        var count = 0;
        for (var index = 0, jk = strt.length; index < jk; index++) {
            var sss = strt.charAt(index);
            if (sss.match("[һ-��]")) {
                count += 2
            } else if (sss.match("[a-z|A-Z|0-9|_|-]")) {
                count += 1
            } else {
                return false
            }
        }
        if (count > maxLength || minLength > count)
            return false;
        return true
    }
        ;
    bc.bVK = function (be) {
        if (!this.bbV()) {
            this.Ke(bzd);
            return
        }
        this.Ke("");
        this.byg = false;
        var jS = this.rd.value.trim();
        if (jS != window.nickname) {
            bA.cE("/api/nickname/duplicated", {
                type: "json",
                method: "POST",
                data: bm.eH({
                    nickname: jS
                }),
                onload: function (bl) {
                    if (bl.nickname == jS && bl.code == 200 && !!bl.duplicated) {
                        this.Ke("�ǳ��ظ���");
                        this.byg = true
                    }
                }
                    .bi(this)
            })
        }
    }
        ;
    bc.dN = function (be) {
        var bh = bj.bZ(be, "d:action");
        if (!bh)
            return;
        bj.co(be);
        switch (bb.bz(bh, "action")) {
            case "save":
                this.bye(be);
                return;
            case "cancel":
                this.Py(be);
                return
        }
    }
        ;
    bc.Py = function (be) {
        var bl = this.byd();
        if (window.nickname != bl.nickname || window.signature != bl.signature || window.gender != bl.gender || window.province != bl.province || window.city != bl.city || !!this.biv) {
            bn.iB({
                title: "����δ����",
                btnok: "����",
                btncc: "������",
                message: "�޸ĵ���Ϣ��δ���棬�Ƿ񱣴���뿪?",
                action: function (bl) {
                    if (bl == "ok") {
                        this.bye()
                    } else {
                        location.dispatch2("/user/home?id=" + window.userId)
                    }
                }
                    .bi(this)
            })
        } else {
            location.dispatch2("/user/home?id=" + window.userId)
        }
    }
        ;
    bc.rR = function (be) {
        var Pp = this.OM.gV()
            , hJ = this.OW.gV()
            , lB = this.JV.gV();
        if (Pp > 0 && hJ > 0) {
            for (var i = 1, wn = [], bxZ = (new Date(Pp, hJ, 0)).getDate(); i <= bxZ; i++) {
                wn.push({
                    index: i,
                    text: i >= 10 ? i : "0" + i,
                    value: i
                })
            }
            this.JV.uh();
            this.JV.kJ(wn);
            this.JV.gn(Math.min(lB, bxZ))
        }
    }
        ;
    bc.bVH = function (be) {
        this.JY.uh();
        var qJ = this.JX.gV();
        var yS = bs.mC.Ro(qJ);
        var bik = [];
        for (var bP in yS) {
            bik.push({
                text: yS[bP],
                value: bP
            })
        }
        this.JY.kJ(bik);
        this.JY.gn(bik[0].value)
    }
        ;
    bc.byd = function () {
        var gd = this.bVy["gender"];
        for (var i = 0, bxX = 0; i < gd.length; i++) {
            if (gd[i].checked) {
                bxX = gd[i].value;
                break
            }
        }
        var bl = {
            nickname: this.rd.value.trim(),
            signature: this.tS.value.trim(),
            gender: Number(bxX),
            avatarImgId: this.bVM || 0
        };
        var rI = this.JX.gV()
            , Vc = this.JY.gV();
        if (rI > 0)
            bl.province = rI;
        if (Vc > 0)
            bl.city = Vc;
        var Pp = this.OM.gV();
        var hJ = this.OW.gV();
        var lB = this.JV.gV();
        if (Pp > 0 && hJ > 0 && lB > 0) {
            bl.birthday = (new Date(Pp, hJ - 1, lB)).getTime()
        }
        return bl
    }
        ;
    bc.Ke = function (cu) {
        if (!!cu && !!cu.length) {
            this.tr.style.display = "block";
            this.tr.lastChild.innerHTML = cu;
            bb.bC(this.rd, "u-txt-err")
        } else {
            this.tr.style.display = "none";
            bb.bB(this.rd, "u-txt-err")
        }
    }
        ;
    bc.bye = function (be) {
        if (!!this.byg)
            return;
        if (!this.bbV()) {
            this.Ke(bzd);
            return
        }
        if (this.tS.value.trim().length > 140) {
            bp.ci.bS({
                tip: "���˽����������ܳ���140����",
                type: 2,
                autoclose: true
            });
            return
        }
        var bl = this.byd();
        if (bl.province == 1 || bl.province == 2) {
            bl.province = bl.city
        }
        bA.cE("/api/user/profile/update", {
            type: "json",
            method: "POST",
            data: bm.eH(bl),
            onload: this.bVX.bi(this)
        })
    }
        ;
    bc.bVX = function (bl) {
        if (bl && bl.code == 200) {
            if (bl.point > 0) {
                bp.ci.bS({
                    tip: '������� ���<em class="s-fc6">' + bl.point + "����</em>",
                    autoclose: true
                })
            } else {
                bp.ci.bS({
                    tip: "����ɹ���",
                    autoclose: true
                })
            }
        } else if (bl && bl.code == 407) {
            bp.ci.bS({
                tip: "�������ò��ܰ����Ƿ��ַ���",
                type: 2,
                autoclose: true
            })
        } else if (bl.message) {
            bp.ci.bS({
                tip: bl.message,
                type: 2,
                autoclose: true
            })
        }
    }
        ;
    bb.eb("template-box");
    new bQ.byZ
})()
