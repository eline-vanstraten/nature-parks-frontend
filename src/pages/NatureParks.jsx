import {useEffect, useState} from "react";
import NaturePark from "../components/NaturePark.jsx";


function NatureParks() {

    const [parks, setParks] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [pagination, setPagination] = useState(null);

    const loadParks = async () => {
        try {
            const result = await fetch(`http://145.24.237.22:8001/parks?page=${currentPage}&limit=8`, {
                headers: {
                    Accept: "application/json"
                }
            })
            const data = await result.json()
            setParks(data.items);
            setPagination(data.pagination);
        } catch (e) {
            console.log(e);
        }


    }

    useEffect(() => {
        loadParks();
    }, [currentPage]);

    return (

        <main>

            {parks ? (
                <>
                    {pagination && (
                        <div className="flex items-center justify-center gap-4 mt-6">
                            <button disabled={!pagination._links.previous}
                                    onClick={() => setCurrentPage(currentPage - 1)} className="`p-2 rounded-md font-semibold transition
                ${pagination._links.previous ? 'bg-stone-400 hover:text-sky-900 hover:underline text-sky-900' : ' text-sky-700  cursor-not-allowed'}`"> Previous
                            </button>

                            <span>
                                 Page {pagination.currentPage} of {pagination.totalPages}
                            </span>

                            <button disabled={!pagination._links.next}
                                    onClick={() => setCurrentPage(currentPage + 1)} className="`p-2 rounded-md font-semibold transition
                ${pagination._links.previous ? 'bg-stone-400 hover:text-sky-900 hover:underline text-sky-900' : ' text-sky-700  cursor-not-allowed'}`"> Next
                            </button>
                        </div>

                    )}

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
                <p>A little patience, parks are loading</p>
            )}


        </main>
    );
}

export default NatureParks;