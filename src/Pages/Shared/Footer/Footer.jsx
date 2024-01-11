import { TiSocialFacebook, TiSocialInstagram } from "react-icons/ti";
import { SlSocialTwitter } from "react-icons/sl";

const Footer = () => {
    return (
        <footer className="">
            <div className="flex">
            <div className="footer  p-10 bg-[#1F2937] text-white text-2xl" >
                <aside className=" footer footer-center  p-10">
                    <div className="">
                        <p className="text-2xl">CONTACT US</p>
                        p123 ABS Street, Uni 21, Bangladesh <br />
                        +88 123456789 <br />
                        Mon - Fri: 08:00 - 22:00 <br />
                        Sat - Sun: 10:00 - 23:00 <br />
                    </div>
                </aside>
            </div>
            <div className="footer  p-10 bg-[#111827] text-white text-2xl" >
                <aside className=" footer footer-center  p-10">
                    <div className="">
                        <p className="text-2xl">Follow US</p>
                        <p>Join us on social media</p>
                        <div className="flex ">
                        <TiSocialFacebook  className="text-3xl"/>
                        <TiSocialInstagram  className="text-3xl ml-2"/>
                        <SlSocialTwitter  className="text-3xl ml-2"/>


                        </div>
                       
                    </div>
                </aside>
            </div>
            </div>
          
            <div className=" footer-center bg-[#151515]  p-4 text-[#FFFFFF]">
                <div>
                    <p>Copyright © CulinaryCloud. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;