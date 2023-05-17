import React, {forwardRef} from 'react';
import { SelectList } from 'react-native-dropdown-select-list'

const CitySelectListDropdown = () => {

  const [selected, setSelected] = React.useState("");
  
  const data = [
      {key:'1', value:'Missouri', disabled:true},
      {key:'2', value:'Columbia'},
      {key:'3', value:'Kansas City'},
      {key:'4', value:'St Louis'},
      {key:'5', value:'Arkansas', disabled:true},
      {key:'6', value:'Little Rock'},
      {key:'7', value:'Bentonville'},
      {key:'8', value:'Eureka Springs'},
  ]

  return(
    <SelectList 
        setSelected={(val) => setSelected(val)} 
        data={data} 
        save="value"
        placeholder="Find Your City"
        notFoundText="No cities found"
        fontFamily='Arial'
        boxStyles={{borderRadius:'5px', borderWidth: '3px', paddingLeft: '50px', paddingRight: '50px'}}
        inputStyles={{fontSize: '1.2em', color: '#3A5067'}}
        dropdownTextStyles={{fontSize: '1.1em'}}
        disabledTextStyles={{fontSize: '1.1em'}}
        disabledItemStyles={{opacity: '0.5', backgroundColor: '#3A5067'}}
    />
  )
};

export default forwardRef((props, ref) => CitySelectListDropdown(props, ref));