
const para=document.getElementById("fact-para");
const btn=document.getElementById("fact-btn");

btn.addEventListener("click",()=>{
    getFact();
});

const url="https://cat-fact.herokuapp.com/facts";

// const getFact= async()=>{
//     let response = await fetch(url);
//     const data=await response.json();
//     console.log(data[0].text);
//     para.innerText=data[0].text;

// };

function getFact(){
    fetch(url).then((response)=>{
        return response.json();
    }).then((data)=>{
        para.innerText=data[0].text})
};

let element=document.createElement("h1");
element.innerText="Nishant";
document.body.append(element);
