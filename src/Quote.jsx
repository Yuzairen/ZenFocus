import React, { useEffect, useState } from 'react';

function Quote() {
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    fetch('https://zenquotes.io/api/random')
      .then((res) => res.json())
      .then((data) => setQuote(data[0]))
      .catch(() => setQuote({ q: "Stay calm, stay focused.", a: "ZenFocus" }));
  }, []);

  return (
    <div className="quote-box">
      <h2>🧠 Zen Quote of the Day</h2>
      {quote ? (
        <blockquote>
          “{quote.q}”
          <footer>— {quote.a}</footer>
        </blockquote>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Quote;
