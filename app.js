const srcVal = document.getElementById("WordSrc")
const newBtn = document.getElementById("New")
const meaning = document.getElementById("meaning")
const meaning2 = document.getElementById("meaning2")

newBtn.addEventListener("click", () => {
  getWord(srcVal.value).then(data => {
    let def = data[0].meanings[0].definitions[0].definition
		meaning.innerText = def
    let def2 = data[0].meanings[0].definitions[1].definition
    meaning2.innerText = def2


  })
})

async function getWord(word) {
  const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
  return res.json()
}
