import { DisciplineFilterStyled, Input } from "./DisciplineFilterStyled"
import Select from "react-select"
export const DisciplineFliter = () => {
    const statusOptions = [
        { value: 'pending', label: 'Pending' },
        { value: 'assigned', label: 'Assigned' }
    ];
    const assigneeOptions = [
        { value: 'ayush', label: 'Ayush' },
        { value: 'harsh', label: 'Harsh' }
    ];
    return (
        <DisciplineFilterStyled>
            <div className="input-wrapper">
                <Input placeholder="Filter by Org/Contact" />
                <div className="search-icon">
                    <img src="/images/icon/search.svg"></img>
                </div>
            </div>
            <div className="seprator"></div>
            <div className="filter-group">
                <Select className="select-input" isSearchable={false} options={statusOptions} placeholder="Request type" />
                <Select className="select-input" isSearchable={false} options={assigneeOptions} placeholder="Assignee" />
                <div className="view-type">
                    <img className="view-icon" src="/images/icon/list.png"></img>
                    <img className="view-icon" src="/images/icon/grid.png"></img>
                </div>
            </div>
        </DisciplineFilterStyled>
    )
}