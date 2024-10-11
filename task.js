
// let age=20
// let name="mn"
// let city="hyd"
//  age=21
//  console.log(age)
//  console.log(name)



let details1={
    name:"manisha",
    city:"",
    qualification:"Btech",
    dob:null,
    caste:undefined,
    age:22

};
let details2 = {
    CGPA:7.5,
    name:"gayatri",
};

    for(value1 in details2){
        count=0
        for(value2 in details1){
          if(value1===value2){
            count++
          }
        }
        if(count==0){
          console.log( value1,"is not present")
          details1[value1]=details2[value1]
        }
    }
      console.log(details1)
    
    