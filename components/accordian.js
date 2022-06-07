import React, {useContext} from "react";
import { Accordion, Card, AccordionContext, useAccordionButton  } from "react-bootstrap";
import Regiondata from "../data/regionaccordian.json"; 

// function ContextAwareToggle({ children, eventKey, callback }) {
// const { activeEventKey } = useContext(AccordionContext);
//   const decoratedOnClick = useAccordionButton(
//     eventKey,() => callback && callback(eventKey)
//   );

//   const isCurrentEventKey = activeEventKey === eventKey;
//   return (
//     <a
//       type="button"
//       className="card-link h5 d-block tex-dark mb-0 py-10 px-4"
//       style={{ backgroundColor: isCurrentEventKey ? 'pink' : 'lavender' }}
//       onClick={decoratedOnClick}
//     >

//       {children}
//     </a>
//   );
// }

export default function Accordian() {

  return (
    <>
      <Accordion className="card border-0  mb-1" defaultActiveKey="0" flush>
        {Regiondata.accordion.map((item, index) => ( 
          <Accordion.Item
            className="card-header text-color bg-gray border p-0"
            key={index}
            eventKey={index}
          >
            <Accordion.Header className="card-link h5 rounded-5 d-block text-color mb-0 py-0 px-0">
              {item.title}
            </Accordion.Header>
            <Accordion.Body className="card-body font-secondary text-color p-3">
              {item.text}
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion> 
{/* 
      <Accordion className="card border-0 mb-1" defaultActiveKey="0">
      {Regiondata.accordion.map((item, index) => (
      <Card
      className="card-header text-color bg-gray border p-0"
      key={index}
      eventKey={index}
      >
        <Card.Header>
          <ContextAwareToggle className="card-link h5 d-block text-color mb-0 py-0 px-0" eventKey="0">{item.title}</ContextAwareToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body className="card-body font-secondary text-color pl-0 pb-0">{item.text}</Card.Body>
        </Accordion.Collapse>
      </Card>
      ))}
    </Accordion> */}
    </>
  );
}
