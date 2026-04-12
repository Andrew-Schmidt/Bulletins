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
        "SundayDate": "SundayDate",
        "Offering": "Offering",
        "Epistle": "Epistle",
        "Gospel": "Gospel",
        "H1": "H1",
        "H2": "H2",
        "H3": "H3",
        "H4": "H4",
        "Title": "Title",
        "SundayName": "SundayName",
        "SermonText": "SermonText",
        "Passage": "Passage",
        "Prayer": "Prayer",
        "News": "News",
        "TheOffertory": "TheOffertory"
    };

    headers.forEach((header, index) => {
        const fieldId = mapping[header];
        let value = data[index];
        console.log(fieldId)
        console.log(value)
        console.log(1)


        
        if (fieldId === "H1") {
            value = "Hymn: " + value;
            console.log(value)
            document.getElementById("H1").innerText = value
            console.log(2)
        }
        else if (fieldId === "Epistle") {
            value = "The Epistle: " + value;
            console.log(value)
            document.getElementById("Epistle").innerText = value
            console.log(3)
        }
        else if (fieldId === "Gospel") {
            value = "The Gospel Reading: " + value;
            console.log(value)
            document.getElementById("Gospel").innerText = value
            console.log(4)       
        }
        else if (fieldId === "H2") {
            value = "The Sermon Hymn: " + value;
            console.log(value)
            document.getElementById("H2").innerText = value
            console.log(5)
        }
        else if (fieldId === "SermonText") {
            value = "Sermon Text: " + value;
            console.log(value)
            document.getElementById("SermonText").innerText = value
            console.log(6)
        }
        else if (fieldId === "TheOffertory") {
            value = "The Offertory: " + value;
            console.log(value)
            document.getElementById("TheOffertory").innerText = value
            console.log(6)
        }
        else if (fieldId === "H3") {
            value = "Hymn: " + value;
            console.log(value)
            document.getElementById("H3").innerText = value
        }

        else if (fieldId === "H4") {
            value = "Closing Hymn: " + value;
            console.log(value)
            document.getElementById("H4").innerText = value
            console.log(7)
        }
        
        else if (fieldId && document.getElementById(fieldId)) {
            document.getElementById(fieldId).innerText = data[index].trim();
            console.log(value)
            console.log(8)
        }
        console.log(`Field: ${header}, Value: "${value}"`);
        document.getElementById("News").innerText = value 
        value = "Congregation News: " + value;
        console.log(value)
        document.getElementById("News").innerText = value
        console.log(9)

    });
document.getElementById("csvFileInput").remove();
};
