const asyncFun1=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data1");
            resolve("Success");
        },4000);
    });
}
const asyncFun2=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data2");
            resolve("Success");
        },4000);
    });
}

let p1=asyncFun1();
p1.then((result)=>{
    console.log("fetching data 2.........");
    let p2=asyncFun2();
    p2.then((result)=>{
        console.log("fetching finished");
    });
});