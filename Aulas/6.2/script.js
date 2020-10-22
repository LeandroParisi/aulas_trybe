// preciso fazer essa validação?? já validei via HTML e JS
// inputValidation();
submitOutput();
createStateList();
// uncheckRadioButton();
// dateCharsRestriction();


function submitOutput(){
    let submitButton = document.querySelector("#submit");
    
    submitButton.addEventListener("click", function(){
        let formBody = document.querySelector(".form-body");
        let outputTexts = [];
        let outputTitles = [];
        let outputDiv = document.createElement("div");
        outputDiv.classList.add("output-div")

        
        let formInputs = document.querySelectorAll("input");
        for (index = 0; index < formInputs.length; index += 1){
            outputTexts.push(formInputs[index].value);
        }

        let formLabels = document.querySelectorAll("label");
        for (index = 0; index < formLabels.length; index += 1){
            outputTitles.push(formLabels[index].innerText);
        }

        outputDiv.innerHTML += "<h3>Sua resposta</h3>"
        for (index = 0; index < outputTexts.length; index += 1){
            outputDiv.innerHTML += outputTitles[index] + " ";
            outputDiv.innerHTML += outputTexts[index];
            outputDiv.innerHTML += "<br>"
        }

        formBody.removeChild(formBody.lastChild);
        formBody.appendChild(outputDiv);

        // testes
        console.log(formLabels);
        console.log(outputTitles);
        console.log(formInputs);
        console.log(outputTexts);
        console.log(outputDiv);
    })

}
// function inputValidation(){
//     let submitButton = document.querySelector("#submit");
//     submitButton.addEventListener('click', function(){

//     })
// }

function createStateList(){
    let stateArray = ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO"];
    let stateInputDiv = document.querySelector("#state-input");

    for (index in stateArray){
        let input = document.createElement("option");
        input.value=stateArray[index];
        input.innerText=stateArray[index];
        stateInputDiv.appendChild(input);
    }
}

// is it the best way to do it?
// function uncheckRadioButton(event){
//     let radioButtons = document.querySelectorAll('.radio-button');
//     for (let index = 0; index < radioButtons.length; index += 1){
//         radioButtons[index].addEventListener("click", function(event){
//             for (let innerIndex = 0; innerIndex < radioButtons.length; innerIndex += 1){
//                 radioButtons[innerIndex].checked = false;
//             }
//             event.target.checked = true;

//         }) 
//     }
// }

// function dateCharsRestriction(){
//     const dateInput = document.querySelector("#work-start-date");
//     const dateInputAllowedChars = /[0-9\/]+/;
//     dateInput.addEventListener("keypress", function() {
//     if (!dateInputAllowedChars.test(event.key)) {
//         event.preventDefault();
//     }
// })
// };

var picker = new Pikaday({ field: document.getElementById('datepicker') });