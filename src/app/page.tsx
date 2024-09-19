import { JobFilterValues } from '@/lib/validation'
import JobFilterSidebar from '@/components/JobFilterSidebar'
import JobResults from '@/components/JobResults'

interface PageProps {
	searchParams: {
		q?: string
		type?: string
		location?: string
		remote?: string
		page?: string
	}
}

export default async function HomePage({
	searchParams: { q, type, location, remote, page },
}: PageProps) {
	const filterValues: JobFilterValues = {
		q,
		type,
		location,
		remote: remote === 'true',
	}

	return (
		<main className='m-auto my-10 max-w-5xl space-y-10 px-3'>
			<div className='space-y-5 text-center'>
				<h1 className='sm:text-4xl lg: text-5xl font-extrabold tracking-tight '>
					Developer Jobs
				</h1>
				<p className='text-muted-foreground'>Find your dream job.</p>
			</div>
			<section className='flex flex-col gap-4 md:flex-row'>
				<JobFilterSidebar defaultValues={filterValues} />
				<div className='grow space-y-4'>
					<JobResults filterValues={filterValues} />
				</div>
			</section>
		</main>
	)
}
