import { FAQType } from "@/types/faq";

const sunoFaqData: FAQType[] = [
  {
    id: 1,
    quest: "What is Suno API?",
    ans: "It is expected that Suno API is an API developed by GoAPI, allowing developers worldwide to integrate Suno AI’s exciting text-to-music generation capabilities into their owngenerative AI applications.",
  },
  {
    id: 2,
    quest: "How do Suno API work?",
    ans: "As a reverse proxy running on the existing web application, Suno API provides you with the ability to integrate Suno AI's music generation capability into your applications!",
  },
  {
    id: 3,
    quest: "When will Suno API be released?",
    ans: "As Suno’s web application is already available, GoAPI has already started building the API and it is expected to be released in mid-April.",
  },
  {
    id: 4,
    quest: "How much will the API cost?",
    ans: "The generation API will cost $0.02 per API call; the continue API will cost $0.04 per API call.",
  },
  {
    id: 5,
    quest: "What kind of concurrency do you support?",
    ans: "Overall our system supports large number of concurrencies. The free default hobbyist plan will provide you with 3 concurrent generations, the Developer Plan provides you with 9 concurrent generations, and the Premium Plan provides you 15 concurrent generations.",
  },
  {
    id: 6,
    quest: "Do you offer the 'continue' function from Suno AI?",
    ans: "Yes, our API will support the 'Continue from This Clip' feature allowing users to add their own lyrics and style of music from an existing song.",
  },
  {
    id: 7,
    quest: "Who should use Suno API?",
    ans: "Suno API is tailored for developers who are creating music generation AI applications assisting musicians, music enthusiasts, or anyone who is interested in music generation AI and/or music production. This music generation API leverage Suno AI and allows users to freely make music content without any musical background; thus creating new revenue opportunities for developers by providing their users with this capability.",
  },
  {
    id: 8,
    quest: "What kind of music can I make with Suno API?",
    ans: "Suno AI allows the making of all types of music, regardless of genre, instrument, lyrics, melody or vibe. With this API, your users will have the ability to create personalized songs with complex mixture of genres, sound and rhythm.",
  },
  {
    id: 9,
    quest: "Will V3 be supported through the API?",
    ans: "Yes, Suno V3 model will be the default model version for the API!",
  },
  {
    id: 10,
    quest: "Are there any current limitations with Suno API?",
    ans: "The API only allows for the newest V3 model for now. Also, it has been reported that Suno currently has limited control over specific aspect of the compositions as well as specific notes/chords and mobile view. These setbacks are likely to be improved along the way with the help of scaling.",
  },
  {
    id: 11,
    quest: "What else can Suno API do?",
    ans: "According to their report , their latest v3 model is capable of producing radio-quality music and the ability to make songs in seconds. Moreover, Suno has upgraded their audio quality, expanded styles and genres, and improved adherence to prompts, resulting in fewer hallucinations and smoother endings.",
  },
  {
    id: 12,
    quest: "Can I use music generated from Suno API for general purposes?",
    ans: "Suno will retain the ownership of the songs you generate through Suno API, but you are allowed to use those songs for non-commercial purposes, subject to your compliance with Suno’s Terms of Service . If you want to use the songs you generate for commerical purposes, please contact us through Discord!",
  },
  {
    id: 13,
    quest: "How can I reach the team and share further feedback?",
    ans: "Please go to our Discord channel to share any feedback you might have, we’d love to hear what our users have to say! 😄",
  },
  
];

export default sunoFaqData;
