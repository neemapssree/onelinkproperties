import Image from "next/image"
import Link from "next/link";

const navItems = [
    {"title" : "Home", "url" : "#"},
    {"title" : "Overview", "url" : "#overview"},
    {"title" : "Investment", "url" : "#investment"},
    {"title" : "Amenities", "url" : "#amenities"},
    {"title" : "Contact", "url" : "#contact"}
];

const Menu = () => {
  return (
    <div className="w-full max-w-7xl md:flex md:justify-between md:gap-7 h-[100px] fixed inset-0 mx-auto py-5">
        <div>
            <span className="uppercase text-white text-4xl" >onelink</span>
        </div>

        {/* navigation */}
        <div className="">
            <ul className="w-full flex gap-10">
                {navItems.map((item, index) => {
                    return(
                        <Link href={item.url} key={index}>
                            <li className="text-white text-lg">{item.title}</li>
                        </Link>
                    )                    
                })}
            </ul>
        </div>
    </div>
  )
}

export default Menu