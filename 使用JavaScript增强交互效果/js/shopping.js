// JavaScript Document
/*��������ѡ����Ʒ������Ϊ���Ƽ����ֵ���ʾ������*/
function shopping_commend_show(){
	var imgId=document.getElementById("shopping_commend_arrow");   //��ͷͼƬ
	var sortId=document.getElementById("shopping_commend_sort");   //�Ƽ�����Ʒ
	
	if(sortId.style.display=="none"){
		 sortId.style.display="block";
		 imgId.src="images/shopping_arrow_up.gif";
		}
	else{
		sortId.style.display="none";
		imgId.src="images/shopping_arrow_down.gif";
		}
	
	}
	
	
/*����Ƶ���Ʒ��ʱ*/	
function productOver(elementId){
	var Element=document.getElementById(elementId);
	Element.style.backgroundColor="#ffffff";
	}

/*����뿪��Ʒ��ʱ*/	
function productOut(elementId){
	var Element=document.getElementById(elementId);
	Element.style.backgroundColor="#fefbf2";
	}

/*ɾ����Ʒ*/
function deleteProduct(elementId){
	var delElement=document.getElementById(elementId);  //ɾ��Ԫ�ص�id
	var flag=confirm("��ȷ��Ҫɾ������Ʒ��");
	if(flag==true){
		delElement.parentNode.removeChild(delElement);
		productCount();
		}
	}
	
/*�Զ�������Ʒ���ܽ��ܹ���ʡ�Ľ��ͻ���*/
function productCount(){
	var total=0;      //��Ʒ����ܼ�
	var save=0;       //������ʡ�Ľ��
	var integral=0;   //�ɻ���Ʒ����
	
	var point;      //ÿһ����Ʒ�ĵ�Ʒ����
	var price;     //ÿһ����Ʒ���г��۸�
	var ddPrice;   //ÿһ����Ʒ�ĵ����۸�
	var number;    //ÿһ����Ʒ������

     /*����IDΪmyTableProduct��������е�����*/
	var myTableTr=document.getElementById("myTableProduct").getElementsByTagName("tr"); 
	for(var i=0;i<myTableTr.length;i++){
		point=myTableTr[i].getElementsByTagName("td")[1].getElementsByTagName("label")[0].innerHTML; 
		price=myTableTr[i].getElementsByTagName("td")[2].getElementsByTagName("label")[0].innerHTML;
		ddPrice=myTableTr[i].getElementsByTagName("td")[3].getElementsByTagName("label")[0].innerHTML;
		number=myTableTr[i].getElementsByTagName("td")[4].getElementsByTagName("input")[0].value;
		integral+=point*number;
		total+=ddPrice*number;
		save+=(price-ddPrice)*number;
		}
	document.getElementById("product_total").innerHTML=total;
	document.getElementById("product_save").innerHTML=save;
	document.getElementById("product_integral").innerHTML=integral;
	
	}
window.onload=productCount;