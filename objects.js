const obj={
    name:"Nishant",
    age:22,
    address:"dharan"
}

const arryKey=Object.keys(obj);

console.log(arryKey.length);


const list=[1,2,3,4,5,5,6,77,7,47,456,356234,234,'wertwert'];
console.log("The length of this list array is :"+list.length);

const elements=list.forEach(element => {
    console.log(element);
});