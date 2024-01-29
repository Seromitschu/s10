import { resolve } from 'path'
import components from "./config/components"

export default {
    /*alias: {
        'style': resolve(__dirname, './assets/css')
    },*/
    target: 'static',
    build: {
        extractCSS: true,
    },
    buildModules: [
        '@nuxtjs/dotenv'
    ],
    modules: [
        '@nuxtjs/tailwindcss'
    ],
    env: {
        TEST: process.env.TEST,
    },
    css: [
        '~/assets/css/main.css'
    ],
    plugins: [
        '~/assets/js/main.js'
    ],
    head: {
        title: 'Seromitschu',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            {
                hid: 'description',
                name: 'description',
                content: "Welcome to Serhat's personal website. Here you can find out more about Serhat."
            }
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: 'icon64x.png' }]
    },
    noscript: [
        { innerHTML: 'This website requires JavaScript.' }
    ],
    tailwindcss: {
        // Options
    }
}
