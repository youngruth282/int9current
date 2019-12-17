﻿//函数名：chksafe
//功能介绍：检查是否含有"'",'\\',"/"
//参数说明：要检查的字符串
//返回值：0：是  1：不是

function chksafe(a)
{ 
 return 1;
/* fibdn = new Array ("'" ,"\\", "、", ",", ";", "/");
 i=fibdn.length;
 j=a.length;
 for (ii=0;ii<i;ii++)
 { for (jj=0;jj<j;jj++)
  { temp1=a.charAt(jj);
   temp2=fibdn[ii];
   if (temp1==temp2)
   { return 0; }
  }
 }
 return 1;
*/ 
} 

//函数名：chkspc
//功能介绍：检查是否含有空格
//参数说明：要检查的字符串
//返回值：0：是  1：不是

function chkspc(a)
{
 var i=a.length;
 var j = 0;
 var k = 0;
 while (k<i)
 {
  if (a.charAt(k) != " ")
   j = j+1;
  k = k+1;
 }
 if (j==0)
 {
  return 0;
 }
 
 if (i!=j)
 { return 2; }
 else
 {
  return 1;
 }
}

//函数名：chkemail
//功能介绍：检查是否为Email Address
//参数说明：要检查的字符串
//返回值：0：不是  1：是 

function chkemail(a)
{ var i=a.length;
 var temp = a.indexOf('@');
 var tempd = a.indexOf('.');
 if (temp > 1) {
  if ((i-temp) > 3){
   
    if ((i-tempd)>0){
     return 1;
    }
   
  }
 }
 return 0;
}//opt1 小数     opt2   负数
//当opt2为1时检查num是否是负数
//当opt1为1时检查num是否是小数
//返回1是正确的，0是错误的
function chknbr(num,opt1,opt2)
{
 var i=num.length;
 var staus;
//staus用于记录.的个数
 status=0;
 if ((opt2!=1) && (num.charAt(0)=='-'))
 {
  //alert("You have enter a invalid number.");
  return 0;
 
 }
//当最后一位为.时出错
 if (num.charAt(i-1)=='.')
 {
  //alert("You have enter a invalid number.");
  return 0;
 }

 for (j=0;j<i;j++)
 {
  if (num.charAt(j)=='.')
  {
   status++;
  }
  if (status>1) 
  {
  //alert("You have enter a invalid number.");
  return 0;  
  }
  if (num.charAt(j)<'0' || num.charAt(j)>'9' )
  {
   if (((opt1==0) || (num.charAt(j)!='.')) && (j!=0)) 
   {
    //alert("You have enter a invalid number.");
    return 0;
   }
  }
 }
 return 1;
}
//函数名：chkdate
//功能介绍：检查是否为日期
//参数说明：要检查的字符串
//返回值：0：不是日期  1：是日期



function chkdate(datestr)
{
 var lthdatestr
 if (datestr != "")
  lthdatestr= datestr.length ;
 else
  lthdatestr=0;
  
 var tmpy="";
 var tmpm="";
 var tmpd="";
 //var datestr;
 var status;
 status=0;
 if ( lthdatestr== 0)
  return 0


 for (i=0;i<lthdatestr;i++)
 { if (datestr.charAt(i)== '-')
  {
   status++;
  }
  if (status>2)
  {
   //alert("Invalid format of date!");
   return 0;
  }
  if ((status==0) && (datestr.charAt(i)!='-'))
  {
   tmpy=tmpy+datestr.charAt(i)
  }
  if ((status==1) && (datestr.charAt(i)!='-'))
  {
   tmpm=tmpm+datestr.charAt(i)
  }
  if ((status==2) && (datestr.charAt(i)!='-'))
  {
   tmpd=tmpd+datestr.charAt(i)
  }

 }
 year=new String (tmpy);
 month=new String (tmpm);
 day=new String (tmpd)
 //tempdate= new String (year+month+day);
 //alert(tempdate);
 if ((tmpy.length!=4) || (tmpm.length>2) || (tmpd.length>2))
 {
  //alert("Invalid format of date!");
  return 0;
 }
 if (!((1<=month) && (12>=month) && (31>=day) && (1<=day)) )
 {
  //alert ("Invalid month or day!");
  return 0;
 }
 if (!((year % 4)==0) && (month==2) && (day==29))
 {
  //alert ("This is not a leap year!");
  return 0;
 }
 if ((month<=7) && ((month % 2)==0) && (day>=31))
 {
  //alert ("This month is a small month!");
  return 0;
 
 }
 if ((month>=8) && ((month % 2)==1) && (day>=31))
 {
  //alert ("This month is a small month!");
  return 0;
 }
 if ((month==2) && (day==30))
 {
  //alert("The Febryary never has this day!");
  return 0;
 }
 
 return 1;
}
//函数名：fucPWDchk
//功能介绍：检查是否含有非数字或字母
//参数说明：要检查的字符串
//返回值：0：含有 1：全部为数字或字母 


function fucPWDchk(str)
{
  var strSource ="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var ch;
  var i;
  var temp;
  
  for (i=0;i<=(str.length-1);i++)
  {
  
    ch = str.charAt(i);
    temp = strSource.indexOf(ch);
    if (temp==-1) 
    {
     return 0;
    }
  }
  if (strSource.indexOf(ch)==-1)
  {
    return 0;
  }
  else
  {
    return 1;
  } 
}

function jtrim(str)
{     while (str.charAt(0)==" ")
          {str=str.substr(1);}      
     while (str.charAt(str.length-1)==" ")
         {str=str.substr(0,str.length-1);}
     return(str);
}

//函数名：fucCheckNUM
//功能介绍：检查是否为数字
//参数说明：要检查的数字
//返回值：1为是数字，0为不是数字

function fucCheckNUM(NUM)
{
 var i,j,strTemp;
 strTemp="0123456789";
 if ( NUM.length== 0)
  return 0
 for (i=0;i<NUM.length;i++)
 {
  j=strTemp.indexOf(NUM.charAt(i)); 
  if (j==-1)
  {
  //说明有字符不是数字
   return 0;
  }
 }
 //说明是数字
 return 1;
}
//函数名：fucCheckTEL
//功能介绍：检查是否为电话号码
//参数说明：要检查的字符串
//返回值：1为是合法，0为不合法

function fucCheckTEL(TEL)
{
 var i,j,strTemp;
 strTemp="0123456789-()# ";
 for (i=0;i<TEL.length;i++)
 {
  j=strTemp.indexOf(TEL.charAt(i)); 
  if (j==-1)
  {
  //说明有字符不合法
   return 0;
  }
 }
 //说明合法
 return 1;
}

//函数名：fucCheckLength
//功能介绍：检查字符串的长度
//参数说明：要检查的字符串
//返回值：长度值

function fucCheckLength(strTemp)
{
 var i,sum;
 sum=0;
 for(i=0;i<strTemp.length;i++)
 {
  if ((strTemp.charCodeAt(i)>=0) && (strTemp.charCodeAt(i)<=255))
   sum=sum+1;
  else
   sum=sum+2;
 }
 return sum;
}
