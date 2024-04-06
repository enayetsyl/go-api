import { FAQType } from "@/types/faq";

const soraFaqData: FAQType[] = [
  {
    id: 1,
    quest: "What is the Sora API?",
    ans: "Sora API is an API developed by GoAPI based on the existing GPTs API to allow developers to integrate Sora’s text-to-video generation capabilities into their own generative AI applications.",
  },
  {
    id: 2,
    quest: "When will the Sora API be released?",
    ans: "It is expected thatSorawill be available to the public soon. Most of the Sora API infrastructure has already been built, thus the API will most likely be available after Sora is released to the public by OpenAI.",
  },
  {
    id: 3,
    quest: "Who is Sora API for?",
    ans: "Sora API is designed for developers who are creating AI platforms assisting content creators, educators, marketers, and anyone who is interested in AI and video production, allowing users to easily create video content without prior video production experience. Sora API will allow developers to create additional revenue from providing this ability to their users.",
  },
  {
    id: 4,
    quest: "What type of videos can I make with Sora API?",
    ans: "Sora enables the creation of all types of video, whether it's educational, storytelling, marketing, or creative projects. Sora also has the capability to handle multi-character scenes, intricate animations, and complex settings.",
  },
  {
    id: 5,
    quest: "Are there any current limitations with Sora API?",
    ans: "Yes, as per thistechnical reportfrom OpenAI, Sora currently cannot accurately model real-world physics of different interactions, such as fluid and textile simulation. The model also displays difficulty with yielding the correct change of state for an object, for instance eating a slice pizza. These limitations will most likely be further improved with continued scaling of the model.",
  },
  {
    id: 6,
    quest: "What else can Sora API do?",
    ans: "According to thetechnical reportfrom OpenAI, Sora also has image generation capabilities and the model can generate up to 2048x2048 resolution images. Additionally, Sora already exhibit capabilities of simulating people, animals, and external environments from the physical worlds, as showcased by the intrinsic 3D nature of the sample videos.",
  },
  {
    id: 7,
    quest: "Can I use videos generated from Sora API for commercial purposes?",
    ans: "Yes, videos created with API can be used for personal and commercial purposes, adhering to our terms of service and related to OpenAI copyright laws.",
  },
  {
    id: 8,
    quest: "How can I reach the team and share further feedback?",
    ans: "Please go to our Discord channel to share any feedback you might have, we’d love to hear what our users have to say! 😄",
  },
  
];

export default soraFaqData;
