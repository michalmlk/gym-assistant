import React, {useContext} from "react";
import {Wrapper, StyledTrainings} from "./TrainingGrid.styles";
import {DataContext} from "../../../context/DataProvider";
import {DataGrid, GridRowsProp, GridColDef} from '@mui/x-data-grid';
import type {} from '@mui/x-data-grid/themeAugmentation';

const TrainingGrid = () => {
    const {trainings} = useContext(DataContext);

    const rows: GridRowsProp = trainings;

    const columns: GridColDef[] = [
        {field: 'duration', headerName: 'Duration', flex: 1, sortable: true},
        {field: 'intensity', headerName: 'Intensity', flex: 1, sortable: true},
        {field: 'activityType', headerName: 'Type', flex: 1, sortable: false},
    ];


    return (
        <Wrapper>
            <StyledTrainings>
                <DataGrid rows={rows} columns={columns} />
            </StyledTrainings>
        </Wrapper>
    )
}

export default TrainingGrid;