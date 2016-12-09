function StorageHelper(info) {
console.log("存储的数据格式为[{key:xxx,data:xxxx}]");
var self=this;
self.KeyName=info.KeyName;
if(self.KeyName===undefined||self.KeyName===""||self.KeyName===null)
{
throw "KeyName不能为空";
}
self.Get=function (){
var data=localStorage.getItem(self.KeyName);
  return JSON.parse((data === null || data === undefined || data === "") ? "[]" : data )
}

self.Set=function (value){
localStorage.setItem(self.KeyName,JSON.stringify(value));
}
self.Append=function (key,data){
self.Set(self.Get().push({key:key,data:data}));
}
self.AppendOrOverride=function (key,data){
var arr=self.Get();
var flag=false;
for(var i in arr)
{
if(arr[i].key===key)
{
arr[i].data=data;
flag=true;
break;
}
}
if(!flag)
{
arr.push({key:key,data:data});
}
self.Set(arr);
}
    
}