module.exports = {
  apps : [{
    name: "my-next-app",
    script: "npm",
    args: "run dev",
    env: {
      NODE_ENV: "development",
    },
  }],
};

// module.exports = {
//   apps : [{
//     name: "my-next-app",
//     script: "npm",
//     args: "start",
//     env: {
//       NODE_ENV: "production",
//     },
//     restart_delay: 5000,
//   }],
// };

