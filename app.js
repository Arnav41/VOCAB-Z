const srcVal = document.getElementById("WordSrc")
const newBtn = document.getElementById("New")
const newText = document.getElementById("NewTxt")




newBtn.addEventListener("click", (e) => {
    e.preventDefault()
    getWord(srcVal.value).then(data => {
        newText.innerText = data
    })
})

async function getWord(word) {
    await res == fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    return res.json()
}