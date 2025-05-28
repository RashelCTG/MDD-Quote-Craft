
import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import logo from "/logo.png";

const defaultQuotes = [
  { text: "Believe in yourself.", author: "Unknown" },
  { text: "Work hard and be kind.", author: "Anonymous" },
  { text: "Stay positive, work hard, make it happen.", author: "Unknown" },
];

export default function App() {
  const [quote, setQuote] = useState(defaultQuotes[0]);
  const [customQuote, setCustomQuote] = useState("");

  const generateQuote = () => {
    const random = defaultQuotes[Math.floor(Math.random() * defaultQuotes.length)];
    setQuote(random);
  };

  const share = (platform) => {
    const text = `"${quote.text}" — ${quote.author}`;
    const url = encodeURIComponent(`https://example.com`);
    const shareText = encodeURIComponent(text);
    let shareUrl = "";

    if (platform === "facebook") {
      shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
    } else if (platform === "twitter") {
      shareUrl = `https://twitter.com/intent/tweet?text=${shareText}`;
    } else if (platform === "linkedin") {
      shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
    }

    window.open(shareUrl, "_blank");
  };

  const handleCustomQuote = () => {
    if (customQuote.trim()) {
      setQuote({ text: customQuote.trim(), author: "You" });
      setCustomQuote("");
    }
  };

  return (
    <div className="card">
      <img src={logo} alt="MDD Quote Craft Logo" width="100" />
      <h2>MDD Quote Craft</h2>
      <p>"{quote.text}"</p>
      <strong>— {quote.author}</strong>
      <div>
        <button onClick={generateQuote}>New Quote</button>
      </div>
      <div style={{ marginTop: "1rem" }}>
        <input
          type="text"
          value={customQuote}
          placeholder="Write your own quote..."
          onChange={(e) => setCustomQuote(e.target.value)}
        />
        <button onClick={handleCustomQuote}>Add Quote</button>
      </div>
      <div style={{ marginTop: "1rem" }}>
        <FaFacebook onClick={() => share("facebook")} style={{ cursor: "pointer", margin: "0 10px" }} />
        <FaTwitter onClick={() => share("twitter")} style={{ cursor: "pointer", margin: "0 10px" }} />
        <FaLinkedin onClick={() => share("linkedin")} style={{ cursor: "pointer", margin: "0 10px" }} />
      </div>
      <footer>Developed By: S A Rashel | Madina Digital Developer</footer>
    </div>
);
}
