"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import {
  Shield,
  Camera,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Menu,
  X,
  Wrench,
  Wifi,
  Sun,
  Network,
  DoorOpen,
  Star,
  Award,
  Clock,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const WhatsAppIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488" />
  </svg>
)

const services = [
  {
    icon: <Camera className="w-10 h-10" />,
    title: "توريد وتركيب كاميرات المراقبة",
    description: "توريد وتركيب جميع أنواع كاميرات المراقبة الداخلية والخارجية بأحدث التقنيات العالمية",
    image: "/img/cctv-installation.jpg",
    whatsappMessage: "السلام عليكم، أريد الاستفسار عن خدمة توريد وتركيب كاميرات المراقبة",
    details:
      "نوفر لكم أحدث أنواع كاميرات المراقبة بدقة عالية HD و 4K مع إمكانية الرؤية الليلية وخاصية التسجيل المستمر. فريقنا المتخصص يضمن تركيب احترافي يغطي جميع الزوايا المطلوبة.",
  },
  {
    icon: <Wrench className="w-10 h-10" />,
    title: "صيانة كاميرات المراقبة",
    description: "خدمات صيانة شاملة وإصلاح فوري لجميع أنواع كاميرات المراقبة على مدار الساعة",
    image: "/img/security-camera-1.jpg",
    whatsappMessage: "السلام عليكم، أريد طلب خدمة صيانة كاميرات المراقبة",
    details:
      "نقدم خدمات صيانة دورية وعاجلة لجميع أنظمة المراقبة. فريقنا الفني متاح على مدار الساعة لحل أي مشكلة فنية وضمان عمل نظام المراقبة بكفاءة تامة.",
  },
  {
    icon: <Wifi className="w-10 h-10" />,
    title: "كاميرات واي فاي لاسلكية",
    description: "كاميرات مراقبة لاسلكية بتقنية WiFi للمراقبة الذكية والتحكم عن بُعد",
    image: "/img/security-camera-2.jpg",
    whatsappMessage: "السلام عليكم، أريد الاستفسار عن كاميرات واي فاي اللاسلكية",
    details:
      "كاميرات ذكية تعمل بتقنية WiFi تتيح لك المراقبة من أي مكان في العالم عبر تطبيق الهاتف. سهلة التركيب والاستخدام مع إمكانية التسجيل على السحابة.",
  },
  {
    icon: <Sun className="w-10 h-10" />,
    title: "كاميرات طاقة شمسية",
    description: "كاميرات مراقبة تعمل بالطاقة الشمسية - مثالية للمناطق النائية والمواقع البعيدة",
    image: "/img/security-camera-3.jpg",
    whatsappMessage: "السلام عليكم، أريد الاستفسار عن كاميرات الطاقة الشمسية",
    details:
      "حل مثالي للمناطق التي لا تصلها الكهرباء. كاميرات مزودة بألواح شمسية وبطاريات قوية تعمل على مدار الساعة دون انقطاع مع إمكانية الاتصال عبر 4G.",
  },
  {
    icon: <Network className="w-10 h-10" />,
    title: "تركيب شبكات الإنترنت",
    description: "تصميم وتركيب شبكات الإنترنت السلكية واللاسلكية للمنازل والشركات",
    image: "/img/surveillance-system.jpg",
    whatsappMessage: "السلام عليكم، أريد طلب خدمة تركيب شبكات الإنترنت",
    details:
      "نقدم حلول شبكات كاملة تشمل تصميم وتركيب وصيانة شبكات الإنترنت السلكية واللاسلكية. نضمن سرعة واستقرار الاتصال مع تغطية شاملة لجميع المساحات.",
  },
  {
    icon: <DoorOpen className="w-10 h-10" />,
    title: "تركيب انتركم للأبواب",
    description: "أنظمة اتصال داخلي (إنتركوم) متطورة للمباني السكنية والتجارية",
    image: "/img/camera-monitoring.jpg",
    whatsappMessage: "السلام عليكم، أريد الاستفسار عن تركيب أنظمة الانتركم للأبواب",
    details:
      "أنظمة انتركوم حديثة بشاشات عالية الوضوح مع إمكانية فتح الأبواب عن بعد. مثالية للفلل والعمارات والشركات مع إمكانية التسجيل والحفظ.",
  },
]

export default function SmartSecurityLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [selectedService, setSelectedService] = useState<(typeof services)[0] | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleServiceClick = (service: (typeof services)[0]) => {
    setSelectedService(service)
    setIsDialogOpen(true)
  }

  const features = [
    "مراقبة 24/7 بدون انقطاع",
    "تركيب احترافي بأيدي خبراء",
    "ضمان شامل على جميع المنتجات",
    "صيانة فورية وسريعة",
    "أسعار تنافسية ومناسبة",
    "خدمة عملاء متميزة",
  ]

  return (
    <div className="min-h-screen bg-background text-foreground" dir="rtl">
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrollY > 20
          ? "bg-background/95 backdrop-blur-xl shadow-xl border-b border-border/50"
          : "bg-background/60 backdrop-blur-md"
          }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20 lg:h-24">
            {/* Logo Section */}
            <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
              <div className="relative w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/img/al-ameed-logo-new.png"
                  alt="مؤسسة العميد"
                  fill
                  className="object-contain p-1"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground leading-tight">
                  مؤسسة العميد
                </h1>
                <p className="text-xs sm:text-sm lg:text-base text-primary font-medium">للأنظمة الأمنية</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {[
                { id: "home", label: "الرئيسية" },
                { id: "services", label: "خدماتنا" },
                { id: "about", label: "من نحن" },
                { id: "gallery", label: "معرض الأعمال" },
                { id: "contact", label: "اتصل بنا" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="px-4 xl:px-6 py-2 text-sm xl:text-base font-medium text-foreground hover:text-primary hover:bg-primary/10 rounded-lg transition-all duration-300"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Desktop CTA Button */}
            <div className="hidden lg:flex items-center gap-3">
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground px-6 py-2.5 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Phone className="w-4 h-4 ml-2" />
                اتصل الآن
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-foreground hover:text-primary hover:bg-primary/10 rounded-lg transition-all duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="القائمة"
            >
              {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden border-t border-border/50 bg-background/95 backdrop-blur-xl animate-fade-in">
              <nav className="flex flex-col py-4 space-y-1">
                {[
                  { id: "home", label: "الرئيسية" },
                  { id: "services", label: "خدماتنا" },
                  { id: "about", label: "من نحن" },
                  { id: "gallery", label: "معرض الأعمال" },
                  { id: "contact", label: "اتصل بنا" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="px-4 py-3 text-base font-medium text-foreground hover:text-primary hover:bg-primary/10 text-right rounded-lg transition-all duration-300"
                  >
                    {item.label}
                  </button>
                ))}
                <div className="px-4 pt-2">
                  <Button
                    onClick={() => scrollToSection("contact")}
                    className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground py-3 text-base font-semibold shadow-lg"
                  >
                    <Phone className="w-4 h-4 ml-2" />
                    اتصل الآن
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 sm:pt-28 lg:pt-32"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary to-background">
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
        </div>

        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-10 w-64 h-64 bg-primary/30 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float-delayed"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl animate-pulse-slow"></div>
        </div>

        <div className="relative z-10 container mx-auto px-3 sm:px-4 text-center">
          <div className="animate-fade-in-up">
            <div className="inline-block glass-dark rounded-full px-4 sm:px-8 py-2 sm:py-3 mb-6 sm:mb-8 border border-primary/20 animate-slide-in-right">
              <span className="text-primary-foreground text-sm sm:text-lg font-medium flex items-center justify-center">
                <Shield className="w-4 h-4 sm:w-6 sm:h-6 ml-2" />
                الخبرة والجودة في خدمات الأنظمة الأمنية
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 text-primary-foreground animate-slide-in-left">
              مؤسسة العميد
              <br />
              <span className="text-2xl sm:text-3xl md:text-5xl gradient-text">للأنظمة الأمنية</span>
            </h1>

            <div className="mb-6 sm:mb-8 space-y-3">
              <div className="inline-block glass-dark rounded-2xl px-4 sm:px-8 py-3 sm:py-4 border border-primary/20 mb-3">
                <p className="text-base sm:text-xl md:text-2xl text-primary-foreground font-bold">
                  🎥 توريد وتركيب جميع أنواع كاميرات المراقبة
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3 max-w-4xl mx-auto">
                <div className="glass-dark rounded-full px-3 sm:px-6 py-2 sm:py-3 border border-primary/20 stagger-item">
                  <span className="text-primary-foreground font-medium text-xs sm:text-base">
                    📡 كاميرات واي فاي لاسلكية
                  </span>
                </div>
                <div className="glass-dark rounded-full px-3 sm:px-6 py-2 sm:py-3 border border-primary/20 stagger-item">
                  <span className="text-primary-foreground font-medium text-xs sm:text-base">☀️ كاميرات طاقة شمسية</span>
                </div>
                <div className="glass-dark rounded-full px-3 sm:px-6 py-2 sm:py-3 border border-primary/20 stagger-item">
                  <span className="text-primary-foreground font-medium text-xs sm:text-base">🔧 صيانة كاميرات</span>
                </div>
                <div className="glass-dark rounded-full px-3 sm:px-6 py-2 sm:py-3 border border-primary/20 stagger-item">
                  <span className="text-primary-foreground font-medium text-xs sm:text-base">
                    🌐 تركيب شبكات الإنترنت
                  </span>
                </div>
                <div className="glass-dark rounded-full px-3 sm:px-6 py-2 sm:py-3 border border-primary/20 stagger-item">
                  <span className="text-primary-foreground font-medium text-xs sm:text-base">
                    🚪 تركيب انتركم للأبواب
                  </span>
                </div>
              </div>
            </div>

            <p className="text-base sm:text-xl md:text-2xl text-muted-foreground mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-4">
              نوفر لكم أحدث الحلول الأمنية المتكاملة بأعلى معايير الجودة والاحترافية
              <br className="hidden sm:block" />
              مع فريق متخصص وخبرة واسعة في مجال الأنظمة الأمنية
            </p>

            <div className="flex items-center justify-center gap-4 sm:gap-6 mb-12 sm:mb-16">
              <a href="https://wa.me/966561680280" target="_blank" rel="noopener noreferrer" className="group relative">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 pulse-ring">
                  <WhatsAppIcon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <div className="absolute -bottom-8 sm:-bottom-10 left-1/2 transform -translate-x-1/2 text-xs sm:text-sm text-muted-foreground font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  واتساب
                </div>
              </a>

              <a href="tel:0561680280" className="group relative">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 pulse-ring">
                  <Phone className="w-8 h-8 sm:w-10 sm:h-10 text-primary-foreground" />
                </div>
                <div className="absolute -bottom-8 sm:-bottom-10 left-1/2 transform -translate-x-1/2 text-xs sm:text-sm text-muted-foreground font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  اتصال مباشر
                </div>
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 px-4">
              <div className="glass-dark rounded-full px-3 sm:px-6 py-2 sm:py-3 border border-primary/20">
                <span className="text-primary-foreground font-medium text-xs sm:text-base">✓ جودة عالية</span>
              </div>
              <div className="glass-dark rounded-full px-3 sm:px-6 py-2 sm:py-3 border border-primary/20">
                <span className="text-primary-foreground font-medium text-xs sm:text-base">✓ أسعار منافسة</span>
              </div>
              <div className="glass-dark rounded-full px-3 sm:px-6 py-2 sm:py-3 border border-primary/20">
                <span className="text-primary-foreground font-medium text-xs sm:text-base">✓ خدمة 24/7</span>
              </div>
              <div className="glass-dark rounded-full px-3 sm:px-6 py-2 sm:py-3 border border-primary/20">
                <span className="text-primary-foreground font-medium text-xs sm:text-base">✓ ضمان شامل</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-12 sm:py-20 bg-muted/30">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-block glass rounded-full px-4 sm:px-6 py-2 mb-4 border border-border">
              <span className="text-primary text-xs sm:text-sm font-semibold">خدماتنا المتميزة</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-foreground px-4">
              حلول أمنية شاملة ومتكاملة
            </h2>
            <p className="text-base sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
              نقدم مجموعة واسعة من الخدمات الأمنية المتطورة بأحدث التقنيات العالمية
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                onClick={() => handleServiceClick(service)}
                className="bg-card border-border hover:border-primary/50 transition-all duration-500 group shadow-lg hover:shadow-2xl overflow-hidden card-hover cursor-pointer"
              >
                <div className="relative h-40 sm:h-48 overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent"></div>
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground shadow-lg">
                      {service.icon}
                    </div>
                  </div>
                </div>
                <CardContent className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Dialog for Service Details */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent
          className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto bg-gradient-to-br from-background via-background to-muted/20 border-2 border-primary/10"
          dir="rtl"
        >
          <DialogHeader>
            <DialogTitle className="text-2xl sm:text-3xl font-bold text-right flex items-center gap-3">
              <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary/70 rounded-2xl flex items-center justify-center text-white flex-shrink-0 shadow-lg">
                {selectedService?.icon}
              </div>
              <span className="bg-gradient-to-br from-foreground to-foreground/80 bg-clip-text text-transparent">
                {selectedService?.title}
              </span>
            </DialogTitle>
            <DialogDescription className="text-right text-base sm:text-lg leading-relaxed mt-4 text-muted-foreground">
              {selectedService?.description}
            </DialogDescription>
          </DialogHeader>

          <div className="mt-6">
            {selectedService?.image && (
              <div className="relative h-52 sm:h-64 rounded-2xl overflow-hidden mb-6 shadow-xl border-2 border-primary/10">
                <Image
                  src={selectedService.image || "/placeholder.svg"}
                  alt={selectedService.title}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            )}

            <div className="bg-gradient-to-br from-muted/70 to-muted/40 backdrop-blur-sm rounded-2xl p-5 mb-6 border border-primary/5 shadow-md">
              <h4 className="font-bold text-foreground mb-3 text-lg sm:text-xl flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                تفاصيل الخدمة:
              </h4>
              <p className="text-muted-foreground leading-relaxed text-base">{selectedService?.details}</p>
            </div>

            <div className="space-y-3">
              <a
                href={`https://wa.me/966561680280?text=${encodeURIComponent(selectedService?.whatsappMessage || "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full px-6 py-4 sm:py-5 bg-gradient-to-br from-green-500 via-green-600 to-green-700 hover:from-green-600 hover:to-green-800 rounded-2xl text-white font-bold text-base sm:text-lg transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl border border-green-400/20"
              >
                <WhatsAppIcon className="w-6 h-6 ml-3 animate-pulse" />
                تواصل معنا عبر واتساب
              </a>

              <a
                href="tel:0561680280"
                className="flex items-center justify-center w-full px-6 py-4 sm:py-5 bg-gradient-to-br from-primary via-primary/90 to-primary/80 hover:from-primary/90 hover:to-primary rounded-2xl text-primary-foreground font-bold text-base sm:text-lg transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl border border-primary/20"
              >
                <Phone className="w-5 h-5 ml-3" />
                اتصال مباشر: 0561680280
              </a>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Why Choose Us Section */}
      <section className="py-12 sm:py-20 bg-secondary relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-alameed-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 alameed'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="container mx-auto px-3 sm:px-4 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-block glass-dark rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-4 border border-primary/20">
              <span className="text-primary-foreground text-base sm:text-lg font-bold flex items-center justify-center">
                <Shield className="w-5 h-5 sm:w-6 sm:h-6 ml-2" />
                لماذا تختار مؤسسة العميد؟
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 text-primary-foreground px-4">
              الخبرة والاحترافية
              <br />
              <span className="text-2xl sm:text-3xl md:text-4xl text-primary">في خدمة الأنظمة الأمنية</span>
            </h2>
            <p className="text-base sm:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed px-4">
              نحن نقدم حلول أمنية متكاملة بأحدث التقنيات وأعلى معايير الجودة
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 mb-12 sm:mb-16 max-w-5xl mx-auto">
            <div className="glass-dark rounded-3xl p-6 sm:p-8 text-center border border-primary/20 hover:border-primary/50 transition-all duration-500 card-hover">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                <Award className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
              </div>
              <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">100%</div>
              <div className="text-primary-foreground font-medium text-sm sm:text-base">رضا العملاء</div>
            </div>
            <div className="glass-dark rounded-3xl p-6 sm:p-8 text-center border border-primary/20 hover:border-primary/50 transition-all duration-500 card-hover">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
              </div>
              <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">24/7</div>
              <div className="text-primary-foreground font-medium text-sm sm:text-base">دعم فني متواصل</div>
            </div>
            <div className="glass-dark rounded-3xl p-6 sm:p-8 text-center border border-primary/20 hover:border-primary/50 transition-all duration-500 card-hover">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                <Star className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
              </div>
              <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">10+</div>
              <div className="text-primary-foreground font-medium text-sm sm:text-base">سنوات خبرة</div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-3 sm:gap-4 glass-dark rounded-2xl p-4 sm:p-6 border border-primary/20 hover:border-primary/50 transition-all duration-500 card-hover"
              >
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-1" />
                <span className="text-primary-foreground text-base sm:text-lg">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-20 bg-background">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <div className="inline-block glass rounded-full px-4 sm:px-6 py-2 mb-4 sm:mb-6 border border-border">
                <span className="text-primary text-xs sm:text-sm font-semibold">من نحن</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-foreground">
                مؤسسة العميد للأنظمة الأمنية
              </h2>
              <p className="text-base sm:text-xl text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                نحن مؤسسة متخصصة في توفير أحدث الحلول الأمنية المتكاملة، من توريد وتركيب كاميرات المراقبة بجميع أنواعها
                إلى الصيانة الشاملة والدعم الفني المتواصل.
              </p>
              <p className="text-sm sm:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
                نفخر بتقديم أحدث التقنيات في مجال الأمن والمراقبة، بما في ذلك الكاميرات اللاسلكية والكاميرات التي تعمل
                بالطاقة الشمسية، بالإضافة إلى خدمات تركيب شبكات الإنترنت وأنظمة الانتركوم للأبواب.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-primary ml-2 flex-shrink-0 mt-1" />
                    <span className="text-foreground text-sm sm:text-base">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button
                  onClick={() => scrollToSection("services")}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg btn-scale"
                >
                  استكشف خدماتنا
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                </Button>
                <Button
                  onClick={() => scrollToSection("contact")}
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg btn-scale"
                >
                  اتصل بنا
                </Button>
              </div>
            </div>

            <div className="relative order-first lg:order-last">
              <div className="relative h-[300px] sm:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <Image src="/img/surveillance-system.jpg" alt="أنظمة المراقبة" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent"></div>

                <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 right-4 sm:right-8 grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="glass backdrop-blur-xl rounded-2xl p-4 sm:p-6 shadow-xl border border-border">
                    <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">100%</div>
                    <div className="text-foreground text-xs sm:text-sm">رضا العملاء</div>
                  </div>
                  <div className="glass backdrop-blur-xl rounded-2xl p-4 sm:p-6 shadow-xl border border-border">
                    <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">24/7</div>
                    <div className="text-foreground text-xs sm:text-sm">دعم فني</div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-3xl hidden sm:block"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary/30 rounded-full blur-3xl hidden sm:block"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-12 sm:py-20 bg-muted/30">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-block glass rounded-full px-4 sm:px-6 py-2 mb-4 border border-border">
              <span className="text-primary text-xs sm:text-sm font-semibold">معرض الأعمال</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-foreground">
              مشاريعنا المنجزة
            </h2>
            <p className="text-base sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
              نفخر بإنجاز العديد من المشاريع الأمنية المتميزة
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            {[
              {
                img: "/img/project-1.jpg",
                title: "مشروع كاميرات مراقبة - فيلا سكنية",
                desc: "تركيب 12 كاميرا مراقبة HD",
              },
              { img: "/img/project-2.jpg", title: "مشروع كاميرات واي فاي", desc: "نظام مراقبة لاسلكي متكامل" },
              { img: "/img/project-3.jpg", title: "مشروع كاميرات طاقة شمسية", desc: "كاميرات للمناطق النائية" },
            ].map((project, index) => (
              <Card
                key={index}
                className="bg-card border-border hover:border-primary/50 transition-all duration-500 group shadow-lg hover:shadow-2xl overflow-hidden card-hover"
              >
                <div className="relative h-48 sm:h-64 overflow-hidden">
                  <Image
                    src={project.img || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-primary-foreground">
                    <h3 className="text-lg sm:text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground">{project.desc}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-20 bg-background">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-block glass rounded-full px-4 sm:px-6 py-2 mb-4 border border-border">
              <span className="text-primary text-xs sm:text-sm font-semibold">تواصل معنا</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-foreground px-4">
              احصل على استشارة مجانية
            </h2>
            <p className="text-base sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
              فريق مؤسسة العميد جاهز لخدمتك وتقديم أفضل الحلول الأمنية المناسبة لاحتياجاتك
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 mb-8 sm:mb-12">
              <Card className="bg-card border-border hover:border-primary/50 transition-all duration-500 group shadow-lg hover:shadow-2xl card-hover">
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                    <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4">اتصل بنا</h4>
                  <a
                    href="tel:0561680280"
                    className="text-primary hover:text-primary/80 transition-colors text-base sm:text-lg font-medium block mb-2"
                  >
                    0561680280
                  </a>
                  <p className="text-muted-foreground text-xs sm:text-sm">متاح 24/7 للطوارئ</p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border hover:border-primary/50 transition-all duration-500 group shadow-lg hover:shadow-2xl card-hover">
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                    <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4">البريد الإلكتروني</h4>
                  <a
                    href="mailto:aleamid66@gmail.com"
                    className="text-primary hover:text-primary/80 transition-colors text-base sm:text-lg font-medium block mb-2 break-all"
                  >
                    aleamid66@gmail.com
                  </a>
                  <p className="text-muted-foreground text-xs sm:text-sm">نرد خلال 24 ساعة</p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border hover:border-primary/50 transition-all duration-500 group sm:col-span-2 lg:col-span-1 shadow-lg hover:shadow-2xl card-hover">
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                    <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4">موقعنا</h4>
                  <a
                    href="https://maps.google.com/?q=الرياض+شارع+العليا+جوار+برج+المملكة"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors block mb-1 text-sm sm:text-base"
                  >
                    الرياض . شارع العليا
                  </a>
                  <a
                    href="https://maps.google.com/?q=الرياض+شارع+العليا+جوار+برج+المملكة"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors block text-xs sm:text-sm"
                  >
                    جوار برج المملكة
                  </a>
                </CardContent>
              </Card>
            </div>

            {/* Quick Contact Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-8 sm:mb-12">
              <a
                href="tel:0561680280"
                className="flex items-center justify-center px-4 sm:px-6 py-4 bg-primary hover:bg-primary/90 rounded-xl text-primary-foreground font-medium text-sm sm:text-base transition-all duration-300 hover:scale-105 shadow-lg btn-scale"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                اتصال مباشر
              </a>
              <a
                href="https://wa.me/966561680280"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-4 sm:px-6 py-4 bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 rounded-xl text-white font-medium text-sm sm:text-base transition-all duration-300 hover:scale-105 shadow-lg btn-scale"
              >
                <WhatsAppIcon className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                واتساب
              </a>
              <a
                href="mailto:aleamid66@gmail.com"
                className="flex items-center justify-center px-4 sm:px-6 py-4 bg-secondary hover:bg-secondary/90 rounded-xl text-secondary-foreground font-medium text-sm sm:text-base transition-all duration-300 hover:scale-105 shadow-lg btn-scale"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                إرسال إيميل
              </a>
            </div>

            {/* Working Hours */}
            <div className="glass rounded-2xl p-6 sm:p-8 border border-border">
              <h4 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6 text-center">ساعات العمل</h4>
              <div className="space-y-3 sm:space-y-4 text-foreground max-w-md mx-auto">
                <div className="flex justify-between items-center p-3 sm:p-4 rounded-lg bg-muted/50">
                  <span className="font-medium text-sm sm:text-base">السبت - الخميس</span>
                  <span className="text-primary font-semibold text-sm sm:text-base">8:00 ص - 6:00 م</span>
                </div>
                <div className="flex justify-between items-center p-3 sm:p-4 rounded-lg bg-muted/50">
                  <span className="font-medium text-sm sm:text-base">الجمعة</span>
                  <span className="text-muted-foreground text-sm sm:text-base">مغلق</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary py-8 sm:py-12 border-t border-border">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
            <div>
              <div className="flex items-center gap-2 sm:gap-3 mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 relative flex-shrink-0">
                  <Image src="/img/al-ameed-logo-new.png" alt="مؤسسة العميد" fill className="object-contain" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-primary-foreground">مؤسسة العميد</h3>
                  <p className="text-xs sm:text-sm text-primary">للأنظمة الأمنية</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm sm:text-base mb-4 leading-relaxed">
                نوفر أحدث تقنيات المراقبة الأمنية والحماية الذكية لحماية ممتلكاتك وأحبائك بأعلى معايير الجودة.
              </p>
            </div>

            <div>
              <h4 className="text-base sm:text-lg font-bold text-primary-foreground mb-3 sm:mb-4">خدماتنا</h4>
              <ul className="space-y-2 text-muted-foreground text-sm sm:text-base">
                <li>
                  <Link href="#" className="hover:text-primary transition-colors duration-300">
                    توريد وتركيب الكاميرات
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary transition-colors duration-300">
                    صيانة كاميرات المراقبة
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary transition-colors duration-300">
                    كاميرات واي فاي وشمسية
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary transition-colors duration-300">
                    شبكات وانتركوم
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-base sm:text-lg font-bold text-primary-foreground mb-3 sm:mb-4">روابط مهمة</h4>
              <ul className="space-y-2 text-muted-foreground text-sm sm:text-base">
                <li>
                  <button
                    onClick={() => scrollToSection("about")}
                    className="hover:text-primary transition-colors duration-300"
                  >
                    من نحن
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("gallery")}
                    className="hover:text-primary transition-colors duration-300"
                  >
                    مشاريعنا
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="hover:text-primary transition-colors duration-300"
                  >
                    خدماتنا
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="hover:text-primary transition-colors duration-300"
                  >
                    اتصل بنا
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-base sm:text-lg font-bold text-primary-foreground mb-3 sm:mb-4">تواصل معنا</h4>
              <div className="space-y-2 sm:space-y-3 text-muted-foreground text-sm sm:text-base">
                <p className="flex items-center">
                  <Phone className="w-4 h-4 ml-2 text-primary flex-shrink-0" />
                  0561680280
                </p>
                <p className="flex items-center break-all">
                  <Mail className="w-4 h-4 ml-2 text-primary flex-shrink-0" />
                  aleamid66@gmail.com
                </p>
                <p className="flex items-start">
                  <MapPin className="w-4 h-4 ml-2 text-primary flex-shrink-0 mt-1" />
                  الرياض . شارع العليا جوار برج المملكة
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-6 sm:pt-8 text-center">
            <p className="text-muted-foreground text-sm sm:text-base">
              © 2026 مؤسسة العميد للأنظمة الأمنية. جميع الحقوق محفوظة.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
