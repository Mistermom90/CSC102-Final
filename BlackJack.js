function firstFunc()
{
alert("Congrats on getting through your first function.  HooRay");
}

function average(num1, num2)
{
    var avg = (num1 + num2)/2.0;
    alert ("average = " + avg);
}

function playBlackJack()
{
    var dealer =  Math.ceil(Math.random() * 21);
    var player =  Math.ceil(Math.random() * 21);
    box = document.getElementById("dealerScore");
    box.style.backgroundColor = "green";
    box.style.width = "100px";
    
    box = document.getElementById("playerScore");
    box.style.backgroundColor = "red";
    box.style.width = "100px";

    document.getElementById("dealerScore").innerHTML = dealer;
    document.getElementById("playerScore").innerHTML = player;
   
    if (dealer == player)
        {
            document.getElementById("finalResult").innerHTML = "DRAW";
        }
        else if ((dealer < player) )
        {
            document.getElementById("finalResult").innerHTML = "Player Wins";
        }
        else
        {
            document.getElementById("finalResult").innerHTML = "Dealer Wins";
        }
        
}