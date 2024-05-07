let butterfliesFound = localStorage.getItem('val_butterfliesFound');
var maxButterflies = 8;
var tempFound = 0;

if (butterfliesFound == 1) {

    if (/home\.html$/.test(window.location.href)) {
        document.getElementById("info_1").textContent = "Don't forget to like and subscribe for more fascism fun!";
        document.getElementById("info_2").textContent = 'Why second place isn`t that bad (opinion piece)';
        document.getElementById("info_3").textContent = 'THERE ARE SINGLE GRANDMOTHERS IN YOUR AREA!';
        document.getElementById("info_4").textContent = 'none';
    }
}

if (butterfliesFound == 5) {

    if (/home\.html$/.test(window.location.href)) {
        document.getElementById("info_1").textContent = "Resistance group makes it's presense known";
        document.getElementById("info_2").textContent = "Resistance group makes it's presense known";
        document.getElementById("info_3").textContent = "Resistance group makes it's presense known";
        document.getElementById("info_4").textContent = "Resistance group makes it's presense known";
    }
}

if (butterfliesFound == maxButterflies) {
    if (/home\.html$/.test(window.location.href) || /forums\.html$/.test(window.location.href) || /forums2\.html$/.test(window.location.href) || /forums3\.html$/.test(window.location.href)
    || /forums4\.html$/.test(window.location.href) || /forums5\.html$/.test(window.location.href) || /currentEvents\.html$/.test(window.location.href) || /enlistPage\.html$/.test(window.location.href)) {
        window.location.href = 'you_beated_the_baddies.html';
    }
}