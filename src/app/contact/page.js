'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { MdEmail, MdLocationOn } from 'react-icons/md';
import {  FaLinkedin } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function Page() {
  useEffect(() => {
    if (process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) {
      emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
    }
  }, []);

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [sending, setSending] = useState(false);

  function sanitize(str = '') {
    return String(str)
      .trim()
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#39;')
      .slice(0, 2000);
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  async function sendEmail(e) {
    e.preventDefault();
    setError('');
    setSuccess('');
    // Check required EmailJS client-side env vars and initialization
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error('EmailJS env vars missing', { serviceId, templateId, publicKey });
      setError('Email service not configured. Please set NEXT_PUBLIC_EMAILJS_* env vars.');
      return;
    }

    const form = e.target;
    const name = sanitize(form.name.value);
    const email = form.email.value.trim();
    const message = sanitize(form.message.value);

    if (!name) return setError('Please enter your name.');
    if (!isValidEmail(email)) return setError('Please enter a valid email.');
    if (!message) return setError('Please enter a message.');

    const templateParams = { name, email: sanitize(email), message };

    try {
      setSending(true);
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        templateParams
      );
      setSuccess('Message sent successfully!');
      form.reset();
    } catch (err) {
      console.error('Email send failed', err);
      // Try to extract a useful message from the error
      let message = 'Something went wrong. Please try again.';
      try {
        if (err) {
         message = 'Unable to send your message. Please contact me at samuelgirma888@gmail.com';
        }
      } catch (e) {
        // ignore
      }
      setError(message);
    } finally {
      setSending(false);
    }
  }

  const contactInfo = [
    { name: 'Email', icon: <MdEmail className="size-6" />, href: 'mailto:samuelgirma888@gmail.com', label: 'samuelgirma888@gmail.com' },
    { name: 'Phone', icon: (
        <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ), href: 'tel:+251938671057', label: '+251 938 671 057' },
    { name: 'Location', icon: <MdLocationOn className="size-6" />, href: 'https://maps.google.com/?q=Addis+Ababa+Ethiopia', label: 'Addis Ababa, Ethiopia' },
  ];

  const socialLinks = [
    { href: 'https://www.linkedin.com/', icon: <FaLinkedin />, label: 'LinkedIn' },
    { href: 'mailto:samuelgirma888@gmail.com', icon: <MdEmail />, label: 'Email' },
    { href: 'tel:+251938671057', icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ), label: 'Phone' },
  ];

  return (
    <section className="bg-background text-foreground pt-12 md:pt-0
 px-4 md:px-8 mb-10" id="contact">
      <div className="w-full max-w-7xl mx-auto">

        {/* Two-column layout: left content and right form */}
        <div id="contact-form" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6 lg:col-span-7"
          >
            <p className="text-lg font-medium text-sky-600 dark:text-sky-400 uppercase tracking-widest">Get in Touch</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
              <span className="block text-foreground">Let&apos;s Build Something</span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-sky-600">Amazing Together</span>
            </h2>

            <p className="text-muted-foreground max-w-2xl text-lg">
              Have a project in mind ? I&apos;m always open to discussing new projects, exciting projects, and opportunities to collaborate.
            </p>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Connect with me</h3>
              <div className="flex items-center gap-4">
                {socialLinks.map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-muted/30 dark:bg-white/6 flex items-center justify-center ring-1 ring-border hover:ring-accent transition">
                    <span className="text-foreground dark:text-white text-xl">{s.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5"
          >
            <div className="rounded-2xl border border-border bg-card p-6 shadow-xl dark:bg-gradient-to-br dark:from-[#071018]/80 dark:to-[#0c1318]/80">
              <form onSubmit={sendEmail} noValidate className="space-y-4">
                <Input type="text" name="name" placeholder="Your Name" required className="w-full bg-muted/10 dark:bg-white/5 placeholder:text-muted-foreground text-foreground dark:text-white rounded-xl py-4 px-5" />
                <Input type="email" name="email" placeholder="Your Email" required className="w-full bg-muted/10 dark:bg-white/5 placeholder:text-muted-foreground text-foreground dark:text-white rounded-xl py-4 px-5" />
                <Textarea name="message" rows={6} placeholder="Tell me about your project..." required className="w-full bg-muted/10 dark:bg-white/5 placeholder:text-muted-foreground text-foreground dark:text-white rounded-xl py-4 px-5 min-h-[160px] resize-none" />
                {error && <p className="text-destructive text-sm">{error}</p>}
                {success && <p className="text-emerald-500 text-sm">{success}</p>}
                <Button type="submit" disabled={sending} size="lg" className="w-full rounded-xl bg-gradient-to-r from-sky-400 to-sky-700 text-white hover:from-sky-500 hover:to-sky-400">
                  {sending ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
