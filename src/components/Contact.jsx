import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Contact = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // Parallax translation for the big text
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "30%"]);

  // Form State
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    permission: false
  });
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.firstName || !formData.email || !formData.message) {
      alert("Please fill in your name, email, and message.");
      return;
    }

    setStatus('submitting');

    try {
      const response = await fetch("https://formsubmit.co/ajax/amyron1619@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json' 
        },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`.trim(),
          email: formData.email,
          message: formData.message,
          permission_to_contact: formData.permission ? "Yes" : "No",
          _subject: `🚀 New Lead from Portfolio: ${formData.firstName} ${formData.lastName}`.trim()
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ firstName: '', lastName: '', email: '', message: '', permission: false });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error("Form error:", error);
      setStatus('error');
    }
  };

  return (
    <section ref={ref} id="contact" className="bg-[#0a0a0a] w-full min-h-screen relative overflow-hidden flex items-end pt-32 pb-0 md:pb-0 border-t border-gray-900">
      {/* Huge Background Text */}
      <motion.div 
        style={{ y }}
        className="absolute top-0 left-0 w-full h-full flex flex-col justify-start items-center overflow-hidden pointer-events-none z-0 pt-16 md:pt-12"
      >
        <h1 
          className="text-[25vw] leading-[0.75] font-black text-white uppercase tracking-tighter select-none scale-y-[1.6] origin-top"
          style={{ fontFamily: "'Impact', 'Arial Black', sans-serif" }}
        >
          Contact
        </h1>
      </motion.div>

      {/* Form Card Overlay */}
      <div className="relative z-10 w-full flex justify-end items-end">
        <div 
          data-aos="fade-up"
          className="bg-[#ff2a2a] w-full md:w-[85%] lg:w-[75%] p-8 md:p-16 text-white flex flex-col justify-between"
        >
          <div className="text-xs font-bold tracking-[0.2em] mb-12 md:mb-20 uppercase opacity-90">
            Reach Us
          </div>

          {status === 'success' ? (
            <div className="bg-white text-[#ff2a2a] p-8 md:p-12 rounded-3xl flex flex-col items-center justify-center text-center gap-6 my-8 shadow-2xl transition-all duration-500">
              <div className="w-20 h-20 bg-[#ff2a2a]/10 rounded-full flex items-center justify-center text-[#ff2a2a] text-4xl font-black shadow-inner">
                ✓
              </div>
              <h3 className="text-3xl font-black uppercase tracking-wider text-gray-900">Message Sent Successfully!</h3>
              <p className="text-gray-700 max-w-lg text-lg font-medium leading-relaxed">
                Thank you for reaching out! Your message and details have been sent directly to <span className="font-bold text-[#ff2a2a] underline">amyron1619@gmail.com</span>. We will get back to you soon.
              </p>
              <button 
                onClick={() => setStatus('idle')} 
                className="mt-4 px-8 py-3 bg-[#ff2a2a] text-white font-bold rounded-full hover:bg-black transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-12 md:gap-16 w-full">
              {status === 'error' && (
                <div className="bg-black/30 border border-white/50 p-4 rounded-xl text-white text-sm">
                  ⚠️ Oops! There was an issue sending your message. Please make sure you are connected to the internet or try again later.
                </div>
              )}

              <div className="flex flex-col md:flex-row gap-12 md:gap-20 w-full">
                {/* Left Column */}
                <div className="flex-1 flex flex-col gap-10">
                  <div className="relative">
                    <input 
                      type="text" 
                      id="firstName" 
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      placeholder="First Name" 
                      className="w-full bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white font-medium rounded-none"
                    />
                  </div>
                  <div className="relative">
                    <input 
                      type="text" 
                      id="lastName" 
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Last Name" 
                      className="w-full bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white font-medium rounded-none"
                    />
                  </div>
                  <div className="relative">
                    <input 
                      type="email" 
                      id="email" 
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Email" 
                      className="w-full bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white font-medium rounded-none"
                    />
                  </div>
                </div>

                {/* Right Column */}
                <div className="flex-1 flex flex-col">
                  <div className="relative h-full flex flex-col">
                    <textarea 
                      id="message" 
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Type your message here" 
                      className="w-full h-full min-h-[120px] bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white font-medium resize-none rounded-none"
                    ></textarea>
                  </div>
                </div>
              </div>

              {/* Bottom Section */}
              <div className="flex flex-col md:flex-row gap-12 mt-4">
                {/* Left text */}
                <div className="flex-1 flex items-start gap-4 text-sm font-medium text-white/90">
                  <input 
                    type="checkbox" 
                    id="permission" 
                    checked={formData.permission}
                    onChange={handleChange}
                    className="mt-1 w-4 h-4 rounded-sm border-white/40 bg-transparent text-white focus:ring-white focus:ring-offset-0 focus:ring-offset-transparent cursor-pointer" 
                    style={{ accentColor: "white" }}
                  />
                  <label htmlFor="permission" className="cursor-pointer max-w-[280px] leading-snug">
                    I give permission to contact me at this email address.
                  </label>
                </div>

                {/* Right text & button */}
                <div className="flex-1 flex flex-col gap-8 text-xs text-white/70 font-medium">
                  <p className="leading-relaxed max-w-[400px]">
                    This site is protected by reCAPTCHA and the Google <a href="#" className="underline hover:text-white transition-colors">Privacy Policy</a> and <a href="#" className="underline hover:text-white transition-colors">Terms of Service</a> apply.
                  </p>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-6">
                    <p className="max-w-[250px] leading-relaxed">
                      For information on how to unsubscribe, please review our <a href="#" className="underline hover:text-white transition-colors">privacy policy</a>.
                    </p>
                    
                    <button 
                      type="submit" 
                      disabled={status === 'submitting'}
                      className="px-8 py-3 rounded-full border border-white/40 text-white font-bold flex items-center justify-center gap-3 hover:bg-white hover:text-[#ff2a2a] transition-all duration-300 group whitespace-nowrap self-start sm:self-auto disabled:opacity-50 cursor-pointer"
                    >
                      {status === 'submitting' ? 'Sending...' : 'Send'}
                      <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          )}

        </div>
      </div>
    </section>
  );
};

export default Contact;
