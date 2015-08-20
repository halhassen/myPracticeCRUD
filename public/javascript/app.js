var playerDatabase = [];
var counter = 0;

var player = function(name, jerseyNumber, draftYear, photo) {
	this._id = counter++;
	this.name = document.getElementById("name").value;
	this.jerseyNumber = document.getElementById("jerseyNumber").value;
	this.draftYear = document.getElementById("draftYear").value;
	this.photo = document.getElementById("photo").value;
}

//Create

var create = function() {
	var newPlayer = new player();
	playerDatabase.push(newPlayer);
	document.getElementById("playerProfiles").innerHTML = "";
	read();
}

//Read

var read = function() {
	document.getElementById("playerProfiles").innerHTML = "";
	for(var i = 0; i < playerDatabase.length; i +=1) {
		document.getElementById("playerProfiles").innerHTML = 
		"<li class='panel panel-default col-sm-4'><ul class='panel-body'><li>" + playerDatabase[i].name + "</li><li>" +
		playerDatabase[i].jerseyNumber + "</li><li>" + 
		playerDatabase[i].draftYear + "</li><li><img src='" + 
		playerDatabase[i].photo + "'/></li></ul><div class='panel-footer'><button class='btn btn-warning' onclick='startUpdate(" + playerDatabase[i]._id + ")'><span class='glyphicon glyphicon-pencil'></span> Edit" + 
		"</button><button class='btn btn-danger' onclick='deletePlayer(" + playerDatabase[i]._id + ")'><span class='glyphicon glyphicon-trash'></span> Delete" + "</button></div></li>"
	}
}

//Update

var startUpdate = function(id) {
	for(var  i = 0; i < playerDatabase.length; i += 1) {
		if(playerDatabase[i]._id === id) {
			document.getElementById("updateForm").innerHTML = 
			"<h3 class='page-header text-center'>Update Player</h3>" + "<div class='form-group'>" +
			"<input class='form-control' id='editName' value='" + playerDatabase[i].name + "'/></div><div class='form-group'>" + 
			"<input class='form-control' id='editJerseyNumber' value='" + playerDatabase[i].jerseyNumber + "'/>" + "</div>" + "<div class='form-group'>" +
			"<input class='form-control' id='editDraftYear' value='" + playerDatabase[i].draftYear + "'/>" + "</div>" + "<div class='form-group'>" + 
			"<input class='form-control' id='editPhoto' value='" + playerDatabase[i].photo + "'/>" + "</div>" + "<div class='form-group'>" + 
			"<button class='btn btn-success btn-block' onclick='finishUpdate(" + playerDatabase[i]._id + ")'>" + "<span class='glyphicon glyphicon-arrow-right'></span> Submit Update" + "</button></div>";
		}
	}
}

var finishUpdate = function(id) {
	for(var i = 0; i < playerDatabase.length; i += 1) {
		if(playerDatabase[i]._id === id){
			playerDatabase[i].name = document.getElementById("editName").value;
			playerDatabase[i].jerseyNumber = document.getElementById("editJerseyNumber").value;
			playerDatabase[i].draftYear = document.getElementById("editDraftYear").value;
			playerDatabase[i].photo = document.getElementById("editPhoto").value;
			document.getElementById("updateForm").innerHTML = "";
			read();
		} 
		else {
			console.log("Invalid!")
		}
	}
}

//Delete

var deletePlayer = function(id) {
	for(var i = 0; i < playerDatabase.length; i += 1) {
		if(playerDatabase[i]._id === id) {
			playerDatabase.splice(i, 1);
			read();
		}
	}
}