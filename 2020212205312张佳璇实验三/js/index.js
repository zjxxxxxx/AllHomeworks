/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2022-03-11 14:14:26
 * @version $Id$
 */

//点击p1对象，其字体颜色变成红色//
p1.addEventListener('click',f1)

function f1() {
	p1.style.color = 'red';
}

//点击P2，将h1内容变成当前的日期，格式为yyyy-mm-dd//
const p2 = document.getElementsByClassName('m-item').item(1);
p2.addEventListener("click",f2)	

function f2() {
	var date = new Date();
	var seperator = "-";
	var year = date.getFullYear();
	var month = date.getMonth()+1;
	var nowdate = date.getDate();
	if(month >= 1 && month <= 9) {
		month = "0" +month;
	}
	if(nowdate >= 0 && nowdate <= 9) {
		nowdate = "0" + nowdate;
	}

	//var currentdate = year+seperator+month+seperator+nowdate;
    document.getElementsByTagName("h1").item(0).innerHTML=year+seperator+month+seperator+nowdate;
}

//点击p3，将其父对象的li元素增加fn-active类//
const p3 = document.getElementsByClassName('m-item').item(2);
p3.addEventListener('click',f3)	

function f3() {
	var par = p3.parentNode;
	par.classList.add("fn-active");
}

//点击p4，删除表格的p8元素//
const p4 = document.getElementsByClassName('m-item').item(3);
const p8 = document.getElementsByClassName('m-item').item(7);
p4.addEventListener('click',f4)

function f4() {
	var parent = p8.parentNode;
	parent.removeChild(p8);
}

//点击p5,打开一个新窗口显示淘宝主页//
const p5 = document.getElementsByClassName('m-item').item(4);
p5.addEventListener('click',f5)

function f5() {
	window.open("https://www.taobao.com/")
}

//点击p6，在ul的最后添加一个li元素，内容是p9//
const p6 = document.getElementsByClassName('m-item').item(5);
p6.addEventListener('click',f6)

function f6() {
	var u = p6.parentNode;
	var createLi = document.createElement("Li");
	var text = document.createTextNode("p9");
	createLi.appendChild(text);
	u.appendChild(createLi);
}

//点击li对象，弹出alert对话框显示当前点击li的序号//
const lli = document.getElementsByTagName('Li');

for(var i=0 ; i < lli.length ; i ++ ){
		lli[i].setAttribute('index',i+1);
		lli[i].onclick = function() {
			alert(this.getAttribute('index'));
		}
}

//点击p7对象,将 m-box 的宽度设置到屏幕宽度;
const p7 = document.getElementsByClassName('m-item').item(6);
p7.addEventListener('click',f7)

function f7() {
 	document.getElementsByClassName('m-box').item(0).style.width = window.screen.width+'px';
}
