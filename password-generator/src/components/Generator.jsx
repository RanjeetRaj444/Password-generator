import React, { useState, useEffect, useCallback } from "react";
import { toast } from "react-toastify";
import { FaRegCopy, FaSyncAlt } from "react-icons/fa";
import { COPY_Fail, COPY_SUCCESS } from "../message";
import { generatePassword, calculateStrength } from "../utils/password";

const Generator = () => {
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(20);
  const [includeUpperCase, setIncludeUpperCase] = useState(true);
  const [includeLowerCase, setIncludeLowerCase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [strength, setStrength] = useState(calculateStrength(""));

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

    const newPassword = generatePassword(passwordLength, {
      uppercase: includeUpperCase,
      lowercase: includeLowerCase,
      numbers: includeNumbers,
      symbols: includeSymbols,
    });

    setPassword(newPassword);
    setStrength(calculateStrength(newPassword));
  }, [
    includeUpperCase,
    includeLowerCase,
    includeNumbers,
    includeSymbols,
    passwordLength,
  ]);

  // Auto-generate on mount and whenever the settings change.
  useEffect(() => {
    handleGeneratePassword();
  }, [handleGeneratePassword]);

  const handleCopyPassword = async () => {
    if (password === "") {
      notify(COPY_Fail, true);
      return;
    }
    try {
      await navigator.clipboard.writeText(password);
      notify(COPY_SUCCESS);
    } catch {
      notify(COPY_Fail, true);
    }
  };

  return (
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
              aria-label="Regenerate password"
            >
              <FaSyncAlt />
            </button>
            <button
              className="icon-btn copy-main"
              onClick={handleCopyPassword}
              title="Copy to clipboard"
              aria-label="Copy password to clipboard"
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
            <label htmlFor="length-range">Password Length</label>
            <span className="value-badge">{passwordLength}</span>
          </div>
          <input
            id="length-range"
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
            <label htmlFor="toggle-upper">Uppercase</label>
            <label className="premium-switch">
              <input
                id="toggle-upper"
                type="checkbox"
                checked={includeUpperCase}
                onChange={(e) => setIncludeUpperCase(e.target.checked)}
              />
              <span className="premium-slider"></span>
            </label>
          </div>

          <div className="setting-item toggle-item">
            <label htmlFor="toggle-lower">Lowercase</label>
            <label className="premium-switch">
              <input
                id="toggle-lower"
                type="checkbox"
                checked={includeLowerCase}
                onChange={(e) => setIncludeLowerCase(e.target.checked)}
              />
              <span className="premium-slider"></span>
            </label>
          </div>

          <div className="setting-item toggle-item">
            <label htmlFor="toggle-numbers">Numbers</label>
            <label className="premium-switch">
              <input
                id="toggle-numbers"
                type="checkbox"
                checked={includeNumbers}
                onChange={(e) => setIncludeNumbers(e.target.checked)}
              />
              <span className="premium-slider"></span>
            </label>
          </div>

          <div className="setting-item toggle-item">
            <label htmlFor="toggle-symbols">Symbols</label>
            <label className="premium-switch">
              <input
                id="toggle-symbols"
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
  );
};

export default Generator;
