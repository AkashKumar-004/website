function f1(){
    console.log("h");
}
const f2=()=>{
    console.log("k")
    for(let i=1;i<10;i++)
    {
        console.log(i);
    }
}
const f3=()=>console.log("a");
f1()
f2()
f3()