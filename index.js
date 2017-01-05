var fs = require('fs');

fs.readFile('./students.txt', 'utf8', function(err, data) {
  if (err) throw err;
  console.log(data);
  var names = data.split('\n'); // turn string into array
  names.pop() // remove empty ''
  var randomIndex = Math.floor(Math.random()*names.length);
  var name = names[randomIndex];
  console.log(name);
});

// console.log(data)


// Read in the data from students.txt and return groups of two.
// If there's an odd number create a group of 3.

fs.readFile('./students.txt', 'utf8', function(err, data){
  if (err) throw err;
  var names = data.split('\n'); // turn string into array
  names.pop()
  var groups = [];
  while (names.length){
    var group = names.splice(0, 2);
    groups.push(group);
  }
  var lastGroup = groups.pop();
  if(lastGroup.length !== 2){
    groups[groups.length-1].push(lastGroup[0])
  }
  fs.writeFile('groups.txt', groups.join('\n'), function(err){
    if (err) throw err;
    console.log('saved the file of groups');
  });
  console.log(groups);
});


fs.writeFile('example', 'this is an example', function(err, data){
  if (err) throw err;
  console.log('saved');
});


// Read in the data from students.txt and create a Weekly Check-in file.

// Instructors should meet with 4 students a day.
// Display each day of the week followed by 4 students names.

// Save the file as checkins.md

fs.readFile('./students.txt', 'utf8', function(err, data){
  if(err) throw err;

  var names = data.split('\n');
  names.pop();

  var days = [
  '----MONDAY----',
  '\n----TUESDAY----',
  '\n----WEDNESDAY----',
  '\n----THURSDAY----',
  '\n----FRIDAY----'];
  var groups = [];

  while(names.length){
    for(var i = 0; i<days.length; i++){
      var quad = names.splice(0,4).join('\n');
      groups.push(days[i], quad);
    }
  };
  // if(groups[groups.length-1][1].length < 3){
  //   var stragglers = groups[groups.length-1].pop();
  //   groups[groups.lenth-2].push(stragglers);
  // }

  // console.log(groups);
  fs.writeFile('checkins.md', groups.join('\n'), function(err){
    if (err) throw err;
    console.log('saved the file of groups');
  });
})



