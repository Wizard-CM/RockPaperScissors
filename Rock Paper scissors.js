const score={                     // Object global variable so that,it can be accesed from anywhere.
    wins:0,
    loses:0,
    ties:0}

     scoredisplay();               //called for displaying the text before clicking to any of those options.
    
// function for player's move as well as calls the returned value of another function(Computermove)
function playermove(pm){           
     computer=Computermove();      // computer variable stores the called function value in it.
     let result=''                 // Defining a variable.

    if(pm==='rock'){
        if(computer==='rock')
        { result='Tie'}
        else if(computer==='paper')
        { result='You Lose'}
        else if(computer==='scissors')
        { result='You Won'}
    }
    else if (pm==='paper') {
        if(computer==='rock')
        { result='You Won'}
        else if(computer==='paper')
        { result='Tie'}
        else if(computer==='scissors')
        { result='You Lose'}
    }
    else if (pm==='scissors') {
        if(computer==='rock')
        { result='You Lose' }
        else if(computer==='paper')
        { result='You Won'}
        else if(computer==='scissors')
        { result='Tie'}
    }

    // For scores
    if(result==='You Won')
    { score.wins +=1 }
    else if(result==='You Lose')
    { score.loses +=1}
    else if(result==='Tie')
    {score.ties +=1}

    //scoredisplay();                 // Called for updating the scores.

    document.querySelector('.para').innerText=`win: ${score.wins}, lose:${score.loses},tie:${score.ties}`; //See the changes through it.

    /*This is written insead of calling a function to show that,
   - firstly, when this above document is called above it,it prints
     wins:0 , loses:0 , ties:0 respectively.
   - But when this is again called inside the function,document called inside the function overwrites the document called above it.

     changes
     nu=not updated
     u= updated

     wins:nu , loses:nu , ties:nu - text result when first called outside a function.
     win :u  , lose :u ,  tie:u   - text result after it calling again inside funciton.
    */
    alert(`Your move ${pm}. Computer's move ${computer}. ${result}
    wins: ${score.wins}, loses:${score.loses},ties:${score.ties}`);
}

//Fuction for desplaying the scores
function scoredisplay(){
    document.querySelector('.para').innerText=`wins: ${score.wins}, loses:${score.loses},ties:${score.ties}`;}


//Function for Computer's move 
// let computer='' Global Varibale (defined outside the function) ,if this was done instead of returing a function then
function Computermove(){
    const random=Math.random();
    let computer=''                     //Always use let if it is a returning variable

    if(random>0 && random<1/3)
    { computer="rock"}
    else if(random>1/3 && random<2/3)
    { computer="paper" }
    else if(random>2/3 && random<1)
    { computer="scissors"}
    return computer; 

console.log(`Computer's move: ${computer}.${result}`);//This won't work because any command after return value in a fn will not br executed.
}
