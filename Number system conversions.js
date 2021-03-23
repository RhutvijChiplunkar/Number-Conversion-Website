function NumberConversions(){
    var x=document.getElementById('num').value;
    var y=Number(x);
    document.getElementById('a').innerHTML+=y.toString(2);
    document.getElementById('b').innerHTML+=y.toString(8);
    document.getElementById('c').innerHTML+=y.toString(10);
    document.getElementById('d').innerHTML+=y.toString(16);    
}