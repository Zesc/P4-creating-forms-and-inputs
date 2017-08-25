//working on validation form for sing up form
var sForm = document.getElementById("signUp");
var bSubmit = document.getElementById('submit');
// var name = document.getElementById('name');

sForm.addEventListener('submit', function(event){
	event.preventDefault();
	var name = document.getElementById('name');
	var lname = document.getElementById('lname');
	var list = [name, lname];

	for (var i=0; i<list.length; i++){
		if(list[i].value === ''){
			list[i].className = 'my-invalid';
			list[i].setCustomValidity("Please, fill provide information.");	  	    		
		}else{
		list[i].className = 'my-valid';
		list[i].setCustomValidity('');
		}
	}
}); 

sForm.addEventListener('click', function(){
	// var name = document.getElementById('name');
	// var lname = document.getElementById('lname');
	// var list = [name, lname];

	// for (var i=0; i<list.length; i++){
	// 	if(i.value === ''){
	// 		name.className = 'my-invalid';
	// 		name.setCustomValidity("Please, fill provide information.");	  	    		
	// 	}else{
	// 	name.className = 'my-valid';
	// 	name.setCustomValidity('');
	// 	}
	// }
	// if(name.value === ''){
	// 	name.className = 'my-invalid';
	// 	name.setCustomValidity("Please, fill provide information.");	  	    		
	// }
	// else{
	// 	name.className = 'my-valid';
	// 	name.setCustomValidity('');
	// }
});