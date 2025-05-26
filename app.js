const express = require("express");
const { connectToMongoDB } = require("./connect");
const urlRoute = require("./routes/Url");
const URL = require("./models/Url");
const path = require("path")
const staticRoute = require("./routes/staticRoutes")

const app = express();
const port = 8001;

// Connect to MongoDB
connectToMongoDB("mongodb://localhost:27017/short-url").then(() => {
  console.log("MongoDB connected");
});

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));


//Server-side-rendering  => it display on ui
// ejs =>Embedded JavaScript templating.

app.set("view engine","ejs");
app.set("views", path.resolve("./view"));



// Routes
app.use("/url", urlRoute);
app.use("/" , staticRoute);



// Redirect handler for shortId
app.get("/:shortId", async (req, res) => {
  const shortId = req.params.shortId;

  const entry = await URL.findOneAndUpdate(
    { shortId },
    {
      $push: {
        visitHistory: {  // Ensure it's the correct field name
          timestamp: Date.now(),
        },
      },
    },
    { new: true } // return updated document
  );

  if (!entry) {
    return res.status(404).json({ error: "Short URL not found" });
  }


  // Log the updated entry to ensure visitHistory is updated
  console.log("Updated Entry:", entry);

  res.redirect(entry.redirectURL);
});


app.listen(port, () => console.log(`Server started at ${port}`));
