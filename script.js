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