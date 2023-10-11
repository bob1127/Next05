/** @type {import('next').NextConfig} */
const nextConfig = {
  // 開發模式中必須要註解掉，專門給output static 
  assetPrefix: ".",
 images: {
        domains: ['www.zensor.com.tw'],
         loader: "imgix",
   path: "/",
    },
  images: {
    loader: "imgix",
    path: "/",
      domains: [''],
  },
    output:'export'

}

module.exports = nextConfig