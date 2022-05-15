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

    getPrevSunday() {
	let mon = this.getPrevMonday();
	return mon.subDay();
    }

    getNextMonday() {
	let sun = this.getNextSunday();
	return sun.addDay();
    }

    toShortDateString() {
	return this.toLocaleString(undefined, {month: "short",
					       day: "numeric",
					       weekday: "short"});
    }

}
