import React, { useEffect, useState } from "react";
import "./styles.css";

export default function ScrollIndicator({ url }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [scrollProcentage, setScrollProcentage] = useState(0);

  async function fetchData(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(getUrl);
      const data = await response.json();

      if (data && data.products && data.products.length > 0) {
        setData(data.products);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setError(error);
    }
  }

  useEffect(() => {
    fetchData(url);
  }, [url]);

  const handleScrollProcentage = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    const howMutchScrolled =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.body.scrollHeight - document.documentElement.clientHeight;

    setScrollProcentage((howMutchScrolled / height) * 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollProcentage);

    return () => {
      window.removeEventListener("scroll", () => handleScrollProcentage);
    };
  });

  console.log(data, loading);

  if (error) {
    return <div>{error.message}</div>;
  }

  if (loading) {
      return <div>loading...</div>;
  }

  return (
    <div>
      <div className="top-container">
        <h1>ScrollIndicator</h1>
        <div className="scroll-progress-tracking-container">
          <div
            className="current-progress-bar"
            style={{ width: `${scrollProcentage}%` }}
          ></div>
        </div>
      </div>
      <div className="data-container">
        {data && data.length > 0
          ? data.map((item) => (
              <div key={item.id}>
                <p>{item.title}</p>
              </div>
            ))
          : null}
      </div>
    </div>
  );
}
