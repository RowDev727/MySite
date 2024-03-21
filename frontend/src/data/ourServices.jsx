import { FaLaptopCode, FaServer } from 'react-icons/fa'
import { HiCodeBracket } from 'react-icons/hi2'
import { MdOutlinePhoneAndroid, MdShoppingCart } from 'react-icons/md'
import { AiFillApi } from 'react-icons/ai'
import { BsDatabaseFill } from 'react-icons/bs'
import { GrVulnerability } from 'react-icons/gr'

export const ourServices = [
    {
        Icon: <FaLaptopCode />,
        title: "UI/UX Design",
        points: "Our UI/UX designers specialize in creating elegant and intuitive user interfaces, ensuring a plesant user experience!"
    },
    {
        Icon: <HiCodeBracket />,
        title: "Web Development",
        points: "Our team of developers specialize in working with the UI/UX team to build out designs tailored to the customers needs."
    },
    {
        Icon: <MdOutlinePhoneAndroid />,
        title: "Mobile Development",
        points: "With mobile apps becoming the new norm, our developers can design, build and publish the mobile app of your dreams!"
    },
    {
        Icon: <AiFillApi />,
        title: "API Development",
        points: "Our team of developers can design and build robust and secure REST API's using a variety of backend languages!"
    },
    {
        Icon: <BsDatabaseFill />,
        title: "Database Design",
        points: "Our developers design and build database schema's for maximum efficiency, utilizing best practices to ensure security and speed."
    },
    {
        Icon: <MdShoppingCart />,
        title: "E-commerce",
        points: "Want to build your web presence?  An e-commerce site can provide your customers a safe and convenient way to buy your products."
    },
    {
        Icon: <GrVulnerability />,
        title: "Penetration Testing",
        points: "Our certified ethical hackers can test the security of your site by looking for vulnerabilities and reporting their findings."
    },
    {
        Icon: <FaServer />,
        title: "Deployment & Hosting",
        points: "Once your site is built it must be deployed so that users around the world can see it.  We provide services to configure everything!"
    }
]
