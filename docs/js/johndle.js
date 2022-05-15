let origin = new jDate(2022, 03, 25),
    today = new jDate();

function getDayNumber(jdate) {
    let msPerDay = 1000 * 60 * 60 * 24,
	dayNumber = Math.floor((jdate - origin) / msPerDay) - 1;
    return dayNumber;
}

let contextSunday = today.getPrevSunday(),
    weekStart = today.getPrevMonday(),
    weekFinish = today.getNextSunday(),
    startIndex = getDayNumber(contextSunday),
    todayNumber = getDayNumber(today);

window.onload = function() {
    document.getElementById("thisWeekMon").innerHTML=weekStart.toShortDateString();
    document.getElementById("thisWeekSun").innerHTML=weekFinish.toShortDateString();
    for (var x = 0; x < 9; x++) {
	let posn = document.getElementById("day" + x);
	posn.innerHTML+=starters[startIndex + x];
	if (x == 0 || x == 8) {
	    posn.classList.add("contextDay");
	} else if (startIndex + x === todayNumber) {
	    posn.classList.add("currentDay");
	} else {
	    posn.classList.add("anotherDay");
	}
    }
}

