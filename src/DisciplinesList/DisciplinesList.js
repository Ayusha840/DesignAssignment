import React, { useMemo } from 'react'
import {
    Link
} from "react-router-dom"
import { DisciplineFliter } from "./DisciplineFilters/DisciplineFilter"
import { DisciplinesListStyled } from "./DisciplinesListStyled"
import Table from './Table'

export const DisciplinesList = () => {
    const columns = useMemo(
        () => [
            {
                Header: "Organization",
                columns: [
                    {
                        Header: "ID",
                        accessor: "org.id",
                        Cell: row => (
                            <Link to="/details">{row.value}</Link>
                        ),
                    },
                    {
                        Header: "Name",
                        accessor: "org.name",
                    },
                    {
                        Header: "Contact",
                        accessor: "org.contact"
                    }
                ]
            },
            {
                Header: "Details",
                columns: [
                    {
                        Header: "Assignee Status",
                        accessor: "org.assigneeStatus"
                    },
                    {
                        Header: "Assignee",
                        accessor: "org.assignee",
                        Cell: row => (
                            <input className="assignee-input" value={row.value}></input>
                        ),
                    },
                    {
                        Header: "Attachment",
                        accessor: 'org.attachment',
                        Cell: row => (
                            <div>
                                <a href="/">View</a>/
                                <a href="/" target="_blank">download</a>
                            </div>
                        ),
                    },
                ]
            }
        ],
        []
    );



    const data = [
        {
            "org": {
                "id": 44813,
                "name": "Infobeans Design",
                "contact": "8120021008",
                "assigneeStatus": 'Pending',
                "assignee": '',
                "attachment": 'test.ts'
            }
        },
        {
            "org": {
                "id": 44814,
                "name": "Infobeans Design 2",
                "contact": "8850199932",
                "assigneeStatus": 'Assigned',
                "assignee": 'Ayush Agrawal',
                "attachment": 'test2.ts'
            }
        }
    ]


    return (
        <DisciplinesListStyled>
                <div className="header">Organization's List</div>
                <DisciplineFliter />
                <div className="table-container">
                    <Table columns={columns} data={data} />
                </div>
        </DisciplinesListStyled>
    )
}