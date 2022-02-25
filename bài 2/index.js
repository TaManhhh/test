function merge (s1,s2){
    let a =s1.split("").filter(Boolean);
    let b =s2.split("");
    let merge2String='';
    for( i =0;i< a.length||i <b.length;i++){
        if(i<a.length){
            merge2String +=a[i]}
            if(i<b.length){
                merge2String+= b[i]}
    }
    return merge2String;
}
console.log(merge('abc','123'))
console.log(merge('abcd','1234'))
