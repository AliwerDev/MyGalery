const block = document.querySelector("#row");
const submit = document.querySelector("#button-addon2");
const input = document.querySelector("#input");
const alert = document.querySelector(".alertText");
const alertBox = document.querySelector(".alert");
let inners = "";

let imgLinks = JSON.parse(localStorage.getItem("imgLinks")) || [];

if(imgLinks.length !== 0) {
    for (let i of imgLinks){
        inners += `<div class="col-md-4 col-sm-6 col-xxl-3 my-img">
                    <div class="box">
                        <div class="icon bg-light">
                            <i class="far fa-trash-alt text-danger"></i>
                        </div>
                        <img class="img-fluid" src="${i}" alt="image1">
                    </div>
                </div>`
    }
    block.innerHTML = (inners);
}
localStorage.setItem("students", JSON.stringify(imgLinks));

function addImg(){
    if(imgLinks.includes(input.value)){
        alert.innerHTML = ("Bu rasm galeriyangizda mavjud!");
        alertBox.classList.remove("d-none")
    }
    else {
        imgLinks.push(input.value);
        localStorage.setItem("imgLinks", JSON.stringify(imgLinks));
        inners += `<div class="col-md-4 col-sm-6 col-xxl-3 my-img">
                    <div class="box">
                        <div class="icon bg-light">
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