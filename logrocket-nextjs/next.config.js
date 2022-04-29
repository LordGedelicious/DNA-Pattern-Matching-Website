/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
}

module.exports = nextConfig

module.exports = {
    "externals": {
        "electron": "require('electron')",
        "child_process": "require('child_process')",
        "fs": "require('fs')",
        "path": "require('path')"
    },
    exportPathMap: function() {
        return {
            '/': { page: '/' },
            '/ResultsDNA': { page: '/results-Dna' },
            '/AddDNA': { page: '/new-Dna' },
            '/CheckDNA': { page: '/test-Dna' }
        }
    }
}