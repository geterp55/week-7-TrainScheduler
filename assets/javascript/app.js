
//  Link to Firebase
var tData = new Firebase("https://blistering-torch-6442.firebaseio.com/");


$("#submitBtn").on("click", function() {

	
	var tName = $("#trainName").val().trim();
	var tDestination = $("#destination").val().trim();
	var tFirstTime = $("#firstTime").val().trim();
	var tFrequency = $("#frequency").val().trim();

	//convert variables to FIREBASE object
	var newT = {
		trainName: tName,
		destination: tDestination,
		firstTime: tFirstTime,
		frequency: tFrequency
	}

	//data pushed to Firbase
	tData.push(newT);

	
	console.log(newT.tName);
	console.log(newT.tDestination);
	console.log(newT.tFirstTime);
	console.log(newT.tFrequency)

	
	alert("Train successfully added");

	//Clearing form for next user input
	$("#trainName").val("");
	$("#destination").val("");
	$("#firstTime").val("");
	$("#frequency").val("");

	
	return false;
});

//FIREBASE children
tData.on("child_added", function(childSnapshot) {

	console.log(childSnapshot.val());

	
	var tName = childSnapshot.val().trainName;
	var tDestination = childSnapshot.val().destination;
	var tFirstTime = childSnapshot.val().firstTime;
	var tFrequency = childSnapshot.val().frequency;

	
	console.log(tName);
	console.log(tDestination);
	console.log(tFirstTime);
	console.log(tFrequency);

	var tFrequency = childSnapshot.val().frequency;
		var firstTime = "03:30"; // Time is 3:30 AM

		// First Time (pushed back 1 year to make sure it comes before current time)
		var firstTimeConverted = moment(firstTime,"hh:mm").subtract(1, "years");
		console.log(firstTimeConverted);

		// Difference between the times
		var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
		console.log("DIFFERENCE IN TIME: " + diffTime);

		// Time apart (remainder)
		var tRemainder = diffTime % tFrequency;
		console.log(tRemainder);

		// Minute Until Train
		var tMinutesTillTrain = tFrequency - tRemainder;
		console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

		// Next Train
		var nextArrival = moment().add(tMinutesTillTrain, "minutes")
		console.log("ARRIVAL TIME: " + moment(nextArrival).format("hh:mm"))

	

	// Add each train's data into the table
	$("#tschedule > tbody").append("<tr><td>" + tName + "</td><td>" + tDestination + "</td><td>" + tFrequency + "</td><td>" + nextArrival +  "</td><td>" + tMinutesTillTrain + " min" + "</td></tr>");
});