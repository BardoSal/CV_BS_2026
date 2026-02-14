"use client";
import React, { useState } from 'react';
import { Send, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const result = await response.json();

      if (result.success) {
        setStatus("Message sent successfully!");
        form.reset();
      } else {
        setStatus("Error: " + result.message);
      }
    } catch (error) {
      setStatus("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-24 px-6 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-4">
          Contacto
          <div className="h-px flex-1 bg-zinc-900"></div>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left Side: Info */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4 italic">Envíame un mensaje.</h3>
            <p className="text-zinc-400 mb-8 leading-relaxed">
              Estoy disponible para colaboraciones estratégicas y consultoría externa en proyectos de planificación urbana, ordenamiento territorial y análisis de datos geoespaciales para la toma de decisiones
            </p> 
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-zinc-300">
                <div className="p-3 bg-zinc-900 rounded-lg border border-zinc-800">
                  <Mail size={20} className="text-blue-500" />
                </div>
                <span>bardo.salgado.mx@gmailcom</span>
              </div>
              <div className="flex items-center gap-4 text-zinc-300">
                <div className="p-3 bg-zinc-900 rounded-lg border border-zinc-800">
                  <MapPin size={20} className="text-blue-500" />
                </div>
                <span>Ciudad de México, México</span>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* REPLACE WITH YOUR ACTUAL ACCESS KEY */}
            <input type="hidden" name="access_key" value="e34d23c3-f9c9-45fb-baea-95c091141bad" />
            
            {/* SPAM PROTECTION: Honeypot field (hidden from humans) */}
            <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

            <div>
              <input 
                type="text" 
                name="name" 
                placeholder="Nombre" 
                required 
                className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white placeholder:text-zinc-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
              />
            </div>

            <div>
              <input 
                type="email" 
                name="email" 
                placeholder="Email" 
                required 
                className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white placeholder:text-zinc-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
              />
            </div>

            <div>
              <textarea 
                name="message" 
                rows={4} 
                placeholder="¿Cómo puedo ayudarte?" 
                required 
                className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white placeholder:text-zinc-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full py-4 bg-white text-zinc-950 font-bold rounded-xl hover:bg-blue-500 hover:text-white transition-all flex items-center justify-center gap-2 group"
            >
              Enviar mensaje
              <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>

            {status && (
              <p className={`text-center text-sm font-medium mt-4 ${status.includes("successfully") ? 'text-green-400' : 'text-blue-400'}`}>
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;