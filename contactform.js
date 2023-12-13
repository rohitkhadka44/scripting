let form = document.contact_form;
let fullname = form.fullname;
    email = form.email;
    phone=form.phone;
    gender=form.gender;
    address=form.address;
    message=form.message;

//  var span = document.createElement("span");
//      span.classList.add('error');
//      email.parentElement.append(span);

// var span = document.createElement("span");
//      span.classList.add('error');
//      phone.parentElement.append(span);

//loop element instead seperate element/node injection as above
let eleArr = [email, phone, gender, address];
eleArr.forEach(item => {
    let span = document.createElement("span");
        span.classList.add('error');

    console.log(item)
        if(item.length >= 0) {
            item[0].parentElement.parentElement.append(span);
        } else {
            item.parentElement.append(span);
        }
});

form.addEventListener("submit",function(e){
    if(fullname.value == ""){ //innerText, innerHTML
        fullname.nextElementSibling.innerText = "Please fill the form";
        e.preventDefault();
    }

    if(gender.value == ""){ //innerText, innerHTML
        gender[1].parentElement.nextElementSibling.innerText = "Please choose gender";
        e.preventDefault();
    } else {
        gender[1].parentElement.nextElementSibling.innerText = "";
    }
})     
