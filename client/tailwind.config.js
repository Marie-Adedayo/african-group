import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  theme: {
    extend: {
      colors: {
        rich_black: {
          100: "#010303",
          200: "#020606",
          300: "#030a0a",
          400: "#030d0d",
          500: "#040f0f",
          600: "#195d5d",
          700: "#2dabab",
          800: "#64d6d6",
          900: "#b2eaea",
        },
        forest_green: {
          100: "#071a0a",
          200: "#0e3514",
          300: "#164f1e",
          400: "#1d6a28",
          500: "#248232",
          600: "#33ba47",
          700: "#5ed370",
          800: "#94e29f",
          900: "#c9f0cf",
        },
        pigment_green: {
          100: "#09210f",
          200: "#11421d",
          300: "#1a642c",
          400: "#22853b",
          500: "#2ba84a",
          600: "#40ce63",
          700: "#6fda8a",
          800: "#9fe6b1",
          900: "#cff3d8",
        },
        gunmetal: {
          100: "#090c0c",
          200: "#121717",
          300: "#1b2323",
          400: "#232e2e",
          500: "#2d3a3a",
          600: "#506868",
          700: "#759595",
          800: "#a3b8b8",
          900: "#d1dcdc",
        },
        baby_powder: {
          100: "#fbfffb",
          200: "#fcfffc",
          300: "#fdfffd",
          400: "#fefffe",
          500: "#fcfffc",
          600: "#fbfffb",
          700: "#fcfffc",
          800: "#fdfffd",
          900: "#fefffe",
        },
      },
    },
  },
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Adjust this path based on your project structure
  ],
  plugins: [],
});