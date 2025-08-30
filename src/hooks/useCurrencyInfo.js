// import { useEffect, useState } from "react";

// function useCurrencyInfo(from, to, amount) {
//     const [data, setData] = useState({})
//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const res = await fetchData(`https://api.frankfurter.app/latest?from=${from}&to=${to}`);
//                 const data = await res.json();
//             } catch (error) {
//                 console.log("Error fetching currency data:", error);
//             }
//         };
//         // const apiKey = `25776e950567b4021d2be15f`
//         // fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/pair/${from}/${to}`)
//       .then((res) => res.json()) // converting data into string to JSON format
//      .then((res) => setData(res))
//      }, [from, to])
//     // useEffect(() => {
//     //     fetchData();
//     // }, []);

//     console.log(data);
//     // useEffect(() => {
//     // console.log(data);
//     // }, [data])

//     return data;
// }

// export default useCurrencyInfo;

import { useEffect, useState } from "react";

function useCurrencyInfo(from) {
    const [data, setData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`https://api.frankfurter.app/latest?from=${from}`);
                const data = await res.json();
                // setData(data.rates);
                setData({
                    ...data.rates,
                    [from]: 1,
                })
            } catch (error) {
                console.log("Error fetching currency data:", error);
            }
        };
        fetchData();
    }, [from]);
    return data;
}

export default useCurrencyInfo;