//your JS code here. If required.
let select = document.getElementById("colorSelect");
let btn =  document.querySelector("input[type=button]")

btn.addEventlistener("click",()=>{
	for (const child of select.children) {
		if(child.value === select.value){
			 child.remove();
		}
		
	}
});