import path from 'path'

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
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
};
  
  export default config;
  