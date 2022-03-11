import Pagination from 'components/pagination';
import MovieCard from 'components/moviecards';
import axios from 'axios';
import { BASE_URL } from 'utils/requests';
import {useState, useEffect} from 'react';
import { MoviePage } from 'types/movie';

function Listing() {

    const [pageNumber, setPageNumber] = useState(0);

    useEffect(() => {
        axios.get(`${BASE_URL}/movies?size=12&page=1`)
        .then(response =>{
            const data = response.data as MoviePage;
            setPageNumber(data.number);

            console.log(data);
        });
    }, []);

    return (
        <>
            <Pagination />

            <div className='container'>
                <div className='row'>
                    <div className='col-sm-6 col-md-4 col-lg-3 mb-3'>
                        <MovieCard />
                    </div>
                    <div className='col-sm-6 col-md-4 col-lg-3 mb-3'>
                        <MovieCard />
                    </div>
                    <div className='col-sm-6 col-md-4 col-lg-3 mb-3'>
                        <MovieCard />
                    </div>
                    <div className='col-sm-6 col-md-4 col-lg-3 mb-3'>
                        <MovieCard />
                    </div>
                    <div className='col-sm-6 col-md-4 col-lg-3 mb-3'>
                        <MovieCard />
                    </div>
                    <div className='col-sm-6 col-md-4 col-lg-3 mb-3'>
                        <MovieCard />
                    </div>
                    <div className='col-sm-6 col-md-4 col-lg-3 mb-3'>
                        <MovieCard />
                    </div>
                    <div className='col-sm-6 col-md-4 col-lg-3 mb-3'>
                        <MovieCard />
                    </div>
                    <div className='col-sm-6 col-md-4 col-lg-3 mb-3'>
                        <MovieCard />
                    </div>
                    <div className='col-sm-6 col-md-4 col-lg-3 mb-3'>
                        <MovieCard />
                    </div>
                    <div className='col-sm-6 col-md-4 col-lg-3 mb-3'>
                        <MovieCard />
                    </div>
                    <div className='col-sm-6 col-md-4 col-lg-3 mb-3'>
                        <MovieCard />
                    </div>
                </div>
            </div>


        </>

    );
}

export default Listing;