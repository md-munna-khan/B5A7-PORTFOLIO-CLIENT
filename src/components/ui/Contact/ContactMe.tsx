"use client";

import Image from "next/image";
import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { toast } from "sonner";
import { Phone, Mail, MapPin } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

// ---------------- EmailMe Component ----------------
const EmailMe = () => {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    setLoading(true);

    emailjs
      .sendForm(
        "service_jatkb5q", // your EmailJS service ID
        "template_9cm39vo", // your EmailJS template ID
        form.current,
        "sW3GULe8T7Z0LRlHr" // your EmailJS public key
      )
      .then(
        () => {
          toast.success("✅ Message sent successfully!");
          form.current?.reset();
          setLoading(false);
        },
        (error) => {
          toast.error("❌ Failed to send message!");
          console.error(error.text);
          setLoading(false);
        }
      );
  };

  return (
    <Card className="shadow-xl border-primary/20">
      <CardHeader className="text-center">
        <div className="flex justify-center mb-2">
          <Mail className="w-8 h-8 text-primary" />
        </div>
        <CardTitle className="text-2xl text-primary font-bold">
          Send a Message
        </CardTitle>
        <CardDescription className=" mt-1">
          Fill out the form below and I’ll get back to you within 24 hours ✉️
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <Input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
          />
          <Input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
          />
          <Textarea
            name="message"
            placeholder="Your Message..."
            rows={5}
            required
          />
          <Button
            type="submit"
            className="w-full bg-primary  hover:bg-primary/90 transition-transform hover:scale-105 duration-300"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </CardContent>

      <CardFooter className="text-center text-sm ">
        Looking forward to hearing from you!
      </CardFooter>
    </Card>
  );
};

// ---------------- ContactMe Component ----------------
const ContactMe = () => {
  return (
    <section className="relative py-16  ">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-start gap-12">
        {/* Left Column: Map + Info */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start gap-8">
          {/* Map Image */}
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-primary/30">
            <Image
              src="/image.png"
              alt="World Map"
              width={500}
              height={400}
              className="rounded-2xl object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Contact Info */}
          <div className="space-y-4 text-center lg:text-left">
            <h1 className="text-4xl font-bold text-primary mb-2">
              Get In Touch
            </h1>
            <p className=" text-lg leading-relaxed">
              I’d love to hear from you! Whether you have a question, project idea,
              or just want to say hello — feel free to reach out.
            </p>

            <div className="space-y-3 ">
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-lg font-medium">+8801867418698</span>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-lg font-medium">munnamia0200@gmail.com</span>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-lg font-medium">Mirpur, Dhaka, Bangladesh</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Email Form */}
        <div className="w-full lg:w-1/2">
          <EmailMe />
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
