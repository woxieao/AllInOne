function StorageHelper(info) {
var self=this;
self.KeyName=info.KeyName;
if(self.KeyName===undefined||self.KeyName===""||self.KeyName===null)
{
throw "KeyName不能为空";
}
this.GetValue=function (){
var data=localStorage.getItem(self.KeyName);
  return JSON.parse((data === null || data === undefined || data === "") ? "[]" : data )
}

this.SetValue=function (value){
localStorage.setItem(self.KeyName,JSON.stringify(value));
}
this.AppendValue=function (value){
self.SetValue(self.GetValue().push(value));
}
    
}