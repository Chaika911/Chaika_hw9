import Continental from '../../img/continental.jpg';
import Toyo from '../../img/toyo.jpg';
import Nokian from '../../img/nokian.jpg';
import Hankook from '../../img/hankook.jpg';
import Bridgestone from '../../img/bridgestone.jpg';

const Icons = (props) => {
    const icons = {
        Continental: <img src={Continental} alt="Continental" width={200}/>,
        Toyo: <img src={Toyo} alt="Toyo" width={200}/>,
        Nokian: <img src={Nokian} alt="Nokian" width={200}/>,
        Hankook: <img src={Hankook} alt="Hankook" width={200}/>,
        Bridgestone: <img src={Bridgestone} alt="Bridgestone" width={200}/>,
    }
    return (
        icons[props.name]
    )
}

export default Icons;