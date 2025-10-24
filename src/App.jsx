import React, { useState, useMemo, useEffect } from "react";
import { contacts as initialContacts } from "./data/contacts.js/contacts";
import SearchBar from "./components/SearchBar.jsx/SearchBar";
import ContactList from "./components/SearchBar.jsx/ContactList";
import AddContactForm from "./components/SearchBar.jsx/AddContactForm";
import "./App.css";

export default function App() {
  const [query, setQuery] = useState("");
  const [contacts, setContacts] = useState(initialContacts);
  const [theme, setTheme] = useState("light");

  // 🔍 Filtered list memoized
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return contacts;
    return contacts.filter((c) => c.name.toLowerCase().includes(q));
  }, [contacts, query]);

  // ➕ Add new contact
  const handleAdd = (newContact) => {
    setContacts((prev) => [...prev, newContact]);
  };

  // 🌗 Save theme in localStorage so it persists
  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  // 🌗 Load previously saved theme (on first render)
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) setTheme(savedTheme);
  }, []);

  return (
    <div className={`app-root ${theme}`}>
      <header className="app-header">
        <h1>Contact List</h1>
        <button
          className="theme-toggle"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </button>
      </header>

      <main className="app-main">
        <SearchBar query={query} setQuery={setQuery} />
        <AddContactForm onAdd={handleAdd} />
        <ContactList contacts={filtered} />
        <div className="hint">Total: {contacts.length} contacts</div>
      </main>

      <footer className="app-footer">
        <small>Built for Tria assignment</small>
      </footer>
    </div>
  );
}
