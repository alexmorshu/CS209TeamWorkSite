/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage:{
      'backgroundDesrcp': 'url(".//assets/mainDescrpImage.jpg")',
    
        'backgroundDescrpButton': 'url(".//assets/backroundButton.png")',
        'backgroundModalDesign': 'url(".//assets/modalDesign.png")',
        'backgroundChatDesign': 'url(".//assets/chatDesign.jpg")',
        'backgroundConsultDesign': 'url(".//assets/consultDesign.jpg")',
        'backgroundArtcl1': 'url(".//assets/Artcl1.jpg")',
        'backgroundArtcl2': 'url(".//assets/Artcl2.jpg")',
        'backgroundArtcl3': 'url(".//assets/Artcl3.jpg")',
        'backgroundArtcl4': 'url(".//assets/Artcl4.jpg")'
      
      },
    
    },
  },
  plugins: [],
}

