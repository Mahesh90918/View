function calculation(val){
    console.log("HELLO WORLD !"+val);
    var num1= parseInt(document.getElementById("num1").value);
    var num2= parseInt(document.getElementById("num2").value);
    // Strings Convert int use parseInt method
    var result;
    switch (val) {
        case "+":
            result =num1+num2;
            break;
        case "-":
            result =num1-num2;
            break;
        case "*":
            result =num1*num2;
            break;
         case "/":
            result =num1/num2;
            break;
    
        default:

            break;
    }
    alert(
        "result :"+result   );
   // document.write("result :",result)
    document.getElementById("result").innerHTML=result;
    console.log("result"+result);
}
