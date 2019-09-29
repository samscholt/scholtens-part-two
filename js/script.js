var eventType = prompt("What type of event are you attending: casual, semi-formal, or formal?");
var tempFahr = prompt("What is the temperature in Fahrenheit?");

var eventClothing;

switch (eventType) {
	case "casual":
		eventClothing = "something comfy";
		break;
	case "semi-formal":
		eventClothing = "a polo";
		break;
	case "formal":
		eventClothing = "a suit";
		break;
	default:	// in case user enters something invalid
		eventClothing = "something appropriate";
}

var tempClothing;

if (tempFahr < 54) {
	tempClothing = "a coat";
} else if (tempFahr <= 70) {
	tempClothing = "a jacket";
} else {
	tempClothing = "no jacket";
}

var result = "Since it is " + tempFahr + " degrees and you are going to a "
	+ eventType + " event, you should wear " + eventClothing + " and " + tempClothing + ".";
	
console.log(result);
document.write(result);