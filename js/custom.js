//get elements from html
var inputArea = document.getElementById('inputArea');
var input = document.getElementById('input');
var remain = document.getElementById('remain');
var totalCount = 200;


//create a function;

function totalChars()
{
    var totalInput = inputArea.value.length;
    input.innerHTML = totalInput;

    remain.innerHTML = totalCount - totalInput;
}

totalChars();
