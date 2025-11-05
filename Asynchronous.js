// // 1. Callbacks

function fetchdata(callback){
    setTimeout(() => {
        Callback('Data received!');
    }, 1000);
}



const fetchDataPromise = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve('Promise resolved!'), 1000);
  });
};


async function getdata(){
    const result = await fetchDataPromise();
    console.log(result);
}

getdata();
