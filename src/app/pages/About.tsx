import { Link } from "react-router-dom";
import { motion } from "motion/react";

export default function About() {
  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* 헤더 */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <Link
            to="/"
            className="inline-block mb-8 text-gray-600 hover:text-[#D4AF37] transition-colors"
          >
            ← Back to Home
          </Link>
          <h1
            className="text-5xl mb-6 tracking-wider"
            style={{
              background: "linear-gradient(135deg, #D4AF37 0%, #F4E5A1 50%, #D4AF37 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            ABOUT LUCE
          </h1>
        </motion.div>

        {/* 에이전시 소개 */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16 space-y-6"
        >
          <h2 className="text-2xl text-gray-800 mb-4">회사 소개</h2>
          <p className="text-gray-600 leading-relaxed">
            LUCE는 광고와 홈쇼핑을 중심으로 다양한 분야의 전문 캐스팅을 진행하는 모델 에이전시입니다.
            우리는 각 모델의 고유한 매력과 개성을 발견하고, 이를 최적의 프로젝트와 연결하여
            브랜드와 모델 모두에게 최상의 결과를 제공합니다.
          </p>
          <p className="text-gray-600 leading-relaxed">
            패션, 뷰티, 리빙, 식품 등 다양한 카테고리의 광고 촬영과 홈쇼핑 방송에서
            검증된 전문성을 바탕으로, 클라이언트의 브랜드 가치를 극대화하고
            모델의 성공적인 커리어를 함께 만들어갑니다.
          </p>
        </motion.section>

        {/* 대표 소개 */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-2xl text-gray-800 mb-6">대표 소개</h2>
          <div className="bg-white/50 backdrop-blur-sm rounded-lg p-8 shadow-sm">
            <div className="mb-6">
              <div className="w-32 h-32 bg-gradient-to-br from-[#D4AF37] to-[#F4E5A1] rounded-full mb-4"></div>
              <h3 className="text-xl text-gray-800 mb-2">대표 이름</h3>
              <p className="text-gray-500">Founder & CEO</p>
            </div>
            <div className="space-y-3 text-gray-600">
              <p>• 20년 이상의 모델 에이전시 및 캐스팅 경력</p>
              <p>• 주요 방송사 및 대형 광고 프로젝트 캐스팅 디렉터 역임</p>
              <p>• 국내외 패션 브랜드 모델 매니지먼트 전문</p>
              <p>• 홈쇼핑 방송 캐스팅 전문가</p>
            </div>
          </div>
        </motion.section>

        {/* 주요 서비스 */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-2xl text-gray-800 mb-6">주요 서비스</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <ServiceCard
              title="광고 캐스팅"
              description="TV CF, 온라인 광고, 인쇄 광고 등 다양한 매체의 광고 캐스팅을 전문적으로 진행합니다."
            />
            <ServiceCard
              title="홈쇼핑 모델"
              description="주요 홈쇼핑 채널의 방송 모델 캐스팅 및 매니지먼트를 제공합니다."
            />
            <ServiceCard
              title="패션 모델"
              description="런웨이, 화보, 룩북 촬영 등 패션 분야의 전문 모델 섭외를 진행합니다."
            />
            <ServiceCard
              title="모델 매니지먼트"
              description="소속 모델들의 체계적인 교육과 커리어 관리를 통해 성장을 지원합니다."
            />
          </div>
        </motion.section>
      </div>
    </div>
  );
}

function ServiceCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white/50 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-gray-100"
    >
      <h3
        className="text-xl mb-3"
        style={{
          background: "linear-gradient(135deg, #D4AF37 0%, #F4E5A1 50%, #D4AF37 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </motion.div>
  );
}
