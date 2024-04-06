import { Feature } from "@/types/feature";


const featuresData: Feature[] = [
  {
    id: 1,
    icon: "/images/features/cat.jpg",
    title: "Midjourney API",
    description: 'A cute cat....',
    image: true,
    buttonText: "Generate image",
  },
  {
    id: 2,
    icon:'',
    title: "GPTs API",
    prompt: 'What is the temperature',
    response: 'Browsing web....',
    placeholder: "Use Code Interpreter for....",
  },
  {
    id: 3,
    icon:'',
    title: "GPT3.5/GPT4 API",
    prompt: '.',
    response: '.',
    placeholder: "Help me rewrite this....",
  },
  {
    id: 4,
    icon: "/images/features/cat.jpg",
    title: "GPT4 Vision API",
    prompt: '.',
    response: '.',
    placeholder: "What is in this image?",
  },
  {
    id: 5,
    icon: "/images/features/dog.jpg",
    title: "DALLE 3 API",
    description: 'A cute dog...',
    image: true,
    buttonText: "Generate image",
  },
  {
    id: 6,
    icon: "/images/features/bird.jpg",
    title: "Stable Diffusion API",
    description: 'A bird...',
    image: true,
    buttonText: "Generate image",
  },
  {
    id: 7,
    title: "Transcription API",
    icon:'',
    description: "Hello my name is.",
    buttonText: "Transcribe to text",
    transcript: true,
  },
  {
    id: 7,
    title: "TTS API",
    icon:'',
    description: "How are you",
    buttonText: "Generate audio",
    transcript: true,
  },
  
];

export default featuresData;
