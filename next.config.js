/** @type {import('next').NextConfig} */
const nextConfig = {
    sassOptions: {
        includePaths: ["./src/styles"],
    },
    images: {
        domains: ['image.tmdb.org'],
    },
}

module.exports = nextConfig
