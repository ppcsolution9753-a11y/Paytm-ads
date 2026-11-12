import type { Config } from 'tailwindcss';
const config: Config = { content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'], theme: { extend: { colors: { navy: '#092B67', ink: '#17243A', cyan: '#11BCE0', cloud: '#F4F8FC' }, fontFamily: { display: ['Georgia', 'Times New Roman', 'serif'], sans: ['Inter', 'Arial', 'sans-serif'] }, boxShadow: { premium: '0 20px 55px rgba(6,29,73,.10)' } } }, plugins: [] };
export default config;
