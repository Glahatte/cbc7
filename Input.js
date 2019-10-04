//Create a program that reads a user's input and appends it to a file. 
//Once it is saved it the reads that file to the console.
//Emit Event:
//When a file has been created
//When a file has been written to
//When a file has been read
document.getElementById('myButton').onclick=function Thank(){
    document.getElementById("uniqueID").innerHTML=alert("Thank" + " "+ uniqueID.value );
  
  }
  
  function WriteToFile(){
    set fso = CreateObject("Scripting.FileSystemObject");
    set s =fso.CreateTextFile("<Documents/RecordedNamesHmwk"), true);
    
    var name=document.getElementById('uniqueID');
    
    swriteline("------------------------------------");
    s.Close();
  }//shoutout to Reiah Paul Sam for this. I hope it works lol.
</button>