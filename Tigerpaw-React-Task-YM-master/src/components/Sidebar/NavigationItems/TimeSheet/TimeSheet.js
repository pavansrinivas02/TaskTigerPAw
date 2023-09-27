import './TimeSheet.css';

const TimeSheet = () => {
    return (
        <div className='main-block'>
            <div className="container d-flex align-items-start flex-column bd-highlight mb-3">
                <div className="mb-auto">
                    <div className='headings d-flex justify-content-between text-yellow m-3 p-3 bg-black'>
                        <span className='ml-4'>Project No</span>
                        <span>Start Time</span>
                        <span>End Time</span>
                        <span>Activity</span>
                        <span className='mr-3'>Remarks</span>
                    </div>
                    <form>
                        <div className="form-row mx-2">
                            <div className="form-group col-md-3 mx-1">
                                <input type="text" className="form-control" id="projectNo" />
                            </div>
                            <div className="form-group col-sm mx-2">
                                <input type="text" className="form-control" id="startTime" />
                            </div>
                            <div className="form-group col-sm mx-2">
                                <input type="text" className="form-control" id="endTime" />
                            </div>
                            <div className="form-group col-md-2 mx-2">
                                <input type="text" className="form-control" id="activity" />
                            </div>
                            <div className="form-group col-md-2 mx-2">
                                <input type="text" className="form-control" id="remarks" />
                            </div>
                        </div>
                    </form>
                </div>

                <div className="d-flex justify-content-center buttons my-0">
                    <button type="button" className="btn bg-yellow font-weight-bold m-3">Add Row</button>
                    <button type="button" className="btn bg-yellow font-weight-bold m-3">Submit</button>
                </div>
            </div>
        </div>
    );
}

export default TimeSheet;