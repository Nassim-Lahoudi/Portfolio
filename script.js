function emailFunction(){
    let email = "nassim.lahoudi@hotmail.com"
    navigator.clipboard.writeText(email)
    alert("\nErfolgreich zur Zwischenablage kopiert \n" + email)
}

function projectOneFunction(){
    let link = "https://github.com/SkyNiteTV/VFPC-VIRUS";
    location.href = link;
}

function projectTwoFunction(){
    let link = "https://github.com/SkyNiteTV?tab=repositories";
    location.href = link;
}