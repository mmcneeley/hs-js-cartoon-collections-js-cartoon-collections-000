function dwarfRollCall(dwarves) {
  var string = "";
	for (var i = 0; i < dwarves.length; i++) {
		string = string + `${i + 1}. ${dwarves[i]} `;
	}
	return string;
}

function summonCaptainPlanet(planeteerCalls){
  for (var i = 0; i < planeteerCalls.length; i++) {
		planeteerCalls[i] = planeteerCalls[i].toUpperCase() + "!";
	}
	return planeteerCalls;
}

function longPlaneteerCalls(words) {
  for (var i = 0; i < words.length; i++) {
		if (words[i].length > 4) {
			return true;
		}
	}
	return false;
}

function findTheCheese (foods) {
  var cheese = ["cheddar", "gouda", "camembert"];
  for (var i = 0; i < foods.length; i++) {
    if (cheese.indexOf(foods[i]) != -1) {
      return cheese[cheese.indexOf(foods[i])];
    }
  }
  return "no cheese!";
}
