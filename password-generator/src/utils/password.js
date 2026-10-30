// Cryptographically secure password generation utilities.
//
// Passwords are generated entirely in your browser using the Web Crypto API
// (crypto.getRandomValues) with rejection sampling to remove modulo bias.
// Nothing is ever sent to a server.

export const CHAR_SETS = {
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  numbers: "0123456789",
  symbols: "!@#$%^&*()_+-=[]{}|;:,.<>?",
};

// Returns a uniformly-distributed random integer in the range [0, max).
// Uses the Web Crypto API and rejection sampling so that every value has an
// exactly equal probability (Math.random() cannot guarantee this, and is not
// cryptographically secure).
function secureRandomInt(max) {
  if (max <= 0) throw new Error("max must be greater than 0");
  const range = 4294967296; // 2^32 — number of possible Uint32 values
  const limit = range - (range % max);
  const array = new Uint32Array(1);
  let value;
  do {
    crypto.getRandomValues(array);
    value = array[0];
  } while (value >= limit);
  return value % max;
}

// Builds a secure password of `length` characters from the selected
// character sets. Guarantees at least one character from each selected set
// (when length allows), then shuffles so the guaranteed characters are not
// clustered at the start.
export function generatePassword(length, options) {
  const active = Object.keys(CHAR_SETS).filter((key) => options[key]);
  if (active.length === 0) return "";

  const pool = active.map((key) => CHAR_SETS[key]).join("");
  const chars = [];

  // Guarantee at least one character from each selected set.
  for (const key of active) {
    if (chars.length < length) {
      const set = CHAR_SETS[key];
      chars.push(set[secureRandomInt(set.length)]);
    }
  }

  // Fill the remaining length from the combined pool.
  while (chars.length < length) {
    chars.push(pool[secureRandomInt(pool.length)]);
  }

  // Fisher–Yates shuffle using the secure RNG.
  for (let i = chars.length - 1; i > 0; i--) {
    const j = secureRandomInt(i + 1);
    [chars[i], chars[j]] = [chars[j], chars[i]];
  }

  return chars.join("");
}

// Estimates password strength and returns a label, colour and percentage for
// the strength meter.
export function calculateStrength(pwd) {
  if (!pwd) return { label: "None", color: "#64748b", percent: 0 };

  let score = 0;
  if (pwd.length >= 8) score += 1;
  if (pwd.length >= 12) score += 1;
  if (pwd.length >= 16) score += 1;
  if (/[A-Z]/.test(pwd) && /[a-z]/.test(pwd)) score += 1;
  if (/[0-9]/.test(pwd)) score += 1;
  if (/[^A-Za-z0-9]/.test(pwd)) score += 1;

  if (score <= 2) return { label: "Weak", color: "#ff4d4d", percent: 25 };
  if (score === 3) return { label: "Fair", color: "#ffa500", percent: 50 };
  if (score <= 5) return { label: "Strong", color: "#2ecc71", percent: 75 };
  return { label: "Very Strong", color: "#00ff88", percent: 100 };
}
