const DragArea =   document.querySelector(".AppBody"),
      DragText = DragArea.querySelector("h3"),
      button = DragArea.querySelector("button"),
      input = DragArea.querySelector("input");
let myFile;   

button.onclick = () => {
    input.click();
}

input.addEventListener("change",function(){
    myFile = this.files[0];
    DragArea.classList.add("active");
})

DragArea.addEventListener("dragover", (event) => {
    event.preventDefault();
    DragArea.classList.add("active");

    DragText.textContent = "Release to upload file";
    
})

DragArea.addEventListener("dragleave", () => {
    DragArea.classList.remove("active");
    DragText.textContent = "Drag & Drop";
})

DragArea.addEventListener("drop", (event) => {
    event.preventDefault();
    myFile = event.dataTransfer.files[0];


})

function ShowMe(){
    let filetype = myFile.type;
    let ValidEx = ["image/jpeg", "image/jpg", "image/png"];

    if(ValidEx.includes(filetype)){

        let fileReader = new FileReader();

        fileReader.onload = () => {
            
        }

    }
} 