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


// See More/ See Less selectors on website function
let seeFunctionDivs = document.querySelectorAll('.seeFunction');
// console.log(seeFunctionDivs);
for (const div of seeFunctionDivs) {
    // console.log(div);
    div.addEventListener('click', () => {
        if(div.innerText=="See More..."){
            div.innerText = "See Less...";
            div.previousElementSibling.style.display = "block";
        } else if(div.innerText=="See Less..."){
            div.innerText = "See More...";
            div.previousElementSibling.style.display = "none";
        } else {
            div.innerText= "Congrats! You broke the code :) "
        }
    })
}

// console.log(document.getElementById('changeContrast'));
document.getElementById('changeContrast').addEventListener('click', () => {
    event.preventDefault(); //prevents the random refreshing of page
    // console.log("IM HEREEEEEE");
    // changeBGColor();
    let changeBackgroundDivs = document.querySelectorAll('.changeBackground');
    // console.log("The divs that were retrieved are");
    // console.log(changeBackgroundDivs);
    for(const div of changeBackgroundDivs) {
        // console.log(div);
        // console.log("function changeColor was called");
        if(div.style.backgroundColor != "black"){
            div.style.backgroundColor = "black";
        } else if(div.style.backgroundColor == "black") {
            div.style.backgroundColor = "white";
        } else {
            div.style.backgroundColor = "lightBlue";
        }
    }

    let changeFontColorDivs = document.querySelectorAll('.changeFontColor');
    for(const div of changeFontColorDivs) {
        // console.log(div);
        // console.log("function changeColor was called");
        // console.log(div.style.color);
        if(div.style.color == '#2B2B2B'){
            div.style.color = "white";
        } else if(div.style.color == "white") {
            div.style.color = '#2B2B2B';
        } else {
            div.style.color = "white";
        }
    }

    let bodyBg = window.getComputedStyle(document.body).backgroundColor;
    if(bodyBg == "#F0F0F6"){
        bodyBg = "#767676";
    } else if(bodyBg == "#767676"){
        bodyBg = "#F0F0F6";
    } else {
        bodyBg = "black";
    }

})

// function changeBGColor(){
//     let changeBackgroundDivs = document.querySelectorAll('.changeBackground');
//     for(const div of changeBackgroundDivs) {
//         console.log(div);
//         console.log("function changeColor was called");
//         if(div.style.backgroundColor != "black"){
//             div.style.backgroundColor = "black";
//         } else if(div.style.backgroundColor == "black") {
//             div.style.backgroundColor = "white";
//         } else {
//             div.style.backgroundColor = "lightBlue";
//         }
//     }
// }

//Contrast Color button on website function
//THIS WORKS!!
// let changeBackgroundDivs = document.querySelectorAll('.changeBackground');
// console.log("The divs that were retrieved are");
// console.log(changeBackgroundDivs);
// for(const div of changeBackgroundDivs) {
//     console.log(div);
//     div.addEventListener('click', () => {
//         console.log("function changeColor was called");
//         if(div.style.backgroundColor != "black"){
//             div.style.backgroundColor = "black";
//         } else {
//             div.style.backgroundColor = "white";
//         }
//     })
// }