

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  theme: {
    extend: {
      backgroundImage: {
        'y-card': "url('./public/images/yellow-card.png')",
        
      
      }
    }
  },
   assetPrefix: ".",
  output:'export'
}
 
module.exports = nextConfig