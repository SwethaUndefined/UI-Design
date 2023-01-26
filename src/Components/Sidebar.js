import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWaveSquare } from "@fortawesome/free-solid-svg-icons";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";
import { faFileArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

const Sidebar = ()=>{
    const iconInfo = [
        {
          id:1,
          icon : faWaveSquare,
          text : "PULSE"
        },
        {
          id:2,
          icon : faAdd,
          text : "NEW"
        },
        {
          id:3,
          icon : faUser,
          text : "PATIENT"
        },
        {
          id:4,
          icon : faFolderOpen,
          text : "FOLDER"
        },
        {
          id:5,
          icon : faFileArrowUp,
          text : "UPLOAD"
        },
        {
          id:6,
          icon : faBook,
          text : "REPORT"
        },
        {
          id:7,
          icon : faGear,
          text : "SETTING"
        },
        {
          id:8,
          icon : faRightFromBracket,
          text : "LOGOUT"
        }
      ]
    return(
        <aside>
        <div className="sidebar">
          {
            iconInfo.map((icon)=>{
              return(
                <a href="#" key={icon.id}>
            <FontAwesomeIcon
              className="icons"
              icon={icon.icon}
            ></FontAwesomeIcon>
            <h4>{icon.text}</h4>
          </a>
              )
            })
          }
        </div>
      </aside>
    )
}

export default Sidebar;