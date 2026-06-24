'use client';

import { FormEvent, useState } from 'react';

export default function LeadForm() {
  const [empresa, setEmpresa] = useState('Nexa IA Solutions');
  const [whatsapp, setWhatsApp] = useState('67 981765361');
  const [nome, setNome] = useState('Equipe Nexa IA');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  async function handleFormSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch('/api/webhook', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ empresa, whatsapp, nome }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Erro ao enviar lead');
      }

      setStatus('success');
      setMessage('Lead enviado com sucesso! Entraremos em contato em breve.');
      setEmpresa('');
      setWhatsApp('');
      setNome('');
    } catch (error: unknown) {
      setStatus('error');
      setMessage(error instanceof Error ? error.message : 'Não foi possível enviar o formulário.');
    }
  }

  return (
    <form onSubmit={handleFormSubmit} className="grid gap-5 sm:grid-cols-2">
      <div className="sm:col-span-2">
        <input
          type="text"
          value={empresa}
          onChange={(e) => setEmpresa(e.target.value)}
          placeholder="Nome da Empresa"
          className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-5 py-4 text-white outline-none transition focus:border-blue-500"
          required
        />
      </div>
      <input
        type="tel"
        value={whatsapp}
        onChange={(e) => setWhatsApp(e.target.value)}
        placeholder="WhatsApp"
        className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-5 py-4 text-white outline-none transition focus:border-blue-500"
        required
      />
      <input
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        placeholder="Seu nome"
        className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-5 py-4 text-white outline-none transition focus:border-blue-500"
        required
      />
      <button
        type="submit"
        className="sm:col-span-2 inline-flex justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-sky-500 px-6 py-4 text-base font-semibold text-white shadow-xl shadow-blue-500/20 transition hover:from-blue-500 hover:to-sky-400 disabled:cursor-not-allowed disabled:opacity-70"
        disabled={status === 'loading'}
      >
        {status === 'loading' ? 'Enviando...' : 'Enviar'}
      </button>
      {message && (
        <p className={`sm:col-span-2 rounded-2xl border px-4 py-3 text-sm ${status === 'success' ? 'border-emerald-500 bg-emerald-500/10 text-emerald-300' : 'border-rose-500 bg-rose-500/10 text-rose-300'}`}>
          {message}
        </p>
      )}
    </form>
  );
}
