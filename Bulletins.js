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
        "SundayName": "SundayName",
        "Date": "Date",
        "Prayer": "Prayer",
        "BulletinPassage": "BulletinPassage",
        "OpeningHymn": "OpeningHymn",
        "TheEpistle": "TheEpistle",
        "TheGospelReading": "TheGospelReading",
        "SermonHymn": "SermonHymn",
        "SermonText": "SermonText",
        "SermonName": "SermonName",
        "TheOffertory": "TheOffertory",
        "ThirdHymn": "ThirdHymn",
        "ClosingHymn": "ClosingHymn",
        "News": "News"

    };

    headers.forEach((header, index) => {
        const fieldId = mapping[header];
        let value = data[index];

        // Custom Formatting
        if (fieldId === "OpeningHymn") {
            value = "Hymn: " + value; // Modify date format
            console.log(value)
            document.getElementById("OpeningHymn").innerText = value
        }
        else if (fieldId === "TheEpistle") {
            value = "The Epistle: " + value; // Modify date format
            console.log(value)
            document.getElementById("TheEpistle").innerText = value
        }
        else if (fieldId === "TheGospelReading") {
            value = "The Gospel Reading: " + value; // Modify date format
            console.log(value)
            document.getElementById("TheGospelReading").innerText = value
        }
        else if (fieldId === "SermonHymn") {
            value = "The Sermon Hymn: " + value; // Modify date format
            console.log(value)
            document.getElementById("SermonHymn").innerText = value
        }
        else if (fieldId === "SermonText") {
            value = "Sermon Text: " + value; // Modify date format
            console.log(value)
            document.getElementById("SermonText").innerText = value
        }
        else if (fieldId === "TheOffertory") {
            value = "The Offertory: " + value; // Modify date format
            console.log(value)
            document.getElementById("TheOffertory").innerText = value
        }
        else if (fieldId === "ThirdHymn") {
            value = "Hymn: " + value; // Modify date format
            console.log(value)
            document.getElementById("ThirdHymn").innerText = value
        }

        else if (fieldId === "ClosingHymn") {
            value = "Closing Hymn: " + value; // Modify date format
            console.log(value)
            document.getElementById("ClosingHymn").innerText = value
        }
        //else if (true) {
          //  console.log("test" + value)
        //}
        else if (fieldId && document.getElementById(fieldId)) {
            document.getElementById(fieldId).innerText = data[index].trim();
            console.log(value)
        }
        console.log(`Field: ${header}, Value: "${value}"`);
        value = "CongregationNews: " + value; // Modify date format
        document.getElementById("News").innerText = value
        
    });
document.getElementById("csvFileInput").remove();
}