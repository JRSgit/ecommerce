import React from 'react'
import Avatar from 'react-avatar';
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { MenuLink } from './MenuLinks'
import ShoppingBagOutlinedIcon from '@material-ui/icons/ShoppingBasketOutlined'
import SavingOutlinedIcon from '@material-ui/icons/SaveOutlined'
import Assistant from '@material-ui/icons/AssistantOutlined'
import PowerOff from '@material-ui/icons/PowerOffOutlined'
import PowerOn from '@material-ui/icons/PowerOutlined'
import { logout } from '../../redux/apisCall'


const MenuLinks = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user.currentUser)
  const username = user ? user.user.username : 'Bem Vindo'
  // const [disp, setDisp] = useState(false)

  const handleLogout = () => {
    logout(dispatch)
  }


  return (
    <MenuLink >
      <div className="menu">
        <Avatar
          round={true}
          size='80'
          src="https://images.pexels.com/photos/6545318/pexels-photo-6545318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <h3>{username}</h3>
        <hr />
        <Link to="#">
          <ShoppingBagOutlinedIcon style={{ fontSize: 30, marginRight: 10 }} color='primary' />
          Compras
        </Link>

        <Link to="#">
          <SavingOutlinedIcon style={{ fontSize: 30, marginRight: 10 }} color='primary' />
          Meu Dados
        </Link>

        <Link to="#" >
          <Assistant style={{ fontSize: 30, marginRight: 10 }} color='primary' />
          Ajuda
        </Link>

      </div>
      <div >
        {user ? (
          <Link to="#" onClick={handleLogout}>
            <PowerOff style={{ fontSize: 40, marginRight: 10 }} color='primary' />
            Sair
          </Link>

        ) : (
          <Link to="/login" >
            <PowerOn style={{ fontSize: 40, marginRight: 10 }} color='primary' />
            Entar
          </Link>
        )}
      </div>
    </MenuLink>
  )
}

export default MenuLinks