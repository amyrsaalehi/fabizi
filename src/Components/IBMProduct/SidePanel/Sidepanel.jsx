import React, { useState } from "react";
import {
  Header,
  HeaderContainer,
  HeaderName, Button
} from "@carbon/react";
import ChildrenContent from "./ChildrenContent";
import { SidePanel } from "@carbon/ibm-products";

const Sidepanel = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <HeaderContainer
        render={() => (
          <Header aria-label='IBM [Product]'>
            <HeaderName href='/' prefix='IBM'>
              [Product]
            </HeaderName>
          </Header>
        )}
      />
      <div className='main--content'>
        <Button onClick={() => setOpen((prev) => !prev)}>
          Open side panel
        </Button>
        <SidePanel
          includeOverlay
          className='test'
          placement='left'
          open={open}
          onRequestClose={() => setOpen(false)}
          title='Incident management'
          subtitle='Testing subtitle text.'
          actions={[
            {
              label: "Submit",
              onClick: () => setOpen(false),
              kind: "primary"
            },
            {
              label: "Cancel",
              onClick: () => setOpen(false),
              kind: "secondary"
            }
          ]}
        >
          <ChildrenContent />
        </SidePanel>
      </div>
    </>
  );
};

export default Sidepanel;