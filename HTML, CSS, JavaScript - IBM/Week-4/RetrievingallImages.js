var imgSet = document.getElementsByTagName("img"); 
var output = ""; 
for (var i = 0; i <imgSet.length; i++)
{
    output += "<p> Source of Image "; 
    output += i;
    output += ": ";
    output += imgSet[i].src;  
    output += "<\/p>"; 
}
document.write(output);