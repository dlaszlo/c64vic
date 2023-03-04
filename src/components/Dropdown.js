
export const Dropdown = ({fieldName, label, value, options, onChange}) => {
    return (
        <div className="inputField">
            <label htmlFor={'input' + fieldName}>{label}</label>
            <select id={'input' + fieldName} value={value} onChange={onChange}>
                {options.map((option) => (
                    <option key={'input' + fieldName + '_' + option.value} value={option.value}>{option.label}</option>
                ))}
            </select>
        </div>
    )
}

export default Dropdown
