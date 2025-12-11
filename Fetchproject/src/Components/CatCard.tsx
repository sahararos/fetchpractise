import { useState, useEffect } from "react";


function CatCard() {
    const [fact, setFact] = useState<string>("");
    const [catImage, setCatImage] = useState<string>("https://cataas.com/cat/says/hi?random=kalli");


  function getData() {
    // Fetch ONE cat fact
    fetch("https://meowfacts.herokuapp.com/?count=1")
      .then(res => res.json())
      .then(data => {
        setFact(data.data[0]);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  const getNextCat = () => {
    // Set cat image URL
    setCatImage(
      "https://cataas.com/cat/says/hi?random=" + Date.now()
    );
    getData();
  }
    

  return (
    <div 
        className="w-[75%] flex items-center justify-center flex-col">
      <h1 className="text-4xl pb-10">Cat Facts</h1>

      <button 
        className="border px-4 py-2 bg-black text-white rounded hover:bg-yellow-500 hover:text-black transition"
        onClick={getNextCat}>
        Click me
      </button>

      <div className="pt-10 justify-center items-center flex flex-col">
        {catImage && (
          <img
            src={catImage}
            alt="Random cat"
            style={{ maxWidth: "300px", display: "block", marginBottom: "1rem" }}
          />
        )}

        <p className="text-justify w-96 pt-4">
            {fact}
        </p>
      </div>
    </div>
  );
}

export default CatCard;
