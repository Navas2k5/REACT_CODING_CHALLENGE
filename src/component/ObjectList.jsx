import { useDispatch, useSelector } from "react-redux"
import { deleteObjects, getAllObjects } from "../store/ObjectAction"
import { useEffect, useState } from "react"

function ObjectList() {

    const objects = useSelector(state => state.list)

    const [currentPage, setCurrentPage] = useState(1)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllObjects())
    }, [])

    function onDelete(id) {
        dispatch(deleteObjects(id))
    }

    const objectsPerPage = 10

    const totalPages = Math.ceil(objects.length / objectsPerPage)

    const startIndex = (currentPage - 1) * objectsPerPage

    const currentObjects = objects.slice(
        startIndex,
        startIndex + objectsPerPage
    )

    return (
        <div className="container mt-4">

            <h2>Object List</h2>

            <div className="row mt-4">

                {currentObjects.map((obj) => (

                    <div className="col-md-4 mb-4" key={obj.id}>

                        <div className="card h-100">

                            <div className="card-body">

                                <h5 className="card-title">
                                    {obj.name ?? "N/A"}
                                </h5>

                                <h6 className="card-subtitle mb-2 text-body-secondary">
                                    ID: {obj.id ?? "N/A"}
                                </h6>

                                <p className="card-text">
                                    Color: {obj.data?.color ?? obj.data?.Color ?? "N/A"}
                                </p>

                                <p className="card-text">
                                    Price: {obj.data?.price ?? obj.data?.Price ?? "N/A"}
                                </p>

                                <p className="card-text">
                                    CPU: {obj.data?.CPU ?? obj.data?.cpu ?? "N/A"}
                                </p>

                                <button className="btn btn-primary" onClick={(e) => {
                                    e.preventDefault()
                                    onDelete(obj.id)
                                }}>DELETE</button>

                            </div>

                        </div>

                    </div>

                ))}

            </div>

            <div className="d-flex justify-content-center align-items-center mb-4">

                <button
                    className="btn btn-primary me-3"
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(currentPage - 1)}
                >
                    Previous
                </button>

                <span>
                    Page {currentPage} of {totalPages}
                </span>

                <button
                    className="btn btn-primary ms-3"
                    disabled={currentPage === totalPages || totalPages === 0}
                    onClick={() => setCurrentPage(currentPage + 1)}
                >
                    Next
                </button>

            </div>

        </div>
    )
}

export default ObjectList