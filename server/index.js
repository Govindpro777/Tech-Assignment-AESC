import express from 'express';
import cors from 'cors';

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

const candidates = [
  { id: 1, name: "Govind Prajapati", skills: ["DSA", "C++", "MERN","React", "TypeScript", "Node.js"], yearsOfExperience: 5 },
  { id: 2, name: "Harsh Prajapati", skills: ["Python", "Django", "AWS"], yearsOfExperience: 3 },
  { id: 3, name: "Abhiraj shengar", skills: ["JavaScript", "Vue.js", "MongoDB"], yearsOfExperience: 4 },
  { id: 4, name: "Ayush Srivastav", skills: ["Java", "Spring Boot", "PostgreSQL"], yearsOfExperience: 6 },
  { id: 5, name: "Rituraj Gupta", skills: ["Angular", "C#", ".NET"], yearsOfExperience: 7 },
  { id: 6, name: "Prince Kumar", skills: ["Ruby", "Rails", "MySQL"], yearsOfExperience: 2 },
  { id: 7, name: "Sajal Tikariya", skills: ["Go", "Docker", "Kubernetes"], yearsOfExperience: 4 },
  { id: 8, name: "Adarsh Bajpai", skills: ["Swift", "iOS", "Firebase"], yearsOfExperience: 3 },
  { id: 9, name: "Sourav Prajapati", skills: ["C++", "Linux", "OpenCV"], yearsOfExperience: 5 },
  { id: 10, name: "Ashika pandey", skills: ["PHP", "Laravel", "MySQL"], yearsOfExperience: 6 }
];
app.get('/', (req, res) => {
  res.json({ message: 'Server is running' });
});

app.get('/api/candidates', (req, res) => {
  res.json(candidates);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
