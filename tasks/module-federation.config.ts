export const mfConfig = {
  name: "tasks",
  exposes: {
    './TaskList': './src/components/TaskList.tsx'
  },
  filename: 'remoteEntry.js',
  shared: ["react", "react-dom"],
};
