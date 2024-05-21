import React, { useState } from "react";
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
import { FaRegCopy } from "react-icons/fa";

const App = () => {
	const [password, setPassword] = useState("");
	const [passwordLength, setPasswordLength] = useState(26);
	const [includeUpperCase, setIncludeUpperCase] = useState(false);
	const [includeLowerCase, setIncludeLowerCase] = useState(false);
	const [includeNumbers, setIncludeNumbers] = useState(false);
	const [includeSymbols, setIncludeSymbols] = useState(false);
	const handleGeneratePassword = () => {
		if (
			!includeUpperCase &&
			!includeLowerCase &&
			!includeNumbers &&
			!includeSymbols
		) {
			notify("To generate password you must select atleast one checkbox", true);
		} else {
			let characterList = "";
			if (includeNumbers) {
				characterList = characterList + numbers;
			}
			if (includeUpperCase) {
				characterList = characterList + upperCaseLetters;
			}
			if (includeLowerCase) {
				characterList = characterList + lowerCaseLetters;
			}
			if (includeSymbols) {
				characterList = characterList + specialCharacters;
			}
			setPassword(createPassword(characterList));
			notify("Password is generated successfully", false);
		}
	};
	const createPassword = (characterList) => {
		let password = "";
		const characterListLength = characterList.length;
		for (let i = 0; i < passwordLength; i++) {
			const characterIndex = Math.round(Math.random() * characterListLength);
			password = password + characterList.charAt(characterIndex);
		}
		return password;
	};
	const copyToClipboard = (password) => {
		navigator.clipboard.writeText(password);
	};
	const notify = (message, hasError = false) => {
		if (hasError) {
			toast.error(message, {
				position: "top-center",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
		} else {
			toast(message, {
				position: "top-center",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
		}
	};
	const handleCopyPassword = (e) => {
		if (password === "") {
			notify(COPY_Fail, true);
		} else {
			copyToClipboard(password);
			notify(COPY_SUCCESS);
		}
	};

	return (
		<div className="App">
			<div className="container">
				<div className="generator">
					<h1 className="generator__header">Password Generator</h1>
					<div className="generator__password">
						<h2 className="password">{password}</h2>
						<button className="copy__btn">
							<FaRegCopy onClick={handleCopyPassword} />
						</button>
					</div>
					<div className="form-group">
						<label htmlFor="password-strength">
							<h3>Password length</h3>
						</label>
						<input
							className="pw"
							defaultValue={passwordLength}
							onChange={(e) => setPasswordLength(e.target.value)}
							type="range"
							id="password-stregth"
							name="password-strength"
							max="26"
							min="8"
							step="1"
						/>
						<span className="pw__value">{passwordLength}</span>
					</div>
					<div className="form-group">
						<label htmlFor="uppercase-letters">
							<h3>Add Uppercase Letters</h3>
						</label>
						<label class="switch">
							<input
								type="checkbox"
								checked={includeUpperCase}
								onChange={(e) => setIncludeUpperCase(e.target.checked)}
								name="uppercase-letters"
							/>
							<span class="slider round"></span>
						</label>
					</div>
					<div className="form-group">
						<label htmlFor="lowercase-letters">
							<h3>Add Lowercase Letters</h3>
						</label>

						<label class="switch">
							<input
								type="checkbox"
								checked={includeLowerCase}
								onChange={(e) => setIncludeLowerCase(e.target.checked)}
								name="uppercase-letters"
							/>
							<span class="slider round"></span>
						</label>
					</div>
					<div className="form-group">
						<label htmlFor="include-numbers">
							<h3>Include Numbers</h3>
						</label>
						<label class="switch">
							<input
								type="checkbox"
								checked={includeNumbers}
								onChange={(e) => setIncludeNumbers(e.target.checked)}
								name="uppercase-letters"
							/>
							<span class="slider round"></span>
						</label>
					</div>
					<div className="form-group">
						<label htmlFor="include-symbols">
							<h3>Include Symbols</h3>
						</label>
						<label class="switch">
							<input
								type="checkbox"
								checked={includeSymbols}
								onChange={(e) => setIncludeSymbols(e.target.checked)}
								name="uppercase-letters"
							/>
							<span class="slider round"></span>
						</label>
					</div>
					<div className="btn_conatiner">
						<button
							onClick={handleGeneratePassword}
							className="btn"
							alt="Generate Password"
						>
							<i>G</i>
							<i>e</i>
							<i>n</i>
							<i>e</i>
							<i>r</i>
							<i>a</i>
							<i>t</i>
							<i>e</i>
							<i>&nbsp;</i>
							<i>P</i>
							<i>a</i>
							<i>s</i>
							<i>s</i>
							<i>w</i>
							<i>o</i>
							<i>r</i>
							<i>d</i>
						</button>
					</div>
					<ToastContainer
						position="top-center"
						autoClose={5000}
						hideProgressBar={false}
						newestOnTop={false}
						closeOnClick
						rtl={false}
						pauseOnFocusLoss
						draggable
						pauseOnHover
					/>
				</div>
			</div>
		</div>
	);
};

export default App;
