export type PageHeroType = {
  heading1: string;
  heading2: string;
  heading3: string;
  paragraph1: string;       
  paragraph2: string;  
  buttons: ButtonRoutes[];
  image: string;     
}

type ButtonRoutes = {
  title: string;
  route: string;
  newTab: boolean;
};