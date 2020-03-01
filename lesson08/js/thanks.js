
 var url_string = window.location.href;
 var url = new URL(url_string);
 var name = url.searchParams.get("fullname");
 var phone = url.searchParams.get("phone");
 var email = url.searchParams.get("email");
 var date = url.searchParams.get("date");
 var sev = url.searchParams.get("stormseverity");
 var stype  = url.searchParams.get("stormtype");
 var sReg  = url.searchParams.get("stormregion");
 var danger  = url.searchParams.get("user in-danger level");
 var comment  = url.searchParams.get("comment");
 var lb = document.createElement('br');
 var data = name
            + '\n' +phone
            + '\n' +email
            + '\n' +date
            + '\n' +sev
            + '\n' +stype
            + '\n' +sReg
            + '\n' +danger
            + '\n' +comment;

 document.getElementById('input').innerText = (data);
        
        