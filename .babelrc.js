module.exports = {
    ignore: ['node_modules'],
    presets: [
        '@babel/preset-react',
        [
            '@babel/preset-env',
            {
                targets: { browsers: ['last 2 versions'] },
                modules: false
            }
        ]
    ],
    plugins: [
        'react-hot-loader/babel',
        ['@babel/plugin-proposal-decorators', { legacy: true }],
        ['@babel/plugin-proposal-class-properties', { loose: true }]
    ]
};
