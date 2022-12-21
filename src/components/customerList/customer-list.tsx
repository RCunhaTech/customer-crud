import './styles.css'

export function CustomerList(props:any) {
    return (
        <div className="list">
            <strong>{ props.name }</strong>
            <small>{ props.time }</small>
        </div>
    )
}