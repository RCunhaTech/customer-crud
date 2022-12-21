
import './styles.css'
export function Header(props:any) {
    return (
        <div className='header'>
            <strong>{ props.title }</strong>
            <img src={ props.logo } alt="avatar" />
        </div>
    )
}