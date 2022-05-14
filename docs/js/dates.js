/* A bunch of badly implemented date stuff because I'm too dumb to download a package and use it */

class jDate extends Date {
    
    addDays(days) {
	let result = new jDate(this.valueOf());
	result.setDate(result.getDate() + days);
	return result;
    }

    addDay() {
	return this.addDays(1);
    }
    subDay() {
	return this.addDays(-1);
    }
    
    isSunday() { return this.getDay() == 0; }
    isMonday() { return this.getDay() == 1; }

    getNextSunday() {
	return (this.isSunday() ? this : this.addDay().getNextSunday());
    }
    
    getPrevMonday() {
	return (this.isMonday() ? this : this.subDay().getPrevMonday());
    }

    toWeek() {
	return new Week(this.getPrevMonday());
    }

    toShortDateString() {
    let dateString = this.toDateString(),
	l = dateString.length;
    return dateString.substring(0,l-5);
    }

}

class Week {
    constructor(mon) {
	this.Monday = mon;
	this.Tuesday = this.Monday.addDay();
	this.Wednesday = this.Tuesday.addDay();
	this.Thursday = this.Wednesday.addDay();
	this.Friday = this.Thursday.addDay();
	this.Saturday = this.Friday.addDay();
	this.Sunday = this.Saturday.addDay();
	this.contextSunday = this.Monday.subDay();
	this.contextMonday = this.Sunday.addDay();
    }

    showDays() {
	return [this.Monday.toShortDateString(),
		this.Sunday.toShortDateString()];
    }
}

/* TODO:
  Still need to get the starter words for each day and display this all as a nice table or something, with the current day's starter in red.
*/

// #a89984
// #504945
