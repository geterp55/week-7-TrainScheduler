// Steps to complete:
/*
1. Create Firebase link
2. Create button for adding new employees - then update the html + update the database
3. Create a way to retrive employees from the emplyee database.
4. Create a way to calculate the months worked.  Using differenc between start and current time.  Then use moment.js formating to se diference in months.
5. Calculate total billing.
*/
// 1. Link to Firebase
var tData = new Firebase("https://blistering-torch-6442.firebaseio.com/");

// 2. Button for adding Employees
$("#submitBtn").on("click", function() {

	//Grab user input
	var tName = $("#trainName").val().trim();
	var tDestination = $("#destination").val().trim();
	var tFirstTime = $("#firstTime").val().trim();
	var tFrequency = $("#frequency").val().trim();

	// Creates local "tmeporary" object for holding employee data
	var newT = {
		trainName: tName,
		destination: tDestination,
		firstTime: tFirstTime,
		frequency: tFrequency
	}

	// Uploads employee data to the database
	tData.push(newT);

	//Logs everything to console
	console.log(newT.tName);
	console.log(newT.tDestination);
	console.log(newT.tFirstTime);
	console.log(newT.tFrequency)

	// Alert
	alert("Train successfully added");

	// Clears all of the text-boxes
	$("#trainName").val("");
	$("#destination").val("");
	$("#firstTime").val("");
	$("#frequency").val("");

	// Prevent moving to new page
	return false;
});

// 3. Create Firebase event for adding employee to the database and a row in the html when a user adds an entry
tData.on("child_added", function(childSnapshot) {

	console.log(childSnapshot.val());

	// Store eveything into a variable.
	var tName = childSnapshot.val().trainName;
	var tDestination = childSnapshot.val().destination;
	var tFirstTime = childSnapshot.val().firstTime;
	var tFrequency = childSnapshot.val().frequency;

	//Employee Info
	console.log(tName);
	console.log(tDestination);
	console.log(tFirstTime);
	console.log(tFrequency);


// Assumptions
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