import { useState, useEffect } from 'react';
import { 
  Phone, Clock, Search, MapPin, Mail, Menu, X, 
  CheckCircle, Scale, Gavel, FileText, Users, 
  Briefcase, Building2, ArrowLeft, 
  Linkedin, Twitter, Instagram, Quote, Star
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";


// --- بيانات العلامة التجارية ---
const BRAND = {
  name: "دار القانون",
  slogan: "للمحاماة والاستشارات القانونية",
  phone: "+201110546863",
  whatsapp: "01110546863",
  email: "info@dar-alqanoon.sa",
  address: "المملكة العربية السعودية – الرياض"
};

// --- بيانات السلايدر (متحرك) ---
const SLIDES = [
  {
    id: 1,
    image: "https://qabasksa.com/wp-content/uploads/2025/01/%D8%A7%D9%84%D9%85%D8%AD%D8%A7%D9%85%D8%A7%D8%A9-%D9%81%D9%8A-%D8%A7%D9%84%D8%B3%D8%B9%D9%88%D8%AF%D9%8A%D8%A9%D8%B4%D8%B1%D9%88%D8%B7%D9%87%D8%A7-%D9%88%D8%A3%D9%87%D9%85-%D8%AA%D9%81%D8%A7%D8%B5%D9%8A%D9%84%D9%87%D8%A7-copy-2.jpg",
    title: "مرحباً بكم في دار القانون",
    subtitle: "نصنع من التفاصيل فرقاً.. ونحمي حقوقكم بأعلى معايير الاحترافية",
    button: "اتصل بنا"
  },
  {
    id: 2,
    image: "https://cnn-arabic-images.cnn.io/cloudinary/image/upload/w_1920,h_1080,c_fill,q_auto,g_center/cnnarabic/2021/01/13/images/174855.jpg",
    title: "خبرة قضائية عريقة",
    subtitle: "نخبة من المحامين والمستشارين ذوي الخبرة في المحاكم السعودية",
    button: "خدماتنا"
  },
  {
    id: 3,
    image: "https://mohami-riyadh.com/wp-content/uploads/2022/01/%D9%85%D8%AD%D8%A7%D9%85%D9%8A-%D8%A8%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6-2.webp",
    title: "رؤية قانونية للمستقبل",
    subtitle: "ندعم قطاع الأعمال والشركات بحلول قانونية تواكب رؤية 2030",
    button: "احجز موعد"
  }
];

// --- 1. Top Bar ---
const TopBar = () => (
  <div className="bg-[#231f20] text-gray-300 py-3 text-xs md:text-sm border-b border-white/10 relative z-20">
    <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-2">
      <div className="flex items-center gap-4">
        <div className="flex gap-2">
          {[FaTwitter, FaLinkedinIn, FaInstagram].map((Icon, i) => (
  <a key={i} className="p-1.5 text-gray-300 hover:text-white">
    <Icon size={14} />
  </a>
))}

        </div>
      </div>
      <div className="flex items-center gap-6">
        <a href={`tel:${BRAND.phone}`} className="flex items-center gap-2 hover:text-[#b59530] transition-colors">
          <Phone size={14} className="text-[#b59530]" />
          <span dir="ltr" className="font-sans font-bold">{BRAND.phone}</span>
        </a>
        <div className="hidden md:flex items-center gap-2">
          <Clock size={14} className="text-[#b59530]" />
          <span>8 ص - 5 م (الأحد - الخميس)</span>
        </div>
      </div>
    </div>
  </div>
);

// --- 2. Header ---
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex flex-col">
               <h1 className="text-2xl font-bold text-[#231f20]">{BRAND.name}</h1>
               <span className="text-[10px] text-[#b59530] font-bold tracking-wider">{BRAND.slogan}</span>
            </div>
          </div>

          {/* Nav */}
          <nav className="hidden lg:flex items-center gap-8 font-bold text-sm text-[#231f20]">
            {['الرئيسية', 'حول دار القانون', 'الخدمات', 'الباقات', 'الأخبار', 'المدونة', 'اتصل بنا'].map((item, i) => (
              <a key={i} href={`#${item.replace(/\s+/g, '-')}`} className="relative py-2 hover:text-[#b59530] transition-colors group">
                {item}
                <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-[#b59530] transition-all group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <button className="text-gray-600 hover:text-[#b59530] transition-colors">
              <Search size={20} />
            </button>
            <a href={`https://wa.me/${BRAND.whatsapp}`} target="_blank" className="bg-[#b59530] text-white px-6 py-2.5 rounded-sm font-bold text-sm hover:bg-[#231f20] transition-colors shadow-lg">
              اطلب استشارة
            </a>
          </div>

          <button className="lg:hidden text-[#231f20]" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="lg:hidden bg-white border-t border-gray-100 overflow-hidden">
            <div className="flex flex-col p-4">
              {['الرئيسية', 'حول دار القانون', 'الخدمات', 'الباقات', 'اتصل بنا'].map((item, i) => (
                <a key={i} href="#" className="py-3 border-b border-gray-50 text-gray-700 font-medium hover:text-[#b59530]">
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

// --- 3. Hero Slider (Alive & Animated) ---
const HeroSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % SLIDES.length);
    }, 6000); 
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[700px] bg-[#202020] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ scale: 1, opacity: 0.5 }}
          animate={{ scale: 1.1, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 6, ease: "linear" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${SLIDES[index].image})` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
              exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
            }}
          >
            <motion.h2 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="text-2xl md:text-3xl font-light text-gray-200 mb-4"
            >
              {BRAND.name} للمحاماة
            </motion.h2>
            
            <motion.h1 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="text-4xl md:text-7xl font-bold text-white mb-6 leading-tight"
            >
              {SLIDES[index].title}
            </motion.h1>
            
            <motion.div 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="w-24 h-1 bg-[#b59530] mx-auto mb-8"
            ></motion.div>

            <motion.p 
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="text-lg md:text-xl text-gray-300 mb-10 font-medium max-w-2xl mx-auto"
            >
              {SLIDES[index].subtitle}
            </motion.p>
            
            <motion.a 
              variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } }}
              href={`https://wa.me/${BRAND.whatsapp}`} 
              className="inline-block bg-[#b59530] text-white px-10 py-4 rounded-sm font-bold text-lg hover:bg-white hover:text-[#b59530] transition-all shadow-xl"
            >
              {SLIDES[index].button}
            </motion.a>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
        {SLIDES.map((_, i) => (
          <button 
            key={i} 
            onClick={() => setIndex(i)}
            className={`h-2 rounded-full transition-all duration-300 ${i === index ? 'w-10 bg-[#b59530]' : 'w-3 bg-white/50 hover:bg-white'}`}
          />
        ))}
      </div>
    </section>
  );
};

// --- 4. Intro ---
const Intro = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-4">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 border-4 border-[#b59530] transform translate-x-4 translate-y-4 rounded-lg hidden md:block"></div>
            <img src="https://yessom.sa/wp-content/uploads/2025/08/salahbg.png" alt="Lawyer" className="relative z-10 max-w-full h-auto drop-shadow-2xl rounded-lg" />
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 text-right"
        >
          <h4 className="text-gray-500 font-bold mb-2">المحامي / [اسم المحامي]</h4>
          <div className="w-16 h-1 bg-[#b59530] mb-6"></div>
          <h2 className="text-3xl font-bold text-[#231f20] mb-6 leading-snug">
            في عالم المحاماة التفاصيل تصنع الفرق، ومن هذا الإيمان نكرس خبراتنا لنقدم لكم حلولاً قانونية ترتقي بثقتكم بنا.
          </h2>
          <h3 className="text-xl font-bold text-[#b59530] mb-8">رئيس {BRAND.name} للمحاماة</h3>
          <img src="https://png.pngtree.com/png-vector/20240628/ourmid/pngtree-signature-isolated-the-signature-is-neatly-written-in-black-ink-the-png-image_12728547.png" alt="Signature" className="h-16 opacity-70" />
        </motion.div>
      </div>
    </div>
  </section>
);

// --- 5. Services ---
const Services = () => {
  const services = [
    { title: "التحكيم", icon: Scale },
    { title: "التوثيق الإلكتروني", icon: FileText },
    { title: "خدمات الشركات", icon: Building2 },
    { title: "الأحوال الشخصية", icon: Users },
    { title: "صياغة العقود", icon: Briefcase },
    { title: "القضايا العمالية", icon: Users },
    { title: "الاستشارات المتخصصة", icon: Phone },
    { title: "القضايا الجنائية", icon: Gavel },
    { title: "إدارة الأوقاف", icon: CheckCircle },
  ];

  return (
    <section className="py-24 bg-[#f9f9f9]" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#231f20] mb-4 relative inline-block">
            خدماتنا القانونية
            <span className="block w-1/2 h-1 bg-[#b59530] mx-auto mt-2"></span>
          </h2>
          <p className="text-gray-600 mt-4 leading-relaxed">
            في {BRAND.name}، نلتزم بتقديم خدمات قانونية متكاملة باحترافية عالية.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -10 }}
              className="bg-white p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group text-center rounded-lg"
            >
              <div className="w-16 h-16 bg-[#f9f9f9] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#b59530] transition-colors">
                <service.icon size={30} className="text-[#231f20] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-[#231f20] mb-4">{service.title}</h3>
              <a href="#" className="inline-block bg-[#b59530] text-white px-6 py-2 rounded-full text-sm font-bold opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all">
                المزيد حول الخدمة
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- 6. Why Us ---
const WhyUs = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-4 text-center">
      <div className="mb-12">
        <span className="text-[#b59530] text-sm font-bold tracking-widest">خبرتنا تتحدث عنا</span>
        <h2 className="text-3xl font-bold text-[#231f20] mt-2">لماذا تختار {BRAND.name} ؟</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
        <motion.div whileHover={{ scale: 1.02 }} className="bg-[#231f20] p-8 text-white text-right rounded-lg shadow-lg">
          <p className="text-lg leading-loose">
            أكثر من عشر سنوات من الخبرة القانونية تجعلنا شريكك القانوني الثابت كالجبل؛ نحمي حقوقك، ونحوّل كل تحدٍ يواجهك اليوم إلى فرصة تصنع مستقبل آمن.
          </p>
        </motion.div>
        <motion.div whileHover={{ scale: 1.02 }} className="bg-[#f4f4f4] p-8 text-[#231f20] text-right rounded-lg shadow-lg border border-gray-200">
          <p className="text-lg leading-loose">
            اختيارك لنا هو اختيار لقيمٍ نعيشها في كل يوم؛ فنحن نولي التفاصيل عناية، ونحفظ الخصوصية، ونعمل معك بوضوح ومصداقية.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-gray-100 pt-10">
        {[
          { num: "10,000+", label: "عدد الدعاوى القضائية" },
          { num: "10 مليار+", label: "مبالغ قضايا التركات" },
          { num: "13,000+", label: "عدد الاستشارات القانونية" },
        ].map((stat, i) => (
          <div key={i} className="group">
            <h3 className="text-4xl font-bold text-[#b59530] mb-2 font-sans group-hover:scale-110 transition-transform">{stat.num}</h3>
            <p className="text-gray-500 font-bold">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// --- 7. Newsletter ---
const Newsletter = () => (
  <section className="py-16 bg-[#231f20] text-white">
    <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-8">
      <div className="text-right flex-1">
        <h3 className="text-2xl font-bold mb-2 border-r-4 border-[#b59530] pr-4">القائمة البريدية القانونية</h3>
        <p className="text-gray-400 mt-2 text-sm">
          "معرفتك القانونية تبدأ بخطوة… اشترك في قائمتنا البريدية لتصلك المقالات الحصرية."
        </p>
      </div>
      <div className="flex-1 w-full lg:w-auto">
        <form className="flex gap-2">
          <input 
            type="email" 
            placeholder="البريد الإلكتروني" 
            className="w-full px-4 py-3 text-black rounded-sm focus:outline-none"
          />
          <button className="bg-[#b59530] text-white px-8 py-3 font-bold hover:bg-white hover:text-[#b59530] transition-colors rounded-sm">
            سجل الآن
          </button>
        </form>
      </div>
    </div>
  </section>
);

// --- 8. Testimonials ---
const Testimonials = () => (
  <section className="py-24 bg-white">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-[#231f20]">آراء عملائنا</h2>
        <div className="w-20 h-1 bg-[#b59530] mx-auto mt-4"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[1, 2, 3].map((i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -5 }}
            className="bg-[#f9f9f9] p-8 rounded-lg text-center relative mt-10 hover:shadow-lg transition-shadow border border-gray-100"
          >
            <div className="w-20 h-20 bg-white border-4 border-[#b59530] rounded-full mx-auto -mt-16 flex items-center justify-center mb-4 shadow-sm">
              <Quote size={32} className="text-[#b59530]" />
            </div>
            <div className="flex justify-center gap-1 text-[#b59530] mb-4">
              {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={16} fill="currentColor" />)}
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-4 italic">
              "خدمة ممتازة واحترافية عالية. الفريق كان متجاوباً جداً وساعدني في حل قضيتي بوقت قياسي. أنصح بالتعامل معهم."
            </p>
            <h5 className="font-bold text-[#231f20]">عميل مميز</h5>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// --- 9. Team ---
const Team = () => {
  const members = [
    { name: "تميم الهذلي", role: "السكرتارية القانونية" },
    { name: "حامد الهذلي", role: "إدارة العمليات" },
    { name: "فهد الهوساوي", role: "الإدارة المالية" },
    { name: "فراس خان", role: "الإدارة القانونية" }
  ];

  return (
    <section className="py-20 bg-[#f9f9f9]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#231f20]">فريق عمل {BRAND.name}</h2>
          <div className="w-20 h-1 bg-[#b59530] mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {members.map((m, i) => (
            <motion.div key={i} whileHover={{ y: -5 }} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
              <div className="h-64 bg-gray-200 overflow-hidden relative">
                <img 
                  src={`https://yessom.sa/wp-content/uploads/2025/08/تميم-الهذلي.jpg`} 
                  onError={(e) => (e.currentTarget.src = 'https://via.placeholder.com/400x500?text=Team+Member')}
                  alt={m.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="font-bold text-[#231f20] text-lg">{m.name}</h3>
                <p className="text-sm text-gray-500 mt-1">{m.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- 10. Blog ---
const Blog = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-[#231f20]">مدونة {BRAND.name}</h2>
        <div className="w-20 h-1 bg-[#b59530] mx-auto mt-4"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          "الجريمة الصامتة في النظام السعودي: التخبيب",
          "كيف يتم الطلاق في السعودية عبر ناجز؟",
          "رفع دعوى مطالبة مالية: الشروط والإجراءات"
        ].map((title, i) => (
          <div key={i} className="bg-white rounded-lg overflow-hidden group cursor-pointer border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="h-48 bg-gray-300 relative overflow-hidden">
               <img src="https://yessom.sa/wp-content/uploads/2025/12/التخبيب-600x400.png" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Blog" />
            </div>
            <div className="p-6">
              <span className="text-xs text-[#b59530] font-bold block mb-2">مقالات قانونية</span>
              <h3 className="font-bold text-[#231f20] text-lg mb-4 line-clamp-2 group-hover:text-[#b59530] transition-colors">{title}</h3>
              <span className="text-gray-400 text-xs">24 ديسمبر 2025</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// --- 11. Partners ---
const Partners = () => (
  <div className="py-10 bg-gray-50 text-center border-t">
    <div className="container mx-auto px-4">
      <h4 className="text-gray-400 font-bold mb-8 uppercase tracking-widest text-sm">شركاء النجاح</h4>
      {/* Scrolling Marquee Effect */}
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 duration-500">
         <img src="https://yessom.sa/wp-content/uploads/2025/08/Untitled-4-copy-150x150.png" alt="Partner 1" className="h-12 w-auto object-contain" />
         <img src="https://yessom.sa/wp-content/uploads/2025/08/moh-150x150.png" alt="Partner 2" className="h-12 w-auto object-contain" />
         <img src="https://yessom.sa/wp-content/uploads/2025/08/bs-150x150.png" alt="Partner 3" className="h-12 w-auto object-contain" />
         <img src="https://yessom.sa/wp-content/uploads/2025/08/bsf1-150x150.png" alt="Partner 4" className="h-12 w-auto object-contain" />
      </div>
    </div>
  </div>
);

// --- 12. Footer ---
const Footer = () => (
  <footer className="bg-[#1a1a1a] text-white pt-20 pb-10 border-t-4 border-[#b59530]">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 text-sm text-gray-400">
        <div>
          <h4 className="text-white font-bold text-lg mb-6 relative inline-block pb-2 border-b border-gray-700">عن الشركة</h4>
          <p className="leading-loose mb-6">
            “{BRAND.name}” ليس مجرد اسم، بل هو وعدٌ بالثبات، ورمز للثقة تُبنى عليها شراكتنا مع عملائنا في كل خطوة قانونية.
          </p>
          <img src="https://i.ibb.co/6cjqZpcV/logo-lw.png" className="h-10 grayscale brightness-200" alt="Logo" />
        </div>
        <div>
          <h4 className="text-white font-bold text-lg mb-6 relative inline-block pb-2 border-b border-gray-700">روابط هامة</h4>
          <ul className="space-y-3">
            {['الرئيسية', 'حول الشركة', 'الخدمات', 'الباقات', 'اتصل بنا'].map(l => (
              <li key={l}><a href="#" className="hover:text-[#b59530] transition-colors flex items-center gap-2"><ArrowLeft size={12}/> {l}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold text-lg mb-6 relative inline-block pb-2 border-b border-gray-700">الخدمات</h4>
          <ul className="space-y-3">
            {['التحكيم', 'التوثيق', 'الشركات', 'الأحوال الشخصية'].map(l => (
              <li key={l}><a href="#" className="hover:text-[#b59530] transition-colors flex items-center gap-2"><ArrowLeft size={12}/> {l}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold text-lg mb-6 relative inline-block pb-2 border-b border-gray-700">تواصل معنا</h4>
          <ul className="space-y-4">
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-[#b59530]" />
              <span className="text-white">الرقم الموحد:</span> <a href={`tel:${BRAND.phone}`} dir="ltr">{BRAND.phone}</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-[#b59530]" />
              <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={16} className="text-[#b59530] mt-1" />
              <span>{BRAND.address}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-800 pt-8 text-center text-xs">
        <p>© 2025 جميع الحقوق محفوظة لشركة {BRAND.name}.</p>
      </div>
    </div>
  </footer>
);

// --- Main App Component ---
function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-right" dir="rtl">
      <TopBar />
      <Header />
      <HeroSlider />
      <Intro />
      <Services />
      <WhyUs />
      <Newsletter />
      <Testimonials />
      <Team />
      <Blog />
      <Partners />
      <Footer />
      <a 
        href={`https://wa.me/${BRAND.whatsapp}`} 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-3 rounded-full shadow-2xl hover:bg-[#128C7E] transition-all transform hover:scale-110 flex items-center gap-2 group"
      >
        <Phone size={24} fill="currentColor" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap text-sm font-bold">تواصل معنا</span>
      </a>
    </div>
  );
}

export default App;