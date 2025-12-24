import React, { useState, useEffect } from 'react';
import { 
  Phone, Clock, Search, MapPin, Mail, Menu, X, 
  CheckCircle, Scale, Gavel, FileText, Users, 
  Briefcase, Building2, ChevronLeft, ArrowLeft, 
  Star, Quote, Linkedin, Twitter, Instagram
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- بيانات العلامة التجارية ---
const BRAND = {
  name: "دار القانون",
  phone: "+201110546863",
  email: "info@dar-alqanoon.sa",
  address: "الرياض، طريق الملك فهد، برج العدالة"
};

// --- بيانات السلايدر ---
const SLIDES = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1512453979798-5ea904ac6605?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80", 
    title: "نصنع الفرق في التفاصيل",
    subtitle: "شريكك القانوني الموثوق.. نقدم حلولاً مبتكرة تحمي مصالحك وتضمن حقوقك."
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80", 
    title: "خبرة قضائية عريقة",
    subtitle: "نخبة من المحامين والمستشارين ذوي الخبرة في المحاكم السعودية."
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80", 
    title: "رؤية قانونية للمستقبل",
    subtitle: "ندعم قطاع الأعمال والشركات بحلول قانونية تواكب رؤية المملكة 2030."
  }
];

// --- 1. Top Bar ---
const TopBar = () => (
  <div className="bg-[#1a1a1a] text-white/70 py-2 text-xs font-medium border-b border-white/5 hidden md:block">
    <div className="container mx-auto px-4 flex justify-between items-center">
      <div className="flex items-center gap-6">
        <a href={`tel:${BRAND.phone}`} className="flex items-center gap-2 hover:text-[#c5a059] transition-colors">
          <Phone size={14} className="text-[#c5a059]" />
          <span dir="ltr">{BRAND.phone}</span>
        </a>
        <div className="flex items-center gap-2">
          <Clock size={14} className="text-[#c5a059]" />
          <span>8:00 ص - 5:00 م (الأحد - الخميس)</span>
        </div>
      </div>
      <div className="flex gap-4">
        {[Twitter, Linkedin, Instagram].map((Icon, i) => (
          <a key={i} href="#" className="hover:text-[#c5a059] transition-colors"><Icon size={14} /></a>
        ))}
      </div>
    </div>
  </div>
);

// --- 2. Navbar ---
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'}`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#c5a059] rounded-lg flex items-center justify-center text-white shadow-lg">
              <Scale size={24} />
            </div>
            <div>
              <h1 className={`text-xl font-bold leading-none ${scrolled ? 'text-[#231f20]' : 'text-white'}`}>دار القانون</h1>
              <span className={`text-[10px] tracking-wider font-bold ${scrolled ? 'text-gray-500' : 'text-white/70'}`}>للمحاماة والاستشارات</span>
            </div>
          </div>

          <div className={`hidden lg:flex items-center gap-8 text-sm font-bold ${scrolled ? 'text-[#231f20]' : 'text-white'}`}>
            {['الرئيسية', 'من نحن', 'الخدمات', 'فريق العمل', 'المدونة'].map((item) => (
              <a key={item} href={`#${item.replace(' ', '-')}`} className="relative group overflow-hidden">
                {item}
                <span className="absolute bottom-0 right-0 w-full h-0.5 bg-[#c5a059] transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <a href="#contact" className="bg-[#c5a059] text-white px-6 py-2.5 rounded shadow-lg hover:bg-[#b08d4b] transition-all text-sm font-bold">
              اطلب استشارة
            </a>
          </div>

          <button onClick={() => setMobileMenu(true)} className={`lg:hidden ${scrolled ? 'text-[#231f20]' : 'text-white'}`}>
            <Menu size={28} />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileMenu && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setMobileMenu(false)} className="fixed inset-0 bg-black/60 z-[60] backdrop-blur-sm" />
            <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: "spring", damping: 25 }} className="fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white z-[70] shadow-2xl p-6">
              <div className="flex justify-between items-center mb-8">
                <h3 className="font-bold text-xl text-[#231f20]">القائمة</h3>
                <button onClick={() => setMobileMenu(false)} className="p-2 hover:bg-gray-100 rounded-full"><X /></button>
              </div>
              <div className="flex flex-col gap-4">
                {['الرئيسية', 'من نحن', 'الخدمات', 'فريق العمل', 'اتصل بنا'].map((item, i) => (
                  <a key={i} href="#" onClick={() => setMobileMenu(false)} className="text-lg font-medium text-gray-700 hover:text-[#c5a059] border-b border-gray-50 pb-3 flex justify-between">
                    {item} <ChevronLeft size={16} className="text-gray-300" />
                  </a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

// --- 3. Hero Slider (Centered Text) ---
const HeroSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIndex((prev) => (prev + 1) % SLIDES.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[100vh] w-full bg-[#111] overflow-hidden" id="الرئيسية">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${SLIDES[index].image})` }}
        >
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 z-10 flex items-center justify-center text-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -30, opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col items-center"
              >
                <div className="inline-flex items-center gap-2 mb-6 px-4 py-1 rounded-full border border-[#c5a059]/30 bg-black/20 backdrop-blur-sm">
                  <span className="w-2 h-2 rounded-full bg-[#c5a059] animate-pulse"></span>
                  <span className="text-[#c5a059] font-bold uppercase tracking-widest text-xs">دار القانون للمحاماة</span>
                </div>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
                  {SLIDES[index].title}
                </h1>
                <p className="text-lg md:text-2xl text-gray-200 mb-10 leading-relaxed font-light max-w-2xl mx-auto">
                  {SLIDES[index].subtitle}
                </p>
                <div className="flex gap-4">
                  <a href="#contact" className="bg-[#c5a059] hover:bg-white hover:text-[#231f20] text-white px-10 py-4 rounded font-bold transition-all flex items-center gap-2">
                    ابدأ الآن <ArrowLeft size={20} />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- 4. Intro/About ---
const AboutSection = () => (
  <section className="py-24 bg-white overflow-hidden" id="من-نحن">
    <div className="container mx-auto px-4">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <div className="w-full lg:w-1/2 relative">
          <div className="absolute -top-4 -right-4 w-full h-full border-2 border-[#c5a059] rounded-2xl hidden md:block"></div>
          <img src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="About" className="w-full rounded-2xl shadow-2xl relative z-10" />
        </div>
        <div className="w-full lg:w-1/2">
          <h4 className="text-[#c5a059] font-bold text-sm uppercase tracking-wider mb-2">من نحن</h4>
          <h2 className="text-4xl font-bold text-[#231f20] mb-6 leading-snug">نقدم لكم الحماية القانونية بأعلى معايير <span className="text-[#c5a059] underline decoration-2 underline-offset-4">الاحترافية</span></h2>
          <p className="text-gray-600 text-lg leading-loose mb-8 text-justify">دار القانون ليست مجرد مكتب محاماة، بل هي شريك استراتيجي يهدف إلى حماية مصالحك. نؤمن بأن كل قضية تحمل في طياتها تحدياً فريداً، ولذلك نخصص لكل عميل استراتيجية خاصة تناسب احتياجاته.</p>
          <div className="flex flex-col gap-4 mb-8">
            {['سرية تامة للمعلومات', 'دقة في الإجراءات والمواعيد', 'شفافية كاملة في الأتعاب'].map((text, i) => (
              <div key={i} className="flex items-center gap-3"><CheckCircle size={20} className="text-[#c5a059]" /><span className="font-medium text-gray-700">{text}</span></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

// --- 5. Services ---
const Services = () => {
  const items = [
    { title: "التحكيم التجاري", icon: Scale },
    { title: "التوثيق الإلكتروني", icon: FileText },
    { title: "تأسيس الشركات", icon: Building2 },
    { title: "الأحوال الشخصية", icon: Users },
    { title: "قسمة التركات", icon: Briefcase },
    { title: "القضايا الجنائية", icon: Gavel },
  ];

  return (
    <section className="py-24 bg-gray-50 relative" id="الخدمات">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-[#c5a059] font-bold tracking-widest text-sm uppercase">مجالات الممارسة</span>
          <h2 className="text-4xl font-bold text-[#231f20] mt-2">خدمات قانونية شاملة</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <motion.div key={i} whileHover={{ y: -10 }} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-[#c5a059]/20 group">
              <div className="w-14 h-14 bg-[#c5a059]/10 text-[#c5a059] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#c5a059] group-hover:text-white transition-colors duration-300"><item.icon size={28} /></div>
              <h3 className="text-xl font-bold text-[#231f20] mb-3">{item.title}</h3>
              <p className="text-gray-500 text-sm mb-6 leading-relaxed">خدمات متخصصة تقدم بعناية فائقة لضمان حقوقكم وتحقيق مصالحكم بأعلى معايير الجودة.</p>
              <a href="#" className="flex items-center text-[#c5a059] font-bold text-sm group-hover:gap-2 transition-all">اقرأ المزيد <ArrowLeft size={16} className="mr-1" /></a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- 6. Partners (Images - NEW) ---
const Partners = () => {
  // روابط شعارات حقيقية لجهات سعودية (ويكيبيديا/مصادر مفتوحة)
  const partners = [
    { name: "Vision 2030", src: "https://upload.wikimedia.org/wikipedia/en/d/d1/Saudi_Vision_2030_logo.svg" },
    { name: "Ministry of Justice", src: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Ministry_of_Justice_%28Saudi_Arabia%29.svg" },
    { name: "Monshaat", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Monshaat_Logo.svg/1200px-Monshaat_Logo.svg.png" },
    { name: "SDAIA", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/SDAIA.svg/1200px-SDAIA.svg.png" },
    { name: "PIF", src: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/Public_Investment_Fund_logo.svg/1200px-Public_Investment_Fund_logo.svg.png" },
  ];

  return (
    <section className="py-16 bg-white border-t border-gray-100 overflow-hidden">
      <div className="container mx-auto px-4 mb-10 text-center">
        <h4 className="text-gray-400 font-bold tracking-[0.2em] text-sm mb-8">شركاء النجاح والثقة</h4>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
        {partners.map((p, i) => (
          <img key={i} src={p.src} alt={p.name} className="h-16 md:h-20 w-auto object-contain" />
        ))}
      </div>
    </section>
  );
};

// --- 7. Team (New Section) ---
const Team = () => {
  const team = [
    { name: "المحامي / عبدالله الشمري", role: "المدير العام", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80" },
    { name: "المستشار / فهد القحطاني", role: "رئيس قسم التقاضي", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80" },
    { name: "المحامية / سارة الغامدي", role: "مستشارة قانونية", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80" },
    { name: "أ. محمد الدوسري", role: "إدارة العلاقات العامة", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80" },
  ];

  return (
    <section className="py-24 bg-gray-50" id="فريق-العمل">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-[#c5a059] font-bold tracking-widest text-sm uppercase">فريق العمل</span>
          <h2 className="text-4xl font-bold text-[#231f20] mt-2">نخبة الكفاءات القانونية</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <motion.div 
              key={i} 
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg group relative"
            >
              <div className="h-80 overflow-hidden relative">
                <img src={member.img} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6 gap-4">
                  <Twitter className="text-white hover:text-[#c5a059] cursor-pointer" size={20} />
                  <Linkedin className="text-white hover:text-[#c5a059] cursor-pointer" size={20} />
                </div>
              </div>
              <div className="p-6 text-center border-b-4 border-transparent group-hover:border-[#c5a059] transition-colors bg-white relative z-10">
                <h3 className="text-lg font-bold text-[#231f20]">{member.name}</h3>
                <p className="text-sm text-[#c5a059] mt-1 font-medium">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- 8. Stats ---
const Stats = () => (
  <section className="py-20 bg-[#231f20] text-white bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {[{ num: "+15", label: "سنة خبرة" }, { num: "+10K", label: "قضية ناجحة" }, { num: "+50M", label: "ريال مبالغ مستردة" }, { num: "99%", label: "نسبة رضا العملاء" }].map((stat, i) => (
          <div key={i} className="p-6 border border-white/10 rounded-lg hover:border-[#c5a059] transition-colors bg-white/5 backdrop-blur-sm">
            <h3 className="text-4xl md:text-5xl font-bold text-[#c5a059] mb-2">{stat.num}</h3>
            <p className="text-gray-400 font-medium">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// --- 9. Footer ---
const Footer = () => (
  <footer className="bg-[#151515] text-white pt-20 pb-10 border-t-4 border-[#c5a059]">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <div className="bg-[#c5a059] p-1.5 rounded"><Scale size={24} className="text-white"/></div>
            <h2 className="text-2xl font-bold">دار القانون</h2>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">منارة قانونية رائدة في المملكة، نسعى لتحقيق العدالة وحفظ الحقوق عبر خدمات نوعية تلبي تطلعاتكم.</p>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-6 text-white">روابط سريعة</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            {['الرئيسية', 'من نحن', 'الخدمات', 'فريق العمل'].map(l => (
              <li key={l}><a href="#" className="hover:text-[#c5a059] transition-colors flex items-center gap-2"><ChevronLeft size={14}/> {l}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-6 text-white">تواصل معنا</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li className="flex items-start gap-3"><MapPin className="text-[#c5a059] mt-1 shrink-0" size={18} /><span>{BRAND.address}</span></li>
            <li className="flex items-center gap-3"><Phone className="text-[#c5a059] shrink-0" size={18} /><span dir="ltr">{BRAND.phone}</span></li>
            <li className="flex items-center gap-3"><Mail className="text-[#c5a059] shrink-0" size={18} /><span>{BRAND.email}</span></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p>© 2025 جميع الحقوق محفوظة لشركة دار القانون.</p>
      </div>
    </div>
  </footer>
);

// --- Main App ---
function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-right" dir="rtl">
      <TopBar />
      <Navbar />
      <HeroSlider />
      <AboutSection />
      <Services />
      <Team />
      <Stats />
      <Partners />
      <Footer />
      <a href="https://wa.me/966500000000" target="_blank" rel="noopener noreferrer" className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#128C7E] transition-transform hover:scale-110 flex items-center justify-center">
        <Phone size={28} fill="currentColor" />
      </a>
    </div>
  );
}

export default App;