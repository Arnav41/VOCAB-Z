const srcVal = document.getElementById("WordSrc")
const newBtn = document.getElementById("New")
const newText = document.getElementById("NewTxt")

newBtn.addEventListener("click", () => {
  getWord(srcVal.value).then(data => {
    let what = data[0].meanings[0].definitions[0].definition
		console.log(what)
		newText.innerText = what
  })
})

async function getWord(word) {
  const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
  return res.json()
}