function add(a,b){
    return a+b;
};
function sub(a,b){
    return a-b;
};
function mul(a,b){
    return a*b;

};
function div(a,b){
    console.log(a);
    console.log(b);
    console.log(a/b);
    if(b==0)
    return "Cant divide by zero"
    return a/b;
};
function operate(operator,a,b){
    switch (operator){
        case '+' : return add(a,b);
        break;
        case '-' : return sub(a,b);
        break;
        case '*' : return mul(a,b);
        break;
        case '/' :return div(a,b);
        break;
    };
};
inp=document.querySelector('.field');
let fieldvalue;
const field=document.querySelector('.field')
const numb=document.querySelectorAll('.num');
numb.forEach(numbutton=> {
    numbutton.addEventListener('click',()=>{
        field.textContent+=numbutton.textContent;
        fieldvalue=field.textContent;

        
    })
});
const clear=document.querySelector('.clear');
clear.addEventListener('click',()=>{
    field.textContent='';
});
 console.log(numb.innerHTML);
 let value1,op,value2;
const operator=document.querySelectorAll('.operator');
operator.forEach(opbutton=>{
    opbutton.addEventListener('click',()=>{
        
        value1=field.textContent;
        field.textContent+=opbutton.textContent;
        op=opbutton.textContent;

    });
});

const equal=document.querySelector('.equals');
equal.addEventListener('click',()=>{
    value2=field.textContent.slice(field.textContent.indexOf(op)+1);
    console.log(value1);
    console.log(value2);
    console.log(op);
    field.textContent=operate(op,value1,value2);
   // field.textContent=operate(op,parseInt(value1),parseInt(value2));
});


