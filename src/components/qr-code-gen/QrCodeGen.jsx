import React, { useState } from "react";
import QRCode from "react-qr-code";
import "./styles.css";

export default function QrCodeGen() {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  const HandleGenerateQrCode = (value) => {
    setQrCode(value);
    setInput("");
  };

  return (
    <div className="qr-code">
      <div >
        <h1>QrCodeGen</h1>
        <div>
          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            type="text"
            name="qr-code"
            placeholder="Enter your value here"
          />
          <button disabled={input && input.trim() !== "" ? false : true} onClick={() => HandleGenerateQrCode(input)}>Generate</button>
        </div>
      </div>
      <div>
        <QRCode value={qrCode} id="qr-code-value" size={400}  bgColor="black" fgColor="white"/>
      </div>
    </div>
  );
}
