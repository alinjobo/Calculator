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
    if(b=0)
    return "Cant divide by zero"
    return a/b;
};
function operate(operator,a,b){
    switch (operator){
        case '+': return add(a,b);
        break;
        case '-': return sub(a,b);
        break;
        case '*': return mul(a,b);
        break;
        case '/' :return div(a,b);
        break;
    };
};
inp=document.querySelector('.field');

const field=document.querySelector('.field')
const numb=document.querySelectorAll('.num');
numb.forEach(numbutton=> {
    numbutton.addEventListener('click',()=>{
        field.textContent+=numbutton.textContent;
    })
});
 console.log(numb.innerHTML);
//


