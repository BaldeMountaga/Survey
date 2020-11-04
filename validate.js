function validate(){
  /* var x = document.getElementById("name");
   var y = document.getElementById("email");
   var z = document.getElementById("yrs");
   var r1 = document.getElementById("reco1");
   var r2 = document.getElementById("reco2");
   var r3 = document.getElementById("reco3");

    if(x.value.trim()== ""){
        alert("Please the name cannot be left empty");
        return false;
    }
    if(y.value.trim() == ""){
        alert("Please fill email address");
        return false;
    }
    if(r1.checked == false && r2.checked == false && r3.checked == false){
        alert("Please select at least one check box");
       return false;
    }
    /*if(z.value > 1000){
        alert("The range of numbser should be between 1 to 1000");
        return false;
    }*/
    var name = document.myform.fname.value;
    var email = document.myform.email.value;
    if(name==null || name ==""){
        alert("Name can't be empty");
        return false;
    }else if(email==null || email==""){
        alert("Password cannot be empty");
        return false;
    }

}
/*function show(){
    var name = document.getElementById("fName");
    var email = document.getElementById("em");
    var year = document.getElementById("yrs");
    var rol = document.getElementById("role");
    var recomend = document.getElementById("role");
    var rol = document.getElementById("role");
    var rol = document.getElementById("role");
}*/