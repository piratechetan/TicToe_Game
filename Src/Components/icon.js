import React from 'react';

import Icon from 'react-native-vector-icons/FontAwesome';



const Icons = ({name}) => {
    switch (name) {
        case "Circle":
            return <Icon name="circle-thin" size={45}  color={'#FAC42F'}/>
            
        
        case "Cross":
             return <Icon name="times" size={45} color={'#0ABDE3'}/>
        
        default:
            return <Icon />     
                   

    }

}

export default Icons;