var totalscore =0;
var finalscore =0;


function one()
{

    batsmen =1;
    document.getElementById("score").innerHTML=batsmen;
    var bowler=Math.floor(Math.random()*7);
    document.getElementById("bowl").innerHTML=bowler;
    
    if(batsmen==bowler)
    {
        out();
    }

    else{
        total();
    }

}

function two()
{

    batsmen =2;
    document.getElementById("score").innerHTML=batsmen;
    var bowler=Math.floor(Math.random()*7);
    document.getElementById("bowl").innerHTML=bowler;
    
    if(batsmen==bowler)
    {
        out();
    }

    else{
        total();
    }

}

function three()
{

    batsmen =3;
    document.getElementById("score").innerHTML=batsmen;
    var bowler=Math.floor(Math.random()*7);
    document.getElementById("bowl").innerHTML=bowler;
    
    if(batsmen==bowler)
    {
        out();
    }

    else{
        total();
    }

}
function four()
{

    batsmen =4;
    document.getElementById("score").innerHTML=batsmen;
    var bowler=Math.floor(Math.random()*7);
    document.getElementById("bowl").innerHTML=bowler;
    
    if(batsmen==bowler)
    {
        out();
    }

    else{
        total();
    }

}
function six()

{

    batsmen =6;
    document.getElementById("score").innerHTML=batsmen;
    var bowler=Math.floor(Math.random()*7);
    document.getElementById("bowl").innerHTML=bowler;
    
    if(batsmen==bowler)
    {
        out();
    }

    else{
        total();
    }

}


function total()
{

    totalscore = totalscore + batsmen;
    document.getElementById("totals").innerHTML=totalscore;


}

function out()
{

    alert("OUT");
    finalscore=totalscore;
    totalscore=0;
    document.getElementById("totals").innerHTML=totalscore;
    document.getElementById("score").innerHTML=0;
    document.getElementById("bowl").innerHTML=0;


}