import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import spinner from "./public/icons/spinner.svg"
export default function Loader() {
  return (
    <img src="/icons/spinner.svg" className='animate-spin'></img>
  )
}