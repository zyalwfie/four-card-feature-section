import CalculatorIcon from './assets/icon-calculator.svg';
import KarmaIcon from './assets/icon-karma.svg';
import SupervisorIcon from './assets/icon-supervisor.svg';
import TeamBuilderIcon from './assets/icon-team-builder.svg';

function App() {
	return (
		<main className='px-8 my-12 flex flex-col gap-y-14 items-center'>
			<header className='flex flex-col gap-4 text-center max-w-126'>
				<h1 className='text-2xl font-extralight text-secondary-grey-500 leading-8 tracking-wide'>
					Reliable, efficient delivery
					<br />
					<span className='font-semibold'>Powered by Technology</span>
				</h1>
				<p className='text-secondary-grey-400 text-my-size'>
					Our Artificial Intelligence powered tools use millions of
					project data points to ensure that your project is
					successful
				</p>
			</header>
			<section className='grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 gap-10 max-w-7xl'>
				<article className='rounded-lg shadow-lg p-10 border-t-4 border-primary-cyan flex flex-col gap-4 lg:row-span-2 lg:self-center transition hover:shadow-xl max-w-85'>
					<header className='flex flex-col mb-6'>
						<h2 className='text-xl font-semibold text-secondary-grey-500 mb-2'>
							Supervisor
						</h2>
						<p className='text-my-size text-secondary-grey-400'>
							Monitors activity to identify project roadblocks
						</p>
					</header>
					<figure className='flex items-center justify-end'>
						<img src={SupervisorIcon} alt='' aria-hidden='true' />
					</figure>
				</article>
				<article className='rounded-lg shadow-lg p-10 border-t-4 border-primary-red flex flex-col gap-4 transition hover:shadow-xl max-w-85'>
					<header className='flex flex-col mb-6'>
						<h2 className='text-xl font-semibold text-secondary-grey-500 mb-2'>
							Team Builder
						</h2>
						<p className='text-my-size text-secondary-grey-400'>
							Scans our talent network to create the optimal team
							for your project
						</p>
					</header>
					<figure className='flex items-center justify-end'>
						<img src={TeamBuilderIcon} alt='' aria-hidden='true' />
					</figure>
				</article>
				<article className='rounded-lg shadow-lg p-10 border-t-4 border-primary-orange flex flex-col gap-4 lg:row-start-2 lg:col-start-2 transition hover:shadow-xl max-w-85'>
					<header className='flex flex-col mb-6'>
						<h2 className='text-xl font-semibold text-secondary-grey-500 mb-2'>
							Karma
						</h2>
						<p className='text-my-size text-secondary-grey-400'>
							Regularly evaluates our talent to ensure quality
						</p>
					</header>
					<figure className='flex items-center justify-end'>
						<img src={KarmaIcon} alt='' aria-hidden='true' />
					</figure>
				</article>
				<article className='rounded-lg shadow-lg p-10 border-t-4 border-primary-blue flex flex-col gap-4 lg:row-span-2 lg:self-center transition hover:shadow-xl max-w-85'>
					<header className='flex flex-col mb-6'>
						<h2 className='text-xl font-semibold text-secondary-grey-500 mb-2'>
							Calculator
						</h2>
						<p className='text-my-size text-secondary-grey-400'>
							Uses data from past projects to provide better
							delivery estimates
						</p>
					</header>
					<figure className='flex items-center justify-end'>
						<img src={CalculatorIcon} alt='Calculator Icon' />
					</figure>
				</article>
			</section>
		</main>
	);
}

export default App;
