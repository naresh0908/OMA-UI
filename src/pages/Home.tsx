import { useNavigate } from "react-router";
import { Button } from "../components/ui/button";
import {
  Users,
  Target,
  Zap,
  Workflow,
  UserCheck,
  TrendingUp,
  Cpu,
  GraduationCap,
  Globe,
  Lightbulb,
  ArrowRight,
  ClipboardCheck,
  ListChecks,
  ArrowUpDown,
  FileEdit,
  BarChart3,
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Footer } from "../components/Footer";
import logo from "../assets/HARTS Consulting LBG.png";

const categories = [
  { icon: Users, name: "Leadership", color: "#002D72" },
  { icon: Target, name: "Strategy", color: "#008489" },
  { icon: Zap, name: "Execution", color: "#002D72" },
  { icon: Workflow, name: "Process", color: "#008489" },
  { icon: UserCheck, name: "People", color: "#002D72" },
  { icon: TrendingUp, name: "Performance", color: "#008489" },
  { icon: Cpu, name: "Technology", color: "#002D72" },
  { icon: GraduationCap, name: "Learning", color: "#008489" },
];

const maturityStages = [
  { stage: 1, name: "Startup", description: "Ad-hoc processes" },
  { stage: 2, name: "Emerging", description: "Repeatable patterns" },
  { stage: 3, name: "Developing", description: "Defined standards" },
  { stage: 4, name: "Maturing", description: "Measured & managed" },
  { stage: 5, name: "Continuous Improvement", description: "Optimized systems" },
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-200 animate-fade-in-down">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <img src={logo} alt="OMA Tool Logo" className="h-10 w-auto" />
              <h1 className="text-2xl font-light tracking-wider text-[#002D72]">
                OMA Tool
              </h1>
            </div>
            <div className="flex gap-4">
              <Button
                variant="ghost"
                onClick={() => navigate("/dashboard")}
                className="text-[#4A4A4A] hover:text-[#002D72]"
              >
                Dashboard
              </Button>
              <Button
                variant="ghost"
                onClick={() => navigate("/")}
                className="text-[#4A4A4A] hover:text-[#002D72]"
              >
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <h2 className="text-5xl md:text-6xl font-light text-[#002D72] animate-fade-in-up">
            Measure, Improve, Transform
          </h2>
          <p className="text-xl text-[#4A4A4A] max-w-3xl mx-auto animate-fade-in-up animate-delay-200">
            A data-driven framework to evolve your organizational maturity.
          </p>
          <div className="pt-4 animate-fade-in-up animate-delay-400">
            <Button
              onClick={() => navigate("/survey")}
              className="h-14 px-12 text-lg bg-[#008489] hover:bg-[#006b6f] text-white"
            >
              Start Assessment
            </Button>
          </div>
        </div>
      </section>

      {/* Section 1: What is OMA? */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Image */}
            <div className="order-2 lg:order-1 animate-fade-in-left">
              <div className="relative rounded-2xl overflow-hidden shadow-xl img-zoom">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1764502547781-a83c217df9b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpc29tZXRyaWMlMjBidWlsZGluZyUyMGJsb2NrcyUyMHN0cnVjdHVyZXxlbnwxfHx8fDE3NzAyNzc5NDR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Abstract Structure"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#002D72]/20 to-[#008489]/20" />
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="order-1 lg:order-2 space-y-6 animate-fade-in-right">
              <h3 className="text-4xl font-light text-[#002D72]">
                What is OMA?
              </h3>
              <p className="text-lg text-[#4A4A4A] leading-relaxed">
                The Organizational Maturity Assessment (OMA) is a diagnostic framework
                designed to quantify operational health and identify strategic gaps.
              </p>
              <p className="text-[#4A4A4A] leading-relaxed">
                Built on decades of consulting experience, OMA provides a structured
                approach to understanding your organization's current state across eight
                critical dimensions. It transforms subjective observations into objective
                metrics, enabling data-driven decision-making and strategic planning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Why OMA? */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <h3 className="text-4xl font-light text-[#002D72]">
              Why Business Leaders Choose OMA
            </h3>
            <p className="text-lg text-[#4A4A4A] max-w-2xl mx-auto">
              Transform complexity into clarity with enterprise-grade insights
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Benchmarking Card */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 space-y-4 card-hover animate-fade-in-up animate-delay-100">
              <div className="w-14 h-14 rounded-full bg-[#008489]/10 flex items-center justify-center">
                <Globe className="w-7 h-7 text-[#008489]" />
              </div>
              <h4 className="text-xl font-medium text-[#002D72]">
                Benchmarking
              </h4>
              <p className="text-[#4A4A4A] leading-relaxed">
                Compare your performance against top-tier industry standards.
              </p>
            </div>

            {/* Clarity Card */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 space-y-4 card-hover animate-fade-in-up animate-delay-200">
              <div className="w-14 h-14 rounded-full bg-[#008489]/10 flex items-center justify-center">
                <Lightbulb className="w-7 h-7 text-[#008489]" />
              </div>
              <h4 className="text-xl font-medium text-[#002D72]">
                Clarity
              </h4>
              <p className="text-[#4A4A4A] leading-relaxed">
                Transform ambiguous pain points into data-driven insights.
              </p>
            </div>

            {/* Roadmap Card */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 space-y-4 card-hover animate-fade-in-up animate-delay-300">
              <div className="w-14 h-14 rounded-full bg-[#008489]/10 flex items-center justify-center">
                <ArrowRight className="w-7 h-7 text-[#008489]" />
              </div>
              <h4 className="text-xl font-medium text-[#002D72]">
                Roadmap
              </h4>
              <p className="text-[#4A4A4A] leading-relaxed">
                Generate a prioritized action plan for immediate ROI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: How OMA Works */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h3 className="text-4xl font-light text-[#002D72]">
              How OMA Works
            </h3>
            <p className="text-lg text-[#4A4A4A] max-w-2xl mx-auto">
              A comprehensive and interactive diagnostic journey designed for precision.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-16 lg:gap-x-48 items-start">

            {/* Left Column: Interactive Questions */}
            <div className="space-y-8">
              <h4 className="text-2xl font-medium text-[#002D72]">The Interactive Assessment</h4>
              <p className="text-[#4A4A4A]">To accurately capture your organizational landscape, OMA utilizes a variety of interactive question formats:</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="w-10 h-10 rounded-lg bg-[#008489]/10 flex items-center justify-center shrink-0">
                    <ClipboardCheck className="w-5 h-5 text-[#008489]" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-[#002D72]">Single Choice</h5>
                    <p className="text-sm text-[#4A4A4A]">Select the best-fit response for clear baseline data.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="w-10 h-10 rounded-lg bg-[#008489]/10 flex items-center justify-center shrink-0">
                    <ListChecks className="w-5 h-5 text-[#008489]" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-[#002D72]">Multi-Choice</h5>
                    <p className="text-sm text-[#4A4A4A]">Identify multiple overlapping organizational factors.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="w-10 h-10 rounded-lg bg-[#008489]/10 flex items-center justify-center shrink-0">
                    <ArrowUpDown className="w-5 h-5 text-[#008489]" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-[#002D72]">Rearrange</h5>
                    <p className="text-sm text-[#4A4A4A]">Rank priorities via drag-and-drop to show preference.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="w-10 h-10 rounded-lg bg-[#008489]/10 flex items-center justify-center shrink-0">
                    <FileEdit className="w-5 h-5 text-[#008489]" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-[#002D72]">Fill in the Blanks</h5>
                    <p className="text-sm text-[#4A4A4A]">Provide contextual data for qualitative depth.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Logic & Results */}
            <div className="space-y-10 relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#008489]/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110" />
              <div className="relative space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-[#002D72] flex items-center justify-center shadow-lg transform">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-2xl font-medium text-[#002D72]">Data-Driven Evaluation</h4>
                <p className="text-[#4A4A4A] leading-relaxed">
                  Every response is processed through our <span className="text-[#008489] font-medium italic">Proprietary Scoring Engine</span>. We apply weighted logic and cross-category correlation to:
                </p>
                <ul className="space-y-3 border-l-2 border-[#008489]/20 pl-6">
                  {[
                    "Benchmark against industry maturity levels",
                    "Identify hidden strategic bottlenecks",
                    "Correlate operational data with cultural performance",
                    "Visualize real-time transformation roadmaps",
                  ].map((item, i) => (
                    <li key={i} className="text-sm text-[#4A4A4A] leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-light text-[#002D72] mb-3">
              8 OMA Categories
            </h3>
            <p className="text-[#4A4A4A]">
              Comprehensive assessment across all dimensions of organizational excellence
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {categories.map(({ icon: Icon, name, color }, index) => (
              <div
                key={index}
                className={`flex flex-col items-center text-center space-y-4 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow card-hover animate-fade-in-up animate-delay-${(index + 1) * 100}`}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: `${color}15` }}
                >
                  <Icon className="w-8 h-8" style={{ color }} />
                </div>
                <h4 className="font-medium text-[#002D72]">{name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Maturity Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-light text-[#002D72] mb-3">
              5 Stages of Maturity
            </h3>
            <p className="text-[#4A4A4A]">
              Understand where you are and chart your path forward
            </p>
          </div>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-8 left-0 right-0 h-1 bg-gradient-to-r from-[#002D72] via-[#008489] to-[#002D72]" />

            {/* Timeline Items */}
            <div className="relative grid grid-cols-1 md:grid-cols-5 gap-8">
              {maturityStages.map((stage, index) => (
                <div key={index} className="flex flex-col items-center text-center space-y-3">
                  <div
                    className="w-16 h-16 rounded-full bg-white border-4 flex items-center justify-center z-10"
                    style={{ borderColor: index % 2 === 0 ? "#002D72" : "#008489" }}
                  >
                    <span
                      className="text-2xl font-light"
                      style={{ color: index % 2 === 0 ? "#002D72" : "#008489" }}
                    >
                      {stage.stage}
                    </span>
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-medium text-[#002D72]">{stage.name}</h4>
                    <p className="text-sm text-[#4A4A4A]">{stage.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#002D72]">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h3 className="text-4xl font-light text-white">
            Ready to transform your organization?
          </h3>
          <p className="text-xl text-white/80">
            Begin your assessment journey today and unlock actionable insights.
          </p>
          <Button
            onClick={() => navigate("/survey")}
            className="h-14 px-12 text-lg bg-[#008489] hover:bg-[#006b6f] text-white"
          >
            Begin Assessment
          </Button>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}