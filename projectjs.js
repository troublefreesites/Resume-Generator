var header1 = document.createElement("h1");
var header2 = document.createElement("h2");
header1.setAttribute("class", "header1");
header2.setAttribute("class", "header2");
nameText = document.createTextNode("Leslie Norris");
document.body.appendChild(header1);
header1.appendChild(nameText);
classText = document.createTextNode("WEB 115");
document.body.appendChild(header2);
header2.appendChild(classText);
var rule = document.createElement("hr");
rule.setAttribute("class", "hr");
document.body.appendChild(rule);
var docTitle = document.createElement("p");
docTitle.setAttribute("class", "title");
titleText = document.createTextNode("Build Your Resume");
document.body.appendChild(docTitle);
docTitle.appendChild(titleText);

function resumeCreator(){
var newName = document.getElementById("fullName").value;
var newAddress = document.getElementById("address").value;
var phone = document.getElementById("phone").value;
var email = document.getElementById("email").value;
	if (email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)) {
		alert("Valid email address");

}	
	
	else {
		alert("Please reenter email address");
		
		return;
	}
	
	

var objective = "Career Objective";
var careerObjective = document.getElementById("objective").value;
var personalHeader = "Personal Information";
var personalData = document.getElementById("personal").value;
var educationData = "Education";
var education = document.getElementById("education").value;
var employmentHeader = "Employment experience";
var startDate1 = document.getElementById("startDate1").value;
var endDate1 = document.getElementById("endDate1").value;
var employment1 = document.getElementById("job1").value;
var startDate2 = document.getElementById("startDate2").value;
var endDate2 = document.getElementById("endDate2").value;
var employment2 = document.getElementById("job2").value;
var startDate3 = document.getElementById("startDate3").value;
var endDate3 = document.getElementById("endDate3").value;
var employment3 = document.getElementById("job3").value;
var startDate4 = document.getElementById("startDate4").value;
var endDate4 = document.getElementById("endDate4").value;
var employment4 = document.getElementById("job4").value;
var charRefHeader = "Character References";
var charReferences = document.getElementById("character").value;
var proRefHeader = "Professional References";
var proReferences = document.getElementById("professional").value;
var newWindow = window.open('about:blank','resumeWindow','width=960','height=700', 'left=100');
	newPage = ("<html>\n<head>\n<title>WEB 115 Final Project</title>\n<style>#heading {font-family: Lucida Console; font-size: 1.2em;} #rightColumn {width: 65%; float:right; font-family: Lucida Console; font-size:1em; padding-bottom: 10px;} #leftColumn {clear:both; float:left; width: 27%; padding-bottom: 10px; font-family: Lucida Console; font-size: 1em;} </style>\n</head>\n<body>\n");
    newPage += ("<div id='heading'>" + newName + "</div>");
	newPage += ("<div id='heading'>" + newAddress + "&nbsp" + phone + "&nbsp" + "&nbsp" + email + "</div>");
	newPage += ("<hr/>");
	newPage += ("<div id='leftColumn'>" + objective + "</div>");
	newPage += ("<div id='rightColumn'>" + careerObjective + "</div>");
	newPage += ("<div id='leftColumn'>" + personalHeader + "</div>" + "<br />");
	newPage += ("<div id='rightColumn'>" + personalData + "</div>" + "<br />");
	newPage += ("<div id='leftColumn'>" + educationData + "</div>" + "<br />");
	newPage += ("<div id='rightColumn'>" + education + "</div>");
	newPage += ("<div id='leftColumn'>" + employmentHeader + "</div>" + "<br />" + "<br />");
	newPage += ("<div id='leftColumn'>" + startDate1 + "&nbsp" + '-' + "&nbsp" + endDate1 + "</div>");
	newPage += ("<div id='rightColumn'>" + employment1 + "</div>");
	newPage += ("<div id='leftColumn'>" + startDate2 + "&nbsp" + '-' + "&nbsp" + endDate2 + "</div>");
	newPage += ("<div id='rightColumn'>" + employment2 + "</div>");
    newPage += ("<div id='leftColumn'>" + startDate3 + "&nbsp" + '-' + "&nbsp" + endDate3 + "</div>");
	newPage += ("<div id='rightColumn'>" + employment3 + "</div>");
    newPage += ("<div id='leftColumn'>" + startDate4 + "&nbsp" + '-' + "&nbsp" + endDate4 + "</div>");
	newPage += ("<div id='rightColumn'>" + employment4 + "</div>");
    newPage += ("<div id='leftColumn'>" + charRefHeader + "</div>");
    newPage += ("<div id='rightColumn'>" + charReferences + "</div>");
    newPage += ("<div id='leftColumn'>" + proRefHeader + "</div>");
    newPage += ("<div id='rightColumn'>" + proReferences + "</div>");
    newPage += ("</body>\n</html>");
    newWindow.document.write(newPage);
}