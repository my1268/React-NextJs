/** @type {import('next').NextConfig} */

const API_KEY = "4aaf920a62635053ed605da68ab394fe";

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  /*
  async redirects() {
    return [
      {
        source: "/hi/:path*",
        destination: "/bye/:path*",
        permanent: false,
      },
    ];
  }, 
  hi로 치지만 bye로 나옴(URL바뀌었는지 유저가 알음), *아무거나 쳐도 가능
  */
  async rewrites() {
    return [
      {
        source: `/api/movies`,
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
      {
        source: `/api/movies/:id`,
        destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`,
      },
    ];
  },
};
//source라고 말하고 destination이 진짜(URL 똑같음)
module.exports = nextConfig;
