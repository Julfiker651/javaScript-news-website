function findAddress(obj) {
    const v= Object.keys(obj).length;
    if(v === 3){
        return Object.values(obj).toString()
    }else if(v === 2){
        const change = Object.values(obj).concat(['--']);
        const temp = change[1];
         change[1] = change[2];
         change[2] = temp;
         return change;
    }else if(v === 1){
     return ( Object.values(obj).toString() + ' ,--'+' ,--')
    }

}
console.log(findAddress({street:10}))