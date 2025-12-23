import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { useState } from "react";

export default function Advertising() {
  const [formData, setFormData] = useState({
    company: "",
    name: "",
    phone: "",
    email: "",
    projectType: "",
    budget: "",
    schedule: "",
    details: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: 폼 제출 로직 (Supabase 연동)
    console.log("Form submitted:", formData);
    alert("문의가 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.");
  };

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-2xl mx-auto">
        {/* 헤더 */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <Link
            to="/"
            className="inline-block mb-8 text-gray-600 hover:text-[#D4AF37] transition-colors"
          >
            ← Back to Home
          </Link>
          <h1
            className="text-5xl mb-4 tracking-wider"
            style={{
              background: "linear-gradient(135deg, #D4AF37 0%, #F4E5A1 50%, #D4AF37 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            광고·캐스팅 문의
          </h1>
          <p className="text-gray-600">
            프로젝트에 대한 정보를 입력해주시면 최적의 모델을 제안해드립니다.
          </p>
        </motion.div>

        {/* 문의 폼 */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="bg-white/50 backdrop-blur-sm rounded-lg p-8 shadow-sm space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 mb-2">회사명 *</label>
              <input
                type="text"
                name="company"
                required
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:border-[#D4AF37] focus:outline-none transition-colors"
                placeholder="회사명을 입력하세요"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">담당자명 *</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:border-[#D4AF37] focus:outline-none transition-colors"
                placeholder="이름을 입력하세요"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 mb-2">연락처 *</label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:border-[#D4AF37] focus:outline-none transition-colors"
                placeholder="010-1234-5678"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">이메일 *</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:border-[#D4AF37] focus:outline-none transition-colors"
                placeholder="example@company.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 mb-2">프로젝트 유형 *</label>
            <select
              name="projectType"
              required
              value={formData.projectType}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:border-[#D4AF37] focus:outline-none transition-colors"
            >
              <option value="">선택하세요</option>
              <option value="tv-commercial">TV 광고</option>
              <option value="online-ad">온라인 광고</option>
              <option value="print-ad">인쇄 광고</option>
              <option value="homeshopping">홈쇼핑</option>
              <option value="fashion">패션 촬영</option>
              <option value="event">이벤트/행사</option>
              <option value="other">기타</option>
            </select>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 mb-2">예산 범위</label>
              <input
                type="text"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:border-[#D4AF37] focus:outline-none transition-colors"
                placeholder="예: 500만원 ~ 1000만원"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">촬영 예정일</label>
              <input
                type="date"
                name="schedule"
                value={formData.schedule}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:border-[#D4AF37] focus:outline-none transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 mb-2">프로젝트 상세 내용 *</label>
            <textarea
              name="details"
              required
              value={formData.details}
              onChange={handleChange}
              rows={6}
              className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:border-[#D4AF37] focus:outline-none transition-colors resize-none"
              placeholder="프로젝트의 상세 내용, 원하는 모델의 조건, 촬영 장소 등을 자유롭게 작성해주세요"
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-4 rounded-lg text-white font-medium shadow-md transition-all"
            style={{
              background: "linear-gradient(135deg, #D4AF37 0%, #F4E5A1 50%, #D4AF37 100%)",
            }}
          >
            문의하기
          </motion.button>
        </motion.form>
      </div>
    </div>
  );
}
