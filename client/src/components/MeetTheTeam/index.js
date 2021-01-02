import BallistasImg from "../../assets/Ballistas.png"
import HellhoundsImg from "../../assets/Hellhounds.png"
import SpartansImg from "../../assets/Hoplite.png"
import MikePic from "../../assets/TeamPhotos/MikeProfile.jpeg"
import DustinPic from "../../assets/TeamPhotos/DustinProfilePic.png"
import BrandonPic from "../../assets/TeamPhotos/BrandonProfilePic.png"

const Team = {
    ballistas: {
        name: "Ballistas",
        leader: "Dustin",
        callSign: "Cthulu",
        profilePic: DustinPic,
        faction: "Ballistas of Krypteia Commander",
        picture: BallistasImg,
        description: "The Ballistas is an elite long ranged precision unit capable of silencing enemies from concealment at great distances and with extreme prejudice."
    },

    hellhounds: {
        name: "Hellhounds",
        leader: "Mike",
        callSign: "Hades",
        profilePic: MikePic,
        faction: "Hellhounds Commander",
        picture: HellhoundsImg,
        description: "The Hellhounds is an adaptive special operations unit comprised of elite members able to conform and adapt to any mission directive and execute with speed, precision, and stealth."

    },

    spartans: {
        name: "Spartans",
        leader: "Brandon",
        callSign: "Legion",
        profilePic: BrandonPic,
        faction: "Spartans Commander",
        picture: SpartansImg,
        description: "The Spartans is the primary attacking force of Team Titan. It is comprised of assault, support, and ranged weapon units to ensure versatility and victory for any battle."
    }

}

export default Team