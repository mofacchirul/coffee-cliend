import img from "../assets/about/shot-of-a-group-of-businesspeople-using-a-digital-2022-09-14-01-27-38-utc-1024x683.jpg";
type Tuser ={
    titel:string
}
const Banner = ({titel}:Tuser) => {
    return (
        <div
            className="h-[400px] bg-cover bg-center"
            style={{ backgroundImage: `url(${img})` }}
        >
            {/* Optional: Content over the background */}
            <div className="flex items-center justify-center h-full bg-black/80 text-white text-3xl font-bold">
             <div>
                {/* <h1>   Welcome to Our Company</h1> */}
                <h1 className="text-center font-bold">{titel} </h1>
             </div>
               
            </div>
        </div>
    );
};

export default Banner;
