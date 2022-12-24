var siteName = document.getElementById("siteName");
var siteUrl = document.getElementById("siteUrl");
var siteList;


if(localStorage.getItem(("list")!=null)) {
    siteList= JSON.parse(localStorage.getItem("list"));
    console.log(siteList);
    displaySite(siteList);
} else {
     siteList = [];
}



function submit() { 
    var site = {
        name : siteName.value,
        url : siteUrl.value
    }
    siteList.push(site);
    localStorage.setItem("list",JSON.stringify(siteList));
    displaySite();
    clearForm();
    // console.log(siteList);
}



function displaySite() {
    var cartona = '';
    for(var i=0; i<siteList.length; i++) {
        console.log(siteList[i]);
        cartona+=`<tr>
        <td class="fw-bolder fs-4 pe-5 ">${siteList[i].name}</td>
        <td><a href = "${siteList[i].url}" target = "_blank">Visit</a></td>
        <td><button class="btn btn-danger" onclick = "deleteList(${i})">Delete</button></td>
    </tr>`;
    }
    document.getElementById("tableData").innerHTML= cartona;
}



function clearForm() {
    siteName.value =  "";
    siteUrl.value = "";
}



function deleteList(i) {
    siteList.splice(i,1);
    displaySite(siteList);
    localStorage.setItem("list",JSON.stringify(siteList));
}





