import { Link } from "react-router-dom";
import Select from "react-select";
import { DisciplineDetailsStyled } from "./DiciplineDetailsStyled"

export const DisciplineDetails = () => {
    const assigneeOptions = [
        { value: 'ayush', label: 'Ayush' },
        { value: 'harsh', label: 'Harsh' }
    ];
    return (
        <DisciplineDetailsStyled>
            <button type="button" class="btn">
                <Link to="/"> Back to List</Link>
            </button>
            <h2 className="heading">
                Infobeans Design
            </h2>
            <div className="card">
                <div className="card-body shadow-sm">
                    <form>
                        <div className="row">
                            <div className="col">
                                <label for="orgId">Org. ID:</label>
                                <input type="email" className="form-control" aria-describedby="emailHelp" value="44813" readOnly />
                            </div>
                            <div className="col">
                                <label for="orgContact">Org. Contact</label>
                                <input type="text" className="form-control" readOnly value="8120021008" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <label for="orgStatus">Assigned Status</label>
                                <input type="text" className="form-control" readOnly value="Assigned" />
                            </div>
                            <div className="col">
                                <label for="orgAssignee">Assignee</label>
                                <Select className="select-input" value={assigneeOptions[0]} options={assigneeOptions} placeholder="Assignee" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label for="orgAttachments">Attachments</label>
                            <ul>
                                <li ><a href='/somefile.txt' download>Attachment 1</a></li>
                                <li><a href='/somefile.txt' download>Attachment 2</a></li>
                            </ul>
                        </div>

                    </form>
                </div>
            </div>
        </DisciplineDetailsStyled>
    )
}