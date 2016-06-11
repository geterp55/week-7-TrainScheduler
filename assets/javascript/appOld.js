
//-----firebase links-----------

var dataRef = new Firebase("https://blistering-torch-6442.firebaseio.com/")

//------variables-------------
var trainName = "";
var destination = "";
// var firstTrain = "";
// var frequency = "";

// Capture Button Click
$('#submit').on('click',function(){
	trainName = $('#trainName').val().trim();
	destination = $('#destination').val().trim();
	// firstTrain = $('#firstTrain').val().trim();
	// frequency = $('#frequency').val().trim();

dataRef.push({
		trainName: trainName,
		destination: destination,
		// firstTrain: firstTrain,
		// frequency: frequency,
		// dateAdded: Firebase.ServerValue.TIMESTAMP
	});
	// Don't refresh the page!
	return false;
})

dataRef.on("value", function(snapshot) {
	// Log everything that's coming out of snapshot
	// console.log(snapshot.val());
	console.log(snapshot.val().trainName);
	console.log(snapshot.val().destination);
	// console.log(snapshot.val().firstTrain);
	// console.log(snapshot.val().frequency);
	// console.log(snapshot.val().joinDate)
	

	//list of items to the table
	var firstRowTd = $('#schedule').children().eq(1).children('tr').eq(0).children('td');
		firstRowTd.eq(0).text(snapshot.val().trainName);
	// 	firstRowTd.eq(1).text(response.destination);
	// 	firstRowTd.eq(2).text(response.firstTrain);
	// 	firstRowTd.eq(3).text(response.frequency);


	// var secondRowTd = $('#schedule').children().eq(1).children('tr').eq(1).children('td');
	// 	secondRowTd.eq(0).text(response.trainName);
	// 	secondRowTd.eq(1).text(response.destination);
	// 	secondRowTd.eq(2).text(response.firstTrain);
	// 	secondRowTd.eq(3).text(response.frequency);

	// var thirdRowTd = $('#schedule').children().eq(1).children('tr').eq(2).children('td');
	// 	thirdRowTd.eq(0).text(response.trainName);
	// 	thirdRowTd.eq(1).text(response.destination);
	// 	thirdRowTd.eq(2).text(response.firstTrain);
	// 	thirdRowTd.eq(3).text(response.frequency);


	// var fourthRowTd = $('#schedule').children().eq(1).children('tr').eq(3).children('td');
	// 	fourthRowTd.eq(0).text(response.trainName);
	// 	fourthRowTd.eq(1).text(response.destination);
	// 	fourthRowTd.eq(2).text(response.firstTrain);
	// 	fourthRowTd.eq(3).text(response.frequency);

	// var fifthRowTd = $('#schedule').children().eq(1).children('tr').eq(4).children('td');
	// 	fifthRowTd.eq(0).text(response.trainName);
	// 	fifthRowTd.eq(1).text(response.destination);
	// 	fifthRowTd.eq(2).text(response.firstTrain);
	// 	fifthRowTd.eq(3).text(response.frequency);


	// var sixthRowTd = $('#schedule').children().eq(1).children('tr').eq(5).children('td');
	// 	sixthRowTd.eq(0).text(response.trainName);
	// 	sixthRowTd.eq(1).text(response.destination);
	// 	sixthRowTd.eq(2).text(response.firstTrain);
	// 	sixthRowTd.eq(3).text(response.frequency);


	// var seventhRowTd = $('#schedule').children().eq(1).children('tr').eq(6).children('td');
	// 	seventhRowTd.eq(0).text(response.trainName);
	// 	seventhRowTd.eq(1).text(response.destination);
	// 	seventhRowTd.eq(2).text(response.firstTrain);
	// 	seventhRowTd.eq(3).text(response.frequency);


	
// $("displayedData").html(snapshot.val().trainName + " | " + snapshot.val().destination); 
// Handle the errors
}, function(errorObject){
	console.log("Errors handled: " + errorObject.code)
});

// dataRef.orderByChild("dateAdded").limitToLast(1).on("child_added", function(snapshot){
// 	// Change the HTML to reflect
// 	$("#trainNamedisplay").html(snapshot.val().name);
// 	$("#destinationdisplay").html(snapshot.val().email);
// 	$("#firstTraindisplay").html(snapshot.val().age);
// 	$("#frequencydisplay").html(snapshot.val().comment);
// })
