import{B as a}from"./index.js";import{aT as d}from"./antd-65489578.js";import{l as e}from"./vue-ea98dac5.js";const s={a1:"1000000000",a2:"已取货",a3:"1234123421",a4:"3214321432"},b={b1:"付小小",b2:"18100000000",b3:"菜鸟仓储",b4:"浙江省杭州市西湖区万塘路18号",b5:"无"},m=[{field:"a1",label:"取货单号"},{field:"a2",label:"状态"},{field:"a3",label:"销售单号"},{field:"a4",label:"子订单"}],r=[{field:"b1",label:"用户姓名"},{field:"b2",label:"联系电话"},{field:"b3",label:"常用快递"},{field:"b4",label:"取货地址"},{field:"b5",label:"备注"}],o=[{title:"商品编号",width:150,dataIndex:"t1",customRender:({record:t})=>e(a,{type:"link",size:"small"},{default:()=>t.t1})},{title:"商品名称",width:150,dataIndex:"t2"},{title:"商品条码",width:150,dataIndex:"t3"},{title:"单价	",width:150,dataIndex:"t4"},{title:"数量（件）	",width:150,dataIndex:"t5"},{title:"金额",width:150,dataIndex:"t6"}],f=[{title:"时间",width:150,dataIndex:"t1"},{title:"当前进度",width:150,dataIndex:"t2"},{title:"状态",width:150,dataIndex:"t3",customRender:({record:t})=>e(d,{status:"success",text:t.t3},null)},{title:"操作员ID	",width:150,dataIndex:"t4"},{title:"耗时",width:150,dataIndex:"t5"}],c=[{t1:1234561,t2:"矿泉水 550ml",t3:"12421432143214321",t4:"2.00",t5:1,t6:2},{t1:1234562,t2:"矿泉水 550ml",t3:"12421432143214321",t4:"2.00",t5:2,t6:2},{t1:1234562,t2:"矿泉水 550ml",t3:"12421432143214321",t4:"2.00",t5:2,t6:2},{t1:1234562,t2:"矿泉水 550ml",t3:"12421432143214321",t4:"2.00",t5:2,t6:2}],h=[{t1:"2017-10-01 14:10",t2:"联系客户",t3:"进行中",t4:"取货员 ID1234",t5:"5mins"},{t1:"2017-10-01 14:10",t2:"取货员出发",t3:"成功",t4:"取货员 ID1234",t5:"5mins"},{t1:"2017-10-01 14:10",t2:"取货员接单",t3:"成功",t4:"系统",t5:"5mins"},{t1:"2017-10-01 14:10",t2:"申请审批通过",t3:"成功",t4:"用户",t5:"1h"}];export{b as personData,r as personSchema,s as refundData,m as refundSchema,c as refundTableData,o as refundTableSchema,h as refundTimeTableData,f as refundTimeTableSchema};
