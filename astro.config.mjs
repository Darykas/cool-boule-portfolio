// @ts-check
import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import react from '@astrojs/react';
import edgeoneAdapter from '@edgeone/astro';

// https://astro.build/config
export default defineConfig({
  adapter: netlify(),
  output: 'static',
  integrations: [react()]
});