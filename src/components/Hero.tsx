import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { trackCallConversion } from "@/lib/gtag";
import { submitContactFormToRenoLens } from "@/lib/renolensApi";

const Hero: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      await submitContactFormToRenoLens({
        name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      });

      // Success - redirect to thank you page
      navigate("/thank-you");
    } catch (err) {
      console.error('Form submission error:', err);
      setError('Something went wrong. Please try again or call us directly.');
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero Section with Video */}
      <section className="relative w-full h-[650px] md:h-[700px] lg:min-h-[850px] bg-gray-900 overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: 'center center' }}
        >
          <source src="/herovideogr8.mov" type="video/quicktime" />
          <source src="/herovideogr8.mov" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Background Overlay for opacity */}
        <div className="absolute inset-0 bg-black opacity-30"></div>
        
        {/* Content Overlay - Two Column Layout on Desktop */}
        <div className="absolute inset-0 z-10">
          <div className="container mx-auto px-4 h-full flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 py-12">
            
            {/* Left Side - Text Content */}
            <div className="flex flex-col justify-center text-center lg:text-left max-w-xl">
              <h1 className="font-display text-[2.75rem] sm:text-5xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.15]" style={{ textShadow: '3px 3px 6px rgba(0,0,0,1), 0 0 30px rgba(0,0,0,0.8), 0 0 60px rgba(0,0,0,0.5)' }}>
                The #1 Refinishing<br />
                <span className="inline-block font-bold">
                  Specialists in Los Angeles
                </span>
              </h1>
              <p className="text-lg md:text-lg lg:text-xl text-white/90 mb-8 lg:mb-8 font-light leading-relaxed">
                Professional bathtub and tile refinishing services. Restore surfaces to look brand new with specialized coatings.
              </p>
              
              {/* CTA Buttons - Visible on mobile, hidden on desktop */}
              <div className="flex flex-col gap-4 lg:hidden justify-center items-center mt-4">
                <a 
                  href="#hero-form"
                  className="bg-accent hover:bg-accent/90 text-white font-bold py-4 px-12 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 text-center text-lg w-72"
                >
                  GET FREE QUOTE
                </a>
                <a 
                  href="tel:3238551752"
                  onClick={(e) => {
                    e.preventDefault();
                    trackCallConversion("tel:3238551752");
                  }}
                  className="bg-background hover:bg-background/90 text-foreground font-bold py-4 px-12 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 text-center text-lg w-72"
                >
                  CALL US
                </a>
              </div>
            </div>

            {/* Right Side - Quote Form (Desktop Only) */}
            <div className="hidden lg:block w-full max-w-md bg-black/90 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-2xl">
              {/* Logo */}
              <div className="flex justify-center mb-4">
                <img 
                  src="/newlogo.PNG" 
                  alt="Gr8 Glaze Refinishing Logo" 
                  className="h-16 object-contain"
                />
              </div>
              
              {/* Form Title */}
              <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-6">
                GET A FREE QUOTE
              </h2>
              
              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Full Name */}
                <div>
                  <label className="block text-white text-sm font-semibold mb-1">
                    Full Name <span className="text-accent">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="John Smith"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white text-foreground placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>
                
                {/* Phone */}
                <div>
                  <label className="block text-white text-sm font-semibold mb-1">
                    Phone <span className="text-accent">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="(323) 555-1234"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white text-foreground placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>
                
                {/* Email */}
                <div>
                  <label className="block text-white text-sm font-semibold mb-1">
                    Email <span className="text-accent">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white text-foreground placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>
                
                {/* Message */}
                <div>
                  <label className="block text-white text-sm font-semibold mb-1">
                    Short message about your needs <span className="text-accent">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="**Your message goes straight to my phone, I'll get back to you as soon as I'm available**"
                    required
                    rows={3}
                    className="w-full px-4 py-3 rounded-lg bg-white text-foreground placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                  />
                </div>
                
                {/* Error Message */}
                {error && (
                  <p className="text-red-400 text-sm text-center">{error}</p>
                )}
                
                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-accent hover:bg-accent/90 text-white font-bold py-4 px-8 rounded-lg shadow-lg transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed text-lg"
                >
                  {isSubmitting ? 'SENDING...' : 'SEND'}
                </button>
              </form>
            </div>
            
          </div>
        </div>
      </section>

      {/* Mobile Quote Form - Below Hero */}
      <section id="hero-form" className="lg:hidden bg-foreground py-12 px-4">
        <div className="container mx-auto max-w-md">
          <div className="bg-black/90 backdrop-blur-sm rounded-2xl p-6 shadow-2xl">
            {/* Logo */}
            <div className="flex justify-center mb-4">
              <img 
                src="/newlogo.PNG" 
                alt="Gr8 Glaze Refinishing Logo" 
                className="h-16 object-contain"
              />
            </div>
            
            {/* Form Title */}
            <h2 className="text-2xl font-bold text-white text-center mb-6">
              GET A FREE QUOTE
            </h2>
            
            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name */}
              <div>
                <label className="block text-white text-sm font-semibold mb-1">
                  Full Name <span className="text-accent">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="John Smith"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white text-foreground placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
              
              {/* Phone */}
              <div>
                <label className="block text-white text-sm font-semibold mb-1">
                  Phone <span className="text-accent">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="(323) 555-1234"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white text-foreground placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
              
              {/* Email */}
              <div>
                <label className="block text-white text-sm font-semibold mb-1">
                  Email <span className="text-accent">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white text-foreground placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
              
              {/* Message */}
              <div>
                <label className="block text-white text-sm font-semibold mb-1">
                  Short message about your needs <span className="text-accent">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="**Your message goes straight to my phone, I'll get back to you as soon as I'm available**"
                  required
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg bg-white text-foreground placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                />
              </div>
              
              {/* Error Message */}
              {error && (
                <p className="text-red-400 text-sm text-center">{error}</p>
              )}
              
              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent hover:bg-accent/90 text-white font-bold py-4 px-8 rounded-lg shadow-lg transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed text-lg"
              >
                {isSubmitting ? 'SENDING...' : 'SEND'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
