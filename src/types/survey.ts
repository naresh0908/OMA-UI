export type QuestionType = 'likert' | 'text' | 'multi-choice' | 'rank-order';

export interface Question {
    id: string;
    text: string;
    type: QuestionType;
    options?: string[]; // For multi-choice and rank-order
    placeholder?: string; // For text
    correctOrder?: string[]; // For rank-order verification if needed, or just generally useful
}

export interface Category {
    name: string;
    questions: Question[];
}

// Likert Scale Definition
export const LIKERT_SCALE = [
    { value: 1, label: "Ad-hoc" },
    { value: 2, label: "Reactive" },
    { value: 3, label: "Defined" },
    { value: 4, label: "Managed" },
    { value: 5, label: "Optimized" },
];
