import { useState } from 'react';
import { Heart, Calendar, Users, MessageCircle, CheckCircle } from 'lucide-react';

export function RSVP() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    guests: '1',
    attendance: '',
    dietary: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('RSVP submitted:', formData);
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (submitted) {
    return (
      <div className="py-20 bg-gradient-to-br from-[#f8faf8] to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-3xl p-12 shadow-xl">
              <div className="w-20 h-20 bg-gradient-to-br from-[#576250] to-[#687760] rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h2 className="font-['Segoe_UI:Bold',_sans-serif] text-[#576250] text-[32px] mb-4">
                Vielen Dank!
              </h2>
              <p className="font-['Segoe_UI:Regular',_sans-serif] text-[#90998b] text-[18px] leading-relaxed">
                Eure Anmeldung ist bei uns eingegangen. Wir freuen uns riesig darauf, 
                diesen besonderen Tag mit euch zu feiern! 💕
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20 bg-gradient-to-br from-[#f8faf8] to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#576250]/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
            <Calendar className="w-4 h-4 text-[#576250]" />
            <span className="font-['Segoe_UI:Regular',_sans-serif] text-[#576250] text-[16px]">
              Anmeldung
            </span>
          </div>
          
          <h2 className="font-['Segoe_UI:Bold',_sans-serif] text-[#576250] text-[42px] mb-4">
            RSVP
          </h2>
          <p className="font-['Segoe_UI:Regular',_sans-serif] text-[#90998b] text-[18px] max-w-2xl mx-auto">
            Bitte gebt uns bis zum 1. Juni 2026 Bescheid, ob ihr dabei sein könnt
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block font-['Segoe_UI:Bold',_sans-serif] text-[#576250] text-[16px] mb-2">
                  Name(n) *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-4 border-2 border-[#576250]/20 rounded-xl focus:border-[#576250] focus:outline-none font-['Segoe_UI:Regular',_sans-serif] text-[16px] transition-colors"
                  placeholder="Max und Maria Mustermann"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block font-['Segoe_UI:Bold',_sans-serif] text-[#576250] text-[16px] mb-2">
                  E-Mail *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-4 border-2 border-[#576250]/20 rounded-xl focus:border-[#576250] focus:outline-none font-['Segoe_UI:Regular',_sans-serif] text-[16px] transition-colors"
                  placeholder="max.mustermann@email.de"
                />
              </div>

              {/* Attendance */}
              <div>
                <label className="block font-['Segoe_UI:Bold',_sans-serif] text-[#576250] text-[16px] mb-2">
                  Könnt ihr dabei sein? *
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <label className="relative">
                    <input
                      type="radio"
                      name="attendance"
                      value="yes"
                      onChange={handleChange}
                      className="sr-only"
                    />
                    <div className={`p-4 border-2 rounded-xl cursor-pointer transition-all ${formData.attendance === 'yes' ? 'border-[#576250] bg-[#576250]/10' : 'border-[#576250]/20 hover:border-[#576250]/40'}`}>
                      <div className="flex items-center gap-2">
                        <Heart className="w-5 h-5 text-[#576250]" />
                        <span className="font-['Segoe_UI:Regular',_sans-serif] text-[#576250] text-[16px]">
                          Ja, wir kommen!
                        </span>
                      </div>
                    </div>
                  </label>
                  
                  <label className="relative">
                    <input
                      type="radio"
                      name="attendance"
                      value="no"
                      onChange={handleChange}
                      className="sr-only"
                    />
                    <div className={`p-4 border-2 rounded-xl cursor-pointer transition-all ${formData.attendance === 'no' ? 'border-[#576250] bg-[#576250]/10' : 'border-[#576250]/20 hover:border-[#576250]/40'}`}>
                      <div className="flex items-center gap-2">
                        <MessageCircle className="w-5 h-5 text-[#576250]" />
                        <span className="font-['Segoe_UI:Regular',_sans-serif] text-[#576250] text-[16px]">
                          Leider nicht
                        </span>
                      </div>
                    </div>
                  </label>
                </div>
              </div>

              {formData.attendance === 'yes' && (
                <>
                  {/* Number of Guests */}
                  <div>
                    <label className="block font-['Segoe_UI:Bold',_sans-serif] text-[#576250] text-[16px] mb-2">
                      Anzahl Personen
                    </label>
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full p-4 border-2 border-[#576250]/20 rounded-xl focus:border-[#576250] focus:outline-none font-['Segoe_UI:Regular',_sans-serif] text-[16px] transition-colors"
                    >
                      {[1, 2, 3, 4, 5, 6].map(num => (
                        <option key={num} value={num}>{num} Person{num > 1 ? 'en' : ''}</option>
                      ))}
                    </select>
                  </div>

                  {/* Dietary Requirements */}
                  <div>
                    <label className="block font-['Segoe_UI:Bold',_sans-serif] text-[#576250] text-[16px] mb-2">
                      Besondere Ernährungswünsche
                    </label>
                    <input
                      type="text"
                      name="dietary"
                      value={formData.dietary}
                      onChange={handleChange}
                      className="w-full p-4 border-2 border-[#576250]/20 rounded-xl focus:border-[#576250] focus:outline-none font-['Segoe_UI:Regular',_sans-serif] text-[16px] transition-colors"
                      placeholder="z.B. vegetarisch, vegan, Allergien..."
                    />
                  </div>
                </>
              )}

              {/* Message */}
              <div>
                <label className="block font-['Segoe_UI:Bold',_sans-serif] text-[#576250] text-[16px] mb-2">
                  Nachricht an uns
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full p-4 border-2 border-[#576250]/20 rounded-xl focus:border-[#576250] focus:outline-none font-['Segoe_UI:Regular',_sans-serif] text-[16px] transition-colors resize-none"
                  placeholder="Hier könnt ihr uns eine liebe Nachricht hinterlassen..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#576250] to-[#687760] text-white p-4 rounded-xl hover:from-[#687760] hover:to-[#798770] transition-all duration-300 font-['Segoe_UI:Bold',_sans-serif] text-[18px] shadow-lg hover:shadow-xl"
              >
                Anmeldung absenden
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}