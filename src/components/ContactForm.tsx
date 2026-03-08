import { useState, FormEvent } from 'react';
import { Send } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { supabase } from '../lib/supabase';

export function ContactForm() {
  const { language, t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const { error } = await supabase.from('contact_submissions').insert([
        {
          name: formData.name,
          email: formData.email,
          company: formData.company || null,
          phone: formData.phone || null,
          message: formData.message,
          language: language.toUpperCase(),
        },
      ]);

      if (error) throw error;

      setStatus('success');
      setFormData({ name: '', email: '', company: '', phone: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1a1a1a]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t('contact_title')}
          </h2>
          <p className="text-xl text-[#00d4ff]">{t('contact_subtitle')}</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-[#2a2a2a] border border-[#00d4ff]/20 rounded-lg p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-white font-medium mb-2">
                {t('form_name')} *
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-[#1a1a1a] border border-[#00d4ff]/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00d4ff] transition-colors"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-white font-medium mb-2">
                {t('form_email')} *
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-[#1a1a1a] border border-[#00d4ff]/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00d4ff] transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="company" className="block text-white font-medium mb-2">
                {t('form_company')}{' '}
                <span className="text-[#00d4ff]">*</span>
              </label>
              <input
                type="text"
                id="company"
                required
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full bg-[#1a1a1a] border border-[#00d4ff]/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00d4ff] transition-colors"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-white font-medium mb-2">
                {t('form_phone')}{' '}
                <span className="text-[#00d4ff]">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-[#1a1a1a] border border-[#00d4ff]/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00d4ff] transition-colors"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-white font-medium mb-2">
              {t('form_message')} *
            </label>
            <textarea
              id="message"
              required
              rows={6}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-[#1a1a1a] border border-[#00d4ff]/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00d4ff] transition-colors resize-none"
            />
          </div>

          {status === 'success' && (
            <div className="bg-green-500/10 border border-green-500/50 rounded-lg p-4 text-green-400">
              {t('form_success')}
            </div>
          )}

          {status === 'error' && (
            <div className="bg-red-500/10 border border-red-500/50 rounded-lg p-4 text-red-400">
              {t('form_error')}
            </div>
          )}

          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full bg-gradient-to-r from-[#00d4ff] to-[#0088cc] text-[#1a1a1a] px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-[#00d4ff]/50 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
          >
            <span>{status === 'submitting' ? t('form_submitting') : t('form_submit')}</span>
            <Send className="w-5 h-5" />
          </button>
        </form>
      </div>
    </section>
  );
}
