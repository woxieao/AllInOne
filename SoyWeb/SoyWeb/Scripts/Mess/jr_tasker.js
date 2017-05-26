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
							chromeMethods.CreateNotification(xam.$("函数[{0}]发生错误", funcName), e);
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
						chromeMethods.CreateNotification(xam.$("函数[{0}]发生错误", funcName), e);
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
				throw "解析数据包出错"
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
		var datestring = xam.$("{0}年{1}月{2}日{3}时{4}分", d.getFullYear(), d.getMonth() + 1, d.getDate(), (h > 9 ? h : '0' + h), (m > 9 ? m : '0' + m));
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
				throw "参数下标不可小于0";
			}
			numList.push(num);
		}
		var maxIndex = (numList.sort())[numList.length - 1];
		if (maxIndex > arguments.length - 2) {
			throw "参数输入有误";
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
		layer.msg("正在加载..");
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
				layer.msg("加载失败");
			}
		});
	}
}

function CreateTask(info) {
	var markList = [
{ name: "G01", desc: "程序框架搭建（全新）", mark: 3.333 },
{ name: "G01", desc: "程序框架搭建（全新）", mark: 3.333 },
{ name: "G02", desc: "程序框架搭建（重建）", mark: 1.667 },
{ name: "G03", desc: "新功能编码（普通）", mark: 0.333 },
{ name: "G04", desc: "重建功能编码（普通）", mark: 0.222 },
{ name: "G05", desc: " 数据功能编码", mark: 0.333 },
{ name: "G06", desc: "静态页面", mark: 0.113 },
{ name: "G07", desc: "功能点检查测试", mark: 0.333 },
{ name: "G08", desc: "项目整合发布", mark: 4.545 },
{ name: "G09", desc: "更新发布", mark: 0.5 },
{ name: "G10", desc: "功能修改", mark: 0.25 },
{ name: "D01", desc: "数据查询", mark: 0.111 },
{ name: "D02", desc: "数据更新", mark: 0.15 },
{ name: "D03", desc: "数据库脚本（普通）", mark: 0.15 },
{ name: "D04", desc: "数据库脚本（复杂）", mark: 0.333 },
{ name: "D05", desc: "数据检查", mark: 0.15 },
{ name: "D06", desc: "数据库搭建", mark: 1 },
{ name: "D07", desc: "数据库恢复", mark: 1.5 },
{ name: "D08", desc: "数据库备份", mark: 0.5 },
{ name: "D09", desc: "数据库架构搭建", mark: 3 },
{ name: "D10", desc: "脚本修改", mark: 0.25 }
	];
	var maxHour = 130;
	var maxScore = 75;
	if (!info.comment) {
		throw "任务说明不可为空";
	}
	if (!info.hours) {
		throw "小时数不可为空";
	}
	if (info.taskList === null || info.taskList === undefined || info.taskList === []) {
		throw "工作类型不可为空";
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
			throw "工作类型列表中不包含" + type;
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
		alert("请填写注释");
		return false;
	}
	if (!hours) {
		alert("请填写小时");
		return false;
	}
	if (taskList.length === 0) {
		alert("请勾选工作类型");
		return false;
	}
	var info = { comment: desc, hours: hours, taskList: taskList };
	return CreateTask(info);
}
AutoFillTask();