// 第一个作业（jQ）
$(function(){  
    $(".pic").click(function(){  
        var _this = $(this); 
        imgShow("#outerdiv", "#innerdiv", "#bigimg", _this);  
    });  
});  
 
function imgShow(outerdiv, innerdiv, bigimg, _this){  
    var src = _this.attr("src"); 
    $(bigimg).attr("src", src);      

    $("<img/>").attr("src", src).load(function(){   
        var realWidth = this.width; 
        var realHeight = this.height;
        var scale = 0.2;  
        var bigWidth = realWidth*scale;
        var bigHeight = realHeight*scale;

        $(bigimg).css("width",bigWidth);
        $(bigimg).css("height",bigHeight);

        var bwidth = ($("#outerdiv").width());
        var bheight = ($("#outerdiv").height());

        var leftside = (bwidth-bigWidth)/2.2;  
        var topside = (bheight-bigHeight)/4;

        $(innerdiv).css({"top":topside, "left":leftside});
        $(outerdiv).show();
    });  
          
        $(outerdiv).click(function(){//消失
            $(this).hide(); 
        });  
}

//第一个作业（js）
var lis=document.getElementById('jss1').getElementsByTagName('img');
var box=document.getElementById('js1');
    for(var i=0;i<lis.length;i++){
           lis[i].onclick=function fc(e){
            var  newDiv=document.createElement('div');
                 newDiv.className='bg';
                 box.appendChild(newDiv);

            var  newImg=document.createElement('img');
                 newImg.className='maxpic';
                 newImg.src = e.currentTarget.getAttribute("src");
                 box.appendChild(newImg);

              newDiv.onclick=function(){
                box.removeChild(newDiv);
                box.removeChild(newImg);
              }

           }

    }

// 第二个作业jQ
function hn(){
  $('.menu:first-child').trigger("click");
}

$(document).ready(function(){
  window.onload=hn;
})

$('.menu').click(function(){
    $(this).parent().next().children().eq(
      $(this).index()).show().siblings().hide();
 })

$('.menu').click(function(){
  $('.menu').css("background",'#fff');
  $(this).css("background",'#ccc');
 })

// 第二个作业js
var aLi = document.getElementsByClassName('menu2');
var adivs = document.getElementsByClassName('content2');
var view = document.getElementById('no1');

for(var i=0;i<aLi.length;i++){
  aLi[i].index=i;
  aLi[i].onclick = function(){
    for(var f=0;f<aLi.length;f++){
      if(f==this.index){
        aLi[f].style.background ='#ccc';
        adivs[f].style.display = 'block';
        view.style.display = 'none';

      }else{
        aLi[f].style.background ='#fff';
        adivs[f].style.display = 'none';
        view.style.display = 'none';
      }
    }
  }
}

// 第三个作业js
// 删除行
function del(obj){
  var tr = obj.parentNode.parentNode;
  tr.parentNode.removeChild(tr);
  numCheck();
}

// 添加行
var btn = document.getElementById('addd');

btn.onclick = function(){
  var num = document.getElementById('table').getElementsByTagName('tr').length;
  var tab = document.getElementById('table');
  var trr=document.createElement('tr');
  var xl=document.createElement('td');
  var xm=document.createElement('td');
  var xr=document.createElement('td');
  var nbtn = document.createElement('button');
  nbtn.innerHTML = 'delete';
  nbtn.setAttribute('onclick','del(this)');

  xl.innerHTML=num+1;

  trr.appendChild(xl);
  trr.appendChild(xm); 
  xr.appendChild(nbtn);
  trr.appendChild(xr);
  tab.appendChild(trr);
  trr.className = "xvhao";

}

// 改变序号
function numCheck() {
  var hang = document.getElementById('table').getElementsByTagName('tr');
  var xvhao = [];
  var s=1;
  var hangshu = hang.length;
  for(i=0;i<hangshu;i++){
    xvhao[i]=i+1;
  }
  for(i=0;i<hangshu;i++){  
    document.getElementById('table').rows[i].cells[0].innerHTML=xvhao[i];
  }
}

// 第三个作业jQ
// 改变序号
var index =1;
var newindex;
$(".order").each(function(){
  newindex=$(this).html(index++);
})

// 删除行
$(function(){
    $("#tab3-2").on("click",".delbtn",function(){
      $(this).parent().parent().remove(); 
            index=1;
            $(".order").each(function(){
            $(this).html(index++);
        })
    })  
});

// 增加行
$(function(){  
    $(".addbtn").click(function(){
      $("#tab3-2").append("<tr><td><span class=\"order\"></span></td><td></td><td><button class=\"delbtn\">delete</button></td></tr>")
    var index =1;
    var newindex;
    $(".order").each(function(){
    newindex=$(this).html(index++);
     }) 
  })   
});
            
          
