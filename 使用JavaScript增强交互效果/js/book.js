// JavaScript Document
/*ͨ�ú���������$��һ����������Ҳ���԰�$�ı�����changesName�ĺ�������*/
 function $(element){
	  return document.getElementById(element);
	  }

/*ѭ����ʾ���ֻ�������*/
 /*ѭ����ʾ��ͼƬ��ַ*/	
     var scorll_img=new Array(); 
     scorll_img[0]="images/dd_scroll_1.jpg";
     scorll_img[1]="images/dd_scroll_2.jpg";
     scorll_img[2]="images/dd_scroll_3.jpg";
     scorll_img[3]="images/dd_scroll_4.jpg";
     scorll_img[4]="images/dd_scroll_5.jpg";
     scorll_img[5]="images/dd_scroll_6.jpg";
	 /*��ť��ID���*/
	 var scroll_number=new Array();
	 scroll_number[0]="scroll_number_1";
	 scroll_number[1]="scroll_number_2";
	 scroll_number[2]="scroll_number_3";
	 scroll_number[3]="scroll_number_4";
	 scroll_number[4]="scroll_number_5";
	 scroll_number[5]="scroll_number_6";
	 var NowFrame = 1;   //������ʾ��һ��ͼƬ
     var MaxFrame = 6;   //һ������ͼƬ
function loopShow(d1){
    if(Number(d1)){
		NowFrame=d1;                //�赱ǰ��ʾͼƬ
		}
	for(var i=1;i<(MaxFrame+1);i++){
		if(i==NowFrame){
			document.getElementById("dd_scroll").src =scorll_img[i-1];   //��ʾ��ǰͼƬ
			document.getElementById(scroll_number[i-1]).className="scroll_number_over";    //���õ�ǰ��ť��CSS��ʽ
         }
		 else{
		 document.getElementById(scroll_number[i-1]).className="scroll_number_out";
		 }
	}
	if(NowFrame == MaxFrame){   //������һ����ʾ��ͼƬ
		NowFrame = 1;
		}
	else{
		NowFrame++;
		}
//var theTimer=setTimeout('loopShow()', 3000);   //���ö�ʱ������ʾ��һ��ͼƬ
}
var theTimer=setInterval('loopShow()', 3000);   //���ö�ʱ������ʾ��һ��ͼƬ		
//window.onload=loopShow;

/*�����ϼܰ��TAB�л�Ч��*/
     var bookCate=new Array();
     bookCate[0]="book_history";
     bookCate[1]="book_family";
     bookCate[2]="book_culture";
     bookCate[3]="book_novel";
     var bookClass=new Array();
     bookClass[0]="history";
     bookClass[1]="family";
     bookClass[2]="culture";
     bookClass[3]="novel";
 function bookPutUp(elementId){
	 for(var i=0;i<bookCate.length;i++){
		 if(elementId==i){
			 document.getElementById(bookCate[i]).className="book_show";
			 document.getElementById(bookClass[i]).className="book_type_out";
			 
			 }
		  else{
			document.getElementById(bookCate[i]).className="book_none";
			document.getElementById(bookClass[i]).className="book_type";
			  }
		 }
	 }
	 
	 


/*��Ѷ���ѭ����ֱ���Ϲ�����������Ч*/   
   var dome=$("dome");
   var dome1=$("dome1");
   var dome2=$("dome2");
   var speed=50;  //�������Ϲ����ٶ�
   dome2.innerHTML=dome1.innerHTML //����dome1Ϊdome2
   function moveTop(){
   if(dome2.offsetTop-dome.scrollTop<=0)   //��������dome1��dome2����ʱ
   dome.scrollTop-=dome1.offsetHeight      //dome�������
   else{
   dome.scrollTop++
   }
   }
   var MyMar=setInterval(moveTop,speed) //���ö�ʱ��
   dome.onmouseover=function() {clearInterval(MyMar)}//�������ʱ�����ʱ���ﵽ����ֹͣ��Ŀ��
   dome.onmouseout=function() {MyMar=setInterval(moveTop,speed)}//����ƿ�ʱ���趨ʱ������������
   
 /*�Ҳ����������Ĺ��ͼƬ*/  
 var rightT;
var rightR;
var objRight;
var rightWidth;
function place(){
	objRight=document.getElementById("right");
	rightWidth=document.getElementById("right1").width;
	if(objRight.currentStyle){//IE�����
       rightT=parseInt(objRight.currentStyle.top);
       rightR=parseInt(objRight.currentStyle.right);
    }
   else{//fireFox�����
       rightT=parseInt(document.defaultView.getComputedStyle(objRight,null).top);
       rightR=parseInt(document.defaultView.getComputedStyle(objRight,null).right);
	}

}

function move(){
	objRight.style.top=rightT+parseInt(document.documentElement.scrollTop)+"px";
	objRight.style.left=parseInt(document.documentElement.scrollLeft)+parseInt(document.documentElement.clientWidth)-rightR-rightWidth+"px";
	document.getElementById("dd_close").style.left="63px";
	}

window.onload=place;
window.onscroll=move;


 /*�Ҳ����������Ĺ��ͼƬ�ر�*/ 
function dd_close(){
	var objRight=document.getElementById("right");
	objRight.style.display="none";
	}
/*��ҳ������洰��*/
window.open('open.html','','top=0,left=200,width=500,height=327,scrollbars=0,resizable=0'); 	

   