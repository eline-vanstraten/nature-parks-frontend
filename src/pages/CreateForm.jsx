import {useState} from "react";
import {useNavigate} from "react-router";

function CreateForm() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        state: '',
        location: '',
        trails: '',
        activities: '',
        openingHours: '',
        imageUrl: ''
    });

    const handleInputChange = (e) => {
        const {name, value} = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    };

    const savePark = async () => {
        try {


            //collectie opnieuw laden om bij te werken na verzending
            const result = await fetch("http://145.24.237.22:8001/parks", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                    Accept: "application/json"
                },
                //zet de js data om naar json om te sturen naar de server
                body: JSON.stringify(formData)
            })

            const data = await result.json()

            if (result.status === 201) {
                //redirect to natureParkDetai;
                navigate(`/natureParks/${data.id}`)
            } else {
                //show validation errors to user
                console.log(data.error)
            }


        } catch (error) {
            console.log("Er ging iets mis bij POST", error)
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault()

        savePark()
        console.log("formulier verzonden", formData)

    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-2 py-4 p-4">
            <div className="flex flex-col">
                <label htmlFor="name">Park name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="border"
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="state">State:</label>
                <input
                    type="text"
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    className="border"
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="location">Location:</label>
                <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    className="border"
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="trails">Trails:</label>
                <input
                    type="text"
                    id="trails"
                    name="trails"
                    value={formData.trails}
                    onChange={handleInputChange}
                    className="border"
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="activities">Activities:</label>
                <input
                    type="text"
                    id="activities"
                    name="activities"
                    value={formData.activities}
                    onChange={handleInputChange}
                    className="border"
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="openingHours">Opening hours:</label>
                <input
                    type="text"
                    id="openingHours"
                    name="openingHours"
                    value={formData.openingHours}
                    onChange={handleInputChange}
                    className="border"
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="imageUrl">Image:</label>
                <input
                    type="text"
                    id="imageUrl"
                    name="imageUrl"
                    value={formData.imageUrl}
                    onChange={handleInputChange}
                    className="border"
                />
            </div>

            <button type="submit" className="rounded bg-green-700 text-white p-2">Verzenden</button>
        </form>
    );
}

export default CreateForm;