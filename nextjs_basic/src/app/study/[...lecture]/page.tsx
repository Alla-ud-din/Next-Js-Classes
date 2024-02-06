export default function Lecture({params}: {params :{lecture: number[]}}){
    console.log(params);
    return(
        <div>
            <h1> Day of college {params.lecture[0]} </h1>
            <h2>Lecture No. {params.lecture[1]} </h2>
            <h3>Credit Hrs. {params.lecture[2]}</h3>
        </div>
    )
}