

function hireus() {
    window.location='hireusnow.html';
    
}

let form=document.querySelector('#form');


function data() {
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let desc = document.getElementById('desc');

    console.log(name);


}

form.addEventListener('submit',function (e) {
    e.preventDefault();
    db.collection('hireus').add({
        name:form.name.value,
        email:form.email.value,
        desc:form.desc.value,
    });
    form.name.value='';
    form.email.value='';
    form.desc.value='';

    window.location='thanks.html';


});
