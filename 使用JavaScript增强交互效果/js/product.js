// JavaScript Document

/*���ͬ�����ද̬��ʾ*/
var bookSort=new Array("�й�����С˵��13880��","�й����ִ�С...��640��","�й��ŵ�С˵��1547��","�Ĵ�������696��","�۰�̨С˵��838��","���С˵��5119��","��̽/����/��...��2519��","���/�ֲ���798��","ħ�ã�369��","�ƻ� ��513��","������574��","���£�726��","��� ��6700��","��ᣨ4855��","���У�949��","������99��","ְ����176��","�ƾ���292��","�ٳ���438��","��ʷ��1329��","Ӱ��С˵��501��","��Ʒ����2019��","����������3273��");

function productList(){
	bookList=document.getElementById("product_catList_class");
	for(var i in bookSort){
		var bookTitle="<li> ��<a href='#' class='blue'>"+bookSort[i]+"</a></li>";
		bookList.innerHTML+=bookTitle;
		}
	}

/*�Ҳ�ͼ���鶯̬��ʾ*/
var catalog=new Array();
catalog['˽ļ���ײ���¶�ʱ��������ܵĽ���С˵��'] = ['product_list_01.jpg',4,'���ֽ�','��ɽ���ճ�����', '2009��08��','����ǰ����һ�ι��еĶࡢ��֮ս�У������Ƶҡ��ֿ�Ϊ�׵�˽ļ���𡪽�Ͷ�ʣ�����������Ϊ�׵�˽ļ���𣬴������Э���ʳ���档���ϣ���������Ϊ�׵�˽ļ��������Ͷ�ʱ������壬���½�Ͷ�ʲҰܡ�����...','13.10','59��','��18.90','��32.00'];

catalog['Ȧ��Ȧ��.1.ս��ƪ'] = ['product_list_02.jpg',4,'��ǿ','�廪��ѧ������', '2006��01��','��Ȼû�����̣�ȴ��ս����Ѫ�ȣ���Ȼ��δս����ȴ��������ʹ�ࡣ �����һ���ײ��������Ա����Ϊһ�������Ŀ����˾���й���������ϯ�����ڼ�������������ҵ��ж�־��������ʱ�򣬵���������Ƶ�Ȧ�ף�...','��8.90','68��','��19.10','��28.00'];

function bookList(){
	var content="";
	for(var i in catalog){
	content+="<div class='product_storyList_content_left'><img src=images/"+catalog[i][0]+" alt='ͼ���б�'></div>";
		content+="<div class='product_storyList_content_right'><ul>";
		content+="<li class='product_storyList_content_dash'><a href='#' class='blue_14'>"+i+"</a></li>";
		content+="<li>�˿����֣�";
			 for(var k=0;k<5;k++){
				  if(k<catalog[i][1]){
					content+= "<img src='images/star_red.gif' alt='star'>";
					  }
					else{
					content+= "<img src='images/star_gray.gif' alt='star'>";
						}
				  }
			  content+="</li>";
              content+="<li>�����ߣ�<a href='#' class='blue_14'>"+catalog[i][2]+"</a> ��</li>";
              content+="<li>�����磺<a href='#' class='blue_14'>"+catalog[i][3]+"</a></li>";
             content+="<li>����ʱ�䣺"+catalog[i][4]+"</li>";
             content+="<li>"+catalog[i][5]+"</li>";
              content+="<li> <dl class='product_content_dd'>";
		content+="<dd><img src='images/product_buy_02.gif' alt='shopping'></dd>";
              content+="<dd><img src='images/product_buy_01.gif' alt='shopping'></dd>";
			  content+="<dd>��ʡ��"+catalog[i][6]+"</dd>";
			  content+="<dd>�ۿۣ�"+catalog[i][7]+"</dd>";
			 content+=" <dd class='footer_dull_red'>"+catalog[i][8]+"</dd>";
               content+="<dd class='product_content_delete'>"+catalog[i][9]+"</dd>";
			   content+="</dl></li> </ul></div>;"
        content+="<div class='product_storyList_content_bottom'></div>";
		}
		
		document.getElementById("storyBooksssss").innerHTML=content;
	}
window.onload=function(){
	bookList();
	productList();
	}

