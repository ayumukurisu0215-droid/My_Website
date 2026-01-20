// src/data/projects.ts

// 実績1つひとつの形を定義します
export type Project = {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  link: string;
};

// 実際のデータを配列としてまとめます
export const projects: Project[] = [
  {
    id: 1,
    title: "マイ・ポートフォリオ",
    description: "Next.jsとVercelを使って構築した、自分自身のスキルを証明するためのブログ兼ポートフォリオサイトです。",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://github.com/ayumukurisu0215-droid/My_Website",
  },
  //News-Botに関する情報
  {
    id: 2,
    title: "News-Bot",
    description: "News-Botは、Github Actionsを用いて、RSS Feedを取得し、Gemini APIを用いてニュースを生成し、LINE Messaging APIを用いてニュースを送信するBotです。",
    techStack: ["Github Actions", "Gemini API", "LINE Messaging API","RSS Feed"],
    link: "https://github.com/ayumukurisu0215-droid/News-Bot",
  },
  // Memorize_AIに関する情報
  {
    id: 3,
    title: "Memorize_AI",
    description: "Memorize_AIは、RAGを用いた（chromeDB）、長期記憶が可能なAIです。",
    techStack: ["Python", "Gemini API", "LangChain", "ChromaDB"],
    link: "https://github.com/ayumukurisu0215-droid/Memorize_AI",
  },
  {
    id: 4,
    title: "Oshikatsu-Bot",
    description: "Oshikatsu-BotはWebサイト上のイベント情報をAIが自動抽出し、LINEで通知する自動化システムです。",
    techStack: ["Python", "Gemini API", "Supabase", "GitHub Actions","LINE Messaging API"],
    link: "https://github.com/ayumukurisu0215-droid/Oshikatsu-Bot",
  },
];