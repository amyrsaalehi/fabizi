import {ContainedList, ContainedListItem} from "@carbon/react";
import React from "react";

const MyContainedList = () => {
    return (
        <ContainedList kind="on-page">
            <ContainedListItem>List item</ContainedListItem>
            <ContainedListItem>List item</ContainedListItem>
            <ContainedListItem>List item</ContainedListItem>
            <ContainedListItem>List item</ContainedListItem>
        </ContainedList>
    );
};
export default MyContainedList