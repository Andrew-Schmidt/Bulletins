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
        if (fieldId === "Rx-week") {
            document.getElementById("Rx-week").innerText = "$" + Math.trunc(value.trim());
        }
        if (fieldId === "Rx-year") {
            document.getElementById("Rx-year").innerText = "$" + Math.trunc(value.trim());
        }
        if (fieldId === "gen-bud") {
            document.getElementById("gen-bud").innerText = "$" + Math.trunc(value.trim());
        }
        if (fieldId === "ytd") {
            document.getElementById("ytd").innerText = "$" + Math.trunc(value.trim());
        }
        }
       document.getElementById("Date").innerText = data[4];
        console.log(`Field: ${header}, Value: "${value}"`);


    });
document.getElementById("csvFileInput").remove();


};
const d = new Date().getMonth() + 1;
console.log(d);

if (d === 1) {
    document.getElementById("Cleaner").innerText = "January: Alex & Bridgette Brown";
    document.getElementById("Next-Cleaner").innerText = "February: Ken & Teresa Brown";
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
    document.getElementById("Cleaner").innerText = "February: Ken & Teresa Brown";
    document.getElementById("Next-Cleaner").innerText = "March: Eric & Theresa Schmidt";
    document.getElementById("birth-1").innerText = "Lukas Ford  Feb: 18";
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
    document.getElementById("Cleaner").innerText = "March: Eric & Theresa Schmidt";
    document.getElementById("Next-Cleaner").innerText = "April: Brian & Rebecca Zimmer";
    document.getElementById("birth-1").innerText = "Bridgette Brown Mar: 6";
    document.getElementById("birth-2").innerText = "Theresa Schmidt Mar: 23";
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
    document.getElementById("Cleaner").innerText = "April: Brian & Rebecca Zimmer";
    document.getElementById("Next-Cleaner").innerText = "May: Fritz & Sharon Sachtleben";
    document.getElementById("birth-1").innerText = "Andrew Schmidt Apr: 13";
    document.getElementById("birth-2").innerText = "Elijah Schmidt Apr: 14";
    document.getElementById("birth-3").innerText = "";
    document.getElementById("birth-4").innerText = "";
    document.getElementById("birth-5").innerText = "";
    document.getElementById("ann-1").innerText = "Lukas & Mackenzie Ford  Apr: 15"
    document.getElementById("ann-2").innerText = "";
    document.getElementById("ann-3").innerText = "";
    document.getElementById("ann-4").innerText = "";
    document.getElementById("ann-5").innerText = "";
}
else if (d === 5) {
    document.getElementById("Cleaner").innerText = "May: Fritz & Sharon Sachtleben";
    document.getElementById("Next-Cleaner").innerText = "June: Alex & Bridgette Brown";
    document.getElementById("birth-1").innerText = "Don Walsh May: 13";
    document.getElementById("birth-2").innerText = "Kristen Walsh May: 13";
    document.getElementById("birth-3").innerText = "Nathan Pederson May: 18";
    document.getElementById("birth-4").innerText = "Betty Albers May: 6";
    document.getElementById("birth-5").innerText = "";
    document.getElementById("ann-1").innerText = "";
    document.getElementById("ann-2").innerText = "";
    document.getElementById("ann-3").innerText = "";
    document.getElementById("ann-4").innerText = "";
    document.getElementById("ann-5").innerText = "";
}
else if (d === 6) {
    document.getElementById("Cleaner").innerText = "June: Alex & Bridgette Brown";
    document.getElementById("Next-Cleaner").innerText = "July: Ken & Teresa Brown";
    document.getElementById("birth-1").innerText = "Edith Pederson June: 27";
    document.getElementById("birth-2").innerText = "";
    document.getElementById("birth-3").innerText = "";
    document.getElementById("birth-4").innerText = "";
    document.getElementById("birth-5").innerText = "";
    document.getElementById("ann-1").innerText = "Alex & Bridgette Brown June: 9";
    document.getElementById("ann-2").innerText = "";
    document.getElementById("ann-3").innerText = "";
    document.getElementById("ann-4").innerText = "";
    document.getElementById("ann-5").innerText = "";
}
else if (d === 7) {
    document.getElementById("Cleaner").innerText = "July: Ken & Teresa Brown";
    document.getElementById("Next-Cleaner").innerText = "August: Don & Kristen";
    document.getElementById("birth-1").innerText = "Liam Walsh Jul: 10";
    document.getElementById("birth-2").innerText = "Noah Mendiola Jul: 14";
    document.getElementById("birth-3").innerText = "Agelita Mendiola Jul: 21";
    document.getElementById("birth-4").innerText = "Rebecca Zimmer Jul: 31";
    document.getElementById("birth-5").innerText = "";
    document.getElementById("ann-1").innerText = "Josh & Molly Jul: 14";
    document.getElementById("ann-2").innerText = "Don & Kristen Walsh   Jul: 25";
    document.getElementById("ann-3").innerText = "Dan & Sandy Pederson  Jul: 28";
    document.getElementById("ann-4").innerText = "";
    document.getElementById("ann-5").innerText = "";
}
else if (d === 8) {
    document.getElementById("Cleaner").innerText = "August: Don & Kristen Walsh";
    document.getElementById("Next-Cleaner").innerText = "September: Eric & Theresa Schmidt";
    document.getElementById("birth-1").innerText = "Oliver Benson   Aug: 23";
    document.getElementById("birth-2").innerText = "Molly Lang Aug: 18";
    document.getElementById("birth-3").innerText = "Liz Mislich Aug: 31";
    document.getElementById("birth-4").innerText = "Genevieve Brown Aug: 11";
    document.getElementById("birth-5").innerText = "Paul Pederson Aug: 1";
    document.getElementById("birth-6").innerText = "Eric Schmidt Aug: 28";
    document.getElementById("ann-1").innerText = "Fritz and Sharon Sachtleben Aug: 11";
    document.getElementById("ann-2").innerText = "Herb & Edith Pederson Aug: 9";
    document.getElementById("ann-3").innerText = "Pastor & Debbie Pederson Aug: 21";
    document.getElementById("ann-4").innerText = "";
    document.getElementById("ann-5").innerText = "";
}
else if (d === 9) {
    document.getElementById("Cleaner").innerText = "September: Eric & Theresa Schmidt";
    document.getElementById("Next-Cleaner").innerText = "October: Brian & Rebecca Zimmer";
    document.getElementById("birth-1").innerText = "Brian Zimmer Sep: 11";
    document.getElementById("birth-2").innerText = "Mark Mendiola Sep: 17";
    document.getElementById("birth-3").innerText = "Alex Brown  Sep: 20";
    document.getElementById("birth-4").innerText = "";
    document.getElementById("birth-5").innerText = "";
    document.getElementById("ann-1").innerText = "";
    document.getElementById("ann-2").innerText = "";
    document.getElementById("ann-3").innerText = "";
    document.getElementById("ann-4").innerText = "";
    document.getElementById("ann-5").innerText = "";
}
else if (d === 10) {
    document.getElementById("Cleaner").innerText = "October: Brian & Rebecca Zimmer";
    document.getElementById("Next-Cleaner").innerText = "November: Brian & Rebecca Zimmer";
    document.getElementById("birth-1").innerText = "Fallon Walsh Oct: 9";
    document.getElementById("birth-2").innerText = "Mackenzie Pederson Oct: 14";
    document.getElementById("birth-3").innerText = "Herb Pederson Oct: 15";
    document.getElementById("birth-4").innerText = "Dan Pederson Oct: 20";
    document.getElementById("birth-5").innerText = "";
    document.getElementById("ann-1").innerText = "Brian & Rebecca Zimmer Oct: 6";
    document.getElementById("ann-2").innerText = "";
    document.getElementById("ann-3").innerText = "";
    document.getElementById("ann-4").innerText = "";
    document.getElementById("ann-5").innerText = "";
}
else if (d === 11) {
    document.getElementById("Cleaner").innerText = "November: Brian & Rebecca Zimmer";
    document.getElementById("Next-Cleaner").innerText = "December: Debbie & Pastor Pederson";
    document.getElementById("birth-1").innerText = "Luther Ford Nov: 7";
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
    document.getElementById("Cleaner").innerText = "December: Debbie & Pastor Pederson";
    document.getElementById("Next-Cleaner").innerText = "January: Alex & Bridgette";
    document.getElementById("birth-1").innerText = "Mary Ellen Delia Dec: 17";
    document.getElementById("birth-2").innerText = "";
    document.getElementById("birth-3").innerText = "";
    document.getElementById("birth-4").innerText = "";
    document.getElementById("birth-5").innerText = "";
    document.getElementById("ann-1").innerText = "Eric & Theresa Schmidt Dec: 27";
    document.getElementById("ann-2").innerText = "";
    document.getElementById("ann-3").innerText = "";
    document.getElementById("ann-4").innerText = "";
    document.getElementById("ann-5").innerText = "";
}

