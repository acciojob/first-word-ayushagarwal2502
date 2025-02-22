function firstWord(s) {
  // your code here
	let a=s.trim();
	let b=""; 
	for(let i=0;i<a.length;i++){
		if(a[i]===' '){
			return b;
		}
		else{
			b+=a[i];
		}
	}
  return b;
}

// Do not change the code below
   
const s = prompt("Enter String:");
alert(firstWord(s));
