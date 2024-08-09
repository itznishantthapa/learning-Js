
const users=[
        {id:1,name:'Nishant',age:52},
        {id:3,name:'Krishna',age:60},
        {id:4,name:'Ram',age:20},
        {id:6,name:'Nishant',age:18},
        {id:7,name:'Krana',age:38},
        {id:8,name:'Parshuram',age:48},
        {id:9,name:'Shiva',age:78}
    ];

    const onlyName=users.map(
        (user)=>{
            return user.name
        }
    );

    console.log(onlyName);
    console.log("Length of the array: "+onlyName.length);


    //filter
const ageLow40=users.filter(
    (user)=>{
        
            return user.age<40
        
    }
);

const names=ageLow40.forEach(element => {
    console.log(element.name);
});


//find
const details=users.find((user)=>{
     return user.name==='Nishant';
    });

    console.log(details);







// const newAgeUser= users.map(
//     (user)=>{
//          return user.age+2;
//     }
// );

// console.log(newAgeUser);

// const totolAge=users.reduce(
//     (sum=0,user)=>{
//         return sum+user.age
//     },0
// );
// console.log(totolAge);

