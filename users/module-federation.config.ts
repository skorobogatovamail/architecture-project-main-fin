export const mfConfig = {
  name: "users",
  exposes: {
    './UsersTestControl': './src/components/UsersTestControl.tsx'
  },
  filename: 'remoteEntry.js',
  shared: ["react", "react-dom"],
};
