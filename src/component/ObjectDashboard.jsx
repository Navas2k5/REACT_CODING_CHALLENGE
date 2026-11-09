import { useNavigate } from "react-router-dom"

function ObjectsDashboard() {

    const navigate = useNavigate()

    return (
        <div className="container mt-4">

            <h2>Objects Dashboard</h2>

            <button
                className="btn btn-primary me-3"
                onClick={() => navigate("/object-add")}>Add Object</button>

            <button
                className="btn btn-success"
                onClick={() => navigate("/object-list")}>Object List</button>

        </div>
    )
}

export default ObjectsDashboard
