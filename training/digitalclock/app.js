setInterval(function(){
	//get clock text UI
	const clock = document.querySelector('.clock');

	// get current time
	const time = new Date();

	// obtaine hr min sec from time
	let hr = time.getHours();
	let min = time.getMinutes();
	let sec = time.getSeconds();

	// preceed by a 0 if single digit
	if(min<10) {
		min ='0'+min;
	}
	if(sec<10) {
		sec ='0'+sec;
	}
	//make hr into 12 hr instead of 24 hr
	let day = 'AM';
    if (hr >= 12) {
      day = 'PM';
      hr -= 12;
    }
    if (hr == 0) {
        hr = 12;
    }
    if(hr<10) {
		hr ='0'+hr;
	}

	//preprae text to show by combining hr min sec
	const toDisplay = hr + ':' + min + ':' + sec + ' '+day;

	// change the innerText to display current time
	clock.innerText=toDisplay;
},1000);

