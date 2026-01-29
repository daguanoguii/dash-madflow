

const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const app = express();
app.use(cors());
app.use(express.json());

const users = []; // "banco" fake

// REGISTRO
app.post("/register", async (req, res) => {
  const { email, password } = req.body;

  const userExists = users.find(u => u.email === email);
  if (userExists) return res.status(400).send("Usuário já existe");

  const hash = await bcrypt.hash(password, 8);
  users.push({ email, password: hash });

  res.send("Usuário criado");
});

// LOGIN
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = users.find(u => u.email === email);
  if (!user) return res.status(401).send("Credenciais inválidas");

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(401).send("Credenciais inválidas");

  const token = jwt.sign({ email }, "segredo", { expiresIn: "1d" });
  res.json({ token });
});

app.listen(3000, () => console.log("Servidor rodando na porta 5173"));