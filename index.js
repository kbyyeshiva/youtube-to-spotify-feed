// index.js
import express from "express";
import fetch from "node-fetch";

const app = express();

app.get("/", async (req, res) => {
  const url = "https://justpodcaster.com/rss/kerem-byavneh-parsha-podcast"; // replace with your JustPodcaster RSS URL
  const response = await fetch(url);
  let xml = await response.text();

  // replace the email
  xml = xml.replace(
    /<itunes:email>.*?<\/itunes:email>/,
    "<itunes:email>kby.yeshiva@gmail.com</itunes:email>"
  );

  res.set("Content-Type", "application/rss+xml");
  res.send(xml);
});

app.listen(3000, () => console.log("Feed proxy running"));
