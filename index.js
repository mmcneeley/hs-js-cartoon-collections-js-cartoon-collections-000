function dwarfRollCall(dwarves) {
  var string = "";
  var halfDwarf = dwarves.length / 2
	for (var i = halfDwarf; i < drawves.length ; i++) {
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
  var cheese = ["cheddar", "gouda", "camembert", "swiss"];
  for (var i = 0; i < foods.length; i++) {
    if (cheese.indexOf(foods[i]) != -1) {
      return cheese[cheese.indexOf(foods[i])];
    }
    // if i didn't want to use indexOf, I would add another for loop rotating through cheese array to see if foods[i] was === to any of the cheese[p]
  }
  return "no cheese!";
}

function wordsWithB (words) {
  var wordsB = [];
  for (var i = 0; i < words.length; i++) {
    if (words[i].startsWith("b") || words[i].startsWith("B")) {wordsB.push(words[i])}
  }
  return wordsB;
}
