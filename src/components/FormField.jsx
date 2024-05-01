export default ({ label, value, change }) => {
    return (
        <div style={{
            margin: "5px"
        }}>
            <label>{label}:</label>
            <input value={value} onChange={(e) => change(e.target.value)} />
        </div>
    )
}