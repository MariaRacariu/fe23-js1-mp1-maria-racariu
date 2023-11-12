// Create a div for the first loop
const rowsContainer = document.createElement("div");
document.body.append(rowsContainer);


// For loop to create each p tag
for(let i = 1; i < 6; i++){
    const eachRow = document.createElement("p");
    rowsContainer.append(eachRow);
    eachRow.innerText = `Rad ${i}`;
    // Style
    eachRow.style.fontSize = `${i*15}px`;
    eachRow.style.fontWeight = "bold";
    eachRow.style.textAlign = "center";
    eachRow.style.color = "#6D6AF6";
    eachRow.style.width = "100%";
    // Style Background color
    const hue = 120 + i*18;
    eachRow.style.backgroundColor = `hsl(${hue}, 50%, 80%)`;
}

// Main container for the 3 columns
const numbersContainer = document.createElement("div");
document.body.append(numbersContainer);

// Main container style
numbersContainer.style.border = "2px solid black";
numbersContainer.style.textAlign = "center";
numbersContainer.style.display = "flex";
numbersContainer.style.justifyContent = "space-around";
numbersContainer.style.alignItems = "center";
numbersContainer.style.padding = "50px";

// Arrays used for the 3 columns
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

// Loop for the 3 number containers
for(let i = 0; i < 3; i++){
    const numberContainerSection = document.createElement("div");
    numbersContainer.append(numberContainerSection);
    // Style for the 3 number containers
    numberContainerSection.style.fontSize = "30px";
    numberContainerSection.style.backgroundColor = "#A8A8F0";
    numberContainerSection.style.width = "100px";
    numberContainerSection.style.padding = "20px";

    if(i == 0){
        // ------First column ----------
        for(let y = 0; y < numberArray.length; y++){
            const numberRow = document.createElement("p");
            numberContainerSection.append(numberRow);
            numberRow.innerText = numberArray[y];
            // Style
            numberRow.style.margin = "0";
            numberRow.style.padding = "0";
            numberRow.style.textAlign = "left";

            if(y%2 == 0){
                numberRow.style.backgroundColor = 'black';
                numberRow.style.color = "white";
                // Style for exeption
                if(numberArray[y] == "4"){
                    numberRow.style.backgroundColor = "#A8A8F0";
                }
            }else{
                numberRow.style.backgroundColor = 'white';
            }
        }
    }else if(i == 1){
        const reverseArray = numberArray.reverse();
        // ------Second column ----------
        for(let y = 0; y < numberArray.length; y++){
            const numberRow = document.createElement("p");
            numberContainerSection.append(numberRow);
            numberRow.innerText = reverseArray[y];
            // Style
            numberRow.style.margin = "0";
            numberRow.style.padding = "0";

            if(y%2 == 0){
                numberRow.style.backgroundColor = 'white';
            }else if(reverseArray[y] == "8"){
                // Style for exeption
                numberRow.style.backgroundColor = "#A8A8F0";
                numberRow.style.color = "white";
            }else{
                numberRow.style.backgroundColor = "black";
                numberRow.style.color = "white";
            }
        }

    }else if (i == 2){
         // ------Third column ----------
        for(let y = 0; y < numberTextArray.length; y++){
            const numberRow = document.createElement("p");
            numberContainerSection.append(numberRow);
            numberRow.innerText = numberTextArray[y];
            // Style
            numberRow.style.margin = "0";
            numberRow.style.padding = "0";
            numberRow.style.textAlign = "right";

            if(y%2 == 0){
                numberRow.style.backgroundColor = 'black';
                numberRow.style.color = "white";
            }else if(numberTextArray[y] == "sex"){
                // Style for exeption
                numberRow.style.backgroundColor = "#A8A8F0";
            }else{
                numberRow.style.backgroundColor = "white";
            }
        }
    }
}