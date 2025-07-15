import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Home() {
  const musicList = [
    { title: "청춘낙뢰", video: "https://www.youtube-nocookie.com/embed/y0bTpAB6yVM", desc: "청춘의 계절에 피할 수 없게 찾아오는 번개같은 고난을 노래한 곡." },
    { title: "악몽", video: "https://www.youtube-nocookie.com/embed/RT_14dIo73k", desc: "수많은 악몽 속에서도 결국 빛나는 꿈으로 바꿔내고 싶은 의지를 담은 곡." },
    { title: "High Tone Selector", video: "https://www.youtube-nocookie.com/embed/EWwPS_6Zym4", desc: "비바람조차 내 기분을 좌지우지하지 못하는 자존감과 긍정의 노래." },
    { title: "자판기 커피", video: "https://www.youtube-nocookie.com/embed/xd5CW5XQZkI", desc: "자판기 커피처럼 작은 위안 속에서도 꿈을 향해 나아가는 현실 고백." },
    { title: "바로 지금", video: "https://www.youtube-nocookie.com/embed/ifDkpqxJvoo", desc: "사랑과 우정의 찰나, 바로 지금 이 순간을 기억하는 연인의 이야기." },
    { title: "사랑이란 무어라고 생각하십니까", video: "https://www.youtube-nocookie.com/embed/vgnZngee0-o", desc: "사랑의 의미를 묻는 진지한 질문을 담은 곡." },
    { title: "Blue Till I Die", video: "https://www.youtube-nocookie.com/embed/_j3y2WsiPdA", desc: "작은 방에서도 큰 꿈을 꾸는 순애의 청춘송." },
    { title: "모험 (8bit)", video: "https://www.youtube-nocookie.com/embed/Sh3OxoOmJTw", desc: "현실을 도피하고 싶지만 결국 다시 돌아오는 우리의 이야기." },
    { title: "별꼬리", video: "https://www.youtube-nocookie.com/embed/Ws17EXP52SI", desc: "" },
    { title: "눈사랑", video: "https://www.youtube-nocookie.com/embed/Ud84sM958Zc", desc: "" },
    { title: "주름살", video: "https://www.youtube-nocookie.com/embed/QOOOSnW5uKI", desc: "" },
    { title: "그래, 우리", video: "https://www.youtube-nocookie.com/embed/LD6SzR4N60A", desc: "" }
  ];

  const performanceList = [
    { date: "2023.11.25", title: "순애콘 #1 젊음상기회" },
    { date: "2024.10.26", title: "순애콘 #2 신기루" }
  ];

  const portfolioList = [
    { title: "너진똑 유튜브 채널 엔딩곡 참여", desc: "인문학 채널 '너진똑'의 불안 시리즈 2부 엔딩곡 참여." }
  ];

  return (
    <main className="min-h-screen bg-[#F6F4EF] text-[#444] px-4 py-8">
      <section className="text-center mb-16">
        <motion.h1 className="text-4xl font-bold mb-4" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          삶을 담습니다. 가장 순수한 사랑의, 순애
        </motion.h1>
        <p className="text-lg max-w-xl mx-auto">
          사랑이든 절망이든, 모든 감정을 음악에 담는 싱어송라이터 순애입니다.
        </p>
      </section>

      <section className="mb-20">
        <h2 className="text-2xl font-semibold mb-6 text-center">대표 음악</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {musicList.map((track, i) => (
            <Card key={i} className="bg-white">
              <CardContent className="p-4">
                <h3 className="text-xl font-bold mb-2">{track.title}</h3>
                <iframe className="w-full aspect-video mb-2" src={track.video} title={track.title} frameBorder="0" allowFullScreen />
                {track.desc && <p>{track.desc}</p>}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-20">
        <h2 className="text-2xl font-semibold mb-6 text-center">포트폴리오</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {portfolioList.map((item, i) => (
            <Card key={i} className="bg-white">
              <CardContent className="p-4">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p>{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-20">
        <h2 className="text-2xl font-semibold mb-6 text-center">공연 일정</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {performanceList.map((item, i) => (
            <Card key={i} className="bg-white">
              <CardContent className="p-4">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p>{item.date}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p className="mb-2">이메일: <a href="mailto:s2soonae@naver.com" className="underline">s2soonae@naver.com</a></p>
        <p className="mb-6">유튜브: <a href="https://www.youtube.com/@purelove-soonae" className="underline">@purelove-soonae</a></p>
        <Button variant="outline" onClick={() => window.location.href = 'mailto:s2soonae@naver.com'}>
          메일 보내기
        </Button>
      </section>
    </main>
  );
}
