function cubeNumber(number) {
    if(typeof number !== "number" || number < 0){
       return 'Please type you  Number'
    }
     return number**3
}

function matchFinder(string1, string2) {
     if(typeof string1 !== 'string' || typeof string2 !== "string"){
       return 'No String Please check your text'
    }
    const Result=string1.includes(string2)
    return Result
   }
function sortMaker(arr) {
    if (arr.some(array => array < 0)) {
        return 'Invalid Input'
    } else if (arr.every(num => num === arr[0])) {
        return 'equal'
    } else if (arr.some(array => array > 0)) {
        return arr.sort((a, b) => b - a)
    }
}
function findAddress(obj) {
    const objlength= Object.keys(obj).length;
    if(objlength === 3){
        return Object.values(obj).toString()
    }else if(objlength === 2){
        const change = Object.values(obj).concat(['--']);
        const temp = change[1];
         change[1] = change[2];
         change[2] = temp;
         return change;
    }else if(objlength === 1){
     return ( Object.values(obj).toString() + ' ,--'+' ,--')
    }

}
function canPay(changeArray, totalDue) {
    if(changeArray.length === 0 || Array.changeArray !== "number" || Array.changeArray >=0){
        return 'Empty Array'
    }
    let sum=0
    for(const total of changeArray){
      sum =sum +total
    }
   if( sum >= totalDue){
    return true
   }else{
    return false
   }
}

