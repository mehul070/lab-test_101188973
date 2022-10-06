const lowerCase = (mixArray) => {
    return new Promise((resolve, reject) => {
        if(mixArray.length >= 0 && Array.isArray(mixArray)) {
            const filterArray = mixArray.filter((eachArray) => typeof eachArray === "string");

            const mappedArray = filterArray .map((eachItem) =>
            eachItem.tolowerCase()
            );
            resolve(mappedArray);
        } else {
            reject("Invalid");
        }
    });
};


const mixArray = ["PIZZA", 10, true, 25, false, "Wings"];


lowerCase(mixArray)
.then((value) => 
    console.log(value)
)
.catch((error) =>
console.log(error)
);
