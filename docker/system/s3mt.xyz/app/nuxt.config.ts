import { resolve } from 'path'

export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@vueuse/motion/nuxt'],
  ssr: false,
  app: {
    head: {
      title: 'S3MT Token Presale',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Simple Sustainable Smart Mining Token (S3MT) Presale' }
      ]
    }
  },

  css: [
    '~/assets/css/main.css',
    // Wallet styles are imported in the plugin
  ],

  runtimeConfig: {
    public: {
      solanaNetwork: process.env.SOLANA_NETWORK || 'http://localhost:8899',
      presaleProgramId: process.env.PRESALE_PROGRAM_ID || '5tz5xFvHNnJViiCZ3iHdgqrTC1GfcEvnB49KoxvQpR3D',
      usdcMint: process.env.USDC_MINT || 'HfED8AJT8pZvAzsGLV6FdYt5W6SLekbimgV8yS9LNcfW',
      treasury: process.env.TREASURY || '3vgJTkBPHGh7qK87CcouAxvvJnu95LRLKC9tNmz2XyGj',
      presaleEndDate: new Date(process.env.PRESALE_END_DATE || Date.now() + 30 * 24 * 60 * 60 * 1000 ).toISOString() || new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(), // 30 days from now by default
      motion: {
        directives: {
          // your motion directives if any
        }
      }
    }
  },

  build: {
    transpile: [
      '@solana/wallet-adapter-base',
      '@solana/wallet-adapter-wallets',
      'solana-wallets-vue',
      '@solana/wallet-adapter-vue'
    ]
  },

  vite: {
    esbuild: {
      target: "esnext",
    },
    build: {
      target: "esnext",
    },
    optimizeDeps: {
      include: [
        'eventemitter3',
        'bs58',
        'events',
        '@solana/web3.js',
        '@coral-xyz/anchor',
        'buffer'
      ],
      esbuildOptions: {
        target: 'esnext',
      }
    },
    resolve: {
      alias: {
        buffer: 'buffer/',
        '@coral-xyz/anchor': '@coral-xyz/anchor/dist/browser/index.js',
        //'jayson/lib/client/browser': resolve(__dirname, 'node_modules/jayson/lib/client/browser/index.js')
      }
    },
    // Ensure browser environment
    define: {
      'process.env.BROWSER': true,
    }
  },

  nitro: {
    alias: {
      'jayson/lib/client/browser/index.js': resolve(__dirname, 'node_modules/jayson/lib/client/browser/index.js'),
      'jayson/lib/client/browser': resolve(__dirname, 'node_modules/jayson/lib/client/browser/index.js')
    }
  },
  compatibilityDate: '2025-04-02',
})