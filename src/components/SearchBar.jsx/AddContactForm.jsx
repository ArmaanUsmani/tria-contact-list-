import React, { useState } from 'react'

export default function AddContactForm({ onAdd }){
const [name, setName] = useState('')
const [phone, setPhone] = useState('')
const [email, setEmail] = useState('')

const handleSubmit = (e) =>{
e.preventDefault()
if (!name.trim() || !phone.trim()) return
const newContact = { id: Date.now(), name: name.trim(), phone: phone.trim(), email: email.trim() }
onAdd(newContact)
setName(''); setPhone(''); setEmail('')
}

return (
<form onSubmit={handleSubmit} aria-label="Add contact">
<div className="form-row">
<input value={name} onChange={e=>setName(e.target.value)} placeholder="Name" type="text" />
<input value={phone} onChange={e=>setPhone(e.target.value)} placeholder="Phone" type="tel" />
<input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email (optional)" type="text" />
<button type="submit">Add</button>
</div>
</form>
)
}