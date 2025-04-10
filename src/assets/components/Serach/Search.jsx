export default function Search({handleChange}){
    return(
        <input onChange={handleChange} type="text" placeholder="Поиск..." style={{border: '1px solid darkblue', marginBottom: '20px', padding: '10px' }}/>
    )
}