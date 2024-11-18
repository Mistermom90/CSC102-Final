function validate()

{
    // using my love for cars to validate my forms
    
    var make = document.getElementById("makeString").value;
    var model = document.getElementById("modelString").value;
    var year = document.getElementById("yearString").value;

    if (make.length <4 || model.length <6 )
        {  document.getElementById("inputStatus").innerHTML = "Vehicle Incorrect";
        }
        else if ( year< 1964)
        {
     document.getElementById("inputStatus").innerHTML = "OLD Classic Vehicle!";
        }
        else
        {
      document.getElementById("inputStatus").innerHTML = "Modern Vehicle";
        }    
    // tried my if-else,but I cant get it to so the correct line.  I'd appreciate help on where I am making my errors.

}