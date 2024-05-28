type Friend = {
    firstName:string;
    lastName:string;
    ID?:number
}
let people ={
    friends:[] as Friend[]
};

let friend1:Friend ={
    firstName: "Abdul",
    lastName:"basit",
    ID:13244
};

let friend2:Friend ={
    firstName: "Hashir",
    lastName:"Mudasir",
    ID:13245
};
let friend3:Friend ={
    firstName: "Abdul",
    lastName:"Bari"
};

people.friends.push(friend1,friend2,friend3);
console.log(people);
