import React, { useState } from "react"
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
} from "@carbon/react"

const headerData = [
	{ id: 1, header: "Column header", key: "value" },
	{ id: 2, header: "Column header", key: "value" }
]

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

const ChildrenContent = () => {
	const [notesValue, setNotesValue] = useState("")
	return (
		<Stack>
			<Section level={4}>
				<Heading>Subtitle</Heading>
			</Section>
			<Section>
				<TextInput labelText='Input A' />
				<TextInput labelText='Input B' />
			</Section>
			<Stack>
				<TextInput labelText='Input C' />
				<TextInput labelText='Input D' />
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

			<DataTable rows={rowData} headers={headerData} render={({ rows, headers }) => (
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
	)
}

export default ChildrenContent