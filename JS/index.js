

function correctAnswer(x){
    x.innerHTML = "&#x2713; Well done.";
    x.style.color = "green";
    x.style.fontSize = "large";
}

function wrongAnswer(x){
    x.innerHTML = "&#128473; incorrect";
    x.style.color = "red";
    x.style.fontSize = "large"; 
}


var result = 0;
//var result2 = "";

// TASK1 - HINGE QUESTION 
function task1(){
    var result = document.querySelector('input[name = "ques1"]:checked').value;
//    alert(result);
 
    if(result == "pc" || result == "cloud" || result == "userPC"){
//       alert("On no! what happened???");
       document.getElementById("task1Stamp").innerHTML= "";
       addNoImage1(); // No stamp
       results= 0; //resets results at end
       document.getElementById("feedback1").innerHTML= "Answer B: All webs pages are stored in physical locations called a server. A server is a powerful computer designed to serve multiple users at once.";
           
    } else {
//        alert("You're a superstar!!");
        document.getElementById("task1Stamp").innerHTML= "";
        addYesImage1(); //Yes stamp
        
    }
//    results= 0; //resets results at end
//    addTask2Stamp();
}

// TASK2 - WORD GAP 
function task2(){
    var result= 0;
    var ans1 = document.getElementById("ansSelect1").value;
    var ans2 = document.getElementById("ansSelect2").value;
    var ans3 = document.getElementById("ansSelect3").value;
    var ans4 = document.getElementById("ansSelect4").value;
    if(ans1 == "hypertext"){ result++; }
    if(ans2 == "content"){ result++; }
    if(ans3 == "layout"){ result++; }
    if(ans4 == "webpages"){ result++; }
    
    var msg = "(1) Hypertext, (2) Content, (3) Layout, (4) Webpages";
    //alert(result);
    
    if(result < 1){
//       alert("On no! what happened???");
       document.getElementById("task2Stamp").innerHTML= ""; // Clears image
       document.getElementById("feedback2").innerHTML= msg;
       addNoImage2(); // No stamp
       results= 0; //resets results at end
        
    } else if(result < 4) {
//        alert("Not bad! Maybe next time.");
        document.getElementById("task2Stamp").innerHTML= ""; // clears previous image
        document.getElementById("feedback2").innerHTML= msg;
        addYesImage2(); //Yes stamp
        results= 0; //resets results at end
        
    } else {
//        alert("You're a superstar!!");
        document.getElementById("task2Stamp").innerHTML= ""; //Clears previous image
        superstar2(); 
        
    }
   
    result= 0; //resets results at end
    
    
}

// TASK3 - FIND TAGS 
function task3() {
    
    var msg = "Remember HTML tags are surrounded by angle brackets and <br>the end tags have a forward slash.";
    var a1 = document.getElementById('a1').value;
    var a2 = document.getElementById('a2').value;
    var b1 = document.getElementById('b1').value;
    var b2 = document.getElementById('b2').value;
    var c1 = document.getElementById('c1').value;
    var c2 = document.getElementById('c2').value;
    var d1 = document.getElementById('d1').value;

//    document.getElementById("demo3").innerHTML= "Changed text";
//    console.log(val);
    if (a1 == "<title>"){ result++; }
    if (a2 == "</title>"){ result++; }
    if (b1 == "<h1>"){ result++; }
    if (b2 == "</h1>"){ result++ }
    if (c1 == "<a>"){ result++; }
    if (c2 == "</a>"){ result++; }
    if (d1 == "<img>"){ result++; }
    
    alert("Result = " + result + " out of 7");
    
    if(result < 3){
//       alert("On no! what happened???");
       document.getElementById("task3Stamp").innerHTML= "";
       document.getElementById("feedback3").innerHTML= msg;
       addNoImage3(); // No stamp
       results= 0; //resets results at end
        
    } else if(result < 7) {
//        alert("Not bad! Maybe next time.");
        document.getElementById("task3Stamp").innerHTML= "";
        document.getElementById("feedback3").innerHTML= msg;
        addYesImage3(); //Yes stamp
        results= 0; //resets results at end
        
    } else {
//        alert("You're a superstar!!");
        document.getElementById("task3Stamp").innerHTML= "";
        superstar3(); // 7/7 results
        
    }
   
    result= 0; //resets results at end
    
}

// Adds image stamp depending on results

// Task 1 image  - adds results stamp
function addNoImage1() {
  var img = document.createElement("img");
  img.src = "images/no-thumb.jpg";
  var src = document.getElementById("task1Stamp")
  src.appendChild(img);
}
function addYesImage1() {
  var img = document.createElement("img");
  img.src = "images/yes-thumb.jpg";
  var src = document.getElementById("task1Stamp")
  src.appendChild(img);
}

// Task 2 image - adds results stamp
function addNoImage2() {
  var img = document.createElement("img");
  img.src = "images/no-thumb.jpg";
  var src = document.getElementById("task2Stamp")
  src.appendChild(img);
}
function addYesImage2() {
  var img = document.createElement("img");
  img.src = "images/yes-thumb.jpg";
  var src = document.getElementById("task2Stamp")
  src.appendChild(img);
}
function superstar2() {
  var img = document.createElement("img");
  img.src = "images/superstar.jpg";
  var src = document.getElementById("task2Stamp")
  src.appendChild(img);
}

// Task 3 image - adds results stamp
function addNoImage3() {
  var img = document.createElement("img");
  img.src = "images/no-thumb.jpg";
  var src = document.getElementById("task3Stamp")
  src.appendChild(img);
}
function addYesImage3() {
  var img = document.createElement("img");
  img.src = "images/yes-thumb.jpg";
  var src = document.getElementById("task3Stamp")
  src.appendChild(img);
}
function superstar3() {
  var img = document.createElement("img");
  img.src = "images/superstar.png";
  var src = document.getElementById("task3Stamp")
  src.appendChild(img);
}


