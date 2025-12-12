let txtInput = document.querySelector('#txtInput');
let btnReplaceAll = document.querySelector('#btnReplaceAll');
let txtOutput = document.querySelector('#txtOutput');

btnReplaceAll.addEventListener('click',function(){
    let inputStr = txtInput.value;
    let result = inputStr.replaceAll(" ","");
    txtOutput.innerText = result;
    console.log(result);
});