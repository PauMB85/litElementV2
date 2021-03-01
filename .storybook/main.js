module.exports = {
    stories: ['../**/stories/*.stories.{js,md,mdx}'],
    esDevServer: {
        nodeResolve: true,
        watch: true,
        open: true,
        babel: true
    }
}