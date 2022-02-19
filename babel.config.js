module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "@assets": "./src/assets",
            "@constants": "./src/constants",
            "@components": "./src/components",
            "@config": "./src/config",
            "@navigation": "./src/navigation",
            "@hooks": "./src/hooks",
            "@screens": "./src/screens",
            "@utils": "./src/utils",
            "@services": "./src/services",
            "@images": "./src/assets/images",

          },
        },
      ],
    ],
  };
};
