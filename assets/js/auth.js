// assets/js/auth.js

// Replace usernames/passwords with actual values you want
const ADMINS = [
  { username: "admin1", password: "pass1", label: "Admin 1" },
  { username: "admin2", password: "pass2", label: "Admin 2" },
  { username: "admin3", password: "pass3", label: "Admin 3" },
  { username: "admin4", password: "pass4", label: "Admin 4" }
];

const SESSION_KEY = "sewavault_session";

export function login(username, password) {
  const found = ADMINS.find(a => a.username === username && a.password === password);
  if (found) {
    const session = { username: found.username, label: found.label, loginAt: new Date().toISOString() };
    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
    return { ok: true, session };
  }
  return { ok: false, message: "Invalid credentials" };
}

export function logout() {
  localStorage.removeItem(SESSION_KEY);
  window.location.href = "index.html";
}

export function getSession() {
  try {
    const s = localStorage.getItem(SESSION_KEY);
    if (!s) return null;
    return JSON.parse(s);
  } catch (e) {
    return null;
  }
}

export function requireAuthOrRedirect() {
  const s = getSession();
  if (!s) {
    window.location.href = "index.html";
    return false;
  }
  return true;
}
