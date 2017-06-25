var arr= [];
function f1(e1){
var k1 = {
	anun: e1.target.id,
	url: e1.target.src
}
	arr.push(k1);
	console.log(arr)
	
	var a1=e1.target.id;
	console.log(a1)
	e1.target.id == 'strok' ? strok.removeEventListener("click", f1) : e1.target.id == 'baze' ? baze.removeEventListener("click", f1) : 
	e1.target.id == 'man' ? man.removeEventListener("click", f1) :
	e1.target.id == 'zoomingdove' ? zoomingdove.removeEventListener("click", f1) :	null
	rcount.innerHTML = arr.length;
}
var i1=0;
function res1(){
if(typeof arr[i1] != 'undefined'){
	var elem = document.createElement("img");
	elem.setAttribute("src", arr[i1].url);
	elem.setAttribute("height", "100");
	elem.setAttribute("width", "100");
	elem.setAttribute("class", "cent");
	elem.setAttribute("title", arr[i1].anun);
	result1.appendChild(elem);
	i1+=1;
	res1();
}

}
strok.addEventListener("click", f1)
baze.addEventListener("click", f1)
man.addEventListener("click", f1)
zoomingdove.addEventListener("click", f1)
res.addEventListener("click", res1)