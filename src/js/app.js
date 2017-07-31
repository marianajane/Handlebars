var template = document.getElementById("index").innerHTML;

            var compilar = Handlebars.compile(template);

            var combos = {
                details : [
                    {
                        service: "Basic",
                        price: "$9.00 <p>per month</p>",
                        signUp: "Sign Up",
                        diskSpace: "<strong>100MB </strong>Disk Space",
                        traffic: "<strong>200MB </strong>Monthly Traffic",
                        subdomains: "<strong>2 </strong>Subdomains",
                        cuentas: "<strong>5 </strong>Email Accounts",
                        support: "Webmail Support",
                        sql: "MySQL Support",
                        php: "<p style = 'color:white'</p>n/a",
                        panel: "<p style = 'color:white'</p>n/a",
                        spam: "<p style = 'color:white'</p>n/a"
                    },
                    {
                        service: "Corporate",
                        price: "$14.00 <p>per month</p>",
                        signUp: "Sign Up",
                        diskSpace: "<strong>300MB </strong>Disk Space",
                        traffic: "<strong>400MB </strong>Monthly Traffic",
                        subdomains: "<strong>5 </strong>Subdomains",
                        cuentas: "<strong>10 </strong>Email Accounts",
                        support: "Webmail Support",
                        sql: "MySQL Support",
                        php: "PHP5 Support",
                        panel: "<p style = 'color:white'</p>n/a",
                        spam: "<p style = 'color:white'</p>n/a"
                    },
                    {
                        service: "Business",
                        price: "$29.00 <p>per month</p>",
                        signUp: "Sign Up",
                        diskSpace: "<strong>1GB </strong>Disk Space",
                        traffic: "<strong>1GB </strong>Monthly Traffic",
                        subdomains: "<strong>10 </strong>Subdomains",
                        cuentas: "<strong>25 </strong>Email Accounts",
                        support: "Webmail Support",
                        sql: "MySQL Support",
                        php: "PHP5 Support",
                        panel: "Plesk Control Panel",
                        spam: "<p style = 'color:white'</p>n/a"
                    },
                    {
                        service: "Platinum",
                        price: "$59.00 <p>per month</p>",
                        signUp: "Sign Up",
                        diskSpace: "<strong>5GB </strong>Disk Space",
                        traffic: "<strong>Unlimited </strong>Monthly Traffic",
                        subdomains: "<strong>Unlimited </strong>Subdomains",
                        cuentas: "<strong>10 </strong>Email Accounts",
                        support: "Webmail Support",
                        sql: "MySQL Support",
                        php: "PHP5 Support",
                        panel: "Plesk Control Panel",
                        spam: "Spam Assassin"
                    }
                ]
            }

            var compiladoHTML = compilar(combos);
            document.getElementById("action").innerHTML += compiladoHTML;

