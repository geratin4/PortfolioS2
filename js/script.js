window.addEventListener('scroll', () => {
    const scrollY = window.scrollY; // Gets the number of pixels the document is currently scrolled along the vertical axis
    const maxOffset = 150; // Maximum offset in pixels
  
    // Calculate the offset based on the scroll position. You can adjust the formula to change the effect.
    let offset = Math.min(scrollY, maxOffset);
  
    // Apply the offset to the boxes
    document.querySelector('.box1').style.transform = `translate(-50%, calc(-50% - ${offset}px))`;
    document.querySelector('.box2').style.transform = `translate(-50%, calc(-50% + ${offset}px))`;
  });
  


