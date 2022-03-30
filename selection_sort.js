let arr = [64,25,12,22,11];
//Selection sort
let min_index;
let temp;
for(let i =0; i < arr.length; i++) {
	min_index = i;
  for(let j = i+1; j < arr.length; j++){
    //find the minimum element throught the array
  	if(arr[j] < arr[min_index]){
    	min_index = j;
    }
  }
   // swap the element
   temp =  arr[i];
   arr[i] = arr[min_index];
   arr[min_index] = temp;
   console.log(arr);
}
