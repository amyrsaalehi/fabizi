import React, { useState } from "react";
import {
  TextArea,
  TextInput,
  DataTable,
  Table,
  TableHeader,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  Heading,
  Section,
  Stack,
  unstable_Text
} from "@carbon/react";

const headerData = [
  { id: 1, header: "Column header", key: "value" },
  { id: 2, header: "Column header", key: "value" }
];

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
];

const renderDataTable = () => {
  return (
    <DataTable
      rows={rowData}
      headers={headerData}
      render={({ rows, headers }) => (
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
      )}
    />
  );
};

const ChildrenContent = () => {
  const [notesValue, setNotesValue] = useState("");
  return (
    <Stack className={`story__body-content`}>
      <Section level={4}>
        <Heading>Subtitle</Heading>
      </Section>
      <Section className={`story__text-inputs`}>
        <TextInput
          labelText='Input A'
          id='side-panel-story-text-input-a'
          className={`story__text-input`}
        />
        <TextInput
          labelText='Input B'
          id='side-panel-story-text-input-b'
          className={`story__text-input`}
        />
      </Section>
      <Stack className={`story__text-inputs`}>
        <TextInput
          labelText='Input C'
          id='side-panel-story-text-input-c'
          className={`story__text-input`}
        />
        <TextInput
          labelText='Input D'
          id='side-panel-story-text-input-d'
          className={`story__text-input`}
        />
      </Stack>
      <Stack className={`story__text-area-container`}>
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
        <Heading className={`story__content-subtitle`}>Subtitle</Heading>
      </Section>
      {renderDataTable()}
    </Stack>
  );
};

export default ChildrenContent;
