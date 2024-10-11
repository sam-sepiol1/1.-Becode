import express from "express";
import bodyParser from "body-parser";
import fs from 'fs';

const data = JSON.parse(fs.readFileSync('./recipes.json', 'utf-8'));

const PORT = 3000;
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res)=>{ 
    res.json(data);
})

app.get('/random', (req, res)=>{ 
    const randomRecipe = Math.floor(Math.random()*data.length); 
    res.json(data[randomRecipe]);
})

app.get("/recipe/:id", (req, res)  => { 
    const id = parseInt(req.params.id);
    const recipe = data.find((recipe) => recipe.id === id); 
    res.json(recipe);
  });

app.get("/:name", (req, res) => {
    const name = req.params.name.toLowerCase();
    const recipe = data.find((recipe) => recipe.name.toLowerCase().replaceAll(" ", '') === name);

    if (recipe) {
        res.json(recipe);
    } else {
        res.status(404).send("Recipe not found");
    }
});


app.listen(PORT, () => console.log(`Server started: http://localhost:${PORT}/`));



