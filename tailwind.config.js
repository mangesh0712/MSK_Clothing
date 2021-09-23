module.exports = {
  purge: [],
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      width: {
        "1/10": "10%",
        "1.5/10": "15%",
        "2/10": "20%",
        "2.5/10": "25%",
        "3/10": "30%",
        "4/10": "40%",
        "5/10": "50%",
        "6/10": "60%",
        "7/10": "70%",
        "8/10": "80%",
        "9/10": "90%",
      },
    },
  },
  variants: {
    extend: {},
  },
  daisyui: {
    styled: true,
    themes: false,
    rtl: false,
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    require("daisyui"),
    require("tailwind-scrollbar"),
  ],
};
