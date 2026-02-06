import { LIKERT_SCALE } from "../../types/survey";

interface LikertScaleProps {
    value: number | undefined;
    onChange: (value: number) => void;
}

export function LikertScale({ value, onChange }: LikertScaleProps) {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center gap-4">
                {LIKERT_SCALE.map((option) => (
                    <button
                        key={option.value}
                        type="button"
                        onClick={() => onChange(option.value)}
                        className={`flex flex-col items-center gap-3 flex-1 p-4 rounded-lg transition-all ${value === option.value
                                ? "bg-[#008489] text-white shadow-lg scale-105"
                                : "bg-gray-100 text-[#4A4A4A] hover:bg-gray-200"
                            }`}
                    >
                        <div
                            className={`w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center border-2 ${value === option.value
                                    ? "border-white bg-white/20"
                                    : "border-[#4A4A4A]"
                                }`}
                        >
                            <span className="text-xl md:text-2xl font-light">
                                {option.value}
                            </span>
                        </div>
                        <span className="text-xs md:text-sm font-medium text-center">
                            {option.label}
                        </span>
                    </button>
                ))}
            </div>
        </div>
    );
}
