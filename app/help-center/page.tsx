"use client";

import { useState } from 'react';
import { ArrowLeft, Mail, Phone, MessageCircle, Send, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    category: 'general',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create mailto link with form data
    const subject = encodeURIComponent(`[${formData.category.toUpperCase()}] ${formData.subject}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Category: ${formData.category}\n\n` +
      `Message:\n${formData.message}`
    );
    
    const mailtoLink = `mailto:support@pulsenow.io?subject=${subject}&body=${body}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show success message
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen inset-0 -z-10">
        <header className="border-b border-zinc-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <Link href="/" className="inline-flex items-center text-zinc-400 hover:text-white transition-colors duration-200 mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Help Center
            </Link>
            <h1 className="text-3xl font-bold text-white">Contact Support</h1>
          </div>
        </header>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/20 rounded-full mb-6">
              <CheckCircle className="w-8 h-8 text-green-500" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">Message Sent Successfully!</h2>
            <p className="text-zinc-400 mb-8 max-w-md mx-auto">
              Your email client should have opened with your message. If not, please send your message manually to support@pulsenow.io
            </p>
            <div className="space-y-4">
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    category: 'general',
                    message: ''
                  });
                }}
                className="inline-flex items-center px-6 py-3 bg-white text-black rounded-lg hover:bg-zinc-100 transition-colors duration-200 font-medium"
              >
                Send Another Message
              </button>
              <div className="block">
                <Link
                  href="/"
                  className="inline-flex items-center px-6 py-3 border border-zinc-700 text-white rounded-lg hover:bg-zinc-800 transition-colors duration-200"
                >
                  Return to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen inset-0 -z-10">
      <header className="border-b border-zinc-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {/* <Link href="/" className="inline-flex items-center text-zinc-400 hover:text-white transition-colors duration-200 mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Help Center
          </Link> */}
          <h1 className="text-3xl sm:text-5xl font-semibold mb-8 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">Contact Support</h1>
          <p className="text-zinc-400">Get in touch with our support team</p>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-strecth">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="border border-zinc-800 rounded-lg p-8 h-full">
              <h2 className="text-xl font-semibold text-white mb-6">Send us a message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-transparent border border-zinc-700 rounded-lg text-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-200"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-transparent border border-zinc-700 rounded-lg text-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-200"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                <div className="bg-transparent">
                  <label htmlFor="category" className="block text-sm font-medium text-zinc-300 mb-2">
                    Category *
                  </label>
                  <select
                    id="category"
                    name="category"
                    required
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-transparent border border-zinc-700 rounded-lg text-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-200"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="technical">Technical Support</option>
                    <option value="billing">Billing & Payments</option>
                    <option value="account">Account Management</option>
                    <option value="security">Security & Privacy</option>
                    <option value="feature">Feature Request</option>
                    <option value="bug">Bug Report</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-zinc-300 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-transparent border border-zinc-700 rounded-lg text-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-200"
                    placeholder="Brief description of your inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-zinc-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-transparent border border-zinc-700 rounded-lg text-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Please provide as much detail as possible about your inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center bg-transparent border border-zinc-700 justify-center space-x-2 px-6 py-4 text-white rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
        <div className="lg:col-span-1">
            <div className="flex flex-col justify-between h-full space-y-8">
              {/* Contact Methods */}
              <div className="bg-transparent border border-zinc-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Other Ways to Reach Us</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Mail className="w-5 h-5 text-zinc-400 mt-1" />
                    <div>
                      <div className="font-medium text-white">Email</div>
                      <div className="text-sm text-zinc-400">support@pulsenow.io</div>
                      <div className="text-xs text-zinc-500 mt-1">We typically respond within 24 hours</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <MessageCircle className="w-5 h-5 text-zinc-400 mt-1" />
                    <div>
                      <div className="font-medium text-white">Live Chat</div>
                      <div className="text-sm text-zinc-400">Available 24/7</div>
                      <div className="text-xs text-zinc-500 mt-1">Instant support for urgent issues</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 text-zinc-400 mt-1" />
                    <div>
                      <div className="font-medium text-white">Phone Support</div>
                      <div className="text-sm text-zinc-400">Mon-Fri, 9AM-6PM EST</div>
                      <div className="text-xs text-zinc-500 mt-1">For premium subscribers</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tips */}
              <div className="bg-transparent border border-zinc-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Tips for Faster Support</h3>
                
                <ul className="space-y-2 text-sm text-zinc-400">
                  <li>• Include relevant account information</li>
                  <li>• Describe steps you've already tried</li>
                  <li>• Be specific about error messages</li>
                  <li>• Choose the most relevant category</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}