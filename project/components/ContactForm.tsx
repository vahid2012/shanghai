"use client";

import { useState } from "react";
import { MessageCircle, Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { SITE_CONFIG, EXTERNAL_LINKS } from "@/lib/constants";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError("لطفاً تمام فیلدها را پر کنید.");
      return;
    }
    setSubmitted(true);
    setError("");
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
          <Send size={28} className="text-green-600" />
        </div>
        <h3 className="text-xl font-bold text-navy-800 mb-2">
          پیام شما ارسال شد
        </h3>
        <p className="text-gray-600">
          تیم ما در اسرع وقت با شما تماس خواهد گرفت. برای پاسخ فوری از طریق
          واتساپ نیز در دسترس هستیم.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700 text-sm">
          {error}
        </div>
      )}
      <div>
        <label className="block text-sm font-medium text-navy-800 mb-2">
          نام و نام خانوادگی
        </label>
        <input
          type="text"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent transition-all"
          placeholder="نام خود را وارد کنید"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-navy-800 mb-2">
          ایمیل
        </label>
        <input
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent transition-all"
          placeholder="example@email.com"
          dir="ltr"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-navy-800 mb-2">
          پیام شما
        </label>
        <textarea
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          rows={5}
          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent transition-all resize-none"
          placeholder="پیام یا سوال خود را بنویسید..."
        />
      </div>
      <button
        type="submit"
        className="w-full flex items-center justify-center gap-2 bg-navy-800 hover:bg-navy-700 text-white px-6 py-3.5 rounded-lg font-medium transition-all hover:shadow-lg"
      >
        <Send size={18} />
        ارسال پیام
      </button>
    </form>
  );
}
