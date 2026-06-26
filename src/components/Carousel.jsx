'use client'
import React, { useCallback, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'

const CarouselDefault = ({ data=[1,2,3,4,5,6], id=0 }) => {
	const [emblaRef, emblaApi] = useEmblaCarousel({align: 'start'})
	const [details,setDetails] = useState(true)

	const scrollPrev = useCallback(() => {
		if (emblaApi) emblaApi.scrollPrev()
	}, [emblaApi])

	const scrollNext = useCallback(() => {
		if (emblaApi) emblaApi.scrollNext()
	}, [emblaApi])

	return (
		<div className="relative">

			<div ref={emblaRef}>
				<div className={`flex gap-10`}>
					{data.map((a,i) => {
						const Tag = a.url ? 'a' : 'span'
						return (

						<article className="group flex-[0_0_30%]">
							<Tag {...(a.url ? {href: a.url, 'aria-label': `Ir a la web del proyecto ${a.title}`, target: '_blank'} : {})}>
								<div className="bg-gray-100 group-hover:shadow-[0_0_12px_rgba(0,0,0,0.1)] transition-shadow ease duration-250 overflow-hidden w-full h-[250px] relative">
									<img width="300" height="300" src={a.images} alt={a.title} loading={a.id === 7 ? 'lazy' : 'eager'} className="group-hover:scale-[1.05] transition-scale duration-250 ease h-full w-full object-cover" />
									{a.url && (
										<span className="text-[#eee] font-medium absolute top-5 right-5 p-2 bg-[#000a] text-xs flex items-center font-medium gap-1">
											<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-link"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 15l6 -6" /><path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" /><path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" /></svg>
											enlace
										</span>
									)}
								</div>
								<div className="pt-5">
									<span className="text-sm text-[rgba(0,0,0,0.7)] font-medium">{a.tags}</span>
									<h3 className="mb-2 font-semibold">{a.title}</h3>
									<p className={`${details ? 'line-clamp-2' : ''} text-[.9rem] text-[rgba(0,0,0,0.5)]`} style={{whiteSpace: "pre-line"}}>{a.desc}</p>
								</div>
							</Tag>
						</article>
					)})}
				</div>
			</div>

			{/* buttons */}
			<div className='flex gap-2 mt-10 ml-auto w-fit'>
				{[1,2,3].map(item => (
					<button className={`cursor-pointer focus:outline-none bg-black p-3 text-white`} onClick={item===1 ? ()=> setDetails(!details) : item===2?scrollPrev:scrollNext}>
						<svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
							{item===1 ?
								<><path d="M5 12h14"/><path d="M12 5v14"/></>
								:
								<>
									<path stroke="none" d="M0 0h24v24H0z" fill="none" />
									<path d="M5 12l14 0" />
										{item===2 ? (
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
								</>
							}
						</svg>
					</button>
				))}
			</div>
		</div>
	)
}

export default CarouselDefault