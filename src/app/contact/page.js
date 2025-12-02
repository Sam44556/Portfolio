"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { MdEmail, MdLocationOn } from "react-icons/md";

export default function Page() {
  useEffect(() => {
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
  }, []);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [sending, setSending] = useState(false);

  function sanitize(str = "") {
    return String(str)
      .trim()
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#39;")
      .slice(0, 2000);
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  async function sendEmail(e) {
    e.preventDefault();
    setError("");
    setSuccess("");

    const form = e.target;
    const name = sanitize(form.name.value);
    const email = form.email.value.trim();
    const message = sanitize(form.message.value);

    if (!name) return setError("Please enter your name.");
    if (!isValidEmail(email)) return setError("Please enter a valid email.");
    if (!message) return setError("Please enter a message.");

    const templateParams = { name, email: sanitize(email), message };

    try {
      setSending(true);
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        templateParams
      );
      setSuccess("Message sent successfully!");
      form.reset();
    } catch (err) {
      console.error("FAILED...", err);
      setError("Something went wrong. Try again!");
    } finally {
      setSending(false);
    }
  }

  const contactInfo = [
    {
      name: "Email",
      icon: <MdEmail className="w-7 h-7" />,
      href: "mailto:samuelgirma888@gmail.com",
      label: "samuelgirma888@gmail.com",
    },
    {
      name: "Phone",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      href: "tel:+251938671057",
      label: "+251 938 671 057",
    },
    {
      name: "Location",
      icon: <MdLocationOn className="w-7 h-7" />,
      href: "https://maps.google.com/?q=Addis+Ababa+Ethiopia",
      label: "Addis Ababa, Ethiopia",
    },
  ];

  return (
    <div className="bg-background text-foreground pt-12 md:pt-16 pb-8 md:pb-12 px-4 md:px-8" id="contact">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-accent mb-4">
            Get In Touch
          </h2>
          <p className="text-foreground opacity-70 text-lg max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </motion.div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE - PERFECTLY CENTERED */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center items-start lg:items-center"
          >
            <div className="space-y-6 w-full max-w-sm lg:-mt-16 -mt-8">

              {contactInfo.map((info, idx) => (
                <motion.a
                  key={info.name}
                  href={info.href}
                  target={info.name === "Location" ? "_blank" : undefined}
                  rel={info.name === "Location" ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                  className="flex items-center h-20 gap-4 p-4 rounded-lg border border-border hover:border-accent transition-all"
                >
                  <div className="text-accent">{info.icon}</div>
                  <div>
                    <p className="font-semibold">{info.name}</p>
                    <p className="text-sm opacity-70">{info.label}</p>
                  </div>
                </motion.a>
              ))}

            </div>
          </motion.div>

          {/* RIGHT SIDE FORM */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={sendEmail} noValidate className="space-y-6">

              <div>
              
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full h-10 px-4 py-3 rounded-lg bg-muted border border-border focus:ring-2 focus:ring-accent outline-none"
                />
              </div>

              <div>
                
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full h-10 px-4 py-3 rounded-lg bg-muted border border-border focus:ring-2 focus:ring-accent outline-none"
                />
              </div>

              <div>
               
                <textarea
                  name="message"
                  rows="6"
                  required
                  placeholder="Your Message"
                  className="w-full  min-h-[80px] px-4 py-3 rounded-lg bg-muted border border-border focus:ring-2 focus:ring-accent outline-none"
                    />
              </div>

              {error && <p className="text-red-400 text-sm">{error}</p>}
              {success && <p className="text-green-400 text-sm">{success}</p>}

              <motion.button
                type="submit"
                disabled={sending}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-accent py-3 rounded-lg text-white font-semibold disabled:opacity-50"
              >
                {sending ? "Sending..." : "Send Message"}
              </motion.button>

            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
