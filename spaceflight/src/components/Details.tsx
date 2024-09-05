const Details = ()=>{
    const URL = "https://api.spaceflightnewsapi.net/v4/articles";

//   const [flight, setFlight] = useState<SingleFlight | null>(null);

  const fetchIdSpaceflight = () => {
    fetch(URL)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nel recupero dei libri");
        }
      })
      .then((idOfFlight) => {
        console.log(idOfFlight);
        // setFlight(arrayOfFlight);
      })
      .catch((err) => {
        console.log(err);
      });
  };
//   useEffect(() => {
//     fetchSpaceflight();
//   }, []);
return (
    <h2>ciao</h2>
)
}
export default Details