// JavaScript Document

/*�����email�ı�����ʱ*/
function emailFocus(){
	var email=document.getElementById("email");
	email.className="login_content_input login_content_input_Focus";
	}
	
/*����뿪email�ı�����ʱ*/	
function emailBlur(){
	var email=document.getElementById("email");
		email.className="login_content_input";
		}
		
/*����������ı�����ʱ*/
function pwdFocus(){
	var pwd=document.getElementById("pwd");
	pwd.className="login_content_input login_content_input_Focus";
	}
	
/*����뿪�����ı�����ʱ*/	
function pwdBlur(){
	var pwd=document.getElementById("pwd");
		pwd.className="login_content_input";
		}
/*������¼��ťʱ����֤email��ַ�������Ƿ�Ϊ��*/
function checkLogin(){
	var email=document.getElementById("email").value;
	var pwd=document.getElementById("pwd").value;
	if(email==""){
		alert("������Email��ַ���ǳ�");
		return false;
		}
	if(pwd==""){
		alert("����������");
		return false;
		}
	return true;
	}
	
/*��������ע�����ע��ҳ��*/
function jump(){
	window.location.href="register.html";
	}