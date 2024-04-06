import { PageHeroType } from "@/types/pageHero";

export type EndPointsType = {
  image: string;
  heading: string;
  description: string;

}

const llmApiPageData: PageHeroType[] = [
  {
    heading1: 'Reliable and cost effective',
  heading2: 'LLM API',
  heading3: 'for your project!',
  paragraph1: "GoAPI provides simple, cost-effective, and easily-integrated GPT3.5 and GPT-4.0 API solutions for your applications!",      
  paragraph2: "Given the importance of GPT Large Language Models, we've developed the API system to seamlessly integrate into your applications!",  
  buttons: [
    {
      title: "Try API for free!",
      route: "/midjourney-api",
      newTab: true,
    },
    {
      title: "Documentation",
      route: "/gpt-api",
      newTab: true,
    },
    {
      title: "Join Discord",
      route: "/#",
      newTab: true,
    }, 

  ],
  image: '/images/features/bird.jpg', 
}
  
];

export default llmApiPageData;


export const AvailableEndPointsData:EndPointsType[] = [
  {
    image: '/images/features/bird.jpg',
    heading: 'GPT-3',
    description: 'GPT-3 seamlessly follows complex instructions, solving problems accurately with broad knowledge and domain expertise.'
  },
  {
    image: '/images/features/bird.jpg',
    heading: 'GPT-4',
    description: "GPT-4's broader general knowledge and advanced problem-solving abilities enable it to solve difficult problems with greater precision."
  },
  {
    image: '/images/features/bird.jpg',
    heading: 'GPT-4v',
    description: "A cutting-edge feature that enables users to leverage GPT-4's vision analysis capabilities on image inputs provided by the user."
  },
  {
    image: '/images/features/bird.jpg',
    heading: 'DALL-E 3',
    description: "OpenAI's transformative AI system creating captivating visual art from textual descriptions, redefining the possibilities of visual synthesis."
  },
  {
    image: '/images/features/bird.jpg',
    heading: 'TTS',
    description: "Text-to-Speech's (TTS) advanced speech synthesis and heightened language processing capabilities enable it to convert complex text into spoken words with greater accuracy."
  },
  {
    image: '/images/features/bird.jpg',
    heading: 'Transcription',
    description: "Transcription's wider speech recognition capacity and sophisticated language processing capabilities enable it to convert spoken language into written text with increased accuracy."
  },
]