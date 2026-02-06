import { useState, useMemo } from "react";
import { useNavigate } from "react-router";
import { Button } from "../components/ui/button";
import { Progress } from "../components/ui/progress";
import { ChevronLeft, ChevronRight, Info } from "lucide-react";
import logo from "../assets/HARTS Consulting LBG.png";
import { QuestionRenderer } from "../components/survey";
import { Footer } from "../components/Footer";
import { surveyCategories, consultantInsights } from "../types/surveyData";
import type { Question } from "../types/survey";

type ResponseValue = number | string | string[];

export default function Survey() {
  const navigate = useNavigate();
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [responses, setResponses] = useState<Record<string, ResponseValue>>({});

  const currentCategory = surveyCategories[currentCategoryIndex];
  const currentQuestion = currentCategory.questions[currentQuestionIndex];
  const responseKey = currentQuestion.id;
  const currentResponse = responses[responseKey];

  // Flatten all questions for progress calculation
  const allQuestions = useMemo(() => {
    return surveyCategories.flatMap((cat) => cat.questions);
  }, []);

  const totalQuestions = allQuestions.length;
  const answeredQuestions = Object.keys(responses).filter((key) => {
    const resp = responses[key];
    if (resp === undefined || resp === null) return false;
    if (typeof resp === "string") return resp.trim().length > 0;
    if (Array.isArray(resp)) return resp.length > 0;
    return true;
  }).length;
  const progressPercent = (answeredQuestions / totalQuestions) * 100;

  const handleResponseChange = (value: ResponseValue) => {
    setResponses({ ...responses, [responseKey]: value });
  };

  const isQuestionAnswered = (question: Question, response: ResponseValue | undefined): boolean => {
    if (response === undefined || response === null) return false;
    switch (question.type) {
      case "likert":
        return typeof response === "number";
      case "text":
        return typeof response === "string" && response.trim().length > 0;
      case "multi-choice":
        return Array.isArray(response) && response.length > 0;
      case "rank-order":
        return Array.isArray(response) && response.length > 0;
      default:
        return false;
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < currentCategory.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else if (currentCategoryIndex < surveyCategories.length - 1) {
      setCurrentCategoryIndex(currentCategoryIndex + 1);
      setCurrentQuestionIndex(0);
    } else {
      // Survey complete
      navigate("/dashboard");
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    } else if (currentCategoryIndex > 0) {
      setCurrentCategoryIndex(currentCategoryIndex - 1);
      setCurrentQuestionIndex(
        surveyCategories[currentCategoryIndex - 1].questions.length - 1
      );
    }
  };

  const canGoNext = isQuestionAnswered(currentQuestion, currentResponse);
  const canGoPrevious = currentCategoryIndex > 0 || currentQuestionIndex > 0;
  const isLastQuestion =
    currentCategoryIndex === surveyCategories.length - 1 &&
    currentQuestionIndex === currentCategory.questions.length - 1;

  // Get question type label for display
  const getQuestionTypeLabel = (type: Question["type"]) => {
    switch (type) {
      case "likert":
        return "Rate on scale";
      case "text":
        return "Open response";
      case "multi-choice":
        return "Select all that apply";
      case "rank-order":
        return "Rank in order";
      default:
        return "";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="OMA Tool Logo" className="h-10 w-auto" />
              <h1 className="text-2xl font-light tracking-wider text-[#002D72]">
                OMA Tool
              </h1>
            </div>
            <Button
              variant="ghost"
              onClick={() => navigate("/home")}
              className="text-[#4A4A4A] hover:text-[#002D72]"
            >
              Exit
            </Button>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-[#4A4A4A]">
                Category {currentCategoryIndex + 1} of {surveyCategories.length}
              </span>
              <span className="text-[#4A4A4A]">
                {answeredQuestions} / {totalQuestions} questions answered
              </span>
            </div>
            <Progress value={progressPercent} className="h-2" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 py-8 md:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Question Card */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10 space-y-8">
              {/* Question Header */}
              <div className="space-y-4">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <span className="text-[#008489] font-semibold text-sm tracking-wide uppercase">
                    {currentCategory.name}
                  </span>
                  <span className="text-xs text-[#4A4A4A] bg-gray-100 px-3 py-1 rounded-full">
                    {getQuestionTypeLabel(currentQuestion.type)}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-light text-[#002D72] leading-relaxed">
                  {currentQuestion.text}
                </h2>
              </div>

              {/* Question Input */}
              <div className="min-h-[200px]">
                <QuestionRenderer
                  question={currentQuestion}
                  value={currentResponse}
                  onChange={handleResponseChange}
                />
              </div>

              {/* Navigation */}
              <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                <Button
                  variant="outline"
                  onClick={handlePrevious}
                  disabled={!canGoPrevious}
                  className="gap-2"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Previous
                </Button>
                <Button
                  onClick={handleNext}
                  disabled={!canGoNext}
                  className="gap-2 bg-[#002D72] hover:bg-[#001f52]"
                >
                  {isLastQuestion ? "Complete" : "Next"}
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Consultant Insight Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 space-y-4 sticky top-8">
              <div className="flex items-center gap-2 text-[#008489]">
                <Info className="w-5 h-5" />
                <h3 className="font-medium">Consultant Insight</h3>
              </div>
              <p className="text-[#4A4A4A] leading-relaxed text-sm">
                {consultantInsights[currentCategory.name] ||
                  "Focus on providing accurate responses that reflect your organization's current state."}
              </p>
              <div className="pt-4 border-t border-gray-200">
                <div className="text-sm text-[#4A4A4A] space-y-2">
                  <p className="font-medium">Assessment Tips:</p>
                  <ul className="list-disc list-inside space-y-1 text-xs">
                    <li>Answer based on current state, not aspirations</li>
                    <li>Consider consistency across the organization</li>
                    <li>Be honest - this drives better recommendations</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
