const config = {
    root: "src/",
    build: {
      outDir: "../build/",
    },
    css: {
      preprocessorOptions: {
        scss: {
          includePaths: ["node_modules/@uswds/uswds/packages"],
        },
      },
    },
  };
  
  export default config;
  