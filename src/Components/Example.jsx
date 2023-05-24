import {
  Datagrid,
  useColumnOrder,
  useCustomizeColumns,
  useDatagrid,
  useFiltering,
  useInfiniteScroll,
  useNestedRows,
  useSelectRows,
  useStickyColumn,
  useSelectAllWithToggle,
} from '@carbon/ibm-products';
import { TableToolbarContent, TableToolbarSearch } from '@carbon/react';

import { memo, useRef, useState } from 'react';

const filters = [
  {
    type: 'number',
    column: 'visits',
    props: {
      NumberInput: {
        min: 0,
        id: 'visits-number-input',
        invalidText: 'A valid value is required',
        label: 'Visits',
        placeholder: 'Type a number amount of visits',
        // Add any other Carbon NumberInput props here
      },
    },
  },
  {
    type: 'checkbox',
    column: 'passwordStrength',
    props: {
      FormGroup: {
        legendText: 'Password strength',
        // Add any other Carbon FormGroup props here
      },
      Checkbox: [
        {
          id: 'normal',
          labelText: 'Normal',
          value: 'normal',
          // Add any other Carbon Checkbox props here
        },
        {
          id: 'minor-warning',
          labelText: 'Minor warning',
          value: 'minor-warning',
          // Add any other Carbon Checkbox props here
        },
        {
          id: 'critical',
          labelText: 'Critical',
          value: 'critical',
          // Add any other Carbon Checkbox props here
        },
      ],
    },
  },
  {
    type: 'radio',
    column: 'role',
    props: {
      FormGroup: {
        legendText: 'Role',
        // Add any other Carbon FormGroup props here
      },
      RadioButtonGroup: {
        orientation: 'vertical',
        legend: 'Role legend',
        name: 'role-radio-button-group',
        // Add any other Carbon RadioButtonGroup props here
      },
      RadioButton: [
        {
          id: 'developer',
          labelText: 'Developer',
          value: 'developer',
          // Add any other Carbon RadioButton props here
        },
        {
          id: 'designer',
          labelText: 'Designer',
          value: 'designer',
          // Add any other Carbon RadioButton props here
        },
        {
          id: 'researcher',
          labelText: 'Researcher',
          value: 'researcher',
          // Add any other Carbon RadioButton props here
        },
      ],
    },
  },
];

const data = [
  {
    activeSince: new Date('09/26/81'),
    age: 41,
    firstName: 'Joel',
    lastName: 'Miller',
    passwordStrength: 'normal',
    role: 'developer',
    visits: '81',
  },
  {
    activeSince: new Date('08/30/97'),
    age: 19,
    firstName: 'Ellie',
    lastName: 'N/A',
    passwordStrength: 'critical',
    role: 'designer',
    visits: '7',
  },
  {
    activeSince: new Date('01/26/03'),
    age: 39,
    firstName: 'Tommy',
    lastName: 'Miller',
    passwordStrength: 'minor-warning',
    role: 'researcher',
    visits: '25',
  },
];

const columns = [
  {
    Header: 'Row Index',
    accessor: (row, i) => i,
    sticky: 'left',
    id: 'rowIndex', // id is required when accessor is a function.
  },
  {
    Header: 'First Name',
    accessor: 'firstName',
  },
  {
    Header: 'Last Name',
    accessor: 'lastName',
  },
  {
    Header: 'Age',
    accessor: 'age',
    width: 50,
  },
  {
    Header: 'Visits',
    accessor: 'visits',
    filter: 'number',
    width: 60,
  },
  // Shows the checkbox filter example
  {
    Header: 'Password strength',
    accessor: 'passwordStrength',
    filter: 'checkbox',
  },
  // Shows the checkbox filter example
  {
    Header: 'Role',
    accessor: 'role',
    filter: 'radio',
  },
];

export const Example = () => {

  const datagridState = useDatagrid({
    gridTitle: "Data Table Title",
    gridDescription: "Additional information if needed",
    columns,
    data,
    DatagridActions,
    batchActions: true,
    emptyStateTitle: 'Empty state title',
    emptyStateDescription: 'Description explaining why table is empty',
    emptyStateSize: 'lg',
    multiLineWrapAll: true,
  },
    useFiltering,
    useCustomizeColumns,
    useColumnOrder,
    useInfiniteScroll,
    useNestedRows,
    useSelectRows,
    useStickyColumn,
    useSelectAllWithToggle,
  );
  return <Datagrid
    datagridState={datagridState} />;
};

const DatagridActions = (datagridState) => {
  const [open, setOpen] = useState(false);
  return (
    <TableToolbarContent>
      <TableToolbarSearch />
      <datagridState.FilterFlyout
        data={data}
        filters={filters}
        setAllFilters={() => { console.log('Set All', datagridState) }}
        onApply={() => { console.log('Apply', datagridState) }}
        onCancel={() => { console.log('Cancel', datagridState) }}
        onFlyoutOpen={() => { 
          console.log('Open', datagridState)
          // document.getElementsByClassName('c4p--datagrid-filter-flyout')[0].classList = 'c4p--datagrid-filter-flyout c4p--datagrid-filter-flyout--open c4p--datagrid-filter-flyout--instant';
          // document.getElementsByClassName('c4p--datagrid-filter-flyout__trigger')[0].classList = 'cds--btn--icon-only c4p--datagrid-filter-flyout__trigger c4p--datagrid-filter-flyout__trigger--open cds--btn cds--btn--ghost cds--btn--icon-only cds--btn cds--btn--ghost'
        }}
        onFlyoutClose={() => {
          console.log('Close', datagridState)
          // document.getElementsByClassName('c4p--datagrid-filter-flyout')[0].classList = 'c4p--datagrid-filter-flyout c4p--datagrid-filter-flyout--open c4p--datagrid-filter-flyout--instant';
          // document.getElementsByClassName('c4p--datagrid-filter-flyout__trigger')[0].classList = 'cds--btn--icon-only c4p--datagrid-filter-flyout__trigger c4p--datagrid-filter-flyout__trigger--open cds--btn cds--btn--ghost cds--btn--icon-only cds--btn cds--btn--ghost'
        }}
        variation='flyout'
        updateMethod='instant'
        primaryActionLabel='Apply'
        secondaryActionLabel='Cancel'
        flyoutIconDescription='Filters'
        shouldClickOutsideToClose={true}
      />
      <datagridState.CustomizeColumnsButton
        isTableSortable={true}
      />
    </TableToolbarContent>
  )
};

export default memo(Example);