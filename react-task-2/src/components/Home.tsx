import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  fetchDataFailure, fetchDataFromAPI, fetchDataRequest } from '../redux/actions/dataActions';
import { RootState } from '../redux/reducers';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state: RootState) => state.data);

  useEffect(() => {
    const fetchData = async () => {
        dispatch(fetchDataRequest());
  
        try {
          const cachedData = localStorage.getItem('cachedData');
          
          if (cachedData) {
            const parsedData = JSON.parse(cachedData);
            dispatch(fetchDataFromAPI(parsedData)); // Dispatch cached data
          } else {
            const response = await fetch('https://dummyjson.com/users');
            if (!response.ok) {
              throw new Error('Failed to fetch data');
            }
            const responseData = await response.json();
            localStorage.setItem('cachedData', JSON.stringify(responseData.users));
            dispatch(fetchDataFromAPI(responseData.users)); 
          }
        } catch (error: any) {
          dispatch(fetchDataFailure(error.message));
        }
      };
  
      fetchData();
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Data from API:</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.username}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
