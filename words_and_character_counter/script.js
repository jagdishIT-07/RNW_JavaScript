var TextArea = document.getElementById('TextArea');
var words = document.getElementById('words');
var characters = document.getElementById('characters');

TextArea.addEventListener("input",()=>{
    characters.textContent = TextArea.value.length;
    let text = TextArea.value.trim();
    words.textContent = text.split(/\s+/).filter((item) => item).length; 
});