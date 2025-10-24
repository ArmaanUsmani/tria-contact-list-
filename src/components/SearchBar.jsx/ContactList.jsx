import React from 'react'
import ContactCard from './ContactCard'

export default function ContactList({ contacts }) {
if (!contacts || contacts.length === 0) {
return <div className="empty">No contacts found</div>
}

return (
<div className="contact-list">
{contacts.map(c => (
<ContactCard key={c.id} contact={c} />
))}
</div>
)
}