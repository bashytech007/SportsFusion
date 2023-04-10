const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://widgets.oddspedia.com',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/api'
      },
      headers: {
        'Access-Control-Allow-Origin': '*',
      }
    })
  );
};