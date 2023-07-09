let ops = document.getElementById('ans');
let result = '';
function display(num){
    ops.value += num;
    if(result != 0){
        ops.value = result ? `${result}` : '';
        result ='';
        ops.value += num;
    }
}
function eql(){
    try{
        result = eval(ops.value);
        ops.value += ' = ' + result;
    }
    catch{
        alert('invaild')
    }
}
function clr(){
    ops.value='';
    result = '';

}
function del(){
    ops.value= ops.value.slice(0,-1);
}
