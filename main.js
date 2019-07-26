$(document).ready(function() {
    //bouncy arrow
    $("#arr-img").hover(function(){
        $(this).toggleClass("bounce2");
        $(this).toggleClass("bounce");
    });
    //bouncy arrow ends


    //form submit
    const form1 = document.getElementById("hireusform");
    if(form1){
        form1.addEventListener('submit',function (e) {
            e.preventDefault();
            db.collection('hireus').add({
                name:form1.name.value,
                email:form1.email.value,
                desc:form1.desc.value,
            });
            form1.name.value='';
            form1.email.value='';
            form1.desc.value='';

            // window.location='thanks.html';
        });
    }
    else console.log(form1);
    //form submit ends

});