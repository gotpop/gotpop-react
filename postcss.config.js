module.exports = () => ({
    plugins: {
        'postcss-nested': {},
        'postcss-preset-env': {
            stage: 0,
            features: {
                'media-query-ranges': true,
                'custom-media-queries': true
            }
        },
    }
})
