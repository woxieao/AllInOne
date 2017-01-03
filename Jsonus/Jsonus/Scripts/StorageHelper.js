function StorageHelper(keyName) {
    var self = this;
    self.KeyName = keyName;
    if (self.KeyName === undefined || self.KeyName === "" || self.KeyName === null) {
        throw "keyName不能为空";
    }
    self.Get = function () {
        var data = localStorage.getItem(self.KeyName);
        return JSON.parse((data === null || data === undefined || data === "") ? "[]" : data);
    }
    function set(value) {
        localStorage.setItem(self.KeyName, JSON.stringify(value));
    }
    self.Append = function (data) {
        var oldData = self.Get();
        oldData.push(data);
        set(oldData);
    }
    self.AppendOrOverride = function (key, data) {
        var arr = self.Get();
        var flag = false;
        for (var i in arr) {
            if (arr[i].key === key) {
                arr[i].data = data;
                flag = true;
                break;
            }
        }
        if (!flag) {
            arr.push({ key: key, data: data });
        }
        set(arr);
    }
    self.Reset = function (data) {
        localStorage.setItem(self.KeyName, JSON.stringify((data === null || data === undefined || data === "") ? [] : data));
    }
}