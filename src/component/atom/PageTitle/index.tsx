import { createStyles, makeStyles, Theme } from '@material-ui/core'
import React from 'react'
import { colorProperties } from '../../../CSSProperties/ColorProperties/colorProperties';

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    pageTitle: {
      fontSize: 20,
      color: colorProperties.myTravelColorBlue,
    },
  })
);

type pageTitleProps = {
  title:string
};
const PageTitle = React.memo((props:pageTitleProps) => {
  const classes = useStyle();
  return (
    <div className={classes.pageTitle}>{props.title}</div>
  )
});
export default PageTitle;