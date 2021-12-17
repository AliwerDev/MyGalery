const block = document.querySelector("#row");
const input = document.querySelector("#input");
const alert = document.querySelector(".alertText");
const alertBox = document.querySelector(".alert");
const deleteRow = document.querySelector(".delete-row");


let inners = "";
let deleteElementFatherId;

let imgLinks = JSON.parse(localStorage.getItem("imgLinks")) || [];

function addOfInner(){
    inners = "";
    for (let i in imgLinks){
        inners += `<div id="del${i}" class="col-md-4 col-sm-6 col-xxl-3 my-img">
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
    if(input.value.slice(0, 8) !== "https://"){
        alert.innerHTML = ("Siz yuborgan matn link emas!");
        alertBox.classList.remove("d-none")
        input.value = "";
        input.focus();
    }
    else if(input.value === ""){
        alert.innerHTML = ("Iltimos rasm linkini yuboring!");
        alertBox.classList.remove("d-none")
        input.value = "";
        input.focus();
    }
    else if(imgLinks.includes(input.value)){
        alert.innerHTML = ("Bu rasm galeriyangizda mavjud!");
        alertBox.classList.remove("d-none")
        input.value = "";
        input.focus();
    }
    else {
        imgLinks.push(input.value);
        localStorage.setItem("imgLinks", JSON.stringify(imgLinks));
        inners += `<div id="del${imgLinks.length - 1}"  class="col-md-4 col-sm-6 col-xxl-3 my-img">
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

function toFirst(){
    inners = `<div class="col-md-4 col-sm-6 col-xxl-3 my-img">
                    <div class="box">
                        <div class="noImg text-dark p-1">
                            You don't have PICTURE yet!
                        </div>
                    </div>
                </div>`

    block.innerHTML = (inners);
    inners = "";
}


//Delete Box

const deleteBox = document.querySelector(".deleteBox");
let deleteItem;

function deleteImg(deletedElementId){
    deleteBox.style.display = ("flex");
    deleteRow.innerHTML = `<div class="col-md-6 col-xxl-5 col-sm-8 d-flex justify-content-center">
                                <div class="box-modal">
                                    <img class="img-fluid" src="${imgLinks[deletedElementId]}" alt="image1">
                                </div>
                            </div>`
    deleteItem = deletedElementId;
}
function yesOrCancelDelete(isDelete){
    console.log(isDelete)
    deleteBox.style.display = ("none");
    input.focus();
    if(isDelete === "yes"){
        imgLinks.splice(deleteItem, 1);
        localStorage.setItem("imgLinks", JSON.stringify(imgLinks));
        if(imgLinks.length === 0){
            toFirst();
        }
        deleteElementFatherId = "#del" + deleteItem;
        block.removeChild(document.querySelector(deleteElementFatherId));

        input.focus();
    }
}