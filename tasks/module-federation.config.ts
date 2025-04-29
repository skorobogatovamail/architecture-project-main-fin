export const mfConfig = {
  name: "tasks",
  exposes: {
    './TasksTestControl': './src/components/TasksTestControl.tsx'
  },
  filename: 'remoteEntry.js',
  shared: ["react", "react-dom"],
};
