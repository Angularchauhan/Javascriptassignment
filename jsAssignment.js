function onclick_external()
{
    document.getElementById('Demo1').innerHTML = "pooja";
    
}

function Inner_HTML() {
    document.getElementById("demo2").innerHTML = "Paragraph changed!";
  }

  function Inner_text() {
    var x = document.getElementById("myBtn").innerText;
    document.getElementById("demo3").innerHTML = x;  
  }

  function Fun_toPrecision() {
    var num = 13.3714;
    document.getElementById("demo4").innerHTML = num.toPrecision(2);
  }

  function Fun_toFixed() {
    var num = 13.3714;
    document.getElementById("demo5").innerHTML = num.toFixed(3);
  }

  function Fun_ChatAt() {
    var str = "I am from Angular Avengers";
    var res = str.charAt(18)
    document.getElementById("demo6").innerHTML = res;
  }

  function Fun_CharCodeAt() {
    var str = "I am from Angular Avengers";
    var res = str.charCodeAt(18)
    document.getElementById("demo7").innerHTML = res;
  }

  function Fun_Combine() {
    var str1 = "I am from ";
     var str2 = "Angular Avengers";
    var res = str1.concat(str2);
    document.getElementById("demo8").innerHTML = res;
  }

  function Fun_Includes() {
    var str1 = "I am from Angular Avengers";
     var str2 = "Angular";
    var res = str1.includes(str2);
    document.getElementById("demo9").innerHTML = res;
  }

  function Fun_indexOf() {
    var str1 = "I am from Angular Avengers";
    var res = str1.indexOf("A");
    document.getElementById("demo10").innerHTML = res;
  }

  function Fun_lastIndexOf() {
    var str1 = "I am from Angular Avengers";
    var res = str1.lastIndexOf("A");
    document.getElementById("demo11").innerHTML = res;
  }

  function Fun_slice() {
    var str1 = "I am from Angular Avengers";
    var res = str1.slice(-16,-9);
    document.getElementById("demo12").innerHTML = res;
  }

  function Fun_subString() {
    var str1 = "I am from Angular Avengers";
    var res = str1.substring(10,17);
    document.getElementById("demo13").innerHTML = res;
  }

  function Fun_subStr() {
    var str1 = "I am from Angular Avengers";
    var res = str1.substr(10,7);
    document.getElementById("demo14").innerHTML = res;
  }

  function Fun_Add() {
    var num1 = 10;
    var num2 = 10;
    var res = num1+num2;
    document.getElementById("demo15").innerHTML = res;
  }

  function Fun_operators() {
    var num1 = 10;
    var num2 = 10;
    var xt = document.getElementById("getnum").value;
   
         var day;
switch (xt) {
  case '1':
    
    if(num1=num2){day="Ther are equal";}
    break;
  case '2':
    num1 += num2;
    day=num1;
    break;
  case '3':
  num1 -= num2;
  day=num1;
    break;
  case '4':
  num1 *= num2;
  day=num1;
    break;
  case '5':
  num1 /= num2;
  day=num1;
   
    break;
  case '6':
  num1 %= num2;
  day=num1;
    break;
  default:
    day = "invalid value";
    break;
    }   
    
    document.getElementById("demo16").innerHTML = day;
  }
  
  function Fun_operators25() {
    var num1 = 5;
    var num2 = 5;
    var xt = document.getElementById("getnum1").value;
   
         var day;
switch (xt) {
  case '1':
    
    if(num1==num2){
        
        day="Ther are equal";}
    break;
  case '2':        
    day=(num1 === '5');
    break;
  case '3':
  day=(num1 != '5');
    break;
  case '4':
  day=(num1 !== '5');
  
    break;
  case '5':
  day=(num1 > 3);
   
    break;
  case '6':
  day=(num1 >= 3);
    break;
    case '7':
  day=(num1 < 3);
    break;
    case '8':
  day=(num1 <= 3);
    break;
    case '9':
  day=(num1 < 18) ? "less value":"greater value";
    break;
  default:
    day = "invalid value";
    break;
    }   
    
    document.getElementById("demo17").innerHTML = day;
  }
  

  function Fun_operators28() {
    var num1 = 10;
    var num2 = 5;
    var xt = document.getElementById("getnum2").value;
   
         var day;
switch (xt) {
  case '1':
    
  day=(num1 < 20 && num2 > 2);
    break;
  case '2':        
  day=(num1 < 20 || num2 > 6);
    break;
  case '3':
  day= !(num1 == num2);
    break;
   default:
    day = "invalid value";
    break;
    }   
    
    document.getElementById("demo18").innerHTML = day;
  }


  function sum1()
  {
    a=10;
    console.log(a);
    var a;
    //console.log(getUserDetails());
  }


  /* function getUserDetails(){
    Return 0;
    var a= 10;
    console.log(a);
    } */