function viewSource(projectIdNumber) {
    // document.getElementById("viewSourceCode")
    viewString = "view-source:";
    projectId = "project" + projectIdNumber.toString();
    // console.log("The project ID is " + projectId);
    urlString = document.getElementById(projectId).href;
    updatedURL = viewString.toString() + urlString.toString();
    // console.log("The updated url is " + updatedURL);
    sourceId = "source" + projectIdNumber.toString();
    document.getElementById(sourceId).href = updatedURL;
}

function openPDF(){
    // window.open(th.href,'_blank');
    window.open("./assets/CindyAndrade_Resume2024.pdf",'_blank');
}

function hireButton(){
    window.open("#contact", '_self');
}


let checking = true;

function seeMoreLess(idNumber){
    divName = "seeMoreLess" + idNumber.toString();
    seeName = "seeFunction" + idNumber.toString();
    // console.log("Element with id " + seeName + " is : ");
    // console.log(document.getElementById(seeName));
    // LOOK INTO Document selector query all 
    if(document.getElementById(seeName).innerText == "See More..."){
        document.getElementById(seeName).innerText = "See Less...";
        console.log(divName);
        console.log(document.getElementById(divName));
        document.querySelector('seeFunction').previousElementSibling.style.display = "block";
        // document.getElementById(divName).style.display = block;
        
    } else if(document.getElementById(seeName).innerText == "See Less...") {
        document.getElementById(seeName).innerText = "See More...";
        document.getElementById(divName).style.display = none;
    } else {
        document.getElementById(seeName).innerText = "Nice! You broke the code :D"
    }
}
