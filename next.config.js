/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ['random.imagecdn.app', 'res.cloudinary.com']
	},
	async redirects() {
		return [
			{
				source: '/nuestros-trabajos',
				destination: '/nuestros-trabajos/Montajes-Industriales',
				permanent: true
			}
		];
	}
};

module.exports = nextConfig;
