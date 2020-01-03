import React from 'react'
import Spiner from './Spiner'


 function Hoc(Component) {
    return props=>(props.isLoading?<Spiner/>:<Component{...props}/>);

}
export default Hoc;

