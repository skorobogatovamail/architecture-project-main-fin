export const mfConfig = {
  name: "users",
  exposes: {
    './Welcome': './src/components/Welcome.tsx',
    './UserLogin': './src/components/UserLogin.tsx',
  },
  filename: 'remoteEntry.js',
  shared: ["react", "react-dom"],
};
