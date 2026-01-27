import {Link} from "react-router";
import {useState} from "react";

function NaturePark({park, parkDeleted}) {

    //add park to favorite
    const [favorite, setFavorite] = useState(park.isFavorite ?? false);

    const deletePark = async () => {
        try {
            const result = await fetch(`http://145.24.237.22:8001/parks/${park.id}`, {
                method: "DELETE",
                headers: {
                    Accept: "application/json"
                }
            })

            console.log(result);

            if (result.status === 204) {
                parkDeleted();
            }
        } catch (e) {
            console.log(e);
        }
    }

    //add park to favorite
    const favoritePark = async () => {
        try {

            const result = await fetch(`http://145.24.237.22:8001/parks/${park.id}`, {
                method: "PATCH",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    isFavorite: !favorite
                })
            });

            if (!result.ok) {
                throw new Error("Favorite updaten mislukt")
            }

            const updatedPark = await result.json();

            setFavorite(updatedPark.isFavorite);

        } catch (e) {
            console.log(e);
        }
    }

    return (

        <article className="h-full">
            <section className=" h-full">
                <div
                    className="h-full flex flex-col bg-emerald-900 text-amber-50 border-2 p-4 border-stone-400 rounded-md w-full">
                    <h2 className="font-extrabold text-center pb-2">{park.name}</h2>
                    <div className="h-40 flex items-center justify-center overflow-hidden">
                        <img src={park.imageUrl} alt={park.name} className="object-cover h-full w-full pb-4"/>
                    </div>
                    <h3 className="font-bold pb-4 text-orange-400 ">{park.state}</h3>

                    <div className="flex-grow"/>

                    <button onClick={favoritePark} className={`mb-2 rounded-2xl ${
                        favorite
                            ? "bg-yellow-400 text-black"
                            : "bg-gray-300 text-gray-700"
                    }`}>
                        {favorite ? "⭐ Favorite" : "☆ Favorite"}
                    </button>

                    <Link to={`/natureParks/${park.id}`}
                          className="italic text-center hover:text-amber-50 hover:bg-emerald-700 rounded-2xl bg-amber-50 text-emerald-900 mb-2">Read
                        more</Link>
                    <button onClick={deletePark}
                            className="italic bg-red-700 text-amber-50 hover:text-amber-50 hover:bg-red-800 rounded-2xl ">Delete
                    </button>

                </div>


            </section>
        </article>
    )
}

export default NaturePark