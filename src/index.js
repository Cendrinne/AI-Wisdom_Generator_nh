function displayWisdom(response) {
  new Typewriter("#wisdom", {
    strings: response.data.answer,
    autoStart: true,
    delay: 3,
    cursor: "",
  });
}

function generateWisdom(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "73f90ofbe4423241037fca0b58a62fdt";
  let context =
    "You are a expert and full of wisdom. You mission is in HTML format, generate a 4 line wisdom and separate each line with a <br />. Make sure to follow the user instructions. Do not include a title to the poem. Do not include markdown in your response. Sign the poem with 'SheCodes AI' on it own line, inside a <strong> element at the end of the wisdom and NOT at the beginning";
  let prompt = `User instructions: Generate Wisdom about ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let wisdomElement = document.querySelector("#wisdom");
  wisdomElement.classList.remove("hidden");
  wisdomElement.innerHTML = `<div class="generating">⏳Generating Wisdom about ${instructionsInput.value}</div`;

  axios.get(apiUrl).then(displayWisdom);
}

let wisdomFormElement = document.querySelector("#wisdom-generator-form");
wisdomFormElement.addEventListener("submit", generateWisdom);
