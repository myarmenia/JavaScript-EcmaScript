var status = function(response){
	if(response.status !== 200){
		return Promise.reject(new Error(response.statusText));
	}
	return Promise.resolve(response);
}
var json = function(response){
	return response.json()
}
const h1="<h1>JavaScript Simple Fetch example/Connecting to backend/</h1>";
fetch('http://www.mocky.io/v2/594f999a100000ee19af3fd7',
	  { method : 'post',
	  body: 'userID=1'
	  })
.then(status)
.then(json)
.then(function(data){
		document.write(h1+data[0].body)
})
.catch(function(error){
	console.log('error', error)
})