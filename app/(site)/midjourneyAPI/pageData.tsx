import { PageHeroType } from "@/types/pageHero";

const midjourneyPageData: PageHeroType[] = [
  {
    heading1: 'Stable, cost-effective, and simple',
  heading2: 'Midjourney API',
  heading3: 'for your project!',
  paragraph1: "GoAPI provides simple, cost-effective, and easily-integrated  Midjourney API solutions, we haveve developed the API system to seamlessly integrate into your applications!",      
  paragraph2: '(a project started by indie developer, not affiliated with the official Midjourney)',  
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
  image: '/images/features/cat.jpg', 
}
  
];

export default midjourneyPageData;