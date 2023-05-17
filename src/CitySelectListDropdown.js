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
        boxStyles={{borderRadius:5, borderWidth: 3, paddingLeft: 50, paddingRight: 50, minWidth: 250}}
        inputStyles={{fontSize: 20, color: '#3A5067'}}
        dropdownTextStyles={{fontSize: 20}}
        disabledTextStyles={{fontSize: 20}}
        disabledItemStyles={{opacity: 0.5, backgroundColor: '#3A5067'}}
    />
  )
};

export default forwardRef((props, ref) => CitySelectListDropdown(props, ref));