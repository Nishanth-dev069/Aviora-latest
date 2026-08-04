declare module 'gsap' {
  const gsap: any;
  export default gsap;
  export * from 'gsap';
}

declare module 'gsap/*' {
  const content: any;
  export default content;
  export * from 'gsap';
}

declare module 'gsap/ScrollTrigger' {
  export const ScrollTrigger: any;
  export default ScrollTrigger;
}

declare module 'tinacms' {
  export const defineConfig: any;
  export const useTina: any;
  export const TinaMarkdown: any;
  const tinacms: any;
  export default tinacms;
}

declare module 'tinacms/*' {
  const content: any;
  export default content;
}
