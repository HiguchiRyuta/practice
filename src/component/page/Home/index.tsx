import { createStyles, makeStyles, Theme } from '@material-ui/core';
import React from 'react'
import { colorProperties } from '../../../CSSProperties/ColorProperties/colorProperties';
import PageTitle from '../../atom/PageTitle';

const useStyles = makeStyles((theme: Theme)=>
  createStyles({
    homeSubTitle: {
      color: colorProperties.myTravelColorBrownGray,
      fontSize:20,
    },
    homeNewArrival: {
    backgroundColor:colorProperties.myTravelColorWhite,
    },
    homeNewArrivalArticles: {
      display:'flex',
    }
})
);
const Home = React.memo(() => {
  const classes = useStyles()
return(
  <>
    <PageTitle title='Home' />
    <div className={classes.homeNewArrival}>
      <div className={classes.homeSubTitle}>
        ホテル宿泊
      </div>
      <div className={classes.homeNewArrivalArticles}>
        <div>
          pic
        </div>
        <div>
          <div>
            タイトル
          </div>
          <div>
            文章
          </div>
        </div>
      </div>
    </div>
  </>
)
})

export default Home;