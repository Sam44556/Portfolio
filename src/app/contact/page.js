"use client"; // if using Next.js app router
import emailjs from "@emailjs/browser";
import { useEffect } from "react";
export default function Page() {
  useEffect(() => {
    emailjs.init(  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY); // your public key
  }, []);
   function sendEmail(e) {
    e.preventDefault();

    const templateParams = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    emailjs
      .send( process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,templateParams)
      .then(() => {
        alert("Message sent successfully!");
        e.target.reset();
      })
      .catch((error) => {
        console.error("FAILED...", error);
        alert("Something went wrong. Try again!");
      });
  }

  return (
    <div className="flex flex-col bg-black items-center justify-center px-4  text-center">
      {/* Header */}
      <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl  text-white mb-4">
        Let&apos;s Build Something Amazing
      </h1>
      <p className="text-gray-400 max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-3xl mb-6 text-base sm:text-lg md:text-xl">
        Looking for a developer who can create high-performance, interactive web experiences?
      </p>

      {/* Location */}
      <div className="flex items-center gap-2 text-gray-400 mb-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 md:h-6 md:w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 11c0-1.657-1.343-3-3-3s-3 1.343-3 3 3 6 3 6 3-4.343 3-6z"
          />
        </svg>
        <span className="text-sm md:text-base">Addis Ababa, ETHIOPIA</span>
      </div>

      {/* Form */}
      <form className="w-full max-w-md sm:max-w-lg md:max-w-4xl space-y-4 " onSubmit={sendEmail}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="w-full px-4 py-3 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full px-4 py-3 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <textarea
          placeholder="Message"
          name="message"
          rows="4"
          className="w-full px-4 py-3 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <button
          type="submit"
          className="w-full py-3 rounded-md bg-gradient-to-r bg-purple-600 hover:bg-purple-700 text-white font-semibold hover:opacity-90 transition"
        >
          Send Message
        </button>
      </form>

   
      {/* Social Links */}
      <div className="flex gap-8 mt-8 text-gray-400">
       <a 
  href="https://github.com/Sam44556" 
  target="_blank" 
  rel="noopener noreferrer"
  className="text-gray-400 hover:text-white transition-colors"
>
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="currentColor" 
    viewBox="0 0 24 24" 
    className="w-6 h-6"
  >
    <path d="M12 .5C5.65.5.5 5.65.5 
             12c0 5.09 3.29 9.4 7.86 10.94.58.11.79-.25.79-.56 
             0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 
             1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 
             3.4.97.11-.76.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.7 
             0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.45.11-3.02 
             0 0 .97-.31 3.18 1.18a11.1 11.1 0 012.9-.39c.99 0 
             1.99.13 2.9.39 2.2-1.49 3.18-1.18 
             3.18-1.18.63 1.57.23 2.73.11 3.02.74.81 
             1.19 1.84 1.19 3.1 0 4.43-2.69 
             5.41-5.25 5.69.42.36.79 1.09.79 2.2 
             0 1.59-.01 2.87-.01 3.26 
             0 .31.21.67.8.56A10.52 10.52 0 0023.5 
             12c0-6.35-5.15-11.5-11.5-11.5z"/>
  </svg>
</a>

        <a 
  href="https://www.linkedin.com/in/samuel-girma-28046a299" 
  target="_blank" 
  rel="noopener noreferrer"
  className="text-gray-400 hover:text-white transition-colors"
>
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="currentColor" 
    viewBox="0 0 24 24" 
    className="w-6 h-6"
  >
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 
             2.761 2.239 5 5 5h14c2.762 0 
             5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 
             19h-3v-10h3v10zm-1.5-11.268c-.966 
             0-1.75-.783-1.75-1.75s.784-1.75 
             1.75-1.75 1.75.783 
             1.75 1.75-.784 1.75-1.75 
             1.75zm13.5 11.268h-3v-5.604c0-1.337-.027-3.062-1.867-3.062-1.869 
             0-2.156 1.46-2.156 
             2.967v5.699h-3v-10h2.881v1.367h.041c.401-.761 
             1.379-1.562 2.839-1.562 3.037 
             0 3.6 2.001 3.6 
             4.604v5.591z"/>
  </svg>
</a>

        <a 
  href="https://t.me/Sami_girma_8" 
  target="_blank" 
  rel="noopener noreferrer"
  className="text-gray-400 hover:text-white transition-colors"
>
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="currentColor" 
    viewBox="0 0 24 24" 
    className="w-6 h-6"
  >
    <path d="M9.999 15.2l-.39 5.5c.56 0 .8-.24 
             1.09-.53l2.62-2.5 5.43 3.94c1 .55 
             1.71.26 1.96-.93l3.55-16.65h.01c.32-1.49-.54-2.08-1.52-1.72l-21.2 
             8.17c-1.45.56-1.43 1.36-.25 
             1.72l5.43 1.69L18.49 6.5c.61-.41 
             1.17-.18.71.23"/>
  </svg>
</a>

      </div>
    </div>
  );
}
