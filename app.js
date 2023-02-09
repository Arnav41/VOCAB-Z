const srcVal = document.getElementById("WordSrc")
const newBtn = document.getElementById("New")
const meaning = document.getElementById("meaning")

newBtn.addEventListener("click", () => {
  getWord(srcVal.value).then(data => {
    let def = data[0].meanings[0].definitions[0].definition
		console.log(def)
		meaning.innerText = def
  })
})

async function getWord(word) {
  const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
  return res.json()
}