const inputElem = document.getElementById("input-text");
const button = document.getElementById("check-btn");
const output = document.getElementById("output");

function showResult(){
    const inputVal = inputElem.value;
    if(inputVal == ""){
        alert("Input a valid word")
    }else{
        output.innerHTML = checker(inputVal)
    }
}

function checker(str){
    const result = output
    let reg = /[^A-Za-z0-9]/g
    let replaceReg = str.toupperCase().replace(reg, "")
    let reverseStr = replaceReg.split("").reverse().join("")
    if(replaceReg === reverseStr){
        result.innerText = `${inputElem.value} Is a palindron`
    }else{
        result.innerText = `${inputElem.value} is not a palindron`
    }
}