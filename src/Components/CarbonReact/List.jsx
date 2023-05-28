import {ContainedList, ContainedListItem, Link, Button, Grid, Column} from "@carbon/react";
import { Add } from "@carbon/react/icons";
import React from "react";

const List = () => {
    return (
        <ContainedList kind="on-page">
            <ContainedListItem>List item</ContainedListItem>
            <ContainedListItem>List item</ContainedListItem>
            <ContainedListItem>List item</ContainedListItem>
            <ContainedListItem>List item</ContainedListItem>
        </ContainedList>
    );
};
export default List