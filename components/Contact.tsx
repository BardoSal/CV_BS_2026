"use client";
import React, { useState } from 'react';
import { Send } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");
    
    const formData = new FormData(e.currentTarget);
    // Replace 'YOUR_ACCESS_KEY_HERE' with a key from web3forms.com
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    if (response.ok) {
      setStatus("Message sent successfully!");
      (e.target as HTMLFormElement).reset();
    } else {
      setStatus("Error sending message. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-20 px-6 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-12 flex items-center gap-4">
          Get In Touch
          <div className="h-px flex-1 bg-zinc-200 dark:bg-zinc-800"></div>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
              Have a project in mind or just want to say hi? Feel free to send me a message. I usually respond within 24 hours.
            </p>
            <div className="text-sm text-zinc-500 dark:text-zinc-500 font-mono">
              BASED IN: Your City, Country
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input 
              type="text" name="name" placeholder="Your Name" required
              className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            />
            <input 
              type="email" name="email" placeholder="Your Email" required
              className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            />
            <textarea 
              name="message" placeholder="Your Message" rows={4} required
              className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            ></textarea>
            
            <button 
              type="submit"
              className="flex items-center justify-center gap-2 w-full py-3 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-xl font-bold hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white transition-all"
            >
              Send Message <Send size={18} />
            </button>
            {status && <p className="text-center text-sm font-medium text-blue-600">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;