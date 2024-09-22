import { createFileRoute } from '@tanstack/react-router'
import debounce from 'lodash.debounce'
import { useCallback,  useState } from 'react'
import { useAppDispatch, useAppSelector } from '../store/store'
import { login, logout } from '../store/features/auth.slice'
import setAuthToken from '../utils/set-auth-token.util'
import { fetchPackages } from '../store/features/package.slice'
import Destinations from '../components/tour/Destinations'
import Products from '../components/tour/Products'

export const Route = createFileRoute('/tour')({
  component: () => <Tour />,
})

const Tour = ()=>{
    
    const [searchQuery,setSearchQuery] = useState<string>('')

    const {destinations,products,status,task}= useAppSelector(state=>state.package)
    const authStore= useAppSelector(state=>state.auth)
    const dispatch = useAppDispatch();
    // useEffect(()=>{
    //     dispatch(logout())
    // },[])
    const debouncedSearchPackages = useCallback(
        debounce(async (searchQuery) => {
          if (searchQuery.trim() === "") {
            // dispatch(fetchProducts({ page: 1, limit: rowsPerPage, provider: id,category:selectedCategory }));
            return;
          }
          if(authStore.isAuthenticated){
            dispatch(fetchPackages(searchQuery));
          }else {
            const resultAction = await  dispatch(login({email:'abebe2@yopmail.com',password:'Password.1'}));
            if (login.fulfilled.match(resultAction)) {  
              setAuthToken(resultAction.payload.token)
              console.log('resultAction.payload');
              console.log(resultAction.payload);
              
        
              dispatch(fetchPackages(searchQuery));
            }
  
            if (login.rejected.match(resultAction)) {  
              dispatch(logout())
            }
          }
         
        
        }, 500), // 500 milliseconds debounce delay
        [dispatch]
      );
      const handleSearchInput = (
        e: React.ChangeEvent<HTMLInputElement >
      ) => {
        if (e.target.value) {
          setSearchQuery(e.target.value);
          debouncedSearchPackages(e.target.value);
        } else {
            setSearchQuery(e.target.value);
          dispatch(fetchPackages(''));
        }
      };
const loading = status==='loading' && task==='fetch-destinations'
    return(<div className='h-full min-h-screen flex items-center justify-center'>

<form className="max-w-md w-96 mx-auto">
<h2 className='text-sm font-medium text-gray-900'>Search for Tours</h2>
  <div className="mb-5">
    <label htmlFor="search" className="block mb-2 text-sm font-medium text-gray-600 dark:text-white">Search for a place or activity</label>
    <input type="text" id="search" className=" bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={searchQuery} required onChange={handleSearchInput} placeholder='Eg: Lagos, Nigeria' />
   

    {loading? <div className='animate-pulse mt-2 flex flex-col gap-1'>

        <div className="h-4 bg-gray-200 rounded-lg" ></div>
        <div className="h-4 bg-gray-200 rounded-lg" ></div>
        <div className="h-4 bg-gray-200 rounded-lg" ></div>
    </div>: searchQuery && <div className='flex flex-col gap-1 py-2  bg-gray-50 mt-2'>
        <Destinations queryString={searchQuery} destinations={destinations}/>
        <Products queryString={searchQuery} products={products}/>
    </div> }
    
  </div>
  <div className="mb-5">
    <label htmlFor="search" className="block mb-2 text-sm font-medium text-gray-600 dark:text-white">When</label>
    <input type="date" id="date" className=" bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required  placeholder='Select dates' />
    </div>
  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm !w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search for tours</button>
</form>
    </div>)
}

export default Tour;