import {List, ListItem, ListItemIcon, ListItemText} from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import styles from './Welcome.module.css';

export default function Welcome() {

    return <div className={styles.container}>
        <h2>Hello Student!</h2>
        <p className={styles.p}>Since your last time on the system, there were:</p>
        <List className={styles.list} sx={{padding: 0, margin: 0}} dense={true}>
            <ListItem disableGutters>
                <ListItemIcon>
                    <CircleIcon sx={{color: '#0374b5'}}/>
                </ListItemIcon>
                <ListItemText primaryTypographyProps={{fontSize: '16px'}} primary="Improvements in your performance"/>
            </ListItem>
            <ListItem disableGutters>
                <ListItemIcon>
                    <CircleIcon sx={{color: '#0374b5'}}/>
                </ListItemIcon>
                <ListItemText primaryTypographyProps={{fontSize: '16px'}} primary="14 new assignments"/>
            </ListItem>
            <ListItem disableGutters>
                <ListItemIcon>
                    <CircleIcon sx={{color: '#0374b5'}}/>
                </ListItemIcon>
                <ListItemText primaryTypographyProps={{fontSize: '16px'}} primary="20 changes made"/>
            </ListItem>
        </List>
    </div>
}
