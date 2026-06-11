"use client";

import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [agreeToContact, setAgreeToContact] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!agreeToContact) return;
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            message,
            phoneNumber,
            businessName,
          }),
        });

        setSubmitted(true);
      } catch (error) {
        console.error(error);
      }

  };

  return (
    <section className="max-w-3xl mx-auto px-6 py-16 z-10">
      <div className="bg-black/60 backdrop-blur-lg border border-white/20 rounded-2xl shadow-lg p-8 neon">
        {submitted ? (
          <div className="text-center py-10">
            <h1 className="text-4xl font-bold mb-4">Thank You!</h1>

            <p className="text-xl">I will reach out to you soon.</p>
          </div>
        ) : (
          <>
            <h1 className="text-4xl font-bold text-center mb-4">Contact Me</h1>

            <p className="text-center mb-8">
              Interested in a website or have a project in mind? Send me a
              message and I'll get back to you as soon as possible.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div>
                <label htmlFor="name" className="block mb-2 font-semibold">
                  Name
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full p-3 rounded-lg bg-white/5 border border-white/20 focus:outline-none focus:border-blue-400"
                />
              </div>

              <div>
                <label htmlFor="name" className="block mb-2 font-semibold">
                  Phone Number
                </label>

                <input
                  id="phoneNumber"
                  type="cel"
                  placeholder="(000)-000-0000"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                  className="w-full p-3 rounded-lg bg-white/5 border border-white/20 focus:outline-none focus:border-blue-400"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 font-semibold">
                  Email
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 rounded-lg bg-white/5 border border-white/20 focus:outline-none focus:border-blue-400"
                />
              </div>

              <div>
                <label htmlFor="business" className="block mb-2 font-semibold">
                  Business Name (Optional)
                </label>

                <input
                  id="business"
                  type="text"
                  placeholder="Business Name"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  className="w-full p-3 rounded-lg bg-white/5 border border-white/20 focus:outline-none focus:border-blue-400"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 font-semibold">
                  Project Details
                </label>

                <textarea
                  id="message"
                  rows={6}
                  placeholder="Tell me about your project..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full p-3 rounded-lg bg-white/5 border border-white/20 focus:outline-none focus:border-blue-400 resize-none"
                />
              </div>
              <div className="flex items-start gap-3 text-sm text-white/80">
                <input
                  id="agree"
                  type="checkbox"
                  checked={agreeToContact}
                  onChange={(e) => setAgreeToContact(e.target.checked)}
                  className="mt-1 accent-cyan-400 cursor-pointer"
                  required
                />

                <label htmlFor="agree" className="leading-snug">
                  I agree to be contacted regarding my inquiry. I understand my
                  information will only be used to respond to my request and
                  will not be sold or shared.
                </label>
              </div>
              <button
                type="submit"
                className="px-6 py-3 rounded-lg bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg transition hover:bg-white/15 hover:scale-105 cursor-pointer"
              >
                Send Message
              </button>
            </form>
          </>
        )}
      </div>
    </section>
  );
}
