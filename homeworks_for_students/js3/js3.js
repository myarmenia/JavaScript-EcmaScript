function f1(){
	return Math.ceil(Math.random()*4);
}
var arr1 = [f1(), f1(), f1()];
div1.innerHTML = arr1[0]
div2.innerHTML = arr1[1]
div3.innerHTML = arr1[2]

function f2(){
	div4.innerHTML = f1()
	div5.innerHTML = f1()
	div6.innerHTML = f1()
	
	div1.innerHTML == div4.innerHTML ? div4.style.background = 'green' : div4.style.background = 'red'
	div2.innerHTML == div5.innerHTML ? div5.style.background = 'green' : div5.style.background = 'red'
	div3.innerHTML == div6.innerHTML ? div6.style.background = 'green' : div6.style.background = 'red'
}
