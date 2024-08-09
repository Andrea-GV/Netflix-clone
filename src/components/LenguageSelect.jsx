
import Select from 'react-select';


function LenguageSelect() {
  
  const lenguages = [
    { label: "Español", value: "Español" },
    { label: "English", value: "English" },
    { label: "Français", value: "Français" },
  ]
  const handleSelectedChange = (value) => {
    console.log(value);
  }

  return (
    <div>
      <Select 
        defaultValue = {lenguages[0]}
        options={lenguages}
        onChange = {handleSelectedChange}
      />
    </div>
  )
}

export default LenguageSelect

