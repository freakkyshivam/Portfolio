import React, { useState } from "react";
import {
  Send,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Twitter,
  Instagram,
  MessageSquare,
  User,
  AtSign,
  FileText,
  CheckCircle,
  Sparkles,
  Heart
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      // Reset success message after 3 seconds
      setTimeout(() => setSubmitted(false), 3000);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "skc722768@gmail.com",
      href: "mailto:skc722768@gmail.com",
      color: "text-blue-400",
      bgColor: "bg-blue-400/20",
      borderColor: "border-blue-400/30"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9219576699",
      href: "tel:+919219576699",
      color: "text-green-400",
      bgColor: "bg-green-400/20",
      borderColor: "border-green-400/30"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Kanpur, India",
      href: "#",
      color: "text-purple-400",
      bgColor: "bg-purple-400/20",
      borderColor: "border-purple-400/30"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      url: "https://github.com/freakkyshivam",
      color: "hover:text-gray-400",
      bgHover: "hover:bg-gray-400/20"
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/freakkyshivam",
      color: "hover:text-blue-400",
      bgHover: "hover:bg-blue-400/20"
    },
    {
      icon: Twitter,
      name: "Twitter",
      url: "https://x.com/freakkyshivam",
      color: "hover:text-sky-400",
      bgHover: "hover:bg-sky-400/20"
    },
    {
      icon: Instagram,
      name: "Instagram",
      url: "https://www.instagram.com/freakkyshivam/",
      color: "hover:text-pink-400",
      bgHover: "hover:bg-pink-400/20"
    }
  ];

  return (
    <section className="bg-slate-950 text-white min-h-screen p-5" id="contact">
      
      {/* Header Section */}
      <div className="text-center mb-16 pt-10">
        <div className="flex items-center justify-center gap-3 mb-6">
          <MessageSquare className="w-8 h-8 text-emerald-400" />
          <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
            Get In Touch
          </h1>
          <Sparkles className="w-8 h-8 text-emerald-400" />
        </div>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Have a project in mind or just want to connect? I'd love to hear from you!
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Contact Form */}
        <div className="order-2 lg:order-1">
          <div className="bg-slate-900/40 backdrop-blur-sm border border-emerald-400/30 rounded-3xl p-8 hover:shadow-2xl hover:shadow-emerald-400/10 transition-all duration-300 hover:border-emerald-400/60">
            <div className="flex items-center gap-3 mb-6">
              <Send className="w-6 h-6 text-emerald-400" />
              <h2 className="text-2xl font-bold text-emerald-300">Send a Message</h2>
            </div>

            {submitted && (
              <div className="mb-6 p-4 bg-green-500/20 border border-green-400/30 rounded-2xl flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-green-400 font-medium">Message sent successfully!</span>
              </div>
            )}

            <div className="space-y-6">

              <div className="relative group">
                <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-emerald-400 transition-colors" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-600 rounded-2xl text-white placeholder-gray-400 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/20 transition-all duration-300"
                  required
                />
              </div>

              <div className="relative group">
                <AtSign className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-emerald-400 transition-colors" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-600 rounded-2xl text-white placeholder-gray-400 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/20 transition-all duration-300"
                  required
                />
              </div>

              <div className="relative group">
                <FileText className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-emerald-400 transition-colors" />
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-600 rounded-2xl text-white placeholder-gray-400 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/20 transition-all duration-300"
                  required
                />
              </div>

              <div className="relative group">
                <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-emerald-400 transition-colors" />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows={6}
                  className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-600 rounded-2xl text-white placeholder-gray-400 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/20 transition-all duration-300 resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-emerald-400 to-blue-400 text-white font-semibold py-4 px-6 rounded-2xl hover:shadow-lg hover:shadow-emerald-400/30 transition-all duration-300 flex items-center justify-center gap-3 hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Contact Info & Social */}
        <div className="order-1 lg:order-2 space-y-8">
          
          {/* Contact Information */}
          <div className="bg-slate-900/40 backdrop-blur-sm border border-emerald-400/30 rounded-3xl p-8 hover:shadow-2xl hover:shadow-emerald-400/10 transition-all duration-300 hover:border-emerald-400/60">
            <h2 className="text-2xl font-bold text-emerald-300 mb-6 flex items-center gap-3">
              <Phone className="w-6 h-6" />
              Contact Information
            </h2>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div key={index} className="group cursor-pointer" onClick={() => info.href !== "#" && window.open(info.href)}>
                    <div className="flex items-center gap-4 p-4 rounded-2xl border border-slate-700 hover:border-emerald-400/50 bg-slate-800/30 hover:bg-slate-700/50 transition-all duration-300 hover:-translate-y-1">
                      <div className={`w-12 h-12 rounded-xl ${info.bgColor} border ${info.borderColor} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <IconComponent className={`w-5 h-5 ${info.color}`} />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">{info.label}</p>
                        <p className="text-white font-medium group-hover:text-emerald-400 transition-colors">
                          {info.value}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Social Media */}
          <div className="bg-slate-900/40 backdrop-blur-sm border border-emerald-400/30 rounded-3xl p-8 hover:shadow-2xl hover:shadow-emerald-400/10 transition-all duration-300 hover:border-emerald-400/60">
            <h2 className="text-2xl font-bold text-emerald-300 mb-6 flex items-center gap-3">
              <Heart className="w-6 h-6" />
              Let's Connect
            </h2>
            
            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <button
                    key={index}
                    onClick={() => window.open(social.url, "_blank")}
                    className={`group p-4 rounded-2xl border border-slate-700 bg-slate-800/30 hover:border-emerald-400/50 hover:bg-slate-700/50 transition-all duration-300 hover:-translate-y-1 hover:scale-105 ${social.bgHover}`}
                  >
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-emerald-400/20 border border-emerald-400/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <IconComponent className={`w-5 h-5 text-emerald-400 transition-colors ${social.color}`} />
                      </div>
                      <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                        {social.name}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;