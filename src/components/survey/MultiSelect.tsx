import { Check } from "lucide-react";

interface MultiSelectProps {
    options: string[];
    value: string[] | undefined;
    onChange: (value: string[]) => void;
}

export function MultiSelect({ options, value, onChange }: MultiSelectProps) {
    const selectedValues = value || [];

    const toggleOption = (option: string) => {
        if (selectedValues.includes(option)) {
            onChange(selectedValues.filter((v) => v !== option));
        } else {
            onChange([...selectedValues, option]);
        }
    };

    return (
        <div className="space-y-3">
            {options.map((option, index) => {
                const isSelected = selectedValues.includes(option);
                return (
                    <button
                        key={index}
                        type="button"
                        onClick={() => toggleOption(option)}
                        className={`w-full flex items-start gap-4 p-4 rounded-xl border-2 text-left transition-all duration-200 ${isSelected
                                ? "border-[#008489] bg-[#008489]/5 shadow-md"
                                : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm"
                            }`}
                    >
                        <div
                            className={`flex-shrink-0 w-6 h-6 rounded-md border-2 flex items-center justify-center transition-all ${isSelected
                                    ? "border-[#008489] bg-[#008489]"
                                    : "border-gray-300 bg-white"
                                }`}
                        >
                            {isSelected && <Check className="w-4 h-4 text-white" />}
                        </div>
                        <span
                            className={`text-base leading-relaxed ${isSelected ? "text-[#002D72] font-medium" : "text-[#4A4A4A]"
                                }`}
                        >
                            {option}
                        </span>
                    </button>
                );
            })}
            <p className="text-xs text-[#4A4A4A]/70 pt-2">
                Select all that apply ({selectedValues.length} selected)
            </p>
        </div>
    );
}
