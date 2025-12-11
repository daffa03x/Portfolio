"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Loader2 } from "lucide-react";
import { toast } from "sonner";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/movgkybz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Message sent successfully!", {
          description: "Thanks for reaching out! I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        const data = await response.json();
        if (Object.hasOwn(data, 'errors')) {
           toast.error(data["errors"].map((error: any) => error["message"]).join(", "));
        } else {
           toast.error("Oops! There was a problem submitting your form");
        }
      }
    } catch (error) {
       toast.error("Oops! Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-foreground">Get In Touch</h2>
          <p className="text-muted-foreground text-lg">
            Have a project in mind or just want to say hi? I'd love to hear from you.
          </p>
        </div>

        <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-8 bg-card border border-border/50 p-8 md:p-12 rounded-2xl shadow-xl shadow-primary/5"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative group">
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="peer w-full px-4 py-3 border-2 border-border rounded-xl outline-none transition-all placeholder-transparent bg-background/50 focus:border-primary focus:ring-4 focus:ring-primary/10"
                    placeholder="Name"
                />
                <label 
                    htmlFor="name"
                    className="absolute left-4 top-3 text-muted-foreground text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-placeholder-shown:text-muted-foreground peer-focus:-top-3 peer-focus:text-xs peer-focus:text-primary bg-card px-1"
                >
                    Name
                </label>
            </div>
             <div className="relative group">
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="peer w-full px-4 py-3 border-2 border-border rounded-xl outline-none transition-all placeholder-transparent bg-background/50 focus:border-primary focus:ring-4 focus:ring-primary/10"
                    placeholder="Email"
                />
                <label 
                    htmlFor="email"
                    className="absolute left-4 top-3 text-muted-foreground text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-placeholder-shown:text-muted-foreground peer-focus:-top-3 peer-focus:text-xs peer-focus:text-primary bg-card px-1"
                >
                    Email
                </label>
            </div>
          </div>

          <div className="relative group">
            <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="peer w-full px-4 py-3 border-2 border-border rounded-xl outline-none transition-all placeholder-transparent bg-background/50 focus:border-primary focus:ring-4 focus:ring-primary/10 resize-none"
                placeholder="Message"
            />
            <label 
                htmlFor="message"
                className="absolute left-4 top-3 text-muted-foreground text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-placeholder-shown:text-muted-foreground peer-focus:-top-3 peer-focus:text-xs peer-focus:text-primary bg-card px-1"
            >
                Message
            </label>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full md:w-auto px-8 py-4 bg-primary text-primary-foreground font-medium rounded-xl shadow-lg shadow-primary/25 hover:shadow-xl hover:scale-105 transition-all flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed min-w-[160px]"
          >
            {isSubmitting ? (
                <Loader2 className="animate-spin h-5 w-5" />
            ) : (
                <>
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                </>
            )}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
