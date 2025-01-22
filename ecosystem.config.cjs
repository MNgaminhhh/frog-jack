module.exports = {
  apps: [
    {
      name: "Black Jack",
      script: "yarn",
      args: "preview --port 4970 --host",
      cwd: "/var/www/frog-jack",
      env: {
        PM2_SERVE_PATH: "./dist",
        PM2_SERVE_PORT: 4970,
        PM2_SERVE_SPA: "true",
        PM2_SERVE_HOMEPAGE: "/index.html",
      },
    },
  ],
};
