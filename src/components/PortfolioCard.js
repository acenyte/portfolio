import React from 'react';
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import Swiper from 'react-id-swiper/lib/ReactIdSwiper.full';

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';

import githubLogo from '../assets/images/github.svg';

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
    rebuildOnUpdate: true,
    nested: true,


  }
  const params2 = {
    effect: 'coverflow',
    centeredSlides: true,
    slideToClickedSlide: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows : false,
    },
    navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev',
    }
    
  }
  const FEED_QUERY = gql`
    {
      portfolioProjects {
        id
        projectTitle
        projectShortDescription
        projectTechDescription
        projectLiveLink
        projectGit
        projectImages(orderBy: updatedAt_ASC) {
          id
          url
        }
        projectIcon {
          url
        }
      }
    }
  `

  function getProjectTechStack(project) {
    
    
    return gql`
              {
                portfolioProjectTechStacks(where: {portfolioProjects_some: {id: "${project}"}}) {
                  id
                  techStackName
                  techStackIcon {
                    url
                  }
                }
              }

              `
  }
  
  function handleExpandClick() {
    setExpanded(!expanded);
    setTimeout(function() {
      document.getElementsByClassName('swiper-slide-active')[0].scrollTo(0, document.getElementsByClassName('swiper-slide-active')[0].scrollHeight+300)
    },300)
    
  }

  return (
    <Query query={FEED_QUERY}>
      {({ loading, error, data }) => {
        if (loading) return <div>Fetching</div>
        if (error) return <div>Error</div>

        
        const allProjects = data.portfolioProjects
        

        return (
          <Swiper {...params2} className='project-swiper'>
            {allProjects.map(project =>

              <div className="card-wrapper" key={project.id}>
                
                <Card className={classes.card}>
                  <CardHeader
                    avatar={
                      <Avatar aria-label="Recipe" className={classes.avatar}>
                        <img src={project.projectIcon.url} alt=''/>
                      </Avatar>
                    }
                    title={project.projectTitle}
                  />

                  <Swiper {...params}>
                    {project.projectImages.map(item =>
                      <img src={item.url} key={item.id} alt='' />
                    )}
                  </Swiper>

                  <CardContent>
                    <p variant="body2" color="textSecondary" component="p">
                      {project.projectShortDescription}
                    </p>
                    <a href={project.projectLiveLink} target="_blank" rel="noopener noreferrer">
                      {project.projectLiveLink}
                    </a>
                  </CardContent>

                  <CardActions disableSpacing>
                    <div className="button">
                      <span onClick={handleExpandClick} className={expanded ? 'hidden' : 'shown'}>SHOW MORE</span>
                      <span onClick={handleExpandClick} className={expanded ? 'shown' : 'hidden'}>SHOW LESS</span>
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
                    </div>
                  </CardActions>
                  <Collapse in={expanded} timeout="auto" unmountOnExit>

                    <CardContent>

                      <b>Technology Stack:</b>
                      <br></br>
                      
                      <Query query={getProjectTechStack(project.id)}>
                        {({ loading, error, data }) => {
                          if (loading) return <div>Fetching</div>
                          if (error) return <div>Error</div>

                          const techLinks = data.portfolioProjectTechStacks

                          return (
                            
                              <div className="techstack-group">
                                {techLinks.map( item =>
                                    <div className="techstack" key={item.id}>
                                      <img src={item.techStackIcon.url} alt=''/>
                                      <span>{item.techStackName}</span>
                                    </div>
                                  )
                                }
                              </div>
                            
                          )

                          }
                        }
                      </Query>
                      {(() => {
                        if (project.projectGit) {
                          return <a className="techstack" href={project.projectGit} target="_blank" rel="noopener noreferrer">
                                  <img src={githubLogo} alt="Git Hub logo"/>
                                  {project.projectGit}
                                </a>
                        }
                      })()}
                
                      <br></br>
                      <p>
                        <b>Technical Description:</b> <br></br>
                        {project.projectTechDescription}
                      </p>

                    </CardContent>
                    
                  </Collapse>
                  
                </Card>
              </div>
            )}
            
          </Swiper>
        )

      }}

    </Query>




  );

}

export default PortfolioCard;