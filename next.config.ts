module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/dashboard',
        destination: '/auth/masuk',
        permanent: false,
        has: [
          {
            type: 'cookie',
            key: 'next-auth.session-token',
            value: '',
          },
        ],
      },
    ];
  },
};
