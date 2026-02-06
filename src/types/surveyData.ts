import { Category } from "./survey";

export const surveyCategories: Category[] = [
    {
        name: "Leadership",
        questions: [
            {
                id: "lead-1",
                text: "Does your leadership have a clear vision for the next 3-5 years?",
                type: "likert",
            },
            {
                id: "lead-2",
                text: "What are the primary ways leadership communicates strategic direction?",
                type: "multi-choice",
                options: [
                    "Regular all-hands meetings with Q&A sessions",
                    "Written memos and email updates",
                    "One-on-one conversations with direct reports",
                    "Internal newsletters or intranet posts",
                    "Town halls and open forums",
                ],
            },
        ],
    },
    {
        name: "Strategy",
        questions: [
            {
                id: "strat-1",
                text: "How would you describe your organization's strategic planning process?",
                type: "text",
                placeholder: "Describe the frequency, participants, and methods used in your strategic planning...",
            },
            {
                id: "strat-2",
                text: "Rank the following strategic priorities based on current focus in your organization:",
                type: "rank-order",
                options: [
                    "Customer satisfaction and retention",
                    "Revenue growth and market expansion",
                    "Operational efficiency and cost reduction",
                    "Innovation and product development",
                    "Employee engagement and talent development",
                ],
            },
        ],
    },
    {
        name: "Execution & Operations",
        questions: [
            {
                id: "exec-1",
                text: "Is work reliably getting done as intended across teams?",
                type: "likert",
            },
            {
                id: "exec-2",
                text: "Which operational challenges does your organization face most frequently?",
                type: "multi-choice",
                options: [
                    "Unclear ownership and accountability for deliverables",
                    "Bottlenecks in approval processes",
                    "Lack of visibility into project status",
                    "Resource constraints and competing priorities",
                    "Communication gaps between departments",
                ],
            },
        ],
    },
    {
        name: "Process",
        questions: [
            {
                id: "proc-1",
                text: "Are processes documented and standardized across the organization?",
                type: "likert",
            },
            {
                id: "proc-2",
                text: "Rank these process improvement approaches by how often they are used in your organization:",
                type: "rank-order",
                options: [
                    "Formal process audits and reviews",
                    "Employee feedback and suggestions",
                    "Customer complaint analysis",
                    "Benchmarking against industry standards",
                    "Technology-driven automation initiatives",
                ],
            },
        ],
    },
    {
        name: "People",
        questions: [
            {
                id: "people-1",
                text: "What initiatives does your organization have for employee development?",
                type: "multi-choice",
                options: [
                    "Formal mentorship programs",
                    "Regular training and skill development workshops",
                    "Career pathing and succession planning",
                    "Cross-functional project assignments",
                    "Leadership development programs",
                    "External education reimbursement",
                ],
            },
            {
                id: "people-2",
                text: "Describe how feedback is exchanged between managers and team members.",
                type: "text",
                placeholder: "Include frequency, format, and how feedback is acted upon...",
            },
        ],
    },
    {
        name: "Performance",
        questions: [
            {
                id: "perf-1",
                text: "Are key metrics tracked and visible to all relevant stakeholders?",
                type: "likert",
            },
            {
                id: "perf-2",
                text: "Rank the following performance measurement practices by maturity in your organization:",
                type: "rank-order",
                options: [
                    "Real-time dashboards and KPI tracking",
                    "Regular performance review meetings",
                    "Goal setting and OKR frameworks",
                    "Data-driven decision making processes",
                    "Predictive analytics for forecasting",
                ],
            },
        ],
    },
    {
        name: "Technology",
        questions: [
            {
                id: "tech-1",
                text: "Does technology effectively support your business objectives?",
                type: "likert",
            },
            {
                id: "tech-2",
                text: "What are the biggest technology-related challenges your organization faces?",
                type: "multi-choice",
                options: [
                    "Legacy systems that are difficult to integrate",
                    "Lack of technical expertise in-house",
                    "Security and compliance concerns",
                    "Budget constraints for technology investments",
                    "Resistance to adopting new tools",
                    "Data silos across departments",
                ],
            },
        ],
    },
    {
        name: "Learning",
        questions: [
            {
                id: "learn-1",
                text: "How does your organization capture and share institutional knowledge?",
                type: "text",
                placeholder: "Describe documentation practices, knowledge bases, or other knowledge sharing methods...",
            },
            {
                id: "learn-2",
                text: "Is there a culture of continuous learning and experimentation?",
                type: "likert",
            },
        ],
    },
];

export const consultantInsights: Record<string, string> = {
    Leadership:
        "Strong leadership alignment is the foundation of organizational maturity. Without clear vision, even the best strategies fail.",
    Strategy:
        "Strategic clarity drives execution. Organizations with well-communicated strategies are 3x more likely to achieve their goals.",
    "Execution & Operations":
        "Execution excellence is where strategy meets reality. Organizations that excel here consistently outperform their competitors in delivery and reliability.",
    Process:
        "Process maturity reduces variability and increases predictability. This is critical for scaling operations sustainably.",
    People:
        "People are your greatest asset. Organizations that invest in development and empowerment see 40% higher engagement scores.",
    Performance:
        "What gets measured gets managed. Performance visibility enables data-driven decisions and continuous improvement.",
    Technology:
        "Technology should be an enabler, not a bottleneck. Strategic tech investment yields 5x returns in operational efficiency.",
    Learning:
        "Learning organizations adapt faster. Companies that prioritize knowledge sharing outpace competitors in innovation.",
};
