// function resolveafter2s (){
//     return new Promise(resolve =>{
//         console.log("starting slow promise");
//         setTimeout(function(){
//             resolve('done 2s');
//             console.log("slow promise is done");
//         }, 2000)
//     })
// };



// function resolveafter1s (){
//     return new Promise(resolve =>{
//         console.log("starting fast promise");
//         setTimeout(function(){
//             resolve('done 1s');
//             console.log("fast promise is done");
//         }, 1000)
//     })
// }



// async function sequential(){
//     console.log('==SEQUENTIAL START==');

//     const fast = resolveafter1s();
//     const slow = resolveafter2s();


    
//     console.log(await fast);  
//      console.log(await slow); 


// }



// async function concurrent(){
// await Promise.all([
//     (async ()=>{
//         console.log(await resolveafter1s());
//     }),
//     (async ()=>{
//         console.log(await resolveafter2s());
//     })
// ])
// }


// async function concurrent1 (){
//     const results = await Promise.all([
//         resolveafter1s(), resolveafter2s() ]);

// console.log(results[0]);
// console.log(results[1]);


// }
// sequential()
// concurrent()
// concurrent1();



let fail = true;


function downloadPage(url){
    console.log(`Downloading page from primary source ${url}`);
    return new Promise((resolve , reject) =>{
        if(fail){
            reject(new Error(`Page not found at the url ${url}`));
        }else{
            resolve({Source : "primary" , payload : 'high quality'});
        }
    })
}


function seciondary (url) {
    return new Promise ((resolve , reject) =>{
        console.log(`Downloading page from secondary source ${url}`);

        resolve({Source : "secondary" , payload : 'low quality'});


    })
}

function workflow(v){
    return new Promise((resolve , reject)=>{
        console.log(`Starting workflow with ${v.Source}`);
        resolve(`workflow completed with ${v.payload}`);
    });
}




async function running(url){
    let v;

try{
    v = await downloadPage(url);
} catch (err){
    console.log(err.message);
    v = await seciondary(url);}

    let result = await workflow(v);
    return result;

}



running('https://www.google.com').then((result)=>{console.log(result)}).catch((err)=>{console.log(err.message)});