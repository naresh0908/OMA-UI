import { useNavigate } from "react-router";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { TrendingUp, Download, AlertCircle, CheckCircle2, AlertTriangle } from "lucide-react";
import { ContactUs } from "../components/ContactUs";
import { OnionPeel } from "../components/OnionPeel";
import { HappinessChart } from "../components/HappinessChart";
import { Footer } from "../components/Footer";

const pulseMetrics = [
  {
    title: "Overall Maturity Score",
    value: "3.4",
    max: "5.0",
    trend: "+0.2",
    trendLabel: "from last year",
    icon: TrendingUp,
    color: "#008489",
  },
  {
    title: "Industry Percentile",
    value: "72nd",
    max: "100th",
    trend: "+8",
    trendLabel: "percentile points",
    icon: TrendingUp,
    color: "#002D72",
  },
  {
    title: "Year-over-Year Growth",
    value: "+0.2",
    max: "1.0",
    trend: "6.3%",
    trendLabel: "improvement rate",
    icon: TrendingUp,
    color: "#008489",
  },
];

const radarData = [
  {
    category: "Leadership",
    yourScore: 3.8,
    industryBenchmark: 3.2,
  },
  {
    category: "Strategy",
    yourScore: 3.5,
    industryBenchmark: 3.4,
  },
  {
    category: "Execution",
    yourScore: 2.8,
    industryBenchmark: 3.3,
  },
  {
    category: "Process",
    yourScore: 3.2,
    industryBenchmark: 3.5,
  },
  {
    category: "People",
    yourScore: 4.1,
    industryBenchmark: 3.1,
  },
  {
    category: "Performance",
    yourScore: 3.0,
    industryBenchmark: 3.4,
  },
  {
    category: "Technology",
    yourScore: 3.6,
    industryBenchmark: 3.7,
  },
  {
    category: "Learning",
    yourScore: 3.8,
    industryBenchmark: 3.0,
  },
];

const criticalGaps = [
  {
    category: "Execution",
    score: 2.8,
    gap: -0.5,
    severity: "high",
    insight: "Delivery predictability is below industry standard. Focus on process discipline and capacity planning.",
  },
  {
    category: "Performance",
    score: 3.0,
    gap: -0.4,
    severity: "medium",
    insight: "Metrics visibility needs improvement. Implement real-time dashboards and regular performance reviews.",
  },
  {
    category: "Process",
    score: 3.2,
    gap: -0.3,
    severity: "medium",
    insight: "Process standardization is lagging. Document key workflows and establish governance standards.",
  },
];

export default function Dashboard() {
  const navigate = useNavigate();

  const handleDownloadPDF = () => {
    alert("Executive PDF report would be generated and downloaded here.");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-2xl font-light tracking-wider text-[#002D72]">
              OMA Tool
            </h1>
            <div className="flex gap-4">
              <Button
                variant="ghost"
                onClick={() => navigate("/home")}
                className="text-[#4A4A4A] hover:text-[#002D72]"
              >
                Home
              </Button>
              <Button
                variant="ghost"
                onClick={() => navigate("/survey")}
                className="text-[#4A4A4A] hover:text-[#002D72]"
              >
                Retake Assessment
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* Header */}
        <div className="space-y-2">
          <h2 className="text-5xl font-light text-[#002D72]">
            Strategic Command Center
          </h2>
          <p className="text-lg text-[#4A4A4A]">
            Your organizational maturity assessment results and strategic insights
          </p>
        </div>

        {/* Pulse Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pulseMetrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <Card key={index} className="p-6 space-y-4 border-2 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <p className="text-sm text-[#4A4A4A]">{metric.title}</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-light text-[#002D72]">
                        {metric.value}
                      </span>
                      <span className="text-lg text-[#4A4A4A]">
                        / {metric.max}
                      </span>
                    </div>
                  </div>
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: `${metric.color}15` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: metric.color }} />
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-green-600 font-medium">{metric.trend}</span>
                  <span className="text-[#4A4A4A]">{metric.trendLabel}</span>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Radar Chart */}
        <Card className="p-8 space-y-6">
          <div className="space-y-2">
            <h3 className="text-4xl font-light text-[#002D72]">
              Category Performance Analysis
            </h3>
            <p className="text-lg text-[#4A4A4A]">
              Your organization's maturity compared to industry benchmarks
            </p>
          </div>
          <div className="w-full h-[500px]">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={radarData}>
                <PolarGrid stroke="#E5E7EB" />
                <PolarAngleAxis
                  dataKey="category"
                  tick={{ fill: "#4A4A4A", fontSize: 12 }}
                />
                <PolarRadiusAxis angle={90} domain={[0, 5]} tick={{ fill: "#4A4A4A" }} />
                <Radar
                  name="Your Organization"
                  dataKey="yourScore"
                  stroke="#002D72"
                  fill="#002D72"
                  fillOpacity={0.5}
                  strokeWidth={2}
                />
                <Radar
                  name="Industry Benchmark"
                  dataKey="industryBenchmark"
                  stroke="#D1D5DB"
                  fill="#D1D5DB"
                  fillOpacity={0.3}
                  strokeWidth={2}
                />
                <Legend
                  wrapperStyle={{ paddingTop: "20px" }}
                  iconType="circle"
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Organizational Health & Sentiment */}
        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-4xl font-light text-[#002D72]">
              Organizational Health & Sentiment
            </h3>
            <p className="text-lg text-[#4A4A4A]">
              Visualizing the core layers of your organization and employee well-being
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="p-6 flex flex-col items-center justify-center bg-white shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-xl font-medium mb-4 w-full text-left text-[#002D72]">The HARTS Model</h4>
              <OnionPeel />
            </Card>
            <div className="h-full">
              <HappinessChart />
            </div>
          </div>
        </div>

        {/* Critical Gaps - Moved below Organizational Health */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <h3 className="text-4xl font-light text-[#002D72]">
                Critical Gaps & Recommendations
              </h3>
              <p className="text-lg text-[#4A4A4A]">
                Priority areas requiring strategic attention
              </p>
            </div>
            <Button
              onClick={handleDownloadPDF}
              className="gap-2 bg-[#002D72] hover:bg-[#001f52]"
            >
              <Download className="w-4 h-4" />
              Download Full Executive PDF
            </Button>
          </div>

          <div className="space-y-4">
            {criticalGaps.map((gap, index) => (
              <div
                key={index}
                className="rounded-lg p-6 text-white shadow-md flex flex-col md:flex-row items-center justify-between gap-6"
                style={{ background: 'linear-gradient(90deg, #002D72 0%, #009b7b 100%)' }}
              >
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-3 mb-1">
                    <h4 className="text-xl font-bold">
                      {gap.category}
                    </h4>
                    <span className="bg-white/20 px-2 py-0.5 rounded text-xs uppercase font-medium tracking-wider">
                      {gap.severity} Priority
                    </span>
                  </div>

                  <div className="flex items-center gap-4 text-blue-100 text-sm mb-2">
                    <span>
                      Current Score: <span className="font-bold text-white">{gap.score}</span>
                    </span>
                    <span>
                      Gap: <span className="font-bold text-white">{gap.gap}</span>
                    </span>
                  </div>

                  <p className="text-white/90 leading-relaxed max-w-2xl">
                    {gap.insight}
                  </p>
                </div>

                <Button
                  className="bg-white text-[#002D72] hover:bg-gray-100 font-medium px-6 py-2 whitespace-nowrap"
                  onClick={() => window.location.href = '#contact'}
                >
                  Schedule Consultation
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Us Section */}
        <ContactUs />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
