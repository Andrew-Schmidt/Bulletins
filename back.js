document.getElementById("csvFileInput").addEventListener("change", function(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        const text = e.target.result;
        updateFieldsFromCSV(text);
    };
    reader.readAsText(file);
});
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
function updateFieldsFromCSV(csvText) {
    const rows = csvText.split("\n").map(row => row.split("|"));
    if (rows.length < 2) return; // Ensure at least header and one row exist

    const headers = rows[0]; // First row contains column names
    const data = rows[1]; // Second row contains actual values 

    const mapping = {
        "SundayDate": "Today",
        //"Cleaner": "Cleaner",
        "Attendance-num": "Attendance-num",
        "gen-bud": "gen-bud",
        "ytd": "ytd",
        "Rx-year": "Rx-year",
        "Rx-week": "Rx-week"
     };

    headers.forEach((header, index) => {
        const fieldId = mapping[header];
        let value = data[index];
        console.log(fieldId)
        console.log(value)
        console.log(1)


        
        
        
         if (fieldId && document.getElementById(fieldId)) {
            document.getElementById(fieldId).innerText = data[index].trim();
            console.log(value)
            console.log(8) 
        }
       document.getElementById("Date").innerText = data[1];
        console.log(`Field: ${header}, Value: "${value}"`);


    });
document.getElementById("csvFileInput").remove();


};
const d = new Date().getMonth() + 1;
console.log(d);

if (d === 1) {
    document.getElementById("Cleaner").innerText = "Alex & Bridgette";
    document.getElementById("birth-1").innerText = "Sharon Sachtleben";
    document.getElementById("birth-2").innerText = "";
    document.getElementById("birth-3").innerText = "";
    document.getElementById("birth-4").innerText = "";
    document.getElementById("birth-5").innerText = "";
    document.getElementById("ann-1").innerText = "";
    document.getElementById("ann-2").innerText = "";
    document.getElementById("ann-3").innerText = "";
    document.getElementById("ann-4").innerText = "";
    document.getElementById("ann-5").innerText = ""; 
}
else if (d === 2) {
    document.getElementById("Cleaner").innerText = "Ken & Teresa";
    document.getElementById("birth-1").innerText = "Lukas Ford  2/18";
    document.getElementById("birth-2").innerText = "";
    document.getElementById("birth-3").innerText = "";
    document.getElementById("birth-4").innerText = "";
    document.getElementById("birth-5").innerText = "";
    document.getElementById("ann-1").innerText = "";
    document.getElementById("ann-2").innerText = "";
    document.getElementById("ann-3").innerText = "";
    document.getElementById("ann-4").innerText = "";
    document.getElementById("ann-5").innerText = "";
}
else if (d === 3) {
    document.getElementById("Cleaner").innerText = "Eric & Theresa";
    document.getElementById("birth-1").innerText = "Bridgette Brown 3/6";
    document.getElementById("birth-2").innerText = "Theresa Schmidt 3/23";
    document.getElementById("birth-3").innerText = "";
    document.getElementById("birth-4").innerText = "";
    document.getElementById("birth-5").innerText = "";
    document.getElementById("ann-1").innerText = "";
    document.getElementById("ann-2").innerText = "";
    document.getElementById("ann-3").innerText = "";
    document.getElementById("ann-4").innerText = "";
    document.getElementById("ann-5").innerText = "";
}
else if (d === 4) {
    document.getElementById("Cleaner").innerText = "Brian & Rebecca";
    document.getElementById("birth-1").innerText = "Andrew Schmidt 4/13";
    document.getElementById("birth-2").innerText = "Elijah Schmidt 4/14";
    document.getElementById("birth-3").innerText = "";
    document.getElementById("birth-4").innerText = "";
    document.getElementById("birth-5").innerText = "";
    document.getElementById("ann-1").innerText = "Lukas & Mackenzie Ford  4/15"
    document.getElementById("ann-2").innerText = "";
    document.getElementById("ann-3").innerText = "";
    document.getElementById("ann-4").innerText = "";
    document.getElementById("ann-5").innerText = "";
}
else if (d === 5) {
    document.getElementById("Cleaner").innerText = "Fritz & Sharon";
    document.getElementById("birth-1").innerText = "Don Walsh 5/13";
    document.getElementById("birth-2").innerText = "Kristen Walsh 5/13";
    document.getElementById("birth-3").innerText = "Nathan Pederson 5/18";
    document.getElementById("birth-4").innerText = "Betty Albers 5/6";
    document.getElementById("birth-5").innerText = "";
    document.getElementById("ann-1").innerText = "";
    document.getElementById("ann-2").innerText = "";
    document.getElementById("ann-3").innerText = "";
    document.getElementById("ann-4").innerText = "";
    document.getElementById("ann-5").innerText = "";
}
else if (d === 6) {
    document.getElementById("Cleaner").innerText = "Alex & Bridgette";
    document.getElementById("birth-1").innerText = "Edith Pederson 6/27";
    document.getElementById("birth-2").innerText = "";
    document.getElementById("birth-3").innerText = "";
    document.getElementById("birth-4").innerText = "";
    document.getElementById("birth-5").innerText = "";
    document.getElementById("ann-1").innerText = "Alex & Bridgette Brown 6/9";
    document.getElementById("ann-2").innerText = "";
    document.getElementById("ann-3").innerText = "";
    document.getElementById("ann-4").innerText = "";
    document.getElementById("ann-5").innerText = "";
}
else if (d === 7) {
    document.getElementById("Cleaner").innerText = "Ken & Teresa";
    document.getElementById("birth-1").innerText = "Liam Walsh 7/10";
    document.getElementById("birth-2").innerText = "Noah Mendiola 7/14";
    document.getElementById("birth-3").innerText = "Agelita Mendiola 7/21";
    document.getElementById("birth-4").innerText = "Rebecca Zimmer 7/31";
    document.getElementById("birth-5").innerText = "";
    document.getElementById("ann-1").innerText = "Josh & Molly 14-Jul";
    document.getElementById("ann-2").innerText = "Don & Kristen Walsh   25-Jul";
    document.getElementById("ann-3").innerText = "Dan & Sandy Pederson  28-Jul";
    document.getElementById("ann-4").innerText = "";
    document.getElementById("ann-5").innerText = "";
}
else if (d === 8) {
    document.getElementById("Cleaner").innerText = "Don & Kristen";
    document.getElementById("birth-1").innerText = "Oliver Benson   8/23";
    document.getElementById("birth-2").innerText = "Molly Lang 8/18";
    document.getElementById("birth-3").innerText = "Liz Mislich 8/31";
    document.getElementById("birth-4").innerText = "Genevieve Brown 8/11";
    document.getElementById("birth-5").innerText = "Paul Pederson 8/1";
    document.getElementById("birth-6").innerText = "Eric Schmidt 8/28";
    document.getElementById("ann-1").innerText = "Fritz and Sharon Sachtleben 8/11";
    document.getElementById("ann-2").innerText = "Herb & Edith Pederson 8/9";
    document.getElementById("ann-3").innerText = "Pastor & Debbie Pederson 8/21";
    document.getElementById("ann-4").innerText = "";
    document.getElementById("ann-5").innerText = "";
}
else if (d === 9) {
    document.getElementById("Cleaner").innerText = "Eric & Theresa";
    document.getElementById("birth-1").innerText = "Brian Zimmer 9/11";
    document.getElementById("birth-2").innerText = "Mark Mendiola 9/17";
    document.getElementById("birth-3").innerText = "Alex Brown  9/20";
    document.getElementById("birth-4").innerText = "";
    document.getElementById("birth-5").innerText = "";
    document.getElementById("ann-1").innerText = "";
    document.getElementById("ann-2").innerText = "";
    document.getElementById("ann-3").innerText = "";
    document.getElementById("ann-4").innerText = "";
    document.getElementById("ann-5").innerText = "";
}
else if (d === 10) {
    document.getElementById("Cleaner").innerText = "Brian & Rebecca";
    document.getElementById("birth-1").innerText = "Fallon Walsh 10/9";
    document.getElementById("birth-2").innerText = "Mackenzie Pederson 10/14";
    document.getElementById("birth-3").innerText = "Herb Pederson 10/15";
    document.getElementById("birth-4").innerText = "Dan Pederson 10/20";
    document.getElementById("birth-5").innerText = "";
    document.getElementById("ann-1").innerText = "Brian & Rebecca Zimmer 10/6";
    document.getElementById("ann-2").innerText = "";
    document.getElementById("ann-3").innerText = "";
    document.getElementById("ann-4").innerText = "";
    document.getElementById("ann-5").innerText = "";
}
else if (d === 11) {
    document.getElementById("Cleaner").innerText = "Brian & Rebecca";
    document.getElementById("birth-1").innerText = "Luther Ford 11/7";
    document.getElementById("birth-2").innerText = "";
    document.getElementById("birth-3").innerText = "";
    document.getElementById("birth-4").innerText = "";
    document.getElementById("birth-5").innerText = "";
    document.getElementById("ann-1").innerText = "";
    document.getElementById("ann-2").innerText = "";
    document.getElementById("ann-3").innerText = "";
    document.getElementById("ann-4").innerText = "";
    document.getElementById("ann-5").innerText = "";
}
else if (d === 12) {
    document.getElementById("Cleaner").innerText = "Debbie & Pastor";
    document.getElementById("birth-1").innerText = "Mary Ellen Delia    12/17";
    document.getElementById("birth-2").innerText = "";
    document.getElementById("birth-3").innerText = "";
    document.getElementById("birth-4").innerText = "";
    document.getElementById("birth-5").innerText = "";
    document.getElementById("ann-1").innerText = "Eric & Theresa Schmidt 12/27";
    document.getElementById("ann-2").innerText = "";
    document.getElementById("ann-3").innerText = "";
    document.getElementById("ann-4").innerText = "";
    document.getElementById("ann-5").innerText = "";
}

