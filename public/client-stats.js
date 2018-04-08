var socket = io.connect('http://localhost:8080');
var table = document.getElementById("statistics");

//Ամեն 10000 մլվրկ֊ը մեկ
setInterval(function () {
    //ուղարկում ենք "get stats" հացրումը սերվերին
    socket.emit("get stats", []);
}, 8080);

//Երբ սերվերը ուղարկում է տվյալ "send stats" պիտակով
socket.on("send stats", function (statistics) {
    //Պատրսատում ենք աղյուսակը
    statistics = JSON.parse(statistics);
    table.innerHTML = "Ստատիստիկա";
    tableHTML = "<tr><td>Ժամանակ</td><td>Ուտել Խոտակեր</td><td>Ուտել գիշատիչ</td><td>Ուտել super</td><td>բազմանալ խոտ</td><td>Բազմանալ խոտակեր</td><td>Բազմանալ գիշատիչ</td><td>Մահանալ խոտակեր</td><td>Մահանալ գիշատիչ</td></tr>";
    for (var st of statistics) {
        tableHTML += "<tr>";
        tableHTML += "<td>" + st.timestamp + "</td>";
        tableHTML += "<td>" + st.eateatgrass + "</td>";
        tableHTML += "<td>" + st.eatpredator + "</td>";
        tableHTML += "<td>" + st.eatsuper + "</td>";
        tableHTML += "<td>" + st.mulgrass + "</td>";
        tableHTML += "<td>" + st.muleatgrass + "</td>";
        tableHTML += "<td>" + st.mulpredator + "</td>";
        tableHTML += "<td>" + st.dieeatgrass+ "</td>";
        tableHTML += "<td>" + st.diepredator + "</td>";
        tableHTML += "</tr>";
    

    }

    table.innerHTML = tableHTML;
    //console.log(statistics);
})