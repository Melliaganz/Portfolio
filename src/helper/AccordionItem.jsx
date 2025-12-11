import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Image } from 'react-bootstrap';

// Composant réutilisable pour afficher un élément d'accordéon
export const AccordionItem = ({ logo, title, children }) => (
    <Accordion>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            style={{ height: 150 }}
        >
            <Typography component={'span'} variant={'body2'} padding={5}>
                <Image src={logo} alt={`logo-${title}`} width={100} />
            </Typography>
            <p style={{ display: 'flex', alignItems: 'center' }}>{title}</p>
        </AccordionSummary>
        <AccordionDetails>
            <Typography component={'span'} variant={'body2'}>
                {children}
            </Typography>
        </AccordionDetails>
    </Accordion>
);
