import {Column, FlexGrid, Row} from "@carbon/react"
import {Printer} from '@carbon/react/icons'
import {Text} from "@carbon/react/lib/components/Text"
import {ProductiveCard} from "@carbon/ibm-products"

const Card = () => {
    const action = () => {
        console.log("action")
    }

    const productiveCardDefaultProps = {
        title: <Printer size={32} />,
        children: (
            <>
                <Text>Productive content text 1</Text>
                <br></br>
                <Text>Productive content text 2</Text>
            </>
        ),
        actionIcons: [
            {
                id: "1",
                icon: (props) => <Text>Print</Text>,
                onClick: action,
                onKeyDown: action,
                iconDescription: "Edit"
            },
            {
                id: "2",
                icon: (props) => <Printer size={16} {...props} />,
                onClick: action,
                onKeyDown: action,
                iconDescription: "Delete"
            }
        ]
    }

    return (
        <FlexGrid narrow>
            <Row>
                {
                    Array(4).fill(0).map((_, idx) => (
                        <Column sm={4} md={8} lg={4} key={idx}>
                            <ProductiveCard key={idx} {...productiveCardDefaultProps} />
                        </Column>
                    ))
                }
            </Row>
        </FlexGrid>
    )
}

export default Card