import {AiOutlineSearch} from 'react-icons/ai'
const Input = () => {
    return (  <>
    
    <div className='w-[400px] h-10 shadow rounded-full '>
        <div><AiOutlineSearch/></div>
        <div className='flex flex-col'>
            <div>Anywhere</div>
            <div className='flex  gap-[20px]'>
                <span>Any week</span>
                <span>Add guests</span>
            </div>
        </div>
        <div></div>
    </div>
    
    </>);
}
 
export default Input;