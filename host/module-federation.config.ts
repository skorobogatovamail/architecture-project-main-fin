export const mfConfig = {
  name: "host",
  exposes: {},
  shared: ["react", "react-dom"],
  remotes: {
    'users': 'users@http://localhost:8081/remoteEntry.js',
    'tasks': 'tasks@http://localhost:8082/remoteEntry.js'
  }
};
