// function f1()
// {
//     console.log("hi")
//     setTimeout(f2, 3000);
// }
// function f2(){
//     console.log("hello")
// }
// f1()

// //
// function success()
// {
//     console.log("success")
// }
// function fail()
// {
//     console.log("fail")
// }
// function error()
// {
//     console.log("error")
// }
// function exe(data,callback)
// {
//     console.log(`balance ${data}`)
//     callback();
// }
// function datas(tig)
// {
//     if(tig>0)
//     {
//         exe(tig,success)
//     }
//     else if(tig<=0)
//     {
//         exe(tig,fail)
//     }
//     else{
//         exe(tig,error)
//     }
// }
// datas(2)

async function API(){
    try{
    const response= await fetch('https://66e526d55cc7f9b6273c69e7.mockapi.io/users')
    const data=await response.json()
     console.table(data)
    return data
    }
    catch(error){
        console.log("hello")
    }
}

    async function apidata() {
        const apidat1a=await API();
        console.log(apidat1a)
       
        const dd=apidat1a.map((data)=>{console.log(data)})
    }
    apidata();