export const quote = async () => {
  const api_url =
    "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";
  const response = await fetch(api_url);

  if (response.status !== 200) {
    console.log("Error");
    return ["Data unavailable", ""];
  } else {
    const data = await response.json();
    const currentQuote =
      data.quotes[Math.floor(Math.random() * data.quotes.length)];
    return (
      [currentQuote.quote, currentQuote.author] || ["Loading...", "Loading..."]
    );
  }
};
