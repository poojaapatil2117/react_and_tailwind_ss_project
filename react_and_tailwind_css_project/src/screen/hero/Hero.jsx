import { Container, Title, Body, PrimaryButton, Caption, ProfileCard } from "../../components/common/Design"
import { IoSearchOutline } from "react-icons/io5";
import { AiFillPropertySafety } from "react-icons/ai";
import { User1, User2, User3, User4 } from "../../assets/Data";
import PropTypes from "prop-types"
import { CiCirclePlus } from "react-icons/ci";
export const Hero = () => {
    return (
        <>

            <section className="hero bg-primary">
                <Container className="flex items-center justify-between md:flex-row flex-col">
                    <div className="w-full md:w-1/2 text-white pr-12 mt-16">
                        <Title level={3} className="text-white">
                            Build, sell & collect digital items
                        </Title>
                        <Body className="leading-7 text-gray-200 my-8">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure commodi Lorem
                            consectetur adipisicing elit. Ipsum provident laborum quo.
                        </Body>

                        <SearchBox />

                        <div className="flex items-center gap-8 my-8">
                            <div>
                                <Title level={4} className="text-white">
                                    842M
                                </Title>
                                <Body className="leading-7 text-gray-200">Total Product</Body>
                            </div>
                            <div>
                                <Title level={4} className="text-white">
                                    82M
                                </Title>
                                <Body className="leading-7 text-gray-200">Total Auction</Body>
                            </div>
                            <div>
                                <Title level={4} className="text-white">
                                    54
                                </Title>
                                <Body className="leading-7 text-gray-200">Total Category</Body>
                            </div>
                        </div>


                    </div>

                    <div className="w-full md:w-1/2 my-16 relative py-12">
                        <img src="../images/home/Hero.png" alt="Home Image" />

                        <div className="horiz-move absolute md:top-27 top-14 left-0">
                            <Box title="Proof of quality" desc="Lorem Ipsum Dolar amet" />
                        </div>

                        <div className="horiz-move absolute bottom-72 right-0">
                            <Box title="Safe And Secure" desc="Lorem Ipsum Dolar amet" />
                        </div>

                        <div className="px-5 py-4 bg-white shadow-md flex items-center gap-5 rounded-xl ml5 -mt-5 vert-move w-70">
                            <Title>58M Happy Client</Title>
                            <div className="flex items-center">

                                <ProfileCard className="border-2 border-white">
                                    <img src={User1} alt="" className="w-full h-full object-cover" />
                                </ProfileCard>

                                <ProfileCard className="border-2 border-white ml-4">
                                    <img src={User2} alt="" className="w-full h-full object-cover" />
                                </ProfileCard>

                                <ProfileCard className="border-2 border-white ml-4">
                                    <img src={User3} alt="" className="w-full h-full object-cover" />
                                </ProfileCard>

                                <ProfileCard className="border-2 border-white ml-4">
                                    <img src={User4} alt="" className="w-full h-full object-cover" />
                                </ProfileCard>
                                
                                <ProfileCard className="border-2 border-white ml-4">
                                     <CiCirclePlus size={27}/>
                                </ProfileCard>

                            </div>
                        </div>
                    </div>

                </Container>
            </section>

            <div className="bg-white w-full py-16 -mt-10 rounded-t-[40px]"></div>

        </>
    )
}

export const SearchBox = () => {

    return (
        <>
            <form>
                <label htmlFor="search" className="mb-2 text-sm font-medium text-gray-800 sr-only">
                    Search
                </label>

                <div className="relative">
                    <div className="absolute inset-y-0 start-2 flex items-center p-3 pointer-events-none">
                        <IoSearchOutline color="black" size={25} />
                    </div>
                    <input type="text" className="block shadow-md w-full p-6 ps-16 text-sm text-gray-800 rounded-full bg-gray-50 outline-none" placeholder="Search Product....." />
                    <PrimaryButton className="absolute end-2.5 bottom-2">Search</PrimaryButton>

                </div>
            </form>
        </>
    )
}

export const Box = ({ title, desc }) => {
    return (
        <div className="px-5 py-4 bg-white shadow-md flex items-center gap-5 rounded-xl w-auto">
            <div className="w-14 h-5 bg-green-100 flex items-center justify-center rounded-full">
                <AiFillPropertySafety size={27} className="text-primary" />
            </div>
            <div>
                <Title>{title}</Title>
                <Caption>{desc}</Caption>
            </div>
        </div>
    );
};


Box.propTypes = {
    title: PropTypes.string,
    desc: PropTypes.string,
};

