import { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Simple Formspree endpoint suggestion (user can replace)
    const endpoint = 'https://formspree.io/f/moqgvpkg';
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) setSent(true);
    } catch {
      // no-op
    }
  };

  return (
    <form onSubmit={handleSubmit} className="card p-6 space-y-4" data-aos="fade-up">
      <div>
        <label className="block text-sm mb-1">Name</label>
        <input
          required
          type="text"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full px-3 py-2 rounded-md bg-white/5 border border-white/10 focus:outline-none focus:shadow-glow"
        />
      </div>
      <div>
        <label className="block text-sm mb-1">Email</label>
        <input
          required
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full px-3 py-2 rounded-md bg-white/5 border border-white/10 focus:outline-none focus:shadow-glow"
        />
      </div>
      <div>
        <label className="block text-sm mb-1">Message</label>
        <textarea
          required
          rows="5"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full px-3 py-2 rounded-md bg-white/5 border border-white/10 focus:outline-none focus:shadow-glow"
        />
      </div>
      <button
        type="submit"
        className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-accent text-midnight font-semibold hover:opacity-90 transition-opacity"
      >
        {sent ? 'Sent ✓' : 'Send Message'}
      </button>
    </form>
  );
}


