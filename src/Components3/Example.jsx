import React, { useState } from "react";
import {
  FlexGrid,
  Row,
  Column,
  ContentSwitcher,
  Switch,
  ContainedList,
  ContainedListItem,
  Button
} from "@carbon/react";
import { ProductiveCard } from "@carbon/ibm-products";
import { Printer32, Printer16, TableOfContents16 } from "@carbon/icons-react";
import { Add } from "@carbon/react/icons";

export const Example = () => {
  const action = () => {
    console.log("action");
  };
  const defaultProps = {
    title: <Printer32 size={16} />,
    children: (
      <>
        <div className="graph" />
        <p>Productive content text 1</p>
        <p>Productive content text 2</p>
      </>
    ),
    actionIcons: [
      {
        id: "1",
        icon: (props) => <p>Print</p>,
        onClick: action,
        onKeyDown: action,
        iconDescription: "Edit",
      },
      {
        id: "2",
        icon: (props) => <Printer16 size={16} {...props} />,
        onClick: action,
        onKeyDown: action,
        iconDescription: "Delete",
      },
    ],
  };
  return (
    <div>
      <FlexGrid>
        <Row>
          <Column sm={4} md={8} lg={4}>
            <ProductiveCard {...defaultProps} />
          </Column>
        </Row>
      </FlexGrid>
    </div>
  );
};

export const Example2 = () => {
  return (
    <ContentSwitcher selectedIndex={2} onChange={() => {}}>
      <Switch name="one" text="First section">
        asd
      </Switch>
      <Switch name="two" text="Second section" />
      <Switch name="three" text="Third section" />
    </ContentSwitcher>
  );
};
export const Example4 = () => {
  return (
    <ContainedList label="List title" kind="on-page">
     <ContainedListItem>List item
      <img src="https://www.autismspeaks.org/sites/default/files/styles/wysiwyg_medium_width/public/Brennan%20Froehlke%201.jpg?itok=Me87fK5U"/>
     </ContainedListItem>
     <ContainedListItem>List item</ContainedListItem>
     <ContainedListItem>List item</ContainedListItem>
     <ContainedListItem>List item</ContainedListItem>
   </ContainedList>
  );
};

export const Example3 = () => {
  const [icon,setIcon] = useState(false)
  return (
    <Button hasIconOnly={!icon} kind="tertiary" onMouseEnter={() => {setIcon(true)}} onMouseLeave={() => {setIcon(false)}} renderIcon={Add}>
      View Product
    </Button>
  );
};

export default Example;
