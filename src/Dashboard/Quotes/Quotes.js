import React, {useState, useEffect} from 'react';
import QuoteText from "../Components/QuoteText";
import QuoteAuthor from "../Components/QuoteAuthor";
import Buttons from "../Components/Buttons";
import axios from "axios";
import "./Quotes.css";

function Quotes() {
    const [quote, setQuote] = useState("The Best Richness, is the Richness of Soul");
    const [author, setAuthor] = useState("Prophet Muhmmad(Peace be upon him)");
    const [quoteData, setQuoteData] = useState([]);
    const [color, setColor] = useState("rgb(243, 156, 18");
    
    useEffect(() => {
        if(quoteData.length > 0) {
            return;
        } else {
            fetchQuotes();
        }
    });

    // Random Color Generate. Return Different Color Value.
    const randomColor = () => {
        let colorPatterns = "1234567890ABCDEF";
        let color="#";
        for(let i = 0; i < 6; i++) {
            color += colorPatterns[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    const fetchQuotes = () => {
        axios.get("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json").then((res) => {
        console.log(res);    
        const quotesData = [...res.data.quotes];
            console.log(quotesData);
            setQuoteData(quotesData);
            // const color = randomColor();
            // document.body.style.color = color;
            // document.body.style.backgroundColor = color;
            // setColor(color);
        }).catch((error) => {
            console.log(error);
        });
    }

    const handleClick = () => {
        let randomIndex = Math.floor(Math.random() * 16);
        let {quote, author} = quoteData[randomIndex];
        const color = randomColor();
        document.body.style.color = color;
        document.body.style.backgroundColor = color;
        setColor(color);
        setQuote(quote);
        setAuthor(author);
    }
    return (
        <div id="quote-box">
            <QuoteText quote={quote} color={color} />
            <QuoteAuthor author={author} color={color} />
            <Buttons onHandleClick={handleClick} color={color} />
        </div>
    );
}
export default Quotes;
