import { useState } from "react"
import { useDispatch } from "react-redux"
import { addObjects } from "../store/ObjectAction"
import { useNavigate } from "react-router-dom"

function ObjectAdd() {

    const [name, setName] = useState("")
    const [year, setYear] = useState("")
    const [price, setPrice] = useState("")
    const [cpu, setCpu] = useState("")
    const [success, setSuccess] = useState("")

    const navigate= useNavigate()

    const dispatch = useDispatch()

    const onAdd = async (e) => {

        e.preventDefault()

        const object = {
            name: name,
            data: {
                Year: Number(year),
                Price: Number(price),
                CPU: cpu
            }
        }

        try {
            await dispatch(addObjects(object))
            setSuccess("OBJECT ADDED SUCCESSFULLY")
            navigate("/object-list")

        } catch (err) {
            setSuccess("OBJECT ADDING FAILED")
            throw err
        }
    }

    return (
        <div className="container mt-4">

            <h2>Add Object</h2>

            <form onSubmit={onAdd}>

                <div className="mb-3">
                    {success &&
                        <div className="alert alert-success">
                            {success}
                        </div>}

                    <label className="form-label">Object Name</label>

                    <input
                        type="text"
                        className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />

                </div>

                <div className="mb-3">

                    <label className="form-label">Year</label>

                    <input
                        type="number"
                        className="form-control"
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                        required
                    />

                </div>

                <div className="mb-3">

                    <label className="form-label">Price</label>

                    <input
                        type="number"
                        step="0.01"
                        className="form-control"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                    />

                </div>

                <div className="mb-3">

                    <label className="form-label">CPU</label>

                    <input
                        type="text"
                        className="form-control"
                        value={cpu}
                        onChange={(e) => setCpu(e.target.value)}
                        required
                    />

                </div>

                <button type="submit" className="btn btn-success">
                    Add Object
                </button>

            </form>

        </div>
    )
}

export default ObjectAdd
