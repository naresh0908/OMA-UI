import { Question } from "../../types/survey";
import { LikertScale } from "./LikertScale";
import { TextInput } from "./TextInput";
import { MultiSelect } from "./MultiSelect";
import { RankSorter } from "./RankSorter";

type ResponseValue = number | string | string[];

interface QuestionRendererProps {
    question: Question;
    value: ResponseValue | undefined;
    onChange: (value: ResponseValue) => void;
}

export function QuestionRenderer({
    question,
    value,
    onChange,
}: QuestionRendererProps) {
    switch (question.type) {
        case "likert":
            return (
                <LikertScale
                    value={value as number | undefined}
                    onChange={(v) => onChange(v)}
                />
            );

        case "text":
            return (
                <TextInput
                    value={value as string | undefined}
                    onChange={(v) => onChange(v)}
                    placeholder={question.placeholder}
                />
            );

        case "multi-choice":
            return (
                <MultiSelect
                    options={question.options || []}
                    value={value as string[] | undefined}
                    onChange={(v) => onChange(v)}
                />
            );

        case "rank-order":
            return (
                <RankSorter
                    options={question.options || []}
                    value={value as string[] | undefined}
                    onChange={(v) => onChange(v)}
                />
            );

        default:
            return (
                <div className="p-4 bg-red-50 text-red-600 rounded-lg">
                    Unknown question type: {question.type}
                </div>
            );
    }
}
