// FIRST PART
// loop that outputs 5 texts
// the texts need to go up in size, seams like it's double
// The text needs to change color from light green to light blue
// The text needs to be centered

// Create a div for the first loop
const rowsContainer = document.createElement("div");
document.body.append(rowsContainer);


// For loop to create each p tag and also give it information
for(let i = 1; i < 6; i++){
    const eachRow = document.createElement("p");
    rowsContainer.append(eachRow);
    eachRow.innerText = `Rad ${i}`;
    // CSS
    eachRow.style.fontSize = `${i*15}px`;
    eachRow.style.fontWeight = "bold";
    eachRow.style.textAlign = "center";
    eachRow.style.color = "#6D6AF6";
    eachRow.style.width = "100%";
    // Background color
    const hue = 120 + i*18;
    eachRow.style.backgroundColor = `hsl(${hue}, 50%, 80%)`;
}



// SECOND PART
// A div with a black solid border around
// The div needs three columsn and they need space around
// Need an array with numbers 0-9 witch will be used twice
// Need an array with the numbers 1-10 in text format

const numbersContainer = document.createElement("div");
document.body.append(numbersContainer);

numbersContainer.style.border = "2px solid black";
numbersContainer.style.textAlign = "center";
numbersContainer.style.display = "flex";
numbersContainer.style.justifyContent = "space-around";
numbersContainer.style.alignItems = "center";

const numberArray = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
];

const numberTextArray = [
    "ett",
    "två",
    "tre",
    "fyra",
    "fem",
    "sex",
    "sju",
    "åtta",
    "nio",
    "tio",
];

for(let i = 0; i < 3; i++){
    const numberContainerSection = document.createElement("div");
    numbersContainer.append(numberContainerSection);
    numberContainerSection.style.fontSize = "30px";
    numberContainerSection.style.backgroundColor = "#A8A8F0";
    numberContainerSection.style.width = "200px";
    numberContainerSection.style.padding = "20px";

    if(i == 0){
        for(let y = 0; y < numberArray.length; y++){
            const numberRow = document.createElement("p");
            numberContainerSection.append(numberRow);
            numberRow.innerText = numberArray[y];

            numberRow.style.margin = "0";
            numberRow.style.padding = "0";

            if(y%2 == 0){
                numberRow.style.backgroundColor = 'black';
                numberRow.style.color = "white";

                if(numberArray[y] == "4"){
                    numberRow.style.backgroundColor = "red";
                }
            }else{
                numberRow.style.backgroundColor = 'white';
            }
        }
    }else if(i == 1){
        const reverseArray = numberArray.reverse();
        for(let y = 0; y < numberArray.length; y++){
            const numberRow = document.createElement("p");
            numberContainerSection.append(numberRow);
            numberRow.innerText = reverseArray[y];

            numberRow.style.margin = "0";
            numberRow.style.padding = "0";

            if(y%2 == 0){
                numberRow.style.backgroundColor = 'white';
            }else if(reverseArray[y] == "8"){
                numberRow.style.backgroundColor = "red";
            }else{
                numberRow.style.backgroundColor = "black";
                numberRow.style.color = "white";
            }
        }

    }else if (i == 2){
        for(let y = 0; y < numberTextArray.length; y++){
            const numberRow = document.createElement("p");
            numberContainerSection.append(numberRow);
            numberRow.innerText = numberTextArray[y];

            numberRow.style.margin = "0";
            numberRow.style.padding = "0";

            if(y%2 == 0){
                numberRow.style.backgroundColor = 'black';
                numberRow.style.color = "white";
            }else if(numberTextArray[y] == "sex"){
                numberRow.style.backgroundColor = "red";
            }else{
                numberRow.style.backgroundColor = "white";
            }
        }
    }
}
// ------First column ----------
// Print number array from 0-9
// The column background needs to be purpel
// Each number row needs to be white or black
// The numbers need to be on the left side of the row container
// Number 4 needs to have the baclground purpel

// ------Second column ----------
// Print number array from 0-9 in reverse
// The column background needs to be purpel
// Each number row needs to be white or black but in reverse from the first row
// The numbers need to be centered in the row container
// Number 8 needs to have the background purple

// ------Third column ----------
// Print number text array from 1-10
// The column background needs to be purpel
// Each number needs to be on the right side of the row container
// Number 6 needs to have the background purple