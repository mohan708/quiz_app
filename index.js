const question = [
       {
        "que" : "which is the server side scripting language",
        'a' : "java",
        'b': "php",
        'c':  "c",
        'd': "c++",
        'correct':'b',
       },
       {
        "que" : "which is the frontend side scripting language",
        'a' : "javascript",
        'b': "php",
        'c':  "c",
        'd': "c++",
        'correct':'a',
       },
       {
        "que" : "which is the frontend side and backend side scripting language",
        'a' : "javascript",
        'b': "python",
        'c':  "c",
        'd': "java",
        'correct':'a',
       },
       {
        "que" : "which is fater language ",
        'a' : "flutter",
        'b': "java",
        'c':  "c",
        'd': "c++",
        'correct':'c',
       },
       {
        "que" : "which is good for eay to understand",
        'a' : "javascript",
        'b': "php",
        'c':  "c",
        'd': "c++",
        'correct':'c',
       },



]
let index=0;
let total =question.length;
let right=0,wrong=0;
const dataa =document.getElementById('head');
let optionInput = document.querySelectorAll('.option');
const questions =()=>{

    if(index===total){
      return endfun()}
    reset();
    const data =question[index];
    console.log(data);
    
    dataa.innerText  = ` ${index+1}) ${data.que}`;

    optionInput[0].nextElementSibling.innerText=data.a;
    optionInput[1].nextElementSibling.innerText=data.b;
    optionInput[2].nextElementSibling.innerText=data.c;
    optionInput[3].nextElementSibling.innerText=data.d;
}

 const onSbmit =()=>{
    const data =question[index];
    const ans = getAnswer();
    if(ans == data.correct)
    {
        right++;
    console.log(ans);

    }
    else{
        wrong++;
        console.log(ans);
    }
    index++;
    questions();
 }
let a;
const getAnswer = () => {
   
    optionInput.forEach(  
     
    
        (input) => {
            if(input.checked){
                
             a= input.value}
            
        }
    )

    return a;

    
}

const reset =()=>{
    optionInput.forEach(  
     
    
        (input) => {
           input.checked=false;
            
        }
    )
}

const endfun=()=>{
    console.log('abc');
    document.getElementById('box').innerHTML=`<h3>Thank you for playing the quiz</h3> <h2>${right}/${wrong}`
}

questions();