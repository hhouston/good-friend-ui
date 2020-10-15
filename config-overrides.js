const { override, fixBabelImports, addLessLoader } = require('customize-cra')

module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: {
            '@primary-color': '#2b137d',
            '@text-color-secondary': '#2A2C44',
            '@heading-color': '#2b137d',
            '@text-color': '#2b137d',
            '@heading-1-size': 'ceil(@font-size-base * 3.4)',
            '@table-header-bg': '#F5F8FB',
            '@table-header-color': '#ADC0D6',
            '@table-selected-row-color': '#405693',
            '@font-family': ['Karla', 'sans-serif'],
            '@font-size-base': '16px',
        },
    })
)
