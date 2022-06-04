let temp,result='',newvalue='',op;

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
    result+=this.textContent;   
   
};
function operation(){
    newvalue+=this.textContent;
    field.textContent+=this.textContent;
    

};

const field=document.querySelector('.field');
const num=document.querySelectorAll('.num');
num.forEach(numbutton=> {
    numbutton.addEventListener('click',dispnum);
    
});
const clear=document.querySelector('.clear');
clear.addEventListener('click',()=>{
    location.reload();
});
 

const operator=document.querySelectorAll('.operator');
operator.forEach(opbutton=>{
    opbutton.addEventListener('click',()=>{
       if(!(isNaN(field.textContent.slice(-1)))){ 
        
        result=operate(op,result,newvalue);  
        field.textContent=result;

        op=opbutton.textContent; 
        newvalue='';
        field.textContent+=opbutton.textContent;
        
        num.forEach(numbutton=> {
            numbutton.removeEventListener('click',dispnum);
        });
          
        num.forEach(numbutton=> {
            numbutton.addEventListener('click',operation);
        });
        }
    });
});
const back=document.querySelector('.back');
back.addEventListener('click',()=>{
   field.textContent=field.textContent.slice(0,-1);
   result=field.textContent;
});


const equal=document.querySelector('.equals');
equal.addEventListener('click',()=>{
    result=operate(op,result,newvalue); 
    field.textContent=result;
    newvalue='';   
    num.forEach(numbutton=> {
        numbutton.removeEventListener('click',operation);
        numbutton.addEventListener('click',dispnum);
    });
});
const button = document.querySelectorAll('button');
button.forEach(button=>{
    button.addEventListener('mouseenter',()=>{
        button.classList.toggle('hover');
    }); 
    button.addEventListener('mouseleave',()=>{
        button.classList.toggle('hover');
    });
});

const key=document.querySelector('body');
key.addEventListener("keydown",e=>{
    if(e.key=="Delete")
    clear.click();
    if(e.key=="Enter")
    equal.click();
        
    if(e.key=="Backspace")
    back.click();
    button.forEach(button=>{
        if(button.textContent==e.key){
        button.classList.toggle('hover');
        button.click();
        };      
    });
});

key.addEventListener("keyup",e=>{
    button.forEach(button=>{
        if(button.textContent==e.key){
            button.classList.toggle('hover');
         
        }
    });
});
