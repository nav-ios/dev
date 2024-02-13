import express from "express";
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import registerDownload from "./download.js";
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use('/public', express.static('public'))
const port = 3000;

// app.use(express.static("public"));
// app.use(bodyParser.urlencoded({ extended: true }));

// Step 1: Make sure that when a user visits the home page,
//   it shows a random activity.You will need to check the format of the
//   JSON data from response.data and edit the index.ejs file accordingly.
app.get("/", async (req, res) => {
    console.log(__dirname + "/public")
    res.render('homepage',{title: "Navdeep Rana- Full Stack Web & Native iOS App Developer"})

  
});
app.get("/resume", async (req, res) => {
    await registerDownload()
    res.redirect("/resume.pdf")

  
});


app.post("/", async (req, res) => {
  console.log(req.body);

  // Step 2: Play around with the drop downs and see what gets logged.
  // Use axios to make an API request to the /filter endpoint. Making
  // sure you're passing both the type and participants queries.
  // Render the index.ejs file with a single *random* activity that comes back
  // from the API request.
  // Step 3: If you get a 404 error (resource not found) from the API request.
  // Pass an error to the index.ejs to tell the user:
  // "No activities that match your criteria."
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
