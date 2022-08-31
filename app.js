const text = document.querySelector(".text");
let userAgent = navigator.userAgent;
let DiffBrowser;
if (userAgent.match(/edg/i)) {
	text.style.color = "red";
	DiffBrowser = "edge";
} else if (userAgent.match(/chrome|chromium|crios/i)) {
	text.style.color = "black";
	DiffBrowser = "chrome";
} else if (userAgent.match(/safari/i)) {
	text.style.color = "green";
	DiffBrowser = "safari";
} else if (userAgent.match(/opr/i)) {
	text.style.color = "blue";
	DiffBrowser = "opera";
} else if (userAgent.match(/firefox|crios/i)) {
	text.style.color = "crimson";
	DiffBrowser = "firefox";
} else {
	console.log("You use other browser");
}

console.log(DiffBrowser);
