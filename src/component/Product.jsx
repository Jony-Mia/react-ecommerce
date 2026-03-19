export default function Product({title,category,price,discount,image}) {
    // console.log("hello world");

    return (
        <>
            <div className="card bg-base-100 pt-5 shadow-sm">
                <figure>
                    <img
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-gray-400 text-[14px]">{category}</h2>
                    <h2 className="card-title text-lg leading-5">{title}</h2>
                    <div className="rating rating-xs">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="2 star" defaultChecked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="5 star" />
                    </div>
                        
                    {/* <p>A card component has a figure, a body part, and inside body there are title and actions parts</p> */}
                    <div className="card-actions justify-end">
                        <p className="font-semibold">{price} <del> {discount}</del> </p>
                        <button className="btn btn-success btn-sm text-base-100"><i className="fa fa-plus"></i>Add</button>
                    </div>
                </div>
            </div>
        </>
    );
};
