function Greetings ({content,age}){
    return(
    <>
        <div>
            {content}
        </div>
        <div>
            {age}
        </div>
    </>
    )
}
export function app(){
    return(
<>
<Greetings content = {"nati"} age = {20}
/>
</>
    )
}
