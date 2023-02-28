function myfun()
        {
            var user,pass;
            user=document.getElementById("user").value;
            pass=document.getElementById("pass").value;
            if(user=="Rajeshgathe" && pass=="Rajesh@1234")
            {
                window.location.href="index.html";
            }
            else
            {
                alert("Invalid Username or Password");
                window.location.href="index.html";
            }
        }