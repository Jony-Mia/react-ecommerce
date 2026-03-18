import React from 'react';
import france from "../assets/img/492dcf80-fa41-4279-af8f-ae496be70ba1.svg"
import logo from "../assets/img/freshcart-logo.svg"
const Navbar = () => {
    return (
        <> 
            <header className='py-1 bg-[#f0f3f2]'>
                <section className='container flex justify-between m-auto'>
                    <div>
                        <p>Super Value Deals - Save more with coupons</p>
                    </div>
                    <div>
                        <select name="" id="">
                            <option value=""> English </option>
                            <option value="">Russian</option>
                        </select>
                    </div>
                </section>
            </header>
            <nav className='p-3 mt-3 pb-5'>
                <section className='container m-auto grid gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 grid-cols-2 items-center'>
                    <div className='w-fit'>
                        <img src={logo} alt="" />
                    </div>
                    
                    <input type="search" className='input px-3 rounded-lg col-span-2 w-full block' placeholder='Search for product' />
                        
                    <div>
                        <button className='btn btn-outline rounded-lg btn-neutral rounded-[8px'>
                            <i class="fa-sharp fa-regular fa-location-dot"></i> 
                            <span>Location</span>
                        </button>
                    </div>
                    <div className='flex justify-end'>
                        <p className='relative space-x-2'>
                            
                           <button className='btn p-2 rounded-full'>
                             <i className='far relative flex items-center text-2xl fa-heart'>
                                <p className=" w-4 h-4 m-0 p-0 text-[9px] absolute top-0 right-0 bg-green-600 flex text-base-100 flex items-center justify-center font-bold text-center rounded-full">5</p>
                            </i>
                           </button>
                            
                            <button className='btn p-2 rounded-full'> 
                                <i className='far relative flex items-center text-2xl fa-user'> </i>
                            </button>
                            
                          <button className='btn p-2 rounded-full'> 
                              <i className='far relative flex items-center text-2xl fa-bag-shopping'>
                                <p className=" w-4 h-4 m-0 p-0 text-[9px] absolute top-0 right-0 bg-green-600 flex text-base-100 flex items-center justify-center font-bold text-center rounded-full">5</p>
                            </i>
                          </button>
                        </p>
                    </div>
                </section>
            </nav>
            <nav className='container  m-auto mt-4'>
                <section className='flex gap-4'>
                    <div>
                        <button className='btn bg-green-600 p-4 px-5 rounded-lg text-base-100'>
                            <span className='hidden'><i className='fa fa-bars'></i></span>
                            All Departments
                        </button>
                    </div>
                    <div>
                        <div className="dropdown dropdown-start dropdown-center">
                            <button tabIndex={0} className='btn btn-ghost '>Home <i className='fa fa-angle-down'></i></button>
                            <div tabIndex={1} className="dropdown-content menu rounded bg-base-100 shadow w-40 p-2 ">
                                <ul>
                                    <li><a href="">Home</a></li>
                                    <li><a href="">Home</a></li>
                                    <li><a href="">Home</a></li>
                                    <li><a href="">Home</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="dropdown dropdown-start dropdown-center">
                            <button tabIndex={0} className='btn btn-ghost '>Shop <i className='fa fa-angle-down'></i></button>
                            <div tabIndex={1} className="dropdown-content menu rounded bg-base-100 shadow w-40 p-2 ">
                                <ul>
                                    <li><a href="">Home</a></li>
                                    <li><a href="">Home</a></li>
                                    <li><a href="">Home</a></li>
                                    <li><a href="">Home</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="dropdown dropdown-start dropdown-center">
                            <button tabIndex={0} className='btn btn-ghost '>Stores <i className='fa fa-angle-down'></i></button>
                            <div tabIndex={1} className="dropdown-content menu rounded bg-base-100 shadow w-40 p-2 ">
                                <ul>
                                    <li><a href="">Home</a></li>
                                    <li><a href="">Home</a></li>
                                    <li><a href="">Home</a></li>
                                    <li><a href="">Home</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="dropdown dropdown-start dropdown-center">
                            <button tabIndex={0} className='btn btn-ghost '>Mega Menu <i className='fa fa-angle-down'></i></button>
                            <div tabIndex={1} className="dropdown-content menu rounded bg-base-100 shadow w-40 p-2 ">
                                <ul>
                                    <li><a href="">Home</a></li>
                                    <li><a href="">Home</a></li>
                                    <li><a href="">Home</a></li>
                                    <li><a href="">Home</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="dropdown dropdown-start dropdown-center">
                            <button tabIndex={0} className='btn btn-ghost '>Pages <i className='fa fa-angle-down'></i></button>
                            <div tabIndex={1} className="dropdown-content menu rounded bg-base-100 shadow w-40 p-2 ">
                                <ul>
                                    <li><a href="">Home</a></li>
                                    <li><a href="">Home</a></li>
                                    <li><a href="">Home</a></li>
                                    <li><a href="">Home</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="dropdown dropdown-start dropdown-center">
                            <button tabIndex={0} className='btn btn-ghost '>Dashboard <i className='fa fa-angle-down'></i></button>
                            <div tabIndex={1} className="dropdown-content menu rounded bg-base-100 shadow w-40 p-2 ">
                                <ul>
                                    <li><a href="">Home</a></li>
                                    <li><a href="">Home</a></li>
                                    <li><a href="">Home</a></li>
                                    <li><a href="">Home</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="dropdown dropdown-start dropdown-center">
                            <button tabIndex={0} className='btn btn-ghost '>Account <i className='fa fa-angle-down'></i></button>
                            <div tabIndex={1} className="dropdown-content menu rounded bg-base-100 shadow w-40 p-2 ">
                                <ul>
                                    <li><a href="">Home</a></li>
                                    <li><a href="">Home</a></li>
                                    <li><a href="">Home</a></li>
                                    <li><a href="">Home</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </nav>
            <hr className=' border-gray-300 mt-4' />
        </>
    );
};

export default Navbar;