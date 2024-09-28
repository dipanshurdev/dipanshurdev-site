const animatedName = (): any => {
  // Select all elements with the class "my-name"
  const animatedElements = Array.from(document.querySelectorAll(".my-name"));

  if (!animatedElements.length) {
    return false;
  }

  // Function to wrap random characters in the flicker span
  const wrapRandomChars = (str: string, iterations = 1): string => {
    const chars = str.split("");
    const excludedChars = [" ", "-", ",", ".", ";", ":", "(", ")"];
    const excludedIndexes: number[] = [];
    let i = 0;

    while (i < iterations) {
      const randIndex = Math.floor(Math.random() * chars.length);
      const c = chars[randIndex];

      if (!excludedIndexes.includes(randIndex) && !excludedChars.includes(c)) {
        chars[randIndex] =
          `<span class="animate-flicker text-blue-700">${c}</span>`;
        excludedIndexes.push(randIndex);
        i++;
      }
    }

    return chars.join("");
  };

  // Apply flicker effect to each animated element
  animatedElements.forEach((el) => {
    if (!el) return;
    const text = el.textContent?.trim() || "";
    el.innerHTML = wrapRandomChars(text, 1);
  });

  return true;
};

export default animatedName;

// const setCharWidth = useStore((state: any) => state.setCharWidth);
// DISABLE EFFECT - remove flicker class on letters when switching back to light mode
// if (!document?.documentElement?.classList.contains("dark")) {
//   const flickerElement = document.querySelectorAll(".animate-flicker")?.[0];
//   flickerElement?.classList.remove("animate-flicker");
//   return false;
// }
