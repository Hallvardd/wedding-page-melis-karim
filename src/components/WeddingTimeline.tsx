import { Clock, Heart, Utensils, Music, Camera } from 'lucide-react';

export function WeddingTimeline() {
  const timelineEvents = [
    {
      time: '16:00',
      title: 'Empfang & Sekt',
      description: 'Herzlicher Empfang unserer Gäste mit einem Glas Sekt',
      icon: <Heart className="w-5 h-5" />,
      color: 'from-[#f8faf8] to-[#eef2ee]'
    },
    {
      time: '17:00',
      title: 'Trauzeremonie',
      description: 'Die feierliche Zeremonie in der wunderschönen Siegelsbacher Mühle',
      icon: <Heart className="w-5 h-5" />,
      color: 'from-[#576250] to-[#687760]',
      isMain: true
    },
    {
      time: '18:00',
      title: 'Fotografien & Feier',
      description: 'Zeit für Fotos mit Familie und Freunden sowie gemütliches Beisammensein',
      icon: <Camera className="w-5 h-5" />,
      color: 'from-[#f8faf8] to-[#eef2ee]'
    },
    {
      time: '19:00',
      title: 'Festliches Dinner',
      description: 'Gemeinsames Dinner mit köstlichen Speisen und herzlichen Reden',
      icon: <Utensils className="w-5 h-5" />,
      color: 'from-[#f8faf8] to-[#eef2ee]'
    },
    {
      time: '22:00',
      title: 'Tanz & Feier',
      description: 'Ausgelassene Feier mit Musik und Tanz bis in die frühen Morgenstunden',
      icon: <Music className="w-5 h-5" />,
      color: 'from-[#f8faf8] to-[#eef2ee]'
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-white to-[#f8faf8]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-['Segoe_UI:Bold',_sans-serif] text-[#576250] text-[42px] mb-4">
            Ablauf des Hochzeitstages
          </h2>
          <p className="font-['Segoe_UI:Regular',_sans-serif] text-[#90998b] text-[18px] max-w-2xl mx-auto">
            Hier findet ihr den geplanten Ablauf unseres besonderen Tages
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-[#576250]/20"></div>
            
            {timelineEvents.map((event, index) => (
              <div key={index} className="relative flex items-center mb-12 last:mb-0">
                <div className={`flex-1 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 order-2'}`}>
                  <div className={`bg-gradient-to-br ${event.color} rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 ${event.isMain ? 'ring-2 ring-[#576250]/20' : ''}`}>
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`p-2 rounded-full ${event.isMain ? 'bg-white text-[#576250]' : 'bg-[#576250] text-white'}`}>
                        {event.icon}
                      </div>
                      <div className={`font-['Segoe_UI:Bold',_sans-serif] ${event.isMain ? 'text-white' : 'text-[#576250]'} text-[20px]`}>
                        {event.title}
                      </div>
                    </div>
                    <p className={`font-['Segoe_UI:Regular',_sans-serif] ${event.isMain ? 'text-white/90' : 'text-[#90998b]'} text-[16px] leading-relaxed`}>
                      {event.description}
                    </p>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <div className={`w-16 h-16 rounded-full ${event.isMain ? 'bg-[#576250]' : 'bg-white border-4 border-[#576250]'} shadow-lg flex items-center justify-center`}>
                    <div className={`font-['Segoe_UI:Bold',_sans-serif] ${event.isMain ? 'text-white' : 'text-[#576250]'} text-[12px] text-center leading-tight`}>
                      {event.time.split(':').map((part, i) => (
                        <div key={i}>{part}{i === 0 && ':'}</div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className={`flex-1 ${index % 2 === 0 ? 'pl-8 order-2' : 'pr-8'}`}>
                  {/* Empty space for alternating layout */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}