import { createStyles, makeStyles, MenuItem, MenuList, Theme } from '@material-ui/core'
import React from 'react'
import {Link} from 'react-router-dom'
import { colorProperties } from '../../../CSSProperties/ColorProperties/colorProperties'

const useStyle = makeStyles((theme:Theme)=>
createStyles(
  {
    headerContainer: {
      
    },
    headerTitle: {
      color: colorProperties.myTravelColorBlue,
      fontSize: 25,
      fontWeight:'bold',
    },
    headerLink: {
      textDecoration: 'none',
      color:colorProperties.myTravelColorLightYellow,
    },
    headerMenuList: {
      display:'flex',
    }
  }
))
const Header = React.memo(() => {
  const classes = useStyle()
  return (
    <div className={classes.headerContainer}>
      <div className={classes.headerTitle}>My Travels</div>
      <MenuList className={classes.headerMenuList}>
           <Link to='/' className={classes.headerLink}>
            <MenuItem>
              Home
            </MenuItem>
            </Link>
          <Link to='/about' className={classes.headerLink}>
            <MenuItem>
            Hotels
            </MenuItem>
            </Link>
      </MenuList>
    </div>
  )
})

export default Header;