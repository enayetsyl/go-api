import { PageHeroType } from "@/types/pageHero";

export type SupportedModesType = {
  image: string;
  heading: string;
  description: string;
  linkText: string;
  link: string;
  textAfterLink: string;
}


const stableDiffusionPageData: PageHeroType[] = [
  {
    heading1: 'Reliable and cost effective',
  heading2: 'Stable Diffusion API',
  heading3: 'for your project!',
  paragraph1: "GoAPI provides simple, cost-effective, and easily-integrated Stable Diffusion API solutions for your applications!",      
  paragraph2: "We share the same passion for Stable Diffusion just as you do, that is why we've developed the API system to seamlessly integrate into your applications!",  
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
  image: '/images/features/dog.jpg', 
}
  
];

export default stableDiffusionPageData;


export const supportedModes:SupportedModesType[] = [
  {
    image: '/images/features/dog.jpg',
    heading: 'txt2img',
    description: 'Generates image from an initial text prompt (See our documentation for a list of',
    linkText: "available CheckPoint Models",
    link:"https://www.goapi.ai/docs/stable-diffusion-api/checkpoint-models-all",
    textAfterLink: ")"
  },
  {
    image: '/images/features/dog.jpg',
    heading: 'img2img',
    description: 'Generates image from an already drawn image (See our documentation for a list of',
    linkText: "available CheckPoint Models",
    link:"https://www.goapi.ai/docs/stable-diffusion-api/checkpoint-models-all",
    textAfterLink: ")"
  },
  {
    image: '/images/features/dog.jpg',
    heading: 'Upscale',
    description: 'Upscale images to a higher resolution (You can also control the amount of upscale needed by using the ',
    linkText: "scale",
    link:"https://www.goapi.ai/docs/stable-diffusion-api/checkpoint-models-all",
    textAfterLink: "parameter in the API)"
  },
  {
    image: '/images/features/dog.jpg',
    heading: 'ControlNet',
    description: 'ControlNet enables users to add additional conditions for the image generation process (See our documentation for a list of',
    linkText: "available CheckPoint Models",
    link:"https://www.goapi.ai/docs/stable-diffusion-api/checkpoint-models-all",
    textAfterLink: ")"
  },
    
]