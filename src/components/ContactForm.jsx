import { useState } from 'react'

const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function ContactForm({ compact = false }) {
  const [form, setForm] = useState({ name: '', email: '', message: '', location: 'Noida, India' })
  const [status, setStatus] = useState({ loading: false, success: null, error: null })

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus({ loading: true, success: null, error: null })
    try {
      const res = await fetch(`${backend}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error((await res.json()).detail || 'Failed to submit')
      setStatus({ loading: false, success: 'Message sent! We will get back shortly.', error: null })
      setForm({ name: '', email: '', message: '', location: 'Noida, India' })
    } catch (err) {
      setStatus({ loading: false, success: null, error: err.message || 'Something went wrong' })
    }
  }

  return (
    <form onSubmit={onSubmit} className="mt-8 grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <input name="name" value={form.name} onChange={onChange} className="rounded-xl bg-white/10 px-4 py-3 text-white placeholder-white/50 outline-none border border-white/10 focus:border-[#D4F321]/60" placeholder="Your name" required />
        <input name="email" value={form.email} onChange={onChange} type="email" className="rounded-xl bg-white/10 px-4 py-3 text-white placeholder-white/50 outline-none border border-white/10 focus:border-[#D4F321]/60" placeholder="Email" required />
      </div>
      <input name="location" value={form.location} onChange={onChange} className="rounded-xl bg-white/10 px-4 py-3 text-white placeholder-white/50 outline-none border border-white/10 focus:border-[#D4F321]/60" placeholder="Location (e.g., Noida, India)" />
      <textarea name="message" value={form.message} onChange={onChange} rows={compact ? 3 : 5} className="rounded-xl bg-white/10 px-4 py-3 text-white placeholder-white/50 outline-none border border-white/10 focus:border-[#D4F321]/60" placeholder="Project details" required />
      <button disabled={status.loading} className="mt-2 rounded-full bg-[#D4F321] px-6 py-3 text-[#001024] font-semibold disabled:opacity-60">
        {status.loading ? 'Sending...' : 'Send'}
      </button>
      {status.success && <p className="text-emerald-400/90">{status.success}</p>}
      {status.error && <p className="text-red-400/90">{status.error}</p>}
    </form>
  )
}
