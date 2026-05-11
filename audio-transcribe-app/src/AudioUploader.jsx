import { useState } from "react";
import axios from "axios";

const AudioUploader = () => {
  const [file, setFile] = useState(null);
  const [transcription, setTranscription] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(
        "{Your Backend API Endpoint Here}",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );
      setTranscription(response.data.transcription);
    } catch (error) {
      console.error("Error transcribing audio:", error);
    }
  };

  return (
    <div className="container">
      <h1>🎙️ AUDIO TO TEXT TRANSCRIBER 🎙️</h1>
      <div className="file-input">
        <input
          type="file"
          accept="audio/*"
          onChange={handleFileChange}
          placeholder="Drop your audio here!"
        />
      </div>
      <button className="upload-button" onClick={handleUpload} disabled={!file}>
        ✨ UPLOAD & TRANSCRIBE ✨
      </button>
      <div className="transcription-result">
        <h2>✓ TRANSCRIPTION RESULT</h2>
        <p>{transcription || "Your transcribed text will appear here..."}</p>
      </div>
    </div>
  );
};

export default AudioUploader;
