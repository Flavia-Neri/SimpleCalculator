var tr = document.querySelectorAll('.elemento');
var calc = document.getElementById("calc");
var result = document.getElementById("result");
var equal = document.getElementById("equal");
var del = document.getElementById("delete");
var cl = document.getElementById("clear");
var elements = [];
var expression=" ";
for (let i=0; i<tr.length; i++){ 
    tr[i].addEventListener('click',function getValue(e){
        elements.push(e.target.innerHTML);
        calc.innerHTML= elements.join('');
    });
}
equal.addEventListener("click", function showCalc(){
    if(elements!=""){
        expression=elements.join('').replace(/X/ig, '*').replace(/,/g, '.').replace(/π/g, Math.PI.toFixed(2));
        result.innerHTML = eval(expression).toString().replace(/\./g, ',');              
    }else{
        result.innerHTML = '0';
    }
} );
del.addEventListener("click", function del(){
    elements.pop();
    calc.innerHTML = elements.join("");
    console.log(expression);
});
cl.addEventListener("click", function clear(){
    elements = [];
    calc.innerHTML = elements;
    result.innerHTML = " ";
})
