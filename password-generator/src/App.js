import React, { useState, useEffect, useCallback } from "react";
import "./App.css";
import {
  numbers,
  upperCaseLetters,
  lowerCaseLetters,
  specialCharacters,
} from "./Character";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { COPY_Fail, COPY_SUCCESS } from "./message";
import { FaRegCopy, FaSyncAlt } from "react-icons/fa";
import Bubble from "./components/Bubble";
import Particle from "./components/Particles";

const App = () => {
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(20);
  const [includeUpperCase, setIncludeUpperCase] = useState(true);
  const [includeLowerCase, setIncludeLowerCase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [strength, setStrength] = useState({
    label: "Weak",
    color: "#ff4d4d",
    percent: 25,
  });

  const calculateStrength = useCallback((pwd) => {
    let score = 0;
    if (!pwd) return { label: "None", color: "#ddd", percent: 0 };

    if (pwd.length > 8) score += 1;
    if (pwd.length > 12) score += 1;
    if (/[A-Z]/.test(pwd)) score += 1;
    if (/[0-9]/.test(pwd)) score += 1;
    if (/[^A-Za-z0-9]/.test(pwd)) score += 1;

    if (score <= 2) return { label: "Weak", color: "#ff4d4d", percent: 25 };
    if (score === 3) return { label: "Medium", color: "#ffa500", percent: 50 };
    if (score === 4) return { label: "Strong", color: "#2ecc71", percent: 75 };
    return { label: "Very Strong", color: "#00ff88", percent: 100 };
  }, []);

  const createPassword = useCallback((characterList, length) => {
    let generatedPassword = "";
    const characterListLength = characterList.length;
    for (let i = 0; i < length; i++) {
      const characterIndex = Math.floor(Math.random() * characterListLength);
      generatedPassword += characterList.charAt(characterIndex);
    }
    return generatedPassword;
  }, []);

  const handleGeneratePassword = useCallback(() => {
    if (
      !includeUpperCase &&
      !includeLowerCase &&
      !includeNumbers &&
      !includeSymbols
    ) {
      notify("Please select at least one option", true);
      return;
    }

    let characterList = "";
    if (includeNumbers) characterList += numbers;
    if (includeUpperCase) characterList += upperCaseLetters;
    if (includeLowerCase) characterList += lowerCaseLetters;
    if (includeSymbols) characterList += specialCharacters;

    const newPassword = createPassword(characterList, passwordLength);
    setPassword(newPassword);
    setStrength(calculateStrength(newPassword));
  }, [
    includeUpperCase,
    includeLowerCase,
    includeNumbers,
    includeSymbols,
    passwordLength,
    createPassword,
    calculateStrength,
  ]);

  // Auto-generate password on mount or settings change
  useEffect(() => {
    handleGeneratePassword();
  }, [handleGeneratePassword]);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  const notify = (message, hasError = false) => {
    const options = {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
    };
    hasError ? toast.error(message, options) : toast.success(message, options);
  };

  const handleCopyPassword = () => {
    if (password === "") {
      notify(COPY_Fail, true);
    } else {
      copyToClipboard(password);
      notify(COPY_SUCCESS);
    }
  };

  return (
    <div className="App">
      <Particle />
      <div className="main-layout">
        <Bubble />
        <div className="generator-card shadow-premium">
          <header className="header">
            <h1 className="title-gradient">Secure Keys</h1>
            <p className="subtitle">Instant, unbreakable password generation</p>
          </header>

          <div className="output-section">
            <div className="password-display">
              <span className="pwd-text">{password || "Click Generate"}</span>
              <div className="action-buttons">
                <button
                  className="icon-btn"
                  onClick={handleGeneratePassword}
                  title="Regenerate"
                >
                  <FaSyncAlt />
                </button>
                <button
                  className="icon-btn copy-main"
                  onClick={handleCopyPassword}
                  title="Copy to clipboard"
                >
                  <FaRegCopy />
                </button>
              </div>
            </div>

            <div className="strength-meter">
              <div className="strength-label">
                <span>
                  Strength: <strong>{strength.label}</strong>
                </span>
              </div>
              <div className="meter-bar-container">
                <div
                  className="meter-bar-fill"
                  style={{
                    width: `${strength.percent}%`,
                    backgroundColor: strength.color,
                    boxShadow: `0 0 10px ${strength.color}`,
                  }}
                ></div>
              </div>
            </div>
          </div>

          <div className="settings-section">
            <div className="setting-item range-item">
              <div className="label-row">
                <label>Password Length</label>
                <span className="value-badge">{passwordLength}</span>
              </div>
              <input
                type="range"
                min="8"
                max="50"
                value={passwordLength}
                onChange={(e) => setPasswordLength(parseInt(e.target.value))}
                className="premium-range"
              />
            </div>

            <div className="grid-settings">
              <div className="setting-item toggle-item">
                <label>Uppercase</label>
                <label className="premium-switch">
                  <input
                    type="checkbox"
                    checked={includeUpperCase}
                    onChange={(e) => setIncludeUpperCase(e.target.checked)}
                  />
                  <span className="premium-slider"></span>
                </label>
              </div>

              <div className="setting-item toggle-item">
                <label>Lowercase</label>
                <label className="premium-switch">
                  <input
                    type="checkbox"
                    checked={includeLowerCase}
                    onChange={(e) => setIncludeLowerCase(e.target.checked)}
                  />
                  <span className="premium-slider"></span>
                </label>
              </div>

              <div className="setting-item toggle-item">
                <label>Numbers</label>
                <label className="premium-switch">
                  <input
                    type="checkbox"
                    checked={includeNumbers}
                    onChange={(e) => setIncludeNumbers(e.target.checked)}
                  />
                  <span className="premium-slider"></span>
                </label>
              </div>

              <div className="setting-item toggle-item">
                <label>Symbols</label>
                <label className="premium-switch">
                  <input
                    type="checkbox"
                    checked={includeSymbols}
                    onChange={(e) => setIncludeSymbols(e.target.checked)}
                  />
                  <span className="premium-slider"></span>
                </label>
              </div>
            </div>
          </div>

          <button
            className="generate-btn-premium"
            onClick={handleGeneratePassword}
          >
            Generate Password
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default App;
