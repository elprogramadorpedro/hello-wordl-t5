import express from "express";

const app = express();
app.get("/", (req, res) => {
  res.send("Olá, T5!");
});


app.get("/tutores", (req, res) => {
  res.send("Olá, T5 tutores Pedro vini galdino guga!");
});

app.get("/tutoras", (req, res) => {
  res.send("Olá, T5 tutoras lessa adriana!");
});



const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
})