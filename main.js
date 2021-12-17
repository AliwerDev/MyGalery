const block = document.querySelector("#row");
const input = document.querySelector("#input");
const alert = document.querySelector(".alertText");
const alertBox = document.querySelector(".alert");
let inners = "";

let imgLinks = JSON.parse(localStorage.getItem("imgLinks")) || [];

function addOfInner(){
    inners = "";
    for (let i in imgLinks){
        inners += `<div class="col-md-4 col-sm-6 col-xxl-3 my-img">
                    <div class="box">
                        <div onclick="deleteImg(this.id)" id="${i}" class="icon bg-light">
                            <i class="far fa-trash-alt text-danger"></i>
                        </div>
                        <img class="img-fluid" src="${imgLinks[i]}" alt="Xato kiritilgan image">
                    </div>
                </div>`
    }
    block.innerHTML = (inners);
}

if(imgLinks.length !== 0) {
    addOfInner();
}

localStorage.setItem("students", JSON.stringify(imgLinks));

function addImg(){
    console.log(input.value);
    if(input.value === ""){
        alert.innerHTML = ("Iltimos rasm linkini yuboring!");
        alertBox.classList.remove("d-none")
    }
    else if(imgLinks.includes(input.value)){
        alert.innerHTML = ("Bu rasm galeriyangizda mavjud!");
        alertBox.classList.remove("d-none")
    }
    else {
        imgLinks.push(input.value);
        localStorage.setItem("imgLinks", JSON.stringify(imgLinks));
        inners += `<div class="col-md-4 col-sm-6 col-xxl-3 my-img">
                    <div class="box">
                        <div onclick="deleteImg(this.id)" id="${imgLinks.length - 1}"  class="icon bg-light">
                            <i class="far fa-trash-alt text-danger"></i>
                        </div>
                        <img class="img-fluid" src="${input.value}" alt="image1">
                    </div>
                </div>`
        block.innerHTML = (inners);
        input.value = "";
        input.focus();
    }

}

function deleteImg(deletedElementId){
    if(imgLinks.length === 0){
        return;
    }
    console.log(imgLinks)
    imgLinks.splice(deletedElementId, 1);
    console.log(imgLinks)
    localStorage.setItem("imgLinks", JSON.stringify(imgLinks));
    addOfInner();
}