import { Metadata } from 'next'

import { JobFilterValues } from '@/lib/validation'
import JobFilterSidebar from '@/components/JobFilterSidebar'
import JobResults from '@/components/JobResults'
import H1 from '@/components/ui/h1'

interface PageProps {
	searchParams: {
		q?: string
		type?: string
		location?: string
		remote?: string
		page?: string
	}
}

function getTitle({ q, type, location, remote }: JobFilterValues) {
	const titlePrefix = q
		? `${q} jobs`
		: type
			? `${type} developer jobs`
			: remote
				? 'Remote developer jobs'
				: 'All developer jobs'

	const titleSuffix = location ? ` in ${location}` : ''

	return `${titlePrefix}${titleSuffix}`
}

export function generateMetadata({
	searchParams: { q, type, location, remote },
}: PageProps): Metadata {
	return {
		title: `${getTitle({
			q,
			type,
			location,
			remote: remote === 'true',
		})} | Flow Jobs`,
	}
}

export default async function HomePage({
	// eslint-disable-next-line no-unused-vars
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
				<H1>{getTitle(filterValues)}</H1>
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
