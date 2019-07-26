
let form1 = document.getElementById("hireusform");

document.getElementById("hireusform").addEventListener('submit',function (e) {
    alert("form works");
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