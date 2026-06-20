'use client'
 
import { useState } from 'react'
import { useReveal } from './use-reveal'
import { Mail, MapPin, Phone, Send } from 'lucide-react'
import emailjs from '@emailjs/browser'
 
export function Contact() {
  const head = useReveal()
  const form = useReveal()
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
 
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
 
   emailjs.sendForm(
  'service_ztmnot2',
  'template_7yz4kr5',
  e.currentTarget,
  'Tgj4SJDZLaeXFKmpD'
)
 
    .then(() => {
      setLoading(false)
      setSubmitted(true)
    })
    .catch((error) => {
      setLoading(false)
      console.error(error)
      alert('Erreur lors de l’envoi du message')
    })
  }
 
  return (
    <section id="contact" className="relative overflow-hidden bg-surface py-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 30%, rgba(37,99,235,0.5), transparent 40%), radial-gradient(circle at 80% 70%, rgba(37,99,235,0.4), transparent 40%)',
        }}
      />
 
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        {/* HEADER */}
        <div
          ref={head.ref}
          className={`reveal mx-auto max-w-2xl text-center ${head.visible ? 'is-visible' : ''}`}
        >
          <p className="font-display text-sm tracking-[0.2em] text-gold">
            REJOIGNEZ LE MOUVEMENT
          </p>
          <h2 className="mt-3 font-heading text-4xl font-bold text-foreground sm:text-5xl">
            Ensemble, Construisons le Changement
          </h2>
          <p className="mt-4 leading-relaxed text-muted-text">
            Votre voix compte. Envoyez-nous un message ou devenez volontaire.
          </p>
        </div>
 
        <div className="mt-14 grid gap-10 lg:grid-cols-5">
          {/* INFO */}
          <div className="space-y-6 lg:col-span-2">
            {[
              { icon: MapPin, label: 'Adresse', value: 'Haïti' },
              { icon: Phone, label: 'Téléphone', value: '+509 3824 5331' },
              { icon: Mail, label: 'Email', value: 'Markenslarose64@gmail.com' },
            ].map((c) => (
              <div
                key={c.label}
                className="flex items-start gap-4 rounded-xl border border-border bg-card p-5"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-royal/15">
                  <c.icon className="h-5 w-5 text-royal-glow" />
                </div>
                <div>
                  <p className="font-display text-sm text-gold">{c.label}</p>
                  <p className="mt-1 text-foreground">{c.value}</p>
                </div>
              </div>
            ))}
          </div>
 
          {/* FORM — id separe "contact-form" pou bouton Voter ka vize fòm lan dirèkteman */}
          <div
            id="contact-form"
            ref={form.ref}
            className={`reveal rounded-2xl border border-border bg-card p-7 lg:col-span-3 ${
              form.visible ? 'is-visible' : ''
            }`}
          >
            {submitted ? (
              <div className="flex h-full min-h-[20rem] flex-col items-center justify-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-royal/20">
                  <Send className="h-7 w-7 text-royal-glow" />
                </div>
                <h3 className="mt-5 font-heading text-2xl font-semibold text-foreground">
                  Merci pour votre engagement !
                </h3>
                <p className="mt-2 text-muted-text">
                  Nous vous contacterons très bientôt. Ansanm nou pi fò !
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Nom complet" name="name" type="text" placeholder="Jean Baptiste" />
                  <Field label="Téléphone" name="phone" type="tel" placeholder="+509 ..." />
                </div>
 
                <Field label="Email" name="email" type="email" placeholder="vous@email.com" />
 
                <div>
                  <label htmlFor="message" className="mb-2 block font-display text-sm text-foreground">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    placeholder="Comment souhaitez-vous contribuer ?"
                    className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-foreground outline-none transition-colors placeholder:text-muted-text/60 focus:border-royal"
                  />
                </div>
 
                <button
                  type="submit"
                  disabled={loading}
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-royal px-6 py-3.5 font-display text-base text-white transition-all hover:bg-royal-glow disabled:opacity-60"
                >
                  {loading ? 'Envoi en cours...' : 'Envoyer & Rejoindre'}
                  {!loading && <Send className="h-4 w-4" />}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
 
function Field({
  label,
  name,
  type,
  placeholder,
}: {
  label: string
  name: string
  type: string
  placeholder: string
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block font-display text-sm text-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-foreground outline-none transition-colors placeholder:text-muted-text/60 focus:border-royal"
      />
    </div>
  )
}
 