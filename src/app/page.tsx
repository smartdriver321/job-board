import prisma from '@/lib/prisma'
import JobListItem from '@/components/JobListItem'

export default async function HomePage() {
	const jobs = await prisma.job.findMany({
		where: { approved: true },
		orderBy: { createdAt: 'desc' },
	})

	return (
		<main className='m-auto my-10 max-w-5xl space-y-10 px-3'>
			<div className='space-y-5 text-center'>
				<h1 className='sm:text-4xl lg: text-5xl font-extrabold tracking-tight '>
					Developer Jobs
				</h1>
				<p className='text-muted-foreground'>Find your dream job</p>
			</div>
			{jobs.map((job) => (
				<JobListItem job={job} key={job.id} />
			))}
		</main>
	)
}
