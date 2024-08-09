// function getData(dataId,nextData){
//     setTimeout(()=>{
//         console.log("data",dataId);
//         console.log(`Getting data ${dataId}.............`);
//         nextData();
//     },2000);
// }


// getData(1,()=>{
//     getData(2,()=>{
//         getData(3,()=>{
//             getData(4,()=>{
//                 console.log("finished work");
//             })
//         })
//     })
// });




//with the help of promise chaining

function getData(dataId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",dataId);
            resolve("success");
        },4000);
    });

}

// getData(1).then((result)=>{
//   console.log(result);
//   getData(2).then((result)=>{
//     console.log(result);
//   });
// });


getData(1).then((result)=>{
  return getData(2)
}).then((result)=>{
    return getData(3)
}).then((result)=>{
    return getData(4)
}).then((result)=>{
    console.log(result);
});
