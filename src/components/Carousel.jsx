'use client'
import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'

const CarouselDefault = ({ data=[1,2,3,4,5,6,7,8] }) => {
	const [emblaRef, emblaApi] = useEmblaCarousel({align: 'start'})

	const scrollPrev = useCallback(() => {
		if (emblaApi) emblaApi.scrollPrev()
	}, [emblaApi])

	const scrollNext = useCallback(() => {
		if (emblaApi) emblaApi.scrollNext()
	}, [emblaApi])

	return (
		<div className="relative">
			<div ref={emblaRef}>
				<div className='flex gap-14 lg:gap-16'>

					{data.map((a,i) => {
						const Tag = a.url ? 'a' : 'span'
						return (

						<article className='flex-[0_0_70%] lg:flex-[0_0_42%] 2xl:flex-[0_0_35%] group p-2'>
							<Tag {...(a.url ? {href: a.url, 'aria-label': `Ir a la web del proyecto ${a.title}`} : {})}>
								<div className="bg-gray-100 shadow-[0_10px_15px_-3px_#00000011,0_4px_6px_-2px_#00000005] overflow-hidden w-full h-[250px] relative">
									<img width="300" height="300" src={a.images} alt={a.title} loading={a.id === 7 ? 'lazy' : 'eager'} className="group-hover:scale-[1.05] transition-scale duration-250 ease h-full w-full object-cover" />
								</div>
								<div className="pt-4">
									<span className="text-[#5885b2] text-[.9rem] font-medium">{a.tags}</span>
									<h3 className="mb-2 text-[1.1rem] font-semibold">{a.title}</h3>
								</div>
							</Tag>
						</article>
					)})}

				</div>
			</div>

			{/* buttons */}
			<div className='flex gap-4 mt-10 ml-auto w-fit' role="group" aria-label="Carousel controls">
				{[1,2].map(item => (
					<button type="button" aria-label={item===1 ? "Previous" : "Next"} className={`cursor-pointer focus:outline-none bg-black p-3 text-white`} onClick={item===1?scrollPrev:scrollNext}>
						<svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" width={25} height={25} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
							<path stroke="none" d="M0 0h24v24H0z" fill="none" />
							<path d="M5 12l14 0" />
								{item===1 ? (
									<>
										<path d="M5 12l4 4" />
										<path d="M5 12l4 -4" />
									</>
								): (
									<>
										<path d="M15 16l4 -4" />
										<path d="M15 8l4 4" />
									</>
							)}						
						</svg>
					</button>
				))}
			</div>
		</div>
	)
}

export default CarouselDefault