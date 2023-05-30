import {
  Datagrid,
  useDatagrid,
  useFiltering
} from "@carbon/ibm-products";
// import {ButtonMenu} from '@carbon/ibm-products/es/components/ButtonMenu'
// import {ButtonMenuItem} from '@carbon/ibm-products/es/components/ButtonMenuItem'
import { Button, TableToolbarContent, TableToolbarSearch } from "@carbon/react";
import {
  Add,
  ChevronDown,
  Download,
  Filter,
  Restart,
} from "@carbon/react/icons";
import { memo, useLayoutEffect, useMemo, useState } from "react";

const staticData = [
  {
    joined: new Date("09/26/81"),
    age: 41,
    firstName: "Joel",
    lastName: "Miller",
    passwordStrength: "Normal",
    role: "developer",
    visits: "81",
    status: "Normal",
  },
  {
    joined: new Date("08/30/97"),
    age: 19,
    firstName: "Ellie",
    lastName: "N/A",
    passwordStrength: "Critical",
    role: "designer",
    visits: "7",
    status: "Normal",
  },
  {
    joined: new Date("01/26/03"),
    age: 39,
    firstName: "Tommy",
    lastName: "Miller",
    passwordStrength: "Minor-Warning",
    role: "researcher",
    visits: "25",
    status: "Normal",
  },
];

const filters = [
  {
    type: "date",
    column: "joined",
    props: {
      DatePicker: {
        datePickerType: "range",
      },
      DatePickerInput: {
        start: {
          id: "date-picker-input-id-start",
          placeholder: "mm/dd/yyyy",
          labelText: "Joined start date",
        },
        end: {
          id: "date-picker-input-id-end",
          placeholder: "mm/dd/yyyy",
          labelText: "Joined end date",
        },
      },
    },
  },
  {
    type: "number",
    column: "visits",
    props: {
      NumberInput: {
        min: 0,
        id: "visits-number-input",
        invalidText: "A valid value is required",
        label: "Visits",
        placeholder: "Type a number amount of visits",
      },
    },
  },
  {
    type: "checkbox",
    column: "passwordStrength",
    props: {
      FormGroup: {
        legendText: "Password strength",
      },
      Checkbox: [
        {
          id: "normal",
          labelText: "Normal",
          value: "normal",
        },
        {
          id: "minor-warning",
          labelText: "Minor warning",
          value: "minor-warning",
        },
        {
          id: "critical",
          labelText: "Critical",
          value: "critical",
        },
      ],
    },
  },
  {
    type: "radio",
    column: "role",
    props: {
      FormGroup: {
        legendText: "Role",
      },
      RadioButtonGroup: {
        orientation: "vertical",
        legend: "Role legend",
        name: "role-radio-button-group",
      },
      RadioButton: [
        {
          id: "developer",
          labelText: "Developer",
          value: "developer",
        },
        {
          id: "designer",
          labelText: "Designer",
          value: "designer",
        },
        {
          id: "researcher",
          labelText: "Researcher",
          value: "researcher",
        },
      ],
    },
  },
  {
    type: "dropdown",
    column: "status",
    props: {
      Dropdown: {
        id: "marital-status-dropdown",
        ariaLabel: "Marital status dropdown",
        items: ["relationship", "complicated", "single"],
        label: "Marital status",
        titleText: "Marital status",
      },
    },
  },
];

const headers = [
  {
    Header: "Row Index",
    accessor: (row, i) => i,
    sticky: "left",
    id: "rowIndex", // id is required when accessor is a function.
  },
  {
    Header: "First Name",
    accessor: "firstName",
  },
  {
    Header: "Last Name",
    accessor: "lastName",
  },
  {
    Header: "Age",
    accessor: "age",
  },
  {
    Header: "Visits",
    accessor: "visits",
    filter: "number",
  },
  {
    Header: "Status",
    accessor: "status",
  },
  // Shows the date filter example
  {
    Header: "Joined",
    accessor: "joined",
    filter: "date",
    Cell: ({ cell: { value } }) => <span>{value?.toLocaleDateString()}</span>,
  },
  // Shows the checkbox filter example
  {
    Header: "Password strength",
    accessor: "passwordStrength",
    filter: "checkbox",
    width: 200,
    Cell: ({ cell: { value } }) => {
      const iconProps = {
        size: "sm",
        theme: "light",
        kind: value,
        iconDescription: value,
      };

      return (
        <span
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {iconProps.iconDescription}
        </span>
      );
    },
  },
  // Shows the checkbox filter example
  {
    Header: "Role",
    accessor: "role",
  },
];

const getBatchActions = () => {
  return [
    {
      label: "Duplicate",
      renderIcon: () => <Add size={16} />,
      onClick: () => console.log("Clicked batch action button"),
    },
    {
      label: "Add",
      renderIcon: () => <Add size={16} />,
      onClick: () => console.log("Clicked batch action button"),
    },
    {
      label: "Select all",
      renderIcon: () => <Add size={16} />,
      onClick: () => console.log("Clicked batch action button"),
      type: "select_all",
    },
    {
      label: "Publish to catalog",
      renderIcon: () => <Add size={16} />,
      onClick: () => console.log("Clicked batch action button"),
    },
    {
      label: "Download",
      renderIcon: () => <Add size={16} />,
      onClick: () => console.log("Clicked batch action button"),
    },
    {
      label: "Delete",
      renderIcon: () => <Add size={16} />,
      onClick: () => console.log("Clicked batch action button"),
      hasDivider: true,
      kind: "danger",
    },
  ];
};


export const DataGrid = () => {
  const [data] = useState(staticData);

  const columns = useMemo(() => headers, []);

  const datagridState = useDatagrid(
    {
      filterProps: {
        variation: "flyout", // default
        updateMethod: "batch", // default
        primaryActionLabel: "Apply", // default
        secondaryActionLabel: "Cancel", // default
        flyoutIconDescription: "Open filters", // default
        shouldClickOutsideToClose: false, // default
      },
      toolbarBatchActions: getBatchActions(),
      DatagridActions,
      batchActions: true,
      gridTitle: "Data Table Title",
      gridDescription: "Additional information if needed",
      columns,
      data,
      emptyStateTitle: "Empty state title",
      emptyStateDescription: "Description explaining why table is empty",
      emptyStateSize: "lg",
      multiLineWrapAll: true,
    },
    useFiltering
  );
  return <Datagrid datagridState={datagridState} />;
};

export const DatagridActions = (datagridState) => {
  const [_, setPanelOpen] = useState(false);
  const {
    selectedFlatRows,
    setGlobalFilter,
    CustomizeColumnsButton,
    RowSizeDropdown,
    rowSizeDropdownProps,
    useDenseHeader,
    filterProps,
    getFilterFlyoutProps,
    FilterFlyout,
    data,
  } = datagridState;
  const downloadCsv = () => {
    alert("Downloading...");
  };
  const refreshColumns = () => {
    alert("refreshing...");
  };

  const searchForAColumn = "Search";
  const isNothingSelected = selectedFlatRows.length === 0;
  const style = {
    "button:nthChild(1) > span:nthChild(1)": {
      bottom: "-37px",
    },
  };

  const renderFilterFlyout = () =>
    filterProps?.variation === "flyout" && (
      <FilterFlyout {...getFilterFlyoutProps()}
        filters={filters}
        variation="flyout"
        updateMethod="instant"
        primaryActionLabel="Apply"
        secondaryActionLabel="Cancel"
        flyoutIconDescription="Filters"
        shouldClickOutsideToClose={false}
       />
    );

  const renderFilterPanelButton = () =>
    filterProps?.variation === "panel" && (
      <Button
        kind="ghost"
        hasIconOnly
        tooltipPosition="bottom"
        renderIcon={(props) => <Filter size={16} {...props} />}
        iconDescription={filterProps.panelIconDescription}
        onClick={() => setPanelOpen((open) => !open)}
        disabled={data.length === 0}
        tooltipAlignment="start"
      />
    );

  const [modalOpen, setModalOpen] = useState(false);
  const [size, setSize] = useState(window.innerWidth);
  useLayoutEffect(() => {
    function updateSize() {
      setSize(window.innerWidth);
    }
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const mobileToolbar = size < 672 ? true : false;
  const items = ["Option 1", "Option 2", "Option 3"];
  return (
    isNothingSelected &&
    (useDenseHeader && useDenseHeader ? (
      <TableToolbarContent size="sm">
        {!mobileToolbar ? (
          <>
            {renderFilterPanelButton()}
            <div style={style}>
              <Button
                kind="ghost"
                hasIconOnly
                tooltipPosition="bottom"
                renderIcon={Download}
                iconDescription={"Download CSV"}
                onClick={downloadCsv}
              />
            </div>
            {renderFilterFlyout()}
            {CustomizeColumnsButton && (
              <div style={style}>
                <CustomizeColumnsButton />
              </div>
            )}
            <RowSizeDropdown {...rowSizeDropdownProps} />
            <div style={style}>
              <Button kind="ghost" renderIcon={Add} iconDescription={"Action"}>
                Ghost button
              </Button>
            </div>
          </>
        ) : (
          <OverflowMenu aria-label="Tools" size="md" flipped>
            <OverflowMenuItem
              itemText="Filter"
              hasDivider
              requireTitle
              onClick={() => setModalOpen(true)}
            />
            <OverflowMenuItem itemText="Export" hasDivider requireTitle />
            <OverflowMenuItem itemText="Settings" hasDivider requireTitle />
            <OverflowMenuItem itemText="Import items" hasDivider requireTitle />
            <OverflowMenuItem itemText="Create" hasDivider requireTitle />
          </OverflowMenu>
        )}
      </TableToolbarContent>
    ) : !mobileToolbar ? (
      <TableToolbarContent>
        {renderFilterPanelButton()}
        <TableToolbarSearch
          size="lg"
          id="columnSearch"
          persistent
          placeholdertext={searchForAColumn}
          onChange={(e) => setGlobalFilter(e.target.value)}
        />
        {renderFilterFlyout()}
        <div style={style}>
          <Button
            kind="ghost"
            hasIconOnly
            tooltipPosition="bottom"
            renderIcon={Restart}
            iconDescription={"Refresh"}
            onClick={refreshColumns}
          />
        </div>
        <div style={style}>
          <Button
            kind="ghost"
            hasIconOnly
            tooltipPosition="bottom"
            renderIcon={Download}
            iconDescription={"Download CSV"}
            onClick={downloadCsv}
          />
        </div>
        {CustomizeColumnsButton && (
          <div style={style}>
            <CustomizeColumnsButton />
          </div>
        )}
        <RowSizeDropdown {...rowSizeDropdownProps} />
      </TableToolbarContent>
    ) : (
      <TableToolbarContent>
        {renderFilterPanelButton()}
        <TableToolbarSearch
          size="xl"
          id="columnSearch"
          persistent
          placeholdertext={searchForAColumn}
          onChange={(e) => setGlobalFilter(e.target.value)}
        />
        {renderFilterFlyout()}
        <OverflowMenu
          aria-label="Tools"
          size="lg"
          flipped
          renderIcon={ChevronDown}
        >
          <OverflowMenuItem
            itemText="Filter"
            hasDivider
            requireTitle
            onClick={() => setModalOpen(true)}
          />
          <OverflowMenuItem itemText="Export" hasDivider requireTitle />
          <OverflowMenuItem itemText="Settings" hasDivider requireTitle />
          <OverflowMenuItem itemText="Import items" hasDivider requireTitle />
          <OverflowMenuItem itemText="Create" hasDivider requireTitle />
        </OverflowMenu>
        {modalOpen && (
          <ComposedModal
            size="lg"
            open={modalOpen && modalOpen}
            onClose={() => setModalOpen(false)}
          >
            <ModalHeader>
              <h4>Filters</h4>
            </ModalHeader>
            <ModalBody>
              <Dropdown
                initialSelectedItem={items[2]}
                items={items}
                titleText="Label"
                id="filter1"
              />
              <Dropdown
                initialSelectedItem={items[2]}
                items={items}
                titleText="Label"
                id="filter2"
              />
              <Dropdown
                initialSelectedItem={items[2]}
                items={items}
                titleText="Label"
                id="filter3"
              />
            </ModalBody>
            <ModalFooter
              primaryButtonText="Apply"
              secondaryButtonText="Cancel"
            />
          </ComposedModal>
        )}
      </TableToolbarContent>
    ))
  );
};

export default memo(DataGrid);
