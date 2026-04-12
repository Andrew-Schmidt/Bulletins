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

function updateFieldsFromCSV(csvText) {
    const rows = csvText.split("\n").map(row => row.split("|"));
    if (rows.length < 2) return; // Ensure at least header and one row exist

    const headers = rows[0]; // First row contains column names
    const data = rows[1]; // Second row contains actual values 

    const mapping = {
        "SundayDate": "Today",
        "Cleaner": "Cleaner",
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