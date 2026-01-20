import {useEffect, useState} from "react";
import NaturePark from "../components/NaturePark.jsx";


function NatureParks() {

    const [parks, setParks] = useState(null);

    const loadParks = async () => {
        try {
            const result = await fetch("http://145.24.237.22:8001/parks", {
                headers: {
                    Accept: "application/json"
                }
            })
            const data = await result.json()
            setParks(data.items);
        } catch (e) {
            console.log(e);
        }


    }

    useEffect(() => {
        loadParks();
    }, []);

    return (

        <main>

            {parks ? (
                <>
                    <section
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 items-stretch">
                        {
                            parks.map((park) => (
                                <NaturePark key={park.id} park={park} parkDeleted={loadParks}></NaturePark>
                            ))
                        }
                    </section>

                </>
            ) : (
                <p>A little patience parks are loading</p>
            )}

            {/*{chessSpots.map((chessSpot) => (*/}
            {/*    <ChessSpot key={chessSpot.id} song={song}></ChessSpot>*/}


        </main>
    );
}

export default NatureParks;