import React from 'react'

export default function SearchBar({ query, setQuery }) {
return (
<div className="search-row">
<input
type="text"
placeholder="Search contacts by name..."
value={query}
onChange={e => setQuery(e.target.value)}
aria-label="Search contacts"
/>
</div>
)
}