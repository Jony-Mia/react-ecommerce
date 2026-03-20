import React, { useEffect, useState } from 'react';

const Daily = ({id,price,di}) => {

      const targetDate = new Date("2026-04-01T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState(targetDate - Date.now());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(targetDate - Date.now());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const min = Math.floor((timeLeft / 1000 / 60) % 60);
  const hour = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const day = Math.floor(timeLeft / (1000 * 60 * 60 * 24));


    return (
        <>
            <div className="card bg-base-100 shadow-sm">
                <figure>
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-gray-400 text-[14px]">Drinks</h2>
                    <p className='card-title text-lg leading-5'>Roast Ground Coffee</p>
                    <div className='flex justify-between w-full'>
                        <div className='flex gap-2.5'>
                            <span>$34</span>
                            <del className='line-through text-gray-400 '>$45</del>
                        </div>

                        <div className='flex justify-end'>
                            <div className="rating rating-xs text-end">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="2 star" defaultChecked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="5 star" />
                            </div>
                        </div>
                    </div>
                    <div className="card-actions ">
                        <button className="btn btn-wide m-auto btn-success text-base-100"> <i className='fa fa-plus'></i> Add to cart</button>
                    </div>
                    <div>
                        <section className='grid grid-cols-3 mt-3  font-semibold text-center gap-3 items-center'>
                            <div className='shadow p-4 rounded-lg'>
                                <p className='text-xs'>{day}</p>
                                <p className='text-xs text-gray-400'>Day</p>
                            </div>
                            <div className='shadow p-3 rounded-lg'>
                                <p className='text-xs'>{hour}</p>
                                <p className='text-xs text-gray-400'>Hour</p>
                                </div>
                            <div className='shadow p-3 rounded-lg'>
                                <p className='text-xs '>{min}</p>
                                <p className='text-xs text-gray-400'>Minutes</p>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Daily;