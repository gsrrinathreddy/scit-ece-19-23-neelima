import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            MICROSOFT CERTIFIED
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>By HoneyWell ICT Academy</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           Trained and Certified as Best MICROSOFT DATA ANALYST in Power BI(Microsoft Azure Data Fundamentals,
           Model Data in Power BI,Visualize data in Power BI,Data Analysis in Power BI,Manage Workspacesand datasets in Power BI)
          </Typography>
        </AccordionDetails>
      </Accordion>
      
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            INTERNSHIP
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            By IEEE Pantech e-learning
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Certified intern on embedded systems-ARM&ARM CORTEX. 
          </Typography>
        </AccordionDetails>
      </Accordion>
      
    </div>
  );
}