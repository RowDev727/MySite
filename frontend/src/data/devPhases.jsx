import { FaPenRuler } from "react-icons/fa6";
import { IoBuild } from "react-icons/io5";
import { IoCloudUpload } from "react-icons/io5";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";


export const devPhases = [
    {
        Icon: <FaPenRuler />,
        title: "Design:",
        description: "Our developers and artists will work closely with our clients to gather all the necessary requirements, design specifics and functionality required."
    },
    {
        Icon: <IoBuild />,
        title: "Build:",
        description: "Once the design phase is complete, we will get hard to work planning and developing your app.  This phase consists of 4 phases itself.  Planning, development, testing and revisions."
    },
    {
        Icon: <IoCloudUpload />,
        title: "Deploy:",
        description: "After your app is built it must be deployed to the internet so that your customers can access it via a domain name (Ex: Google.com).  Our skilled IT professionals can help simplify this process by configuring a cloud server to deploy your app."
    },
    {
        Icon: <IoMdCheckmarkCircleOutline />,
        title: "Conclusion:",
        description: "When the development process is complete, your site will be available to customers all over the world!"
    },
    
]
