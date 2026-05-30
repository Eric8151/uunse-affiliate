import { useState } from "react";
import logo from "./assets/uunse-logo.png";

const FIRST_WITHDRAWAL_HASH =
  "0xa6dbd405164ce69b6e2e593bdccabcd95751073154398d0709d9407129a72db2";

const languages = [
  { code: "en", label: "EN", flag: "🇬🇧", name: "English" },
  { code: "fr", label: "FR", flag: "🇫🇷", name: "Français" },
  { code: "es", label: "ES", flag: "🇪🇸", name: "Español" },
  { code: "pt", label: "PT-BR", flag: "🇧🇷", name: "Português" },
  { code: "it", label: "IT", flag: "🇮🇹", name: "Italiano" },
  { code: "tr", label: "TR", flag: "🇹🇷", name: "Türkçe" },
  { code: "ru", label: "RU", flag: "🇷🇺", name: "Русский" },
  { code: "vi", label: "VI", flag: "🇻🇳", name: "Tiếng Việt" },
];

const copy = {
  en: {
    subtitle: "Worldwide Revenue Share Partnership",
    badge: "Global Affiliate Program",
    heroTitle: "Build Long-Term Revenue With UUNSE Affiliates",
    heroDesc:
      "A global affiliate partnership for traffic owners, betting communities, influencers, streamers, media buyers, and growth teams worldwide.",
    privateTerms:
      "Partnership terms are discussed privately based on traffic quality, market experience, and long-term cooperation potential.",
    contact: "Contact Affiliate Director",
    maxShare: "Maximum Revenue Share",
    commission: "Long-Term Affiliate Commission",
    stats: [
      ["Since 2022", "Stable Operations"],
      ["4+ Years", "Platform History"],
      ["Global", "Traffic Welcome"],
      ["USDT", "Settlement"],
    ],
    why: "Why Affiliates Choose UUNSE",
    cards: [
      ["Up To 50%", "Competitive revenue share for serious long-term partners."],
      ["1-Year Protection", "New affiliates have time to build and optimize traffic."],
      ["USDT Settlement", "Simple crypto settlement for global cooperation."],
      ["Direct Support", "Direct communication with affiliate management."],
    ],
    whoEyebrow: "Who We Partner With",
    who: "Built For Traffic Owners",
    whoDesc:
      "Partnership terms are discussed privately based on traffic quality, market experience, and long-term cooperation potential.",
    whoList: [
      ["✈", "Telegram Communities", "Group & channel owners"],
      ["☏", "WhatsApp Communities", "Group & channel owners"],
      ["🏆", "Sports Tipsters", "Prediction experts"],
      ["🎮", "Casino Streamers", "Casino content creators"],
      ["👥", "Influencers", "Social media creators"],
      ["⌕", "SEO Teams", "Organic traffic specialists"],
      ["📣", "Media Buyers", "Ads & paid traffic experts"],
      ["🤝", "Existing Affiliates", "Experienced partners"],
      ["🌐", "Traffic Owners", "All traffic sources welcome"],
    ],
    trustBadge: "Verified Platform History",
    trustTitle: "Trust Is Built One Withdrawal At A Time.",
    trustDesc:
      "UUNSE has been operating steadily since the summer of 2022. One of the earliest verified withdrawals was a small 3.5 USDT test withdrawal from an Indonesian user.",
    hashLabel: "Transaction Hash",
    amountLabel: "First Verified Withdrawal",
    amount: "3.5 USDT",
    amountMeta: "Indonesian User · Summer 2022",
    journey: "UUNSE Journey",
    journeyItems: [
      ["Summer 2022", "Launch", "UUNSE officially launched and began stable operations."],
      ["2022", "First Withdrawal", "First verified user withdrawal completed: 3.5 USDT."],
      ["2023–2025", "Growth", "Continuous platform growth and affiliate expansion."],
      ["2026", "Global Recruitment", "Global affiliate recruitment program launched."],
    ],
    director: "Affiliate Director",
    directorDesc: "Available on Telegram and X. Feel free to reach out for any partnership inquiries.",
    faq: "Frequently Asked Questions",
    faqs: [
      ["How long has UUNSE been operating?", "UUNSE has been operating steadily since the summer of 2022."],
      ["How are commissions paid?", "USDT is the only affiliate commission payment method."],
      ["Are partnership terms public?", "No. Detailed terms are discussed privately to protect existing partners and allow customized conditions."],
      ["Who can become an affiliate?", "Traffic owners, betting communities, influencers, streamers, media buyers, SEO teams, and experienced affiliates."],
      ["What traffic is accepted?", "Global traffic outside mainland China is welcome, subject to quality and compliance review."],
      ["How do I get started?", "Contact Erkin on Telegram or X to discuss your traffic source and cooperation plan."],
    ],
  },
  es: {
    subtitle: "Alianza Mundial de Revenue Share",
    badge: "Programa Global de Afiliados",
    heroTitle: "Construye Ingresos a Largo Plazo Con UUNSE Affiliates",
    heroDesc: "Una alianza global para dueños de tráfico, comunidades de apuestas, influencers, streamers, media buyers y equipos de crecimiento.",
    privateTerms: "Las condiciones se discuten en privado según calidad de tráfico, experiencia de mercado y potencial a largo plazo.",
    contact: "Contactar al Director de Afiliados",
    maxShare: "Revenue Share Máximo",
    commission: "Comisión a Largo Plazo",
    stats: [["Desde 2022", "Operación Estable"], ["4+ Años", "Historial"], ["Global", "Tráfico Bienvenido"], ["USDT", "Liquidación"]],
    why: "Por Qué Elegir UUNSE",
    cards: [["Hasta 50%", "Modelo competitivo para socios serios."], ["Protección 1 Año", "Tiempo para construir y optimizar tráfico."], ["Pago USDT", "Liquidación crypto simple."], ["Soporte Directo", "Comunicación directa con management."]],
    whoEyebrow: "Con Quién Trabajamos",
    who: "Diseñado Para Dueños de Tráfico",
    whoDesc: "Las condiciones se discuten en privado según calidad de tráfico, experiencia de mercado y potencial a largo plazo.",
    whoList: [["✈", "Comunidades Telegram", "Dueños de grupos y canales"], ["☏", "Comunidades WhatsApp", "Dueños de grupos"], ["🏆", "Tipsters Deportivos", "Expertos en predicciones"], ["🎮", "Streamers Casino", "Creadores de casino"], ["👥", "Influencers", "Creadores sociales"], ["⌕", "Equipos SEO", "Tráfico orgánico"], ["📣", "Media Buyers", "Ads y tráfico pago"], ["🤝", "Afiliados Existentes", "Socios con experiencia"], ["🌐", "Dueños de Tráfico", "Todo tráfico global"]],
    trustBadge: "Historial Verificado",
    trustTitle: "La Confianza Se Construye Retiro Tras Retiro.",
    trustDesc: "UUNSE opera desde el verano de 2022. Uno de los primeros retiros verificados fue una prueba de 3.5 USDT de un usuario indonesio.",
    hashLabel: "Hash de Transacción",
    amountLabel: "Primer Retiro Verificado",
    amount: "3.5 USDT",
    amountMeta: "Usuario Indonesio · Verano 2022",
    journey: "Trayectoria UUNSE",
    journeyItems: [["Verano 2022", "Lanzamiento", "UUNSE fue lanzado oficialmente."], ["2022", "Primer Retiro", "Primer retiro verificado: 3.5 USDT."], ["2023–2025", "Crecimiento", "Crecimiento y expansión de afiliados."], ["2026", "Reclutamiento Global", "Programa global de afiliados lanzado."]],
    director: "Director de Afiliados",
    directorDesc: "Disponible en Telegram y X para consultas de partnership.",
    faq: "Preguntas Frecuentes",
    faqs: [["¿Cuánto tiempo lleva operando UUNSE?", "Desde el verano de 2022."], ["¿Cómo se pagan las comisiones?", "Solo en USDT."], ["¿Las condiciones son públicas?", "No. Se discuten en privado."], ["¿Quién puede ser afiliado?", "Dueños de tráfico, comunidades, influencers, streamers, media buyers y SEO."], ["¿Qué tráfico se acepta?", "Tráfico global fuera de China continental, sujeto a revisión."], ["¿Cómo empiezo?", "Contacta a Erkin por Telegram o X."]],
  },
};

copy.fr = { ...copy.en, subtitle: "Partenariat Revenue Share Mondial", badge: "Programme d’Affiliation Global" };
copy.pt = { ...copy.en, subtitle: "Parceria Mundial de Revenue Share", badge: "Programa Global de Afiliados" };
copy.it = { ...copy.en, subtitle: "Partnership Revenue Share Mondiale", badge: "Programma Affiliati Globale" };
copy.tr = { ...copy.en, subtitle: "Dünya Çapında Revenue Share Ortaklığı", badge: "Global Affiliate Programı" };
copy.ru = { ...copy.en, subtitle: "Мировое Revenue Share Партнёрство", badge: "Глобальная Партнёрская Программа" };
copy.vi = { ...copy.en, subtitle: "Quan Hệ Đối Tác Revenue Share Toàn Cầu", badge: "Chương Trình Affiliate Toàn Cầu" };

function StatPill({ title, desc }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
      <div className="text-xl font-black text-amber-300">{title}</div>
      <div className="mt-1 text-sm text-slate-500">{desc}</div>
    </div>
  );
}

function SectionCard({ children, className = "" }) {
  return (
    <section className={`rounded-[2rem] border border-amber-400/20 bg-[#070b12]/90 shadow-2xl shadow-black/30 ${className}`}>
      {children}
    </section>
  );
}

function App() {
  const [lang, setLang] = useState("en");
  const t = copy[lang] || copy.en;

  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-hidden">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(245,158,11,0.18),transparent_25%),radial-gradient(circle_at_100%_10%,rgba(59,130,246,0.12),transparent_28%),radial-gradient(circle_at_50%_100%,rgba(245,158,11,0.08),transparent_30%)]" />
        <div className="absolute inset-0 opacity-[0.07] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:90px_90px]" />
      </div>

      <div className="relative mx-auto max-w-[1500px] px-4 py-6 md:px-6">
        <header className="mb-8 rounded-3xl border border-white/10 bg-black/60 px-5 py-4 backdrop-blur-xl">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-4">
              <img src={logo} alt="UUNSE Logo" className="h-12 w-12 rounded-full border border-amber-400/40" />
              <div>
                <div className="text-xl font-black">UUNSE Affiliate</div>
                <div className="text-xs text-amber-300/90">{t.subtitle}</div>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <select
                value={lang}
                onChange={(e) => setLang(e.target.value)}
                className="rounded-2xl border border-white/10 bg-black px-4 py-3 text-sm text-white outline-none transition hover:border-amber-400/50"
              >
                {languages.map((item) => (
                  <option key={item.code} value={item.code}>
                    {item.flag} {item.label} — {item.name}
                  </option>
                ))}
              </select>

              <a href="https://t.me/Erkin8151" target="_blank" rel="noopener noreferrer" className="rounded-2xl border border-white/10 px-4 py-3 text-center text-sm font-bold transition hover:border-amber-400/50">
                Telegram
              </a>
              <a href="https://x.com/Erkin_UUNSE" target="_blank" rel="noopener noreferrer" className="rounded-2xl border border-white/10 px-4 py-3 text-center text-sm font-bold transition hover:border-amber-400/50">
                X
              </a>
            </div>
          </div>
        </header>

        <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2rem] border border-amber-400/20 bg-[#070b12]/90 p-8 md:p-12">
            <div className="mb-7 inline-flex rounded-full border border-amber-400/25 bg-amber-400/10 px-4 py-2 text-sm font-bold text-amber-200">
              {t.badge}
            </div>

            <h1 className="max-w-4xl text-5xl font-black leading-[1.02] tracking-tight md:text-7xl">
              {t.heroTitle}
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
              {t.heroDesc}
            </p>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-500">
              {t.privateTerms}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href="https://t.me/Erkin8151" target="_blank" rel="noopener noreferrer" className="rounded-2xl bg-amber-400 px-8 py-4 text-center font-black text-black transition hover:bg-amber-300">
                {t.contact}
              </a>
              <a href="https://x.com/Erkin_UUNSE" target="_blank" rel="noopener noreferrer" className="rounded-2xl border border-white/10 px-8 py-4 text-center font-bold transition hover:border-amber-400/50">
                @Erkin_UUNSE
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-amber-400/20 bg-black/75 p-7 md:p-10">
            <div className="mx-auto mb-7 flex h-28 w-28 items-center justify-center rounded-full border border-amber-400/30 bg-white/[0.03]">
              <img src={logo} alt="UUNSE" className="h-20 w-20 rounded-full" />
            </div>

            <div className="text-center">
              <div className="text-xs font-bold uppercase tracking-[0.3em] text-amber-300">{t.maxShare}</div>
              <div className="mt-4 text-8xl font-black leading-none md:text-9xl">50%</div>
              <div className="mt-4 text-lg text-slate-400">{t.commission}</div>
            </div>

            <div className="mt-9 grid grid-cols-2 gap-3">
              {t.stats.map((item) => (
                <StatPill key={item[0]} title={item[0]} desc={item[1]} />
              ))}
            </div>
          </div>
        </section>

        <section className="mt-6 grid gap-6 lg:grid-cols-4">
          {t.cards.map((item) => (
            <div key={item[0]} className="rounded-[1.75rem] border border-white/10 bg-white/[0.035] p-6">
              <div className="text-2xl font-black text-amber-300">{item[0]}</div>
              <p className="mt-4 leading-7 text-slate-400">{item[1]}</p>
            </div>
          ))}
        </section>

        <SectionCard className="mt-6 p-7 md:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
            <div>
              <div className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-amber-300">{t.whoEyebrow}</div>
              <h2 className="text-4xl font-black tracking-tight md:text-6xl">{t.who}</h2>
              <div className="mt-5 h-1 w-20 rounded-full bg-amber-400" />
              <p className="mt-7 max-w-md text-lg leading-8 text-slate-400">{t.whoDesc}</p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {t.whoList.map((item) => (
                <div key={item[1]} className="flex min-h-[96px] items-center gap-4 rounded-2xl border border-white/10 bg-black/45 p-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-amber-400/35 bg-amber-400/10 text-2xl text-amber-300">
                    {item[0]}
                  </div>
                  <div>
                    <div className="font-black">{item[1]}</div>
                    <div className="mt-1 text-sm text-slate-500">{item[2]}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SectionCard>

        <section className="mt-6 grid gap-6 lg:grid-cols-[0.95fr_1.35fr]">
          <SectionCard className="p-7 md:p-10">
            <div className="grid gap-7 md:grid-cols-[96px_1fr]">
              <div className="hidden h-24 w-24 items-center justify-center rounded-full border border-amber-400/30 bg-amber-400/10 text-5xl md:flex">
                ✓
              </div>
              <div>
                <div className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-amber-300">{t.trustBadge}</div>
                <h2 className="text-3xl font-black leading-tight md:text-5xl">{t.trustTitle}</h2>
                <p className="mt-6 leading-8 text-slate-300">{t.trustDesc}</p>
              </div>
            </div>

            <div className="mt-7 grid gap-5 rounded-3xl border border-white/10 bg-black/55 p-5 md:grid-cols-[190px_1fr]">
              <div>
                <div className="text-sm text-slate-500">{t.amountLabel}</div>
                <div className="mt-2 text-4xl font-black text-amber-300">{t.amount}</div>
                <div className="mt-2 text-xs text-slate-500">{t.amountMeta}</div>
              </div>

              <div className="min-w-0 border-white/10 md:border-l md:pl-6">
                <div className="text-sm text-slate-500">{t.hashLabel}</div>
                <div className="mt-3 break-all font-mono text-sm leading-7 text-amber-200">{FIRST_WITHDRAWAL_HASH}</div>
              </div>
            </div>
          </SectionCard>

          <SectionCard className="p-7 md:p-10">
            <div className="text-center">
              <div className="mb-4 inline-flex rounded-full border border-amber-400/25 px-4 py-2 text-sm font-bold uppercase tracking-[0.2em] text-amber-300">
                {t.journey}
              </div>
              <h2 className="text-4xl font-black md:text-5xl">Our Journey</h2>
              <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-amber-400" />
            </div>

            <div className="relative mt-12 grid gap-6 md:grid-cols-4">
              <div className="absolute left-0 right-0 top-9 hidden h-px bg-amber-400/60 md:block" />
              {t.journeyItems.map((item, index) => (
                <div key={item[0]} className="relative text-center">
                  <div className="relative z-10 mx-auto flex h-18 w-18 items-center justify-center rounded-full border border-amber-400/50 bg-black text-3xl shadow-[0_0_25px_rgba(245,158,11,0.25)]">
                    {["🚀", "🛡", "📈", "🌐"][index] || "★"}
                  </div>
                  <div className="mt-6 rounded-2xl border border-white/10 bg-black/45 p-5">
                    <div className="text-sm font-black uppercase tracking-[0.16em] text-amber-300">{item[0]}</div>
                    <div className="mt-2 text-xl font-black">{item[1]}</div>
                    <p className="mt-3 text-sm leading-6 text-slate-400">{item[2]}</p>
                  </div>
                </div>
              ))}
            </div>
          </SectionCard>
        </section>

        <section className="mt-6 grid gap-6 lg:grid-cols-[0.95fr_1.35fr]">
          <SectionCard className="p-7 md:p-10">
            <div className="grid gap-6 md:grid-cols-[120px_1fr] md:items-center">
              <div className="flex h-28 w-28 items-center justify-center rounded-full border border-amber-400/30 bg-amber-400/10 text-5xl">
                👤
              </div>
              <div>
                <div className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-amber-300">{t.director}</div>
                <h2 className="text-4xl font-black">Erkin</h2>
                <p className="mt-3 leading-7 text-slate-400">{t.directorDesc}</p>
              </div>
            </div>

            <div className="mt-8 grid gap-4">
              <a href="https://t.me/Erkin8151" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/55 px-5 py-4 transition hover:border-amber-400/50">
                <span>
                  <span className="block text-sm text-slate-500">Telegram</span>
                  <span className="font-bold text-amber-300">@Erkin8151</span>
                </span>
                <span className="text-slate-500">Open</span>
              </a>
              <a href="https://x.com/Erkin_UUNSE" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/55 px-5 py-4 transition hover:border-amber-400/50">
                <span>
                  <span className="block text-sm text-slate-500">X / Twitter</span>
                  <span className="font-bold text-amber-300">@Erkin_UUNSE</span>
                </span>
                <span className="text-slate-500">Open</span>
              </a>
            </div>
          </SectionCard>

          <SectionCard className="p-7 md:p-10">
            <div className="mb-7 flex items-center justify-between gap-4">
              <div>
                <div className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-amber-300">{t.faq}</div>
                <h2 className="text-4xl font-black">Questions</h2>
              </div>
              <div className="hidden text-sm text-slate-500 md:block">Contact Erkin directly for details.</div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {t.faqs.map((faq) => (
                <div key={faq[0]} className="rounded-2xl border border-white/10 bg-black/45 p-5">
                  <div className="font-bold">{faq[0]}</div>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{faq[1]}</p>
                </div>
              ))}
            </div>
          </SectionCard>
        </section>

        <footer className="mt-6 rounded-[2rem] border border-amber-400/20 bg-black/75 p-8 text-center md:p-12">
          <img src={logo} alt="UUNSE Logo" className="mx-auto mb-6 h-20 w-20 rounded-full border border-amber-400/40" />
          <h2 className="mx-auto max-w-4xl text-4xl font-black md:text-6xl">Global Affiliate Program Built For Long-Term Growth</h2>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-400">
            Contact UUNSE today and start building a stable affiliate business with global growth potential.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a href="https://t.me/Erkin8151" target="_blank" rel="noopener noreferrer" className="rounded-2xl bg-amber-400 px-8 py-4 font-black text-black transition hover:bg-amber-300">
              @Erkin8151
            </a>
            <a href="https://x.com/Erkin_UUNSE" target="_blank" rel="noopener noreferrer" className="rounded-2xl border border-white/10 px-8 py-4 font-bold transition hover:border-amber-400/50">
              @Erkin_UUNSE
            </a>
          </div>
        </footer>
      </div>

      <a href="https://t.me/Erkin8151" target="_blank" rel="noopener noreferrer" className="fixed bottom-4 left-4 right-4 z-50 inline-flex items-center justify-center rounded-2xl bg-amber-400 px-6 py-4 font-black text-black shadow-2xl shadow-amber-400/30 transition hover:bg-amber-300 md:left-auto md:right-6 md:rounded-full">
        Contact Erkin
      </a>
    </main>
  );
}

export default App;
