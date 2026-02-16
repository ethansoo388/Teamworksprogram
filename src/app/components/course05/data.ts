import { Clock, Users, MapPin, Target, Sparkles, Zap, Shield, Lightbulb, TrendingUp, Building, Briefcase, User, Building2, Settings, Hand } from "lucide-react";
import type { StorySlide, InvestmentCard, SkillItem, CourseModule, LearningOutcome, PersonaCard, FAQItem, CourseDetail } from "@/types";

export const stories: StorySlide[] = [
  {
    image: "https://i.postimg.cc/3xxh89jd/Untitled-design-(34).png",
    title: "From Overwhelmed to Empowered",
    emotion: "Relief & Confidence",
    story: "AI drafts emails, summarizes reports, and organizes data in seconds. Your team focuses on what truly matters.",
    highlight: "3-5 hours saved weekly per team member",
  },
  {
    image: "https://images.unsplash.com/photo-1557562645-4eee56b29bc1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYWxheXNpYW4lMjBkZXZlbG9wZXIlMjBjb2RpbmclMjBwcm9ncmFtbWluZ3xlbnwxfHx8fDE3NzA4Njk3ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Faster Coding with AI Assistance",
    emotion: "Speed & Efficiency",
    story: "AI helps debug code, suggests optimizations, and generates documentation. Developers ship features faster with fewer errors.",
    highlight: "50% faster code reviews and debugging",
  },
  {
    image: "https://i.postimg.cc/6qx7gFvQ/teamwork.jpg",
    title: "Teams Working Smarter Together",
    emotion: "Collaboration & Growth",
    story: "AI generates ideas, creates presentations, and solves problems faster. Everyone contributes more effectively.",
    highlight: "Shared skills that elevate the entire team",
  },
  {
    image: "https://i.postimg.cc/sxkHqYPx/Malaysian-team-have-more-imaginative-solutions-at-work.jpg",
    title: "More Imaginative Solutions",
    emotion: "Innovation & Creativity",
    story: "AI generates alternative approaches, explores new angles, and challenges assumptions. Teams break through creative blocks.",
    highlight: "Unlock 10x more ideas in brainstorming sessions",
  },
  {
    image: "https://i.postimg.cc/gjzSVt23/confident.jpg",
    title: "Confidence in Every Task",
    emotion: "Pride & Achievement",
    story: "AI handles repetitive tasks like formatting and extracting information. Your team works faster with less stress.",
    highlight: "Skills that boost morale and productivity",
  },
  {
    image: "https://i.postimg.cc/BZmKpZSP/Heading.png",
    title: "Data Insights in Minutes, Not Days",
    emotion: "Precision & Clarity",
    story: "AI analyzes spreadsheets, identifies patterns, and creates visualizations instantly. Make data-driven decisions faster.",
    highlight: "Transform complex data into actionable insights",
  },
  {
    image: "https://i.postimg.cc/mDjfWHcr/Malaysian-employees-celebrating-win-together.jpg",
    title: "Celebrating Wins Together",
    emotion: "Joy & Success",
    story: "AI accelerates projects and improves output quality. Your team delivers better results and meets deadlines easier.",
    highlight: "Building momentum for lasting change",
  },
];

export const investments: InvestmentCard[] = [
  {
    company: "Microsoft",
    amount: "$13 billion",
    year: "2023",
    focus: "OpenAI & Azure AI",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/512px-Microsoft_logo.svg.png",
    description: "Microsoft invested heavily in OpenAI, integrating AI capabilities across Office 365, Azure cloud services, and enterprise solutions, making AI tools accessible to millions of businesses worldwide.",
  },
  {
    company: "Google",
    amount: "$70 billion",
    year: "2024",
    focus: "AI Infrastructure",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/512px-Google_2015_logo.svg.png",
    description: "Google's massive investment in AI infrastructure powers Gemini, Bard, and enterprise AI solutions, transforming how businesses leverage data and automation at scale.",
  },
  {
    company: "Amazon",
    amount: "$4 billion",
    year: "2024",
    focus: "Anthropic & AWS AI",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/512px-Amazon_logo.svg.png",
    description: "Amazon's investment in Anthropic and AWS AI services brings advanced language models and machine learning tools to businesses of all sizes through cloud infrastructure.",
  },
  {
    company: "Meta",
    amount: "$30+ billion",
    year: "2024",
    focus: "AI Research & Development",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/512px-Meta_Platforms_Inc._logo.svg.png",
    description: "Meta's commitment to open-source AI through LLaMA and extensive R&D investments are democratizing access to powerful AI models for developers and businesses globally.",
  },
];

export const skills: SkillItem[] = [
  { title: "Prompt better", details: "Tools, ideas, images, solutions" },
  { title: "Write better", details: "Emails, reports, marketing content" },
  { title: "Analyze better", details: "Reports, documents, trends, patterns" },
  { title: "Automate better", details: "Remove repetition, eliminate mundane tasks" },
  { title: "Decide better", details: "Quick insights, accurate data, confidence" },
  { title: "Use AI responsibly", details: "Ethics, safety, privacy, trust" },
];

export const courseModules: CourseModule[] = [
  {
    number: "01",
    title: "AI Basics for Busy Teams",
    description: "Understand what AI can and cannot do at work. Learn where AI adds real value, where it doesn't, and experience your first hands-on interaction with AI in a safe, guided way.",
    highlight: "Get hands-on from day one",
  },
  {
    number: "02",
    title: "Prompting That Actually Works",
    description: "Learn how to communicate with AI clearly and effectively. Participants are guided step-by-step through simple prompt structures to get better, more useful outputs.",
    highlight: "Master the art of AI conversation",
  },
  {
    number: "03",
    title: "AI for Everyday Work",
    description: "Apply AI to common workplace tasks such as emails, reports, summaries, research, and planning through group-based activities focused on real work scenarios.",
    highlight: "Use AI for real tasks immediately",
  },
  {
    number: "04",
    title: 'The "Role-Based Deep Dives" with AI (Specialist Tracks)',
    description: "Explore practical AI use cases for different teams including Marketing, Operations, HR, IT, and Sales. Learn how AI supports each role without replacing human judgement.",
    highlight: "Tailored to your team's needs",
  },
  {
    number: "05",
    title: "Safe and Responsible AI at Work",
    description: "Understand common AI risks such as data privacy, hallucinations, and over-reliance. Learn how to use AI responsibly through demonstrations using simulated data.",
    highlight: "Build trust and confidence",
  },
  {
    number: "06",
    title: "Final AI Challenge: End-to-End Simulation",
    description: "Teams take on realistic departmental scenarios and use AI tools end-to-end to solve problems, improve outputs, and present results based on everything learned during the course.",
    highlight: "Apply everything you've learned",
  },
];

export const learningOutcomes: LearningOutcome[] = [
  { icon: Target, title: "Use AI tools confidently for daily work tasks", color: "from-blue-500 to-cyan-500" },
  { icon: Sparkles, title: "Write effective prompts to get useful results", color: "from-purple-500 to-pink-500" },
  { icon: Zap, title: "Automate repetitive thinking and admin work", color: "from-amber-500 to-orange-500" },
  { icon: Shield, title: "Apply AI safely within workplace boundaries", color: "from-green-500 to-emerald-500" },
  { icon: Lightbulb, title: "Identify high-impact AI use cases for your role or team", color: "from-yellow-500 to-amber-500" },
  { icon: TrendingUp, title: "Leave with a practical AI action plan for immediate application", color: "from-indigo-500 to-blue-500" },
];

export const personas: PersonaCard[] = [
  { icon: Users, title: "Team Leaders and Supervisors", description: "Want their teams to work faster without increasing stress or burnout.", color: "bg-blue-100 text-[#0EA7E9]" },
  { icon: Building, title: "SME Owners and Managers", description: "Need AI to save time and improve efficiency without technical complexity.", color: "bg-teal-100 text-teal-600" },
  { icon: Briefcase, title: "Corporate Teams", description: "Operations, HR, Sales, IT, and Support teams looking for practical AI skills.", color: "bg-sky-100 text-sky-600" },
  { icon: User, title: "Individual Professionals", description: "Want to stay relevant, productive, and AI-savvy at work.", color: "bg-emerald-100 text-emerald-600" },
];

export const masterTopics = [
  "AI Fundamentals for Teams",
  "Effective Prompt Engineering",
  "Workplace AI Applications",
  "Department-Specific Use Cases",
  "Responsible AI Practices",
  "End-to-End AI Implementation",
];

export const faqs: FAQItem[] = [
  {
    question: "Do I need any technical background or coding experience?",
    answer: "Not at all! This course is specifically designed for non-technical professionals. We start from the basics and focus on practical applications you can use immediately in your daily work, regardless of your technical expertise.",
  },
  {
    question: "How is this different from free online AI courses?",
    answer: "Unlike generic online courses, this training is hands-on, interactive, and tailored for Malaysian workplace contexts. You'll work on real scenarios relevant to your industry, get immediate feedback from expert instructors, and network with peers facing similar challenges.",
  },
  {
    question: "Will AI replace my job or my team's jobs?",
    answer: "AI is a tool that augments human capabilities, not replaces them. This course teaches you how to use AI to eliminate repetitive tasks so you can focus on creative, strategic, and relationship-driven work that only humans can do well.",
  },
  {
    question: "Is this course suitable for small businesses and SMEs?",
    answer: "Absolutely! The course is specifically designed with SMEs and small teams in mind. All examples and use cases are practical and immediately applicable without requiring large budgets or IT departments.",
  },
  {
    question: "How quickly can my team see results after the training?",
    answer: "Most teams start seeing productivity gains within the first week. You'll leave the course with ready-to-use prompts, templates, and workflows that you can implement immediately in your daily operations.",
  },
];

export const courseDetails: CourseDetail[] = [
  { icon: Clock, label: "Duration", value: "2 days" },
  { icon: MapPin, label: "Format", value: "In-person training" },
  { icon: Users, label: "Group size", value: "Max 30 participants" },
  { icon: Hand, label: "Learning style", value: "Hands-on, guided, practical" },
  { icon: Building2, label: "Location", value: "Malaysia" },
  { icon: Settings, label: "Customization", value: "Custom private runs available for companies" },
];
