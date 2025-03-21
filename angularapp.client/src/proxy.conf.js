const PROXY_CONFIG = [
  {
    context: ["/api", "/resources", "/Resources"],
    target: "https://localhost:7260",
    secure: false,
  },
];

module.exports = PROXY_CONFIG;
