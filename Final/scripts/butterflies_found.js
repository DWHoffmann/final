const totalButterflies = 8;
butterflyCodesArray = ["- !6234<br>", "- !5261<br>", "- !4433<br>", "- !7532<br>", "- !1111<br>", "- !8453<br>", "- !4789<br>", ""];
butterflyPageLinkArray = ["home", "hidden_eye", "broken_link", "downloaded_image", "navbar_butterfly", "forum_link_page_1", "forum_link_page_3", "caeser_cipher"];

// Function to increment the butterfliesFound variable when image is clicked
function incrementButterflies() {
  let butterfliesFound = localStorage.getItem('val_butterfliesFound');
  butterfliesFound = butterfliesFound ? parseInt(butterfliesFound) : 0;

  if (butterfliesFound <= totalButterflies) {
    butterfliesFound++;
  }

  if (butterfliesFound > totalButterflies) {
    butterfliesFound = totalButterflies;
  }

  if (/resistance_home_page\.html$/.test(window.location.href)) {
    document.getElementById('butterfliesFound').textContent = butterfliesFound + " out of " + totalButterflies;
  }

  localStorage.setItem('val_butterfliesFound', butterfliesFound);
  document.getElementById('butterflyImage').style.display = 'none';
}

// On page load, retrieve the count from localStorage and update the UI
window.onload = function() {
  let butterfliesFound = localStorage.getItem('val_butterfliesFound');
  let foundButterflyArray = JSON.parse(localStorage.getItem('isButterflyFoundArray'));

  if (!foundButterflyArray) {
    foundButterflyArray = Array(totalButterflies).fill(0); // Initialize with 20 zeros
    localStorage.setItem('isButterflyFoundArray', JSON.stringify(foundButterflyArray));
  }

  if (/resistance_home_page\.html$/.test(window.location.href)) {
    document.getElementById('butterfliesFound').textContent = butterfliesFound + " out of " + totalButterflies;
  }

  if (/resistance_home_page\.html$/.test(window.location.href) && butterfliesFound == totalButterflies) {
    document.getElementById('butterfliesFound').innerHTML = butterfliesFound + " out of " + totalButterflies + "<br><br><br><br><br><br> You found them all! Great job! *thumbs up* *teeth glimmer*";
  }

  console.log(foundButterflyArray);
  checkAllFoundButterflies(foundButterflyArray);
};

function butterflyFound(butterfly_id) {
  let foundButterflyArray = JSON.parse(localStorage.getItem('isButterflyFoundArray'));
  if (foundButterflyArray) {
    foundButterflyArray[butterfly_id] = 1;
    localStorage.setItem('isButterflyFoundArray', JSON.stringify(foundButterflyArray));
  }

  alert("A new code has been found!");
  location.reload();
}

function checkAllFoundButterflies(foundButterflyArray) {

  for (var i = 0; i < foundButterflyArray.length; i++) {
    if (foundButterflyArray[i] == 1 && new RegExp(`${butterflyPageLinkArray[i]}\\.html$`).test(window.location.href)) {
      document.getElementById(`butterfly-${i}`).style.display = 'none';
    }
  }

  butterflyCodes = "";
  for (var i = 0; i < foundButterflyArray.length; i++) {
    if (foundButterflyArray[i] == 1) {
      butterflyCodes += butterflyCodesArray[i];
    }
  }

  if (/resistance_home_page\.html$/.test(window.location.href)) {
    document.getElementById('butterfly-codes').innerHTML = butterflyCodes;
  }
}


if (/home\.html$/.test(window.location.href)) {
  document.getElementById('butterfly-0').addEventListener('click', function() { incrementButterflies(); butterflyFound(0); });
}

if (/hidden_eye\.html$/.test(window.location.href)) {
  document.getElementById('butterfly-1').addEventListener('click', function() { incrementButterflies(); butterflyFound(1); });
}

if (/broken_link\.html$/.test(window.location.href)) {
  document.getElementById('butterfly-2').addEventListener('click', function() { incrementButterflies(); butterflyFound(2); });
}

if (/downloaded_image\.html$/.test(window.location.href)) {
  document.getElementById('butterfly-3').addEventListener('click', function() { incrementButterflies(); butterflyFound(3); });
}

if (/navbar_butterfly\.html$/.test(window.location.href)) {
  document.getElementById('butterfly-4').addEventListener('click', function() { incrementButterflies(); butterflyFound(4); });
}

if (/forum_link_page_1\.html$/.test(window.location.href)) {
  document.getElementById('butterfly-5').addEventListener('click', function() { incrementButterflies(); butterflyFound(5); });
}

if (/forum_link_page_3\.html$/.test(window.location.href)) {
  document.getElementById('butterfly-6').addEventListener('click', function() { incrementButterflies(); butterflyFound(6); });
}

if (/caeser_cipher\.html$/.test(window.location.href)) {
  document.getElementById('butterfly-7').addEventListener('click', function() { incrementButterflies(); butterflyFound(7); });
}