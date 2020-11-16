const arrOfPeople = [
  {
  id: 2,
  name: "Sarge",
  age: 55,
  skillSet: "Shotgun, Magnum",
  placeBorn: "Omaha, Nebraska",
  yearsExperience: 20
  },
  {
  id: 3,
  name: "Richard Simmons",
  age: 35,
  skillSet: "Rocket Launcher",
  placeBorn: "Louisville, Kentucky",
  yearsExperience: 7
  },
  {
  id: 4,
  name: "Dexter Grif",
  age: 20,
  skillSet: "Brute Shot",
  placeBorn: "Pawnee, Texas",
  yearsExperience: 10
  },
  {
  id: 5,
  name: "Michael J. Caboose",
  age: 28,
  skillSet: "Assault Rifle",
  placeBorn: "New York, New York",
  yearsExperience: 3
  },
  {
  id: 6,
  name: "Tex",
  age: 20,
  skillSet: "Battle Rifle",
  placeBorn: "Perth, Australia",
  yearsExperience: 6
  },
  {
  id: 7,
  name: "Leonard L. Church",
  age: 17,
  skillSet: "Sniper Rifle",
  placeBorn: "Los Angeles, California",
  yearsExperience: 9
  },
  {
  id: 8,
  name: "Junior",
  age: 32,
  skillSet: "Plasma Rifle",
  placeBorn: "New Orleans, Louisiana",
  yearsExperience: 2
  },
]

const listOfPlayers = []
const blueTeam = []
const redTeam = []

class Player {
  constructor(id, name, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience){
      this.id = id;
      this.name = name;
      this.canThrowBall = canThrowBall;
      this.canDodgeBall = canDodgeBall;
      this.hasPaid = hasPaid;
      this.isHealthy = isHealthy;
      this.yearsExperience = yearsExperience;
  }
}
class BlueTeammate {
  constructor(id, name, teamColor, mascot){
      this.id = id;
      this.name = name;
      this.teamColor = teamColor;
      this.mascot = mascot;
  }
}
class RedTeammate {
  constructor(id, name, teamColor, mascot){
      this.id = id;
      this.name = name;
      this.teamColor = teamColor;
      this.mascot = mascot;
  }}

people
const listPeopleChoices = () => {
  const listElement = document.getElementById('people')
  document.getElementById('header').style.display = 'block'
  arrOfPeople.map(person => {
      const li = document.createElement("li")
      const button = document.createElement("button")
      button.innerHTML = "Pick Character"
      button.style = "border-radius: 10px; color: #241821;"
      button.addEventListener('click', () => {
          makePlayer(person.id)
          listElement.removeChild(li)
      })
      li.appendChild(button)
      li.appendChild(document.createTextNode(`${person.name} - Skills: ${person.skillSet}`))
      listElement.append(li)
  })
  const listPeopleButton = document.getElementById('listPeople');
  listPeopleButton.style.display = 'none';
}

const makePlayer = (id) => {
  let person = arrOfPeople.find(player => player.id === id)
  let indexOf = arrOfPeople.indexOf(person)
  const newPlayer = new Player(person.id, person.name, true, true, true, true, person.yearsExperience)
  const listElement = document.getElementById('players')
  const li = document.createElement("li")
  arrOfPeople.splice(indexOf,1)
  listOfPlayers.push(newPlayer)
  // creates a button and adds .style
  const blueButton = document.createElement("button")
  blueButton.innerHTML = "BLUE"
  blueButton.style = "background: blue; color: white; border-radius: 10px; border: none"
  blueButton.addEventListener('click', () => {
      makeBlueTeam(person.id)
      listElement.removeChild(li)
  })
  // creates a button and adds .style
  const redButton = document.createElement("button")
  redButton.innerHTML = "RED"
  redButton.style = "background: red; color: white; border-radius: 10px; border: none;"
  redButton.addEventListener('click', () => {
      makeRedTeam(person.id)
      listElement.removeChild(li)
  })
  li.appendChild(blueButton)
  li.appendChild(redButton)
  listElement.append(li)
  li.appendChild(document.createTextNode(`${person.name} - Years Experience: ${person.yearsExperience}`))
  hideEmpty();
  return `${person.name} - Years Experience: ${person.yearsExperience}`
}

const makeRedTeam = (id) => {
  let person = listOfPlayers.find(player => player.id === id)
  console.log(person)
  let indexOf = listOfPlayers.indexOf(person)
  listOfPlayers.splice(indexOf,1)
  const newRedTeammate = new RedTeammate(person.id, person.name, 'Red', 'Halo')
  redTeam.push(newRedTeammate)
  let redPerson = redTeam.find(player => player.id === id)
  const listElement = document.getElementById('red')
  const li = document.createElement("li")
  li.appendChild(document.createTextNode(`${redPerson.name} is a member of the ${redPerson.teamColor} ${redPerson.mascot} team`))
  listElement.append(li)
  hideEmpty();
  return`${redPerson.name} is a member of the ${redPerson.teamColor} ${redPerson.mascot} team`
}

const makeBlueTeam = (id) => {
  let person = listOfPlayers.find(player => player.id === id)
  let indexOf = listOfPlayers.indexOf(person)
  listOfPlayers.splice(indexOf,1)
  const newBlueTeammate = new BlueTeammate(person.id, person.name, 'Blue', 'Halo')
  blueTeam.push(newBlueTeammate)
  let bluePerson = blueTeam.find(player => player.id === id)
  const listElement = document.getElementById('blue')
  const li = document.createElement("li")
  li.appendChild(document.createTextNode(`${bluePerson.name} is a member of the ${bluePerson.teamColor} ${bluePerson.mascot} team`))
  listElement.append(li)
  hideEmpty();
  return `${bluePerson.name} is a member of the ${bluePerson.teamColor} ${bluePerson.mascot} team`
}

const hideEmpty = () => {
  const people = document.getElementById('header')
  const players = document.getElementById('dodgeball-players')
  const blue = document.getElementById('blue-team')
  const red = document.getElementById('red-team')
  
  if (listOfPlayers.length === 0){
      players.style.display = 'none'
  } 
  else {
      players.style.display = 'block'
  }
  if (blueTeam.length === 0){
      blue.style.display = 'none'
  } 
  else {
      blue.style.display = 'block'
  }
  if (redTeam.length === 0){
      red.style.display = 'none'
  } 
  else {
      red.style.display = 'block'
  }
  if (arrOfPeople.length === 0){
      people.style.display = 'none'
  } 
}

hideEmpty();
