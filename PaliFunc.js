function palidrome()
{
    var string1 = document.getElementById("firstPali").value;
    var string2 = document.getElementById("secondPali").value;

// I may have missed the seperate string step, but i thought that was for the other way that you showed us how to do this.
//Bernard King 03NOV24 Palindrome function
    var i = 0;
    var reversed = "";
    for (i = string1.length-1;i>=0;i--)
    {
        reversed += string1[i];
    }
    //My html will tell me that it is not a palindrome, but will not tell me if it is one.  may be due to my mistake in the initial code.
    if (reversed == string1)
    {
        document.getElementById("word Info").innerHTML = "PALINDROME";
    }
    else 
    {
        document.getElementById("word Info").innerHTML = "NOT A PALINDROME";
    }
}