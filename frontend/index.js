// const { quotes } = require("./data");

// const { people } = require("./data")

// const { adverbs } = require("./data")

// const { adverbs, nouns, verbs } = require("./data")

function moduleProject1() {
  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`

  // 👇 WORK WORK BELOW THIS LINE 👇

  // 👉 TASK 1 - Add a "widget" class name to widgets so CSS kicks in
  //  ✨ add your code here
  const widgets = document.querySelectorAll("section div")
  widgets.forEach((widget, idx) => {
    widget.classList.add('widget')
    widget.setAttribute('tabindex', idx + 1)
  })

  // const quoteDay = document.querySelector(".quoteoftheday")
  // quoteDay.className = "quoteoftheday widget";

  // const corporate = document.querySelector(".corporatespeak")
  // corporate.className = "corporatespeak widget";

  // const countdown = document.querySelector(".countdown")
  // countdown.className = "countdown widget";

  // const friends = document.querySelector(".friends")
  // friends.className = "friends widget";

  // 👉 TASK 2 - Build a "Quote of the Day" widget
  //  ✨ add your code here
  // const id = document.querySelector(".id");
  // const quote = document.querySelector(".quote");
  // const author = document.querySelector(".author")
  // const date = document.querySelector(".date")

  const randomizer = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomizer]
  // quote
  const quote = document.createElement('div')
  const quoteText = randomQuote.quote
  quote.textContent = quoteText
  const widget1 = document.querySelector(".quoteoftheday")
  widget1.appendChild(quote)
  //author and date
  const authorDate = document.createElement("div")
  const { author, date } = randomQuote
  authorDate.textContent = `${author} in ${date || "an unknown date"}`
  widget1.appendChild(authorDate)



  // 👉 TASK 3 - Build a "Corporate Speak" widget
  //  ✨ add your code here
  const randomAdverbs = Math.floor(Math.random() * adverbs.length)
  const adverb1 = adverbs[randomAdverbs]

  const randomNouns = Math.floor(Math.random() * nouns.length)
  const noun1 = nouns[randomNouns]

  const randomVerbs = Math.floor(Math.random() * verbs.length)
  const verb1 = verbs[randomVerbs]

  const combination = document.createElement("div")
  combination.textContent = `We need to ${verb1} our ${noun1} ${adverb1} in order to ${verb1} our ${noun1} ${adverb1}.`
  const widget2 = document.querySelector(".corporatespeak")
  widget2.appendChild(combination)




  // 👉 TASK 4 - Build a "Countdown" widget
  //  ✨ add your code here
  const countDownWid = document.querySelector(".countdown")
  let count = 5
  const countDown = document.createElement("p")
  countDown.textContent = `T-minus ${count}...`
  countDownWid.appendChild(countDown)

  setInterval(() => {
    if (count === 1) {
      countDown.textContent = "Liftoff! 🚀"
    } else {
      count--
      countDown.textContent = `T-minus ${count}...`
    }
  }, 1000)
  // 👉 TASK 5 - Build a "Friends" widget
  //  ✨ add your code here
  const mainPerson = people[Math.floor(Math.random() * people.length)]
  const personP = document.createElement("p")

  document.querySelector(".friends").appendChild(personP)
  const year = mainPerson.dateOfBirth.split("-")[0]
  let sentence = `${mainPerson.fname} ${mainPerson.lname} was born in ${year} and `

  if (!mainPerson.friends.length){
    sentence += 'has no friends.'
  } else {
    sentence += 'is friends with '
    for (let idx = 0; idx < mainPerson.friends.length; idx++) {
      const friendId = mainPerson.friends[idx]
      const friend = people.find(p => p.id === friendId)
      const fullName = `${friend.fname} ${friend.lname}`
      let lastIdx = idx === mainPerson.friends.length - 1
      let lastIdx2 = idx === mainPerson.friends.length - 2
      if (lastIdx) {
        sentence += `${fullName}.`
      } else if (lastIdx2) {
        sentence += `${fullName} and `
      } else {
        sentence += `${fullName}, `
      }
    }
  }
  personP.textContent = sentence

  // personP.textContent = `${mainPerson.fname} ${mainPerson.lname} was born in ${year} and is friends with `


  // 👉 TASK 6 - Make it so user can tab through the widgets
  //  ✨ add your code here



  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject1 }
else moduleProject1()
