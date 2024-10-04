const express = require('express');
const app = express();

app.use(express.json());

const users = [
  { id: 21, name: "Captain Piett", hobbies: ["singing", "walking", "guitar"], years: 2, team: "clscwe", faction: "Rebels" },
  { id: 27, name: "General Veers", hobbies: ["swimming", "guitar"], years: 12, team: "axvedw", faction: "Empire" },
  { id: 32, name: "Admiral Ozzel", hobbies: ["walking", "swimming", "guitar"], years: 7, team: "axvedw", faction: "Rebels" },
  { id: 41, name: "Commander Jerjerrod", hobbies: ["swimming", "singing"], years: 3, team: "clscwe", faction: "Empire" },
  { id: 10, name: "Poe Dameron", hobbies: ["walking", "singing"], years: 14, team: "clscwe", faction: "Empire" },
  { id: 2, name: "Temmin 'Snap' Wexley", hobbies: ["swimming", "drums"], years: 30, team: "axvedw", faction: "Rebels" },
  { id: 44, name: "Tallissan Lintra", hobbies: ["walking", "walking"], years: 16, team: "clscwe", faction: "Empire" },
  { id: 99, name: "Ello Asty", hobbies: ["guitar", "singing"], years: 2, team: "axvedw", faction: "Empire" },
  { id: 3, name: "Wedge Antilles", hobbies: ["guitar", "walking"], years: 22, team: "clscwe", faction: "Rebels" },
  { id: 8, name: "Ciena Ree", hobbies: ["guitar", "singing"], years: 15, team: "clscwe", faction: "Empire" },
  { id: 40, name: "Iden Versio", hobbies: ["drums", "walking"], years: 37, team: "clscwe", faction: "Rebels" },
  { id: 66, name: "Thane Kyrell", hobbies: ["drums", "singing"], years: 10, team: "axvedw", faction: "Rebels" }
];

app.get('/users/hobby', (req, res) => {
  const { hobby } = req.query;
  const usersWithHobby = users.filter(user => user.hobbies.includes(hobby));
  res.json(usersWithHobby);
});

app.get('/users/exists', (req, res) => {
  const { id } = req.query;
  const userExists = users.some(user => user.id == id);
  res.json({ exists: userExists });
});

app.get('/users/team-experience', (req, res) => {
  const { team } = req.query;
  const totalExperience = users
    .filter(user => user.team === team)
    .reduce((acc, user) => acc + user.years, 0);
  res.json({ totalExperience });
});

app.get('/users/by-faction', (req, res) => {
  const { faction } = req.query;
  const usersByFaction = users.filter(user => user.faction === faction);
  res.json(usersByFaction);
});

app.post('/users', (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.status(201).json({ message: 'User added', user: newUser });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
