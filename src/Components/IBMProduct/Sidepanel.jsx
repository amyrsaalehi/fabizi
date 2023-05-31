import React, { useState } from "react";
import {
    Header,
    HeaderContainer,
    HeaderName,
    Button,
    Section,
    Heading,
    TextInput,
    Stack,
    TextArea,
    DataTable,
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableHeader,
    TableBody,
    TableCell,
} from "@carbon/react";
import { SidePanel } from "@carbon/ibm-products";

const rowData = [
    {
        id: "a",
        value: "Cell text"
    },
    {
        id: "b",
        value: "Cell text"
    },
    {
        id: "c",
        value: "Cell text"
    },
    {
        id: "d",
        value: "Cell text"
    },
    {
        id: "e",
        value: "Cell text"
    },
    {
        id: "f",
        value: "Cell text"
    },
    {
        id: "g",
        value: "Cell text"
    },
    {
        id: "h",
        value: "Cell text"
    }
]
const headerData = [
    { id: 1, header: "Column header", key: "value" },
    { id: 2, header: "Column header", key: "value" }
]
const Sidepanel = () => {
    const [open, setOpen] = useState(false);
    const [notesValue, setNotesValue] = useState("")
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
            <div className='main--content' style={{marginTop: "50px"}}>
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
                    <Stack>
                        <Section level={4}>
                            <Heading>Subtitle</Heading>
                        </Section>
                        <Section>
                            <TextInput id="firstInput" labelText='Input A'/>
                            <TextInput id="secondInput" labelText='Input B'/>
                        </Section>
                        <Stack>
                            <TextInput id="thirdInput" labelText='Input C'/>
                            <TextInput id="fourInput" labelText='Input D'/>
                        </Stack>
                        <Stack>
                            <TextArea
                                labelText='Notes'
                                value={notesValue}
                                invalid={notesValue.length > 100}
                                invalidText="Length Exceeded"
                                helperText={`${notesValue.length} / 100`}
                                maxCount={100}
                                onChange={(event) => setNotesValue(event.target.value)}
                            />
                        </Stack>
                        <Section level={6}>
                            <Heading>Subtitle</Heading>
                        </Section>

                        <DataTable rows={rowData} headers={headerData} render={({rows, headers}) => (
                            <TableContainer>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            {headers.map((header) => (
                                                <TableHeader key={header.id}>{header.header}</TableHeader>
                                            ))}
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rows.map((row, index) => (
                                            <TableRow key={index}>
                                                {row.cells.map((cell, cellIndex) => (
                                                    <TableCell key={cellIndex}>{cell.value}</TableCell>
                                                ))}
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        )}/>
                    </Stack>
                </SidePanel>
            </div>
        </>
    );
};

export default Sidepanel;
