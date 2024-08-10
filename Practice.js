
// This is call back hell
// const getData=(dataId,nextData)=>{
//     setTimeout(()=>{
//         console.log("data",dataId);
//         nextData();
//     },4000);
// }

// getData(1,()=>{
//     getData(2,()=>{
//         getData(3,()=>{
//             console.log("Finished");
//         })
//     })
// });


// and i ma going to do the promise chaining

// const getDataWithPromise=(dataId)=>{
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("data",dataId);
//             resolve("success");
//         },3000);
//     });
// }

// getDataWithPromise(1).then(()=>{
//     getDataWithPromise(2).then(()=>{
//         getDataWithPromise(3).then(()=>{
//             console.log("Success");
//         })
//     })
// });


// Now the best way to do the asynchronous programming

const getDatawithAsync=(dataId)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",dataId);
            resolve("success");
        },2000);
    });
};

// async function fetchingData(){
//     await getDatawithAsync(1);
//     await getDatawithAsync(2);
//     await getDatawithAsync(3);
//     await getDatawithAsync(4);
// }

// fetchingData();

// immediate invoked function expression

// (async function(){
//     await getDatawithAsync(1);
//     await getDatawithAsync(2);
//     await getDatawithAsync(3);
//     await getDatawithAsync(4);
// })();
