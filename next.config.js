module.exports = {
  async redirects() {
    return [
      {
        source: "/assam/*",
        destination: "/tours",
        permanent: true,
      },
      {
        source: "/culture/*",
        destination: "/tours",
        permanent: true,
      },
      {
        source: "/cycling/*",
        destination: "/tours",
        permanent: true,
      },
      {
        source: "/family/*",
        destination: "/tours",
        permanent: true,
      },
      {
        source: "/meghalaya/*",
        destination: "/tours",
        permanent: true,
      },
      {
        source: "/motorcycle/*",
        destination: "/tours",
        permanent: true,
      },
      {
        source: "/multiactivity/*",
        destination: "/tours",
        permanent: true,
      },
      {
        source: "/rivertrips/*",
        destination: "/tours",
        permanent: true,
      },
      {
        source: "/treks/*",
        destination: "/tours",
        permanent: true,
      },
      {
        source: "/youth/*",
        destination: "/tours",
        permanent: true,
      },
      {
        source: "/service/active-adventuretours/*",
        destination: "/tours",
        permanent: true,
      },
      {
        source: "/nagaland/*",
        destination: "/tours",
        permanent: true,
      },
      {
        source: "/arunachalpradesh/*",
        destination: "/tours",
        permanent: true,
      },
      {
        source: "/rivertrips/*",
        destination: "/tours",
        permanent: true,
      },
      {
        source: "/wildflowertrails/*",
        destination: "/tours",
        permanent: true,
      },
      {
        source: "/Sikkim/*",
        destination: "/tours",
        permanent: true,
      },
      {
        source: "/departures/*",
        destination: "/tours/departures",
        permanent: true,
      },
      {
        source: "/team/*",
        destination: "/about-us/team",
        permanent: true,
      },
      {
        source: "/insights/*",
        destination: "/about-us/insights",
        permanent: true,
      },
      {
        source: "/about/*",
        destination: "/about-us",
        permanent: true,
      }
    ];
  },
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
module.exports = withBundleAnalyzer({});
