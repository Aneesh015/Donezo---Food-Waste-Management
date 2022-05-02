function setError(id, error) {
    //sets error inside tag of id 
    element = document.getElementById(id);
    element.getElementsByClassName("formerror")[0].innerHTML = error;

}


function validateForm() {

   
    var return_val = true;


    var name = document.forms['myForm']['fname'].value;
    var mob_no = document.forms['myForm']['number'].value;
    var pass = document.forms['myForm']['pswd'].value;
    var cpass = document.forms['myForm']['cpswd'].value;

    if (name.length == 0) {

        setError("fname", "Please enter the name");
        return false;
    }
    if (name.length <= 2) {

        setError("fname", "The name is too short");
        return false;
    }


    if (name.length > 2) {
        setError("fname", "");

    }

if(pass!=cpass){
        setError("cpswd","The entered password is not matching");
        return false;
    }

    if(pass==cpass){
        setError("cpswd","");
    }

    if (mob_no.length == 0) {

        setError("mbno.", "Please enter mobile number");
        return false;
    }



    if (mob_no.length < 10) {

        setError("mbno.", "Please enter right mobile number");
        return false;
    }



    if (mob_no.length == 10) {

        setError("mbno.", "");

    }

    


    // var pswd=document.forms['myForm']['pas   sword'].value;
    // if (pwsd.match(/^(?=[^A-Z]*[A-Z])(?=[^!"#$%&'()*+,-.:;<=>?@[\]^_`{|}~]*[!"#$%&'()*+,-.:;<=>?@[\]^_`{|}~])(?=\D*\d).{8,}$/)) {
    //     return true;
    // } else {
    //     setError("password", "Please enter a valid passoword");
    //     return false;
    // }

    return return_val;


}