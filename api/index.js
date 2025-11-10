export default async function handler(req, res) {
  const url = "https://justpodcaster.com/rss/kerem-byavneh-parsha-podcast"; // your JustPodcaster RSS feed

  try {
    const response = await fetch(url);
    let xml = await response.text();

    // Replace the email
    xml = xml.replace(
      /<itunes:email>.*?<\/itunes:email>/,
      "<itunes:email>kby.yeshiva@gmail.com</itunes:email>"
    );

    res.setHeader("Content-Type", "application/rss+xml; charset=utf-8");
    res.status(200).send(xml);
  } catch (error) {
    res.status(500).send(`Error fetching RSS feed: ${error.message}`);
  }
}
