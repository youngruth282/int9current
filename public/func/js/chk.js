
function check_null ( column, name )
{

    if( column.length == 0 || column.value == '')
        return name + "不可以空白 !\n";
    return "";
}

function check_int ( column, name )
{
    if( column.length <= 0 ) {
        return name + "不可以空白 !\n";
    } else {
	    var error = false;

	    for( idx = 0 ; idx < column.length ; idx++ ) {
	        if( !( ( column.charAt(idx) >= '0' && column.charAt(idx) <= '9' )  ) ) {
	            error = true;
	            break;
	        }
	    }
	    if( error == true )
	        return name + "只能是數字 !\n";
	    return "";

    }
}

function check_passwd ( pw1, pw2 )
{
    if( pw1 == '' )  {
        return ("密碼不可以空白 !\n");
    }
    for( var idx = 0 ; idx < pw1.length ; idx++ )
        if( pw1.charAt(idx) == ' ' || pw1.charAt(idx) == '\"' )
            return ("密碼不可以含有空白或雙引號 !\n");
    if( pw1 != pw2 )
        return("密碼二次輸入不一樣,請重新輸入 !\n");
    return "";
}
//西元用	if(yy!=day_t.getFullYear()   ||   mm!=(day_t.getMonth()+1)     ||     dd!=day_t.getDate())   
//民國用	if(yy!=day_t.getYear()   ||   mm!=(day_t.getMonth()+1)     ||     dd!=day_t.getDate())
function   getweekday(columny,columnm, columnd, columnw) {
                  var yy=columny.value;
                  var mm=columnm.value;   
                  var dd=columnd.value;   
                  var day_t=new   Date(yy,mm-1,dd);                 
                  if(yy!=day_t.getYear()   ||   mm!=(day_t.getMonth()+1)     ||     dd!=day_t.getDate())   
                  {   
            columnw.value = "";
 				  return -1;   
    
                }
				
				var day;
				var ret=day_t.getDay();
if(ret==0) day = "禮拜日"
if(ret==1) day = "禮拜一"
if(ret==2) day = "禮拜二"
if(ret==3) day = "禮拜三"
if(ret==4) day = "禮拜四"
if(ret==5) day = "禮拜五"
if(ret==6) day = "禮拜六"
            columnw.value = day;
			return ret;
}
function   checkymd(columny,columnm, columnd) {
                  var yy=columny.value;   
                  var mm=columnm.value;   
                  var dd=columnd.value;   
                  var day_t=new   Date(yy,mm-1,dd);                 
                  if(yy!=day_t.getYear()   ||   mm!=(day_t.getMonth()+1)     ||     dd!=day_t.getDate())   
                  {   
                        alert("日期格式不规范或长度过长，请以形如（2004-2-14）格式填写！");   
              column.focus();   
                  return   false;   
    
                }   
            return   true;   
}

function   checkdate(column)   
  {   
            var   re=column.value.match(/^(\d{4})[\-/](\d{1,2})[\-/](\d{1,2})$/);   
            if(re==null)   
        {   
                  alert("日期格式不符合規範，请以 2010-3-14 格式填寫！");   
                column.focus();   
                  return   false;   
            }   
            else   
            {   
                  yy=re[1];   
                  mm=re[2];   
                  dd=re[3];   
                  day_t=new   Date(re[1],re[2]-1,re[3]);                 
				  if(yy!=day_t.getYear()   ||   mm!=(day_t.getMonth()+1)     ||     dd!=day_t.getDate())   
                  {   
                        alert("日期格式不符合規範，请以 2010-3-14 格式填寫！");    
              column.focus();   
                  return   false;   
    
                } 
            }       
            return   true;   
  }

function MultiLink(fm,obj,n){
	eval('document.'+fm+'.'+obj+'['+n+'].click();');
	document.body.focus();
}

function SingleLink(fm,obj){
	eval('document.'+fm+'.'+obj+'.click();');
	document.body.focus();
}

function makesnake(iNum) {
	x = (document.layers) ? e.pageX : document.body.scrollLeft+event.clientX-50;
	y = (document.layers) ? e.pageY : document.body.scrollTop+event.clientY-35;
	flag=1;
	if (flag==1 && document.all) {
		var thisspan = eval("span"+iNum+".style");
		thisspan.posLeft=x;
		thisspan.posTop=y;
		//thisspan.color="ff0000";
		thisspan.display ="";

	}
	else if (flag==1 && document.layers) {

		var thisspan = eval("document.span"+iNum);
		thisspan.left=x;
		thisspan.top=y;
		//thisspan.color="ff0000";
		thisspan.display ="";
	}

}

function mNoShow(iNum) {
	makesnake(iNum);
	var x,y;
	var flag=0;
}

function mNoUnShow(iNum) {
	if (flag==1 && document.all) {
		var thisspan = eval("span"+iNum+".style");
		thisspan.display ="none";
	}
	else if (flag==1 && document.layers) {
		var thisspan = eval("document.span"+iNum);
		thisspan.display ="none";
	}
	flag=0;
}

function openWin(url,size_w,size_h){
	aWindow=window.open(url,"thewindow","width="+size_w+",height="+size_h+",scrollbars=yes");
	aWindow.focus();
}

function isSure(msg) {
	if (confirm("確定要 "+msg+" 嗎?")) return true;
	else return false;
}
function openNewWindow(aurl){
	var newWin=window.open(aurl,"","location,status,menubar=yes,scrollbars=yes,toolbar=yes");
	newWin.focus();
}
function cleanString(upLow, halfWhole, trim, str){
  var half = new Array( '1', '2', '3', '4', '5', '6', '7', '8', '9', '0',
                        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
						'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
					    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
						'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' );
  var whole = new Array( '１', '２', '３', '４', '５', '６', '７', '８', '９', '０',
                         'ａ', 'ｂ', 'ｃ', 'ｄ', 'ｅ', 'ｆ', 'ｇ', 'ｈ', 'ｉ', 'ｊ', 'ｋ', 'ｌ', 'ｍ',
						 'ｎ', 'ｏ', 'ｐ', 'ｑ', 'ｒ', 'ｓ', 'ｔ', 'ｕ', 'ｖ', 'ｗ', 'ｘ', 'ｙ', 'ｚ',
					     'Ａ', 'Ｂ', 'Ｃ', 'Ｄ', 'Ｅ', 'Ｆ', 'Ｇ', 'Ｈ', 'Ｉ', 'Ｊ', 'Ｋ', 'Ｌ', 'Ｍ',
						 'Ｎ', 'Ｏ', 'Ｐ', 'Ｑ', 'Ｒ', 'Ｓ', 'Ｔ', 'Ｕ', 'Ｖ', 'Ｗ', 'Ｘ', 'Ｙ', 'Ｚ' );

  upLow = upLow.toLowerCase();
  halfWhole = halfWhole.toLowerCase();
  trim = trim.toLowerCase();

  if(upLow=='up')
	str = str.toUpperCase();
  else if(upLow=='low')
	str = str.toLowerCase();

  if(halfWhole=='half'){
	for(var i=0; i<str.length; i++){
	  for(var j=0; j<whole.length; j++){
	    if(str.charAt(i)==whole[j])
		  str = str.replace(whole[j], half[j]);
	  }
	}
  } else if(halfWhole=='whole') {
	for(var i=0; i<str.length; i++){
	  for(var j=0; j<half.length; j++){
	    if(str.charAt(i)==half[j])
		  str = str.replace(half[j], whole[j]);
	  }
	}
  }

  if(trim=='trim'){
	while(str.charAt(0)==' ' || str.charAt(0)=='　'){
	  str = str.substr(1);
	}
    while(str.charAt((str.length-1))==' ' || str.charAt((str.length-1))=='　'){
	  str = str.substr(0, (str.length-1));
	}
  }

  return str;
}
