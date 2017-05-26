var xam = {
	LoopRunFuncInfo: [{ LastRunTime: new Date() * 1, TimeSpan: 1000 * 10, FuncName: "Test" }],
	LoopFuncHandler: function () {
		FuncHandler.GetFuncList((funcList) => {
			var currentTime = new Date() * 1;
			for (var i in funcList) {
				var funcInfo = funcList[i];
				var funcIndex = xam.JsonIndex(xam.LoopRunFuncInfo, "FuncName", funcInfo.FuncName);
				if (funcIndex !== -1) {
					var lastRunInfo = xam.LoopRunFuncInfo[funcIndex];
					if (currentTime - lastRunInfo.LastRunTime - funcInfo.TimeSpan >= 0) {
						lastRunInfo.TimeSpan = funcInfo.TimeSpan;
						lastRunInfo.LastRunTime = currentTime;
						try {
							eval(funcInfo.FuncCode);
						} catch (e) {
							chromeMethods.CreateNotification(xam.$("����[{0}]��������", funcName), e);
						}
					}
				} else {
					xam.LoopRunFuncInfo.push({
						FuncName: funcInfo.FuncName,
						LastRunTime: currentTime,
						TimeSpan: funcInfo.TimeSpan
					});
					try {
						eval(funcInfo.FuncCode);
					} catch (e) {
						chromeMethods.CreateNotification(xam.$("����[{0}]��������", funcName), e);
					}
				}
			}
			setTimeout(xam.LoopFuncHandler, 400);
		}, 2);
	},
	GetSetStr: function () {
		var argReg = /{[\u4e00-\u9fa5 ]+\:[^}]+}/g;
		function decomposeArgStr(argStr) {
			return argStr.replace("{", "").replace("}", "");
		}
		function strToData(str) {
			var data = str.split(":");
			if (data.length != 2) {
				throw "�������ݰ�����"
			} else {
				return { Key: data[0], Val: data[1] };
			}
		}
		this.Set = function (str, newJsonVal) {
			var argList = str.match(argReg);
			var oriData = {};
			for (var i in argList) {
				var packageStr = argList[i];
				var data = strToData(decomposeArgStr(packageStr));

				oriData[data.Key] = data.Val;
			}

			for (var key in newJsonVal) {
				oriData[key] = newJsonVal[key];
			}

			for (var key in oriData) {
				var tempReg = new RegExp("{[ ]*" + key + "[ ]*\:[^}]+}", "g");
				str = str.replace(tempReg, "{" + key + ":" + oriData[key] + "}");
			}
			return str;
		}
		this.Get = function (str) {
			var argList = str.match(argReg);
			var jsonVal = {};
			for (var i in argList) {
				var arg = argList[i];
				var data = strToData(decomposeArgStr(arg));
				jsonVal[data.Key] = data.Val;
			}
			return jsonVal;
		}
	},
	JsonIndex: function (jsonArr, fieldName, val) {
		return jsonArr.map(function (d) { return d[fieldName]; }).indexOf(val);
	},
	GetTimeStr: function (time) {
		time = time === undefined ? new Date() : new Date(time);
		var d = time;
		var m = d.getMinutes();
		var h = d.getHours();
		var datestring = xam.$("{0}��{1}��{2}��{3}ʱ{4}��", d.getFullYear(), d.getMonth() + 1, d.getDate(), (h > 9 ? h : '0' + h), (m > 9 ? m : '0' + m));
		return datestring;
	},
	CallAjax: function (info) {
		info.type = info.type === undefined ? "GET" : info.type;
		info.getResult = info.getResult === undefined ? function () { } : info.getResult;
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.open(info.type, info.url, true);
		for (var i in info.header) {
			xmlhttp.setRequestHeader(info.header[i].key, info.header[i].value);
		}
		xmlhttp.send(info.data);
		xmlhttp.onreadystatechange = function () {
			if (xmlhttp.readyState === 4) {
				info.getResult(xmlhttp)
				info.complete(xmlhttp.responseText);
			}
		};
	},
	RandomNum: function (seed) {
		var ran = (Math.random() + "").substr(2) * 1;
		return seed === undefined ? ran : ran % seed;
	},
	RandomStr: function (seed) {
		return xam.RandomNum(seed).toString(32);
	},
	GetColumns(objArray, columnName) {
		var arr = [];
		for (var i in objArray) {
			if (objArray[i][columnName] !== undefined) {
				arr.push(objArray[i][columnName]);
			}
			return arr;
		}
	},
	PromptJson(obj, info) {
		info = info === undefined ? "" : info;
		prompt(info, JSON.stringify(obj));
	},
	$: function (str) {
		var reg = /{\d+}/g;
		var flag = "%xam#";
		var regResult = str.match(reg);
		var numList = [];
		for (var i in regResult) {
			var oriStr = regResult[i];
			var num = oriStr.substr(1, oriStr.length - 2) * 1;
			if (num < 0) {
				throw "�����±겻��С��0";
			}
			numList.push(num);
		}
		var maxIndex = (numList.sort())[numList.length - 1];
		if (maxIndex > arguments.length - 2) {
			throw "������������";
		}
		if (regResult !== null) {
			for (var i in regResult) {
				var oriStr = regResult[i];
				var arg = oriStr.substr(1, oriStr.length - 2) * 1 + 1;
				str = str.replace(oriStr, flag + arguments[arg] + flag);
			}
		}
		return str.replace(new RegExp(flag, "g"), "");
	},
	GetCode: function (func) {
		var entire = func.toString();
		return entire.slice(entire.indexOf("{") + 1, entire.lastIndexOf("}"));
	},
	Test: function () { alert(delayTime) },
	TempFunc: {},
	Eval: function (code, callBack) {
		//needs jquery
		//chrome extension not allow eval or new Function
		$.ajax({
			url: 'data:application/javascript;charset=utf-8,' + encodeURIComponent(code),
			cache: true,
			success: function (r) {
				if (typeof callBack === "function") {
					callBack()
				}
			},
			error: function (r) {
				console.log("Eval error");
				console.log(r)
			}
		})
	},
	NewFunction: function (info) {
		var code = info.code || "";
		var callBack = info.callBack || function (func) { func(); };
		var funcName = info.funcName || "Func" + xam.RandomNum();
		$.ajax({
			url: xam.$('data:application/javascript;charset=utf-8,xam.TempFuncList.{0}=function (){ {1} }', funcName, encodeURIComponent(code)),
			cache: true,
			success: function (r) {
				if (typeof callBack === "function") {
					callBack(xam.TempFuncList[funcName]);
				}
			},
			error: function (r) {
				console.log("NewFunction error");
				console.log(r)
			}
		})
	},
	TempFuncList: {},
	ViewFile: function (filePath) {
		var protocol = location.protocol;
		var origin = commonFunc.$("{0}//{1}", location.protocol, location.host);
		filePath = filePath.length > protocol.length
            ? (filePath.substr(0, protocol.length).toLowerCase() === protocol.toLowerCase()
                ? filePath
                : origin + filePath)
            : origin + filePath;
		layer.msg("���ڼ���..");
		$.ajax({
			url: "http://www.yozodcs.com/onlinefile",
			data:
            {
            	downloadUrl: filePath,
            	convertType: 0
            },
			dataType: "json",
			type: "post",
			success: function (r) {
				if (r.result === 0) {
					window.open(r.data[0]);
				} else {
					layer.alert(r.message);
				}
			},
			error: function (r) {
				console.log(r);
				layer.msg("����ʧ��");
			}
		});
	}
}

function CreateTask(info) {
	var markList = [
{ name: "G01", desc: "�����ܴ��ȫ�£�", mark: 3.333 },
{ name: "G01", desc: "�����ܴ��ȫ�£�", mark: 3.333 },
{ name: "G02", desc: "�����ܴ���ؽ���", mark: 1.667 },
{ name: "G03", desc: "�¹��ܱ��루��ͨ��", mark: 0.333 },
{ name: "G04", desc: "�ؽ����ܱ��루��ͨ��", mark: 0.222 },
{ name: "G05", desc: " ���ݹ��ܱ���", mark: 0.333 },
{ name: "G06", desc: "��̬ҳ��", mark: 0.113 },
{ name: "G07", desc: "���ܵ������", mark: 0.333 },
{ name: "G08", desc: "��Ŀ���Ϸ���", mark: 4.545 },
{ name: "G09", desc: "���·���", mark: 0.5 },
{ name: "G10", desc: "�����޸�", mark: 0.25 },
{ name: "D01", desc: "���ݲ�ѯ", mark: 0.111 },
{ name: "D02", desc: "���ݸ���", mark: 0.15 },
{ name: "D03", desc: "���ݿ�ű�����ͨ��", mark: 0.15 },
{ name: "D04", desc: "���ݿ�ű������ӣ�", mark: 0.333 },
{ name: "D05", desc: "���ݼ��", mark: 0.15 },
{ name: "D06", desc: "���ݿ�", mark: 1 },
{ name: "D07", desc: "���ݿ�ָ�", mark: 1.5 },
{ name: "D08", desc: "���ݿⱸ��", mark: 0.5 },
{ name: "D09", desc: "���ݿ�ܹ��", mark: 3 },
{ name: "D10", desc: "�ű��޸�", mark: 0.25 }
	];
	var maxHour = 130;
	var maxScore = 75;
	if (!info.comment) {
		throw "����˵������Ϊ��";
	}
	if (!info.hours) {
		throw "Сʱ������Ϊ��";
	}
	if (info.taskList === null || info.taskList === undefined || info.taskList === []) {
		throw "�������Ͳ���Ϊ��";
	}
	var targetScore = (info.hours / maxHour) * maxScore;
	var typeList = [];

	for (var i in info.taskList) {
		var type = info.taskList[i].toUpperCase();
		var index = xam.JsonIndex(markList, "name", type);
		if (index !== -1) {
			typeList.push(markList[index]);
		}
		else {
			throw "���������б��в�����" + type;
		}
	}
	var currentScore = 0;
	var descStr = "";
	var detailStr = "";
	var existList = [];
	for (var i in typeList) {
		var typeDetail = typeList[i];
		existList.push({ name: typeDetail.name, counter: 1, desc: typeDetail.desc });
		currentScore += typeDetail.mark;
		$("label:contains('" + typeDetail.name + "')").eq(0).find("input").eq(0).prop("checked", true);
	}
	while (currentScore < targetScore) {
		var typeDetail = typeList[xam.RandomNum(typeList.length)];
		currentScore += typeDetail.mark;
		var existIndex = xam.JsonIndex(existList, "name", typeDetail.name);
		++existList[existIndex].counter;
	}
	for (var i in existList) {
		var typeDetailInfo = existList[i];
		descStr += xam.$("{0}{1}*{2}", descStr === "" ? "" : ";", typeDetailInfo.name, typeDetailInfo.counter);
		detailStr += xam.$("{0}{1}*{2}", descStr === "" ? "" : ";", typeDetailInfo.desc, typeDetailInfo.counter);
	}
	var result = { TargetScore: targetScore, Comment: info.comment, ScoreDesc: descStr, Score: currentScore.toFixed(2), Detail: detailStr };

	$("#time_entry_comments").val(result.Comment);
	$("#time_entry_activity_id").val(9);
	$("#time_entry_hours").val(info.hours);
	$("#time_entry_custom_field_values_5").val(result.ScoreDesc);
	$("#time_entry_custom_field_values_6").val(result.Score);
	return result;
}

function AutoFillTask() {
	var taskList = [];
	var checkedList = $("input[type=checkbox]:checked");
	for (var i = 0; i < checkedList.length; i++) {
		var item = checkedList.eq(i);
		var val = item.val();
		var inputVal = val.split(" ");
		if (inputVal.length >= 2 && (val[0] === "G" || val[0] === "D")) {
			taskList.push(inputVal[0]);
		}
	}
	var desc = $("#time_entry_comments").val();
	var hours = $("#time_entry_hours").val();
	if (!desc) {
		alert("����дע��");
		return false;
	}
	if (!hours) {
		alert("����дСʱ");
		return false;
	}
	if (taskList.length === 0) {
		alert("�빴ѡ��������");
		return false;
	}
	var info = { comment: desc, hours: hours, taskList: taskList };
	return CreateTask(info);
}
AutoFillTask();