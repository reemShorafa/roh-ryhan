import { useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Heart,
  Leaf,
  Play,
  UserRound,
} from "lucide-react";
import "../DonationHero.css";

// TODO: Upload the final story video to public/videos/our-story.mp4.
const STORY_VIDEO = "/videos/our-story.mp4";

const copy = {
  ar: {
    eyebrow: "معا .. نعيد الأمل إلى غزة",
    title: "لنسمح اليوم",
    titleAccent: "لنحيا غدا",
    description:
      "في ظل الظروف الصعبة التي يمر بها أهلنا في غزة، نعمل على تقديم المساعدات الإنسانية والإغاثية العاجلة لهم.",
    donate: "تبرع الآن",
    watch: "شاهد قصتنا",
    donationsTitle: "أحدث التبرعات",
    donationsText:
      "كل تبرع يصل إلى من يستحقه، ويحدث فرقاً حقيقياً في حياة الأسر المحتاجة في غزة.",
    viewAll: "عرض جميع التبرعات",
    donations: [
      {
        name: "أحمد محمد",
        amount: "$100",
        message: "ساهمت لدعم تعليم الأطفال",
        time: "منذ 3 ساعات",
      },
      {
        name: "سارة خالد",
        amount: "$50",
        message: "من أجل مستقبل أفضل للأطفال",
        time: "منذ 5 ساعات",
      },
      {
        name: "خالد العتيبي",
        amount: "$200",
        message: "دعم غذائي للعائلات المحتاجة",
        time: "منذ 8 ساعات",
      },
    ],
  },

  en: {
    eyebrow: "Together, restoring hope to Gaza",
    title: "Let today",
    titleAccent: "bring life tomorrow",
    description:
      "Amid the difficult circumstances facing families in Gaza, we provide urgent humanitarian and relief assistance.",
    donate: "Donate now",
    watch: "Watch our story",
    donationsTitle: "Latest Donations",
    donationsText:
      "Every donation reaches someone who needs it and creates a real difference for families in Gaza.",
    viewAll: "View all donations",
    donations: [
      {
        name: "Ahmad Mohammad",
        amount: "$100",
        message: "Contributed to children's education",
        time: "3 hours ago",
      },
      {
        name: "Sarah Khaled",
        amount: "$50",
        message: "For a better future for children",
        time: "5 hours ago",
      },
      {
        name: "Khaled Alotaibi",
        amount: "$200",
        message: "Food support for families in need",
        time: "8 hours ago",
      },
    ],
  },
};

export default function DonationHero({ language, videoSrc }) {
  const t = copy[language];
  const isArabic = language === "ar";

  return (
    <section className="donation-hero" dir={isArabic ? "rtl" : "ltr"}>
      <div className="donation-hero-container">
        <HeroVideoOverlay copy={t} videoSrc={videoSrc || STORY_VIDEO} />

        <aside className="donation-hero-donations" aria-labelledby="latest-donations">
          <div className="donation-hero-donations-frame">
            <div className="donation-hero-donations-mark">
              <Heart size={38} />
            </div>

            <p className="donation-hero-donations-kicker" id="latest-donations">
              {t.donationsTitle}
            </p>

            <h2>{t.donationsTitle}</h2>

            <p className="donation-hero-donations-copy">{t.donationsText}</p>

            <div className="donation-hero-donation-list">
              {t.donations.map((donation) => (
                <div className="donation-hero-donation" key={donation.name}>
                  <div className="donation-hero-donor-icon">
                    <UserRound size={21} />
                  </div>

                  <div className="donation-hero-donor">
                    <strong>{donation.name}</strong>
                    <span>{donation.message}</span>
                  </div>

                  <div className="donation-hero-donation-meta">
                    <b>{donation.amount}</b>
                    <time>{donation.time}</time>
                  </div>
                </div>
              ))}
            </div>

            <a className="donation-hero-view-all" href="#donations">
              {isArabic ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
              {t.viewAll}
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
}

function HeroVideoOverlay({ copy: t, videoSrc }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (!isPlaying) return;

    videoRef.current?.play().catch(() => {
      setIsPlaying(false);
    });
  }, [isPlaying]);

  const resetVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }

    setIsPlaying(false);
  };

  return (
    <div className={`donation-hero-main ${isPlaying ? "is-playing" : ""}`}>
      <div className="donation-hero-poster" />
      <div className="donation-hero-liquid" />

      <div className="donation-hero-content">
        <p className="donation-hero-eyebrow">
          <Leaf size={17} />
          {t.eyebrow}
        </p>

        <h1 className="donation-hero-title">
          {t.title}
          <br />
          <span>{t.titleAccent}</span>
        </h1>

        <p className="donation-hero-description">{t.description}</p>

        <div className="donation-hero-actions">
          <button
            className="donation-hero-story"
            type="button"
            onClick={() => setIsPlaying(true)}
          >
            <span>
              <Play size={18} fill="currentColor" />
            </span>
            {t.watch}
          </button>

          <a className="donation-hero-button" href="#donate">
            <Heart size={20} />
            {t.donate}
          </a>
        </div>
      </div>

      <video
        ref={videoRef}
        className="donation-hero-video-element"
        src={videoSrc}
        playsInline
        preload="metadata"
        onEnded={resetVideo}
      />
    </div>
  );
}
