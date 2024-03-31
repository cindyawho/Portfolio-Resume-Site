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

function seeMoreLess(thisElem){
    if(thisElem.innerText=="See More..."){
        thisElem.innerText = "See Less...";
        thisElem.previousElementSibling.style.display = "block";
    } else if(thisElem.innerText=="See Less..."){
        thisElem.innerText = "See More...";
        thisElem.previousElementSibling.style.display = "none";
    } else {
        thisElem.innerText= "Congrats! You broke the code :) "
    }
}
