/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         primary: "#1a202c", // Dark text for a light theme
//         secondary: "#2d3748", // Slightly lighter text
//         background: "#f7fafc", // Light background color
//         accent: "#e2e8f0", // Light accent color for borders or backgrounds
//         "light-gray": "#edf2f7", // Light gray for subtle backgrounds
//         "soft-blue": "#90cdf4", // Soft blue for buttons or highlights
//         "light-text": "#4a5568", // Light text color
//       },
//       backgroundImage: {
//         "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
//         "gradient-conic":
//           "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
//       },
//       fontFamily: {
//         sans: ["Inter", "sans-serif"], // Example font family for light theme
//       },
//     },
//   },
//   plugins: [],
// };


// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   darkMode: 'class', // Enable dark mode
//   content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         lightBg: '#ffffff',
//         darkBg: '#1a1a1a',
//         lightText: '#252020',
//         darkText: '#ffffff',
//       },
//     },
//   },
//   plugins: [],
// };
