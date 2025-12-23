import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { useState } from "react";

export default function Apply() {
  const [formData, setFormData] = useState({
    name: "",
    birthDate: "",
    gender: "",
    height: "",
    phone: "",
    email: "",
    experience: "",
    message: "",
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
    alert("지원서가 제출되었습니다. 검토 후 연락드리겠습니다.");
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
            모델 지원하기
          </h1>
          <p className="text-gray-600">
            아래 정보를 입력해주시면 검토 후 연락드리겠습니다.
          </p>
        </motion.div>

        {/* 지원 폼 */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="bg-white/50 backdrop-blur-sm rounded-lg p-8 shadow-sm space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 mb-2">이름 *</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:border-[#D4AF37] focus:outline-none transition-colors"
                placeholder="홍길동"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">생년월일 *</label>
              <input
                type="date"
                name="birthDate"
                required
                value={formData.birthDate}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:border-[#D4AF37] focus:outline-none transition-colors"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 mb-2">성별 *</label>
              <select
                name="gender"
                required
                value={formData.gender}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:border-[#D4AF37] focus:outline-none transition-colors"
              >
                <option value="">선택하세요</option>
                <option value="male">남성</option>
                <option value="female">여성</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 mb-2">신장 (cm) *</label>
              <input
                type="number"
                name="height"
                required
                value={formData.height}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:border-[#D4AF37] focus:outline-none transition-colors"
                placeholder="170"
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
                placeholder="example@email.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 mb-2">경력 사항</label>
            <input
              type="text"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:border-[#D4AF37] focus:outline-none transition-colors"
              placeholder="모델 경력이 있다면 간단히 작성해주세요"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">자기소개 및 지원동기</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:border-[#D4AF37] focus:outline-none transition-colors resize-none"
              placeholder="자기소개 및 지원동기를 작성해주세요"
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
            지원서 제출
          </motion.button>
        </motion.form>
      </div>
    </div>
  );
}
