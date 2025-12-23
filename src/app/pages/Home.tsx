import { Link } from "react-router-dom";
import { motion } from "motion/react";

export default function Home() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center gap-16 text-center px-6">
      {/* 로고 영역 */}
      <motion.div
        className="space-y-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.h1
          className="text-7xl tracking-[0.3em] font-light"
          style={{
            background: "linear-gradient(135deg, #D4AF37 0%, #F4E5A1 50%, #D4AF37 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          LUCE
        </motion.h1>
        <motion.p
          className="text-base text-gray-600 max-w-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          광고와 홈쇼핑을 기반으로, 다양한 분야의 캐스팅을 진행하는 모델 에이전시
        </motion.p>
      </motion.div>

      {/* 하이퍼링크 버튼 영역 */}
      <motion.nav
        className="flex flex-col gap-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <NavLink to="/about" delay={0}>
          ABOUT LUCE
        </NavLink>

        <NavLink to="/apply" delay={0.1}>
          모델 지원하기
        </NavLink>

        <NavLink to="/advertising" delay={0.2}>
          광고·캐스팅 문의하기
        </NavLink>

        <NavLink to="/contact" delay={0.3}>
          연락처
        </NavLink>
      </motion.nav>
    </section>
  );
}

function NavLink({
  to,
  children,
  delay,
}: {
  to: string;
  children: React.ReactNode;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.8 + delay }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link
        to={to}
        className="text-2xl tracking-wider relative group inline-block"
        style={{
          background: "linear-gradient(135deg, #D4AF37 0%, #F4E5A1 50%, #D4AF37 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        {children}
        <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#D4AF37] to-[#F4E5A1] transition-all duration-300 group-hover:w-full"></span>
      </Link>
    </motion.div>
  );
}
