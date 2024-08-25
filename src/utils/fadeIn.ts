export const fadeIn = (
  content: Element,
  withScroll: boolean,
  setState: React.Dispatch<React.SetStateAction<boolean>>
) => {
  let threshold = 0;
  if (withScroll) {
    const windowHeight = window.innerHeight;
    window.addEventListener("scroll", () => {
      const offset = content.getBoundingClientRect().top;
      threshold = offset - windowHeight;
      if (threshold < 0) setState(true);
      else setState(false);
    });
  } else {
    setState(true);
  }
};
