module.exports = {
    darkMode: 'class',
    content: [
        './_drafts/**/*.html',
        './_includes/**/*.html',
        './_layouts/**/*.html',
        './_posts/*.md',
        './*.md',
        './*.html',
    ],
    theme: {
        extend: {
            colors: {
                discord: '#5865F2',
                facebook: '#1877F2',
                linkedin: '#0A66C2',
                github: '#333333',
                reddit: '#FF4500',
                twitter: '#1DA1F2',
                paypal: '#0070BA',
            },
        },
    },
    plugins: []
}