function takeANumber(katzDeliLine, newPerson){
  katzDeliLine.push(newPerson);
  return "Welcome, " + newPerson + ". You are number " + katzDeliLine.length + " in line.";
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!";
  }
  else{
    var toReturn = "Currently serving " + katzDeliLine[0] + ".";
    katzDeliLine.shift();
    return toReturn;
  }
}

function currentLine(katzDeliLine){
  var toReturn = "The line is currently ";
  if (katzDeliLine.length === 0){
    return toReturn +  "empty.";
  }
  else{
    for (let i=0; i<katzDeliLine.length; i++){
      var list = ""
      list = list + (i+1) + ". " + katzDeliLine[i] + ", ";
    }
    return toReturn + list;
  }
}