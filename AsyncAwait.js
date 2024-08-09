const getData=(dataId)=>{
    return new Promise((resolve, reject )=>{
        setTimeout(()=>{
            console.log("data",dataId);
            resolve("success");
        },3000);
    });
}


async function fetchingData() {
    await getData(1);
    await getData(2);
    await getData(3);
    await getData(4);
}

fetchingData();