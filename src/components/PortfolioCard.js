import React from 'react';
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import Swiper from 'react-id-swiper/lib/ReactIdSwiper.full';

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';

import '../styles/card.scss';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 400,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

function PortfolioCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const params = {
    autoplay: {
      delay: 2000,
      disableOnInteraction: false
    },
    spaceBetween: 30,
    effect: 'fade',
    preloadImages: true,
    updateOnImagesReady: true,
    observer: true,
    observeParents: true,
    observeChildren: true,
    rebuildOnUpdate: true


  }
  const FEED_QUERY = gql`
    {
      portfolioProjects {
        id
        projectImages(orderBy: updatedAt_ASC) {
          id
          url
        }
      }
    }
  `
    let slides = []
      

    

  function handleExpandClick() {
    setExpanded(!expanded);
  }

  return (
    
    <Card className={classes.card}>

      <CardHeader
        avatar={
          <Avatar aria-label="Recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        title="Cadbury PS"
      />
      <Query query={FEED_QUERY}>
          {({ loading, error, data }) => {
            if (loading) return <div>Fetching</div>
            if (error) return <div>Error</div>

            const imageLinks = data.portfolioProjects[0].projectImages

            return (
              <Swiper {...params}>
                {imageLinks.map(item =>
              
                  <img src={item.url} key={item.id}/>

                
                
              )}
              </Swiper>

            )

          }}

      </Query>




      <CardContent>
        <p variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
           guests. Add 1 cup of frozen peas along with the mussels, if you like.
      </p>
      </CardContent>
      <CardActions disableSpacing>
        <span className={expanded ? 'hidden' : 'shown'}>SHOW MORE</span>
        <span className={expanded ? 'shown' : 'hidden'}>SHOW LESS</span>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="Show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <p paragraph>Method:</p>
          <p paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
            minutes.
          </p>
          <p paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
            heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
            browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
            and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
            pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </p>

        </CardContent>
      </Collapse>
    </Card>


  );

}

export default PortfolioCard;