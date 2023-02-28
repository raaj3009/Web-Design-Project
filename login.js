function myfun()
        {
            var user,pass;
            user=document.getElementById("user").value;
            pass=document.getElementById("pass").value;
            if(user=="RajeshGathe" && pass=="Rajesh@1234")
            {
                window.location.href="index.html";
            }
            else
            {
                alert("Invalid Username or Password");
                window.location.href="Loginform.html";
            }
        }

        $(document).ready(function(){

            $('#btn').click(function()
            {
                var b=$('#btn');
                var pass=$('#pass');
                var ptype=pass.attr('type');
                if(ptype=='password')
                {
                    pass.attr('type','text');
                    b.attr('value','Hide Password');
                }
                else
                {
                    pass.attr('type','password');
                    b.attr('value','Show Password');
                }
            });

        });
