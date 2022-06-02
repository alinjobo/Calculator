let temp;

function add(a,b){
    
   temp= parseInt(a)+parseInt(b);
    return temp.toString();

};
function sub(a,b){
    temp= parseInt(a)-parseInt(b);
    return temp.toString();
};
function mul(a,b){
    temp= parseInt(a)*parseInt(b);
    return temp.toString();

};
function div(a,b){
    
    if(b==0)
    return "Cant divide by zero";
    temp= parseInt(a)/parseInt(b);
    return temp.toString();
};
function operate(operator,a,b){
    if(b=='')
    return a;
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
function dispnum(){
    field.textContent+=this.textContent;
    fieldvalue=field.textContent;   

    
};
function operation(){
    value2+=this.textContent;
    field.textContent+=this.textContent;
    console.log('value2',value2);
    console.log('v1',value1);
      
    console.log('v1',value1);   
   
    console.log(fieldvalue);

};
inp=document.querySelector('.field');
let fieldvalue='';
const field=document.querySelector('.field');
const numb=document.querySelectorAll('.num');
numb.forEach(numbutton=> {
    numbutton.addEventListener('click',dispnum);
    
});
const clear=document.querySelector('.clear');
clear.addEventListener('click',()=>{
    location.reload();
});
 
 let value1,op;
 let value2='';
const operator=document.querySelectorAll('.operator');
operator.forEach(opbutton=>{
    opbutton.addEventListener('click',()=>{
       if(!(isNaN(field.textContent.slice(-1)))){ 
        op=opbutton.textContent; 
        fieldvalue=operate(op,fieldvalue,value2);  
        value2='';
        field.textContent+=opbutton.textContent;
        
        
        numb.forEach(numbutton=> {
            numbutton.removeEventListener('click',dispnum);
        });
             
        
        console.log('text is', field.textContent);
        console.log('index of op',field.textContent.indexOf(op)+1);

        numb.forEach(numbutton=> {
            numbutton.addEventListener('click',operation);
        });
        
        
        }
    });
});
//
const equal=document.querySelector('.equals');
equal.addEventListener('click',()=>{
    fieldvalue=operate(op,fieldvalue,value2); 
    field.textContent=fieldvalue;
    fieldvalue='';
    numb.forEach(numbutton=> {
        numbutton.removeEventListener('click',operation);
        numbutton.addEventListener('click',dispnum);
    });

   // field.textContent=operate(op,parseInt(value1),parseInt(value2));
});
