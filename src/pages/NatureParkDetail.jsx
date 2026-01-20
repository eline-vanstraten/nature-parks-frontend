import {Link, useParams} from "react-router";

import {useEffect, useState} from "react";

function NatureParkDetail() {

    const [naturePark, setNaturePark] = useState(null)
    const params = useParams();

    const loadPark = async () => {
        try {
            const result = await fetch(`http://145.24.237.22:8001/parks/${params.id}`, {
                headers: {
                    Accept: "application/json"
                }
            });

            const data = await result.json()
            console.log(data)

            if (!data.error) {
                setNaturePark(data);
            }


        } catch (e) {
            console.log(e)
        }
    }


    useEffect(() => {
        loadPark();
    }, []);


    //
    //
    return (
        <>
            {naturePark ? (
                <article
                    className="max-w-5xl mx-auto bg-emerald-900 text-amber-50 rounded-xl shadow-xl overflow-hidden mt-5">

                    <div className="h-72 w-full overflow-hidden">
                        <img src={naturePark.imageUrl} alt="From API" className="w-full h-full object-cover"/>

                    </div>

                    <section className=" p-6 md:p-5 flex flex-col items-center">
                        {/*<div*/}
                        {/*    className="basis-l w-64 bg-green-800 text-pink-200 border-2 p-4 border-pink-200 rounded-md">*/}
                        <h2 className="tex-3xl font-extrabold text-center pb-2">{naturePark.name}</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="pb-2">
                                <div className="font-bold text-orange-300">State:</div>
                                <p className="text-amber-50">{naturePark.state}</p>
                            </div>

                            <div className="pb-2">
                                <div className="font-bold text-orange-300">Location:</div>
                                <p className="text-amber-50">{naturePark.location}</p>
                            </div>

                            <div className="pb-2">
                                <div className="font-bold text-orange-300">Trails:</div>
                                <p className="text-amber-50">{naturePark.trails}</p>
                            </div>

                            <div className="pb-2">
                                <div className="font-bold text-orange-300">Activities:</div>
                                <p className="text-amber-50">{naturePark.activities}</p>
                            </div>

                            <div className="pb-4 md:col-span-2">
                                <div className="font-bold text-orange-300">Opening hours</div>
                                <p className="text-amber-50">{naturePark.openingHours}</p>
                            </div>
                        </div>
                        <Link to={`/edit/${naturePark.id}`}
                              className="italic text-center hover:text-amber-50 hover:bg-emerald-700 rounded-2xl bg-amber-50 text-emerald-900 mb-2 p-2 pl-10 pr-10">Edit</Link>

                    </section>
                </article>
            ) : (
                <div>Nature Park is loading</div>
            )}
        </>

    )
}

export default NatureParkDetail