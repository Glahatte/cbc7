arr1=[1,2,3,4,5];
arr2=[6,7,8,9,10];


function Splicer(arr1, arr2, n){
    var arr1Copy=arr1.slice();
    var arr2Copy=arr2.slice();

    for(var i=0; i<arr1.length;i++){
        arr2Copy.splice(n+i),0,arrCopy[i]);
    }
    return arr2Copy;
}