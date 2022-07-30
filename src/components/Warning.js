
const Warning = ({visible, warningText}) => {
    return (
        <>
            {visible &&
                <div className="warning">{warningText}</div>
            }
        </>
    )
}

export default Warning
