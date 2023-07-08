let ops = document.getElementById('ans');

function display(num){
    ops.value += num;
}
function eql(){
    try{
        ops.value = eval(ops.value)
    }
    catch{
        alert('invaild')
    }
}
function clr(){
    ops.value='';
}
function del(){
    ops.value= ops.value.slice(0,-1);
}