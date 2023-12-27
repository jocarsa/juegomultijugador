function getRandomHexColor() {
  // Generate a random number between 0 and 16777215 (corresponding to #000000 to #FFFFFF)
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  
  // Ensure the color has 6 digits by padding with zeros if needed
  const hexColor = '#' + ('000000' + randomColor).slice(-6);
  
  return hexColor;
}