// JavaScript Document

/*�����email�ı�����ʱ*/
function emailFocus(){
	var email=document.getElementById("email");
	var promptId=document.getElementById("email_prompt");
	email.className="register_input register_input_Focus";
	promptId.innerHTML="�����佫������¼���������˺ţ���������������֤�ʼ�";
	 promptId.className="register_prompt";
	}
	
/*����뿪email�ı�����ʱ*/	
function emailBlur(){
	var email=document.getElementById("email");
	var promptId=document.getElementById("email_prompt");
	promptId.innerHTML="";
	var reg=/^\w+@\w+(\.[a-zA-Z]{2,3}){1,2}$/;	
    if(email.value==""){
		promptId.innerHTML="�����ʼ��Ǳ��������������Email��ַ";
		promptId.className="register_prompt_error";
		email.className="register_input register_input_Blur";
		return false;
		  }
		if(reg.test(email.value)==false){
	    promptId.innerHTML="�����ʼ���ʽ����ȷ������������";
		promptId.className="register_prompt_error";
		email.className="register_input register_input_Blur";
	return false;
	  }
	  
	  promptId.className="register_prompt_ok";
	  email.className="register_input";
	  return true;
}

/*������ǳ��ı�����ʱ*/
function nickNameFocus(){
	var nickName=document.getElementById("nickName");
	var nickNameId=document.getElementById("nickName_prompt");
	nickName.className="register_input register_input_Focus";
	nickNameId.innerHTML="�ǳƿ��ɴ�СдӢ����ĸ��������ɣ�����Ϊ4-20���ַ�";
	 nickNameId.className="register_prompt";
	}
	
/*����뿪�ǳ��ı�����ʱ*/	
function nickNameBlur(){
	var nickName=document.getElementById("nickName");
	var nickNameId=document.getElementById("nickName_prompt");
	nickNameId.innerHTML="";
	var reg=/^[a-zA-Z0-9]{4,20}$/;	
     if(nickName.value==""){
	    nickNameId.innerHTML="�ǳ�Ϊ����������������ǳ�";
		nickNameId.className="register_prompt_error";
		nickName.className="register_input register_input_Blur";
	return false;
	  }
	  if(reg.test(nickName.value)==false){
	    nickNameId.innerHTML="�ǳƸ�ʽ�������ô�СдӢ����ĸ�����֣�����4-20���ַ�";
		nickNameId.className="register_prompt_error";
		nickName.className="register_input register_input_Blur";
	return false;
	  }
	
	  nickNameId.className="register_prompt_ok";
	  nickName.className="register_input";
	  return true;
}


/*����������ı�����ʱ*/
function pwdFocus(){
	var pwd=document.getElementById("pwd");
	var pwdId=document.getElementById("pwd_prompt");
	pwd.className="register_input register_input_Focus";
	pwdId.innerHTML="������ɴ�СдӢ����ĸ��������ɣ�����6��20���ַ�";
	pwdId.className="register_prompt";
	}
	
/*����뿪�����ı�����ʱ*/	
function pwdBlur(){
	var pwd=document.getElementById("pwd");
	var pwdId=document.getElementById("pwd_prompt");
	pwdId.innerHTML="";
	var reg=/^[a-zA-Z0-9]{6,20}$/;	
     if(pwd.value==""){
	    pwdId.innerHTML="����Ϊ�������������������";
		pwdId.className="register_prompt_error";
		pwd.className="register_input register_input_Blur";
	return false;
	  }
	  if(reg.test(pwd.value)==false){
	    pwdId.innerHTML="�����ʽ�������ô�СдӢ����ĸ�����֣�����6-20���ַ�";
		pwdId.className="register_prompt_error";
		pwd.className="register_input register_input_Blur";
	return false;
	  }
	 
	  pwdId.className="register_prompt_ok";
	  pwd.className="register_input";
	  return true;
}

/*�����������һ�������ı�����ʱ*/
function repwdFocus(){
	var repwd=document.getElementById("repwd");
	repwd.className="register_input register_input_Focus";
	}
	
/*����뿪������һ�������ı�����ʱ*/	
function repwdBlur(){
	var pwd=document.getElementById("pwd");
	var repwd=document.getElementById("repwd");
	var repwdId=document.getElementById("repwd_prompt");
	repwdId.innerHTML="";
     if(repwd.value==""){
	    repwdId.innerHTML="���ٴ�������������";
		repwdId.className="register_prompt_error";
		repwd.className="register_input register_input_Blur";
	return false;
	  }
	  if(pwd.value!=repwd.value){
	    repwdId.innerHTML="�����������벻һ�£�����������";
		repwdId.className="register_prompt_error";
		repwd.className="register_input register_input_Blur";
	return false;
	  }
	 
	  repwdId.className="register_prompt_ok";
	  repwd.className="register_input";
	  return true;
}
/*�����ύע��ҳ��ʱ����ҳ�����ݽ�����֤*/
function checkRegister(){
	  emailBlur();
	  nickNameBlur();
	  pwdBlur();
	  repwdBlur();
	  var flagEmail=emailBlur();
	  var flagNickName=nickNameBlur();
	  var flagPwd=pwdBlur();
	  var flagRepwd=repwdBlur();
	  if(flagEmail==true &&flagNickName==true &&flagPwd==true &&flagRepwd==true){
		  return true;
		  }
		else{
			return false;
			}
	}

/*���ڵص�ʡ�����С���������ѡ��*/
var cityList = new Array();
     cityList['������'] = ['������','������','������', '������','������','��̨��','����','����','��ɽ'];
	 cityList['�Ϻ���'] = ['��ɽ��','������','������', '�����','������','������','�ϻ���','�����','¬����'];
	 cityList['����ʡ'] = ['������','������','��ͷ��','�麣��','��ɽ��','��ɽ��','��ݸ��'];
     cityList['������'] = ['������', '�޺���', '������', '������', '������', '��ɽ��', '�����ܱ�'];
	 cityList['������'] = ['������', '�ϰ���', '������', 'ɳƺ����', '��������', '�山��', '��ɿ���', '������'];
     cityList['�����'] = ['��ƽ��', '������', '�Ͽ���', '�ӱ���', '�Ӷ���', '������', '������', '������'];
	 cityList['����ʡ'] = ['�Ͼ���','������','������'];
	 cityList['�㽭ʡ'] = ['������','������','������'];
	 cityList['�Ĵ�ʡ'] = ['�Ĵ�ʡ','�ɶ���'];
	 cityList['����ʡ'] = ['������'];
	 cityList['����ʡ'] = ['������','������','Ȫ����','������'];
	 cityList['ɽ��ʡ'] = ['������','�ൺ��','��̨��'];
	 cityList['����ʡ'] = ['����ʡ','�ϲ���'];
	 cityList['����ʡ'] = ['������','������'];
	 cityList['����ʡ'] = ['����ʡ','�Ϸ���'];
	 cityList['�ӱ�ʡ'] = ['������','ʯ��ׯ��'];
	 cityList['����ʡ'] = ['֣����','������'];
	 cityList['����ʡ'] = ['�人��','�˲���'];
	 cityList['����ʡ'] = ['����ʡ','��ɳ��'];
	 cityList['����ʡ'] = ['����ʡ','������'];
	 cityList['ɽ��ʡ'] = ['ɽ��ʡ','̫ԭ��'];
	 cityList['������ʡ'] = ['������ʡ','��������'];
	 cityList['����'] = ['����'];
	 
  function changeCity(){
     var province=document.getElementById("province").value; 
	 var city=document.getElementById("city");
	 city.options.length=0; //�����ǰcity�е�ѡ��
	for (var i in cityList){
	        if (i == province){
                for (var j in cityList[i]){
					try{
					city.add(new Option(cityList[i][j],cityList[i][j]),null);
					}
					catch(e){
						city.add(new Option(cityList[i][j],cityList[i][j]));
						}
                }
            }
       }
  } 
  function allProvince(){
	  var province=document.getElementById("province");
      for (var i in cityList){
		  try{
		 province.add(new Option(i, i),null); //��׼��ʽ
		  }
		  catch(e){
			  province.add(new Option(i, i));  //IE
			  }
		}	
  }
    window.onload=allProvince;
	
/*���������ύע�ᰴť��ʱ����Ť��ʽ*/
function btn_over(){
	document.getElementById("registerBtn").src="images/register_btn_over.gif";
	}

/*������뿪�ύע�ᰴť��ʱ����Ť��ʽ*/
function btn_out(){
	document.getElementById("registerBtn").src="images/register_btn_out.gif";
	}