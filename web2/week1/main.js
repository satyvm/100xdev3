const NumArray = [21, 213, 123, 243, 2002];
// const LengthArray = NumArray.length;
let max = 0;

for (let i = 0; i < NumArray.length; i++) {
    if (NumArray[i] > max){
        max = NumArray[i];
    }
}

console.log(max)