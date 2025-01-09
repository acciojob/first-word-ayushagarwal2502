function firstWord(s) {
  // your code here
	let a='';
	for(let i=0;i<s.length;i++){
		if(s[i]==' ' && i!=0){
			return a;
		}
		else{
			a+=s[i];
		}
	}
	return a;
}

// Do not change the code below
   
const s = prompt("Enter String:");
alert(firstWord(s));
