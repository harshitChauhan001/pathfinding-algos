import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Link,
  IconButton,
  Tooltip,
} from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  separator: {
    flex: 1,
  },
}));

export default function NavBar(props) {
  const classes = useStyles();
  const { handleHelpOpen } = props;

  return (
    <AppBar position="static" elevation={0}>
      <Toolbar>
        <Typography variant="h6" color="inherit" noWrap>
          <Link href="/pathfinding-visualizer" color="inherit" underline="none">
            Pathfinding Visualizer
          </Link>
        </Typography>
        <div className={classes.separator} />
        <Tooltip
          title="Github"
          aria-label="t-github"
          placement="bottom"
          enterDelay={250}
          arrow
        >
          <IconButton
            href="https://github.com/harshitChauhan001"
            color="inherit"
          >
          </IconButton>
        </Tooltip>
        <Tooltip
          title="Help"
          aria-label="t-help"
          placement="bottom"
          enterDelay={250}
          arrow
        >
          <IconButton onClick={handleHelpOpen} edge="end" color="inherit">
          </IconButton>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
}
