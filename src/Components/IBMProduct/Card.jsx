import {Column, FlexGrid, Row,unstable_Text} from "@carbon/react";
import {ProductiveCard} from "@carbon/ibm-products";
import { Printer } from '@carbon/react/icons'

const Card = () => {
    const action = () => {
        console.log("action");
    };
    const defaultProps = {
        title: <Printer size={32} />,
        children: (
            <>
                <unstable_Text>Productive content text 1</unstable_Text>
                <unstable_Text>Productive content text 2</unstable_Text>
            </>
        ),
        actionIcons: [
            {
                id: "1",
                icon: (props) => <unstable_Text>Print</unstable_Text>,
                onClick: action,
                onKeyDown: action,
                iconDescription: "Edit",
            },
            {
                id: "2",
                icon: (props) => <Printer size={16} {...props} />,
                onClick: action,
                onKeyDown: action,
                iconDescription: "Delete",
            },
        ],
    };
    return (
        <FlexGrid narrow>
            <Row>
                {
                    Array(4).fill(0).map((_, idx) => (
                        <Column sm={4} md={8} lg={4}>
                            <ProductiveCard key={idx} {...defaultProps} />
                        </Column>
                    ))
                }
            </Row>
        </FlexGrid>
    );
};
export default Card