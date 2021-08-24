

import { Typography, Link, makeStyles } from '@material-ui/core/';

const useStyles = makeStyles((theme) => ({
  footer: {
    background: 'linear-gradient(40deg, #cb997e 40%, #e5989b 80%)',
    height: 100,
  },
}));
function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Typography variant="body2" color="inherit" align="center" >
        
        <Link color="inherit" href="https://github.com/dana-younis">
         {'Copyright © '}
        </Link>{' '}
        {new Date().getFullYear()}
      </Typography>
    </footer>
  );
}

export default Footer;