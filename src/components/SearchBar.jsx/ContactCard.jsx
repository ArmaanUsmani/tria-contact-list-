import React from 'react'

function initials(name){
return name.split(' ').slice(0,2).map(s=>s[0]).join('').toUpperCase()
}

export default function ContactCard({ contact }){
return (
<div className="contact-card">
<div className="contact-left">
<div className="avatar" aria-hidden>{initials(contact.name)}</div>
<div className="contact-meta">
<div className="contact-name">{contact.name}</div>
<div className="contact-phone">{contact.phone} {contact.email? '• ' + contact.email : ''}</div>
</div>
</div>
<div>
<button className="button-ghost" title="Call">Call</button>
</div>
</div>
)
}