/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				hostname: 'h5z02xs6cufwlivm.public.blob.vercel-storage.com',
			},
		],
	},
}

module.exports = nextConfig
