//fs文件系统，文件简单写入
/*
    flag标记
    r read 只读
    w write 可写
    a append 追加

    \r\n换行

    0o666  Linux下文件权限的管理方式
    6 所有者的权限  4 可读 2 可写 1 可执行
    6 所属组的权限
    6其他人的权限代码的执行顺序和编写顺序不统一

    异步API：
*/
//1.引入fs模块
const fs = require('fs');
//2.写入文件
fs.writeFile('./index.html','\r\n我有我的态度',{flag:'a'},function(err){
    if(err){
        console.log("写入失败");
        console.log("失败的错误为"+err);
        return;
    }
    console.log("写入成功");
});