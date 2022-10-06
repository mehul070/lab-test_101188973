const resolve_promise = () => {
    return promise ((resolve, reject) => {
        setTimeout ( () => {
            resolve ({"message" : "solved problem"});
        } , 500);
    });
}


const reject_promise = () => {
    return reject  ((resolve, reject) => {
        setInterval ( () => {
            reject ({"message" : "erroe detected"});
        }, 500);
    });
}


reslove_promise().then(res => console.log(res))
reject_promise().catch(error = console.log(error))