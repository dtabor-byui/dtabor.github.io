var url_string = window.location.href;
var url = new URL(url_string);
console.log(url);
var name = url.searchParams.get("fullname");
var phone = url.searchParams.get("phone");
var email = url.searchParams.get("email");
var comment  = url.searchParams.get("comment");
var date = url.searchParams.get("date");
var advt = url.searchParams.get("sel-list");
var data;
if (date == null) {
    var data = name
            + '\n' +phone
            + '\n' +email
            + '\n' +comment;
}else {
    var data = name
            + '\n' +phone
            + '\n' +email
            + '\n' +comment
            + '\n' +date
            + '\n' +advt;
}

document.getElementById('input').innerText=(data);
       